"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Quiz from "../components/Quiz";
import FooterNav from "../components/FooterNav";
import { BookOpen, Ruler, Flame } from "lucide-react";

/* ------------------------------------------------------------------
   Shared UI helpers (exported for modules to import and reuse)
-------------------------------------------------------------------*/

export const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">
    {children}
  </span>
);

export const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-red-400 text-xl">⚠️</span>
      <span className="font-bold text-red-400">EXAM TRAP</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const RuleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <Ruler className="w-5 h-5 text-yellow-400" aria-hidden="true" />
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <Flame className="w-5 h-5 text-orange-400" aria-hidden="true" />
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <BookOpen className="w-5 h-5 text-blue-400" aria-hidden="true" />
      <span className="font-bold text-blue-400">NEC REFERENCE</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const DataTable = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
    {children}
  </div>
);

export const ChartBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
    {children}
  </div>
);

/* ------------------------------------------------------------------
   Types
-------------------------------------------------------------------*/

export type QuizChoiceKey = "A" | "B" | "C" | "D";

export type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: QuizChoiceKey; text: string }[];
  answer: QuizChoiceKey;
  why: string;
};

export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export type Article = {
  id: string;
  title: string;
  body: React.ReactNode; // pass JSX blocks from the module
  images?: ArticleImage[];
};

export type SummaryCard = {
  icon?: React.ReactNode;
  title: string;
  text: string;
};

export type ModuleTemplateProps = {
  /** Top bar label (e.g., NEC year). Defaults to "NEC 2017" */
  editionLabel?: string;

  /** Hero section */
  hero: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    blurb?: string;
  };

  /** List of articles */
  articles: Article[];

  /** Summary section */
  summary?: {
    title?: string;
    blurb?: string;
    cards?: SummaryCard[];
  };

  /** Quiz questions */
  quiz?: QuizQuestion[];

  /** Footer navigation */
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

/* ------------------------------------------------------------------
   Template Component
-------------------------------------------------------------------*/

export default function ModuleTemplate({
  editionLabel = "NEC 2017",
  hero,
  articles,
  summary,
  quiz,
  prev,
  next,
}: ModuleTemplateProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/intro"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
            {editionLabel}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {hero.title}
          </h1>
          {hero.subtitle ? (
            <p className="text-lg md:text-xl text-gray-300">{hero.subtitle}</p>
          ) : null}
          {hero.blurb ? (
            <p className="text-base md:text-lg text-gray-300 mt-3 max-w-3xl mx-auto">
              {hero.blurb}
            </p>
          ) : null}
        </div>
      </section>

      {/* Articles */}
      <div className="max-w-5xl mx-auto px-4">
        {articles.map((a, idx) => (
          <section key={a.id} className="mb-12">
            {/* Divider */}
            <div className="my-12">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
              </div>
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <span className="text-yellow-400 font-semibold">Article</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {a.title}
              </h2>
            </div>

            {/* Grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Body */}
              <div className="space-y-4 text-white/90 leading-relaxed">{a.body}</div>

              {/* Images */}
              <div className="space-y-4">
                {(a.images ?? []).map((img, i) => (
                  <figure
                    className="relative rounded-xl border border-white/20 bg-white/[0.03] p-4 overflow-hidden"
                    key={`${a.id}-img-${i}`}
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover rounded-lg"
                        priority={img.priority}
                      />
                    </div>
                    {img.caption ? (
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-sm">
                        {img.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Summary */}
      {summary && (summary.title || summary.cards?.length || summary.blurb) ? (
        <section className="max-w-5xl mx-auto px-4 mb-12">
          <div className="text-center mb-8">
            {summary.title ? (
              <h2 className="text-3xl font-bold text-white mb-2">
                {summary.title}
              </h2>
            ) : null}
            {summary.blurb ? (
              <p className="text-gray-400 text-lg">{summary.blurb}</p>
            ) : null}
          </div>

          {summary.cards?.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {summary.cards.map((c, i) => (
                <div
                  key={`summary-card-${i}`}
                  className="rounded-xl border border-white/20 bg-white/[0.03] p-6 text-center"
                >
                  {c.icon ? (
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {c.icon}
                    </div>
                  ) : null}
                  <h3 className="font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-gray-400 text-sm">{c.text}</p>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {/* Quiz */}
      {quiz?.length ? (
        <section className="max-w-5xl mx-auto px-4 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Knowledge Check
            </h2>
            <p className="text-gray-400 text-lg">
              Test your understanding of this chapter
            </p>
          </div>
          <Quiz questions={quiz} />
        </section>
      ) : null}

      {/* Footer Navigation */}
      <FooterNav prev={prev} next={next} />
    </main>
  );
}