const content = {
  hero: {
    imageSrc: "/images/module-03/m03-hero.jpg",
    imageAlt: "Assorted wiring methods: EMT, PVC, MC, tray",
    title: "Chapter 3 — Wiring Methods & Materials",
    subtitle:
      "Pick the right wiring method, support it, bond it, and mind the details—this is most of what you do on real jobs."
  },

  // NAV
  prev: { href: "/modules/module-02", label: "Chapter 2" },
  next: { href: "/modules/module-04", label: "Chapter 4" },

  // ARTICLES — 10 total
  articles: [
    // 1) 300 — General Requirements
    {
      icon: "🧭",
      title: "300 — General Requirements for Wiring Methods",
      points: [
{ ref: "300.4/5", text: "Protection from physical damage; burial depths vary by method and occupancy." },
        { ref: "300.10", text: "Metal raceways must be **electrically continuous** and effectively bonded." },
        { ref: "300.15", text: "All splices/terminations in boxes or fittings—no loose splices in raceways." }
,
        { ref: "Damage", text: "Protect wiring methods from **physical damage**; add sleeves/guards where exposed to abuse." },
        { ref: "Fittings", text: "Use **listed fittings** for the wiring method; don’t mix EMT and RMC fittings." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — Location governs method",
        body:
          "Dry vs damp vs wet changes **everything**: allowed methods, fittings, and conductor ratings. Identify the space first; choose the method second."
      },
      images: [
        { src: "/images/module-03/m03-300-01.jpg", alt: "Raceway run through mixed-use areas", caption: "Method changes when the environment changes." },
        { src: "/images/module-03/m03-300-02.jpg", alt: "Bonding bushing on raceway", caption: "Maintain a continuous fault-return path." }
      ]
    },

    // 2) 358 — EMT
    {
      icon: "📎",
      title: "358 — EMT: The Everyday Raceway",
      points: [
{ ref: "358.12", text: "Not permitted where subject to severe physical damage or in some corrosive environments unless protected." },
        { ref: "358.30", text: "Support within 3 ft of each box and at required intervals (check local adoption)." },
        { ref: "358.26", text: "Total bends ≤ **360°** between pull points." }
,
        { ref: "Ends", text: "**Ream cut ends**; no sharp edges that can damage insulation." },
        { ref: "Fittings", text: "Choose **compression vs set-screw** fittings by **location** (wet/damp) and spec." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Strap the ends",
        body:
          "Strap within the first few feet of boxes and keep runs straight—inspectors look for **support near terminations** every time."
      },
      images: [
        { src: "/images/module-03/m03-358-01.jpg", alt: "EMT neatly strapped and aligned", caption: "Straight, supported, and bonded." },
        { src: "/images/module-03/m03-358-02.jpg", alt: "Close-up EMT set-screw fitting", caption: "Use fittings listed for EMT—wet-location where required." }
      ]
    },

    // 3) 342/344 — IMC / RMC
    {
      icon: "🧱",
      title: "342 & 344 — IMC / RMC: Heavy-Duty Metal Conduit",
      points: [
{ ref: "342/344.10", text: "Permitted in most locations, including outdoor and where subject to physical damage." },
        { ref: "Bonding", text: "Use bonding bushings/fittings where raceway continuity could be interrupted." },
        { ref: "Corrosion", text: "Field cuts need ream and corrosion protection; use proper thread compound." }
,
        { ref: "Threads", text: "Use **thread sealant** approved for electrical; protect threads against corrosion." },
        { ref: "Earth/Concrete", text: "Suitable for **direct earth** and **encasement in concrete** where identified." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — Bonding fittings",
        body:
          "Where concentric/eccentric knockouts or nonmetallic raceway interrupt continuity, use **bonding bushings/jumpers** to preserve the fault path."
      },
      images: [
        { src: "/images/module-03/m03-344-01.jpg", alt: "RMC service with bonding bushings", caption: "Bonding jumpers across concentric KOs." },
        { src: "/images/module-03/m03-344-02.jpg", alt: "IMC riser outdoors", caption: "Right method for exposed, tough locations." }
      ]
    },

    // 4) 352 — PVC
    {
      icon: "🧰",
      title: "352 — PVC: Nonmetallic Workhorse",
      points: [
{ ref: "352.10", text: "Permitted in wet locations; use **sunlight-resistant** types where exposed to sun." },
        { ref: "352.44", text: "Provide **expansion fittings** where thermal movement is expected (roofs/long runs)." },
        { ref: "352.30", text: "Support per manufacturer and Code—intervals depend on trade size and schedule." }
,
        { ref: "EGC", text: "Run an **equipment grounding conductor**—PVC does **not** provide a ground path." },
        { ref: "Expansion", text: "Provide **expansion joints** for temperature movement; set the correct take-up." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — Expansion & fittings",
        body:
          "Calculate thermal movement and add expansion fittings with proper **gaps and guides**. Use **wet-location fittings** where required."
      },
      images: [
        { src: "/images/module-03/m03-352-01.jpg", alt: "PVC with expansion fitting on a wall", caption: "Expansion fitting bridging temperature swings." },
        { src: "/images/module-03/m03-352-02.jpg", alt: "PVC underground stub-ups", caption: "Protect emerging PVC where subject to damage." }
      ]
   },
    // 5) 330 — MC Cable
    {
      icon: "🧵",
      title: "330 — MC Cable: Types & Uses",
      points: [
{ ref: "330.10", text: "MC is allowed in many occupancies; check listing for **wet locations**, **health care (HCF)**, or **fire-rated** assemblies." },
        { ref: "Support", text: "Secure near terminations and at required intervals; avoid crushing or over-bending." },
        { ref: "Terminations", text: "Use **listed connectors**; anti-shorts as required by the connector/listing." }
,
        { ref: "ArmorEGC", text: "Some MC types allow **armor as EGC** when **marked**; otherwise include an EGC conductor." },
        { ref: "Fittings", text: "Use **listed MC connectors**; add anti-short bushings **if required by the connector/listing**." }
      ],
      block: {
        type: "grid",
        title: "MC Types at a Glance",
        grid: [
          ["Standard MC", "Dry/damp; EGC via armor or conductor"],
          ["MC-WET/WET-LOC", "Listed for wet locations"],
          ["HCF MC", "Hospital-grade patient care spaces"],
          ["Fire-rated MC", "2-hour circuits (per assembly listing)"]
        ],
        body: "Always read the **product label** and local adoption. Don’t assume any MC works everywhere."
      },
      images: [
        { src: "/images/module-03/m03-330-01.jpg", alt: "MC cable neatly strapped", caption: "Strap near terminations; no kinks." },
        { src: "/images/module-03/m03-330-02.jpg", alt: "MC connector with anti-short", caption: "Use the connector the listing calls for." }
      ]
    },

    // 6) 348/350 — FMC & LFMC
    {
      icon: "🌀",
      title: "348/350 — FMC & LFMC: Flexible Done Right",
      points: [
{ ref: "Length", text: "Short flexible sections for vibration/isolation; **don’t** run long flex in place of raceway." },
        { ref: "EGC", text: "Armor continuity + listed fittings for a reliable fault path; LFMC in wet areas needs wet-rated fittings." },
        { ref: "Bend radius", text: "Respect minimum bend radius—crushed whips overheat conductors." }
,
        { ref: "Length", text: "Keep **flex lengths short** to relieve vibration and facilitate connections (watch specific length rules)." },
        { ref: "EGC", text: "Ensure **equipment grounding continuity** through armor/fittings or run a separate EGC." }
      ],
      block: {
        type: "horror",
        title: "JOBSITE HORROR STORY — Crushed Whip Cooked a Motor",
        body:
          "An LFMC whip kinked behind a curb overheated conductors and tripped a rooftop unit. Keep whips **short, supported, and with proper radius**."
      },
      images: [
        { src: "/images/module-03/m03-350-01.jpg", alt: "LFMC whip to rooftop unit", caption: "Short, supported, wet-rated fittings." },
        { src: "/images/module-03/m03-350-02.jpg", alt: "Crushed flexible conduit", caption: "Tight bends crush the spiral and damage insulation." }
      ]
    },

    // 7) 314 — Boxes & Conduit Bodies
    {
      icon: "📦",
      title: "314 — Boxes & Conduit Bodies: Fill and Fit",
      points: [
{ ref: "314.16", text: "Box-fill math: each conductor counts; all EGCs together as one; internal clamps count; devices can count as **two**." },
        { ref: "Conduit bodies", text: "LBs marked **‘for pulling only’** don’t permit splices regardless of volume." },
        { ref: "Covers", text: "Boxes and bodies require covers and must stay accessible." }
,
        { ref: "Volume", text: "Use **box-fill** rules: conductor volume by AWG; devices may count as **two** conductors on the yoke." },
        { ref: "EGC Count", text: "All equipment grounding conductors **together count as one** of the largest size present." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — Box-Fill & LB Splice",
        body:
          "Two big misses: devices counting as **two** conductors (largest on the yoke) and **pull-only** LBs (no splices)."
      },
      images: [
        { src: "/images/module-03/m03-314-01.jpg", alt: "Device box crowded with conductors", caption: "Do the math—heat and nuisance trips come from overfill." },
        { src: "/images/module-03/m03-314-02.jpg", alt: "Conduit body marking", caption: "Check ‘splicing permitted’ and volume." }
      ]
    },

    // 8) 300.5 — Underground
    {
      icon: "⛏️",
      title: "300.5 — Underground Wiring: Depth & Details",
      points: [
{ ref: "Cover", text: "Cover depth varies by method/occupancy—PVC vs RMC vs direct-bury are different." },
        { ref: "Emergence", text: "Protect where raceway emerges from grade; rigid elbows often required for damage protection." },
        { ref: "Locate/mark", text: "Call before you dig; use warning tape/tracer where required." }
,
        { ref: "Cover", text: "**Cover depth** depends on method/occupancy—verify before trenching." },
        { ref: "Backfill", text: "Provide proper **backfill/bedding** to prevent raceway damage." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Depths aren’t one-size",
        body:
          "Direct-bury cable, PVC, RMC, and low-voltage lighting all have **different** cover depths. Confirm the method, then check the table."
      },
      images: [
        { src: "/images/module-03/m03-3005-01.jpg", alt: "Trench with conduit at correct depth", caption: "Depth verified before backfill." },
        { src: "/images/module-03/m03-3005-02.jpg", alt: "Warning tape in trench", caption: "Mark the run to avoid future surprises." }
      ]
    },

    // 9) 300 — Bends/Fill/Pull points
    {
      icon: "📐",
      title: "300 — Bends, Fill, and Pull Points",
      points: [
{ ref: "360° rule", text: "Total bends between pull points **≤ 360°**." },
        { ref: "Bend radius", text: "Follow method-specific minimum bend radius for conductors/raceway." },
        { ref: "Fill", text: "Use Chapter 9 tables for fill—changes by conductor count and raceway type." }
,
        { ref: "360°", text: "**Max 360°** of bends between pull points; add a box if more turns are needed." },
        { ref: "Radius", text: "Respect **minimum bend radius** per method/conductor; tight bends overheat insulation." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — Add a pull point",
        body:
          "If you’ll exceed **360°** or struggle to pull, add a box or body. It saves insulation and labor."
      },
      images: [
        { src: "/images/module-03/m03-300-03.jpg", alt: "Conduit run with pull point", caption: "Pull points make long runs practical." },
        { src: "/images/module-03/m03-300-04.jpg", alt: "Tight bend radius warning", caption: "Tight bends = damaged insulation." }
      ]
    },

    // 10) 392 — Cable Tray
    {
      icon: "🪜",
      title: "392 — Cable Tray: Systems, Supports, Separation",
      points: [
{ ref: "Types", text: "Ladder vs ventilated vs solid-bottom; support per manufacturer spacing." },
        { ref: "Fill", text: "Tray fill and ampacity depend on **type, spacing, and cable rating**." },
        { ref: "Separation", text: "Signal/communication often require separation or barriers—check the spec." }
,
        { ref: "Fill", text: "Respect **tray fill** limits and side-rail height (per listing and NEMA/NEC guidance)." },
        { ref: "Support", text: "Keep **support spans** within manufacturer’s max; add mid-span supports for heavy runs." }
      ],
      block: {
        type: "table",
        title: "Tray Snapshot",
        table: [
          ["Tray type", "Strength / Ventilation", "Common use"],
          ["Ladder", "High / Excellent", "Power feeders, long spans"],
          ["Ventilated trough", "Medium / Good", "Branch circuits, short spans"],
          ["Solid-bottom", "Low / Poor", "Control/IT (with heat concerns)"]
        ],
        body:
          "Values are illustrative—**always** follow the manufacturer’s charts for span spacing, loading, and fill."
      },
      images: [
        { src: "/images/module-03/m03-392-01.jpg", alt: "Ladder tray run", caption: "Long spans with strong rungs." },
        { src: "/images/module-03/m03-392-02.jpg", alt: "Ventilated tray with branch circuits", caption: "Mind fill and support spacing." }
      ]
    }
  ],

  // SUMMARY — takeaways
  summary: {
    title: "Wiring Methods — What to Take to the Job",
    cards: [
      { title: "Location First", text: "Dry/damp/wet decides the method, fittings, and conductor ratings." },
      { title: "Support & Secure", text: "Strap near enclosures and at required intervals. Sag and drift fail inspections." },
      { title: "Fault Path Matters", text: "Raceways/fittings must maintain grounding/bonding continuity." },
      { title: "Bends & Fill", text: "≤360° between pull points; respect bend radius and fill tables." },
      { title: "Boxes & Bodies", text: "Do the box-fill math; check LB markings before you splice." },
      { title: "Environment & Corrosion", text: "Use materials/finishes listed for the space you’re in." }
    ]
  }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
