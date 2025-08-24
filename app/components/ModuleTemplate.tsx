"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Quiz from "./Quiz";
import FooterNav from "./FooterNav";
import {
  ShieldCheck, CircuitBoard, Plug, Calculator, BookOpen, AlertTriangle,
  CloudLightning, Zap, Cable, Wrench, Building, Brain, Target, Ruler, Flame
} from "lucide-react";

/**
 * Module‑2 replica with your rules:
 * - Top bar (Back to TOC + badge) AND a FooterNav clone at the top (same as bottom)
 * - Stats row (auto counts)
 * - Articles: LEFT text (points) + ONE optional special block; RIGHT TWO stacked images w/ captions
 * - Article icons via a.iconName (string)
 * - Summary grid ALWAYS 6 cards at the END (auto-fills/mirrors labels if fewer)
 * - Quiz if provided
 * - FooterNav at the bottom
 */

const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

const iconMap: Record<string, React.ComponentType<any>> = {
  shield: ShieldCheck,
  circuit: CircuitBoard,
  plug: Plug,
  calc: Calculator,
  book: BookOpen,
  warn: AlertTriangle,
  cloud: CloudLightning,
  zap: Zap,
  cable: Cable,
  wrench: Wrench,
  building: Building,
  brain: Brain,
  target: Target,
  ruler: Ruler,
  flame: Flame,
};

function ArticleIcon({ name }: { name?: string }) {
  const Cmp = name && iconMap[name] ? iconMap[name] : ShieldCheck;
  return <Cmp className="w-6 h-6 text-green-400" aria-hidden="true" />;
}

