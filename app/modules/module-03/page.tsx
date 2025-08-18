"use client";

import Image from "next/image";
import ModuleTemplate from "../../components/ModuleTemplate";
import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

/**
 * Chapter 3 — Raceway Systems & Wireways (Advanced)
 * IMPORTANT: Cursor will ONLY fill content between the START/END markers below.
 * Do NOT change imports or component structure; Cursor should keep them exactly as-is.
 */

const title = "Chapter 3 — Raceway Systems & Wireways (Advanced)";
const subtitle =
  "Master advanced raceway systems used in modern installations. From hazardous locations to corrosive environments, apply specialized NEC rules with confidence.";

const heroImage = {
  src: "/images/module-03/m03-01.jpg",
  alt: "Advanced raceway and wireway installations",
};

const stats = [
  { label: "Advanced Articles", value: 6, accent: "text-yellow-400" },
  { label: "Quiz Questions", value: 15, accent: "text-green-400" },
  { label: "Visual Examples", value: 12, accent: "text-blue-400" },
];

/* =====================  START: ARTICLES (Cursor fills)  ===================== */
/**
 * Required 6 articles (same structure/pattern as modules 1–2):
 * 1) Article 342 — IMC
 * 2) Article 344 — RMC
 * 3) Article 352 — PVC (Advanced)
 * 4) Article 356 — LFNC
 * 5) Article 376 — Metal Wireways
 * 6) Article 386 — Surface Metal Raceways
 *
 * Each article object shape (ModuleTemplate expects exactly this):
 * {
 *   id: string,
 *   title: string,
 *   body: React.ReactNode,     // left column – paragraphs/bullets with <HL> etc.
 *   images: [
 *     { src: string, alt: string, caption?: string },
 *     { src: string, alt: string, caption?: string }
 *   ],
 *   aside?: React.ReactNode    // a DataTable or ChartBox and a WarningBox/RuleBox/HorrorStory
 * }
 *
 * Image sequence must be strictly m03-02.jpg, m03-03.jpg, … in order of appearance on the page.
 */
const articles: Array<{
  id: string;
  title: string;
  body: React.ReactNode;
  images: { src: string; alt: string; caption?: string }[];
  aside?: React.ReactNode;
}> = [
  // TODO(Cursor): Insert Article 342 and Article 344 here.
  // End this part cleanly after Article 344 object.
];
/* =====================  END: ARTICLES (Cursor fills)  ======================= */

/* =====================  START: QUIZ (Cursor fills)  ========================= */
/**
 * 15 questions:
 * {
 *   id: number,
 *   stem: string,
 *   choices: { key: "A"|"B"|"C"|"D"; text: string }[],
 *   answer: "A"|"B"|"C"|"D",
 *   why: string
 * }
 * Advanced, non-duplicated content (no reuse from modules 1–2).
 */
const quiz: Array<{
  id: number;
  stem: string;
  choices: { key: "A" | "B" | "C" | "D"; text: string }[];
  answer: "A" | "B" | "C" | "D";
  why: string;
}> = [
  // TODO(Cursor): Insert all 15 questions here.
];
/* =====================  END: QUIZ (Cursor fills)  =========================== */

export default function Module03Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModuleTemplate
        title={title}
        subtitle={subtitle}
        heroImage={heroImage}
        stats={stats}
        articles={articles}
        quiz={quiz}
        imageFolder="/images/module-03"
      />
      <FooterNav
        prev={{ href: "/modules/module-02", label: "Chapter 2" }}
        next={{ href: "/modules/module-04", label: "Chapter 4" }}
      />
    </main>
  );
}