#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: scripts/new-module.sh <module-number-two-digits> \"Module Title\"" >&2
  echo "Example: scripts/new-module.sh 06 \"Chapter 6 — Services\"" >&2
  exit 1
fi

NUM="$1"     # e.g. 06
TITLE="$2"   # e.g. Chapter 6 — Services
DIR="app/modules/module-$NUM"
mkdir -p "$DIR"

# page.tsx (thin wrapper that defers to ModuleTemplate)
cat > "$DIR/page.tsx" <<TS
"use client";
import ModuleTemplate from "../../components/ModuleTemplate";
import content from "./content";
export default function Module${NUM//0/}Page() {
  return <ModuleTemplate {...(content as any)} />;
}
TS

# quiz-bridge.ts (robust import shape)
cat > "$DIR/quiz-bridge.ts" <<'TS'
// @ts-nocheck
import * as q from "./quiz";
const arr = (q as any)?.default ?? (q as any)?.quiz ?? (q as any)?.questions ?? [];
export default Array.isArray(arr) ? arr : [];
TS

# quiz.ts (15-question scaffold)
cat > "$DIR/quiz.ts" <<'TS'
// @ts-nocheck
const quiz = Array.from({length: 15}).map((_, i) => ({
  stem: `Question ${i+1}: Replace with a real NEC item for this module.`,
  choices: [
    { label: "A", correct: i % 4 === 0 },
    { label: "B", correct: i % 4 === 1 },
    { label: "C", correct: i % 4 === 2 },
    { label: "D", correct: i % 4 === 3 },
  ],
  explanation: "Why the correct answer is correct (reference the specific article/section)."
}));
export default quiz;
TS

# content.ts (10 articles, stacked images, rotating special block types, 20 images)
# Block rotation: exam -> rule -> code -> table -> chart -> horror -> exam ...
cat > "$DIR/content.ts" <<TS
// @ts-nocheck

const content = {
  hero: {
    imageSrc: "/images/hero-$NUM.jpg",
    imageAlt: "$TITLE",
    title: "$TITLE",
    subtitle: "Generated from template — edit points, images, and blocks to match the NEC chapter focus.",
  },
  prev: { href: "/modules/module-$(printf "%02d" $((10#$NUM-1)) )", label: "Chapter $((10#$NUM-1))" },
  next: { href: "/modules/module-$(printf "%02d" $((10#$NUM+1)) )", label: "Chapter $((10#$NUM+1))" },
  articles: [
    // 10 major articles — fill titles to match your chapter
    ${cat <<'JSON'
    exam
    rule
    code
    table
    chart
    horror
    exam
    rule
    code
    table
JSON
| awk '
  BEGIN{
    titles[1]="Article 1 — Replace with real section";
    titles[2]="Article 2 — Replace with real section";
    titles[3]="Article 3 — Replace with real section";
    titles[4]="Article 4 — Replace with real section";
    titles[5]="Article 5 — Replace with real section";
    titles[6]="Article 6 — Replace with real section";
    titles[7]="Article 7 — Replace with real section";
    titles[8]="Article 8 — Replace with real section";
    titles[9]="Article 9 — Replace with real section";
    titles[10]="Article 10 — Replace with real section";
    i=0;
  }
  { i++; type=$0;
    # Map label/title per block type
    if(type=="exam"){label="EXAM TRAP";tcolor="text-amber-300";}
    else if(type=="rule"){label="RULE OF THUMB";tcolor="text-emerald-300";}
    else if(type=="code"){label="NEC REFERENCE";tcolor="text-blue-300";}
    else if(type=="table"){label="QUICK TABLE";tcolor="text-pink-300";}
    else if(type=="chart"){label="QUICK CHART";tcolor="text-cyan-300";}
    else if(type=="horror"){label="JOBSITE HORROR STORY";tcolor="text-red-300";}
    print "    {";
    print "      icon: \"📘\",";
    print "      title: \"" titles[i] "\",";
    print "      points: [";
    print "        { ref: \"110.\", text: \"First key rule that must be remembered for this section.\" },";
    print "        { ref: \"110.\", text: \"Second key rule; include listing/labeling/torque/clearance where relevant.\" },";
    print "        { ref: \"110.\", text: \"Third key rule with a common field mistake to avoid.\" },";
    print "        { ref: \"110.\", text: \"Practical tip exam writers love to twist (define SHALL vs MAY).\" }";
    print "      ],";
    print "      block: { type: \"" type "\", title: \"" label "\", body: \"Contextual guidance/story/table/chart for this article. Replace with real content from this chapter.\" },";
    print "      images: [";
    print "        { src: \"/images/module-" ENVIRON["NUM"] "/a" i "-1.jpg\", alt: \"Image 1 for article " i "\", caption: \"Describe what we’re seeing and why it matters for this rule.\" },";
    print "        { src: \"/images/module-" ENVIRON["NUM"] "/a" i "-2.jpg\", alt: \"Image 2 for article " i "\", caption: \"Second example that reinforces the point; use jobsite context.\" }";
    print "      ]";
    print "    }" (i<10?",":"");
  }
'
}
  ]
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
TS

echo "✅ Module $NUM scaffolded at $DIR"
