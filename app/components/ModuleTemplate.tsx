// @ts-nocheck
"use client";

import React from "react";
import FooterNav from "./FooterNav";
import Quiz from "./Quiz";

/* ---------------------------
   Helper: simple emoji icons
----------------------------*/
const ICONS: Record<string, string> = {
  shield: "🛡️",
  circuit: "🔌",
  zap: "⚡️",
  book: "📘",
  calculator: "🧮",
  wrench: "🔧",
  brain: "🧠",
  alert: "⚠️",
  cloud: "🌩️",
  target: "🎯",
  flame: "🔥",
  ruler: "📏",
  plug: "🔌",
  default: "🔹",
};

/* -------------------------------------
   Helper: bold+underline subsection ref
--------------------------------------*/
const RefHL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

/* ------------------------------------------------
   Helper: render one point (Module‑2 subsection)
   - object -> {ref,text} => bold+underline ref : text
   - string -> "Title: details" => bold+underline Title : details
-------------------------------------------------*/
const renderPoint = (p: any, i: number) => {
  if (typeof p !== "string") {
    const ref = (p?.ref ?? "").toString().trim();
    const text = (p?.text ?? "").toString().trim();
    return (
      <p key={i} className="leading-relaxed text-slate-200">
        {ref ? <RefHL>{ref}</RefHL> : null}
        {ref && text ? ": " : null}
        {text || null}
      </p>
    );
  }
  const raw = p.toString();
  const idx = raw.indexOf(":");
  if (idx > 0) {
    const title = raw.slice(0, idx).trim();
    const rest = raw.slice(idx + 1).trim();
    return (
      <p key={i} className="leading-relaxed text-slate-200">
        <RefHL>{title}</RefHL>
        {rest ? <>: {rest}</> : null}
      </p>
    );
  }
  return <p key={i} className="leading-relaxed text-slate-200">{raw}</p>;
};

/* -----------------------------------------
   Special blocks — one per article REQUIRED
   Types: exam | rule | code | horror
------------------------------------------*/
function Block({ type, title, body }: { type: string; title?: string; body?: React.ReactNode }) {
  const map = {
    exam:  { border: "border-red-500/40",   bg: "bg-red-500/10",   tag: "EXAM TRAP",      emoji: "⚠️",  titleColor: "text-red-400" },
    rule:  { border: "border-yellow-500/40",bg: "bg-yellow-500/10",tag: "RULE OF THUMB",  emoji: "📎",  titleColor: "text-yellow-400" },
    code:  { border: "border-blue-500/40",  bg: "bg-blue-500/10",  tag: "NEC REFERENCE",  emoji: "📘",  titleColor: "text-blue-400" },
    horror:{ border: "border-orange-500/40",bg: "bg-orange-500/10",tag: "JOBSITE HORROR", emoji: "🫣",  titleColor: "text-orange-400" },
  } as const;
  const k = (["exam","rule","code","horror"].includes(type) ? type : "rule") as keyof typeof map;
  const s = map[k];
  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`${s.titleColor} text-xl`}>{s.emoji}</span>
        <span className={`font-bold ${s.titleColor}`}>{title || s.tag}</span>
      </div>
      <div className="text-white/90 text-sm leading-relaxed">{body || "Fill this with chapter-specific insight."}</div>
    </div>
  );
}

/* -------------------------------------------------------------
   Normalize content to enforce your GLOBAL rules:
   - No hero blurb (ignore if present)
   - Every article has exactly one block
   - No two consecutive blocks share the same type
   - Two images per article are stacked vertically (template layout)
--------------------------------------------------------------*/
function normalizeContent(props: any) {
  const hero = props?.hero || {};
  const articles = Array.isArray(props?.articles) ? props.articles.slice() : [];
  const quiz = Array.isArray(props?.quiz) ? props.quiz : [];
  const summary = Array.isArray(props?.summary) ? props.summary : [];
  const prev = props?.prev || hero?.prev || null;
  const next = props?.next || hero?.next || null;

  // Allowed rotation for blocks
  const ROT = ["exam","rule","code","horror"];

  let lastType: string | null = null;
  const fixed = articles.map((a: any, idx: number) => {
    const want = (a?.block?.type || "").toString().toLowerCase();
    const hasValid = ROT.includes(want);

    // Choose type: prefer requested if valid and not same as last
    let type = hasValid && want !== lastType ? want : null;
    if (!type) {
      // pick next in rotation not equal to lastType
      const start = hasValid ? ROT.indexOf(want) : (idx % ROT.length);
      for (let k = 0; k < ROT.length; k++) {
        const candidate = ROT[(start + k) % ROT.length];
        if (candidate !== lastType) { type = candidate; break; }
      }
      if (!type) type = "rule"; // absolute fallback
    }
    lastType = type;

    // Ensure block exists
    const block = {
      type,
      title: a?.block?.title, // keep custom title if provided
      body: a?.block?.body    // keep custom body if provided
    };

    // Ensure two stacked images layout: just pass through; renderer handles stacking
    const images = Array.isArray(a?.images) ? a.images : [];

    return { ...a, block, images };
  });

  return { hero, articles: fixed, quiz, summary, prev, next };
}

