// Module 3 — Wiring Methods & Materials
// 10-question Knowledge Check, exam-style

type Choice = { label: string; correct?: boolean; explain?: string };
type Question = { stem: string; ref?: string; choices: Choice[] };

const quiz: Question[] = [
  {
    stem: "EMT in a dry location is secured with straps. What is the maximum distance from each box that a strap must be located (trade size 1 in. and smaller)?",
    ref: "NEC 358.30(A), Exception rules elsewhere",
    choices: [
      { label: "6 in." },
      { label: "10 in." },
      { label: "3 ft" },
      { label: "12 in.", correct: true, explain: "EMT must be securely fastened within 3 ft of each outlet box, junction box, device box, cabinet, conduit body or other termination, and supported every 10 ft. Many exam distractors flip these numbers. (358.30(A))" }
    ]
  },
  {
    stem: "Nonmetallic raceways expand and contract with temperature. When is an expansion fitting required for PVC conduit (RNC)?",
    ref: "NEC 352.44",
    choices: [
      { label: "Always, regardless of run length" },
      { label: "Only where exposed to sunlight" },
      { label: "Where expected thermal expansion will cause ≥ 1/4 in. movement", correct: true, explain: "PVC runs that will see enough temperature swing to create movement must have expansion fittings to protect terminations. Use the manufacturer’s expansion chart. (352.44)" },
      { label: "Never; PVC is flexible enough" }
    ]
  },
  {
    stem: "What’s the minimum cover for Schedule 40 PVC feeder (120/240 V) direct-buried under a residential driveway?",
    ref: "NEC 300.5(A), Table 300.5",
    choices: [
      { label: "12 in." },
      { label: "18 in." },
      { label: "24 in.", correct: true, explain: "Most dwelling driveways fall under 'Residential driveways and outdoor parking areas' → 18 in. for direct-buried cable, but for RNC (PVC) with individual conductors it’s typically 18 in. if GFCI protected; otherwise 24 in. Be careful with conditions; many exams key 24 in. for general feeders. Always verify local condition in Table 300.5." },
      { label: "30 in." }
    ]
  },
  {
    stem: "Type NM cable is allowed in which of the following locations?",
    ref: "NEC 334.10, 334.12",
    choices: [
      { label: "Exposed in a commercial garage" },
      { label: "In a dwelling unit wall cavity", correct: true, explain: "NM is permitted in normally dry locations of one- and two-family and multifamily dwellings—such as stud walls. Not permitted in wet or hazardous (classified) locations, or where subject to physical damage. (334.10, 334.12)" },
      { label: "Embedded in poured concrete (wet)" },
      { label: "Exposed in a place of assembly where subject to damage" }
    ]
  },
  {
    stem: "MC cable equipment grounding: which is true for an MC cable with an aluminum armor and a full-sized copper equipment grounding conductor (EGC) inside?",
    ref: "NEC 330.108, 250.118(10)",
    choices: [
      { label: "The armor always serves as the sole EGC" },
      { label: "The armor is never permitted as an EGC" },
      { label: "The internal copper EGC is the recognized EGC; armor may or may not be recognized depending on listing", correct: true, explain: "MC can be listed so that the armor qualifies as an EGC in specific constructions, but the internal copper/AL EGC is the recognized equipment grounding conductor when provided. (330.108, 250.118(10))" },
      { label: "You must add a separate green insulated EGC outside the MC" }
    ]
  },
  {
    stem: "Minimum bending radius for 4/0 AWG THHN copper in a raceway (building wire)?",
    ref: "NEC 310.10(G), 300.34 (older editions), manufacturer data",
    choices: [
      { label: "Not specified; bend as needed" },
      { label: "5 × conductor diameter", correct: true, explain: "For conductors 4 AWG and larger, bending radius is typically at least 5× the conductor diameter (check current Code section and cable type). Exams often test 5× for single conductors in raceway. Verify specific edition language. " },
      { label: "8 × conduit trade size" },
      { label: "12 × conductor diameter" }
    ]
  },
  {
    stem: "THWN-2 conductors are installed outdoors in PVC. Is this a wet location and are the conductors suitable?",
    ref: "NEC 310.10(C), 300.9",
    choices: [
      { label: "Not a wet location; THWN-2 is dry-location only" },
      { label: "Wet location; THWN-2 is suitable", correct: true, explain: "Raceways in wet locations above or below grade are considered wet locations. THWN-2 is rated for wet locations. (300.9, 310.10(C))" },
      { label: "Wet location; THWN-2 is not suitable" },
      { label: "Depends on the conduit schedule only" }
    ]
  },
  {
    stem: "Allowed maximum conductor fill in a single raceway (more than 2 conductors)?",
    ref: "NEC Chapter 9, Table 1; Annex C for specific raceways",
    choices: [
      { label: "40%" },
      { label: "53%" },
      { label: "60%" },
      { label: "40% for one conductor, 31% for two, 40% *area* for over two; use Tables", correct: true, explain: "Chapter 9, Table 1 sets the rules: 53% for one conductor, 31% for two, and 40% of the cross-sectional area for over two. Exams love to mix these numbers—memorize the trio." }
    ]
  },
  {
    stem: "Flexible metal conduit (FMC) support: what is the maximum interval between supports for trade sizes 1-1/4 in. and smaller?",
    ref: "NEC 348.30(A)",
    choices: [
      { label: "3 ft" },
      { label: "4.5 ft", correct: true, explain: "FMC must be secured within 12 in. of each box and supported at intervals not exceeding 4.5 ft for 1-1/4 in. and smaller, unless otherwise permitted. (348.30(A))" },
      { label: "6 ft" },
      { label: "10 ft" }
    ]
  },
  {
    stem: "ENT (smurf tube) is proposed for a boiler room with frequent washdowns (wet location, possible physical damage). Is ENT permitted exposed?",
    ref: "NEC 362.12, 362.10",
    choices: [
      { label: "Yes, ENT is permitted exposed everywhere" },
      { label: "No; ENT is not permitted where subject to physical damage or in wet locations unless specifically allowed", correct: true, explain: "ENT has limitations—generally not permitted where subject to physical damage and with restrictions in wet locations. Check 362.12 and 362.10 for exact conditions and exceptions." },
      { label: "Only if Schedule 80 ENT is used" },
      { label: "Only if painted to match the wall color" }
    ]
  }
];

export default quiz;