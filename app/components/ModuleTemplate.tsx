"use client";

import React from "react";
import FooterNav from "./FooterNav";
import Quiz from "./Quiz";
import pointToJSX from "./pointToJSX";
import BlockCardMD from "./BlockCardMD";

/** ------------ Types (intentionally loose to avoid TS blocking builds) ------------ */
type Hero = {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
};

type Block =
  | { type: "exam" | "rule" | "horror" | "code" | "table" | "chart"; title?: string; body?: any; table?: any; chart?: any }
  | { type: "none" }
  | undefined;

type ImageItem = { src: string; alt?: string; caption?: string };

type Article = {
  id?: string;
  icon?: string;        // emoji or small icon
  iconName?: string;    // fallback if you pass iconName instead of icon
  title?: string;
  points?: any[];
  bullets?: any[];
  images?: ImageItem[];
  block?: Block;
  body?: any;
};

type Summary = {
  title?: string;
  cards?: { iconName?: string; title: string; text: string }[];
};

type Nav = { href: string; label: string };
type Props = {
  hero?: Hero;
  articles?: Article[];
  summary?: Summary;
  quiz?: any[];
  prev?: Nav;
  next?: Nav;
};

/** ------------ Right column: two stacked images w/ captions ------------ */
const ImagesStack: React.FC<{ images?: ImageItem[] }> = ({ images = [] }) => {
  const pair = (Array.isArray(images) ? images : []).slice(0, 2);
  if (pair.length === 0) return null;
  return (
    <div className="space-y-4">
      {pair.map((img, i) => (
        <div key={i} className="rounded-xl border border-white/20 bg-white/[0.03] p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt || ""} className="w-full h-40 md:h-48 object-cover rounded-lg" />
          {img.caption ? <div className="text-white/70 text-[13px] md:text-sm mt-2">{img.caption}</div> : null}
        </div>
      ))}
    </div>
  );
};

function __validateArticlePoints(articles:any[]){
  if (process.env.NODE_ENV === 'production') return;
  try {
    const bad = (articles||[]).map((a:any,i:number)=>({i,title:a?.title||`Article ${i+1}`, n:(a?.points||[]).length})).filter(x=>x.n<5);
    if (bad.length) console.warn('[ModuleTemplate] Articles with <5 points:', bad);
  } catch {}
}

export default function ModuleTemplate({ hero, articles = [], summary, quiz = [], prev, next }: Props) {
  // SAFETY coercions
  const articlesArr = Array.isArray(articles) ? articles : [];
  const quizArr = Array.isArray(quiz) ? quiz : [];
  const summaryObj = summary && typeof summary === 'object' ? summary : {};
  const summaryCards = Array.isArray(summaryObj.cards) ? summaryObj.cards : [];

  const articleCount = articlesArr.length;
  const quizCount = quizArr.length;
  const visualCount = articlesArr.reduce(
    (n, a) => n + Math.min(Array.isArray(a.images) ? a.images.length : 0, 2),
    0
  );

  // Ensure every article has a special block AND avoid consecutive repeats
  const BLOCK_TYPES = ["exam","rule","code","table","chart","horror"] as const;
  type BlockType = typeof BLOCK_TYPES[number];
  let __lastType: BlockType | null = null;

  const normalizedArticles = (Array.isArray(articles) ? articles : []).map((a, idx) => {
    let blk = (a && a.block && (a.block as any).type && (a.block as any).type !== "none")
      ? { ...(a.block as any) }
      : {
          type: BLOCK_TYPES[idx % BLOCK_TYPES.length] as BlockType,
          title: undefined,
          body: undefined,
        } as any;

    if (blk && blk.type === __lastType) {
      const i = Math.max(0, BLOCK_TYPES.indexOf(blk.type as BlockType));
      blk.type = BLOCK_TYPES[(i + 1) % BLOCK_TYPES.length] as BlockType;
    }
    __lastType = blk ? (blk.type as BlockType) : __lastType;
    return { ...a, block: blk };
  });

  const renderPointsList = (a: Article) => {
    const list = Array.isArray(a.points) && a.points.length ? a.points : Array.isArray(a.bullets) ? a.bullets : [];
    if (!list.length) return null;
    return <ul className="list-disc list-outside pl-6 space-y-2">{list.map(pointToJSX)}</ul>;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Top nav — thin, static, borderless (matches bottom feel) */}
      <div className="max-w-5xl mx-auto px-5 pt-4">
        <FooterNav prev={prev || undefined} next={next || undefined} />
      </div>

      {/* Hero */}
      <section className="relative h-[28rem] flex items-center justify-center overflow-hidden">
        {hero?.imageSrc ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.imageSrc}
              alt={hero?.imageAlt || hero?.title || ""}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/40" />
          </>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-3">
            {hero?.title || ""}
          </h1>
          {hero?.subtitle ? (
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">{hero.subtitle}</p>
          ) : null}
        </div>
      </section>

      {/* Stats row */}
      <section className="max-w-5xl mx-auto px-5 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-5 text-center">
            <div className="text-3xl font-bold text-yellow-400">{articleCount}</div>
            <div className="text-white/80 text-sm">Major Articles</div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-5 text-center">
            <div className="text-3xl font-bold text-green-400">{quizCount}</div>
            <div className="text-white/80 text-sm">Quiz Questions</div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-5 text-center">
            <div className="text-3xl font-bold text-blue-400">{visualCount}</div>
            <div className="text-white/80 text-sm">Visual Examples</div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-5xl mx-auto px-5 mt-10">
        { normalizedArticles.map((a, i) => (
          <article key={a.id || a.title || i} className="mb-12">
            <header className="flex items-center gap-3 mb-5">
              <div className="text-2xl">{a.icon || a.iconName || "📘"}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{a.title}</h2>
            </header>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left: bullet points + special block */}
              <div>
                {renderPointsList(a)}
                <BlockCardMD block={a.block} />
              </div>

              {/* Right: stacked images */}
              <ImagesStack images={a.images} />
            </div>
          </article>
        ))}
      </section>

      {/* Summary (optional) */}
      {summary?.title || (summary?.cards && summary.cards.length) ? (
        <section className="max-w-5xl mx-auto px-5 mb-10">
          {summary.title ? (
            <h3 className="text-3xl font-bold text-yellow-400 text-center mb-6">{summary.title}</h3>
          ) : null}
          {Array.isArray(summaryCards) && summaryCards.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {summaryCards.map((c, idx) => (
                <div key={idx} className="rounded-xl border border-white/15 bg-white/[0.03] p-6">
                  <div className="space-y-2 text-center">
                    <h4 className="text-lg font-bold text-white">{c.title}</h4>
                    <p className="text-white/80 text-sm">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {/* Knowledge Check (bottom only) */}
      {Array.isArray(quizArr) && quizArr.length > 0 ? (
        <section className="max-w-5xl mx-auto px-5 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">Knowledge Check</h3>
            <p className="text-white/80">Answer the questions below. Target 80%+ to move on.</p>
          </div>
          <Quiz questions={quizArr} />
        </section>
      ) : null}

      {/* Bottom nav */}
      <div className="max-w-5xl mx-auto px-5 pb-10">
        <FooterNav prev={prev} next={next} />
      </div>
    </main>
  );
}
