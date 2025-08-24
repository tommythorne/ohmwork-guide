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
      <span className="text-yellow-400 text-xl">📏</span>
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-orange-400 text-xl">🧰</span>
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
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

  const renderPoint = (p: any, i: number) => {
    if (typeof p === "string") return <p key={i} className="leading-relaxed text-gray-200">{p}</p>;
    const ref = (p?.ref || "").toString();
    const text = (p?.text || "").toString();
    return (
      <p key={i} className="leading-relaxed text-gray-200">
        {ref ? <span className="font-semibold text-slate-100"><HL>{ref}</HL></span> : null}
        {ref && text ? ": " : null}
        {text}
      </p>
    );
  };

  const renderBody = (a: any) => {
    if (Array.isArray(a?.points) && a.points.length) {
      return <div className="space-y-3">{a.points.map(renderPoint)}</div>;
    }
    if (Array.isArray(a?.bullets) && a.bullets.length) {
      return <div className="space-y-3">{a.bullets.map((b: any, i: number) => renderPoint(typeof b === "string" ? { text: b } : b, i))}</div>;
    }
    if (a?.body) return <div className="prose prose-invert max-w-none">{a.body}</div>;
    return null;
  };

  // VERTICAL image stack + robust descriptions
  const renderImages = (a: any) => {
    if (!Array.isArray(a?.images) || !a.images.length) return null;
    return (
      <div className="space-y-4 pt-2">
        {a.images.map((img: any, i: number) => {
          const desc =
            (img?.caption && String(img.caption)) ||
            (img?.desc && String(img.desc)) ||
            (img?.alt && String(img.alt)) ||
            (a?.title ? `${a.title} — visual example` : "Visual example");
          return (
            <figure key={i} className="space-y-2">
              <Image
                src={img?.src}
                alt={img?.alt || desc}
                width={900}
                height={560}
                className="rounded-xl border border-white/10 object-cover w-full h-auto"
              />
              <figcaption className="text-sm text-slate-300">{desc}</figcaption>
            </figure>
          );
        })}
      </div>
    );
  };

  const renderCallouts = (a: any) => {
    const callouts = Array.isArray(a?.callouts) ? a.callouts : null;
    const blocks = callouts && callouts.length
      ? callouts
      : [
          { type: "warning", content: "Common exam trap in this article—watch the exceptions and exact wording." },
          { type: "rule", content: "Quick memory hook: compress the main rule to a 1‑liner you can recite on demand." },
          { type: "code", content: "Anchor recall with code cites (e.g., 110.3(B), 210.8, 250.122)." },
        ];
    return (
      <div className="mt-4">
        {blocks.map((c, i) => {
          const body = typeof c?.content === "string" ? <span>{c.content}</span> : c?.content;
          switch (c?.type) {
            case "warning": return <WarningBox key={i}>{body}</WarningBox>;
            case "rule":    return <RuleBox key={i}>{body}</RuleBox>;
            case "horror":  return <HorrorStory key={i}>{body}</HorrorStory>;
            case "code":    return <CodeBox key={i}>{body}</CodeBox>;
            case "table":   return <DataTable key={i}>{body}</DataTable>;
            case "chart":   return <ChartBox key={i}>{body}</ChartBox>;
            default:        return <RuleBox key={i}>{body}</RuleBox>;
          }
        })}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/intro" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span><span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">OhmWork™ 2025</span>
        </div>
      </div>

      {/* Hero */}
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

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">{stats.articleCount}</div>
            <div className="text-gray-400">Major Articles</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">{stats.quizCount}</div>
            <div className="text-gray-400">Quiz Questions</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">{stats.imagesCount}</div>
            <div className="text-gray-400">Visual Examples</div>
          </div>
        </div>
      </section>

      {/* Articles (text left, images right stacked vertically) */}
      <section className="mx-auto max-w-5xl px-4 mb-12">
        <div className="text-gray-400 mb-4">Major Articles</div>
        <div className="space-y-12">
          {articles.map((a, idx) => (
            <div key={a?.id || a?.title || idx} className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-400/20 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-400" />
                  </div>
                  {a?.title ? <h2 className="text-2xl font-bold text-white">{a.title}</h2> : null}
                </div>
                {renderBody(a)}
                {renderCallouts(a)}
              </div>
              <div className="space-y-4">{renderImages(a)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz */}
      {Array.isArray(quiz) && quiz.length ? (
        <section className="mx-auto max-w-5xl px-4 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Knowledge Check</h2>
            <p className="text-gray-400 text-lg">Test your understanding of this chapter</p>
          </div>
          <Quiz questions={quiz} />
        </section>
      ) : null}

      {/* Bottom nav */}
      <FooterNav prev={prev} next={next || undefined} />
    </main>
  );
}
