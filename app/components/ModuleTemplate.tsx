// @ts-nocheck
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import Quiz from "../components/Quiz";
import FooterNav from "../components/FooterNav";
import { BookOpen, Target, Zap, ShieldCheck } from "lucide-react";

/* ---------- Shared blocks ---------- */
export const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
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
      <span className="text-orange-400 text-xl">🧰</span>
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

/* ---------- Template ---------- */
export default function ModuleTemplate(props: any) {
  const hero = props?.hero || {};
  const heading = hero?.title || props?.title || "";
  const intro = hero?.subtitle || props?.intro || "";
  const blurb = hero?.blurb || "";
  const prev = props?.prev || { href: "/intro", label: "Back to TOC" };
  const next = props?.next || null;

  const articles: any[] = Array.isArray(props?.articles) ? props.articles : [];
  const quiz = Array.isArray(props?.quiz) ? props.quiz : null;

  const stats = useMemo(() => {
    const articleCount = articles.length;
    const imagesCount = articles.reduce((n, a) => n + (Array.isArray(a?.images) ? a.images.length : 0), 0);
    const quizCount = Array.isArray(quiz) ? quiz.length : 0;
    return { articleCount, imagesCount, quizCount };
  }, [articles, quiz]);

  const renderBody = (a: any) => {
    if (Array.isArray(a?.points) && a.points.length) {
      return <div className="space-y-3">{a.points.map((p,i)=><p key={i} className="leading-relaxed">{typeof p==="string"?p:p.text}</p>)}</div>;
    }
    if (Array.isArray(a?.bullets) && a.bullets.length) {
      return <ul className="list-disc pl-5 space-y-2">{a.bullets.map((b,i)=><li key={i}>{typeof b==="string"?b:b.text}</li>)}</ul>;
    }
    if (a?.body) return <div className="prose prose-invert max-w-none">{a.body}</div>;
    return null;
  };

  const renderImages = (a: any) => {
    if (!Array.isArray(a?.images) || !a.images.length) return null;
    return (
      <div className="space-y-4 pt-2">
        {a.images.map((img: any, i: number) => {
          const desc = img?.caption || img?.alt || (a?.title ? `${a.title} — visual example` : "Visual example");
          return (
            <figure key={i} className="space-y-2">
              <Image src={img?.src} alt={desc} width={900} height={560} className="rounded-xl border border-white/10 object-cover w-full h-auto" />
              <figcaption className="text-sm text-slate-300">{desc}</figcaption>
            </figure>
          );
        })}
      </div>
    );
  };

  const renderCallouts = (a: any) => {
    // Always inject at least one of each type
    const blocks = [
      { type: "warning", content: a?.trap || `Watch for exceptions in ${a?.title || "this article"}—they appear on exams.` },
      { type: "rule", content: a?.rule || `Key shortcut: ${a?.title || "this article"} boils down to a 1-liner memory hook.` },
      { type: "horror", content: a?.horror || "Real jobsite incident: poor compliance caused a dangerous near-miss." },
      { type: "code", content: a?.code || `NEC reference: ${a?.codeRef || "see index for relevant cites."}` },
      { type: "table", content: a?.table || "Quick lookup table relevant to this article." },
      { type: "chart", content: a?.chart || "Concept diagram to reinforce relationships." },
    ];
    return (
      <div className="mt-4 space-y-4">
        {blocks.map((c, i) => {
          switch (c.type) {
            case "warning": return <WarningBox key={i}>{c.content}</WarningBox>;
            case "rule": return <RuleBox key={i}>{c.content}</RuleBox>;
            case "horror": return <HorrorStory key={i}>{c.content}</HorrorStory>;
            case "code": return <CodeBox key={i}>{c.content}</CodeBox>;
            case "table": return <DataTable key={i}>{c.content}</DataTable>;
            case "chart": return <ChartBox key={i}>{c.content}</ChartBox>;
            default: return null;
          }
        })}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {hero?.imageSrc ? (
          <Image src={hero.imageSrc} alt={hero?.imageAlt || heading || "module hero"} fill className="object-cover" priority />
        ) : null}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          {heading ? <h1 className="text-5xl font-bold text-white mb-4">{heading}</h1> : null}
          {intro ? <p className="text-xl text-gray-300 max-w-2xl mx-auto">{intro}</p> : null}
          {blurb ? <p className="text-gray-300 max-w-2xl mx-auto mt-2">{blurb}</p> : null}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-12">
        <div className="text-gray-400 mb-4">Major Articles</div>
        <div className="space-y-12">
          {articles.map((a, idx) => (
            <div key={a?.id || idx} className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">{a?.title}</h2>
                {renderBody(a)}
                {renderCallouts(a)}
              </div>
              <div>{renderImages(a)}</div>
            </div>
          ))}
        </div>
      </section>

      {Array.isArray(quiz) && quiz.length ? (
        <section className="max-w-5xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Knowledge Check</h2>
          <Quiz questions={quiz} />
        </section>
      ) : null}

      <FooterNav prev={prev} next={next || undefined} />
    </main>
  );
}
