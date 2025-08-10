'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-black text-white p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">OhmWork</h1>

        <p className="mt-4 text-xl opacity-90">
          Learn the Code • Pass the Test • No BS
        </p>

        <div className="mt-10">
          <Link
            href="/intro"
            className="inline-block rounded-lg border border-white/15 px-6 py-3 text-lg hover:bg-white/5 transition"
          >
            Let’s Do This
          </Link>
        </div>
      </div>
    </main>
  );
}
