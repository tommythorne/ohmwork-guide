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

  // ARTICLES — expanded to Module 1 depth
  articles: [
    {
      icon: "🧠",
      title: "240 — Overcurrent Protection Basics",
      points: [
        { ref: "240.4", text: "Conductors must be protected in accordance with their ampacity. The general rule is that an OCPD must not exceed the ampacity listed in 310.16, unless permitted by specific allowances in 240.4(B) through (G)." },
        { ref: "240.21", text: "Tap rules are a frequent exam trap. Know the 10 ft, 25 ft, and unlimited-length feeder tap rules, along with conditions like termination in a properly sized OCPD or limited load." },
        { ref: "240.6", text: "Standard OCPD sizes are given in a fixed table. While 'next size up' is permitted in some cases, it’s strictly controlled—don’t assume you can round up without explicit permission." },
        { ref: "240.87", text: "Arc energy reduction is required for OCPDs 1200A or higher. Know the methods: zone-selective interlocking, energy-reducing maintenance switches, or relays." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — ‘Next Size Up’",
        body: "Exams love to bait with 'round up the breaker.' 240.4(B) only applies under certain conditions, typically for small conductors 800A or less, and never when prohibited by equipment listings."
      },
      images: [
        { src: "/images/module-02/m02-240-01.jpg", alt: "Assorted breakers", caption: "Know the standard ratings and when you may (and may not) round up." },
        { src: "/images/module-02/m02-240-02.jpg", alt: "Tap diagram", caption: "Tap rules: length, protection, and termination conditions." }
      ]
    },

    {
      icon: "📊",
      title: "310 — Conductor Ampacity (310.16)",
      points: [
        { ref: "Temp Ratings", text: "Use the lowest temperature rating in the circuit—either the conductor insulation rating or the termination rating, whichever is more restrictive." },
        { ref: "Adjustment", text: "Derating factors apply for ambient temperature above 30°C and for conductor bundling more than 3 current-carrying conductors in a raceway or cable." },
        { ref: "Copper/Aluminum", text: "Aluminum conductors require upsizing compared to copper for the same ampacity. Never substitute based on gut feel—use the table." },
        { ref: "Informational Note", text: "Voltage drop is not an enforceable requirement, but design guidance is 3% max per branch, 5% total feeder+branch." }
      ],
      block: {
        type: "table",
        title: "Quick Sheet — 75°C Cu (Common)",
        body: "#12=25A • #10=35A • #8=50A • #6=65A • #4=85A • #3=100A • #2=115A. Always check for adjustment factors and termination ratings."
      },
      images: [
        { src: "/images/module-02/m02-310-01.jpg", alt: "Ampacity table highlight", caption: "310.16: Apply both ambient and adjustment factors correctly." },
        { src: "/images/module-02/m02-310-02.jpg", alt: "Conductor bundle", caption: "Bundling derates quickly—watch raceways with more than 3 current-carrying conductors." }
      ]
    },

    {
      icon: "🧲",
      title: "250 — Grounding & Bonding (Core Concepts)",
      points: [
        { ref: "250.4(A)", text: "Grounding establishes a reference to earth, stabilizing the system voltage. Bonding ensures all exposed metal parts are connected together to reduce shock hazards." },
        { ref: "Fault Path", text: "A low-impedance fault-current path must exist to trip the OCPD quickly. This is achieved by bonding enclosures, raceways, and equipment grounding conductors." },
        { ref: "Jumpers", text: "Main bonding jumper is installed at service disconnects, while separately derived systems require a system bonding jumper." },
        { ref: "Isolated Grounds", text: "Even isolated receptacles still bond to the equipment grounding system at the service. No exceptions for continuity of the fault-current path." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — 250.4",
        body: "Objectives: establish effective ground-fault current path, clear faults fast, and minimize voltage differences on exposed conductive parts."
      },
      images: [
        { src: "/images/module-02/m02-250-01.jpg", alt: "Bonded equipment", caption: "Bond all metallic enclosures to ensure continuity." },
        { src: "/images/module-02/m02-250-02.jpg", alt: "Service bonding jumper", caption: "Know the difference between MBJ and SBJ." }
      ]
    },

    {
      icon: "🪵",
      title: "250 — Grounding Electrode System",
      points: [
        { ref: "250.50", text: "All available electrodes present at a building or structure must be bonded together into a grounding electrode system." },
        { ref: "250.66", text: "Size the grounding electrode conductor based on the largest ungrounded service-entrance conductor. Parallel conductors have special sizing rules." },
        { ref: "Connections", text: "Use only listed clamps and irreversible connections for bonding electrodes. Protect against corrosion and physical damage." },
        { ref: "250.53(A)", text: "Concrete-encased electrodes (Ufer) must be used if present, regardless of other electrodes." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Use What’s There",
        body: "If a Ufer (concrete-encased rebar) exists, it must be part of the electrode system. Skipping this is a common red tag."
      },
      images: [
        { src: "/images/module-02/m02-ges-01.jpg", alt: "Ufer connection", caption: "Concrete-encased electrode is preferred for stability." },
        { src: "/images/module-02/m02-ges-02.jpg", alt: "Bonded rebar clamp", caption: "Only listed clamps—no hardware store improvisation." }
      ]
    }
    // … continue expanding remaining articles in the same Module 1 style …
  ],

  summary: {
    title: "Chapter 2 — Field Quick Hits",
    cards: [
      { iconName: "🧵", title: "310.16 Discipline", text: "Temp rating + ambient + bundling = adjusted ampacity. Apply all factors in order." },
      { iconName: "🔌", title: "210 Spacing/Protection", text: "Dwelling spacing, GFCI, AFCI. Update every Code cycle." },
      { iconName: "🧲", title: "Bond vs Ground", text: "Ground stabilizes system; bonding ties metal parts together. Fault path is king." },
      { iconName: "🧮", title: "125% Continuous", text: "Apply 125% correctly to conductors, OCPDs, and nameplate requirements." },
      { iconName: "📦", title: "Box/Bend Math", text: "Calculate box fill and bending radius—don’t wing it." },
      { iconName: "🧯", title: "Tap Rules", text: "Memorize the 10 ft and 25 ft rules. Conditions must all be satisfied." }
    ]
  }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
