"use client";

import {
  AlertTriangle, Zap, Shield, Plug, Cable, Building, CloudLightning, Flame,
  Target, Waypoints, GitBranch, Ruler, BookOpen, Brain, Wrench
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

/* ---------- Shared UI helpers (mirrors Module 2 style) ---------- */
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-red-400 text-xl">⚠️</span>
      <span className="font-bold text-red-400">EXAM TRAP</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const RuleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <Ruler className="w-5 h-5 text-yellow-400" aria-hidden="true" />
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <Flame className="w-5 h-5 text-orange-400" aria-hidden="true" />
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <BookOpen className="w-5 h-5 text-blue-400" aria-hidden="true" />
      <span className="font-bold text-blue-400">NEC REFERENCE</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const DataTable = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
    {children}
  </div>
);

const ChartBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
    {children}
  </div>
);

/* ----------------------------- Quiz ----------------------------- */
type Q = {
  id: number;
  stem: string;
  choices: { key: "A" | "B" | "C" | "D"; text: string }[];
  answer: "A" | "B" | "C" | "D";
  why: string;
};

const quiz: Q[] = [
  {
    id: 1,
    stem: "How much total bend is permitted between pull points in most raceway methods?",
    choices: [
      { key: "A", text: "180°" },
      { key: "B", text: "270°" },
      { key: "C", text: "360°" },
      { key: "D", text: "No explicit limit" },
    ],
    answer: "C",
    why: "The 360° rule is a common limit across several raceway articles."
  },
  {
    id: 2,
    stem: "Long PVC runs outdoors typically require:",
    choices: [
      { key: "A", text: "Dielectric unions" },
      { key: "B", text: "Expansion fittings and proper support spacing" },
      { key: "C", text: "Bonding jumpers across every coupling" },
      { key: "D", text: "Only metal supports" },
    ],
    answer: "B",
    why: "Thermal movement on PVC is significant; expansion fittings manage that movement."
  },
  {
    id: 3,
    stem: "Raceway transitioning from warm to cold spaces should be treated as:",
    choices: [
      { key: "A", text: "Dry location" },
      { key: "B", text: "Damp location" },
      { key: "C", text: "Wet location (condensation risk)" },
      { key: "D", text: "Hazardous location" },
    ],
    answer: "C",
    why: "Condensation can make interiors wet; use conductors suitable for wet locations."
  },
  {
    id: 4,
    stem: "Typical minimum burial depth for PVC under a residential driveway is:",
    choices: [
      { key: "A", text: "12 in." },
      { key: "B", text: "18 in." },
      { key: "C", text: "24 in." },
      { key: "D", text: "36 in." },
    ],
    answer: "C",
    why: "24 inches is a common benchmark in cover tables (verify conditions)."
  },
  {
    id: 5,
    stem: "IMC compared to RMC is usually:",
    choices: [
      { key: "A", text: "Thicker-walled than RMC" },
      { key: "B", text: "Same wall as RMC" },
      { key: "C", text: "Thinner wall but similar strength and protection" },
      { key: "D", text: "Nonmetallic, so lighter" },
    ],
    answer: "C",
    why: "IMC is lighter yet maintains comparable performance."
  },
  {
    id: 6,
    stem: "When >3 current-carrying conductors share a raceway, you must:",
    choices: [
      { key: "A", text: "Upsize the neutral only" },
      { key: "B", text: "Apply ampacity adjustment (derating)" },
      { key: "C", text: "Ignore if under 100 ft" },
      { key: "D", text: "Only increase support spacing" },
    ],
    answer: "B",
    why: "Derating applies once you exceed three CCC in a raceway."
  },
  {
    id: 7,
    stem: "Across an expansion fitting in a metal raceway you typically need:",
    choices: [
      { key: "A", text: "No special provision" },
      { key: "B", text: "A bonding jumper to maintain equipment grounding continuity" },
      { key: "C", text: "A nonmetallic union" },
      { key: "D", text: "A seal-off" },
    ],
    answer: "B",
    why: "Bonding continuity must be maintained across expansion joints."
  },
  {
    id: 8,
    stem: "A short metal raceway nipple (≤ 24 in.) may have:",
    choices: [
      { key: "A", text: "No limit on conductor fill" },
      { key: "B", text: "Special exceptions for fill/derating per notes and tables" },
      { key: "C", text: "Prohibited use" },
      { key: "D", text: "Unlimited bends" },
    ],
    answer: "B",
    why: "Short nipples often have specific allowances—check the notes."
  },
  {
    id: 9,
    stem: "RTRC (fiberglass) conduit is commonly selected for:",
    choices: [
      { key: "A", text: "High magnetic properties" },
      { key: "B", text: "Corrosive environments and low weight" },
      { key: "C", text: "Decorative indoor use only" },
      { key: "D", text: "Extensive threading" },
    ],
    answer: "B",
    why: "It’s corrosion resistant and very light."
  },
  {
    id: 10,
    stem: "Support spacing for EMT is typically around:",
    choices: [
      { key: "A", text: "Every 3 ft" },
      { key: "B", text: "Every 10 ft plus within 3 ft of boxes" },
      { key: "C", text: "Every 20 ft" },
      { key: "D", text: "No supports required" },
    ],
    answer: "B",
    why: "Common benchmark; always confirm method-specific rules."
  },
  {
    id: 11,
    stem: "Direct-buried RMC under a driveway commonly requires cover of:",
    choices: [
      { key: "A", text: "6 in." },
      { key: "B", text: "12 in." },
      { key: "C", text: "18 in." },
      { key: "D", text: "24 in." },
    ],
    answer: "C",
    why: "18 in. is a common cover value for rigid—verify conditions."
  },
  {
    id: 12,
    stem: "ENT (Smurf tube) is generally allowed in:",
    choices: [
      { key: "A", text: "All wet locations" },
      { key: "B", text: "Embedded in poured concrete where listed and permitted" },
      { key: "C", text: "Hazardous (classified) locations by default" },
      { key: "D", text: "As an equipment grounding conductor" },
    ],
    answer: "B",
    why: "ENT has specific permitted uses—check listing and local adoption."
  },
  {
    id: 13,
    stem: "PVC risers emerging to sunlight need:",
    choices: [
      { key: "A", text: "No change" },
      { key: "B", text: "UV-rated material/guards or transition to a more robust method" },
      { key: "C", text: "Smaller conductor fill" },
      { key: "D", text: "Paint only" },
    ],
    answer: "B",
    why: "UV and physical damage require attention at transitions."
  },
  {
    id: 14,
    stem: "Terminating raceways at enclosures requires:",
    choices: [
      { key: "A", text: "Electrical tape as bushing" },
      { key: "B", text: "Listed fittings; bushings where required to protect conductors" },
      { key: "C", text: "Any mechanical clamp" },
      { key: "D", text: "No fitting if metal-to-metal" },
    ],
    answer: "B",
    why: "Protect conductor insulation and use listed terminations."
  },
  {
    id: 15,
    stem: "Max total bends between pull points in FMC is typically:",
    choices: [
      { key: "A", text: "180°" },
      { key: "B", text: "270°" },
      { key: "C", text: "360°" },
      { key: "D", text: "Unlimited" },
    ],
    answer: "C",
    why: "360° is a recurring limit for many raceway types."
  },
];

