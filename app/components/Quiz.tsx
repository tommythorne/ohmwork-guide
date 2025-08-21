"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle, XCircle, Percent, RefreshCcw, Save, Send } from "lucide-react";
// Import the shared types from ModuleTemplate to stay consistent
import type { QuizQuestion, QuizChoiceKey } from "./ModuleTemplate";

type Props = {
  questions: QuizQuestion[];
  /** Optional: provide your own storage key. If omitted, the component will use the current pathname. */
  storageKey?: string;
};

type StoredState = {
  selections: Record<number, QuizChoiceKey | null>;
  submitted: boolean;
  scorePct: number | null;
};

const STORAGE_VERSION = 1;

export default function Quiz({ questions, storageKey }: Props) {
  // Derive a stable storage key from the current route if none is provided
  const derivedKey = useMemo(() => {
    if (storageKey) return `quiz:${STORAGE_VERSION}:${storageKey}`;
    if (typeof window !== "undefined") {
      return `quiz:${STORAGE_VERSION}:${window.location.pathname}`;
    }
    return `quiz:${STORAGE_VERSION}:global`;
  }, [storageKey]);

  // local state
  const [selections, setSelections] = useState<Record<number, QuizChoiceKey | null>>(
    () => Object.fromEntries(questions.map(q => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);
  const [scorePct, setScorePct] = useState<number | null>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(derivedKey);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredState;
        // Defensive: only adopt ids that exist in the current quiz
        const allowedIds = new Set(questions.map(q => q.id));
        const restoredSelections: Record<number, QuizChoiceKey | null> = Object.fromEntries(
          Object.entries(parsed.selections || {}).filter(([id]) => allowedIds.has(Number(id)))
        ) as any;

        setSelections(prev => ({ ...prev, ...restoredSelections }));
        setSubmitted(Boolean(parsed.submitted));
        setScorePct(typeof parsed.scorePct === "number" ? parsed.scorePct : null);
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [derivedKey]);

  // Persist to localStorage whenever things change
  useEffect(() => {
    if (typeof window === "undefined") return;
    const snapshot: StoredState = {
      selections,
      submitted,
      scorePct,
    };
    try {
      localStorage.setItem(derivedKey, JSON.stringify(snapshot));
    } catch {
      // ignore quota errors
    }
  }, [derivedKey, selections, submitted, scorePct]);

  const total = questions.length;
  const answeredCount = useMemo(
    () => Object.values(selections).filter(Boolean).length,
    [selections]
  );

  const handleSelect = (qid: number, choice: QuizChoiceKey) => {
    if (submitted) return; // lock after submit
    setSelections(prev => ({ ...prev, [qid]: choice }));
  };

  const handleSubmit = () => {
    // grade
    let correct = 0;
    for (const q of questions) {
      if (selections[q.id] === q.answer) correct++;
    }
    const pct = Math.round((correct / total) * 100);
    setScorePct(pct);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelections(Object.fromEntries(questions.map(q => [q.id, null])) as Record<
      number,
      QuizChoiceKey | null
    >);
    setSubmitted(false);
    setScorePct(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header / Progress */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-white">Knowledge Check</h3>
          <p className="text-gray-400 text-sm">
            Answer the questions below. Your progress is saved automatically.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-40 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400 transition-all duration-300"
              style={{ width: `${Math.round((answeredCount / total) * 100)}%` }}
            />
          </div>
          <span className="text-gray-300 text-sm">
            {answeredCount}/{total} answered
          </span>
        </div>
      </div>

      {/* Score banner (after submit) */}
      {submitted && (
        <div
          className={`mb-6 rounded-xl border p-4 ${
            (scorePct ?? 0) >= 75
              ? "border-emerald-500/40 bg-emerald-500/10"
              : "border-red-500/40 bg-red-500/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Percent
              className={`w-5 h-5 ${
                (scorePct ?? 0) >= 75 ? "text-emerald-400" : "text-red-400"
              }`}
            />
            <div className="text-white/90">
              <div className="font-bold">
                Score: {scorePct}% ({scorePct! >= 75 ? "Pass" : "Below 75%"})
              </div>
              {scorePct! < 75 ? (
                <div className="text-sm text-red-300">
                  Close! Review the sections above and give it another go — you’ve got this.
                </div>
              ) : (
                <div className="text-sm text-emerald-300">Nice work — solid grasp of this chapter.</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const userPick = selections[q.id];
          const showResult = submitted && userPick;
          const isCorrect = submitted && userPick === q.answer;

          return (
            <div
              key={q.id}
              className={`rounded-xl border p-5 transition-colors ${
                showResult
                  ? isCorrect
                    ? "border-emerald-500/40 bg-emerald-500/5"
                    : "border-red-500/40 bg-red-500/5"
                  : "border-white/15 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Question {idx + 1}</div>
                  <div className="text-white font-semibold leading-snug">{q.stem}</div>
                </div>

                {showResult && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" aria-hidden="true" />
                    )}
                  </div>
                )}
              </div>

              <div className="mt-4 grid gap-2">
                {q.choices.map(c => {
                  const checked = userPick === c.key;
                  return (
                    <label
                      key={c.key}
                      className={`flex items-center gap-3 rounded-lg border px-3 py-2 cursor-pointer transition-colors ${
                        checked ? "border-yellow-400/60 bg-yellow-400/10" : "border-white/10"
                      } ${submitted ? "opacity-75 cursor-default" : "hover:bg-white/[0.04]"}`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={c.key}
                        className="accent-yellow-400"
                        checked={checked || false}
                        disabled={submitted}
                        onChange={() => handleSelect(q.id, c.key)}
                        aria-labelledby={`q-${q.id}-choice-${c.key}`}
                      />
                      <span id={`q-${q.id}-choice-${c.key}`} className="text-white/90">
                        <span className="font-mono text-yellow-300 mr-2">{c.key}.</span> {c.text}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Explanation only AFTER submit */}
              {submitted && (
                <div className="mt-3 text-sm text-gray-300">
                  <span className="font-semibold text-white">Why:</span> {q.why}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleSubmit}
          disabled={submitted}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold transition
            ${submitted ? "bg-white/10 text-gray-400 cursor-not-allowed" : "bg-yellow-400 text-black hover:bg-yellow-300"}`}
        >
          <Send className="w-4 h-4" />
          Submit Answers
        </button>

        <button
          onClick={handleReset}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold border border-white/20 text-white hover:bg-white/[0.06] transition"
          title="Clear selections and try again"
        >
          <RefreshCcw className="w-4 h-4" />
          Reset Quiz
        </button>

        <div className="ml-auto flex items-center gap-2 text-gray-400 text-sm">
          <Save className="w-4 h-4" />
          Progress autosaves
        </div>
      </div>
    </div>
  );
}