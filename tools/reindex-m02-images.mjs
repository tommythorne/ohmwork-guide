import fs from "fs";

const file = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(file, "utf8");

// Find all /images/module-02/m02-XX.jpg references in the order they appear
const rx = /(["'])\/images\/module-02\/m02-\d{2}\.jpg\1/g;
let index = 1;

const newS = s.replace(rx, (match, quote) => {
  const num = String(index++).padStart(2, "0");
  return `${quote}/images/module-02/m02-${num}.jpg${quote}`;
});

if (newS === s) {
  console.error("No Module 2 image references found to renumber.");
  process.exit(0);
}

fs.writeFileSync(file, newS, "utf8");
console.log("✅ Reindexed Module 2 images by page order:");
console.log("   /images/module-02/m02-01.jpg, m02-02.jpg, m02-03.jpg, ...");
