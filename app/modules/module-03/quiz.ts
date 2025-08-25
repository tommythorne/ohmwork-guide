import type { QuizQuestion } from "@/app/types/module";

/**
 * Module 3 — Wiring Methods Knowledge Check (15 questions)
 * Shape: { id, stem, choices:[{key,text}], answer:'A'|'B'|'C'|'D', why }
 */
const quiz: QuizQuestion[] = [
  {
    id: 1,
    stem: "EMT in a dry location is secured with straps. What is the maximum distance from each box a strap must be located (trade size 1 in. and smaller)?",
    choices: [
      { key: "A", text: "12 in." },
      { key: "B", text: "18 in." },
      { key: "C", text: "24 in." },
      { key: "D", text: "36 in." }
    ],
    answer: "D",
    why: "EMT must be secured within 3 ft of each box and supported at intervals ≤10 ft (NEC 358.30)."
  },
  {
    id: 2,
    stem: "Nonmetallic raceways (PVC/RNC) expand and contract with temperature. When is an expansion fitting required?",
    choices: [
      { key: "A", text: "Any outdoor run, regardless of length" },
      { key: "B", text: "When expected length change is 1/4 in. or more" },
      { key: "C", text: "Only when conduit crosses a building expansion joint" },
      { key: "D", text: "Only when run exceeds 100 ft" }
    ],
    answer: "B",
    why: "RNC needs expansion fittings where thermal movement ≥ 1/4 in. is expected between secure points (352.44)."
  },
  {
    id: 3,
    stem: "What’s the minimum cover for Schedule 40 PVC feeder (120/240 V) direct-buried under a one‑/two‑family residential driveway?",
    choices: [
      { key: "A", text: "12 in." },
      { key: "B", text: "18 in." },
      { key: "C", text: "24 in." },
      { key: "D", text: "30 in." }
    ],
    answer: "B",
    why: "Residential driveway cover for PVC is typically 18 in. (Table 300.5—dwelling driveways)."
  },
  {
    id: 4,
    stem: "Maximum cumulative degrees of bend permitted between pull points in a run of raceway?",
    choices: [
      { key: "A", text: "270°" },
      { key: "B", text: "360°" },
      { key: "C", text: "420°" },
      { key: "D", text: "No limit if using lubricant" }
    ],
    answer: "B",
    why: "Most raceways are limited to 360° total between pull points (e.g., 358.26, 342.26, 352.26)."
  },
  {
    id: 5,
    stem: "EMT support spacing (general) is required at intervals not exceeding:",
    choices: [
      { key: "A", text: "4 ft" },
      { key: "B", text: "6 ft" },
      { key: "C", text: "8 ft" },
      { key: "D", text: "10 ft" }
    ],
    answer: "D",
    why: "Support EMT at ≤10 ft and secure within 3 ft of each box (358.30)."
  },
  {
    id: 6,
    stem: "Flexible metal conduit (FMC): maximum interval between supports for trade sizes 1‑1/4 in. and smaller?",
    choices: [
      { key: "A", text: "3 ft" },
      { key: "B", text: "4.5 ft" },
      { key: "C", text: "6 ft" },
      { key: "D", text: "10 ft" }
    ],
    answer: "B",
    why: "FMC ≤1‑1/4 in. supported at ≤4.5 ft and secured within 12 in. of boxes (348.30)."
  },
  {
    id: 7,
    stem: "Direct‑buried UF cable for a 120 V, 20 A GFCI‑protected branch circuit in residential lawn: minimum cover?",
    choices: [
      { key: "A", text: "6 in." },
      { key: "B", text: "12 in." },
      { key: "C", text: "18 in." },
      { key: "D", text: "24 in." }
    ],
    answer: "B",
    why: "GFCI 120 V, 20 A residential branch circuits may be at 12 in. (Table 300.5 Note conditions)."
  },
  {
    id: 8,
    stem: "Allowed maximum conductor fill in a single raceway (more than two conductors)?",
    choices: [
      { key: "A", text: "40%" },
      { key: "B", text: "53%" },
      { key: "C", text: "60%" },
      { key: "D", text: "31%" }
    ],
    answer: "A",
    why: "Chapter 9, Table 1: One conductor 53%; two conductors 31%; over two conductors 40% fill."
  },
  {
    id: 9,
    stem: "Rigid metal conduit (RMC) under a residential driveway: minimum cover?",
    choices: [
      { key: "A", text: "6 in." },
      { key: "B", text: "12 in." },
      { key: "C", text: "18 in." },
      { key: "D", text: "24 in." }
    ],
    answer: "A",
    why: "RMC/IMC generally permitted at 6 in. of cover under residential driveways (Table 300.5)."
  },
  {
    id: 10,
    stem: "At what number of current‑carrying conductors in a raceway do you begin ampacity adjustment (derating)?",
    choices: [
      { key: "A", text: "More than 3" },
      { key: "B", text: "5 or more" },
      { key: "C", text: "7 or more" },
      { key: "D", text: "10 or more" }
    ],
    answer: "A",
    why: "Adjustment factors apply when there are more than three current‑carrying conductors (310.15)."
  },
  {
    id: 11,
    stem: "RNC (PVC) support spacing for sizes 1 in. and smaller (horizontal runs)?",
    choices: [
      { key: "A", text: "3 ft" },
      { key: "B", text: "4 ft" },
      { key: "C", text: "5 ft" },
      { key: "D", text: "10 ft" }
    ],
    answer: "A",
    why: "Support RNC at ≤3 ft for 1 in. and smaller; larger sizes often ≤5 ft (352.30)."
  },
  {
    id: 12,
    stem: "MC cable must be secured within ____ of every box and supported at intervals not exceeding ____.",
    choices: [
      { key: "A", text: "6 in.; 3 ft" },
      { key: "B", text: "12 in.; 6 ft" },
      { key: "C", text: "18 in.; 10 ft" },
      { key: "D", text: "24 in.; 10 ft" }
    ],
    answer: "B",
    why: "Secure within 12 in. of boxes and support at ≤6 ft intervals (330.30)."
  },
  {
    id: 13,
    stem: "LFMC (liquidtight flexible metal conduit) in wet locations requires:",
    choices: [
      { key: "A", text: "No special fittings" },
      { key: "B", text: "Only thread sealant" },
      { key: "C", text: "Fittings listed for wet locations" },
      { key: "D", text: "PVC jacket over any fitting" }
    ],
    answer: "C",
    why: "Use fittings listed/identified for wet locations (350.42, 350.6)."
  },
  {
    id: 14,
    stem: "Maximum cumulative degrees of bend permitted between pull points in FMC?",
    choices: [
      { key: "A", text: "270°" },
      { key: "B", text: "360°" },
      { key: "C", text: "450°" },
      { key: "D", text: "No limit if length < 6 ft" }
    ],
    answer: "B",
    why: "Same 360° rule applies (348.26)."
  },
  {
    id: 15,
    stem: "When a raceway crosses a building expansion/settlement joint, use:",
    choices: [
      { key: "A", text: "Standard coupling with thread sealant" },
      { key: "B", text: "Expansion/deflection fitting listed for the raceway" },
      { key: "C", text: "No fitting—strap tightly on both sides" },
      { key: "D", text: "A bonding bushing only" }
    ],
    answer: "B",
    why: "Provide a listed expansion/deflection fitting to accommodate movement (common across raceway articles)."
  }
];

export default quiz;
