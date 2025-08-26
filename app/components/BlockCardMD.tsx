// @ts-nocheck
"use client";
import React from "react";

/** Minimal inline markdown: **bold**, *italic*, `code` (no links, no block html) */
function mdInline(input: string): string {
  if (typeof input !== "string") return "";
  // normalize quotes/dashes
  let t = input.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/–/g, "-");
  // escape HTML
  t = t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  // bold
  t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // italic (avoid list markers)
  t = t.replace(/(^|[\s(])\*(?!\s)([^*]+?)\*(?=[\s).,!?:;]|$)/g, "$1<em>$2</em>");
  // code
  t = t.replace(
    /`([^`]+?)`/g,
    '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>'
  );
  return t;
}

type Block =
  | { type: "exam" | "rule" | "horror" | "code" | "table" | "chart" | "none"; title?: any; body?: any; table?: any; chart?: any }
  | undefined;

export default function BlockCardMD({ block }: { block?: Block }) {
  if (!block || block.type === "none") return null;

  const style = {
    exam:   { label: "EXAM TRAP",      icon: "🎯", border: "border-red-500/50",    bg: "bg-red-900/30",    title: "text-red-300" },
    rule:   { label: "RULE OF THUMB",  icon: "📏", border: "border-green-500/50",  bg: "bg-green-900/30",  title: "text-green-300" },
    code:   { label: "NEC REFERENCE",  icon: "📖", border: "border-blue-500/50",   bg: "bg-blue-900/30",   title: "text-blue-300" },
    table:  { label: "TABLE",          icon: "📊", border: "border-yellow-500/50", bg: "bg-yellow-900/30", title: "text-yellow-300" },
    chart:  { label: "CHART",          icon: "📈", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
    horror: { label: "JOBSITE HORROR", icon: "💀", border: "border-pink-500/50",   bg: "bg-pink-900/30",   title: "text-pink-300" },
  } as const;

  const s =
    (block?.type && (style as any)[block.type]) ||
    { label: "NOTE", icon: "📝", border: "border-white/20", bg: "bg-slate-800/50", title: "text-white" };

  const hasTitle = (block as any)?.title != null;
  const titleIsString = typeof (block as any)?.title === "string";
  const bodyIsString  = typeof (block as any)?.body  === "string";

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{s.icon}</span>
        <span className={`${s.title} font-bold`}>{s.label}</span>
      </div>

      {hasTitle ? (
        titleIsString ? (
          <div
            className={`font-bold ${s.title} mb-1`}
            dangerouslySetInnerHTML={{ __html: mdInline(String((block as any).title)) }}
          />
        ) : (
          <div className={`font-bold ${s.title} mb-1`}>{(block as any).title}</div>
        )
      ) : null}

      {bodyIsString ? (
        <div
          className="text-white/90"
          dangerouslySetInnerHTML={{ __html: mdInline(String((block as any).body)) }}
        />
      ) : (
        (block as any).body || null
      )}

      {(block as any).table ? <div className="mt-3">{(block as any).table}</div> : null}
      {(block as any).chart ? <div className="mt-3">{(block as any).chart}</div> : null}
    </div>
  );
}
