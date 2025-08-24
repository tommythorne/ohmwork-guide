// @ts-nocheck
"use client";

import React from "react";
import FooterNav from "./FooterNav";

/** Content shape (loose on purpose so it never blocks builds) */
type ArticlePoint = string | { ref?: string; text?: string };
type SpecialBlockType = "exam" | "rule" | "horror" | "code" | "table" | "chart";
type ImageItem = { src?: string; alt?: string; caption?: string };
type Article = {
  title?: string;
  icon?: string;                 // emoji or string
  points?: ArticlePoint[];       // strings or {ref,text}
  bullets?: ArticlePoint[];      // alias accepted
  images?: ImageItem[];          // 0..n
  block?: {
    type: SpecialBlockType;
    title?: string;
    body?: string | React.ReactNode;
    table?: React.ReactNode;
    chart?: React.ReactNode;
  };
};

type Props = {
  hero?: {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    subtitle?: string;           // no blurb globally per your rule
  };
  articles?: Article[];
  quiz?: any[];                  // array of Q
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

/** Safely render a point that can be a string or {ref,text} */
const renderPoint = (p: any, i: number) => {
  // Flatten text recursively
  const flatten = (v: any): string => {
    if (v == null) return "";
    if (typeof v === "string") return v;
    if (typeof v === "number" || typeof v === "boolean") return String(v);
    if (typeof v === "object") {
      // If it's a {ref,text} shape, fold it, otherwise stringify defensively
      const inner = flatten((v as any).text);
      const r = (v as any).ref ? String((v as any).ref).trim() : "";
      if (r && inner) return `${r}: ${inner}`;
      return r || inner || "";
    }
    try { return JSON.stringify(v); } catch { return ""; }
  };

  // Preserve bold/underline for top-level ref when present
  if (p && typeof p === "object" && (p as any).ref) {
    const ref = String((p as any).ref).trim();
    const body = flatten((p as any).text);
    return (
      <li key={i} className="leading-relaxed text-slate-200">
        <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{ref}</span>
        {body ? `: ${body}` : ""}
      </li>
    );
  }

  // Otherwise just render the flattened text
  const txt = flatten(p);
  return <li key={i} className="leading-relaxed text-slate-200">{txt}</li>;
};

/** Single special block card */
const BlockCard = ({ block }: { block?: Article["block"] }) => {
  if (!block?.type) return null;
  const map: Record<SpecialBlockType, { border: string; bg: string; titleColor: string; label: string }> = {
    exam:   { border: "border-red-500/40",    bg: "bg-red-500/10",    titleColor: "text-red-400",    label: "EXAM TRAP" },
    rule:   { border: "border-yellow-500/40", bg: "bg-yellow-500/10", titleColor: "text-yellow-400", label: "RULE OF THUMB" },
    horror: { border: "border-orange-500/40", bg: "bg-orange-500/10", titleColor: "text-orange-400", label: "JOBSITE HORROR STORY" },
    code:   { border: "border-blue-500/40",   bg: "bg-blue-500/10",   titleColor: "text-blue-400",   label: "NEC REFERENCE" },
    table:  { border: "border-white/20",      bg: "bg-white/[0.03]",  titleColor: "text-white/90",   label: "DATA TABLE" },
    chart:  { border: "border-white/20",      bg: "bg-white/[0.03]",  titleColor: "text-white/90",   label: "CHART" }
  };
  const s = map[block.type];

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`${s.titleColor} font-bold`}>{s.label}</span>
      </div>
      {block.title ? <div className={`font-bold ${s.titleColor} mb-1`}>{block.title}</div> : null}
      {typeof block.body === "string"
        ? <div className="text-white/90">{block.body}</div>
        : block.body
      }
      {block.table ? <div className="mt-3">{block.table}</div> : null}
      {block.chart ? <div className="mt-3">{block.chart}</div> : null}
    </div>
  );
};

/** Right column: two stacked images with captions */
const ImagesStack = ({ images }: { images?: ImageItem[] }) => {
  const imgs = Array.isArray(images) ? images.slice(0, 2) : [];
  if (!imgs.length) return null;
  return (
    <div className="space-y-4">
      {imgs.map((img, i) => (
        <figure key={i} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img?.src || ""} alt={img?.alt || ""} className="w-full h-auto object-cover" />
          {(img?.caption || img?.alt) ? (
            <figcaption className="text-sm text-white/80 p-2">{img.caption || img.alt}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
};

export default function ModuleTemplate(props: Props) {
  const hero     = props?.hero ?? {};
  const articles = Array.isArray(props?.articles) ? props.articles : [];
  const quiz     = Array.isArray(props?.quiz) ? props.quiz : [];
  const prev     = props?.prev ?? (props as any)?.hero?.prev;
  const next     = props?.next ?? (props as any)?.hero?.next;

  const totalImages = articles.reduce((n, a) => n + (Array.isArray(a?.images) ? Math.min(a.images.length, 2) : 0), 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Top nav (same component as footer) */}
      <div className="bg-slate-900/70 border-b border-white/10 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <FooterNav prev={prev || undefined} next={next || undefined} />
        </div>
      </div>

      {/* Hero (Module 2 style: large, centered, image background) */}
      <section className="relative h-[28rem] flex items-center justify-center overflow-hidden text-white">
        {hero?.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero.imageSrc}
            alt={hero?.imageAlt || ""}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow">{hero?.title || ""}</h1>
          {hero?.subtitle ? (
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-3xl mx-auto">{hero.subtitle}</p>
          ) : null}
        </div>
      </section>

      {/* Stats row */}
      <section className="max-w-5xl mx-auto px-4 -mt-12 mb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Major Articles", value: articles.length, icon: "📘" },
            { label: "Quiz Questions", value: quiz.length, icon: "🧠" },
            { label: "Visual Examples", value: totalImages, icon: "⚡" },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl bg-slate-800/70 border border-white/10 p-5 backdrop-blur text-center">
              <div className="text-3xl md:text-4xl">{c.icon}</div>
              <div className="text-2xl md:text-3xl font-bold mt-1">{c.value}</div>
              <div className="text-white/70">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="space-y-10">
          {articles.map((a, i) => (
            <article key={i} className="rounded-2xl bg-slate-800/70 border border-white/10 p-6">
              <header className="flex items-start gap-3 mb-4">
                <div className="text-2xl md:text-3xl">{a?.icon || "🛡️"}</div>
                <h2 className="text-2xl md:text-3xl font-extrabold">{a?.title || ""}</h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left: bullet points + block */}
                <div className="md:col-span-2">
                  <ul className="list-disc list-outside pl-6 space-y-2">
                    {(a?.points ?? a?.bullets ?? []).map(renderPoint)}
                  </ul>
                  <BlockCard block={a?.block} />
                </div>

                {/* Right: stacked images */}
                <div className="md:col-span-1">
                  <ImagesStack images={a?.images || []} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Knowledge Check (single header; we removed the stray duplicate elsewhere) */}
      {quiz.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <div className="rounded-2xl bg-slate-800/70 border border-white/10 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">Knowledge Check</h2>
            <p className="text-white/70 mb-4">
              Answer all questions, then click <span className="font-semibold text-white">Submit Answers</span>.
              You’ll see your score after submitting. Nothing is graded until then.
            </p>
            {/* The actual Quiz component renders inside module pages; here we just leave space */}
            {/* If a module injects its own Quiz component, it will replace this stub. */}
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <FooterNav prev={prev || undefined} next={next || undefined} />
        </div>
      </div>
    </main>
  );
}
