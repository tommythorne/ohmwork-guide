// @ts-nocheck
"use client";
import React from "react";

/** Minimal inline markdown: **bold**, *italic*, `code` (no links) */
function mdInline(input: string): string {
  if (typeof input !== "string") return "";
  let t = input.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/–/g, "-");
  t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(^|[\s(])\*(?!\s)([^*]+?)\*(?=[\s).,!?:;]|$)/g, "$1<em>$2</em>");
  t = t.replace(/`([^`]+?)`/g, '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>');
  return t;
}

/** ---------------- TABLE RENDERER ----------------
 * Accepts:
 *  - string with pipe syntax: "Header A | Header B\nv1 | v2\n..."
 *  - string with CSV-ish lines: "A,B\n1,2\n..."
 *  - array of arrays: [ ["A","B"], ["1","2"] ]
 *  - array of objects: [ {col1:"A", col2:"B"}, ... ] (keys of first row become headers)
 */
function coerceTable(data: any): { headers: string[]; rows: string[][] } | null {
  if (!data) return null;

  // Array of arrays
  if (Array.isArray(data) && Array.isArray(data[0])) {
    const headers = (data[0] ?? []).map(String);
    const rows = data.slice(1).map((r: any[]) => r.map((c)=>String(c ?? "")));
    return { headers, rows };
  }

  // Array of objects
  if (Array.isArray(data) && typeof data[0] === "object" && data[0] != null && !Array.isArray(data[0])) {
    const headers = Object.keys(data[0]);
    const rows = data.map((row: any) => headers.map(h => String(row?.[h] ?? "")));
    return { headers, rows };
  }

  // String with pipes (markdown-like)
  if (typeof data === "string" && data.includes("|")) {
    const lines = data.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    if (lines.length === 0) return null;
    const splitRow = (l: string) => l.split("|").map(c=>c.trim()).filter(c=>c.length || true);
    let headers = splitRow(lines[0]);
    // skip optional separator row like ---|---
    let start = 1;
    if (lines[1] && /^[:\-|\s]+$/.test(lines[1])) start = 2;
    const rows = lines.slice(start).map(splitRow);
    return { headers, rows };
  }

  // CSV-ish string (comma separated)
  if (typeof data === "string" && data.includes(",")) {
    const lines = data.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    if (!lines.length) return null;
    const splitRow = (l: string) => l.split(",").map(c=>c.trim());
    const headers = splitRow(lines[0]);
    const rows = lines.slice(1).map(splitRow);
    return { headers, rows };
  }

  return null;
}

function TableView({ data, caption }: { data: any; caption?: string }) {
  const normalized = coerceTable(data);
  if (!normalized) return null;
  const { headers, rows } = normalized;
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {caption ? (
          <caption className="text-left text-white/80 pb-2">{caption}</caption>
        ) : null}
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="border-b border-white/20 text-white/90 font-semibold text-left py-2 pr-3">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="odd:bg-white/[0.02]">
              {r.map((c, ci) => (
                <td key={ci} className="border-b border-white/10 text-white/85 py-2 pr-3">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** ---------------- CHART RENDERER (BAR) ----------------
 * Accepts:
 *  - array of { label, value } (value numeric)
 *  - array of [label, value]
 *  - object { series: [{label,value}], title? }
 *  - string "A:3, B:5, C:2"
 */
function coerceSeries(input: any): { label: string; value: number }[] {
  if (!input) return [];

  if (Array.isArray(input)) {
    return input.map((it: any) => {
      if (Array.isArray(it)) return { label: String(it[0]), value: Number(it[1]) || 0 };
      if (typeof it === "object") return { label: String(it?.label ?? it?.name ?? ""), value: Number(it?.value ?? 0) };
      return { label: String(it), value: 0 };
    });
  }

  if (typeof input === "object" && Array.isArray(input.series)) {
    return coerceSeries(input.series);
  }

  if (typeof input === "string") {
    // "A:3, B:5, C:2"
    return input.split(",").map(chunk => {
      const [l, v] = chunk.split(":");
      return { label: String(l ?? "").trim(), value: Number(v ?? 0) || 0 };
    });
  }

  return [];
}

function BarChart({ data, title }: { data: any; title?: string }) {
  const series = coerceSeries(data).filter(d => Number.isFinite(d.value));
  if (!series.length) return null;

  const max = Math.max(...series.map(s => s.value), 1);
  const W = 560, H = 200, pad = 24;
  const barGap = 8;
  const barWidth = Math.max(8, Math.floor((W - pad*2 - barGap*(series.length-1)) / Math.max(series.length, 1)));

  return (
    <div className="mt-3">
      {title ? <div className="text-white/90 font-semibold mb-2">{title}</div> : null}
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} className="rounded-lg bg-white/[0.03] border border-white/10">
        {/* Y axis line */}
        <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="rgba(255,255,255,.2)" strokeWidth="1" />
        {/* Bars */}
        {series.map((s, i) => {
          const x = pad + i*(barWidth + barGap);
          const h = Math.round((s.value / max) * (H - pad*2));
          const y = H - pad - h;
          return (
            <g key={i}>
              <rect x={x} y={y} width={barWidth} height={h} fill="rgba(250,204,21,.6)" />
              <text x={x + barWidth/2} y={H - pad + 14} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.85)">{s.label}</text>
            </g>
          );
        })}
        {/* Max label */}
        <text x={pad} y={pad - 6} fontSize="10" fill="rgba(255,255,255,.7)">{max}</text>
      </svg>
    </div>
  );
}

/** ---------------- BLOCK CARD ---------------- */
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
    chart:  { label: "CHART",          icon: "��", border: "border-purple-500/50", bg: "bg-purple-900/30", title: "text-purple-300" },
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

      {/* Body for non table/chart */}
      {block?.type !== "table" && block?.type !== "chart" ? (
        bodyIsString ? (
          <div className="text-white/90" dangerouslySetInnerHTML={{ __html: mdInline(String((block as any).body)) }} />
        ) : (
          (block as any).body || null
        )
      ) : null}

      {/* Table */}
      {block?.type === "table" ? (
        <TableView
          data={(block as any).table ?? (block as any).body /* fallback */}
          caption={titleIsString ? String((block as any).title) : undefined}
        />
      ) : null}

      {/* Chart */}
      {block?.type === "chart" ? (
        <BarChart
          data={(block as any).chart ?? (block as any).body /* fallback */}
          title={titleIsString ? String((block as any).title) : undefined}
        />
      ) : null}
    </div>
  );
}
