const content = {
  hero: {
    imageSrc: "/images/module-05/m05-hero.jpg",
    imageAlt: "NEC Chapter 5 — Special Occupancies",
    title: "Chapter 5 — Special Occupancies",
    subtitle: "Special locations need special methods—get the rules right the first time."
  },

  // NAV
  prev: { href: "/modules/module-04", label: "Chapter 4" },
  next: { href: "/modules/module-06", label: "Chapter 6" },

  // QUIZ (none yet)
  quiz: [],

  // ARTICLES (10) — each has points, a special block, and TWO images
  articles: [
    {
      icon: "🧯",
      title: "Art. 500/501 — Classified Locations: Classes & Divisions",
      points: [
        { ref: "Class I", text: "Flammable gases/vapors. Div 1 = normal presence; Div 2 = abnormal (leaks only)." },
        { ref: "Class II", text: "Combustible dusts (grain/metal). Same Div 1/2 concept." },
        { ref: "Class III", text: "Ignitable fibers/flyings—surface accumulations & handling areas." },
        { ref: "Selection", text: "Equipment must be **identified** for class/division & group; seals, enclosures, wiring methods vary accordingly." }
      ,
{ ref: "501.15", text: "Sealing requirements: install explosionproof seals where required at boundaries and where the wiring method demands it—placement follows 501.15 notes." },
        { ref: "T-Codes", text: "Equipment temperature codes (T-ratings) must be suitable for the ignitable material—verify against the area’s gas/dust group and temperature class." }
],
      block: {
        type: "exam",
        title: "EXAM TRAP — Class vs Division",
        body: "Class = **material type** (gas/dust/fiber). Division = **likelihood** (1 = normal, 2 = abnormal). Don’t mix them."
      },
      images: [
        { src: "/images/module-05/m05-500-01.jpg", alt: "Class/Division area diagram", caption: "Identify Class **and** Division before selecting gear." },
        { src: "/images/module-05/m05-500-02.jpg", alt: "Explosionproof seals at boundary", caption: "Seal placement follows listing & code notes." }
      ]
    },

    {
      icon: "🌫️",
      title: "Art. 502/503 — Combustible Dusts & Ignitable Fibers",
      points: [
        { ref: "Dust Layers", text: "Layering dust is a hazard—housekeeping affects classification." },
        { ref: "Enclosures", text: "Use dust‑tight enclosures; keep gaskets and covers intact." },
        { ref: "Wiring Method", text: "Rigid metal conduit or identified systems; flex only if **identified** for the location." },
        { ref: "Surface Temp", text: "Equipment surface temperature must stay below dust ignition temps." }
      ,
{ ref: "Seals/Breathers", text: "Use identified dust-tight seals or breathers where pressure equalization is needed—don’t defeat enclosure ratings." },
        { ref: "Maintenance", text: "Housekeeping and maintenance are part of safety: keep covers/gaskets intact and avoid opening enclosures in active dusty operations." }
],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Dust wins",
        body: "If dust can settle, plan for it. Choose dust‑tight equipment and fittings; minimize penetrations."
      },
      images: [
        { src: "/images/module-05/m05-502-01.jpg", alt: "Dust accumulation", caption: "Surface temperature limits are critical in dusty spaces." },
        { src: "/images/module-05/m05-502-02.jpg", alt: "Dust‑tight enclosure", caption: "Use identified hubs/fittings; generic parts fail inspections." }
      ]
    },

    {
      icon: "🧭",
      title: "Art. 505/506 — Zone System (Gases & Dusts)",
      points: [
        { ref: "Zones", text: "Gases: Zone 0/1/2; Dusts: Zone 20/21/22 — likelihood‑based like Divisions but different cut lines." },
        { ref: "Markings", text: "Use equipment **marked/listed** for the Zone/Group; you may see EPL (Equipment Protection Level) on labels." },
        { ref: "Docs", text: "Maintain classification drawings; boundaries drive wiring methods and seals." }
      ,
{ ref: "505.25", text: "Conversions: division-classified equipment may be acceptable in Zones when permitted—follow conversion rules and listing limitations." },
        { ref: "Cable Glands", text: "Select Ex e / Ex d glands and wiring components that match the Zone and equipment type; terminations are a common inspection failure." }
],
      block: {
        type: "code",
        title: "NEC REFERENCE — Zone labeling",
        body: "Arts. 505/506 require gear **identified** for the Zone/Group. Match EPL and marks to each area, not the whole site."
      },
      images: [
        { src: "/images/module-05/m05-505-01.jpg", alt: "Zone map", caption: "Zones allow finer granularity than Divisions in many facilities." },
        { src: "/images/module-05/m05-505-02.jpg", alt: "Zone/EPL label", caption: "Verify labels before install; substitutions can fail inspection." }
      ]
    },

    {
      icon: "🏥",
      title: "Art. 517 — Health Care Facilities",
      points: [
        { ref: "Branches", text: "Essential system branches: **Life Safety**, **Critical**, **Equipment**—each with permitted loads." },
        { ref: "Receptacles", text: "Patient care spaces have minimum counts and **hospital‑grade** devices where required." },
        { ref: "Bonding", text: "Equipotential bonding in patient care areas (verify listed assemblies and methods)." }
      ,
{ ref: "517.16", text: "Isolated grounding permitted in patient-care spaces but **not** a substitute for required bonding—follow 517 bonding methods." },
        { ref: "Testing/Marking", text: "Hospital-grade receptacles, required counts, and periodic testing—document device locations and branch separation on as-builts." }
],
      block: {
  type: "table",
  title: "517 Quick Sheet — Essential System Branches",
  table: [
    ["Branch", "Purpose / Typical Loads", "Examples"],
    ["Life Safety", "Egress, alarms, fire protection; operates during emergency", "Egress lighting, fire alarm, exit signs"],
    ["Critical", "Patient care & task loads; continuity of care", "Bed receptacles, monitors, task lighting"],
    ["Equipment", "Building services & mechanical systems", "HVAC units, pumps, selected elevators"]
  ],
  body: "Keep separation and wiring ID per 517; follow the ATS/transfer scheme for each branch."
},
      images: [
        { src: "/images/module-05/m05-517-01.jpg", alt: "Hospital headwall circuits", caption: "Life Safety and Critical circuits are managed separately." },
        { src: "/images/module-05/m05-517-02.jpg", alt: "ATS lineups", caption: "Branch separation often reflected physically and by labeling." }
      ]
    },

    {
      icon: "🎭",
      title: "Art. 518/520 — Assembly & Theaters",
      points: [
        { ref: "Cables", text: "Stage/production spaces allow specific **portable cable types**; others are prohibited." },
        { ref: "Heat/Scenery", text: "Consider heat near drapes and scenery—location/shielding can be mandated." },
        { ref: "Disconnects", text: "Stage lighting/hoists often require **readily accessible** disconnecting means." }
      ,
{ ref: "Strain Relief", text: "Provide listed strain reliefs at battens/trusses; avoid sharp bends and abrasion—stage cabling moves and flexes." },
        { ref: "Portable Distro Bonding", text: "Bond and ground portable distribution per 520; keep neutrals isolated where required and verify GFCI where mandated." }
],
      block: {
        type: "chart",
        title: "Stage Area Cables — Allowed vs Banned",
        chart: [
          { label: "SOOW / SEOOW — extra-hard usage", value: 100 },
          { label: "SC — stage cable", value: 100 },
          { label: "NM — nonmetallic-sheathed", value: 10 },
          { label: "UF — underground feeder", value: 10 }
        ],
        body: "Use **only** listed extra-hard usage portable cables in stage spaces. See NEC 520 tables & notes."
      },
      images: [
        { src: "/images/module-05/m05-520-01.jpg", alt: "Theater rigging", caption: "Rigging & cabling must match 520 methods." },
        { src: "/images/module-05/m05-520-02.jpg", alt: "Portable cable with strain reliefs", caption: "Plan strain reliefs & routing from day one." }
      ]
    },

    {
      icon: "🎡",
      title: "Art. 525 — Carnivals, Circuses, & Fairs",
      points: [
        { ref: "GFCI", text: "Broad **GFCI** requirements for receptacles and certain equipment—inspectors enforce hard." },
        { ref: "Protection", text: "Protect portable cables from traffic, moisture, and physical damage—covers, elevation, or trenches." }
      ,
{ ref: "Bonding", text: "Bond noncurrent-carrying metal parts of rides/structures—portable systems need the same continuity as permanent installs." },
        { ref: "Cords/Use", text: "Use **hard/extra-hard usage** listed cords; protect from vehicles and foot traffic with ramps or elevation—wet-location fittings where needed." }
],
      block: {
        type: "horror",
        title: "Rain + Cable = Shutdown",
        body: "A fair lost power after rain pooled over unprotected cable runs. Trip hazards, ground faults, and damaged insulation ended the night early."
      },
      images: [
        { src: "/images/module-05/m05-525-01.jpg", alt: "Temporary cabling through crowd area", caption: "Guard & elevate cables—foot traffic will find them." },
        { src: "/images/module-05/m05-525-02.jpg", alt: "GFCI distro", caption: "Use listed GFCI devices and test them—don’t assume." }
      ]
    },

    {
      icon: "🏠",
      title: "Art. 545/550 — Manufactured Buildings & Mobile Homes",
      points: [
        { ref: "Listing", text: "Factory wiring is under listing; field connections must honor the **manufacturer’s instructions** and label." },
        { ref: "Service/Feeder", text: "Pedestal often = **service**. Conductors to the home often = **feeder**; bonding/neutral rules change." },
        { ref: "Dwelling Rules", text: "Spacing and GFCI/AFCI mirror dwelling rules with extra location specifics." }
      ,
{ ref: "550.33", text: "Four-wire feeder with isolated neutral to the home—bonding occurs only at service equipment, not downstream." },
        { ref: "Protection/Access", text: "Protect under-home wiring from damage; keep junctions accessible and use listed transition fittings at the pedestal." }
],
      block: {
        type: "exam",
        title: "EXAM TRAP — Service vs Feeder",
        body: "Don’t bond neutrals downstream if it’s a feeder. Bonding point is at service equipment."
      },
      images: [
        { src: "/images/module-05/m05-550-01.jpg", alt: "Pedestal with disconnect", caption: "Neutral bonding at service; feeders keep neutral isolated." },
        { src: "/images/module-05/m05-550-02.jpg", alt: "Factory label", caption: "Follow label details—outside the listing gets flagged." }
      ]
    },

    {
      icon: "🌾",
      title: "Art. 547 — Agricultural Buildings",
      points: [
        { ref: "Corrosion", text: "Ammonia & moisture are brutal—use **corrosion‑resistant** fittings/wiring methods." },
        { ref: "Bonding", text: "Equipotential planes may be required in livestock areas; verify details in 547." },
        { ref: "Enclosures", text: "Use drip‑proof/dust‑tight where needed; mind wash‑down zones." }
      ,
{ ref: "GFCI/AFCI", text: "Apply GFCI/AFCI requirements per 547 and Chapter 2—wet/corrosive zones commonly require GFCI protection." },
        { ref: "Locations", text: "When possible, locate sensitive equipment outside corrosive/wash-down areas; use corrosion-resistant materials if it must be inside." }
],
      block: {
        type: "rule",
        title: "RULE OF THUMB — Survive the wash",
        body: "If it can’t survive wash‑down & chemicals, it doesn’t belong. Specify like the environment demands."
      },
      images: [
        { src: "/images/module-05/m05-547-01.jpg", alt: "Corrosion‑resistant enclosures", caption: "Select materials for chemical exposure & moisture." },
        { src: "/images/module-05/m05-547-02.jpg", alt: "Equipotential bonding grid", caption: "Bonding reduces shock risk for animals & workers." }
      ]
    },

    {
      icon: "⛵",
      title: "Art. 555 — Marinas & Boatyards",
      points: [
        { ref: "GF/ELCI", text: "Equipment **ground‑fault/ELCI** protection is a major theme—people and water don’t mix." },
        { ref: "Bonding", text: "Bond all metal parts; corrosion & stray currents require solid bonding/grounding." },
        { ref: "Marine Rated", text: "Shore‑power inlets and cord sets must be **listed** for marine use." }
      ,
{ ref: "ELCI/GFCI", text: "Shore-power protection using ELCI/GFCI—expect ~30 mA trip for ELCI per listing; verify device ratings and coordination." },
        { ref: "Equipotential", text: "Bond docks, pedestals, and conductive parts to reduce shock risk—corrosion control and continuity are both required." }
],
      block: {
        type: "code",
        title: "NEC REFERENCE — Shock hazards",
        body: "Art. 555 targets **electric shock drowning**: GF/ELCI protection, bonding continuity, and marine‑rated gear."
      },
      images: [
        { src: "/images/module-05/m05-555-01.jpg", alt: "Shore power pedestals", caption: "Use marine‑rated receptacles & enclosures." },
        { src: "/images/module-05/m05-555-02.jpg", alt: "Bonded dock structures", caption: "Continuity and corrosion resistance matter." }
      ]
    },

    {
      icon: "⏱️",
      title: "Art. 590 — Temporary Installations",
      points: [
        { ref: "Duration", text: "Defined short‑term use; remove at job completion. ‘Temporary’ is not forever." },
        { ref: "Protection", text: "Protect cords/cables from damage; elevate or cover where subject to traffic." },
        { ref: "GFCI", text: "Robust GFCI requirements for construction receptacles & portable distribution." }
      ,
{ ref: "Listed Gear", text: "Use **listed** temp power equipment and hard/extra-hard usage cords—no homemade boxes; weather ratings must match conditions." },
        { ref: "Duration/Removal", text: "Define the time window and remove at completion; document the temp plan and route to avoid ‘permanent temporary’ installs." }
],
      block: {
  type: "table",
  title: "Temp Power Quick Sheet",
  table: [
    ["Item", "Rule"],
    ["GFCI", "Required on all construction receptacles"],
    ["Protection", "Cover/elevate cords & cables where subject to damage or traffic"],
    ["Assemblies", "Use only listed temporary power distribution equipment"],
    ["Removal", "Remove all temporary wiring when the job is complete"]
  ]
},
      images: [
        { src: "/images/module-05/m05-590-01.jpg", alt: "Temp power distro", caption: "Use listed distribution gear with GFCI." },
        { src: "/images/module-05/m05-590-02.jpg", alt: "Cable ramps", caption: "Protect cords from vehicles & foot traffic." }
      ]
    }
  ],

  // Summary
  summary: {
    title: "Chapter 5 — Field Quick Hits",
    cards: [
      { iconName: "🔥", title: "Class/Division vs Zone", text: "Class = material; Division/Zone = likelihood. Match listed gear to area drawings." },
      { iconName: "🏥", title: "517 Branches", text: "Life Safety, Critical, Equipment—separate and label. Hospital‑grade where required." },
      { iconName: "��", title: "Stage Spaces", text: "Only allowed cable types; plan strain reliefs and routing from day one." },
      { iconName: "⛵", title: "Marina Shock Risk", text: "ELCI/GFCI + bonding. Only marine‑rated gear at the docks." },
      { iconName: "��", title: "Ag Durability", text: "Corrosion + wash‑down: pick enclosures/fittings that survive the environment." },
      { iconName: "⏱️", title: "Temporary Power", text: "Protect cords, provide GFCI, and remove when the job is done." }
    ]
  }
};
import quiz from "./quiz";
(content as any).quiz = quiz;

export default content;
