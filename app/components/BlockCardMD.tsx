"use client";
import React from "react";

/** Local, lightweight shape (no external type import). */
type BlockShape = {
  type?: "exam" | "rule" | "code" | "table" | "chart" | "horror" | "none";
  title?: string;
  body?: any; // string or JSX
  table?: Array<Array<string | number>>;
  chart?: Array<{ label: string; value: number }>;
};

/** Tiny inline MD (bold/italic/code) for block.body */
function mdInline(input: string) {
  if (!input) return "";
  let s = String(input);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  s = s.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>');
  return s;
}

/** Simple, labeled bar chart for CHART blocks */
function ChartBox(
  { data = [] }: { data?: Array<{ label: string; value: number }> }
) {
  const safe = Array.isArray(data) ? data.filter(d => d && typeof d.value === "number") : [];
  if (safe.length === 0) return null;
  const max = safe.reduce((m, d) => Math.max(m, d.value), 0) || 1;
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2">
      <div className="grid gap-3">
        {safe.map((d, i) => {
          const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
          return (
            <div key={i} className="grid grid-cols-[120px,1fr,52px] items-center gap-3">
              <div className="text-xs text-white/80">{d.label}</div>
              <div className="h-3 bg-purple-500/30 rounded">
                <div
                  className="h-3 bg-yellow-400 rounded"
                  style={{ width: `${pct}%` }}
                  aria-label={`${d.label}: ${d.value}"`}
                  title={`${d.label}: ${d.value}"`}
                />
              </div>
              <div className="text-right text-xs text-white/80">{d.value}"</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Simple table for TABLE blocks */
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

/** Stable label styling per block type */
const STYLE: Record<string, { label: string; icon: string; border: string; bg: string; title: string }> = {
  exam:   { label: "EXAM TRAP",             icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300" },
  rule:   { label: "RULE OF THUMB",         icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
  code:   { label: "NEC REFERENCE",         icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300" },
  table:  { label: "TABLE",                 icon: "📊", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300" },
  chart:  { label: "CHART",                 icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
  horror: { label: "JOBSITE HORROR STORY",  icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300" },
};

export default function BlockCardMD({ block }: { block?: BlockShape }) {
  if (!block || block.type === "none") return null;

  const style =
    (block.type && STYLE[block.type]) ||
    { label: "NOTE", icon: "📝", border: "border-white/20", bg: "bg-slate-800/50", title: "text-white" };

  const hasChart = Array.isArray(block.chart) && block.chart.length > 0;
  const hasTable = Array.isArray(block.table) && block.table.length > 0;

  return (
    <div className={`rounded-xl border ${style.border} ${style.bg} p-4 my-4`}>
      {/* Label strip */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" aria-hidden="true">{style.icon}</span>
        <span className={`${style.title} font-bold tracking-wide`}>{style.label}</span>
      </div>

      {/* Optional title (single place only; uppercased per request) */}
      {block.title ? <div className={`font-bold ${style.title} mb-2`}>{block.title.toUpperCase?.() ?? block.title}</div> : null}

      {/* Content */}
      {hasChart && <ChartBox data={block.chart!} />}
      {hasTable && <TableBox rows={block.table!} />}

      {!hasChart && !hasTable && typeof block.body === "string" && (
        <div className="text-white/90" dangerouslySetInnerHTML={{ __html: mdInline(block.body) }} />
      )}
      {!hasChart && !hasTable && typeof block.body !== "string" && block.body ? (
        <div className="text-white/90">{block.body}</div>
      ) : null}

      {(hasChart || hasTable) && typeof block.body === "string" ? (
        <div className="text-white/80 text-sm mt-3" dangerouslySetInnerHTML={{ __html: mdInline(block.body) }} />
      ) : null}
    </div>
  );
}
