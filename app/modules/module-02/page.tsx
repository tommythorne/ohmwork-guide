"use client";

import { AlertTriangle, Zap } from "lucide-react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Quiz from "../../components/Quiz";

// Enhanced highlight helpers with electrician grit
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
      <span className="text-yellow-400 text-xl">��</span>
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-orange-400 text-xl">��</span>
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-blue-400 text-xl">��</span>
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

// Quiz type definition
type Q = {
  id: number;
  stem: string;
  choices: { key: "A" | "B" | "C" | "D"; text: string }[];
  answer: "A" | "B" | "C" | "D";
  why: string;
};

// Quiz data - 15 questions about wiring methods and branch circuits
const quiz: Q[] = [
  {
    id: 1,
    stem: "Which wiring method is NOT suitable for wet locations?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "PVC" },
      { key: "D", text: "IMC" },
    ],
    answer: "A",
    why: "EMT is not suitable for wet locations. Use PVC, RMC, or IMC for wet environments.",
  },
  {
    id: 2,
    stem: "What is the minimum burial depth for PVC conduit under a driveway?",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "18 inches" },
      { key: "C", text: "24 inches" },
      { key: "D", text: "36 inches" },
    ],
    answer: "C",
    why: "NEC 300.5(A) requires 24 inches minimum burial depth for PVC under driveways.",
  },
  {
    id: 3,
    stem: "How many current-carrying conductors can be installed in a single EMT raceway before derating is required?",
    choices: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" },
    ],
    answer: "C",
    why: "More than 3 current-carrying conductors require derating per NEC 310.15(B)(3)(a).",
  },
  {
    id: 4,
    stem: "What is the maximum fill percentage for conductors in a raceway?",
    choices: [
      { key: "A", text: "40%" },
      { key: "B", text: "53%" },
      { key: "C", text: "60%" },
      { key: "D", text: "80%" },
    ],
    answer: "B",
    why: "NEC Chapter 9, Table 1 shows 53% maximum fill for more than 2 conductors.",
  },
  {
    id: 5,
    stem: "Which statement about cable tray installations is correct?",
    choices: [
      { key: "A", text: "Cable tray can support any type of cable" },
      { key: "B", text: "Cable tray must be bonded to ground" },
      { key: "C", text: "Cable tray requires no supports" },
      { key: "D", text: "Cable tray is only for industrial use" },
    ],
    answer: "B",
    why: "NEC 392.60 requires cable tray to be bonded to ground for safety.",
  },
  {
    id: 6,
    stem: "What is the minimum working space required in front of a 480V panel?",
    choices: [
      { key: "A", text: "24 inches" },
      { key: "B", text: "30 inches" },
      { key: "C", text: "36 inches" },
      { key: "D", text: "42 inches" },
    ],
    answer: "C",
    choice: "NEC 110.26(A)(1) requires 36 inches minimum working space for equipment over 600V.",
  },
  {
    id: 7,
    stem: "Which wiring method is best for hazardous locations?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "PVC" },
      { key: "D", text: "FMC" },
    ],
    answer: "B",
    why: "RMC (Rigid Metal Conduit) is the most robust and suitable for hazardous locations.",
  },
  {
    id: 8,
    stem: "What is the maximum number of bends allowed between pull points in a raceway?",
    choices: [
      { key: "A", text: "2 bends (180° total)" },
      { key: "B", text: "3 bends (270° total)" },
      { key: "C", text: "4 bends (360° total)" },
      { key: "D", text: "No limit specified" },
    ],
    answer: "C",
    why: "NEC 344.26 and 358.26 limit bends to 360° total between pull points.",
  },
  {
    id: 9,
    stem: "Which conductor insulation type has the highest temperature rating?",
    choices: [
      { key: "A", text: "THHN" },
      { key: "B", text: "THWN" },
      { key: "C", text: "XHHW" },
      { key: "D", text: "USE" },
    ],
    answer: "C",
    why: "XHHW has a 90°C rating, while THHN is 90°C, THWN is 75°C, and USE varies.",
  },
  {
    id: 10,
    stem: "What is the purpose of a bonding jumper in a raceway system?",
    choices: [
      { key: "A", text: "To carry neutral current" },
      { key: "B", text: "To provide equipment grounding" },
      { key: "C", text: "To reduce voltage drop" },
      { key: "D", text: "To support the raceway" },
    ],
    answer: "B",
    why: "Bonding jumpers provide equipment grounding continuity in raceway systems.",
  },
  {
    id: 11,
    stem: "Which wiring method requires the most frequent supports?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "FMC" },
      { key: "D", text: "PVC" },
    ],
    answer: "C",
    why: "FMC (Flexible Metal Conduit) requires supports every 4.5 feet, more frequent than other methods.",
  },
  {
    id: 12,
    stem: "What is the minimum size equipment grounding conductor for a 200A circuit?",
    choices: [
      { key: "A", text: "6 AWG" },
      { key: "B", text: "4 AWG" },
      { key: "C", text: "3 AWG" },
      { key: "D", text: "2 AWG" },
    ],
    answer: "A",
    why: "NEC Table 250.122 requires 6 AWG EGC for circuits up to 200A.",
  },
  {
    id: 13,
    stem: "Which statement about parallel conductors is correct?",
    choices: [
      { key: "A", text: "Parallel conductors must be the same length" },
      { key: "B", text: "Parallel conductors must be the same size" },
      { key: "C", text: "Parallel conductors can be different types" },
      { key: "D", text: "Parallel conductors require no special considerations" },
    ],
    answer: "B",
    why: "NEC 310.10(H) requires parallel conductors to be the same size, length, and type.",
  },
  {
    id: 14,
    stem: "What is the purpose of a bushing on a raceway?",
    choices: [
      { key: "A", text: "To support the raceway" },
      { key: "B", text: "To protect conductors from abrasion" },
      { key: "C", text: "To reduce voltage drop" },
      { key: "D", text: "To improve aesthetics" },
    ],
    answer: "B",
    why: "Bushings protect conductors from abrasion where they enter or exit raceways.",
  },
  {
    id: 15,
    stem: "Which wiring method is most suitable for temporary installations?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "FMC" },
      { key: "D", text: "PVC" },
    ],
    answer: "C",
    why: "FMC (Flexible Metal Conduit) is most suitable for temporary installations due to flexibility.",
  },
];

