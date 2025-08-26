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

/** ------------ Special Block (one definition, fixed emojis) ------------ */
const BlockCard: React.FC<{ block?: Block }> = ({ block }) => {
  if (!block || block.type === "none") return null;

  const style = {
    exam:   { label: "EXAM TRAP",      icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300" },
    rule:   { label: "RULE OF THUMB",  icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
    code:   { label: "NEC REFERENCE",  icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300" },
    table:  { label: "TABLE",          icon: "📊", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300" },
    chart:  { label: "CHART",          icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
    horror: { label: "JOBSITE HORROR", icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300" },
  } as const;

  const s =
    (block?.type && (style as any)[block.type]) ||
    { label: "NOTE", icon: "📝", border: "border-white/20", bg: "bg-slate-800/50", title: "text-white" };

  const showTitle = !!(block as any)?.title && (block as any).title !== s.label;

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{s.icon}</span>
        <span className={`${s.title} font-bold`}>{s.label}</span>
      </div>
      {showTitle ? <div className={`font-bold ${s.title} mb-1`}>{(block as any).title}</div> : null}
      {typeof (block as any).body === "string" ? (
        <div className="text-white/90">{(block as any).body}</div>
      ) : (
        (block as any).body || null
      )}
      {(block as any).table ? <div className="mt-3">{(block as any).table}</div> : null}
      {(block as any).chart ? <div className="mt-3">{(block as any).chart}</div> : null}
    </div>
  );
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

/** ------------ Main Template ------------ */
export default function ModuleTemplate({ hero, articles = [], summary, quiz = [], prev, next }: Props) {
  
  
  // SAFETY: coerce possibly-undefined props to arrays to avoid .map on undefined
  const articlesArr = Array.isArray(articles) ? articles : [];
  const quizArr = Array.isArray(quiz) ? quiz : [];
  const summaryObj = summary && typeof summary === 'object' ? summary : {};
  const summaryCards = Array.isArray(summaryObj.cards) ? summaryObj.cards : [];
// --- SAFETY COERCIONS (avoid .map on undefined) ---
  
  
  
const articleCount = articlesArr.length;
  const quizCount = Array.isArray(quiz) ? quiz.length : 0;
  const visualCount = articlesArr.reduce(
    (n, a) => n + Math.min(Array.isArray(a.images) ? a.images.length : 0, 2),
    0
  );

  
  // --- Ensure every article has a special block AND avoid consecutive repeats ---
  const BLOCK_TYPES = ["exam","rule","code","table","chart","horror"] as const;
  type BlockType = typeof BLOCK_TYPES[number];
  let __lastType: BlockType | null = null;
  
  const normalizedArticles = (Array.isArray(articles) ? articles : []).map((a, idx) => {
    // Prefer existing meaningful block; otherwise assign round‑robin
    let blk = (a && a.block && a.block.type && a.block.type !== "none")
      ? { ...a.block }
      : {
        type: BLOCK_TYPES[idx % BLOCK_TYPES.length] as BlockType,
        title: (a?.block && typeof (a.block as any) === "object" && "title" in (a.block as any)) ? (a.block as any).title : undefined,
        body:  (a?.block && typeof (a.block as any) === "object" && "body"  in (a.block as any)) ? (a.block as any).body  : undefined,
      } as any;

    // If this block matches the previous type, bump to the next one
    if (blk && blk.type === __lastType) {
      const i = Math.max(0, BLOCK_TYPES.indexOf(blk.type as BlockType));
      blk.type = BLOCK_TYPES[(i + 1) % BLOCK_TYPES.length] as BlockType;
    }

    __lastType = blk ? blk.type : __lastType;
    return { ...a, block: blk };
  });
  
const renderPointsList = (a: Article) => {
    const list = Array.isArray(a.points) && a.points.length ? a.points : Array.isArray(a.bullets) ? a.bullets : [];
    if (!list.length) return null;
    return <ul className="list-disc list-outside pl-6 space-y-2">{list.map(pointToJSX)}</ul>;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Top nav (same component as bottom) */}
      <div className="bg-slate-900/70 border-b border-white/10 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-5xl mx-auto px-5 py-3">
          <FooterNav prev={prev || undefined} next={next || undefined} />
        </div>
      </div>

      {/* Hero (Module 2 style: large, centered, image background) */}
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
          {/* No hero blurb per global rule */}
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
          {Array.isArray(summary.cards) && summary.cards.length ? (
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
      {Array.isArray(quiz) && quiz.length > 0 ? (
        <section className="max-w-5xl mx-auto px-5 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">Knowledge Check</h3>
            <p className="text-white/80">Answer the questions below. Target 80%+ to move on.</p>
          </div>
          <Quiz questions={quiz} />
        </section>
      ) : null}

      {/* Bottom nav */}
      <div className="max-w-5xl mx-auto px-5 pb-10">
        <FooterNav prev={prev} next={next} />
      </div>
    </main>
  );
}

/** -----------------------------------------------------------------------
 *  ChartBox & TableBox + BlockCard2
 *  - Renders chart from: chart: Array<{ label: string; value: number }>
 *  - Renders table from: table: Array<Array<string|number>>
 *  - Shows label strip (icon + label), then block.title ONCE, then content, then body
 * ----------------------------------------------------------------------- */

function ChartBox({ data }: { data: Array<{label: string; value: number}> }) {
  const safe = Array.isArray(data) ? data.filter(d => d && typeof d.value === 'number') : [];
  const max = safe.reduce((m, d) => Math.max(m, d.value), 0) || 1;
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2">
      <div className="grid grid-cols-3 gap-3 items-end min-h-[120px]">
        {safe.map((d, i) => {
          const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
          return (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-full rounded-t-md bg-yellow-400/80"
                style={{ height: `${pct}%`, minHeight: '10px' }}
                aria-label={`${d.label}: ${d.value}`}
                title={`${d.label}: ${d.value}`}
              />
              <div className="mt-2 text-center text-xs text-white/80">{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TableBox({ rows }: { rows: Array<Array<string|number>> }) {
  const safe = Array.isArray(rows) ? rows : [];
  if (safe.length === 0) return null;
  const [header, ...body] = safe;
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2 overflow-x-auto">
      <table className="min-w-full text-sm">
        {Array.isArray(header) && header.length > 0 && (
          <thead>
            <tr>
              {header.map((h, i) => (
                <th key={i} className="text-left text-white/80 font-semibold pb-2 pr-4 whitespace-nowrap">
                  {String(h)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((r, ri) => (
            <tr key={ri} className="border-t border-white/10">
              {r.map((c, ci) => (
                <td key={ci} className="text-white/90 py-2 pr-4 whitespace-nowrap">{String(c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type _BlockShape = { type?: "exam" | "rule" | "code" | "table" | "chart" | "horror" | "none"; title?: string; body?: any; table?: any; chart?: any };

const _BLOCK_STYLE: Record<string, { label: string; icon: string; border: string; bg: string; title: string }> = {
  exam:   { label: "EXAM TRAP",      icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300" },
  rule:   { label: "RULE OF THUMB",  icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
  code:   { label: "NEC REFERENCE",  icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300" },
  table:  { label: "TABLE",          icon: "📊", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300" },
  chart:  { label: "CHART",          icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
  horror: { label: "JOBSITE HORROR", icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300" },
};

function BlockCard2({ block }: { block?: _BlockShape }) {
  if (!block || block.type === "none") return null;
  const s = _BLOCK_STYLE[block.type || ""] || { label: "NOTE", icon: "📝", border: "border-white/20", bg: "bg-slate-800/50", title: "text-white" };

  const hasChart = Array.isArray((block as any).chart) && (block as any).chart.length > 0;
  const hasTable = Array.isArray((block as any).table) && (block as any).table.length > 0;

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      {/* Label strip (only once) */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" aria-hidden="true">{s.icon}</span>
        <span className={`${s.title} font-bold tracking-wide`}>{s.label}</span>
      </div>

      {/* Title (only once) */}
      {block.title ? <div className={`font-bold ${s.title} mb-2`}>{block.title}</div> : null}

      {/* Content */}
      {hasChart ? <ChartBox data={(block as any).chart} /> : null}
      {hasTable ? <TableBox rows={(block as any).table} /> : null}
      {!hasChart && !hasTable && block.body ? (
        <div className="text-white/90">{typeof block.body === 'string' ? block.body : block.body}</div>
      ) : null}

      {/* Body note under visual if supplied */}
      {(hasChart || hasTable) && block.body ? (
        <div className="text-white/80 text-sm mt-3">{typeof block.body === 'string' ? block.body : block.body}</div>
      ) : null}
    </div>
  );
}
