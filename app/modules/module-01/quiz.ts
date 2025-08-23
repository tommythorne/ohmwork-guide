export type ChoiceKey = "A" | "B" | "C" | "D";
export type Choice = { key: ChoiceKey; text: string };
export type Q = { id: number; stem: string; choices: Choice[]; answer: ChoiceKey; why: string };

export const quizModule01: Q[] = [
  { id: 1,
    stem: "Article 90.1(A) says the NEC’s purpose is to provide:",
    choices: [
      { key: "A", text: "Absolute safety in all conditions" },
      { key: "B", text: "Practicable safeguarding of people and property" },
      { key: "C", text: "Design specs for every system" },
      { key: "D", text: "Only manufacturer guidance" }
    ],
    answer: "B",
    why: "90.1(A) emphasizes practicable safeguarding—not zero risk."
  },
  { id: 2,
    stem: "Which term in 90.5 indicates a mandatory requirement?",
    choices: [
      { key: "A", text: "Should" }, { key: "B", text: "May" }, { key: "C", text: "Shall" }, { key: "D", text: "Could" }
    ],
    answer: "C",
    why: "90.5: 'Shall' is mandatory; 'Should/May' are permissive."
  },
  { id: 3,
    stem: "Article 90.2 is primarily about:",
    choices: [
      { key: "A", text: "Conductor ampacity tables" },
      { key: "B", text: "Scope—what’s covered and not covered" },
      { key: "C", text: "Service sizing only" },
      { key: "D", text: "Voltage drop rules" }
    ],
    answer: "B",
    why: "90.2 defines installations the NEC applies to and exclusions."
  },
  { id: 4,
    stem: "Listed equipment in 90.7 is assumed:",
    choices: [
      { key: "A", text: "Safe under any installation" },
      { key: "B", text: "Evaluated; install per instructions and listing" },
      { key: "C", text: "Not subject to NEC" },
      { key: "D", text: "Limited to dry locations only" }
    ],
    answer: "B",
    why: "90.7 ties directly to 110.3(B)—follow listing/labeling/instructions."
  },
  { id: 5,
    stem: "Article 100: 'Readily Accessible' means:",
    choices: [
      { key: "A", text: "Accessible with a screwdriver" },
      { key: "B", text: "Reachable without tools, ladders, or removing obstacles" },
      { key: "C", text: "Inside a locked room with a key nearby" },
      { key: "D", text: "Within 25 feet of working space" }
    ],
    answer: "B",
    why: "Definition: no tools, no ladders, no obstacle removal."
  },
  { id: 6,
    stem: "Article 100: The boundary between feeder and branch circuit is:",
    choices: [
      { key: "A", text: "The meter enclosure" },
      { key: "B", text: "First junction box after panel" },
      { key: "C", text: "Final OCPD protecting the branch circuit" },
      { key: "D", text: "Service disconnect" }
    ],
    answer: "C",
    why: "Branch circuit is protected by its final overcurrent device."
  },
  { id: 7,
    stem: "110.3(B) requires installers to:",
    choices: [
      { key: "A", text: "Ignore labels if inconvenient" },
      { key: "B", text: "Follow listing, labeling, and manufacturer instructions" },
      { key: "C", text: "Use copper conductors only" },
      { key: "D", text: "Derate all devices by 50%" }
    ],
    answer: "B",
    why: "110.3(B) is enforced constantly—labels and instructions matter."
  },
  { id: 8,
    stem: "110.9 and 110.10 deal with:",
    choices: [
      { key: "A", text: "Voltage drop and harmonics" },
      { key: "B", text: "Interrupting rating and SCCR/coordination" },
      { key: "C", text: "Ground rod spacing" },
      { key: "D", text: "DWV clearances" }
    ],
    answer: "B",
    why: "Devices must interrupt available fault current; equipment must withstand/coordinate."
  },
  { id: 9,
    stem: "110.21 and 110.22 require:",
    choices: [
      { key: "A", text: "Color-coded conductors only" },
      { key: "B", text: "Durable hazard markings and circuit identification" },
      { key: "C", text: "Stainless fasteners for all gear" },
      { key: "D", text: "Use of lockout/tagout at all times" }
    ],
    answer: "B",
    why: "Marking and identification—clear, durable, and useful."
  },
  { id: 10,
    stem: "110.24 requires service equipment to be marked with:",
    choices: [
      { key: "A", text: "Panel schedule only" },
      { key: "B", text: "Voltage drop percentage" },
      { key: "C", text: "Available fault current" },
      { key: "D", text: "POCO account number" }
    ],
    answer: "C",
    why: "AFC marking supports correct OCPD and SCCR selection."
  },
  { id: 11,
    stem: "110.14(C) primarily affects:",
    choices: [
      { key: "A", text: "Conductor color" },
      { key: "B", text: "Which ampacity column you use based on terminal temperature ratings" },
      { key: "C", text: "Enclosure NEMA rating" },
      { key: "D", text: "Breaker handle color" }
    ],
    answer: "B",
    why: "Choose ampacity by terminal temperature rating (often 60°C ≤100A)."
  },
  { id: 12,
    stem: "Working space rules in 110.26 exist to ensure:",
    choices: [
      { key: "A", text: "Pretty panel pictures" },
      { key: "B", text: "Safe operation and maintenance access" },
      { key: "C", text: "Shorter conduit runs" },
      { key: "D", text: "Lower trip settings" }
    ],
    answer: "B",
    why: "110.26 is about safety clearances and egress."
  },
  { id: 13,
    stem: "Article 100: Grounded (neutral) conductor must be identified per:",
    choices: [
      { key: "A", text: "Article 200" },
      { key: "B", text: "Article 300" },
      { key: "C", text: "Article 430" },
      { key: "D", text: "Article 700" }
    ],
    answer: "A",
    why: "Art. 200 covers use and identification of grounded conductors."
  },
  { id: 14,
    stem: "Which statement about 'Informational Notes' is true?",
    choices: [
      { key: "A", text: "They are mandatory requirements" },
      { key: "B", text: "They are enforceable only on services" },
      { key: "C", text: "They are explanatory and not enforceable" },
      { key: "D", text: "They apply to emergency systems only" }
    ],
    answer: "C",
    why: "Informational Notes provide guidance—no mandate."
  },
  { id: 15,
    stem: "Article 100: Equipment Grounding Conductor (EGC) is sized by:",
    choices: [
      { key: "A", text: "Conductor insulation color" },
      { key: "B", text: "OCPD rating per 250.122" },
      { key: "C", text: "System voltage only" },
      { key: "D", text: "Enclosure size" }
    ],
    answer: "B",
    why: "EGC sizing follows 250.122 (by the OCPD rating)."
  }
];
