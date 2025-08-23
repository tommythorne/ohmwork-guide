"use client";

import { AlertTriangle, Zap, Shield, Plug, Cable, Building, CloudLightning, Flame, Target, Waypoints, GitBranch, Ruler, BookOpen, Brain } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

/** Utilities (same look/feel as your other modules) */
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
      <Ruler className="w-5 h-5 text-yellow-400" aria-hidden />
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);
const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <Flame className="w-5 h-5 text-orange-400" aria-hidden />
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);
const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <BookOpen className="w-5 h-5 text-blue-400" aria-hidden />
      <span className="font-bold text-blue-400">NEC REFERENCE</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);
const DataTable = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">{children}</div>
);
const ChartBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">{children}</div>
);

/** Quiz */
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
    stem: "Which Article governs branch circuits in dwelling and commercial occupancies?",
    choices: [
      { key: "A", text: "Article 200" },
      { key: "B", text: "Article 210" },
      { key: "C", text: "Article 215" },
      { key: "D", text: "Article 230" },
    ],
    answer: "B",
    why: "Article 210 covers branch circuits.",
  },
  {
    id: 2,
    stem: "Where are service conductors requirements primarily located?",
    choices: [
      { key: "A", text: "Article 220" },
      { key: "B", text: "Article 225" },
      { key: "C", text: "Article 230" },
      { key: "D", text: "Article 240" },
    ],
    answer: "C",
    why: "Article 230 covers services, including service conductors.",
  },
  {
    id: 3,
    stem: "Grounding electrode system and conductor sizing live primarily in:",
    choices: [
      { key: "A", text: "Article 210" },
      { key: "B", text: "Article 242" },
      { key: "C", text: "Article 250" },
      { key: "D", text: "Article 285" },
    ],
    answer: "C",
    why: "Article 250 governs grounding and bonding.",
  },
  {
    id: 4,
    stem: "General branch/feeder/service load calculations are found in:",
    choices: [
      { key: "A", text: "Article 220" },
      { key: "B", text: "Article 215" },
      { key: "C", text: "Article 240" },
      { key: "D", text: "Article 225" },
    ],
    answer: "A",
    why: "Article 220 covers calculations.",
  },
  {
    id: 5,
    stem: "Overcurrent protection of conductors and equipment is covered in:",
    choices: [
      { key: "A", text: "Article 240" },
      { key: "B", text: "Article 242" },
      { key: "C", text: "Article 280" },
      { key: "D", text: "Article 210" },
    ],
    answer: "A",
    why: "Article 240 covers overcurrent protection.",
  },
];

