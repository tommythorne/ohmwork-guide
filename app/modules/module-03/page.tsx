"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { AlertTriangle, Zap, Shield, Plug, Cable, Building, Flame, Target, Waypoints, Ruler, BookOpen, Brain, Warehouse, Droplets, HardHat, CircuitBoard, Wrench } from "lucide-react";

import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

/** ---------- Helpers (same look/feel as Module 2) ---------- */
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

/** ---------- Quiz (new, non-duplicated questions) ---------- */
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
    stem: "IMC support intervals must not exceed which distance in exposed work?",
    choices: [
      { key: "A", text: "6 feet" },
      { key: "B", text: "8 feet" },
      { key: "C", text: "10 feet" },
      { key: "D", text: "12 feet" },
    ],
    answer: "C",
    why: "Article 342 requires IMC to be supported at intervals not exceeding 10 feet, with box support within 3 feet."
  },
  {
    id: 2,
    stem: "RMC connections in hazardous locations generally require:",
    choices: [
      { key: "A", text: "Compression fittings" },
      { key: "B", text: "Threaded fittings" },
      { key: "C", text: "Set-screw fittings" },
      { key: "D", text: "Any listed fittings" },
    ],
    answer: "B",
    why: "RMC is threaded; hazardous locations need threaded fittings to maintain integrity."
  },
  {
    id: 3,
    stem: "PVC raceways installed outdoors subject to sunlight and temperature swings need:",
    choices: [
      { key: "A", text: "No special treatment" },
      { key: "B", text: "Only UV-resistant straps" },
      { key: "C", text: "Expansion fittings and support per code" },
      { key: "D", text: "Metallic bushings only" },
    ],
    answer: "C",
    why: "Article 352 calls for expansion fittings for thermal movement and proper support spacing."
  },
  {
    id: 4,
    stem: "LFNC must be supported within what distance of terminations?",
    choices: [
      { key: "A", text: "3 inches" },
      { key: "B", text: "6 inches" },
      { key: "C", text: "12 inches" },
      { key: "D", text: "18 inches" },
    ],
    answer: "C",
    why: "Article 356 requires support within 12 inches of boxes/fittings and frequent intervals thereafter."
  },
  {
    id: 5,
    stem: "Metal wireways have a maximum conductor fill of:",
    choices: [
      { key: "A", text: "20%" },
      { key: "B", text: "30%" },
      { key: "C", text: "40%" },
      { key: "D", text: "53%" },
    ],
    answer: "C",
    why: "Articles 376 limits wireway fill to 40% of the cross-sectional area."
  },
  {
    id: 6,
    stem: "Surface metal raceways are generally permitted in which locations?",
    choices: [
      { key: "A", text: "Wet locations" },
      { key: "B", text: "Hazardous locations" },
      { key: "C", text: "Dry, non-corrosive locations" },
      { key: "D", text: "Concrete encasement" },
    ],
    answer: "C",
    why: "Article 386 permits them in dry locations; not for wet/hazardous unless specifically listed."
  },
  {
    id: 7,
    stem: "When comparing IMC and RMC, IMC is typically:",
    choices: [
      { key: "A", text: "Heavier wall than RMC" },
      { key: "B", text: "Lighter with similar strength" },
      { key: "C", text: "Plastic and nonconductive" },
      { key: "D", text: "Only for residential use" },
    ],
    answer: "B",
    why: "IMC is lighter than RMC while maintaining robust protection."
  },
  {
    id: 8,
    stem: "PVC support spacing is typically:",
    choices: [
      { key: "A", text: "Every 10 ft" },
      { key: "B", text: "Every 6 ft" },
      { key: "C", text: "Every 4 ft" },
      { key: "D", text: "Only at boxes" },
    ],
    answer: "C",
    why: "Article 352 requires closer spacing; 4 ft is a common maximum interval."
  },
  {
    id: 9,
    stem: "LFNC is best suited for:",
    choices: [
      { key: "A", text: "Concrete-encased feeders" },
      { key: "B", text: "High-temperature ovens" },
      { key: "C", text: "Wet locations and vibration" },
      { key: "D", text: "Hazardous (Class I) locations by default" },
    ],
    answer: "C",
    why: "LFNC is liquidtight and flexible—perfect for wet/vibration; not inherently rated for hazardous without listing."
  },
  {
    id: 10,
    stem: "Metal wireway supports are required at intervals not exceeding:",
    choices: [
      { key: "A", text: "3 ft" },
      { key: "B", text: "5 ft" },
      { key: "C", text: "8 ft" },
      { key: "D", text: "10 ft" },
    ],
    answer: "B",
    why: "Article 376 sets support intervals (commonly 5 ft)."
  },
  {
    id: 11,
    stem: "Surface metal raceways require bonding and grounding per:",
    choices: [
      { key: "A", text: "Article 110" },
      { key: "B", text: "Article 250" },
      { key: "C", text: "Article 300" },
      { key: "D", text: "Chapter 9" },
    ],
    answer: "B",
    why: "Bonding/grounding rules live in Article 250."
  },
  {
    id: 12,
    stem: "For RMC/IMC, box support distance is typically within:",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "24 inches" },
      { key: "C", text: "36 inches" },
      { key: "D", text: "48 inches" },
    ],
    answer: "C",
    why: "Support within 3 ft of boxes is a recurring requirement."
  },
  {
    id: 13,
    stem: "PVC in corrosive environments is advantageous because it is:",
    choices: [
      { key: "A", text: "Metallic and sacrificial" },
      { key: "B", text: "Nonmetallic and corrosion-resistant" },
      { key: "C", text: "Self-bonding" },
      { key: "D", text: "Self-supporting at 10 ft spans" },
    ],
    answer: "B",
    why: "PVC resists many corrosive agents."
  },
  {
    id: 14,
    stem: "LFNC maximum general support spacing (between supports) is typically:",
    choices: [
      { key: "A", text: "3 ft" },
      { key: "B", text: "4.5 ft" },
      { key: "C", text: "6 ft" },
      { key: "D", text: "10 ft" },
    ],
    answer: "A",
    why: "LFNC is supported frequently (e.g., ≤ 3 ft) and within 12 in. of boxes."
  },
  {
    id: 15,
    stem: "Wireway conductor size is limited to:",
    choices: [
      { key: "A", text: "350 kcmil" },
      { key: "B", text: "400 kcmil" },
      { key: "C", text: "500 kcmil" },
      { key: "D", text: "750 kcmil" },
    ],
    answer: "C",
    why: "Typical limit for wireways is 500 kcmil, with other fill and count limits also applying."
  },
];

