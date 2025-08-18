import fs from "fs";

const p = "app/modules/module-02/page.tsx";
let s = fs.readFileSync(p, "utf8");

// helper: replace the first two image srcs in a section (by header text) with target filenames, in order
function setSectionImages(source, headerNeedle, targets) {
  const h = source.indexOf(headerNeedle);
  if (h === -1) return source; // header not found, skip
  const sectionStart = source.lastIndexOf("<section", h);
  if (sectionStart === -1) return source;
  const sectionEnd = source.indexOf("</section>", h);
  if (sectionEnd === -1) return source;

  const before = source.slice(0, sectionStart);
  const section = source.slice(sectionStart, sectionEnd + "</section>".length);
  const after = source.slice(sectionEnd + "</section>".length);

  let i = 0;
  const fixed = section.replace(/src="\/images\/module-02\/m02-\d+\.(?:jpg|jpeg|png|webp|avif)"/g, (m) => {
    if (i >= targets.length) return m;
    const out = `src="/images/module-02/${targets[i++]}"`;
    return out;
  });

  return before + fixed + after;
}

// Desired mapping in page order
const map = [
  { header: "Article 314", imgs: ["m02-02.jpg","m02-03.jpg"] },
  { header: "Article 320", imgs: ["m02-04.jpg","m02-05.jpg"] },
  { header: "Article 330", imgs: ["m02-06.jpg","m02-07.jpg"] },
  { header: "Article 340", imgs: ["m02-08.jpg","m02-09.jpg"] },
  { header: "Article 350", imgs: ["m02-10.jpg","m02-11.jpg"] },
  { header: "Article 360", imgs: ["m02-12.jpg","m02-13.jpg"] },
  { header: "Article 370", imgs: ["m02-14.jpg","m02-15.jpg"] },
  { header: "Article 380", imgs: ["m02-16.jpg","m02-17.jpg"] },
  { header: "Article 390", imgs: ["m02-18.jpg","m02-19.jpg"] },
  { header: "Article 400", imgs: ["m02-20.jpg","m02-21.jpg"] },
  { header: "Article 402", imgs: ["m02-22.jpg","m02-23.jpg"] },
  { header: "Article 404", imgs: ["m02-24.jpg","m02-25.jpg"] },
];

let out = s;
for (const {header, imgs} of map) {
  out = setSectionImages(out, header, imgs);
}

if (out !== s) {
  fs.writeFileSync(p, out, "utf8");
  console.log("✅ Updated image sources for module-02 sections.");
} else {
  console.log("ℹ️ No changes made (headers not found or already aligned).");
}
