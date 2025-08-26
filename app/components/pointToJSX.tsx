/* @ts-nocheck */
import React from "react";

/** Escape HTML, then apply minimal inline markdown:
 *  - **bold**   -> <strong>
 *  - *italic*   -> <em>
 *  - `code`     -> <code>
 * Also normalizes smart quotes to straight quotes so authors can paste from docs.
 * This runs ONLY on bullet text, not on arbitrary HTML blocks.
 */
function mdInline(input: string): string {
  if (typeof input !== "string") return "";
  // Normalize smart quotes/dashes that often sneak in from docs
  let s = input
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/–/g, "-")
    .replace(/—/g, "—"); // keep em-dash as is

  // Escape HTML first
  s = s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  // Then apply very small inline markdown
  // **bold**
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // *italic*  (ensure it doesn't catch already-bolded inner *)
  s = s.replace(/(^|[\s(])\*(?!\s)([^*]+?)\*(?=[\s).,!?:;]|$)/g, "$1<em>$2</em>");
  // `code`
  s = s.replace(/`([^`]+?)`/g, "<code class=\"px-1 py-0.5 rounded bg-white\/10 border border-white\/20 text-white\">$1</code>");

  return s;
}

/** Single bullet normalizer: accepts string or objects with {ref|key, text} */
export default function pointToJSX(p: any, i: number) {
  const rawText =
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
      <span dangerouslySetInnerHTML={{ __html: mdInline(String(rawText)) }} />
    </li>
  );
}