export default function Ch2Wiring() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  
  const toggle = (id: number) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      {/* Hero Section with Stunning Visual */}
      <div className={`mx-auto max-w-5xl mt-8 md:mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 md:p-12">
          {/* Background Image - IMAGE 1: Wiring Methods */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/module-02/m02-01.jpg"
              alt="Various electrical wiring methods and raceway installations"
              fill
              className="object-cover"
              priority
              width={1200} height={800}/>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
              Chapter 2 — Wiring Methods & Branch Circuits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              <HL>Master the Art of Installation</HL>: raceways, conductors, and the methods that keep electricity flowing safely. 
              This is where theory meets the real world—learn it right or pay the price.
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

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 300 — Wiring Methods */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 300 — Wiring Methods
          </h2>
        </div>
        
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          The foundation of every electrical installation. Choose the right method for the environment, or watch your work fail spectacularly.
        </p>

        {/* Core Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>300.3</HL>: Conductors of the same circuit must be in the same raceway, cable, or enclosure. 
              Don't split them up—it's a safety nightmare.
            </p>
            <p>
              — <HL>300.4</HL>: Protection against physical damage required where conductors are subject to damage. 
              Think: "Will a forklift hit this?"
            </p>
            <p>
              — <HL>300.5</HL>: Underground installations must be protected against damage and properly buried. 
              Depth matters—shallow burial equals future problems.
            </p>
            <p>
              — <HL>300.11</HL>: Raceways and cables must be securely fastened and supported. 
              No floating raceways—gravity always wins.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 2: Raceway Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-02.jpg"
                alt="Professional raceway installation with proper support and fastening"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Proper Raceway Support Required</p>
              </div>
            </div>
            
            {/* IMAGE 3: Underground Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-03.jpg"
                alt="Underground electrical installation with proper burial depth and protection"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Underground: Depth & Protection Matter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wiring Methods Comparison Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Common Raceway Types & Applications</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Type</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Use</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Limitations</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Support Spacing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">EMT</td>
                  <td className="p-3">Indoor, dry locations</td>
                  <td className="p-3 text-red-400">Not for wet locations</td>
                  <td className="p-3">10 ft max</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">RMC</td>
                  <td className="p-3">Hazardous, wet locations</td>
                  <td className="p-3 text-green-400">Most robust</td>
                  <td className="p-3">20 ft max</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">PVC</td>
                  <td className="p-3">Underground, wet</td>
                  <td className="p-3 text-red-400">UV sensitive</td>
                  <td className="p-3">3 ft max</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">FMC</td>
                  <td className="p-3">Flexible connections</td>
                  <td className="p-3 text-red-400">Limited length</td>
                  <td className="p-3">4.5 ft max</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        {/* Interactive Visual Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/30 transition-colors">
                <span className="text-2xl">🔌</span>
              </div>
              <p className="text-white/85 text-sm">
                <HL>Choose wisely:</HL> Wrong method = future problems.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/30 transition-colors">
                <span className="text-2xl">📏</span>
              </div>
              <p className="text-white/85 text-sm">
                <HL>Support properly:</HL> Gravity never takes a day off.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/30 transition-colors">
                <span className="text-3xl">✅</span>
              </div>
              <p className="text-white/85 text-sm">
                <HL>Protect conductors:</HL> Damage prevention is cheaper than repair.
              </p>
            </div>
          </div>
        </div>

        {/* Horror Story */}
        <HorrorStory>
          <strong>True Story:</strong> A crew installed EMT in a parking garage without considering vehicle impact. 
          Within weeks, several raceways were crushed by careless drivers. The rework cost more than the original installation. 
          <HL>300.4</HL> exists for a reason—always think about the environment where you're installing.
        </HorrorStory>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 310 — Conductors for General Wiring */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 310 — Conductors for General Wiring
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>310.15</HL>: Ampacity tables determine conductor sizing based on insulation type and ambient temperature. 
              Higher temps = lower ampacity. It's physics, not opinion.
            </p>
            <p>
              — <HL>310.16</HL>: Ampacity adjustment factors for more than three current-carrying conductors in a raceway. 
              Crowded raceways get hot—derate accordingly.
            </p>
            <p>
              — <HL>310.17</HL>: Ampacity for conductors in free air (not in raceways). 
              Free air conductors can handle more current—use the right table.
            </p>
            <p>
              — <HL>310.19</HL>: Ampacity for conductors in parallel installations. 
              Parallel conductors must be identical—size, length, and type.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 4: Conductor Ampacity */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-04.jpg"
                alt="Conductor ampacity tables and temperature rating considerations"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Ampacity Tables: Your Sizing Bible</p>
              </div>
            </div>
            
            {/* IMAGE 5: Parallel Conductors */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-05.jpg"
                alt="Parallel conductor installation with proper sizing and termination"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Parallel Conductors: Must Be Identical</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ampacity Factors Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Ampacity Adjustment Factors</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Temperature Factors</h5>
              <p className="text-white/85 text-sm">
                Higher ambient temperatures reduce conductor ampacity. Use correction factors from Table 310.15(B)(1).
                Every 10°F above 86°F reduces ampacity by about 5%.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Conductor Count Factors</h5>
              <p className="text-white/85 text-sm">
                More than three current-carrying conductors in a raceway require derating. 
                See Table 310.15(B)(3)(a) for specific percentages.
              </p>
            </div>
          </div>
        </ChartBox>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> The exam loves ampacity questions. Remember: temperature affects ampacity, 
          and more than three conductors in a raceway requires derating. Always check the tables—don't guess!
        </WarningBox>
      </section>

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 320 — Armored Cable (Type AC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 320 — Armored Cable (Type AC)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>320.10</HL>: Type AC cable can be used in exposed and concealed work in dry locations. 
              The armor provides mechanical protection.
            </p>
            <p>
              — <HL>320.12</HL>: Type AC cable cannot be used in wet locations, hazardous locations, or where exposed to corrosive fumes.
            </p>
            <p>
              — <HL>320.15</HL>: Type AC cable must be supported and secured within 12 inches of every outlet box and at intervals not exceeding 4.5 feet.
            </p>
            <p>
              — <HL>320.30</HL>: Type AC cable must be installed as a complete system without breaks or other than approved fittings.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 6: Armored Cable Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-06.jpg"
                alt="Type AC armored cable installation with proper support and termination"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Type AC: Armor Provides Protection</p>
              </div>
            </div>
            
            {/* IMAGE 7: AC Cable Support */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-07.jpg"
                alt="Proper support and securing of armored cable at intervals"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Support Every 4.5 Feet Maximum</p>
              </div>
            </div>
          </div>
        </div>

        {/* AC Cable Requirements Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Type AC Cable Installation Requirements</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Requirement</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Code Section</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Key Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Support Spacing</td>
                  <td className="p-3">320.15</td>
                  <td className="p-3 text-green-400">4.5 feet maximum</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Box Support</td>
                  <td className="p-3">320.15</td>
                  <td className="p-3 text-green-400">Within 12 inches</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Location Restrictions</td>
                  <td className="p-3">320.12</td>
                  <td className="p-3 text-red-400">Dry locations only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 330 — Metal-Clad Cable (Type MC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 330 — Metal-Clad Cable (Type MC)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>330.10</HL>: Type MC cable can be used in exposed and concealed work in dry locations, and in wet locations where the cable is specifically listed for the purpose.
            </p>
            <p>
              — <HL>330.12</HL>: Type MC cable cannot be used in hazardous locations unless specifically listed for the purpose.
            </p>
            <p>
              — <HL>330.15</HL>: Type MC cable must be supported and secured within 12 inches of every outlet box and at intervals not exceeding 6 feet.
            </p>
            <p>
              — <HL>330.30</HL>: Type MC cable must be installed as a complete system without breaks or other than approved fittings.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 8: MC Cable Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-08.jpg"
                alt="Type MC metal-clad cable installation in commercial application"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Type MC: Versatile & Durable</p>
              </div>
            </div>
            
            {/* IMAGE 9: MC Cable Support */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-09.jpg"
                alt="Proper support and securing of MC cable with approved fittings"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Support Every 6 Feet Maximum</p>
              </div>
            </div>
          </div>
        </div>

        {/* MC vs AC Comparison Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Type AC vs Type MC Cable Comparison</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Type AC (Armored)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Support: 4.5 feet max</li>
                <li>• Locations: Dry only</li>
                <li>• Cost: Lower</li>
                <li>• Protection: Good</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Type MC (Metal-Clad)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Support: 6 feet max</li>
                <li>• Locations: Dry & wet</li>
                <li>• Cost: Higher</li>
                <li>• Protection: Better</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        {/* Rule Box */}
        <RuleBox>
          <strong>RULE OF THUMB:</strong> Type MC is more versatile and durable than Type AC, but costs more. 
          Use MC for wet locations and where you need longer support intervals. AC is fine for basic dry location work.
        </RuleBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 340 — Nonmetallic-Sheathed Cable (Type NM) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 340 — Nonmetallic-Sheathed Cable (Type NM)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>340.10</HL>: Type NM cable can be used in exposed and concealed work in normally dry locations. 
              This is your standard residential wiring cable.
            </p>
            <p>
              — <HL>340.12</HL>: Type NM cable cannot be used in wet locations, exposed to corrosive fumes, or in hazardous locations.
            </p>
            <p>
              — <HL>340.15</HL>: Type NM cable must be supported and secured within 12 inches of every outlet box and at intervals not exceeding 4.5 feet.
            </p>
            <p>
              — <HL>340.30</HL>: Type NM cable must be protected from physical damage where necessary.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 10: NM Cable Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-10.jpg"
                alt="Type NM cable installation in residential application with proper support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Type NM: Standard Residential Wiring</p>
              </div>
            </div>
            
            {/* IMAGE 11: NM Cable Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-11.jpg"
                alt="Protection of NM cable where it passes through framing members"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Protect Where Physical Damage Possible</p>
              </div>
            </div>
          </div>
        </div>

        {/* NM Cable Restrictions Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Type NM Cable Restrictions & Requirements</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Restriction</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Reason</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Alternative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Wet Locations</td>
                  <td className="p-3">Insulation damage</td>
                  <td className="p-3 text-green-400">Type UF or conduit</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Exposed Work</td>
                  <td className="p-3">Physical damage</td>
                  <td className="p-3 text-green-400">Conduit or armored cable</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Hazardous Locations</td>
                  <td className="p-3">Safety requirements</td>
                  <td className="p-3 text-green-400">Hazardous location cable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        {/* Horror Story */}
        <HorrorStory>
          <strong>True Story:</strong> A homeowner ran Type NM cable through their garage ceiling without protection. 
          When they stored boxes in the attic, the cable got crushed and shorted out. The resulting fire caused $15,000 in damage. 
          <HL>340.30</HL> exists for a reason—protect your cables from physical damage!
        </HorrorStory>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 350 — Liquidtight Flexible Metal Conduit (Type LFMC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 350 — Liquidtight Flexible Metal Conduit (Type LFMC)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>350.10</HL>: Type LFMC can be used in exposed and concealed work in wet locations and where exposed to oil and coolants.
            </p>
            <p>
              — <HL>350.12</HL>: Type LFMC cannot be used in hazardous locations unless specifically listed for the purpose.
            </p>
            <p>
              — <HL>350.15</HL>: Type LFMC must be supported and secured within 12 inches of every outlet box and at intervals not exceeding 4.5 feet.
            </p>
            <p>
              — <HL>350.30</HL>: Type LFMC must be installed as a complete system without breaks or other than approved fittings.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 12: LFMC Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-12.jpg"
                alt="Type LFMC installation in wet location with proper fittings"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Type LFMC: Wet Location Solution</p>
              </div>
            </div>
            
            {/* IMAGE 13: LFMC Fittings */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-13.jpg"
                alt="Proper LFMC fittings and termination methods"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Use Approved Fittings Only</p>
              </div>
            </div>
          </div>
        </div>

        {/* LFMC Applications Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Type LFMC Applications & Benefits</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Ideal Uses</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Wet locations</li>
                <li>• Oil/coolant exposure</li>
                <li>• Vibration areas</li>
                <li>• Equipment connections</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Key Benefits</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Liquidtight seal</li>
                <li>• Flexible installation</li>
                <li>• Corrosion resistant</li>
                <li>• Easy termination</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> The exam loves to ask about support spacing for different wiring methods. 
          Remember: Type AC = 4.5 ft, Type MC = 6 ft, Type NM = 4.5 ft, Type LFMC = 4.5 ft. 
          Don't mix these up!
        </WarningBox>
      </section>

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 360 — Flexible Metallic Tubing (Type FMT) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 360 — Flexible Metallic Tubing (Type FMT)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>360.10</HL>: Type FMT can be used in exposed and concealed work in dry locations and where exposed to oil and coolants.
            </p>
            <p>
              — <HL>360.12</HL>: Type FMT cannot be used in wet locations, hazardous locations, or where exposed to corrosive fumes.
            </p>
            <p>
              — <HL>360.15</HL>: Type FMT must be supported and secured within 12 inches of every outlet box and at intervals not exceeding 4.5 feet.
            </p>
            <p>
              — <HL>360.30</HL>: Type FMT must be installed as a complete system without breaks or other than approved fittings.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 14: FMT Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-14.jpg"
                alt="Type FMT installation in dry location with proper support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Type FMT: Flexible & Lightweight</p>
              </div>
            </div>
            
            {/* IMAGE 15: FMT Fittings */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-15.jpg"
                alt="Proper FMT fittings and termination methods"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Use Approved Fittings Only</p>
              </div>
            </div>
          </div>
        </div>

        {/* FMT vs FMC Comparison */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Type FMT vs Type FMC Comparison</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Type FMT (Flexible Metallic Tubing)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Thinner wall construction</li>
                <li>• More flexible than FMC</li>
                <li>• Dry locations only</li>
                <li>• Oil/coolant resistant</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Type FMC (Flexible Metal Conduit)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Thicker wall construction</li>
                <li>• Less flexible than FMT</li>
                <li>• Dry locations only</li>
                <li>• More robust protection</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 370 — Cablebus */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 370 — Cablebus
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>370.10</HL>: Cablebus can be used in exposed and concealed work in dry locations and where exposed to oil and coolants.
            </p>
            <p>
              — <HL>370.12</HL>: Cablebus cannot be used in wet locations, hazardous locations, or where exposed to corrosive fumes.
            </p>
            <p>
              — <HL>370.15</HL>: Cablebus must be supported and secured at intervals not exceeding 20 feet.
            </p>
            <p>
              — <HL>370.30</HL>: Cablebus must be installed as a complete system without breaks or other than approved fittings.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 16: Cablebus Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-16.jpg"
                alt="Cablebus installation in commercial application with proper support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Cablebus: High-Capacity Solution</p>
              </div>
            </div>
            
            {/* IMAGE 17: Cablebus Support */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-17.jpg"
                alt="Proper support and securing of cablebus system"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Support Every 20 Feet Maximum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cablebus Applications Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Cablebus Applications & Benefits</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Application</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Benefit</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Consideration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">High-Capacity Circuits</td>
                  <td className="p-3">Multiple conductors</td>
                  <td className="p-3 text-green-400">Efficient installation</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Commercial Buildings</td>
                  <td className="p-3">Cost effective</td>
                  <td className="p-3 text-green-400">Large scale projects</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Industrial Applications</td>
                  <td className="p-3">Durable construction</td>
                  <td className="p-3 text-green-400">Heavy-duty use</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 380 — Multioutlet Assembly */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 380 — Multioutlet Assembly
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>380.10</HL>: Multioutlet assemblies can be used in exposed and concealed work in dry locations.
            </p>
            <p>
              — <HL>380.12</HL>: Multioutlet assemblies cannot be used in wet locations, hazardous locations, or where exposed to corrosive fumes.
            </p>
            <p>
              — <HL>380.15</HL>: Multioutlet assemblies must be supported and secured at intervals not exceeding 5 feet.
            </p>
            <p>
              — <HL>380.30</HL>: Multioutlet assemblies must be installed as a complete system without breaks or other than approved fittings.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 18: Multioutlet Assembly */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-18.jpg"
                alt="Multioutlet assembly installation in commercial space"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Multioutlet: Convenient Power Distribution</p>
              </div>
            </div>
            
            {/* IMAGE 19: Multioutlet Support */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-19.jpg"
                alt="Proper support and securing of multioutlet assembly"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Support Every 5 Feet Maximum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Multioutlet Uses Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Multioutlet Assembly Applications</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Common Uses</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Office spaces</li>
                <li>• Workstations</li>
                <li>• Conference rooms</li>
                <li>• Retail displays</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Installation Tips</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Support every 5 feet</li>
                <li>• Use approved fittings</li>
                <li>• Consider load calculations</li>
                <li>• Plan outlet spacing</li>
              </ul>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 390 — Underfloor Raceways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 390 — Underfloor Raceways
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>390.10</HL>: Underfloor raceways can be used in exposed and concealed work in dry locations.
            </p>
            <p>
              — <HL>390.12</HL>: Underfloor raceways cannot be used in wet locations, hazardous locations, or where exposed to corrosive fumes.
            </p>
            <p>
              — <HL>390.15</HL>: Underfloor raceways must be supported and secured at intervals not exceeding 5 feet.
            </p>
            <p>
              — <HL>390.30</HL>: Underfloor raceways must be installed as a complete system without breaks or other than approved fittings.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 20: Underfloor Raceway */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-20.jpg"
                alt="Underfloor raceway installation in commercial building"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Underfloor: Hidden Power Distribution</p>
              </div>
            </div>
            
            {/* IMAGE 21: Raceway Access */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-21.jpg"
                alt="Access points and junction boxes for underfloor raceway system"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Plan Access Points Carefully</p>
              </div>
            </div>
          </div>
        </div>

        {/* Underfloor Raceway Benefits */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Underfloor Raceway Benefits & Considerations</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Benefits</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Hidden wiring</li>
                <li>• Flexible outlet placement</li>
                <li>• Clean appearance</li>
                <li>• Easy maintenance access</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Planning Required</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Floor construction type</li>
                <li>• Load calculations</li>
                <li>• Access point locations</li>
                <li>• Future expansion needs</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        {/* Horror Story */}
        <HorrorStory>
          <strong>True Story:</strong> A contractor installed underfloor raceways without planning access points. 
          When they needed to add circuits later, they had to cut holes in the floor to reach the raceways. 
          The rework cost more than the original installation. <HL>390.15</HL> exists for a reason—plan your access points!
        </HorrorStory>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 400 — Flexible Cords and Cables */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 400 — Flexible Cords and Cables
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>400.7</HL>: Flexible cords and cables can be used for specific purposes like portable equipment, appliances, and luminaires.
            </p>
            <p>
              — <HL>400.8</HL>: Flexible cords and cables cannot be used as a substitute for permanent wiring of structures.
            </p>
            <p>
              — <HL>400.10</HL>: Flexible cords and cables must be protected from physical damage and excessive tension.
            </p>
            <p>
              — <HL>400.14</HL>: Flexible cords and cables must be used with approved fittings and strain relief.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 22: Flexible Cord Usage */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-22.jpg"
                alt="Proper flexible cord usage with strain relief and approved fittings"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Use Strain Relief & Approved Fittings</p>
              </div>
            </div>
            
            {/* IMAGE 23: Cord Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-23.jpg"
                alt="Protection of flexible cords from physical damage and excessive tension"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Protect From Damage & Tension</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flexible Cord Types Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Common Flexible Cord Types & Uses</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Type</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Use</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">SJ</td>
                  <td className="p-3">Junior hard service</td>
                  <td className="p-3 text-red-400">300V max, indoor use</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">S</td>
                  <td className="p-3">Hard service</td>
                  <td className="p-3 text-red-400">600V max, general use</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">SO</td>
                  <td className="p-3">Oil-resistant</td>
                  <td className="p-3 text-green-400">Oil/coolant exposure</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">ST</td>
                  <td className="p-3">Extra hard service</td>
                  <td className="p-3 text-green-400">Heavy-duty applications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> The exam loves to ask about flexible cord limitations. Remember: 
          flexible cords are NOT a substitute for permanent wiring. They're for portable equipment, appliances, and luminaires only.
        </WarningBox>
      </section>

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 402 — Fixture Wires */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 402 — Fixture Wires
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>402.5</HL>: Fixture wires can be used for internal wiring of luminaires and similar equipment.
            </p>
            <p>
              — <HL>402.6</HL>: Fixture wires cannot be used as branch-circuit conductors or for general wiring.
            </p>
            <p>
              — <HL>402.7</HL>: Fixture wires must be protected from physical damage and excessive tension.
            </p>
            <p>
              — <HL>402.8</HL>: Fixture wires must be used with approved fittings and strain relief.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 24: Fixture Wire Usage */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-24.jpg"
                alt="Fixture wire usage in luminaire internal wiring"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Fixture Wires: Internal Use Only</p>
              </div>
            </div>
            
            {/* IMAGE 25: Fixture Wire Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-25.jpg"
                alt="Protection of fixture wires from damage and proper strain relief"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Protect & Use Strain Relief</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixture Wire Types Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Common Fixture Wire Types</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Type TFFN</h5>
              <p className="text-white/85 text-sm">
                Thermoplastic, flexible, fixture wire, nylon jacketed. 90°C rating, commonly used in luminaires.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Type TFN</h5>
              <p className="text-white/85 text-sm">
                Thermoplastic, flexible, fixture wire, nylon jacketed. 90°C rating, similar to TFFN.
              </p>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 404 — Switches */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 404 — Switches
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>404.4</HL>: Switches must be installed so that the center of the grip of the operating handle is not more than 6 feet 7 inches above the floor.
            </p>
            <p>
              — <HL>404.8</HL>: Switches must be installed in accessible locations and must be readily accessible.
            </p>
            <p>
              — <HL>404.9</HL>: Switches must be grounded when required by Article 250.
            </p>
            <p>
              — <HL>404.11</HL>: Switches must be marked to indicate their function and current rating.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 26: Switch Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-26.jpg"
                alt="Proper switch installation with correct height and accessibility"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Switches: Height & Accessibility Matter</p>
              </div>
            </div>
            
            {/* IMAGE 27: Switch Marking */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-02/m02-27.jpg"
                alt="Properly marked switches with function and rating information"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Mark Function & Rating Clearly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Switch Requirements Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Switch Installation Requirements</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Requirement</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Code Section</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Key Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Maximum Height</td>
                  <td className="p-3">404.4</td>
                  <td className="p-3 text-green-400">6'7" above floor</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Accessibility</td>
                  <td className="p-3">404.8</td>
                  <td className="p-3 text-green-400">Readily accessible</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Grounding</td>
                  <td className="p-3">404.9</td>
                  <td className="p-3 text-green-400">When required by 250</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Marking</td>
                  <td className="p-3">404.11</td>
                  <td className="p-3 text-green-400">Function & rating</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        {/* Rule Box */}
        <RuleBox>
          <strong>RULE OF THUMB:</strong> Switches must be accessible and properly marked. Think about who will use them 
          and make sure they can reach and understand them. Height limits exist for a reason—accessibility matters.
        </RuleBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🎯 Chapter Summary */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-3000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            <AlertTriangle className="inline-block w-6 h-6 text-yellow-400 mr-2" /> Chapter 2 Summary
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
            You've mastered the art of electrical installation methods. These wiring techniques are the foundation of every 
            electrical system—choose the right method for the environment, or face the consequences.
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-yellow-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-white mb-2">Raceway Selection</h3>
            <p className="text-white/80 text-sm">
              Choose the right method for the environment. EMT for dry, PVC for wet, RMC for hazardous.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">��</span>
            </div>
            <h3 className="font-bold text-white mb-2">Support Requirements</h3>
            <p className="text-white/80 text-sm">
              Every wiring method has specific support intervals. Don't exceed them—gravity always wins.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="font-bold text-white mb-2">Installation Quality</h3>
            <p className="text-white/80 text-sm">
              Use approved fittings, protect from damage, and follow manufacturer instructions.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-yellow-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-white mb-2">Cable Types</h3>
            <p className="text-white/80 text-sm">
              Type AC, MC, NM, UF—each has specific uses and limitations. Know them cold.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">��</span>
            </div>
            <h3 className="font-bold text-white mb-2">Flexible Solutions</h3>
            <p className="text-white/80 text-sm">
              FMC, FMT, LFMC—flexible wiring for specific applications. Not for general use.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-yellow-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-white mb-2">Specialized Systems</h3>
            <p className="text-white/80 text-sm">
              Cablebus, multioutlet assemblies, underfloor raceways—high-capacity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-3100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🧠 Interactive Quiz Section */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-3200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">15-Question Check</h2>
        </div>
        <p className="text-white/80 mb-6 text-lg">Select your answers for all questions, then press <strong>Submit</strong> to see your score and explanations. You need <strong>70%</strong> to pass. Use <em>Reset</em> to try again.</p>
        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <footer className={`mx-auto max-w-5xl mt-16 transition-all duration-1000 delay-3300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-white/[0.03] rounded-xl border border-white/20">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-2">Ready for More?</h3>
            <p className="text-white/70 text-sm">
              Chapter 2 complete. Wiring methods mastered. Time to tackle the next challenge.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link
              href="/intro"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:scale-105"
            >
              ← Back to TOC
            </Link>
            <Link
              href="/modules/module-03"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Next: Chapter 3 →
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-8 text-white/50 text-sm">
          <p>OhmWork Electrician Survival Guide • NEC 2017 • Chapter 2 Complete</p>
        </div>
      </footer>
    </main>
  );
}