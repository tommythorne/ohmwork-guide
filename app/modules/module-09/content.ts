/* Module 9 — Chapter 9 Tables (Conduit Fill, Conductor Dimensions, Impedance) */
const content = {
  hero: {
    imageSrc: "/images/module-09/m09-hero.jpg",
    imageAlt: "Conduit, conductors, and calculation tables",
    title: "Chapter 9 — Tables & Raceway Sizing",
    subtitle:
      "Turn tables into answers: conduit fill, conductor dimensions, compact conductors, and impedance—exactly how the exam tests it."
  },

  // NAV
  prev: { href: "/modules/module-08", label: "Chapter 8" },
  next: { href: "/modules/module-10", label: "Chapter 10" },

  // 10 articles — exam-priority, with varied special blocks (table/chart/exam/rule/code/horror)
  articles: [
    // 1) Orientation
    {
      icon: "🧭",
      title: "What’s in Chapter 9 (and Why it Matters)",
      points: [
        { ref: "Table Map", text: "Exam workhorses: **Table 1** (percent fill), **Table 4** (raceway dimensions/areas), **Table 5/5A** (conductor dimensions), **Tables 8 & 9** (resistance/impedance)." },
        { ref: "Workflow", text: "Most sizing questions = Table 5/5A to get areas → Table 1 percent → Table 4 to pick trade size." },
        { ref: "Notes", text: "Chapter 9 **Notes** change the math (e.g., 24-in nipples at 60% fill). Read them or miss points." },
        { ref: "Scope", text: "These tables support Chapters 1–4 wiring rules. You apply both: Code rule + the right table." }
      ],
      block: {
        type: "rule",
        title: "Use the Right Trio",
        body: "For insulated conductors in raceway: **Table 5/5A → Table 1 → Table 4**. That trio answers 80% of exam sizing prompts."
      },
      images: [
        { src: "/images/module-09/m09-overview-01.jpg", alt: "NEC tables overview diagram", caption: "Know which table does what—then chain them." },
        { src: "/images/module-09/m09-overview-02.jpg", alt: "Exam highlighters over tables", caption: "Mark Table 1, 4, 5/5A, 8, and 9." }
      ]
    },

    // 2) Table 1 percent fill
    {
      icon: "📊",
      title: "Table 1 — Percent Fill (The Gatekeeper)",
      points: [
        { ref: "Table 1", text: "1 conductor: **53%**; 2 conductors: **31%**; **>2 conductors: 40%** of the raceway cross-sectional area." },
        { ref: "EGC Counts", text: "Equipment grounding conductors **count** as conductors for fill." },
        { ref: "Cables in Raceway", text: "If installing a **cable** in a raceway (not individual conductors), use the cable’s **overall diameter/area** against the same percent limits." },
        { ref: "Exam Angle", text: "Prompts often hide an extra EGC or mislabel a cable as individual conductors. Count correctly." }
      ],
      block: {
        type: "chart",
        title: "Percent Fill Quick Chart",
        chart: [
          { label: "1 Conductor", value: 53 },
          { label: "2 Conductors", value: 31 },
          { label: ">2 Conductors", value: 40 }
        ],
        body: "Start with the correct percent, or every downstream step is wrong."
      },
      images: [
        { src: "/images/module-09/m09-table1-01.jpg", alt: "Conduit section with single conductor", caption: "53% applies to a single conductor." },
        { src: "/images/module-09/m09-table1-02.jpg", alt: "Multiple conductors in conduit", caption: "More than two conductors → 40% fill." }
      ]
    },

    // 3) Table 4 + Table 5/5A workflow
    {
      icon: "🧮",
      title: "Using Tables 4 and 5/5A Together",
      points: [
        { ref: "Step 1", text: "Use **Table 5** for **insulated conductor** dimensions/areas (THHN, XHHW, etc.). Use **Table 5A** for **compact** conductors." },
        { ref: "Step 2", text: "Sum the areas (or use largest as required for given conductor count/type)." },
        { ref: "Step 3", text: "Apply **Table 1** percent to find the **minimum raceway area** you need." },
        { ref: "Step 4", text: "Go to **Table 4** and choose a **trade size** where the allowable area ≥ your requirement (for the correct raceway type: EMT, PVC, etc.)." }
      ],
      block: {
        type: "code",
        title: "Match the Raceway Type",
        body: "Table 4 has separate columns by raceway type and size. Use the correct material (EMT vs PVC) and the right **allowable area** column."
      },
      images: [
        { src: "/images/module-09/m09-workflow-01.jpg", alt: "Table 5 conductor area highlighted", caption: "Grab area per conductor from Table 5/5A." },
        { src: "/images/module-09/m09-workflow-02.jpg", alt: "Table 4 allowable area highlighted", caption: "Pick the first trade size that meets/exceeds your needed area." }
      ]
    },

    // 4) Notes — nipple rule and rounding
    {
      icon: "📝",
      title: "Critical Notes — Nipples & Rounding",
      points: [
        { ref: "Nipple ≤24 in", text: "Raceway **24 in or less** (a ‘nipple’) may be filled to **60%** of its area—connectors/couplings **don’t count** toward that 24 in length." },
        { ref: "Rounding Conductors", text: "When converting decimals to a conductor count, **≥ 0.8 rounds up**. Exams bait with 0.79 vs 0.8." },
        { ref: "Mixed Sizes", text: "When mixed sizes are present, use each conductor’s actual area from Table 5/5A—**don’t average diameters**." },
        { ref: "Cable in Raceway", text: "For a **cable** (not singles), compute using the **overall cable area** against Table 1 percents." }
      ],
      block: {
        type: "exam",
        title: "Nipple 60% & 0.8 Rounding",
        body: "If it’s truly a ≤24 in nipple, **60%** is allowed. If your decimal is **≥0.8**, round **up** the conductor count. Two classic exam traps."
      },
      images: [
        { src: "/images/module-09/m09-nipple-01.jpg", alt: "Short conduit nipple", caption: "Verify length end-to-end, not including fittings." },
        { src: "/images/module-09/m09-round-01.jpg", alt: "Calculator rounding example", caption: "0.80 goes up; 0.79 stays down." }
      ]
    },

    // 5) Compact conductors (Table 5A)
    {
      icon: "🧵",
      title: "Compact Conductors — Table 5A",
      points: [
        { ref: "Compact ≠ THHN", text: "Compact strands have **smaller diameter** for same AWG. Use **Table 5A** dimensions/areas, not the standard Table 5 values." },
        { ref: "Listings", text: "Your conductor type (e.g., XHHW-2 compact) defines which row applies. Manufacturer/catalog + Table 5A must align." },
        { ref: "Fill Impact", text: "Smaller area can reduce raceway size **if** the exam problem explicitly says ‘compact’." },
        { ref: "Exam Cue", text: "If ‘compact’ isn’t stated, assume **standard** Table 5." }
      ],
      block: {
        type: "rule",
        title: "Only Compact When Stated",
        body: "Don’t ‘upgrade’ to compact values unless the question, drawings, or label clearly say **compact**."
      },
      images: [
        { src: "/images/module-09/m09-compact-01.jpg", alt: "Compact conductor cross-section", caption: "Compact = smaller OD at same AWG." },
        { src: "/images/module-09/m09-compact-02.jpg", alt: "Conductor catalog page", caption: "Confirm type and construction before using 5A." }
      ]
    },

    // 6) Cables in raceway
    {
      icon: "🧯",
      title: "Cables in Raceway — Use Overall Diameter",
      points: [
        { ref: "Overall OD", text: "For **MC/TC/communications cables** in raceway, compute area from the **overall cable diameter**, then apply Table 1 percent." },
        { ref: "One vs Multiple", text: "1 cable → 53%, 2 cables → 31%, >2 cables → 40% (same percent rules by count)." },
        { ref: "Exam Gotcha", text: "Don’t treat a cable as individual THHN conductors unless the problem explicitly says singles." }
      ],
      block: {
        type: "table",
        title: "Cable in Raceway — Percent Map",
        table: [
          ["# of Cables in Raceway", "Percent Fill"],
          ["1", "53%"],
          ["2", "31%"],
          [">2", "40%"]
        ],
        body: "Work from **overall cable area**, not sum of internal conductors."
      },
      images: [
        { src: "/images/module-09/m09-cable-01.jpg", alt: "MC cable entering conduit", caption: "Use cable OD for the area calculation." },
        { src: "/images/module-09/m09-cable-02.jpg", alt: "Multiple small LV cables in conduit", caption: "Percent rules follow count of **cables**." }
      ]
    },

    // 7) Worked example
    {
      icon: "✏️",
      title: "Worked Example — Mixed THHN in EMT",
      points: [
        { ref: "Given", text: "Three 3/0 Cu THHN + one #6 Cu THHN + one #8 Cu THHN in **EMT**." },
        { ref: "Step A", text: "Table 5: pull areas for 3/0, #6, #8 THHN; **sum** the areas." },
        { ref: "Step B", text: "Table 1: >2 conductors → **40%**. Compute **min raceway area needed**." },
        { ref: "Step C", text: "Table 4 (EMT): choose first trade size with allowable area ≥ requirement." }
      ],
      block: {
        type: "code",
        title: "Answer Structure Matters",
        body: "Show table source, show math, show chosen trade size. That structure earns points even if you fat-finger a decimal."
      },
      images: [
        { src: "/images/module-09/m09-example-01.jpg", alt: "Calculation sheet steps", caption: "Call out the table numbers in your work." },
        { src: "/images/module-09/m09-example-02.jpg", alt: "EMT sizes chart", caption: "Pick the first EMT size where allowable area ≥ required." }
      ]
    },

    // 8) Tables 8 & 9 — resistance/impedance
    {
      icon: "⚡",
      title: "Tables 8 & 9 — Resistance and Impedance",
      points: [
        { ref: "Table 8", text: "**DC resistance** (and some 1-phase AC at unity PF). Used for VD calcs where DC or simple cases apply." },
        { ref: "Table 9", text: "**AC impedance** data for 60 Hz 3-phase conductors (R and X). Use for AC VD calcs with **power factor** considerations." },
        { ref: "Exam Cue", text: "If the problem mentions **3-phase** and **PF**, that’s a Table 9 job." }
      ],
      block: {
        type: "table",
        title: "Which Table for Voltage Drop?",
        table: [
          ["Scenario", "Use"],
          ["DC / simple case", "Table 8 (resistance)"],
          ["3-phase AC with PF", "Table 9 (impedance R & X)"]
        ],
        body: "Pick the proper electrical model or you’ll miss by several percent."
      },
      images: [
        { src: "/images/module-09/m09-vd-01.jpg", alt: "Voltage drop diagram", caption: "Impedance vs resistance changes the math." },
        { src: "/images/module-09/m09-vd-02.jpg", alt: "Three-phase feeder sketch", caption: "3-phase + PF → Table 9." }
      ]
    },

    // 9) Common exam mistakes
    {
      icon: "🚫",
      title: "Five Common Exam Traps",
      points: [
        { ref: "Wrong Percent", text: "Using 40% for two conductors (should be 31%)." },
        { ref: "Ignoring Notes", text: "Missing the ≤24 in nipple at 60%." },
        { ref: "Wrong Table 4 Column", text: "Mixing up EMT vs PVC or using internal diameter instead of **allowable area**." },
        { ref: "Compact Confusion", text: "Using Table 5A values when the problem never says ‘compact’ (or vice-versa)." },
        { ref: "Cable vs Singles", text: "Treating a cable as individual conductors for area math." }
      ],
      block: {
        type: "exam",
        title: "Fast Trap Check",
        body: "Percent? Notes? Raceway type? Compact? Cable vs singles? — Clear these five and most Chapter 9 problems fall in line."
      },
      images: [
        { src: "/images/module-09/m09-traps-01.jpg", alt: "Warning symbols", caption: "A quick pre-flight catches most misses." },
        { src: "/images/module-09/m09-traps-02.jpg", alt: "Checklist clipboard", caption: "Run the trap checklist before answering." }
      ]
    },

    // 10) Field horror
    {
      icon: "💀",
      title: "Jobsite Horror — The Unpullable Conduit",
      points: [
        { ref: "Overfill", text: "Over 40% fill with >2 conductors leads to jammed pulls, damaged insulation, and failed inspections." },
        { ref: "Wrong Material", text: "Sizing from EMT column but installing PVC = you picked the wrong allowable area." },
        { ref: "Fix Cost", text: "Re-pull with larger raceway or break the run—both burn schedule and budget." }
      ],
      block: {
        type: "horror",
        title: "Pull Planning Beats Re-Pulls",
        body: "Do the Chapter 9 math **before** bending pipe. It’s faster to size right than to explain why the wire won’t pull."
      },
      images: [
        { src: "/images/module-09/m09-horror-01.jpg", alt: "Kinked conductor at conduit entry", caption: "Overfill kills insulation and schedule." },
        { src: "/images/module-09/m09-horror-02.jpg", alt: "Crew re-pulling conductors", caption: "Right math once > wrong pull twice." }
      ]
    }
  ],

  // Summary — short, exam-oriented
  summary: {
    title: "Chapter 9 — Exam Quick Hits",
    cards: [
      { iconName: "📊", title: "Percent Fill", text: "1→53%, 2→31%, >2→40% (Table 1)." },
      { iconName: "🧮", title: "Sizing Flow", text: "Table 5/5A → Table 1 → Table 4." },
      { iconName: "📝", title: "Notes Matter", text: "≤24 in nipples at 60%; decimals ≥0.8 round up." },
      { iconName: "🧵", title: "Compact Only If Stated", text: "Use 5A only for compact conductors." },
      { iconName: "⚡", title: "VD Tables", text: "DC → Table 8; 3-phase+PF → Table 9." },
      { iconName: "🚫", title: "Trap Check", text: "Percent, Notes, Raceway type, Compact, Cable vs singles." }
    ]
  }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
