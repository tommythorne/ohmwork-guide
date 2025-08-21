"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

/** ==== Types must match ModuleTemplate expectations ==== */
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
  /** Optional: override storage key if needed */
  storageKey?: string;
  /** Optional: passing threshold; default 75 (%) */
  passThresholdPct?: number;
};

type AnswersMap = Record<number, QuizChoiceKey | undefined>;

const STORAGE_VERSION = "v1";

/** Small helper to safely access localStorage in Next.js */
const safeStorage = {
  get(key: string) {
    if (typeof window === "undefined") return null;
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, value);
    } catch {
      /* ignore */
    }
  },
  remove(key: string) {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  },
};

export default function Quiz({
  questions,
  storageKey,
  passThresholdPct = 75,
}: QuizProps) {
  const pathname = usePathname();
  const resolvedKey =
    storageKey || `quiz:${STORAGE_VERSION}:${pathname || "unknown"}`;

  const [answers, setAnswers] = useState<AnswersMap>({});
  const [submitted, setSubmitted] = useState(false);
  const [scorePct, setScorePct] = useState<number | null>(null);

  /** Load any saved (in-progress) answers */
  useEffect(() => {
    const raw = safeStorage.get(resolvedKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as {
          answers?: AnswersMap;
          submitted?: boolean;
          scorePct?: number | null;
        };
        if (parsed.answers) setAnswers(parsed.answers);
        // Always reset to not-submitted when revisiting so nothing is revealed
        setSubmitted(false);
        setScorePct(null);
      } catch {
        /* ignore */
      }
    }
  }, [resolvedKey]);

  /** Autosave progress whenever answers change (but not grading state) */
  useEffect(() => {
    const payload = JSON.stringify({ answers });
    safeStorage.set(resolvedKey, payload);
  }, [answers, resolvedKey]);

  const total = questions.length;

  const numAnswered = useMemo(
    () =>
      questions.reduce(
        (acc, q) => (answers[q.id] ? acc + 1 : acc),
        0
      ),
    [questions, answers]
  );

  const canSubmit = numAnswered === total && total > 0;

  /** Grade only when the user submits */
  const handleSubmit = () => {
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.answer) correct++;
    }
    const pct = Math.round((correct / total) * 100);
    setScorePct(pct);
    setSubmitted(true);
    // Save graded state too, so refresh shows the result panel;
    // if you prefer not to persist the result, remove this:
    const payload = JSON.stringify({ answers });
    safeStorage.set(resolvedKey, payload);
  };

  const handleChange = (qid: number, choice: QuizChoiceKey) => {
    setAnswers((prev) => ({ ...prev, [qid]: choice }));
    // If they change answers after grading, clear the result so they must submit again
    if (submitted) {
      setSubmitted(false);
      setScorePct(null);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScorePct(null);
    safeStorage.remove(resolvedKey);
  };

  return (
    <div className="space-y-8">
      {/* Header / Progress */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-white">Knowledge Check</h3>
          <p className="text-gray-400">
            Answer all questions, then press <span className="font-semibold">Submit Answers</span>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-2">
            <span className="text-sm text-gray-300">
              Progress:{" "}
              <span className="font-semibold text-white">
                {numAnswered}/{total}
              </span>
            </span>
          </div>
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
            aria-label="Reset quiz"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const selected = answers[q.id];
          const isCorrect = submitted && selected === q.answer;
          const isIncorrect = submitted && selected && selected !== q.answer;

          return (
            <div
              key={q.id}
              className="rounded-xl border border-white/15 bg-white/[0