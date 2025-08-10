import Link from 'next/link';

export default function IntroPage() {
  const modules = [
    { id: '01', label: 'Module 01' },
    { id: '02', label: 'Module 02' },
    { id: '03', label: 'Module 03' },
    { id: '04', label: 'Module 04' },
    { id: '05', label: 'Module 05' },
    { id: '06', label: 'Module 06' },
    { id: '07', label: 'Module 07' },
    { id: '08', label: 'Module 08' },
    { id: '09', label: 'Module 09' },
    { id: '10', label: 'Module 10' },
    { id: '11', label: 'Module 11' },
    { id: '12', label: 'Module 12' },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center">Welcome to OhmWork</h1>
        <p className="mt-3 text-center opacity-90">
          Pick a module to begin. (We’ll rename these to NEC chapter names next.)
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <Link
              key={m.id}
              href={`/modules/module-${m.id}`}
              className="block rounded-lg border border-white/15 p-5 hover:bg-white/5 transition"
            >
              <div className="text-lg font-semibold">{m.label}</div>
              <div className="mt-1 text-sm opacity-70">Tap to open</div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block rounded-lg border border-white/15 px-4 py-2 hover:bg-white/5 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
