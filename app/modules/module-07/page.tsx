/* Module 7 — Special Conditions (Chapter 7) */
const content = {
  hero: {
    imageSrc: "/images/module-07/m07-hero.jpg",
    imageAlt: "Special conditions — fire alarm, emergency systems, limited energy",
    title: "Chapter 7 — Special Conditions",
    subtitle:
      "Fire alarms, emergency systems, limited-energy wiring, and optional standby setups — the rules that only apply in critical situations."
  },

  // NAV
  prev: { href: "/modules/module-06", label: "Chapter 6" },
  next: { href: "/modules/module-08", label: "Chapter 8" },

  // ARTICLES — 10 total
  articles: [
    // 1) Fire Alarm Systems
    {
      title: "760 — Fire Alarm Systems",
      points: [
        { ref: "760.3", text: "NEC applies except where modified by NFPA 72 (Fire Alarm Code). Know the crossover." },
        { ref: "760.24", text: "Cables must be **listed and marked** (e.g., FPL, FPLR, FPLP). Ratings differ by riser, plenum, and general use." },
        { ref: "760.41", text: "Power supply: must maintain operation under fire conditions, usually via dedicated branch circuit." },
        { ref: "760.53", text: "Separation: Fire alarm conductors must be separated from power conductors unless in same assembly/listing." },
        { ref: "760.71", text: "Grounding: Follow both NEC and NFPA 72 requirements for bonding/shield terminations." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — ARTICLE 760",
        body: "Fire alarm wiring rules defer heavily to NFPA 72. Remember: NEC covers installation; NFPA 72 covers performance."
      },
      images: [
        { src: "/images/module-07/m07-760-01.jpg", alt: "Fire alarm panel wiring", caption: "Use only listed FPL/FPLR/FPLP cables." },
        { src: "/images/module-07/m07-760-02.jpg", alt: "Separation of wiring", caption: "Maintain separation between power and fire alarm conductors." }
      ]
    },

    // 2) Emergency Systems
    {
      title: "700 — Emergency Systems",
      points: [
        { ref: "700.10", text: "Wiring for emergency systems must be kept independent of other wiring systems." },
        { ref: "700.12", text: "Power source: Must transfer within 10 seconds. Options: batteries, generator, fuel cell, etc." },
        { ref: "700.16", text: "Emergency illumination: required for exit paths, corridors, and egress areas." },
        { ref: "700.24", text: "Switching: Emergency circuits cannot be on dimmers or switches used for normal lighting." },
        { ref: "700.27", text: "Selective coordination required for OCPDs serving emergency loads." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — 10 SECONDS MAX",
        body: "Emergency systems must restore power in **10 seconds** or less. If a question offers 60 seconds or ‘reasonable time,’ it’s wrong."
      },
      images: [
        { src: "/images/module-07/m07-700-01.jpg", alt: "Emergency generator transfer switch", caption: "Emergency power must transfer in ≤10 seconds." },
        { src: "/images/module-07/m07-700-02.jpg", alt: "Exit corridor lights", caption: "Exit lighting tied to emergency circuits." }
      ]
    },

    // 3) Legally Required Standby
    {
      title: "701 — Legally Required Standby Systems",
      points: [
        { ref: "701.2", text: "Applies where systems are required by law/regulation but not as critical as Article 700 systems." },
        { ref: "701.10", text: "Wiring must be kept independent but can share raceways if permitted by Code." },
        { ref: "701.12", text: "Transfer time: within 60 seconds (vs 10 seconds for emergency)." },
        { ref: "701.17", text: "Capacity and rating must support legally required loads." },
        { ref: "701.27", text: "Selective coordination may be required depending on jurisdiction." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — 60 SECONDS IS OK",
        body: "Article 701 = legally required standby. The transfer window is up to **60 seconds**, unlike Article 700’s 10-second rule."
      },
      images: [
        { src: "/images/module-07/m07-701-01.jpg", alt: "Standby generator", caption: "Legally required standby often supports HVAC, elevators, etc." },
        { src: "/images/module-07/m07-701-02.jpg", alt: "ATS equipment", caption: "Transfer switches route power within 60 seconds." }
      ]
    },

    // 4) Optional Standby
    {
      title: "702 — Optional Standby Systems",
      points: [
        { ref: "702.2", text: "Covers systems not required by law but installed for business/personal convenience." },
        { ref: "702.4", text: "Transfer equipment must prevent parallel connection with the utility unless listed for that purpose." },
        { ref: "702.7", text: "Capacity must meet load demand, but optional loads can be shed at owner’s discretion." },
        { ref: "702.11", text: "Signs required at service equipment indicating optional standby source." },
        { ref: "702.12", text: "Portable generators allowed if installed per manufacturer and Code requirements." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — ARTICLE 702",
        body: "Optional standby = owner’s choice, not a mandate. Watch exam questions that mix this with emergency/standby requirements."
      },
      images: [
        { src: "/images/module-07/m07-702-01.jpg", alt: "Portable generator", caption: "Portable systems must use transfer equipment to avoid backfeed." },
        { src: "/images/module-07/m07-702-02.jpg", alt: "Residential standby system", caption: "Optional standby often covers comfort loads." }
      ]
    },

    // 5) Critical Operations Power Systems (COPS)
    {
      title: "708 — Critical Operations Power Systems",
      points: [
        { ref: "708.1", text: "COPS = systems designated by government for critical infrastructure (police, fire, data centers, etc.)." },
        { ref: "708.5", text: "Risk assessment required to determine COPS applicability and design." },
        { ref: "708.10", text: "Physical security: equipment must be protected from damage, tampering, and flooding." },
        { ref: "708.20", text: "Redundancy and survivability: separation of feeders, fuel supply, and cooling required." },
        { ref: "708.24", text: "Maintenance/testing must be documented and performed regularly." }
      ],
      block: {
        type: "horror",
        title: "JOBSITE HORROR STORY — FLOODED GENERATOR ROOM",
        body: "A data center’s COPS generator room was in a basement. Flooding took it offline during a storm. Result: lawsuits and outages. **Always locate COPS equipment above flood plains.**"
      },
      images: [
        { src: "/images/module-07/m07-708-01.jpg", alt: "Critical facility power systems", caption: "COPS = highest tier of reliability and protection." },
        { src: "/images/module-07/m07-708-02.jpg", alt: "Flooded electrical room", caption: "Protect COPS equipment from physical/environmental threats." }
      ]
    },

    // 6) Fire Pumps
    {
      title: "695 — Fire Pumps",
      points: [
        { ref: "695.3", text: "Power must be reliable and arranged per 695.3 options (utility, generator, dedicated service)." },
        { ref: "695.4", text: "Overcurrent protection cannot disconnect power during startup/inrush." },
        { ref: "695.6", text: "Wiring must be protected and run as directly as possible." },
        { ref: "695.14", text: "Transfer switches must be fire-rated and listed for fire pump service." },
        { ref: "695.20", text: "Fire pump controllers must be listed and marked specifically for fire pump use." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — OCPD EXCEPTIONS",
        body: "Fire pump circuits can ignore normal OCPD trip curves. If a question suggests standard breaker trips apply, it’s wrong."
      },
      images: [
        { src: "/images/module-07/m07-695-01.jpg", alt: "Fire pump equipment", caption: "Fire pumps require reliable, uninterrupted power." },
        { src: "/images/module-07/m07-695-02.jpg", alt: "Dedicated fire pump controller", caption: "Listed controllers and transfer switches only." }
      ]
    },

    // 7) Class 1, 2, 3 Circuits
    {
      title: "725 — Class 1, 2, and 3 Remote-Control, Signaling, and Power-Limited Circuits",
      points: [
        { ref: "725.2", text: "Defines Class 1 (up to 600V), Class 2 (power-limited ≤100VA), Class 3 (higher power than Class 2 but limited)." },
        { ref: "725.41", text: "Class 1 wiring treated like power wiring — requires full NEC wiring methods." },
        { ref: "725.121", text: "Power sources for Class 2/3 circuits must be **listed power supplies** (like transformers, drivers)." },
        { ref: "725.136", text: "Separation: Class 2/3 conductors must be separated or in listed assemblies with power conductors." },
        { ref: "725.154", text: "Cable types: CL2, CL3, CL2R, CL2P, etc. — exam favorite acronyms." }
      ],
      block: {
        type: "table",
        title: "CLASS 1–3 QUICK SHEET",
        table: [
          ["Class", "Voltage / Power", "NEC Treatment"],
          ["Class 1", "Up to 600V", "Full NEC wiring rules"],
          ["Class 2", "≤100VA, power-limited", "Relaxed wiring (safe from fire/shock)"],
          ["Class 3", "Higher than Class 2 but limited", "Some relaxed rules; more protection than Class 2"]
        ],
        body: "Key: Class 2 and 3 = limited power for safety. Class 1 is basically regular wiring."
      },
      images: [
        { src: "/images/module-07/m07-725-01.jpg", alt: "Class 2 power supply", caption: "Class 2/3 must use listed limited-power supplies." },
        { src: "/images/module-07/m07-725-02.jpg", alt: "Control circuit wiring", caption: "Know Class 1 vs 2 vs 3 treatment." }
      ]
    },

    // 8) Limited Energy & Communications
    {
      title: "760/770/800 — Low-Voltage & Communications",
      points: [
        { ref: "770.24", text: "Optical fiber cables must be fire-resistive (plenum, riser, general-use ratings)." },
        { ref: "800.24", text: "Comms cables (CM, CMP, CMR) must be installed per listing and marked with type." },
        { ref: "800.133", text: "Separation of power and communications cables unless in listed assemblies." },
        { ref: "770.113", text: "Mechanical protection required for optical fiber when subject to damage." },
        { ref: "800.170", text: "Abandoned cables in plenum/risers must be removed." }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — PULL THE DEAD CABLES",
        body: "Plenum/risers packed with abandoned low-voltage cables = fire hazard. Exams often ask if they must be removed — answer is yes."
      },
      images: [
        { src: "/images/module-07/m07-770-01.jpg", alt: "Fiber optic cabling", caption: "Fire-rated cables required in plenums and risers." },
        { src: "/images/module-07/m07-800-01.jpg", alt: "Comms cabling separation", caption: "Comms and power separation unless listed together." }
      ]
    },

    // 9) Critical Signal Integrity
    {
      title: "800/820 — Communication & CATV",
      points: [
        { ref: "820.44", text: "CATV cables entering buildings must be protected with a listed primary protector." },
        { ref: "800.47", text: "Grounding: comms systems bonded to building grounding electrode system." },
        { ref: "820.93", text: "Bond CATV shield within 20 ft of service entry." },
        { ref: "800.100", text: "Comms bonding jumpers sized per 800.100." },
        { ref: "820.100", text: "Grounding conductors must be insulated, copper, and not smaller than #14 AWG." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — COMMS BONDING",
        body: "Telecom/CATV systems must bond to the building grounding electrode. Exams love to test the 20-ft rule for CATV shields."
      },
      images: [
        { src: "/images/module-07/m07-820-01.jpg", alt: "CATV bonding clamp", caption: "Bond CATV shield at service entry." },
        { src: "/images/module-07/m07-800-02.jpg", alt: "Telecom bonding busbar", caption: "Bond all comms to building GES." }
      ]
    },

    // 10) Special Occupancies Wrap-Up
    {
      title: "700–800 — Key Exam Patterns",
      points: [
        { ref: "Compare", text: "Emergency (700, 10s), Standby (701, 60s), Optional (702, owner choice)." },
        { ref: "NFPA 72", text: "Fire alarms defer to NFPA 72 but must use listed wiring methods." },
        { ref: "COPS", text: "Critical Ops (708) = redundancy + security. Think hardened infrastructure." },
        { ref: "Fire Pumps", text: "695 = special OCPD rules, reliable sources." },
        { ref: "Low Voltage", text: "725/760/770/800 acronyms: CL2, FPL, CMP — memorize cable markings." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — MIXING THEM UP",
        body: "Exams love to mix Articles 700/701/702. Remember: **10s = Emergency, 60s = Legally Required Standby, Anytime = Optional.**"
      },
      images: [
        { src: "/images/module-07/m07-wrap-01.jpg", alt: "Codebook tabs", caption: "Tab Articles 700–702 to keep transfer times straight." },
        { src: "/images/module-07/m07-wrap-02.jpg", alt: "Exam prep notes", caption: "Memorize cable designations and transfer times." }
      ]
    }
  ],

  // Summary
  summary: {
    title: "Chapter 7 — Field Quick Hits",
    cards: [
      { iconName: "🔥", title: "Fire Alarm Wiring", text: "Use listed FPL/FPLR/FPLP cables and separate from power conductors." },
      { iconName: "⚡", title: "Emergency vs Standby", text: "Emergency = 10s transfer, Legally Required = 60s, Optional = whenever." },
      { iconName: "🚨", title: "COPS", text: "Critical Ops need redundancy, separation, survivability." },
      { iconName: "💧", title: "Fire Pumps", text: "Special OCPD/transfer exceptions apply." },
      { iconName: "📡", title: "Low Voltage", text: "Memorize CL2, CL3, CMP, CMR, FPL markings for exam traps." }
    ]
  }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;