"use client";

import { useState } from "react";
import Link from "next/link";

// Simple highlight helpers for consistency
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);
const Divider = () => (
  <div className="my-8 flex items-center gap-3">
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-yellow-400">
      <path
        d="M12 2l1.8 4.6L18 8l-4.2 3.1L14 16l-4-2.7L6 16l.2-4.9L2 8l4.2-1.4L8 2h4z"
        fill="currentColor"
        fillOpacity=".85"
      />
    </svg>
    <div className="h-px w-full bg-white/10" />
  </div>
);

type Q = {
  id: number;
  stem: string;
  choices: { key: "A" | "B" | "C" | "D"; text: string }[];
  answer: "A" | "B" | "C" | "D";
  why: string;
};

const quiz: Q[] = [
  {
    id: 1,
    stem:
      "Article 90's primary purpose is best summarized as:",
    choices: [
      { key: "A", text: "Ensuring perfect performance of electrical systems" },
      { key: "B", text: "Practical safeguarding of persons and property" },
      { key: "C", text: "Mandating utility distribution practices" },
      { key: "D", text: "Enforcing manufacturer warranties" },
    ],
    answer: "B",
    why:
      "NEC 90.1(A) — The Code's purpose is the practical safeguarding of persons and property from hazards arising from electricity.",
  },
  {
    id: 2,
    stem:
      "NEC definitions (like 'Grounded Conductor') live primarily in:",
    choices: [
      { key: "A", text: "Article 110" },
      { key: "B", text: "Article 100" },
      { key: "C", text: "Chapter 9" },
      { key: "D", text: "Annex D" },
    ],
    answer: "B",
    why:
      "Article 100 — Definitions. Learn them cold; the exam loves definition traps.",
  },
  {
    id: 3,
    stem:
      "NEC 110 generally covers:",
    choices: [
      { key: "A", text: "Wiring methods" },
      { key: "B", text: "General requirements for electrical installations" },
      { key: "C", text: "Overcurrent protection devices" },
      { key: "D", text: "Communications systems" },
    ],
    answer: "B",
    why:
      "Article 110 — General Requirements for Electrical Installations (working space, listing/labeling, terminations, etc.).",
  },
  {
    id: 4,
    stem:
      "The NEC is intended to be used by:",
    choices: [
      { key: "A", text: "Only engineers" },
      { key: "B", text: "Only inspectors" },
      { key: "C", text: "Those who design, install, and inspect electrical systems" },
      { key: "D", text: "Only utilities" },
    ],
    answer: "C",
    why:
      "NEC 90.1(C) & scope — It's written for design, installation, and inspection. Utilities are generally outside NEC scope.",
  },
  {
    id: 5,
    stem:
      "Which statement about 'Listed and Labeled' equipment is most accurate?",
    choices: [
      { key: "A", text: "Listing is optional if you're careful" },
      { key: "B", text: "Listed equipment must be installed per its listing and labeling" },
      { key: "C", text: "Listing only applies to residential work" },
      { key: "D", text: "Labeling can be ignored if AHJ says nothing" },
    ],
    answer: "B",
    why:
      "NEC 110.3(B) — Install and use equipment per listing and labeling. The AHJ will expect it.",
  },
  {
    id: 6,
    stem:
      "Working space around equipment (think panels) primarily exists to:",
    choices: [
      { key: "A", text: "Store tools" },
      { key: "B", text: "Keep inspectors happy" },
      { key: "C", text: "Enable safe operation and maintenance" },
      { key: "D", text: "Increase arc flash energy" },
    ],
    answer: "C",
    why:
      "NEC 110.26 — Working space ensures safe operation and maintenance. Clear, accessible, dimensioned.",
  },
  {
    id: 7,
    stem:
      "The Code is not intended as a design manual. What does that imply?",
    choices: [
      { key: "A", text: "We ignore design entirely" },
      { key: "B", text: "You follow manufacturer instructions & standards alongside the NEC" },
      { key: "C", text: "Only inspectors need to know design" },
      { key: "D", text: "NEC gives all the answers, always" },
    ],
    answer: "B",
    why:
      "NEC 90.1(B) — The Code is not a design manual; use standards/manufacturer instructions. The NEC sets the minimum safety bar.",
  },
  {
    id: 8,
    stem:
      "AHJ stands for:",
    choices: [
      { key: "A", text: "Authority Having Jurisdiction" },
      { key: "B", text: "Authority Handling Jobs" },
      { key: "C", text: "Agency for High-voltage Jobs" },
      { key: "D", text: "Association of Home Journeymen" },
    ],
    answer: "A",
    why:
      "AHJ = Authority Having Jurisdiction. They interpret and enforce the Code locally.",
  },
  {
    id: 9,
    stem:
      "If a product's instructions conflict with the NEC, you should:",
    choices: [
      { key: "A", text: "Follow the instructions; manufacturer always wins" },
      { key: "B", text: "Follow the NEC; minimum safety requirements control" },
      { key: "C", text: "Flip a coin and hope the AHJ likes it" },
      { key: "D", text: "Install both ways and let the next guy decide" },
    ],
    answer: "B",
    why:
      "The NEC sets the enforceable minimum safety requirements. Instructions must be compatible with the Code; AHJ decides enforcement.",
  },
  {
    id: 10,
    stem:
      "Which is **not** typically in Chapter 1?",
    choices: [
      { key: "A", text: "Definitions" },
      { key: "B", text: "General installation requirements" },
      { key: "C", text: "Overcurrent protection coordination rules" },
      { key: "D", text: "Purpose and scope statements" },
    ],
    answer: "C",
    why:
      "OCP details/coordination are addressed later (e.g., Chapters 2 & 4+). Chapter 1 covers purpose, scope, definitions, general requirements.",
  },
];

