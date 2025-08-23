"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Quiz from "./Quiz";
import FooterNav from "./FooterNav";
import type { ModuleTemplateProps } from "@/app/types/module";

// Lucide icons used for auto-badges
import {
  BookOpen, Brain, Shield, ShieldCheck, CircuitBoard, Plug, Cable, Zap,
  CloudLightning, Ruler, Tag, Wrench, AlertTriangle, Lightbulb, Cog, Battery, Calculator
} from "lucide-react";

/** Pick an icon + color for an article title (no per-module edits needed). */
function pickBadge(title: string) {
  const t = title.toLowerCase();

  // Chapter 1 & common topics
  if (t.includes("article 90"))           return { Icon: BookOpen,   color: "blue"   };
  if (t.includes("article 100") || t.includes("definition")) 
                                          return { Icon: Brain,      color: "violet" };
  if (t.includes("110.3") || t.includes("listing") || t.includes("label"))
                                          return { Icon: ShieldCheck,color: "green"  };
  if (t.includes("110.14") || t.includes("termination") || t.includes("torque"))
                                          return { Icon: Wrench,     color: "amber"  };
  if (t.includes("110.26") || t.includes("working space") || t.includes("clearance"))
                                          return { Icon: Ruler,      color: "yellow" };
  if (t.includes("identification") || t.includes("marking") || t.includes("110.21") || t.includes("110.22") || t.includes("110.24"))
                                          return { Icon: Tag,        color: "sky"    };

  // Chapter 2 common
  if (t.includes("article 200"))          return { Icon: ShieldCheck,color: "green"  };
  if (t.includes("article 210") || t.includes("branch circuit"))
                                          return { Icon: CircuitBoard,color: "blue"  };
  if (t.includes("article 215") || t.includes("feeder"))
                                          return { Icon: Cable,      color: "purple" };
  if (t.includes("article 220") || t.includes("calculation"))
                                          return { Icon: Calculator, color: "yellow" };
  if (t.includes("article 225") || t.includes("outside"))
                                          return { Icon: CloudLightning, color: "orange" };
  if (t.includes("article 230") || t.includes("service"))
                                          return { Icon: Zap,        color: "red"    };
  if (t.includes("article 240") || t.includes("overcurrent"))
                                          return { Icon: AlertTriangle, color: "pink" };
  if (t.includes("article 242") || t.includes("overvoltage") || t.includes("spd"))
                                          return { Icon: Shield,     color: "indigo" };

  // Chapter 4 common
  if (t.includes("article 404") || t.includes("switch")) 
                                          return { Icon: Lightbulb,  color: "blue"   };
  if (t.includes("article 406") || t.includes("receptacle") || t.includes("device"))
                                          return { Icon: Plug,       color: "yellow" };
  if (t.includes("article 410") || t.includes("luminaire") || t.includes("lamp"))
                                          return { Icon: Lightbulb,  color: "purple" };
  if (t.includes("article 422") || t.includes("appliance"))
                                          return { Icon: Cog,        color: "teal"   };
  if (t.includes("article 430") || t.includes("motor"))
                                          return { Icon: Cog,        color: "amber"  };
  if (t.includes("article 440") || t.includes("refrigeration") || t.includes("a/c"))
                                          return { Icon: CloudLightning, color: "cyan" };
  if (t.includes("article 450") || t.includes("transformer"))
                                          return { Icon: Battery,    color: "rose"   };

  // Fallback
  return { Icon: BookOpen, color: "slate" };
}

/**
 * Module-02 visual baseline + content density helpers:
 * - Top bar with TOC + OhmWork™ 2025 badge
 * - Full-bleed hero image with overlay, title, subtitle (no blurb render)
 * - Optional Stats grid (2–4 items)
 * - Optional "At a Glance" checklist (4–8 bullets)
 * - Article sections: 2-col layout (text left, images right) + optional bullets
 * - Summary cards grid
 * - Knowledge Check (Quiz) at the very end
 * - FooterNav
 */
export default function ModuleTemplate({
  hero,
  stats,
  atAGlance,
  articles,
  summary,
  quiz,
  prev,
  next,
}: ModuleTemplateProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  // Dev-only density nudges
  if (process.env.NODE_ENV !== "production") {
    const imgCount = articles.reduce((n, a) => n + (a.images?.length || 0), 0);
    const bulletCount = articles.reduce((n, a) => n + (a.bullets?.length || 0), 0);
    if (articles.length < 4)       console.warn("[ModuleTemplate] Consider ~6–8 articles. Currently:", articles.length);
    if (imgCount < 12)             console.warn("[ModuleTemplate] Consider ~18–24 images. Currently:", imgCount);
    if ((atAGlance?.length||0) <4) console.warn("[ModuleTemplate] Add 4–8 'At a Glance' bullets. Currently:", atAGlance?.length||0);
    if (bulletCount < articles.length * 3)
                                   console.warn("[ModuleTemplate] Try 3–5 key bullets/article. Currently:", bulletCount);
    if ((stats?.length||0) < 2)    console.warn("[ModuleTemplate] Add 2–4 top stats. Currently:", stats?.length||0);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/intro" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span><span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-300 bg-gray-800/80 px-2 py-1 rounded">OhmWork™ 2025</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image src={hero.imageSrc} alt={hero.imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{hero.title}</h1>
          {hero.subtitle && <p className="text-xl text-gray-300 max-w-2xl mx-auto">{hero.subtitle}</p>}
          {/* Note: no hero.blurb render by design */}
        </div>
      </section>

      {/* Stats */}
      {!!stats?.length && (
        <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
          <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {stats.map((s, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
                {s.icon && <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4">{s.icon}</div>}
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* At a Glance */}
      {!!atAGlance?.length && (
        <section className="max-w-5xl mx-auto px-4 mb-12">
          <div className={`rounded-xl border border-white/15 bg-white/[0.03] p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h3 className="text-xl font-bold text-white mb-3">At a Glance</h3>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-gray-300">
              {atAGlance.map((line, i) => (<li key={i} className="marker:text-yellow-400">{line}</li>))}
            </ul>
          </div>
        </section>
      )}

      {/* Articles */}
      {articles.map((a, idx) => {
        const { Icon, color } = pickBadge(a.title);
        const colorBg = `bg-${color}-400/20`;
        const colorText = `text-${color}-400`;
        return (
          <section
            key={a.id}
            className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${200 + idx * 100}ms` }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start px-4">
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colorBg}`}>
                    <Icon className={`w-6 h-6 ${colorText}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{a.title}</h2>
                </div>
                <div className="space-y-4 text-gray-300">{a.body}</div>
                {!!a.bullets?.length && (
                  <div className="mt-4">
                    <h4 className="text-white font-semibold mb-2">Key Points</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {a.bullets.map((b, i) => (<li key={i} className="marker:text-yellow-400">{b}</li>))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Images */}
              <div className="space-y-4">
                {a.images.map((img, i) => (
                  <div key={i} className="relative">
                    <Image src={img.src} alt={img.alt} width={480} height={320} className="rounded-xl w-full h-auto" />
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
        );
      })}

      {/* Summary */}
      <section
        className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: "900ms" }}
      >
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl font-bold text-white mb-2">{summary.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {summary.cards.map((c, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
              {c.icon && <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4">{c.icon}</div>}
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Check */}
      <section
        className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
