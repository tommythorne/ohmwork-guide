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
    stem: "Article 210 covers:",
    choices: [
      { key: "A", text: "Service equipment only" },
      { key: "B", text: "Branch circuits and feeders" },
      { key: "C", text: "High voltage systems only" },
      { key: "D", text: "Communication systems" },
    ],
    answer: "B",
    why: "Article 210 covers branch circuits and feeders for lighting and appliances. This is the foundation of electrical distribution systems.",
  },
  {
    id: 2,
    stem: "A branch circuit is defined as:",
    choices: [
      { key: "A", text: "The service entrance conductors" },
      { key: "B", text: "The circuit conductors between the final overcurrent device and the outlet" },
      { key: "C", text: "The main panel only" },
      { key: "D", text: "High voltage transmission lines" },
    ],
    answer: "B",
    why: "NEC 210.2: A branch circuit is the circuit conductors between the final overcurrent device protecting the circuit and the outlet(s).",
  },
  {
    id: 3,
    stem: "The minimum number of small appliance branch circuits in a dwelling unit kitchen is:",
    choices: [
      { key: "A", text: "One" },
      { key: "B", text: "Two" },
      { key: "C", text: "Three" },
      { key: "D", text: "Four" },
    ],
    answer: "B",
    why: "NEC 210.11(C)(1): At least two small appliance branch circuits must be provided for the receptacle outlets in the kitchen.",
  },
  {
    id: 4,
    stem: "Article 220 covers:",
    choices: [
      { key: "A", text: "Wiring methods only" },
      { key: "B", text: "Branch circuit calculations" },
      { key: "C", text: "Branch circuit calculations and feeder calculations" },
      { key: "D", text: "Service calculations only" },
    ],
    answer: "C",
    why: "Article 220 covers branch circuit, feeder, and service load calculations. This is essential for proper sizing of conductors and equipment.",
  },
  {
    id: 5,
    stem: "The general lighting load for dwelling units is calculated at:",
    choices: [
      { key: "A", text: "1 VA per square foot" },
      { key: "B", text: "2 VA per square foot" },
      { key: "C", text: "3 VA per square foot" },
      { key: "D", text: "4 VA per square foot" },
    ],
    answer: "C",
    why: "NEC 220.12: For dwelling units, the general lighting load is calculated at 3 volt-amperes per square foot.",
  },
  {
    id: 6,
    stem: "Article 225 covers:",
    choices: [
      { key: "A", text: "Indoor wiring only" },
      { key: "B", text: "Outdoor wiring only" },
      { key: "C", text: "Outdoor wiring and outside branch circuits and feeders" },
      { key: "D", text: "Service equipment only" },
    ],
    answer: "C",
    why: "Article 225 covers outside branch circuits and feeders. This includes wiring methods, clearances, and installation requirements for outdoor applications.",
  },
  {
    id: 7,
    stem: "Article 230 covers:",
    choices: [
      { key: "A", text: "Branch circuits only" },
      { key: "B", text: "Service conductors and equipment" },
      { key: "C", text: "Feeder conductors only" },
      { key: "D", text: "Communication systems" },
    ],
    answer: "B",
    why: "Article 230 covers service conductors and equipment for control and protection of services and their installation requirements.",
  },
  {
    id: 8,
    stem: "The minimum service rating for a dwelling unit is:",
    choices: [
      { key: "A", text: "60 amperes" },
      { key: "B", text: "100 amperes" },
      { key: "C", text: "150 amperes" },
      { key: "D", text: "200 amperes" },
    ],
    answer: "B",
    why: "NEC 230.79(C): The minimum service rating for a dwelling unit is 100 amperes, 3-wire.",
  },
  {
    id: 9,
    stem: "Article 240 covers:",
    choices: [
      { key: "A", text: "Wiring methods only" },
      { key: "B", text: "Overcurrent protection" },
      { key: "C", text: "Grounding only" },
      { key: "D", text: "Conductor sizing only" },
    ],
    answer: "B",
    why: "Article 240 covers overcurrent protection. This includes fuses, circuit breakers, and their application for protecting conductors and equipment.",
  },
  {
    id: 10,
    stem: "The purpose of overcurrent protection is to:",
    choices: [
      { key: "A", text: "Increase system efficiency" },
      { key: "B", text: "Protect conductors and equipment from excessive current" },
      { key: "C", text: "Reduce voltage drop" },
      { key: "D", text: "Improve power factor" },
    ],
    answer: "B",
    why: "Overcurrent protection devices protect conductors and equipment from damage due to excessive current, including overloads and short circuits.",
  },
  {
    id: 11,
    stem: "A feeder is defined as:",
    choices: [
      { key: "A", text: "The service entrance conductors" },
      { key: "B", text: "All circuit conductors between the service equipment and the final branch circuit overcurrent device" },
      { key: "C", text: "The branch circuit conductors only" },
      { key: "D", text: "The grounding electrode conductor" },
    ],
    answer: "B",
    why: "NEC 100: A feeder is all circuit conductors between the service equipment, the source of a separately derived system, or other power supply source and the final branch circuit overcurrent device.",
  },
  {
    id: 12,
    stem: "The demand factor for electric ranges in dwelling units is:",
    choices: [
      { key: "A", text: "50% for the first 10 kW" },
      { key: "B", text: "40% for the first 10 kW" },
      { key: "C", text: "30% for the first 10 kW" },
      { key: "D", text: "20% for the first 10 kW" },
    ],
    answer: "B",
    why: "NEC 220.55: The demand factor for electric ranges in dwelling units is 40% for the first 10 kW, plus 5% for each additional kW.",
  },
  {
    id: 13,
    stem: "Article 215 covers:",
    choices: [
      { key: "A", text: "Branch circuits only" },
      { key: "B", text: "Feeders" },
      { key: "C", text: "Services only" },
      { key: "D", text: "Communication systems" },
    ],
    answer: "B",
    why: "Article 215 covers feeders. This includes conductor sizing, overcurrent protection, and installation requirements for feeder circuits.",
  },
  {
    id: 14,
    stem: "The minimum conductor size for a 100-amp feeder is:",
    choices: [
      { key: "A", text: "#8 AWG copper" },
      { key: "B", text: "#6 AWG copper" },
      { key: "C", text: "#4 AWG copper" },
      { key: "D", text: "#2 AWG copper" },
    ],
    answer: "A",
    why: "Table 310.16: For 100 amperes, the minimum copper conductor size is #8 AWG at 75°C, or #6 AWG at 60°C.",
  },
  {
    id: 15,
    stem: "The purpose of a neutral conductor is to:",
    choices: [
      { key: "A", text: "Carry only fault current" },
      { key: "B", text: "Carry the unbalanced load current" },
      { key: "C", text: "Provide grounding only" },
      { key: "D", text: "Increase system voltage" },
    ],
    answer: "B",
    why: "The neutral conductor carries the unbalanced load current in a multiwire circuit. It's not intended to carry fault current.",
  },
];
  {
    id: 14,
    stem: "The minimum conductor size for a 100-amp feeder is:",
    choices: [
      { key: "A", text: "#8 AWG copper" },
      { key: "B", text: "#6 AWG copper" },
      { key: "C", text: "#4 AWG copper" },
      { key: "D", text: "#2 AWG copper" },
    ],
    answer: "A",
    why: "Table 310.16: For 100 amperes, the minimum copper conductor size is #8 AWG at 75°C, or #6 AWG at 60°C.",
  },
  {
    id: 15,
    stem: "The purpose of a neutral conductor is to:",
    choices: [
      { key: "A", text: "Carry only fault current" },
      { key: "B", text: "Carry the unbalanced load current" },
      { key: "C", text: "Provide grounding only" },
      { key: "D", text: "Increase system voltage" },
    ],
    answer: "B",
    why: "The neutral conductor carries the unbalanced load current in a multiwire circuit. It's not intended to carry fault current.",
  },
];

