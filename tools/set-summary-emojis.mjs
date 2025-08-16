import fs from "fs";

const file = "app/modules/module-01/page.tsx";
let src = fs.readFileSync(file, "utf8");

// 1) Drop any lucide-react import & any <AlertTriangle .../> in the Summary H2
src = src.replace(/import\s*\{[^}]*\}\s*from\s*["']lucide-react["'];?\s*\n?/g, "");
src = src.replace(
  /(<h2[^>]*>)\s*(?:<AlertTriangle[^>]*>\s*<\/AlertTriangle>|<AlertTriangle[^>]*\/>)?\s*Chapter 1 Summary\s*(<\/h2>)/,
  "$1Chapter 1 Summary$2"
);

// 2) Replace the six icon spans inside the "Key Points Grid" section
const startKey = /Key Points Grid/;
const endKey = /<\/section>/g;

const startMatch = startKey.exec(src);
if (startMatch) {
  // Find end of this section after start
  endKey.lastIndex = startMatch.index;
  const endMatch = endKey.exec(src);
  if (endMatch) {
    const startIdx = startMatch.index;
    const endIdx = endMatch.index;
    const before = src.slice(0, startIdx);
    let middle = src.slice(startIdx, endIdx);
    const after = src.slice(endIdx);

    // Find all <span className="text-2xl">…</span> in this middle block
    const emojiTargets = [
      "⚡", // Purpose & Scope
      "📖", // Definitions
      "🛠️", // General Requirements
      "🔌", // Conductor Rules
      "🧩", // Circuit Basics
      "🛡️", // Protection & Grounding
    ];

    let i = 0;
    middle = middle.replace(
      /<span className="text-2xl">([\s\S]*?)<\/span>/g,
      (_m) => {
        const replacement = emojiTargets[i] ?? "⚡";
        i++;
        return `<span className="text-2xl">${replacement}</span>`;
      }
    );

    src = before + middle + after;
  }
}

fs.writeFileSync(file, src);
console.log("✅ Summary header cleaned and six emojis set: ⚡ 📖 🛠️ 🔌 🧩 🛡️");
