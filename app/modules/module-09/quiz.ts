// Quiz — Chapter 9 (Tables) — 15 questions
const quiz = [
  {
    id: 1,
    stem: "With more than two conductors in a raceway, the maximum fill per Table 1 is:",
    choices: [
      { key: "A", text: "31%" },
      { key: "B", text: "40%" },
      { key: "C", text: "53%" },
      { key: "D", text: "60%" }
    ],
    answer: "B",
    why: "Table 1: >2 conductors → 40%."
  },
  {
    id: 2,
    stem: "Two conductors in a raceway are limited to what percent fill?",
    choices: [
      { key: "A", text: "31%" },
      { key: "B", text: "40%" },
      { key: "C", text: "53%" },
      { key: "D", text: "60%" }
    ],
    answer: "A",
    why: "Table 1: 2 conductors → 31%."
  },
  {
    id: 3,
    stem: "A raceway 24 inches or less in length may be filled to:",
    choices: [
      { key: "A", text: "31%" },
      { key: "B", text: "40%" },
      { key: "C", text: "53%" },
      { key: "D", text: "60%" }
    ],
    answer: "D",
    why: "The ‘nipple’ rule allows 60% fill when the raceway is ≤24 in."
  },
  {
    id: 4,
    stem: "When converting a decimal conductor count to a whole number, a decimal of 0.80 should be:",
    choices: [
      { key: "A", text: "Rounded down" },
      { key: "B", text: "Rounded up" },
      { key: "C", text: "Left as-is" },
      { key: "D", text: "Ignored" }
    ],
    answer: "B",
    why: "≥ 0.8 rounds up—classic exam cue."
  },
  {
    id: 5,
    stem: "For insulated conductor dimensions/areas you should use:",
    choices: [
      { key: "A", text: "Table 4" },
      { key: "B", text: "Table 5 (or 5A if compact)" },
      { key: "C", text: "Table 8" },
      { key: "D", text: "Table 9" }
    ],
    answer: "B",
    why: "Table 5 lists insulated conductor dimensions; 5A for compact conductors."
  },
  {
    id: 6,
    stem: "The table used to pick a raceway trade size from allowable area is:",
    choices: [
      { key: "A", text: "Table 1" },
      { key: "B", text: "Table 4" },
      { key: "C", text: "Table 5" },
      { key: "D", text: "Table 9" }
    ],
    answer: "B",
    why: "Table 4 gives raceway dimensions and allowable areas by type."
  },
  {
    id: 7,
    stem: "You are given XHHW-2 **compact** conductors. Which table supplies the correct areas?",
    choices: [
      { key: "A", text: "Table 5" },
      { key: "B", text: "Table 5A" },
      { key: "C", text: "Table 8" },
      { key: "D", text: "Table 9" }
    ],
    answer: "B",
    why: "Compact conductors → Table 5A."
  },
  {
    id: 8,
    stem: "For a cable (e.g., MC) inside a raceway, the fill calculation should use:",
    choices: [
      { key: "A", text: "Sum of individual conductor areas" },
      { key: "B", text: "Overall cable diameter/area" },
      { key: "C", text: "Only the equipment ground area" },
      { key: "D", text: "Only the largest conductor area" }
    ],
    answer: "B",
    why: "Use the **overall cable** area against Table 1 percent limits."
  },
  {
    id: 9,
    stem: "Which trio reflects the standard sizing workflow for singles in raceway?",
    choices: [
      { key: "A", text: "Table 4 → Table 1 → Table 5" },
      { key: "B", text: "Table 5/5A → Table 1 → Table 4" },
      { key: "C", text: "Table 9 → Table 8 → Table 1" },
      { key: "D", text: "Table 1 → Table 5/5A → Table 9" }
    ],
    answer: "B",
    why: "Get conductor areas (5/5A) → apply percent (1) → choose raceway (4)."
  },
  {
    id: 10,
    stem: "DC resistance values for voltage-drop math are taken from:",
    choices: [
      { key: "A", text: "Table 4" },
      { key: "B", text: "Table 5" },
      { key: "C", text: "Table 8" },
      { key: "D", text: "Table 9" }
    ],
    answer: "C",
    why: "Table 8 provides DC resistance and related properties."
  },
  {
    id: 11,
    stem: "AC 3-phase voltage-drop with power factor typically requires data from:",
    choices: [
      { key: "A", text: "Table 1" },
      { key: "B", text: "Table 4" },
      { key: "C", text: "Table 8" },
      { key: "D", text: "Table 9" }
    ],
    answer: "D",
    why: "Table 9 provides R and X for AC impedance at 60 Hz."
  },
  {
    id: 12,
    stem: "If a problem doesn’t specify ‘compact’ conductors, you should default to:",
    choices: [
      { key: "A", text: "Table 5 values" },
      { key: "B", text: "Table 5A values" },
      { key: "C", text: "Table 8 values" },
      { key: "D", text: "Table 9 values" }
    ],
    answer: "A",
    why: "Compact is a special case; use Table 5 unless ‘compact’ is stated."
  },
  {
    id: 13,
    stem: "Which is a common Chapter 9 exam trap?",
    choices: [
      { key: "A", text: "Using 31% for a single conductor" },
      { key: "B", text: "Using 40% for >2 conductors" },
      { key: "C", text: "Using 60% for a 30-inch raceway nipple" },
      { key: "D", text: "Using Table 4 for raceway allowable area" }
    ],
    answer: "C",
    why: "The 60% rule applies only to **≤24 in** nipples."
  },
  {
    id: 14,
    stem: "When mixed conductor sizes are present, you should:",
    choices: [
      { key: "A", text: "Average diameters and multiply by count" },
      { key: "B", text: "Use each conductor’s actual area from the table" },
      { key: "C", text: "Use only the largest conductor area for all" },
      { key: "D", text: "Convert all to kcmil and ignore insulation type" }
    ],
    answer: "B",
    why: "Use the correct listed area per size/type; don’t average."
  },
  {
    id: 15,
    stem: "Picking an EMT trade size after calculating required area is done from:",
    choices: [
      { key: "A", text: "Table 1" },
      { key: "B", text: "Table 4 (EMT column)" },
      { key: "C", text: "Table 5" },
      { key: "D", text: "Table 8" }
    ],
    answer: "B",
    why: "Use the **EMT** allowable area column in Table 4."
  }
];

export default quiz;
