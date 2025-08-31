"use client";
import React from "react";

/** Local shape to avoid external type coupling */
type BlockShape = {
  type?: "exam" | "rule" | "code" | "table" | "chart" | "horror" | "none";
  title?: string;
  body?: any;
  table?: Array<Array<string | number>>;
  chart?: Array<{ label: string; value: number }>;
  // Optional feature flag to render table rows as a card grid (used for MC types)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  asGrid?: any;
};

/** Tiny inline MD (bold/italic/code) for block.body */
function mdInline(input: string) {
  let t = input ?? "";
  t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>');
  return t;
}

/** Polished bar chart (kept lightweight) */
function ChartBox({ data }: { data?: Array<{ label: string; value: number }> }) {
  const safe = Array.isArray(data) ? data.filter(d => d && typeof d.value === "number") : [];
  if (safe.length === 0) return null;
  const max = Math.max(...safe.map(d => d.value), 1);
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2">
      <div className="text-white/80 text-sm font-semibold mb-3">Max: {max}</div>
      <div className="space-y-3">
        {safe.map((d, i) => {
          const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
          return (
            <div key={i} className="w-full">
              <div className="flex items-center justify-between text-white/80 text-[12px] mb-1">
                <span className="truncate">{d.label}</span>
                <span className="ml-2 px-1.5 py-0.5 rounded bg-yellow-400/20 border border-yellow-400/40 text-yellow-200">{d.value}</span>
              </div>
              <div className="h-2.5 rounded bg-white/10 overflow-hidden">
                <div className="h-full bg-yellow-400" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Table renderer (default) */
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

/** NEW: Grid cards from a 2-column table (title/description). Used when block.asGrid === true */
function GridCards({ rows }: { rows?: Array<Array<string | number>> }) {
  const safe = Array.isArray(rows) ? rows : [];
  if (safe.length === 0) return null;

  // If first row looks like a header (strings), drop it.
  const looksHeader = safe[0] && safe[0].length === 2 && typeof safe[0][0] === "string" && typeof safe[0][1] === "string";
  const body = looksHeader ? safe.slice(1) : safe;

  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-3 mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {body.slice(0, 4).map((r, i) => {
          const [title, desc] = r;
          return (
            <div key={i} className="rounded-lg border border-white/15 bg-white/[0.06] p-3 md:p-4 h-full">
              <div className="text-white font-semibold mb-1">{String(title)}</div>
              <div className="text-white/80 text-sm">{String(desc)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const STYLE: Record<
  NonNullable<BlockShape["type"]>,
  { label: string; icon: string; border: string; bg: string; title: string }
> = {
  exam:   { label: "EXAM TRAP",            icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300" },
  rule:   { label: "RULE OF THUMB",        icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
  code:   { label: "NEC REFERENCE",        icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300" },
  table:  { label: "TABLE",                icon: "📋", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300" },
  chart:  { label: "CHART",                icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
  horror: { label: "JOBSITE HORROR STORY", icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300" },
  none:   { label: "NOTE",                 icon: "📝", border: "border-white/20",      bg: "bg-slate-800/50",  title: "text-white" }
};

/** Strip duplicate label prefixes from the content title (avoid double-header lines) */
function stripLabelPrefix(rawTitle: string | undefined, type: BlockShape["type"]) {
  if (!rawTitle) return "";
  const label = STYLE[(type ?? "none") as NonNullable<BlockShape["type"]>]?.label || "";
  if (!label) return rawTitle;
  const re = new RegExp(`^\\s*${label}\\s*[-—:]\\s*`, "i");
  return rawTitle.replace(re, "");
}

export default function BlockCardMD({ block }: { block?: BlockShape }) {
  if (!block || block.type === "none") return null;

  const s = STYLE[(block.type ?? "none") as NonNullable<BlockShape["type"]>] ?? STYLE.none;
  const cleanTitle = stripLabelPrefix(block.title, block.type);

  const hasChart = Array.isArray(block.chart) && block.chart.length > 0;
  const hasTable = Array.isArray(block.table) && block.table.length > 0;
  const asGrid = !!(block as any)?.asGrid;

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      {/* Label strip */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" aria-hidden="true">{s.icon}</span>
        <span className={`${s.title} font-bold tracking-wide`}>{s.label}</span>
      </div>

      {/* Single title line */}
      {cleanTitle ? <div className={`font-bold ${s.title} mb-2`}>{cleanTitle}</div> : null}

      {/* Visuals */}
      {hasChart ? <ChartBox data={block.chart} /> : null}
      {hasTable && asGrid ? <GridCards rows={block.table} /> : null}
      {hasTable && !asGrid ? <TableBox rows={block.table} /> : null}

      {/* Body */}
      {block.body && !hasChart && !hasTable ? (
        <div className="text-white/90" dangerouslySetInnerHTML={{ __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body) }} />
      ) : null}
      {(hasChart || hasTable) && block.body ? (
        <div className="text-white/80 text-sm mt-3" dangerouslySetInnerHTML={{ __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body) }} />
      ) : null}
    </div>
  );
}