/* --------------------------- Page Component --------------------------- */
export default function Ch3WiringMethods() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <main className="min-h-screen bg-black text-white px-5 py-8 md:px-8 md:py-12">
      {/* Top Bar */}
      <div className={`mx-auto max-w-5xl flex items-center justify-between gap-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Link href="/intro" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span>Back to TOC</span>
        </Link>
        <span className="text-yellow-400 font-semibold">NEC 2017</span>
      </div>

      {/* Hero Section */}
      <div className={`mx-auto max-w-5xl mt-8 md:mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 md:p-12">
          {/* IMAGE 1 */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/module-03/m03-01.jpg"
              alt="Assorted raceway types and materials"
              fill
              className="object-cover"
              priority
              width={1200} height={800}
            />
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
              Chapter 3 — Wiring Methods and Materials
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              <HL>Pick it. Install it. Protect it.</HL> From EMT to PVC to wireways, this chapter is the boots‑on‑the‑ground
              playbook for getting conductors from A to B without drama. Support spacing, fittings, fill, and real‑world tips—dialed in.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-yellow-400">8</div>
                <div className="text-white/80">Major Articles</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400">15</div>
                <div className="text-white/80">Quiz Questions</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400">27</div>
                <div className="text-white/80">Visual Examples</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 358 — EMT */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 358 — Electrical Metallic Tubing (EMT)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Common in commercial interiors; bends easily, light, clean look.</p>
            <p>— <HL>Limits</HL>: Not your first pick for corrosive/wet unless fittings and conditions permit.</p>
            <p>— <HL>Bends</HL>: Keep total ≤ 360° between pull points; add pull boxes if you exceed.</p>
            <p>— <HL>Support</HL>: Frequent supports; within a few feet of boxes and at set intervals along runs.</p>
            <RuleBox>EMT loves straight, efficient runs. Bend only when you must—pulling tension drops fast with each degree.</RuleBox>
          </div>

          {/* IMAGE 2 & 3 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-02.jpg" alt="Clean EMT installation with offsets and saddles" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">EMT offsets: keep them tight and minimal</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-03.jpg" alt="EMT straps and couplings detail" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Support spacing matters—don’t eyeball it</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">EMT At‑a‑Glance</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Topic</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Key Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3 font-semibold">Bend Limit</td><td className="p-3">≤ 360° total between pull points</td></tr>
              <tr><td className="p-3 font-semibold">Typical Support</td><td className="p-3">Within ~3 ft of boxes; regular intervals along run</td></tr>
              <tr><td className="p-3 font-semibold">Wet Areas</td><td className="p-3">Use listed fittings and follow conditions of use</td></tr>
            </tbody>
          </table>
        </DataTable>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 344 — RMC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 344 — Rigid Metal Conduit (RMC)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Tough as nails. Exterior, service, mechanical rooms, protection where it counts.</p>
            <p>— <HL>Corrosion</HL>: Galv coatings help, but coastal/chemical spots may need added protection.</p>
            <p>— <HL>Bends</HL>: Same 360° cumulative guideline between pull points.</p>
            <p>— <HL>Bonding</HL>: Maintain continuity, especially across expansion fittings and transitions.</p>
            <WarningBox>Threaded joints: don’t forget thread compound where required—moisture finds every gap.</WarningBox>
          </div>

          {/* IMAGE 4 & 5 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-04.jpg" alt="RMC service raceways on exterior wall" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Service mast with RMC — built to take hits</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-05.jpg" alt="Bonding jumper across expansion fitting" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Bonding across expansion fittings preserves continuity</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">RMC vs IMC — Field Takeaways</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">RMC</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Maximum protection, heavier</li>
                <li>• Great for services/exposed areas</li>
                <li>• Threading & sealing = slower</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">IMC</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Lighter wall, similar strength</li>
                <li>• Easier handling over long runs</li>
                <li>• Similar protection when installed right</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

            {/* Article 342 — IMC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 342 — Intermediate Metal Conduit (IMC)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Why IMC</HL>: Similar protection to RMC with a thinner wall = lighter installs.</p>
            <p>— <HL>Use</HL>: Exposed runs, services, risers; where strength vs weight is a factor.</p>
            <p>— <HL>Bends/Fill</HL>: Respect 360° total bends; size for fill and pulling tension.</p>
            <p>— <HL>Bonding</HL>: Keep continuity with listed couplings and jumpers where needed.</p>
          </div>

          {/* IMAGE 6 & 7 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-06.jpg" alt="IMC riser installation on exterior wall" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">IMC riser: strong, lighter than RMC</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-07.jpg" alt="IMC threaded fittings and bushings" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Use listed fittings; protect conductor edges</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">IMC Quick Notes</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Topic</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Takeaway</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3 font-semibold">Strength</td><td className="p-3">Comparable to RMC with lower weight</td></tr>
              <tr><td className="p-3 font-semibold">Corrosion</td><td className="p-3">Protect in harsh/coastal environments</td></tr>
              <tr><td className="p-3 font-semibold">Bonding</td><td className="p-3">Jumpers across expansion joints</td></tr>
            </tbody>
          </table>
        </DataTable>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-850 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 352 — PVC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Cable className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 352 — Rigid Polyvinyl Chloride Conduit (PVC)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Underground, corrosive areas, wet locations with proper fittings.</p>
            <p>— <HL>Expansion</HL>: Long runs outdoors <em>need</em> expansion fittings & spacing per temp swing.</p>
            <p>— <HL>Sun & Damage</HL>: Transition to metal or guard where exposed to physical abuse/UV.</p>
            <p>— <HL>Bends</HL>: Heat bending requires care—avoid kinks; still honor ≤ 360° between pulls.</p>
            <WarningBox>Don’t forget expansion couplings on rooftop and exterior wall runs—thermal growth can pop fittings.</WarningBox>
          </div>

          {/* IMAGE 8 & 9 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-08.jpg" alt="PVC underground installation with warning tape" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Underground PVC: depth, marking tape, sweeps</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-09.jpg" alt="PVC expansion fitting with alignment marks" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Expansion fitting: set for local temp range</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Schedule 40 vs Schedule 80 (PVC)</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Schedule 40</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Standard wall</li>
                <li>• Easier to bend/handle</li>
                <li>• Use where not subject to damage</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Schedule 80</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Thicker wall, stronger</li>
                <li>• Preferred where exposed to abuse</li>
                <li>• Risers, mechanical rooms, outdoors</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-950 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 355 — RTRC (Fiberglass) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Cable className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 355 — Reinforced Thermosetting Resin Conduit (RTRC)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Corrosive sites, long spans on cable tray supports, lightweight installs.</p>
            <p>— <HL>Joining</HL>: Adhesive/coupling systems—follow cure times and surface prep.</p>
            <p>— <HL>Support</HL>: Wider spacing than PVC, but follow listing/manufacturer.</p>
          </div>

          {/* IMAGE 10 & 11 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-10.jpg" alt="RTRC conduit on rooftop supports" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">RTRC rooftop run: corrosion & weight advantages</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-11.jpg" alt="RTRC adhesive-bonded coupling detail" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Adhesive couplings: prep/clean per spec</p>
              </div>
            </div>
          </div>
        </div>

        <RuleBox>RTRC shines where corrosion is king and weight kills productivity. Don’t skip surface prep—bonded joints are only as good as the prep.</RuleBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1050 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 362 — ENT (Smurf Tube) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Cable className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 362 — Electrical Nonmetallic Tubing (ENT)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Curvy interior runs, concrete pours where listed, low-voltage separations respected.</p>
            <p>— <HL>Limits</HL>: Not for all wet/exposed areas; protect from physical damage.</p>
            <p>— <HL>Support</HL>: Strap often; keep boxes accessible and transitions clean.</p>
          </div>

          {/* IMAGE 12 & 13 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-12.jpg" alt="ENT run in stud wall with boxes" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">ENT in walls: fast and flexible</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-13.jpg" alt="ENT embedded in concrete formwork" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Concrete pours: verify listing/allowance</p>
              </div>
            </div>
          </div>
        </div>

        <WarningBox>Blue ENT makes routing easy—but don’t assume it’s okay everywhere. Verify wet-location permissions and protect where subject to damage.</WarningBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1150 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 348 — FMC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Plug className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 348 — Flexible Metal Conduit (FMC)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Equipment whips, vibration areas, tight transitions.</p>
            <p>— <HL>Limits</HL>: Dry locations unless listed otherwise; protect from sharp edges.</p>
            <p>— <HL>Support</HL>: Close to boxes and at frequent intervals; mind 360° rule.</p>
          </div>

          {/* IMAGE 14 & 15 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-14.jpg" alt="FMC motor whip with proper connector" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Motor whip: secure, short, strain‑free</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-15.jpg" alt="FMC strap spacing and bushing detail" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Use bushings; keep strap spacing tight</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">FMC vs LFMC — Which When?</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">FMC (Dry)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Flexible, quick for equipment</li>
                <li>• Dry interiors, no liquids</li>
                <li>• Least cost, light duty</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">LFMC (Wet)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Liquidtight jacket for wet/oily</li>
                <li>• Heavier fittings; outdoor‑ready</li>
                <li>• Use where washdown/vibration</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1250 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 356 — LFNC (Liquidtight Flexible Nonmetallic) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Outdoor equipment, corrosive sprays, quick appliance hookups.</p>
            <p>— <HL>Limits</HL>: Not a substitute for raceways everywhere—watch physical damage.</p>
            <p>— <HL>Fittings</HL>: Use listed liquidtight connectors; maintain equipment grounding path.</p>
          </div>

          {/* IMAGE 16 & 17 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-16.jpg" alt="LFNC on rooftop HVAC with in-use disconnect" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">LFNC to rooftop units: flexible + sealed</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-17.jpg" alt="LFNC connector and strain relief close-up" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm">Use listed liquidtight fittings + support</p>
              </div>
            </div>
          </div>
        </div>

        <RuleBox>Think “wet, quick, safe” when you reach for LFNC. Keep runs short and protected; let rigid methods handle long/abuse‑prone paths.</RuleBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1350 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

            {/* Article 368 — Busways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 368 — Busways</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Plug-in bus</HL> for adaptable distribution in industrial/commercial corridors.</p>
            <p>— <HL>Support</HL> per listing; align joints square; keep phasing/grounding continuous.</p>
            <p>— <HL>Drip & dust</HL> covers in harsh spaces; expansion fittings across long runs.</p>
          </div>

          {/* IMAGE 18 & 19 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-18.jpg" alt="Plug-in busway with tap boxes in production area" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Plug-in busway with tap boxes</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-19.jpg" alt="Busway expansion fitting and bonding jumper" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Expansion fitting with bonding jumper</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">Busway Essentials</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Item</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3 font-semibold">Tap boxes</td><td className="p-3">Match rating, index keys, torque lugs</td></tr>
              <tr><td className="p-3 font-semibold">Seismic</td><td className="p-3">Use sway bracing per engineer/listing</td></tr>
              <tr><td className="p-3 font-semibold">IP rating</td><td className="p-3">Select dust/drip/washdown as needed</td></tr>
            </tbody>
          </table>
        </DataTable>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1450 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 376/378 — Wireways (Metal & Nonmetallic) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Articles 376/378 — Wireways</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Purpose</HL>: Horizontal/vertical gutters for conductors between equipment.</p>
            <p>— <HL>Fill</HL>: Limit conductor fill; keep covers accessible; support frequently.</p>
            <p>— <HL>Bonding</HL>: Treat metallic wireways as EGC when listed/continuous.</p>
          </div>

          {/* IMAGE 20 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-20.jpg" alt="Metal wireway over a row of panels with drop-outs" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Overhead wireway feeding panel lineup</p>
              </div>
            </div>
          </div>
        </div>

        <RuleBox>Label covers by section and torque check after pulls. Keep slack and grouping clean to simplify maintenance.</RuleBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1550 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 386/388 — Surface Raceways (Metal & Nonmetallic) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Plug className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Articles 386/388 — Surface Raceways</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Retrofits on finished walls, lab benches, offices and retail.</p>
            <p>— <HL>Routing</HL>: Keep square, level, and tight to surfaces; use listed corners/tees.</p>
            <p>— <HL>Fill/Derate</HL>: Respect conductor capacity and adjust ampacity if needed.</p>
          </div>

          {/* IMAGE 21 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-21.jpg" alt="Metal surface raceway with device modules" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Modular surface raceway with receptacles/data</p>
              </div>
            </div>
          </div>
        </div>

        <WarningBox>Don’t mix power and data in the same channel unless the system is listed for separation. Use dividers and keep bend radii generous.</WarningBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1650 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 392 — Cable Tray */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Cable className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 392 — Cable Tray</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Types</HL>: Ladder, ventilated trough, solid-bottom; match to environment/load.</p>
            <p>— <HL>Bonding</HL>: Bond sections; treat tray as EGC only when specifically listed.</p>
            <p>— <HL>Support</HL>: Engineer span/deflection; keep fill and sidewall height in spec.</p>
          </div>

          {/* IMAGE 22 & 23 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-22.jpg" alt="Ladder cable tray with properly dressed MC/TC cables" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Ladder tray: tie-downs, spacing, side rails</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-23.jpg" alt="Cable tray bonding jumpers across expansion splice" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Bond jumpers across expansion splice</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">Tray Dos & Don'ts</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Do</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Don’t</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3">Secure and segregate classes of wiring</td><td className="p-3">Overfill or exceed sidewall height</td></tr>
              <tr><td className="p-3">Use manufacturer splices & hardware</td><td className="p-3">Skip bonding over thermal gaps</td></tr>
              <tr><td className="p-3">Check span for cable weight growth</td><td className="p-3">Assume tray = EGC without listing</td></tr>
            </tbody>
          </table>
        </DataTable>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1750 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 300 — Universal Field Rules (Pull/Fill/Expansion) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Ruler className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 300 — Universal Field Rules</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>360° rule</HL>: Max 4 quarter-bends between pull points in any raceway run.</p>
            <p>— <HL>Box/Pull sizing</HL>: Size boxes for conductor size, count, and angle of entry.</p>
            <p>— <HL>Expansion</HL>: Bridge structural/thermal gaps with listed fittings + bonding.</p>
          </div>

          {/* IMAGE 24 & 25 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-24.jpg" alt="Pull box sizing sketch with dimension callouts" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Pull box sizing: straight‑through vs angle pulls</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-25.jpg" alt="Expansion fitting across building joint with bonding jumper" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Expansion across building joint + bond</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Bend Radius & Conduit Fill — Quick Reminders</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Bend Radius</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Don’t exceed conductor min. radius</li>
                <li>• Larger wire → gentler sweeps</li>
                <li>• Heat bends (PVC) evenly; avoid kinks</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Conduit Fill</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• ≤40% for single long conductor</li>
                <li>• ≤31% for two</li>
                <li>• ≤53% for ≤53% for >2 conductorsgt; 2 conductors</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1850 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Field Tips — Burial & Bending */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <CloudLightning className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Field Tips — Burial & Bending</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Burial</HL>: Respect depth by wiring method & occupancy; mark with warning tape.</p>
            <p>— <HL>Risers</HL>: Schedule 80 PVC or guarded metal where subject to damage.</p>
            <p>— <HL>Handholes</HL>: Drainage + crush rating; label circuits inside.</p>
          </div>

          {/* IMAGE 26 & 27 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-26.jpg" alt="Buried raceway section with depth and marking tape" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Burial depth + tracer/marking tape</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-27.jpg" alt="Conduit bending with hickeys and shoe bender—radius callouts" width={400} height={300} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm">Correct radius on field bends</p>
              </div>
            </div>
          </div>
        </div>

        <RuleBox>Underground = plan ahead. Depth, expansion at risers, and identifiable routes save rework and service outages later.</RuleBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Chapter 3 Summary */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-2050 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">Chapter 3 Summary</h2>
            <Target className="w-10 h-10 text-yellow-400" />
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            You can now choose the right raceway and material for any environment—rigid, flexible, metallic, nonmetallic—and
            install it cleanly with proper support, bonding, fill, and expansion in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4">
              <Waypoints className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pick the Method</h3>
            <p className="text-white/80 text-sm">RMC/IMC for strength, PVC/RTRC for corrosion, FMC/LFMC/LFNC for vibration or quick terminations.</p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Respect Limits</h3>
            <p className="text-white/80 text-sm">360° bend rule, fill limits, expansion joints, and listed fittings keep pulls safe and serviceable.</p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4">
              <Building className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Distribute Smart</h3>
            <p className="text-white/80 text-sm">Cable tray, wireway, surface raceway, and busway each have a sweet spot—use the right one.</p>
          </div>
        </div>
      </section>

      {/* Knowledge Check Quiz */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-2100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">Knowledge Check Quiz</h2>
            <Brain className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-lg text-white/90">Prove you’ve got Chapter 3 down—shoot for 80%+.</p>
        </div>

        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <FooterNav prev={{ href: "/modules/module-02", label: "Chapter 2" }} next={{ href: "/modules/module-04", label: "Chapter 4" }} />
    </main>
  );
}