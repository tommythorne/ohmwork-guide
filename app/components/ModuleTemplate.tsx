import React, { ReactNode } from "react";

type Hero = {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  blurb?: string;
  [key: string]: any; // allow extra hero fields (prevents TS failures like 'blurb')
};

type ImageItem = {
  src: string;
  alt?: string;
  caption?: string;
};

type Point = { ref?: string; text?: string } | string;

type Article = {
  id?: string;
  title: string;
  points?: Point[];
  body?: React.ReactNode;
  images?: ImageItem[];
  [key: string]: any; // allow extra fields from modules
};

type NavLink = { href?: string; title?: string } | any;

type ModuleTemplateProps = {
  title?: string;        // optional: fallback to hero.title
  intro?: string;        // optional: Module 2 uses simple intro
  hero?: Hero;           // accepted by existing modules
  articles: Article[];   // required for Module 2 layout
  summary?: any;         // accepted but not rendered here (Module 2 strict)
  quiz?: any;            // accepted but not rendered here (Module 2 strict)
  prev?: NavLink;
  next?: NavLink;
  [key: string]: any;    // accept other props without failing TS
};

function renderPoint(p: Point, idx: number) {
  if (typeof p === "string") {
    return (
      <p key={idx} className="leading-relaxed text-slate-200">
        {p}
      </p>
    );
  }
  const hasRef = !!(p.ref && p.ref.trim().length > 0);
  const hasText = !!(p.text && p.text.trim().length > 0);
  return (
    <p key={idx} className="leading-relaxed text-slate-200">
      {hasRef ? <span className="font-semibold text-slate-100">{p.ref}</span> : null}
      {hasRef && hasText ? ": " : null}
      {hasText ? p.text : null}
    </p>
  );
}

/**
 * ModuleTemplate — Locked to Module 2 layout:
 * - Hero (image + title/subtitle/blurb)
 * - "Major Articles" label
 * - Per-article: Title then bullet/paragraph points (Module 2 spacing)
 * Other props (summary/quiz/prev/next) are accepted but not rendered here to avoid drift.
 */
export default function ModuleTemplate({
  title,
  intro,
  hero,
  articles = [],
}: ModuleTemplateProps) {
  const heading = hero?.title || title || "";

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12 text-white">
      {/* Hero / Title (Module 2 look) */}
      <header className="space-y-4">
        {hero?.imageSrc ? (
          <img
            src={hero.imageSrc}
            alt={hero.imageAlt || heading || "module hero"}
            className="w-full rounded-lg border border-white/10"
          />
        ) : null}
        {heading ? <h1 className="text-4xl font-bold">{heading}</h1> : null}
        {hero?.subtitle ? (
          <p className="text-slate-300">{hero.subtitle}</p>
        ) : intro ? (
          <p className="text-slate-300">{intro}</p>
        ) : null}
        {hero?.blurb ? (
          <p className="text-slate-400">{hero.blurb}</p>
        ) : null}
      </header>

      {/* Major Articles — EXACT Module 2 structure */}
      <section className="space-y-6">
        <div className="text-gray-400">Major Articles</div>
        <div className="space-y-8">
          {articles.map((article) => {
            const key = article.id || article.title;
            const hasPoints = Array.isArray(article.points) && article.points.length > 0;
            const hasBody = !!article.body;

            return (
              <div key={key} className="space-y-4">
                <h2 className="text-2xl font-bold text-white">{article.title}</h2>

                {/* Prefer Module 2 style points; fall back to body if no points */}
                {hasPoints ? (
                  <div className="space-y-2">
                    {article.points!.map((p, i) => renderPoint(p, i))}
                  </div>
                ) : hasBody ? (
                  <div className="prose prose-invert prose-p:leading-relaxed max-w-none">
                    {article.body}
                  </div>
                ) : null}

                {/* Optional image strip per article (kept simple, Module 2 vibe) */}
                {Array.isArray(article.images) && article.images.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {article.images.map((img, i) => (
                      <figure key={i} className="space-y-2">
                        <img
                          src={img.src}
                          alt={img.alt || ""}
                          className="rounded-md border border-white/10"
                        />
                        {img.caption ? (
                          <figcaption className="text-xs text-slate-400">{img.caption}</figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
