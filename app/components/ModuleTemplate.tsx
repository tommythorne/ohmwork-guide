"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Quiz from "./Quiz";
import FooterNav from "./FooterNav";
import type { ModuleTemplateProps } from "@/app/types/module";

/**
 * Module-02 visual baseline:
 * - Top bar with TOC + OhmWork™ 2025 badge
 * - Full-bleed hero image with dark overlay, title, subtitle, (optional) blurb
 * - Article sections: 2-col layout (text left, images right)
 * - Summary cards grid
 * - Knowledge Check with Quiz at the very end
 * - FooterNav (prev/next). FooterNav already prints © line; no extra footer here.
 *
 * NOTE: All “helper blocks” (HL, RuleBox, WarningBox, CodeBox, DataTable, ChartBox)
 * live in app/components/Blocks.tsx and are used inside article body content.
 * This template doesn’t declare or export any of them.
 */
export default function ModuleTemplate({
  hero,
  articles,
  summary,
  quiz,
  prev,
  next,
}: ModuleTemplateProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/intro"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-300 bg-gray-800/80 px-2 py-1 rounded">
            OhmWork™ 2025
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{hero.title}</h1>
          {hero.subtitle && (
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{hero.subtitle}</p>
          )}
          {hero.blurb && (
            <p className="text-gray-300 max-w-3xl mx-auto mt-4">{hero.blurb}</p>
          )}
        </div>
      </section>

      {/* Articles */}
      {articles.map((a, idx) => (
        <section
          key={a.id}
          className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${200 + idx * 100}ms` }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start px-4">
            {/* Text / Body */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{a.title}</h2>
              <div className="space-y-4 text-gray-300">{a.body}</div>
            </div>

            {/* Images */}
            <div className="space-y-4">
              {a.images.map((img, i) => (
                <div key={i} className="relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={480}
                    height={320}
                    className="rounded-xl w-full h-auto"
                  />
                  {(img.caption || img.alt) && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                      <p className="text-sm">{img.caption || img.alt}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Summary */}
      <section
        className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl font-bold text-white mb-2">{summary.title}</h2>
          {/* No blurb in summary by design */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {summary.cards.map((c, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center"
            >
              {c.icon && (
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {c.icon}
                </div>
              )}
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Check */}
      <section
        className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl font-bold text-white mb-2">Knowledge Check</h2>
          <p className="text-gray-400 text-lg">Test your understanding of this chapter</p>
        </div>

        <div className="px-4">
          <Quiz questions={quiz} />
        </div>
      </section>

      {/* Footer Navigation */}
      <FooterNav prev={prev} next={next} />
    </main>
  );
}
