import fs from "fs";

const p = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(p, "utf8");

// Renumber every module-02 image in the order they appear on the page:
// 1st occurrence -> m02-01.jpg, 2nd -> m02-02.jpg, etc.
let n = 1;
const pad2 = (x) => String(x).padStart(2, "0");

const rx = /src="\/images\/module-02\/m02-\d+\.(?:jpg|jpeg|png|webp|avif)"/g;

const out = s.replace(rx, () => `src="/images/module-02/m02-${pad2(n++)}.jpg"`);

if (out === s) {
  console.log("ℹ️ No module-02 image srcs matched; nothing changed.");
} else {
  fs.writeFileSync(p, out, "utf8");
  console.log(`✅ Renumbered ${n - 1} module-02 images in page order (using .jpg).`);
}
