const content = {
  hero: {
    title: "Chapter 5 — Special Occupancies",
    subtitle: "Hazardous locations, healthcare, assembly spaces, farms, and other edge cases.",
    imageSrc: "/images/module-05/hero.jpg",
    imageAlt: "Special occupancies wiring scenarios"
  },

  // 8 concise “Module 2–style” articles
  articles: [
    {
      title: "Article 500 — Hazardous (Classified) Locations — General",
      points: [
        { ref: "Listed Equipment", text: "Use equipment listed for the specific Class/Division." },
        { ref: "Seals", text: "Install sealing fittings where raceways leave classified areas." },
        { ref: "Bonding", text: "All metallic parts bonded to maintain a low‑impedance fault path." },
        { ref: "Wiring", text: "Minimize splices; keep boxes accessible outside classified zones when possible." }
      ],
      images: [
        { src: "/images/module-05/500-seal.jpg", alt: "Sealing fitting", caption: "Seal where raceways cross boundaries." }
      ]
    },
    {
      title: "Article 501 — Class I (Flammable Gases/Vapors)",
      points: [
        { ref: "Division 1", text: "Ignitable mixtures likely in normal operation—use explosion‑proof enclosures." },
        { ref: "Division 2", text: "Ignitable mixtures only under abnormal conditions—use non‑sparking wiring methods." },
        { ref: "Conduit", text: "Threaded rigid metal conduit (RMC) or IMC with listed seals." },
        { ref: "Cables", text: "Only where specifically permitted and listed for the purpose." }
      ]
    },
    {
      title: "Article 502 — Class II (Combustible Dusts)",
      points: [
        { ref: "Dust‑tight", text: "Enclosures shall be dust‑tight with adequate gasketing." },
        { ref: "Temperature", text: "Limit surface temps below dust ignition temperatures." },
        { ref: "Wiring", text: "Use RMC/IMC or Type MI; seal where required by product listing." }
      ]
    },
    {
      title: "Article 503 — Class III (Fibers/Flyings)",
      points: [
        { ref: "Lint/Fibers", text: "Accumulate around equipment—keep enclosures tight." },
        { ref: "Motors", text: "Totally enclosed, dust‑ignition‑proof where required." }
      ]
    },
    {
      title: "Article 517 — Health Care Facilities",
      points: [
        { ref: "Patient Care Spaces", text: "Category 1–4 risk levels drive wiring methods and redundancy." },
        { ref: "Grounding", text: "Isolated grounding not a substitute for the EGC; equipotential bonding required." },
        { ref: "Receptacles", text: "Hospital‑grade (green dot) where required; life‑safety and critical branches." }
      ],
      images: [
        { src: "/images/module-05/517-branching.jpg", alt: "Life safety/critical branches", caption: "Essential electrical system branches." }
      ]
    },
    {
      title: "Article 518 — Assembly Occupancies",
      points: [
        { ref: "Audience Areas", text: "Cover plates on floor boxes; protect wiring from physical damage." },
        { ref: "Portable Stages", text: "Flexible cords only as permitted; GFCI where required." }
      ]
    },
    {
      title: "Article 547 — Agricultural Buildings",
      points: [
        { ref: "Corrosive", text: "Damp/corrosive—use corrosion‑resistant wiring methods." },
        { ref: "GFCI", text: "GFCI for receptacles in wet/damp livestock areas." },
        { ref: "Bonding", text: "Equipotential planes where required (e.g., dairy barns)." }
      ]
    },
    {
      title: "Article 645 — Information Technology Equipment",
      points: [
        { ref: "Dedicated Spaces", text: "Cable routing in raised floors/ceilings per listing; fire detection and disconnecting means." },
        { ref: "Disconnect", text: "Emergency power off (EPO) where required by AHJ or design." }
      ]
    }
  ],

  // 10 quiz questions
  quiz: [
    {
      id: 1,
      stem: "Class I, Division 1 locations are characterized by:",
      choices: [
        { key: "A", text: "Combustible dust under abnormal conditions" },
        { key: "B", text: "Ignitable gas/vapor mixtures likely in normal operation" },
        { key: "C", text: "Lint/flyings with no suspension in air" },
        { key: "D", text: "No explosive atmospheres present" }
      ],
      answer: "B",
      why: "Class I = gases/vapors; Division 1 = normal‑operation likelihood."
    },
    {
      id: 2,
      stem: "In Class II locations, equipment surfaces must:",
      choices: [
        { key: "A", text: "Be explosion‑proof" },
        { key: "B", text: "Run above dust ignition temperature" },
        { key: "C", text: "Stay below dust ignition temperature" },
        { key: "D", text: "Be non‑metallic only" }
      ],
      answer: "C",
      why: "Combustible dusts ignite from hot surfaces; limit temps accordingly."
    },
    {
      id: 3,
      stem: "Healthcare patient care spaces require:",
      choices: [
        { key: "A", text: "Isolated grounding in place of EGC" },
        { key: "B", text: "Equipotential bonding and hospital‑grade devices as required" },
        { key: "C", text: "Flexible cord wiring methods throughout" },
        { key: "D", text: "No redundancy in essential systems" }
      ],
      answer: "B",
      why: "517 requires equipotential bonding and specific device/listing use."
    },
    {
      id: 4,
      stem: "Where raceways leave a Class I Division 1 area, you typically:",
      choices: [
        { key: "A", text: "Install sealing fittings" },
        { key: "B", text: "Use PVC without fittings" },
        { key: "C", text: "Install EPO" },
        { key: "D", text: "Reduce conductor size" }
      ],
      answer: "A",
      why: "Seals prevent migration of gases/vapors through raceways."
    },
    {
      id: 5,
      stem: "Agricultural buildings commonly require:",
      choices: [
        { key: "A", text: "No GFCI protection" },
        { key: "B", text: "Corrosion‑resistant wiring and GFCI in damp areas" },
        { key: "C", text: "Aluminum raceways only" },
        { key: "D", text: "Open wiring on insulators" }
      ],
      answer: "B",
      why: "547 calls out corrosive/wet conditions and GFCI usage."
    },
    {
      id: 6,
      stem: "Assembly occupancies floor boxes must:",
      choices: [
        { key: "A", text: "Remain open for airflow" },
        { key: "B", text: "Have listed covers and protect conductors" },
        { key: "C", text: "Use cord caps only" },
        { key: "D", text: "Be PVC only" }
      ],
      answer: "B",
      why: "518 requires safe audience‑area wiring with listed covers."
    },
    {
      id: 7,
      stem: "In Class II locations, acceptable wiring methods include:",
      choices: [
        { key: "A", text: "RMC/IMC or MI, per listing" },
        { key: "B", text: "NM cable exposed" },
        { key: "C", text: "Open knob-and-tube" },
        { key: "D", text: "SJ flexible cord" }
      ],
      answer: "A",
      why: "Dust‑ignition‑proof methods with tight enclosures are required."
    },
    {
      id: 8,
      stem: "In healthcare, the essential electrical system branches include:",
      choices: [
        { key: "A", text: "General and decorative" },
        { key: "B", text: "Life‑safety and critical (and equipment branch)" },
        { key: "C", text: "Optional standby only" },
        { key: "D", text: "Emergency lighting only" }
      ],
      answer: "B",
      why: "517 specifies life‑safety, critical, and equipment branches."
    },
    {
      id: 9,
      stem: "IT rooms under 645 commonly require:",
      choices: [
        { key: "A", text: "EPO where required and dedicated wiring practices" },
        { key: "B", text: "Open splices under raised floors" },
        { key: "C", text: "Non‑listed cable routing" },
        { key: "D", text: "No fire detection" }
      ],
      answer: "A",
      why: "Disconnecting means and listed cable routing are typical."
    },
    {
      id: 10,
      stem: "Class III locations deal primarily with:",
      choices: [
        { key: "A", text: "Flammable liquids" },
        { key: "B", text: "Combustible fibers/flyings" },
        { key: "C", text: "Flammable gases" },
        { key: "D", text: "Toxic fumes only" }
      ],
      answer: "B",
      why: "Class III concerns fibers/flyings (e.g., textiles)."
    }
  ],

  // Footer nav
  prev: { href: "/modules/module-04", label: "Chapter 4" },
  next: { href: "/modules/module-06", label: "Chapter 6" }
};

export default content;
