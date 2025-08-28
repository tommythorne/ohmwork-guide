// Quiz — Chapter 8 (Communications)
const quiz = [
  { id: 1,
    stem: "Chapter 8 rules are...",
    choices: [
      { key: "A", text: "Always overridden by Chapter 3" },
      { key: "B", text: "Independent unless modified by other chapters" },
      { key: "C", text: "Only advisory" },
      { key: "D", text: "For utility systems only" }
    ],
    answer: "B",
    why: "Ch. 8 stands on its own unless other chapters explicitly modify it."
  },
  { id: 2,
    stem: "Which cable is permitted in plenums (air-handling spaces)?",
    choices: [
      { key: "A", text: "CM" },
      { key: "B", text: "CMR" },
      { key: "C", text: "CMP" },
      { key: "D", text: "CMX" }
    ],
    answer: "C",
    why: "CMP is the plenum-rated low-smoke/low-flame jacket."
  },
  { id: 3,
    stem: "Riser shafts require which rating at minimum?",
    choices: [
      { key: "A", text: "CMX" },
      { key: "B", text: "CM" },
      { key: "C", text: "CMR" },
      { key: "D", text: "Only metal raceway" }
    ],
    answer: "C",
    why: "Use CMR (or higher CMP)."
  },
  { id: 4,
    stem: "Shared raceways with power conductors are...",
    choices: [
      { key: "A", text: "Generally prohibited unless listed for it" },
      { key: "B", text: "Always allowed" },
      { key: "C", text: "Allowed if separate colors are used" },
      { key: "D", text: "Allowed if voltage < 50V" }
    ],
    answer: "A",
    why: "Need a listed assembly/barrier for sharing with power."
  },
  { id: 5,
    stem: "At building entry, outside-plant communications cables typically require:",
    choices: [
      { key: "A", text: "Nothing, low voltage is harmless" },
      { key: "B", text: "Primary protection and bonding to the GES" },
      { key: "C", text: "Only labeling" },
      { key: "D", text: "Plastic bushings" }
    ],
    answer: "B",
    why: "Install listed protectors and bond close to the entry."
  },
  { id: 6,
    stem: "Abandoned communications cable in plenum spaces must be:",
    choices: [
      { key: "A", text: "Left in place" },
      { key: "B", text: "Removed unless identified for future use" },
      { key: "C", text: "Spray-painted for identification" },
      { key: "D", text: "Clipped to grid wires" }
    ],
    answer: "B",
    why: "Remove abandoned cable; it adds fuel load and violates plenum rules."
  },
  { id: 7,
    stem: "Fire-rated penetrations for low-voltage require:",
    choices: [
      { key: "A", text: "Any foam or caulk" },
      { key: "B", text: "Listed firestop system appropriate to the assembly" },
      { key: "C", text: "Duct tape" },
      { key: "D", text: "Nothing if cable is CMP" }
    ],
    answer: "B",
    why: "Maintain the tested fire-resistance with the correct system."
  },
  { id: 8,
    stem: "The correct hierarchy when unsure of jacket rating is to:",
    choices: [
      { key: "A", text: "Use the lowest rating available" },
      { key: "B", text: "Use CMX anywhere" },
      { key: "C", text: "Select a higher rating (e.g., CMP in a riser)" },
      { key: "D", text: "Ask AHJ to decide on site" }
    ],
    answer: "C",
    why: "Higher ratings are acceptable in lower-risk spaces; never step down."
  },
  { id: 9,
    stem: "Antenna mast bonding should be:",
    choices: [
      { key: "A", text: "Long and looped for slack" },
      { key: "B", text: "Short, straight, and direct to the GES" },
      { key: "C", text: "Only to cold water pipe" },
      { key: "D", text: "Omitted if using coax" }
    ],
    answer: "B",
    why: "Short, straight bonds reduce surge impedance."
  },
  { id: 10,
    stem: "Communications cables may rest on ceiling tiles when:",
    choices: [
      { key: "A", text: "Tiles feel sturdy enough" },
      { key: "B", text: "They are supported by listed means, not tiles" },
      { key: "C", text: "They are CM or better" },
      { key: "D", text: "They are inside a plenum" }
    ],
    answer: "B",
    why: "Use listed supports (J-hooks, tray, etc.)."
  }
];
export default quiz;
