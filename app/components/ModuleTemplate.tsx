// In app/components/ModuleTemplate.tsx (or ../../components/ModuleTemplate.tsx from your module file)

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Add/replace this props type ---
export type ModuleTemplateProps = {
  hero: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    blurb?: string;
  };
  articles: {
    id: string;
    title: string;
    body: ReactNode;      // JSX you pass from the module page
    images?: { src: string; alt: string; caption?: string }[];
  }[];
  summary?: {
    title?: string;
    blurb?: string;
    cards?: { icon?: ReactNode; title: string; text: string }[];
  };
  quiz?: {
    id: number;
    stem: string;
    choices: { key: "A" | "B" | "C" | "D"; text: string }[];
    answer: "A" | "B" | "C" | "D";
    why: string;
  }[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

// --- Replace your default export signature to use this props type ---
// and make sure it *reads* props.hero, props.articles, etc.
export default function ModuleTemplate({
  hero,
  articles,
  summary,
  quiz,
  prev,
  next,
}: ModuleTemplateProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">{hero.title}</h1>
          {hero.subtitle && (
            <p className="mt-2 text-xl text-white/90">{hero.subtitle}</p>
          )}
          {hero.blurb && (
            <p className="mt-3 max-w-3xl mx-auto text-white/80">{hero.blurb}</p>
          )}
        </div>
      </section>

      {/* Articles */}
      <div className="max-w-5xl mx-auto px-5 py-10 space-y-16">
        {articles.map((a) => (
          <section key={a.id} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">{a.title}</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="prose prose-invert">{a.body}</div>
              {a.images && a.images.length > 0 && (
                <div className="space-y-4">
                  {a.images.map((img, i) => (
                    <figure key={i} className="relative rounded-xl overflow-hidden border border-white/15">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={600}
                        className="w-full h-56 object-cover"
                      />
                      {img.caption && (
                        <figcaption className="px-3 py-2 text-sm text-white/80 bg-black/50">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Summary */}
      {summary && (summary.title || summary.cards?.length || summary.blurb) && (
        <section className="max-w-5xl mx-auto px-5 pb-10">
          {summary.title && (
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">{summary.title}</h3>
          )}
          {summary.blurb && <p className="text-white/80 mb-6">{summary.blurb}</p>}
          {summary.cards && summary.cards.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {summary.cards.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/15 bg-white/[0.04] p-5"
                >
                  {c.icon && <div className="mb-3">{c.icon}</div>}
                  <div className="font-semibold mb-1">{c.title}</div>
                  <div className="text-white/80 text-sm">{c.text}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Quiz (render only if provided & you wire a Quiz component here if desired) */}
      {/* If your old template rendered <Quiz> itself, keep that here and import it. */}

      {/* Footer nav */}
      {(prev || next) && (
        <div className="max-w-5xl mx-auto px-5 pb-12 flex justify-between">
          <div>
            {prev && (
              <Link href={prev.href} className="text-green-400 hover:underline">
                ← {prev.label}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link href={next.href} className="text-green-400 hover:underline">
                {next.label} →
              </Link>
            )}
          </div>
        </div>
      )}
    </main>
  );
}