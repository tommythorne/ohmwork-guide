"use client";

import React, { useEffect, useMemo, useState } from "react";

export type QuizChoiceKey = "A" | "B" | "C" | "D";

export type QuizQuestion = {
  id: number;
  stem: string;
  choices: { key: QuizChoiceKey; text: string }[];
  answer: QuizChoiceKey;
  why: string;
};

type QuizProps = {
  questions: QuizQuestion[];
  storageKey?: string; // unique per module; falls back to pathname
  title?: string;
};

type AnswerMap = Record<number, QuizChoiceKey | undefined>;

const pct = (num: number, den: number) => (den === 0 ? 0 : Math.round((num / den) * 100));
const hasLS = () => typeof window !== "undefined" && "localStorage" in window;

export default function Quiz({ questions, storageKey, title }: QuizProps) {
  const key =
    storageKey ||
    (typeof window !== "undefined" ? `quiz:${window.location.pathname}` : "quiz:module");

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitted, setSubmitted] = useState(false);

  // Load saved progress
  useEffect(() => {
    if (!hasLS()) return;
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const data = JSON.parse(raw) as { answers: AnswerMap; submitted?: boolean };
        setAnswers(data.answers ?? {});
        setSubmitted(Boolean(data.submitted));
      }
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Save on change
  useEffect(() => {
    if (!hasLS()) return;
    try {
      localStorage.setItem(key, JSON.stringify({ answers, submitted }));
    } catch {
      /* ignore */
    }
  }, [answers, submitted, key]);

  const { complete, correctCount, scorePct } = useMemo(() => {
    const total = questions.length;
    const completeAll = questions.every((q) => !!answers[q.id]);
    let correct = 0;
    for (const q of questions) if (answers[q.id] === q.answer) correct += 1;
    return { complete: completeAll, correctCount: correct, scorePct: pct(correct, total) };
  }, [answers, questions]);

  const choose = (qid: number, k: QuizChoiceKey) => {
    if (submitted) return; // lock after submit
    setAnswers((prev) => ({ ...prev, [qid]: k }));
  };

  const onSubmit = () => {
    if (!complete) return;
    setSubmitted(true);
  };

  const onReset = () => {
    setSubmitted(false);
    setAnswers({});
    if (hasLS()) localStorage.removeItem(key);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white">{title || "Knowledge Check"}</h3>
          <p className="text-gray-400">
            Answer all questions, then press <span className="text-white font-semibold">Submit</span> to see your score.
          </p>
        </div>
        <div className="hidden md:block text-sm">
          {!submitted ? (
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${
                complete
                  ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-200"
                  : "border-white/10 bg-white/5 text-gray-300"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${complete ? "bg-yellow-400" : "bg-gray-400"}`} />
              {complete ? "Ready to submit" : "In progress"}
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-green-400/40 bg-green-400/10 text-green-200">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Graded
            </span>
          )}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, i) => {
          const selected = answers[q.id];
          const isCorrect = submitted && selected === q.answer;
          const isIncorrect = submitted && selected && selected !== q.answer;

          return (
            <div
              key={q.id}
              className={[
                "rounded-xl border p-5 transition",
                // BEFORE submit: neutral
                !submitted && "border-white/15 bg-white/[0.03]",
                // AFTER submit: tint if user chose correctly/incorrectly
                submitted && isCorrect && "border-green-400/40 bg-green-400/5",
                submitted && isIncorrect && "border-red-400/40 bg-red-400/5",
                submitted && !selected && "border-white/15 bg-white/[0.03]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Numbered badge + stem */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <div className="mt-1 text-[10px] text-gray-400 text-center">of {questions.length}</div>
                </div>
                <div className="text-white font-semibold leading-relaxed">{q.stem}</div>
              </div>

              {/* Choices */}
              <div className="mt-4 grid gap-2">
                {q.choices.map((c) => {
                  const checked = selected === c.key;

                  // BEFORE submit: selection only (no correctness hints)
                  const beforeSubmit = !submitted
                    ? checked
                      ? "border-yellow-400/60 bg-yellow-400/5"
                      : "border-white/10 hover:bg-white/[0.05]"
                    : "";

                  // AFTER submit: color only the chosen option
                  const afterSubmit =
                    submitted && checked && isCorrect
                      ? "border-green-400/60 bg-green-400/10"
                      : submitted && checked && isIncorrect
                      ? "border-red-400/60 bg-red-400/10"
                      : submitted
                      ? "border-white/10 opacity-80"
                      : "";

                  return (
                    <label
                      key={c.key}
                      className={["rounded-lg border p-3 cursor-pointer transition flex items-center gap-3", beforeSubmit, afterSubmit].join(
                        " ",
                      )}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={c.key}
                        checked={checked}
                        disabled={submitted}
                        onChange={() => choose(q.id, c.key)}
                        className="accent-yellow-400"
                      />
                      <span className="text-white font-semibold">{c.key}.</span>
                      <span className="text-gray-200">{c.text}</span>
                    </label>
                  );
                })}
              </div>

              {/* Explanation — only after submit */}
              {submitted && <div className="mt-3 text-sm text-gray-300">{q.why}</div>}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3">
        <button
          onClick={onSubmit}
          disabled={!complete || submitted}
          className={[
            "px-5 py-3 rounded-xl font-semibold transition",
            complete && !submitted ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-white/10 text-gray-400 cursor-not-allowed",
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

      {/* Pass/Fail message */}
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