function SpecialBlock({ block }: { block?: any }) {
  if (!block) return null;
  const base = "rounded-xl p-4 my-4 border animate-fade-in";
  const head = "flex items-center gap-2 mb-2 font-bold";
  switch (block.type) {
    case "exam":
      return (
        <div className={`${base} border-red-500/40 bg-red-500/10`}>
          <div className={`${head} text-red-400`}>⚠️ EXAM TRAP</div>
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "rule":
      return (
        <div className={`${base} border-yellow-500/40 bg-yellow-500/10`}>
          <div className={`${head} text-yellow-400`}>RULE OF THUMB</div>
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "horror":
      return (
        <div className={`${base} border-orange-500/40 bg-orange-500/10`}>
          <div className={`${head} text-orange-400`}>JOBSITE HORROR STORY</div>
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "code":
      return (
        <div className={`${base} border-blue-500/40 bg-blue-500/10`}>
          <div className={`${head} text-blue-400`}>NEC REFERENCE</div>
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "table":
      return (
        <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
          {block.title && <div className="font-bold text-white mb-2">{block.title}</div>}
          <div className="text-white/90 whitespace-pre-wrap text-sm">{block.body}</div>
        </div>
      );
    case "chart":
      return (
        <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
          {block.title && <div className="font-bold text-white mb-2">{block.title}</div>}
          <div className="text-white/90 whitespace-pre-wrap text-sm">{block.body}</div>
        </div>
      );
    default:
      return null;
  }
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: number | string; label: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

export default function ModuleTemplate(props: any) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const hero = props?.hero || {};
  const articles: any[] = Array.isArray(props?.articles) ? props.articles : [];
  const quiz: any[] = Array.isArray(props?.quiz) ? props.quiz : [];
  const prev = props?.prev || null;
  const next = props?.next || null;

  const totalArticles = articles.length;
  const totalImages = articles.reduce((sum, a) => sum + (Array.isArray(a?.images) ? a.images.length : 0), 0);
  const quizCount = quiz.length;

  // Build summary cards for end-of-module; always 6
  const summary = props?.summary || {};
  let cards: any[] = Array.isArray(summary?.cards) ? summary.cards.slice(0, 6) : [];
  const pad = 6 - cards.length;
  if (pad > 0) {
    const fillers = [
      { iconName: "circuit", title: "Branch Circuits", text: "GFCI/AFCI, spacing, MWBC." },
      { iconName: "shield", title: "Grounding", text: "GES, GEC & EGC sizing." },
      { iconName: "warn", title: "Overcurrent", text: "OCPD selection & limits." },
      { iconName: "cloud", title: "Services", text: "Disconnect location, grouping." },
      { iconName: "zap", title: "Protection", text: "SPDs & coordination." },
      { iconName: "book", title: "Calculations", text: "Demand & load basics." },
    ].slice(0, pad);
    cards = cards.concat(fillers);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Top nav (same as bottom) */}
        <div data-top-nav="true">
          <FooterNav prev={props?.prev || hero?.prev || props?.prev} next={props?.next || hero?.next || props?.next} />
        </div>
    
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/intro" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span><span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">OhmWork™ 2025</span>
        </div>
      </div>

      {/* Hero */}
      {hero?.imageSrc && (
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <Image src={hero.imageSrc} alt={hero?.imageAlt || hero?.title || "module hero"} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4">
            {hero?.title && <h1 className="text-5xl font-bold text-white mb-4">{hero.title}</h1>}
            {hero?.subtitle && <p className="text-xl text-gray-300 max-w-2xl mx-auto">{hero.subtitle}</p>}
          </div>
        </section>
      )}

      {/* Top FooterNav clone (same as bottom) */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <FooterNav prev={prev || undefined} next={next || undefined} />
      </div>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 mt-2 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard icon={<BookOpen className="w-6 h-6 text-blue-400" />} value={totalArticles} label="Major Articles" />
          <StatCard icon={<Target className="w-6 h-6 text-green-400" />} value={quizCount} label="Quiz Questions" />
          <StatCard icon={<Zap className="w-6 h-6 text-purple-400" />} value={totalImages} label="Visual Examples" />
        </div>
      </section>

      {/* Articles */}
      {articles.map((a, idx) => {
        const delay = 300 + idx * 100;
        const imgA = Array.isArray(a?.images) ? a.images[0] : undefined;
        const imgB = Array.isArray(a?.images) ? a.images[1] : undefined;

        return (
          <section
            key={a?.id || a?.title || idx}
            className={`mx-auto max-w-5xl mb-12 transition-all duration-1000`}
            style={{ opacity: isVisible ? 1 : 0, transform: `translateY(${isVisible ? 0 : 8}px)`, transitionDelay: `${delay}ms` }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* LEFT: text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-400/20 rounded-lg">
                    <ArticleIcon name={a?.iconName} />
                  </div>
                  {a?.title && <h2 className="text-2xl font-bold text-white">{a.title}</h2>}
                </div>

                {/* Points (multi-sentence allowed) */}
                <div className="space-y-4 text-gray-300">
                  {(a?.points || a?.bullets || []).map((p: any, i: number) => {
                    if (typeof p === "string") return <p key={i}>{p}</p>;
                    const ref = p?.ref ? <HL>{p.ref}</HL> : null;
                    return (
                      <p key={i}>
                        {ref}{ref ? ": " : ""}{p?.text || ""}
                      </p>
                    );
                  })}
                </div>

                {/* ONE optional special block */}
                <SpecialBlock block={a?.block} />
              </div>

              {/* RIGHT: TWO stacked images with captions */}
              <div className="space-y-4">
                {imgA && (
                  <div className="relative rounded-xl overflow-hidden">
                    <Image src={imgA.src} alt={imgA.alt || ""} width={700} height={420} className="rounded-xl" />
                    {(imgA.caption || imgA.alt) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                        <p className="text-sm">{imgA.caption || imgA.alt}</p>
                      </div>
                    )}
                  </div>
                )}
                {imgB && (
                  <div className="relative rounded-xl overflow-hidden">
                    <Image src={imgB.src} alt={imgB.alt || ""} width={700} height={420} className="rounded-xl" />
                    {(imgB.caption || imgB.alt) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                        <p className="text-sm">{imgB.caption || imgB.alt}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* END Summary (ALWAYS 6 cards) */}
      <section className="mx-auto max-w-5xl px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Chapter Summary</h2>
          <p className="text-gray-400 text-lg">{summary?.title || "Key takeaways & quick recall."}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(0,6).map((c, i) => {
            const Icon = (c?.iconName && iconMap[c.iconName]) ? iconMap[c.iconName] : BookOpen;
            return (
              <div key={i} className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="font-bold text-white mb-2">{c?.title || "Topic"}</h3>
                <p className="text-gray-400 text-sm">{c?.text || "Quick recap."}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUIZ */}
      {quiz.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Knowledge Check</h2>
            <p className="text-gray-400 text-lg">Test your understanding</p>
          </div>
          <Quiz questions={quiz} />
        </section>
      )}

      {/* Bottom FooterNav */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <FooterNav prev={prev || undefined} next={next || undefined} />
      </div>
    </main>
  );
}
