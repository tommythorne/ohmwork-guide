import fs from "fs";
import path from "path";

const FILE = path.join("app","modules","module-01","page.tsx");
let src = fs.readFileSync(FILE, "utf8");

// Ensure "use client" stays first, then add Lucide import if missing
if (!src.includes(`from "lucide-react"`)) {
  // Find the end of the import block (after "use client"; and existing imports)
  // We'll insert after the last import line.
  const lines = src.split("\n");
  let lastImportIdx = -1;
  lines.forEach((l, i) => {
    if (/^\s*import\s+/.test(l)) lastImportIdx = i;
  });
  const importLine = `import { Zap } from "lucide-react";`;
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, importLine);
  } else {
    // Fallback: after "use client";
    const ucIdx = lines.findIndex(l => l.includes(`"use client"`));
    const insertAt = ucIdx >= 0 ? ucIdx + 1 : 0;
    lines.splice(insertAt, 0, importLine);
  }
  src = lines.join("\n");
}

// Replace any <span className="text-4xl">…</span> that precedes H2s with <Zap/> icon
// Also catches empty/broken emoji spans.
src = src.replace(
  /<span\s+className="text-4xl">\s*[^<]*<\/span>/g,
  `<Zap className="w-8 h-8 text-yellow-400" />`
);

// Optional: some places might have an empty <span className="text-4xl"></span> without text.
// The regex above already covers it, but just in case:
src = src.replace(
  /<span\s+className="text-4xl"\s*>\s*<\/span>/g,
  `<Zap className="w-8 h-8 text-yellow-400" />`
);

// Save back
fs.writeFileSync(FILE, src);
console.log("✅ Normalized section headers to Lucide <Zap /> in", FILE);
