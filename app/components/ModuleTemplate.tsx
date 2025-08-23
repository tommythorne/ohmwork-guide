// @ts-nocheck
import React from "react";

/**
 * STABILIZED TEMPLATE (Module 2 layout, no type blow-ups)
 * - Accepts any hero fields (title, subtitle, blurb, imageSrc, etc.)
 * - Renders "Major Articles" like Module 2: Title then bullets/body with consistent spacing
 * - Accepts article.points (string | {ref,text}), article.bullets, or article.body
 * - Ignores unknown props without failing build
 */

export default function ModuleTemplate(props: any) {
  const hero = props?.hero || {};
  const heading = hero?.title || props?.title || "";
  const intro = hero?.subtitle || props?.intro || "";
  const blurb = hero?.blurb || "";

  const articles = Array.isArray(props?.articles) ? props.articles : [];

  const renderPoint = (p: any, i: number) => {
    if (typeof p === "string") {
      return (
        <p key={i} className="leading-relaxed text-slate-200">
          {p}
        </p>
      );
    }
    const ref = (p?.ref || "").toString();
    const text = (p?.text || "").toString();
    const hasRef = ref.trim().length > 0;
    const hasText = text.trim().length > 0;

    return (
      <p key={i} className="leading-relaxed text-slate-200">
        {hasRef ? <span className="font-semibold text-slate-100">{ref}</span> : null}
        {hasRef && hasText ? ": " : null}
        {hasText ? text : null}
      </p>
    );
  };

  const renderArticleBody = (a: any) => {
    // Priority: points -> bullets -> body
    if (Array.isArray(a?.points) && a.points.length) {
      return <div className="space-y-2">{a.points.map(renderPoint)}</div>;
    }
    if (Array.isArray(a?.bullets) && a.bullets.length) {
      return (
        <div className="space-y-2">
          {a.bullets.map((b: any, i: number) => renderPoint(typeof b === "string" ? { text: b } : b, i))}
        </div>
      );
    }
    if (a?.body) {
      return (
        <div className="prose prose-invert prose-p:leading-relaxed max-w-none">
          {a.body}
        </div>
      );
    }
    return null;
  };

  const renderArticleImages = (a: any) => {
    if (!Array.isArray(a?.images) || !a.images.length) return null;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {a.images.map((img: any, i: number) => (
          <figure key={i} className="space-y-2">
            <img
              src={img?.src}
              alt={img?.alt || ""}
              className="rounded-md border border-white/10"
            />
            {img?.caption ? (
              <figcaption className="text-xs text-slate-400">{img.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    );
  };

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12 text-white">
      {/* Hero / Title (Module 2 look) */}
      <header className="space-y-4">
        {hero?.imageSrc ? (
          <img
            src={hero.imageSrc}
            alt={hero?.imageAlt || heading || "module hero"}
            className="w-full rounded-lg border border-white/10"
          />
        ) : null}
        {heading ? <h1 className="text-4xl font-bold">{heading}</h1> : null}
        {intro ? <p className="text-slate-300">{intro}</p> : null}
        {blurb ? <p className="text-slate-400">{blurb}</p> : null}
      </header>

      {/* Major Articles — EXACT Module 2 structure */}
      <section className="space-y-6">
        <div className="text-gray-400">Major Articles</div>
        <div className="space-y-8">
          {articles.map((a: any, idx: number) => {
            const key = a?.id || a?.title || idx;
            return (
              <div key={key} className="space-y-4">
                {a?.title ? (
                  <h2 className="text-2xl font-bold text-white">{a.title}</h2>
                ) : null}
                {renderArticleBody(a)}
                {renderArticleImages(a)}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
