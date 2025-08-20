"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/** =========================
 *  Public Types (reused by pages)
 *  ========================= */
export type QuizChoiceKey = "A" | "B" | "C" | "D";
export type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: QuizChoiceKey; text: string }[];
  answer: QuizChoiceKey;
  why: string;
};

/** =========================
 *  Helper UI Blocks (exported for reuse in modules)
 *  ========================= */
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
      <span className="text-yellow-400 text-xl">📏</span>
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-orange-400 text-xl">🔥</span>
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-blue-400 text-xl">📘</span>
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

/** =========================
 *  Lightweight Reveal-on-scroll Animation
 *  (no external deps)
 *  ========================= */
function useReveal(inViewOnce = true, rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            if (inViewOnce) observer.unobserve(el);
          } else if (!inViewOnce) {
            setRevealed(false);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inViewOnce, rootMargin]);

  return { ref, revealed };
}

const Reveal = ({
  children,
  delay = 0,
  y = 12,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => {
  const { ref, revealed } = useReveal(true);
  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 700ms ease, transform 700ms ease",
        transitionDelay: `${delay}ms`,
      }}
      className={[
        revealed ? "opacity-100 translate-y-0" : `opacity-0 translate-y-[${y}px]`,
        "will-change-transform will-change-opacity",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

/** =========================
 *  Minimal Quiz Renderer
 *  (expects QuizQuestion[])
 *  ========================= */
function SimpleQuiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, QuizChoiceKey | null>>(
    () =>
      Object.fromEntries(questions.map((q) => [q.id, null])) as Record<
        number,
        QuizChoiceKey | null
      >
  );

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <Reveal key={q.id} delay={80 * i}>
          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
            <p className="font-semibold mb-3">{q.stem}</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {q.choices.map((c) => {
                const active = answers[q.id] === c.key;
                return (
                  <button
                    key={c.key}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: c.key }))
                    }
                    className={[
                      "text-left rounded-lg border p-3 transition-all",
                      active
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-white/15 hover:border-white/30 bg-transparent",
                    ].join(" ")}
                  >
                    <span className="font-bold mr-2">{c.key}.</span>
                    <span>{c.text}</span>
                  </button>
                );
              })}
            </div>
            {answers[q.id] && (
              <div
                className={[
                  "mt-3 rounded-lg border p-3 text-sm",
                  answers[q.id] === q.answer
                    ? "border-green-500/40 bg-green-500/10"
                    : "border-red-500/40 bg-red-500/10",
                ].join(" ")}
              >
                {answers[q.id] === q.answer ? "✅ Correct. " : "❌ Not quite. "}
                {q.why}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** =========================
 *  Props for ModuleTemplate
 *  ========================= */
type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  blurb?: string;
};

type Article = {
  id: string;
  title: string;
  body: React.ReactNode;
  images?: { src: string; alt: string; caption?: string }[];
};

type SummaryProps = {
  title?: string;
  blurb?: string;
  cards?: { icon?: React.ReactNode; title: string; text: string }[];
};

export type ModuleTemplateProps = {
  hero: HeroProps;
  articles: Article[];
  summary?: SummaryProps;
  quiz?: QuizQuestion[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

/** =========================
 *  ModuleTemplate (animated)
 *  ========================= */
export default function ModuleTemplate({
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
            NEC 2017
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
        <Reveal delay={120} className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">{hero.title}</h1>
          {hero.subtitle && (
            <p className="text-xl text-gray-200 mb-2">{hero.subtitle}</p>
          )}
          {hero.blurb && (
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {hero.blurb}
            </p>
          )}
        </Reveal>
      </section>

      {/* Articles */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {articles.map((a, idx) => (
          <Reveal key={a.id} delay={80 * idx}>
            <article>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {a.title}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Body */}
                <div className="text-white/90 leading-relaxed">{a.body}</div>

                {/* Images */}
                {a.images && a.images.length > 0 && (
                  <div className="space-y-4">
                    {a.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03]"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={800}
                          height={600}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        {img.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                            <p className="text-white text-sm font-semibold">
                              {img.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Summary */}
      {(summary?.cards?.length || summary?.title || summary?.blurb) && (
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <Reveal delay={80}>
            {summary?.title && (
              <h3 className="text-3xl font-bold mb-2">{summary.title}</h3>
            )}
            {summary?.blurb && (
              <p className="text-gray-300 mb-6">{summary.blurb}</p>
            )}
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(summary?.cards ?? []).map((c, i) => (
              <Reveal key={i} delay={80 * (i + 1)}>
                <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
                  {c.icon && (
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {c.icon}
                    </div>
                  )}
                  <h4 className="font-bold text-white mb-2">{c.title}</h4>
                  <p className="text-gray-400 text-sm">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Quiz */}
      {quiz && quiz.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <Reveal delay={80}>
            <h3 className="text-3xl font-bold mb-4">Knowledge Check</h3>
            <p className="text-gray-300 mb-6">
              Test your understanding of this chapter.
            </p>
          </Reveal>
          <SimpleQuiz questions={quiz} />
        </section>
      )}

      {/* Footer Nav */}
      {(prev || next) && (
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <Reveal delay={80}>
            <div className="flex items-center justify-between">
              {prev ? (
                <Link
                  href={prev.href}
                  className="rounded-lg border border-white/15 px-4 py-2 hover:bg-white/[0.06] transition"
                >
                  ← {prev.label}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={next.href}
                  className="rounded-lg border border-white/15 px-4 py-2 hover:bg-white/[0.06] transition"
                >
                  {next.label} →
                </Link>
              ) : (
                <span />
              )}
            </div>
          </Reveal>
        </div>
      )}
    </main>
  );
}