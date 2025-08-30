"use client";
import React from "react";

/** Local shape to avoid external type coupling */
type BarPoint = { label: string; value: number };
type BulletPoint = { label: string; value: number; subtitle?: string };

type ChartBar = { type: "bar"; data: BarPoint[]; unit?: string; max?: number };
type ChartBullet = { type: "bullet"; data: BulletPoint[]; unit?: string; max?: number };

type ChartInput = Array<BarPoint> | ChartBar | ChartBullet;

type BlockShape = {
  type?: "exam" | "rule" | "code" | "table" | "chart" | "horror" | "none";
  title?: string;
  body?: any;
  table?: Array<Array<string | number>>;
  chart?: ChartInput;
};

/** Simple inline MD */
function mdInline(input: string) {
  let t = input ?? "";
  t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-white">$1</code>');
  return t;
}

/** Helpers */
function isArrayBar(input: ChartInput | undefined): input is BarPoint[] {
  return Array.isArray(input);
}
function asBarConfig(input: ChartInput | undefined): { type: "bar" | "bullet"; data: any[]; unit?: string; max?: number } | null {
  if (!input) return null;
  if (isArrayBar(input)) return { type: "bar", data: input };
  return input;
}

/** BAR CHART (vertical) */
function BarChart({ points, unit }: { points: BarPoint[]; unit?: string }) {
  if (!points.length) return null;
  const max = Math.max(...points.map(p => p.value), 1);
  const niceStep = (() => {
    const target = max / 4;
    const p = Math.pow(10, Math.floor(Math.log10(target)));
    const cands = [1, 2, 5, 10].map(c => c * p);
    return cands.reduce((a, b) => (Math.abs(b - target) < Math.abs(a - target) ? b : a));
  })();
  const ticks: number[] = [];
  for (let v = niceStep; v < max; v += niceStep) ticks.push(v);

  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2">
      <div className="relative">
        {/* baseline grid */}
        <div className="absolute inset-0 pointer-events-none">
          {ticks.map((t, i) => {
            const pct = (t / max) * 100;
            return <div key={i} className="absolute left-0 right-0 border-t border-white/10" style={{ bottom: `${pct}%` }} />;
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end min-h-[160px]">
          {points.map((d, i) => {
            const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
            return (
              <div key={i} className="flex flex-col items-center justify-end">
                <div className="text-xs text-white/80 mb-1">{d.value}{unit ? (unit === '"' ? '″' : ` ${unit}`) : ""}</div>
                <div
                  className="w-full rounded-t-md bg-yellow-400/90 shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                  style={{ height: `${pct}%`, minHeight: "12px" }}
                  role="img"
                  aria-label={`${d.label}: ${d.value}${unit ? unit : ""}`}
                  title={`${d.label}: ${d.value}${unit ? unit : ""}`}
                />
                <div className="mt-2 text-center text-xs text-white/80 break-words">{d.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 text-right text-[11px] text-white/60">Max: {max}{unit ? (unit === '"' ? '″' : ` ${unit}`) : ""}</div>
      </div>
    </div>
  );
}

/** BULLET CHART (horizontal targets / great for absolute inches like 36/42/48) */
function BulletChart({ points, unit, max }: { points: BulletPoint[]; unit?: string; max?: number }) {
  if (!points.length) return null;
  const localMax = Math.max(max || 0, ...points.map(p => p.value), 1);
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4 mt-2 space-y-3">
      {points.map((p, i) => {
        const pct = Math.max(0, Math.min(100, (p.value / localMax) * 100));
        return (
          <div key={i} className="w-full">
            <div className="flex justify-between text-xs text-white/80 mb-1">
              <div className="truncate">{p.subtitle ? <span className="text-white/70">{p.subtitle} — </span> : null}{p.label}</div>
              <div>{p.value}{unit ? (unit === '"' ? '″' : ` ${unit}`) : ""}</div>
            </div>
            <div className="h-3 rounded bg-white/10 overflow-hidden">
              <div className="h-full bg-yellow-400/90" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
      <div className="text-right text-[11px] text-white/60">Max: {localMax}{unit ? (unit === '"' ? '″' : ` ${unit}`) : ""}</div>
    </div>
  );
}

/** Simple table renderer */
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
                <th key={i} className="text-left text-white/80 font-semibold pb-2 pr-4 whitespace-nowrap">{String(h)}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((r, ri) => (
            <tr key={ri} className="border-t border-white/10">
              {r.map((c, ci) => <td key={ci} className="text-white/90 py-2 pr-4 whitespace-nowrap">{String(c)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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

function stripLabelPrefix(rawTitle: string | undefined, type: BlockShape["type"]) {
  if (!rawTitle) return "";
  const label = STYLE[(type ?? "none") as NonNullable<BlockShape["type"]>]?.label || "";
  const re = new RegExp(`^\\s*${label}\\s*[-—:]\\s*`, "i");
  return rawTitle.replace(re, "");
}

export default function BlockCardMD({ block }: { block?: BlockShape }) {
  if (!block || block.type === "none") return null;
  const s = STYLE[(block.type ?? "none") as NonNullable<BlockShape["type"]>];
  const cleanTitle = stripLabelPrefix(block.title, block.type);

  const chartCfg = asBarConfig(block.chart);
  const hasBar = !!chartCfg && chartCfg.type === "bar";
  const hasBullet = !!chartCfg && chartCfg.type === "bullet";
  const hasTable = Array.isArray(block.table) && block.table.length > 0;

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" aria-hidden="true">{s.icon}</span>
        <span className={`${s.title} font-bold tracking-wide`}>{s.label}</span>
      </div>
      {cleanTitle ? <div className={`font-bold ${s.title} mb-2`}>{cleanTitle}</div> : null}

      {hasBar && <BarChart points={(chartCfg as ChartBar).data} unit={(chartCfg as ChartBar).unit} />}
      {hasBullet && <BulletChart points={(chartCfg as ChartBullet).data} unit={(chartCfg as ChartBullet).unit} max={(chartCfg as ChartBullet).max} />}
      {hasTable ? <TableBox rows={block.table} /> : null}

      {block.body && !hasBar && !hasBullet && !hasTable ? (
        <div className="text-white/90" dangerouslySetInnerHTML={{ __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body) }} />
      ) : null}
      {(hasBar || hasBullet || hasTable) && block.body ? (
        <div className="text-white/80 text-sm mt-3" dangerouslySetInnerHTML={{ __html: typeof block.body === "string" ? mdInline(block.body) : String(block.body) }} />
      ) : null}
    </div>
  );
}