export default function Ch1General() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (id: number) =>
    setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <main className="min-h-screen bg-black text-white px-5 py-8 md:px-8 md:py-12">
      {/* Top Bar */}
      <div className="mx-auto max-w-5xl flex items-center justify-between gap-4">
        <Link href="/intro" className="text-white/70 hover:text-white transition">
          ← Back to TOC
        </Link>
        <span className="text-yellow-400 font-semibold">NEC 2017</span>
      </div>

      {/* Title */}
      <div className="mx-auto max-w-5xl mt-4 md:mt-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 drop-shadow">
          Chapter 1 — General
        </h1>
        <p className="mt-3 text-white/85">
          <HL>Foundation of the Code</HL>: purpose, scope, definitions, and the general rules that keep the
          jobsite from turning into a fireworks show. You nail this, the rest of the book gets easier.
        </p>
      </div>

      <Divider />

      {/* ⚡️ Article 90 — Purpose, Scope, How the NEC Works */}
      <section className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">
          ⚡️ Article 90 — Purpose, Scope, How This Beast Operates
        </h2>
        <div className="mt-3 space-y-3 text-white/90">
          <p>
            — The NEC's mission isn't "perfect systems." It's <HL>practical safeguarding</HL> of people and
            property (<span className="italic">90.1(A)</span>). Translation: minimize hazard. Period.
          </p>
          <p>
            — The Code is <HL>not a design manual</HL> (<span className="italic">90.1(B)</span>). You still follow
            <HL> manufacturer instructions</HL>, standards, and good sense. The NEC sets the safety floor.
          </p>
          <p>
            — <HL>Enforcement</HL> belongs to the <HL>AHJ</HL> (Authority Having Jurisdiction). They interpret, you comply.
          </p>
          <p>
            — Utility stuff? Mostly <HL>outside</HL> NEC scope. Your work? Squarely inside.
          </p>
        </div>
      </section>

      <Divider />

      {/* 🔧 Article 100 — Definitions */}
      <section className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">🔧 Article 100 — Definitions</h2>
        <p className="mt-3 text-white/90">
          The exam weaponizes definitions. Learn these like your job depends on it—because it does.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
            <h3 className="font-bold text-yellow-400">Grounded Conductor</h3>
            <p className="text-white/85 mt-1">
              A system conductor that is <HL>intentionally grounded</HL>. Often the neutral. Don't treat it like harmless.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
            <h3 className="font-bold text-yellow-400">Equipment Grounding Conductor (EGC)</h3>
            <p className="text-white/85 mt-1">
              The conductor that <HL>bonds equipment</HL> to ground. Carries <span className="italic">fault</span> current. Saves lives.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
            <h3 className="font-bold text-yellow-400">Bonding</h3>
            <p className="text-white/85 mt-1">
              <HL>Connecting metallic parts</HL> to establish electrical continuity and conductivity. You're controlling potential.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
            <h3 className="font-bold text-yellow-400">Listed & Labeled</h3>
            <p className="text-white/85 mt-1">
              Evaluated by a qualified lab, and must be installed <HL>per listing and labeling</HL> (110.3(B)).
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* 🛠️ Article 110 — General Requirements */}
      <section className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">🛠️ Article 110 — General Requirements</h2>
        <div className="mt-3 space-y-3 text-white/90">
          <p>
            — <HL>110.3(B)</HL): Install equipment per instructions. If you "wing it," you fail hard.
          </p>
          <p>
            — <HL>Working Space (110.26)</HL>: Clearances so you can work without headbutting a live bus.
            Think width, depth, height, and <HL>access</HL>. Panels aren't coat racks.
          </p>
          <p>
            — <HL>Terminations</HL>: Use conductors and lugs that match ratings (copper/aluminum, temperature).
          </p>
          <p>
            — <HL>Guarding, Marking, and Accessibility</HL>: If someone can touch it, it better be safe and labeled.
          </p>
        </div>

        {/* Tiny visual card row */}
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03]">
            <svg width="36" height="36" viewBox="0 0 24 24" className="text-yellow-400">
              <path d="M12 2l4 8H8l4-8zm0 20l-4-8h8l-4 8z" fill="currentColor" />
            </svg>
            <p className="mt-2 text-white/85">
              <HL>Label it</HL> so the next human doesn't guess at 2AM.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03]">
            <svg width="36" height="36" viewBox="0 0 24 24" className="text-yellow-400">
              <path d="M4 4h16v4H4V4zm0 6h16v10H4V10z" fill="currentColor" />
            </svg>
            <p className="mt-2 text-white/85">
              <HL>Working space</HL> — not storage. Keep it clear.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03]">
            <svg width="36" height="36" viewBox="0 0 24 24" className="text-yellow-400">
              <path d="M7 12l5-9 5 9-5 9-5-9z" fill="currentColor" />
            </svg>
            <p className="mt-2 text-white/85">
              <HL>Use listed gear</HL> per its instructions. No hero builds.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* �� Hazards & Exam Traps */}
      <section className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">�� Hazards & Exam Traps</h2>
        <div className="mt-3 space-y-3 text-white/90">
          <p>
            — <HL>Definitions</HL> are bait. "Grounded vs. Grounding," "Bonding vs. Grounding"—they'll play word games.
          </p>
          <p>
            — <HL>Working space</HL> clearances: don't mix up depth categories or voltage thresholds.
          </p>
          <p>
            — <HL>110.3(B)</HL> is a favorite: listing/labeling is not a suggestion.
          </p>
          <p>
            — <HL>NEC ≠ design manual</HL>. You'll be tested on minimums, not best‑in‑class.
          </p>
        </div>
      </section>

      <Divider />

      {/* 🧠 Quick Reference (tiny) */}
      <section className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">�� Quick Reference</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
            <h3 className="font-bold text-yellow-400">Where Stuff Lives</h3>
            <p className="text-white/85 mt-1">
              — Article 90: Why/How the NEC works<br />
              — Article 100: Definitions<br />
              — Article 110: General installation rules
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
            <h3 className="font-bold text-yellow-400">Fast Rules</h3>
            <p className="text-white/85 mt-1">
              — Follow <HL>listing & labeling</HL><br />
              — Keep <HL>working space</HL> clear<br />
              — Respect <HL>AHJ</HL> interpretations
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* 📝 Quiz */}
      <section className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">📝 10‑Question Check</h2>
        <p className="text-white/80 mt-2">
          Tap "Check Answer." Learn why. Move on. Don't overthink.
        </p>

        <div className="mt-5 space-y-5">
          {quiz.map((q) => (
            <div key={q.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-white font-semibold">
                {q.id}. {q.stem}
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-2">
                {q.choices.map((c) => (
                  <label
                    key={c.key}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-white/90 hover:border-yellow-400/40 transition"
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      onChange={() => {}}
                      className="accent-yellow-400"
                    />
                    <span className="font-mono text-yellow-300">{c.key}</span>
                    <span>{c.text}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={() => toggle(q.id)}
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-green-500 text-black font-bold px-4 py-2 hover:bg-green-400 transition"
              >
                Check Answer
              </button>

              {open[q.id] && (
                <div className="mt-3 rounded-lg border border-green-400/30 bg-green-400/10 p-3">
                  <div className="font-mono text-sm">
                    Correct: <span className="text-green-400">{q.answer}</span>
                  </div>
                  <div className="mt-1 text-white/90">{q.why}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Footer nav */}
      <div className="mx-auto max-w-5xl flex items-center justify-between mt-6">
        <Link href="/intro" className="text-white/70 hover:text-white transition">
          ← Back to TOC
        </Link>
        <Link href="/modules/module-02-wiring-methods" className="text-white/70 hover:text-white transition">
          Next: Ch 2 — Wiring Methods →
        </Link>
      </div>

      {/* Spacer */}
      <div className="h-8" />
    </main>
  );
}