"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterNav from "./FooterNav";
import Quiz from "./Quiz";
import {
  AlertTriangle,
  Zap,
  Shield,
  Plug,
  Cable,
  Building,
  CloudLightning,
  Flame,
  Target,
  Waypoints,
  GitBranch,
  Ruler,
  BookOpen,
  Brain,
} from "lucide-react";

/* --------------------------------------------------------------------------------
 * Reusable helpers (ported from Module 02)
 * -------------------------------------------------------------------------------- */

export const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">
    {children}
  </span>
);

export const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-red-400 text-xl">⚠️</span>
      <span className="font-bold text-red-400">EXAM TRAP</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const RuleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <Ruler className="w-5 h-5 text-yellow-400" aria-hidden="true" />
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <Flame className="w-5 h-5 text-orange-400" aria-hidden="true" />
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
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

export const VisualDivider = ({ delay = 0 }: { delay?: number }) => (
  <div
    className={`mx-auto max-w-5xl my-12 transition-all duration-1000`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </div>
  </div>
);

/* --------------------------------------------------------------------------------
 * Small building blocks for module content
 * -------------------------------------------------------------------------------- */

export const ArticleHeader = ({
  icon,
  title,
}: {
  icon?: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-3 mb-6">
    {icon}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      {title}
    </h2>
  </div>
);

export const ImageCard = ({
  src,
  alt,
  caption,
  width = 400,
  height = 300,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) => (
  <div className={`relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4 ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-48 object-cover rounded-lg"
      priority={priority}
    />
    {caption ? (
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white text-sm font-semibold">{caption}</p>
      </div>
    ) : null}
  </div>
);

export const Section = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <section
    className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </section>
);

/* --------------------------------------------------------------------------------
 * Quiz typing to allow passing plain questions, or a ready-made node
 * -------------------------------------------------------------------------------- */

export type QuizChoiceKey = "A" | "B" | "C" | "D";
export type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: QuizChoiceKey; text: string }[];
  answer: QuizChoiceKey;
  why: string;
};

/* --------------------------------------------------------------------------------
 * Template Props
 * -------------------------------------------------------------------------------- */

export interface ModuleTemplateProps {
  /** Big chapter title, e.g., "Chapter 2 — Wiring and Protection" */
  title: string;
  /** Short one-liner beneath title */
  subtitle: string;

  /** Hero background image */
  heroImage: { src: string; alt: string };

  /** Counters in the header */
  stats: {
    articles: number;
    questions: number;
    visuals: number;
  };

  /** Section content blocks (use <Section>, <ArticleHeader>, <ImageCard>, etc.) */
  sections: React.ReactNode[];

  /** Optional summary section cards */
  summary?: {
    title?: string; // defaults to "Chapter Summary"
    blurb?: string;
    cards?: { icon?: React.ReactNode; title: string; text: string }[];
  };

  /** Provide either quizQuestions or a fully-rendered quizNode */
  quizQuestions?: QuizQuestion[];
  quizNode?: React.ReactNode;

  /** Navigation */
  prev: { href: string; label: string };
  next: { href: string; label: string };

  /** Top bar */
  tocHref?: string; // default "/intro"
  codeEditionLabel?: string; // default "NEC 2017"

  /** If true, automatically inserts a divider between each section */
  autoDividers?: boolean;
}

/* --------------------------------------------------------------------------------
 * The Template
 * -------------------------------------------------------------------------------- */

export default function ModuleTemplate({
  title,
  subtitle,
  heroImage,
  stats,
  sections,
  summary,
  quizQuestions,
  quizNode,
  prev,
  next,
  tocHref = "/intro",
  codeEditionLabel = "NEC 2017",
  autoDividers = true,
}: ModuleTemplateProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
          <Link
            href={tocHref}
            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            <span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-300 bg-gray-800/70 px-2 py-1 rounded">
            {codeEditionLabel}
          </span>
        </div>
      </div>

      {/* Hero */}
      <div
        className={`mx-auto max-w-5xl mt-8 md:mt-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 md:p-12">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title + Subtitle + Stats */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              {subtitle}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-yellow-400">
                  {stats.articles}
                </div>
                <div className="text-white/80">Major Articles</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400">
                  {stats.questions}
                </div>
                <div className="text-white/80">Quiz Questions</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400">
                  {stats.visuals}
                </div>
                <div className="text-white/80">Visual Examples</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-5xl px-5">
        {sections.map((block, i) => (
          <React.Fragment key={i}>
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {block}
            </div>
            {autoDividers && i < sections.length - 1 ? (
              <VisualDivider delay={500 + i * 100} />
            ) : null}
          </React.Fragment>
        ))}
      </div>

      {/* Optional Summary */}
      {summary ? (
        <>
          <VisualDivider delay={250} />
          <section
            className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Target className="w-10 h-10 text-yellow-400" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                  {summary.title ?? "Chapter Summary"}
                </h2>
                <Target className="w-10 h-10 text-yellow-400" />
              </div>
              {summary.blurb ? (
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  {summary.blurb}
                </p>
              ) : null}
            </div>

            {summary.cards && summary.cards.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {summary.cards.map((c, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                        {c.icon ?? <Waypoints className="w-8 h-8 text-yellow-400" />}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {c.title}
                      </h3>
                      <p className="text-white/80 text-sm">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        </>
      ) : null}

      {/* Quiz */}
      {(quizQuestions && quizQuestions.length > 0) || quizNode ? (
        <section
          className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "350ms" }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
                Knowledge Check Quiz
              </h2>
              <Brain className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-lg text-white/90">
              Test your understanding. Get 80% or higher to prove mastery.
            </p>
          </div>

          {quizNode ? (
            <>{quizNode}</>
          ) : (
            <Quiz questions={quizQuestions!} />
          )}
        </section>
      ) : null}

      {/* Footer Navigation */}
      <FooterNav prev={prev} next={next} />
    </main>
  );
}

/* --------------------------------------------------------------------------------
 * Icon re-exports (convenience for modules)
 * -------------------------------------------------------------------------------- */
export {
  AlertTriangle,
  Zap,
  Shield,
  Plug,
  Cable,
  Building,
  CloudLightning,
  Flame,
  Target,
  Waypoints,
  GitBranch,
  Ruler,
  BookOpen,
  Brain,
};