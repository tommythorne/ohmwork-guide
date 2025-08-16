import fs from "fs";
import path from "path";

const FILE = "app/modules/module-01/page.tsx";       // <-- adjust if your file name differs
const DIR  = "public/images/module-01";               // where images will live

const tsx = fs.readFileSync(FILE, "utf8");

// very simple parser for <Image ... alt="..." src="...">
const imgRegex = /<Image([^>]*?)\/>/gms;

let idx = 0;
const replacements = [];
const out = tsx.replace(imgRegex, (full, attrs) => {
  // get alt
  const altMatch = attrs.match(/\balt\s*=\s*"(.*?)"/);
  const alt = altMatch ? altMatch[1] : `Image ${idx+1}`;

  // get src (handles "..." only)
  const hasSrc = /\bsrc\s*=/.test(attrs);

  idx++;
  const num = String(idx).padStart(2, "0");
  const newSrc = `/images/module-01/m01-${num}.jpg`;

  let newAttrs = attrs;
  if (hasSrc) {
    // replace existing src prop
    newAttrs = newAttrs.replace(/\bsrc\s*=\s*"(.*?)"/, `src="${newSrc}"`);
  } else {
    // inject src if missing
    newAttrs = ` src="${newSrc}" ${newAttrs}`;
  }

  // ensure width/height or fill exists; if neither, add width/height
  const hasWH = /\b(width|height|fill)\s*=/.test(newAttrs);
  if (!hasWH) {
    newAttrs += ` width={1200} height={800}`;
  }

  replacements.push({ num, alt, newSrc });
  return `<Image${newAttrs}/>`;
});

// write TSX
fs.writeFileSync(FILE, out, "utf8");

// ensure images dir exists
fs.mkdirSync(DIR, { recursive: true });

// print mapping checklist
console.log("\nImage Slots (Module 1) — fill these files locally:");
for (const r of replacements) {
  console.log(`  ${r.num}: ${r.alt}  ->  ${r.newSrc}`);
}

// also write a helper checklist file
const checklist = [
  "# Module 1 Image Checklist",
  "",
  ...replacements.map(r => `- **m01-${r.num}.jpg** — ALT: ${r.alt}`)
].join("\n");
fs.writeFileSync(path.join(DIR, "_CHECKLIST.md"), checklist, "utf8");

console.log(`\nChecklist written to ${path.join(DIR, "_CHECKLIST.md")}`);
console.log(`Images folder ensured at ${DIR}\n`);
