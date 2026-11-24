'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paths={
 basket:'<path d="m7 9 5-6 5 6M3 10h18l-2 10H5Zm6 3v4m6-4v4"/>',bag:'<path d="M5 8h14l1 13H4Zm4 1V7a3 3 0 016 0v2"/>',bookmark:'<path d="M6 4h12v17l-6-4-6 4Z"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v5m10-5v5M3 11h18m-13 4h3"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.2 5.8L8 16l2.2-5.8Z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',coin:'<circle cx="12" cy="12" r="9"/><path d="M15 8c-3-2-5 0-4 3s0 4-2 5h6m-6-4h5"/>',search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',sliders:'<path d="M3 7h9m4 0h5M3 17h4m4 0h10"/><circle cx="14" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',check:'<path d="m4 12 5 5L20 6"/>'};
const icon=name=>`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
const money=n=>'£'+n.toFixed(2);
const navigation=[['discover','Discover','compass'],['pantry','My kitchen','basket'],['saved','Saved','bookmark'],['plan','Meal plan','calendar'],['shopping','Shopping','bag']];
const collections=[['all','All recipes'],['quick','20 min or less'],['budget','£1.50 or less'],['veg','Vegetarian'],['air','Air fryer']];
const popular=['chicken','rice','garlic','curry powder','eggs','pasta','cheese','potatoes','onion','tinned tomatoes','chickpeas','spinach','frozen peas','bread','mushrooms','tuna'];
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem('gc_'+key))??fallback}catch{return fallback}};
const savedList=key=>{const x=read(key,[]);return Array.isArray(x)?x:[]};
const unique=arr=>[...new Set(arr.filter(x=>typeof x==='string').map(canon).filter(Boolean))];
const plan=read('mealplan',{});
const state={page:'discover',ingredients:unique(savedList('ingredients')),priority:unique(savedList('priority')),fav:[...new Set(savedList('fav').map(Number).filter(x=>byId.has(x)))],
 shopping:savedList('shopping').filter(x=>x&&typeof x.name==='string').map(x=>({name:canon(x.name),done:!!x.done,parts:x.parts&&typeof x.parts==='object'?Object.fromEntries(Object.entries(x.parts).filter(([,v])=>typeof v==='string')):{legacy:String(x.qty||'as needed')}})),
 plan:Object.fromEntries(Object.entries(plan&&typeof plan==='object'?plan:{}).filter(([day,p])=>/^\d{4}-\d\d-\d\d$/.test(day)&&p&&byId.has(p.id)&&Number.isInteger(p.n)&&p.n>0&&p.n<=8)),
 filters:{...defaults},q:'',collection:'all',sort:'best',visible:12,dialog:'',id:0,n:1,step:0,day:null};
let toastTimer,opener;
function say(msg){
  if($('sheet').open&&$('dialogStatus')){$('dialogStatus').textContent=msg;return}
  const t=$('toast');t.textContent=msg;t.className='show';clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.className='',2500);
}
function write(key,value){try{localStorage.setItem('gc_'+key,JSON.stringify(value))}catch{say('This browser can keep your changes for this visit only.')}}
function navButtons(mobile){return navigation.filter(([p])=>mobile||p!=='shopping').map(([p,name,i])=>`<button class="navitem ${state.page===p?'active':''}" data-nav="${p}" ${state.page===p?'aria-current="page"':''}>${mobile?icon(i):''}${name}</button>`).join('')}
function nav(){const n=state.shopping.filter(x=>!x.done).length;$('topnav').innerHTML=navButtons(false);$('mobileNav').innerHTML=navButtons(true);$('bag').innerHTML=`${icon('bag')} Shopping list${n?` <b>${n}</b>`:''}`;$('bag').classList.toggle('active',state.page==='shopping')}
function page(p,scroll=true){
  state.page=navigation.some(([id])=>id===p)?p:'discover';nav();$('discover').hidden=state.page!=='discover';$('subpage').hidden=state.page==='discover';
  if(state.page==='discover')results();else if(p==='pantry')pantry();else if(p==='saved')favourites();else if(p==='plan')planner();else shopping();
  if(scroll){window.scrollTo(0,0);$('main').focus({preventScroll:true})}
}
const meta=r=>`<span>${icon('clock')}${r.time} min</span><span>${icon('coin')}~${money(r.cost)} / serving</span>`;
function card({r,missing,have,priority}){
  const saved=state.fav.includes(r.id),label=r.category==='Meat & chicken'?'Meat & poultry':r.category==='Vegetarian & vegan'?(r.tags.includes('vegan')?'Plant-based':'Vegetarian'):r.category;
  const status=state.ingredients.length?`<span class="match ${missing.length?'near':''}">${!missing.length?'Ready to cook':!have?'No pantry ingredients matched':missing.length<=2?'Add '+missing.map(esc).join(' + '):`${have} of ${r.keys.length} ingredients in your kitchen`}${priority?' · Uses priority item':''}</span>`:'';
  return `<article class="card"><button class="cardmain" data-open="${r.id}" aria-label="View ${esc(r.name)}"><span class="pic"><img src="images/${r.id}.jpg" loading="lazy" decoding="async" alt=""></span><span class="cardcopy"><span class="kicker">${esc(label)}</span><span class="cardname">${esc(r.name)}</span><span class="meta">${meta(r)}</span>${status}</span></button><button class="round bookmark" data-save="${r.id}" aria-label="${saved?'Unsave':'Save'} ${esc(r.name)}" aria-pressed="${saved}">${icon('bookmark')}</button></article>`;
}
function empty(title,copy,attrs='',cta=''){return `<div class="empty"><span class="empty-icon">${icon('basket')}</span><h3>${esc(title)}</h3><p>${esc(copy)}</p>${attrs?`<button class="outline" ${attrs}>${esc(cta)}</button>`:''}</div>`}
const heading=(pre,title,desc)=>`<div class="page-head"><div class="eyebrow">${esc(pre)}</div><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>`;
function results(){
  const pantryCount=state.ingredients.length;
  $('pantrySummary').hidden=pantryCount===0;
  $('pantrySummary').textContent=pantryCount===1?'1 ingredient in your kitchen.':pantryCount+' ingredients in your kitchen.';
  $('collections').innerHTML=collections.map(([k,v])=>`<button class="chip" data-collection="${k}" aria-pressed="${state.collection===k}">${v}</button>`).join('');
  const count=Object.keys(defaults).filter(k=>defaults[k]!==state.filters[k]).length;$('filterN').textContent=count?`(${count})`:'';
  const rows=ranked(state);$('resultCount').textContent=`${rows.length} recipes${state.ingredients.length?' · '+rows.filter(x=>!x.missing.length).length+' ready to cook':''}`;
  $('results').innerHTML=rows.length?rows.slice(0,state.visible).map(card).join(''):empty('No recipes match these choices',state.filters.mode==='now'?'Show all suggestions to see which ingredients would unlock another meal.':'Try another search or reset your filters.','data-reset','Show all suggestions');
  $('more').hidden=rows.length<=state.visible;$('more').textContent=`Show more recipes (${Math.max(0,rows.length-state.visible)} left)`;
}
function reset(){state.filters={...defaults};state.q='';state.collection='all';state.sort='best';state.visible=12;$('recipeQuery').value='';$('sort').value='best'}
function favourites(){const rows=state.fav.map(id=>match(byId.get(id),state.ingredients,state.priority));$('subpage').innerHTML=heading('Your collection','Saved recipes',`${rows.length} bookmarked on this device.`)+`<div class="grid">${rows.length?rows.map(card).join(''):empty('Keep the recipes you love','Tap the bookmark on a recipe to save it here.','data-nav="discover"','Explore recipes')}</div>`}
function toggleFav(id){const was=state.fav.includes(id);state.fav=was?state.fav.filter(x=>x!==id):[id,...state.fav];write('fav',state.fav);if(state.page==='saved')favourites();else if(state.page==='discover')results();if(state.dialog==='recipe')detail(false);say(was?'Removed from saved recipes':'Recipe saved')}
function pantry(){
  $('subpage').innerHTML=heading('Pantry','My kitchen','Add what you have, then mark anything you’d like to use first.')+`<div class="pantry-layout"><section class="panel"><h2>Add ingredients</h2><p>Type one ingredient or a list separated by commas.</p><form id="pantryForm" class="addform"><label class="search">${icon('search')}<input id="pantryInput" aria-label="Ingredients" maxlength="600" autocomplete="off" placeholder="Chicken, rice, garlic…"></label><button type="submit" class="primary">Add</button></form><div id="suggest" class="chips"></div><button class="quiet" id="allKeys" aria-expanded="false">See all ingredients</button></section><section class="panel"><div class="between"><h2>Your ingredients</h2><span id="stockCount"></span></div><div id="stock"></div><div class="actions"><button class="primary" data-matches>Find my meals</button><button class="quiet" data-clear-pantry>Clear kitchen</button></div></section></div>`;
  stock();suggest();
}
function opportunities(){
 if(!state.ingredients.length)return '';
 const groups=new Map();
 for(const r of book){const m=match(r,state.ingredients,state.priority);if(m.missing.length===1&&m.have>0){const k=m.missing[0];if(!groups.has(k))groups.set(k,[]);groups.get(k).push(r)}}
 const best=[...groups].sort((a,b)=>b[1].length-a[1].length||a[0].localeCompare(b[0])).slice(0,3);
 return best.length?'<div class="note"><h3>One ingredient away</h3><p class="fine">See what one extra ingredient would unlock.</p><div class="chips">'+best.map(([k,rs])=>'<button class="chip" data-unlock="'+esc(k)+'">'+esc(k)+' · '+rs.length+' meal'+(rs.length===1?'':'s')+'</button>').join('')+'</div></div>':'';
}
function unlock(key){
 const list=book.filter(r=>{const m=match(r,state.ingredients,state.priority);return m.have>0&&m.missing.length===1&&m.missing[0]===key});
 sheet('unlock','One ingredient away','<div class="sheetbody"><h2>Add '+esc(key)+'</h2><p>Your kitchen already has the other main ingredients for these meals.</p>'+list.map(r=>'<button class="meallink" data-open="'+r.id+'"><b>'+esc(r.name)+'</b> · '+r.time+' min · ~'+money(r.cost)+'</button>').join('')+'</div>');
}

function stock(){
  $('stockCount').textContent=state.ingredients.length;
  $('stock').innerHTML=state.ingredients.length?state.ingredients.map(k=>`<div class="pantryrow"><span>${esc(k)}</span><button class="outline small usefirst" data-first="${esc(k)}" aria-pressed="${state.priority.includes(k)}">${state.priority.includes(k)?icon('check'):''}Use first</button><button class="round" data-remove-ing="${esc(k)}" aria-label="Remove ${esc(k)}">${icon('close')}</button></div>`).join(''):'<p class="fine">Add your first ingredient to start matching.</p>';
  $('stock').insertAdjacentHTML('beforeend',opportunities());
}
function suggest(){
  const q=clean($('pantryInput').value),all=$('allKeys').getAttribute('aria-expanded')==='true';
  const ks=(q?allKeys.filter(k=>k.includes(q)||canon(q)===k):all?allKeys:popular).filter(k=>!state.ingredients.includes(k));
  $('suggest').innerHTML=ks.slice(0,all?allKeys.length:16).map(k=>`<button class="chip" data-add-key="${esc(k)}">${icon('plus')}${esc(k)}</button>`).join('');
  $('allKeys').hidden=!!q;$('allKeys').textContent=all?'Show popular ingredients':'See all ingredients';
}
function changeStock(){write('ingredients',state.ingredients);write('priority',state.priority);state.visible=12;if(state.page==='pantry'){stock();suggest()}}
function addKeys(keys){const old=state.ingredients.length;state.ingredients=unique([...state.ingredients,...keys]);changeStock();const n=state.ingredients.length-old;say(n?`${n} ingredient${n===1?'':'s'} added`:'Already in your kitchen')}
const dayLabel=d=>d.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});
function planner(){
 const days=dates();let cost=0,count=0;
 const boxes=days.map(d=>{const key=dateKey(d),p=state.plan[key],r=p&&byId.get(p.id);
 if(r){cost+=r.cost*p.n;count++}
 return `<section class="day"><h2>${dayLabel(d)}</h2>${r?`<button class="linkbutton" data-open="${r.id}" data-n="${p.n}">${esc(r.name)}</button><p class="fine">${p.n} serving${p.n===1?'':'s'} · ~${money(r.cost*p.n)}</p>`:'<p class="fine">No meal planned.</p>'}<div class="actions"><button class="outline small" data-choose-day="${key}">${r?'Change meal':'Choose meal'}</button>${r?`<button class="quiet small" data-delete-day="${key}">Remove</button>`:''}</div></section>`}).join('');
 $('subpage').innerHTML=heading('Next seven days','Meal plan','Choose a dinner for each day, then send the missing ingredients to your shopping list.')+`<div class="note">${count} meal${count===1?'':'s'} planned · Estimated ingredient cost <strong>~${money(cost)}</strong></div><div class="week">${boxes}</div><div class="actions"><button class="primary" data-shop-plan ${!count?'disabled':''}>Shop this plan</button></div>`;
}
// Set each affiliateUrl to the approved CJ tracking link when the programme is active.
const supermarkets = [
  {name: 'Tesco', groceryUrl: 'https://www.tesco.com/groceries/en-GB/', affiliateUrl: ''},
  {name: 'Sainsbury’s', groceryUrl: 'https://www.sainsburys.co.uk/gol-ui/groceries', affiliateUrl: ''}
];
function supermarketPanel(){
  const links = supermarkets.map(({name, groceryUrl, affiliateUrl}) => {
    const disclosure = affiliateUrl ? '<small>Ad · Quick Plates may earn commission on your order.</small>' : '';
    return `<div>${disclosure}<a class="outline" href="${esc(affiliateUrl || groceryUrl)}" target="_blank" rel="noopener noreferrer${affiliateUrl ? ' sponsored' : ''}">Shop at ${esc(name)} ↗</a></div>`;
  }).join('');
  return `<section class="panel supermarket"><h2>Shop your list online</h2><p>Use Find at Tesco beside an ingredient to choose a product. If you’re shopping in the Tesco app, use Copy name and paste it into Tesco’s search box. Copy ingredients to buy saves a checklist for reference.</p><button class="primary" data-copy-needed>Copy ingredients to buy</button><div class="actions">${links}</div></section>`;
}
function shopping(){
 const a=state.shopping,n=a.filter(x=>x.done).length;
 $('subpage').innerHTML=heading('Groceries','Shopping list','Add ingredients from a recipe or your meal plan. Tick them off as you shop.')+(a.length?`<section class="panel"><h2>${a.length-n} to buy</h2>${a.map((x,i)=>`<div class="shoprow ${x.done?'done':''}"><label><input type="checkbox" data-check="${i}" ${x.done?'checked':''}><span>${esc(x.name)}<small class="qty">${esc(combine(Object.values(x.parts)))}</small></span></label>${x.done?'':`<span class="item-tools"><a href="https://www.tesco.com/shop/en-GB/search?query=${encodeURIComponent(x.name)}" target="_blank" rel="noopener noreferrer" aria-label="Find ${esc(x.name)} at Tesco">Find at Tesco</a> <button class="quiet small" data-copy-name="${esc(x.name)}" aria-label="Copy ${esc(x.name)} for search">Copy name</button></span>`}<button class="round" data-remove-shop="${i}" aria-label="Remove ${esc(x.name)}">${icon('close')}</button></div>`).join('')}<div class="actions"><button class="outline" data-move ${!n?'disabled':''}>Move bought items to my kitchen</button><button class="quiet" data-copy>Copy list</button><button class="quiet" data-clear-shop>Clear list</button></div></section>`+(a.length>n?supermarketPanel():''):empty('Your shopping list is empty','Open a recipe and add the ingredients you need, or shop your week in Meal plan.','data-nav="discover"','Find a recipe'));
}
function shopSave(){write('shopping',state.shopping);nav();if(state.page==='shopping')shopping()}
function shopPlan(){
 const days=dates().map(dateKey);
 let list=state.shopping;
 const old=new Set(list.flatMap(x=>Object.keys(x.parts)).filter(k=>k.startsWith('day:')));
 for(const day of days){
  const p=state.plan[day];if(!p)continue;
  const source='day:'+day;list=updateSource(list,source,missingItems(byId.get(p.id),state.ingredients,p.n));old.delete(source);
 }
 for(const key of old)list=updateSource(list,key,[]);
 state.shopping=list;shopSave();page('shopping');say(list.length?'Shopping list updated':'Your kitchen has all the main ingredients');
}
function sheet(kind,title,body,top=true){
  const d=$('sheet');if(!d.open){opener=document.activeElement;d.showModal()}
  const pos=d.scrollTop;state.dialog=kind;
  $('sheetInner').innerHTML=`<div class="sheet-head"><h2 id="sheetTitle">${esc(title)}</h2><button class="round" data-close aria-label="Close">${icon('close')}</button></div>${body}<div id="dialogStatus" class="status" aria-live="polite"></div>`;
  if(top){d.scrollTop=0;d.querySelector('[data-close]').focus({preventScroll:true})}else d.scrollTop=pos;
}
function closeSheet(){if($('sheet').open)$('sheet').close()}
function openRecipe(id,n=1){if(!byId.has(id))return;state.id=id;state.n=Math.min(8,Math.max(1,Number(n)||1));state.step=0;detail()}
function methodVideo(r){
  if(!r.video)return '';
  const url='https://www.youtube.com/watch?v='+encodeURIComponent(r.video.youtubeId);
  return `<a class="method-video" href="${url}" target="_blank" rel="noopener noreferrer"><span class="video-play" aria-hidden="true">▶</span><span><strong>Watch: ${esc(r.video.topic)}</strong><small>Related demonstration · YouTube · opens in a new tab</small></span></a>`;
}
function detail(top=true){
  const r=byId.get(state.id),m=missingItems(r,state.ingredients,state.n);
  const ing=Object.entries(r.ings).map(([k,q])=>`<div class="ingredient"><span>${esc(k)}${state.ingredients.includes(canon(k))?'<small>In your kitchen</small>':''}</span><b>${esc(scaled(q,state.n))}</b></div>`).join('');
  const basics=r.basics.length?`<p class="fine">Also used from the cupboard: ${r.basics.map(esc).join(', ')}. Pantry matching assumes these basics are available.</p>`:'';
  sheet('recipe','Recipe',`<img class="detailpic" src="images/${r.id}.jpg" alt="${esc(r.name)}"><div class="sheetbody"><span class="kicker">${esc(r.category)}</span><h2>${esc(r.name)}</h2><div class="meta">${meta(r)}</div>${r.description?`<p>${esc(r.description)}</p>`:''}<div class="actions"><button class="primary" data-cook>Start cooking</button><button class="outline" data-schedule>${icon('calendar')} Plan meal</button><button class="outline" data-save="${r.id}" aria-pressed="${state.fav.includes(r.id)}">${icon('bookmark')} ${state.fav.includes(r.id)?'Saved':'Save'}</button></div><div class="serves"><h3>Ingredients</h3><div class="stepper"><button data-scale="-1" aria-label="Fewer servings" ${state.n===1?'disabled':''}>−</button><span>${state.n} serving${state.n===1?'':'s'}</span><button data-scale="1" aria-label="More servings" ${state.n===8?'disabled':''}>+</button></div></div>${ing}${basics}<p class="fine">Estimated cost for ${state.n}: ~${money(state.n*r.cost)}.</p><button class="outline" data-shop-recipe ${!m.length?'disabled':''}>${icon('bag')} ${m.length?'Add missing ingredients to my list ('+m.length+')':'All main ingredients in your kitchen'}</button> <button class="quiet" data-nav="shopping">View shopping list</button><h3>Method</h3>${methodVideo(r)}<ol class="method">${r.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>${r.note?`<p class="fine">${esc(r.note)}</p>`:''}<p class="fine">Check ingredient packs for allergens.</p></div>`,top);
}
function cook(){
 const r=byId.get(state.id),i=state.step;
 sheet('cook',r.name,`<div class="sheetbody"><p class="kicker">Step ${i+1} of ${r.steps.length}</p><div class="progress"><i style="width:${100*(i+1)/r.steps.length}%"></i></div><p class="steptext">${esc(r.steps[i])}</p>${methodVideo(r)}<details><summary>Ingredients for ${state.n}</summary>${Object.entries(r.ings).map(([k,q])=>`<div class="ingredient"><span>${esc(k)}</span><b>${esc(scaled(q,state.n))}</b></div>`).join('')}${r.basics.length?`<p class="fine">Cupboard basics: ${r.basics.map(esc).join(', ')}.</p>`:''}</details>${r.note?`<p class="fine">${esc(r.note)}</p>`:''}<div class="actions"><button class="outline" data-back-step ${!i?'disabled':''}>Previous</button><button class="primary" data-next-step>${i===r.steps.length-1?'Finish cooking':'Next step'}</button></div></div>`);
}
function field(label,key,options,selected){return `<label class="field">${esc(label)}<select id="field-${key}">${options.map(([v,t])=>`<option value="${esc(v)}" ${String(v)===String(selected)?'selected':''}>${esc(t)}</option>`).join('')}</select></label>`}
function filters(){
 const f=state.filters,choices={mode:[['all','All suggestions'],['now','Ready to cook'],['near','Missing 1–2 ingredients']],budget:[['any','Any budget'],[1,'Up to £1'],[1.5,'Up to £1.50'],[2,'Up to £2'],[3,'Up to £3']],time:[['any','Any time'],[10,'Up to 10 min'],[20,'Up to 20 min'],[30,'Up to 30 min'],[60,'Up to 60 min']],diet:[['any','Any diet'],['vegetarian','Vegetarian'],['vegan','Vegan']],equip:[['any','Any equipment'],...['hob','microwave','air fryer','oven','kettle'].map(k=>[k,k+' only'])],category:[['all','All meal types'],...[...new Set(book.map(r=>r.category))].sort().map(k=>[k,k])]};
 const labels={mode:'Pantry match',budget:'Maximum per serving',time:'Total time',diet:'Diet',equip:'Equipment available',category:'Meal type'};
 sheet('filters','Filter recipes',`<div class="sheetbody"><div class="fieldgrid">${Object.entries(choices).map(([k,opts])=>field(labels[k],k,opts,f[k])).join('')}</div><div class="actions"><button class="primary" data-apply>Show recipes</button><button class="quiet" data-reset>Reset filters</button></div></div>`);
}
function schedule(day){
 const options=dates().map(d=>[dateKey(d),dayLabel(d)+(state.plan[dateKey(d)]?' · '+byId.get(state.plan[dateKey(d)].id).name:'')]);
 sheet('schedule','Plan this meal',`<div class="sheetbody"><h2>${esc(byId.get(state.id).name)}</h2><p>Choose a day and the number of servings. A day holds one meal.</p>${field('Day','day',options,day||options[0][0])}${field('Servings','n',Array.from({length:8},(_,i)=>[i+1,i+1]),state.n)}<div class="actions"><button class="primary" data-put-day>Save to meal plan</button></div></div>`);
}
function chooseDay(day){
 state.day=day;sheet('pick','Choose a meal',`<div class="sheetbody"><label class="search">${icon('search')}<input type="search" id="pickSearch" aria-label="Search meals for this day" placeholder="Search meals"></label><div id="pickList"></div></div>`);pickRows();
}
function pickRows(){const q=$('pickSearch').value,rows=[...book].filter(r=>searchMatch(r,q)).sort((a,b)=>Number(state.fav.includes(b.id))-Number(state.fav.includes(a.id))||order.get(a.id)-order.get(b.id));$('pickList').innerHTML=rows.map(r=>`<button class="meallink" data-pick="${r.id}"><b>${esc(r.name)}</b> · ${r.time} min · ~${money(r.cost)}</button>`).join('')||'<p>No meals match. Try another search.</p>'}
const toggleKey=(array,k)=>array.includes(k)?array.filter(v=>v!==k):[...array,k];
document.addEventListener('click',async event=>{
 const b=event.target.closest('button');if(!b||b.disabled)return;
 const d=b.dataset;
 if('nav' in d){closeSheet();page(d.nav);return}
 if('open' in d){openRecipe(Number(d.open),d.n);return}
 if('save' in d){toggleFav(Number(d.save));return}
 if('close' in d){closeSheet();return}
 if('collection' in d){state.collection=d.collection;state.visible=12;results();return}
 if('reset' in d){reset();closeSheet();results();return}
 if(b.id==='more'){state.visible+=12;results();return}
 if(b.id==='filtersBtn'){filters();return}
 if('apply' in d){for(const k of Object.keys(defaults))state.filters[k]=$('field-'+k).value;state.visible=12;closeSheet();results();return}
 if('unlock' in d){unlock(d.unlock);return}
 if('matches' in d){state.q='';state.collection='all';state.sort='best';state.filters.mode='all';state.visible=12;$('recipeQuery').value='';$('sort').value='best';page('discover',false);$('collection').scrollIntoView({block:'start'});$('collection').setAttribute('tabindex','-1');$('collection').focus({preventScroll:true});return}
 if(b.id==='allKeys'){b.setAttribute('aria-expanded',String(b.getAttribute('aria-expanded')!=='true'));suggest();return}
 if('addKey' in d){$('pantryInput').value='';addKeys([d.addKey]);return}
 if('removeIng' in d){state.ingredients=state.ingredients.filter(x=>x!==d.removeIng);state.priority=state.priority.filter(x=>x!==d.removeIng);changeStock();return}
 if('first' in d){state.priority=toggleKey(state.priority,d.first);changeStock();return}
 if('clearPantry' in d){if(state.ingredients.length&&window.confirm('Clear all ingredients in your kitchen?')){state.ingredients=[];state.priority=[];changeStock()}return}
 if('scale' in d){state.n=Math.min(8,Math.max(1,state.n+Number(d.scale)));detail(false);return}
 if('cook' in d){state.step=0;cook();return}
 if('backStep' in d){state.step=Math.max(0,state.step-1);cook();return}
 if('nextStep' in d){if(state.step+1<byId.get(state.id).steps.length){state.step++;cook()}else{closeSheet();say('Cooking complete. Enjoy your meal!')}return}
 if('shopRecipe' in d){const r=byId.get(state.id);state.shopping=updateSource(state.shopping,'recipe:'+r.id,missingItems(r,state.ingredients,state.n));shopSave();b.textContent='Added to shopping list';b.disabled=true;say('Missing ingredients added for '+state.n+' serving'+(state.n===1?'':'s'));return}
 if('schedule' in d){schedule();return}
 if('chooseDay' in d){chooseDay(d.chooseDay);return}
 if('pick' in d){state.id=Number(d.pick);state.n=state.plan[state.day]?.n||1;schedule(state.day);return}
 if('putDay' in d){const key=$('field-day').value;state.plan[key]={id:state.id,n:Number($('field-n').value)};write('mealplan',state.plan);closeSheet();page('plan');say('Meal plan updated');return}
 if('deleteDay' in d){delete state.plan[d.deleteDay];write('mealplan',state.plan);state.shopping=updateSource(state.shopping,'day:'+d.deleteDay,[]);shopSave();planner();return}
 if('shopPlan' in d){shopPlan();return}
 if('removeShop' in d){state.shopping.splice(Number(d.removeShop),1);shopSave();return}
 if('clearShop' in d){if(window.confirm('Clear the whole shopping list?')){state.shopping=[];shopSave()}return}
 if('move' in d){const bought=state.shopping.filter(x=>x.done);if(!bought.length)return;state.ingredients=unique([...state.ingredients,...bought.map(x=>x.name)]);changeStock();state.shopping=state.shopping.filter(x=>!x.done);shopSave();say('Bought ingredients moved to your kitchen');return}
 if('copyName' in d){try{await navigator.clipboard.writeText(d.copyName);say('Ingredient name copied for search')}catch{window.prompt('Copy this ingredient name',d.copyName)}return}
 if('copy' in d || 'copyNeeded' in d){const items='copyNeeded' in d?state.shopping.filter(x=>!x.done):state.shopping;const t=items.map(x=>`${x.done?'✓':'☐'} ${x.name} – ${combine(Object.values(x.parts))}`).join('\n');try{await navigator.clipboard.writeText(t);say('Shopping list copied')}catch{window.prompt('Copy your shopping list',t)}return}
 if('about' in d){sheet('about','About Quick Plates','<div class="sheetbody"><h2>Good food, small budget.</h2><p>Quick Plates uses your ingredients to find recipes, plan dinners and build a shopping list. Your kitchen, saved meals and shopping stay in this browser on this device.</p><p>Costs are illustrative UK estimates per serving. Matches check ingredient names. Check the quantities, cupboard basics and product labels before cooking, particularly for allergies or dietary requirements.</p><p>The food images are AI-generated serving suggestions. After the first online visit, supported browsers can reopen the recipes offline. Photos you have viewed are cached when space permits.</p></div>')}
});
document.addEventListener('input',event=>{
 const t=event.target;if(t.id==='recipeQuery'){state.q=t.value;state.visible=12;results()}else if(t.id==='pantryInput')suggest();else if(t.id==='pickSearch')pickRows();
});
document.addEventListener('submit',event=>{if(event.target.id!=='pantryForm')return;event.preventDefault();const ks=parseIngredients($('pantryInput').value);if(ks.length){$('pantryInput').value='';addKeys(ks)}});
document.addEventListener('change',event=>{const t=event.target;if(t.id==='sort'){state.sort=t.value;state.visible=12;results()}else if(t.matches('[data-check]')){state.shopping[Number(t.dataset.check)].done=t.checked;shopSave()}});
$('sheet').addEventListener('close',()=>{state.dialog='';if(opener?.isConnected)opener.focus({preventScroll:true})});
$('sheet').addEventListener('click',e=>{if(e.target!==$('sheet'))return;const b=$('sheet').getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)closeSheet()});
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));const initialView=new URLSearchParams(location.search).get('view');page(navigation.some(([key])=>key===initialView)?initialView:'discover',false);
const initialId=Number(new URLSearchParams(location.search).get('recipe'));if(byId.has(initialId))openRecipe(initialId);

if(typeof navigator!=='undefined'&&'serviceWorker' in navigator&&location.protocol==='https:'){navigator.serviceWorker.register('./sw.js').catch(()=>{});}

document.addEventListener("error",event=>{const image=event.target;if(image.tagName==="IMG"&&image.getAttribute("src")?.startsWith("images/")){image.src="icon.svg";image.classList.add("image-offline");image.alt="Quick Plates recipe";}},true);
