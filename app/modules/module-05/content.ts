# Safety backup (if file exists)
mkdir -p app/modules/module-05
[ -f app/modules/module-05/content.ts ] && cp app/modules/module-05/content.ts app/modules/module-05/content.ts.bak.$(date +%s)

# Write a good content object (ModuleTemplate-friendly)
cat > app/modules/module-05/content.ts <<'TS'
const content = {
  hero: {
    title: "Chapter 5 — Special Occupancies",
    subtitle:
      "Hazardous locations, healthcare, assembly spaces, farms, and other edge cases.",
    imageSrc: "/images/module-02/m02-01.jpg" // placeholder to avoid missing asset
  },

  // 8 concise articles (points = Module 2 style body list)
  articles: [
    {
      title: "Article 500 — Hazardous (Classified) Locations, General",
      points: [
        "Scope: Classified locations per class/division system.",
        "Equipment must be listed for the specific class/division.",
        "Seals: required where conduits enter enclosures to limit gas migration."
      ],
      images: [{ src: "/images/module-02/m02-02.jpg", alt: "Hazardous seal", caption: "Sealing fitting at boundary" }]
    },
    {
      title: "Article 501 — Class I Locations (Gases/Vapors)",
      points: [
        "Wiring: threaded rigid metal or IMC common; explosionproof fittings as required.",
        "Seals within 18\" of enclosure in Division 1.",
        "Conductor fill & splices per listed sealing compound instructions."
      ],
      images: [{ src: "/images/module-02/m02-03.jpg", alt: "Class I apparatus" }]
    },
    {
      title: "Article 502 — Class II Locations (Dusts)",
      points: [
        "Dust‑tight enclosures required; no ordinary device boxes in dusty process areas.",
        "Flexible cords limited; use dust‑tight cord connectors.",
        "Surface temperatures must not ignite dust layers."
      ],
      images: [{ src: "/images/module-02/m02-05.jpg", alt: "Dust enclosure" }]
    },
    {
      title: "Article 503 — Class III Locations (Fibers/Flyings)",
      points: [
        "Gasketed enclosures; minimize fiber accumulation.",
        "Belt guards/hoods to prevent fibers migrating to wiring methods.",
        "Equipment identified for Class III where required."
      ],
      images: [{ src: "/images/module-02/m02-04.jpg", alt: "Class III area" }]
    },
    {
      title: "Article 517 — Health Care Facilities",
      points: [
        "Essential electrical system: life safety + critical branches.",
        "Patient care spaces: grounding/bonding upgrades; isolated grounds per design.",
        "Receptacle counts and marking in patient care vicinity."
      ],
      images: [{ src: "/images/module-02/m02-06.jpg", alt: "Hospital panel" }]
    },
    {
      title: "Article 518 — Assembly Occupancies",
      points: [
        "Wiring in places of assembly must be protected from physical damage.",
        "Stage/Platform wiring may invoke Article 520 rules.",
        "Cable types limited in plenum and audience areas."
      ],
      images: [{ src: "/images/module-02/m02-09.jpg", alt: "Assembly hall" }]
    },
    {
      title: "Article 547 — Agricultural Buildings",
      points: [
        "Corrosion and moisture: use suitable wiring methods (UF, PVC, RMC/IMC).",
        "Equipotential planes in livestock confinement areas.",
        "GFCI & AFCI requirements increased in damp/aggressive locations."
      ],
      images: [{ src: "/images/module-02/m02-10.jpg", alt: "Ag building" }]
    },
    {
      title: "Article 555 — Marinas and Boatyards",
      points: [
        "GFCI for receptacles; GFPE for feeders/shore power at set thresholds.",
        "Bonding of all non‑current‑carrying metal parts and equipment grounding.",
        "Labeling and warning signage for electric shock drowning hazards."
      ],
      images: [{ src: "/images/module-02/m02-12.jpg", alt: "Marina power" }]
    }
  ],

  quiz: [
    { id: 1, stem: "Class I locations involve:", choices: [
      {key:"A",text:"Combustible dust"}, {key:"B",text:"Fibers"}, {key:"C",text:"Gases/vapors"}, {key:"D",text:"Water"}, ],
      answer: "C", why: "Class I = flammable gases or vapors." },
    { id: 2, stem: "A sealing fitting in Class I, Div 1 is typically required:", choices: [
      {key:"A",text:"Within 18 inches of the enclosure"}, {key:"B",text:"At panelboard only"}, {key:"C",text:"Never"}, {key:"D",text:"Only outdoors"} ],
      answer: "A", why: "To limit gas passage through raceways." },
    { id: 3, stem: "Patient care spaces require:", choices: [
      {key:"A",text:"No special bonding"}, {key:"B",text:"Isolated grounds in all cases"}, {key:"C",text:"Enhanced grounding/bonding per 517"}, {key:"D",text:"Aluminum EGCs only"} ],
      answer: "C", why: "517 adds bonding requirements for patient safety." },
    { id: 4, stem: "Class II locations are primarily hazards due to:", choices: [
      {key:"A",text:"Dusts"}, {key:"B",text:"Vapors"}, {key:"C",text:"Fibers"}, {key:"D",text:"Liquids"} ],
      answer: "A", why: "Class II = combustible dusts." },
    { id: 5, stem: "Agricultural buildings often require:", choices: [
      {key:"A",text:"Ordinary device boxes"}, {key:"B",text:"Equipotential planes"}, {key:"C",text:"NM cable in pits"}, {key:"D",text:"No GFCI"} ],
      answer: "B", why: "547 calls for equipotential planes in confinement areas." },
    { id: 6, stem: "In assembly occupancies, wiring must be:", choices: [
      {key:"A",text:"Open and exposed"}, {key:"B",text:"Protected from damage"}, {key:"C",text:"Only temporary"}, {key:"D",text:"All knob-and-tube"} ],
      answer: "B", why: "518 requires protection due to crowds and movement." },
    { id: 7, stem: "Marinas typically require:", choices: [
      {key:"A",text:"No GFCI/GFPE"}, {key:"B",text:"GFCI for receptacles and GFPE on feeders"}, {key:"C",text:"DC only"}, {key:"D",text:"Non-metal enclosures only"} ],
      answer: "B", why: "555 targets shock drowning risks." },
    { id: 8, stem: "Class III deals with:", choices: [
      {key:"A",text:"Flammable gases"}, {key:"B",text:"Combustible dusts"}, {key:"C",text:"Ignitable fibers/flyings"}, {key:"D",text:"Explosives"} ],
      answer: "C", why: "Class III = fibers/flyings." },
    { id: 9, stem: "In Class II, equipment enclosures should be:", choices: [
      {key:"A",text:"Open drip-proof"}, {key:"B",text:"Dust‑tight where required"}, {key:"C",text:"Splash-proof only"}, {key:"D",text:"Unvented oil-filled only"} ],
      answer: "B", why: "Dust‑tight to prevent dust ingress." },
    { id: 10, stem: "Health care essential electrical system branches include:", choices: [
      {key:"A",text:"Decorative lighting"}, {key:"B",text:"Life safety and critical branches"}, {key:"C",text:"Only EV chargers"}, {key:"D",text:"Only UPS circuits"} ],
      answer: "B", why: "517 defines life safety and critical branches." }
  ],

  prev: { href: "/modules/module-04", label: "Chapter 4" },
  next: { href: "/modules/module-06", label: "Chapter 6" }
};

export default content;
TS