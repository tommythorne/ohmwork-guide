import React from "react";

type Article = {
  title: string;
  points: { ref: string; text: string }[];
};

type ModuleTemplateProps = {
  title: string;
  intro: string;
  articles: Article[];
};

export default function ModuleTemplate({ title, intro, articles }: ModuleTemplateProps) {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12 text-white">
      {/* Module Title */}
      <header>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-slate-300">{intro}</p>
      </header>

      {/* Articles (Module 2 layout only) */}
      <section className="space-y-8">
        {articles.map((article) => (
          <div key={article.title} className="space-y-4">
            <h2 className="text-2xl font-bold text-white">{article.title}</h2>
            <div className="space-y-2 text-slate-200">
              {article.points.map((point, i) => (
                <p key={i}>
                  <span className="font-semibold text-slate-100">{point.ref}</span>:{" "}
                  {point.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
