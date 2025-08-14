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
      <span className="text-yellow-400 text-xl">⚡</span>
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

const DataTable = ({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-6 my-6 hover:bg-white/[0.035] transition-all duration-300">
    <h4 className="font-bold text-yellow-400 text-lg mb-4">{title}</h4>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/20">
            {headers.map((header, i) => (
              <th key={i} className="text-left py-3 px-4 text-white/80 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/10 hover:bg-white/[0.02] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-white/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ChartBox = ({ title, children }: { children: React.ReactNode; title: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-6 my-6 hover:bg-white/[0.035] transition-all duration-300">
    <h4 className="font-bold text-yellow-400 text-lg mb-4">{title}</h4>
    {children}
  </div>
);

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
    why: "NEC 110.3(B) — Install equipment per instructions. If you 'wing it,' you fail hard.",
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
    stem: "Equipment grounding conductors (EGC) are primarily intended to:",
    choices: [
      { key: "A", text: "Carry normal load current" },
      { key: "B", text: "Provide a low-impedance path for fault current" },
      { key: "C", text: "Reduce voltage drop" },
      { key: "D", text: "Improve power factor" },
    ],
    answer: "B",
    why: "EGCs provide a low-impedance path for fault current to return to the source, enabling overcurrent protection to operate quickly.",
  },
  {
    id: 12,
    stem: "The term 'Bonding' refers to:",
    choices: [
      { key: "A", text: "Connecting to earth" },
      { key: "B", text: "Connecting metallic parts to establish electrical continuity" },
      { key: "C", text: "Connecting to the neutral" },
      { key: "D", text: "Connecting to the utility" },
    ],
    answer: "B",
    why: "Bonding connects metallic parts to establish electrical continuity and conductivity. It's about controlling potential differences.",
  },
  {
    id: 13,
    stem: "A 'Listed' product means:",
    choices: [
      { key: "A", text: "It's expensive" },
      { key: "B", text: "It's been evaluated by a qualified testing laboratory" },
      { key: "C", text: "It's made in the USA" },
      { key: "D", text: "It's recommended by electricians" },
    ],
    answer: "B",
    why: "Listed means evaluated by a qualified testing laboratory and found suitable for a specific purpose.",
  },
  {
    id: 14,
    stem: "Working space clearances are measured from:",
    choices: [
      { key: "A", text: "The front of the equipment" },
      { key: "B", text: "Live parts or equipment likely to be examined/adjusted" },
      { key: "C", text: "The nearest wall" },
      { key: "D", text: "The floor" },
    ],
    answer: "B",
    why: "NEC 110.26(A)(1) — Working space is measured from live parts or equipment likely to be examined/adjusted while energized.",
  },
  {
    id: 15,
    stem: "The NEC is updated every:",
    choices: [
      { key: "A", text: "Year" },
      { key: "B", text: "3 years" },
      { key: "C", text: "5 years" },
      { key: "D", text: "10 years" },
    ],
    answer: "B",
    why: "The NEC is updated every 3 years (2017, 2020, 2023, etc.). Always check which version your jurisdiction uses.",
  },
];

export default function Ch1General() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggle = (id: number) =>
    setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <main className="min-h-screen bg-black text-white px-4 py-6 md:px-8 md:py-12">
      {/* Top Bar */}
      <div className={`mx-auto max-w-5xl flex items-center justify-between gap-4 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Link href="/intro" className="text-white/70 hover:text-white transition flex items-center gap-2">
          <span className="text-xl">←</span>
          <span className="hidden sm:inline">Back to TOC</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 font-semibold text-sm md:text-base">NEC 2017</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`mx-auto max-w-5xl text-center mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
          Chapter 1 — General
        </h1>
        <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          <HL>Foundation of the Code</HL>: purpose, scope, definitions, and the general rules that keep the jobsite 
          from turning into a fireworks show. You nail this, the rest of the book gets easier.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-white/80">Chapter 1 of 9</span>
          </div>
        </div>
      </div>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

      {/* ⚡ Article 90 — Purpose, Scope, How the NEC Works */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 90 — Purpose, Scope, How This Beast Operates
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed">
          <p>
            — The NEC's mission isn't "perfect systems." It's <HL>practical safeguarding</HL> of people and property 
            (<span className="italic">90.1(A)</span>). Translation: minimize hazard. Period.
          </p>
          <p>
            — The Code is <HL>not a design manual</HL> (<span className="italic">90.1(B)</span>). You still follow 
            <HL>manufacturer instructions</HL>, standards, and good sense. The NEC sets the safety floor.
          </p>
          <p>
            — <HL>Enforcement</HL> belongs to the <HL>AHJ</HL> (Authority Having Jurisdiction). They interpret, you comply.
          </p>
          <p>
            — Utility stuff? Mostly <HL>outside</HL> NEC scope. Your work? Squarely inside.
          </p>
        </div>

        {/* NEC Structure Diagram */}
        <div className="my-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.035] transition-all duration-300">
          <h3 className="font-bold text-yellow-400 text-lg mb-4">NEC Structure & Organization</h3>
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-400 text-2xl">📋</span>
              </div>
              <p className="text-white/80 text-sm">Chapters 1-9</p>
              <p className="text-white/60 text-xs">Core Requirements</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-1 bg-yellow-400 mx-auto mb-2"></div>
              <div className="w-8 h-1 bg-yellow-400 mx-auto mb-2"></div>
              <div className="w-8 h-1 bg-yellow-400 mx-auto"></div>
              <p className="text-white/80 text-sm">Articles</p>
              <p className="text-white/60 text-xs">Specific Topics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-400 text-2xl">📊</span>
              </div>
              <p className="text-white/80 text-sm">Tables & Annexes</p>
              <p className="text-white/60 text-xs">Reference Data</p>
            </div>
          </div>
        </div>

        <RuleBox>
          <strong>NEC Foundation Rule:</strong> The Code sets minimum safety requirements. It's not about 
          perfect systems—it's about preventing fires, shocks, and explosions. Safety first, always.
        </RuleBox>

        <HorrorStory>
          <strong>True Story:</strong> Electrician ignored NEC requirements because "it's just residential." 
          When a child touched an ungrounded appliance during a fault, they received a severe shock. 
          <HL>90.1(A)</HL> exists for a reason—safety isn't optional.
        </HorrorStory>

        {/* NEC Purpose Table */}
        <DataTable
          title="NEC Purpose & Scope Summary"
          headers={["Aspect", "What It Is", "What It's NOT"]}
          rows={[
            ["Purpose", "Practical safeguarding of persons and property", "Perfect electrical systems"],
            ["Scope", "Electrical installations and equipment", "Utility distribution systems"],
            ["Intent", "Minimum safety requirements", "Design manual or instruction book"],
            ["Enforcement", "By Authority Having Jurisdiction (AHJ)", "Automatic or universal"],
            ["Updates", "Every 3 years", "Static or unchanging"]
          ]}
        />

        <CodeBox>
          <strong>NEC 90.1(A):</strong> "The purpose of this Code is the practical safeguarding of persons and 
          property from hazards arising from the use of electricity."
        </CodeBox>
      </section>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

      {/* 🔧 Article 100 — Definitions */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 100 — Definitions
          </h2>
        </div>
        
        <p className="text-lg text-white/90 mb-6 leading-relaxed">
          The exam weaponizes definitions. Learn these like your job depends on it—because it does. 
          The difference between "grounded" and "grounding" can mean the difference between passing and failing.
        </p>

        {/* Key Definitions Visual */}
        <div className="my-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.035] transition-all duration-300">
          <h3 className="font-bold text-yellow-400 text-lg mb-4">Critical Definitions You Must Know</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-400 text-sm">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Grounded Conductor</h4>
                  <p className="text-white/85 text-sm">A system conductor that is intentionally grounded. Often the neutral.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-400 text-sm">🔌</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Equipment Grounding Conductor (EGC)</h4>
                  <p className="text-white/85 text-sm">The conductor that bonds equipment to ground. Carries fault current.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-yellow-400 text-sm">🔗</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Bonding</h4>
                  <p className="text-white/85 text-sm">Connecting metallic parts to establish electrical continuity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-purple-400 text-sm">🏷️</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Listed & Labeled</h4>
                  <p className="text-white/85 text-sm">Evaluated by a qualified lab, must be installed per instructions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WarningBox>
          <strong>EXAM TRAP:</strong> Definitions are heavily tested. The exam loves to play word games with 
          "grounded vs. grounding," "bonding vs. grounding," and similar terms. Know the difference cold.
        </WarningBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Grounded vs. Grounding</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Grounded:</HL> A conductor that is intentionally connected to earth or ground.<br/><br/>
              <HL>Grounding:</HL> The process of connecting to earth or ground. This is the action, not the conductor.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Bonding vs. Grounding</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Bonding:</HL> Connecting metallic parts to establish electrical continuity.<br/><br/>
              <HL>Grounding:</HL> Connecting to earth or ground. Bonding is about continuity, grounding is about earth connection.
            </p>
          </div>
        </div>

        {/* Definitions Table */}
        <DataTable
          title="Essential NEC Definitions"
          headers={["Term", "Definition", "Key Point"]}
          rows={[
            ["Grounded Conductor", "System conductor intentionally grounded", "Often the neutral wire"],
            ["Equipment Grounding Conductor", "Conductor that bonds equipment to ground", "Carries fault current"],
            ["Bonding", "Connecting metallic parts for continuity", "Not necessarily to ground"],
            ["Listed", "Evaluated by qualified testing laboratory", "Must install per instructions"],
            ["AHJ", "Authority Having Jurisdiction", "They interpret and enforce the Code"],
            ["Working Space", "Space for safe operation and maintenance", "Measured from live parts"]
          ]}
        />

        <CodeBox>
          <strong>NEC 100:</strong> "Definitions in Article 100 apply throughout the Code. These definitions 
          are essential for understanding the requirements that follow."
        </CodeBox>
      </section>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

            {/* 🛠️ Article 110 — General Requirements */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🛠️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 110 — General Requirements
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Article 110 is the <HL>foundation</HL> of electrical installation requirements. It covers working space, 
            equipment installation, and the basic rules that apply to everything else in the Code.
          </p>
          <p>
            <HL>110.3(B)</HL> requires equipment to be installed per its listing and labeling. Don't wing it—follow 
            the instructions or fail the inspection.
          </p>
          <p>
            <HL>110.26</HL> covers working space requirements. This isn't about convenience—it's about safety 
            during operation and maintenance.
          </p>
        </div>

        {/* Working Space Diagram */}
        <div className="my-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.035] transition-all duration-300">
          <h3 className="font-bold text-yellow-400 text-lg mb-4">Working Space Requirements (110.26)</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-400 text-xl">📏</span>
              </div>
              <h4 className="font-bold text-white text-sm">Width</h4>
              <p className="text-white/80 text-xs">30 inches minimum</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-green-400 text-xl">📐</span>
              </div>
              <h4 className="font-bold text-white text-sm">Depth</h4>
              <p className="text-white/80 text-xs">Based on voltage</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-yellow-400 text-xl">📏</span>
              </div>
              <h4 className="font-bold text-white text-sm">Height</h4>
              <p className="text-white/80 text-xs">6.5 feet minimum</p>
            </div>
          </div>
        </div>

        <RuleBox>
          <strong>Working Space Rule:</strong> Working space must be clear, accessible, and properly dimensioned. 
          Don't use it for storage—it's for safe operation and maintenance.
        </RuleBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">110.3(B) — Installation & Use</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Equipment must be installed</HL> and used in accordance with its listing and labeling. 
              This includes following manufacturer instructions and not exceeding ratings.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">110.26 — Working Space</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Working space must be provided</HL> for safe operation and maintenance. Clearances are 
              based on voltage and equipment type.
            </p>
          </div>
        </div>

        {/* Working Space Table */}
        <DataTable
          title="Working Space Depth Requirements by Voltage"
          headers={["Voltage", "Depth Required", "Notes"]}
          rows={[
            ["0-150V", "3 feet", "Most residential and light commercial"],
            ["151-600V", "4 feet", "Commercial and industrial systems"],
            ["601-2500V", "5 feet", "Medium voltage equipment"],
            ["2501V+", "6 feet", "High voltage installations"]
          ]}
        />

        <HorrorStory>
          <strong>True Story:</strong> Electrician ignored working space requirements and installed a panel 
          too close to a wall. During maintenance, the electrician couldn't safely work on the energized 
          equipment and received a severe shock. <HL>110.26</HL> exists for safety, not convenience.
        </HorrorStory>

        {/* Additional Article 110 sections */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">110.14 — Electrical Connections</h3>
          <p className="text-white/90 leading-relaxed">
            Terminations must be made with conductors and lugs that match ratings. Don't mix copper and 
            aluminum without proper methods. This prevents overheating and fires.
          </p>
          
          <h3 className="text-xl font-bold text-yellow-400">110.15 — Marking</h3>
          <p className="text-white/90 leading-relaxed">
            Equipment must be marked with voltage, current, wattage, and other ratings. Clear marking 
            prevents misapplication and ensures proper operation.
          </p>

          <h3 className="text-xl font-bold text-yellow-400">110.16 — Arc-Flash Hazard Warning</h3>
          <p className="text-white/90 leading-relaxed">
            Equipment that requires arc-flash hazard warning must be marked. This is about worker safety 
            and proper PPE selection.
          </p>
        </div>

        <CodeBox>
          <strong>NEC 110.26(A)(1):</strong> "Working space shall be provided and maintained about all 
          electrical equipment to permit ready and safe operation and maintenance of such equipment."
        </CodeBox>
      </section>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

      {/* 🔌 Article 200 — Use and Identification of Grounded Conductors */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 200 — Use and Identification of Grounded Conductors
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Article 200 covers the <HL>identification and use</HL> of grounded conductors (usually the neutral). 
            Proper identification prevents miswiring and ensures system safety.
          </p>
          <p>
            <HL>200.6</HL> requires grounded conductors to be identified with white or gray insulation, 
            or by three continuous white stripes on other than green insulation.
          </p>
          <p>
            <HL>200.7</HL> prohibits using white or gray insulation for ungrounded conductors. This 
            prevents confusion and miswiring.
          </p>
        </div>

        {/* Conductor Identification Visual */}
        <div className="my-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.035] transition-all duration-300">
          <h3 className="font-bold text-yellow-400 text-lg mb-4">Conductor Identification Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300"></div>
                <div>
                  <h4 className="font-bold text-white text-sm">Grounded Conductor (Neutral)</h4>
                  <p className="text-white/80 text-xs">White or gray insulation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-300"></div>
                <div>
                  <h4 className="font-bold text-white text-sm">Ungrounded Conductor (Hot)</h4>
                  <p className="text-white/80 text-xs">Any color except white, gray, or green</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full border-2 border-gray-300"></div>
                <div>
                  <h4 className="font-bold text-white text-sm">Equipment Grounding Conductor</h4>
                  <p className="text-white/80 text-xs">Green or bare copper</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-gray-300"></div>
                <div>
                  <h4 className="font-bold text-white text-sm">Identified Conductor</h4>
                  <p className="text-white/80 text-xs">White with colored stripe</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WarningBox>
          <strong>EXAM TRAP:</strong> Conductor identification is heavily tested. Know that white/gray 
          can only be used for grounded conductors, and that three white stripes are acceptable identification.
        </WarningBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">200.6 — Means of Identifying</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Grounded conductors must be identified</HL> with white or gray insulation, or with three 
              continuous white stripes on other than green insulation.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">200.7 — Use of Insulation</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>White or gray insulation</HL> cannot be used for ungrounded conductors. This prevents 
              confusion and ensures proper system operation.
            </p>
          </div>
        </div>

        {/* Conductor Identification Table */}
        <DataTable
          title="Conductor Identification Summary"
          headers={["Conductor Type", "Identification", "Prohibited Colors"]}
          rows={[
            ["Grounded (Neutral)", "White or gray", "None"],
            ["Ungrounded (Hot)", "Any color except white, gray, green", "White, gray, green"],
            ["Equipment Grounding", "Green or bare copper", "White, gray"],
            ["Identified", "White with colored stripe", "Solid white or gray"]
          ]}
        />

        <CodeBox>
          <strong>NEC 200.6:</strong> "The grounded conductor of a branch circuit shall be identified by a 
          continuous white or natural gray color."
        </CodeBox>
      </section>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

      {/* ⚡ Article 250 — Grounding and Bonding (Introduction) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 250 — Grounding and Bonding (Introduction)
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Article 250 is the <HL>most important</HL> article in the NEC. Grounding and bonding prevent 
            fires, protect equipment, and save lives. Get this wrong and everything else fails.
          </p>
          <p>
            <HL>250.4</HL> explains the purpose of grounding and bonding. It's not about convenience—it's 
            about safety and proper system operation.
          </p>
          <p>
            <HL>250.6</HL> covers objectionable current. Grounding should not create problems—it should 
            solve them.
          </p>
        </div>

        {/* Grounding System Diagram */}
        <div className="my-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.035] transition-all duration-300">
          <h3 className="font-bold text-yellow-400 text-lg mb-4">Basic Grounding System</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-400 text-2xl">🏠</span>
              </div>
              <p className="text-white/80 text-sm">Service Equipment</p>
              <p className="text-white/60 text-xs">Main bonding jumper</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-1 bg-yellow-400 mx-auto mb-2"></div>
              <div className="w-8 h-1 bg-yellow-400 mx-auto mb-2"></div>
              <div className="w-8 h-1 bg-yellow-400 mx-auto"></div>
              <p className="text-white/80 text-sm">Grounding Electrode</p>
              <p className="text-white/60 text-xs">Earth connection</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-green-400 text-2xl">🔌</span>
              </div>
              <p className="text-white/80 text-sm">Equipment</p>
              <p className="text-white/60 text-xs">Bonded to ground</p>
            </div>
          </div>
        </div>

        <RuleBox>
          <strong>Grounding Rule:</strong> Every electrical system must have a grounding electrode system. 
          Every piece of equipment must be bonded to ground. This is not optional—it's essential for safety.
        </RuleBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">250.4 — Purpose of Grounding</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Grounding provides a path</HL> for fault current to return to the source, enabling 
              overcurrent protection to operate quickly and safely.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">250.6 — Objectionable Current</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Grounding should not create</HL> objectionable current. If it does, the installation 
              method must be corrected.
            </p>
          </div>
        </div>

        {/* Grounding Purpose Table */}
        <DataTable
          title="Purpose of Grounding and Bonding"
          headers={["Purpose", "What It Does", "Why It's Important"]}
          rows={[
            ["Fault Current Path", "Provides low-impedance return path", "Enables OCP to operate quickly"],
            ["Equipment Protection", "Prevents damage from voltage surges", "Protects expensive equipment"],
            ["Personnel Safety", "Prevents shock hazards", "Saves lives and prevents injury"],
            ["System Stability", "Maintains proper voltage levels", "Ensures reliable operation"],
            ["Lightning Protection", "Provides path for lightning current", "Prevents fires and damage"]
          ]}
        />

        <HorrorStory>
          <strong>True Story:</strong> Electrician skipped grounding because "it's just a small addition." 
          When a fault occurred, the current had no safe path to return, causing equipment damage and 
          creating a shock hazard. <HL>250.4</HL> exists for a reason—grounding saves lives.
        </HorrorStory>

        <CodeBox>
          <strong>NEC 250.4(A)(1):</strong> "Electrical systems that are grounded shall be connected to 
          earth in a manner that will limit the voltage imposed by lightning, line surges, or unintentional 
          contact with higher-voltage lines."
        </CodeBox>
      </section>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

      {/* 🔧 Article 300 — Wiring Methods (Introduction) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 300 — Wiring Methods (Introduction)
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Article 300 covers <HL>general requirements</HL> for wiring methods. This includes how conductors 
            are installed, protected, and supported throughout the electrical system.
          </p>
          <p>
            <HL>300.3</HL> requires conductors of the same circuit to be in the same raceway, cable, or 
            enclosure. This prevents inductive heating and ensures proper operation.
          </p>
          <p>
            <HL>300.4</HL> covers protection against physical damage. Conductors must be protected where 
            they're subject to damage.
          </p>
        </div>

        {/* Wiring Methods Visual */}
        <div className="my-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.035] transition-all duration-300">
          <h3 className="font-bold text-yellow-400 text-lg mb-4">Common Wiring Methods</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-sm">📦</span>
                </div>
                <span className="text-white/85 text-sm">Raceways (EMT, IMC, RMC)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">🔌</span>
                </div>
                <span className="text-white/85 text-sm">Cable Assemblies (NM, MC, AC)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 text-sm">📏</span>
                </div>
                <span className="text-white/85 text-sm">Support & Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-sm">🔒</span>
                </div>
                <span className="text-white/85 text-sm">Terminations & Connections</span>
              </div>
            </div>
          </div>
        </div>

        <RuleBox>
          <strong>Wiring Method Rule:</strong> All conductors of the same circuit must be in the same 
          raceway or cable. This prevents inductive heating and ensures proper system operation.
        </RuleBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">300.3 — Conductors</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Conductors of the same circuit</HL> must be in the same raceway, cable, or enclosure. 
              This includes hot, neutral, and grounding conductors.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">300.4 — Protection</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Conductors must be protected</HL> where they're subject to physical damage. This includes 
              protection from nails, screws, and other hazards.
            </p>
          </div>
        </div>

        {/* Wiring Methods Table */}
        <DataTable
          title="Wiring Method Requirements"
          headers={["Requirement", "What It Means", "Why It's Important"]}
          rows={[
            ["Same Raceway", "All circuit conductors together", "Prevents inductive heating"],
            ["Physical Protection", "Protect from damage", "Prevents shorts and fires"],
            ["Proper Support", "Adequate support and fastening", "Prevents damage and sagging"],
            ["Correct Terminations", "Proper connections", "Prevents overheating and fires"],
            ["Environmental Protection", "Protect from moisture, chemicals", "Ensures long-term reliability"]
          ]}
        />

        <CodeBox>
          <strong>NEC 300.3(A):</strong> "All conductors of the same circuit and, where used, the grounded 
          conductor and all equipment grounding conductors and bonding conductors shall be contained within 
          the same raceway, auxiliary gutter, cable tray, cablebus assembly, trench, cable, or cord."
        </CodeBox>
      </section>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

      {/* 📊 Article 310 — Conductors for General Wiring (Introduction) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 310 — Conductors for General Wiring (Introduction)
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Article 310 covers <HL>conductor types and ratings</HL>. This includes ampacity tables, temperature 
            ratings, and the selection of conductors for specific applications.
          </p>
          <p>
            <HL>310.15</HL> provides ampacity tables for conductors. These tables determine how much current 
            a conductor can safely carry.
          </p>
          <p>
            <HL>310.104</HL> covers conductor insulation types. Different insulation types have different 
            temperature ratings and applications.
          </p>
        </div>

        {/* Conductor Types Visual */}
        <div className="my-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.035] transition-all duration-300">
          <h3 className="font-bold text-yellow-400 text-lg mb-4">Common Conductor Types</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 text-sm">🔶</span>
                </div>
                <span className="text-white/85 text-sm">THHN/THWN-2</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-sm">🔵</span>
                </div>
                <span className="text-white/85 text-sm">XHHW-2</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">🟢</span>
                </div>
                <span className="text-white/85 text-sm">RHW-2</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-sm">🟣</span>
                </div>
                <span className="text-white/85 text-sm">USE-2</span>
              </div>
            </div>
          </div>
        </div>

        <WarningBox>
          <strong>EXAM TRAP:</strong> Conductor ampacity is heavily tested. Know your temperature ratings, 
          ambient temperature corrections, and how to use the ampacity tables properly.
        </WarningBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">310.15 — Ampacity Tables</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Ampacity tables determine</HL> how much current a conductor can safely carry. These 
              values are based on insulation type and temperature rating.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">310.104 — Conductor Insulation</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Different insulation types</HL> have different temperature ratings and applications. 
              Choose the right type for your environment.
            </p>
          </div>
        </div>

        {/* Conductor Ampacity Table */}
        <DataTable
          title="Common Conductor Ampacities (75°C, Copper)"
          headers={["Size", "Ampacity", "Common Use", "Notes"]}
          rows={[
            ["#14 AWG", "20A", "15A circuits", "Residential lighting"],
            ["#12 AWG", "25A", "20A circuits", "Kitchen receptacles"],
            ["#10 AWG", "35A", "30A circuits", "Dryer circuits"],
            ["#8 AWG", "50A", "40A circuits", "Range circuits"],
            ["#6 AWG", "65A", "50A circuits", "Subpanel feeders"],
            ["#4 AWG", "85A", "60A circuits", "Service conductors"]
          ]}
        />

        <RuleBox>
          <strong>Conductor Selection Rule:</strong> Always size conductors for the load and protect them 
          with appropriate overcurrent protection. Don't undersize conductors—they'll overheat and cause fires.
        </RuleBox>

        <CodeBox>
          <strong>NEC 310.15(A)(1):</strong> "Ampacities for conductors rated 0 to 2000 volts shall be 
          as specified in the ampacity tables of 310.15(B) through 310.15(G)."
        </CodeBox>
      </section>

      <hr className={`border-white/10 my-8 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

            {/* 📝 Quiz */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            15-Question Check
          </h2>
        </div>
        
        <p className="text-white/80 mb-6">
          Tap "Check Answer." Learn why. Move on. Don't overthink.
        </p>
        
        <div className="space-y-6">
          {quiz.map((q) => (
            <div key={q.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-white font-semibold text-lg mb-4">
                {q.id}. {q.stem}
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {q.choices.map((c) => (
                  <label key={c.key} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white/90 hover:border-yellow-400/40 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer">
                    <input type="radio" name={`q-${q.id}`} onChange={() => {}} className="accent-yellow-400" />
                    <span className="font-mono text-yellow-300 font-bold">{c.key}</span>
                    <span>{c.text}</span>
                  </label>
                ))}
              </div>
              
              <button 
                onClick={() => toggle(q.id)} 
                className="inline-flex items-center justify-center rounded-lg bg-green-500 text-black font-bold px-6 py-3 hover:bg-green-400 hover:scale-105 transition-all duration-200"
              >
                Check Answer
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
      <div className={`mx-auto max-w-5xl flex items-center justify-between mt-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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