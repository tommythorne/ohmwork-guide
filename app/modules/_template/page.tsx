"use client";

import { AlertTriangle, BookOpen, Cable, CircuitBoard, ShieldCheck, Wrench, Zap, Building, CloudLightning, Flame, Target, Waypoints, GitBranch, Ruler, Brain, Plug, Calculator } from "lucide-react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

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

// Quiz data - 15 questions about Chapter 2: Wiring and Protection
const quiz: Q[] = [
  {
    id: 1,
    stem: "What is the primary purpose of Article 200?",
    choices: [
      { key: "A", text: "Define branch circuits" },
      { key: "B", text: "Identify grounded conductors" },
      { key: "C", text: "Size feeders" },
      { key: "D", text: "Calculate loads" }
    ],
    answer: "B",
    why: "Article 200 specifically covers the use and identification of grounded conductors."
  },
  {
    id: 2,
    stem: "What is the maximum overcurrent protection for 14 AWG conductors?",
    choices: [
      { key: "A", text: "10A" },
      { key: "B", text: "15A" },
      { key: "C", text: "20A" },
      { key: "D", text: "25A" }
    ],
    answer: "B",
    why: "NEC 2017 240.4(D) limits 14 AWG conductors to a maximum of 15A overcurrent protection."
  },
  {
    id: 3,
    stem: "What is the minimum size GEC required for a 100A service with 3 AWG copper conductors?",
    choices: [
      { key: "A", text: "8 AWG copper" },
      { key: "B", text: "6 AWG copper" },
      { key: "C", text: "4 AWG copper" },
      { key: "D", text: "2 AWG copper" }
    ],
    answer: "B",
    why: "NEC 2017 250.66 requires 6 AWG copper GEC for services with 3 AWG ungrounded conductors."
  },
  {
    id: 4,
    stem: "What is the demand factor for general lighting in a dwelling unit?",
    choices: [
      { key: "A", text: "100% for first 3000W, 35% for remainder" },
      { key: "B", text: "100% for first 2000W, 35% for remainder" },
      { key: "C", text: "100% for first 3000W, 50% for remainder" },
      { key: "D", text: "100% for first 2000W, 50% for remainder" }
    ],
    answer: "A",
    why: "NEC 2017 220.42 requires 100% for first 3000W and 35% for the remainder of general lighting load."
  },
  {
    id: 5,
    stem: "What is the maximum number of service disconnects permitted in a single enclosure?",
    choices: [
      { key: "A", text: "4 disconnects" },
      { key: "B", text: "6 disconnects" },
      { key: "C", text: "8 disconnects" },
      { key: "D", text: "10 disconnects" }
    ],
    answer: "B",
    why: "NEC 2017 230.71 permits up to six service disconnects in a single enclosure or group of enclosures."
  },
  {
    id: 6,
    stem: "What is the maximum overcurrent protection for 12 AWG conductors?",
    choices: [
      { key: "A", text: "15A" },
      { key: "B", text: "20A" },
      { key: "C", text: "25A" },
      { key: "D", text: "30A" }
    ],
    answer: "B",
    why: "NEC 2017 240.4(D) limits 12 AWG conductors to a maximum of 20A overcurrent protection."
  },
  {
    id: 7,
    stem: "What is the minimum size GEC required for a 200A service with 4/0 copper conductors?",
    choices: [
      { key: "A", text: "6 AWG copper" },
      { key: "B", text: "4 AWG copper" },
      { key: "C", text: "2 AWG copper" },
      { key: "D", text: "1/0 AWG copper" }
    ],
    answer: "B",
    why: "NEC 2017 250.66 requires 4 AWG copper GEC for services with 4/0 ungrounded conductors."
  },
  {
    id: 8,
    stem: "What is the demand factor for ranges in a dwelling unit with 2 ranges?",
    choices: [
      { key: "A", text: "80%" },
      { key: "B", text: "75%" },
      { key: "C", text: "70%" },
      { key: "D", text: "65%" }
    ],
    answer: "B",
    why: "NEC 2017 220.55 requires 75% demand factor for 2 ranges connected to the same feeder."
  },
  {
    id: 9,
    stem: "What is the minimum clearance required above finished grade for overhead conductors?",
    choices: [
      { key: "A", text: "8 feet" },
      { key: "B", text: "10 feet" },
      { key: "C", text: "12 feet" },
      { key: "D", text: "15 feet" }
    ],
    answer: "B",
    why: "NEC 2017 225.19 requires minimum 10 feet clearance above finished grade for overhead conductors."
  },
  {
    id: 10,
    stem: "What is the minimum size EGC required for a 30A circuit?",
    choices: [
      { key: "A", text: "14 AWG" },
      { key: "B", text: "12 AWG" },
      { key: "C", text: "10 AWG" },
      { key: "D", text: "8 AWG" }
    ],
    answer: "C",
    why: "NEC 2017 250.122 requires 10 AWG EGC for circuits protected at 30A or less."
  },
  {
    id: 11,
    stem: "What is the maximum number of 90-degree bends between pull points?",
    choices: [
      { key: "A", text: "2 bends" },
      { key: "B", text: "3 bends" },
      { key: "C", text: "4 bends" },
      { key: "D", text: "5 bends" }
    ],
    answer: "C",
    why: "NEC 2017 300.17 requires no more than 360 degrees of bends (4 x 90°) between pull points."
  },
  {
    id: 12,
    stem: "What is the purpose of a bonding bushing in a raceway system?",
    choices: [
      { key: "A", text: "To provide mechanical support" },
      { key: "B", text: "To ensure electrical continuity between raceway and enclosure" },
      { key: "C", text: "To prevent water entry" },
      { key: "D", text: "To reduce noise" }
    ],
    answer: "B",
    why: "Bonding bushings ensure electrical continuity between the raceway and enclosure, providing a proper fault current path."
  },
  {
    id: 13,
    stem: "What is the minimum burial depth for conductors under a driveway?",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "18 inches" },
      { key: "C", text: "24 inches" },
      { key: "D", text: "36 inches" }
    ],
    answer: "C",
    why: "NEC 2017 300.5 requires conductors under driveways to be buried at least 24 inches deep for adequate protection."
  },
  {
    id: 14,
    stem: "What is the purpose of a sealing fitting in a raceway system?",
    choices: [
      { key: "A", text: "To prevent water entry" },
      { key: "B", text: "To provide mechanical support" },
      { key: "C", text: "To reduce noise" },
      { key: "D", text: "To improve aesthetics" }
    ],
    answer: "A",
    why: "Sealing fittings prevent water, gases, and vapors from entering the raceway system, maintaining system integrity."
  },
  {
    id: 15,
    stem: "What is the maximum fill percentage for metal wireways?",
    choices: [
      { key: "A", text: "20% of cross-sectional area" },
      { key: "B", text: "30% of cross-sectional area" },
      { key: "C", text: "40% of cross-sectional area" },
      { key: "D", text: "50% of cross-sectional area" }
    ],
    answer: "C",
    why: "Metal wireways are limited to 40% fill to prevent overheating and allow for proper heat dissipation."
  }
];