/** ---------- Module 3 Page ---------- */
export default function Ch3RacewaysAdvanced() {
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

      {/* Hero */}
      <div className={`mx-auto max-w-5xl mt-8 md:mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 md:p-12">
          {/* IMAGE 1 */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/module-03/m03-01.jpg"
              alt="Advanced raceway systems: IMC, RMC, PVC, LFNC and wireways"
              fill
              className="object-cover"
              priority
              width={1200} height={800}
            />
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
              Chapter 3 — Raceway Systems & Wireways (Advanced)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              <HL>Push beyond basics</HL>: learn when and why to choose IMC, RMC, PVC, LFNC, metal wireways, and surface raceways—plus the support spacing, fittings, and expansion rules the exam loves.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-yellow-400">6</div>
                <div className="text-white/80">Major Articles</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400">15</div>
                <div className="text-white/80">Quiz Questions</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400">12</div>
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

      {/* Article 342 — IMC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <HardHat className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 342 — Intermediate Metal Conduit (IMC)
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left: text */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>342.10</HL>: Use in exposed/concealed, dry, wet, and hazardous locations when properly fitted.</p>
            <p>— <HL>342.14</HL>: Threaded connections required; maintain electrical continuity.</p>
            <p>— <HL>342.30</HL>: Support within 3 ft of boxes and at intervals not exceeding 10 ft.</p>
            <p>— <HL>342.42</HL>: Complete raceway system; use only listed fittings.</p>
            <p>— <HL>342.46</HL>: Securely fasten to avoid damage and misalignment.</p>
          </div>

          {/* Right: images (m03-02, m03-03) */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-02.jpg"
                alt="IMC installation with threaded connections and proper supports"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Threaded & Supported</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-03.jpg"
                alt="Examples of IMC in hazardous/wet areas with listed fittings"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Listed Fittings Only</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">IMC Key Requirements</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Item</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Section</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Support Spacing</td>
                  <td className="p-3">342.30</td>
                  <td className="p-3 text-green-400">≤ 10 ft; within 3 ft of boxes</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Connections</td>
                  <td className="p-3">342.14</td>
                  <td className="p-3 text-green-400">Threaded; continuity</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Fittings</td>
                  <td className="p-3">342.42</td>
                  <td className="p-3 text-green-400">Listed/approved only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        <WarningBox>
          IMC is lighter than RMC but still needs <HL>threaded fittings</HL>. Exam questions often try to trick you with threadless compression on IMC—don’t fall for it.
        </WarningBox>
      </section>

            {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 344 — RMC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 344 — Rigid Metal Conduit (RMC)
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>344.10</HL>: Suitable for exposed/concealed work, dry, wet, and hazardous locations.</p>
            <p>— <HL>344.14</HL>: <HL>Threaded</HL> connections required; maintain effective bonding.</p>
            <p>— <HL>344.30</HL>: Support within 3 ft of boxes and ≤ 10 ft between supports.</p>
            <p>— <HL>344.60</HL>: Bond/ground per Article 250; treat RMC as an equipment grounding conductor when permitted.</p>
          </div>

          {/* Images m03-04, m03-05 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-04.jpg"
                alt="Industrial RMC installation with bonding jumpers and proper supports"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Industrial-Grade Protection</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-05.jpg"
                alt="RMC threaded fittings for hazardous areas"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Threaded Fittings in HazLoc</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">RMC vs IMC — Quick Compare</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">RMC</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Heaviest wall, most robust</li>
                <li>• Higher cost</li>
                <li>• Hazardous/industrial go-to</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">IMC</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Lighter, similar strength</li>
                <li>• Often more economical</li>
                <li>• Great all-around option</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        <HorrorStory>
          An installer used set-screw fittings on RMC to save time. The inspector failed the whole run in a hazloc area. 
          <HL>Threaded only</HL> for RMC in these environments—no exceptions.
        </HorrorStory>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 352 — PVC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Droplets className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 352 — PVC Conduit (Advanced)
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>352.10</HL>: Dry/wet/corrosive locations when listed; underground allowed.</p>
            <p>— <HL>352.30</HL>: Support within 3 ft of boxes; ≤ 4 ft between supports typical.</p>
            <p>— <HL>352.44</HL>: Use <HL>expansion fittings</HL> for thermal movement—outdoor runs need them.</p>
            <p>— <HL>352.12</HL>: Not for certain hazardous locations unless specifically listed.</p>
          </div>

        {/* Images m03-06, m03-07 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-06.jpg"
                alt="PVC runs outdoors with expansion fittings and proper straps"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Expansion Fittings Outdoors</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-07.jpg"
                alt="Underground PVC burial depth and warning tape example"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Underground Protection</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">PVC Quick Requirements</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Item</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Section</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Takeaway</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Support</td>
                  <td className="p-3">352.30</td>
                  <td className="p-3 text-green-400">≤ 4 ft; within 3 ft of boxes</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Expansion</td>
                  <td className="p-3">352.44</td>
                  <td className="p-3 text-green-400">Expansion fittings outdoors</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Locations</td>
                  <td className="p-3">352.10/352.12</td>
                  <td className="p-3 text-green-400">Corrosive OK; hazloc only if listed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        <RuleBox>
          PVC grows/shrinks a lot with temperature. If you skip <HL>expansion fittings</HL>, you’ll see bowed runs, popped straps, and cracked fittings.
        </RuleBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 356 — LFNC */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC)
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>356.10</HL>: Use in wet locations, equipment connections, and vibration areas.</p>
            <p>— <HL>356.12</HL>: Not for specific hazardous locations unless listed.</p>
            <p>— <HL>356.30</HL>: Support within 12 in. of boxes and at intervals ≤ 3 ft.</p>
            <p>— <HL>356.42</HL>: Install as complete system; listed fittings only.</p>
          </div>

          {/* Images m03-08, m03-09 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-08.jpg"
                alt="LFNC termination at equipment with liquidtight connectors"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Liquidtight at Equipment</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-09.jpg"
                alt="LFNC supported at ≤ 3 ft intervals and within 12 inches of boxes"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Frequent Support Required</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">LFNC Applications & Benefits</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Ideal Uses</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Wet areas & wash-down</li>
                <li>• Vibration-prone equipment</li>
                <li>• Tight equipment whips</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Key Benefits</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Liquidtight, flexible</li>
                <li>• Corrosion resistant</li>
                <li>• Fast terminations</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        <WarningBox>
          LFNC needs <HL>lots of support</HL>: ≤ 3 ft between straps and within 12 in. of boxes. That’s far tighter than rigid raceways—easy exam point.
        </WarningBox>
      </section>

            {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 376 — Metal Wireways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Warehouse className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 376 — Metal Wireways
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>376.10</HL>: Permitted in dry locations; great for large conductor routing.</p>
            <p>— <HL>Fill Limit</HL>: Max <HL>40%</HL> cross-section.</p>
            <p>— <HL>Conductor Count/Size</HL>: Typical limits include ≤ 30 conductors and ≤ 500 kcmil.</p>
            <p>— <HL>376.30</HL>: Support at intervals ≤ 5 ft.</p>
            <p>— <HL>Bonding</HL>: Grounding/bonding per Article 250.</p>
          </div>

          {/* Images m03-10, m03-11 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-10.jpg"
                alt="Metal wireway along wall with cover, supported and bonded"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Wireway for Big Feeds</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-11.jpg"
                alt="Wireway conductor fill and bonding jumpers example"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Respect 40% Fill</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">Wireway Requirements</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Item</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Limit</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Fill</td>
                  <td className="p-3">≤ 40%</td>
                  <td className="p-3 text-green-400">Heat dissipation & future space</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Conductor Count</td>
                  <td className="p-3">≤ 30</td>
                  <td className="p-3 text-green-400">Manageability & heat</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Max Size</td>
                  <td className="p-3">≤ 500 kcmil</td>
                  <td className="p-3 text-green-400">Terminations & space</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        <HorrorStory>
          A wireway got packed to the brim “just for now.” It overheated during summer load peaks. 
          <HL>40% fill</HL> isn’t a suggestion—respect it or pay later.
        </HorrorStory>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 386 — Surface Metal Raceways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <CircuitBoard className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 386 — Surface Metal Raceways
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>386.10</HL>: Permitted in dry locations for retrofits and clean routing on finished surfaces.</p>
            <p>— <HL>386.30</HL>: Support at intervals ≤ 5 ft; secure device boxes and fittings.</p>
            <p>— <HL>Bonding</HL>: Bond/ground per Article 250; maintain continuity across fittings and device boxes.</p>
            <p>— <HL>Fill/Devices</HL>: Respect manufacturer limits on conductor fill and device spacing.</p>
          </div>

          {/* Images m03-12, m03-13 */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-12.jpg"
                alt="Surface metal raceway in office retrofit with proper supports and device boxes"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Retrofit Friendly</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-13.jpg"
                alt="Conductor routing and device spacing in surface raceway system"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Plan Fill & Devices</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Surface Raceway — Best Practices</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Planning</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Map device spacing up front</li>
                <li>• Route to avoid conflict with trim/doors</li>
                <li>• Keep a clean, parallel aesthetic</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Execution</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Support every 5 ft</li>
                <li>• Maintain bonding continuity</li>
                <li>• Label circuits to reduce confusion</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        <RuleBox>
          Surface raceways shine in <HL>finished spaces</HL>. Keep runs plumb/level and device spacing consistent—your work will look pro and pass inspection.
        </RuleBox>
      </section>

      {/* Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Chapter 3 Summary */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
              Chapter 3 Summary
            </h2>
            <Target className="w-10 h-10 text-yellow-400" />
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Match the raceway to the environment, mind the support spacing, use listed fittings, and don’t forget expansion for PVC. 
            Wireways and surface raceways solve layout headaches—just honor fill and bonding rules.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <HardHat className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Threaded Where Required</h3>
              <p className="text-white/80 text-sm">IMC/RMC in hazloc: threaded only—no shortcuts.</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Droplets className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expansion for PVC</h3>
              <p className="text-white/80 text-sm">Outdoor runs move—add expansion fittings.</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Wrench className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">LFNC = Frequent Support</h3>
              <p className="text-white/80 text-sm">≤ 3 ft between straps; ≤ 12 in. from terminations.</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Warehouse className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Wireway Limits</h3>
              <p className="text-white/80 text-sm">≤ 40% fill, ≤ 30 conductors, ≤ 500 kcmil.</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <CircuitBoard className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Surface Raceway Tips</h3>
              <p className="text-white/80 text-sm">Plan device spacing; keep runs neat and bonded.</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Inspection Mindset</h3>
              <p className="text-white/80 text-sm">Supports, fittings, bonding—hit all three and you’re golden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Check Quiz */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-1900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
              Knowledge Check Quiz
            </h2>
            <Brain className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-lg text-white/90">
            Lock in Chapter 3. Score 80%+ and you’ve got advanced raceways handled.
          </p>
        </div>

        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <FooterNav
        prev={{ href: "/modules/module-02", label: "Chapter 2" }}
        next={{ href: "/modules/module-04", label: "Chapter 4" }}
      />
    </main>
  );
}