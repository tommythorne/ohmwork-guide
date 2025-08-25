import type { QuizQuestion } from "@/app/types/module";

const quiz: QuizQuestion[] = [
  {
    id: 1,
    stem: "Art. 600: A new storefront sign is being installed. What’s the correct branch-circuit approach?",
    choices: [
      { key: "A", text: "Share an existing lighting circuit if capacity allows" },
      { key: "B", text: "Provide a dedicated branch circuit for the sign" },
      { key: "C", text: "Use the nearest receptacle via a cord-and-plug" },
      { key: "D", text: "Tie into the HVAC control circuit" }
    ],
    answer: "B",
    why: "600.5: signs require a dedicated circuit, and listed equipment per 600.3."
  },
  {
    id: 2,
    stem: "Art. 620: Which is TRUE about elevator equipment circuits?",
    choices: [
      { key: "A", text: "Lighting receptacles can be on the same circuit as the drive" },
      { key: "B", text: "No disconnect is required if the controller is within sight" },
      { key: "C", text: "Provide a lockable disconnecting means for the drive/control" },
      { key: "D", text: "Only one disconnect is allowed in the entire machine room" }
    ],
    answer: "C",
    why: "620.51: lockable disconnecting means; keep lighting/receptacles separate."
  },
  {
    id: 3,
    stem: "Art. 625: For EVSE, branch-circuit sizing typically uses:",
    choices: [
      { key: "A", text: "100% of nameplate" },
      { key: "B", text: "115% of nameplate" },
      { key: "C", text: "125% of nameplate (continuous load)" },
      { key: "D", text: "150% of nameplate" }
    ],
    answer: "C",
    why: "EVSE is a continuous load; size at 125% of nameplate."
  },
  {
    id: 4,
    stem: "Art. 630: Welder circuits are sized using:",
    choices: [
      { key: "A", text: "General lighting rules only" },
      { key: "B", text: "Article 630 multipliers/tables and nameplate duty cycle" },
      { key: "C", text: "Chapter 3 raceway fill exclusively" },
      { key: "D", text: "Whatever the receptacle is rated for" }
    ],
    answer: "B",
    why: "630 uses duty-cycle multipliers; don’t apply generic branch rules."
  },
  {
    id: 5,
    stem: "Art. 640: One concern in audio racks is:",
    choices: [
      { key: "A", text: "Thermal loading and ventilation" },
      { key: "B", text: "Water supply" },
      { key: "C", text: "Ammonia resistance" },
      { key: "D", text: "Marine ELCI protection" }
    ],
    answer: "A",
    why: "Audio/amp racks can run hot; size circuits and ventilation appropriately."
  },
  {
    id: 6,
    stem: "Art. 645: IT rooms using 645 rules typically provide:",
    choices: [
      { key: "A", text: "No disconnects to avoid downtime" },
      { key: "B", text: "An emergency power off / disconnecting means for equipment" },
      { key: "C", text: "Pools bonding grid" },
      { key: "D", text: "Marine-rated inlets" }
    ],
    answer: "B",
    why: "645 provides shutdown/disconnect provisions and special room conditions."
  },
  {
    id: 7,
    stem: "Art. 680: What’s commonly required on pool pump motors?",
    choices: [
      { key: "A", text: "AFCI only" },
      { key: "B", text: "No protection — motors are exempt" },
      { key: "C", text: "GFCI protection" },
      { key: "D", text: "ELCI only" }
    ],
    answer: "C",
    why: "680.21: GFCI is a frequent requirement; verify edition/listing specifics."
  },
  {
    id: 8,
    stem: "Art. 680: The pool deck’s equipotential grid is primarily about:",
    choices: [
      { key: "A", text: "Aesthetics" },
      { key: "B", text: "Audio noise reduction" },
      { key: "C", text: "Reducing shock gradients around the pool" },
      { key: "D", text: "Increasing available fault current" }
    ],
    answer: "C",
    why: "Bonding minimizes voltage differences that could shock swimmers."
  },
  {
    id: 9,
    stem: "Art. 690: PV output circuit ampacity is usually calculated at:",
    choices: [
      { key: "A", text: "100% of Isc" },
      { key: "B", text: "115% of Isc" },
      { key: "C", text: "125% of maximum current" },
      { key: "D", text: "200% of maximum current" }
    ],
    answer: "C",
    why: "Use 125% plus conditions of use (temperature/grouping)."
  },
  {
    id: 10,
    stem: "Art. 690: Rapid shutdown requirements primarily exist to:",
    choices: [
      { key: "A", text: "Increase inverter efficiency" },
      { key: "B", text: "Reduce wiring costs" },
      { key: "C", text: "Improve firefighter safety during emergencies" },
      { key: "D", text: "Avoid labeling" }
    ],
    answer: "C",
    why: "Rapid shutdown lowers voltage in specific areas for first responders."
  },
  {
    id: 11,
    stem: "Art. 691: Large-scale PV is different from 690 mainly because:",
    choices: [
      { key: "A", text: "It bans grounding" },
      { key: "B", text: "It assumes engineered utility-scale systems with special documentation" },
      { key: "C", text: "It allows NM cable outdoors" },
      { key: "D", text: "It requires GFCI on all circuits" }
    ],
    answer: "B",
    why: "Utility-scale PV follows engineered practices and documentation."
  },
  {
    id: 12,
    stem: "Art. 695: Fire pump power paths are arranged to prioritize:",
    choices: [
      { key: "A", text: "Convenience outlets" },
      { key: "B", text: "Selective coordination over operation" },
      { key: "C", text: "Reliability of operation even under faults" },
      { key: "D", text: "Only generator power" }
    ],
    answer: "C",
    why: "NEC emphasizes reliable operation of fire pumps; OCPD/paths reflect that."
  },
  {
    id: 13,
    stem: "Art. 600: Which is required for signs/outline lighting?",
    choices: [
      { key: "A", text: "Disconnect hidden above a ceiling" },
      { key: "B", text: "Readily accessible disconnect within sight" },
      { key: "C", text: "Cord-and-plug only" },
      { key: "D", text: "Tap from any convenience receptacle" }
    ],
    answer: "B",
    why: "Within sight and accessible for service — classic inspection point."
  },
  {
    id: 14,
    stem: "Art. 625: EVSE on a 40A nameplate should be on what size OCPD?",
    choices: [
      { key: "A", text: "40A" },
      { key: "B", text: "45A" },
      { key: "C", text: "50A" },
      { key: "D", text: "60A" }
    ],
    answer: "C",
    why: "Continuous load: 40A × 125% ≈ 50A."
  },
  {
    id: 15,
    stem: "Art. 630: What commonly trips people up when sizing welder circuits?",
    choices: [
      { key: "A", text: "Using duty-cycle multipliers from 630 instead of general branch rules" },
      { key: "B", text: "Counting receptacle outlets" },
      { key: "C", text: "Room lighting layout" },
      { key: "D", text: "Fixture schedule submittals" }
    ],
    answer: "A",
    why: "Welder rules aren’t the same as standard branch circuits — duty cycle matters."
  }
];

export default quiz;
