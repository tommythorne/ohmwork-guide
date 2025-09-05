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

function formatValue(v: number, title?: string) {
  const t = (title || "").toLowerCase();
  const isPercent = /percent|%/.test(t);
  const isInches = /inch|inches|\"/.test(t);
  if (isPercent) return `${v}%`;
  if (isInches) return `${v}"`;
  return `${v}`;
}

function ChartBox({ data, title }: { data?: Array<{ label: string; value: number }>; title?: string }) {
  const safe = Array.isArray(data) ? data.filter(d => d && typeof d.value === "number") : [];
  if (safe.length === 0) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 mt-3">
      <div className="space-y-2">
        {safe.map((d, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <span className="text-sm text-white/85 truncate">{d.label}</span>
            <span className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white/90">
              {formatValue(d.value, title)}
            </span>
          </div>
        ))}
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
      {hasChart ? <ChartBox data={block.chart} title={cleanTitle || block.title} /> : null}
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