export default function Ch2WiringProtection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/intro" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span>
            <span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">NEC 2017</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/module-02/m02-01.jpg"
          alt="Electrical panel and wiring systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Chapter 2 — Wiring and Protection</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Master the fundamentals of electrical wiring, overcurrent protection, and grounding systems that form the backbone of safe electrical installations.</p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">10</div>
            <div className="text-gray-400">Major Articles</div>
          </div>
          
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">15</div>
            <div className="text-gray-400">Quiz Questions</div>
          </div>
          
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-purple-400" aria-hidden="true" />
            </div>
            <div className="text-2xl font-bold text-white">27</div>
            <div className="text-gray-400">Visual Examples</div>
          </div>
        </div>
      </section>

      {/* Article 200 — Use and Identification of Grounded Conductors */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 200 — Use and Identification of Grounded Conductors</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>200.2</HL>: Grounded conductors must be identified by white or gray insulation, or by three continuous white stripes on other than green insulation.</p>
              <p><HL>200.6</HL>: Grounded conductors must be identified throughout their length. Identification methods include white or gray insulation, three white stripes, or other approved means.</p>
              <p><HL>200.7</HL>: White or gray insulation may be used only for grounded conductors. Exception: white insulation may be used for ungrounded conductors where permanently reidentified.</p>
              <p><HL>200.9</HL>: Grounded conductors must not be used as ungrounded conductors. This prevents confusion and maintains system integrity.</p>
              <p><HL>200.10</HL>: Grounded conductors must be connected to the grounded side of the system. This ensures proper grounding and safety.</p>
            </div>

            <WarningBox>
              <strong>EXAM TRAP:</strong> Remember that white or gray insulation is reserved for grounded conductors only. The exam loves to test this fundamental rule.
            </WarningBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-02.jpg"
                alt="Properly identified grounded conductors with white insulation"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Grounded conductor identification</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-03.jpg"
                alt="Three white stripes identification method for grounded conductors"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Three white stripes method</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Article 210 — Branch Circuits */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-400/20 rounded-lg">
                <CircuitBoard className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 210 — Branch Circuits</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>210.8</HL>: GFCI protection required for 125V, 15A and 20A receptacles in bathrooms, garages, outdoors, crawl spaces, unfinished basements, and within 6 feet of sinks.</p>
              <p><HL>210.11(C)</HL>: At least two 20A small appliance branch circuits required for kitchen, pantry, breakfast room, dining room, or similar areas.</p>
              <p><HL>210.12</HL>: AFCI protection required for 120V branch circuits supplying outlets in dwelling unit bedrooms, family rooms, dining rooms, living rooms, sunrooms, recreation rooms, closets, hallways, and similar areas.</p>
              <p><HL>210.52</HL>: Receptacle spacing: no point along wall more than 6 feet from receptacle. Wall space 2 feet or wider requires receptacle. Kitchen countertops require receptacles every 4 feet.</p>
              <p><HL>210.4</HL>: Multiwire branch circuits must have handle ties or circuit breakers with handle ties to disconnect all ungrounded conductors simultaneously.</p>
            </div>

            <RuleBox>
              <strong>RULE OF THUMB:</strong> Think "6-4-2" for receptacle spacing: 6 feet max spacing, 4 feet for kitchen counters, 2 feet minimum wall space.
            </RuleBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-04.jpg"
                alt="GFCI receptacle installation in bathroom showing proper protection"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">GFCI protection required</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-05.jpg"
                alt="Kitchen small appliance circuits showing 20A dedicated circuits"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Small appliance circuits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 215 — Feeders */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-400/20 rounded-lg">
                <Cable className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 215 — Feeders</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>215.2</HL>: Feeder conductors must have an ampacity not less than required to supply the load. Ampacity must be calculated based on connected load.</p>
              <p><HL>215.3</HL>: Feeders must be protected by overcurrent protection device. OCPD rating must not exceed conductor ampacity.</p>
              <p><HL>215.9</HL>: Grounded conductors must be identified per Article 200. White or gray insulation required for grounded conductors.</p>
              <p><HL>215.12</HL>: Feeders must have a disconnecting means. Disconnect must be readily accessible and properly labeled.</p>
              <p><HL>215.15</HL>: Feeders must be grounded per Article 250. Proper grounding ensures safety and system integrity.</p>
            </div>

            <CodeBox>
              <strong>NEC REFERENCE:</strong> Feeder sizing follows the same principles as branch circuits but serves multiple branch circuits instead of individual loads.
            </CodeBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-06.jpg"
                alt="Feeder panel showing proper conductor sizing and overcurrent protection"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Feeder panel installation</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-07.jpg"
                alt="Feeder disconnect showing proper labeling and accessibility"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Feeder disconnect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 220 — Branch-Circuit, Feeder, and Service Calculations */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <Calculator className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 220 — Branch-Circuit, Feeder, and Service Calculations</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>220.42</HL>: General lighting demand factor: 100% for first 3000W, 35% for remainder. This applies to dwelling units and similar occupancies.</p>
              <p><HL>220.55</HL>: Range demand factors: 1 range = 80%, 2 ranges = 75%, 3 ranges = 70%, 4 ranges = 65%, 5 ranges = 60%. Maximum demand never less than 8000W.</p>
              <p><HL>220.52</HL>: Small appliance loads: minimum 1500W per circuit. Laundry circuit: minimum 1500W. These are separate from general lighting.</p>
              <p><HL>220.53</HL>: Fastened-in-place appliances: 75% demand factor may be applied when four or more appliances are connected to the same feeder.</p>
              <p><HL>220.61</HL>: Neutral conductor sizing: neutral may be smaller than ungrounded conductors when maximum unbalanced load is less than total connected load.</p>
            </div>

            <DataTable>
              <h4 className="font-bold text-white mb-4">Dwelling Unit Load Calculation Example</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Load Type</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Calculation</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Demand</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">General Lighting</td>
                      <td className="p-3">3000 sq ft × 3W/sq ft</td>
                      <td className="p-3 text-green-400">9000W</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Small Appliances</td>
                      <td className="p-3">2 circuits × 1500W</td>
                      <td className="p-3 text-green-400">3000W</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Laundry</td>
                      <td className="p-3">1 circuit × 1500W</td>
                      <td className="p-3 text-green-400">1500W</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Range</td>
                      <td className="p-3">12kW × 80%</td>
                      <td className="p-3 text-green-400">9600W</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Total</td>
                      <td className="p-3">Sum of all loads</td>
                      <td className="p-3 text-green-400">23,100W</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DataTable>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-08.jpg"
                alt="Load calculation worksheet showing dwelling unit calculations"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Load calculation example</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-09.jpg"
                alt="Demand factor table showing lighting and appliance factors"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Demand factor application</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 225 — Outside Branch Circuits and Feeders */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-400/20 rounded-lg">
                <CloudLightning className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 225 — Outside Branch Circuits and Feeders</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>225.18</HL>: Clearances from buildings: 10 feet above roofs, 3 feet from windows, doors, porches, and fire escapes. These ensure safety and accessibility.</p>
              <p><HL>225.19</HL>: Clearances from ground: 10 feet above finished grade, 12 feet above driveways, 15 feet above public streets. Higher clearances for vehicle traffic.</p>
              <p><HL>225.30</HL>: Number of supplies: only one supply per building or structure. Exception: emergency systems, legally required standby systems, and optional standby systems.</p>
              <p><HL>225.31</HL>: Disconnecting means required: must be readily accessible and properly labeled. Location must be approved by authority having jurisdiction.</p>
              <p><HL>225.32</HL>: Location of disconnecting means: must be within sight of the building or structure served, or within sight of the controller.</p>
            </div>

            <HorrorStory>
              <strong>JOBSITE HORROR STORY:</strong> A crew installed overhead feeders with only 8 feet clearance above a driveway. When a delivery truck with a tall load came through, the conductors were damaged, causing a power outage and safety hazard. Always check clearance requirements!
            </HorrorStory>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-10.jpg"
                alt="Overhead feeder installation showing proper clearances from buildings"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Clearance requirements</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-11.jpg"
                alt="Outside disconnect showing proper location and accessibility"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Outside disconnect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Article 230 — Services */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-400/20 rounded-lg">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 230 — Services</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>230.70</HL>: Service disconnect location: must be readily accessible and located nearest the point of entrance of service conductors. This ensures quick emergency shutdown.</p>
              <p><HL>230.71</HL>: Maximum number of disconnects: up to six service disconnects permitted in a single enclosure or group of enclosures. All must be grouped together.</p>
              <p><HL>230.72</HL>: Grouping of disconnects: all service disconnects must be grouped together. Exception: emergency systems and legally required standby systems.</p>
              <p><HL>230.79</HL>: Rating of service disconnect: must have rating sufficient for the load served. Must be able to carry the full-load current continuously.</p>
              <p><HL>230.82</HL>: Equipment connected to supply side of service disconnect: limited to specific equipment types like surge arresters, instrument transformers, and service conductors.</p>
            </div>

            <ChartBox>
              <h4 className="font-bold text-white mb-4 text-center">Service Disconnect Requirements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-yellow-400 mb-2">Location Requirements</h5>
                  <ul className="text-white/85 text-sm space-y-1">
                    <li>• Readily accessible</li>
                    <li>• Nearest point of entrance</li>
                    <li>• Outside or inside building</li>
                    <li>• Approved by AHJ</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-400 mb-2">Number Limits</h5>
                  <ul className="text-white/85 text-sm space-y-1">
                    <li>• Maximum 6 disconnects</li>
                    <li>• Must be grouped together</li>
                    <li>• Emergency systems excluded</li>
                    <li>• All must be accessible</li>
                  </ul>
                </div>
              </div>
            </ChartBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-12.jpg"
                alt="Service panel showing multiple disconnects properly grouped together"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Multiple service disconnects</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-13.jpg"
                alt="Service entrance showing proper location and accessibility"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Service entrance location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 240 — Overcurrent Protection */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-400/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 240 — Overcurrent Protection</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>240.4</HL>: Protection of conductors: conductors must be protected against overcurrent in accordance with their ampacity ratings. OCPD must not exceed conductor ampacity.</p>
              <p><HL>240.4(D)</HL>: Small conductor rule: 14 AWG limited to 15A, 12 AWG limited to 20A, 10 AWG limited to 30A. This prevents overheating and fire hazards.</p>
              <p><HL>240.21</HL>: Location in circuit: OCPD must be located at the point where conductors receive their supply. Exception: tap conductors meeting specific conditions.</p>
              <p><HL>240.6</HL>: Standard ampere ratings: standard ratings include 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, and 6000A.</p>
              <p><HL>240.15</HL>: Ungrounded conductors: each ungrounded conductor must be protected by an overcurrent device. This ensures complete circuit protection.</p>
            </div>

            <DataTable>
              <h4 className="font-bold text-white mb-4">Small Conductor Protection Limits</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Conductor Size</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Maximum OCPD</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">14 AWG</td>
                      <td className="p-3 text-red-400">15A</td>
                      <td className="p-3 text-green-400">Lighting circuits</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">12 AWG</td>
                      <td className="p-3 text-red-400">20A</td>
                      <td className="p-3 text-green-400">General purpose</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">10 AWG</td>
                      <td className="p-3 text-red-400">30A</td>
                      <td className="p-3 text-green-400">Heavy duty</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">8 AWG</td>
                      <td className="p-3 text-green-400">40A</td>
                      <td className="p-3 text-green-400">Feeder circuits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DataTable>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-14.jpg"
                alt="Circuit breaker panel showing proper overcurrent protection sizing"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">OCPD sizing</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-15.jpg"
                alt="Small conductor rule application showing 14 AWG limited to 15A"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Small conductor protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 242 — Overvoltage Protection */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-400/20 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 242 — Overvoltage Protection</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>242.1</HL>: Scope: covers surge protective devices (SPDs) installed on load side of service disconnect. This provides protection against voltage surges.</p>
              <p><HL>242.3</HL>: Listed devices: SPDs must be listed for the purpose intended. Listing ensures proper testing and safety.</p>
              <p><HL>242.4</HL>: Installation: SPDs must be installed per manufacturer instructions. Proper installation ensures effective operation.</p>
              <p><HL>242.6</HL>: Grounding: SPDs must be properly grounded and bonded. This provides path for surge current.</p>
              <p><HL>242.8</HL>: Coordination: SPDs must be coordinated with other protective devices. This prevents conflicts and ensures proper operation.</p>
            </div>

            <RuleBox>
              <strong>RULE OF THUMB:</strong> Install SPDs on load side of service disconnect, surge arresters on line side. This creates a coordinated protection system.
            </RuleBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-16.jpg"
                alt="SPD installation showing proper grounding and coordination"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">SPD installation</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-17.jpg"
                alt="Surge protection coordination showing line and load side devices"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Protection coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 250 — Grounding and Bonding */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 250 — Grounding and Bonding</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>250.50</HL>: Grounding electrode system must include water pipe, metal building frame, concrete-encased electrode, ground ring, or made electrodes. Multiple electrodes improve system reliability.</p>
              <p><HL>250.66</HL>: GEC sizing based on largest ungrounded service conductor: 6 AWG for 100A, 4 AWG for 200A, 2 AWG for 400A. This ensures adequate fault current capacity.</p>
              <p><HL>250.122</HL>: EGC sizing based on OCPD rating, not conductor size. 14 AWG for 15A, 12 AWG for 20A, 10 AWG for 30A. This provides proper fault current path.</p>
              <p><HL>250.53</HL>: Concrete-encased electrode minimum 20 feet in length, 2 inches from edge, encased in concrete. This creates effective grounding electrode.</p>
              <p><HL>250.104</HL>: Water pipe bonding required within 5 feet of entrance, sized per 250.66 table. This ensures electrical continuity.</p>
            </div>

            <WarningBox>
              <strong>EXAM TRAP:</strong> Don't confuse GEC sizing (250.66) with EGC sizing (250.122). GEC is based on service conductor size, EGC is based on OCPD rating.
            </WarningBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-18.jpg"
                alt="Grounding electrode system showing water pipe, concrete-encased electrode, and ground ring"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Grounding electrode system</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-19.jpg"
                alt="Grounding electrode conductor installation showing proper sizing and connections"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">GEC installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 280/285 — Surge Arresters and SPDs */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-400/20 rounded-lg">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Articles 280/285 — Surge Arresters and SPDs</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>280.4</HL>: Surge arresters rated for system voltage, installed on line side of service disconnect. This provides primary surge protection.</p>
              <p><HL>285.3</HL>: SPDs installed on load side, coordinated with surge arresters for complete protection. This provides secondary protection.</p>
              <p><HL>285.6</HL>: SPDs must be listed for purpose, installed per manufacturer instructions. This ensures proper operation.</p>
              <p><HL>285.11</HL>: SPDs require proper grounding and bonding connections for effective operation. This provides surge current path.</p>
            </div>

            <RuleBox>
              <strong>RULE OF THUMB:</strong> Install surge arresters on line side, SPDs on load side. This creates a coordinated protection system that handles both external and internal surges.
            </RuleBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-02/m02-20.jpg"
                alt="Surge arrester installation on line side of service disconnect"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Surge arrester installation</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-02/m02-21.jpg"
                alt="SPD installation showing proper grounding and coordination"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">SPD coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Chapter 2 Summary</h2>
          <p className="text-gray-400 text-lg">Key takeaways from Wiring and Protection</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CircuitBoard className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Branch Circuits</h3>
            <p className="text-gray-400 text-sm">GFCI, AFCI, spacing, MWBC requirements</p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Grounding</h3>
            <p className="text-gray-400 text-sm">GES, GEC sizing, EGC requirements</p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Overcurrent</h3>
            <p className="text-gray-400 text-sm">OCPD selection, conductor protection</p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CloudLightning className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Services</h3>
            <p className="text-gray-400 text-sm">Disconnect location, up-to-six rule</p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Protection</h3>
            <p className="text-gray-400 text-sm">Surge protection, coordination</p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Calculations</h3>
            <p className="text-gray-400 text-sm">Load calculations, demand factors</p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Knowledge Check</h2>
          <p className="text-gray-400 text-lg">Test your understanding of Chapter 2</p>
        </div>
        
        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <FooterNav 
        prev={{href:"/modules/module-01",label:"Chapter 1"}} 
        next={{href:"/modules/module-03",label:"Chapter 3"}} 
      />
    </main>
  );
}