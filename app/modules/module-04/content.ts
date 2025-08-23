// @ts-nocheck
/** Fill this. Template renders it like Module 2. */
const content = {
  hero: {
    imageSrc: "/images/module-04/m04-hero.jpg",
    imageAlt: "NEC Chapter 4",
    title: "Chapter 4 — Equipment for General Use",
    subtitle: "Boxes, devices, luminaires, receptacles, appliances — the stuff you actually touch."
  },
  articles: [
    { id:"406", iconName:"ShieldCheck", title:"Article 406 — Receptacles, Cord Connectors, Attachment Plugs",
      points:[
        {ref:"406.9(B)", text:"Damp/wet location covers and enclosure types."},
        {ref:"406.12", text:"Tamper‑resistant requirements in dwelling units."},
        {ref:"406.4(D)", text:"Replacement rules: grounding‑type in non‑grounded systems options."}
      ],
      images:[
        {src:"/images/module-04/m04-01.jpg", alt:"In‑use covers", caption:"Wet location cover"},
        {src:"/images/module-04/m04-02.jpg", alt:"TR receptacle", caption:"Tamper‑resistant"}
      ]
    },
    { id:"410", iconName:"CircuitBoard", title:"Article 410 — Luminaires, Lampholders, and Lamps",
      points:[
        {ref:"410.10(D)", text:"Damp/wet location luminaire requirements."},
        {ref:"410.130(G)", text:"Ballast/luminaire disconnects where required."}
      ],
      images:[
        {src:"/images/module-04/m04-03.jpg", alt:"Wet‑rated luminaire", caption:"Use the right listing"},
        {src:"/images/module-04/m04-04.jpg", alt:"Disconnect", caption:"Luminaire disconnect"}
      ]
    },
    // add more articles as you expand
  ],
  // quiz: [...],
  prev: { href: "/modules/module-03", label: "Chapter 3" },
  next: { href: "/modules/module-05", label: "Chapter 5" }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
