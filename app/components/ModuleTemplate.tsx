"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ModuleTemplateProps } from "@/app/types/module";

// ModuleTemplate takes typed props (hero, articles, summary, quiz, prev/next)
export default function ModuleTemplate({
  hero,
  articles,
  summary,
  quiz,
  prev,
  next,
}: ModuleTemplateProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            width={800}
            height={400}
            className="mx-auto rounded-2xl shadow-lg"
          />
          <h1 className="text-4xl font-bold text-yellow-400 mt-6">{hero.title}</h1>
          {hero.subtitle && <h2 className="text-2xl text-gray-300">{hero.subtitle}</h2>}
          <p className="max-w-3xl mx-auto text-gray-400 mt-4">{hero.blurb}</p>
        </motion.div>
      </section>

      {/* Articles */}
      {articles.map((article, i) => (
        <motion.section
          key={article.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-white">{article.title}</h2>
          <div className="prose prose-invert max-w-none">{article.body}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.images.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                width={500}
                height={300}
                className="rounded-lg border border-white/20"
              />
            ))}
          </div>
        </motion.section>
      ))}

      {/* Summary */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-yellow-400">{summary.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {summary.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/15 bg-white/[0.02] p-6"
            >
              {card.icon && <div className="mb-4">{card.icon}</div>}
              <h3 className="font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quiz */}
      <section>
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Quiz</h2>
        {/* Hook into Quiz.tsx component for rendering */}
        {/* We assume a shared <Quiz questions={quiz} /> exists */}
      </section>

      {/* Footer Navigation */}
      <footer className="flex justify-between items-center mt-12">
        <Link href={prev.href} className="text-green-400 hover:underline">
          ← {prev.label}
        </Link>
        <Link href={next.href} className="text-green-400 hover:underline">
          {next.label} →
        </Link>
      </footer>
    </div>
  );
}
