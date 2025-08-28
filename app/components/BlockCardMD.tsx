"use client";
import React from "react";

type BlockShape = {
  type?: "exam" | "rule" | "code" | "table" | "chart" | "horror" | "none";
  title?: string;
  body?: any;
  table?: Array<Array<string | number>>;
  chart?: Array<{ label: string; value: number }>;
};

function mdInline(input: string) {
  let t = input ?? "";
  t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>');
  return t;
}

const STYLE: Record<NonNullable<BlockShape["type"]>, { label: string; icon: string; border: string; bg: string; title: string }> = {
  exam:   { label: "EXAM TRAP",            icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300" },
  rule:   { label: "RULE OF THUMB",        icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
  code:   { label: "NEC REFERENCE",        icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300" },
  table:  { label: "TABLE",                icon: "📊", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300" },
  chart:  { label: "CHART",                icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
  horror: { label: "JOBSITE HORROR STORY", icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300" },
  none:   { label: "NOTE",                 icon: "📝", border: "border-white/20",      bg: "bg-slate-800/50",  title: "text-white" }
};

// Helper to strip duplicate label prefix
function stripLabelPrefix(rawTitle: string | undefined, type: BlockShape["type"]) {
  if (!rawTitle) return "";
  const label = STYLE[(type ?? "none") as NonNullable<BlockShape["type"]>]?.label || "";
  if (!label) return rawTitle;
  const re = new RegExp(`^\\s*${label}\\s*[-—:]\\s*`, "i");
  return rawTitle.replace(re, "");
}

export default function BlockCardMD({ block }: { block?: BlockShape }) {
  if (!block || block.type === "none") return null;
  const s = STYLE[(block.type ?? "none") as NonNullable<BlockShape["type"]>];
  const cleanTitle = stripLabelPrefix(block.title, block.type);

  const hasChart = Array.isArray(block.chart) && block.chart.length > 0;
  const hasTable = Array.isArray(block.table) && block.table.length > 0;

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      {/* Label strip */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{s.icon}</span>
        <span className={`${s.title} font-bold tracking-wide`}>{s.label}</span>
      </div>

      {/* Cleaned single title line */}
      {cleanTitle ? <div className={`font-bold ${s.title} mb-2`}>{cleanTitle}</div> : null}

      {/* Visuals */}
      {hasChart ? <div className="mt-3">{/* Chart rendering */}</div> : null}
      {hasTable ? <div className="mt-3">{/* Table rendering */}</div> : null}

      {/* Body */}
      {block.body && !hasChart && !hasTable ? (
        <div
          className="text-white/90"
          dangerouslySetInnerHTML={{ __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body) }}
        />
      ) : null}
      {(hasChart || hasTable) && block.body ? (
        <div
          className="text-white/80 text-sm mt-3"
          dangerouslySetInnerHTML={{ __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body) }}
        />
      ) : null}
    </div>
  );
}
