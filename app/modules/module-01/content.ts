// @ts-nocheck
import quiz from "./quiz-bridge";

const content = {
  hero: {
    title: "Chapter 1 — General (Articles 90, 100, 110)",
    subtitle: "How the NEC thinks, the words it uses, and the guardrails you get graded on.",
    imageSrc: "/images/module-01/m01-hero.jpg",
    imageAlt: "NEC Chapter 1 overview"
  },

  articles: [
    {
      title: "Article 90 — Purpose, Scope, Arrangement",
      points: [
        { ref: "90.1(A)", text: "**Practical safeguarding** — not a zero‑risk fantasy." },
        { ref: "90.3", text: "Ch.1–4 general; **Ch.5–7 modify**; **Ch.8 independent**." },
        { ref: "90.5", text: "**Shall** = mandatory, **May** = permissive." },
        { ref: "90.7", text: "Listing/labeling/testing → suitability." }
      ],
      images: [
        { src: "/images/module-01/m01-02.jpg", alt: "NEC hierarchy diagram", caption: "Special beats general." },
        { src: "/images/module-01/m01-03.jpg", alt: "Scope highlights", caption: "Know what’s in/out of scope." }
      ],
      callouts: [{ type: "warning", content: "Chapter 8 stands alone unless another rule says otherwise." }]
    },

    {
      title: "Article 100 — Definitions You’ll Fight On",
      points: [
        { ref: "Branch Circuit", text: "Final OCPD → utilization equipment." },
        { ref: "Feeder", text: "Service equipment → branch OCPDs." },
        { ref: "Readily Accessible", text: "No tools, ladders, or keys." },
        { ref: "Identified/Listed", text: "Recognized as **suitable** (NRTL)." }
      ],
      images: [
        { src: "/images/module-01/m01-04.jpg", alt: "Definitions callouts", caption: "Definitions decide ties." },
        { src: "/images/module-01/m01-05.jpg", alt: "Accessibility example", caption: "Readily ≠ reachable by ladder." }
      ],
      callouts: [{ type: "rule", content: "Memorize core Article 100 terms; they echo everywhere." }]
    },

    {
      title: "110.3(B) — Listing, Labeling, Instructions",
      points: [
        { ref: "110.3(B)", text: "Install per **listing** and **manufacturer instructions**." },
        { ref: "Label", text: "Torque, clearances, fittings — follow the sticker." },
        { ref: "AHJ", text: "Inspector enforces labels, not folklore." }
      ],
      images: [
        { src: "/images/module-01/m01-06.jpg", alt: "Equipment label", caption: "If it’s on the label, it’s law." },
        { src: "/images/module-01/m01-07.jpg", alt: "Instruction sheet", caption: "Read before wrench." }
      ],
      callouts: [{ type: "code", content: "110.3(A): equipment must be **suitable** for use." }]
    },

    {
      title: "110.12 — Neat & Workmanlike",
      points: [
        { ref: "110.12", text: "Equipment installed **neatly** and **securely**." },
        { ref: "Practice", text: "Support, protect, and finish openings." },
        { ref: "Exam", text: "Sloppy installs get red‑tagged and wrong answers." }
      ],
      images: [
        { src: "/images/module-01/m01-08.jpg", alt: "Neat panel", caption: "Neat isn’t optional." },
        { src: "/images/module-01/m01-09.jpg", alt: "Secured raceway", caption: "Support it or fail it." }
      ]
    },

    {
      title: "110.14 — Terminations & Temperature Ratings",
      points: [
        { ref: "110.14(A)", text: "Use terminals **identified** for conductor class." },
        { ref: "110.14(C)", text: "Use the **lowest temp rating** in the chain (often 60/75 °C at lugs)." },
        { ref: "Torque", text: "Calibrated torque tool — not “good‑n‑tight”." }
      ],
      images: [
        { src: "/images/module-01/m01-10.jpg", alt: "Lug torque", caption: "Loose lugs = heat." },
        { src: "/images/module-01/m01-11.jpg", alt: "Temp columns table", caption: "Don’t cheat with 90 °C if lugs are 75 °C." }
      ],
      callouts: [{ type: "warning", content: "Watch for quiet temperature column switches in questions." }]
    },

    {
      title: "110.16 — Arc‑Flash Warning",
      points: [
        { ref: "110.16", text: "Field‑applied **arc‑flash warning** where required." },
        { ref: "Durable", text: "Labels: **durable, visible**." },
        { ref: "Coordination", text: "Don’t confuse with 110.24 fault current marking." }
      ],
      images: [
        { src: "/images/module-01/m01-12.jpg", alt: "Arc‑flash label", caption: "Warn the human who opens it." },
        { src: "/images/module-01/m01-13.jpg", alt: "Field marking", caption: "Readable beats artsy." }
      ]
    },

    {
      title: "110.26 — Working Space & Access",
      points: [
        { ref: "110.26(A)(1)", text: "Depth: **3 ft** (common baseline; conditions vary)." },
        { ref: "110.26(A)(2)", text: "Width: **30 in** or equipment width, whichever is greater." },
        { ref: "110.26(A)(3)", text: "Height: **6.5 ft** headroom." },
        { ref: "110.26(E)", text: "Dedicated electrical space — keep others out." }
      ],
      images: [
        { src: "/images/module-01/m01-14.jpg", alt: "Clearance depth", caption: "Keep the 3‑ft box sacred." },
        { src: "/images/module-01/m01-15.jpg", alt: "Headroom", caption: "6.5 ft isn’t negotiable." }
      ],
      callouts: [{ type: "code", content: "Door/egress rules can apply at higher ampacity or big gear." }]
    },

    {
      title: "110.21 / 110.22 / 110.24 — Marking & Identification",
      points: [
        { ref: "110.21", text: "**Durable, legible** field markings." },
        { ref: "110.22", text: "Disconnects **identified** for circuits served." },
        { ref: "110.24", text: "**Available fault current** marked where required." }
      ],
      images: [
        { src: "/images/module-01/m01-16.jpg", alt: "Disconnect ID", caption: "No mystery handles." },
        { src: "/images/module-01/m01-17.jpg", alt: "Fault current label", caption: "Update when it changes." }
      ],
      callouts: [{ type: "warning", content: "Mislabeled disconnects are an exam booby trap." }]
    },

    {
      title: "110.27 — Guarding of Live Parts",
      points: [
        { ref: "110.27(A)", text: "Guard live parts **against accidental contact**." },
        { ref: "110.27(B)", text: "Use **enclosures**, **barriers**, or **elevation**." },
        { ref: "110.27(C)", text: "Entrances: **warning signs** & secure means." }
      ],
      images: [
        { src: "/images/module-01/m01-18.jpg", alt: "Barrier guarding", caption: "Keep hands out of hazard zones." },
        { src: "/images/module-01/m01-19.jpg", alt: "Guarded area signage", caption: "Signs aren’t decorations." }
      ]
    },

    {
      title: "110.28 — Enclosure Types & Environment",
      points: [
        { ref: "110.28", text: "Choose **NEMA type** for environment: indoor, wet, corrosive, etc." },
        { ref: "Practice", text: "Wrong enclosure = short life + failed inspection." },
        { ref: "Tip", text: "NEMA ≠ IP — don’t mix tables." }
      ],
      images: [
        { src: "/images/module-01/m01-20.jpg", alt: "NEMA enclosures", caption: "Right box, right place." },
        { src: "/images/module-01/m01-21.jpg", alt: "Outdoor enclosure", caption: "Weather happens. Plan for it." }
      ]
    }
  ],

  // Visual Examples counter comes from article images only (2 each × 10 = 20)
  prev: { href: "/intro", label: "Introduction" },
  next: { href: "/modules/module-02", label: "Chapter 2" },
  quiz
};

export default content;
