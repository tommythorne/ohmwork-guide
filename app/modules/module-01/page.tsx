"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Enhanced highlight helpers with electrician grit
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-red-400 text-xl">⚠️</span>
      <span className="font-bold text-red-400">EXAM TRAP</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const RuleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-yellow-400 text-xl">⚡️</span>
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-orange-400 text-xl">��</span>
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-blue-400 text-xl">��</span>
      <span className="font-bold text-blue-400">NEC REFERENCE</span>
    </div>
    <div className="text-white/90">{children}</div>
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
    why: "Article 100 — Definitions. Learn these cold; the exam loves definition traps.",
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
    stem: "Equipment grounding conductors must be:",
    choices: [
      { key: "A", text: "The same size as circuit conductors" },
      { key: "B", text: "Properly sized per Table 250.122" },
      { key: "C", text: "Always #12 AWG minimum" },
      { key: "D", text: "The same color as neutral conductors" },
    ],
    answer: "B",
    why: "NEC 250.122 — EGC sizing follows Table 250.122 based on OCP device rating, not conductor size.",
  },
  {
    id: 12,
    stem: "Working space depth requirements vary by:",
    choices: [
      { key: "A", text: "Equipment voltage and access type" },
      { key: "B", text: "Room temperature only" },
      { key: "C", text: "Contractor preference" },
      { key: "D", text: "Building height" },
    ],
    answer: "A",
    why: "NEC 110.26(A)(1) — Working space depth depends on voltage and whether access is from one side or both sides.",
  },
  {
    id: 13,
    stem: "The term 'Approved' means:",
    choices: [
      { key: "A", text: "Listed by UL" },
      { key: "B", text: "Acceptable to the AHJ" },
      { key: "C", text: "Manufacturer recommended" },
      { key: "D", text: "Cheapest option available" },
    ],
    answer: "B",
    why: "NEC definition: 'Approved' means acceptable to the authority having jurisdiction. This is subjective and varies by location.",
  },
  {
    id: 14,
    stem: "Equipment must be 'Identified' for its intended use. This means:",
    choices: [
      { key: "A", text: "It has a serial number" },
      { key: "B", text: "It's suitable for the specific purpose" },
      { key: "C", text: "It's made in the USA" },
      { key: "D", text: "It's the most expensive option" },
    ],
    answer: "B",
    why: "NEC definition: 'Identified' means suitable for the specific purpose, use, and environment in which it is installed.",
  },
  {
    id: 15,
    stem: "Working space access requirements ensure:",
    choices: [
      { key: "A", text: "Equipment can be reached for operation and maintenance" },
      { key: "B", text: "Tools can be stored nearby" },
      { key: "C", text: "Inspectors can easily see the equipment" },
      { key: "D", text: "The room looks organized" },
    ],
    answer: "A",
    why: "NEC 110.26(A)(2) — Equipment must be accessible for operation and maintenance without requiring portable ladders or removal of obstacles.",
  },
];

