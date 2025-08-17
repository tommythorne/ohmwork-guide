import fs from "fs";

const p = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(p, "utf8");

const headerNeedle = "Article 314";
const hIdx = s.indexOf(headerNeedle);
if (hIdx === -1) {
  console.error("❌ Could not find 'Article 314' header text in page.tsx. Aborting.");
  process.exit(1);
}

const sectOpen = s.lastIndexOf("<section", hIdx);
const sectClose = s.indexOf("</section>", hIdx);
if (sectOpen === -1 || sectClose === -1) {
  console.error("❌ Could not isolate the Article 314 <section> block. Aborting.");
  process.exit(1);
}

let sect = s.slice(sectOpen, sectClose);

/** Ensure a right column exists; if not, insert one after the left column block */
const leftColMarker = 'className="space-y-4 text-white/90 leading-relaxed"';
const hasRightCol =
  sect.includes("Right Column - Visual Examples") ||
  sect.includes('className="space-y-4"') && sect.includes("<Image") && sect.includes("rounded-xl border");

if (!hasRightCol) {
  const leftStart = sect.indexOf(leftColMarker);
  if (leftStart !== -1) {
    // Find closing </div> for the left column. We do a simple depth walk from the start of that DIV.
    const divOpenIdx = sect.lastIndexOf("<div", leftStart);
    let i = divOpenIdx;
    let depth = 0;
    let closeIdx = -1;
    while (i < sect.length) {
      const nextOpen = sect.indexOf("<div", i);
      const nextClose = sect.indexOf("</div>", i);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        i = nextOpen + 4;
      } else {
        depth--;
        i = nextClose + 6;
        if (depth < 0 && closeIdx === -1) {
          closeIdx = nextClose;
          break;
        }
      }
    }
    if (closeIdx !== -1) {
      const rightCol = `
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 314-1: Box Fill Demo */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-02.jpg"
                alt="Box fill calculation with conductors, clamps, and devices labeled"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Box Fill: Counting Volumes Correctly</p>
              </div>
            </div>

            {/* IMAGE 314-2: Device & Clamp Volume */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-03.jpg"
                alt="Device and internal clamp counting toward box volume with code references"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Devices & Clamps Count Toward Volume</p>
              </div>
            </div>
          </div>
`;
      // Insert right after the left column closing </div>
      sect = sect.slice(0, closeIdx + 6) + rightCol + sect.slice(closeIdx + 6);
    }
  }
}

/** Force first two <Image src=...> inside this section to m02-02.jpg and m02-03.jpg */
let imgCount = 0;
sect = sect.replace(
  /(<Image[\s\S]*?src=")\/images\/module-02\/m02-\d+\.jpg(")/g,
  (m, a, b) => {
    imgCount++;
    if (imgCount === 1) return `${a}/images/module-02/m02-02.jpg${b}`;
    if (imgCount === 2) return `${a}/images/module-02/m02-03.jpg${b}`;
    return m;
  }
);

// If we couldn't find any images to normalize, also try generic <Image src="..."> and rewrite first two that point into /images/module-02/
if (imgCount < 2) {
  imgCount = 0;
  sect = sect.replace(
    /(<Image[\s\S]*?src=")\/images\/module-02\/[^"]+(")/g,
    (m, a, b) => {
      imgCount++;
      if (imgCount === 1) return `${a}/images/module-02/m02-02.jpg${b}`;
      if (imgCount === 2) return `${a}/images/module-02/m02-03.jpg${b}`;
      return m;
    }
  );
}

const out = s.slice(0, sectOpen) + sect + s.slice(sectClose);
fs.writeFileSync(p, out, "utf8");
console.log("✅ Article 314 images aligned to m02-02.jpg & m02-03.jpg; right column added if missing.");
