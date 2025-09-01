const quiz = [
  {
    id: 1,
    stem: "Which of the following is NOT a recognized wiring method in Chapter 2?",
    choices: [
      { key: "A", text: "Type NM cable" },
      { key: "B", text: "Type AC cable" },
      { key: "C", text: "Type UF cable" },
      { key: "D", text: "Type PVC conduit" }
    ],
    answer: "D",
    why: "PVC conduit is covered in Chapter 3 (Raceways), not Chapter 2 (Wiring Methods). Type NM, AC, and UF are all cable types covered in Chapter 2."
  },
  {
    id: 2,
    stem: "Type NM cable is permitted in which of the following locations?",
    choices: [
      { key: "A", text: "Exposed in unfinished basements" },
      { key: "B", text: "Buried underground" },
      { key: "C", text: "In commercial garages" },
      { key: "D", text: "In hazardous locations" }
    ],
    answer: "A",
    why: "Type NM cable is permitted exposed in unfinished basements per 334.15(C). It cannot be buried underground, used in commercial garages, or installed in hazardous locations."
  },
  {
    id: 3,
    stem: "What is the maximum voltage rating for Type NM cable?",
    choices: [
      { key: "A", text: "120V" },
      { key: "B", text: "240V" },
      { key: "C", text: "300V" },
      { key: "D", text: "600V" }
    ],
    answer: "C",
    why: "Type NM cable is rated for 300V maximum per 334.80. This makes it suitable for residential 120/240V systems but not for higher voltage applications."
  },
  {
    id: 4,
    stem: "Type AC cable requires what type of termination?",
    choices: [
      { key: "A", text: "Plastic connectors only" },
      { key: "B", text: "Metal connectors only" },
      { key: "C", text: "Listed connectors" },
      { key: "D", text: "No special requirements" }
    ],
    answer: "C",
    why: "Type AC cable must terminate in listed connectors per 320.40. The connector must be designed for the cable type and properly secure the armor."
  },
  {
    id: 5,
    stem: "Where is Type UF cable NOT permitted?",
    choices: [
      { key: "A", text: "Underground installations" },
      { key: "B", text: "Direct burial" },
      { key: "C", text: "Exposed in wet locations" },
      { key: "D", text: "Above ground in dry locations" }
    ],
    answer: "C",
    why: "Type UF cable is NOT permitted exposed in wet locations per 340.12(11). It can be used underground, direct buried, or above ground in dry locations."
  },
  {
    id: 6,
    stem: "What is the minimum bending radius for Type MC cable?",
    choices: [
      { key: "A", text: "3 times the cable diameter" },
      { key: "B", text: "5 times the cable diameter" },
      { key: "C", text: "7 times the cable diameter" },
      { key: "D", text: "10 times the cable diameter" }
    ],
    answer: "C",
    why: "Type MC cable requires a minimum bending radius of 7 times the cable diameter per 330.24. This prevents damage to the conductors and armor."
  },
  {
    id: 7,
    stem: "Type SE cable is permitted for which service application?",
    choices: [
      { key: "A", text: "Service entrance conductors only" },
      { key: "B", text: "Branch circuits only" },
      { key: "C", text: "Both service and branch circuits" },
      { key: "D", text: "Neither service nor branch circuits" }
    ],
    answer: "C",
    why: "Type SE cable is permitted for both service entrance conductors and branch circuits per 338.10. It's a versatile cable type for residential applications."
  },
  {
    id: 8,
    stem: "What is required when installing Type NM cable through metal studs?",
    choices: [
      { key: "A", text: "Nothing special" },
      { key: "B", text: "Plastic bushings" },
      { key: "C", text: "Metal bushings" },
      { key: "D", text: "Fire caulk" }
    ],
    answer: "B",
    why: "When Type NM cable passes through metal studs, plastic bushings are required per 334.17 to protect the cable from sharp edges."
  },
  {
    id: 9,
    stem: "Type AC cable armor must be what?",
    choices: [
      { key: "A", text: "Electrically continuous" },
      { key: "B", text: "Insulated from ground" },
      { key: "C", text: "Both A and B" },
      { key: "D", text: "Neither A nor B" }
    ],
    answer: "A",
    why: "Type AC cable armor must be electrically continuous per 320.108. This ensures proper grounding and bonding of the armor."
  },
  {
    id: 10,
    stem: "What is the maximum number of current-carrying conductors in Type NM cable?",
    choices: [
      { key: "A", text: "2 conductors" },
      { key: "B", text: "3 conductors" },
      { key: "C", text: "4 conductors" },
      { key: "D", text: "No limit" }
    ],
    answer: "B",
    why: "Type NM cable is limited to 3 current-carrying conductors per 334.80. This prevents excessive heat buildup and ensures proper ampacity."
  },
  {
    id: 11,
    stem: "Type UF cable is suitable for what temperature rating?",
    choices: [
      { key: "A", text: "60°C only" },
      { key: "B", text: "75°C only" },
      { key: "C", text: "90°C only" },
      { key: "D", text: "60°C, 75°C, or 90°C" }
    ],
    answer: "D",
    why: "Type UF cable is available in 60°C, 75°C, and 90°C temperature ratings per 340.80. The actual rating depends on the specific cable."
  },
  {
    id: 12,
    stem: "Where must Type MC cable be supported?",
    choices: [
      { key: "A", text: "Every 4 feet" },
      { key: "B", text: "Every 6 feet" },
      { key: "C", text: "Every 8 feet" },
      { key: "D", text: "No support required" }
    ],
    answer: "B",
    why: "Type MC cable must be supported every 6 feet per 330.30. This prevents sagging and ensures proper installation."
  },
  {
    id: 13,
    stem: "Type SE cable can be used in which occupancy?",
    choices: [
      { key: "A", text: "Residential only" },
      { key: "B", text: "Commercial only" },
      { key: "C", text: "Industrial only" },
      { key: "D", text: "All occupancies" }
    ],
    answer: "A",
    why: "Type SE cable is primarily intended for residential occupancies per 338.10. It's not typically used in commercial or industrial applications."
  },
  {
    id: 14,
    stem: "What is the minimum cover requirement for Type UF cable buried under a driveway?",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "18 inches" },
      { key: "C", text: "24 inches" },
      { key: "D", text: "36 inches" }
    ],
    answer: "C",
    why: "Type UF cable buried under a driveway requires minimum 24 inches of cover per 300.5. This protects the cable from damage."
  },
  {
    id: 15,
    stem: "Type AC cable is NOT permitted in which location?",
    choices: [
      { key: "A", text: "Residential garages" },
      { key: "B", text: "Commercial garages" },
      { key: "C", text: "Industrial garages" },
      { key: "D", text: "All garages are permitted" }
    ],
    answer: "B",
    why: "Type AC cable is NOT permitted in commercial garages per 320.12(1). It can be used in residential and industrial garages but not commercial ones."
  }
];

export default quiz;
