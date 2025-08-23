import React from "react";

type Point = { ref?: string; text?: string } | string;

type Article = {
  id?: string;
  title: string;
  points?: Point[];
  body?: React.ReactNode;
  // allow extra fields coming from existing modules (keeps build happy)
  [key: string]: any;
};

type ModuleTemplateProps = {
  title: string;
  intro?: string;
  articles: Article[];
  // allow extra props without breaking
  [key: string]: any;
};

function renderPoint(p: Point, idx: number) {
  if (typeof p === "string") {
    return (
      <p key={idx} className="leading-relaxed text-slate-200">
        {p}
      </p>
    );
  }
  const hasRef = p.ref && p.ref.trim().length > 0;
  const hasText = p.text && p.text.trim().length > 0;
  return (
    <p key={idx} className="leading-relaxed text-slate-200">
      {hasRef ? <span className="font-semibold text-slate-100">{p.ref}</span> : null}
      {hasRef && hasText ? ": " : null}
      {hasText ? p.text : null}
    </p>
  );
}

export default function ModuleTemplate({
  title,
  intro,
  articles = [],
}: ModuleTemplateProps) {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12 text-white">
      {/* Module Title (Module 2 look) */}
      <header>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {intro ? <p className="text-slate-300">{intro}</p> : null}
      </header>

      {/* Articles — EXACT Module 2 structure: Title, then bullets/body with consistent spacing */}
      <section className="space-y-8">
        {articles.map((article) => {
          const key = article.id || article.title;
          const hasPoints = Array.isArray(article.points) && article.points.length > 0;
          const hasBody = !!article.body;

          return (
            <div key={key} className="space-y-4">
              <h2 className="text-2xl font-bold text-white">{article.title}</h2>

              {/* Prefer points (Module 2 style). If none, render body safely. */}
              {hasPoints ? (
                <div className="space-y-2">
                  {article.points!.map((p, i) => renderPoint(p, i))}
                </div>
              ) : hasBody ? (
                <div className="prose prose-invert prose-headings:font-bold prose-p:leading-relaxed max-w-none">
                  {article.body}
                </div>
              ) : null}
            </div>
          );
        })}
      </section>
    </main>
  );
}
