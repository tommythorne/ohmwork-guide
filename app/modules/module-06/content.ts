const content = {
  hero: {
    imageSrc: "/images/module-06/m06-hero.jpg",
    imageAlt: "NEC Chapter 6 — Special Equipment overview",
    title: "Chapter 6 — Special Equipment",
    subtitle: "PV, EV, signs, welders, elevators, pools, IT rooms, fire pumps — gear with its own rules."
  },

  prev: { href: "/modules/module-05", label: "Chapter 5" },
  next: { href: "/modules/module-07", label: "Chapter 7" },

  articles: [
    // 1) Article 600 — Electric Signs & Outline Lighting (EXAM)
    {
      icon: "🪧",
      title: "Art. 600 — Electric Signs & Outline Lighting",
      points: [
        { ref: "600.5", text: "A sign must have a **dedicated branch circuit** (often 20A, 120V). No other loads." },
        { ref: "600.3", text: "All sign equipment must be **listed** and installed per the **label/instructions**." },
        { ref: "Disconnect", text: "Provide a **readily accessible disconnect** within sight of the sign/outline lighting." }
      ],
      block: {
  type: "exam",
  title: "EXAM TRAP",
  body: "If it’s a sign circuit, it’s dedicated. Don’t share with lighting/receptacles."
},
      images: [
        { src: "/images/module-06/m06-600-01.jpg", alt: "Sign disconnect within sight", caption: "Local disconnect = required and labeled." },
        { src: "/images/module-06/m06-600-02.jpg", alt: "Listed sign power supply", caption: "Use listed components and follow markings." }
      ]
    },

    // 2) Article 620 — Elevators, Escalators, Platform Lifts (RULE)
    {
      icon: "🛗",
      title: "Art. 620 — Elevators, Escalators, Platform Lifts",
      points: [
        { ref: "620.51", text: "**Means for disconnecting** with lockable capability; often in machine room or control space." },
        { ref: "620.22", text: "**Lighting/receptacle** circuits separated from **power/drive** circuits per 620 rules." },
        { ref: "600V", text: "Bonding, clearances, and wiring methods align with listed equipment instructions and 620 specifics." }
      ],
      block: {
  type: "rule",
  title: "RULE OF THUMB",
  body: "Keep elevator car lights/recepts separate from drive power. Disconnects must be lockable."
},
      images: [
        { src: "/images/module-06/m06-620-01.jpg", alt: "Elevator machine room disconnect", caption: "Lockable disconnect within the room." },
        { src: "/images/module-06/m06-620-02.jpg", alt: "Controller cabinet with labeling", caption: "Follow controller labeling and 620 references." }
      ]
    },

    // 3) Article 625 — Electric Vehicle Power Transfer (CODE)
    {
      icon: "🚗",
      title: "Art. 625 — Electric Vehicle Supply Equipment (EVSE)",
      points: [
        { ref: "625.41", text: "**GFCI** protection integral to EVSE or upstream where required by listing." },
        { ref: "625.42", text: "EVSE is a **continuous load** — size conductors/OCPD at 125% of nameplate." },
        { ref: "625.54", text: "Receptacles/cord sets must be **listed** for EV use; follow ventilation/cord rules." }
      ],
      block: {
  type: "code",
  title: "NEC REFERENCE",
  body: "Treat EVSE as continuous. 40A EVSE → 50A breaker (125%)."
},
      images: [
        { src: "/images/module-06/m06-625-01.jpg", alt: "Wall-mounted EVSE", caption: "Confirm continuous-load sizing and GFCI behavior." },
        { src: "/images/module-06/m06-625-02.jpg", alt: "EVSE nameplate close-up", caption: "Size to nameplate × 125%." }
      ]
    },

    // 4) Article 630 — Electric Welders (TABLE)
    {
      icon: "🧰",
      title: "Art. 630 — Electric Welders",
      points: [
        { ref: "Duty Cycle", text: "Welder input current depends on **duty cycle**; use Art. 630 tables/notes." },
        { ref: "OCPD", text: "OCPD/conductor sizing can differ from normal branch rules — use 630 multipliers." },
        { ref: "Receptacles", text: "Use proper receptacle/device configuration and durable wiring method." }
      ],
      block: {
  type: "table",
  title: "TABLE",
  table: [
    ["Duty Cycle", "Multiplier (≈)"],
    ["100%", "1.00 × rated current"],
    ["60%",  "0.80 × rated current"],
    ["40%",  "0.63 × rated current"],
    ["20%",  "0.45 × rated current"]
  ],
  body: "Examples only — verify with Art. 630 nameplate and tables."
},
      images: [
        { src: "/images/module-06/m06-630-01.jpg", alt: "Shop welder circuit", caption: "Size branch/OCPD using 630 rules." },
        { src: "/images/module-06/m06-630-02.jpg", alt: "Nameplate with duty cycle", caption: "Nameplate + 630 tables drive sizing." }
      ]
    },

    // 5) Article 640 — Audio Signal Processing & Amplification (CHART)
    {
        icon: "🎚️",
        title: "Art. 640 — Audio Systems",
        points: [
          { ref: "640.9", text: "Equipment must be **listed/identified**; follow low-voltage wiring separations and support." },
          { ref: "Circuits", text: "Power circuits to racks/amps sized per nameplate; ventilation/heat is a safety issue." },
          { ref: "Grounding", text: "Bonding/grounding minimizes hum and shock hazards; follow manufacturer." }
        ],
        block: {
  type: "chart",
  title: "CHART",
  chart: [
    { label: "Line-level (balanced)", value: 1 },
    { label: "Speaker-level (amps → speakers)", value: 2 },
    { label: "Powered speakers (AC feed to speaker)", value: 3 }
  ],
  body: "Separate LV audio from AC where required; follow 640 listings and clearances."
},
        images: [
          { src: "/images/module-06/m06-640-01.jpg", alt: "Audio rack power/ventilation", caption: "Ventilation and branch sizing matter." },
          { src: "/images/module-06/m06-640-02.jpg", alt: "LV cable management", caption: "Keep LV and AC separated as specified." }
        ]
    },

    // 6) Article 645 — Information Technology Equipment Rooms (HORROR)
    {
      icon: "💻",
      title: "Art. 645 — IT Equipment Rooms",
      points: [
        { ref: "645.10", text: "Disconnecting means for **electronic equipment power** and HVAC when 645 rules are applied." },
        { ref: "Plenum", text: "Cable types, underfloor spaces, and plenum ratings must match the environment." },
        { ref: "Fire", text: "Coordination with fire suppression and emergency procedures is required." }
      ],
      block: {
  type: "horror",
  title: "JOBSITE HORROR STORY",
  body: "Underfloor cabling not listed for plenum led to a failed inspection and full re-pull."
},
      images: [
        { src: "/images/module-06/m06-645-01.jpg", alt: "IT room underfloor cabling", caption: "Use listed plenum/raised-floor cabling." },
        { src: "/images/module-06/m06-645-02.jpg", alt: "EPO / disconnect station", caption: "Know the shutdown sequence and labeling." }
      ]
    },

    // 7) Article 680 — Swimming Pools, Fountains, Spas (EXAM)
    {
      icon: "🏊",
      title: "Art. 680 — Pools, Fountains, Spas",
      points: [
        { ref: "680.21", text: "Pool **pump motors**: GFCI protection (scope depends on edition/listing)." },
        { ref: "Equipotential", text: "Equipotential bonding grid around the pool deck — huge inspection point." },
        { ref: "Luminaires", text: "Wet-niche luminaires need proper niches, bonding, and listed transformers." }
      ],
      block: {
  type: "exam",
  title: "EXAM TRAP",
  body: "Missed equipotential bonding is a classic failure. Bond the steel, rails, and deck."
},
      images: [
        { src: "/images/module-06/m06-680-01.jpg", alt: "Pool pump with GFCI", caption: "Expect GFCI on pump motors." },
        { src: "/images/module-06/m06-680-02.jpg", alt: "Equipotential bonding grid", caption: "Bonding ties metallic parts together." }
      ]
    },

    // 8) Article 690 — PV Systems (CODE)
    {
      icon: "🔋",
      title: "Art. 690 — Photovoltaic Systems",
      points: [
        { ref: "690.12", text: "**Rapid Shutdown** where required — label it and verify boundaries." },
        { ref: "690.8", text: "Conductor/OCPD sizing uses **125%** of max current; check temperature and grouping." },
        { ref: "Labels", text: "Placards/labels at service equipment and PV disconnects are mandatory." }
      ],
      block: {
  type: "code",
  title: "NEC REFERENCE",
  body: "Use 125% for PV source/outputs; verify with module/inverter data and conditions of use."
},
      images: [
        { src: "/images/module-06/m06-690-01.jpg", alt: "PV inverter/disconnect labeling", caption: "Placards where first responders expect them." },
        { src: "/images/module-06/m06-690-02.jpg", alt: "Rooftop PV with raceways", caption: "Mind temperature and grouping corrections." }
      ]
    },

    // 9) Article 691 — Large-Scale PV (TABLE)
    {
      icon: "🌞",
      title: "Art. 691 — Large-Scale PV (Utility-Scale)",
      points: [
        { ref: "Scope", text: "Applies to **large utility** PV not covered by 690; engineering supervision assumed." },
        { ref: "Documentation", text: "Detailed plans, protection schemes, and coordination are required." },
        { ref: "Grounding", text: "Grounding/bonding follow engineered methods and equipment listings." }
      ],
      block: {
  type: "table",
  title: "TABLE",
  table: [
    ["Topic", "690 (Building PV)", "691 (Utility-Scale)"],
    ["Scope", "Typical building-scale PV", "Large utility PV plants"],
    ["Approach", "Prescriptive Code rules", "Engineering supervision & documentation"],
    ["Protection", "Standard OCP/ground-fault per 690", "Engineered protection schemes"],
    ["Labeling", "Standard PV placards", "Site-specific documentation & coordination"]
  ],
  body: "Use 691 when the installation meets the large-scale/utility criteria and is under engineering oversight."
},
      images: [
        { src: "/images/module-06/m06-691-01.jpg", alt: "Utility-scale PV field", caption: "Different scale, different ruleset." },
        { src: "/images/module-06/m06-691-02.jpg", alt: "Collector station gear", caption: "Coordination and documentation drive approvals." }
      ]
    },

    // 10) Article 695 — Fire Pumps (CHART)
    {
      icon: "🚒",
      title: "Art. 695 — Fire Pumps",
      points: [
        { ref: "Reliability", text: "**Normal/emergency** sources must be arranged for reliability; tap rules are specific." },
        { ref: "OCPD", text: "Overcurrent protection arranged so the fire pump runs — different than typical feeder protection." },
        { ref: "Conductors", text: "Routing and physical protection have elevated requirements." }
      ],
      block: {
  type: "chart",
  title: "CHART",
  chart: [
    { label: "Service → FP controller (permitted tap)", value: 3 },
    { label: "Alternate/Emergency source → controller", value: 3 },
    { label: "Controller → Fire pump", value: 2 },
    { label: "Reliability priority (OCPD arrangement)", value: 4 }
  ],
  body: "Power path prioritizes reliability over convenience; follow 695 tap and OCPD specifics."
},
      images: [
        { src: "/images/module-06/m06-695-01.jpg", alt: "Fire pump controller", caption: "Labeling and source arrangement matter." },
        { src: "/images/module-06/m06-695-02.jpg", alt: "Service tap to fire pump", caption: "Follow 695 tap and OCPD specifics." }
      ]
    }
  ],

  summary: {
    title: "Chapter 6 — Field Quick Hits",
    cards: [
      { iconName: "🪧", title: "Signs", text: "Dedicated circuit + local disconnect." },
      { iconName: "🛗", title: "Elevators", text: "Lockable disconnect; separate lighting vs power." },
      { iconName: "🚗", title: "EVSE", text: "Continuous load — 125% sizing." },
      { iconName: "🏊", title: "Pools", text: "Bond that deck. Expect GFCI." },
      { iconName: "🔋", title: "PV", text: "Rapid shutdown + labels." },
      { iconName: "🚒", title: "Fire Pumps", text: "Reliability beats convenience." }
    ]
  }
};

import quiz from "./quiz";
(content as any).quiz = quiz;
export default content;
