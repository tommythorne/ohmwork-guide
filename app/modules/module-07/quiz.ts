// NEC-based Quiz for Module 7 (Special Conditions)
const quiz = [
  {
    id: 1,
    stem: "Emergency systems (700) must restore power within:",
    choices: [
      { key: "A", text: "1 second" },
      { key: "B", text: "10 seconds" },
      { key: "C", text: "30 seconds" },
      { key: "D", text: "60 seconds" }
    ],
    answer: "B",
    why: "NEC 700.12: emergency systems must restore power in 10 seconds or less."
  },
  {
    id: 2,
    stem: "Legally required standby systems (701) must restore power within:",
    choices: [
      { key: "A", text: "10 seconds" },
      { key: "B", text: "30 seconds" },
      { key: "C", text: "60 seconds" },
      { key: "D", text: "5 minutes" }
    ],
    answer: "C",
    why: "701.11: legally required standby systems must operate within 60 seconds."
  },
  {
    id: 3,
    stem: "Optional standby systems (702) are intended for:",
    choices: [
      { key: "A", text: "Life safety loads" },
      { key: "B", text: "Legally mandated equipment" },
      { key: "C", text: "Convenience or business continuity" },
      { key: "D", text: "Fire alarm systems only" }
    ],
    answer: "C",
    why: "702.2: optional standby serves convenience/business loads not required by code."
  },
  {
    id: 4,
    stem: "Which article applies to Critical Operations Power Systems (COPS)?",
    choices: [
      { key: "A", text: "700" },
      { key: "B", text: "701" },
      { key: "C", text: "708" },
      { key: "D", text: "750" }
    ],
    answer: "C",
    why: "708: governs COPS facilities with the highest reliability requirements."
  },
  {
    id: 5,
    stem: "Which branch in healthcare facilities supplies patient care equipment?",
    choices: [
      { key: "A", text: "Life Safety" },
      { key: "B", text: "Critical" },
      { key: "C", text: "Equipment" },
      { key: "D", text: "Optional" }
    ],
    answer: "B",
    why: "517.33: critical branch supplies patient care equipment."
  },
  {
    id: 6,
    stem: "Emergency system wiring must be:",
    choices: [
      { key: "A", text: "Intermixed with normal power wiring" },
      { key: "B", text: "Independent from other systems" },
      { key: "C", text: "Run in fiber conduit only" },
      { key: "D", text: "Painted red only" }
    ],
    answer: "B",
    why: "700.10(D): emergency circuits must be independent from other wiring."
  },
  {
    id: 7,
    stem: "Healthcare essential electrical systems include how many branches?",
    choices: [
      { key: "A", text: "Two" },
      { key: "B", text: "Three" },
      { key: "C", text: "Four" },
      { key: "D", text: "One" }
    ],
    answer: "B",
    why: "517.30: essential systems = life safety, critical, and equipment branches."
  },
  {
    id: 8,
    stem: "Class 2 and Class 3 circuits (725) must:",
    choices: [
      { key: "A", text: "Always be in metal raceways" },
      { key: "B", text: "Use listed power sources" },
      { key: "C", text: "Be fused at 100A" },
      { key: "D", text: "Ignore separation rules" }
    ],
    answer: "B",
    why: "725.121: Class 2/3 sources must be listed."
  },
  {
    id: 9,
    stem: "Which is a typical hazard with low-voltage circuits (720)?",
    choices: [
      { key: "A", text: "Voltage shock" },
      { key: "B", text: "Arc flash only" },
      { key: "C", text: "Fire from undersized or unprotected wiring" },
      { key: "D", text: "None — they are exempt" }
    ],
    answer: "C",
    why: "720.5: even ≤50V wiring must be sized and protected from damage."
  },
  {
    id: 10,
    stem: "Energy management systems (750) may NOT:",
    choices: [
      { key: "A", text: "Control HVAC loads" },
      { key: "B", text: "Override life safety systems" },
      { key: "C", text: "Be documented for AHJ" },
      { key: "D", text: "Use control wiring" }
    ],
    answer: "B",
    why: "750.10: EMS cannot override life safety systems."
  },
  {
    id: 11,
    stem: "Fiber optic cables (770) require:",
    choices: [
      { key: "A", text: "No fire ratings since they are non-conductive" },
      { key: "B", text: "Fire-rated jackets in risers and plenums" },
      { key: "C", text: "Same protection as MV cables" },
      { key: "D", text: "Only burial underground" }
    ],
    answer: "B",
    why: "770.113: plenum/riser-rated jackets are required for fiber."
  },
  {
    id: 12,
    stem: "Which article requires documented maintenance and operational testing?",
    choices: [
      { key: "A", text: "700 Emergency" },
      { key: "B", text: "701 Standby" },
      { key: "C", text: "708 COPS" },
      { key: "D", text: "702 Optional" }
    ],
    answer: "C",
    why: "708.54: COPS requires documented maintenance/testing."
  },
  {
    id: 13,
    stem: "Patient care spaces require:",
    choices: [
      { key: "A", text: "No grounding requirements" },
      { key: "B", text: "Strict grounding and receptacle rules" },
      { key: "C", text: "Fiber optics only" },
      { key: "D", text: "Class 3 only" }
    ],
    answer: "B",
    why: "517.18: grounding and receptacle spacing are tightly regulated in patient care spaces."
  },
  {
    id: 14,
    stem: "Optional standby systems must:",
    choices: [
      { key: "A", text: "Transfer safely without paralleling the utility" },
      { key: "B", text: "Always be portable" },
      { key: "C", text: "Provide power in 10 seconds" },
      { key: "D", text: "Override emergency loads" }
    ],
    answer: "A",
    why: "702.4: optional standby transfer must prevent inadvertent interconnection."
  },
  {
    id: 15,
    stem: "Which article governs optical fiber installations?",
    choices: [
      { key: "A", text: "725" },
      { key: "B", text: "750" },
      { key: "C", text: "770" },
      { key: "D", text: "517" }
    ],
    answer: "C",
    why: "770: applies to optical fiber cables."
  }
];
export default quiz;