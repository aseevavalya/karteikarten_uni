const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const script=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>{
  const src=m[0].match(/\bsrc="([^"]+)"/);
  return src&&src[1].startsWith('data/')?fs.readFileSync(src[1],'utf8'):m[1];
}).filter(s=>s.includes('const SOURCE_CARDS')||s.includes('const DATABASE_INTRO_CARDS')||s.includes('const TI_REVIEW_CARDS')||s.includes('const MATH_CARD_TEXT')||s.includes('const STORAGE_KEY')).join('\n');
const context=vm.createContext({window:{},localStorage:{getItem:()=>null},console});
vm.runInContext(script.slice(0,script.indexOf('function safeLocalSave')),context);
const run=s=>vm.runInContext(s,context);
const cards=run('defaults.filter(c=>c.subject==="Datenbanken")');
const blocks=run('emptyState("5").topicBlocks.filter(b=>b.subject==="Datenbanken")');
assert.equal(cards.length,223);
assert.equal(blocks.length,10);
assert.equal(run('emptyState("4").topicBlocks.length'),0);
assert.equal(blocks[0].name,'Einführung');
assert.equal(blocks[9].name,'VL 9: Query By Example');
assert.equal(new Set(cards.map(c=>c.id)).size,cards.length);
for(const field of ['question','definition']){
  const normalized=cards.map(c=>c[field].replace(/\s+/g,' ').trim());
  assert.equal(new Set(normalized).size,normalized.length,'Duplicate '+field);
}
for(const card of cards){
  assert.equal(blocks.filter(b=>b.topics.includes(card.topic)).length,1,'Block coverage: '+card.id);
  assert.match(card.note,/DB\.pdf.*Folien/);
  for(const field of ['term','question','definition']){
    const text=card[field];
    assert(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(text),card.id+' control character');
    assert.equal((text.match(/\\\(/g)||[]).length,(text.match(/\\\)/g)||[]).length,card.id+' inline delimiters');
    assert.equal((text.match(/\\\[/g)||[]).length,(text.match(/\\\]/g)||[]).length,card.id+' display delimiters');
    assert(!text.includes('\\\\(')&&!text.includes('\\\\['),card.id+' double-escaped LaTeX');
  }
}
// Introduce lecture structure to a real old-style save while retaining user content and progress.
assert(run(`(()=>{
  const old={id:'doc_db_intro_003',subject:'Datenbanken',topic:'Einführende Begriffe',note:'DB-Wissenskatalog.pdf • Kapitel 1: Einführende Begriffe • S. 1',definition:'Meine eigene Definition',reviews:12,dueAt:12345,intervalDays:9};
  const custom={id:'db_custom',subject:'Datenbanken',topic:'Mein Thema',custom:true,definition:'Eigene Karte',reviews:3};
  const saved={cards:[old,custom],history:[{...old}],deletedIds:['doc_db_intro_001'],topicBlocks:[{id:'personal',subject:'Datenbanken',name:'Eigener Block',topics:['Mein Thema']}]};
  const restored=normalizeState(saved,'5');
  const card=restored.cards.find(c=>c.id===old.id);
  return restored.topicBlocks.filter(b=>b.subject==='Datenbanken').length===11&&restored.seededTopicBlockIds.filter(id=>id.startsWith('db_lecture_block_')).length===10
    &&card.topic===DATABASE_CARD_METADATA[old.id].topic&&card.note.startsWith('DB.pdf')
    &&card.definition===old.definition&&card.reviews===12&&card.dueAt===12345&&card.intervalDays===9
    &&restored.history[0].topic===card.topic&&restored.history[0].definition===old.definition
    &&!restored.cards.some(c=>c.id==='doc_db_intro_001')&&restored.cards.find(c=>c.id===custom.id).reviews===3;
})()`));
// Respect old grouping, user-edited topics, renamed blocks, deleted blocks and custom subjects.
assert(run(`(()=>{
  const saved={cards:[{...DATABASE_INTRO_CARDS[0],topic:'Einführende Begriffe'},{...DATABASE_INTRO_CARDS[1],topic:'Persönliches Thema'}],topicBlocks:[{id:'old_intro',subject:'Datenbanken',name:'Meine Einführung',topics:['Einführende Begriffe']}]};
  const restored=normalizeState(saved,'5');
  const assigned=restored.topicBlocks.flatMap(b=>b.topics);
  if(new Set(assigned).size!==assigned.length||!restored.topicBlocks.some(b=>b.id==='old_intro'&&b.name==='Meine Einführung'))return false;
  if(restored.cards.find(c=>c.id===DATABASE_INTRO_CARDS[1].id).topic!=='Persönliches Thema')return false;
  restored.topicBlocks=restored.topicBlocks.filter(b=>b.id!=='db_lecture_block_01');
  restored.topicBlocks.find(b=>b.id==='db_lecture_block_02').name='Mein ER-Block';
  const again=normalizeState(JSON.parse(JSON.stringify(restored)),'5');
  return !again.topicBlocks.some(b=>b.id==='db_lecture_block_01')
    &&again.topicBlocks.find(b=>b.id==='db_lecture_block_02').name==='Mein ER-Block';
})()`));
// Verify the actual library renderer places every database card inside its lecture block.
const list={innerHTML:'',querySelectorAll:()=>[]};
context.document={getElementById:id=>id==='cardList'?list:{value:'',classList:{remove(){}}},querySelectorAll:()=>[]};
Object.assign(context,{selectedValues:()=>[],orderedLibraryCards:cards=>cards,statusOf:()=>['New','new'],expandedLibraryTopics:new Set(),expandedTopicBlocks:new Set(),enableLibraryDragging(){},typesetMath(){}});
vm.runInContext(script.slice(script.indexOf('function escapeHtml('),script.indexOf('function mathEditorTools(')),context);
vm.runInContext(script.slice(script.indexOf('function renderLibrary('),script.indexOf('function editTopicBlock(')),context);
run('state=emptyState("5");state.cards=state.cards.filter(c=>c.subject==="Datenbanken");renderLibrary()');
assert.equal((list.innerHTML.match(/class="topic-block /g)||[]).length,10);
assert.equal((list.innerHTML.match(/class="lib-item /g)||[]).length,223);
assert.match(list.innerHTML,/VL 6: Datenbankentwurf und Normalisierung/);
assert.match(list.innerHTML,/SQL-Grundlagen: DDL und Integritätsbedingungen/);
console.log('Passed: 223 DB cards, unique content, source references, ten blocks, legacy migration, retained edits/progress, user grouping and library rendering.');
// Lecture order is the initial order, while any user-defined ordering remains authoritative.
assert(run(`(()=>{
  const fresh=emptyState('5');
  const topics=fresh.libraryOrder.topics.Datenbanken;
  if(topics.indexOf('Entwurf: Funktionale Abhängigkeiten')>topics.indexOf('Entwurf: Attributabschluss und Schlüssel'))return false;
  const key='Datenbanken|||Entwurf: Funktionale Abhängigkeiten';
  const ids=fresh.libraryOrder.cards[key];
  const reversed=[...ids].reverse();
  const saved={...fresh,libraryOrder:{topics:{Datenbanken:[...topics].reverse()},cards:{[key]:reversed}}};
  const restored=normalizeState(saved,'5');
  return restored.libraryOrder.topics.Datenbanken[0]===topics.at(-1)
    &&restored.libraryOrder.cards[key][0]===reversed[0];
})()`));
for(const card of cards){
  for(const field of ['term','question','definition']){
    const prose=card[field].replace(/\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|`[^`]*`/g,'');
    assert(!/[∈∉⊆⊊∪∩∀∃⇒⇔Σλμ₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹√≠≤≥∅→]/u.test(prose),card.id+' '+field+' plain math');
  }
}

assert(run(`(()=>{
  const note='DB-Wissenskatalog.pdf • Kapitel 1: Einführende Begriffe • S. 1 — meine Notiz';
  const card={...DATABASE_INTRO_CARDS[0],note};sanitizeCard(card);
  return card.note===note;
})()`),'A user-extended source note must survive migration');
