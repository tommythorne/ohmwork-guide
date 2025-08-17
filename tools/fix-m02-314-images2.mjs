import fs from "fs";

const p = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(p, "utf8");

// Find the Article 314 section by its H2 text (more reliable than comment)
const startRe = /Article\s*314\b[^<]*<\/h2>/i;
const startMatch = startRe.exec(s);
if (!startMatch) {
  console.error("❌ Could not find the <h2> for 'Article 314'. Aborting.");
  process.exit(1);
}
const startIdx = startMatch.index; // beginning of H2 opening tag region
// Find the end of this section (first closing </section> after the header)
const endIdx = s.indexOf("</section>", startIdx);
if (endIdx === -1) {
  console.error("❌ Could not find the closing </section> for Article 314. Aborting.");
  process.exit(1);
}

let before = s.slice(0, startIdx);
let block  = s.slice(startIdx, endIdx);
let after  = s.slice(endIdx);

// 1) Repoint existing Image srcs to m02-02 and m02-03 in order
const imgSrcRe = /src="\/images\/module-02\/m02-\d+\.jpg"/g;
let i = 0;
block = block.replace(imgSrcRe, () => {
  i++;
  if (i === 1) return 'src="/images/module-02/m02-02.jpg"';
  if (i === 2) return 'src="/images/module-02/m02-03.jpg"';
  return 'src="/images/module-02/m02-03.jpg"';
});

// 2) If fewer than 2 images were found, inject a right column with two images
if (i < 2) {
  const injectMarkup = `
          {/* Right Column - Visual Examples (auto-added) */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-02.jpg"
                alt="Box fill sizing reference example"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Box fill example (314.16)</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-03.jpg"
                alt="Device yoke and clamp counting for box fill"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Count conductors, yokes, clamps</p>
              </div>
            </div>
          </div>
`;

  // Try to inject after an existing two-column grid (common pattern)
  const gridOpenIdx = block.search(/<div className="grid[^"]*lg:grid-cols-2[^"]*"[^>]*>/);
  if (gridOpenIdx !== -1) {
    // Insert before the grid's closing </div></div> pair (end of the two-column grid)
    const gridCloseIdx = block.lastIndexOf("</div>");
    if (gridCloseIdx !== -1) {
      block = block.slice(0, gridCloseIdx) + injectMarkup + block.slice(gridCloseIdx);
    } else {
      // Fallback: append before the section end
      block += injectMarkup;
    }
  } else {
    // No grid found; append before the section end
    block += injectMarkup;
  }
}

// Write back
const out = before + block + after;
fs.writeFileSync(p, out, "utf8");
console.log("✅ Article 314 images set to m02-02.jpg and m02-03.jpg (injected if missing).");
