// @ts-nocheck

// 15-question quiz for Chapter 4 — Wiring Methods
// Format is the same as Module 2's quiz
const quiz = [
  {
    id: 1,
    stem: "What is the minimum burial depth for direct burial cables under residential driveways?",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "18 inches" },
      { key: "C", text: "24 inches" },
      { key: "D", text: "30 inches" }
    ],
    answer: "C",
    why: "NEC 300.5 requires at least 24 inches for conductors under residential driveways."
  },
  {
    id: 2,
    stem: "Flexible cords must not be used as a substitute for what?",
    choices: [
      { key: "A", text: "Branch circuit wiring" },
      { key: "B", text: "Extension cords" },
      { key: "C", text: "Temporary power" },
      { key: "D", text: "Portable equipment" }
    ],
    answer: "A",
    why: "NEC 400.8 prohibits flexible cords from being used as a substitute for permanent wiring."
  },
  {
    id: 3,
    stem: "What is the maximum number of 90° bends allowed between pull points in conduit?",
    choices: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" }
    ],
    answer: "C",
    why: "NEC 300.17 limits to 360° of bends, equivalent to four 90° bends."
  },
  {
    id: 4,
    stem: "What is the minimum size equipment grounding conductor required for a 60A circuit?",
    choices: [
      { key: "A", text: "10 AWG" },
      { key: "B", text: "8 AWG" },
      { key: "C", text: "12 AWG" },
      { key: "D", text: "6 AWG" }
    ],
    answer: "A",
    why: "NEC 250.122 requires 10 AWG copper for a 60A OCPD."
  },
  {
    id: 5,
    stem: "When installing NM cable through wood framing, what must be used if within 1-1/4 inches of the face of the framing member?",
    choices: [
      { key: "A", text: "Plastic bushings" },
      { key: "B", text: "Conduit sleeves" },
      { key: "C", text: "Steel plates (nail guards)" },
      { key: "D", text: "Staples" }
    ],
    answer: "C",
    why: "NEC 300.4(A)(1) requires steel plates for protection."
  },
  {
    id: 6,
    stem: "Rigid metal conduit (RMC) must be supported within how many feet of each termination?",
    choices: [
      { key: "A", text: "1 foot" },
      { key: "B", text: "3 feet" },
      { key: "C", text: "5 feet" },
      { key: "D", text: "10 feet" }
    ],
    answer: "B",
    why: "NEC 344.30 requires RMC to be supported within 3 feet of each termination."
  },
  {
    id: 7,
    stem: "What is the allowable fill percentage for a single conductor in a conduit?",
    choices: [
      { key: "A", text: "40%" },
      { key: "B", text: "53%" },
      { key: "C", text: "60%" },
      { key: "D", text: "100%" }
    ],
    answer: "B",
    why: "Chapter 9, Table 1 allows 53% fill for a single conductor."
  },
  {
    id: 8,
    stem: "Where must MC cable be supported and secured?",
    choices: [
      { key: "A", text: "Within 6 feet of every box and every 10 feet" },
      { key: "B", text: "Within 12 inches of every box and every 6 feet" },
      { key: "C", text: "Within 3 feet of every box and every 8 feet" },
      { key: "D", text: "Only at terminations" }
    ],
    answer: "A",
    why: "NEC 330.30 requires MC cable to be supported within 12 inches of every box and at intervals not exceeding 6 feet."
  },
  {
    id: 9,
    stem: "What type of conduit is permitted in wet locations?",
    choices: [
      { key: "A", text: "Electrical Metallic Tubing (EMT)" },
      { key: "B", text: "Rigid Metal Conduit (RMC)" },
      { key: "C", text: "Intermediate Metal Conduit (IMC)" },
      { key: "D", text: "All of the above" }
    ],
    answer: "D",
    why: "NEC 358, 342, and 344 permit EMT, IMC, and RMC in wet locations when properly installed."
  },
  {
    id: 10,
    stem: "How must unused openings in boxes or conduit bodies be closed?",
    choices: [
      { key: "A", text: "With electrical tape" },
      { key: "B", text: "With threaded plugs or listed closures" },
      { key: "C", text: "With duct seal" },
      { key: "D", text: "Left open for ventilation" }
    ],
    answer: "B",
    why: "NEC 314.17 requires unused openings to be closed with listed closures."
  },
  {
    id: 11,
    stem: "What is the maximum spacing between supports for EMT (1 inch trade size)?",
    choices: [
      { key: "A", text: "6 feet" },
      { key: "B", text: "8 feet" },
      { key: "C", text: "10 feet" },
      { key: "D", text: "12 feet" }
    ],
    answer: "B",
    why: "NEC 358.30 requires EMT to be supported every 10 feet, but smaller sizes often require closer spacing."
  },
  {
    id: 12,
    stem: "What is the minimum cover for direct burial conductors under a residential yard?",
    choices: [
      { key: "A", text: "6 inches" },
      { key: "B", text: "12 inches" },
      { key: "C", text: "18 inches" },
      { key: "D", text: "24 inches" }
    ],
    answer: "C",
    why: "NEC 300.5 requires 18 inches for direct burial conductors under yards."
  },
  {
    id: 13,
    stem: "Which of the following wiring methods is NOT permitted in a plenum space?",
    choices: [
      { key: "A", text: "Type MC cable with plenum rating" },
      { key: "B", text: "Type AC cable" },
      { key: "C", text: "Rigid metal conduit" },
      { key: "D", text: "Flexible metal conduit (FMC)" }
    ],
    answer: "B",
    why: "NEC 300.22 prohibits Type AC cable in ducts or plenums."
  },
  {
    id: 14,
    stem: "What marking must be visible on all listed conduit and tubing?",
    choices: [
      { key: "A", text: "UL symbol or other listing mark" },
      { key: "B", text: "Manufacturer name" },
      { key: "C", text: "Trade size" },
      { key: "D", text: "All of the above" }
    ],
    answer: "D",
    why: "NEC 110.21 requires all of the above markings for listed raceways."
  },
  {
    id: 15,
    stem: "Flexible metal conduit (FMC) may not exceed what length when used as a grounding conductor?",
    choices: [
      { key: "A", text: "4 feet" },
      { key: "B", text: "6 feet" },
      { key: "C", text: "8 feet" },
      { key: "D", text: "10 feet" }
    ],
    answer: "B",
    why: "NEC 250.118 limits FMC to 6 feet if used as an equipment grounding conductor."
  }
];

export default quiz;
