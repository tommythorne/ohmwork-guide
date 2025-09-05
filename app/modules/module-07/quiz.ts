// NEC-based Quiz for Module 7 (Special Conditions)
const quiz = [
  {
    id: 1,
    stem: "A hospital's exit signs and fire alarm system lose power. What type of system must restore power within 10 seconds?",
    choices: [
      { key: "A", text: "Legally required standby" },
      { key: "B", text: "Emergency system" },
      { key: "C", text: "Optional standby" },
      { key: "D", text: "Critical operations" }
    ],
    answer: "B",
    why: "Emergency systems power life safety loads and must restore power within 10 seconds."
  },
  {
    id: 2,
    stem: "You're installing a generator for a data center that needs backup power for business continuity. What system type is this?",
    choices: [
      { key: "A", text: "Emergency system" },
      { key: "B", text: "Legally required standby" },
      { key: "C", text: "Optional standby" },
      { key: "D", text: "Critical operations" }
    ],
    answer: "C",
    why: "Optional standby systems serve convenience and business continuity loads, not life safety."
  },
  {
    id: 3,
    stem: "A fire station needs backup power for their communication equipment. What's the maximum transfer time allowed?",
    choices: [
      { key: "A", text: "10 seconds" },
      { key: "B", text: "30 seconds" },
      { key: "C", text: "60 seconds" },
      { key: "D", text: "5 minutes" }
    ],
    answer: "C",
    why: "Legally required standby systems must operate within 60 seconds for loads required by law."
  },
  {
    id: 4,
    stem: "You're wiring a hospital operating room. Which branch supplies the patient monitoring equipment?",
    choices: [
      { key: "A", text: "Life Safety branch" },
      { key: "B", text: "Critical branch" },
      { key: "C", text: "Equipment branch" },
      { key: "D", text: "Emergency branch" }
    ],
    answer: "B",
    why: "The Critical branch supplies patient care equipment and task loads in healthcare facilities."
  },
  {
    id: 5,
    stem: "Emergency lighting circuits must be wired:",
    choices: [
      { key: "A", text: "In the same raceway as normal power" },
      { key: "B", text: "Independently from other systems" },
      { key: "C", text: "Only in metal conduit" },
      { key: "D", text: "With red wire only" }
    ],
    answer: "B",
    why: "Emergency circuits must be independent to prevent failure of one system affecting the other."
  },
  {
    id: 6,
    stem: "A 24V thermostat cable runs through a ceiling plenum. What fire rating is required?",
    choices: [
      { key: "A", text: "No rating needed - it's low voltage" },
      { key: "B", text: "Plenum-rated jacket" },
      { key: "C", text: "Same as 480V cable" },
      { key: "D", text: "Only if over 50 feet" }
    ],
    answer: "B",
    why: "Even low-voltage cables need plenum-rated jackets when installed in air-handling spaces."
  },
  {
    id: 7,
    stem: "You're installing a Class 2 power supply for a security camera system. What's required?",
    choices: [
      { key: "A", text: "100A overcurrent protection" },
      { key: "B", text: "Listed power source" },
      { key: "C", text: "Metal conduit only" },
      { key: "D", text: "No special requirements" }
    ],
    answer: "B",
    why: "Class 2 power sources must be listed and marked for the specific application."
  },
  {
    id: 8,
    stem: "A fiber optic cable runs from the basement to the 10th floor. What rating is required?",
    choices: [
      { key: "A", text: "No special rating" },
      { key: "B", text: "Riser-rated jacket" },
      { key: "C", text: "Same as power cables" },
      { key: "D", text: "Only if carrying data" }
    ],
    answer: "B",
    why: "Fiber cables in vertical risers must have riser-rated jackets to prevent fire spread between floors."
  },
  {
    id: 9,
    stem: "An energy management system can control:",
    choices: [
      { key: "A", text: "Life safety systems" },
      { key: "B", text: "Emergency lighting" },
      { key: "C", text: "HVAC and non-essential loads" },
      { key: "D", text: "Fire alarm systems" }
    ],
    answer: "C",
    why: "Energy management systems can control HVAC and other non-essential loads but cannot override life safety systems."
  },
  {
    id: 10,
    stem: "A hospital patient room needs receptacles. What's the minimum spacing requirement?",
    choices: [
      { key: "A", text: "No special requirements" },
      { key: "B", text: "6 feet maximum spacing" },
      { key: "C", text: "Every 4 feet" },
      { key: "D", text: "Only at the headwall" }
    ],
    answer: "B",
    why: "Patient care spaces require hospital-grade receptacles with maximum 6-foot spacing for patient safety."
  },
  {
    id: 11,
    stem: "A generator transfer switch must prevent:",
    choices: [
      { key: "A", text: "Manual operation" },
      { key: "B", text: "Inadvertent interconnection with utility" },
      { key: "C", text: "Automatic transfer" },
      { key: "D", text: "Load shedding" }
    ],
    answer: "B",
    why: "Transfer switches must prevent inadvertent interconnection between utility and generator to avoid backfeed hazards."
  },
  {
    id: 12,
    stem: "A data center needs the highest reliability power system. What type should be installed?",
    choices: [
      { key: "A", text: "Emergency system" },
      { key: "B", text: "Legally required standby" },
      { key: "C", text: "Critical Operations Power System" },
      { key: "D", text: "Optional standby" }
    ],
    answer: "C",
    why: "Critical Operations Power Systems (COPS) provide the highest reliability for facilities requiring continuous operation."
  },
  {
    id: 13,
    stem: "A 12V landscape lighting circuit is damaged and causing a fire. What went wrong?",
    choices: [
      { key: "A", text: "Voltage was too high" },
      { key: "B", text: "Wire was undersized or unprotected" },
      { key: "C", text: "Wrong color wire used" },
      { key: "D", text: "No ground wire" }
    ],
    answer: "B",
    why: "Even low-voltage circuits must be properly sized and protected from damage to prevent fire hazards."
  },
  {
    id: 14,
    stem: "A hospital's essential electrical system has how many branches?",
    choices: [
      { key: "A", text: "One" },
      { key: "B", text: "Two" },
      { key: "C", text: "Three" },
      { key: "D", text: "Four" }
    ],
    answer: "C",
    why: "Healthcare essential electrical systems have three branches: Life Safety, Critical, and Equipment."
  },
  {
    id: 15,
    stem: "A COPS facility requires:",
    choices: [
      { key: "A", text: "No special documentation" },
      { key: "B", text: "Documented maintenance and testing" },
      { key: "C", text: "Only emergency lighting" },
      { key: "D", text: "Portable generators only" }
    ],
    answer: "B",
    why: "Critical Operations Power Systems require documented maintenance and operational testing to ensure reliability."
  }
];
export default quiz;