import fs from "fs";

const FILE = "app/modules/module-01/page.tsx";

const src = fs.readFileSync(FILE, "utf8").split("\n");
const re = /<Image\b([^>]*?)\/>/gms;

let num = 0;
src.forEach((line, i) => {
  const matches = line.match(re);
  if (!matches) return;
  for (const m of matches) {
    const alt = (m.match(/\balt\s*=\s*"(.*?)"/) || [,"(no alt)"])[1];
    const srcAttr = (m.match(/\bsrc\s*=\s*"(.*?)"/) || [,"(no src)"])[1];
    num++;
    console.log(`${String(num).padStart(2,"0")}  line ${i+1}:  ALT="${alt}"  SRC="${srcAttr}"`);
  }
});
