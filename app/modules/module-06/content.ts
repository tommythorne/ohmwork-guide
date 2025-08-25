const content = {
  hero: {
    imageSrc: "/images/module-06/m06-hero.jpg",
    imageAlt: "NEC Chapter 6 overview",
    title: "Chapter 6 — Special Equipment",
    subtitle: "Requirements for equipment like PV, EV, signs, cranes, welders, and more."
  },
  prev: { href: "/modules/module-05", label: "Chapter 5" },
  next: { href: "/modules/module-07", label: "Chapter 7" },
  articles: [],
  summary: { title: "Quick Hits", cards: [] }
};

import quiz from "./quiz";
(content as any).quiz = quiz;
export default content;
