"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { QuizChoiceKey, QuizQuestion } from "@/app/types/module";

type Props = {
  questions: QuizQuestion[];
  storageKeyPrefix?: string; // default "ohmwork-quiz:"
};

const PASS_THRESHOLD = 0.75; // 75%
type AnswersMap = Record<number, QuizChoiceKey | null>;

function pct(n: number, d: number) {
  if (d <= 0) return 0;
  return Math.round((n / d) * 100);
}

// Normalize any choice shape to a display string
function getChoiceLabel(c: any) {
  if (c == null) return "";
  if (typeof c === "string" || typeof c === "number") return String(c);
  return (
    c.label ??
    c.text ??
    c.name ??
    c.title ??
    (c.value != null ? String(c.value) : "")
  );
}

// Get a letter key (A, B, C...) for a given index
function letterKey(idx: number): QuizChoiceKey {
  return String.fromCharCode(65 + idx) as QuizChoiceKey;
}

export default function Quiz({ questions, storageKeyPrefix = "ohmwork-quiz:" }: Props) {
  const pathname = usePathname();
  const storageKey = useMemo(
    () => `${storageKeyPrefix}${pathname ?? ""}`,
    [pathname, storageKeyPrefix]
  );

  const [answers, setAnswers] = useState<AnswersMap>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw) as AnswersMap;
    } catch {}
    const init: AnswersMap = {};
    for (const q of questions) init[q.id] = null;
    return init;
  });

  const [submitted, setSubmitted] = useState(false);
  const total = questions.length;

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(answers));
    } catch {}
  }, [answers, storageKey]);

  const { correctCount, percent } = useMemo(() => {
    if (!submitted) return { correctCount: 0, percent: 0 };
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.answer) correct++;
    }
    return { correctCount: correct, percent: pct(correct, total) };
  }, [submitted, answers, questions, total]);

  function choose(qid: number, choice: QuizChoiceKey) {
    setAnswers((prev) => ({ ...prev, [qid]: choice }));
  }

  function resetAll() {
    const init: AnswersMap = {};
    for (const q of questions) init[q.id] = null;
    setAnswers(init);
    setSubmitted(false);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  }

  function onSubmit() {
    setSubmitted(true);
    try {
      localStorage.setItem(storageKey, JSON.stringify(answers));
    } catch {}
  }

  const allAnswered = useMemo(
    () => questions.every((q) => !!answers[q.id]),
    [questions, answers]
  );

  return (
    <section aria-labelledby="quiz-heading" className="mt-12">
      <div className="rounded-2xl bg-gradient-to-b from-blue-900/60 to-indigo-900/30 border border-white/10 p-6 md:p-8 shadow-xl">
        <h2 id="quiz-heading" className="text-2xl md:text-3xl font-extrabold text-white text-center">
          Knowledge Check
        </h2>
        <p className="mt-2 text-center text-white/80">
          Answer all questions, then click <span className="font-semibold text-yellow-300">Submit Answers</span>.
          You’ll see your score after submitting. Nothing is graded until then.
        </p>

        <div className="mt-6 space-y-5">
          {(Array.isArray(questions) ? questions : []).map((q, i) => {
            const chosen = answers[q.id] ?? null;
            const showFeedback = submitted;

            // Ensure choices is an array; tolerate strings or objects
            const choices = Array.isArray(q.choices) ? q.choices : [];

            return (
              <div key={q.id} className="rounded-xl border border-white/15 bg-white/[0.03] p-4 md:p-5">
                <div className="mb-3 flex items-start gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-yellow-500/20 border border-yellow-400/40 flex items-center justify-center text-yellow-300 font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{q.stem}</h3>
                </div>

                <div className="grid gap-2">
                  {choices.map((c: any, idx: number) => {
                    const key: QuizChoiceKey = (c && c.key) ? c.key : letterKey(idx);
                    const label = getChoiceLabel(c);
                    const isSelected = chosen === key;
                    const isCorrect = key === q.answer;

                    const stateClass = showFeedback
                      ? isCorrect
                        ? "border-emerald-500/40 bg-emerald-500/10"
                        : isSelected
                        ? "border-red-500/40 bg-red-500/10"
                        : "border-white/10 bg-white/[0.02]"
                      : isSelected
                      ? "border-yellow-400/50 bg-yellow-500/10"
                      : "border-white/10 bg-white/[0.02]";

                    return (
                      <label
                        key={key}
                        className={`rounded-lg border px-3 py-2 cursor-pointer transition-colors ${stateClass}`}
                      >
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={key}
                          checked={isSelected || false}
                          onChange={() => choose(q.id, key)}
                          className="hidden"
                          aria-label={`Choice ${key}`}
                        />
                        <span className="text-white/90 font-medium mr-2">{key}.</span>
                        <span className="text-white/90">{label}</span>
                      </label>
                    );
                  })}
                </div>

                {showFeedback && (
                  <p className="mt-3 text-sm text-white/70">
                    <span className="font-semibold text-white/90">Explanation:</span> {q.why}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            onClick={resetAll}
            className="px-4 py-2 rounded-lg border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1] transition"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={!allAnswered}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              allAnswered
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-yellow-400/40 text-black/60 cursor-not-allowed"
            }`}
          >
            Submit Answers
          </button>
        </div>

        {/* Result banner */}
        {submitted && (
          <div
            className={`mt-6 rounded-xl border p-4 text-center ${
              percent >= PASS_THRESHOLD * 100
                ? "bg-emerald-500/10 border-emerald-400/40"
                : "bg-red-500/10 border-red-400/40"
            }`}
            role="status"
            aria-live="polite"
          >
            <p className="text-lg font-semibold text-white">
              Score: <span className="text-yellow-300">{percent}%</span> ({correctCount}/{total})
            </p>
            {percent >= PASS_THRESHOLD * 100 ? (
              <p className="text-emerald-300 mt-1">Nice work — you passed. 🎉</p>
            ) : (
              <p className="text-red-300 mt-1">Score below 75%. Review the material and try again.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
