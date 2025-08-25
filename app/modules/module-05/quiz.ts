const quiz = [
  { id: 1, stem: "In Class/Division classification, what does 'Division' describe?",
    choices: [
      { key: "A", text: "The type of material (gas, dust, fiber)" },
      { key: "B", text: "The likelihood of hazardous material presence" },
      { key: "C", text: "The gas/dust group" },
      { key: "D", text: "The wiring method" }
    ],
    answer: "B",
    why: "Class = material type. Division = likelihood (1 = normal, 2 = abnormal)."
  },
  { id: 2, stem: "Area seals in Class I locations are placed primarily to:",
    choices: [
      { key: "A", text: "Increase mechanical strength of the run" },
      { key: "B", text: "Limit passage of gases/vapors through raceways" },
      { key: "C", text: "Provide a convenient pull point" },
      { key: "D", text: "Bond equipment grounds" }
    ],
    answer: "B",
    why: "Seals limit migration of flammable gases/vapors through raceways at boundaries."
  },
  { id: 3, stem: "Which NEC Articles introduce the Zone system for hazardous locations?",
    choices: [
      { key: "A", text: "500 and 501" },
      { key: "B", text: "505 and 506" },
      { key: "C", text: "510 and 511" },
      { key: "D", text: "517 and 518" }
    ],
    answer: "B",
    why: "505 (gases/vapors) and 506 (dusts/flyings) use Zones 0/1/2 and 20/21/22."
  },
  { id: 4, stem: "Dust accumulation on surfaces can trigger classification even if airborne dust is minimal.",
    choices: [{ key: "A", text: "True" }, { key: "B", text: "False" }],
    answer: "A",
    why: "Layered dust can ignite—housekeeping affects classification and methods."
  },
  { id: 5, stem: "Equipment surface temperature ratings (e.g., T-codes) matter because:",
    choices: [
      { key: "A", text: "They indicate enclosure IP rating" },
      { key: "B", text: "They must stay below the ignition temp of the specific material" },
      { key: "C", text: "They only affect conductor ampacity" },
      { key: "D", text: "They replace the need for classification" }
    ],
    answer: "B",
    why: "T-codes/temps ensure equipment stays below the ignition temperature of the hazard present."
  },
  { id: 6, stem: "In dust locations, which enclosure approach is typically expected?",
    choices: [
      { key: "A", text: "Drip-proof only" },
      { key: "B", text: "Dust-tight, with minimized penetrations and intact gaskets" },
      { key: "C", text: "Ventilated to purge dust" },
      { key: "D", text: "Open frame if elevated" }
    ],
    answer: "B",
    why: "Use dust-tight enclosures and protect entries from accumulation."
  },
  { id: 7, stem: "Which branch supplies egress lighting and alarms in health care facilities?",
    choices: [
      { key: "A", text: "Critical Branch" },
      { key: "B", text: "Equipment Branch" },
      { key: "C", text: "Life Safety Branch" },
      { key: "D", text: "Patient Care Branch" }
    ],
    answer: "C",
    why: "Life Safety serves egress/alarms and similar emergency loads."
  },
  { id: 8, stem: "Patient care spaces typically require which of the following?",
    choices: [
      { key: "A", text: "Generic residential receptacles" },
      { key: "B", text: "Hospital-grade devices where specified" },
      { key: "C", text: "Any device if GFCI protected" },
      { key: "D", text: "No labeling requirements" }
    ],
    answer: "B",
    why: "Hospital-grade, receptacle counts, and separation rules apply by patient care area type."
  },
  { id: 9, stem: "Which cable type is typically prohibited in stage and theater spaces?",
    choices: [
      { key: "A", text: "NM cable" },
      { key: "B", text: "SOOW/SEOOW where identified" },
      { key: "C", text: "Portable stage cable listed for hard usage" },
      { key: "D", text: "Flexible cords with listed strain reliefs" }
    ],
    answer: "A",
    why: "Stage spaces limit methods and emphasize portable/listed cable types—NM is generally not permitted."
  },
  { id: 10, stem: "Stage lighting systems often require disconnecting means that are:",
    choices: [
      { key: "A", text: "Hidden but documented" },
      { key: "B", text: "Readily accessible and identified" },
      { key: "C", text: "Padlocked only" },
      { key: "D", text: "Portable cord caps" }
    ],
    answer: "B",
    why: "Readily accessible, identified disconnects are typical for stage/rigging equipment."
  },
  { id: 11, stem: "Carnivals/fairs have broad requirements for which protection?",
    choices: [
      { key: "A", text: "AFCI" },
      { key: "B", text: "GFCI" },
      { key: "C", text: "Only surge protection" },
      { key: "D", text: "Harmonic filters" }
    ],
    answer: "B",
    why: "Article 525 requires extensive GFCI for receptacles/portable equipment."
  },
  { id: 12, stem: "Where is the neutral-to-ground bond typically located for a mobile home supply?",
    choices: [
      { key: "A", text: "At the pedestal/service equipment" },
      { key: "B", text: "Inside the home feeder panel" },
      { key: "C", text: "At every branch panel" },
      { key: "D", text: "Never bonded" }
    ],
    answer: "A",
    why: "The pedestal is service equipment; downstream feeders keep the neutral isolated."
  },
  { id: 13, stem: "Agricultural buildings often require equipotential bonding in:",
    choices: [
      { key: "A", text: "Storage lofts only" },
      { key: "B", text: "Livestock areas" },
      { key: "C", text: "Greenhouses only" },
      { key: "D", text: "Office areas only" }
    ],
    answer: "B",
    why: "Equipotential planes reduce shock risk to animals and workers."
  },
  { id: 14, stem: "A primary safety focus of Article 555 is preventing:",
    choices: [
      { key: "A", text: "Overcurrent in dock feeders" },
      { key: "B", text: "Electric shock drowning" },
      { key: "C", text: "Lightning damage" },
      { key: "D", text: "Meter tampering" }
    ],
    answer: "B",
    why: "GF/ELCI protection, bonding, and marine-rated gear address ESD risks."
  },
  { id: 15, stem: "Temporary wiring must be:",
    choices: [
      { key: "A", text: "Left in place if it still works" },
      { key: "B", text: "Removed when the project or event ends" },
      { key: "C", text: "Converted to permanent by adding labels" },
      { key: "D", text: "Exempt from GFCI requirements" }
    ],
    answer: "B",
    why: "Temporary installations are short-term and must be removed when the work/event is complete."
  }
];

export default quiz;
