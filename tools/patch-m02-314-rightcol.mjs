import fs from "fs";

const p = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(p,"utf8");

/* Ensure { Box } is imported from lucide-react without disturbing other imports */
s = s.replace(
  /import\s*\{\s*([^}]*)\}\s*from\s*"lucide-react";/,
  (m, inner) => /\bBox\b/.test(inner) ? m : `import { ${inner.replace(/\s+$/,"")}, Box } from "lucide-react";`
);

/* Find the <section> that contains "Article 314" */
const hdr = "Article 314 — Boxes & Conduit Bodies";
const pos = s.indexOf(hdr);
if (pos === -1) {
  console.error("❌ Couldn’t find the Article 314 header text. Aborting.");
  process.exit(1);
}
const secStart = s.lastIndexOf("<section", pos);
const secEndTag = "</section>";
const secEnd = s.indexOf(secEndTag, pos);
if (secStart === -1 || secEnd === -1) {
  console.error("❌ Couldn’t bracket the <section> for Article 314. Aborting.");
  process.exit(1);
}
let sec = s.slice(secStart, secEnd + secEndTag.length);

/* Inside the section, find the 'Right Column - Visual Examples' wrapper and replace only that wrapper content */
const rightComment = "{/* Right Column - Visual Examples */}";
const rcPos = sec.indexOf(rightComment);
if (rcPos === -1) {
  console.error("❌ Couldn’t find the Right Column marker in Article 314. Aborting.");
  process.exit(1);
}

/* We expect the right column wrapper to be: <div className="space-y-4"> ... </div>
   Replace the FIRST such wrapper that occurs after the comment.
*/
const after = sec.slice(rcPos);
const openIdx = after.indexOf('<div className="space-y-4">');
if (openIdx === -1) {
  console.error("❌ Couldn’t find the right-column wrapper in Article 314. Aborting.");
  process.exit(1);
}
const startRC = rcPos + openIdx;
const closeIdx = after.indexOf('</div>', openIdx);
if (closeIdx === -1) {
  console.error("❌ Couldn’t find the end of the right-column wrapper in Article 314. Aborting.");
  process.exit(1);
}
const endRC = rcPos + closeIdx + '</div>'.length;

/* Build the replacement right-column content (keeps exact card style used elsewhere) */
const rightCol =
  '<div className="space-y-4">\n' +
  '  <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">\n' +
  '    <Image\n' +
  '      src="/images/module-02/m02-02.jpg"\n' +
  '      alt="Box fill sizing reference example"\n' +
  '      width={400}\n' +
  '      height={300}\n' +
  '      className="w-full h-48 object-cover rounded-lg"\n' +
  '    />\n' +
  '    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">\n' +
  '      <p className="text-white text-sm font-semibold">Box fill example (314.16)</p>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '\n' +
  '  <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">\n' +
  '    <Image\n' +
  '      src="/images/module-02/m02-03.jpg"\n' +
  '      alt="Device yoke and clamp counting for box fill"\n' +
  '      width={400}\n' +
  '      height={300}\n' +
  '      className="w-full h-48 object-cover rounded-lg"\n' +
  '    />\n' +
  '    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">\n' +
  '      <p className="text-white text-sm font-semibold">Count conductors, yokes, clamps</p>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '</div>';

sec = sec.slice(0, startRC) + rightCol + sec.slice(endRC);

/* Write back the updated section */
const newS = s.slice(0, secStart) + sec + s.slice(secEnd + secEndTag.length);
fs.writeFileSync(p, newS, "utf8");

console.log("✅ Patched Article 314 right column and ensured { Box } import.");
