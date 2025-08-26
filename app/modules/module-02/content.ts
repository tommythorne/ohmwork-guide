/* Module 2 — Wiring & Protection (Chapter 2) */
const content = {
  hero: {
    imageSrc: "/images/module-02/m02-hero.jpg",
    imageAlt: "Conductors, overcurrent protection, and grounding/bonding",
    title: "Chapter 2 — Wiring and Protection",
    subtitle:
      "Master conductors, overcurrent protection, grounding/bonding, and enclosure rules—the backbone of safe installs."
  },

  // NAV
  prev: { href: "/modules/module-01", label: "Chapter 1" },
  next: { href: "/modules/module-03", label: "Chapter 3" },

  // ARTICLES — 10 total, each with points, a special block, and two images
  articles: [
    {
      icon: "🧠",
      title: "240 — Overcurrent Protection Basics",
      points: [
        { ref: "240.4", text: "Conductors must be protected per ampacity; use next-higher OCPD allowances only where permitted." },
        { ref: "240.21", text: "Taps have strict length and protection rules—memorize the common 10/25/25-ft patterns." },
        { ref: "240.6", text: "Standard OCPD ratings; choose the next standard size only when allowed elsewhere." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — ‘Next Size Up’",
        body: "You can’t always round up the breaker. 240.4(B) is limited—watch small conductor exceptions and equipment listings."
      },
      images: [
        { src: "/images/module-02/m02-240-01.jpg", alt: "Assorted breakers", caption: "Know standard ratings and rounding rules." },
        { src: "/images/module-02/m02-240-02.jpg", alt: "Tap diagram", caption: "Tap rules = length, protection, termination." }
      ]
    },

    {
      icon: "��",
      title: "310 — Conductor Ampacity (310.16)",
      points: [
        { ref: "Temp Ratings", text: "Use the **lowest** termination or conductor temp rating in the circuit." },
        { ref: "Adjustment", text: "Apply ambient and bundling adjustment factors; then verify OCPD and load." },
        { ref: "Copper/Al", text: "Aluminum runs larger for same ampacity—check the table, not your gut." }
      ],
      block: {
        type: "table",
        title: "Quick Sheet — 75°C Cu (Common)",
        body: "Examples only—always use the table: #12=25A, #10=35A, #8=50A, #6=65A, #4=85A, #3=100A, #2=115A (adjust/ambient as required)."
      },
      images: [
        { src: "/images/module-02/m02-310-01.jpg", alt: "Ampacity table highlight", caption: "310.16: apply temp & adjustment factors." },
        { src: "/images/module-02/m02-310-02.jpg", alt: "Conductor bundle", caption: "Bundling derates—don’t skip the math." }
      ]
    },

    {
      icon: "🧲",
      title: "250 — Grounding & Bonding (Core Concepts)",
      points: [
        { ref: "250.4", text: "Grounding = reference to earth; Bonding = connect metal parts to reduce voltage differences." },
        { ref: "Fault Path", text: "Establish a low-impedance fault path—bond enclosures, raceways, and equipment grounds." },
        { ref: "Jumpers", text: "Main bonding jumper at service; use system bonding jumper for separately derived systems." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — 250.4",
        body: "Objectives spell it out: effective fault-current path, clear faults fast, minimize voltage on metal parts."
      },
      images: [
        { src: "/images/module-02/m02-250-01.jpg", alt: "Bonded equipment", caption: "Bond all metal parts in the path." },
        { src: "/images/module-02/m02-250-02.jpg", alt: "Service bonding jumper", caption: "Know your MBJ vs SBJ locations." }
      ]
    },

    {
      icon: "��",
      title: "250 — Grounding Electrode System",
      points: [
        { ref: "250.50", text: "Bond all available electrodes into a system (ufer, building steel, water pipe, etc.)." },
        { ref: "250.66", text: "Size the GEC from largest ungrounded conductor—watch parallel conductor notes." },
        { ref: "Connections", text: "Use listed clamps/irreversible connectors; protect from physical damage." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Use What’s There",
        body: "If concrete-encased rebar (Ufer) exists, you must use it. Failing to bond available electrodes is a common red tag."
      },
      images: [
        { src: "/images/module-02/m02-ges-01.jpg", alt: "Ufer connection", caption: "Concrete-encased electrode wins for stability." },
        { src: "/images/module-02/m02-ges-02.jpg", alt: "Bonded rebar clamp", caption: "Listed connectors only—no hardware-store hacks." }
      ]
    },

    {
      icon: "📦",
      title: "300 — Wiring Methods & Boxes (General)",
      points: [
        { ref: "300.4", text: "Protection from physical damage—plates, depth, sleeves where required." },
        { ref: "300.15", text: "Boxes/ﬁttings at all conductor splices/terminations; no free splices." },
        { ref: "300.20", text: "Ferrous raceways: keep conductors of the same circuit together to avoid heating." }
      ],
      block: {
        type: "horror",
        title: "JOBSITE HORROR — Hidden Splice",
        body: "That ‘temporary’ free splice in a wall? It became permanent. Found during a fault investigation. Don’t do this—ever."
      },
      images: [
        { src: "/images/module-02/m02-300-01.jpg", alt: "Nail plate", caption: "Protect where subject to damage." },
        { src: "/images/module-02/m02-300-02.jpg", alt: "Box with proper cover", caption: "All splices inside boxes with covers." }
      ]
    },

    {
      icon: "🔌",
      title: "210 — Branch-Circuit Basics",
      points: [
        { ref: "210.52", text: "Dwelling spacing rules; small-appliance and laundry circuits." },
        { ref: "210.8/12", text: "GFCI and AFCI locations—track updates each cycle." },
        { ref: "210.19", text: "Conductor sizing for voltage drop and continuous loads (125%)." }
      ],
      block: {
        type: "chart",
        title: "Kitchen/Bath/Laundry (Quick Map)",
        body: "Small appliance (2+) for kitchens/dining; laundry dedicated; GFCI/AFCI per space—map them before rough-in."
      },
      images: [
        { src: "/images/module-02/m02-210-01.jpg", alt: "Countertop recep layout", caption: "Countertop spacing & GFCI apply." },
        { src: "/images/module-02/m02-210-02.jpg", alt: "AFCI/GFCI breakers", caption: "Combine devices as allowed by listing." }
      ]
    },

    {
      icon: "🧯",
      title: "225 — Outside Feeders & Branch Circuits",
      points: [
        { ref: "Disconnect", text: "Outside building disconnect rules; grouped and readily accessible." },
        { ref: "Clearances", text: "Overhead conductor clearances; protection from damage." },
        { ref: "Grounding", text: "Bonding/grounding back to service or SDS rules as applicable." }
      ],
      block: {
        type: "table",
        title: "Common Clearances (Overview)",
        body: "Over roofs, grade, and pools vary—use the table; watch for exceptions for slope and roof surface."
      },
      images: [
        { src: "/images/module-02/m02-225-01.jpg", alt: "Outside disco", caption: "Group disconnects; label clearly." },
        { src: "/images/module-02/m02-225-02.jpg", alt: "Overhead clearances", caption: "Check spans, heights, and attachments." }
      ]
    },

    {
      icon: "🧰",
      title: "240/310 — Continuous Loads & Sizing",
      points: [
        { ref: "125% Rule", text: "Size for 125% of continuous load for OCPD/conductors as required." },
        { ref: "Conductor Temp", text: "Use the correct temp column and limiting termination ratings." },
        { ref: "Devices", text: "Equipment listings may drive higher or lower limits—labels rule." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — Which 125%?",
        body: "Don’t mix: conductor sizing vs OCPD sizing vs nameplate instructions. The question will try to blur them."
      },
      images: [
        { src: "/images/module-02/m02-sizing-01.jpg", alt: "Load calc sheet", caption: "Separate calc steps cleanly." },
        { src: "/images/module-02/m02-sizing-02.jpg", alt: "Breaker & label", caption: "Listing/label = final word." }
      ]
    },

    {
      icon: "🔩",
      title: "312/314 — Cabinets, Panels, & Boxes",
      points: [
        { ref: "312.6", text: "Wire bending space at terminals—measure and verify." },
        { ref: "314.16", text: "Box fill by conductor/equipment volume allowances." },
        { ref: "312.5", text: "Securing/fastening and protection into cabinets and cut-outs." }
      ],
      block: {
        type: "rule",
        title: "RULE — Measure Twice",
        body: "Box fill and bending space are math problems—do them on the drawing, not on the ladder."
      },
      images: [
        { src: "/images/module-02/m02-312-01.jpg", alt: "Panel gutter space", caption: "Bend radius & space matter." },
        { src: "/images/module-02/m02-312-02.jpg", alt: "Box fill example", caption: "Count everything correctly." }
      ]
    },

    {
      icon: "🪵",
      title: "240/225 — Disconnecting Means (Highlights)",
      points: [
        { ref: "Grouping", text: "Service/feeder disconnects grouped; readily accessible; labeling required." },
        { ref: "Locks", text: "Lockable in open position where required by equipment listing or code article." },
        { ref: "Coordination", text: "Selective coordination in specific occupancies—check the article, not rumors." }
      ],
      block: {
        type: "chart",
        title: "Disco Cheat Map",
        body: "Service vs feeder vs outside building rules—draw your one-liner and annotate per article."
      },
      images: [
        { src: "/images/module-02/m02-disco-01.jpg", alt: "Grouped disconnects", caption: "Keep it obvious and accessible." },
        { src: "/images/module-02/m02-disco-02.jpg", alt: "Lockable handle", caption: "Use listed means for lock-open." }
      ]
    }
  ],

  // Summary (6 cards)
  summary: {
    title: "Chapter 2 — Field Quick Hits",
    cards: [
      { iconName: "🧵", title: "310.16 Discipline", text: "Temp rating limits + ambient + bundling. Do it in order." },
      { iconName: "🔌", title: "210 Spacing/Protection", text: "Kitchen/laundry spacing & GFCI/AFCI—update each cycle." },
      { iconName: "🧲", title: "Bond vs Ground", text: "Bond metal together, ground systems—fault path wins." },
      { iconName: "🧮", title: "125% Continuous", text: "Know what gets 125% and why." },
      { iconName: "📦", title: "Box/Bend Math", text: "Do the fill/bend math before rough-in." },
      { iconName: "🧯", title: "Tap Rules", text: "Length, protection, and terminations—memorize patterns." }
    ]
  }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
