# From repo root
cat > app/modules/module-08/quiz.ts <<'TS'
// Quiz — Chapter 8 (Communications) — 15 questions
const quiz = [
  {
    id: 1,
    stem: "Chapter 8 rules are...",
    choices: [
      { key: "A", text: "Always overridden by Chapter 3" },
      { key: "B", text: "Independent unless modified by other chapters" },
      { key: "C", text: "Only advisory suggestions" },
      { key: "D", text: "For utility systems only" }
    ],
    answer: "B",
    why: "Ch. 8 stands on its own unless another chapter explicitly modifies it (90.3)."
  },
  {
    id: 2,
    stem: "Which jacket is permitted in air-handling plenums?",
    choices: [
      { key: "A", text: "CM" },
      { key: "B", text: "CMR" },
      { key: "C", text: "CMP" },
      { key: "D", text: "CMX" }
    ],
    answer: "C",
    why: "CMP is the plenum-rated, low smoke/flame cable."
  },
  {
    id: 3,
    stem: "Minimum jacket for vertical riser shafts:",
    choices: [
      { key: "A", text: "CMX" },
      { key: "B", text: "CM" },
      { key: "C", text: "CMR" },
      { key: "D", text: "PVC-jacket is fine anywhere" }
    ],
    answer: "C",
    why: "Use CMR (or higher CMP) in risers."
  },
  {
    id: 4,
    stem: "When unsure about jacket rating for the space, the safe choice is to:",
    choices: [
      { key: "A", text: "Select the lowest rating to save cost" },
      { key: "B", text: "Use CMX everywhere" },
      { key: "C", text: "Select a higher rating (e.g., CMP in a riser)" },
      { key: "D", text: "Ask the inspector to choose on site" }
    ],
    answer: "C",
    why: "Higher ratings are acceptable in lower-risk spaces; never step down."
  },
  {
    id: 5,
    stem: "Communications and power conductors may share a raceway when:",
    choices: [
      { key: "A", text: "Voltage is under 50V" },
      { key: "B", text: "Different colors are used" },
      { key: "C", text: "The assembly is specifically listed for the purpose or barriered" },
      { key: "D", text: "It’s a short run under 10 ft" }
    ],
    answer: "C",
    why: "Shared raceways require a listed assembly or barrier; otherwise keep separation."
  },
  {
    id: 6,
    stem: "At the building entry, outside-plant communications cables typically require:",
    choices: [
      { key: "A", text: "Nothing — low voltage is harmless" },
      { key: "B", text: "Primary protection and bonding to the GES" },
      { key: "C", text: "Only a label" },
      { key: "D", text: "Just a plastic bushing" }
    ],
    answer: "B",
    why: "Install listed protectors and bond close to the entry (800/820)."
  },
  {
    id: 7,
    stem: "Ceiling support best practice for low-voltage cabling:",
    choices: [
      { key: "A", text: "Lay on ceiling tiles if they seem sturdy" },
      { key: "B", text: "Tie to grid wires with zip ties" },
      { key: "C", text: "Use listed supports (J-hooks, tray, etc.)" },
      { key: "D", text: "No support required for CMP" }
    ],
    answer: "C",
    why: "Use listed supports; tiles and grid wires aren’t permitted supports."
  },
  {
    id: 8,
    stem: "Fire-rated penetrations for comms cables must be sealed with:",
    choices: [
      { key: "A", text: "Any foam that fits" },
      { key: "B", text: "Duct tape for temporary work" },
      { key: "C", text: "A listed firestop system for the assembly" },
      { key: "D", text: "Aluminum foil if smoke-tight" }
    ],
    answer: "C",
    why: "Maintain the tested fire-resistance of the assembly (300.21 / 805.26)."
  },
  {
    id: 9,
    stem: "Abandoned communications cable in plenums/risers should be:",
    choices: [
      { key: "A", text: "Left for future use without identification" },
      { key: "B", text: "Spray-painted a different color" },
      { key: "C", text: "Removed unless identified for future use" },
      { key: "D", text: "Bundled tighter for space savings" }
    ],
    answer: "C",
    why: "Remove abandoned cable; excessive fuel load is a violation."
  },
  {
    id: 10,
    stem: "Antenna mast bonding should be routed:",
    choices: [
      { key: "A", text: "In long loops to allow slack" },
      { key: "B", text: "Short and straight to the GES" },
      { key: "C", text: "Only to nearby cold water pipe" },
      { key: "D", text: "Not required for coax systems" }
    ],
    answer: "B",
    why: "Short, straight bonds reduce surge impedance (810)."
  },
  {
    id: 11,
    stem: "CATV (Art. 820) shields at the building entrance must be:",
    choices: [
      { key: "A", text: "Isolated from the building ground" },
      { key: "B", text: "Bonded to the building grounding electrode system" },
      { key: "C", text: "Connected only to a receptacle’s equipment ground" },
      { key: "D", text: "Left floating for noise reduction" }
    ],
    answer: "B",
    why: "Bond shields via a listed grounding block to the GES."
  },
  {
    id: 12,
    stem: "Network-powered broadband/PoE cabling must be:",
    choices: [
      { key: "A", text: "Any CM cable; power is low" },
      { key: "B", text: "Listed for the power + data function used" },
      { key: "C", text: "Run with power to save pathway costs" },
      { key: "D", text: "Left unprotected at building entry" }
    ],
    answer: "B",
    why: "Use cabling listed for remote powering; separation and entry rules still apply (830/840)."
  },
  {
    id: 13,
    stem: "Combining power and communications in the same box requires:",
    choices: [
      { key: "A", text: "Different colored yokes" },
      { key: "B", text: "A listed partition/barrier or separate enclosures" },
      { key: "C", text: "Metal box only" },
      { key: "D", text: "Nothing if < 50V" }
    ],
    answer: "B",
    why: "Use a listed barrier/partition or keep devices separate."
  },
  {
    id: 14,
    stem: "Minimum separation goal for parallel open runs (typical practice):",
    choices: [
      { key: "A", text: "None — LV is exempt" },
      { key: "B", text: "About 6 inches unless using a listed barrier/assembly" },
      { key: "C", text: "3 feet in all cases" },
      { key: "D", text: "Only when voltage exceeds 120V" }
    ],
    answer: "B",
    why: "Typical field practice aligns with article separation concepts; barriers/assemblies can allow closer proximity."
  },
  {
    id: 15,
    stem: "Good documentation practice for comms cabling includes:",
    choices: [
      { key: "A", text: "No labels to reduce clutter" },
      { key: "B", text: "Labeling pathways/cables and keeping as-builts for AHJ/owner" },
      { key: "C", text: "Only device labeling, not backbones" },
      { key: "D", text: "Verbal descriptions at turnover" }
    ],
    answer: "B",
    why: "Labeling and records speed maintenance and inspections and help verify ‘future use’ vs abandoned."
  }
];
export default quiz;
TS