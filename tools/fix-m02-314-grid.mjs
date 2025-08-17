import fs from "fs";

const p = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(p, "utf8");

// Grab the Article 314 section (from its <h2> to the next </section>)
const secRe = /(<section[^>]*>[\s\S]*?<h2[^>]*>\s*Article\s*314[\s\S]*?<\/h2>)([\s\S]*?)(<\/section>)/i;
const m = secRe.exec(s);
if (!m) {
  console.error("❌ Could not locate the Article 314 <section> by its <h2> text.");
  process.exit(1);
}

const [full, beforeH2, afterH2ToReplace, closingSection] = m;

// Inside this 314 block, find the FIRST grid that should be the two-column layout and replace it.
const gridRe = /<div className="grid[^"]*lg:grid-cols-2[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/; 
// The pattern above matches the two-column grid and the two nested closing </div>s that typically follow
// (the right-column wrapper cards add two container divs). If this feels too tight in your codebase,
// we also try a looser match:
const gridReLoose = /<div className="grid[^"]*lg:grid-cols-2[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/;

let newBlock = afterH2ToReplace;
const newGrid = `
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>314.16(B)</HL>: Use box fill calculation rules. Count each conductor, device yoke, internal clamp, and EGC correctly.
            </p>
            <p>
              — <HL>Conductor Count</HL>: Each ungrounded or neutral conductor = 1 volume of its largest gauge.
            </p>
            <p>
              — <HL>All EGCs together</HL>: Count as 1 volume total (of the largest EGC).
            </p>
            <p>
              — <HL>Internal Clamps</HL>: Add 1 volume if present. Device yoke = 2 volumes of the largest conductor connected.
            </p>
          </div>

          {/* Right Column - Visual Examples */}
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
        </div>
`.trim();

// Try strict replacement first
if (gridRe.test(newBlock)) {
  newBlock = newBlock.replace(gridRe, newGrid);
} else if (gridReLoose.test(newBlock)) {
  newBlock = newBlock.replace(gridReLoose, newGrid);
} else {
  console.error("❌ Could not find the Article 314 two-column grid to replace. Aborting.");
  process.exit(1);
}

// Reassemble file
const out = s.replace(secRe, `$1${newBlock}${closingSection}`);
fs.writeFileSync(p, out, "utf8");
console.log("✅ Article 314 grid replaced with right-column image layout (m02-02.jpg, m02-03.jpg).");
