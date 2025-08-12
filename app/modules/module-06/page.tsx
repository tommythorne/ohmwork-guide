import Link from "next/link";

export default function ModulePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400">Module 6 — Grounding & Bonding</h1>
        <p className="mt-4 text-gray-200">
          Placeholder content for Module 6 — Grounding & Bonding.
          I’ll replace this with interactive lessons, animations, and quizzes.
        </p>

        <div className="mt-10 flex gap-6">
          <Link href="/intro" className="text-green-400 hover:underline">← Back to TOC</Link>
          <Link href="/" className="text-green-400 hover:underline">Home</Link>
        </div>
      </div>
    </main>
  );
}