/* --------------------
   The actual Template
---------------------*/
export default function ModuleTemplate(props: any) {
  const { hero, articles, quiz, summary, prev, next } = normalizeContent(props);

  // Derived counts
  const articleCount = Array.isArray(articles) ? articles.length : 0;
  const quizCount = Array.isArray(quiz) ? quiz.length : 0;
  const imageCount = (hero?.imageSrc ? 1 : 0) + (articles?.reduce((n: number, a: any) => n + (Array.isArray(a?.images) ? a.images.length : 0), 0) || 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top nav — exact same as bottom */}
      <div className="max-w-5xl mx-auto px-4 pt-3 pb-4">
        <FooterNav prev={prev || undefined} next={next || undefined} />
      </div>

      {/* Hero (NO BLURB — per spec) */}
      {hero?.imageSrc ? (
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.imageSrc} alt={hero?.imageAlt || "module hero"} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4">
            {hero?.title ? <h1 className="text-5xl font-bold text-white mb-4">{hero.title}</h1> : null}
            {hero?.subtitle ? <p className="text-xl text-gray-300 max-w-2xl mx-auto">{hero.subtitle}</p> : null}
          </div>
        </section>
      ) : (
        <header className="text-center py-10">
          {hero?.title ? <h1 className="text-5xl font-bold text-white mb-2">{hero.title}</h1> : null}
          {hero?.subtitle ? <p className="text-xl text-gray-300">{hero.subtitle}</p> : null}
        </header>
      )}

      {/* Stats Cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📘</span>
            </div>
            <div className="text-2xl font-bold text-white">{articleCount}</div>
            <div className="text-gray-400">Major Articles</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-2xl font-bold text-white">{quizCount}</div>
            <div className="text-gray-400">Quiz Questions</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡️</span>
            </div>
            <div className="text-2xl font-bold text-white">{imageCount}</div>
            <div className="text-gray-400">Visual Examples</div>
          </div>
        </div>
      </section>

      {/* Major Articles */}
      <section className="mx-auto max-w-5xl px-4 mb-12">
        <div className="text-gray-400 mb-6">Major Articles</div>

        {articles?.map((a: any, idx: number) => {
          const iconEmoji = ICONS[(a?.icon || "").toString()] || ICONS.default;
          return (
            <div key={a?.id || a?.title || idx} className="grid lg:grid-cols-2 gap-8 items-start mb-12">
              {/* Left: title + points + block */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <span className="text-2xl">{iconEmoji}</span>
                  </div>
                  {a?.title ? <h2 className="text-2xl font-bold text-white">{a.title}</h2> : null}
                </div>

                {/* Points */}
                <div className="space-y-3 text-gray-300">
                  {(Array.isArray(a?.points) ? a.points : []).map(renderPoint)}
                </div>

                {/* Required special block (already normalized, non-repeating) */}
                <Block type={a?.block?.type} title={a?.block?.title} body={a?.block?.body} />
              </div>

              {/* Right: two stacked images with captions */}
              <div className="space-y-4">
                {(Array.isArray(a?.images) ? a.images : []).slice(0, 2).map((img: any, i: number) => (
                  <figure key={i} className="relative rounded-xl overflow-hidden border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img?.src} alt={img?.alt || ""} className="w-full h-[260px] object-cover" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
                      {img?.caption || ""}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Chapter Summary (6 cards) */}
      {Array.isArray(summary) && summary.length ? (
        <section className="max-w-5xl mx-auto px-4 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Chapter Summary</h2>
            <p className="text-gray-400 text-lg">Key takeaways</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summary.slice(0,6).map((c: any, i: number) => (
              <div key={i} className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{ICONS[c?.icon || "default"]}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{c?.title || ""}</h3>
                <p className="text-gray-400 text-sm">{c?.text || ""}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Quiz (expects 15) */}
      {Array.isArray(quiz) && quiz.length ? (
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Knowledge Check</h2>
            <p className="text-gray-400 text-lg">Test yourself before the exam does</p>
          </div>
          <Quiz questions={quiz} />
        </section>
      ) : null}

      {/* Bottom nav — mirror of top */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <FooterNav prev={prev || undefined} next={next || undefined} />
      </div>
    </main>
  );
}
