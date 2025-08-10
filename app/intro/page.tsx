import Link from "next/link";

export default function IntroTOC() {
  const items = [
    { href: "/modules/module-01-fundamentals", title: "Module 1 — General Requirements & Definitions" },
    { href: "/modules/module-02-wiring-methods", title: "Module 2 — Wiring Methods & Materials" },
    { href: "/modules/module-03-branch-circuits", title: "Module 3 — Branch Circuits & Feeders" },
    { href: "/modules/module-04-services", title: "Module 4 — Services, OCP, & Equipment" },
    { href: "/modules/module-05-conductors-ampacity", title: "Module 5 — Conductors, Ampacity & Adjustment" },
    { href: "/modules/module-06-grounding-bonding", title: "Module 6 — Grounding & Bonding" },
    { href: "/modules/module-07-boxes-enclosures", title: "Module 7 — Boxes, Enclosures & Fittings" },
    { href: "/modules/module-08-motors-hvac", title: "Module 8 — Motors, HVAC & Equipment" },
    { href: "/modules/module-09-special-occupancies", title: "Module 9 — Special Occupancies & Uses" },
    { href: "/modules/module-10-low-voltage", title: "Module 10 — Low Voltage, Fire & Signaling" },
    { href: "/modules/module-11-calculations", title: "Module 11 — Load Calculations" },
    { href: "/modules/module-12-inspection-safety", title: "Module 12 — Inspection, Safety & Best Practices" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">OhmWork — Introduction & TOC</h1>
        <p className="mt-4 text-lg text-gray-200">
          Learn the Code. Pass the Test. No BS. Pick a module to dive in:
        </p>

        <ul className="mt-8 space-y-3">
          {items.map((m) => (
            <li key={m.href}>
              <Link href={m.href} className="block rounded-xl border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 transition">
                {m.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link href="/" className="text-green-400 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
