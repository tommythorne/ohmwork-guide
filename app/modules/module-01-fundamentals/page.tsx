import Link from 'next/link';

export default function IntroPage() {
  const modules = [
    { id: '01', label: 'Module 01 — Fundamentals', href: '/modules/module-01-fundamentals' },
    { id: '02', label: 'Module 02 — Wiring Methods', href: '/modules/module-02-wiring-methods' },
    { id: '03', label: 'Module 03 — Branch Circuits', href: '/modules/module-03-branch-circuits' },
    { id: '04', label: 'Module 04 — Services', href: '/modules/module-04-services' },
    { id: '05', label: 'Module 05 — Conductors & Ampacity', href: '/modules/module-05-conductors-ampacity' },
    { id: '06', label: 'Module 06 — Grounding & Bonding', href: '/modules/module-06-grounding-bonding' },
    { id: '07', label: 'Module 07 — Boxes & Enclosures', href: '/modules/module-07-boxes-enclosures' },
    { id: '08', label: 'Module 08 — Motors & HVAC', href: '/modules/module-08-motors-hvac' },
    { id: '09', label: 'Module 09 — Special Occupancies', href: '/modules/module-09-special-occupancies' },
    { id: '10', label: 'Module 10 — Low Voltage', href: '/modules/module-10-low-voltage' },
    { id: '11', label: 'Module 11 — Calculations', href: '/modules/module-11-calculations' },
    { id: '12', label: 'Module 12 — Inspection & Safety', href: '/modules/module-12-inspection-safety' },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center">Welcome to OhmWork</h1>
        <p className="mt-3 text-center opacity-90">
          Pick a module to begin. (We'll rename these to NEC chapter names next.)
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <Link
              key={m.id}
              href={m.href}
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