import fs from "fs";

const p = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(p, "utf8");

// Find the Article 314 section
const header = "Article 314 — Boxes & Conduit Bodies (Box Fill)";
const h = s.indexOf(header);
if (h === -1) {
  console.error("❌ Could not find the Article 314 header text.");
  process.exit(1);
}

// Grab the surrounding <section> … </section>
const secStart = s.lastIndexOf("<section", h);
const secEnd = s.indexOf("</section>", h);
if (secStart === -1 || secEnd === -1) {
  console.error("❌ Could not isolate the Article 314 <section> block.");
  process.exit(1);
}

let sec = s.slice(secStart, secEnd + "</section>".length);

// Ensure there is a right-column with two images, else insert it.
const rightColMarker = "Right Column - Visual Examples";
if (!sec.includes(rightColMarker)) {
  // Try to find the two-column grid to append the right column into
  const gridStartIdx = sec.indexOf('<div className="grid');
  if (gridStartIdx !== -1) {
    // After the left column (first close of that column div), inject a right column with the two images.
    // Find end of first left-column block: use the marker 'leading-relaxed"' then the closing div of that column.
    const leftColCloseIdx = sec.indexOf('</div>', sec.indexOf('leading-relaxed'));
    if (leftColCloseIdx !== -1) {
      const injectAt = leftColCloseIdx + '</div>'.length;
      const rightColBlock = `
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE A: Box fill visual */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-02.jpg"
                alt="Box fill calculation and cubic-inch volume examples"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Box Fill Examples (314.16)</p>
              </div>
            </div>

            {/* IMAGE B: Conduit body fill */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-03.jpg"
                alt="Conduit body volume and conductor count guidelines"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Conduit Bodies: Volume Matters</p>
              </div>
            </div>
          </div>
`;
      sec = sec.slice(0, injectAt) + rightColBlock + sec.slice(injectAt);
    }
  }
}

// Whether we injected or not, normalize the first two Image src inside this section
const imgSrcRe = /src="\/images\/module-02\/m02-\d+\.jpg"/g;
let count = 0;
sec = sec.replace(imgSrcRe, (m) => {
  count++;
  if (count === 1) return 'src="/images/module-02/m02-02.jpg"';
  if (count === 2) return 'src="/images/module-02/m02-03.jpg"';
  return m;
});

// Stitch back and write
const newContent = s.slice(0, secStart) + sec + s.slice(secEnd + "</section>".length);
fs.writeFileSync(p, newContent, "utf8");
console.log("✅ Article 314 images set to m02-02.jpg and m02-03.jpg. Right column ensured.");
