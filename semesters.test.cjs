const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const script=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>{const src=m[0].match(/\bsrc="([^"]+)"/);return src&&src[1].startsWith('data/')?fs.readFileSync(src[1],'utf8'):m[1]}).filter(s=>s.includes('const SOURCE_CARDS')||s.includes('const DATABASE_INTRO_CARDS')||s.includes('const TI_REVIEW_CARDS')||s.includes('const SYSTEM_THEORY_CARDS')||s.includes('const MATH_CARD_TEXT')||s.includes('const STORAGE_KEY')).join('\n');
new vm.Script(script);
const storage=new Map();
const context=vm.createContext({window:{},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},console});
vm.runInContext(script.slice(0,script.indexOf('function safeLocalSave')),context);
const run=s=>vm.runInContext(s,context);
assert(run('state.cards.length')>0);
assert.equal(run('semesters["5"].cards.length'),400);
assert.equal(run('semesters["5"].cards.filter(c=>c.subject==="Datenbanken").length'),223);
assert.equal(run('semesters["5"].cards.filter(c=>c.subject==="Theoretische Informatik").length'),130);
assert(run('semesters["5"].cards.every(c=>c.topic && c.definition && c.question && c.note)'));
assert.equal(run('new Set(defaults.map(c=>c.id)).size'),run('defaults.length'));
assert.equal(run('new Set(TI_REVIEW_CARDS.map(c=>c.topic)).size'),21);
assert(run('semesters["4"].cards.every(c=>!["Datenbanken","Theoretische Informatik"].includes(c.subject))'));
assert.equal(run('normalizeState({cards:[]},"5").cards.length'),400);
assert.equal(run('normalizeState({cards:[],deletedIds:["doc_db_intro_001"]},"5").cards.length'),399);
assert.equal(run('normalizeState({cards:semesters["5"].cards.filter(c=>c.subject==="Datenbanken")},"5").cards.length'),400);
assert.equal(run('normalizeState({cards:[],deletedIds:["doc_ti_intro_001"]},"5").cards.filter(c=>c.subject==="Theoretische Informatik").length'),129);
assert.equal(run('normalizeState({cards:[{...TI_REVIEW_CARDS[0],reviews:8,definition:"Edited TI answer"}]},"5").cards.find(c=>c.id==="doc_ti_intro_001").reviews'),8);
assert.equal(run('normalizeState({cards:[{...TI_REVIEW_CARDS[0],definition:"Edited TI answer"}]},"5").cards.find(c=>c.id==="doc_ti_intro_001").definition'),'Edited TI answer');
assert.equal(run('normalizeState({cards:[{...semesters["5"].cards[0],reviews:6,definition:"Edited answer"}]},"5").cards[0].reviews'),6);
assert.equal(run('normalizeState({cards:[{...semesters["5"].cards[0],definition:"Edited answer"}]},"5").cards[0].definition'),'Edited answer');
assert.equal(run('semesters["5"].subjects.length'),4);
assert.equal(run('SYSTEM_THEORY_CARDS.length'),47);
assert.equal(run('semesters["5"].cards.filter(c=>c.subject==="Systemtheorie I").length'),47);
assert.equal(run('semesters["5"].topicBlocks.find(b=>b.id==="block_st1_vl1").topics.length'),7);
assert(run('!semesters["4"].cards.some(c=>c.subject==="Systemtheorie I") && !semesters["4"].topicBlocks.length'));
assert(run(`(()=>{
  const saved={cards:[{...SYSTEM_THEORY_CARDS[0],reviews:9}],topicBlocks:[{id:'personal',name:'My block',subject:'Datenbanken',topics:['My topic']}]};
  const migrated=normalizeState(saved,'5');
  return migrated.topicBlocks.some(b=>b.id==="block_st1_vl1") && migrated.topicBlocks[0].id==='personal'
    && migrated.cards.find(c=>c.id===SYSTEM_THEORY_CARDS[0].id).reviews===9
    && normalizeState(migrated,'5').topicBlocks.length===migrated.topicBlocks.length;
})()`));
assert(run(`(()=>{
  const saved=emptyState('5');
  saved.topicBlocks[0].name='My VL 1';
  if(normalizeState(saved,'5').topicBlocks[0].name!=='My VL 1')return false;
  saved.topicBlocks=[];
  return normalizeState(saved,'5').topicBlocks.length===0;
})()`));
run('state.cards[0].reviews=7;state.sessions.today={reviews:9};state.history.push({id:state.cards[0].id,subject:state.cards[0].subject});');
const legacy=run('JSON.stringify(state)');
context.legacy=JSON.parse(legacy);
run('state=restoreSemesters(legacy)');
assert.equal(run('state.cards[0].reviews'),7);
assert.equal(run('state.sessions.today.reviews'),9);
assert.equal(run('semesters["5"].history.length'),0);
run('activeSemester="5";state=semesters["5"];state.cards.push({id:"custom_test",custom:true,subject:"Datenbanken",reviews:2});state.sessions.today={reviews:2};state.subjects.push("Neues Fach")');
const rename=script.slice(script.indexOf('function renameSubject('),script.indexOf('function manageSubjects('));
vm.runInContext(rename,context);
run('renameSubject("Datenbanken","Datenbanken II");state=restoreSemesters(JSON.parse(JSON.stringify(snapshot())))');
assert.equal(run('state.cards.length'),401);
assert.equal(run('state.cards[0].subject'),'Datenbanken II');
assert.equal(run('state.subjects.includes("Datenbanken")'),false);
assert.equal(run('state.subjects.includes("Neues Fach")'),true);
assert.equal(run('semesters["4"].cards[0].reviews'),7);
assert.equal(run('semesters["4"].sessions.today.reviews'),9);
run('state.sessions={};state.history=[];state.cards=state.cards.map(c=>({...c,reviews:0}));snapshot()');
assert.equal(run('semesters["4"].cards[0].reviews'),7);
assert.equal(run('semesters["4"].history.length'),1);
run('activeSemester="4";state=semesters["4"];renameSubject(state.subjects[0],"Renamed");state=restoreSemesters(JSON.parse(JSON.stringify(snapshot())))');
assert.equal(run('state.cards[0].subject'),'Renamed');
assert.equal(run('state.subjects[0]'),'Renamed');
console.log('Passed: script syntax, legacy migration, semester isolation, persistence, subject rename, custom subjects and reset isolation.');

// Consolidation removes retired built-ins from old saves without changing retained progress or history.
assert(run(`(()=>{
  const saved={cards:TI_REVIEW_CARDS.map(c=>({...c,reviews:7})),history:[{...TI_REVIEW_CARDS.find(c=>c.id==='doc_ti_intro_028'),reviews:3}]};
  const restored=normalizeState(saved,'5');
  return [...TI_RETIRED_CARD_IDS].every(id=>!restored.cards.some(c=>c.id===id))
    &&restored.cards.find(c=>c.id==='doc_ti_countability_001').reviews===7
    &&restored.history.some(c=>c.id==='doc_ti_intro_028')
    &&['doc_ti_vl_20261022_041','doc_ti_nerode_001','doc_ti_nerode_002'].every(id=>restored.cards.some(c=>c.id===id));
})()`));