export default function Ch1General() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (id: number) =>
    setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <main className="min-h-screen bg-black text-white px-4 py-6 md:px-8 md:py-12">
      {/* Top Bar */}
      <div className="mx-auto max-w-5xl flex items-center justify-between gap-4 mb-6">
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
      <div className="mx-auto max-w-5xl text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
          Chapter 1 — General
        </h1>
        <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          <HL>Foundation of the Code</HL>: purpose, scope, definitions, and the general rules that keep the
          jobsite from turning into a fireworks show. You nail this, the rest of the book gets easier.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-white/80">Chapter 1 of 9</span>
          </div>
        </div>
      </div>

      <hr className="border-white/10 my-8" />

      {/* ⚡️ Article 90 — Purpose, Scope, How the NEC Works */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 90 — Purpose, Scope, How This Beast Operates
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed">
          <p>
            The NEC's mission isn't "perfect systems." It's <HL>practical safeguarding</HL> of people and
            property (<span className="italic text-yellow-400">90.1(A)</span>). Translation: minimize hazard. Period.
          </p>
          <p>
            The Code is <HL>not a design manual</HL> (<span className="italic text-yellow-400">90.1(B)</span>). You still follow
            <HL> manufacturer instructions</HL>, standards, and good sense. The NEC sets the safety floor.
          </p>
          <p>
            <HL>Enforcement</HL> belongs to the <HL>AHJ</HL> (Authority Having Jurisdiction). They interpret, you comply.
          </p>
          <p>
            Utility stuff? Mostly <HL>outside</HL> NEC scope. Your work? Squarely inside.
          </p>
          <p>
            <HL>90.1(D)</HL>: The Code is <span className="italic">not</span> a training manual. You're expected to know your craft.
          </p>
          <p>
            <HL>90.1(E)</HL>: The NEC is <span className="italic">not</span> a product standard. UL, CSA, and others handle that.
          </p>
        </div>

        <RuleBox>
          <strong>90.1(A):</strong> The NEC exists to prevent people from getting fried and buildings from burning down. 
          It's not about perfect systems—it's about preventing the most common ways electricity kills people.
        </RuleBox>

        <HorrorStory>
          <strong>True Story:</strong> Electrician ignored manufacturer instructions on a panel, "winged it" with the terminations. 
          Three months later, loose connections caused arcing, melted the bus, and started a fire. 
          <HL>110.3(B)</HL> exists for a reason—follow the damn instructions.
        </HorrorStory>

        {/* Enhanced Article 90 details */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">90.1(A) — Purpose</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Practical safeguarding</HL> means reasonable protection, not bulletproof systems. The Code prevents 
              the most common hazards that cause injury or property damage. Think "don't kill people" not "perfect performance."
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">90.1(B) — Scope</h3>
            <p className="text-white/85 leading-relaxed">
              Covers <HL>electrical conductors and equipment</HL> installed in or on buildings, structures, and premises. 
              Does NOT cover utility distribution, ships, aircraft, or automotive. Your jurisdiction, your rules.
            </p>
          </div>
        </div>

        {/* Additional Article 90 sections */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">90.1(C) — Intended Use</h3>
          <p className="text-white/90 leading-relaxed">
            The NEC is intended for use by those who design, install, and inspect electrical systems. This includes 
            electricians, engineers, inspectors, and contractors. It's not written for homeowners or DIY enthusiasts.
          </p>
          
          <h3 className="text-xl font-bold text-yellow-400">90.1(D) — Training</h3>
          <p className="text-white/90 leading-relaxed">
            The Code assumes you know your trade. It doesn't teach you how to wire a receptacle or install a panel. 
            You're expected to have the basic skills—the NEC just tells you the safety rules.
          </p>

          <h3 className="text-xl font-bold text-yellow-400">90.1(E) — Product Standards</h3>
          <p className="text-white/90 leading-relaxed">
            The NEC doesn't test products. That's what UL, CSA, ETL, and other testing laboratories do. The NEC 
            just says "use listed equipment" and leaves the testing to the experts.
          </p>
        </div>

        <CodeBox>
          <strong>NEC 90.1(A):</strong> "The purpose of this Code is the practical safeguarding of persons and property 
          from hazards arising from the use of electricity."
        </CodeBox>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 🔧 Article 100 — Definitions */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 100 — Definitions
          </h2>
        </div>
        
        <p className="text-lg text-white/90 mb-6 leading-relaxed">
          The exam weaponizes definitions. Learn these like your job depends on it—because it does. 
          They'll play word games and trap you with subtle differences.
        </p>

        <WarningBox>
          <strong>EXAM TRAP:</strong> The test loves to mix up "Grounded" vs "Grounding" vs "Bonding." 
          They sound similar but mean completely different things. Don't fall for it.
        </WarningBox>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Grounded Conductor</h3>
            <p className="text-white/85 leading-relaxed">
              A system conductor that is <HL>intentionally grounded</HL>. Often the neutral. Don't treat it like harmless—it can still kill you.
            </p>
            <div className="mt-3 text-sm text-white/60">
              <strong>Think:</strong> The white wire that goes back to the transformer
            </div>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Equipment Grounding Conductor (EGC)</h3>
            <p className="text-white/85 leading-relaxed">
              The conductor that <HL>bonds equipment</HL> to ground. Carries <span className="italic text-yellow-400">fault</span> current. Saves lives.
            </p>
            <div className="mt-3 text-sm text-white/60">
              <strong>Think:</strong> The green/bare wire that prevents shocks
            </div>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Bonding</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Connecting metallic parts</HL> to establish electrical continuity and conductivity. You're controlling potential.
            </p>
            <div className="mt-3 text-sm text-white/60">
              <strong>Think:</strong> Making sure all metal parts are at the same voltage
            </div>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Listed & Labeled</h3>
            <p className="text-white/85 leading-relaxed">
              Evaluated by a qualified lab, and must be installed <HL>per listing and labeling</HL> (110.3(B)).
            </p>
            <div className="mt-3 text-sm text-white/60">
              <strong>Think:</strong> UL tested and approved for specific use
            </div>
          </div>
        </div>

        {/* Additional critical definitions */}
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            — <HL>Accessible (as applied to equipment)</HL>: Capable of being reached without removing obstacles or using portable ladders.
          </p>
          <p>
            — <HL>Accessible (as applied to wiring methods)</HL>: Capable of being removed or exposed without damaging the building structure.
          </p>
          <p>
            — <HL>Concealed</HL>: Rendered inaccessible by the structure or finish of the building.
          </p>
          <p>
            — <HL>Exposed</HL>: Not concealed, as applied to wiring methods.
          </p>
        </div>

        {/* Expanded definitions section */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">More Critical Definitions</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Approved</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <HL>Acceptable to the AHJ</HL>. This is subjective and varies by jurisdiction. When in doubt, ask.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Identified</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <HL>Suitable for the specific purpose</HL>. Equipment must be identified for its intended use.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Readily Accessible</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <HL>Capable of being reached quickly</HL> for operation, renewal, or inspections without requiring 
                those to whom ready access is requisite to climb over or remove obstacles.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Service Equipment</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                The <HL>necessary equipment</HL>, usually consisting of a circuit breaker or switch and fuses, 
                and their accessories, connected to the load end of service conductors.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-yellow-400">Voltage Definitions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Low Voltage</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <HL>1000 volts or less</HL>. This covers most residential and commercial work.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Medium Voltage</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <HL>1001 to 35,000 volts</HL>. Industrial and utility applications.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">High Voltage</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <HL>35,001 volts and above</HL>. Transmission and distribution systems.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Extra-Low Voltage</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <HL>30 volts or less</HL>. Control circuits, doorbells, thermostats.
              </p>
            </div>
          </div>
        </div>

        <CodeBox>
          <strong>NEC 100:</strong> "Definitions are essential to the proper application of this Code. The definitions 
          in this article shall apply wherever the terms are used throughout this Code."
        </CodeBox>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 🛠️ Article 110 — General Requirements */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🛠️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 110 — General Requirements
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
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
          <p>
            — <HL>110.14(A)</HL>: Terminations must be identified for the conductor material and insulation type.
          </p>
          <p>
            — <HL>110.14(B)</HL>: Temperature limitations of conductors must be considered for terminations.
          </p>
        </div>

        <RuleBox>
          <strong>110.3(B):</strong> This is your golden rule. If the manufacturer says "install it this way," 
          you install it that way. The AHJ will fail you if you don't. No exceptions.
        </RuleBox>

        <HorrorStory>
          <strong>True Story:</strong> Electrician used aluminum lugs for copper conductors because "they looked the same." 
          Three months later, the dissimilar metals caused corrosion, loose connections, and a panel fire. 
          <HL>110.14(A)</HL> exists for a reason—match your materials properly.
        </HorrorStory>

        {/* Enhanced working space details */}
        <div className="mt-8 mb-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Working Space Requirements (110.26)</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
              <div className="text-center mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 text-xl font-bold">W</span>
                </div>
              </div>
              <h4 className="font-bold text-white text-center mb-2">Width</h4>
              <p className="text-white/85 text-center text-sm leading-relaxed">
                <HL>30 inches minimum</HL> or the width of the equipment, whichever is greater.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
              <div className="text-center mb-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-400 text-xl font-bold">D</span>
                </div>
              </div>
              <h4 className="font-bold text-white text-center mb-2">Depth</h4>
              <p className="text-white/85 text-center text-sm leading-relaxed">
                <HL>3 feet minimum</HL> for 0-150V<br/>
                <HL>4 feet for 151-600V</HL><br/>
                <HL>5 feet for 601V+</HL>
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
              <div className="text-center mb-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-400 text-xl font-bold">H</span>
                </div>
              </div>
              <h4 className="font-bold text-white text-center mb-2">Height</h4>
              <p className="text-white/85 text-center text-sm leading-relaxed">
                <HL>6.5 feet minimum</HL> or the height of the equipment, whichever is greater.
              </p>
            </div>
          </div>
        </div>

        {/* Working space access requirements */}
        <div className="mt-8 mb-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Working Space Access (110.26(A)(2))</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Required Access</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                Equipment must be accessible for <HL>operation and maintenance</HL> without requiring portable ladders 
                or removal of obstacles. This means you can reach it safely during normal operation.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Prohibited Access</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                Equipment cannot be installed behind <HL>locked doors</HL> or require <HL>special tools</HL> to access 
                unless specifically permitted by the Code.
              </p>
            </div>
          </div>
        </div>

        {/* Terminations and temperature ratings */}
        <div className="mt-8 mb-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Terminations and Temperature Ratings (110.14)</h3>
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              <HL>110.14(A):</HL> Terminations must be identified for the conductor material (copper or aluminum) 
              and insulation type. Don't mix and match—it's a recipe for disaster.
            </p>
            <p>
              <HL>110.14(B):</HL> Temperature limitations of conductors must be considered for terminations. 
              If you're using 90°C wire, make sure your terminations can handle it.
            </p>
            <p>
              <HL>110.14(C):</HL> Conductors must be spliced or terminated with listed devices. No wire nuts 
              on high-voltage circuits, no aluminum on copper-only lugs.
            </p>
          </div>
        </div>

        {/* Visual card row */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
            <div className="text-center mb-3">
              <span className="text-3xl">🏷️</span>
            </div>
            <p className="text-white/85 text-center leading-relaxed">
              <HL>Label it</HL> so the next human doesn't guess at 2AM.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
            <div className="text-center mb-3">
              <span className="text-3xl">��</span>
            </div>
            <p className="text-white/85 text-center leading-relaxed">
              <HL>Working space</HL> — not storage. Keep it clear.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
            <div className="text-center mb-3">
              <span className="text-3xl">✅</span>
            </div>
            <p className="text-white/85 text-center leading-relaxed">
              <HL>Use listed gear</HL> per its instructions. No hero builds.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 🔌 Article 200 — Use and Identification of Grounded Conductors */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 200 — Use and Identification of Grounded Conductors
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            — <HL>200.6</HL>: Grounded conductors must be identified by white or gray insulation, or by three continuous white stripes.
          </p>
          <p>
            — <HL>200.7</HL>: Use of insulation that is white or gray for other than grounded conductors is prohibited.
          </p>
          <p>
            — <HL>200.9</HL>: Polarity of connections must be observed. Don't reverse hot and neutral.
          </p>
          <p>
            — <HL>200.10</HL>: Identification of terminals. Grounded conductor terminals must be identified.
          </p>
        </div>

        <WarningBox>
          <strong>EXAM TRAP:</strong> The test loves to ask about conductor identification. Remember: 
          <HL>white/gray = grounded conductor</HL>. Always. No exceptions.
        </WarningBox>

        {/* Grounded conductor identification details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">200.6 — Identification</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>White or gray</HL> insulation, or <HL>three continuous white stripes</HL> on other than green insulation. 
              This prevents confusion and ensures proper connections.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">200.7 — Prohibited Use</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>White or gray insulation</HL> cannot be used for ungrounded conductors. This prevents 
              misidentification and potential hazards.
            </p>
          </div>
        </div>

        {/* Additional Article 200 sections */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">200.9 — Polarity of Connections</h3>
          <p className="text-white/90 leading-relaxed">
            Polarity must be observed. This means the grounded conductor (neutral) must be connected to the 
            grounded side of the system, and the ungrounded conductor (hot) must be connected to the ungrounded side. 
            Reversing them can cause equipment damage and safety hazards.
          </p>

          <h3 className="text-xl font-bold text-yellow-400">200.10 — Identification of Terminals</h3>
          <p className="text-white/90 leading-relaxed">
            Terminals for grounded conductors must be identified. This is usually done with a white or silver 
            finish, or by marking them with "W" or "N" for neutral. Don't guess—look for the identification.
          </p>

          <h3 className="text-xl font-bold text-yellow-400">200.11 — Connection to Terminals</h3>
          <p className="text-white/90 leading-relaxed">
            Conductors must be connected to the correct terminals. This seems obvious, but it's a common 
            mistake that can cause serious problems. Double-check your connections.
          </p>
        </div>

        <CodeBox>
          <strong>NEC 200.6:</strong> "An insulated conductor that is intended to be used as a grounded conductor 
          shall have a continuous outer finish that is either white or gray or has three continuous white stripes."
        </CodeBox>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 🏗️ Article 250 — Grounding and Bonding (Introduction) */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏗️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 250 — Grounding and Bonding (Chapter 1 Introduction)
          </h2>
        </div>
        
        <p className="text-lg text-white/90 mb-6 leading-relaxed">
          While Article 250 is primarily in Chapter 2, Chapter 1 introduces the fundamental concepts. 
          Understanding these basics is crucial for the exam and real-world applications.
        </p>

        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            — <HL>Grounding</HL>: Connecting to earth or a conductive body that extends the ground connection.
          </p>
          <p>
            — <HL>Bonding</HL>: Connecting metallic parts to establish electrical continuity and conductivity.
          </p>
          <p>
            — <HL>Equipment Grounding Conductor (EGC)</HL>: The conductor that bonds equipment to ground.
          </p>
          <p>
            — <HL>Grounding Electrode Conductor (GEC)</HL>: The conductor that connects the grounding electrode to the service.
          </p>
        </div>

        <RuleBox>
          <strong>Grounding vs Bonding:</strong> Grounding connects to earth, bonding connects metal parts together. 
          They work together but are different concepts. Don't confuse them on the exam.
        </RuleBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Grounding</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Connecting to earth</HL> or a conductive body that extends the ground connection. This provides 
              a reference point and helps dissipate fault current.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Bonding</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Connecting metallic parts</HL> together to establish electrical continuity. This ensures all 
              metal parts are at the same potential and prevents shock hazards.
            </p>
          </div>
        </div>

        <HorrorStory>
          <strong>True Story:</strong> Electrician didn't bond the metal conduit to the panel. When a fault 