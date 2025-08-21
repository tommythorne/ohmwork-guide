"use client";

import React, { useEffect, useMemo, useState } from "react";

/** Choice key type used across the app */
export type QuizChoiceKey = "A" | "B" | "C" | "D";

/** Question shape used by Module pages */
export type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: QuizChoiceKey; text: string }[];
  answer: QuizChoiceKey;
  why: string;
};

type QuizProps = {
  questions: QuizQuestion[];
  /** Optional unique key to persist answers per module */
  storageKey?: string;
  /** Optional title override */
  title?: string;
};

type AnswerMap = Record<number, QuizChoiceKey | undefined>;

/** Small helpers */
const pct = (num: number, den: number) => (den === 0 ? 0 : Math.round((num / den) * 100));
const LS_OK = () => typeof window !== "undefined" && "localStorage" in window;

export default function Quiz({ questions, storageKey, title }: QuizProps) {
  const effectiveKey =
    storageKey ||
    (typeof window !== "undefined"
      ? `quiz:${window.location.pathname}`
      : "quiz:module");

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitted, setSubmitted] = useState(false);

  /** Load saved answers/submitted state */
  useEffect(() => {
    if (!LS_OK()) return;
    try {
      const raw = localStorage.getItem(effectiveKey);
      if (raw) {
        const data = JSON.parse(raw) as { answers: AnswerMap; submitted?: boolean };
        setAnswers(data.answers ?? {});
        setSubmitted(Boolean(data.submitted));
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveKey]);

  /** Persist on change (autosave) */
  useEffect(() => {
    if (!LS_OK()) return;
    try {
      localStorage.setItem(effectiveKey, JSON.stringify({ answers, submitted }));
    } catch {
      // ignore
    }
  }, [answers, submitted, effectiveKey]);

  /** Computed results (only meaningful after submit) */
  const { correctCount, scorePct, allAnswered } = useMemo(() => {
    const total = questions.length;
    let correct = 0;
    for (const q of questions) if (answers[q.id] === q.answer) correct += 1;
    const complete = questions.every((q) => !!answers[q.id]);
    return {
      correctCount: correct,
      scorePct: pct(correct, total),
      allAnswered: complete,
    };
  }, [answers, questions]);

  const onPick = (qid: number, key: QuizChoiceKey) => {
    if (submitted) return; // lock after submit
    setAnswers((prev) => ({ ...prev, [qid]: key }));
  };

  const onSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const onReset = () => {
    setSubmitted(false);
    setAnswers({});
    if (LS_OK()) localStorage.removeItem(effectiveKey);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white">{title || "Knowledge Check"}</h3>
          <p className="text-gray-400">
            Answer all questions, then press <span className="text-white">Submit</span> to see your score.
          </p>
        </div>
        <div className="hidden md:block text-sm text-gray-400">
          {submitted ? (
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Graded
            </span>
          ) : allAnswered ? (
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Ready to submit
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-gray-400" />
              In progress
            </span>
          )}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const selected = answers[q.id];
          // We intentionally DO NOT show correct/incorrect until submitted
          return (
            <div
              key={q.id}
              className="rounded-xl border border-white/15 bg-white/[0.03] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Question {idx + 1}</div>
                  <div className="text-white font-semibold">{q.stem}</div>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {q.choices.map((c) => {
                  const isChecked = selected === c.key;
                  return (
                    <label
                      key={c.key}
                      className={[
                        "rounded-lg border p-3 cursor-pointer transition",
                        isChecked
                          ? "border-yellow-400/60 bg-yellow-400/5"
                          : "border-white/10 hover:bg-white/[0.04]",
                        submitted ? "opacity-80 cursor-not-allowed" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={c.key}
                          checked={isChecked}
                          disabled={submitted}
                          onChange={() => onPick(q.id, c.key)}
                          className="accent-yellow-400"
                        />
                        <span className="text-white font-semibold">{c.key}.</span>
                        <span className="text-gray-200">{c.text}</span>
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* Explanation — hidden until submitted; does NOT reveal correct option explicitly */}
              {submitted && (
                <div className="mt-3 text-sm text-gray-400">
                  {q.why}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3">
        <button
          onClick={onSubmit}
          disabled={!allAnswered || submitted}
          className={[
            "px-5 py-3 rounded-xl font-semibold transition",
            allAnswered && !submitted
              ? "bg-yellow-500 text-black hover:bg-yellow-400"
              : "bg-white/10 text-gray-400 cursor-not-allowed",
          ].join(" ")}
        >
          Submit Answers
        </button>

        <button
          onClick={onReset}
          className="px-5 py-3 rounded-xl font-semibold bg-white/5 text-gray-200 hover:bg-white/10 transition"
        >
          Reset Quiz
        </button>

        {/* Score pill (only after submit) */}
        {submitted && (
          <div
            className={[
              "md:ml-auto px-4 py-2 rounded-lg border",
              scorePct >= 75
                ? "border-green-400/40 bg-green-400/10 text-green-300"
                : "border-red-400/40 bg-red-400/10 text-red-300",
            ].join(" ")}
          >
            Score: <span className="font-bold">{scorePct}%</span> ({correctCount}/{questions.length})
          </div>
        )}
      </div>

      {/* Pass/Fail messaging */}
      {submitted && (
        <div className="mt-4">
          {scorePct >= 75 ? (
            <div className="rounded-xl border border-green-500/40 bg-green-500/10 p-4 text-green-200">
              Nice work — you passed! Keep the momentum going and move on when you’re ready.
            </div>
          ) : (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-200">
              You’re close. Review the sections that felt shaky and try again — aim for at least 75% to pass.
            </div>
          )}
        </div>
      )}
    </div>
  );
}