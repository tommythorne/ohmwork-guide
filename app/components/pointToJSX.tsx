/* @ts-nocheck */
import React from "react";

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
      {text}
    </li>
  );
}
