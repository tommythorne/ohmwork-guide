// app/modules/module-03/content.ts

const content = {
  hero: {
    imageSrc: "/images/module-03/m03-hero.jpg",
    imageAlt: "Conduit, cable, and boxes — core wiring methods and materials",
    title: "Chapter 3 — Wiring Methods & Materials",
    subtitle:
      "Raceways, cables, boxes, fittings, and the rules that keep them supported, protected, and serviceable."
    // (No blurb — template ignores it by rule)
  },

  // NAV
  prev: { href: "/modules/module-02", label: "Chapter 2" },
  next: { href: "/modules/module-04", label: "Chapter 4" },

  // 10 major articles
  articles: [
    // 1) 300 — General (EXAM)
    {
      icon: "📚",
      title: "300 — General Requirements for Wiring Methods",
      points: [
        {
          ref: "Protection from damage",
          text:
            "Where subject to physical damage, wiring methods must be guarded or relocated. Think: columns, loading zones, or low ceilings where carts live."
        },
        {
          ref: "Dry / damp / wet",
          text:
            "The location drives the wiring method. Wet locations (yes, most outdoors) require materials listed for wet use including fittings and conductors with wet ratings."
        },
        {
          ref: "Corrosion & support",
          text:
            "Use corrosion-resistant materials where needed, and follow the support/securement rules for the wiring method — not ‘good enough’ zip ties."
        },
        {
          ref: "Workmanship counts",
          text:
            "Raceways reamed, bushings where required, and fittings fully made up. Sloppy work fails fast (and inspections faster)."
        }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — Location governs method",
        body:
          "Questions love to hide a **wet location** in the setup. If it’s wet, everything — raceway, fittings, conductors — must be listed for wet use. Don’t miss the conductor insulation rating."
      },
      images: [
        {
          src: "/images/module-03/m03-300-01.jpg",
          alt: "Outdoor conduit with raintight fittings",
          caption: "Wet location means wet-rated fittings and conductor insulation."
        },
        {
          src: "/images/module-03/m03-300-02.jpg",
          alt: "Conduit run protected from forklift damage",
          caption: "Guard wiring where physical damage is likely."
        }
      ]
    },

    // 2) 358 — EMT (RULE)
    {
      icon: "🧰",
      title: "358 — EMT: The Everyday Raceway",
      points: [
        {
          ref: "Use & fittings",
          text:
            "Use listed EMT fittings; set-screw vs compression must be suitable for the location. Compression is the go-to for wet."
        },
        {
          ref: "Secure & support",
          text:
            "Support per Code and manufacturer. Keep straps at required intervals and within the first few feet of boxes — not wherever looks nice."
        },
        {
          ref: "EGC path",
          text:
            "Made-up metallic raceway with listed fittings can serve as the equipment grounding path. Paint, corrosion, or loose locknuts break that path."
        }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Strap the ends",
        body:
          "Strap EMT within the first few feet of a box and at regular intervals after. If you’re wondering ‘is this too far?’, it probably is."
      },
      images: [
        {
          src: "/images/module-03/m03-358-01.jpg",
          alt: "Compression EMT connectors in wet location",
          caption: "Compression fittings for wet locations; tighten to spec."
        },
        {
          src: "/images/module-03/m03-358-02.jpg",
          alt: "EMT run neatly supported",
          caption: "Consistent spacing and straps near enclosures pass cleanly."
        }
      ]
    },

    // 3) 342/344 — IMC/RMC (CODE)
    {
      icon: "🔩",
      title: "342 & 344 — IMC / RMC: Heavy-Duty Metal Conduit",
      points: [
        {
          ref: "Threaded raceways",
          text:
            "Cut, ream, and fully thread. Use thread seal where required, but don’t rely on goop to fix a bad thread."
        },
        {
          ref: "Corrosion",
          text:
            "Use galvanized or corrosion-resistant coatings; add PVC-coated systems or sleeves in harsh areas like wash-downs and coastal sites."
        },
        {
          ref: "Grounding",
          text:
            "Properly made-up IMC/RMC is an acceptable EGC path. Use bonding bushings or jumpers where concentric/eccentric knockouts break continuity."
        }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — Bonding fittings",
        body:
          "When concentric or eccentric knockouts are used on service or fault-level gear, use bonding bushings/jumpers to maintain the fault path. The inspector will look."
      },
      images: [
        {
          src: "/images/module-03/m03-344-01.jpg",
          alt: "RMC with threaded hubs and bonding bushing",
          caption: "Bonding bushings keep the fault path solid through KO rings."
        },
        {
          src: "/images/module-03/m03-344-02.jpg",
          alt: "IMC run in a corrosive environment",
          caption: "Coatings and fittings must match the environment."
        }
      ]
    },

    // 4) 352 — PVC (TABLE)
    {
      icon: "🧪",
      title: "352 — PVC: Nonmetallic Workhorse",
      points: [
        { ref: "Expansion", text: "Long outdoor runs need expansion fittings. Calculate movement from temperature swing and anchor properly." },
        { ref: "Support", text: "PVC needs closer supports than steel. Sag tells on you; support to manufacturer and Code spacing." },
        { ref: "Burial", text: "Meet minimum cover and use listed glue/primer. Transition to sunlight-resistant where exposed." }
      ],
      block: {
        type: "grid",
                icon: "🧵",
title: "Common MC Types — Where They Fit",
        grid: [
          ["Standard MC", "Dry/damp; EGC in armor or conductor"],
          ["MC-WET/WET-LOC", "Listed for wet locations"],
          ["HCF MC", "Hospital-grade patient care spaces"],
          ["Fire-rated MC", "2-hour circuits (per listing)"]
        ],
        body: "Read the **labels** for where each MC type is permitted; always verify product listing and local Code adoption."
      },
      images: [
        { src: "/images/module-03/m03-330-01.jpg", alt: "MC cable neatly strapped", caption: "Strap near terminations and keep runs straight." },
        { src: "/images/module-03/m03-330-02.jpg", alt: "Close-up of MC connector with anti-short insert", caption: "Use the connector the listing calls for — pass inspection first try." }
      ]},

    // 6) 348/350 — FMC & LFMC (JOBSITE HORROR STORY)
    {
      icon: "🌀",
      title: "348/350 — FMC & LFMC: Flexible Done Right",
      points: [
        { ref: "Length & support", text: "Short flexible sections relieve vibration and ease connections to equipment. Don’t turn flex into a ‘raceway’ — keep lengths reasonable and supported." },
        { ref: "Ground path", text: "Armor continuity and listed fittings matter. LFMC in wet areas still needs wet-rated fittings and an effective EGC path." },
        { ref: "Bend radius", text: "Respect manufacturer minimum bend radius; crushed flex overheats conductors and fails fast." }
      ],
      block: {
  type: "horror",
  title: "JOBSITE HORROR STORY — Crushed Whip Cooked a Motor",
  body: "A rooftop unit kept tripping. The LFMC whip was kinked behind a curb, crushing conductors. Result: overheated insulation, nuisance trips, and a motor replacement. Keep whips **short, supported, and with proper radius** — and use wet-rated fittings."
},
      images: [
        { src: "/images/module-03/m03-350-01.jpg", alt: "LFMC whip to rooftop unit", caption: "Short, supported whips with wet-rated fittings last." },
        { src: "/images/module-03/m03-350-02.jpg", alt: "Crushed flexible conduit", caption: "Too-tight bends crush the spiral and damage conductors." }
      ]
    },

    // 7) 314 — Boxes & Conduit Bodies (EXAM)
    {
      icon: "📦",
      title: "314 — Boxes & Conduit Bodies: Fill and Fit",
      points: [
        { ref: "Box fill math", text: "Count each conductor once; equipment grounds all together as one; each internal clamp counts once; devices can count as two conductors of the largest size on that yoke." },
        { ref: "Conduit bodies", text: "Some LBs are marked ‘for pulling only’ — no splices. Check cubic-inch (or liter) volumes and marking." },
        { ref: "Covers & accessibility", text: "All boxes require covers and must remain accessible — don’t bury junctions behind finishes." }
      ],
      block: {
  type: "exam",
  title: "EXAM TRAP — Box-Fill & LB Splice",
  body: "Two common gotchas: (1) Devices can count as **two** conductors of the largest size on the yoke. (2) LBs marked **‘for pulling only’** do not allow splices regardless of volume. Read the label; do the math."
},
      images: [
        { src: "/images/module-03/m03-314-01.jpg", alt: "Device box with many conductors", caption: "Box-fill mistakes lead to heat and nuisance trips." },
        { src: "/images/module-03/m03-314-02.jpg", alt: "Conduit body with volume marking", caption: "Check ‘splicing permitted’ and the cubic-inch marking." }
      ]
    },

    // 8) 300.5 — Underground (RULE)
    {
      icon: "⛏️",
      title: "300.5 — Underground Wiring: Depth & Details",
      points: [
        { ref: "Minimum cover", text: "Cover depth depends on wiring method and occupancy. Don’t guess — look it up before you dig." },
        { ref: "Emergence", text: "Protect where raceway emerges from grade; use elbows and rigid sections to handle mechanical abuse." },
        { ref: "Locate & mark", text: "Call before you dig, and use marking tape or tracer as required. Saves rework and keeps everyone safe." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Depths aren’t ‘one-size’",
        body:
          "Direct-bury cable, PVC, RMC, and low-voltage lighting all have **different** cover depths. Confirm the method, then the table — every time."
      },
      images: [
        { src: "/images/module-03/m03-3005-01.jpg", alt: "Trench with conduit at correct depth", caption: "Depth verified, bedded, and ready for backfill." },
        { src: "/images/module-03/m03-3005-02.jpg", alt: "Warning tape above buried conduit", caption: "Marking tape helps avoid surprises later." }
      ]
    },

    // 9) Bends, Fill, Pull Points (CODE)
    {
      icon: "📐",
      title: "300 — Bends, Fill, and Pull Points",
      points: [
        { ref: "Max 360°", text: "Limit to 360° of total bends between pull points. Add a box if you need more turns." },
        { ref: "Bend radius", text: "Respect minimum radius per wiring method and conductor — tight bends overheat and damage insulation." },
        { ref: "Conduit fill", text: "Use the Chapter 9 tables and the wiring method’s own table. Fill changes by conductor count and raceway type." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — Add a pull point",
        body:
          "When you’re near the 360° limit or conductors are large/long, add a pull point. The Code allows it; your shoulders will thank you."
      },
      images: [
        { src: "/images/module-03/m03-bends-01.jpg", alt: "Bender and conduit showing proper radius", caption: "Clean bends pull easier and preserve insulation." },
        { src: "/images/module-03/m03-bends-02.jpg", alt: "Pull box added mid-run", caption: "A pull point makes the difference on long/heavy pulls." }
      ]
    },

    // 10) 392 — Cable Tray (CHART — text snapshot)
    {
      icon: "🪜",
      title: "392 — Cable Tray: Systems, Supports, Separation",
      points: [
        { ref: "Type & fill", text: "Ladder, ventilated, or solid-bottom tray — each has fill and support rules. Use listed tray cable types and secure per the system." },
        { ref: "Separation", text: "Keep power and comms/data separated or divider-separated as required. Follow manufacturer load ratings." },
        { ref: "Bonding", text: "Tray systems must be bonded; use listed splice plates, hardware, and jumpers to keep the fault path continuous." }
      ],
      block: {
  type: "chart",
  title: "Tray Snapshot",
  chart: [
    { label: "Ladder tray — best cooling & drainage", value: 3 },
    { label: "Solid tray — shielding/containment, but hotter", value: 2 },
    { label: "Support per manufacturer spacing & load charts", value: 2 },
    { label: "Use TC/TC-ER/ITC/PLTC as listed", value: 1 }
  ],
  body: "Values are illustrative for comparison only. Follow the **manufacturer’s charts** for spacing, fill, and ratings."
},
      images: [
        { src: "/images/module-03/m03-392-01.jpg", alt: "Ladder cable tray with power circuits", caption: "Respect fill and support spans — use the manufacturer chart." },
        { src: "/images/module-03/m03-392-02.jpg", alt: "Tray bonding jumper across a splice", caption: "Bond splices to keep a low-impedance fault path." }
      ]
    }
  ],

  // Summary
  summary: {
    title: "Wiring Methods — What to Take to the Job",
    cards: [
      { title: "Location First", text: "Dry, damp, or wet decides the wiring method, fittings, and conductor ratings." },
      { title: "Support & Secure", text: "Strap near enclosures and at required intervals. Sag and drift fail inspections." },
      { title: "Fault Path Matters", text: "Raceways/fittings must maintain grounding/bonding continuity." },
      { title: "Bends & Fill", text: "360° max between pull points; respect radius and fill tables." },
      { title: "Boxes & Bodies", text: "Do the box-fill math; check LB markings before you splice." },
      { title: "Environment & Corrosion", text: "Use materials and coatings listed for the space you’re in." }
    ]
  },

  // Quiz — via bridge
  quiz: []
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;

export default content;
