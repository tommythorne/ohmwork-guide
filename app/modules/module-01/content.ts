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

  // ARTICLES — 10 total; each has solid points, TWO images, and a special block.
  articles: [
    // 1) Article 90 — Purpose & Scope (EXAM TRAP)
    {
      title: "Article 90 — Purpose & Scope",
      points: [
        {
          ref: "90.1(A)",
          text:
            "The NEC’s purpose is *practical safeguarding* of persons and property from electrical hazards. It is not a zero-risk guarantee; misuse or poor maintenance can still make an installation unsafe."
        },
        {
          ref: "90.3",
          text:
            "Arrangement: Chapters 1–4 apply generally; 5, 6, 7 modify/supplement for special occupancies, equipment, or conditions; 8 is independent (communications); 9 contains tables."
        },
        {
          ref: "90.5",
          text:
            "**Shall** = mandatory; **May** = permissive; **Should** = advisory. Informational Notes are *not enforceable*—exams love to bait you here."
        },
        {
          ref: "90.7",
          text:
            "Listed/labeled products are presumed safe, but must still be *installed and used* per their listing and instructions."
        }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — PRACTICAL SAFEGUARDING",
        body:
          "If a choice hints the NEC guarantees **absolute safety**, it’s wrong. The phrase is **practical safeguarding** (90.1(A)). Also, **Informational Notes are not enforceable**—don’t let the exam turn a note into a rule."
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

    // 2) Article 100 — Definitions
    {
      title: "Article 100 — Definitions You’ll Fight On",
      points: [
        {
          ref: "Branch Circuit",
          text:
            "Conductors between the **final OCPD** protecting the circuit and the **outlets**. If you’re upstream of the last OCPD, you’re not on a branch circuit."
        },
        {
          ref: "Feeder",
          text:
            "All circuit conductors between the service equipment (or power source) and the final branch-circuit OCPDs. The last OCPD is the boundary."
        },
        {
          ref: "Readily Accessible",
          text:
            "Reachable quickly without tools, ladders, or moving obstacles. If you need a screwdriver or must move a refrigerator, it isn’t readily accessible."
        },
        {
          ref: "Identified / Listed / Labeled",
          text:
            "Identified = suitable for a specific purpose (often by listing/labeling). Listed = evaluated by an NRTL. Labeled = marked with the NRTL symbol and info."
        },
        {
          ref: "Grounded vs Equipment Grounding Conductor",
          text:
            "The **grounded (neutral) conductor** carries current in normal operation; the **equipment grounding conductor (EGC)** carries fault current and bonds metal parts."
        }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — BRANCH STARTS AFTER THE FINAL OCPD",
        body:
          "Stuck on feeder vs branch? Default to this: **the branch starts after the final OCPD**. Everything upstream is feeder. That single line solves many layout and article-selection questions."
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

    // 3) 110.3(B) — Listing, Labeling, Instructions
    {
      title: "110.3(B) — Listing, Labeling, and Instructions",
      points: [
        {
          ref: "Use Per Listing",
          text:
            "Install and use equipment **in accordance with** instructions included in the listing/labeling: orientation, clearances, ambient limits, torque, accessories."
        },
        {
          ref: "AHJ",
          text:
            "The Authority Having Jurisdiction enforces the Code and listing use. If the label says use **kit X only**, that’s what passes."
        },
        {
          ref: "Field Labeling",
          text:
            "When a product or arrangement isn’t listed for the application, a **field evaluation** and field label may be required."
        },
        {
          ref: "Label Wins",
          text:
            "When Code allows options, the **manufacturer’s instructions** can be more restrictive. The label wins on the job and on the exam."
        }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — FOLLOW THE LABEL",
        body:
          "110.3(B) is a top-5 exam anchor. If a label gives a torque, that’s your torque. If the manual requires a specific accessory or orientation, that’s the rule."
      },
      images: [
        {
          src: "/images/module-01/m01-110-03b-01.jpg",
          alt: "Product label with torque, ambient, and kit limitations",
          caption: "If the label lists a torque and kit pairing, follow both."
        },
        {
          src: "/images/module-01/m01-110-03b-02.jpg",
          alt: "AHJ inspection sticker on an electrical panel",
          caption: "AHJ signs off when it’s installed per listing/labeling."
        }
      ]
    },

    // 4) 110.14 — Terminations, Temperature Ratings, and Torque (TABLE)
    {
      title: "110.14 — Terminations, Temperature Ratings, and Torque",
      points: [
        {
          ref: "Temp Rating",
          text:
            "Conductor ampacity is limited by the **lowest** temperature rating of any termination in the circuit."
        },
        {
          ref: "Cu vs Al",
          text:
            "Use terminals identified for AL/CU when landing aluminum. Anti-oxidant is often required by the manufacturer and AHJ expectations."
        },
        {
          ref: "Torque Tools",
          text:
            "Terminals must be tightened to the **manufacturer’s specified torque** (110.14(D)). Use a calibrated torque tool."
        },
        {
          ref: "Re-Torque",
          text:
            "Many listings require re-torque after a short load cycle. Check the paperwork."
        }
      ],
      block: {
        type: "table",
        title: "TABLE — EXAMPLES OF COMMON TERMINATION TORQUES (ALWAYS VERIFY LABEL)",
        table: [
          ["Item", "Conductor / Range", "Typical Torque (in-lb)"],
          ["Breaker terminal", "15–20A Cu", "25"],
          ["Mechanical lug", "#2–#6 Cu", "45–50"],
          ["Main lugs", "2/0–4/0 Cu", "180–250"]
        ],
        body: "Examples only. Inspectors expect the **exact** value from the product label or instructions."
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
            "3 ft (Condition 1) up to 4 ft (Condition 3). Measured from live parts/enclosure to the opposing surface."
        },
        {
          ref: "Width & Height",
          text:
            "Width: 30 in. or equipment width, whichever is greater. Height: floor to 6-1/2 ft. Doors must open at least 90°."
        },
        {
          ref: "Dedicated Space",
          text:
            "Above equipment to the structural ceiling must be kept clear of unrelated systems; suspended ceilings count as structural for this rule."
        },
        {
          ref: "Egress",
          text:
            "≥1200A and >6 ft wide often requires **two** egress paths from the working space unless exception applies."
        }
      ],
      block: {
        type: "chart",
        title: "CHART — 110.26 WORKING-SPACE DEPTH (INCHES)",
        chart: [
          { label: "Condition 1 — Exposed live parts on one side", value: 36 },
          { label: "Condition 2 — Exposed live parts / grounded surface opposite", value: 42 },
          { label: "Condition 3 — Exposed live parts on both sides", value: 48 }
        ],
        body: "These are **minimum** clearances in front of electrical equipment (110.26). Know which condition applies."
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

    // 6) 110 — Guarding of Live Parts (EXAM)
    {
      title: "110 — Guarding of Live Parts",
      points: [
        {
          ref: "Guarding ≥50V",
          text:
            "Live parts operating at 50V or more must be guarded by enclosures/covers, by location (height), or by placement in a locked room."
        },
        {
          ref: "Entrances",
          text:
            "Rooms with exposed live parts: doors swing **outward** and require **panic hardware** when equipment is ≥1200A and more than 6 ft wide."
        },
        {
          ref: "Work Practices",
          text:
            "Barricade temporary exposures during maintenance; restore guards before leaving the work area."
        }
      ],
      block: {
        type: "exam",
        title: "EXAM TRAP — 50V IS THE LINE",
        body:
          "Guarding kicks in at **50V** and up. Big-gear rooms (≥1200A and >6 ft wide) need outward-swing doors with **panic hardware**—common miss on exams."
      },
      images: [
        {
          src: "/images/module-01/m01-guard-01.jpg",
          alt: "Barrier guarding around open conductors",
          caption: "Guarding prevents accidental contact with energized parts."
        },
        {
          src: "/images/module-01/m01-guard-02.jpg",
          alt: "Electrical room door with panic bar",
          caption: "Large gear rooms require outward-swinging, panic-hardware doors."
        }
      ]
    },

    // 7) 110 — Identification & Field Marking (RULE)
    {
      title: "110 — Identification & Field Marking",
      points: [
        {
          ref: "110.21(B)",
          text:
            "Field-applied hazard markings must be **durable** and warn of the hazard (e.g., arc-flash). They must remain legible for the environment."
        },
        {
          ref: "110.22(A)",
          text:
            "Each disconnecting means must be **legibly marked** to indicate its purpose unless the purpose is obvious by location/arrangement."
        },
        {
          ref: "Durability",
          text:
            "Use UV/chemical-resistant labels in hot, wet, or oily spaces; paper labels won’t last."
        }
      ],
      block: {
        type: "rule",
        title: "RULE OF THUMB — LABELS THAT SURVIVE",
        body:
          "Place labels where techs can read them **with doors closed**. Use materials that survive the environment. If it peels or fades, expect a red tag."
      },
      images: [
        {
          src: "/images/module-01/m01-mark-01.jpg",
          alt: "Arc-flash and shock warning labels on gear",
          caption: "Field-applied labels must be durable and legible."
        },
        {
          src: "/images/module-01/m01-mark-02.jpg",
          alt: "Clearly marked disconnect switch",
          caption: "Disconnects must indicate their purpose."
        }
      ]
    },

    // 8) 110 — Illumination & Egress (CODE)
    {
      title: "110 — Illumination & Egress",
      points: [
        {
          ref: "110.26(E)",
          text:
            "Working spaces must have **fixed** lighting; don’t rely on portable lights for service/inspection."
        },
        {
          ref: "110.26(C)",
          text:
            "For equipment rated ≥1200A and over 6 ft wide, provide **two** means of egress from the working space unless an exception applies."
        },
        {
          ref: "Access",
          text:
            "Doors used for egress must be usable when equipment doors are open; avoid blocking clear egress with equipment doors."
        }
      ],
      block: {
        type: "code",
        title: "NEC REFERENCE — LIGHTING & EGRESS",
        body:
          "Fixed lighting in working spaces is required. Know the **two-egress** triggers and exceptions so you can spot compliant layouts on drawings."
      },
      images: [
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

    // 9) 110 — Equipment Labeling & SCCR (TABLE)
    {
      title: "110 — Equipment Labeling & SCCR",
      points: [
        {
          ref: "Available Fault Current",
          text:
            "Service equipment must be marked with available fault current where required, and equipment SCCR must be **adequate** for the system’s available fault current."
        },
        {
          ref: "Updates",
          text:
            "If available fault current changes (utility upgrade), labels and studies must be updated."
        },
        {
          ref: "Coordination",
          text:
            "Obtain fault current data from the utility or use an engineered study; don’t guess from nameplate kVA alone."
        }
      ],
      block: 
{
  type: "table",
  title: "SCCR & Fault-Current Labels — What They Mean",
  table: [
    ["Label", "What it shows", "Trigger / Notes"],
    ["Available Fault Current", "Calculated fault current at service or equipment location", "Required where specified; update if utility/system changes"],
    ["SCCR (Short-Circuit Current Rating)", "Max fault current the equipment assembly can safely withstand", "Must be ≥ available fault current at installation point"],
    ["Date/Method", "Basis of available fault-current calc or study", "Good practice to include; some AHJs expect it"],
    ["Contact for Updates", "Who to call when service changes", "Keeps labels current after utility work or renovations"]
  ],
  body: "SCCR of the equipment must be **greater than or equal to** the available fault current. If the utility increases capacity, re-check the calc and update labels."
}
,
      images: [
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
            "Storage, piping, or door swings often **violate** required working space. Plan the room so clearances exist on day one and remain usable."
        },
        {
          ref: "Be Proactive",
          text:
            "Coordinate early with mechanical, plumbing, and IT. Dedicated space and drip pans above gear are frequent friction points."
        },
        {
          ref: "Protect the Space",
          text:
            "Mark floors/walls early; add signage and barrier rails where traffic tends to encroach."
        }
      ],
      block: {
        type: "horror",
        title: "JOBSITE HORROR STORY — DEDICATED SPACE LOST",
        body:
          "A copper line was routed across a new switchboard after rough-in. Result: drain, reroute, re-inspect, re-schedule—thousands burned. **Lock in dedicated space** on the drawings, tag ceilings early, and walk the room with mechanical before they hang pipe."
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
