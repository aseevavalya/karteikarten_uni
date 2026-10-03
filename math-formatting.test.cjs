const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const script=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).find(s=>s.includes('const SOURCE_CARDS'));
const context=vm.createContext({window:{},localStorage:{getItem:()=>null},console});
vm.runInContext(script.slice(0,script.indexOf('function safeLocalSave')),context);
vm.runInContext(script.slice(script.indexOf('function escapeHtml('),script.indexOf('function mathEditorTools(')),context);
const run=s=>vm.runInContext(s,context);

// Upgrade exact legacy content, while keeping learning state and user-authored text.
for(const id of run('Object.keys(MATH_CARD_TEXT)')){
  context.cardId=id;
  assert(run(`(()=>{
    const card={...LEGACY_MATH_TEXT.get(cardId),reviews:12,dueAt:123456,intervalDays:7};
    sanitizeCard(card);
    return Object.entries(MATH_CARD_TEXT[cardId]).every(([field,value])=>card[field]===value)
      &&card.reviews===12&&card.dueAt===123456&&card.intervalDays===7;
  })()`),`Migration failed for ${id}`);
}
assert(run(`(()=>{
  const card={...LEGACY_MATH_TEXT.get('doc_ti_intro_005'),definition:'My own answer',question:'My question'};
  sanitizeCard(card);
  return card.definition==='My own answer'&&card.question==='My question';
})()`));
assert(run(`(()=>{
  const old={...LEGACY_MATH_TEXT.get('doc_ti_intro_005'),reviews:5};
  const restored=normalizeState({cards:[old],history:[{...old}],deletedIds:['doc_ti_intro_006']},'5');
  const card=restored.cards.find(c=>c.id===old.id);
  return card.definition===MATH_CARD_TEXT[old.id].definition&&card.reviews===5
    &&restored.history[0].definition===card.definition
    &&!restored.cards.some(c=>c.id==='doc_ti_intro_006');
})()`));

// Display equations stay intact even with LaTeX row breaks, angle brackets and underscores.
context.sample=String.raw`Vorher \(x_1\)\n\[\begin{aligned}a&<b\\c&=\frac{1}{2}\end{aligned}\]\nNachher`;
const formatted=run('formatCardText(sample)');
assert.match(formatted,/class="math-inline"/);
assert.match(formatted,/class="math-block"/);
assert.match(formatted,/a&amp;&lt;b/);
assert(!formatted.includes('<br'));
context.rowBreak=String.raw`\[\begin{aligned}a&=b\\(x+y)&=z\end{aligned}\]`;
assert.equal(run('formatCardText(rowBreak)'),'<div class="math-block">'+context.rowBreak.replaceAll('&','&amp;')+'</div>');
context.codeSample='`f $ x = f x` und \\(x^2\\)';
assert.match(run('formatCardText(codeSample)'), /<code>f \$ x = f x<\/code>/);
assert.match(run('formatCardText(codeSample)'), /class="math-inline"/);
assert.equal(run('formatCardText("<img src=x onerror=alert(1)>")'),'<p>&lt;img src=x onerror=alert(1)&gt;</p>');
for(const card of run('defaults.filter(c=>c.subject==="Theoretische Informatik")')){
  for(const field of ['term','question','definition']){
    const prose=card[field].replace(/\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g,'');
    assert(!/[∈∉⊆⊊∪∩∀∃⇒⇔ℕℤℚℝΣλμ₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹√≠≤≥∅]/u.test(prose),card.id+' '+field);
  }
}
// Library titles must be typeset immediately, without opening a card's details.
const headingCalls=[];
const cardList={innerHTML:'',querySelectorAll(selector){
  assert.equal(selector,'.lib-item h3');
  return [...this.innerHTML.matchAll(/<h3>([\s\S]*?)<\/h3>/g)].map(m=>({innerHTML:m[1]}));
}};
context.document={
  getElementById:id=>id==='cardList'?cardList:{value:'',classList:{remove(){}}},
  querySelectorAll:()=>[]
};
Object.assign(context,{
  selectedValues:()=>[],orderedLibraryCards:cards=>cards,statusOf:()=>['New','new'],
  expandedLibraryTopics:new Set(),expandedTopicBlocks:new Set(),enableLibraryDragging(){},
  typesetMath:elements=>headingCalls.push(...elements)
});
vm.runInContext(script.slice(script.indexOf('function renderLibrary('),script.indexOf('function editTopicBlock(')),context);
run('state={...emptyState("5"),cards:defaults.filter(c=>c.id==="doc_ti_intro_059")};renderLibrary()');
assert.equal(headingCalls.length,1);
assert.match(headingCalls[0].innerHTML,/\\Sigma\^\*/);
headingCalls.length=0;
run('renderLibrary()');
assert.equal(headingCalls.length,1,'Titles must be typeset again after filtering or rebuilding the list');
console.log('Passed: formula migration, preserved edits and progress, safe markup and library title rendering.');
