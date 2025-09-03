/* Module 7 — Special Conditions (Chapter 7) */
const content = {
  hero: {
    imageSrc: "/images/module-07/m07-01.jpg",
    imageAlt: "Special occupancies and conditions — emergency, health care, classified locations",
    title: "Chapter 7 — Special Conditions",
    subtitle:
      "Backup power, emergency systems, healthcare facilities, and communications. These articles cover edge-case rules examiners love."
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
        { ref: "700.32", text: "Circuit wiring must be protected from physical damage — rigid raceways are common." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — 10 SECOND RULE",
        body: "Emergency power must come online in **10 seconds** or less. Longer restore times belong to legally required standby (701)."
      },
      images: [
        { src: "/images/module-07/m07-02.jpg", alt: "Automatic transfer switch", caption: "Emergency ATS ensures independent supply." },
        { src: "/images/module-07/m07-03.jpg", alt: "Generator with quick-start system", caption: "Emergency generators must start fast." }
      ]
    },

    {
      title: "701 — Legally Required Standby",
      points: [
        { ref: "701.2", text: "Serves loads that are legally mandated but not life safety (elevators, smoke control, heating in severe climates)." },
        { ref: "701.11", text: "Transfer within **60 seconds** — slower than emergency systems." },
        { ref: "701.10", text: "Circuit wiring kept separate like 700, but requirements are slightly less strict." },
        { ref: "701.12", text: "Selective coordination between feeders and OCPDs is required." },
        { ref: "701.17", text: "Identify legally required standby wiring separate from emergency and normal." }
      ],
      block: { type: "rule", title: "RULE — 60 SECONDS OR LESS", body: "Not life safety, but still mandated ➜ restore within **1 minute**." },
      images: [
        { src: "/images/module-07/m07-04.jpg", alt: "Elevator on standby", caption: "Elevators commonly on 701." },
        { src: "/images/module-07/m07-05.jpg", alt: "Standby panel", caption: "Labeling distinguishes 701 wiring." }
      ]
    },

    {
      title: "702 — Optional Standby",
      points: [
        { ref: "702.2", text: "Systems **not** required by law or code — convenience or business continuity." },
        { ref: "702.4", text: "Transfer equipment must prevent inadvertent interconnection with the normal source." },
        { ref: "702.7", text: "Service disconnect signage must indicate the type and location of optional standby power." },
        { ref: "702.5", text: "Can serve selected loads or entire premises." },
        { ref: "702.6", text: "Portable generators must be connected by listed transfer means — no ‘suicide cords’." }
      ],
      block: { type: "code", title: "NEC REFERENCE — OPTIONAL = CONVENIENCE", body: "Optional standby is elective but still requires listed transfer equipment and safe isolation." },
      images: [
        { src: "/images/module-07/m07-06.jpg", alt: "Generator inlet and interlock", caption: "Use listed inlets and interlocks." },
        { src: "/images/module-07/m07-07.jpg", alt: "Residential standby", caption: "Covers convenience or business continuity." }
      ]
    },

    {
      title: "708 — Critical Operations Power Systems (COPS)",
      points: [
        { ref: "708.1", text: "Applies to facilities designated for national security, public health, or disaster recovery." },
        { ref: "708.20", text: "Requires a documented risk assessment and reliability strategy." },
        { ref: "708.52", text: "Protect wiring from fire/physical damage — 2-hour rated separations are common." },
        { ref: "708.54", text: "Mandatory maintenance and operational testing with records." },
        { ref: "708.22", text: "Highly reliable sources (dual utility, redundant generators, etc.)." }
      ],
      block: {
        type: "table",
        title: "CRITICAL OPS QUICK HITS",
        table: [
          ["Requirement", "NEC Section"],
          ["Risk assessment", "708.20"],
          ["2-hr rated separation", "708.52"],
          ["Documented maintenance", "708.54"],
          ["Redundant sources", "708.22"]
        ],
        body: "COPS exceeds 700/701 in rigor because of national/public importance."
      },
      images: [
        { src: "/images/module-07/m07-08.jpg", alt: "Hardened utility room", caption: "Hardened infrastructure is typical." },
        { src: "/images/module-07/m07-09.jpg", alt: "Dual generators", caption: "Redundant supply for critical ops." }
      ]
    },

    {
      title: "517 — Health Care Facilities",
      points: [
        { ref: "517.30", text: "Essential electrical systems split into **life safety**, **critical**, and **equipment** branches." },
        { ref: "517.34", text: "Each branch transfers via its own listed transfer switch(es)." },
        { ref: "517.31", text: "Wiring separation — life safety branch kept independent." },
        { ref: "517.33", text: "Critical branch supplies patient care equipment." },
        { ref: "517.18", text: "Patient care spaces: strict grounding/receptacle rules." }
      ],
      block: {
        type: "chart",
        title: "HEALTHCARE BRANCHES",
        chart: [
          { label: "Life Safety", value: 1 },
          { label: "Critical", value: 1 },
          { label: "Equipment", value: 1 }
        ],
        body: "Three distinct branches — know what each serves."
      },
      images: [
        { src: "/images/module-07/m07-10.jpg", alt: "Hospital panelboard", caption: "Clear separation for life safety branch." },
        { src: "/images/module-07/m07-11.jpg", alt: "OR receptacles", caption: "Critical branch powers patient care." }
      ]
    },

    {
      title: "720 — Circuits ≤50V",
      points: [
        { ref: "720.1", text: "Covers certain low-voltage circuits (≤50V) not falling under 725/760/770." },
        { ref: "720.3", text: "Conductor sizes must still meet ampacity/insulation requirements." },
        { ref: "720.4", text: "Mechanical execution: neat, secure, and durable." },
        { ref: "720.5", text: "Protect from physical damage — low voltage ≠ no rules." },
        { ref: "720.6", text: "Grounding may still apply depending on the system." }
      ],
      block: { type: "horror", title: "JOBSITE HORROR — “IT’S ONLY 24 VOLTS”", body: "A fire started from undersized thermostat wiring run through plenums without protection. Even ≤50V circuits must follow rules." },
      images: [
        { src: "/images/module-07/m07-12.jpg", alt: "Low-voltage bundle", caption: "Class 2/3 and ≤50V still have rules." },
        { src: "/images/module-07/m07-13.jpg", alt: "Burnt thermostat cable", caption: "Improper low-voltage installs can fail dangerously." }
      ]
    },

    {
      title: "725 — Class 1, 2, and 3 Circuits",
      points: [
        { ref: "725.2", text: "Class 1 can be up to 600V (power-limited designation possible). Class 2/3 are limited by source power." },
        { ref: "725.121", text: "Class 2/3 power supplies must be **listed**." },
        { ref: "725.136", text: "Maintain separation from power circuits or provide barriers." },
        { ref: "725.41", text: "Class 1 often treated like power circuits — same wiring methods." },
        { ref: "725.3", text: "Don’t miss cross-references — other chapters can modify 725." }
      ],
      block: { type: "exam", title: "EXAM TRAP — CLASS 2 ≠ NO RULES", body: "Limited power ≠ unlimited liberty. Use listed sources and maintain separation from power wiring." },
      images: [
        { src: "/images/module-07/m07-14.jpg", alt: "Class 2 supply", caption: "Listed Class 2 sources are required." },
        { src: "/images/module-07/m07-15.jpg", alt: "Separated conductors", caption: "Keep power and Class 2/3 separated." }
      ]
    },

    {
      title: "750 — Energy Management Systems",
      points: [
        { ref: "750.2", text: "Permanently installed systems that control electrical loads." },
        { ref: "750.10", text: "Must **not** override life safety systems (fire alarm, emergency lighting)." },
        { ref: "750.20", text: "Disconnecting means required for EMS equipment." },
        { ref: "750.25", text: "Identify and protect control wiring as required." },
        { ref: "750.30", text: "Provide documentation for the AHJ on system operation." }
      ],
      block: { type: "rule", title: "RULE — EMS CAN’T OVERRIDE SAFETY", body: "Shedding HVAC is fine; killing emergency lighting or fire alarm power is not." },
      images: [
        { src: "/images/module-07/m07-16.jpg", alt: "EMS cabinet", caption: "EMS needs a disconnecting means." },
        { src: "/images/module-07/m07-17.jpg", alt: "Building automation", caption: "Often integrated with BAS." }
      ]
    },

    {
      title: "770 — Optical Fiber Cables",
      points: [
        { ref: "770.24", text: "Mechanical execution still applies — fiber must be neat and secure." },
        { ref: "770.113", text: "Use fire-resistant cable types in risers/plenums." },
        { ref: "770.154", text: "Maintain separation from power conductors unless specifically permitted." },
        { ref: "770.21", text: "Use listed fiber raceways suitable for the application." },
        { ref: "770.2", text: "Applies whether fiber carries data or just light." }
      ],
      block: { type: "code", title: "NEC REFERENCE — FIBER STILL COUNTS", body: "Fiber isn’t conductive, but fire spread and separation rules still apply." },
      images: [
        { src: "/images/module-07/m07-18.jpg", alt: "Fiber patch panel", caption: "Neat, secure installation is required." },
        { src: "/images/module-07/m07-19.jpg", alt: "Plenum-rated fiber", caption: "Use the right jacket in plenums/risers." }
      ]
    },

    {
      title: "760 — Fire Alarm Systems",
      points: [
        { ref: "760.41(B)", text: "Fire alarm branch circuits: **dedicated** and identifiable; no other loads on the circuit." },
        { ref: "760.121/127", text: "Power-Limited Fire Alarm (PLFA) circuits use **listed** power supplies and cable types (FPL/FPLR/FPLP)." },
        { ref: "760.136", text: "Maintain required separation from power conductors or use barriers/listed assemblies rated for co-routing." },
        { ref: "760.113 & 300.21", text: "Use proper cable rating for **risers** and **plenums** to limit smoke/fire spread." },
        { ref: "NFPA 72 coord.", text: "Pathway survivability levels (e.g., 2-hour) for emergency voice/alarm systems are coordinated with NFPA 72." }
      ],
      block: {
        type: "table",
        title: "FIRE ALARM CABLE TYPES (PLFA)",
        table: [
          ["Cable", "Where Used", "Notes"],
          ["FPL",   "General areas", "Power-limited fire alarm cable"],
          ["FPLR",  "Risers",        "Riser-rated; not for plenums"],
          ["FPLP",  "Plenums",       "Plenum-rated; best flame/smoke"]
        ],
        body: "Pick the jacket rating to match the space. Keep FA circuits dedicated and identified."
      },
      images: [
        { src: "/images/module-07/m07-20.jpg", alt: "Red fire alarm cable", caption: "Dedicated branch and listed PLFA cabling." },
        { src: "/images/module-07/m07-21.jpg", alt: "Fire alarm control panel", caption: "Coordinate survivability with NFPA 72." }
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
      { iconName: "🔌", title: "702 Optional", text: "Convenience standby — safe transfer only." },
      { iconName: "📡", title: "770 Fiber", text: "Fire ratings and separation still required." },
      { iconName: "🚨", title: "760 Fire Alarm", text: "Dedicated circuits + FPL/FPLR/FPLP." }
    ]
  }
};

import quiz from "./quiz";
(content as any).quiz = quiz;
export default content;