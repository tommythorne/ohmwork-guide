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
  body: ReactNode;
  images: ModuleImage[];
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

// Props expected by the ModuleTemplate
export type ModuleTemplateProps = {
  hero: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    blurb: string;
  };
  articles: ModuleArticle[];
  summary: {
    title: string;
    cards: ModuleSummaryCard[];
  };
  quiz: QuizQuestion[];
  prev: { href: string; label: string };
  next: { href: string; label: string };
};
