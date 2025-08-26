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

  // ARTICLES — 10 fully fleshed-out
  articles: [
    // 1) OCPD Basics
    {
      icon: "🧠",
      title: "240 — Overcurrent Protection Basics",
      points: [
        { ref: "240.4", text: "Conductors must be protected per their ampacity. Small conductor rules are **not blanket allowances**—only certain sizes (14, 12, 10 AWG) can round up when allowed." },
        { ref: "240.21", text: "Tap conductors: 10-ft, 25-ft, and feeder tap rules all differ. Each has conditions (length, termination, protection) that must all be met. Examiners love to mix them." },
        { ref: "240.6", text: "Standard breaker sizes: 15, 20, 25, 30, 35, 40... If you see 45A or 55A, that’s not standard—use next standard size rules only when another Code article permits." },
        { ref: "240.10", text: "Protective devices can’t be used as switches unless they’re **identified** for that function. That includes many breakers—but check the marking." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — NEXT SIZE UP",
        body: "240.4(B) doesn’t apply to every circuit. It’s limited to specific small conductor cases. If a question asks about rounding up on #2 AWG, the answer is **no**."
      },
      images: [
        { src: "/images/module-02/m02-240-01.jpg", alt: "Assorted breakers", caption: "Memorize standard ratings and the exceptions for rounding up." },
        { src: "/images/module-02/m02-240-02.jpg", alt: "Tap diagram", caption: "Tap rules = strict length and protection requirements." }
      ]
    },

    // 2) Conductor Ampacity
    {
      icon: "🔌",
      title: "310 — Conductor Ampacity (310.16)",
      points: [
        { ref: "Terminations", text: "Use the lowest rated termination in the circuit. Example: a #8 copper in a 90°C column still gets limited to 75°C if the breaker is only rated 75°C." },
        { ref: "Adjustment Factors", text: "Ambient temp and bundling derate values. Example: 10 current-carrying conductors in a raceway = 50% derating. Always apply before checking OCPD." },
        { ref: "Material Differences", text: "Aluminum and copper-clad aluminum run larger for the same ampacity. Never assume equivalence by size alone—always verify with the table." },
        { ref: "90°C Column Use", text: "You can sometimes use 90°C values for **adjustment only**, then step back to 75°C for termination. This nuance shows up on exams." }
      ],
      block: {
        type: "table",
        title: "QUICK SHEET — 75°C COPPER (COMMON)",
        table: [
          ["Conductor (Cu)", "75°C Ampacity (A)"],
          ["#12", "25"],
          ["#10", "35"],
          ["#8", "50"],
          ["#6", "65"],
          ["#4", "85"],
          ["#3", "100"],
          ["#2", "115"]
        ],
        body: "Examples before any derating. Always confirm in 310.16 and apply ambient/bundling factors."
      },
      images: [
        { src: "/images/module-02/m02-310-01.jpg", alt: "Ampacity table highlight", caption: "310.16: memorize the key conductor sizes." },
        { src: "/images/module-02/m02-310-02.jpg", alt: "Conductor bundle", caption: "Bundling causes derating—watch for >3 current-carrying conductors." }
      ]
    },

    // 3) Bonding & Grounding Concepts
    {
      icon: "🧲",
      title: "250 — Grounding & Bonding (Core Concepts)",
      points: [
        { ref: "250.4(A)", text: "Grounding connects the system to earth. It stabilizes voltage during lightning or surges but doesn’t clear faults." },
        { ref: "250.4(B)", text: "Bonding connects metal parts together to create a low-impedance fault current path so breakers trip fast." },
        { ref: "Fault Path", text: "Bond enclosures, raceways, and equipment grounds. A loose connection in the path = breaker won’t trip." },
        { ref: "Service vs SDS", text: "Service equipment requires a main bonding jumper; separately derived systems (like transformers) require a system bonding jumper." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — 250.4",
        body: "Bonding provides the **effective fault-current path**. Grounding stabilizes voltage. Exams love to flip the terms."
      },
      images: [
        { src: "/images/module-02/m02-250-01.jpg", alt: "Bonded equipment", caption: "All metal enclosures must be bonded together." },
        { src: "/images/module-02/m02-250-02.jpg", alt: "Service bonding jumper", caption: "Know your MBJ vs SBJ requirements." }
      ]
    },

    // 4) Grounding Electrode System
    {
      icon: "🌍",
      title: "250 — Grounding Electrode System",
      points: [
        { ref: "250.50", text: "If an electrode is present, you must use it. Ufer (concrete-encased), building steel, and metal water pipe all count." },
        { ref: "250.52", text: "Ground rods are last-resort electrodes. If used, you often need **two rods 6 ft apart** unless one rod measures ≤25Ω." },
        { ref: "250.66", text: "GEC sizing is based on the largest ungrounded service conductor. Parallel conductors change the math—don’t miss this detail." },
        { ref: "250.64", text: "GECs must be continuous or irreversibly spliced. Protect them from physical damage." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — USE WHAT’S THERE",
        body: "If concrete-encased rebar (Ufer) exists, you must use it. Ground rods aren’t first choice—they’re backup electrodes."
      },
      images: [
        { src: "/images/module-02/m02-ges-01.jpg", alt: "Ufer connection", caption: "Concrete-encased electrodes are stable and required if present." },
        { src: "/images/module-02/m02-ges-02.jpg", alt: "Bonded rebar clamp", caption: "Only use listed clamps for connections." }
      ]
    },

    // 5) Wiring Methods & Boxes
    {
      icon: "📦",
      title: "300 — Wiring Methods & Boxes",
      points: [
        { ref: "300.4", text: "Protection from nails and screws: maintain burial depth or use plates where required." },
        { ref: "300.15", text: "All splices and terminations must be inside boxes or fittings. No ‘free air’ splices." },
        { ref: "300.20", text: "Ferrous raceways: keep all conductors of a circuit together to prevent induced heating." },
        { ref: "300.12", text: "Raceways must be continuous and secured. Broken or incomplete raceways = violation." }
      ],
      block: {
        type: "horror",
        title: "JOBSITE HORROR STORY — HIDDEN SPLICE",
        body: "A free splice hidden behind drywall caused intermittent faults for years before a fire exposed it. All splices must be inside approved boxes with covers."
      },
      images: [
        { src: "/images/module-02/m02-300-01.jpg", alt: "Nail plate", caption: "Plates protect where raceways or cables are too close to edges." },
        { src: "/images/module-02/m02-300-02.jpg", alt: "Box with cover", caption: "Covers are required for all junction and device boxes." }
      ]
    },

    // 6) Branch Circuits
    {
      icon: "🔌",
      title: "210 — Branch-Circuit Basics",
      points: [
        { ref: "210.52", text: "Dwelling unit spacing: 6 ft/12 ft wall spacing, small appliance and laundry branch requirements." },
        { ref: "210.8", text: "GFCI protection required in bathrooms, kitchens, outdoors, basements, laundry areas, and more." },
        { ref: "210.12", text: "AFCI protection now applies broadly—most habitable dwelling spaces need it." },
        { ref: "210.19", text: "Conductors must be sized for continuous load at 125%. Voltage drop recommendations also apply (3% branch, 5% feeder+branch)." }
      ],
      block: {
        type: "table",
        title: "KITCHEN/LAUNDRY QUICK MAP",
        table: [
          ["Location / Item", "Requirement"],
          ["Kitchen/Dining Small-Appliance", "2 × 20A circuits (minimum)"],
          ["Laundry", "1 × 20A dedicated"],
          ["Countertops", "6 ft / 12 ft spacing rule applies"],
          ["GFCI", "Per 210.8 locations (kitchen, bath, outdoors, etc.)"],
          ["AFCI", "Most habitable rooms; see 210.12"]
        ],
        body: "Plan these on your one-line and layout before rough-in."
      },
      images: [
        { src: "/images/module-02/m02-210-01.jpg", alt: "Kitchen outlets", caption: "Spacing rules and GFCI protection are strictly enforced." },
        { src: "/images/module-02/m02-210-02.jpg", alt: "AFCI/GFCI breakers", caption: "Many panels now use dual-function breakers." }
      ]
    },

    // 7) Outside Feeders
    {
      icon: "🧯",
      title: "225 — Outside Feeders & Branch Circuits",
      points: [
        { ref: "225.31", text: "Each building requires its own disconnecting means for feeders/branch circuits." },
        { ref: "225.18", text: "Overhead conductor clearances: 10 ft over walking, 12 ft over residential driveways, 18 ft over public streets." },
        { ref: "225.32", text: "Disconnects must be readily accessible and located at the building served." }
      ],
      block: {
        type: "table",
        title: "OVERHEAD CLEARANCES (QUICK SHEET)",
        table: [
          ["Area", "Minimum Clearance"],
          ["Pedestrian walkway", "10 ft"],
          ["Residential driveway", "12 ft"],
          ["Public street", "18 ft"]
        ],
        body: "Heights vary with conditions and voltage—this hits the common exam set."
      },
      images: [
        { src: "/images/module-02/m02-225-01.jpg", alt: "Outside disconnects", caption: "Grouped and labeled disconnects at building entry." },
        { src: "/images/module-02/m02-225-02.jpg", alt: "Overhead spans", caption: "Different areas require different minimum heights." }
      ]
    },

    // 8) Continuous Load Sizing
    {
      icon: "🧰",
      title: "240/310 — Continuous Loads & Sizing",
      points: [
        { ref: "125% Rule", text: "Continuous loads (≥3 hours) require OCPD ≥125% of load and conductor sized accordingly." },
        { ref: "Termination Temp", text: "Size conductors using the proper temperature rating of equipment terminals (usually 60°C or 75°C)." },
        { ref: "Listing Impact", text: "Manufacturer listings override default rules. If a panel label restricts breaker type or rating, follow it." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — 125% MEANS WHAT?",
        body: "Don’t confuse conductor ampacity sizing with OCPD rating. Questions often twist the 125% rule to trip you up."
      },
      images: [
        { src: "/images/module-02/m02-sizing-01.jpg", alt: "Load calc sheet", caption: "Perform load calculations step by step." },
        { src: "/images/module-02/m02-sizing-02.jpg", alt: "Breaker with label", caption: "Follow listed limitations." }
      ]
    },

    // 9) Cabinets, Panels, Boxes
    {
      icon: "🔩",
      title: "312/314 — Cabinets, Panels, & Boxes",
      points: [
        { ref: "312.6", text: "Minimum wire-bending space inside panels must be maintained—dimensions vary by wire size." },
        { ref: "314.16", text: "Box fill calculations: count each conductor, device, and clamp properly. The math is enforceable." },
        { ref: "312.5", text: "Cables entering cabinets must be secured with fittings and bushings as required." }
      ],
      block: {
        type: "rule",
        title: "RULE — MATH WINS",
        body: "Box fill and bending space are not guesses. They’re measured and calculated. Errors = failed inspection."
      },
      images: [
        { src: "/images/module-02/m02-312-01.jpg", alt: "Panel gutter", caption: "Maintain bending space at terminals." },
        { src: "/images/module-02/m02-312-02.jpg", alt: "Box fill count", caption: "Count each item per 314.16 allowances." }
      ]
    },

    // 10) Disconnecting Means
    {
      icon: "🪵",
      title: "240/225 — Disconnecting Means",
      points: [
        { ref: "230.71", text: "Service disconnects historically limited to 6; newer cycles often limit to 2 service disconnects—verify local adoption." },
        { ref: "225.33", text: "Feeder disconnects must be grouped and clearly marked." },
        { ref: "225.32", text: "Outside building disconnect location: at the building served and readily accessible." }
      ],
      block: {
        type: "table",
        title: "DISCONNECT QUICK MAP",
        table: [
          ["Item", "Rule of Thumb / Reference"],
          ["Service disconnect(s)", "Legacy 6; newer cycles often 2 — check local 230.71 adoption"],
          ["Feeder disconnect(s)", "Must be grouped and labeled (225.33)"],
          ["Outside-building disconnect", "At building served; readily accessible (225.32)"]
        ],
        body: "Sketch these on your one-line so the differences stick."
      },
      images: [
        { src: "/images/module-02/m02-disco-01.jpg", alt: "Grouped disconnects", caption: "Group disconnects together in one location." },
        { src: "/images/module-02/m02-disco-02.jpg", alt: "Lockable handle", caption: "Use listed lock-open features where required." }
      ]
    }
  ],

  // Summary
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