import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400">OhmWork</h1>

        <div className="mt-6 space-y-1 text-xl md:text-2xl">
          <p className="opacity-0 animate-[fadein_0.6s_forwards] [animation-delay:0.2s]">Learn the Code</p>
          <p className="opacity-0 animate-[fadein_0.6s_forwards] [animation-delay:0.8s]">Pass the Test</p>
          <p className="opacity-0 animate-[fadein_0.6s_forwards] [animation-delay:1.4s]">No BS</p>
        </div>

        <div className="mt-8">
          <Link
            href="/intro"
            className="inline-block rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 text-lg transition relative z-50"
          >
            Let’s Do This
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </main>
  );
}
