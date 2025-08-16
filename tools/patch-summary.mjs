import fs from "fs";

const file = "app/modules/module-01/page.tsx";
let src = fs.readFileSync(file, "utf8");

// Ensure lucide-react import is present (after "use client";)
if (!/from "lucide-react"/.test(src)) {
  src = src.replace(
    /(^\s*"use client";\s*\n)/,
    `$1import { ShieldCheck, BookOpen, Wrench, Zap, Plug, Shield } from "lucide-react";\n`
  );
}

// New Chapter 1 Summary section (no broken emoji, distinct icons)
const newSection = `/* 🎯 Chapter Summary */
<section className={\`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-3000 \${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}\`}>
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
      Chapter 1 Summary
    </h2>
    <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
      You've covered the foundation of the NEC. These general requirements apply to <HL>everything</HL> that follows.
      Master these concepts, and the rest of the Code becomes much clearer.
    </p>
  </div>

  {/* Key Points Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {/* Purpose & Scope */}
    <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
        <ShieldCheck className="w-6 h-6 text-yellow-400" />
      </div>
      <h3 className="font-bold text-white mb-2">Purpose &amp; Scope</h3>
      <p className="text-white/80 text-sm">
        Practical safeguarding, not perfect systems. AHJ enforces, you comply.
      </p>
    </div>

    {/* Definitions */}
    <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
        <BookOpen className="w-6 h-6 text-yellow-400" />
      </div>
      <h3 className="font-bold text-white mb-2">Definitions</h3>
      <p className="text-white/80 text-sm">
        Learn them cold. The exam weaponizes definitions to trip you up.
      </p>
    </div>

    {/* General Requirements */}
    <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Wrench className="w-6 h-6 text-yellow-400" />
      </div>
      <h3 className="font-bold text-white mb-2">General Requirements</h3>
      <p className="text-white/80 text-sm">
        Working space, terminations, listing requirements. Safety first.
      </p>
    </div>

    {/* Conductor Rules */}
    <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Zap className="w-6 h-6 text-yellow-400" />
      </div>
      <h3 className="font-bold text-white mb-2">Conductor Rules</h3>
      <p className="text-white/80 text-sm">
        Color coding, identification, sizing. White/gray = neutral only.
      </p>
    </div>

    {/* Circuit Basics */}
    <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Plug className="w-6 h-6 text-yellow-400" />
      </div>
      <h3 className="font-bold text-white mb-2">Circuit Basics</h3>
      <p className="text-white/80 text-sm">
        Branch circuits, feeders, services. Know the hierarchy and rules.
      </p>
    </div>

    {/* Protection & Grounding */}
    <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Shield className="w-6 h-6 text-yellow-400" />
      </div>
      <h3 className="font-bold text-white mb-2">Protection &amp; Grounding</h3>
      <p className="text-white/80 text-sm">
        Overcurrent protection, grounding, bonding. Safety through proper design.
      </p>
    </div>
  </div>
</section>`;

// Replace the whole Chapter Summary section (from its comment to the closing </section>)
const re = /\/\*\s*��\s*Chapter Summary\s*\*\/[\s\S]*?<\/section>/;
if (re.test(src)) {
  src = src.replace(re, newSection);
} else {
  // Fallback: if not found, do nothing but write unchanged
  console.warn("Chapter Summary block not found — no replacement made.");
}

fs.writeFileSync(file, src);
console.log("✅ Patched Chapter 1 Summary and ensured Lucide imports.");
