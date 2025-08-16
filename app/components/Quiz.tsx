'use client';

import { useMemo, useState } from 'react';

type ChoiceKey = 'A'|'B'|'C'|'D';
type Choice = { key: ChoiceKey; text: string };
type Question = {
  id: number;
  stem: string;
  choices: Choice[];
  answer: ChoiceKey;
  why: string; // brief NEC explanation
};

export default function Quiz({ questions }: { questions: Question[] }) {
  const [selected, setSelected] = useState<Record<number, ChoiceKey | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = useMemo(() => {
    if (!questions?.length) return false;
    return questions.every(q => selected[q.id] != null);
  }, [questions, selected]);

  const { correctCount, percent } = useMemo(() => {
    if (!questions?.length) return { correctCount: 0, percent: 0 };
    const right = questions.reduce((acc, q) => {
      return acc + (selected[q.id] === q.answer ? 1 : 0);
    }, 0);
    return {
      correctCount: right,
      percent: Math.round((right / questions.length) * 100),
    };
  }, [questions, selected]);

  const submit = () => setSubmitted(true);
  const reset = () => {
    setSelected({});
    setSubmitted(false);
  };

  const pick = (qid: number, key: ChoiceKey) =>
    setSelected(prev => ({ ...prev, [qid]: key }));

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
      {/* Header / Result */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-white/70 text-sm">
          Questions: <span className="text-white">{questions.length}</span>
        </div>
        {submitted ? (
          <div className={`text-sm font-semibold ${percent >= 70 ? 'text-green-400' : 'text-red-400'}`}>
            Score: {correctCount}/{questions.length} ({percent}%)
          </div>
        ) : (
          <div className="text-white/50 text-sm">Select answers, then submit</div>
        )}
      </div>

      {/* Guidance after submit */}
      {submitted && (
        <div
          className={`mb-6 rounded-lg p-4 border transition-all duration-300 ${
            percent >= 70
              ? 'border-green-400/40 bg-green-400/10'
              : 'border-red-400/40 bg-red-400/10'
          }`}
        >
          {percent >= 70 ? (
            <p className="text-white/90">
              Nice work — <span className="text-green-400 font-bold">{percent}%</span>. You’re tracking well.
            </p>
          ) : (
            <p className="text-white/90">
              You scored <span className="text-red-400 font-bold">{percent}%</span>. Review this module and re-test.
            </p>
          )}
        </div>
      )}

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, i) => {
          const picked = selected[q.id];
          const isCorrect = submitted && picked === q.answer;
          const isWrong = submitted && picked && picked !== q.answer;

          return (
            <div
              key={q.id}
              className={[
                "rounded-xl border p-5 transition-all duration-300",
                "bg-white/[0.02] hover:bg-white/[0.04]",
                submitted
                  ? isCorrect
                    ? "border-green-400/40"
                    : isWrong
                    ? "border-red-400/40"
                    : "border-white/10"
                  : "border-white/10"
              ].join(" ")}
            >
              <div className="text-white font-semibold text-lg mb-4">
                {i + 1}. {q.stem}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {q.choices.map((c) => {
                  const choiceIsCorrect = submitted && c.key === q.answer;
                  const choiceIsPickedWrong = submitted && picked === c.key && picked !== q.answer;

                  return (
                    <label
                      key={c.key}
                      className={[
                        "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition",
                        "bg-white/[0.03] hover:bg-white/[0.06]",
                        choiceIsCorrect ? "border-green-400/50 bg-green-400/10" : "",
                        choiceIsPickedWrong ? "border-red-400/50 bg-red-400/10" : "",
                        !choiceIsCorrect && !choiceIsPickedWrong ? "border-white/10" : ""
                      ].join(" ")}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        className="accent-yellow-400"
                        checked={picked === c.key}
                        onChange={() => pick(q.id, c.key)}
                        disabled={submitted} // lock after submit
                      />
                      <span className="font-mono text-yellow-300 font-bold">{c.key}</span>
                      <span className="text-white/90">{c.text}</span>
                    </label>
                  );
                })}
              </div>

              {/* Inline explanation for wrong answers after submit */}
              {submitted && isWrong && (
                <div className="mt-3 rounded-lg border border-yellow-400/40 bg-yellow-400/10 p-3">
                  <div className="font-mono text-sm mb-1">
                    Correct: <span className="text-green-400 font-bold">{q.answer}</span>
                  </div>
                  <div className="text-white/90 text-sm">{q.why}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mt-6">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={!allAnswered}
            className="rounded-lg bg-green-500 text-black font-bold px-6 py-3 disabled:opacity-40 hover:bg-green-400 transition"
          >
            Submit Answers
          </button>
        ) : (
          <button
            onClick={reset}
            className="rounded-lg bg-yellow-400 text-black font-bold px-6 py-3 hover:bg-yellow-300 transition"
          >
            Reset Quiz
          </button>
        )}
      </div>
    </div>
  );
}
