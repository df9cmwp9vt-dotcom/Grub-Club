'use strict';
const aliases={
  chicken:['chicken breasts','chicken breast','boneless chicken','chicken thigh','chicken thighs','chicken fillets'],
  rice:['basmati','basmati rice','white rice','long grain rice','long-grain rice','jasmine rice'],
  garlic:['garlic cloves','garlic clove','cloves of garlic','fresh garlic'],'curry powder':['mild curry powder','hot curry powder','medium curry powder'],
  pasta:['penne','macaroni','fusilli','spaghetti','dried pasta'], tomatoes:['tomato','fresh tomatoes','cherry tomatoes'],
  'tinned tomatoes':['canned tomatoes','chopped tomatoes','tinned chopped tomatoes','canned chopped tomatoes','tin of tomatoes'],
  cheese:['cheddar','cheddar cheese','grated cheese'],beans:['baked beans'],eggs:['egg'],potatoes:['potato','white potatoes'],
  'sweet potatoes':['sweet potato'], onion:['onions','red onion','brown onion'], pepper:['bell peppers','bell pepper','red pepper','peppers'],
  'frozen peas':['peas','garden peas'], chickpeas:['chickpea','canned chickpeas','tinned chickpeas'], mushrooms:['mushroom','button mushrooms'],
  'soy sauce':['soya sauce'], 'beef mince':['minced beef','ground beef'],yoghurt:['yogurt','natural yoghurt','plain yogurt','plain yoghurt'],
  wraps:['tortillas','tortilla','tortilla wraps'],carrot:['carrots'],banana:['bananas'],sausages:['sausage'],sweetcorn:['sweet corn'],
  oats:['rolled oats','porridge oats'],basil:['fresh basil','basil leaves'],'stock cube':['stock cubes','vegetable stock cube']
};
const clean=s=>String(s??'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim().slice(0,90);
const aliasMap=new Map(Object.entries(aliases).flatMap(([key,words])=>words.map(word=>[word,key])));
const canon=s=>aliasMap.get(clean(s))||clean(s);
const parseIngredients=s=>[...new Set(s.split(/[,;\n]+|\s+and\s+/i).map(canon).filter(Boolean))];
const basicSet=new Set(['salt','oil','water','boiling water','ground black pepper']);
const category = r=>r.category||([5,7,17,18].includes(r.id)?'Breakfast':r.name.toLowerCase().includes('pasta')?'Pasta & rice':r.tags.includes('vegan')?'Vegetarian & vegan':r.equip.includes('microwave')?'Microwave & no-oven':'Quick & easy');
function prep(r){
  const ings={...r.ings};
  for(const basic of r.basics||[])if(!basicSet.has(basic)&&!ings[basic])ings[basic]='to taste';
  const equip=r.id===84?['blender']:r.equip;
  return {...r,category:category(r),equip,ings,basics:(r.basics||[]).filter(k=>basicSet.has(k)),keys:Object.keys(ings).map(canon)};
}
const book=recipes.map(prep);
const byId=new Map(book.map(r=>[r.id,r]));
const allKeys=[...new Set(book.flatMap(r=>r.keys))].sort();
const preferred=[102,105,106,101,103,104,109,110,108,18,63,112,107,111,3,8];
const order=new Map([...new Set([...preferred,...book.slice(87).map(r=>r.id),...book.map(r=>r.id)])].map((id,i)=>[id,i]));
const defaults={budget:'any',time:'any',equip:'any',diet:'any',mode:'all',category:'all'};
function match(r,pantry,priority){
  const missing=r.keys.filter(k=>!pantry.includes(k));
  return {r,missing,have:r.keys.length-missing.length,priority:r.keys.filter(k=>pantry.includes(k)&&priority.includes(k)).length};
}
function searchMatch(r,query){
  const q=clean(query);if(!q)return true;
  const text=r.name.toLowerCase()+' '+r.keys.join(' ')+' '+r.category.toLowerCase();
  return q.split(/[\s,]+/).filter(Boolean).every(word=>text.includes(word))||parseIngredients(q).every(key=>r.keys.includes(key));
}
function ranked(s){
  const f=s.filters;
  return book.filter(r=>{
    if(!searchMatch(r,s.q))return false;
    if(f.budget!=='any'&&r.cost>Number(f.budget)||f.time!=='any'&&r.time>Number(f.time))return false;
    if(f.diet!=='any'&&!r.tags.includes(f.diet)||f.equip!=='any'&&r.equip.some(k=>k!==f.equip)||f.category!=='all'&&r.category!==f.category)return false;
    return !(s.collection==='quick'&&r.time>20||s.collection==='budget'&&r.cost>1.5||s.collection==='veg'&&!r.tags.includes('vegetarian')||s.collection==='air'&&!r.equip.includes('air fryer'));
  }).map(r=>match(r,s.ingredients,s.priority)).filter(row=>f.mode==='now'?row.missing.length===0:f.mode==='near'?row.have&&row.missing.length>0&&row.missing.length<=2:true).sort((a,b)=>{
    if(s.sort==='fast'&&a.r.time!==b.r.time)return a.r.time-b.r.time;
    if(s.sort==='cheap'&&a.r.cost!==b.r.cost)return a.r.cost-b.r.cost;
    if(s.ingredients.length){
      const rank=Number(!b.missing.length)-Number(!a.missing.length)||Number(b.have>0)-Number(a.have>0)||b.priority-a.priority||b.have/b.r.keys.length-a.have/a.r.keys.length||b.have-a.have;
      if(rank)return rank;
    }
    return order.get(a.r.id)-order.get(b.r.id);
  });
}
function part(value){
  const m=value.match(/^(\d+\/\d+|\d+(?:\.\d+)?|half|quarter)\b\s*(.*)$/i);if(!m)return null;
  const n=m[1]==='half'?.5:m[1]==='quarter'?.25:m[1].includes('/')?m[1].split('/').reduce((a,b)=>Number(a)/Number(b)):Number(m[1]);
  return {n,unit:m[2].trim().replace(/^(cloves|slices|packets|portions|tins|pouches)\b/,word=>word==='pouches'?'pouch':word.slice(0,-1))};
}
function formatQty(n,unit){
  let u=unit.replace(/^(clove|slice|tin|packet|portion|pouch)\b/,w=>n>1?(w==='pouch'?w+'es':w+'s'):w).replace(/^(small|large) tin$/,w=>n>1?w+'s':w);
  return [Number(n.toFixed(2)),u].filter(x=>x!=='').join(' ');
}
const scaled=(qty,n)=>qty.split(' or ').map(v=>{const p=part(v);return p?formatQty(p.n*n,p.unit):v}).join(' or ');
function combine(values){
  const units=new Map(),others=new Set();
  for(const text of values){const p=part(text.split(' or ')[0]);if(p)units.set(p.unit,(units.get(p.unit)||0)+p.n);else if(text)others.add(text)}
  return [...[...units].map(([unit,n])=>formatQty(n,unit)),...others].join(' + ');
}
function missingItems(r,pantry,n){
  return Object.entries(r.ings).map(([key,qty])=>[canon(key),scaled(qty,n)]).filter(([key])=>!pantry.includes(key));
}
function updateSource(list,key,items){
  const amounts=new Map(items),next=list.map(row=>({...row,parts:{...row.parts}}));
  for(const row of next)if(!amounts.has(row.name))delete row.parts[key];
  for(const [name,qty] of amounts){
    let row=next.find(x=>x.name===name);if(!row){row={name,parts:{},done:false};next.push(row)}
    if(row.parts[key]!==qty)row.done=false;
    row.parts[key]=qty;
  }
  return next.filter(x=>Object.keys(x.parts).length);
}
function dates(){const d=new Date();return Array.from({length:7},(_,i)=>new Date(d.getFullYear(),d.getMonth(),d.getDate()+i,12))}
function dateKey(d){return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')}