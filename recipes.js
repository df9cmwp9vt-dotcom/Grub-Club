const recipes = [
 {
  "id": 1,
  "name": "Cheesy tomato pasta",
  "emoji": "🍝",
  "cost": 0.93,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "pasta": "100 g",
   "tinned tomatoes": "200 g",
   "cheese": "25 g"
  },
  "basics": [
   "salt",
   "oil"
  ],
  "steps": [
   "Boil a pan of water. Add the pasta and cook for the time shown on its packet.",
   "Warm the tinned tomatoes in another pan for 5 minutes, stirring occasionally.",
   "Drain the pasta carefully, keeping a splash of cooking water.",
   "Mix pasta with tomato sauce and a little reserved water. Sprinkle with grated cheese."
  ],
  "note": "Take care draining boiling water."
 },
 {
  "id": 2,
  "name": "Beans on cheesy toast",
  "emoji": "🫘",
  "cost": 0.89,
  "time": 10,
  "equip": [
   "hob",
   "toaster"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "bread": "2 slices",
   "beans": "200 g",
   "cheese": "25 g"
  },
  "basics": [],
  "steps": [
   "Toast the bread until golden.",
   "Heat the beans in a saucepan, stirring until piping hot.",
   "Spoon beans over the toast and scatter grated cheese on top."
  ],
  "note": "You can heat the beans in a microwave-safe bowl instead; follow pack instructions."
 },
 {
  "id": 3,
  "name": "Egg fried rice",
  "emoji": "🍚",
  "cost": 1.2,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "rice": "75 g dry or 180 g cooked",
   "eggs": "2",
   "frozen vegetables": "100 g",
   "soy sauce": "1 tbsp"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Cook rice following the packet instructions, or use freshly cooked rice.",
   "Heat frozen vegetables thoroughly in a frying pan with a little oil.",
   "Push vegetables to one side, add beaten eggs and stir until fully set.",
   "Add rice and soy sauce; stir until everything is steaming hot."
  ],
  "note": "For leftover rice, refrigerate quickly and use within 24 hours. Reheat only once until steaming hot."
 },
 {
  "id": 4,
  "name": "Microwave jacket potato",
  "emoji": "🥔",
  "cost": 1.1,
  "time": 15,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "potatoes": "1 large",
   "beans": "150 g",
   "cheese": "20 g"
  },
  "basics": [],
  "steps": [
   "Scrub the potato, prick the skin several times and place on a microwave-safe plate.",
   "Microwave on high for around 5 minutes, turn over, then cook in shorter bursts until tender all the way through. Total time depends on potato size and microwave power.",
   "Heat beans separately until piping hot, following package instructions.",
   "Carefully open the potato and add beans and cheese."
  ],
  "note": "The potato will be very hot. Use an oven mitt and do not use foil in the microwave."
 },
 {
  "id": 5,
  "name": "Peanut butter banana toast",
  "emoji": "🍌",
  "cost": 0.65,
  "time": 5,
  "equip": [],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "bread": "2 slices",
   "peanut butter": "1 tbsp",
   "banana": "1"
  },
  "basics": [],
  "steps": [
   "Toast the bread, if you have a toaster.",
   "Spread peanut butter over the bread.",
   "Slice the banana and arrange on top."
  ],
  "note": "Contains peanuts and may contain other allergens depending on bread."
 },
 {
  "id": 6,
  "name": "Pesto pasta with peas",
  "emoji": "🌿",
  "cost": 1.25,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "pasta": "100 g",
   "pesto": "1 tbsp",
   "frozen peas": "80 g"
  },
  "basics": [],
  "steps": [
   "Cook pasta in boiling water following the packet instructions.",
   "Add frozen peas for the final few minutes, ensuring they are fully cooked.",
   "Drain, then stir in pesto off the heat."
  ],
  "note": "Check pesto labels: some contain animal rennet or nuts."
 },
 {
  "id": 7,
  "name": "Microwave porridge",
  "emoji": "🥣",
  "cost": 0.43,
  "time": 6,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "oats": "50 g",
   "milk": "200 ml",
   "banana": "1"
  },
  "basics": [],
  "steps": [
   "Combine oats and milk in a large microwave-safe bowl.",
   "Microwave for 90 seconds, stir, then heat in shorter bursts until thick and bubbling. Watch to prevent overflowing.",
   "Leave to stand briefly, then top with sliced banana."
  ],
  "note": "Use a large bowl as porridge can bubble over. Milk alternatives work too."
 },
 {
  "id": 8,
  "name": "Tomato bean chilli",
  "emoji": "🌶️",
  "cost": 1.05,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "kidney beans": "200 g",
   "tinned tomatoes": "200 g",
   "onion": "1 small",
   "rice": "75 g"
  },
  "basics": [
   "oil",
   "chilli powder"
  ],
  "steps": [
   "Cook rice following its packet instructions.",
   "Chop onion and fry gently in a little oil for about 5 minutes.",
   "Add drained kidney beans, tomatoes and a pinch of chilli powder.",
   "Simmer for 12–15 minutes until hot throughout. Serve over rice."
  ],
  "note": "Use tinned, ready-cooked kidney beans. Never use uncooked dried kidney beans without proper soaking and boiling."
 },
 {
  "id": 9,
  "name": "Cheesy potato wedges",
  "emoji": "🍟",
  "cost": 0.78,
  "time": 30,
  "equip": [
   "air fryer"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "potatoes": "2 medium",
   "cheese": "30 g"
  },
  "basics": [
   "oil",
   "salt"
  ],
  "steps": [
   "Wash potatoes and cut into evenly sized wedges.",
   "Toss with a teaspoon of oil and a little seasoning.",
   "Air fry at 190°C for about 20–25 minutes, shaking halfway, until soft inside and golden outside.",
   "Scatter cheese on top and return briefly until melted."
  ],
  "note": "Air fryer times vary. Ensure potatoes are cooked all the way through."
 },
 {
  "id": 10,
  "name": "Tuna sweetcorn pasta",
  "emoji": "🐟",
  "cost": 1.65,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "pasta": "100 g",
   "tuna": "1 small tin",
   "sweetcorn": "80 g",
   "mayonnaise": "1 tbsp"
  },
  "basics": [],
  "steps": [
   "Cook pasta according to the packet and drain well.",
   "Drain the tuna and sweetcorn.",
   "Mix with pasta and mayonnaise. Serve warm or cool promptly before refrigerating."
  ],
  "note": "Contains fish and potentially egg. Keep leftovers refrigerated and eat promptly."
 },
 {
  "id": 11,
  "name": "Scrambled egg wrap",
  "emoji": "🌯",
  "cost": 1.05,
  "time": 10,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "wraps": "1",
   "eggs": "2",
   "cheese": "20 g"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Beat eggs in a bowl with a fork.",
   "Heat a non-stick pan over medium-low heat with a little oil.",
   "Pour eggs into the pan and stir gently until completely set.",
   "Spoon eggs into a wrap, top with cheese and fold."
  ],
  "note": "Cook eggs thoroughly if serving someone at higher risk from foodborne illness."
 },
 {
  "id": 12,
  "name": "Easy tomato soup",
  "emoji": "🍅",
  "cost": 0.7,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "tinned tomatoes": "400 g",
   "onion": "1 small",
   "stock cube": "1"
  },
  "basics": [
   "oil",
   "water"
  ],
  "steps": [
   "Finely chop the onion and soften in a little oil for 5 minutes.",
   "Add tomatoes, the stock cube and 200 ml water.",
   "Simmer for 10 minutes. Blend if you have a suitable blender, or leave chunky."
  ],
  "note": "Allow hot soup to cool slightly before blending; never overfill a blender."
 },
 {
  "id": 13,
  "name": "Crispy cheese quesadilla",
  "emoji": "🧀",
  "cost": 1.3,
  "time": 10,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "wraps": "2",
   "cheese": "50 g",
   "tinned tomatoes": "50 g"
  },
  "basics": [],
  "steps": [
   "Drain any excess liquid from the tinned tomatoes.",
   "Place one wrap in a dry frying pan over low-medium heat. Add cheese and a small amount of tomato.",
   "Top with the second wrap, cook until golden, then flip carefully.",
   "Cook until the cheese is melted. Cut into wedges."
  ],
  "note": "The filling will be hot."
 },
 {
  "id": 14,
  "name": "Kettle couscous bowl",
  "emoji": "🥗",
  "cost": 1.35,
  "time": 10,
  "equip": [
   "kettle"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "couscous": "80 g",
   "chickpeas": "120 g",
   "sweetcorn": "70 g"
  },
  "basics": [
   "boiling water",
   "salt"
  ],
  "steps": [
   "Add couscous to a heatproof bowl and pour over boiling water to the level directed on the packet.",
   "Cover and leave for the packet-specified time. Fluff with a fork.",
   "Drain canned chickpeas and sweetcorn, then stir into the couscous.",
   "Season as desired and serve."
  ],
  "note": "Use ready-to-eat canned chickpeas and check the couscous packet instructions."
 },
 {
  "id": 15,
  "name": "Egg and spinach noodles",
  "emoji": "🍜",
  "cost": 1.45,
  "time": 12,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "noodles": "1 portion",
   "eggs": "1",
   "spinach": "60 g",
   "soy sauce": "1 tbsp"
  },
  "basics": [
   "water"
  ],
  "steps": [
   "Bring water to a boil and cook noodles according to the packet.",
   "Add spinach to the pan for the last few minutes, until wilted.",
   "Beat the egg and stir it into the simmering broth until fully cooked.",
   "Stir in soy sauce and serve."
  ],
  "note": "Ensure egg is completely cooked before eating."
 },
 {
  "id": 16,
  "name": "Chickpea tomato curry",
  "emoji": "🍛",
  "cost": 1.35,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "chickpeas": "200 g",
   "tinned tomatoes": "200 g",
   "onion": "1 small",
   "rice": "75 g",
   "curry powder": "1 tsp"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Cook rice according to packet directions.",
   "Chop onion and soften in a pan with a little oil.",
   "Add curry powder and stir for 30 seconds.",
   "Add drained chickpeas and tomatoes and simmer for 12–15 minutes until piping hot. Serve with rice."
  ],
  "note": "Adjust curry powder to taste; confirm packaged spice allergens."
 },
 {
  "id": 17,
  "name": "Microwave egg mug",
  "emoji": "🍳",
  "cost": 0.9,
  "time": 5,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "eggs": "2",
   "milk": "2 tbsp",
   "cheese": "20 g"
  },
  "basics": [],
  "steps": [
   "Beat eggs and milk in a large microwave-safe mug; mix in grated cheese.",
   "Microwave for 30 seconds, stir, then continue in 15–20 second bursts until fully set.",
   "Leave to stand briefly before eating."
  ],
  "note": "Never microwave eggs in their shells. Times vary by microwave; egg must be fully cooked."
 },
 {
  "id": 18,
  "name": "Banana oat pancakes",
  "emoji": "🥞",
  "cost": 0.82,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "banana": "1",
   "oats": "50 g",
   "eggs": "1"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Mash the banana in a bowl. Mix with the egg and oats.",
   "Heat a lightly oiled frying pan over medium-low heat.",
   "Spoon in small pancakes and cook a few minutes per side, until fully set and golden."
  ],
  "note": "Cook until the centre is set and no raw egg mixture remains."
 },
 {
  "id": 19,
  "name": "Baked beans rice bowl",
  "emoji": "🍲",
  "cost": 0.88,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "rice": "75 g",
   "beans": "200 g",
   "frozen vegetables": "100 g"
  },
  "basics": [],
  "steps": [
   "Cook rice following packet directions.",
   "Cook frozen vegetables thoroughly according to packet instructions.",
   "Heat baked beans in a saucepan until piping hot.",
   "Combine everything in a bowl and serve."
  ],
  "note": "Use freshly cooked rice, or follow safe chilled-rice handling rules."
 },
 {
  "id": 20,
  "name": "Air fryer chickpea bites",
  "emoji": "🧆",
  "cost": 1.12,
  "time": 20,
  "equip": [
   "air fryer"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "chickpeas": "200 g",
   "curry powder": "1 tsp",
   "wraps": "1"
  },
  "basics": [
   "oil",
   "salt"
  ],
  "steps": [
   "Drain and dry the canned chickpeas thoroughly.",
   "Toss with a little oil, curry powder and salt.",
   "Air fry at 190°C for 12–15 minutes, shaking halfway until hot and slightly crisp.",
   "Serve in a warm wrap."
  ],
  "note": "Check your air fryer manual and avoid overfilling the basket."
 },
 {
  "id": 21,
  "name": "Chicken tomato pasta",
  "emoji": "🍗",
  "cost": 1.85,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "120 g boneless",
   "pasta": "90 g",
   "tinned tomatoes": "200 g"
  },
  "basics": [
   "oil",
   "salt"
  ],
  "steps": [
   "Cut the chicken into small even pieces on a separate board; wash your hands and utensils thoroughly afterwards.",
   "Cook the pasta in boiling water according to the packet instructions.",
   "Heat a little oil in a frying pan and cook the chicken until completely cooked through (75°C at its centre if using a food thermometer).",
   "Add tinned tomatoes and simmer for 5 minutes, then combine with drained pasta."
  ],
  "note": "Never wash raw chicken. Keep raw chicken separate from ready-to-eat food and ensure it is thoroughly cooked."
 },
 {
  "id": 22,
  "name": "Easy chicken fried rice",
  "emoji": "🍚",
  "cost": 1.95,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "100 g boneless",
   "rice": "75 g dry",
   "frozen vegetables": "100 g",
   "soy sauce": "1 tbsp"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Cook rice according to the packet instructions, using it freshly cooked for this recipe.",
   "Cut chicken into small pieces using a separate board and wash hands and utensils thoroughly.",
   "Cook chicken in a hot pan with a little oil until completely cooked through (75°C at its centre if measured).",
   "Add frozen vegetables and cook until hot throughout. Add rice and soy sauce and stir-fry until steaming hot."
  ],
  "note": "Do not wash raw chicken. Handle cooked rice safely; use freshly cooked rice or follow chilled rice storage guidance."
 },
 {
  "id": 23,
  "name": "Chicken and cheese wrap",
  "emoji": "🌯",
  "cost": 1.9,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "100 g boneless",
   "wraps": "1",
   "cheese": "25 g",
   "onion": "half"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Slice the onion. On a separate board, cut the chicken into small strips and wash hands and utensils thoroughly.",
   "Cook onion in a little oil for 3 minutes, then add chicken.",
   "Cook until chicken is thoroughly cooked (75°C at its centre if measured).",
   "Place the chicken mixture in the wrap, add cheese, fold and warm briefly in the pan."
  ],
  "note": "Keep raw chicken away from salads and ready-to-eat foods; cook fully before serving."
 },
 {
  "id": 24,
  "name": "Air fryer chicken and potatoes",
  "emoji": "🍟",
  "cost": 1.95,
  "time": 30,
  "equip": [
   "air fryer"
  ],
  "tags": [],
  "ings": {
   "chicken": "120 g boneless",
   "potatoes": "200 g"
  },
  "basics": [
   "oil",
   "salt"
  ],
  "steps": [
   "Wash and cut potatoes into thin, even wedges. Toss with a little oil.",
   "Cut chicken into small even pieces using a separate board, then wash hands and utensils thoroughly.",
   "Arrange potatoes and chicken in a single layer in your air fryer, keeping raw chicken away from any food being eaten uncooked.",
   "Cook at 190°C, turning and checking frequently, until potato is tender and chicken is thoroughly cooked (75°C at its centre). The exact time depends on your model and piece sizes."
  ],
  "note": "Air fryer cooking times vary. Do not rely on colour alone to judge chicken doneness."
 },
 {
  "id": 25,
  "name": "Chicken and vegetable noodles",
  "emoji": "🍜",
  "cost": 1.85,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "100 g boneless",
   "noodles": "1 portion",
   "frozen vegetables": "100 g",
   "soy sauce": "1 tbsp"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Cut chicken into small pieces on a separate board and clean your hands and equipment.",
   "Cook the chicken in a little oil until thoroughly cooked (75°C at its centre if measured).",
   "Cook noodles according to the packet instructions.",
   "Add frozen vegetables to the chicken pan and cook until hot; toss through noodles and soy sauce."
  ],
  "note": "Avoid cross-contamination from raw chicken and cook it all the way through."
 },
 {
  "id": 26,
  "name": "Chicken bean chilli",
  "emoji": "🌶️",
  "cost": 1.95,
  "time": 30,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "90 g boneless",
   "kidney beans": "120 g canned",
   "tinned tomatoes": "200 g",
   "onion": "half"
  },
  "basics": [
   "oil",
   "chilli powder"
  ],
  "steps": [
   "Chop onion and gently soften in a little oil.",
   "Cut chicken into small pieces on a separate board; wash your hands and tools afterwards.",
   "Add the chicken and cook through, then add drained canned kidney beans, tomatoes and a little chilli powder.",
   "Simmer until piping hot throughout and chicken is completely cooked (75°C at its centre if using a thermometer)."
  ],
  "note": "Use ready-cooked canned kidney beans. Never use inadequately cooked dried kidney beans."
 },
 {
  "id": 27,
  "name": "Chicken couscous bowl",
  "emoji": "🥗",
  "cost": 1.85,
  "time": 20,
  "equip": [
   "hob",
   "kettle"
  ],
  "tags": [],
  "ings": {
   "chicken": "110 g boneless",
   "couscous": "75 g",
   "frozen peas": "80 g"
  },
  "basics": [
   "oil",
   "water"
  ],
  "steps": [
   "Prepare couscous according to its packet instructions using boiling water.",
   "Cook frozen peas until hot throughout.",
   "Cut chicken into small even pieces on a separate board and clean hands and tools.",
   "Fry chicken in a little oil until completely cooked (75°C at its centre if measured), then combine with couscous and peas."
  ],
  "note": "Chicken must be thoroughly cooked and kept separate from ready-to-eat ingredients until then."
 },
 {
  "id": 28,
  "name": "Chicken sandwich melt",
  "emoji": "🥪",
  "cost": 1.7,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "90 g boneless",
   "bread": "2 slices",
   "cheese": "25 g"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Cut chicken into thin small pieces on a separate board, then wash hands and equipment.",
   "Cook chicken in a lightly oiled frying pan until thoroughly cooked (75°C at its centre if measured).",
   "Put cooked chicken and cheese between the bread slices.",
   "Toast the sandwich in a clean pan over medium-low heat until golden and the cheese melts."
  ],
  "note": "Ensure chicken is fully cooked before assembling the sandwich."
 },
 {
  "id": 29,
  "name": "Chicken and egg fried noodles",
  "emoji": "🍜",
  "cost": 1.95,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "90 g boneless",
   "eggs": "1",
   "noodles": "1 portion"
  },
  "basics": [
   "oil",
   "salt"
  ],
  "steps": [
   "Cook noodles according to their packet instructions.",
   "Cut chicken on a separate board; wash hands and equipment afterwards.",
   "Cook chicken in a hot pan with a little oil until thoroughly cooked (75°C at its centre if measured).",
   "Add beaten egg and stir until completely set, then mix through cooked noodles until hot."
  ],
  "note": "Check chicken and egg are fully cooked, and keep raw chicken from contaminating other ingredients."
 },
 {
  "id": 30,
  "name": "Chicken and tomato rice",
  "emoji": "🍲",
  "cost": 1.9,
  "time": 30,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "100 g boneless",
   "rice": "75 g",
   "tinned tomatoes": "150 g"
  },
  "basics": [
   "oil",
   "water"
  ],
  "steps": [
   "Cook rice according to packet directions.",
   "Cut chicken into small pieces on a separate board; wash hands and tools.",
   "Fry chicken in a little oil until fully cooked (75°C at its centre if measured).",
   "Stir in tomatoes, simmer for 5 minutes and serve over freshly cooked rice."
  ],
  "note": "Ensure chicken is fully cooked; refrigerate cooked rice promptly if saving leftovers."
 },
 {
  "id": 31,
  "name": "Cheesy chicken jacket potato",
  "emoji": "🥔",
  "cost": 1.98,
  "time": 25,
  "equip": [
   "microwave",
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "90 g boneless",
   "potatoes": "1 large",
   "cheese": "25 g"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Prick the potato and microwave on a safe plate in short bursts, turning halfway, until tender throughout.",
   "Cut chicken on a separate board, clean hands and equipment, and pan-fry in a little oil until fully cooked (75°C at its centre if measured).",
   "Split the hot potato, add cooked chicken and grated cheese and serve."
  ],
  "note": "Take care with hot potatoes, and never microwave foil. Do not undercook chicken."
 },
 {
  "id": 32,
  "name": "Chicken and chickpea curry",
  "emoji": "🍛",
  "cost": 1.95,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "90 g boneless",
   "chickpeas": "100 g canned",
   "tinned tomatoes": "150 g",
   "curry powder": "1 tsp"
  },
  "basics": [
   "oil"
  ],
  "steps": [
   "Cut chicken into bite-sized pieces using a separate board and wash hands and equipment.",
   "Cook chicken in a little oil in a pan until thoroughly cooked (75°C at its centre if measured).",
   "Add drained canned chickpeas, tomatoes and curry powder.",
   "Simmer together for 10 minutes, stirring, until thoroughly hot."
  ],
  "note": "Use ready-cooked canned chickpeas and fully cook chicken. Check spice packaging for allergens."
 },
 {
  "id": 33,
  "category": "Breakfast",
  "name": "Overnight berry oats",
  "emoji": "🫐",
  "cost": 0.82,
  "time": 5,
  "equip": [],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "oats": "50 g",
   "milk": "150 ml",
   "yoghurt": "2 tbsp",
   "frozen berries": "60 g"
  },
  "basics": [],
  "steps": [
   "Mix oats, milk and yoghurt in a clean tub.",
   "Thaw berries as instructed on their packet and add.",
   "Cover and refrigerate overnight; enjoy chilled."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 34,
  "category": "Breakfast",
  "name": "Eggy bread",
  "emoji": "🍞",
  "cost": 0.68,
  "time": 10,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "eggs": "1",
   "bread": "2 slices",
   "milk": "2 tbsp"
  },
  "basics": [],
  "steps": [
   "Beat egg and milk together in a shallow bowl.",
   "Dip bread into the mixture.",
   "Fry in a lightly oiled pan until golden and completely cooked through."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 35,
  "category": "Breakfast",
  "name": "Yoghurt banana crunch",
  "emoji": "🍌",
  "cost": 0.95,
  "time": 3,
  "equip": [],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "yoghurt": "150 g",
   "banana": "1",
   "oats": "30 g"
  },
  "basics": [],
  "steps": [
   "Spoon yoghurt into a clean bowl.",
   "Slice the banana and add.",
   "Sprinkle oats on top and enjoy immediately."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 36,
  "category": "Breakfast",
  "name": "Cheese and spinach omelette",
  "emoji": "🍳",
  "cost": 1.2,
  "time": 12,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "eggs": "2",
   "cheese": "25 g",
   "spinach": "40 g"
  },
  "basics": [],
  "steps": [
   "Wilt spinach in a non-stick pan.",
   "Pour over beaten eggs and cook on medium-low heat.",
   "Scatter over cheese and fold; ensure eggs are completely set."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 37,
  "category": "Breakfast",
  "name": "Apple pancakes",
  "emoji": "🥞",
  "cost": 0.93,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "flour": "60 g",
   "milk": "90 ml",
   "eggs": "1",
   "apple": "half"
  },
  "basics": [],
  "steps": [
   "Whisk flour, milk and egg until smooth.",
   "Grate apple into the mixture.",
   "Fry small pancakes in a little oil, turning, until fully set."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 38,
  "category": "Breakfast",
  "name": "Microwave banana oat mug",
  "emoji": "🥣",
  "cost": 0.79,
  "time": 6,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "banana": "1",
   "oats": "40 g",
   "milk": "80 ml",
   "eggs": "1"
  },
  "basics": [],
  "steps": [
   "Mash banana and mix with oats, milk and egg in a large microwave-safe mug.",
   "Microwave in short bursts, checking regularly.",
   "Continue until fully set throughout; cool briefly before eating."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 39,
  "category": "Breakfast",
  "name": "Peanut butter apple porridge",
  "emoji": "🍎",
  "cost": 0.78,
  "time": 8,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "oats": "50 g",
   "oat milk": "200 ml",
   "apple": "1",
   "peanut butter": "1 tbsp"
  },
  "basics": [],
  "steps": [
   "Microwave oats and oat milk in a large bowl in short bursts until thick.",
   "Dice the apple.",
   "Top porridge with apple and peanut butter."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 40,
  "category": "Breakfast",
  "name": "Breakfast bean wrap",
  "emoji": "🌯",
  "cost": 0.92,
  "time": 10,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "wraps": "1",
   "beans": "150 g",
   "eggs": "1"
  },
  "basics": [],
  "steps": [
   "Warm baked beans until piping hot.",
   "Scramble the egg in a separate pan until completely set.",
   "Add both to a wrap and roll it up."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 41,
  "category": "Lunch",
  "name": "Tuna mayo sandwich",
  "emoji": "🥪",
  "cost": 1.45,
  "time": 5,
  "equip": [],
  "tags": [],
  "ings": {
   "tuna": "1 small tin",
   "bread": "2 slices",
   "mayonnaise": "1 tbsp",
   "sweetcorn": "40 g"
  },
  "basics": [],
  "steps": [
   "Drain tuna and sweetcorn.",
   "Combine with mayonnaise.",
   "Spoon between slices of bread and eat promptly or refrigerate."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 42,
  "category": "Lunch",
  "name": "Hummus cucumber wrap",
  "emoji": "🥒",
  "cost": 1.15,
  "time": 5,
  "equip": [],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "wraps": "1",
   "hummus": "3 tbsp",
   "cucumber": "quarter",
   "carrot": "half"
  },
  "basics": [],
  "steps": [
   "Spread hummus on the wrap.",
   "Slice cucumber and grate carrot.",
   "Add the vegetables, roll and slice."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 43,
  "category": "Lunch",
  "name": "Pizza toast",
  "emoji": "🍕",
  "cost": 1.05,
  "time": 10,
  "equip": [
   "oven"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "bread": "2 slices",
   "tinned tomatoes": "3 tbsp",
   "cheese": "35 g",
   "onion": "quarter"
  },
  "basics": [],
  "steps": [
   "Heat the grill or oven according to its instructions.",
   "Spread drained tomatoes on bread; add finely chopped onion and grated cheese.",
   "Cook until bubbling and golden."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 44,
  "category": "Lunch",
  "name": "Tuna pasta salad",
  "emoji": "🍝",
  "cost": 1.68,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "pasta": "90 g",
   "tuna": "1 small tin",
   "sweetcorn": "70 g",
   "mayonnaise": "1 tbsp"
  },
  "basics": [],
  "steps": [
   "Cook pasta according to packet directions.",
   "Drain and cool promptly if serving cold.",
   "Mix with drained tuna, sweetcorn and mayonnaise; refrigerate leftovers promptly."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 45,
  "category": "Lunch",
  "name": "Greek chickpea bowl",
  "emoji": "🥗",
  "cost": 1.7,
  "time": 10,
  "equip": [],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "chickpeas": "150 g canned",
   "cucumber": "quarter",
   "tomatoes": "1",
   "feta": "35 g"
  },
  "basics": [],
  "steps": [
   "Drain and rinse canned chickpeas.",
   "Chop cucumber and tomato.",
   "Toss together and crumble feta over the bowl."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 46,
  "category": "Lunch",
  "name": "Cheese pickle sandwich",
  "emoji": "🧀",
  "cost": 0.87,
  "time": 4,
  "equip": [],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "bread": "2 slices",
   "cheese": "35 g",
   "pickle": "1 tbsp"
  },
  "basics": [],
  "steps": [
   "Slice the cheese.",
   "Spread pickle on one slice of bread.",
   "Add cheese, close sandwich and serve."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 47,
  "category": "Lunch",
  "name": "Cottage cheese jacket potato",
  "emoji": "🥔",
  "cost": 1.25,
  "time": 15,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "potatoes": "1 large",
   "cottage cheese": "100 g",
   "sweetcorn": "60 g"
  },
  "basics": [],
  "steps": [
   "Scrub and prick potato; microwave in bursts, turning, until soft throughout.",
   "Drain sweetcorn and stir into cottage cheese.",
   "Split potato carefully and spoon on topping."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 48,
  "category": "Lunch",
  "name": "Peanut noodle salad",
  "emoji": "🥜",
  "cost": 1.35,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "noodles": "1 portion",
   "carrot": "1",
   "cucumber": "quarter",
   "peanut butter": "1 tbsp",
   "soy sauce": "1 tsp"
  },
  "basics": [],
  "steps": [
   "Cook noodles as instructed and drain.",
   "Mix peanut butter, soy sauce and warm water into a dressing.",
   "Mix with grated carrot and sliced cucumber; serve promptly."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 49,
  "category": "Pasta & rice",
  "name": "Creamy mushroom pasta",
  "emoji": "🍄",
  "cost": 1.62,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "pasta": "90 g",
   "mushrooms": "100 g",
   "cream cheese": "40 g",
   "garlic": "1 clove"
  },
  "basics": [],
  "steps": [
   "Cook pasta according to packet directions.",
   "Slice and fry mushrooms with garlic until softened.",
   "Stir cream cheese and a splash of pasta water into the mushrooms; toss with pasta."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 50,
  "category": "Pasta & rice",
  "name": "Lemon chickpea pasta",
  "emoji": "🍋",
  "cost": 1.28,
  "time": 18,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "pasta": "90 g",
   "chickpeas": "120 g canned",
   "lemon": "half",
   "garlic": "1 clove"
  },
  "basics": [],
  "steps": [
   "Cook pasta as directed on packet.",
   "Briefly warm chopped garlic in oil and add drained canned chickpeas.",
   "Toss with pasta, lemon juice and a splash of cooking water."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 51,
  "category": "Pasta & rice",
  "name": "Cheesy broccoli pasta",
  "emoji": "🥦",
  "cost": 1.32,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "pasta": "90 g",
   "broccoli": "100 g",
   "cheese": "35 g",
   "milk": "60 ml"
  },
  "basics": [],
  "steps": [
   "Boil pasta, adding broccoli near the end until tender.",
   "Drain, keeping a little cooking water.",
   "Warm milk gently and melt in cheese; stir through pasta and broccoli."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 52,
  "category": "Pasta & rice",
  "name": "Tomato lentil spaghetti",
  "emoji": "🍅",
  "cost": 1.1,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "pasta": "90 g",
   "red lentils": "60 g dry",
   "tinned tomatoes": "200 g",
   "onion": "half"
  },
  "basics": [],
  "steps": [
   "Cook red lentils according to their packet until soft.",
   "Soften chopped onion in oil and add tomatoes and cooked lentils; simmer.",
   "Cook pasta separately and toss with the sauce."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 53,
  "category": "Pasta & rice",
  "name": "Mushroom fried rice",
  "emoji": "🍚",
  "cost": 1.2,
  "time": 18,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "rice": "75 g",
   "mushrooms": "100 g",
   "frozen peas": "80 g",
   "soy sauce": "1 tbsp"
  },
  "basics": [],
  "steps": [
   "Cook rice freshly according to packet directions.",
   "Fry sliced mushrooms until soft and cook peas thoroughly.",
   "Combine with rice and soy sauce until steaming hot."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 54,
  "category": "Pasta & rice",
  "name": "Spinach pesto gnocchi",
  "emoji": "🌿",
  "cost": 1.88,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "gnocchi": "200 g",
   "pesto": "1 tbsp",
   "spinach": "60 g"
  },
  "basics": [],
  "steps": [
   "Cook gnocchi according to its pack.",
   "Wilt spinach in a pan.",
   "Toss cooked gnocchi and spinach with pesto; check the pesto ingredients for vegetarian suitability."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 55,
  "category": "Pasta & rice",
  "name": "One-pot tomato rice",
  "emoji": "🍅",
  "cost": 0.91,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "rice": "75 g",
   "tinned tomatoes": "200 g",
   "onion": "half",
   "stock cube": "half"
  },
  "basics": [],
  "steps": [
   "Soften finely diced onion in oil.",
   "Add dry rice, tomatoes, water and stock cube, following rice packet liquid guidance.",
   "Simmer covered until rice is cooked, stirring and adding water as needed."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 56,
  "category": "Vegetarian & vegan",
  "name": "Red lentil dhal",
  "emoji": "🍛",
  "cost": 0.85,
  "time": 30,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "red lentils": "80 g dry",
   "onion": "half",
   "curry powder": "1 tsp",
   "tinned tomatoes": "100 g"
  },
  "basics": [],
  "steps": [
   "Rinse lentils and check for debris.",
   "Soften onion in oil and stir in curry powder.",
   "Add lentils, tomatoes and enough water, then simmer as directed on the lentil pack until soft."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 57,
  "category": "Vegetarian & vegan",
  "name": "Chickpea spinach stew",
  "emoji": "🥬",
  "cost": 1.15,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "chickpeas": "160 g canned",
   "spinach": "80 g",
   "tinned tomatoes": "200 g",
   "garlic": "1 clove"
  },
  "basics": [],
  "steps": [
   "Warm chopped garlic briefly in a little oil.",
   "Add tomatoes and drained ready-cooked chickpeas; simmer for 10 minutes.",
   "Stir in spinach and cook until wilted and piping hot."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 58,
  "category": "Vegetarian & vegan",
  "name": "Black bean fajita wraps",
  "emoji": "🌯",
  "cost": 1.64,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "black beans": "150 g canned",
   "pepper": "1",
   "onion": "half",
   "wraps": "2"
  },
  "basics": [],
  "steps": [
   "Slice onion and pepper and soften in a pan.",
   "Add drained ready-cooked black beans and heat thoroughly.",
   "Pile into warmed wraps."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 59,
  "category": "Vegetarian & vegan",
  "name": "Roasted veg couscous",
  "emoji": "🥗",
  "cost": 1.66,
  "time": 30,
  "equip": [
   "oven"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "couscous": "80 g",
   "courgette": "half",
   "pepper": "half",
   "chickpeas": "100 g canned"
  },
  "basics": [],
  "steps": [
   "Heat oven to 200°C, chop courgette and pepper and toss in oil.",
   "Roast for about 20 minutes until tender.",
   "Prepare couscous as directed and combine with vegetables and drained canned chickpeas."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 60,
  "category": "Vegetarian & vegan",
  "name": "Tofu vegetable rice",
  "emoji": "🍚",
  "cost": 1.94,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "tofu": "150 g firm",
   "rice": "75 g",
   "soy sauce": "1 tbsp",
   "frozen vegetables": "80 g"
  },
  "basics": [],
  "steps": [
   "Cook rice according to the packet.",
   "Drain and cube tofu; pan-fry until golden.",
   "Cook frozen veg thoroughly and combine with rice, tofu and soy sauce."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 61,
  "category": "Vegetarian & vegan",
  "name": "Mushroom bean tacos",
  "emoji": "🌮",
  "cost": 1.73,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "wraps": "2",
   "mushrooms": "120 g",
   "kidney beans": "130 g canned",
   "tinned tomatoes": "80 g"
  },
  "basics": [],
  "steps": [
   "Cook sliced mushrooms in a pan until soft.",
   "Add drained canned kidney beans and tomatoes and heat thoroughly.",
   "Spoon into warmed wraps and fold."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 62,
  "category": "Vegetarian & vegan",
  "name": "Vegetable frittata",
  "emoji": "🍳",
  "cost": 1.45,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "eggs": "2",
   "potatoes": "100 g",
   "frozen peas": "70 g",
   "cheese": "25 g"
  },
  "basics": [],
  "steps": [
   "Boil diced potatoes until tender and cook frozen peas according to their packet.",
   "Warm vegetables in a lightly oiled non-stick pan.",
   "Pour over beaten eggs and cheese; cover and cook until completely set."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 63,
  "category": "Vegetarian & vegan",
  "name": "Tomato egg shakshuka",
  "emoji": "🍳",
  "cost": 1.44,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "eggs": "2",
   "tinned tomatoes": "200 g",
   "pepper": "half",
   "onion": "half"
  },
  "basics": [],
  "steps": [
   "Soften chopped onion and pepper in a pan.",
   "Add tomatoes and simmer for 10 minutes.",
   "Make two wells and add eggs; cover and cook until whites and yolks are fully set."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 64,
  "category": "Microwave & no-oven",
  "name": "Microwave cheesy noodles",
  "emoji": "🍜",
  "cost": 1.07,
  "time": 10,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "noodles": "1 portion",
   "cheese": "30 g",
   "frozen peas": "60 g"
  },
  "basics": [],
  "steps": [
   "Cook noodles in a large microwave-safe bowl according to packet directions.",
   "Cook peas separately until fully heated.",
   "Drain most of the noodle water and mix in peas and cheese until melted."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 65,
  "category": "Microwave & no-oven",
  "name": "Microwave tuna potato",
  "emoji": "🥔",
  "cost": 1.59,
  "time": 15,
  "equip": [
   "microwave"
  ],
  "tags": [],
  "ings": {
   "potatoes": "1 large",
   "tuna": "1 small tin",
   "mayonnaise": "1 tbsp",
   "sweetcorn": "60 g"
  },
  "basics": [],
  "steps": [
   "Prick potato and microwave in bursts until fully tender, turning carefully.",
   "Mix drained tuna and sweetcorn with mayonnaise.",
   "Split hot potato and add cold topping; eat promptly."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 66,
  "category": "Microwave & no-oven",
  "name": "Microwave pizza wrap",
  "emoji": "🍕",
  "cost": 1.23,
  "time": 7,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "wraps": "1",
   "tinned tomatoes": "2 tbsp",
   "cheese": "35 g",
   "sweetcorn": "40 g"
  },
  "basics": [],
  "steps": [
   "Spread a little drained tomato on a wrap on a microwave-safe plate.",
   "Add cheese and sweetcorn, then fold.",
   "Microwave in short bursts until piping hot and cheese melts."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 67,
  "category": "Microwave & no-oven",
  "name": "Microwave bean burrito bowl",
  "emoji": "🥣",
  "cost": 1.38,
  "time": 10,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "microwave rice": "1 pouch",
   "black beans": "120 g canned",
   "sweetcorn": "70 g",
   "tinned tomatoes": "70 g"
  },
  "basics": [],
  "steps": [
   "Cook microwave rice following its pack.",
   "Heat drained canned beans, sweetcorn and tomatoes together in a suitable bowl until piping hot.",
   "Combine with cooked rice."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 68,
  "category": "Microwave & no-oven",
  "name": "Air fryer sweet potato wedges",
  "emoji": "🍠",
  "cost": 0.94,
  "time": 25,
  "equip": [
   "air fryer"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "sweet potatoes": "1 large",
   "paprika": "1 tsp"
  },
  "basics": [],
  "steps": [
   "Scrub and cut sweet potato into even wedges.",
   "Toss in a little oil and paprika.",
   "Air fry at about 190°C for 18–22 minutes, shaking, until completely tender."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 69,
  "category": "Microwave & no-oven",
  "name": "Air fryer tofu bites",
  "emoji": "🥢",
  "cost": 1.72,
  "time": 20,
  "equip": [
   "air fryer"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "tofu": "180 g firm",
   "cornflour": "1 tbsp",
   "soy sauce": "1 tbsp"
  },
  "basics": [],
  "steps": [
   "Drain and press firm tofu, then cut into cubes.",
   "Toss with cornflour and soy sauce.",
   "Air fry around 190°C for 12–15 minutes, shaking once, until crisp and hot through."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 70,
  "category": "Microwave & no-oven",
  "name": "Kettle tomato couscous",
  "emoji": "🥣",
  "cost": 1.09,
  "time": 8,
  "equip": [
   "kettle"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "couscous": "80 g",
   "sun-dried tomatoes": "30 g",
   "sweetcorn": "70 g"
  },
  "basics": [],
  "steps": [
   "Put couscous in a heatproof bowl and add boiling water as indicated on its pack.",
   "Cover and leave for the indicated time, then fluff.",
   "Mix in chopped ready-to-eat sun-dried tomatoes and drained sweetcorn."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 71,
  "category": "Microwave & no-oven",
  "name": "Kettle chickpea noodles",
  "emoji": "🍜",
  "cost": 1.45,
  "time": 10,
  "equip": [
   "kettle"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "instant noodles": "1 packet",
   "chickpeas": "100 g canned",
   "spinach": "40 g"
  },
  "basics": [],
  "steps": [
   "Check the noodle packet allows preparation by adding boiling water only.",
   "Place noodles in a heatproof bowl and follow the packet steeping instructions.",
   "Mix through drained ready-to-eat canned chickpeas and washed spinach and serve hot."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 72,
  "category": "Fish",
  "name": "Tuna tomato spaghetti",
  "emoji": "🐟",
  "cost": 1.41,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "pasta": "90 g",
   "tuna": "1 small tin",
   "tinned tomatoes": "180 g",
   "garlic": "1 clove"
  },
  "basics": [],
  "steps": [
   "Cook pasta as directed.",
   "Warm chopped garlic briefly with a little oil, add tomatoes and simmer for 8 minutes.",
   "Stir in drained canned tuna and warm through; mix with pasta."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 73,
  "category": "Fish",
  "name": "Salmon pea pasta",
  "emoji": "🐟",
  "cost": 2.75,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "salmon": "100 g",
   "pasta": "90 g",
   "frozen peas": "80 g",
   "cream cheese": "30 g"
  },
  "basics": [],
  "steps": [
   "Cook pasta according to packet directions, adding peas near the end until cooked.",
   "Cook salmon separately until opaque and it flakes easily, or reaches 63°C at the thickest point.",
   "Remove any bones and mix with pasta and cream cheese."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 74,
  "category": "Fish",
  "name": "Tuna potato fishcakes",
  "emoji": "🐟",
  "cost": 1.63,
  "time": 30,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "tuna": "1 small tin",
   "potatoes": "180 g",
   "sweetcorn": "60 g",
   "flour": "1 tbsp"
  },
  "basics": [],
  "steps": [
   "Boil potato pieces until soft and mash.",
   "Mix in drained tuna and sweetcorn; shape into small patties and dust with flour.",
   "Pan-fry until golden and piping hot in the middle."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 75,
  "category": "Fish",
  "name": "Sardine tomato toast",
  "emoji": "🐟",
  "cost": 1.26,
  "time": 8,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "sardines": "1 tin",
   "bread": "2 slices",
   "tinned tomatoes": "80 g"
  },
  "basics": [],
  "steps": [
   "Warm drained canned sardines with tomatoes in a small pan.",
   "Toast bread if possible.",
   "Spoon mixture onto toast and check for bones."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 76,
  "category": "Fish",
  "name": "Air fryer fish fingers and wedges",
  "emoji": "🐟",
  "cost": 1.94,
  "time": 25,
  "equip": [
   "air fryer"
  ],
  "tags": [],
  "ings": {
   "fish fingers": "4",
   "potatoes": "170 g",
   "frozen peas": "80 g"
  },
  "basics": [],
  "steps": [
   "Cut potatoes into thin wedges and coat lightly with oil.",
   "Air fry wedges, then cook frozen fish fingers according to their packet directions until fully cooked.",
   "Prepare frozen peas separately according to packaging."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 77,
  "category": "Meat & chicken",
  "name": "Honey soy chicken noodles",
  "emoji": "🍜",
  "cost": 1.95,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "100 g boneless",
   "noodles": "1 portion",
   "soy sauce": "1 tbsp",
   "honey": "1 tsp"
  },
  "basics": [],
  "steps": [
   "Cook noodles as directed.",
   "Cut chicken on a separate board and clean hands and utensils.",
   "Fry chicken until thoroughly cooked, ideally 75°C at its centre; add soy sauce and honey, then combine with noodles."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 78,
  "category": "Meat & chicken",
  "name": "Chicken vegetable soup",
  "emoji": "🥣",
  "cost": 1.72,
  "time": 30,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "100 g boneless",
   "carrot": "1",
   "potatoes": "100 g",
   "stock cube": "half"
  },
  "basics": [],
  "steps": [
   "Chop chicken on a separate board, then thoroughly clean hands and tools.",
   "Dice carrot and potato; simmer in stock for 12 minutes.",
   "Add small chicken pieces and continue cooking until vegetables are soft and chicken is fully cooked, ideally 75°C at its centre."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 79,
  "category": "Meat & chicken",
  "name": "Chicken pesto pasta",
  "emoji": "🌿",
  "cost": 1.97,
  "time": 22,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "100 g boneless",
   "pasta": "90 g",
   "pesto": "1 tbsp",
   "spinach": "40 g"
  },
  "basics": [],
  "steps": [
   "Cook pasta as directed.",
   "Chop chicken using a separate board, then clean hands and utensils.",
   "Pan-fry chicken until fully cooked, ideally 75°C at its centre, and wilt spinach.",
   "Toss hot pasta with chicken, spinach and pesto."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 80,
  "category": "Meat & chicken",
  "name": "Sausage and bean skillet",
  "emoji": "🍲",
  "cost": 1.79,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "sausages": "2 small",
   "beans": "150 g",
   "onion": "half",
   "tinned tomatoes": "100 g"
  },
  "basics": [],
  "steps": [
   "Cook sausages in a pan according to the packaging until thoroughly cooked.",
   "Set aside, soften diced onion, then add beans and tomatoes.",
   "Slice cooked sausages and stir through; simmer until piping hot."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 81,
  "category": "Meat & chicken",
  "name": "Mince tomato rice",
  "emoji": "🍚",
  "cost": 1.98,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "beef mince": "120 g",
   "rice": "75 g",
   "tinned tomatoes": "150 g",
   "onion": "half"
  },
  "basics": [],
  "steps": [
   "Cook rice following its packet.",
   "Fry diced onion and beef mince, breaking it up until it is fully cooked.",
   "Add tomatoes and simmer for 10 minutes; serve over rice."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 82,
  "category": "Meat & chicken",
  "name": "Beef bean burrito",
  "emoji": "🌯",
  "cost": 2.2,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "beef mince": "90 g",
   "kidney beans": "100 g canned",
   "wraps": "1",
   "tinned tomatoes": "100 g"
  },
  "basics": [],
  "steps": [
   "Cook mince thoroughly in a hot pan, breaking up the pieces.",
   "Add drained ready-cooked kidney beans and tomatoes; simmer until piping hot.",
   "Spoon into a warmed wrap and roll."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 83,
  "category": "Lunch",
  "name": "Apple peanut snack bowl",
  "emoji": "🍎",
  "cost": 0.68,
  "time": 3,
  "equip": [],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "apple": "1",
   "peanut butter": "1 tbsp",
   "oats": "20 g"
  },
  "basics": [],
  "steps": [
   "Wash and slice the apple.",
   "Serve alongside peanut butter for dipping.",
   "Scatter on oats if wanted; check packaging for peanut allergens."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 84,
  "category": "Lunch",
  "name": "Banana cocoa smoothie",
  "emoji": "🥤",
  "cost": 0.88,
  "time": 5,
  "equip": [],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "banana": "1",
   "milk": "220 ml",
   "cocoa powder": "1 tsp",
   "oats": "20 g"
  },
  "basics": [],
  "steps": [
   "Add peeled banana, milk, cocoa and oats to a clean blender.",
   "Blend until smooth.",
   "Serve promptly and refrigerate if not drinking immediately."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 85,
  "category": "Lunch",
  "name": "Fruit yoghurt pot",
  "emoji": "🍓",
  "cost": 0.96,
  "time": 4,
  "equip": [],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "yoghurt": "150 g",
   "frozen berries": "70 g",
   "banana": "half"
  },
  "basics": [],
  "steps": [
   "Thaw berries according to package directions.",
   "Spoon yoghurt into a bowl or container.",
   "Top with berries and sliced banana, keeping chilled until eaten."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 86,
  "category": "Lunch",
  "name": "Egg mayo potato salad",
  "emoji": "🥔",
  "cost": 1.3,
  "time": 22,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "potatoes": "180 g",
   "eggs": "2",
   "mayonnaise": "1 tbsp",
   "cucumber": "quarter"
  },
  "basics": [],
  "steps": [
   "Boil diced potatoes until tender and drain.",
   "Boil eggs until fully cooked, cool, peel and chop.",
   "Combine with mayonnaise and diced cucumber; refrigerate promptly if not eating immediately."
  ],
  "note": "Check packaging, allergens and food safety guidance. Prices are illustrative UK estimates, not live supermarket prices."
 },
 {
  "id": 87,
  "category": "Meat & chicken",
  "name": "Garlic curry chicken with rice",
  "emoji": "🍛",
  "cost": 1.5,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "120 g boneless",
   "rice": "75 g dry",
   "curry powder": "1 tsp",
   "garlic": "1 clove"
  },
  "basics": [
   "oil",
   "water"
  ],
  "steps": [
   "Cook the rice according to the packet instructions.",
   "Finely chop the garlic. Dice the chicken on a separate board, then wash your hands and utensils.",
   "Heat a little oil in a frying pan and fry the chicken pieces, turning to brown them. Stir in the garlic and curry powder for 30 seconds.",
   "Add a splash of water and simmer, stirring, until the chicken is thoroughly cooked and the sauce lightly coats it. Spoon over the freshly cooked rice."
  ],
  "note": "Keep raw chicken separate from ready-to-eat food. Cook chicken to 75°C at the centre for 30 seconds. If you do not have a thermometer, check that it is steaming hot throughout, there is no pink meat and the juices run clear."
 },
 {
  "id": 101,
  "name": "Tomato & basil spaghetti",
  "category": "Pasta & rice",
  "cost": 1.08,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "pasta": "90 g",
   "tomatoes": "160 g",
   "garlic": "1 clove",
   "basil": "5 g"
  },
  "description": "A glossy tangle of spaghetti with burst tomatoes, soft garlic and torn basil.",
  "steps": [
   "Bring a pan of salted water to the boil. Cook the pasta according to the packet.",
   "Slice the garlic thinly and quarter the tomatoes. Warm a little oil in a second pan. Soften the garlic for a minute, then add the tomatoes and a pinch of salt.",
   "Cook for 6–8 minutes, pressing the tomatoes with a spoon. Tear in most of the basil.",
   "Reserve a mug of pasta water, then drain. Toss pasta and sauce together with a splash of the water. Finish with the remaining basil."
  ],
  "basics": [
   "oil",
   "salt",
   "water"
  ]
 },
 {
  "id": 102,
  "name": "Golden one-pot chicken pilaf",
  "category": "Meat & chicken",
  "cost": 1.55,
  "time": 35,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "140 g boneless",
   "rice": "75 g dry",
   "garlic": "1 clove",
   "curry powder": "1 tsp"
  },
  "description": "Fragrant rice cooks in the same pan as the garlic and spice-coated chicken.",
  "steps": [
   "Rinse the long-grain white rice and drain it. Chop the garlic. Dice the chicken into small even pieces on a separate board and wash your hands and utensils.",
   "Heat a little oil in a lidded saucepan. Brown the chicken for 4–5 minutes, then stir in the garlic and curry powder for 30 seconds.",
   "Stir in the rice and 150 ml water per serving, or the amount recommended on your rice packet. Bring to a simmer, cover and cook on low for 12–15 minutes.",
   "Check the rice is tender and the chicken is steaming hot throughout, with no pink meat and clear juices. Add a splash of water and continue cooking if needed. Rest covered for 5 minutes, then fluff with a fork."
  ],
  "basics": [
   "oil",
   "water",
   "salt"
  ]
 },
 {
  "id": 103,
  "name": "Coconut chickpea curry",
  "category": "Vegetarian & vegan",
  "cost": 1.42,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "chickpeas": "180 g canned",
   "coconut milk": "120 ml",
   "spinach": "45 g",
   "onion": "1/2",
   "curry powder": "1 tsp"
  },
  "description": "Chickpeas simmer in a creamy coconut sauce with spinach and toasted spice.",
  "steps": [
   "Finely slice the onion. Soften in a little oil for 5 minutes.",
   "Stir in curry powder for 30 seconds, then add drained chickpeas and coconut milk.",
   "Simmer gently for 10–12 minutes, crushing a few chickpeas to thicken the sauce. Fold in spinach until wilted and piping hot."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 104,
  "name": "Lemon chicken traybake",
  "category": "Meat & chicken",
  "cost": 2.05,
  "time": 50,
  "equip": [
   "oven"
  ],
  "tags": [],
  "ings": {
   "chicken": "150 g boneless",
   "potatoes": "220 g",
   "lemon": "1/2",
   "garlic": "2 cloves"
  },
  "description": "Roasted lemon and garlic dress the crisp-edged potatoes and chicken.",
  "steps": [
   "Heat the oven to 200°C fan. Cut the potatoes into 2 cm chunks, toss in oil and roast on a shallow tray for 15 minutes.",
   "Slice the lemon and crush the garlic. Turn the potatoes, then tuck the boneless chicken, garlic and lemon between them.",
   "Roast for 22–28 minutes or until the potatoes are tender and the chicken is steaming hot throughout with no pink meat and clear juices. Squeeze the roast lemon over the tray juices."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 105,
  "name": "Smoky black bean tacos",
  "category": "Vegetarian & vegan",
  "cost": 1.38,
  "time": 18,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "black beans": "150 g canned",
   "wraps": "2 small",
   "tomatoes": "70 g",
   "lime": "1/2",
   "paprika": "1 tsp"
  },
  "description": "Warm tortillas, smoky beans and a spoonful of fresh tomato salsa.",
  "steps": [
   "Finely chop the tomatoes and toss with lime juice and a pinch of salt.",
   "Warm a little oil and toast the paprika for 15 seconds. Add drained beans and a splash of water. Simmer for 5–7 minutes, then mash half the beans.",
   "Warm the wraps in a dry pan. Fill with the smoky beans and tomato salsa and serve with the remaining lime."
  ],
  "basics": [
   "oil",
   "salt",
   "water"
  ]
 },
 {
  "id": 106,
  "name": "Creamy mushroom risotto",
  "category": "Pasta & rice",
  "cost": 1.55,
  "time": 35,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "risotto rice": "75 g",
   "mushrooms": "130 g",
   "onion": "1/2",
   "stock cube": "1/2",
   "cheese": "20 g"
  },
  "description": "Golden mushrooms and slowly stirred rice with a little cheese folded through.",
  "steps": [
   "Make up hot vegetable stock using the packet dilution. Chop the onion and slice the mushrooms.",
   "Heat oil in a saucepan. Brown the mushrooms for 5 minutes. Set half aside, then soften the onion with the rest.",
   "Stir in the rice, add stock a ladle at a time and stir frequently. Let each addition mostly absorb. Cook for 18–22 minutes until tender with a slight bite.",
   "Off the heat, stir in grated vegetarian cheese and a splash of stock. Top with the reserved mushrooms."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 107,
  "name": "Red lentil & carrot soup",
  "category": "Lunch",
  "cost": 0.78,
  "time": 30,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "red lentils": "65 g",
   "carrot": "1",
   "onion": "1/2",
   "stock cube": "1/2",
   "cumin": "1/2 tsp"
  },
  "description": "A thick, warming soup with sweet carrot and gently toasted cumin.",
  "steps": [
   "Rinse the lentils. Chop the onion and grate the carrot.",
   "Soften the onion in oil for 5 minutes. Stir in the carrot and cumin, then cook for another minute.",
   "Add the lentils and 350 ml vegetable stock per person, made to packet strength. Simmer for 18–20 minutes until soft. Loosen with water as needed."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 108,
  "name": "Tuna & tomato pasta bake",
  "category": "Fish",
  "cost": 1.68,
  "time": 35,
  "equip": [
   "hob",
   "oven"
  ],
  "tags": [],
  "ings": {
   "tuna": "80 g canned",
   "pasta": "75 g",
   "tinned tomatoes": "180 g",
   "cheese": "25 g",
   "garlic": "1 clove"
  },
  "description": "A bubbling pasta bake with a golden cheese crust.",
  "steps": [
   "Heat the oven to 190°C fan. Cook the pasta two minutes short of the packet time and drain.",
   "Soften crushed garlic in oil for a minute. Add the tomatoes and simmer for 5 minutes.",
   "Fold the drained tuna, pasta and sauce together. Spoon into a baking dish, top with grated cheese and bake for 15–18 minutes until bubbling hot."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 109,
  "name": "Crispy potato frittata",
  "category": "Lunch",
  "cost": 0.91,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "potatoes": "160 g",
   "eggs": "2",
   "onion": "1/4"
  },
  "description": "A golden potato and onion frittata made entirely on the hob.",
  "steps": [
   "Dice potato into 1 cm pieces. Simmer for 7–9 minutes until just tender, then drain well.",
   "Thinly slice onion. Fry onion and potatoes in a little oil until golden.",
   "Beat the eggs with a pinch of salt. Pour over the potatoes, cover and cook gently for 6–8 minutes until set throughout. Slide onto a plate."
  ],
  "basics": [
   "oil",
   "salt"
  ]
 },
 {
  "id": 110,
  "name": "Ginger salmon rice bowl",
  "category": "Fish",
  "cost": 2.85,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "salmon": "120 g",
   "rice": "75 g dry",
   "cucumber": "1/4",
   "ginger": "5 g",
   "soy sauce": "1 tbsp"
  },
  "description": "Flaked salmon, crunchy cucumber and a warm ginger-soy dressing.",
  "steps": [
   "Cook rice according to its packet. Cut cucumber into thin sticks and finely grate the ginger.",
   "Heat a little oil in a frying pan. Cook the salmon skin-side down for 4–6 minutes, then turn and cook until the centre is opaque and flakes easily.",
   "Stir ginger and soy sauce with a splash of water in the pan for 30 seconds. Flake the salmon over the rice and add cucumber and dressing."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 111,
  "name": "Sausage & pepper traybake",
  "category": "Meat & chicken",
  "cost": 1.63,
  "time": 45,
  "equip": [
   "oven"
  ],
  "tags": [],
  "ings": {
   "sausages": "2",
   "potatoes": "200 g",
   "pepper": "1/2",
   "onion": "1/2",
   "paprika": "1/2 tsp"
  },
  "description": "One tray of browned sausages, sweet pepper and paprika potatoes.",
  "steps": [
   "Heat oven to 200°C fan. Cut potatoes into 2 cm pieces and toss with oil and paprika.",
   "Cut the onion and pepper into thick slices. Put the sausages, potatoes and vegetables in one layer on a tray.",
   "Roast for 30–35 minutes, turning halfway. Continue if necessary until potatoes are tender and sausages are steaming hot throughout, with no pink meat."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 112,
  "name": "Sticky garlic noodles",
  "category": "Quick & easy",
  "cost": 0.85,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "noodles": "80 g",
   "garlic": "2 cloves",
   "soy sauce": "1 tbsp",
   "spring onions": "1"
  },
  "description": "Glossy soy noodles with golden garlic and sliced spring onion.",
  "steps": [
   "Cook wheat noodles without egg according to the packet. Reserve a mug of water, then drain.",
   "Slice garlic and spring onion, keeping onion greens aside. Gently fry garlic and onion whites in oil until fragrant.",
   "Add soy sauce and a splash of noodle water. Toss in the noodles until coated and finish with the onion greens."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 113,
  "name": "Lemon white bean toast",
  "category": "Lunch",
  "cost": 0.86,
  "time": 12,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "white beans": "140 g canned",
   "bread": "2 slices",
   "lemon": "1/4",
   "garlic": "1 clove"
  },
  "description": "Creamy crushed beans piled onto crisp, garlic-rubbed toast.",
  "steps": [
   "Toast the bread in a dry pan and rub with the cut garlic.",
   "Warm drained beans in a splash of water for 4 minutes, then mash roughly with lemon juice, oil and salt.",
   "Spoon the beans onto the toast and finish with grated lemon zest."
  ],
  "basics": [
   "oil",
   "salt",
   "water"
  ]
 },
 {
  "id": 114,
  "name": "Cumin cauliflower & lentil salad",
  "category": "Lunch",
  "cost": 1.28,
  "time": 35,
  "equip": [
   "oven"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "cauliflower": "180 g",
   "cumin": "1 tsp",
   "green lentils": "120 g canned",
   "lemon": "1/4",
   "plant-based yoghurt": "30 g"
  },
  "description": "Roast spiced florets with lentils and lemon yoghurt.",
  "steps": [
   "Heat oven to 200°C fan. Cut cauliflower into small florets and coat with cumin and oil.",
   "Roast for 22–28 minutes, turning once. Drain ready-cooked lentils and toss with lemon juice.",
   "Stir plant-based yoghurt with a little lemon zest. Serve the cauliflower over the lentils and spoon the dressing on top."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 115,
  "name": "Spinach & feta baked eggs",
  "category": "Breakfast",
  "cost": 1.39,
  "time": 23,
  "equip": [
   "oven"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "eggs": "2",
   "spinach": "60 g",
   "feta": "35 g",
   "milk": "1 tbsp"
  },
  "description": "Soft spinach and salty feta baked under two eggs.",
  "steps": [
   "Heat the oven to 180°C fan. Put spinach and a splash of water in a small ovenproof dish. Bake 4 minutes to wilt, then drain.",
   "Stir in the milk and vegetarian feta. Make two hollows and crack in the eggs.",
   "Bake for 10–15 minutes until the whites and yolks are set."
  ],
  "basics": [
   "water"
  ]
 },
 {
  "id": 116,
  "name": "Peanut lime tofu",
  "category": "Vegetarian & vegan",
  "cost": 1.73,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "tofu": "150 g firm",
   "peanut butter": "1 tbsp",
   "lime": "1/2",
   "soy sauce": "1 tsp",
   "broccoli": "100 g"
  },
  "description": "Crisp tofu and bright broccoli with a tangy peanut sauce.",
  "steps": [
   "Pat tofu dry and cube. Cut broccoli into small florets and simmer for 3–4 minutes, then drain.",
   "Fry the tofu in oil over medium-high heat until golden on several sides.",
   "Loosen peanut butter with lime juice, soy sauce and warm water. Toss through the hot broccoli and tofu until coated."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 117,
  "name": "Sweetcorn breakfast fritters",
  "category": "Breakfast",
  "cost": 0.91,
  "time": 18,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "sweetcorn": "100 g",
   "eggs": "1",
   "flour": "35 g",
   "spring onions": "1"
  },
  "description": "Little corn cakes with crisp edges and sweet kernels.",
  "steps": [
   "Drain corn and mash half with a fork. Thinly slice the spring onion.",
   "Mix corn, onion, egg and flour into a thick batter. Add a spoonful of water if too stiff.",
   "Heat a lightly oiled pan. Cook small spoonfuls for 3–4 minutes per side until set in the middle and golden."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 118,
  "name": "Smoky sweet potato & bean boats",
  "category": "Vegetarian & vegan",
  "cost": 1.24,
  "time": 20,
  "equip": [
   "microwave"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "sweet potatoes": "1 medium",
   "black beans": "110 g canned",
   "paprika": "1/2 tsp",
   "lime": "1/4"
  },
  "description": "A speedy sweet potato filled with smoky beans and lime.",
  "steps": [
   "Scrub and prick the sweet potato. Microwave on a suitable plate, turning halfway, until tender. Start with 5 minutes and extend in short bursts.",
   "Cover drained black beans loosely in a microwave-safe bowl with paprika and a spoonful of water. Heat in bursts, stirring, until steaming hot.",
   "Split the potato, fluff the inside and fill with beans. Squeeze over the lime."
  ],
  "basics": [
   "water"
  ]
 },
 {
  "id": 119,
  "name": "Chicken & sweetcorn noodle broth",
  "category": "Meat & chicken",
  "cost": 1.7,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "120 g boneless",
   "noodles": "60 g",
   "sweetcorn": "60 g",
   "stock cube": "1/2",
   "ginger": "5 g"
  },
  "description": "A light, gingery noodle broth with chicken and sweetcorn.",
  "steps": [
   "Make 350 ml stock per serving to packet strength. Grate ginger into the stock and bring to a simmer.",
   "Thinly slice the chicken and add it to the simmering stock. Wash hands and utensils, then simmer for 8–10 minutes.",
   "Add noodles and corn, following the noodle timing. Check the chicken is steaming hot throughout with no pink meat before serving."
  ],
  "basics": []
 },
 {
  "id": 120,
  "name": "Carrot & hummus couscous",
  "category": "Lunch",
  "cost": 1.05,
  "time": 12,
  "equip": [
   "kettle"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "couscous": "70 g",
   "carrot": "1",
   "hummus": "40 g",
   "lemon": "1/4"
  },
  "description": "Fluffy couscous with grated carrot and a lemony hummus dressing.",
  "steps": [
   "Cover couscous with boiling water according to its packet. Cover and leave to absorb.",
   "Grate carrot and mix hummus with lemon juice and enough water to make a dressing.",
   "Fluff couscous and fold in the carrot. Spoon over the dressing."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 121,
  "name": "Butter bean tomato skillet",
  "category": "Vegetarian & vegan",
  "cost": 1.11,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "butter beans": "180 g canned",
   "tinned tomatoes": "180 g",
   "garlic": "1 clove",
   "paprika": "1/2 tsp"
  },
  "description": "Soft butter beans in a smoky, slow-tasting tomato sauce.",
  "steps": [
   "Slice garlic and soften in oil for a minute. Add paprika and stir briefly.",
   "Tip in tomatoes and drained butter beans. Simmer for 12–15 minutes, stirring occasionally.",
   "Crush a spoonful of beans into the sauce to thicken. Season and serve hot."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 122,
  "name": "Apple crumble overnight oats",
  "category": "Breakfast",
  "cost": 0.8,
  "time": 365,
  "equip": [],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "oats": "45 g",
   "apple": "1/2",
   "milk": "100 ml",
   "yoghurt": "40 g",
   "cinnamon": "1/4 tsp"
  },
  "description": "Five minutes of prep, followed by six hours in the fridge.",
  "steps": [
   "Grate the apple into a clean lidded container.",
   "Stir in oats, milk, yoghurt and cinnamon. Cover and refrigerate for at least 6 hours.",
   "Stir and loosen with a splash of milk before eating. Keep chilled."
  ],
  "basics": []
 },
 {
  "id": 123,
  "name": "Herby air-fryer fish parcels",
  "category": "Fish",
  "cost": 2.1,
  "time": 20,
  "equip": [
   "air fryer"
  ],
  "tags": [],
  "ings": {
   "white fish": "140 g",
   "lemon": "1/4",
   "parsley": "5 g",
   "courgette": "100 g"
  },
  "description": "White fish steamed in its own juices with lemon and courgette.",
  "steps": [
   "Cut courgette into thin ribbons. Place on baking parchment with fish, lemon slices and parsley.",
   "Fold parchment into a secure parcel weighed down by the contents. Use only if the air fryer manufacturer permits parchment.",
   "Cook at 180°C for 12–16 minutes, depending on thickness. Open carefully and check fish is opaque and flakes easily throughout."
  ],
  "basics": []
 },
 {
  "id": 124,
  "name": "Creamy pea & mint gnocchi",
  "category": "Pasta & rice",
  "cost": 1.4,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "gnocchi": "180 g",
   "frozen peas": "75 g",
   "cream cheese": "25 g",
   "mint": "3 g"
  },
  "description": "Pillowy gnocchi in a quick pea, mint and cream cheese sauce.",
  "steps": [
   "Cook the gnocchi according to the packet. Boil the peas separately for the packet time.",
   "Mash half the peas with cream cheese and a splash of gnocchi water.",
   "Drain gnocchi and toss with the sauce, whole peas and torn mint."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 125,
  "name": "Harissa chickpea flatbreads",
  "category": "Lunch",
  "cost": 1.44,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "chickpeas": "140 g canned",
   "wraps": "1",
   "harissa": "1 tsp",
   "yoghurt": "35 g",
   "cucumber": "1/4"
  },
  "description": "Spicy chickpeas with cool yoghurt and crunchy cucumber.",
  "steps": [
   "Pat drained chickpeas dry and fry in a little oil for 5–6 minutes.",
   "Stir in harissa and a splash of water until glossy. Slice the cucumber.",
   "Warm the wrap in a dry pan and fill with yoghurt, cucumber and chickpeas."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 126,
  "name": "Sausage & spinach orzo",
  "category": "Pasta & rice",
  "cost": 1.6,
  "time": 28,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "sausages": "2",
   "orzo": "70 g",
   "spinach": "50 g",
   "stock cube": "1/2",
   "tinned tomatoes": "100 g"
  },
  "description": "A comforting one-pan dinner of tomato orzo and browned sausage.",
  "steps": [
   "Remove sausage skins and break the meat into small pieces. Brown in a deep pan for 6–8 minutes.",
   "Add orzo, tomatoes and 200 ml hot stock per person made to packet strength. Simmer for 10–14 minutes, stirring and adding water until the pasta is tender.",
   "Fold in spinach and cook until wilted. Check sausage meat is cooked through and steaming hot."
  ],
  "basics": [
   "water"
  ]
 },
 {
  "id": 127,
  "name": "Broccoli & cheddar soup",
  "category": "Lunch",
  "cost": 1.2,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "broccoli": "170 g",
   "potatoes": "100 g",
   "cheese": "30 g",
   "stock cube": "1/2"
  },
  "description": "Tender broccoli and potato finished with mature cheddar.",
  "steps": [
   "Dice potato and chop broccoli stalks. Put in a saucepan with 300 ml vegetable stock per serving, made to packet strength.",
   "Simmer 10 minutes, add florets, then simmer another 6–8 minutes until tender.",
   "Mash for a chunky soup, or cool slightly and blend with a stick blender. Stir in grated vegetarian cheddar off the heat."
  ],
  "basics": []
 },
 {
  "id": 128,
  "name": "Spanish-style chickpea potatoes",
  "category": "Vegetarian & vegan",
  "cost": 1.18,
  "time": 28,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "potatoes": "180 g",
   "chickpeas": "100 g canned",
   "tinned tomatoes": "140 g",
   "paprika": "1 tsp",
   "garlic": "1 clove"
  },
  "description": "Golden potatoes in a garlicky smoked-paprika tomato sauce.",
  "steps": [
   "Dice potato into small cubes. Simmer in salted water until tender, then drain.",
   "Fry drained potatoes in a little oil until browned. Add chopped garlic and paprika, stirring briefly.",
   "Add tomatoes and drained chickpeas. Simmer 8 minutes until thick and hot throughout."
  ],
  "basics": [
   "oil",
   "salt",
   "water"
  ]
 },
 {
  "id": 129,
  "name": "Cheese & chutney potato cakes",
  "category": "Lunch",
  "cost": 0.94,
  "time": 25,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "potatoes": "200 g",
   "cheese": "30 g",
   "flour": "20 g",
   "chutney": "1 tbsp"
  },
  "description": "Crisp potato cakes with a sharp cheddar centre and chutney on the side.",
  "steps": [
   "Dice and boil potatoes for 10–12 minutes until tender. Drain well and mash.",
   "Mix with grated vegetarian cheese and flour. Shape into four thin patties per serving.",
   "Fry in a little oil for 3–4 minutes each side until golden. Serve hot with chutney."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 130,
  "name": "Cinnamon pear porridge",
  "category": "Breakfast",
  "cost": 0.82,
  "time": 10,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "oats": "45 g",
   "milk": "200 ml",
   "pear": "1/2",
   "cinnamon": "1/4 tsp"
  },
  "description": "Warm oats with soft pear and a pinch of cinnamon.",
  "steps": [
   "Grate or finely chop the pear.",
   "Put pear, oats, milk and cinnamon in a saucepan. Bring to a gentle simmer.",
   "Stir for 5–7 minutes or until creamy, adding milk or water if needed."
  ],
  "basics": [
   "water"
  ]
 },
 {
  "id": 131,
  "name": "Sesame cucumber noodles",
  "category": "Lunch",
  "cost": 1.01,
  "time": 12,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "noodles": "75 g",
   "cucumber": "1/3",
   "tahini": "1 tbsp",
   "soy sauce": "1 tsp",
   "lime": "1/4"
  },
  "description": "Cool noodles and crunchy cucumber in a nutty sesame dressing.",
  "steps": [
   "Cook egg-free noodles according to the packet, drain, and rinse with cold drinking water.",
   "Mix tahini, soy sauce and lime juice, adding water little by little to loosen.",
   "Cut cucumber into thin matchsticks. Toss with the noodles and dressing and serve immediately."
  ],
  "basics": [
   "water"
  ]
 },
 {
  "id": 132,
  "name": "Paprika chicken pockets",
  "category": "Meat & chicken",
  "cost": 1.61,
  "time": 20,
  "equip": [
   "hob"
  ],
  "tags": [],
  "ings": {
   "chicken": "120 g boneless",
   "pitta": "1",
   "paprika": "1 tsp",
   "yoghurt": "35 g",
   "cucumber": "1/4"
  },
  "description": "Paprika chicken tucked into warm pitta with cucumber yoghurt.",
  "steps": [
   "Thinly slice chicken on a separate board. Toss with oil and paprika, then wash hands and utensils.",
   "Fry in a hot pan for 7–10 minutes, turning, until steaming hot throughout with no pink meat and clear juices.",
   "Dice cucumber and mix with yoghurt. Warm the pitta briefly in a clean dry pan, split and fill."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 133,
  "name": "Green pea & lemon couscous",
  "category": "Lunch",
  "cost": 0.88,
  "time": 15,
  "equip": [
   "hob"
  ],
  "tags": [
   "vegetarian",
   "vegan"
  ],
  "ings": {
   "couscous": "75 g",
   "frozen peas": "90 g",
   "lemon": "1/4",
   "mint": "3 g"
  },
  "description": "Fluffy lemon couscous with sweet peas and torn mint.",
  "steps": [
   "Cook peas in boiling water following the packet, then drain.",
   "Cover couscous with boiling water according to its packet and leave covered to absorb.",
   "Fluff with a fork, then stir in peas, grated lemon zest, lemon juice, mint and a little oil."
  ],
  "basics": [
   "oil",
   "water"
  ]
 },
 {
  "id": 134,
  "name": "Air-fryer apple oat crumble",
  "category": "Breakfast",
  "cost": 0.89,
  "time": 22,
  "equip": [
   "air fryer"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "apple": "1",
   "oats": "25 g",
   "butter": "12 g",
   "cinnamon": "1/4 tsp",
   "brown sugar": "1 tsp"
  },
  "description": "Tender cinnamon apple under a crisp, buttery oat topping.",
  "steps": [
   "Dice the apple finely. Toss with cinnamon and a spoonful of water in an air-fryer-safe ramekin.",
   "Rub butter into oats and sugar and scatter over the apple.",
   "Air fry at 165°C for 14–18 minutes until the apple is soft and the top is golden. Let the ramekin cool before handling."
  ],
  "basics": [
   "water"
  ]
 },
 {
  "id": 135,
  "name": "Lemony sardine & bean salad",
  "category": "Fish",
  "cost": 1.34,
  "time": 10,
  "equip": [],
  "tags": [],
  "ings": {
   "sardines": "85 g canned",
   "white beans": "140 g canned",
   "tomatoes": "70 g",
   "lemon": "1/4",
   "parsley": "5 g"
  },
  "description": "A no-cook bowl of white beans, lemon and flaked sardines.",
  "steps": [
   "Drain and rinse the beans. Cut tomatoes into wedges and chop parsley.",
   "Toss beans and tomatoes with lemon juice, parsley and a little oil.",
   "Drain ready-to-eat sardines, flake gently and fold them into the beans."
  ],
  "basics": [
   "oil"
  ]
 },
 {
  "id": 136,
  "name": "Roast pepper & feta couscous",
  "category": "Lunch",
  "cost": 1.56,
  "time": 30,
  "equip": [
   "oven",
   "kettle"
  ],
  "tags": [
   "vegetarian"
  ],
  "ings": {
   "pepper": "1",
   "couscous": "65 g",
   "feta": "40 g",
   "lemon": "1/4"
  },
  "description": "Sweet roasted pepper and crumbled feta over lemon couscous.",
  "steps": [
   "Heat oven to 200°C fan. Slice pepper, toss with oil and roast for 20–25 minutes.",
   "Prepare couscous with boiling water following the packet, then fluff with a fork.",
   "Fold in the roasted pepper and lemon juice. Scatter vegetarian feta over the top."
  ],
  "basics": [
   "oil",
   "water"
  ]
 }
];
