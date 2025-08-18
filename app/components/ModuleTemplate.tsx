"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Quiz from "./Quiz";
import FooterNav from "./FooterNav";

type Article = {
  id: string;
  title: string;
  body: ReactNode;
  images?: { src: string; alt: string; caption?: string; width?: number; height?: number }[];
};

type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: "A" | "B" | "C" | "D"; text: string }[];
  answer: "A" | "B" | "C" | "D";
  why: string;
};

type NavLink = { href: string; label: string };

type Props = {
  hero?: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    blurb?: string;
  };
  dividerDelays?: string[]; // optional animation delays
  articles: Article[];
  summary?: {
    title: string;
    items: { icon?: ReactNode; title: string; text: string }[];
  };
  quiz: QuizQuestion[];
  prev?: NavLink;
  next?: NavLink;
};

export default function ModuleTemplate({
  hero,
  dividerDelays = ["delay-300","delay-500","delay-700","delay-900"],
  articles,
  summary,
  quiz,
  prev,
  next,
}: Props) {
  return (
    <main className="min-h-screen bg-black text-white px-5 py-8 md:px-8 md:py-12">
      {/* Hero */}
      {hero && (
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 md:p-12">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-4">
              {hero.title}
            </h1>
            {hero.subtitle && (
              <h2 className="text-xl md:text-2xl text-white/90 mb-2">{hero.subtitle}</h2>
            )}
            {hero.blurb && (
              <p className="text-white/90 max-w-4xl">{hero.blurb}</p>
            )}
          </div>
        </section>
      )}

      {/* Decorative divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 ${dividerDelays[0]} opacity-100 scale-x-100`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Articles */}
      {articles.map((a, idx) => (
        <section key={a.id} className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${idx % 2 ? "delay-600" : "delay-400"} opacity-100 translate-y-0`}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{a.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-2">
            <div className="space-y-4 text-white/90 leading-relaxed">{a.body}</div>

            <div className="space-y-4">
              {(a.images ?? []).map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width ?? 400}
                    height={img.height ?? 300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-sm font-semibold">{img.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Optional divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 ${dividerDelays[1]} opacity-100 scale-x-100`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mx-auto max-w-5xl mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">{summary.title}</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summary.items.map((it, i) => (
              <div key={i} className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
                <div className="text-center space-y-3">
                  {it.icon && <div className="flex items-center justify-center">{it.icon}</div>}
                  <h4 className="text-lg font-bold text-white">{it.title}</h4>
                  <p className="text-white/80 text-sm">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quiz */}
      <section className="mx-auto max-w-5xl mb-16">
        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <FooterNav prev={prev} next={next} />
    </main>
  );
}
