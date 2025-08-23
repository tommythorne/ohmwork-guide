const content = {
  hero: {
    title: "Chapter 5 — Special Occupancies",
    subtitle: "Hazardous locations, healthcare, assembly, agriculture — special rules, same electricity.",
    imageSrc: "/images/module-02/m02-01.jpg" // placeholder image path
  },

  articles: [
    {
      title: "Article 500 — Hazardous (Classified) Locations (General)",
      points: [
        "Use equipment **listed** for the class/division.",
        "Provide **sealing fittings** where raceways leave classified areas."
      ],
      images: [{ src: "/images/module-02/m02-02.jpg", alt: "Sealing fitting", caption: "Seal at boundary" }]
    },
    {
      title: "Article 501 — Class I (Gases/Vapors)",
      points: [
        "Common wiring: **RMC/IMC**; explosionproof enclosures as required.",
        "Seal fittings typically within **18 in.** of enclosures in Div 1 areas."
      ],
      images: [{ src: "/images/module-02/m02-03.jpg", alt: "Class I gear" }]
    },
    {
      title: "Article 517 — Health Care Facilities",
      points: [
        "**Essential Electrical System**: life safety + critical branches.",
        "Patient care spaces: **enhanced bonding** and listed wiring methods."
      ],
      images: [{ src: "/images/module-02/m02-06.jpg", alt: "Hospital panel" }]
    }
  ],

  quiz: [
    {
      id: 1,
      stem: "Class I locations primarily involve:",
      choices: [
        { key: "A", text: "Fibers/flyings" },
        { key: "B", text: "Combustible dusts" },
        { key: "C", text: "Flammable gases/vapors" },
        { key: "D", text: "Steam" }
      ],
      answer: "C",
      why: "Class I = gases/vapors; Class II = dusts; Class III = fibers."
    },
    {
      id: 2,
      stem: "A common requirement at the boundary of a Class I Div 1 enclosure is:",
      choices: [
        { key: "A", text: "Drip loop" },
        { key: "B", text: "Sealing fitting" },
        { key: "C", text: "Neutral isolation" },
        { key: "D", text: "Arc-fault breaker" }
      ],
      answer: "B",
      why: "Seals limit vapor migration through raceways."
    },
    {
      id: 3,
      stem: "The Essential Electrical System in health care includes:",
      choices: [
        { key: "A", text: "Decorative lighting branch" },
        { key: "B", text: "Life safety and critical branches" },
        { key: "C", text: "Only UPS-fed circuits" },
        { key: "D", text: "Temporary cords only" }
      ],
      answer: "B",
      why: "Those branches support safe egress and patient care loads."
    }
  ],

  prev: { href: "/modules/module-04", label: "Chapter 4" },
  next: { href: "/modules/module-06", label: "Chapter 6" }
};

export default content;
