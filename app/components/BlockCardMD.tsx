"use client";

import React from "react";

type Img = { src: string; alt: string; caption?: string };

type Block =
  | {
      type: "chart";
      title?: string;
      body?: string;
      chart: { label: string; value: number }[];
      maxLabel?: string;
    }
  | {
      type: "grid";
      title?: string;
      body?: string;
      grid: string[][];
    }
  | {
      type: "table";
      title?: string;
      body?: string;
      table: string[][];
    }
  | {
      // NEW: simple rule list (label → text)
      type: "rules";
      title?: string;
      body?: string;
      rules: [string, string][];
      note?: string;
    }
  | {
      type: "rule" | "exam" | "horror" | "code";
      title?: string;
      body: string;
    };

export default function BlockCardMD({ block }: { block: Block }) {
  // shared card shell
  const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({
    title,
    children,
  }) => (
    <div className="rounded-2xl border border-violet-700/30 bg-violet-800/25 p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      {title ? (
        <div className="mb-3 text-sm font-semibold tracking-wide uppercase text-violet-200">
          {title}
        </div>
      ) : null}
      {children}
    </div>
  );

  // --- existing: bar chart (unchanged visuals) ------------------------------
  if ((block as any).type === "chart") {
    const b = block as Extract<Block, { type: "chart" }>;
    const max = Math.max(1, ...b.chart.map((c) => c.value));
    return (
      <Card title={b.title}>
        <div className="space-y-3">
          {b.chart.map((row, i) => {
            const w = Math.max(6, (row.value / max) * 100);
            return (
              <div key={i} className="space-y-1">
                <div className="text-[13px] text-violet-100/85">{row.label}</div>
                <div className="h-3 rounded-full bg-violet-900/40 relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-yellow-300"
                    style={{ width: `${w}%` }}
                    aria-hidden
                  />
                </div>
              </div>
            );
          })}
          {b.maxLabel ? (
            <div className="text-right text-[11px] text-violet-200/70">
              Max: {b.maxLabel}
            </div>
          ) : null}
          {b.body ? (
            <p className="mt-1 text-[13px] text-violet-100/80">{b.body}</p>
          ) : null}
        </div>
      </Card>
    );
  }

  // --- existing: generic grid renderer -------------------------------------
  if ((block as any).type === "grid") {
    const b = block as Extract<Block, { type: "grid" }>;
    return (
      <Card title={b.title}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {b.grid.map((row, i) => (
            <div
              key={i}
              className="rounded-xl bg-violet-900/30 border border-violet-700/20 p-3"
            >
              <div className="text-[13px] font-semibold text-violet-50">
                {row[0]}
              </div>
              {row[1] ? (
                <div className="text-[13px] text-violet-100/80 mt-1">
                  {row[1]}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {b.body ? (
          <p className="mt-3 text-[13px] text-violet-100/80">{b.body}</p>
        ) : null}
      </Card>
    );
  }

  // --- existing: table renderer --------------------------------------------
  if ((block as any).type === "table") {
    const b = block as Extract<Block, { type: "table" }>;
    const [head, ...rows] = b.table;
    return (
      <Card title={b.title}>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            {head ? (
              <thead>
                <tr className="text-violet-100/90">
                  {head.map((h, i) => (
                    <th key={i} className="px-3 py-2 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="[&>td]:px-3 [&>td]:py-2 border-t border-violet-700/20">
                  {r.map((c, j) => (
                    <td key={j} className="text-violet-100/85">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {b.body ? (
          <p className="mt-3 text-[13px] text-violet-100/80">{b.body}</p>
        ) : null}
      </Card>
    );
  }

  // --- NEW: rules list (clean two-column rows) ------------------------------
  if ((block as any).type === "rules") {
    const b = block as Extract<Block, { type: "rules" }>;
    return (
      <Card title={b.title}>
        <div className="divide-y divide-violet-700/30 rounded-xl bg-violet-900/20 border border-violet-700/30">
          {b.rules.map(([left, right], i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3">
              <div className="sm:col-span-1 text-[13px] font-semibold text-violet-50">
                {left}
              </div>
              <div className="sm:col-span-2 text-[13px] text-violet-100/85">
                {right}
              </div>
            </div>
          ))}
        </div>
        {b.note ? (
          <div className="mt-2 text-[12px] text-violet-200/70">{b.note}</div>
        ) : null}
        {b.body ? (
          <p className="mt-2 text-[13px] text-violet-100/80">{b.body}</p>
        ) : null}
      </Card>
    );
  }

  // --- simple text blocks (rule/exam/horror/code) ---------------------------
  const simple = block as Extract<Block, { type: "rule" | "exam" | "horror" | "code" }>;
  return (
    <Card title={simple.title}>
      <p className="text-[13px] text-violet-100/85 whitespace-pre-wrap">
        {simple.body}
      </p>
    </Card>
  );
}
