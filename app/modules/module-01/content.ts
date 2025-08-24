// @ts-nocheck
import quiz from "./quiz";

const content = {
  hero: {
    title: "Chapter 1 — General Rules and Principles",
    subtitle: "Articles 90–110: How the NEC works, definitions, and first installation rules",
    imageSrc: "/images/module-01/m01-hero.jpg",
    imageAlt: "NEC Chapter 1 overview",
  },

  articles: [
    {
      id: "art-90-purpose",
      title: "Article 90 — Purpose and Scope",
      points: [
        { ref: "90.1(A)", text: "The NEC is about practical safeguarding, not perfect safety." },
        { ref: "90.3", text: "Chapters 1–4 apply generally. 5, 6, 7 are special. 8 is standalone. 9 has tables." },
      ],
      trap: "Students often think the NEC guarantees *absolute* safety. The exam loves this trick — it only guarantees *practical safeguarding*.",
      rule: "If you’re stuck, always assume Chapter 1–4 rules apply unless specifically modified.",
      horror: "On a hospital job, a contractor skipped a Chapter 1 working clearance requirement thinking 'special occupancy rules override everything.' Result: inspector red-tagged the whole project.",
      code: "NEC 90.1(B) — Compliance does not ensure efficiency, convenience, or adequacy for future expansion.",
      table: "Chapter/Article map — 1–4 general rules, 5 special occupancies, 6 special equipment, 7 special conditions, 8 communications, 9 tables.",
      chart: "Visual: Circle showing Chapters 1–4 as the base, with 5–7 overlaying, and 8 as a separate bubble.",
      images: [
        { src: "/images/module-01/m01-90a.jpg", alt: "Article 90 scope diagram", caption: "Scope of the NEC hierarchy" },
        { src: "/images/module-01/m01-90b.jpg", alt: "Exam prep Article 90", caption: "Exam trap: practical safeguarding only" },
      ],
    },

    {
      id: "art-100-definitions",
      title: "Article 100 — Definitions",
      points: [
        { ref: "Accessible (as applied to equipment)", text: "Not guarded, locked, or blocked — requires no tools or ladders." },
        { ref: "Branch Circuit", text: "The circuit between the final OCPD and outlets." },
        { ref: "Feeder", text: "Circuit between service equipment (or other source) and branch-circuit OCPDs." },
      ],
      trap: "Exam writers love swapping feeder vs. branch circuit definitions — don’t get suckered.",
      rule: "Branch circuits always end at utilization equipment. Feeders stop at OCPDs that protect branch circuits.",
      horror: "An apprentice once landed a feeder on branch-circuit breakers, thinking they were branch conductors. Entire feeder fried, inspector ordered re-pulls.",
      code: "Article 100 is one of the exam’s gold mines. Every oddball definition is test fodder.",
      table: "Quick lookup: Accessible ≠ Readily Accessible. 'Readily' means without tools, ladders, or obstacles.",
      chart: "Feeder vs. Branch: draw service equipment → feeder → panelboard → branch → receptacle.",
      images: [
        { src: "/images/module-01/m01-100a.jpg", alt: "Feeder vs branch diagram", caption: "Feeder vs Branch Circuits diagram" },
        { src: "/images/module-01/m01-100b.jpg", alt: "Exam question example", caption: "Exam trap built from Article 100 definitions" },
      ],
    },

    {
      id: "art-110-general",
      title: "Article 110 — Requirements for Electrical Installations",
      points: [
        { ref: "110.3(B)", text: "Install and use equipment per listing and labeling." },
        { ref: "110.14(C)", text: "Follow conductor temperature ratings at terminations." },
        { ref: "110.26", text: "Working space requirements: depth, width, height." },
      ],
      trap: "The exam often throws 110.26 clearance dimensions in as a trick — memorize them cold.",
      rule: "When in doubt, always read the label. If it conflicts with the NEC, the label still rules (per 110.3(B)).",
      horror: "One foreman ignored a panel clearance rule and installed in a broom closet. The AHJ failed the entire service — had to tear it out.",
      code: "110.26(A) — Minimum working space depth: 3 ft for 0–150V, more for higher voltages.",
      table: "Working space table: Voltage-to-ground vs. required depth, from 0–150V through 600V.",
      chart: "Panel clearance diagram: depth × width × height with approach boundaries.",
      images: [
        { src: "/images/module-01/m01-110a.jpg", alt: "Working clearance diagram", caption: "Panel clearance requirements under 110.26" },
        { src: "/images/module-01/m01-110b.jpg", alt: "Label compliance example", caption: "Labels legally binding under 110.3(B)" },
      ],
    },
  ],

  prev: { href: "/intro", label: "Introduction" },
  next: { href: "/modules/module-02", label: "Chapter 2" },
  quiz,
};

export default content;
