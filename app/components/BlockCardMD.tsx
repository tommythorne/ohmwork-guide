"use client";
import React from "react";

/** Permissive local shape */
type BlockShape = {
  type?: string; // sanitize at runtime
  title?: string;
  body?: any;
  table?: Array<Array<string | number>>;
  chart?: Array<{ label: string; value: number }>;
  rules?: Array<{ title?: string; text?: string } | string>;
};

function mdInline(input: string) {
  let t = input ?? "";
  t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>');
  return t;
}

function ChartBox({ data }: { data?: Array<{ label: string; value: number }> }) {
  const safe = Array.isArray(data) ? data.filter(d => d && typeof d.value === "number") : [];
  if (safe.length === 0) return null;
  const max = Math.max(...safe.map(d => d.value), 1);

  // Choose responsive columns: up to 5 per row on large screens, fewer on small
  const colClass = safe.length <= 3 ? "grid-cols-3" : safe.length === 4 ? "grid-cols-4" : "grid-cols-5";

  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2">
      <div className={`grid ${colClass} sm:grid-cols-4 md:grid-cols-5 gap-4 items-end min-h-[140px]`}>
        {safe.map((d, i) => {
          const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
          return (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-purple-500 to-purple-300 shadow-sm"
                style={{ height: `${pct}%`, minHeight: "16px" }}
                aria-label={`${d.label}: ${d.value}`}
                title={`${d.label}: ${d.value}`}
              />
              <div className="mt-2 text-center text-[11px] text-white/85 leading-tight">{d.label}</div>
              <div className="mt-0.5 inline-flex items-center px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[10px] text-white/80">{d.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TableBox({ rows }: { rows?: Array<Array<string | number>> }) {
  const safe = Array.isArray(rows) ? rows : [];
  if (safe.length === 0) return null;
  const [header, ...body] = safe;
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2 overflow-x-auto">
      <table className="min-w-full text-sm">
        {Array.isArray(header) && header.length > 0 && (
          <thead>
            <tr>
              {header.map((h, i) => (
                <th key={i} className="text-left text-white/80 font-semibold pb-2 pr-4 whitespace-nowrap">
                  {String(h)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((r, ri) => (
            <tr key={ri} className="border-t border-white/10">
              {r.map((c, ci) => (
                <td key={ci} className="text-white/90 py-2 pr-4 whitespace-nowrap">{String(c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const STYLE = {
  exam:   { label: "EXAM TRAP",             icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300" },
  rule:   { label: "RULE OF THUMB",         icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
  code:   { label: "NEC REFERENCE",         icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300" },
  table:  { label: "TABLE",                 icon: "📊", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300" },
  chart:  { label: "CHART",                 icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
  horror: { label: "JOBSITE HORROR STORY",  icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300" },
  none:   { label: "NOTE",                  icon: "📝", border: "border-white/20",      bg: "bg-slate-800/50",  title: "text-white" }
} as const;

type StyleKey = keyof typeof STYLE;

/** Coerce any incoming type to a safe StyleKey */
function safeType(raw: unknown): StyleKey {
  const t = typeof raw === "string" ? raw.toLowerCase().trim() : "none";
  return (t in STYLE ? (t as StyleKey) : "none");
}

function stripLabelPrefix(rawTitle: string | undefined, t: unknown) {
  if (!rawTitle) return "";
  const key = safeType(t);
  const label = STYLE[key].label;
  const re = new RegExp(`^\\s*${label}\\s*[-—:]\\s*`, "i");
  return rawTitle.replace(re, "");
}

export default function BlockCardMD({ block }: { block?: BlockShape }) {
  if (!block) return null;

  const key = safeType(block.type);
  const s = STYLE[key];
  const cleanTitle = stripLabelPrefix(block.title, block.type);

  const hasChart = Array.isArray(block.chart) && block.chart.length > 0;
  const hasTable = Array.isArray(block.table) && block.table.length > 0;
  const rules = Array.isArray(block.rules) ? block.rules : [];

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      {/* Label strip */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" aria-hidden="true">{s.icon}</span>
        <span className={`${s.title} font-bold tracking-wide`}>{s.label}</span>
      </div>

      {/* Single title line (never duplicates label) */}
      {cleanTitle ? <div className={`font-bold ${s.title} mb-2`}>{cleanTitle}</div> : null}

      {/* Visuals */}
      {hasChart ? <ChartBox data={block.chart} /> : null}
      {hasTable ? <TableBox rows={block.table} /> : null}

      {/* Structured rules list (if provided) */}
      {rules.length > 0 ? (
        <div className="mt-3 space-y-3">
          {rules.map((it: any, idx: number) => {
            const title = typeof it === "object" && it ? it.title : undefined;
            const text = typeof it === "object" && it ? it.text : String(it ?? "");
            return (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-700 dark:bg-zinc-200 shrink-0" />
                <div>
                  {title ? <div className="text-sm font-medium text-zinc-100">{title}</div> : null}
                  {text ? <div className="text-sm text-white/90">{text}</div> : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {/* Body */}
      {block.body && !hasChart && !hasTable ? (
        <div
          className="text-white/90"
          dangerouslySetInnerHTML={{
            __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body)
          }}
        />
      ) : null}
      {(hasChart || hasTable) && block.body ? (
        <div
          className="text-white/80 text-sm mt-3"
          dangerouslySetInnerHTML={{
            __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body)
          }}
        />
      ) : null}
    </div>
  );
}
