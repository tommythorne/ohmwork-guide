"use client";

import React from "react";

type BlockType = "exam" | "rule" | "code" | "table" | "chart" | "horror" | "none";
type Block = {
  type?: BlockType;
  title?: string;
  body?: any;
  table?: Array<Array<string|number>>;
  chart?: Array<{ label: string; value: number }>;
};

/** Minimal inline markdown: **bold**, *italic*, `code` */
function mdInline(input: any): string {
  if (input == null) return "";
  let t = String(input);
  // escape first
  t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // code -> bold -> italic
  t = t.replace(/`([^`]+?)`/g, '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>');
  t = t.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+?)\*/g, "<em>$1</em>");
  return t;
}

const STYLE: Record<string, { label: string; icon: string; border: string; bg: string; title: string }> = {
  exam:   { label: "EXAM TRAP",      icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300"   },
  rule:   { label: "RULE OF THUMB",  icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
  code:   { label: "NEC REFERENCE",  icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300"  },
  table:  { label: "TABLE",          icon: "📋", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300"},
  chart:  { label: "CHART",          icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300"},
  horror: { label: "JOBSITE HORROR", icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300"  },
  none:   { label: "NOTE",           icon: "📝", border: "border-white/20",      bg: "bg-slate-800/50",  title: "text-white"     },
};

function TableBox({ rows }: { rows?: Array<Array<string|number>> }) {
  const safe = Array.isArray(rows) ? rows : [];
  if (!safe.length) return null;
  const [head, ...body] = safe;
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2 overflow-x-auto">
      <table className="min-w-full text-sm">
        {Array.isArray(head) && head.length > 0 && (
          <thead>
            <tr>
              {head.map((h, i) => (
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

/** Readable stat tiles for charts */
function StatTiles({ data }: { data?: Array<{label: string; value: number}> }) {
  const safe = Array.isArray(data) ? data : [];
  if (!safe.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
      {safe.map((d, i) => (
        <div
          key={i}
          className="rounded-lg bg-white/[0.05] border border-white/15 px-4 py-3 text-center"
          aria-label={`${d.label}: ${d.value} inches`}
          title={`${d.label}: ${d.value} in.`}
        >
          <div className="text-2xl md:text-3xl font-extrabold text-yellow-300">
            {d.value}<span className="text-white/70 text-base align-top">″</span>
          </div>
          <div className="text-xs md:text-sm text-white/80 mt-1">{d.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function BlockCardMD({ block }: { block?: Block }) {
  if (!block || block.type === "none") return null;
  const s = STYLE[block.type || "none"];

  const hasChart = Array.isArray(block.chart) && block.chart.length > 0;
  const hasTable = Array.isArray(block.table) && block.table.length > 0;

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      {/* label strip */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" role="img" aria-hidden="true">{s.icon}</span>
        <span className={`${s.title} font-bold tracking-wide`}>{s.label}</span>
      </div>

      {/* title with inline markdown */}
      {block.title ? (
        <div
          className={`font-bold ${s.title} mb-2`}
          dangerouslySetInnerHTML={{ __html: mdInline(block.title) }}
        />
      ) : null}

      {/* visuals */}
      {hasChart ? <StatTiles data={block.chart} /> : null}
      {hasTable ? <TableBox rows={block.table} /> : null}

      {/* body with inline markdown */}
      {block.body ? (
        <div
          className="text-white/80 text-sm mt-3"
          dangerouslySetInnerHTML={{ __html: mdInline(block.body) }}
        />
      ) : null}
    </div>
  );
}
