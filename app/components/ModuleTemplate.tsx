// @ts-nocheck
"use client";

import React from "react";
import Quiz from "./Quiz";
import FooterNav from "./FooterNav";
import { BookOpen, Target, Zap } from "lucide-react";

/**
 * MODULE-2 LOCKED TEMPLATE
 * - Always renders: Hero -> Stats cards -> Articles -> Quiz (if provided) -> Footer nav
 * - No "At a Glance" or stats blocks inside articles
 * - Accepts flexible content (points | bullets | body), ignores unknown props
 * - Auto-derives counts: articles.length, quiz.length, sum(images)
 */

type AnyRec = Record<string, any>;

const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">
    {children}
  </span>
);

const Card = ({ icon, value, label }: AnyRec) => (
  <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

function renderPoint(p: any, i: number) {
  // allow string or {ref,text}
  if (typeof p === "string") {
    return (
      <p key={i} className="leading-relaxed text-slate-200">
        {p}
      </p>
    );
  }
  const ref = (p?.ref || "").toString().trim();
  const text = (p?.text || "").toString().trim();
  return (
    <p key={i} className="leading-relaxed text-slate-200">
      {ref ? <span className="font-semibold text-slate-100"><HL>{ref}</HL></span> : null}
      {ref && text ? ": " : null}
      {text || null}
    </p>
  );
}

function ArticleSection(a: AnyRec, idx: number) {
  // Body priority: points -> bullets -> body
  let body: React.ReactNode = null;
  if (Array.isArray(a?.points) && a.points.length) {
    body = <div className="space-y-3">{a.points.map(renderPoint)}</div>;
  } else if (Array.isArray(a?.bullets) && a.bullets.length) {
    body = (
      <div className="space-y-3">
        {a.bullets.map((b: any, i: number) => renderPoint(typeof b === "string" ? { text: b } : b, i))}
      </div>
    );
  } else if (a?.body) {
    body = <div className="prose prose-invert max-w-none">{a.body}</div>;
  }

  const images = Array.isArray(a?.images) ? a.images : [];

  return (
    <section
      key={a?.id || a?.title || idx}
      className={`mx-auto max-w-5xl mb-12 transition-all duration-700`}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          {a?.title ? (
            <h2 className="text-2xl font-bold text-white mb-4">{a.title}</h2>
          ) : null}
          {body}
        </div>

        {images.length ? (
          <div className="space-y-4">
            {images.map((img: any, i: number) => (
              <figure key={i} className="relative">
                {/* using plain img keeps this component generic */}
                <img
                  src={img?.src}
                  alt={img?.alt || ""}
                  className="rounded-xl border border-white/10 w-full"
                />
                {(img?.caption || img?.label) ? (
                  <figcaption className="mt-2 text-xs text-slate-400">
                    {img?.caption || img?.label}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function ModuleTemplate(props: AnyRec) {
  const hero = props?.hero || {};
  const title = hero?.title || props?.title || "";
  const subtitle = hero?.subtitle || props?.intro || "";
  const blurb = hero?.blurb || "";

  const articles: AnyRec[] = Array.isArray(props?.articles) ? props.articles : [];
  const quiz: AnyRec[] = Array.isArray(props?.quiz) ? props.quiz : [];

  // derived counts (Module‑2 stats row)
  const visuals = articles.reduce((sum, a) => sum + (Array.isArray(a?.images) ? a.images.length : 0), 0);
  const stats = [
    { icon: <BookOpen className="w-6 h-6 text-blue-400" />, value: articles.length || 0, label: "Major Articles" },
    { icon: <Target className="w-6 h-6 text-green-400" />, value: quiz.length || 0, label: "Quiz Questions" },
    { icon: <Zap className="w-6 h-6 text-purple-400" />, value: visuals || 0, label: "Visual Examples" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top navigation (replicates footer) */}
      <div className="mb-6" data-testid="top-nav">
        <FooterNav prev={props?.prev} next={props?.next} />
      </div>

      {/* Top bar like Module 2 kept outside for pages; template focuses on inner content */}

      {/* Hero (Module‑2 look) */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        {hero?.imageSrc ? (
          <>
            <img src={hero.imageSrc} alt={hero?.imageAlt || title || "module"} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-black/30" />
        )}
        <div className="relative z-10 text-center px-4">
  <div data-testid="tmpl-badge" className="mb-2 inline-flex items-center gap-2 rounded bg-emerald-600/20 border border-emerald-400/30 px-2 py-1 text-xs text-emerald-300">
    TEMPLATE v2 • Module 2 replica
  </div>
          {title ? <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1> : null}
          {subtitle ? <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p> : null}
          {blurb ? <p className="text-sm text-gray-400 max-w-3xl mx-auto mt-2">{blurb}</p> : null}
        </div>
      </section>

      {/* Stats cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <Card key={i} icon={s.icon} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* Articles (Module‑2 structure; NO at‑a‑glance) */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-gray-300 mb-4">Major Articles</div>
      </div>
      {articles.map(ArticleSection)}

      {/* Quiz (optional) */}
      {quiz.length ? (
        <section className="mx-auto max-w-5xl px-4 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Knowledge Check</h2>
            <p className="text-gray-400">Test your understanding</p>
          </div>
          <Quiz questions={quiz} />
        </section>
      ) : null}

      {/* Footer nav (optional) */}
      {(props?.prev || props?.next) ? (
        <section className="mx-auto max-w-5xl px-4 mb-16">
          <FooterNav prev={props.prev} next={props.next} />
        </section>
      ) : null}
    </main>
  );
}
