const content = {
  hero: {
    imageSrc: "/images/module-01/m01-hero.jpg",
    imageAlt: "NEC Chapter 1 fundamentals — identification, listing/labeling, working space",
    title: "Chapter 1 — General",
    subtitle:
      "Definitions, listing/labeling, terminations, and working space—the rules you’ll use on every single job.",
    blurb:
      "Articles 90, 100, and 110 form the backbone of the NEC. Master these and the rest of the Code reads easier."
  },

  // NAV
  prev: { href: "/intro", label: "Intro" },
  next: { href: "/modules/module-02", label: "Chapter 2" },

  // ARTICLES — each with detailed points + TWO STACKED IMAGES.
  // Only SOME articles include a special block; the module includes at least one of each block type overall.
  articles: [
    // 1) Article 90 — Purpose & Scope (EXAM TRAP)
    {
      title: "Article 90 — Purpose & Scope",
      points: [
        {
          ref: "90.1(A)",
          text:
            "The NEC’s purpose is *practical safeguarding* of persons and property from electrical hazards. It is not a zero‑risk guarantee; installations can still be unsafe if misused or maintained poorly."
        },
        {
          ref: "90.3",
          text:
            { ref: "Arrangement", text: "Chapters 1–4 apply generally; 5, 6, 7 modify or supplement those general rules for special occupancies, equipment, or conditions. Chapter 8 is independent (communications). Chapter 9 contains tables." }
        },
        {
          ref: "90.5",
          text:
            { ref: "Mandatory vs permissive", text: "**Shall** indicates a requirement; **May** is permissive; **Should** is advisory. Fine Print Notes/Informational Notes are *not enforceable*. Exams love this distinction." }
        },
        {
          ref: "90.7",
          text:
            { ref: "Listing and labeling", text: "Products evaluated and labeled by an NRTL are presumed to comply with safety requirements, but they must still be *installed* and *used* per their listing and instructions." }
        }
      ],
      block: {
        type: "exam",
        // title intentionally omitted to avoid double heading
        body:
          "Exam writers want you to say “absolute safety.” Don’t. The phrase is **practical safeguarding** (90.1(A)). Also watch the language traps: **shall** (mandatory) vs **may** (permissive), and remember **Informational Notes are not enforceable**. If a choice claims the NEC guarantees zero risk or makes a note enforceable, it’s bait."
      },
      images: [
        {
          src: "/images/module-01/m01-90-01.jpg",
          alt: "NEC scope diagram showing chapter relationships",
          caption: "Scope of the NEC and which chapters modify others."
        },
        {
          src: "/images/module-01/m01-90-02.jpg",
          alt: "Graphic showing the words SHALL and MAY on tags",
          caption: "‘Shall’ = mandatory. ‘May’ = permissive. Notes aren’t enforceable."
        }
      ]
    },

    // 2) Article 100 — Definitions (RULE OF THUMB)
    {
      title: "Article 100 — Definitions You’ll Fight On",
      points: [
        {
          ref: "Branch Circuit",
          text:
            "Conductors between the **final OCPD** protecting the circuit and the **outlets**. If the conductors are ahead of the last OCPD, you’re not in branch‑circuit land yet."
        },
        {
          ref: "Feeder",
          text:
            "All circuit conductors between the service equipment (or a power source) and the final branch‑circuit OCPDs. The boundary between feeder and branch is that last breaker/fuse."
        },
        {
          ref: "Readily Accessible",
          text:
            "Reachable quickly without using tools, ladders, or moving obstacles. If you need a screwdriver or push a fridge aside, it’s not readily accessible."
        },
        {
          ref: "Identified/Listed/Labeled",
          text:
            "Identified = suitable for a specific purpose (often by labeling/listing). Listed = evaluated by an NRTL. Labeled = has the NRTL mark and required info."
        }
      ],
      block: {
        type: "rule",
        body:
          "Stuck on “feeder or branch?” Default to this: **the branch starts after the final OCPD**. Everything upstream is feeder. That single line will save you on layout questions, conductor ID, and which article applies."
      },
      images: [
        {
          src: "/images/module-01/m01-100-01.jpg",
          alt: "Terminal block mapping service, feeders, and branches",
          caption: "Service → feeders → branch circuits: know where you are."
        },
        {
          src: "/images/module-01/m01-100-02.jpg",
          alt: "UL and CSA listing marks on an equipment label",
          caption: "‘Identified’ usually means listed and used per labeling and instructions."
        }
      ]
    },

    // 3) 110.3(B) — Listing, Labeling, Instructions (NEC REFERENCE)
    {
      title: "110.3(B) — Listing, Labeling, and Instructions",
      points: [
        {
          ref: "Use per Listing",
          text:
            "Listed equipment must be installed and used **in accordance with** any instructions included in the listing or labeling. That includes orientation, clearances, ambient limits, and torque values."
        },
        {
          ref: "AHJ Enforcement",
          text:
            "The Authority Having Jurisdiction enforces the Code. If the instructions say ‘use only with kit X,’ you use kit X or you don’t pass inspection."
        },
        {
          ref: "Field Labeled",
          text:
            "If something isn’t listed for the application, a qualified field evaluation with a field label can be required. Don’t assume a generic ‘UL’ on the box covers all use‑cases."
        }
      ],
      block: {
        type: "code",
        body:
          "Memorize the spine of 110.3(B): **install and use per listing or labeling instructions**. If the label says a torque value, that’s your torque. If the manual calls for a specific accessory or orientation, that’s the rule. On the job and on the exam, **the label wins**."
      },
      images: [
        {
          src: "/images/module-01/m01-110-03b-01.jpg",
          alt: "Product label with torque, ambient, and kit limitations",
          caption: "If the label lists a torque and kit pairing, you follow both."
        },
        {
          src: "/images/module-01/m01-110-03b-02.jpg",
          alt: "AHJ inspection sticker on an electrical panel",
          caption: "AHJ signs off only when the listed use and instructions are followed."
        }
      ]
    },

    // 4) 110.14 — Terminations, Temperature, Torque (DATA TABLE)
    {
      title: "110.14 — Terminations, Temperature Ratings, and Torque",
      points: [
        {
          ref: "Temperature Rating",
          text:
            "Conductor ampacity is tied to the **lowest** temperature rating of any termination in the circuit. Residential breakers are commonly 60°C terminations for smaller conductors."
        },
        {
          ref: "Copper vs Aluminum",
          text:
            "Use terminals marked for AL/CU when landing aluminum. Anti‑oxidant compound is often required by the device manufacturer and AHJ expectations."
        },
        {
          ref: "Torque",
          text:
            "Terminals must be tightened to the **manufacturer’s specified torque** (110.14(D)). Use a calibrated torque tool; ‘good and tight’ doesn’t pass."
        }
      ],
      block: {
  type: "table",
  title: "Torque Quick Sheet (Examples — always use device label)",
  table: [
    ["Connection", "Conductor", "Typical Torque (in-lb)"],
    ["15–20A breaker lugs", "Cu #14–#12", "20–30"],
    ["Breaker lugs", "Cu #10–#8", "30–45"],
    ["Mechanical lugs", "Cu #6–#2", "45–50"],
    ["Main lugs", "Cu 2/0–4/0", "180–250"]
  ],
  body: "Reference only — defer to the actual product label and instructions."
},
      images: [
        {
          src: "/images/module-01/m01-110-14-01.jpg",
          alt: "Electrician using a torque screwdriver on a breaker",
          caption: "Torque to the printed value; inspectors check this."
        },
        {
          src: "/images/module-01/m01-110-14-02.jpg",
          alt: "Closeup of termination temperature stamps 60°C/75°C",
          caption: "Use the lowest temperature rating among connected terminations."
        }
      ]
    },

    // 5) 110.26 — Working Space (CHART)
    {
      title: "110.26 — Working Space Around Electrical Equipment",
      points: [
        {
          ref: "Depth",
          text:
            { ref: "Working‑space depth depends on the condition", text: "3 ft (Condition 1) up to 4 ft (Condition 3). Measured from the live parts or enclosure to the opposing surface." }
        },
        {
          ref: "Width & Height",
          text:
            { ref: "Width", text: "30 in. or the width of the equipment, whichever is greater. Height: floor to 6‑1/2 ft. The space must permit hinged doors to open 90°." }
        },
        {
          ref: "Dedicated Space",
          text:
            { ref: "Above equipment to the structural ceiling", text: "keep it clear of piping/ducts unrelated to the electrical installation. Suspended ceilings count as structural for this rule." }
        }
      ],
      block: {
  type: "chart",
  title: "110.26 Working-Space Depth (inches)",
  chart: [
    { label: "Cond. 1", value: 36 },
    { label: "Cond. 2", value: 42 },
    { label: "Cond. 3", value: 48 }
  ],
  body: "Depth is measured from live parts/enclosure to the opposing surface. Know which condition you’re in."
},
      images: [
        {
          src: "/images/module-01/m01-110-26-01.jpg",
          alt: "Tape measure showing 36 inches clearance in front of panel",
          caption: "Minimum 3 ft depth for many indoor panels (Condition 1)."
        },
        {
          src: "/images/module-01/m01-110-26-02.jpg",
          alt: "Overhead view of dedicated space kept clear above gear",
          caption: "Dedicated space above gear stays free of unrelated systems."
        }
      ]
    },

    // 6) 110 — Guarding of Live Parts
    {
      title: "110 — Guarding of Live Parts",
      points: [
        {
          ref: "Guarding",
          text:
            "Live parts operating at 50V or more must be guarded against accidental contact by use of enclosures, barriers, or by location (elevated or in a locked room)."
        },
        {
          ref: "Entrances",
          text:
            "Where electrical equipment rooms contain exposed live parts, doors must swing out and have panic hardware if the equipment is over 1200A and more than 6 ft wide."
        }
      ], block: {
  "type": "exam",
  "title": "EXAM TRAP — 50V is the line",
  "body": "Guarding kicks in at **50V** and up. Acceptable guarding = enclosures/covers, location (height), or rooms under lock. Big-gear rooms (≥1200A and >6 ft wide) need outward-swing doors with panic hardware—don’t miss that combo on tests."
}, images: [
        {
          src: "/images/module-01/m01-guard-01.jpg",
          alt: "Barrier guarding around open conductors",
          caption: "Guarding prevents accidental contact with energized parts."
        },
        {
          src: "/images/module-01/m01-guard-02.jpg",
          alt: "Electrical room door with panic bar",
          caption: "Large gear rooms require outward‑swinging, panic‑hardware doors."
        }
      ]
    },

    // 7) 110 — Identification & Field Marking (ties to 110.21/110.22)
    {
      title: "110 — Identification & Field Marking",
      points: [
        {
          ref: "110.21(B)",
          text:
            "Field‑applied hazard markings must be durable and warn of the hazard (e.g., arc‑flash). Markings must remain legible for the environment."
        },
        {
          ref: "110.22(A)",
          text:
            "Each disconnecting means must be legibly **marked to indicate its purpose** unless located and arranged so the purpose is obvious."
        }
      ], block: {
  "type": "rule",
  "title": "RULE OF THUMB — Labels that survive",
  "body": "If the space is hot, wet, or oily, paper labels won’t last. Use UV/chemical‑resistant markers and place them where techs can see them **with doors closed**. If it peels or fades, expect red tags."
}, images: [
        {
          src: "/images/module-01/m01-mark-01.jpg",
          alt: "Arc-flash and shock warning labels on gear",
          caption: "Field‑applied labels must be durable and legible."
        },
        {
          src: "/images/module-01/m01-mark-02.jpg",
          alt: "Clearly marked disconnect switch",
          caption: "Disconnects must indicate their purpose."
        }
      ]
    },

    // 8) 110 — Working Space Illumination & Doors (ties into 110.26(E), (C))
    {
      title: "110 — Illumination & Egress",
      points: [
        {
          ref: "Illumination",
          text:
            "Working spaces must have illumination. Don’t rely on portable lighting; a fixed lighting source must be present for service/inspection."
        },
        {
          ref: "Egress",
          text:
            "For equipment rated 1200A or more and over 6 ft wide, provide **two** means of egress from the working space unless an exception applies."
        }
      ], block: {
  "type": "code",
  "title": "NEC REFERENCE",
  "body": "110.26(E) requires **fixed** lighting in working spaces—portables don’t count. 110.26(C) drives **two egress paths** for equipment ≥1200A and over 6 ft wide unless an exception applies. Know when the exception saves you."
}, images: [
        {
          src: "/images/module-01/m01-light-01.jpg",
          alt: "Ceiling lights over electrical gear",
          caption: "Fixed lighting is required for safe work."
        },
        {
          src: "/images/module-01/m01-egress-01.jpg",
          alt: "Two separate egress paths from an electrical room",
          caption: "Large installations often require two exits."
        }
      ]
    },

    // 9) 110 — Equipment Labeling & SCCR
    {
      title: "110 — Equipment Labeling & SCCR",
      points: [
        {
          ref: "Available Fault Current",
          text:
            "Service equipment must be marked with available fault current where required, and equipment SCCR must be adequate for the system’s available fault current."
        },
        {
          ref: "Coordination with Utility",
          text:
            "Obtain fault current data from the utility or use an engineered study. Labels should be updated if available fault current changes."
        }
      ], block: {
  "type": "table",
  "title": "SCCR Quick Checks",
  "body": "1) Get available fault current (from utility or study). 2) Verify **equipment SCCR ≥ AFC**. 3) Series‑rating only if documented/listed for the exact combo. 4) **Update labels** if service or utility changes bump fault current."
}, images: [
        {
          src: "/images/module-01/m01-sccr-01.jpg",
          alt: "Label showing available fault current",
          caption: "Fault current labels keep maintenance safe and compliant."
        },
        {
          src: "/images/module-01/m01-sccr-02.jpg",
          alt: "MCC with SCCR nameplate",
          caption: "Verify SCCR ≥ available fault current at the equipment."
        }
      ]
    },

    // 10) 110.26 — Clearance Violations (JOBSITE HORROR STORY)
    {
      title: "110.26 — Clearance Violations in the Wild",
      points: [
        {
          ref: "Common Miss",
          text:
            "Obstructions like storage, piping, or door swings often violate required working space. Plan the room so the clearances exist on day one and remain usable."
        },
        {
          ref: "Be Proactive",
          text:
            { ref: "Coordinate with other trades early", text: "mechanical, plumbing, IT. Dedicated space and drip pans above gear are constant friction points." }
        }
      ],
      block: {
        type: "horror",
        body:
          "We lost a final over a copper line routed across a new switchboard—installed after rough‑in. Result: drain, reroute, re‑inspect, re‑schedule. Thousands burned. **Lock in dedicated space** on the drawings, tag the ceiling early, and walk the room with mechanical before they hang pipe."
      },
      images: [
        {
          src: "/images/module-01/m01-violation-01.jpg",
          alt: "Stored materials blocking the panel working space",
          caption: "Storage in the working space = violation and fail."
        },
        {
          src: "/images/module-01/m01-violation-02.jpg",
          alt: "Piping directly over switchboard",
          caption: "Unrelated piping above gear violates dedicated space rules."
        }
      ]
    }
  ]
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;