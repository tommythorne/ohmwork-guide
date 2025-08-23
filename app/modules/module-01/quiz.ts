// NEC-based Quiz for Module 1 (Chapter 1 — General)
const quiz = [
  {
    id: 1,
    stem: "According to NEC Article 90.1, what is the primary purpose of the NEC?",
    choices: [
      { key: "A", text: "To maximize energy efficiency" },
      { key: "B", text: "To ensure practical safeguarding of persons and property from electrical hazards" },
      { key: "C", text: "To regulate electrical utility companies" },
      { key: "D", text: "To set manufacturing standards for equipment" }
    ],
    answer: "B",
    why: "NEC 90.1 states the Code’s purpose is practical safeguarding of persons and property."
  },
  {
    id: 2,
    stem: "NEC 90.3 establishes the structure of the Code. How are requirements arranged?",
    choices: [
      { key: "A", text: "Chapters 1–4 apply generally; 5–7 supplement/modify; 8 is independent" },
      { key: "B", text: "Chapters 1–3 apply generally; 4–6 supplement; 7–9 are annexes" },
      { key: "C", text: "Every chapter applies equally to all installations" },
      { key: "D", text: "Only Article 100 and 110 apply universally" }
    ],
    answer: "A",
    why: "90.3: Chapters 1–4 apply generally; 5, 6, 7 may supplement/modify; Chapter 8 is independent unless modified."
  },
  {
    id: 3,
    stem: "According to NEC 90.5, what is the mandatory versus permissive language distinction?",
    choices: [
      { key: "A", text: "'Shall' = mandatory; 'Should' = optional" },
      { key: "B", text: "'Shall' = mandatory; 'May' = permissive" },
      { key: "C", text: "'Must' = mandatory; 'May' = permissive" },
      { key: "D", text: "'Should' = mandatory; 'Shall' = advisory" }
    ],
    answer: "B",
    why: "NEC 90.5: 'Shall' indicates mandatory requirements; 'May' indicates permissive."
  },
  {
    id: 4,
    stem: "What does Article 100 provide?",
    choices: [
      { key: "A", text: "Mandatory installation rules" },
      { key: "B", text: "Definitions used throughout the NEC" },
      { key: "C", text: "Tables for conductor ampacities" },
      { key: "D", text: "Procedures for field inspections" }
    ],
    answer: "B",
    why: "Article 100 contains all NEC definitions, essential for interpreting requirements."
  },
  {
    id: 5,
    stem: "Article 110 generally covers which aspect of electrical installations?",
    choices: [
      { key: "A", text: "Grounding and bonding" },
      { key: "B", text: "General requirements for electrical equipment and conductors" },
      { key: "C", text: "Overcurrent protection" },
      { key: "D", text: "Special occupancies" }
    ],
    answer: "B",
    why: "Article 110 covers general requirements for electrical equipment, conductors, and field labeling."
  },
  {
    id: 6,
    stem: "What is the significance of the Informational Notes in the NEC?",
    choices: [
      { key: "A", text: "They are enforceable requirements" },
      { key: "B", text: "They provide examples or explanations but are not enforceable" },
      { key: "C", text: "They must be followed unless waived by AHJ" },
      { key: "D", text: "They apply only to industrial facilities" }
    ],
    answer: "B",
    why: "Informational Notes clarify requirements but are not enforceable parts of the Code."
  },
  {
    id: 7,
    stem: "What is the 'scope' of the NEC as outlined in Article 90.2?",
    choices: [
      { key: "A", text: "Applies to all electrical installations without exception" },
      { key: "B", text: "Applies to public and private premises, including buildings, structures, and mobile homes" },
      { key: "C", text: "Covers utility generation and transmission exclusively" },
      { key: "D", text: "Covers only residential installations" }
    ],
    answer: "B",
    why: "NEC 90.2 covers installations in buildings, structures, and other premises, public or private."
  },
  {
    id: 8,
    stem: "According to NEC, who has final authority on approval of electrical installations?",
    choices: [
      { key: "A", text: "Installer" },
      { key: "B", text: "Engineer of record" },
      { key: "C", text: "Authority Having Jurisdiction (AHJ)" },
      { key: "D", text: "NFPA inspectors" }
    ],
    answer: "C",
    why: "The AHJ interprets and enforces NEC compliance."
  },
  {
    id: 9,
    stem: "What is the meaning of 'listed' equipment as used in NEC?",
    choices: [
      { key: "A", text: "Equipment manufactured in the U.S." },
      { key: "B", text: "Equipment identified in the NEC annexes" },
      { key: "C", text: "Equipment included in a list published by an OSHA body" },
      { key: "D", text: "Equipment determined suitable for use by a recognized testing lab" }
    ],
    answer: "D",
    why: "NEC defines 'listed' as equipment determined suitable by a recognized testing lab (e.g., UL)."
  },
  {
    id: 10,
    stem: "What does NEC 90.1(B) emphasize about the Code’s role?",
    choices: [
      { key: "A", text: "It ensures absolute safety under all conditions" },
      { key: "B", text: "It is not intended as a design specification or instruction manual" },
      { key: "C", text: "It is optional unless adopted by local jurisdictions" },
      { key: "D", text: "It applies only to electricians with licenses" }
    ],
    answer: "B",
    why: "NEC 90.1(B): the Code is not a design manual but a minimum safety standard."
  }
];
export default quiz;
