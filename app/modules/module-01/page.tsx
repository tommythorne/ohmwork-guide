"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <span className="text-yellow-400 text-xl"></span>
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-orange-400 text-xl"></span>
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-blue-400 text-xl"></span>
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

// Quiz data
const quiz: Q[] = [
  {
    id: 1,
    stem: "Article 90's primary purpose is best summarized as:",
    choices: [
      { key: "A", text: "Ensuring perfect performance of electrical systems" },
      { key: "B", text: "Practical safeguarding of persons and property" },
      { key: "C", text: "Mandating utility distribution practices" },
      { key: "D", text: "Enforcing manufacturer warranties" },
    ],
    answer: "B",
    why: "NEC 90.1(A) — The Code's purpose is the practical safeguarding of persons and property from hazards arising from electricity.",
  },
  {
    id: 2,
    stem: "NEC definitions (like 'Grounded Conductor') live primarily in:",
    choices: [
      { key: "A", text: "Article 110" },
      { key: "B", text: "Article 100" },
      { key: "C", text: "Chapter 9" },
      { key: "D", text: "Annex D" },
    ],
    answer: "B",
    why: "Article 100 — Definitions. Learn them cold; the exam loves definition traps.",
  },
  {
    id: 3,
    stem: "NEC 110 generally covers:",
    choices: [
      { key: "A", text: "Wiring methods" },
      { key: "B", text: "General requirements for electrical installations" },
      { key: "C", text: "Overcurrent protection devices" },
      { key: "D", text: "Communications systems" },
    ],
    answer: "B",
    why: "Article 110 — General Requirements for Electrical Installations (working space, listing/labeling, terminations, etc.).",
  },
  {
    id: 4,
    stem: "The NEC is intended to be used by:",
    choices: [
      { key: "A", text: "Only engineers" },
      { key: "B", text: "Only inspectors" },
      { key: "C", text: "Those who design, install, and inspect electrical systems" },
      { key: "D", text: "Only utilities" },
    ],
    answer: "C",
    why: "NEC 90.1(C) & scope — It's written for design, installation, and inspection. Utilities are generally outside NEC scope.",
  },
  {
    id: 5,
    stem: "Which statement about 'Listed and Labeled' equipment is most accurate?",
    choices: [
      { key: "A", text: "Listing is optional if you're careful" },
      { key: "B", text: "Listed equipment must be installed per its listing and labeling" },
      { key: "C", text: "Listing only applies to residential work" },
      { key: "D", text: "Labeling can be ignored if AHJ says nothing" },
    ],
    answer: "B",
    why: "NEC 110.3(B) — Install and use equipment per listing and labeling. The AHJ will expect it.",
  },
  {
    id: 6,
    stem: "Working space around equipment (think panels) primarily exists to:",
    choices: [
      { key: "A", text: "Store tools" },
      { key: "B", text: "Keep inspectors happy" },
      { key: "C", text: "Enable safe operation and maintenance" },
      { key: "D", text: "Increase arc flash energy" },
    ],
    answer: "C",
    why: "NEC 110.26 — Working space ensures safe operation and maintenance. Clear, accessible, dimensioned.",
  },
  {
    id: 7,
    stem: "The Code is not intended as a design manual. What does that imply?",
    choices: [
      { key: "A", text: "We ignore design entirely" },
      { key: "B", text: "You follow manufacturer instructions & standards alongside the NEC" },
      { key: "C", text: "Only inspectors need to know design" },
      { key: "D", text: "NEC gives all the answers, always" },
    ],
    answer: "B",
    why: "NEC 90.1(B) — The Code is not a design manual; use standards/manufacturer instructions. The NEC sets the minimum safety bar.",
  },
  {
    id: 8,
    stem: "AHJ stands for:",
    choices: [
      { key: "A", text: "Authority Having Jurisdiction" },
      { key: "B", text: "Authority Handling Jobs" },
      { key: "C", text: "Agency for High-voltage Jobs" },
      { key: "D", text: "Association of Home Journeymen" },
    ],
    answer: "A",
    why: "AHJ = Authority Having Jurisdiction. They interpret and enforce the Code locally.",
  },
  {
    id: 9,
    stem: "If a product's instructions conflict with the NEC, you should:",
    choices: [
      { key: "A", text: "Follow the instructions; manufacturer always wins" },
      { key: "B", text: "Follow the NEC; minimum safety requirements control" },
      { key: "C", text: "Flip a coin and hope the AHJ likes it" },
      { key: "D", text: "Install both ways and let the next guy decide" },
    ],
    answer: "B",
    why: "The NEC sets the enforceable minimum safety requirements. Instructions must be compatible with the Code; AHJ decides enforcement.",
  },
  {
    id: 10,
    stem: "Which is **not** typically in Chapter 1?",
    choices: [
      { key: "A", text: "Definitions" },
      { key: "B", text: "General installation requirements" },
      { key: "C", text: "Overcurrent protection coordination rules" },
      { key: "D", text: "Purpose and scope statements" },
    ],
    answer: "C",
    why: "OCP details/coordination are addressed later (e.g., Chapters 2 & 4+). Chapter 1 covers purpose, scope, definitions, general requirements.",
  },
  {
    id: 11,
    stem: "Equipment grounding conductors (EGCs) primarily serve to:",
    choices: [
      { key: "A", text: "Carry normal operating current" },
      { key: "B", text: "Provide a low-impedance path for fault current" },
      { key: "C", text: "Reduce voltage drop" },
      { key: "D", text: "Improve power factor" },
    ],
    answer: "B",
    why: "EGCs provide a low-impedance path for fault current, enabling overcurrent devices to operate quickly and safely.",
  },
  {
    id: 12,
    stem: "The term 'bonding' in the NEC refers to:",
    choices: [
      { key: "A", text: "Connecting to earth" },
      { key: "B", text: "Connecting metallic parts for electrical continuity" },
      { key: "C", text: "Connecting to the neutral conductor" },
      { key: "D", text: "Connecting to the utility transformer" },
    ],
    answer: "B",
    why: "Bonding connects metallic parts to establish electrical continuity and conductivity, not necessarily to earth.",
  },
  {
    id: 13,
    stem: "Working space requirements (110.26) apply to:",
    choices: [
      { key: "A", text: "All electrical equipment" },
      { key: "B", text: "Only equipment likely to require examination, adjustment, servicing, or maintenance" },
      { key: "C", text: "Only equipment over 600V" },
      { key: "D", text: "Only residential equipment" },
    ],
    answer: "B",
    why: "110.26 applies to equipment likely to require examination, adjustment, servicing, or maintenance while energized.",
  },
  {
    id: 14,
    stem: "Listed equipment must be:",
    choices: [
      { key: "A", text: "Installed per manufacturer instructions" },
      { key: "B", text: "Installed per NEC requirements only" },
      { key: "C", text: "Installed per AHJ preference" },
      { key: "D", text: "Installed per local custom" },
    ],
    answer: "A",
    why: "110.3(B) requires listed equipment to be installed per manufacturer instructions and listing requirements.",
  },
  {
    id: 15,
    stem: "The NEC's scope includes:",
    choices: [
      { key: "A", text: "Utility generation and transmission" },
      { key: "B", text: "Premises wiring and equipment" },
      { key: "C", text: "Railway systems" },
      { key: "D", text: "All of the above" },
    ],
    answer: "B",
    why: "The NEC covers premises wiring and equipment, not utility generation/transmission or railway systems.",
  },
];

