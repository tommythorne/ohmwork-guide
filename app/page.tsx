import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-tight">
          OhmWork
        </h1>

        <div className="mt-6 space-y-2 text-lg md:text-2xl opacity-90">
          <p>No BS Electrician&apos;s Guide</p>
          <p>Learn the NEC fast</p>
          <p>Pass your exam</p>
        </div>

        <Link
          href="/guide"
          className="inline-block mt-10 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-semibold shadow-lg transition-all"
        >
          Start Now
        </Link>
      </div>
    </main>
  );
}
