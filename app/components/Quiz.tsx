"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { QuizChoiceKey, QuizQuestion } from "@/app/types/module";

type Props = {
  questions: QuizQuestion[];
  storageKeyPrefix?: string; /* default "ohmwork-quiz:" */
};

const PASS_THRESHOLD = 0.75; // 75%

type AnswersMap = Record<number, QuizChoiceKey | null>;

function pct(n: number, d: number) {
  if (d <= 0) return 0;
  return Math.round((n / d) * 100);
}

export default function Quiz({ questions, storageKeyPrefix = "ohmwork-quiz:" }: Props) {
  const pathname = usePathname();
  const storageKey = useMemo(() => `${storageKeyPrefix}${pathname ?? ""}`, [pathname, storageKeyPrefix]);

  // answers[id] = 'A' | 'B' | 'C' | 'D' | null
  const [answers, setAnswers] = useState<AnswersMap>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw) as AnswersMap;
    } catch {}
    // init with nulls for all
    const init: AnswersMap = {};
    for (const q of questions) init[q.id] = null;
    return init;
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const total = questions.length;

  // persist on change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(answers));
    } catch {}
  }, [answers, storageKey]);

  // recompute score only after submit
  const { correctCount, percent } = useMemo(() => {
    if (!submitted) return { correctCount: 0, percent: 0 };
    let correct = 0;
    for (const q of questions) {
      const a = answers[q.id];
      if (a === q.answer) correct++;
    }
    return { correctCount: correct, percent: pct(correct, total) };
  }, [submitted, answers, questions, total]);

  function onChoose(qid: number, choice: QuizChoiceKey) {
    setAnswers((prev) => ({ ...prev, [qid]: choice }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function onReset() {
    const cleared: AnswersMap = {};
    for (const q of questions) cleared[q.id] = null;
    setAnswers(cleared);
    setSubmitted(false);
    try {
      localStorage.setItem(storageKey, JSON.stringify(cleared));
    } catch {}
  }

  const allAnswered = useMemo(
    () => questions.every((q) => answers[q.id] !== null),
    [questions, answers]
  );

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Header / Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">Knowledge Check</h3>
          <p className="text-gray-400">
            Answer all questions, then click <span className="text-yellow-300 font-semibold">Submit Answers</span>.
            You’ll see your score after submitting. Nothing is graded until then.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2 rounded-lg border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 transition"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={!allAnswered}
            className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Submit Answers
          </button>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const selected = answers[q.id];
          const showResult = submitted; // only after submit
          const isCorrect = showResult && selected === q.answer;
          const isIncorrect = showResult && selected !== null && selected !== q.answer;

          return (
            <div
              key={q.id}
              className={[
                "rounded-xl border p-5",
                isCorrect ? "border-green-500/40 bg-green-500/10" : "",
                isIncorrect ? "border-red-500/40 bg-red-500/10" : "",
                !showResult ? "border-white/15 bg-white/[0.02]" : "",
              ].join(" ")}
            >
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/15 text-sm mr-2">
                  {idx + 1}
                </span>
                <span className="font-semibold text-white">{q.stem}</span>
              </div>

              <div className="grid gap-2">
                {q.choices.map((c) => {
                  const checked = selected === c.key;
                  // After submit, style the correct choice & the user's selection
                  const choiceClasses = [
                    "flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition",
                    checked ? "border-yellow-400 bg-yellow-400/10" : "border-white/10 hover:border-white/20",
                  ];

                  // Add grading colors only after submit
                  if (showResult) {
                    if (c.key === q.answer) {
                      choiceClasses.push("border-green-500/60 bg-green-500/10");
                    } else if (checked && c.key !== q.answer) {
                      choiceClasses.push("border-red-500/60 bg-red-500/10");
                    }
                  }

                  return (
                    <label key={c.key} className={choiceClasses.join(" ")}>
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={c.key}
                        checked={checked || false}
                        onChange={() => onChoose(q.id, c.key)}
                        className="mt-1"
                      />
                      <span className="text-gray-200">
                        <span className="font-mono font-semibold mr-2">{c.key}.</span>
                        {c.text}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Explanation only after submit */}
              {showResult && (
                <div className="mt-3 text-sm text-gray-300">
                  <span className="font-semibold text-white">Explanation: </span>
                  {q.why}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Results footer (only after submit) */}
      {submitted && (
        <div className="rounded-xl border border-white/15 bg-white/[0.02] p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-gray-200">
              <span className="font-semibold text-white">Score:</span>{" "}
              {correctCount} / {total} ({percent}%)
            </div>
            <div>
              {percent >= PASS_THRESHOLD ? (
                <div className="text-green-400 font-semibold">
                  Nice work — you passed! 🎉
                </div>
              ) : (
                <div className="text-red-400 font-semibold">
                  You’re close — review the material and try again. Aim for at least {PASS_THRESHOLD}%.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
