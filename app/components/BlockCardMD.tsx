"use client";

import React from "react";
import clsx from "clsx";

interface ChartItem {
  label: string;
  value: number;
}

interface Props {
  title: string;
  chart?: ChartItem[];
  max?: number;
  note?: string;
}

export default function BlockCardMD({ title, chart, max = 100, note }: Props) {
  if (!chart) return null;
  const maxValue = Math.max(max, ...chart.map(c => c.value));

  return (
    <div className="rounded-xl bg-purple-800/20 border border-purple-500/40 p-4 shadow-md">
      <div className="flex items-center mb-3">
        <span className="text-purple-300 font-bold mr-2">✔</span>
        <h3 className="text-lg font-semibold text-purple-100">{title}</h3>
      </div>
      <div className="space-y-4">
        {chart.map((item, idx) => (
          <div key={idx} className="w-full">
            <div className="flex justify-between text-xs text-purple-100/90 mb-1">
              <span>{item.label}</span>
              <span>{item.value}"</span>
            </div>
            <div className="h-3 bg-purple-900/50 rounded-md overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-md"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-3 text-xs text-purple-200/80 leading-snug">{note}</p>
      )}
    </div>
  );
}
