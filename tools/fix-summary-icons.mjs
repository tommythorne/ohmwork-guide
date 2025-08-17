import fs from "fs";

const file = "app/modules/module-01/page.tsx";
let s = fs.readFileSync(file, "utf8");

// A) Remove AlertTriangle icon in the Chapter 1 Summary header (keep the box & text)
s = s.replace(/<AlertTriangle[^>]*\/>\s*/g, "");

// B) Remove the AlertTriangle import if present
s = s.replace(/^import\s*\{\s*AlertTriangle\s*\}\s*from\s*["']lucide-react["'];?\s*\n?/m, "");

// Helper: replace the <span className="text-2xl">…</span> that appears before a given card title
function iconBefore(label, emoji){
  const re = new RegExp(
    String.raw`(<span className="text-2xl">)[\s\S]*?(</span>[\s\S]*?<h3[^>]*>\s*${label.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\s*<\/h3>)`,
    "m"
  );
  s = s.replace(re, `$1${emoji}$2`);
}

// C) Set unique emojis for the six cards
iconBefore("Purpose & Scope", "🎯");
iconBefore("Definitions", "📚");
iconBefore("General Requirements", "🛠️");     // reinforce
iconBefore("Conductor Rules", "🔌");
iconBefore("Circuit Basics", "🧭");
iconBefore("Protection & Grounding", "🛡️");

// D) Tidy any double blank lines left behind
s = s.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync(file, s, "utf8");
console.log("✅ Fixed Chapter 1 Summary header and icons.");
