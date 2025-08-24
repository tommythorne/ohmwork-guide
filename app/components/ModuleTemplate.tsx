"use client";

import React from "react";
import FooterNav from "./FooterNav";
import Quiz from "./Quiz";
import pointToJSX from "./pointToJSX";

type Hero = {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  blurb?: string;
};

type Block = {
  type?: "exam" | "rule" | "horror" | "code" | "table" | "chart" | "none";
  title?: string;
  body?: any;
};

type ImageItem = { src: string; alt?: string; caption?: string };

type Article = {
  id?: string;
  iconName?: string;
  title: string;
  points?: any[];
  bullets?: any[];
  images?: ImageItem[];
  block?: Block;
  body?: any; // fallback
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

function BlockCard({ block }: { block?: Block }) {
  if (!block || block.type === "none") return null;

  const labels: Record<string, string> = {
    exam: "EXAM TRAP",
    rule: "RULE OF THUMB",
    horror: "JOBSITE HORROR STORY",
    code: "NEC REFERENCE",
    table: "Quick Sheet",
    chart: "Visual Guide",
  };
  const label = block.type ? labels[block.type] ?? "" : "";

  return (
    <div className="rounded-xl border border-white/20 bg-white/[0.04] p-4 mt-4">
      {label ? <div className="text-yellow-400 font-bold mb-1">{label}</div> : null}
      {block.title && block.title !== label ? (
        <h3 className="text-white font-semibold mb-1">{block.title}</h3>
      ) : null}
      {block.body ? <div className="text-slate-200 text-sm">{block.body}</div> : null}
    </div>
  );
}

function ImagesStack({ images = [] as ImageItem[] }) {
  const pair = images.slice(0, 2);
  return (
    <div className="space-y-4">
      {pair.map((img, i) => (
        <div key={i} className="rounded-xl border border-white/20 bg-white/[0.03] p-3">
          <img src={img.src} alt={img.alt || ""} className="w-full h-40 md:h-48 object-cover rounded-lg" />
          {img.caption ? <div className="text-white/70 text-sm mt-2">{img.caption}</div> : null}
        </div>
      ))}
    </div>
  );
}

export default function ModuleTemplate({ hero, articles = [], summary, quiz = [], prev, next }: Props) {
  const articleCount = articles.length;
  const quizCount = quiz.length;
  const visualCount = articles.reduce((n, a) => n + ((a.images?.length ?? 0) > 2 ? 2 : (a.images?.length ?? 0)), 0);

  const renderPointsList = (a: Article) => {
    const list = Array.isArray(a.points) && a.points.length ? a.points : Array.isArray(a.bullets) ? a.bullets : [];
    if (!list.length) return null;
    return <ul className="list-disc list-outside pl-6 space-y-2">{list.map(pointToJSX)}</ul>;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-[28rem] flex items-center justify-center overflow-hidden">
        {hero?.imageSrc ? (
          <>
            <img src={hero.imageSrc} alt={hero.imageAlt || hero.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-black/40" />
          </>
        ) : null}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-3">{hero?.title}</h1>
          {hero?.subtitle ? <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">{hero.subtitle}</p> : null}
          {hero?.blurb ? <p className="text-white/70 text-base max-w-3xl mx-auto mt-3">{hero.blurb}</p> : null}
        </div>
      </section>

      {/* Stats strip */}
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
        {articles.map((a, i) => (
          <article key={a.id || a.title || i} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{a.title}</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                {renderPointsList(a)}
                <BlockCard block={a.block} />
              </div>
              <ImagesStack images={a.images} />
            </div>
          </article>
        ))}
      </section>

      {/* Summary (optional) */}
      {summary?.title || summary?.cards?.length ? (
        <section className="max-w-5xl mx-auto px-5 mb-10">
          {summary.title ? <h3 className="text-3xl font-bold text-yellow-400 text-center mb-6">{summary.title}</h3> : null}
          {Array.isArray(summary.cards) && summary.cards.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {summary.cards.map((c, idx) => (
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
      {quiz.length > 0 ? (
        <section className="max-w-5xl mx-auto px-5 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">Knowledge Check</h3>
            <p className="text-white/80">Answer the questions below. Target 80%+ to move on.</p>
          </div>
          <Quiz questions={quiz} />
        </section>
      ) : null}

      {/* Footer Navigation */}
      <div className="max-w-5xl mx-auto px-5 pb-10">
        <FooterNav prev={prev} next={next} />
      </div>
    </main>
  );
}