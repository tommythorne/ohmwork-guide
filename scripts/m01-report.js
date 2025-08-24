const fs = require('fs');
const p = 'app/modules/module-01/content.ts';
if (!fs.existsSync(p)) { console.error('❌ Missing', p); process.exit(1); }
let src = fs.readFileSync(p,'utf8');

// Remove import lines and block/line comments (keep strings intact crudely)
src = src
  .replace(/^\s*import\s+[^;]+;?\s*$/gm, '')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/^\s*\/\/.*$/gm, '');

// Find "export default content" (or "export default content;")
const expIdx = src.lastIndexOf('export default content');
if (expIdx === -1) {
  console.error('⚠️ Could not find "export default content" — showing quick greps instead.');
  const titles = [...src.matchAll(/title:\s*"(.*?)"/g)].map(m=>m[1]);
  const stems  = [...src.matchAll(/\bstem:\s*"(.*?)"/g)].map(m=>m[1]);
  const imgAlts = [...src.matchAll(/\balt:\s*"(.*?)"/g)].map(m=>m[1]);
  console.log(JSON.stringify({
    approx: true,
    heroTitle: (titles[0]||''),
    articleTitleSamples: titles.slice(1, 12),
    quizCountApprox: stems.length,
    imageAltCountApprox: imgAlts.length
  }, null, 2));
  process.exit(0);
}

// Walk backward from export to find the matching opening "{"
let i = expIdx;
let braceDepth = 0;
let end = -1, start = -1;
// find the last "};" before export to mark end of object (or just the last "}")
const pre = src.slice(0, expIdx);
for (let k = pre.length - 1; k >= 0; k--) {
  const ch = pre[k];
  if (end === -1) {
    if (ch === '}') { end = k+1; braceDepth = 1; continue; }
  } else {
    if (ch === '}') braceDepth++;
    if (ch === '{') braceDepth--;
    if (braceDepth === 0) { start = k; break; }
  }
}
if (start === -1 || end === -1) {
  console.error('⚠️ Could not balance braces. Fallback greps only.');
  const stems  = [...src.matchAll(/\bstem:\s*"(.*?)"/g)].length;
  console.log(JSON.stringify({ approx: true, quizCountApprox: stems }, null, 2));
  process.exit(0);
}

const body = src.slice(start, end); // includes outer { ... }

let content;
try {
  // Evaluate the object in isolation
  const fn = new Function(`return (${body});`);
  content = fn();
} catch (e) {
  console.error('⚠️ Eval failed; printing a trimmed preview.\n', e.message);
  console.log(body.slice(0, 400));
  process.exit(1);
}

// Helpers
const arts = Array.isArray(content.articles) ? content.articles : [];
const countImgs = (a) => Array.isArray(a?.images) ? a.images.length : 0;
const blockType = (a) => a?.block?.type || 'none';
const bLabel = (a) => a?.block?.title || '';

const summary = {
  hero: {
    title: content.hero?.title || '',
    subtitle: content.hero?.subtitle || '',
    hasImage: !!content.hero?.imageSrc
  },
  counts: {
    articles: arts.length,
    images: arts.reduce((n,a)=>n+countImgs(a),0),
    quiz: Array.isArray(content.quiz) ? content.quiz.length : 0
  },
  perArticle: arts.map((a,i)=>({
    n: i+1,
    title: a?.title || `(untitled ${i+1})`,
    points: Array.isArray(a?.points) ? a.points.length : 0,
    images: countImgs(a),
    block: blockType(a),
    blockTitle: bLabel(a),
    imageAlts: (a.images||[]).map(im=>im?.alt || '')
  })),
  blockAdjacencyCheck: (()=>{
    let repeats = [];
    for (let i=1;i<arts.length;i++){
      const prev = blockType(arts[i-1]);
      const cur  = blockType(arts[i]);
      if (prev !== 'none' && cur === prev) repeats.push({at:i+1,type:cur});
    }
    return repeats;
  })()
};

console.log(JSON.stringify(summary,null,2));
