// @ts-nocheck
import quiz from "./quiz-bridge";

const content = {
  hero: {
    title: "Chapter 1 — General (Articles 90, 100, 110)",
    subtitle: "How the NEC thinks, the words it weaponizes, and the guardrails you get graded on.",
    imageSrc: "/images/module-01/m01-01.jpg",
    imageAlt: "NEC Chapter 1 — general requirements"
  },

  articles: [
    {
      title: "Article 90 — Purpose, Scope, and Arrangement",
      points: [
        { ref: "90.1(A)", text: "**Practical safeguarding** of persons and property — not a zero‑risk fantasy." },
        { ref: "90.1(B)", text: "NEC is **not** a design manual or a spec book; it’s the **minimum** safety floor." },
        { ref: "90.3", text: "Hierarchy: **Ch.1–4 general**, **Ch.5–7 modify**, **Ch.8 independent unless modified**." },
        { ref: "90.5", text: "**Shall** = mandatory, **May** = permissive. The test loves this." },
        { ref: "90.7", text: "Suitability via **listing/labeling/testing** (NRTLs like UL/ETL)." }
      ],
      images: [
        { src: "/images/module-01/m01-02.jpg", alt: "NEC hierarchy visual", caption: "Special beats general. Chapter 8 runs solo unless told otherwise." }
      ],
      callouts: [
        { type: "warning", content: "If 5–7 conflict with 1–4, 5–7 win for that special case." },
        { type: "code", content: "Informational Notes guide you; **not enforceable**." }
      ]
    },

    {
      title: "Article 100 — Definitions That Decide Points",
      points: [
        { ref: "Branch Circuit", text: "Final OCPD → outlets of **utilization equipment**." },
        { ref: "Feeder", text: "From service equipment to **branch‑circuit OCPDs** (not to the load)." },
        { ref: "Readily Accessible", text: "Reachable **without** tools, ladders, or keys." },
        { ref: "Identified / Listed", text: "Recognized as **suitable** for a purpose, often via NRTL listing." },
        { ref: "Grounded vs. EGC", text: "Grounded conductor ≠ equipment grounding conductor. Mix these up, the exam smiles." }
      ],
      images: [
        { src: "/images/module-01/m01-03.jpg", alt: "Definitions diagram", caption: "When two answers look right, the **definition** breaks the tie." }
      ],
      callouts: [
        { type: "warning", content: "Don’t call the neutral an EGC. Different jobs, different rules." },
        { type: "rule", content: "Memorize the core Article 100 terms; they echo through every chapter." }
      ]
    },

    {
      title: "110.3(B) — Listing, Labeling, Instructions",
      points: [
        { ref: "110.3(B)", text: "Install per **listing** and **manufacturer’s instructions** — label rules are enforceable." },
        { ref: "Practice", text: "If the label says torque to 45 in‑lb, you **torque to 45 in‑lb**." },
        { ref: "AHJ", text: "Inspector looks for label compliance, not folklore." },
        { ref: "Exam", text: "When field habit vs. label conflict: **label wins**." }
      ],
      images: [
        { src: "/images/module-01/m01-04.jpg", alt: "Equipment label close‑up", caption: "Labels aren’t suggestions. They’re Code by proxy." }
      ],
      callouts: [
        { type: "code", content: "110.3(A) also requires equipment to be **suitable** for the environment and use." },
        { type: "rule", content: "If you can’t defend it with the label, you can’t defend it to the AHJ." }
      ]
    },

    {
      title: "110.14 — Terminations & Temperature Ratings",
      points: [
        { ref: "110.14(A)", text: "Use terminals **identified** for the conductor class (stranded/fine‑strand issues are a trap)." },
        { ref: "110.14(C)", text: "Select ampacity using the **lowest temp rating in the chain** (often 60°C or 75°C at terminations)." },
        { ref: "Torque", text: "Use a calibrated torque tool; loose = heat = failure = red tag." },
        { ref: "Exam Tip", text: "Don’t size ampacity off 90°C if the termination is only 75°C." }
      ],
      images: [
        { src: "/images/module-01/m01-05.jpg", alt: "Termination torque", caption: "Loose lugs cook gear and scores. Torque it right." }
      ],
      callouts: [
        { type: "warning", content: "Watch for questions that quietly switch you to a lower temp column." },
        { type: "code", content: "Conductor ampacity ultimately limited by **termination temperature rating**." }
      ]
    },

    {
      title: "110.26 — Working Space & Access",
      points: [
        { ref: "110.26(A)(1)", text: "Depth: **3 ft** (min) in front of equipment (conditions matter, but 3 ft is the common baseline)." },
        { ref: "110.26(A)(2)", text: "Width: **equipment width** or **30 in**, whichever is greater." },
        { ref: "110.26(A)(3)", text: "Height: **6.5 ft** (min) clear working headroom." },
        { ref: "110.26(E)", text: "Dedicated equipment space — keep other systems out of the electrical space." }
      ],
      images: [
        { src: "/images/module-01/m01-06.jpg", alt: "Clear working space", caption: "No storage, no plumbing circus over panels." }
      ],
      callouts: [
        { type: "code", content: "Door and egress rules may kick in at higher ratings or larger equipment — read the small print." },
        { type: "rule", content: "If you wouldn’t want to work on it there, the NEC probably doesn’t either." }
      ]
    },

    {
      title: "110.21 / 110.22 / 110.24 — Markings & Fault Current",
      points: [
        { ref: "110.21", text: "Field‑applied markings: **durable and legible**." },
        { ref: "110.22", text: "Disconnects **identified** for the circuits served (no mystery handles)." },
        { ref: "110.24", text: "Where required, **available fault current** must be field‑marked." },
        { ref: "Practice", text: "Bad labels → bad day. The AHJ needs clarity fast." }
      ],
      images: [
        { src: "/images/module-01/m01-07.jpg", alt: "Field marking examples", caption: "If you can’t read it, it doesn’t count." }
      ],
      callouts: [
        { type: "warning", content: "Mislabeled disconnects are a favorite exam trap — look for identification language." },
        { type: "code", content: "Keep markings updated when system characteristics change." }
      ]
    }
  ],

  prev: { href: "/intro", label: "Introduction" },
  next: { href: "/modules/module-02", label: "Chapter 2" },
  quiz
};

export default content;
