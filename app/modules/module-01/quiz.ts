// NEC-based Quiz for Module 1 (Chapter 1 — Article 90 + core)
const quiz = [
  {
    id: 1,
    stem: "NEC 90.1(A) says the Code’s primary purpose is:",
    choices: [
      { key: "A", text: "Absolute safety for all conditions" },
      { key: "B", text: "Practical safeguarding of persons and property" },
      { key: "C", text: "OSHA enforcement rules" },
      { key: "D", text: "Utility company standards" }
    ],
    answer: "B",
    why: "90.1(A): NEC provides practical safeguarding—not perfection."
  },
  {
    id: 2,
    stem: "Per 90.1(B), the NEC is NOT intended to be:",
    choices: [
      { key: "A", text: "A minimum safety standard" },
      { key: "B", text: "A design specification or instruction manual" },
      { key: "C", text: "Adopted by jurisdictions" },
      { key: "D", text: "Used by engineers and electricians" }
    ],
    answer: "B",
    why: "90.1(B): The Code isn’t a design manual."
  },
  {
    id: 3,
    stem: "90.3 explains Code arrangement. Which is correct?",
    choices: [
      { key: "A", text: "Ch.1–4 general; 5–7 can modify/supplement; Ch.8 is independent" },
      { key: "B", text: "Ch.1–9 all apply equally at all times" },
      { key: "C", text: "Only Ch.1–3 apply generally" },
      { key: "D", text: "Ch.8 overrules everything" }
    ],
    answer: "A",
    why: "90.3 describes the hierarchy: 1–4 general, 5–7 modify, 8 independent unless modified."
  },
  {
    id: 4,
    stem: "Mandatory vs permissive language per 90.5:",
    choices: [
      { key: "A", text: "'Shall' = permissive; 'May' = mandatory" },
      { key: "B", text: "'Should' = mandatory; 'Shall' = advisory" },
      { key: "C", text: "'Shall' = mandatory; 'May' = permissive" },
      { key: "D", text: "'Must' = advisory; 'May' = mandatory" }
    ],
    answer: "C",
    why: "90.5: 'Shall' is required; 'May' is permitted."
  },
  {
    id: 5,
    stem: "Article 100 provides:",
    choices: [
      { key: "A", text: "General installation rules" },
      { key: "B", text: "Definitions used throughout the NEC" },
      { key: "C", text: "Motor rules" },
      { key: "D", text: "Conductor ampacity tables" }
    ],
    answer: "B",
    why: "Article 100 = definitions. Exams love definition traps."
  },
  {
    id: 6,
    stem: "Informational Notes in the NEC are:",
    choices: [
      { key: "A", text: "Enforceable requirements" },
      { key: "B", text: "Explanatory, not enforceable" },
      { key: "C", text: "Adopted only by OSHA" },
      { key: "D", text: "Applicable only in industrial plants" }
    ],
    answer: "B",
    why: "Notes clarify; they’re not requirements."
  },
  {
    id: 7,
    stem: "90.2 Scope mainly covers:",
    choices: [
      { key: "A", text: "Utility generation and transmission only" },
      { key: "B", text: "Manufacturing standards for equipment" },
      { key: "C", text: "Electrical installations in public and private premises" },
      { key: "D", text: "Telecom codes only" }
    ],
    answer: "C",
    why: "90.2: applies to installations in buildings/structures/premises."
  },
  {
    id: 8,
    stem: "Which is typically outside NEC scope per 90.2(B)?",
    choices: [
      { key: "A", text: "Utility-controlled installations" },
      { key: "B", text: "Dwelling units" },
      { key: "C", text: "Commercial buildings" },
      { key: "D", text: "Industrial plants" }
    ],
    answer: "A",
    why: "Utility-owned/controlled is generally excluded."
  },
  {
    id: 9,
    stem: "The AHJ is responsible for:",
    choices: [
      { key: "A", text: "Manufacturing equipment" },
      { key: "B", text: "Enforcing and interpreting the Code locally" },
      { key: "C", text: "Setting utility rates" },
      { key: "D", text: "Issuing OSHA citations" }
    ],
    answer: "B",
    why: "Authority Having Jurisdiction enforces/approves installations."
  },
  {
    id: 10,
    stem: "“Listed” equipment means:",
    choices: [
      { key: "A", text: "Made in the USA" },
      { key: "B", text: "Reviewed by any engineer" },
      { key: "C", text: "Suitable as determined by a recognized testing lab" },
      { key: "D", text: "Mentioned in an NEC annex" }
    ],
    answer: "C",
    why: "“Listed” = evaluated by a recognized testing organization (e.g., UL)."
  },
  {
    id: 11,
    stem: "Which statement best reflects NEC intent?",
    choices: [
      { key: "A", text: "It guarantees injury-free installations" },
      { key: "B", text: "It’s the sole design authority" },
      { key: "C", text: "It sets minimum safety requirements" },
      { key: "D", text: "It’s optional guidance" }
    ],
    answer: "C",
    why: "NEC is a minimum safety standard."
  },
  {
    id: 12,
    stem: "If Chapters 5–7 conflict with Chapters 1–4:",
    choices: [
      { key: "A", text: "1–4 always win" },
      { key: "B", text: "5–7 modify/supplement 1–4 where they apply" },
      { key: "C", text: "Ignore the conflict" },
      { key: "D", text: "Defer to Article 90.1" }
    ],
    answer: "B",
    why: "90.3: 5–7 can modify/supplement the general rules."
  },
  {
    id: 13,
    stem: "Chapter 8 (Communications) is:",
    choices: [
      { key: "A", text: "Always subordinate to 1–7" },
      { key: "B", text: "Independent unless modified by Chapters 1–7" },
      { key: "C", text: "Not part of the NEC" },
      { key: "D", text: "Only advisory" }
    ],
    answer: "B",
    why: "90.3: Ch.8 stands alone unless modified."
  },
  {
    id: 14,
    stem: "Per 90.7, equipment examination/identification typically involves:",
    choices: [
      { key: "A", text: "Listing/labeling by qualified labs" },
      { key: "B", text: "Self-certification by installer" },
      { key: "C", text: "Local jury" },
      { key: "D", text: "Only factory inspectors" }
    ],
    answer: "A",
    why: "90.7 recognizes listing/labeling/testing."
  },
  {
    id: 15,
    stem: "When the NEC is adopted by a jurisdiction, enforcement occurs through:",
    choices: [
      { key: "A", text: "Manufacturer’s instructions only" },
      { key: "B", text: "AHJ, permits, inspections, and approvals" },
      { key: "C", text: "Voluntary compliance by installers" },
      { key: "D", text: "Utility tariffs" }
    ],
    answer: "B",
    why: "Local adoption → AHJ permitting/inspection framework."
  }
];
export default quiz;
