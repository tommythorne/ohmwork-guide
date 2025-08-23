import { ReactNode } from "react";

// A single image used in a module
export type ModuleImage = {
  src: string;
  alt: string;
  caption?: string;
};

// A single article section in a module
export type ModuleArticle = {
  id: string;
  title: string;
  iconName?: string;
  body: ReactNode;
  images: ModuleImage[];
  /** Optional: bullet-point key takeaways for this article */
  bullets?: string[];
};

// Quiz choice type (A, B, C, D)
export type QuizChoiceKey = "A" | "B" | "C" | "D";

// A quiz question inside a module
export type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: QuizChoiceKey; text: string }[];
  answer: QuizChoiceKey;
  why: string;
};

// Summary card at the bottom of a module
export type ModuleSummaryCard = {
  icon?: ReactNode;
  title: string;
  text: string;
};



export type StatsItem = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};
/** Small statistic card (top of page) */
export type ModuleStat = {
  label: string;   // e.g., "Major Articles"
  value: string;   // e.g., "10"
  icon?: ReactNode;
};

// Props expected by the ModuleTemplate
export type ModuleTemplateProps = {
  hero: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    /** Optional overview sentence; allowed to be omitted. */
    blurb?: string;
  };
  /** Optional: 2–4 small stat cards shown near the top */
  stats?: ModuleStat[];
  /** Optional: 4–8 bullets rendered as "At a Glance" checklist */
  atAGlance?: string[];
  articles: ModuleArticle[];
  summary: {
    title: string;
    cards: ModuleSummaryCard[];
  };
  quiz: QuizQuestion[];
  prev: { href: string; label: string };
  next: { href: string; label: string };
};
