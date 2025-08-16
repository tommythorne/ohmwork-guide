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

  // Enhanced quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, "A" | "B" | "C" | "D" | null>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // Quiz functions
  const selectAnswer = (questionId: number, answer: "A" | "B" | "C" | "D") => {
    if (!quizSubmitted) {
      setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
    }
  };

  const submitQuiz = () => {
    let correctCount = 0;
    quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });
    
    const percentage = Math.round((correctCount / quiz.length) * 100);
    setScore(percentage);
    setQuizSubmitted(true);
    setShowScore(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setShowScore(false);
    setScore(0);
  };

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
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
              alt="NEC codebook and electrical standards documentation"
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
            {/* IMAGE 2: Electrical Safety Equipment */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Insulated tools and PPE for electrical work"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Safety First: Always</p>
              </div>
            </div>
            
            {/* IMAGE 3: Electrical Standards Documentation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Electrical safety standards and compliance documentation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Standards & Compliance</p>
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
          {/* IMAGE 4: Grounded Conductor (Neutral) */}
          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                  alt="Grounded conductor (neutral wire) identification and color coding"
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

          {/* IMAGE 5: Equipment Grounding Conductor */}
          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                  alt="Equipment grounding conductor and green wire identification"
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

          {/* IMAGE 6: Bonding Connection */}
          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                  alt="Bonding jumper and equipment bonding connection"
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

          {/* IMAGE 7: Listed Equipment */}
          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
                  alt="UL listed equipment with compliance labels and certification"
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
            {/* IMAGE 8: Working Space Clearance */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Electrical panel with proper working space clearance and clear access"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Working Space: Keep It Clear</p>
              </div>
            </div>
            
            {/* IMAGE 9: Panel Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Professional breaker panel installation with proper wire management"
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
          <strong>True Story:</strong> A crew crammed a new panel in a tight closet, ignoring clearance rules. 
          When a breaker tripped, the tech couldn't even open the panel cover all the way. 
          The only way to fix it was shutting power to the entire floor. 
          <HL>110.26</HL> exists for a reason—working space isn't optional.
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
              — <HL>200.6</HL>: Grounded conductors must be <HL>white or gray</HL> (or three white stripes on any color except green).
            </p>
            <p>
              — <HL>200.7</HL>: Don't use white/gray for anything except grounded conductors. 
              If you need a hot wire, tape it black or red.
            </p>
            <p>
              — <HL>200.9</HL>: Grounded conductors must be <HL>identified</HL> at every point where the conductor can be disconnected.
            </p>
            <p>
              — <HL>200.10</HL>: Identification must be <HL>permanent</HL> and <HL>durable</HL>.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 10: Wire Color Identification */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Color-coded electrical wires showing white neutral and colored hot wires"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Wire Color Coding: White = Neutral</p>
              </div>
            </div>
            
            {/* IMAGE 11: Conductor Identification */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
                alt="Properly identified conductors with labels and color coding"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Clear Identification Required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Code Reference Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">NEC Wire Color Requirements</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Grounded (Neutral)</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-400"></div>
                  <span className="text-white/90">White</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-gray-400"></div>
                  <span className="text-white/90">Gray</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-gray-400"></div>
                  <span className="text-white/90">Blue with 3 White Stripes</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Ungrounded (Hot)</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-400"></div>
                  <span className="text-white/90">Black</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-gray-400"></div>
                  <span className="text-white/90">Red</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-gray-400"></div>
                  <span className="text-white/90">Blue (when not neutral)</span>
                </div>
              </div>
            </div>
          </div>
        </ChartBox>

        {/* Rule Box */}
        <RuleBox>
          <strong>RULE OF THUMB:</strong> White and gray are <HL>sacred</HL> for neutrals only. 
          If you need a hot wire and only have white, tape it black or red at both ends. 
          The inspector will check this.
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

      {/* 🔌 Article 210 — Branch Circuits */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 210 — Branch Circuits
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>210.11</HL>: Branch circuits must be sized for the load. No 20A breakers on 14 AWG wire.
            </p>
            <p>
              — <HL>210.12</HL>: AFCI protection required in dwelling units for most circuits.
            </p>
            <p>
              — <HL>210.19</HL>: Conductors must be sized for the load plus 125% for continuous loads.
            </p>
            <p>
              — <HL>210.23</HL>: Permissible loads on branch circuits—don't overload them.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 12: Branch Circuit Panel */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Residential electrical panel with branch circuit breakers and proper labeling"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Branch Circuit Protection</p>
              </div>
            </div>
            
            {/* IMAGE 13: AFCI Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="AFCI circuit breaker with test button and indicator light"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">AFCI Protection Required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Circuit Loading Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Branch Circuit Loading Rules</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Circuit Type</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Max Load</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Continuous Load</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">15A General</td>
                  <td className="p-3">15A</td>
                  <td className="p-3 text-green-400">12A (80%)</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">20A General</td>
                  <td className="p-3">20A</td>
                  <td className="p-3 text-green-400">16A (80%)</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">30A Appliance</td>
                  <td className="p-3">30A</td>
                  <td className="p-3 text-green-400">24A (80%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> Continuous loads require 125% sizing. A 20A circuit can only handle 16A continuously. 
          The exam loves to ask about continuous vs. non-continuous loads.
        </WarningBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 215 — Feeders */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 215 — Feeders
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>215.2</HL>: Feeders must be sized for the load plus 125% for continuous loads.
            </p>
            <p>
              — <HL>215.3</HL>: Overcurrent protection must be sized for the conductor ampacity.
            </p>
            <p>
              — <HL>215.5</HL>: Feeders must be identified at the point of termination.
            </p>
            <p>
              — <HL>215.12</HL>: Ground-fault protection required for certain feeders.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 14: Feeder Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Main feeder conductors and service entrance equipment installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Main Feeder Installation</p>
              </div>
            </div>
            
            {/* IMAGE 15: Feeder Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
                alt="Feeder overcurrent protection devices and main disconnect switches"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Feeder Protection Devices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feeder Sizing Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Feeder Sizing Requirements</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Non-Continuous Loads</h5>
              <p className="text-white/85 text-sm">
                Size conductors for 100% of the calculated load. No derating required.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Continuous Loads</h5>
              <p className="text-white/85 text-sm">
                Size conductors for 125% of the calculated load. This accounts for heat buildup.
              </p>
            </div>
          </div>
        </ChartBox>

        {/* Horror Story */}
        <HorrorStory>
          <strong>True Story:</strong> A feeder was sized right at the calculated load—no margin. 
          Problem? It was a continuous load. After a few hours under peak demand, the insulation baked, 
          conductors sagged, and the panel lit up. 
          <HL>215.2</HL> exists for a reason—continuous loads need extra capacity.
        </HorrorStory>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 225 — Outside Branch Circuits and Feeders */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 225 — Outside Branch Circuits and Feeders
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>225.6</HL>: Conductors must be suitable for outdoor use. No indoor cable outside.
            </p>
            <p>
              — <HL>225.10</HL>: Overcurrent protection must be accessible and located at the point of supply.
            </p>
            <p>
              — <HL>225.18</HL>: Clearances from buildings, structures, and other conductors must be maintained.
            </p>
            <p>
              — <HL>225.30</HL>: Disconnecting means required for outside feeders and branch circuits.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 16: Outdoor Wiring Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Outdoor electrical wiring with proper weatherproof enclosures and outdoor-rated materials"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Outdoor Wiring: Weatherproof Required</p>
              </div>
            </div>
            
            {/* IMAGE 17: Clearance Requirements */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Proper clearance maintained between electrical conductors and building structures"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Maintain Proper Clearances</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horror Story */}
        <HorrorStory>
          <strong>True Story:</strong> Someone ran Romex (NM cable) to a backyard light because it was cheaper. 
          After one summer of sun and rain, the jacket split, water got in, and the circuit shorted. 
          The fire department showed up before anyone realized what happened. 
          <HL>225.6</HL> exists for a reason—only use cable rated for the environment.
        </HorrorStory>
      </section>

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 230 — Services */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 230 — Services
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>230.24</HL>: Service conductors must have adequate mechanical strength and be supported properly.
            </p>
            <p>
              — <HL>230.28</HL>: Service equipment must be suitable for the intended use and properly installed.
            </p>
            <p>
              — <HL>230.70</HL>: Service disconnecting means must be readily accessible and properly marked.
            </p>
            <p>
              — <HL>230.95</HL>: Ground-fault protection required for certain services.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 18: Service Entrance */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Main service entrance with meter and disconnect switch installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Service Entrance Equipment</p>
              </div>
            </div>
            
            {/* IMAGE 19: Service Disconnect */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
                alt="Main service disconnect switch with proper labeling and accessibility"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Service Disconnect: Must Be Accessible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Requirements Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Service Installation Requirements</h4>
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
                  <td className="p-3 font-semibold">Mechanical Strength</td>
                  <td className="p-3">230.24</td>
                  <td className="p-3 text-green-400">Support properly</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Equipment Rating</td>
                  <td className="p-3">230.28</td>
                  <td className="p-3 text-green-400">Suitable for use</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Disconnect Access</td>
                  <td className="p-3">230.70</td>
                  <td className="p-3 text-green-400">Readily accessible</td>
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

      {/* Article 240 — Overcurrent Protection */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 240 — Overcurrent Protection
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>240.4</HL>: Conductors must be protected against overcurrent in accordance with their ampacity.
            </p>
            <p>
              — <HL>240.6</HL>: Standard ampere ratings for fuses and circuit breakers.
            </p>
            <p>
              — <HL>240.21</HL>: Location of overcurrent protection devices.
            </p>
            <p>
              — <HL>240.24</HL>: Overcurrent protection devices must be accessible and properly located.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 20: Overcurrent Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Circuit breakers and fuses providing overcurrent protection in electrical panel"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Overcurrent Protection Devices</p>
              </div>
            </div>
            
            {/* IMAGE 21: Protection Coordination */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Proper coordination of overcurrent protection devices in electrical system"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Protection Coordination</p>
              </div>
            </div>
          </div>
        </div>

        {/* Protection Sizing Chart */}
        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Overcurrent Protection Sizing</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Conductor Protection</h5>
              <p className="text-white/85 text-sm">
                Protection device must not exceed conductor ampacity. Exception: Next higher standard rating.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Motor Protection</h5>
              <p className="text-white/85 text-sm">
                Motor circuits have special protection rules. Don't use general circuit rules.
              </p>
            </div>
          </div>
        </ChartBox>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> The exam loves to ask about protection device sizing. 
          Remember: protection device rating ≤ conductor ampacity (with exceptions for next higher standard rating).
        </WarningBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 250 — Grounding and Bonding */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 250 — Grounding and Bonding
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>250.4</HL>: Grounding and bonding for safety and proper operation of overcurrent devices.
            </p>
            <p>
              — <HL>250.24</HL>: Service equipment must be grounded to the service neutral.
            </p>
            <p>
              — <HL>250.50</HL>: All grounding electrodes must be bonded together.
            </p>
            <p>
              — <HL>250.118</HL>: Equipment grounding conductors must be identified and properly sized.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 22: Grounding System */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Complete grounding system with ground rods and bonding conductors"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Complete Grounding System</p>
              </div>
            </div>
            
            {/* IMAGE 23: Bonding Connections */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
                alt="Proper bonding connections between metallic parts and equipment"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Bonding Connections</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grounding Requirements Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Grounding and Bonding Requirements</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Component</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Requirement</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Grounding Electrodes</td>
                  <td className="p-3">Must be bonded together</td>
                  <td className="p-3 text-green-400">Common reference</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Equipment Grounding</td>
                  <td className="p-3">Must be identified</td>
                  <td className="p-3 text-green-400">Fault current path</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Service Neutral</td>
                  <td className="p-3">Must be grounded</td>
                  <td className="p-3 text-green-400">System reference</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        {/* Rule Box */}
        <RuleBox>
          <strong>RULE OF THUMB:</strong> Grounding provides a reference point, bonding provides a fault current path. 
          Both are essential for safety. The exam will test your understanding of the difference.
        </RuleBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🔌 Article 300 — Wiring Methods */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 300 — Wiring Methods
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>300.3</HL>: Conductors of the same circuit must be in the same raceway, cable, or enclosure.
            </p>
            <p>
              — <HL>300.4</HL>: Protection against physical damage required where conductors are subject to damage.
            </p>
            <p>
              — <HL>300.5</HL>: Underground installations must be protected against damage and properly buried.
            </p>
            <p>
              — <HL>300.11</HL>: Raceways and cables must be securely fastened and supported.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 24: Raceway Installation */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Proper raceway installation with secure fastening and support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Proper Raceway Installation</p>
              </div>
            </div>
            
            {/* IMAGE 25: Underground Protection */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Underground electrical installation with proper protection and burial depth"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Underground Protection Required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wiring Methods Table */}
        <DataTable>
          <h4 className="font-bold text-white mb-4">Common Wiring Methods</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-3 text-yellow-400 font-bold">Method</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Use</th>
                  <th className="text-left p-3 text-yellow-400 font-bold">Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">EMT</td>
                  <td className="p-3">Indoor, dry locations</td>
                  <td className="p-3 text-green-400">Not for wet locations</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">RMC</td>
                  <td className="p-3">Hazardous locations</td>
                  <td className="p-3 text-green-400">Expensive but robust</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">PVC</td>
                  <td className="p-3">Underground, wet</td>
                  <td className="p-3 text-green-400">UV sensitive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* ⚡ Article 310 — Conductors for General Wiring */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 310 — Conductors for General Wiring
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>310.15</HL>: Ampacity tables determine conductor sizing based on insulation type and ambient temperature.
            </p>
            <p>
              — <HL>310.16</HL>: Ampacity adjustment factors for more than three current-carrying conductors in a raceway.
            </p>
            <p>
              — <HL>310.17</HL>: Ampacity for conductors in free air (not in raceways).
            </p>
            <p>
              — <HL>310.19</HL>: Ampacity for conductors in parallel installations.
            </p>
          </div>
          
          {/* Right Column - Visual Examples */}
          <div className="space-y-4">
            {/* IMAGE 26: Conductor Ampacity */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                alt="Conductor ampacity tables and temperature rating considerations"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Conductor Ampacity Tables</p>
              </div>
            </div>
            
            {/* IMAGE 27: Parallel Conductors */}
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
                alt="Parallel conductor installation with proper sizing and termination"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Parallel Conductor Installation</p>
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
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Conductor Count Factors</h5>
              <p className="text-white/85 text-sm">
                More than three current-carrying conductors in a raceway require derating. See Table 310.15(B)(3)(a).
              </p>
            </div>
          </div>
        </ChartBox>

        {/* Warning Box */}
        <WarningBox>
          <strong>EXAM TRAP:</strong> The exam loves ampacity questions. Remember: temperature affects ampacity, 
          and more than three conductors in a raceway requires derating. Always check the tables.
        </WarningBox>
      </section>

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-2700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* 🧠 Interactive Quiz Section */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-2800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            🧠 Test Your Knowledge
          </h2>
          <p className="text-white/80 text-lg">
            Time to see if you've been paying attention. 15 questions covering everything we just covered.
          </p>
        </div>

        {/* Quiz Questions */}
        <div className="space-y-6 mb-8">
          {quiz.map((q) => (
            <div key={q.id} className="bg-white/[0.03] rounded-xl border border-white/20 p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Question {q.id}: {q.stem}
                </h3>
              </div>
              
              {/* Multiple Choice Options */}
              <div className="grid gap-3 mb-4">
                {q.choices.map((choice) => {
                  const isSelected = selectedAnswers[q.id] === choice.key;
                  const isCorrect = choice.key === q.answer;
                  const isWrong = quizSubmitted && isSelected && !isCorrect;
                  
                  return (
                    <button
                      key={choice.key}
                      onClick={() => selectAnswer(q.id, choice.key)}
                      disabled={quizSubmitted}
                      className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                        isSelected && !quizSubmitted
                          ? "border-yellow-400 bg-yellow-400/20"
                          : isCorrect && quizSubmitted
                          ? "border-green-500 bg-green-500/20"
                          : isWrong
                          ? "border-red-500 bg-red-500/20"
                          : "border-white/20 hover:border-white/40 hover:bg-white/[0.02]"
                      } ${quizSubmitted ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`font-semibold text-lg ${
                            isSelected && !quizSubmitted
                              ? "text-yellow-400"
                              : isCorrect && quizSubmitted
                              ? "text-green-400"
                              : isWrong
                              ? "text-red-400"
                              : "text-yellow-400"
                          }`}>
                            {choice.key}.
                          </span>
                          <span className="text-white/90">{choice.text}</span>
                        </div>
                        
                        {/* Answer indicators */}
                        {quizSubmitted && (
                          <div className="flex items-center gap-2">
                            {isCorrect && (
                              <span className="text-green-400 text-xl">✅</span>
                            )}
                            {isWrong && (
                              <span className="text-red-400 text-xl">❌</span>
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation for wrong answers */}
              {quizSubmitted && selectedAnswers[q.id] !== q.answer && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400 text-xl">💡</span>
                    <span className="font-bold text-red-400">NEC Explanation</span>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {q.why}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quiz Controls */}
        <div className="text-center space-y-4">
          {!quizSubmitted ? (
            <button
              onClick={submitQuiz}
              disabled={Object.keys(selectedAnswers).length < quiz.length}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                Object.keys(selectedAnswers).length < quiz.length
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-400 text-black hover:scale-105"
              }`}
            >
              Submit Answers
            </button>
          ) : (
            <div className="space-y-4">
              {/* Score Display */}
              <div className="bg-white/[0.05] rounded-xl border border-white/20 p-6 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{score}%</div>
                <p className="text-white/80">
                  {score >= 80 ? "Great job! You're getting it." : 
                   score >= 60 ? "Not bad, but room for improvement." : 
                   "Keep studying - the NEC takes time to master."}
                </p>
              </div>
              
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105"
              >
                Reset Quiz
              </button>
            </div>
          )}
        </div>
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
            �� Chapter 1 Summary
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
            You've covered the foundation of the NEC. These general requirements apply to <HL>everything</HL> that follows. 
            Master these concepts, and the rest of the Code becomes much clearer.
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-white mb-2">Purpose & Scope</h3>
            <p className="text-white/80 text-sm">
              Practical safeguarding, not perfect systems. AHJ enforces, you comply.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl"></span>
            </div>
            <h3 className="font-bold text-white mb-2">Definitions</h3>
            <p className="text-white/80 text-sm">
              Learn them cold. The exam weaponizes definitions to trip you up.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="font-bold text-white mb-2">General Requirements</h3>
            <p className="text-white/80 text-sm">
              Working space, terminations, listing requirements. Safety first.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-white mb-2">Conductor Rules</h3>
            <p className="text-white/80 text-sm">
              Color coding, identification, sizing. White/gray = neutral only.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl"></span>
            </div>
            <h3 className="font-bold text-white mb-2">Circuit Basics</h3>
            <p className="text-white/80 text-sm">
              Branch circuits, feeders, services. Know the hierarchy and rules.
            </p>
          </div>
          
          <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-white mb-2">Protection & Grounding</h3>
            <p className="text-white/80 text-sm">
              Overcurrent protection, grounding, bonding. Safety through proper design.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
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