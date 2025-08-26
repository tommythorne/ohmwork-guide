/* @ts-nocheck */
import React from "react";

/** Minimal inline Markdown -> HTML (bold, italic, code).
 *  We escape HTML first, then add tags. Content is trusted (author-provided). */
export function md(s: string = ""): string {
  const esc = s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // code first to avoid touching ** inside code
  const withCode = esc.replace(/`([^`]+)`/g, "<code class=\"px-1 rounded bg-white\\/10 text-white/90\">$1</code>");
  const withBold = withCode.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const withItal = withBold.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return withItal;
}

/** Render a single bullet as <li>, accepting strings or {ref|key,text} (and nested text). */
export default function pointToJSX(p: any, i: number) {
  const text =
    typeof p === "string" ? p :
    (typeof p?.text === "string" ? p.text :
    (typeof p?.label === "string" ? p.label :
    (p?.text && typeof p.text === "object" && typeof p.text.text === "string" ? p.text.text :
    JSON.stringify(p))));

  const prefix = p?.ref || p?.key || null;

  return (
    <li key={i} className="leading-relaxed text-slate-200">
      {prefix ? (
        <span className="font-extrabold underline decoration-yellow-400 underline-offset-4 mr-1">
          {prefix}
        </span>
      ) : null}
      {/* inline markdown: bold/italic/code */}
      <span dangerouslySetInnerHTML={{ __html: md(String(text)) }} />
    </li>
  );
}
