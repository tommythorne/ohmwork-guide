export type QuizChoiceKey = "A" | "B" | "C" | "D";
export type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: QuizChoiceKey; text: string }[];
  answer: QuizChoiceKey;
  why: string;
};

const quiz: QuizQuestion[] = [
  {
    id: 1,
    stem: "Outdoors in a wet location, a 20A, 125V receptacle is installed on a dwelling. Which cover is required?",
    choices: [
      { key: "A", text: "Weatherproof flap (closed when in use)" },
      { key: "B", text: "While‑in‑use (in‑use) cover" },
      { key: "C", text: "Standard indoor cover is fine" },
      { key: "D", text: "No cover if WR receptacle is used" }
    ],
    answer: "B",
    why: "406.9(B)(1): In wet locations, 15/20A 125/250V receptacles require an in‑use cover."
  },
  {
    id: 2,
    stem: "A countertop requires a face‑up receptacle. Which statement is correct?",
    choices: [
      { key: "A", text: "Any 15/20A duplex is acceptable if GFCI protected" },
      { key: "B", text: "Only if protected by an AFCI" },
      { key: "C", text: "Only if a listed assembly for face‑up installation is used" },
      { key: "D", text: "Never permitted by the NEC" }
    ],
    answer: "C",
    why: "406.5(E): Face‑up devices must be part of a listed assembly for that orientation."
  },
  {
    id: 3,
    stem: "Which best describes 'readily accessible' for a wall switch?",
    choices: [
      { key: "A", text: "Reachable with a 6‑ft ladder" },
      { key: "B", text: "Reachable quickly without tools or ladders" },
      { key: "C", text: "Within 6 ft of the door" },
      { key: "D", text: "Under a removable panel" }
    ],
    answer: "B",
    why: "Article 100 definition used with 404: no tools, no ladders, no moving obstacles."
  },
  {
    id: 4,
    stem: "A luminaire is supported by EMT. When is this permitted?",
    choices: [
      { key: "A", text: "Always, EMT is rigid enough" },
      { key: "B", text: "Only where the luminaire is very light" },
      { key: "C", text: "Only when the raceway and luminaire are specifically listed for support" },
      { key: "D", text: "Never permitted" }
    ],
    answer: "C",
    why: "410.36(B): Independent support unless specifically listed for raceway support."
  },
  {
    id: 5,
    stem: "An appliance is 240V, 16A, fixed, and within sight. What can serve as its disconnect?",
    choices: [
      { key: "A", text: "Branch OCPD only" },
      { key: "B", text: "Cord‑and‑plug if within sight" },
      { key: "C", text: "No disconnect is needed" },
      { key: "D", text: "Only a fused safety switch" }
    ],
    answer: "B",
    why: "422.31 and 422.33: A cord‑and‑plug can be the disconnect when within sight."
  },
  {
    id: 6,
    stem: "Fixed electric space‑heating load is 32A continuous. Minimum circuit ampacity?",
    choices: [
      { key: "A", text: "32A" },
      { key: "B", text: "35A" },
      { key: "C", text: "40A" },
      { key: "D", text: "45A" }
    ],
    answer: "C",
    why: "Continuous heating → 125%: 32A × 1.25 ≈ 40A (next standard)."
  },
  {
    id: 7,
    stem: "Motor branch‑circuit conductor ampacity is based on:",
    choices: [
      { key: "A", text: "125% of the motor full‑load current" },
      { key: "B", text: "100% of nameplate current" },
      { key: "C", text: "150% of the OCPD" },
      { key: "D", text: "Whatever the breaker rating is" }
    ],
    answer: "A",
    why: "430.22: Conductors sized at 125% of motor FLC from the tables."
  },
  {
    id: 8,
    stem: "For A/C equipment, which values control conductor/OCPD sizing?",
    choices: [
      { key: "A", text: "Table 310 ampacity only" },
      { key: "B", text: "Motor Tables 430.248–250 only" },
      { key: "C", text: "Nameplate values such as MCA and MOCP" },
      { key: "D", text: "Whatever the installer used last time" }
    ],
    answer: "C",
    why: "440.6: Use the **nameplate** MCA/MOCP, not generic tables."
  },
  {
    id: 9,
    stem: "Transformer primary OCPD sizing is generally taken from:",
    choices: [
      { key: "A", text: "Table 450.3 based on type and voltage class" },
      { key: "B", text: "Table 310.16 only" },
      { key: "C", text: "432.52" },
      { key: "D", text: "Manufacturer torque chart" }
    ],
    answer: "A",
    why: "450.3(A)/(B): Maximum OCPD set by transformer type and voltage class."
  },
  {
    id: 10,
    stem: "A panelboard has an unused breaker opening. What’s required?",
    choices: [
      { key: "A", text: "Leave it open for ventilation" },
      { key: "B", text: "Tape over it temporarily" },
      { key: "C", text: "Install a **listed filler plate**" },
      { key: "D", text: "Nothing if the room is locked" }
    ],
    answer: "C",
    why: "408.54: Listed filler plates must cover unused openings."
  },
  {
    id: 11,
    stem: "An ICP (industrial control panel) nameplate shows SCCR = 10 kA, available fault = 22 kA. Result?",
    choices: [
      { key: "A", text: "OK if feeders are copper" },
      { key: "B", text: "OK if upstream main is 100A" },
      { key: "C", text: "Not compliant—the SCCR must meet/exceed the available fault current" },
      { key: "D", text: "OK if GFCI protected" }
    ],
    answer: "C",
    why: "409.110: SCCR must be adequate for available fault current."
  },
  {
    id: 12,
    stem: "Which statement about motor branch OCPD is true?",
    choices: [
      { key: "A", text: "It primarily protects the motor windings" },
      { key: "B", text: "It primarily protects the circuit conductors" },
      { key: "C", text: "It always equals 125% of FLC" },
      { key: "D", text: "It’s always smaller than conductor ampacity" }
    ],
    answer: "B",
    why: "430.52 note: OCPD is for the **circuit**; overloads protect the motor."
  },
  {
    id: 13,
    stem: "Closet luminaire rules generally restrict:",
    choices: [
      { key: "A", text: "Any LED usage" },
      { key: "B", text: "Clearance to storage and use of enclosed or IC‑rated fixtures where required" },
      { key: "C", text: "Switch location only" },
      { key: "D", text: "Fixture color temperature" }
    ],
    answer: "B",
    why: "410.10(D): Clearance and appropriate fixture type."
  },
  {
    id: 14,
    stem: "A WR receptacle is installed outdoors but under a roof (damp location). Cover?",
    choices: [
      { key: "A", text: "No cover if WR" },
      { key: "B", text: "In‑use cover is still required because it’s outdoors" },
      { key: "C", text: "Weatherproof cover that remains closed when **not** in use" },
      { key: "D", text: "Standard indoor cover" }
    ],
    answer: "C",
    why: "406.9(A): Damp locations—weatherproof cover closed when not in use (in‑use required for wet)."
  },
  {
    id: 15,
    stem: "Fixed space heating at 48A continuous—minimum OCPD (standard ratings)?",
    choices: [
      { key: "A", text: "50A" },
      { key: "B", text: "60A" },
      { key: "C", text: "45A" },
      { key: "D", text: "40A" }
    ],
    answer: "B",
    why: "48A × 125% = 60A. Next standard breaker is 60A."
  }
];

export default quiz;