export default function Ch2WiringProtection() {
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
          Chapter 2 — Wiring & Protection
        </h1>
        <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          <HL>Distribution and Safety</HL>: branch circuits, feeders, services, and overcurrent protection. 
          This is where the rubber meets the road—get it wrong and things go boom.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-white/80">Chapter 2 of 9</span>
          </div>
        </div>
      </div>

      <hr className="border-white/10 my-8" />

      {/* ⚡️ Article 210 — Branch Circuits */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 210 — Branch Circuits
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed">
          <p>
            Branch circuits are the <HL>final distribution</HL> of electrical power to outlets, lighting, and equipment. 
            Think of them as the capillaries of your electrical system—they deliver power where it's needed.
          </p>
          <p>
            <HL>210.2</HL> defines a branch circuit as the circuit conductors between the final overcurrent device 
            protecting the circuit and the outlet(s). This is where your breakers connect to your receptacles.
          </p>
          <p>
            <HL>210.11</HL> requires specific branch circuits for different purposes: general lighting, small appliances, 
            laundry, and individual equipment. Don't mix them up—the inspector will fail you.
          </p>
        </div>

        <RuleBox>
          <strong>Branch Circuit Rule:</strong> Every outlet must be on a branch circuit. Every branch circuit must 
          have overcurrent protection. Every overcurrent device must protect its conductors. This is the foundation.
        </RuleBox>

        <HorrorStory>
          <strong>True Story:</strong> Electrician put kitchen receptacles on the general lighting circuit to "save money." 
          When the homeowner plugged in a coffee maker and toaster, the circuit overloaded and started a fire. 
          <HL>210.11(C)(1)</HL> exists for a reason—separate circuits for different loads.
        </HorrorStory>

        {/* Enhanced Article 210 details */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">210.11 — Branch Circuits Required</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>General lighting</HL> circuits for illumination, <HL>small appliance</HL> circuits for kitchen 
              and dining areas, <HL>laundry</HL> circuits for washing equipment, and <HL>individual</HL> circuits for specific loads.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">210.12 — Arc-Fault Circuit-Interrupter Protection</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>AFCI protection</HL> is required for most dwelling unit branch circuits. This prevents fires 
              caused by arcing faults in damaged or deteriorated wiring.
            </p>
          </div>
        </div>

        {/* Additional Article 210 sections */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">210.19 — Branch Circuit Conductors</h3>
          <p className="text-white/90 leading-relaxed">
            Branch circuit conductors must be sized to carry the load and be protected by overcurrent devices. 
            Don't undersize conductors—they'll overheat and cause fires. Don't oversize them either—that's just wasteful.
          </p>
          
          <h3 className="text-xl font-bold text-yellow-400">210.20 — Overcurrent Protection</h3>
          <p className="text-white/90 leading-relaxed">
            Branch circuits must be protected by overcurrent devices sized to protect the conductors. The breaker 
            or fuse rating must not exceed the conductor ampacity. This is basic electrical safety.
          </p>

          <h3 className="text-xl font-bold text-yellow-400">210.21 — Outlet Devices</h3>
          <p className="text-white/90 leading-relaxed">
            Outlet devices must be rated for the circuit they serve. Don't put a 20-amp receptacle on a 15-amp 
            circuit, and don't put a 15-amp receptacle on a 20-amp circuit. Match your ratings.
          </p>
        </div>

        <CodeBox>
          <strong>NEC 210.2:</strong> "Branch Circuit. The circuit conductors between the final overcurrent device 
          protecting the circuit and the outlet(s)."
        </CodeBox>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 🔢 Article 220 — Branch Circuit, Feeder, and Service Load Calculations */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 220 — Load Calculations
          </h2>
        </div>
        
        <p className="text-lg text-white/90 mb-6 leading-relaxed">
          Load calculations determine the size of conductors, overcurrent protection, and equipment. Get these wrong 
          and you'll have undersized systems that can't handle the load or oversized systems that waste money.
        </p>

        <WarningBox>
          <strong>EXAM TRAP:</strong> Load calculations are heavily tested. Know your demand factors, 
          diversity factors, and how to apply them. The test loves to give you scenarios and ask for the correct calculation.
        </WarningBox>

        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            — <HL>220.12</HL>: General lighting loads are calculated at 3 VA per square foot for dwelling units.
          </p>
          <p>
            — <HL>220.14</HL>: Appliance loads are calculated based on the actual load or standard values.
          </p>
          <p>
            — <HL>220.55</HL>: Electric range loads use demand factors to account for diversity.
          </p>
          <p>
            — <HL>220.60</HL>: Noncoincident loads are not added together.
          </p>
        </div>

        <RuleBox>
          <strong>Load Calculation Rule:</strong> Always start with the actual load, then apply demand factors. 
          Don't add loads that won't operate simultaneously. This is where many electricians go wrong.
        </RuleBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">220.12 — General Lighting Loads</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Dwelling units</HL> use 3 VA per square foot. <HL>Commercial</HL> uses 3.5 VA per square foot. 
              <HL>Industrial</HL> uses 2 VA per square foot. Know your occupancy types.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">220.55 — Electric Ranges</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>40% demand factor</HL> for the first 10 kW, plus <HL>5% for each additional kW</HL>. 
              This accounts for the fact that not all burners run simultaneously.
            </p>
          </div>
        </div>

        {/* Load calculation examples */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">Load Calculation Examples</h3>
          
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025]">
            <h4 className="font-bold text-white mb-3">Dwelling Unit Example</h4>
            <p className="text-white/85 text-sm leading-relaxed mb-3">
              <strong>General Lighting:</strong> 2,000 sq ft × 3 VA = 6,000 VA<br/>
              <strong>Small Appliances:</strong> 2 circuits × 1,500 VA = 3,000 VA<br/>
              <strong>Laundry:</strong> 1 circuit × 1,500 VA = 1,500 VA<br/>
              <strong>Electric Range:</strong> 12 kW × 40% = 4,800 VA<br/>
              <strong>Total:</strong> 15,300 VA ÷ 240V = 63.75A
            </p>
            <p className="text-white/90 text-sm">
              This dwelling would require a minimum 100-amp service (next standard size up).
            </p>
          </div>

          <h3 className="text-xl font-bold text-yellow-400">Demand Factors</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Electric Ranges</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                First 10 kW: <HL>40%</HL><br/>
                Each additional kW: <HL>5%</HL>
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Clothes Dryers</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                First 4 kW: <HL>100%</HL><br/>
                Each additional kW: <HL>25%</HL>
              </p>
            </div>
          </div>
        </div>

        <CodeBox>
          <strong>NEC 220.12:</strong> "For dwelling units, the general lighting load shall be calculated at 3 volt-amperes 
          per square foot."
        </CodeBox>
      </section>

      <hr className="border-white/10 my-8" />

      {/* �� Article 215 — Feeders */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 215 — Feeders
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Feeders are the <HL>intermediate distribution</HL> between services and branch circuits. They carry power 
            from the main panel to subpanels or distribution equipment.
          </p>
          <p>
            <HL>215.2</HL> requires feeders to be sized to carry the load and be protected by overcurrent devices. 
            Don't undersize feeders—they'll overheat and cause fires.
          </p>
          <p>
            <HL>215.3</HL> requires overcurrent protection for feeders. The protection must be sized to protect 
            the conductors and be coordinated with downstream protection.
          </p>
        </div>

        <RuleBox>
          <strong>Feeder Rule:</strong> Feeders must be sized for the calculated load, not just the sum of 
          branch circuit ratings. Use your load calculations from Article 220.
        </RuleBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">215.2 — Minimum Rating and Size</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Feeders must be sized</HL> to carry the calculated load. This includes continuous loads 
              and noncontinuous loads. Don't guess—calculate properly.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">215.3 — Overcurrent Protection</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Overcurrent protection</HL> must be sized to protect the feeder conductors. The protection 
              must be coordinated with downstream branch circuit protection.
            </p>
          </div>
        </div>

        <HorrorStory>
          <strong>True Story:</strong> Electrician sized a feeder for 100 amps based on the main breaker size, 
          not the actual load. When the subpanel was fully loaded, the feeder overheated and melted the insulation. 
          <HL>215.2</HL> requires sizing for the calculated load, not the breaker size.
        </HorrorStory>

        {/* Feeder sizing examples */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">Feeder Sizing Examples</h3>
          
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025]">
            <h4 className="font-bold text-white mb-3">Subpanel Feeder Example</h4>
            <p className="text-white/85 text-sm leading-relaxed mb-3">
              <strong>Calculated Load:</strong> 8,000 VA<br/>
              <strong>Voltage:</strong> 240V<br/>
              <strong>Current:</strong> 8,000 ÷ 240 = 33.33A<br/>
              <strong>Conductor Size:</strong> #8 AWG copper (40A at 75°C)<br/>
              <strong>Overcurrent Protection:</strong> 40A breaker
            </p>
            <p className="text-white/90 text-sm">
              Always size conductors for the calculated load, then size protection for the conductors.
            </p>
          </div>
        </div>
      </section>
            <hr className="border-white/10 my-8" />

      {/* 🏗️ Article 225 — Outside Branch Circuits and Feeders */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏗️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 225 — Outside Branch Circuits and Feeders
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Outdoor wiring has <HL>unique challenges</HL>: weather, physical damage, clearances, and accessibility. 
            Article 225 covers the special requirements for outdoor electrical installations.
          </p>
          <p>
            <HL>225.6</HL> requires conductors to be suitable for outdoor use. Don't use indoor cable outside—it'll 
            deteriorate quickly and become a safety hazard.
          </p>
          <p>
            <HL>225.18</HL> requires clearances from buildings, structures, and other conductors. These clearances 
            prevent contact and ensure safe operation.
          </p>
        </div>

        <WarningBox>
          <strong>EXAM TRAP:</strong> Outdoor clearances are heavily tested. Know your voltage levels and 
          corresponding clearance requirements. Don't mix them up.
        </WarningBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">225.6 — Conductor Types</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Conductors must be suitable</HL> for outdoor use. This includes weather-resistant insulation, 
              UV protection, and resistance to physical damage. Use the right materials.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">225.18 — Clearances</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Clearances must be maintained</HL> from buildings, structures, and other conductors. These 
              clearances prevent contact and ensure safe operation.
            </p>
          </div>
        </div>

        {/* Clearance requirements */}
        <div className="mt-8 mb-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Clearance Requirements (225.18)</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
              <div className="text-center mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 text-xl font-bold">0-150V</span>
                </div>
              </div>
              <h4 className="font-bold text-white text-center mb-2">Low Voltage</h4>
              <p className="text-white/85 text-center text-sm leading-relaxed">
                <HL>3 feet minimum</HL> from buildings and structures
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
              <div className="text-center mb-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-400 text-xl font-bold">151-600V</span>
                </div>
              </div>
              <h4 className="font-bold text-white text-center mb-2">Medium Voltage</h4>
              <p className="text-white/85 text-center text-sm leading-relaxed">
                <HL>4 feet minimum</HL> from buildings and structures
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
              <div className="text-center mb-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-400 text-xl font-bold">601V+</span>
                </div>
              </div>
              <h4 className="font-bold text-white text-center mb-2">High Voltage</h4>
              <p className="text-white/85 text-center text-sm leading-relaxed">
                <HL>5 feet minimum</HL> from buildings and structures
              </p>
            </div>
          </div>
        </div>

        <HorrorStory>
          <strong>True Story:</strong> Electrician used indoor cable for outdoor lighting. After six months, 
          the insulation cracked from UV exposure, causing a short circuit and starting a fire. 
          <HL>225.6</HL> exists for a reason—use outdoor-rated materials.
        </HorrorStory>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 🔌 Article 230 — Services */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">��</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 230 — Services
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Services are the <HL>point of connection</HL> between the utility and your electrical system. 
            This is where power enters your building—get it wrong and you'll have serious problems.
          </p>
          <p>
            <HL>230.79</HL> requires service equipment to have a rating sufficient for the load. Don't undersize 
            your service—you'll regret it when you need more power.
          </p>
          <p>
            <HL>230.24</HL> requires clearances for overhead service conductors. These clearances prevent contact 
            and ensure safe operation.
          </p>
        </div>

        <RuleBox>
          <strong>Service Rule:</strong> Size your service for the calculated load, not just what you think 
          you need. It's expensive and dangerous to upgrade later.
        </RuleBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">230.79 — Rating of Service Equipment</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Service equipment must be rated</HL> for the calculated load. This includes the main disconnect, 
              overcurrent protection, and conductors. Don't guess—calculate properly.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">230.24 — Clearances</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Overhead service conductors</HL> must maintain clearances from buildings, structures, and 
              other conductors. These clearances prevent contact and ensure safe operation.
            </p>
          </div>
        </div>

        {/* Service requirements */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">Service Requirements</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Minimum Service Rating</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <strong>Dwelling Units:</strong> <HL>100 amperes</HL><br/>
                <strong>Commercial:</strong> Based on calculated load<br/>
                <strong>Industrial:</strong> Based on calculated load
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Service Disconnect</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <strong>Location:</strong> Readily accessible<br/>
                <strong>Rating:</strong> Sufficient for load<br/>
                <strong>Protection:</strong> Overcurrent protection required
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-yellow-400">Service Conductor Sizing</h3>
          <p className="text-white/90 leading-relaxed">
            Service conductors must be sized for the calculated load. Use your load calculations from Article 220. 
            Don't undersize conductors—they'll overheat and cause fires.
          </p>
        </div>

        <CodeBox>
          <strong>NEC 230.79(C):</strong> "The service disconnecting means shall have a rating not less than 
          the load to be carried, determined in accordance with Article 220."
        </CodeBox>
      </section>

      <hr className="border-white/10 my-8" />

      {/* ⚡ Article 240 — Overcurrent Protection */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 240 — Overcurrent Protection
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            Overcurrent protection is the <HL>safety net</HL> of your electrical system. It prevents conductors 
            and equipment from being damaged by excessive current. Without proper protection, fires are inevitable.
          </p>
          <p>
            <HL>240.4</HL> requires conductors to be protected by overcurrent devices. The protection must be 
            sized to protect the conductors, not just the load.
          </p>
          <p>
            <HL>240.6</HL> lists standard ampere ratings for overcurrent devices. Use these standard ratings 
            unless you have a specific reason to do otherwise.
          </p>
        </div>

        <WarningBox>
          <strong>EXAM TRAP:</strong> Overcurrent protection sizing is heavily tested. Know that protection 
          must protect conductors, and that you can use the next higher standard rating under certain conditions.
        </WarningBox>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">240.4 — Protection of Conductors</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Conductors must be protected</HL> by overcurrent devices sized to protect the conductors. 
              The protection rating must not exceed the conductor ampacity.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">240.6 — Standard Ampere Ratings</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>Standard ratings</HL> include 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 
              125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 
              2500, 3000, 4000, 5000, and 6000 amperes.
            </p>
          </div>
        </div>

        {/* Overcurrent protection examples */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-yellow-400">Overcurrent Protection Examples</h3>
          
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025]">
            <h4 className="font-bold text-white mb-3">Conductor Protection Example</h4>
            <p className="text-white/85 text-sm leading-relaxed mb-3">
              <strong>Conductor:</strong> #12 AWG copper<br/>
              <strong>Ampacity:</strong> 20A at 75°C<br/>
              <strong>Protection:</strong> 20A breaker or fuse<br/>
              <strong>Note:</strong> Cannot use 25A protection
            </p>
            <p className="text-white/90 text-sm">
              The overcurrent device must protect the conductor, not exceed its ampacity.
            </p>
          </div>

          <h3 className="text-xl font-bold text-yellow-400">Next Higher Standard Rating</h3>
          <p className="text-white/90 leading-relaxed">
            <HL>240.4(B)</HL> allows the next higher standard rating when the calculated load doesn't correspond 
            to a standard rating. This prevents nuisance tripping while maintaining protection.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Example 1</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <strong>Calculated Load:</strong> 18A<br/>
                <strong>Standard Rating:</strong> 20A<br/>
                <strong>Result:</strong> Use 20A protection
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-4 bg-white/[0.025]">
              <h4 className="font-bold text-white mb-2">Example 2</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                <strong>Calculated Load:</strong> 22A<br/>
                <strong>Standard Rating:</strong> 25A<br/>
                <strong>Result:</strong> Use 25A protection
              </p>
            </div>
          </div>
        </div>

        <HorrorStory>
          <strong>True Story:</strong> Electrician used a 30A breaker to protect #14 AWG conductors because 
          "the load was only 25A." When the conductors overheated and started a fire, the inspector failed 
          the entire job. <HL>240.4</HL> requires protection sized for conductors, not loads.
        </HorrorStory>

        <CodeBox>
          <strong>NEC 240.4:</strong> "Conductors, other than flexible cords, flexible cables, and fixture wires, 
          shall be protected against overcurrent in accordance with their ampacities as specified in 310.15."
        </CodeBox>
      </section>

      <hr className="border-white/10 my-8" />

      {/* ⚠️ Hazards & Exam Traps (Comprehensive) */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚠️</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Hazards & Exam Traps (Comprehensive)
          </h2>
        </div>
        
        <div className="space-y-4 text-white/90 leading-relaxed mb-6">
          <p>
            — <HL>Load calculations</HL> are heavily tested. Know your demand factors and how to apply them.
          </p>
          <p>
            — <HL>Branch circuit requirements</HL> vary by occupancy type. Don't mix them up.
          </p>
          <p>
            — <HL>Overcurrent protection</HL> must protect conductors, not loads.
          </p>
          <p>
            — <HL>Service sizing</HL> must be based on calculated loads, not estimated needs.
          </p>
          <p>
            — <HL>Outdoor clearances</HL> vary by voltage level. Check the tables.
          </p>
          <p>
            — <HL>Feeder sizing</HL> must account for continuous and noncontinuous loads.
          </p>
          <p>
            — <HL>Demand factors</HL> reduce the calculated load. Don't forget to apply them.
          </p>
          <p>
            — <HL>Conductor ampacity</HL> must be considered for temperature and installation conditions.
          </p>
          <p>
            — <HL>Service equipment</HL> must be rated for the calculated load.
          </p>
          <p>
            — <HL>Clearance requirements</HL> prevent contact and ensure safe operation.
          </p>
        </div>

        {/* Common exam mistakes */}
        <div className="rounded-xl border border-red-500/40 p-6 bg-red-500/10">
          <h3 className="font-bold text-red-400 text-lg mb-4 flex items-center gap-2">
            <span></span>
            Common Exam Mistakes
          </h3>
          <div className="space-y-2 text-white/90">
            <p>• Forgetting to apply demand factors in load calculations</p>
            <p>• Mixing up branch circuit requirements for different occupancy types</p>
            <p>• Sizing overcurrent protection for loads instead of conductors</p>
            <p>• Undersizing services based on estimated needs</p>
            <p>• Ignoring outdoor clearance requirements</p>
            <p>• Forgetting to account for continuous loads</p>
            <p>• Not considering conductor ampacity derating factors</p>
            <p>• Ignoring service equipment rating requirements</p>
            <p>• Mixing up clearance requirements for different voltage levels</p>
            <p>• Forgetting to coordinate overcurrent protection</p>
          </div>
        </div>

        {/* Additional hazard warnings */}
        <div className="mt-6 space-y-4">
          <WarningBox>
            <strong>LOAD CALCULATION ERRORS:</strong> Many electricians fail load calculations because they 
            forget demand factors or add loads that won't operate simultaneously. Use the Code tables properly.
          </WarningBox>

          <WarningBox>
            <strong>OVERCURRENT PROTECTION:</strong> Protection must be sized for conductors, not loads. 
            Don't exceed conductor ampacity with overcurrent devices.
          </WarningBox>

          <WarningBox>
            <strong>SERVICE SIZING:</strong> Services must be sized for the calculated load, not estimated needs. 
            Undersized services are dangerous and expensive to upgrade.
          </WarningBox>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 🧠 Quick Reference (Massively Enhanced) */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Quick Reference (Comprehensive)
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Where Stuff Lives</h3>
            <p className="text-white/85 leading-relaxed">
              — Article 210: Branch circuits<br />
              — Article 220: Load calculations<br />
              — Article 215: Feeders<br />
              — Article 225: Outdoor wiring<br />
              — Article 230: Services<br />
              — Article 240: Overcurrent protection<br />
              — Article 250: Grounding and bonding
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Fast Rules</h3>
            <p className="text-white/85 leading-relaxed">
              — <HL>Calculate loads</HL> properly<br />
              — <HL>Size conductors</HL> for the load<br />
              — <HL>Protect conductors</HL> with overcurrent devices<br />
              — <HL>Use demand factors</HL> where applicable<br />
              — <HL>Maintain clearances</HL> for safety<br />
              — <HL>Size services</HL> for calculated loads
            </p>
          </div>
        </div>

        {/* Additional quick reference */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Load Calculation Rules</h3>
            <p className="text-white/85 leading-relaxed">
              <HL>General Lighting:</HL> 3 VA/sq ft (dwelling)<br />
              <HL>Small Appliances:</HL> 2 circuits × 1,500 VA<br />
              <HL>Electric Ranges:</HL> 40% demand factor<br />
              <HL>Clothes Dryers:</HL> 100% first 4 kW
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Clearance Requirements</h3>
            <p className="text-white/85 leading-relaxed">
              0-150V: <HL>3 feet</HL> minimum<br />
              151-600V: <HL>4 feet</HL> minimum<br />
              601V+: <HL>5 feet</HL> minimum<br />
              <span className="text-sm text-white/60">*From buildings and structures</span>
            </p>
          </div>
        </div>

        {/* New quick reference sections */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Branch Circuit Rules</h3>
            <p className="text-white/85 leading-relaxed">
              — <HL>General lighting</HL> circuits required<br />
              — <HL>Small appliance</HL> circuits for kitchen<br />
              — <HL>Laundry</HL> circuits required<br />
              — <HL>Individual</HL> circuits for specific loads
            </p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/[0.025] hover:bg-white/[0.035] transition">
            <h3 className="font-bold text-yellow-400 text-lg mb-3">Service Requirements</h3>
            <p className="text-white/85 leading-relaxed">
              — <HL>Minimum 100A</HL> for dwellings<br />
              — <HL>Sized for calculated load</HL><br />
              — <HL>Readily accessible</HL> disconnect<br />
              — <HL>Proper overcurrent protection</HL>
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* 📝 Enhanced Quiz (15 Questions) */}
      <section className="mx-auto max-w-5xl mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            15‑Question Check
          </h2>
        </div>
        
        <p className="text-lg text-white/80 mb-6 text-center">
          Tap "Check Answer." Learn why. Move on. Don't overthink.
        </p>

        <div className="space-y-6">
          {quiz.map((q) => (
            <div key={q.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.03] transition">
              <div className="text-white font-semibold text-lg mb-4">
                {q.id}. {q.stem}
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {q.choices.map((c) => (
                  <label
                    key={c.key}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white/90 hover:border-yellow-400/40 transition cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      onChange={() => {}}
                      className="accent-yellow-400"
                    />
                    <span className="font-mono text-yellow-300 font-bold">{c.key}</span>
                    <span className="leading-relaxed">{c.text}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={() => toggle(q.id)}
                className="inline-flex items-center justify-center rounded-lg bg-green-500 text-black font-bold px-6 py-3 hover:bg-green-400 transition hover:scale-105"
              >
                Check Answer
              </button>

              {open[q.id] && (
                <div className="mt-4 rounded-lg border border-green-400/30 bg-green-400/10 p-4">
                  <div className="font-mono text-sm mb-2">
                    Correct: <span className="text-green-400 font-bold">{q.answer}</span>
                  </div>
                  <div className="text-white/90 leading-relaxed">{q.why}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Footer nav */}
      <div className="mx-auto max-w-5xl flex items-center justify-between mt-8 mb-12">
        <Link href="/intro" className="text-white/70 hover:text-white transition flex items-center gap-2">
          <span className="text-xl">←</span>
          <span className="hidden sm:inline">Back to TOC</span>
        </Link>
        <Link href="/modules/module-03" className="text-white/70 hover:text-white transition flex items-center gap-2">
          <span className="hidden sm:inline">Next: Ch 3 — Wiring Methods</span>
          <span className="text-xl">→</span>
        </Link>
      </div>

      {/* Progress indicator */}
      <div className="mx-auto max-w-5xl text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
          <span className="text-white/80">Chapter 2 Complete</span>
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        </div>
      </div>
    </main>
  );
}