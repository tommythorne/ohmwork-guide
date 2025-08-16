import fs from "fs";

const file = "app/modules/module-01/page.tsx";
let src = fs.readFileSync(file, "utf8");

// --- Ensure Lucide import includes every icon we use ---
const lucideWanted = `import { AlertTriangle, ShieldCheck, BookOpen, Wrench, Zap, Plug, Shield } from "lucide-react";`;
if (src.includes('from "lucide-react"') || src.includes("from 'lucide-react'")) {
  src = src.replace(
    /import\s*\{[^}]*\}\s*from\s*["']lucide-react["'];?/,
    lucideWanted
  );
} else {
  // insert right after "use client";
  src = src.replace(/(^\s*"use client";\s*\n)/, `$1${lucideWanted}\n`);
}

// --- Normalize the Chapter 1 Summary <h2> (remove any emojis/spans/icons) ---
src = src.replace(
  /(<h2[^>]*>)\s*([\s\S]*?)Chapter 1 Summary([\s\S]*?)(<\/h2>)/,
  (_m, open, _mid1, _mid2, close) => `${open}Chapter 1 Summary${close}`
);

// Save
fs.writeFileSync(file, src);
console.log("✅ Fixed Lucide imports and cleaned Chapter 1 Summary heading.");
