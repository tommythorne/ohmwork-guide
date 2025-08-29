// Module 10 — Math & Formulas — 15 Questions
const quiz = [
  {
    id: 1,
    stem: "Ohm’s Law states:",
    choices: [
      { key: "A", text: "P = I × R" },
      { key: "B", text: "V = I × R" },
      { key: "C", text: "kW = kVA ÷ PF" },
      { key: "D", text: "I = R ÷ V" }
    ],
    answer: "B",
    why: "Core relation: V = I×R (and I = V/R, R = V/I)."
  },
  {
    id: 2,
    stem: "Real power for single-phase with PF is:",
    choices: [
      { key: "A", text: "kW = V × I ÷ 1000" },
      { key: "B", text: "kW = V × I × PF ÷ 1000" },
      { key: "C", text: "kW = √3 × V × I ÷ 1000" },
      { key: "D", text: "kW = V ÷ (I × PF) × 1000" }
    ],
    answer: "B",
    why: "Single-phase: kW = V×I×PF/1000."
  },
  {
    id: 3,
    stem: "Three-phase kVA is calculated by:",
    choices: [
      { key: "A", text: "kVA = V × I ÷ 1000" },
      { key: "B", text: "kVA = V × I × PF ÷ 1000" },
      { key: "C", text: "kVA = √3 × V × I ÷ 1000" },
      { key: "D", text: "kVA = √3 × V × I × PF ÷ 1000" }
    ],
    answer: "C",
    why: "kVA ignores PF; 3ϕ adds √3."
  },
  {
    id: 4,
    stem: "A 75 kVA, 480 V, 3ϕ load draws approximately:",
    choices: [
      { key: "A", text: "90 A" },
      { key: "B", text: "113 A" },
      { key: "C", text: "150 A" },
      { key: "D", text: "75 A" }
    ],
    answer: "A",
    why: "I ≈ (75×1000)/(√3×480) ≈ 90 A."
  },
  {
    id: 5,
    stem: "For DC or unity-PF voltage drop you should use:",
    choices: [
      { key: "A", text: "Table 8 (resistance)" },
      { key: "B", text: "Table 9 (impedance)" },
      { key: "C", text: "Table 1 (percent fill)" },
      { key: "D", text: "Table 4 (raceway areas)" }
    ],
    answer: "A",
    why: "DC/unity PF → Table 8 resistance."
  },
  {
    id: 6,
    stem: "Three-phase voltage drop with PF generally uses:",
    choices: [
      { key: "A", text: "Table 8 only" },
      { key: "B", text: "Table 9 with R and X" },
      { key: "C", text: "Table 1" },
      { key: "D", text: "Nameplate resistance" }
    ],
    answer: "B",
    why: "AC 3ϕ with PF uses Table 9 (R & X)."
  },
  {
    id: 7,
    stem: "When sizing motors for feeders and OCPD, the current usually comes from:",
    choices: [
      { key: "A", text: "Motor nameplate only" },
      { key: "B", text: "Article 430 tables" },
      { key: "C", text: "Manufacturer brochure" },
      { key: "D", text: "Table 8" }
    ],
    answer: "B",
    why: "Exam default: use 430 tables for current unless directed otherwise."
  },
  {
    id: 8,
    stem: "Transformer secondary current (3ϕ) is given by:",
    choices: [
      { key: "A", text: "I = kVA × 1000 ÷ (√3 × V_secondary)" },
      { key: "B", text: "I = kVA × 1000 ÷ V_secondary" },
      { key: "C", text: "I = √3 × V × kVA ÷ 1000" },
      { key: "D", text: "I = kW ÷ (V × PF)" }
    ],
    answer: "A",
    why: "3ϕ current uses √3 in the denominator."
  },
  {
    id: 9,
    stem: "1 horsepower is approximately:",
    choices: [
      { key: "A", text: "1000 W" },
      { key: "B", text: "746 W" },
      { key: "C", text: "550 W" },
      { key: "D", text: "1.732 kW" }
    ],
    answer: "B",
    why: "1 HP ≈ 746 W."
  },
  {
    id: 10,
    stem: "Two equal resistors in parallel have an equivalent resistance of:",
    choices: [
      { key: "A", text: "R/4" },
      { key: "B", text: "R/2" },
      { key: "C", text: "2R" },
      { key: "D", text: "R" }
    ],
    answer: "B",
    why: "Parallel of equal values halves the resistance."
  },
  {
    id: 11,
    stem: "Available fault current at the transformer secondary is roughly proportional to:",
    choices: [
      { key: "A", text: "kVA ÷ %Z" },
      { key: "B", text: "%Z ÷ kVA" },
      { key: "C", text: "kW × PF" },
      { key: "D", text: "kWh ÷ hours" }
    ],
    answer: "A",
    why: "I_sc ≈ (kVA×1000)/(√3×V×(%Z/100)) → ∝ kVA/%Z."
  },
  {
    id: 12,
    stem: "Power factor equals:",
    choices: [
      { key: "A", text: "kVAR / kW" },
      { key: "B", text: "kW / kVA" },
      { key: "C", text: "kVA / kW" },
      { key: "D", text: "kW × kVAR" }
    ],
    answer: "B",
    why: "PF = kW/kVA = cosφ."
  },
  {
    id: 13,
    stem: "A 30 kVA, 240 V single-phase load draws approximately:",
    choices: [
      { key: "A", text: "125 A" },
      { key: "B", text: "100 A" },
      { key: "C", text: "75 A" },
      { key: "D", text: "30 A" }
    ],
    answer: "A",
    why: "I ≈ (30×1000)/240 ≈ 125 A."
  },
  {
    id: 14,
    stem: "Which statement is TRUE about kW and kVA?",
    choices: [
      { key: "A", text: "kW always equals kVA" },
      { key: "B", text: "kW = kVA × PF" },
      { key: "C", text: "kVA = kW × PF" },
      { key: "D", text: "kW = kVA ÷ PF" }
    ],
    answer: "B",
    why: "kW = kVA×PF."
  },
  {
    id: 15,
    stem: "For 3-phase problems, forgetting this factor is a common exam error:",
    choices: [
      { key: "A", text: "π" },
      { key: "B", text: "√2" },
      { key: "C", text: "√3" },
      { key: "D", text: "ln(2)" }
    ],
    answer: "C",
    why: "3ϕ line quantities frequently include √3."
  }
];

export default quiz;