export default function Ch1General() {
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
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
              alt="Electrical safety overview"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
              Chapter 1 — General
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
              <HL>Foundation of the Code</HL>: purpose, scope, definitions, and the general rules that keep the jobsite from turning into a fireworks show. 
              You nail this, the rest of the book gets easier.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-yellow-400">5</div>
                <div className="text-white/80">Major Articles</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400">15</div>
                <div className="text-white/80">Quiz Questions</div>
              </div>
              <div className="text-center p-4 bg-white/[0.05] rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400">35+</div>
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

      {/* ⚡ Article 90 — Purpose, Scope, How the NEC Works */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 90 — Purpose, Scope, How This Beast Operates
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — The NEC's mission isn't "perfect systems." It's <HL>practical safeguarding</HL> of people and property (<span className="italic">90.1(A)</span>). 
              Translation: minimize hazard. Period.
            </p>
            <p>
              — The Code is <HL>not a design manual</HL> (<span className="italic">90.1(B)</span>). You still follow <HL>manufacturer instructions</HL>, 
              standards, and good sense. The NEC sets the safety floor.
            </p>
            <p>
              — <HL>Enforcement</HL> belongs to the <HL>AHJ</HL> (Authority Having Jurisdiction). They interpret, you comply.
            </p>
            <p>
              — Utility stuff? Mostly <HL>outside</HL> NEC scope. Your work? Squarely inside.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
                alt="NEC codebook and standards reference"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">The NEC: Your Safety Bible</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Insulated tools and PPE for electrical work"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Safety First: Always</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Code Reference */}
        <CodeBox>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-400 mb-2">90.1(A) — Purpose</h4>
              <p className="text-sm">Practical safeguarding of persons and property from hazards arising from electricity.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-2">90.1(B) — Scope</h4>
              <p className="text-sm">Not intended as a design specification or instruction manual for untrained persons.</p>
            </div>
          </div>
        </CodeBox>
      </section>

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔧 Article 100 — Definitions */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 100 — Definitions
          </h2>
        </div>
        
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          The exam weaponizes definitions. Learn these like your job depends on it—because it does.
        </p>

        {/* Definition Cards with Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                  alt="Grounded Conductor"
                  width={120}
                  height={120}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-yellow-400 text-lg mb-2">Grounded Conductor</h3>
                <p className="text-white/85 leading-relaxed">
                  A system conductor that is <HL>intentionally grounded</HL>. Often the neutral. Don't treat it like harmless.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                  alt="Equipment Grounding Conductor"
                  width={120}
                  height={120}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-yellow-400 text-lg mb-2">Equipment Grounding Conductor (EGC)</h3>
                <p className="text-white/85 leading-relaxed">
                  The conductor that <HL>bonds equipment</HL> to ground. Carries <span className="italic">fault</span> current. Saves lives.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                  alt="Bonding Connection"
                  width={120}
                  height={120}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-yellow-400 text-lg mb-2">Bonding</h3>
                <p className="text-white/85 leading-relaxed">
                  <HL>Connecting metallic parts</HL> to establish electrical continuity and conductivity. You're controlling potential.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                  alt="Listed Equipment"
                  width={120}
                  height={120}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-yellow-400 text-lg mb-2">Listed & Labeled</h3>
                <p className="text-white/85 leading-relaxed">
                  Evaluated by a qualified lab, and must be installed <HL>per listing and labeling</HL> (110.3(B)).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Definition Comparison Table */}
        <DataTable>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Term</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Definition</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Key Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Grounded</td>
                  <td className="p-3">Connected to earth</td>
                  <td className="p-3 text-green-400">Safety reference</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Grounding</td>
                  <td className="p-3">The act of connecting to earth</td>
                  <td className="p-3 text-green-400">Process</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Bonding</td>
                  <td className="p-3">Connecting for continuity</td>
                  <td className="p-3 text-green-400">Not necessarily to earth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> The exam loves to confuse "Grounded" vs "Grounding" vs "Bonding." 
          <HL>Grounded</HL> = connected to earth. <HL>Grounding</HL> = the process. <HL>Bonding</HL> = connecting for continuity.
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

      {/* 🛠️ Article 110 — General Requirements */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🛠️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 110 — General Requirements
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>110.3(B)</HL>: Install equipment per instructions. If you "wing it," you fail hard.
            </p>
            <p>
              — <HL>Working Space (110.26)</HL>: Clearances so you can work without headbutting a live bus. 
              Think width, depth, height, and <HL>access</HL>. Panels aren't coat racks.
            </p>
            <p>
              — <HL>Terminations</HL>: Use conductors and lugs that match ratings (copper/aluminum, temperature).
            </p>
            <p>
              — <HL>Guarding, Marking, and Accessibility</HL>: If someone can touch it, it better be safe and labeled.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Working Space Clearance"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Working Space: Keep It Clear</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Proper Panel Installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Proper Panel Installation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Visual Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/30 transition-colors">
                <span className="text-2xl">🏷️</span>
              </div>
              <p className="text-white/85 text-sm">
                <HL>Label it</HL> so the next human doesn't guess at 2AM.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/30 transition-colors">
                <span className="text-2xl">📏</span>
              </div>
              <p className="text-white/85 text-sm">
                <HL>Working space</HL> — not storage. Keep it clear.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/30 transition-colors">
                <span className="text-3xl">✅</span>
              </div>
              <p className="text-white/85 text-sm">
                <HL>Use listed gear</HL> per its instructions. No hero builds.
              </p>
            </div>
          </div>
        </div>

        {/* Horror Story */}
        <HorrorStory>
          <strong>True Story:</strong> Electrician ignored working space requirements and installed a panel too close to a wall. 
          During maintenance, he couldn't safely access the panel and had to shut down the entire building. 
          <HL>110.26</HL> exists for a reason—respect the working space.
        </HorrorStory>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 200 — Use and Identification of Grounded Conductors */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 200 — Use and Identification of Grounded Conductors
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>200.6</HL>: Grounded conductors must be <HL>identified</HL> by white or gray insulation, 
              or by three continuous white stripes on other than green insulation.
            </p>
            <p>
              — <HL>200.7</HL>: White or gray insulation can only be used for grounded conductors. 
              Don't repurpose it for ungrounded conductors.
            </p>
            <p>
              — <HL>200.9</HL>: Means of identification must be <HL>permanent</HL> and <HL>durable</HL>.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Conductor Identification"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Proper Conductor Identification</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Color Coding Standards"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Color Coding Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rule Box */}
        <RuleBox>
          <strong>RULE OF THUMB:</strong> White = Neutral = Grounded. Gray = Neutral = Grounded. 
          Green = Equipment Ground = Never Current-Carrying. Keep these straight or fail the exam.
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

      {/* 🔌 Article 250 — Grounding and Bonding (Introduction) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 250 — Grounding and Bonding (Introduction)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>250.4(A)</HL>: Grounding provides a <HL>low-impedance path</HL> for fault current, 
              enabling overcurrent devices to operate.
            </p>
            <p>
              — <HL>250.4(B)</HL>: Bonding ensures <HL>electrical continuity</HL> and conductivity 
              between conductive parts.
            </p>
            <p>
              — <HL>250.6</HL>: Objectionable current over grounding conductors must be <HL>eliminated</HL>.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Grounding System Overview"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Grounding System Overview</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Bonding Jumper Installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Bonding Jumper Installation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Box */}
        <CodeBox>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-400 mb-2">250.4(A)(1) — System Grounding</h4>
              <p className="text-sm">Electrical systems that are grounded shall be connected to earth in a manner that will limit the voltage imposed by lightning, line surges, or unintentional contact with higher-voltage lines.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-2">250.4(A)(2) — Equipment Grounding</h4>
              <p className="text-sm">Normally non-current-carrying conductive materials enclosing electrical conductors or equipment shall be connected to earth to limit the voltage to ground on these materials.</p>
            </div>
          </div>
        </CodeBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 📐 Article 300 — Wiring Methods (Introduction) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 300 — Wiring Methods (Introduction)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>300.3</HL>: Conductors of the same circuit must be in the <HL>same raceway</HL>, 
              cable, or enclosure.
            </p>
            <p>
              — <HL>300.4</HL>: Protection against physical damage is <HL>required</HL> where conductors 
              are subject to damage.
            </p>
            <p>
              — <HL>300.5</HL>: Underground installations must have proper <HL>cover</HL> and protection.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Proper Cable Installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Proper Cable Installation</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Conduit Installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Conduit Installation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> The exam loves to test on <HL>300.3</HL> — conductors of the same circuit 
          must be in the same raceway. Don't separate them or you'll fail.
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

      {/* 🔌 Article 310 — Conductors for General Wiring (Introduction) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 310 — Conductors for General Wiring (Introduction)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>310.10</HL>: Conductors must be <HL>suitable</HL> for the location and conditions of use.
            </p>
            <p>
              — <HL>310.15</HL>: Ampacity tables determine the <HL>current-carrying capacity</HL> of conductors.
            </p>
            <p>
              — <HL>310.16</HL>: Temperature ratings affect <HL>ampacity</HL> and installation methods.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Wire Types & Sizes"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Wire Types & Sizes</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Conductor Installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Conductor Installation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <DataTable>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Temperature Rating</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Common Use</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Key Consideration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">60°C</td>
                  <td className="p-3">Older installations</td>
                  <td className="p-3 text-green-400">Lower ampacity</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">75°C</td>
                  <td className="p-3">Most common</td>
                  <td className="p-3 text-green-400">Standard rating</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">90°C</td>
                  <td className="p-3">High-temp applications</td>
                  <td className="p-3 text-green-400">Higher ampacity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Hazards & Exam Traps */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚠️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Hazards & Exam Traps
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3 text-white/90">
            <p>— <HL>Definitions</HL> are bait. "Grounded vs. Grounding," "Bonding vs. Grounding"—they'll play word games.</p>
            <p>— <HL>Working space</HL> clearances: don't mix up depth categories or voltage thresholds.</p>
            <p>— <HL>110.3(B)</HL> is a favorite: listing/labeling is not a suggestion.</p>
          </div>
          <div className="space-y-3 text-white/90">
            <p>— <HL>NEC ≠ design manual</HL>. You'll be tested on minimums, not best‑in‑class.</p>
            <p>— <HL>Article 200</HL> identification rules: white/gray = grounded conductors only.</p>
            <p>— <HL>Temperature ratings</HL> affect ampacity calculations significantly.</p>
          </div>
        </div>

        {/* Visual Warning Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center">
            <div className="text-3xl mb-2">🚨</div>
            <p className="text-white/90 text-sm">Definitions are exam traps</p>
          </div>
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-white/90 text-sm">Working space requirements</p>
          </div>
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-center">
            <div className="text-3xl mb-2">📋</div>
            <p className="text-white/90 text-sm">Listing & labeling rules</p>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🧠 Quick Reference */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Quick Reference
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Where Stuff Lives</h3>
            <div className="space-y-2 text-white/85">
              <p>— Article 90: Why/How the NEC works</p>
              <p>— Article 100: Definitions</p>
              <p>— Article 110: General installation rules</p>
              <p>— Article 200: Conductor identification</p>
              <p>— Article 250: Grounding & bonding intro</p>
              <p>— Article 300: Wiring methods intro</p>
              <p>— Article 310: Conductors intro</p>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Fast Rules</h3>
            <div className="space-y-2 text-white/85">
              <p>— Follow <HL>listing & labeling</HL></p>
              <p>— Keep <HL>working space</HL> clear</p>
              <p>— Respect <HL>AHJ</HL> interpretations</p>
              <p>— White/gray = <HL>grounded conductors</HL></p>
              <p>— Green = <HL>equipment ground</HL></p>
              <p>— <HL>Temperature ratings</HL> matter</p>
            </div>
          </div>
        </div>

        {/* Visual Reference Chart */}
        <ChartBox>
          <div className="text-center mb-4">
            <h4 className="font-bold text-white text-lg mb-2">Chapter 1 Structure</h4>
            <p className="text-white/70 text-sm">Visual overview of how the articles connect</p>
          </div>
          
          <div className="grid grid-cols-7 gap-2 text-xs">
            <div className="text-center p-2 bg-yellow-400/20 rounded border border-yellow-400/30">
              <div className="font-bold text-yellow-400">90</div>
              <div className="text-white/70">Purpose</div>
            </div>
            <div className="text-center p-2 bg-blue-400/20 rounded border border-blue-400/30">
              <div className="font-bold text-blue-400">100</div>
              <div className="text-white/70">Definitions</div>
            </div>
            <div className="text-center p-2 bg-green-400/20 rounded border border-green-400/30">
              <div className="font-bold text-green-400">110</div>
              <div className="text-white/70">Requirements</div>
            </div>
            <div className="text-center p-2 bg-purple-400/20 rounded border border-purple-400/30">
              <div className="font-bold text-purple-400">200</div>
              <div className="text-white/70">Identification</div>
            </div>
            <div className="text-center p-2 bg-orange-400/20 rounded border border-orange-400/30">
              <div className="font-bold text-orange-400">250</div>
              <div className="text-white/70">Grounding</div>
            </div>
            <div className="text-center p-2 bg-red-400/20 rounded border border-red-400/30">
              <div className="font-bold text-red-400">300</div>
              <div className="text-white/70">Wiring</div>
            </div>
            <div className="text-center p-2 bg-indigo-400/20 rounded border border-indigo-400/30">
              <div className="font-bold text-indigo-400">310</div>
              <div className="text-white/70">Conductors</div>
            </div>
          </div>
        </ChartBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 📝 Quiz */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            15-Question Check
          </h2>
        </div>
        
        <p className="text-white/80 mb-6 text-lg">
          Tap "Check Answer." Learn why. Move on. Don't overthink.
        </p>
        
        <div className="space-y-6">
          {quiz.map((q) => (
            <div key={q.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="text-white font-semibold text-lg mb-4">
                {q.id}. {q.stem}
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {q.choices.map((c) => (
                  <label key={c.key} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white/90 hover:border-yellow-400/40 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer group/choice">
                    <input type="radio" name={`q-${q.id}`} onChange={() => {}} className="accent-yellow-400" />
                    <span className="font-mono text-yellow-300 font-bold">{c.key}</span>
                    <span className="group-hover/choice:text-white transition-colors">{c.text}</span>
                  </label>
                ))}
              </div>
              
              <button 
                onClick={() => toggle(q.id)} 
                className="inline-flex items-center justify-center rounded-lg bg-green-500 text-black font-bold px-6 py-3 hover:bg-green-400 hover:scale-105 transition-all duration-200 group/button"
              >
                <span className="group-hover/button:scale-110 transition-transform">Check Answer</span>
              </button>
              
              {open[q.id] && (
                <div className="mt-4 rounded-lg border border-green-400/30 bg-green-400/10 p-4 animate-fade-in">
                  <div className="font-mono text-sm mb-2">
                    Correct: <span className="text-green-400 font-bold">{q.answer}</span>
                  </div>
                  <div className="text-white/90">{q.why}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <div className={`mx-auto max-w-5xl flex items-center justify-between mt-12 transition-all duration-1000 delay-2300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Link 
          href="/intro" 
          className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span>Back to TOC</span>
        </Link>
        
        <Link 
          href="/modules/module-02" 
          className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
        >
          <span>Next: Ch 2 — Wiring & Protection</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>

      {/* Bottom Spacer */}
      <div className="h-12" />
    </main>
  );
}