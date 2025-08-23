// @ts-nocheck
const content = {
  hero: {
    imageSrc: "/images/module-01/m01-hero.jpg",
    imageAlt: "NEC Chapter 1 — General principles",
    title: "Chapter 1 — General: Purpose, Definitions, and General Requirements",
    subtitle: "Read the Code like an inspector with a grudge.",
    blurb: "Article 90 intent, Article 100 definitions, Article 110 install basics."
  },
  articles: [
    { id:"art-90", iconName:"BookOpen", title:"Article 90 — Purpose & Scope",
      points:[
        {ref:"90.1(A)", text:"**Practicable safeguarding**, not zero risk."},
        {ref:"90.2", text:"Scope—what’s covered / not covered."},
        {ref:"90.5", text:"**Shall** = mandatory; notes are not enforceable."},
        {ref:"90.7", text:"Listed equipment → install per **110.3(B)**."}
      ],
      images:[
        {src:"/images/module-01/m01-01.jpg", alt:"Article 90", caption:"Intent & scope"},
        {src:"/images/module-01/m01-02.jpg", alt:"Language", caption:"Shall vs Should"}
      ]
    },
    { id:"art-100", iconName:"CircuitBoard", title:"Article 100 — Definitions",
      points:[
        {ref:"Readily Accessible", text:"No tools, no ladders, no obstacles."},
        {ref:"Accessible", text:"Reachable without damage; tools allowed."},
        {ref:"Feeder vs Branch", text:"Branch boundary = **final OCPD**."},
        {ref:"EGC", text:"Sized by **250.122** (OCPD rating)."}
      ],
      images:[
        {src:"/images/module-01/m01-03.jpg", alt:"Access", caption:"Definitions that bite on exams"},
        {src:"/images/module-01/m01-04.jpg", alt:"Conductors", caption:"Service/feeder/branch map"}
      ]
    },
    { id:"art-110-core", iconName:"ShieldCheck", title:"Article 110 — General Requirements",
      points:[
        {ref:"110.3(B)", text:"Follow **listing/label/instructions**."},
        {ref:"110.12", text:"Workmanlike—no spaghetti."},
        {ref:"110.9/110.10", text:"Interrupting rating & SCCR coordination."},
        {ref:"110.21/110.22", text:"Marking and circuit ID that makes sense."},
        {ref:"110.24", text:"Mark **available fault current**."}
      ],
      images:[
        {src:"/images/module-01/m01-05.jpg", alt:"Labels", caption:"Follow the label or fail"},
        {src:"/images/module-01/m01-06.jpg", alt:"Marking", caption:"Clear, durable, useful"}
      ]
    },
    { id:"art-110-14", iconName:"Cable", title:"110.14 — Terminations & Temperature Ratings",
      points:[
        {ref:"110.14(C)", text:"Use ampacity column for terminal temp rating."},
        {ref:"Torque", text:"Torque tool. Loose lugs arc; over‑torque kills lugs."},
        {ref:"Al/Cu", text:"Listed lugs. Antioxidant where required."}
      ],
      images:[
        {src:"/images/module-01/m01-07.jpg", alt:"Torque", caption:"Torque to spec"},
        {src:"/images/module-01/m01-08.jpg", alt:"Temps", caption:"Pick correct ampacity column"}
      ]
    },
    { id:"art-110-26", iconName:"AlertTriangle", title:"110.26 — Working Space & Egress",
      points:[
        {ref:"Depth", text:"By voltage‑to‑ground & condition A/B/C."},
        {ref:"Width/Height", text:"≥ 30 in wide; ≥ 6.5 ft high."},
        {ref:"Egress", text:"≥1200A & ≥6 ft wide → outward doors with panic hardware."},
        {ref:"Dedicated Space", text:"No pipes/ducts over panel space."}
      ],
      images:[
        {src:"/images/module-01/m01-09.jpg", alt:"Clearances", caption:"Keep the zone clear"},
        {src:"/images/module-01/m01-10.jpg", alt:"Egress", caption:"Outward door + panic"}
      ]
    },
    { id:"art-110-marking", iconName:"Calculator", title:"110.21/110.22/110.24 — Marking & Fault Current",
      points:[
        {ref:"110.21(B)", text:"Field‑applied hazard markings: durable/legible."},
        {ref:"110.22(A)", text:"Each disconnect **identifies** circuits."},
        {ref:"110.24(A)", text:"Mark AFC; update when system changes."}
      ],
      images:[
        {src:"/images/module-01/m01-11.jpg", alt:"Hazard labels", caption:"Durable labels"},
        {src:"/images/module-01/m01-12.jpg", alt:"AFC label", caption:"SCCR & AFC matter"}
      ]
    }
  ],
  // pass quiz only when you want it shown:
  // quiz: [...],
  prev: { href: "/modules/intro", label: "Intro" },
  next: { href: "/modules/module-02", label: "Chapter 2" }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
