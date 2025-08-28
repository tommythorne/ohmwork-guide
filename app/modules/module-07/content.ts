/* Module 7 — Special Conditions (Chapter 7) */
const content = {
  hero: {
    imageSrc: "/images/module-07/m07-hero.jpg",
    imageAlt: "Special occupancies and conditions — emergency, health care, classified locations",
    title: "Chapter 7 — Special Conditions",
    subtitle:
      "Backup power, emergency systems, healthcare facilities, and classified locations. These articles cover edge-case rules examiners love."
  },

  // NAV
  prev: { href: "/modules/module-06", label: "Chapter 6" },
  next: { href: "/modules/module-08", label: "Chapter 8" },

  // ARTICLES — 10 fully fleshed out
  articles: [
    {
      title: "700 — Emergency Systems",
      points: [
        { ref: "700.3", text: "Emergency systems must be independent from normal supply. Transfer switches isolate sources to prevent backfeed." },
        { ref: "700.12", text: "Source of power must restore within **10 seconds** of normal supply loss." },
        { ref: "700.10(D)", text: "Wiring for emergency circuits must be kept independent from other wiring systems." },
        { ref: "700.27", text: "Ground-fault protection: emergency feeders must maintain selective coordination." },
        { ref: "700.32", text: "Circuit wiring must be protected from physical damage — rigid conduit often required." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — 10 SECOND RULE",
        body: "Emergency power must come online in **10 seconds** or less. Anything longer = not emergency, it’s legally required standby (701)."
      },
      images: [
        { src: "/images/module-07/m07-700-01.jpg", alt: "Automatic transfer switch", caption: "Emergency ATS ensures independent supply." },
        { src: "/images/module-07/m07-700-02.jpg", alt: "Generator with quick-start system", caption: "Emergency generators must start fast." }
      ]
    },

    {
      title: "701 — Legally Required Standby",
      points: [
        { ref: "701.2", text: "Serves loads that are legally mandated but not life safety (e.g., elevators, heating in critical climates)." },
        { ref: "701.11", text: "Transfer within **60 seconds** — slower than emergency systems." },
        { ref: "701.10", text: "Circuit wiring must be kept separate like 700, but requirements are slightly less strict." },
        { ref: "701.12", text: "Coordination between feeders and overcurrent devices is required." },
        { ref: "701.17", text: "Wiring identification: legally required standby must be distinguishable from emergency wiring." }
      ],
      block: {
        type: "rule",
        title: "RULE — 60 SECONDS OR LESS",
        body: "If it’s not life safety but legally required, power must restore within **1 minute**."
      },
      images: [
        { src: "/images/module-07/m07-701-01.jpg", alt: "Elevator emergency system", caption: "Elevators often fall under legally required standby." },
        { src: "/images/module-07/m07-701-02.jpg", alt: "Standby generator panel", caption: "Markings distinguish standby from emergency wiring." }
      ]
    },

    {
      title: "702 — Optional Standby",
      points: [
        { ref: "702.2", text: "Applies to systems not required by law or code — typically for convenience or business continuity." },
        { ref: "702.4", text: "Transfer equipment must prevent inadvertent interconnection with normal supply." },
        { ref: "702.7", text: "Signage required at service disconnect noting type and location of optional standby." },
        { ref: "702.5", text: "Capacity may cover selected loads or entire premises." },
        { ref: "702.6", text: "Portable generators must be connected by listed transfer means — no backfeeding via dryer plugs." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — OPTIONAL = CONVENIENCE",
        body: "Optional standby = homeowner or business choice. Still requires safe transfer equipment."
      },
      images: [
        { src: "/images/module-07/m07-702-01.jpg", alt: "Portable generator inlet box", caption: "Use listed inlets and interlocks." },
        { src: "/images/module-07/m07-702-02.jpg", alt: "Residential standby generator", caption: "Optional standby covers convenience loads." }
      ]
    },

    {
      title: "708 — Critical Operations Power Systems (COPS)",
      points: [
        { ref: "708.1", text: "Applies to facilities designated by governmental authority for national security, public health, or disaster recovery." },
        { ref: "708.20", text: "Requires risk assessment and documentation for power reliability." },
        { ref: "708.52", text: "Wiring methods must be protected from physical damage and fire — 2-hour rated separations often required." },
        { ref: "708.54", text: "Maintenance and operational testing is mandatory; records must be kept." },
        { ref: "708.22", text: "Power supply must be highly reliable, often with dual feeds and redundant generators." }
      ],
      block: {
        type: "table",
        title: "CRITICAL OPS QUICK HITS",
        table: [
          ["Requirement", "NEC Section"],
          ["Risk assessment", "708.20"],
          ["2-hour rated protection", "708.52"],
          ["Documented maintenance", "708.54"],
          ["Redundant sources", "708.22"]
        ],
        body: "COPS = stricter than 700/701 because of national/public importance."
      },
      images: [
        { src: "/images/module-07/m07-708-01.jpg", alt: "Hardened utility room", caption: "COPS facilities require hardened infrastructure." },
        { src: "/images/module-07/m07-708-02.jpg", alt: "Dual generator system", caption: "Redundant supply for critical operations." }
      ]
    },

    {
      title: "517 — Health Care Facilities",
      points: [
        { ref: "517.30", text: "Essential electrical systems: life safety, critical, and equipment branches." },
        { ref: "517.34", text: "Transfer switches: each branch must transfer independently." },
        { ref: "517.31", text: "Wiring separation: keep life safety branch independent." },
        { ref: "517.33", text: "Critical branch supplies patient care equipment." },
        { ref: "517.18", text: "Patient care spaces: grounding and receptacle requirements are strict." }
      ],
      block: {
        type: "chart",
        title: "CHART — HEALTHCARE BRANCHES",
        chart: [
          { label: "Life Safety", value: 1 },
          { label: "Critical", value: 1 },
          { label: "Equipment", value: 1 }
        ],
        body: "Healthcare essential systems are split into 3 branches — life safety, critical, and equipment."
      },
      images: [
        { src: "/images/module-07/m07-517-01.jpg", alt: "Hospital panelboard", caption: "Clearly separated life safety branch." },
        { src: "/images/module-07/m07-517-02.jpg", alt: "Operating room outlets", caption: "Critical branch powers patient care." }
      ]
    },

    {
      title: "720 — Circuits ≤50V",
      points: [
        { ref: "720.1", text: "Covers low-voltage circuits (≤50V) not covered by Articles 725, 760, or 770." },
        { ref: "720.3", text: "Conductor sizes must still meet ampacity and insulation requirements." },
        { ref: "720.4", text: "Mechanical execution of work still required — neat, secure, and durable." },
        { ref: "720.5", text: "Protection from physical damage still applies — don’t think low voltage = no rules." },
        { ref: "720.6", text: "Grounding requirements may still apply depending on system design." }
      ],
      block: {
        type: "horror",
        title: "JOBSITE HORROR — 'IT’S ONLY 24 VOLTS'",
        body: "A fire started from undersized thermostat wiring run through plenums without protection. Even ≤50V circuits must follow rules."
      },
      images: [
        { src: "/images/module-07/m07-720-01.jpg", alt: "Low-voltage wiring bundle", caption: "Even Class 2/3 wiring has rules." },
        { src: "/images/module-07/m07-720-02.jpg", alt: "Burnt thermostat wire", caption: "Improper low-voltage installs can still fail dangerously." }
      ]
    },

    {
      title: "725 — Class 1, 2, and 3 Circuits",
      points: [
        { ref: "725.2", text: "Class 1 = up to 600V with power-limited designation. Class 2/3 = inherently limited by power source." },
        { ref: "725.121", text: "Class 2/3 power supplies must be listed." },
        { ref: "725.136", text: "Separation from power circuits: maintain spacing or barriers." },
        { ref: "725.41", text: "Class 1 circuits treated like power circuits in many cases — same wiring methods." },
        { ref: "725.3", text: "Other chapters can modify 725 — don’t forget cross-references." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — CLASS 2 ≠ NO RULES",
        body: "Class 2/3 may be limited power, but must use listed sources and separation from power wiring."
      },
      images: [
        { src: "/images/module-07/m07-725-01.jpg", alt: "Class 2 power supply", caption: "Listed Class 2 supplies are required." },
        { src: "/images/module-07/m07-725-02.jpg", alt: "Cable separation in conduit", caption: "Maintain separation between power and Class 2/3." }
      ]
    },

    {
      title: "750 — Energy Management Systems",
      points: [
        { ref: "750.2", text: "Applies to permanently installed energy management systems that control electrical loads." },
        { ref: "750.10", text: "Systems must not override life safety systems (fire alarm, emergency lighting, etc.)." },
        { ref: "750.20", text: "Disconnecting means required for all energy management equipment." },
        { ref: "750.25", text: "Control wiring must be identified and protected as required." },
        { ref: "750.30", text: "Documentation of system operation must be available to the AHJ." }
      ],
      block: {
        type: "rule",
        title: "RULE — EMS CAN’T OVERRIDE SAFETY",
        body: "Energy management can shed HVAC loads, but it can’t kill emergency lighting or fire alarm power."
      },
      images: [
        { src: "/images/module-07/m07-750-01.jpg", alt: "EMS control panel", caption: "EMS panels must have disconnecting means." },
        { src: "/images/module-07/m07-750-02.jpg", alt: "Building automation system", caption: "EMS often ties into building automation." }
      ]
    },

    {
      title: "770 — Optical Fiber Cables",
      points: [
        { ref: "770.24", text: "Mechanical execution of work still applies — fiber must be neat and secure." },
        { ref: "770.113", text: "Fire-resistant cable types required in risers and plenums." },
        { ref: "770.154", text: "Separation required between optical fiber cables and power conductors unless specifically permitted." },
        { ref: "770.21", text: "Fiber raceways must be listed and suitable for use." },
        { ref: "770.2", text: "Applies whether fiber is carrying communications or just light." }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — FIBER STILL COUNTS",
        body: "Optical fiber isn’t conductive, but fire spread and separation rules still apply."
      },
      images: [
        { src: "/images/module-07/m07-770-01.jpg", alt: "Fiber optic patch panel", caption: "Neat and secure install required." },
        { src: "/images/module-07/m07-770-02.jpg", alt: "Plenum-rated fiber cable", caption: "Use the right jacket rating in plenums/risers." }
      ]
    }
  ],

  // SUMMARY
  summary: {
    title: "Chapter 7 — Special Conditions: Quick Hits",
    cards: [
      { iconName: "⚡", title: "700 Emergency", text: "Life safety — power in 10 seconds." },
      { iconName: "⏱️", title: "701 Standby", text: "Legally required — power in 60 seconds." },
      { iconName: "🏥", title: "517 Healthcare", text: "Life safety / critical / equipment branches." },
      { iconName: "🛡️", title: "708 COPS", text: "National/public security — highest reliability." },
      { iconName: "🔌", title: "702 Optional", text: "Convenience standby — still safe transfer." },
      { iconName: "📡", title: "770 Fiber", text: "Fire ratings and separation still required." }
    ]
  }
};

import quiz from "./quiz";
(content as any).quiz = quiz;
export default content;