"use client";
import type { QuizQuestion } from "../../types/module";
import ModuleTemplate from "../../components/ModuleTemplate";

// Minimal, ready-to-fill quiz (copy/paste to expand)
const quiz: QuizQuestion[] = [
  { id: 1, stem: "Placeholder question?", choices: [
    { key: "A", text: "A" }, { key: "B", text: "B" }, { key: "C", text: "C" }, { key: "D", text: "D" }
  ], answer: "A", why: "Explain why." },
];

export default function Module05Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-05/m05-01.jpg",
        imageAlt: "Module 5 hero image",
        title: "Chapter 5 — Title Here",
        subtitle: "Short hook here",
        blurb: "One-sentence overview (optional; safe to omit now that type allows it)."
      }}
      articles={[
        {
          id: "article-XXX",
          title: "Article XXX — Title",
          body: (
            <>
              <p>Drop your content here. Use <strong>&lt;HL /&gt;</strong> etc. from Blocks if you like, or keep it simple.</p>
            </>
          ),
          images: [
            { src: "/images/module-05/m05-02.jpg", alt: "Alt text", caption: "Caption (optional)" }
          ]
        },
      ]}
      summary={{
        title: "Chapter 5 Summary",
        cards: [
          { title: "Key Point 1", text: "One-liner." },
          { title: "Key Point 2", text: "One-liner." },
        ]
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-04", label: "Chapter 4" }}
      next={{ href: "/modules/module-06", label: "Chapter 6" }}
    />
  );
}
