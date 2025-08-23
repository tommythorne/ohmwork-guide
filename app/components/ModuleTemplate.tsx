// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Quiz from "./Quiz";
import FooterNav from "./FooterNav"; // <-- footer wired here

import {
  BookOpen, Target, Zap, ShieldCheck, CircuitBoard, Calculator,
  CloudLightning, AlertTriangle, Cable
} from "lucide-react";

/**
 * ModuleTemplate — HARD-LOCKED to Module 2 layout:
 * - Top bar badge
 * - Hero (image + title/subtitle)
 * - Stats cards (3)
 * - Article sections (2-col: text left, up to 2 images right)
 * - Knowledge Check section (only if props.quiz exists)
 * - Footer navigation (only if props.prev or props.next provided)
 * Accepts permissive props to avoid TS blowups.
 */

const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

const iconMap: Record<string, any> = {
  BookOpen, Target, Zap, ShieldCheck, CircuitBoard, Calculator, CloudLightning, AlertTriangle, Cable
};

function getIcon(iconName?: string, className?: string) {
  if (!iconName) return null;
  const Ico = iconMap[iconName] || null;
  return Ico ? <Ico className={className || "w-6 h-6"} /> : null;
}

function renderPoint(p: any, i: number) {
  if (typeof p === "string") return <p key={i} className="text-gray-300"><HL>{p}</HL></p>;
  const ref = p?.ref ? <HL>{p.ref}</HL> : null;
  const text = p?.text || "";
  return (
    <p key={i} className="text-gray-300">
      {ref}{ref && text ? ": " : null}{text}
    </p>
  );
}

function ArticleBlock({ a, delay = 300 }: { a: any; delay?: number }) {
  const icon = getIcon(a?.iconName, "w-6 h-6 text-green-400");
  const points = Array.isArray(a?.points) ? a.points : Array.isArray(a?.bullets) ? a.bullets : [];
  const imgs  = Array.isArray(a?.images) ? a.images.slice(0,2) : [];
  return (
    <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-${delay}`}>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-400/20 rounded-lg">
              {icon || <ShieldCheck className="w-6 h-6 text-green-400" />}
            </div>
            <h2 className="text-2xl font-bold text-white">{a?.title || "Untitled Section"}</h2>
          </div>
          <div className="space-y-4">
            {points.length > 0
              ? points.map((p:any, i:number) => renderPoint(p, i))
              : a?.body
                ? <div className="prose prose-invert max-w-none">{a.body}</div>
                : null}
          </div>
        </div>

        <div className="space-y-4">
          {imgs.map((img:any, i:number) => (
            <div className="relative" key={i}>
              <img
                src={img?.src || "/images/placeholder.jpg"}
                alt={img?.alt || ""}
                width={400}
                height={300}
                className="rounded-xl w-full h-auto object-cover border border-white/10"
              />
              {(img?.caption || img?.alt) ? (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                  <p className="text-sm">{img?.caption || img?.alt}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ModuleTemplate(props: any) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const hero = props?.hero || {};
  const heading = hero?.title || props?.title || "";
  const subtitle = hero?.subtitle || props?.intro || "";
  const heroImg = hero?.imageSrc || "/images/hero-default.jpg";

  const articles = Array.isArray(props?.articles) ? props.articles : [];

  // Stats: use provided or derive
  const stats = Array.isArray(props?.stats) && props.stats.length === 3
    ? props.stats
    : [
        { iconName: "BookOpen", value: String(articles.length || 0), label: "Major Articles" },
        { iconName: "Target",   value: String((props?.quiz && props.quiz.length) || props?.quizCount || 0), label: "Quiz Questions" },
        { iconName: "Zap",      value: String(articles.reduce((n:number,a:any)=> n + (Array.isArray(a?.images)?a.images.length:0), 0)), label: "Visual Examples" },
      ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/intro" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span><span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">OhmWork™ 2025</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt={hero?.imageAlt || "module hero"} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl font-bold text-white mb-4">{heading}</h1>
          {subtitle ? <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p> : null}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.slice(0,3).map((s:any, i:number) => {
            const Ico = iconMap[s.iconName] || [BookOpen,Target,Zap][i] || BookOpen;
            const color = i===0?"blue":i===1?"green":"purple";
            return (
              <div key={i} className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className={`w-12 h-12 bg-${color}-400/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Ico className={`w-6 h-6 text-${color}-400`} />
                </div>
                <div className="text-2xl font-bold text-white">{s.value ?? "0"}</div>
                <div className="text-gray-400">{s.label ?? ""}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Articles */}
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {articles.map((a:any, idx:number) => (
          <ArticleBlock key={a?.id || a?.title || idx} a={a} delay={300 + idx*100} />
        ))}
      </div>

      {/* Knowledge Check */}
      {Array.isArray(props?.quiz) && props.quiz.length > 0 ? (
        <section className="mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1500">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Knowledge Check</h2>
            <p className="text-gray-400 text-lg">Test your understanding of this chapter</p>
          </div>
          <Quiz questions={props.quiz} />
        </section>
      ) : null}

      {/* Footer Navigation — renders only if prev/next provided */}
      {(props?.prev || props?.next) ? (
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <FooterNav prev={props.prev} next={props.next} />
        </section>
      ) : null}
    </main>
  );
}
