/* Module 8 — Communications (NEC Chapter 8) */
const content = {
  hero: {
    imageSrc: "/images/module-08/m08-01.jpg",
    imageAlt: "Structured cabling, telecom, CATV, and broadband systems",
    title: "Chapter 8 — Communications Systems",
    subtitle:
      "Structured cabling, CATV, radio/TV, and broadband. Learn ratings, separation, support, and grounding that keep low-voltage safe and compliant."
  },

  // NAV
  prev: { href: "/modules/module-07", label: "Chapter 7" },
  next: { href: "/modules/module-09", label: "Chapter 9" },

  // ARTICLES — 10 total
  articles: [
    /* 1) Scope & Framework */
    {
      title: "800 — Scope & Framework (Modern Article Family)",
      points: [
        { ref: "800.1", text: "Chapter 8 governs communications systems (telecom/data/CATV/broadband) and can be independent of Chapters 1–7 unless they modify it." },
        { ref: "800.3", text: "Follow manufacturer listings and markings; cable type must match the space (plenum, riser, general, dwelling)." },
        { ref: "800.24", text: "Mechanical execution of work applies: neat, secure, protected from damage." },
        { ref: "90.3", text: "Remember: Ch. 8 is largely independent, but other chapters can still modify requirements where noted." }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — CH. 8 INDEPENDENCE",
        body: "Don’t assume Chapter 3 wiring methods always apply. Chapter 8 stands alone unless another rule explicitly modifies it."
      },
      images: [
        { src: "/images/module-08/m08-02.jpg", alt: "Structured cabling room", caption: "Communications systems have their own article family." },
        { src: "/images/module-08/m08-03.jpg", alt: "Cable listings close-up", caption: "Install per listing and space rating." }
      ]
    },

    /* 2) Cable Ratings */
    {
      title: "805 — Cable Ratings (CMP, CMR, CM, CMX)",
      points: [
        { ref: "805.179", text: "Use **CMP** in air plenums, **CMR** in vertical risers, **CM/CMG** in general purpose, and **CMX** where specifically permitted." },
        { ref: "300.22(C)", text: "Plenum spaces require low-smoke/low-flame cables (CMP) or listed plenum raceways." },
        { ref: "Listing", text: "Use marked cable types or listed raceway/assembly evaluated for the space." },
        { ref: "Replacement", text: "If in doubt, go one rating higher (e.g., CMP in risers)—never lower." }
      ],
      block: {
        type: "table",
        title: "Communications Cable Ratings — Quick Map",
        table: [
          ["Space", "Allowed Cable Types", "Notes"],
          ["Plenum (air-handling)", "CMP", "Lowest smoke/flame"],
          ["Riser (vertical shafts)", "CMR (or CMP)", "CMP also OK"],
          ["General areas", "CM/CMG (or higher)", "No plenums/risers"],
          ["Dwelling limited-use", "CMX (permitted cases)", "Check article limits"]
        ],
        body: "Higher ratings are acceptable in lower-risk spaces; the reverse is not."
      },
      images: [
        { src: "/images/module-08/m08-04.jpg", alt: "CMP jacket print", caption: "Verify jacket print before pulling." },
        { src: "/images/module-08/m08-05.jpg", alt: "Riser shaft", caption: "Riser-rated cable for vertical shafts." }
      ]
    },

    /* 3) Separation from Power */
    {
      title: "Separation From Power Conductors",
      points: [
        { ref: "800/805.133", text: "Keep communications cabling separated from power unless separated by a barrier or in a listed assembly." },
        { ref: "Raceway Sharing", text: "Power and communications generally cannot share a raceway unless specifically listed for it." },
        { ref: "Boxes & Cabinets", text: "Use partitions or separate enclosures when combining low-voltage with power devices." },
        { ref: "Induced Noise", text: "Separation reduces crosstalk and conducted noise—quality and safety win." }
      ],
      block: {
        type: "chart",
        title: "CHART — Separation Spacing (inches)",
        chart: [
          { label: "Open runs", value: 6 },
          { label: "Parallel in tray", value: 2 },
          { label: "Barriered", value: 1 }
        ],
        body: "Examples only. Follow the specific article text and listings."
      },
      images: [
        { src: "/images/module-08/m08-06.jpg", alt: "Separated cable paths", caption: "Parallel runs kept apart." },
        { src: "/images/module-08/m08-07.jpg", alt: "Barriered box", caption: "Partition kits allow shared device boxes." }
      ]
    },

    /* 4) Support & Cable Protection */
    {
      title: "Support, Bends, and Protection",
      points: [
        { ref: "805.24", text: "Support cables with listed means; don’t lay on ceiling tiles or use non-listed wires." },
        { ref: "Radius", text: "Respect minimum bend radius—protect performance and listing." },
        { ref: "Edges", text: "Bushings and grommets at sharp edges or metal penetrations." },
        { ref: "Physical Damage", text: "Guard exposed cabling in work areas; use raceways or sleeves as needed." }
      ],
      block: {
        type: "rule",
        title: "Protect Performance",
        body: "Good workmanship = listed supports, proper radius, and protection at edges/penetrations."
      },
      images: [
        { src: "/images/module-08/m08-08.jpg", alt: "J-hooks in ceiling", caption: "Use listed supports, not tie wire to grid." },
        { src: "/images/module-08/m08-09.jpg", alt: "Grommeted penetration", caption: "Protect jackets at metal penetrations." }
      ]
    },

    /* 5) Penetrations & Firestopping */
    {
      title: "Firestopping & Penetrations",
      points: [
        { ref: "300.21", text: "Maintain fire-resistance of assemblies—use listed firestop systems for the construction type and cable set." },
        { ref: "805.26", text: "Sleeves and raceways penetrating fire-rated barriers must be sealed with compatible firestop materials." },
        { ref: "Labeling", text: "Document system numbers and maintain as-builts for AHJ review." },
        { ref: "Re-Entry", text: "Use re-enterable systems where frequent changes are expected." }
      ],
      block: {
        type: "code",
        title: "Maintain the Rating",
        body: "Every penetration must restore the tested fire-resistance—no foam improvisations."
      },
      images: [
        { src: "/images/module-08/m08-10.jpg", alt: "Firestop around sleeve", caption: "Follow the tested system details." },
        { src: "/images/module-08/m08-11.jpg", alt: "Labelled firestop tag", caption: "Tagging helps maintenance and AHJ." }
      ]
    },

    /* 6) Bonding & Grounding */
    {
      title: "Bonding & Grounding of Communications",
      points: [
        { ref: "800.100", text: "Bond shields, racks, and metal raceways per article rules to the building grounding electrode system (GES)." },
        { ref: "Surge", text: "Use listed protectors where outside plant enters the building—bond close to the point of entrance." },
        { ref: "SDS/Coord", text: "Coordinate with power grounding to avoid ground loops and maintain effective surge paths." },
        { ref: "Racks", text: "Bond equipment racks, ladder tray, and cable sheaths." }
      ],
      block: {
        type: "table",
        title: "Entrance Protection — Checklist",
        table: [
          ["Item", "Action"],
          ["Primary protector", "Listed device at entry"],
          ["Bonding conductor", "Shortest path to GES"],
          ["Rack/Tray bonding", "Bond to telecom busbar"],
          ["Labeling", "Identify protectors and bonds"]
        ],
        body: "Reduce surge risk and noise by bonding correctly near the entrance facility."
      },
      images: [
        { src: "/images/module-08/m08-12.jpg", alt: "Telecom ground busbar", caption: "Busbar ties telecom bonds to GES." },
        { src: "/images/module-08/m08-13.jpg", alt: "Entrance protectors", caption: "Mount near point of entrance." }
      ]
    },

    /* 7) Antennas & Radio/TV (810) */
    {
      title: "810 — Radio & TV Antenna Systems",
      points: [
        { ref: "810.15", text: "Provide a discharge unit (arrester) and bond the mast to the building grounding electrode." },
        { ref: "810.21", text: "Use the correct bonding conductor size and routing; keep it straight and short." },
        { ref: "810.18", text: "Locate the antenna and lead-ins away from power conductors and lightning exposure where practical." },
        { ref: "Roof", text: "Protect lead-ins at edges/penetrations; follow listing." }
      ],
      block: {
        type: "rule",
        title: "Short & Straight Bonds",
        body: "Antenna bonding conductors should be as short, straight, and direct as possible to reduce surge impedance."
      },
      images: [
        { src: "/images/module-08/m08-14.jpg", alt: "Mast bond clamp", caption: "Bond the mast and arrester to GES." },
        { src: "/images/module-08/m08-15.jpg", alt: "Antenna entry", caption: "Protect lead-in at roof penetration." }
      ]
    },

    /* 8) CATV/Community Antenna (820) */
    {
      title: "820 — Community Antenna Television (CATV)",
      points: [
        { ref: "820.93", text: "Bond the shield at the building entrance to the GES or to the nearest accessible bonding point." },
        { ref: "820.44", text: "Maintain separations from power conductors; do not use power raceways unless specifically listed." },
        { ref: "820.100", text: "Use listed grounding blocks and protectors for outside plant." },
        { ref: "Support", text: "Support coax at proper intervals—no ad-hoc ceiling grid support." }
      ],
      block: {
        type: "code",
        title: "Shield Bonding Matters",
        body: "Unbonded shields invite surge and noise issues. Use listed grounding blocks at the entry."
      },
      images: [
        { src: "/images/module-08/m08-16.jpg", alt: "Grounding block", caption: "Bond coax to the building GES." },
        { src: "/images/module-08/m08-17.jpg", alt: "Coax routing", caption: "Maintain spacing from power." }
      ]
    },

    /* 9) Network-Powered Broadband (830/840) */
    {
      title: "830/840 — Premises & Network-Powered Broadband",
      points: [
        { ref: "830.133", text: "Cables that also power equipment must be listed for the purpose and routed with separation from power unless permitted." },
        { ref: "830.100", text: "Provide primary protection at the building entry when required." },
        { ref: "840.24", text: "Follow equipment instructions for power insertion and PoE/remote powering." },
        { ref: "Fire Ratings", text: "Space ratings still apply—CMP/CMR/CM hierarchy remains." }
      ],
      block: {
        type: "table",
        title: "Broadband Cabling — At a Glance",
        table: [
          ["Use", "Key Requirement"],
          ["Remote power", "Listed for power + data"],
          ["Entry protection", "Primary protectors as required"],
          ["Separation", "Follow article rules & barriers"],
          ["Space rating", "Match CMP/CMR/CM to space"]
        ],
        body: "When cables carry power, treat them with the same respect as power-limited circuits."
      },
      images: [
        { src: "/images/module-08/m08-18.jpg", alt: "Powered node", caption: "Remote powering requires listed cabling." },
        { src: "/images/module-08/m08-19.jpg", alt: "PoE switch", caption: "Follow equipment ratings and loading." }
      ]
    },

    /* 10) Abandoned Cable & Housekeeping */
    {
      title: "Abandoned Cable Removal & Labeling",
      points: [
        { ref: "800/805 (Abandoned)", text: "Remove abandoned communications cable not identified for future use—especially in plenums and risers." },
        { ref: "Identification", text: "Label backbone, horizontal, and device cabling; keep records for renovations." },
        { ref: "Tray/Tunnel", text: "Keep pathways clear; replace broken supports before they become hazards." },
        { ref: "Coordination", text: "Coordinate with IT/owner so ‘future use’ actually means documented and tagged." }
      ],
      block: {
        type: "horror",
        title: "Ceiling Rat’s Nest",
        body: "A renovation uncovered hundreds of feet of abandoned cable that blocked air movement and violated plenum rules—two nights of rework and tagging avoided a red tag."
      },
      images: [
        { src: "/images/module-08/m08-20.jpg", alt: "Abandoned cable pile", caption: "Remove unused cable—especially in plenums." },
        { src: "/images/module-08/m08-21.jpg", alt: "Labeled cabling", caption: "Label now, save hours later." }
      ]
    }
  ],

  // SUMMARY
  summary: {
    title: "Chapter 8 — Field Quick Hits",
    cards: [
      { iconName: "🏷️", title: "Use the Right Jacket", text: "CMP in plenums, CMR in risers, CM in general spaces." },
      { iconName: "↔️", title: "Keep Separation", text: "Use barriers or listed assemblies when you can’t." },
      { iconName: "🧯", title: "Restore Ratings", text: "Firestop every penetration per tested system." },
      { iconName: "🛡️", title: "Bond at Entry", text: "Protectors + short bond to the GES." },
      { iconName: "🗂️", title: "Support & Label", text: "Listed supports, neat routing, clear labels." },
      { iconName: "🧹", title: "Remove Abandoned", text: "Don’t leave a rat’s nest in plenums." }
    ]
  }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