export default function Ch2WiringAndProtection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <main className="min-h-screen bg-black text-white px-5 py-8 md:px-8 md:py-12">
      {/* Top bar */}
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
            <Image src="/images/module-02/m02-01.jpg" alt="Chapter 2 wiring and protection hero" fill className="object-cover" priority />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
              Chapter 2 — Wiring and Protection
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              <HL>Core safety rules for conductors and overcurrent protection.</HL> Master branch circuits, feeders, services, GES, and surge/overvoltage protection so your installs pass inspection the first time.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-yellow-400">10</div>
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

      {/* === Article 200 — Use & ID of Grounded Conductors === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 200 — Use & Identification of Grounded Conductors</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>200.6</HL>: Identifying the grounded conductor (typically white/gray). No re-identification of smaller than 4 AWG except as permitted for specific cables.</p>
            <p>— <HL>Polarity</HL>: The grounded conductor connects to the identified (silver) terminal on devices; correct polarity is mandatory.</p>
            <p>— <HL>Switch loops</HL>: Don’t use the grounded conductor for switching. Provide a neutral where required by 404.2(C).</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 2 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-02.jpg" alt="Grounded conductor identification examples" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 3 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-03.jpg" alt="Correct device polarity" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <DataTable>
          <h4 className="font-bold text-white mb-4">Grounded Conductor—Quick Rules</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Topic</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3 font-semibold">ID color</td><td className="p-3">White or gray; 3 continuous white stripes on other than green insulation acceptable.</td></tr>
              <tr><td className="p-3 font-semibold">Terminations</td><td className="p-3">To identified (silver) terminals.</td></tr>
              <tr><td className="p-3 font-semibold">Re-ID</td><td className="p-3">Not for &lt; 4 AWG (limited allowances apply for cables).</td></tr>
            </tbody>
          </table>
        </DataTable>
      </section>

      {/* === Article 210 — Branch Circuits === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Plug className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 210 — Branch Circuits</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>210.8</HL>: GFCI protection required in bathrooms, garages, outdoors, basements, kitchens (countertop circuits), laundry, utility, and within specific distances of sinks.</p>
            <p>— <HL>210.12</HL>: AFCI protection in dwelling habitable rooms and other specified areas; combination-type or AFCI breaker per code cycle.</p>
            <p>— <HL>210.52</HL>: Receptacle placement (spacing) rules in dwellings—12 ft wall spacing, 6 ft from any point along wall; small-appliance circuits for kitchens, dining, pantry.</p>
            <p>— <HL>210.23/210.24</HL>: Circuit ratings vs. cord-and-plug loads; 15A/20A circuits with appropriate device ratings.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 4 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-04.jpg" alt="AFCI/GFCI protected branch circuits" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 5 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-05.jpg" alt="Dwelling receptacle spacing example" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <WarningBox>Common miss: kitchens need two or more <HL>small-appliance branch circuits</HL> and GFCI/AFCI protection where required. Don’t mix 15A devices on a required 20A single-receptacle circuit.</WarningBox>
      </section>

      {/* === Article 215 — Feeders === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Cable className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 215 — Feeders</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Sizing</HL>: Use 215.2(A)(1) and 220 calcs; consider temperature rating of terminations and conductor insulation.</p>
            <p>— <HL>Protection</HL>: OCPD sized per 215.3 and conductor ampacity; coordinate with downstream equipment ratings.</p>
            <p>— <HL>Feeder taps</HL>: Follow 240.21(B) rules for tap length, protection, and conductor sizing.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 6 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-06.jpg" alt="Feeder OCPD and conductor sizing overview" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 7 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-07.jpg" alt="Feeder taps scenarios" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* === Article 220 — Calculations === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 220 — Branch-Circuit, Feeder & Service Calculations</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Dwelling calc</HL>: General lighting load by area VA/ft², small-appliance & laundry circuits, demand factors.</p>
            <p>— <HL>Non-dwelling</HL>: Show-window, sign, receptacle loads by occupancy; largest motor at 125% where applicable.</p>
            <p>— <HL>Optional methods</HL>: Demand factors can dramatically reduce service/feeder sizes when allowed.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 8 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-08.jpg" alt="Load calculation worksheet" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 9 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-09.jpg" alt="Demand factor table concept" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Quick Demand Factor Reminders</h4>
          <div className="grid md:grid-cols-2 gap-6 text-white/85 text-sm">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Dwelling</h5>
              <ul className="space-y-1">
                <li>• Apply general lighting demand factors per 220 tables.</li>
                <li>• Add fixed appliances with permitted demand factors.</li>
                <li>• Largest motor @ 125% where applicable.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Non-Dwelling</h5>
              <ul className="space-y-1">
                <li>• Show-window/sign loads per linear/VA rules.</li>
                <li>• Receptacles by occupancy rules.</li>
                <li>• Consider continuous loads at 125%.</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* === Article 225 — Outside Branch Circuits & Feeders === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <CloudLightning className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 225 — Outside Branch Circuits & Feeders</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Overhead clearances</HL> over roofs, driveways, and grade; attachment and drip loops.</p>
            <p>— <HL>Disconnects</HL>: Building/structure disconnecting means where required; grouping and labeling.</p>
            <p>— <HL>Wiring methods</HL>: Weather-resistant wiring, support/clearance per 225 and Chapter 3 methods.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 10 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-10.jpg" alt="Overhead clearances outside branch circuits" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 11 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-11.jpg" alt="Outside feeder/disconnect example" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* === Article 230 — Services === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 230 — Services</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Service disconnect</HL>: Location, grouping, and maximum number of switches; simultaneous disconnecting means.</p>
            <p>— <HL>Service-entrance conductors</HL>: Sizing, routing, protection from physical damage.</p>
            <p>— <HL>Service equipment</HL>: Marking, short-circuit rating, and working clearances (tie to 110.26).</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 12 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-12.jpg" alt="Service disconnecting means grouping" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 13 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-13.jpg" alt="Service-entrance conductors protection" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <WarningBox>Don’t confuse the <HL>service disconnect</HL> with feeder/branch disconnects. Service equipment must be suitable for the available fault current and properly marked.</WarningBox>
      </section>

      {/* === Article 240 — Overcurrent Protection === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 240 — Overcurrent Protection</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Conductor protection</HL>: Size OCPD to conductor ampacity (adjust/derate as required elsewhere in code).</p>
            <p>— <HL>Tap rules</HL>: See 240.21 for feeder/transformer taps; protection within stated distances and conditions.</p>
            <p>— <HL>OCPD types</HL>: Fuses vs. breakers, current-limiting devices, series ratings, and selective coordination where required.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 14 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-14.jpg" alt="OCPD types and applications" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 15 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-15.jpg" alt="Tap rules overview diagram" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* === Article 242 — Overvoltage Protection (Surge) === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 242 — Overvoltage Protection (Surge)</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>SPD locations</HL>: Services, feeders, or branch circuits per device listing and application Category (Type 1/2/3).</p>
            <p>— <HL>Grounding/bonding</HL>: Short, straight conductors to minimize let-through voltage; bond to the GES per 250.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 16 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-16.jpg" alt="Service-entrance SPD installation" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 17 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-17.jpg" alt="Bonding and lead length best practices for SPDs" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <RuleBox>Keep SPD leads <HL>as short and straight as possible</HL>. Long pigtails = higher let-through voltage during surges.</RuleBox>
      </section>

      {/* === Article 250 — Grounding & Bonding === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 250 — Grounding & Bonding</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>GES</HL>: Grounding electrode system (water pipe, building steel, Ufer, rods/plates); bond all electrodes present.</p>
            <p>— <HL>GEC sizing</HL>: Size grounding electrode conductor by service-entrance conductor size (table-based).</p>
            <p>— <HL>EGC sizing</HL>: Equipment grounding conductors sized by OCPD rating (see Table 250.122).</p>
            <p>— <HL>Bonding</HL>: Metallic piping systems, structural steel, and other conductive parts bonded to reduce touch voltage.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 18 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-18.jpg" alt="Grounding electrode system overview" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 19 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-19.jpg" alt="Bonding jumpers and sizing concept" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <DataTable>
          <h4 className="font-bold text-white mb-4">Grounding Conductors — Sizing Pointers</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Conductor</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Sized By</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3 font-semibold">GEC</td><td className="p-3">Service-entrance conductor size</td><td className="p-3">Use GEC table; copper vs. aluminum allowed per code.</td></tr>
              <tr><td className="p-3 font-semibold">EGC</td><td className="p-3">OCPD rating</td><td className="p-3">Table 250.122; increase for parallel paths/derating scenarios as required.</td></tr>
            </tbody>
          </table>
        </DataTable>
      </section>

      {/* === Article 280/285 — Surge Arresters & SPDs (over/under 1kV) === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Articles 280 & 285 — Surge Arresters & SPDs</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Over 1kV</HL> (280): Surge arresters for medium-voltage applications—utility/industrial interfaces.</p>
            <p>— <HL>1kV & under</HL> (285): SPDs used on services/feeders/branch circuits; ensure correct Type and SCCR.</p>
          </div>
          <div className="space-y-4">
            {/* IMAGE 20 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-20.jpg" alt="Medium-voltage surge arrester example" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            {/* IMAGE 21 */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-02/m02-21.jpg" alt="SPD category/type examples" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* === Article 210/240/250 Cross-Tie Tips === */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Exam Crossovers — 210, 240, 250</h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-white/90">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Article 210</h5>
              <ul className="space-y-1">
                <li>• GFCI/AFCI placement rules trip up many.</li>
                <li>• Small-appliance/laundry circuit counts.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Article 240</h5>
              <ul className="space-y-1">
                <li>• Tap rules and conductor protection.</li>
                <li>• Series ratings/selective coordination.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Article 250</h5>
              <ul className="space-y-1">
                <li>• GEC vs EGC sizing—different tables.</li>
                <li>• Bonding other systems to reduce touch voltage.</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* === Summary === */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">Chapter 2 Summary</h2>
            <Target className="w-10 h-10 text-yellow-400" />
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Chapter 2 knits together safe conductor identification, GFCI/AFCI rules, calculations, services, overcurrent/overvoltage protection, and the grounding/bonding backbone.
          </p>
        </div>

        {/* 6 Summary cards like your other modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6"><h3 className="text-lg font-bold mb-2">Grounded Conductors</h3><p className="text-white/80 text-sm">White/gray only; correct terminations and polarity.</p></div>
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6"><h3 className="text-lg font-bold mb-2">GFCI & AFCI</h3><p className="text-white/80 text-sm">Know required locations and device types.</p></div>
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6"><h3 className="text-lg font-bold mb-2">Calculations</h3><p className="text-white/80 text-sm">Apply demand factors; treat continuous loads @125%.</p></div>
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6"><h3 className="text-lg font-bold mb-2">Services</h3><p className="text-white/80 text-sm">Service disconnect grouping and ratings matter.</p></div>
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6"><h3 className="text-lg font-bold mb-2">Overcurrent</h3><p className="text-white/80 text-sm">Match OCPD to adjusted conductor ampacity.</p></div>
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6"><h3 className="text-lg font-bold mb-2">Grounding & Bonding</h3><p className="text-white/80 text-sm">GES, GEC/EGC sizing, and bonding for touch-voltage reduction.</p></div>
        </div>
      </section>

      {/* Quiz */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">Knowledge Check Quiz</h2>
            <Brain className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-lg text-white/90">Score 80%+ to confirm you’ve got Chapter 2 wired tight.</p>
        </div>
        <Quiz questions={quiz} />
      </section>

      {/* Footer */}
      <FooterNav prev={{ href: "/modules/module-01", label: "Chapter 1" }} next={{ href: "/modules/module-03", label: "Chapter 3" }} />
    </main>
  );
}
