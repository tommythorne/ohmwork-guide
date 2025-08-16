"use client";

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
      <span className="text-yellow-400 text-xl">📏</span>
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-orange-400 text-xl">🔥</span>
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-blue-400 text-xl">📘</span>
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
          {/* Background Image - IMAGE 1: NEC Code Book */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/module-01/m01-01.jpg"
              alt="NEC codebook and electrical standards documentation"
              fill
              className="object-cover"
              priority
             width={1200} height={800}/>
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

      {/* ⚡ Article 90 — Purpose, Scope, How the NEC Works */}
      {/* 📝 Quiz */}


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
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Chapter 1 Summary</h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
            You've covered the foundation of the NEC. These general requirements apply to <HL>everything</HL> that follows. 
            Master these concepts, and the rest of the Code becomes much clearer.
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-yellow-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-white mb-2">Purpose & Scope</h3>
            <p className="text-white/80 text-sm">
              Practical safeguarding, not perfect systems. AHJ enforces, you comply.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-white mb-2">Definitions</h3>
            <p className="text-white/80 text-sm">
              Learn them cold. The exam weaponizes definitions to trip you up.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📖</span>
            </div>
            <h3 className="font-bold text-white mb-2">General Requirements</h3>
            <p className="text-white/80 text-sm">
              Working space, terminations, listing requirements. Safety first.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-yellow-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-white mb-2">Conductor Rules</h3>
            <p className="text-white/80 text-sm">
              Color coding, identification, sizing. White/gray = neutral only.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="font-bold text-white mb-2">Circuit Basics</h3>
            <p className="text-white/80 text-sm">
              Branch circuits, feeders, services. Know the hierarchy and rules.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-yellow-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-white mb-2">Protection & Grounding</h3>
            <p className="text-white/80 text-sm">
              Overcurrent protection, grounding, bonding. Safety through proper design.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      

{/* 🧠 Interactive Quiz Section */}
<section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="flex items-center gap-3 mb-6">
    <Zap className="w-8 h-8 text-yellow-400" />
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">15-Question Check</h2>
  </div>
  <p className="text-white/80 mb-6 text-lg">Select your answers for all questions, then press <strong>Submit</strong> to see your score and explanations. You need <strong>70%</strong> to pass. Use <em>Reset</em> to try again.</p>
  <Quiz questions={quiz} />
</section>

      <footer className={`mx-auto max-w-5xl mt-16 transition-all duration-1000 delay-3100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-white/[0.03] rounded-xl border border-white/20">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-2">Ready for More?</h3>
            <p className="text-white/70 text-sm">
              Chapter 1 down. The foundation is set. Time to build on it.
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
              href="/modules/module-02"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Next: Chapter 2 →
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-8 text-white/50 text-sm">
          <p>OhmWork Electrician Survival Guide • NEC 2017 • Chapter 1 Complete</p>
        </div>
      </footer>
    </main>
  );
}

