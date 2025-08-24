// @ts-nocheck
"use client";

import React from "react";
import FooterNav from "./FooterNav";

type ArticlePoint = string | { ref?: string; text?: string };
type SpecialBlock =
  | { type: "exam" | "rule" | "horror" | "code" | "table" | "chart"; title?: string; body: string };

type Article = {
  id?: string;
  iconName?: string;   // we map to emojis here to avoid icon imports
  title?: string;
  points?: ArticlePoint[];
  bullets?: ArticlePoint[];
  body?: React.ReactNode;
  images?: { src: string; alt?: string; caption?: string }[];
  block?: SpecialBlock;
};

type Content = {
  hero?: { imageSrc?: string; imageAlt?: string; title?: string; subtitle?: string; blurb?: string };
  articles?: Article[];
  summary?: { title?: string; cards?: { iconName?: string; title: string; text: string }[] };
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  quiz?: any[]; // not rendered here; count only
};

const iconMap: Record<string, string> = {
  shield: "🛡️", circuit: "🔌", plug: "🔌", calc: "🧮", book: "📘", warn: "⚠️",
  cloud: "🌩️", zap: "⚡️", cable: "🧷", wrench: "🔧", building: "🏢", brain: "🧠",
  target: "🎯", ruler: "📏", flame: "🔥"
};

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

// Special blocks (Module‑2 vibe)
function SpecialBlockView({ block }: { block?: SpecialBlock }) {
  if (!block) return null;
  const base = "rounded-xl p-4 my-4 border animate-fade-in";
  const title = block.title ? <div className="font-bold mb-1">{block.title}</div> : null;
  switch (block.type) {
    case "exam":
      return (
        <div className={`${base} border-red-500/40 bg-red-500/10`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-400 text-xl">⚠️</span>
            <span className="font-bold text-red-400">EXAM TRAP</span>
          </div>
          {title}
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "rule":
      return (
        <div className={`${base} border-yellow-500/40 bg-yellow-500/10`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-xl">🧭</span>
            <span className="font-bold text-yellow-400">RULE OF THUMB</span>
          </div>
          {title}
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "horror":
      return (
        <div className={`${base} border-orange-500/40 bg-orange-500/10`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-400 text-xl">😬</span>
            <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
          </div>
          {title}
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "code":
      return (
        <div className={`${base} border-blue-500/40 bg-blue-500/10`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400 text-xl">📎</span>
            <span className="font-bold text-blue-400">NEC REFERENCE</span>
          </div>
          {title}
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "table":
      return (
        <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
          {title}
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    case "chart":
      return (
        <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
          {title}
          <div className="text-white/90">{block.body}</div>
        </div>
      );
    default:
      return null;
  }
}

function renderPoint(p: ArticlePoint, i: number) {
  if (typeof p === "string") {
    return <p key={i} className="leading-relaxed text-slate-200">{p}</p>;
  }
  const ref = (p?.ref || "").toString().trim();
  const txt = (p?.text || "").toString().trim();
  return (
    <p key={i} className="leading-relaxed text-slate-200">
      {ref ? <span className="font-semibold text-slate-100">{ref}</span> : null}
      {ref && txt ? ": " : null}
      {txt}
    </p>
  );
}

function ArticleView(a: Article, idx: number) {
  const icon = a.iconName && iconMap[a.iconName] ? iconMap[a.iconName] : "⚡️";
  const imgs = Array.isArray(a.images) ? a.images.slice(0, 2) : [];
  return (
    <section key={a.id || a.title || idx} className="mx-auto max-w-5xl mb-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: title + points + special block */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/10 rounded-lg">
              <span className="text-xl">{icon}</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{a.title}</h2>
          </div>

          <div className="space-y-4 text-gray-300">
            {Array.isArray(a.points) && a.points.length > 0
              ? a.points.map(renderPoint)
              : Array.isArray(a.bullets) && a.bullets.length > 0
              ? a.bullets.map((b, i) => renderPoint(typeof b === "string" ? { text: b } : b, i))
              : a.body || null}
          </div>

          <SpecialBlockView block={a.block} />
        </div>

        {/* Right: stacked images with captions */}
        <div className="space-y-4">
          {imgs.map((img, i) => (
            <figure key={i} className="relative">
              <img
                src={img?.src}
                alt={img?.alt || ""}
                className="w-full rounded-xl border border-white/10"
              />
              {(img?.caption || img?.alt) && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl text-sm">
                  {img?.caption || img?.alt}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ModuleTemplate(props: any) {
  const hero = props?.hero || {};
  const heading = hero?.title || "";
  const intro = hero?.subtitle || hero?.blurb || "";
  const articles = Array.isArray(props?.articles) ? props.articles : [];
  const prev = props?.prev;
  const next = props?.next;

  // derived stats
  const articleCount = articles.length;
  const quizCount = Array.isArray((props as any)?.quiz) ? (props as any)?.quiz.length : 0;
  const imageCount = articles.reduce((n, a) => n + (Array.isArray(a.images) ? Math.min(a.images.length, 2) : 0), 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* ✅ Top Nav (clone of footer) */}
      <div className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <FooterNav prev={prev || undefined} next={next || undefined} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {hero?.imageSrc && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.imageSrc} alt={hero?.imageAlt || heading || "module hero"} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </>
        )}
        <div className="relative z-10 text-center px-4">
          {heading ? <h1 className="text-5xl font-bold text-white mb-4">{heading}</h1> : null}
          {intro ? <p className="text-xl text-gray-300 max-w-2xl mx-auto">{intro}</p> : null}
        </div>
      </section>

      {/* Stats (Module‑2 style) */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-white">{articleCount}</div>
            <div className="text-gray-400">Major Articles</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-white">{quizCount}</div>
            <div className="text-gray-400">Quiz Questions</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-white">{imageCount}</div>
            <div className="text-gray-400">Visual Examples</div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="space-y-6">
        <div className="text-gray-400 max-w-5xl mx-auto px-4">Major Articles</div>
        <div className="space-y-8">
          {articles.map(ArticleView)}
        </div>
      </section>

      {/* Summary cards (always render up to 6) */}
      <section className="mx-auto max-w-5xl mb-12 px-4">
        {props?.summary?.title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{props.summary.title}</h2>
            <p className="text-gray-400 text-lg">Key takeaways</p>
          </div>
        )}
        {Array.isArray(props?.summary?.cards) && props.summary.cards.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(props.summary.cards.slice(0, 6)).map((c, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-xl">
                  {c?.iconName && iconMap[c.iconName] ? iconMap[c.iconName] : "⚡️"}
                </div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ✅ Bottom Nav */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <FooterNav prev={prev || undefined} next={next || undefined} />
      </div>
    </main>
  );
}
