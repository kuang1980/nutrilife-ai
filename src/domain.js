// Synthetic fixtures, not database-derived nutrition or medical targets.
export const meals={
 breakfast:{id:'breakfast',name:'Berry overnight oats',detail:'Oats, yogurt, berries & chia',time:'08:00',minutes:5,kcal:420,protein:22,carbs:56,fat:12,fiber:9,allergens:['milk'],art:'oats'},
 original:{id:'original',name:'Roasted harvest bowl',detail:'Brown rice, chickpeas & roasted vegetables',time:'12:30',minutes:30,kcal:620,protein:24,carbs:86,fat:20,fiber:13,allergens:[],art:'bowl'},
 wrap:{id:'wrap',name:'Chickpea crunch wrap',detail:'Whole-grain wrap, chickpeas, hummus & greens',time:'12:10',minutes:8,kcal:520,protein:23,carbs:66,fat:18,fiber:12,allergens:['wheat','sesame'],art:'wrap'},
 salad:{id:'salad',name:'Lentil & quinoa salad',detail:'Cooked lentils, quinoa, tomatoes & olive oil',time:'12:10',minutes:6,kcal:500,protein:22,carbs:65,fat:17,fiber:14,allergens:[],art:'bowl'},
 snack:{id:'snack',name:'Apple & almonds',detail:'A little afternoon breathing room',time:'15:30',minutes:2,kcal:200,protein:5,carbs:26,fat:9,fiber:5,allergens:['tree nuts'],art:'apple'},
 dinner:{id:'dinner',name:'Lemon tofu grain bowl',detail:'Tofu, whole grains & seasonal greens',time:'19:00',minutes:20,kcal:650,protein:32,carbs:80,fat:22,fiber:10,allergens:['soy'],art:'bowl'}
};
export const initial=()=>({version:1,stage:'planned',selected:'wrap',lunch:'original',logged:['breakfast'],feedback:null,reminder:'12:25',water:2,excluded:[],events:[]});
export function alternatives(state){return ['wrap','salad'].map(id=>meals[id]).filter(m=>!m.allergens.some(a=>state.excluded.includes(a)));}
export function transition(s,action,value){
 const n=structuredClone(s);
 if(action==='conflict'&&s.stage==='planned'){n.stage='conflict';n.events.push('11:45 · Demo meeting added: 12:30–13:30');}
 if(action==='select'&&s.stage==='conflict'&&alternatives(s).some(m=>m.id===value))n.selected=value;
 if(action==='approve'&&s.stage==='conflict'&&alternatives(s).some(m=>m.id===s.selected)){n.stage='approved';n.lunch=s.selected;n.reminder='12:05';n.events.push('11:46 · You approved '+meals[n.lunch].name,'11:46 · Lunch moved to 12:10; reminder moved to 12:05');}
 if(action==='decline'&&s.stage==='conflict'){n.stage='declined';n.events.push('11:46 · Original lunch kept; conflict unresolved');}
 if(action==='remind'&&s.stage==='approved'){n.stage='reminded';n.events.push('12:05 · In-app demo reminder shown');}
 if(action==='log'&&['approved','reminded'].includes(s.stage)&&['satisfied','hungry','too-much'].includes(value)){n.stage='logged';n.logged.push(s.lunch);n.feedback=value;n.events.push('12:20 · Lunch logged; feedback: '+value);}
 if(action==='water')n.water=Math.min(12,s.water+1);
 if(action==='allergen'&&['planned','conflict','declined'].includes(s.stage)&&['wheat','sesame','milk','tree nuts','soy'].includes(value)){n.excluded=s.excluded.includes(value)?s.excluded.filter(a=>a!==value):[...s.excluded,value];const opts=alternatives(n);if(!opts.some(m=>m.id===n.selected))n.selected=opts[0]?.id||'';}
 return n;
}
export function totals(s){return s.logged.map(id=>meals[id]).reduce((a,m)=>Object.fromEntries(Object.keys(a).map(k=>[k,a[k]+m[k]])),{kcal:0,protein:0,carbs:0,fat:0,fiber:0});}
export function hydrate(raw){try{const s=JSON.parse(raw);if(s.version!==1||!['planned','conflict','approved','reminded','logged','declined'].includes(s.stage)||!['wrap','salad',''].includes(s.selected)||!['original','wrap','salad'].includes(s.lunch)||!Array.isArray(s.logged)||s.logged.some(id=>!meals[id])||new Set(s.logged).size!==s.logged.length||!Array.isArray(s.excluded)||s.excluded.some(a=>!['wheat','sesame','milk','tree nuts','soy'].includes(a))||!Array.isArray(s.events)||s.events.some(e=>typeof e!=='string')||!Number.isInteger(s.water)||s.water<0||s.water>12||!['12:25','12:05'].includes(s.reminder)||![null,'satisfied','hungry','too-much'].includes(s.feedback))return initial();return s;}catch{return initial();}}
