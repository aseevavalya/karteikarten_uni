const fs=require('node:fs');
const vm=require('node:vm');
const crypto=require('node:crypto');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const script=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>{
  const src=m[0].match(/\bsrc="([^"]+)"/);
  return src&&src[1].startsWith('data/')?fs.readFileSync(src[1],'utf8'):m[1];
}).filter(s=>s.includes('const SOURCE_CARDS')||s.includes('const DATABASE_INTRO_CARDS')||s.includes('const TI_REVIEW_CARDS')||s.includes('const MATH_CARD_TEXT')||s.includes('const STORAGE_KEY')).join('\n');
const context=vm.createContext({window:{},localStorage:{getItem:()=>null},console});
vm.runInContext(script.slice(0,script.indexOf('function safeLocalSave')),context);
const run=s=>vm.runInContext(s,context);
const cards=JSON.parse(run('JSON.stringify(defaults.filter(c=>c.subject==="Theoretische Informatik"))'));
const weeks=JSON.parse(run('JSON.stringify(TI_LECTURE_WEEKS)'));
const blocks=JSON.parse(run('JSON.stringify(TI_TOPIC_BLOCKS)'));
assert.equal(cards.length,130);
assert.equal(new Set(cards.map(c=>c.id)).size,130);
assert.deepEqual(blocks.map(b=>cards.filter(c=>b.topics.includes(c.topic)).length),[26,22,23,7]);
assert.equal(cards.filter(c=>c.topic==='Wiederholung IT-1').length,45);
assert.equal(cards.filter(c=>c.topic==='Wiederholung IT-2').length,7);
const assignments=weeks.flatMap(w=>w.cardIds);
assert.equal(new Set(assignments).size,assignments.length,'An ID must not appear in two weeks');
const permitted=new Set([...blocks.flatMap(b=>b.topics),'Wiederholung IT-1','Wiederholung IT-2']);
assert(cards.every(c=>permitted.has(c.topic)));
// Snapshot of all 130 pre-change effective records, excluding only topic.
// This catches changes to IDs, terms, questions, definitions, notes, status or initial learning fields.
const canonical=cards.map(card=>Object.fromEntries(Object.entries(card).filter(([field])=>field!=='topic').sort(([a],[b])=>a.localeCompare(b,'en'))));
assert.equal(crypto.createHash('sha256').update(JSON.stringify(canonical)).digest('hex'),'a99a5514acab0a29bb2b8d247ef18476b72d2613df64c80c63497d966b323412');
assert(run(`defaults.filter(c=>['Wiederholung IT-1','Wiederholung IT-2'].includes(c.topic)).every(c=>c.topic===TI_PRE_WEEK_TOPICS.get(c.id))`));
const topicOf=id=>weeks.find(w=>cards.find(c=>c.id===id).topic.startsWith(w.topic.split(" | ")[0]+": "))?.topic;
assert.equal(topicOf('doc_ti_vl_20261022_024'),weeks[1].topic,'Kleene theorem first appears in VL 3–4');
for(const n of [36,37,38,39,40,41,44])assert.equal(topicOf('doc_ti_vl_20261022_'+String(n).padStart(3,'0')),weeks[2].topic);
for(const id of ['doc_ti_vl_20261022_043','doc_ti_vl_20261022_045','doc_ti_nerode_001','doc_ti_nerode_002','doc_ti_nerode_003','doc_ti_nerode_004','doc_ti_emptiness_001'])assert.equal(topicOf(id),weeks[3].topic);
// Restore old persisted cards, including an individually categorized/edited card, history and block memberships.
assert(run(`(()=>{
  const oldCards=defaults.filter(c=>c.subject==='Theoretische Informatik').map((c,i)=>({...c,topic:TI_PRE_WEEK_TOPICS.get(c.id),reviews:i+1,correct:i,lapses:2,dueAt:100000+i,intervalDays:9,lastReviewed:54321}));
  const edited=oldCards.find(c=>c.id==='doc_ti_nerode_003');
  edited.question='Meine Frage';edited.definition='Meine Antwort';edited.note='Eigene Notiz';edited.topic='Eigene alte Kategorie';
  const saved={cards:oldCards,history:oldCards.map(c=>({...c})),sessions:{today:{reviews:11}},topicBlocks:[
    {id:'old_ti_a',subject:'Theoretische Informatik',name:'Automaten',topics:['Endliche Automaten']},
    {id:'old_ti_b',subject:'Theoretische Informatik',name:'Sprachen',topics:['Sprachen: Allgemeine Begriffe','Eigener Zusatz']},
    {id:'repeat',subject:'Theoretische Informatik',name:'Wiederholung',topics:['Wiederholung IT-1','Wiederholung IT-2']},
    {id:'db_custom',subject:'Datenbanken',name:'Meine DB',topics:['Mein DB-Thema']}
  ]};
  const restored=normalizeState(saved,'5');
  if(restored.tiWeeklyCategoryVersion!==TI_WEEKLY_CATEGORY_VERSION||restored.sessions.today.reviews!==11)return false;
  for(const old of oldCards){
    const next=restored.cards.find(c=>c.id===old.id),history=restored.history.find(c=>c.id===old.id);
    if(!next||!history)return false;
    for(const key of Object.keys(old).filter(key=>key!=='topic'))if(next[key]!==old[key]||history[key]!==old[key])return false;
    const expected=TI_WEEKLY_CARD_TOPICS.get(old.id)||old.topic;
    if(next.topic!==expected||history.topic!==expected)return false;
  }
  if(restored.topicBlocks.some(b=>b.id==='old_ti_a'))return false;
  if(restored.topicBlocks.find(b=>b.id==='old_ti_b').topics.join()!=='Eigener Zusatz')return false;
  if(restored.topicBlocks.find(b=>b.id==='repeat').topics.join()!=='Wiederholung IT-1,Wiederholung IT-2')return false;
  if(restored.topicBlocks.find(b=>b.id==='db_custom').name!=='Meine DB')return false;
  const twice=normalizeState(JSON.parse(JSON.stringify(restored)),'5');
  return JSON.stringify(restored)===JSON.stringify(twice);
})()`));
// Existing deletions stay deleted; custom cards and deliberate later recategorization remain possible.
assert(run(`(()=>{
  const saved=emptyState('5');
  saved.deletedIds=['doc_ti_intro_055'];saved.cards=saved.cards.filter(c=>!saved.deletedIds.includes(c.id));
  saved.cards.find(c=>c.id==='doc_ti_nerode_003').topic='Spätere eigene Kategorie';
  saved.cards.push({id:'custom_ti',custom:true,subject:'Theoretische Informatik',topic:'Eigene Karten',definition:'Eigener Inhalt',reviews:4});
  const restored=normalizeState(saved,'5');
  return !restored.cards.some(c=>c.id==='doc_ti_intro_055')
    &&restored.cards.find(c=>c.id==='doc_ti_nerode_003').topic==='Spätere eigene Kategorie'
    &&restored.cards.find(c=>c.id==='custom_ti').reviews===4;
})()`));
// Real library sorting and rendering: four chronological week groups plus unchanged repetitions.
vm.runInContext(script.slice(script.indexOf('function orderedLibraryCards('),script.indexOf('function mergeVisibleOrder(')),context);
vm.runInContext(script.slice(script.indexOf('function escapeHtml('),script.indexOf('function mathEditorTools(')),context);
const list={innerHTML:'',querySelectorAll:()=>[]};
context.document={getElementById:id=>id==='cardList'?list:{value:'',classList:{remove(){}}},querySelectorAll:()=>[]};
Object.assign(context,{selectedValues:()=>[],statusOf:()=>['New','new'],expandedLibraryTopics:new Set(),expandedTopicBlocks:new Set(),enableLibraryDragging(){},typesetMath(){}});
vm.runInContext(script.slice(script.indexOf('function renderLibrary('),script.indexOf('function editTopicBlock(')),context);
run('state=emptyState("5");state.cards=state.cards.filter(c=>c.subject==="Theoretische Informatik");renderLibrary()');
assert.equal((list.innerHTML.match(/class="lib-item /g)||[]).length,130);
const headings=[...list.innerHTML.matchAll(/class="topic-heading">([^<]+)<\/h3>/g)].map(m=>m[1]);
assert.deepEqual(headings,[...blocks.flatMap(b=>b.topics.map(topic=>topic.replace(/^VL \d+–\d+: /,''))),'Wiederholung IT-1','Wiederholung IT-2']);
assert.equal((list.innerHTML.match(/class="topic-block /g)||[]).length,4);
assert.deepEqual([...list.innerHTML.matchAll(/data-block-id="(ti_vl_[^"]+)"/g)].map(m=>m[1]).filter((id,i,ids)=>i===0||id!==ids[i-1]),blocks.map(b=>b.id));
for(const card of cards.filter(c=>!c.topic.startsWith('Wiederholung'))){
  assert.equal(blocks.filter(b=>b.topics.includes(card.topic)).length,1);
  assert(!weeks.some(w=>w.topic===card.topic),'A week must be a block, not a card topic');
}
// Future two-lecture categories inherit ordering from the data configuration, not alphabetical sorting.
assert(run(`(()=>{
  const future={id:'test_future',topic:'VL 9–10 | Erweiterung',cardIds:[]};TI_LECTURE_WEEKS.push(future);
  const ordered=orderTIWeeklyTopics([future.topic,TI_LECTURE_WEEKS[3].topic,TI_LECTURE_WEEKS[0].topic]);
  TI_LECTURE_WEEKS.pop();
  return ordered[0]===TI_LECTURE_WEEKS[0].topic&&ordered[1]===TI_LECTURE_WEEKS[3].topic&&ordered[2]===future.topic;
})()`));
assert(run(`(()=>{
  const saved=emptyState('5');saved.tiWeeklyCategoryVersion=1;
  saved.topicBlocks=saved.topicBlocks.filter(b=>b.subject!=='Theoretische Informatik');
  saved.seededTopicBlockIds=saved.seededTopicBlockIds.filter(id=>!id.startsWith('ti_vl_'));
  const card=saved.cards.find(c=>c.id==='doc_ti_nerode_003');card.topic=TI_LECTURE_WEEKS[3].topic;card.reviews=17;
  saved.history=[{...card}];
  const restored=normalizeState(saved,'5');
  return restored.topicBlocks.filter(b=>b.subject==='Theoretische Informatik').length===4
    &&restored.cards.find(c=>c.id===card.id).topic===TI_WEEKLY_CARD_TOPICS.get(card.id)
    &&restored.cards.find(c=>c.id===card.id).reviews===17
    &&restored.history[0].topic===TI_WEEKLY_CARD_TOPICS.get(card.id);
})()`));
console.log('Passed: 130 unchanged TI cards, four chronological weekly blocks with subtopics, 26/22/23/7 assignments, untouched repetitions and preserved progress/history.');
