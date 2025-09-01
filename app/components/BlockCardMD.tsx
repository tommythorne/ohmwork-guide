// @ts-nocheck
"use client";

import React from "react";

type BlockType = "chart" | "grid" | "table" | "rules" | "code" | "exam" | "rule" | "horror";

type ChartItem = { label: string; value: number };
type Grid = string[][]; // e.g., 2D grid of label/value or title/desc
type TableRow = (string | number)[];

interface Block {
  type?: BlockType;
  title?: string;
  body?: string;

  // optional content payloads (often omitted in content.ts)
  chart?: ChartItem[];
  grid?: Grid;
  table?: TableRow[];

  // optional styling knobs (often missing)
  border?: boolean;
  compact?: boolean;
  columns?: number;

  // optional “rules” style list
  rules?: { title?: string; text?: string }[];

  // legacy fallbacks
  items?: any;
}

interface Props {
  title?: string;
  block?: Block | null | undefined;
}

/** utility: safe coalescing */
const arr = <T,>(v: unknown, fallback: T[]) => (Array.isArray(v) ? (v as T[]) : fallback);
const num = (v: unknown, fallback: number) =>
  typeof v === "number" && Number.isFinite(v) ? v : fallback;
const bool = (v: unknown, fallback: boolean) => (typeof v === "boolean" ? v : fallback);
const text = (v: unknown, fallback = "") => (typeof v === "string" ? v : fallback);

/** basic shell */
const Card: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="rounded-lg bg-white/60 dark:bg-zinc-900/50 backdrop-blur border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
    {title ? (
      <div className="px-4 py-3 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <h3 className="text-sm font-semibold tracking-wide uppercase text-zinc-600 dark:text-zinc-300">
          {title}
        </h3>
      </div>
    ) : null}
    <div className="p-4">{children}</div>
  </div>
);

/** polished bar chart (still lightweight) */
const BarChart: React.FC<{ data: ChartItem[] }> = ({ data }) => {
  const safe = arr<ChartItem>(data, []);
  if (!safe.length) return null;
  const max = Math.max(...safe.map((d) => num(d.value, 0)), 0) || 1;

  return (
    <div className="space-y-3">
      {safe.map((d, i) => {
        const pct = Math.min(100, Math.max(0, (num(d.value, 0) / max) * 100));
        return (
          <div key={i} className="grid grid-cols-12 items-start gap-3">
            <div className="col-span-12 sm:col-span-4">
              <div className="text-xs font-medium text-zinc-700 dark:text-zinc-200">{text(d.label)}</div>
              <div className="text-[11px] text-zinc-500">{num(d.value, 0)}</div>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <div className="w-full h-2.5 rounded bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                <div
                  className="h-full rounded bg-zinc-900/80 dark:bg-white/80"
                  style={{ width: `${pct}%` }}
                  aria-label={`${text(d.label)}: ${num(d.value, 0)}`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/** 2x2 grid (or Nx2) of tidy cells */
const InfoGrid: React.FC<{ grid: Grid; columns?: number }> = ({ grid, columns }) => {
  const rows = arr<string[]>(grid, []);
  if (!rows.length) return null;
  const cols = Math.min(4, Math.max(1, num(columns, 2)));
  return (
    <div className={`grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-${cols}`}>
      {rows.map((r, i) => {
        const a = text(r[0]);
        const b = text(r[1]);
        return (
          <div
            key={i}
            className="rounded-md border border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/40 p-3"
          >
            <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{a}</div>
            {b ? <div className="mt-1 text-[13px] text-zinc-600 dark:text-zinc-300">{b}</div> : null}
          </div>
        );
      })}
    </div>
  );
};

/** table renderer, resilient to ragged rows */
const InfoTable: React.FC<{ rows: TableRow[] }> = ({ rows }) => {
  const safe = arr<TableRow>(rows, []);
  if (!safe.length) return null;
  const head = safe[0] ?? [];
  const body = safe.slice(1);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-zinc-100/60 dark:bg-zinc-800/60">
            {arr(head, []).map((h, i) => (
              <th key={i} className="text-left px-3 py-2 font-semibold text-zinc-700 dark:text-zinc-100 border border-zinc-200/60 dark:border-zinc-800/60">
                {String(h ?? "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, r) => (
            <tr key={r} className="odd:bg-white/60 even:bg-zinc-50/50 dark:odd:bg-zinc-900/40 dark:even:bg-zinc-900/20">
              {arr(row, []).map((cell, c) => (
                <td key={c} className="px-3 py-2 text-zinc-800 dark:text-zinc-100 border border-zinc-200/60 dark:border-zinc-800/60">
                  {String(cell ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/** rules list (bulleted, compact) */
const RulesList: React.FC<{ items: { title?: string; text?: string }[] }> = ({ items }) => {
  const safe = arr(items, []);
  if (!safe.length) return null;
  return (
    <ul className="space-y-2">
      {safe.map((it, i) => (
        <li key={i} className="flex gap-2">
          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-700 dark:bg-zinc-200 shrink-0" />
          <div>
            {it.title ? (
              <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{it.title}</div>
            ) : null}
            {it.text ? (
              <div className="text-[13px] text-zinc-600 dark:text-zinc-300">{it.text}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
};

const BlockCardMD: React.FC<Props> = ({ title, block }) => {
  const b = block ?? {};
  const type = (b.type ?? "code") as BlockType;

  // coalesced fields (never crash on undefined)
  const safeChart = arr<ChartItem>(b.chart, []);
  const safeGrid = arr<string[]>(b.grid, []);
  const safeTable = arr<TableRow>(b.table, []);
  const safeRules = arr<{ title?: string; text?: string }>(b.rules, [] as { title?: string; text?: string }[]);
  const showBorder = bool(b.border, true);

  const body = text(b.body);

  return (
    <Card title={title ?? text(b.title)}>
      {/* map type to renderer; if payload missing, show body only */}
      {type === "chart" && safeChart.length > 0 && <BarChart data={safeChart} />}

      {type === "grid" && safeGrid.length > 0 && (
        <InfoGrid grid={safeGrid} columns={num(b.columns, 2)} />
      )}

      {type === "table" && safeTable.length > 0 && <InfoTable rows={safeTable} />}

      {type === "rules" && safeRules.length > 0 && <RulesList items={safeRules} />}

      {(type === "code" || type === "exam" || type === "rule" || type === "horror") && body && (
        <div
          className={[
            "rounded-md p-3 text-[14px] leading-relaxed",
            showBorder
              ? "border border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/40"
              : "bg-transparent",
          ].join(" ")}
        >
          <p className="text-zinc-800 dark:text-zinc-100">{body}</p>
        </div>
      )}

      {/* if nothing rendered above, still show body (non-crashing fallback) */}
      {!safeChart.length &&
        !safeGrid.length &&
        !safeTable.length &&
        !safeRules.length &&
        !body && (
          <div className="text-[13px] text-zinc-500">
            {/* quiet fallback; keeps page stable even with empty block */}
          </div>
        )}
    </Card>
  );
};

export default BlockCardMD;
