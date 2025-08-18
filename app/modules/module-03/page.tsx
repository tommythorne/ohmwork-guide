"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Ruler, BookOpen, Flame, Target, Waypoints, GitBranch, AlertTriangle,
  Zap, Plug, Cable, Building
} from "lucide-react";

import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

/** ——— Small UI helpers to match your existing look ——— */
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

/** Quiz type */
type Q = {
  id: number;
  stem: string;
  choices: { key: "A" | "B" | "C" | "D"; text: string }[];
  answer: "A" | "B" | "C" | "D";
  why: string;
};

export default function Ch3Raceways() {
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
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/module-03/m03-01.jpg"
              alt="Raceway systems: IMC, RMC, PVC, LFNC, wireways"
              fill
              className="object-cover"
              priority
              width={1200}
              height={800}
            />
          </div>
          <div className="relative z-10">
            <p className="text-white/80 mb-2">Advanced raceway systems: IMC, RMC, PVC, LFNC, metal wireways, and surface raceways</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
              Chapter 3 — Raceway Systems & Wireways (Advanced)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              <HL>Push beyond basics</HL>: learn when and why to choose each raceway, plus support spacing, fittings,
              expansion rules, and pull-box sizing the exam loves.
            </p>
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

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

            {/* Article 342 — Intermediate Metal Conduit (IMC) & 344 — Rigid Metal Conduit (RMC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Cable className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Articles 342 & 344 — IMC / RMC: Heavy‑Duty Protection
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Uses</HL>: Suitable where high mechanical protection is needed, exposed outdoor runs, and service masts.</p>
            <p>— <HL>Bends</HL>: Max 360° total between pull points. Field bends must not damage raceway or wire insulation.</p>
            <p>— <HL>Support</HL>: Per mfr/NEC—typically every 10 ft, within 3 ft of boxes (check local amendments).</p>
            <CodeBox>Boxes: size for conductor fill & wire bending space (NEC 314 & Ch. 9 Tbl. 1).</CodeBox>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-02.jpg" alt="IMC vs RMC install" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-03.jpg" alt="RMC threaded fittings" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">IMC vs RMC Snapshot</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Feature</th>
                <th className="text-left p-3 text-yellow-400 font-bold">IMC</th>
                <th className="text-left p-3 text-yellow-400 font-bold">RMC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3">Wall / Weight</td><td className="p-3">Thinner / Lighter</td><td className="p-3">Thickest / Heaviest</td></tr>
              <tr><td className="p-3">Corrosion Protection</td><td className="p-3">Coated, good</td><td className="p-3">Best with galvanizing</td></tr>
              <tr><td className="p-3">Common Uses</td><td className="p-3">Long exterior runs</td><td className="p-3">Masts, harsh sites</td></tr>
            </tbody>
          </table>
        </DataTable>

        <RuleBox><strong>Tip:</strong> Use IMC when you need RMC toughness without the weight—threaded fittings still required.</RuleBox>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl my-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        </div>
      </div>

      {/* Article 352 — Rigid PVC Conduit & Expansion Fittings */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 352 — PVC Conduit (Rigid)</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Wet locations</HL> OK; sunlight‑resistant types for exterior.</p>
            <p>— <HL>Support</HL>: Typically every 3 ft (½–1"), 5 ft (larger), and within 3 ft of boxes—check table for exact sizes.</p>
            <p>— <HL>Thermal movement</HL>: Long outdoor runs require <em>expansion fittings</em> with proper setting based on ambient.</p>
            <CodeBox>
              Expansion fitting setting = (ΔT × expansion coefficient × run length). Use mfr charts to set the piston position.
            </CodeBox>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-04.jpg" alt="PVC expansion fitting" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-05.jpg" alt="PVC support spacing example" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <WarningBox>
          <strong>Exam trap:</strong> PVC outdoors without expansion = cracked boxes & pulled conductors. Expect math around ΔT and
          whether one or two fittings are needed across building expansion joints.
        </WarningBox>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl my-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        </div>
      </div>

      {/* Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Article 356 — LFNC</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Use</HL>: Wet locations, HVAC equipment whips, vibration areas.</p>
            <p>— <HL>Support</HL>: Secure within 12 in. of boxes and at intervals ≤ 3 ft (type‑dependent).</p>
            <p>— <HL>Fittings</HL>: Listed liquidtight fittings only; bond per 250 when required.</p>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-06.jpg" alt="LFNC to condensing unit" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">LFNC Quick Picks</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Scenario</th>
                <th className="text-left p-3 text-yellow-400 font-bold">OK?</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3">Outdoor unit whip</td><td className="p-3 text-green-400">Yes</td><td className="p-3">Use liquidtight fittings</td></tr>
              <tr><td className="p-3">Long feeder run</td><td className="p-3 text-red-400">No</td><td className="p-3">Use PVC/IMC/RMC</td></tr>
              <tr><td className="p-3">Oil/coolant splash</td><td className="p-3 text-green-400">Yes</td><td className="p-3">Type LFNC‑B preferred</td></tr>
            </tbody>
          </table>
        </DataTable>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl my-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        </div>
      </div>

      {/* Articles 376/378 — Metal & Nonmetallic Wireways + 386 — Surface Metal Raceways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Plug className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Articles 376/378/386 — Wireways & Surface Raceways
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>— <HL>Purpose</HL>: Feeders/branch‑circuits along walls or equipment rows; easy add‑a‑circuit access.</p>
            <p>— <HL>Fill</HL>: Wireway fill limited (often 20%)—don’t treat like cable tray.</p>
            <p>— <HL>Support</HL>: Per listing; keep covers accessible; bond metallic systems.</p>
            <CodeBox>Surface raceways (386/388) are for exposed indoor runs; follow device‑box fill rules for device inserts.</CodeBox>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-07.jpg" alt="Surface raceway with device modules" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image src="/images/module-03/m03-08.jpg" alt="Metal wireway run above equipment" width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <HorrorStory>
          A shop used a wireway like a junk drawer—overfilled, no covers. A fault welded conductors to the cover.
          The shutdown cost a weekend of production. <HL>Respect fill limits</HL> and keep covers secure.
        </HorrorStory>
      </section>

            {/* Summary */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">Chapter 3 Summary</h2>
            <Target className="w-10 h-10 text-yellow-400" />
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Choose the right raceway for the environment, support it correctly, size pull boxes properly,
            and allow for <HL>thermal movement</HL> on long PVC runs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30">
                <Waypoints className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Support & Bends</h3>
              <p className="text-white/80 text-sm">Max 360° between pull points; honor spacing tables.</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expansion</h3>
              <p className="text-white/80 text-sm">PVC outdoors needs expansion fittings set for ΔT and length.</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30">
                <GitBranch className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Wireways</h3>
              <p className="text-white/80 text-sm">Low fill, accessible covers, listed fittings. No “junk drawer.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {/** 15 questions targeted at raceways/wireways/expansion/pull-box/bends */}
      {(() => {
        const quiz: Q[] = [
          { id: 1, stem: "Max total degrees of bend allowed between pull points in any raceway run?", choices: [
            {key:"A",text:"180°"}, {key:"B",text:"270°"}, {key:"C",text:"360°"}, {key:"D",text:"No limit"}
          ], answer:"C", why:"Most raceway articles cap at 360° total to aid pulling and avoid damage." },

          { id: 2, stem: "Which is generally lighter with similar robustness for long exterior runs?", choices: [
            {key:"A",text:"RMC"}, {key:"B",text:"IMC"}, {key:"C",text:"PVC"}, {key:"D",text:"LFNC"}
          ], answer:"B", why:"IMC has thinner wall and lower weight than RMC with good protection." },

          { id: 3, stem: "Outdoor PVC on a long wall requires:", choices: [
            {key:"A",text:"Bonding bushings"}, {key:"B",text:"Expansion fittings"}, {key:"C",text:"Double‑locknuts only"}, {key:"D",text:"Nothing extra"}
          ], answer:"B", why:"Thermal expansion/contraction of PVC demands expansion fittings." },

          { id: 4, stem: "Common support spacing for LFNC is:", choices: [
            {key:"A",text:"Every 10 ft"}, {key:"B",text:"Every 8 ft"}, {key:"C",text:"Every 3 ft and within 12 in. of boxes"}, {key:"D",text:"No requirement"}
          ], answer:"C", why:"LFNC must be secured within 12 in. of boxes and at short intervals (~3 ft type‑dependent)." },

          { id: 5, stem: "Wireway fill is typically limited to:", choices: [
            {key:"A",text:"100%"}, {key:"B",text:"60%"}, {key:"C",text:"40%"}, {key:"D",text:"20%"}
          ], answer:"D", why:"Wireways have low fill limits to aid heat dissipation and accessibility." },

          { id: 6, stem: "RMC/IMC thread protection and continuity rely on:", choices: [
            {key:"A",text:"Compression couplings"}, {key:"B",text:"Threaded couplings and locknuts"}, {key:"C",text:"Duct tape"}, {key:"D",text:"Tie wire"}
          ], answer:"B", why:"Use listed threaded fittings; maintain equipment grounding path." },

          { id: 7, stem: "You have 4 quarter‑bends in a run (4×90°). Code result?", choices: [
            {key:"A",text:"OK"}, {key:"B",text:"Exceeds limit"}, {key:"C",text:"Only if PVC"}, {key:"D",text:"Only if LFNC"}
          ], answer:"B", why:"That’s 360° + another 90°, exceeding the 360° cap." },

          { id: 8, stem: "Surface metal raceway device inserts must follow:", choices: [
            {key:"A",text:"No rules"}, {key:"B",text:"Box‑fill rules for device yokes"}, {key:"C",text:"Cable‑tray rules"}, {key:"D",text:"Transformer rules"}
          ], answer:"B", why:"Treat device compartments like boxes for fill/yoke allowances." },

          { id: 9, stem: "PVC across a building expansion joint usually needs:", choices: [
            {key:"A",text:"Two locknuts"}, {key:"B",text:"Expansion fitting spanning the joint"}, {key:"C",text:"Bonding jumper"}, {key:"D",text:"Sealtite only"}
          ], answer:"B", why:"Allow movement at structural joints to avoid damage." },

          { id:10, stem: "Best choice for mast through the roof with heavy mechanical stress:", choices: [
            {key:"A",text:"LFNC"}, {key:"B",text:"PVC"}, {key:"C",text:"RMC"}, {key:"D",text:"Wireway"}
          ], answer:"C", why:"RMC offers maximum mechanical strength and is commonly used for service masts." },

          { id:11, stem: "Purpose of limiting raceway bends between pull points:", choices: [
            {key:"A",text:"Looks nicer"}, {key:"B",text:"Keeps voltage high"}, {key:"C",text:"Prevents conductor damage / reduces pulling tension"}, {key:"D",text:"Saves fittings"}
          ], answer:"C", why:"Too many bends increases friction and can damage insulation." },

          { id:12, stem: "Outdoor condensing unit whip, liquid, and vibration concerns—pick:", choices: [
            {key:"A",text:"IMC"}, {key:"B",text:"LFMC"}, {key:"C",text:"LFNC"}, {key:"D",text:"RMC"}
          ], answer:"B", why:"LFMC is common for equipment connections in wet/vibration areas." },

          { id:13, stem: "Wireway covers must be:", choices: [
            {key:"A",text:"Permanently welded"}, {key:"B",text:"Accessible and secured"}, {key:"C",text:"Left off for cooling"}, {key:"D",text:"Painted red"}
          ], answer:"B", why:"Accessibility is required; covers must be in place during operation." },

          { id:14, stem: "When is bonding required for metallic raceways?", choices: [
            {key:"A",text:"Never"}, {key:"B",text:"Only indoors"}, {key:"C",text:"As part of equipment grounding path per Art. 250"}, {key:"D",text:"Only for services"}
          ], answer:"C", why:"Raceway must provide a continuous equipment grounding path per 250." },

          { id:15, stem: "PVC run sees −10°F winter to 110°F summer. What should you check first?", choices: [
            {key:"A",text:"Number of conductors"}, {key:"B",text:"ΔT and expansion fitting setting"}, {key:"C",text:"Paint color"}, {key:"D",text:"Transformer kVA"}
          ], answer:"B", why:"Temperature swing drives expansion piston setting." },
        ];

        return (
          <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">Knowledge Check Quiz</h2>
                <BookOpen className="w-8 h-8 text-yellow-400" />
              </div>
              <p className="text-lg text-white/90">Score 80%+ to prove you own raceways & wireways.</p>
            </div>
            <Quiz questions={quiz} />
          </section>
        );
      })()}

      {/* Footer Navigation */}
      <FooterNav prev={{ href: "/modules/module-02", label: "Chapter 2" }} next={{ href: "/modules/module-04", label: "Chapter 4" }} />
    </main>
  );
}