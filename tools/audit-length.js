/**
 * Scan all modules' content.ts files and report article/bullet lengths.
 * Baseline = Module 1 medians; flags items 1.5x over median.
 */
const fs = require('fs');
const path = require('path');

const root = 'app/modules';
const mods = fs.readdirSync(root).filter(d => /^module-/.test(d));
function readContent(mod){
  try {
    const p = path.join(root, mod, 'content.ts');
    if (!fs.existsSync(p)) return null;
    return fs.readFileSync(p,'utf8');
  } catch { return null; }
}
function extractArticles(src){
  const m = src.match(/articles\s*:\s*\[([\s\S]*?)\]\s*,?\s*\n\s*summary/);
  if(!m) return [];
  const body = m[1];
  // naive split on top-level object starts
  const chunks = body.split(/\n\s*\},?\s*\n\s*\{/).map((c,i)=> (i===0? c.replace(/^\s*\{/, '') : i===body.length-1 ? c.replace(/\}\s*$/, '') : c));
  return chunks.map((chunk, idx)=>{
    const title = (chunk.match(/title\s*:\s*"([^"]+)"/)||[])[1] || `#${idx+1}`;
    const pointsBlock = (chunk.match(/points\s*:\s*\[([\s\S]*?)\]/)||[])[1] || '';
    const bullets = Array.from(pointsBlock.matchAll(/text\s*:\s*"(.*?)"/g)).map(m=>m[1]);
    return { title, bullets };
  });
}
function median(a){ const b=[...a].sort((x,y)=>x-y); const mid=Math.floor(b.length/2); return b.length? (b.length%2? b[mid] : (b[mid-1]+b[mid])/2):0; }

const mod1 = 'module-01';
const src1 = readContent(mod1);
if(!src1){ console.log('No module-01/content.ts baseline found.'); process.exit(0); }
const arts1 = extractArticles(src1);
const bulletLens1 = arts1.flatMap(a=>a.bullets.map(t=>t.length));
const medBullet = median(bulletLens1) || 140;

console.log(`Baseline (Module 01) median bullet length ≈ ${medBullet} chars`);

for (const mod of mods){
  const src = readContent(mod);
  if(!src){ continue; }
  const arts = extractArticles(src);
  if(!arts.length) continue;
  let flagged = 0, total = 0;
  console.log(`\n== ${mod} ==`);
  arts.forEach((a,i)=>{
    const lens = a.bullets.map(t=>t.length);
    total += lens.length;
    const long = lens.filter(n=> n > medBullet*1.5).length;
    flagged += long;
    const avg = Math.round(lens.reduce((x,y)=>x+y,0)/(lens.length||1));
    console.log(`  ${String(i+1).padStart(2,'0')} ${a.title}: bullets=${lens.length}, avg=${avg}, >1.5x=${long}`);
  });
  if(flagged>0) console.log(`  ⚠ ${flagged}/${total} bullets exceed baseline x1.5`);
  else console.log('  ✓ All bullets within baseline range');
}
