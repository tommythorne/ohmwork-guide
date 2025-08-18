"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Shield, AlertTriangle, Wrench, Cable, Building, Plug, Target, Brain, GitBranch, Flame, Waypoints, BookOpen, CircuitBoard, HardHat, Gauge, Thermometer, Droplets, Sun, Mountain, Factory, Warehouse, Ruler } from "lucide-react";
import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

// Quiz type definition
type Q = {
  id: number;
  stem: string;
  choices: { key: "A" | "B" | "C" | "D"; text: string }[];
  answer: "A" | "B" | "C" | "D";
  why: string;
};

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

// Quiz data - 15 questions about advanced raceway systems
const quiz: Q[] = [
  {
    id: 1,
    stem: "Which raceway type is specifically designed for hazardous locations and requires threaded connections?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "IMC" },
      { key: "C", text: "PVC" },
      { key: "D", text: "LFNC" }
    ],
    answer: "B",
    why: "IMC (Intermediate Metal Conduit) is designed for hazardous locations and requires threaded connections for proper sealing and safety."
  },
  {
    id: 2,
    stem: "What is the maximum support spacing for Type RMC in exposed work?",
    choices: [
      { key: "A", text: "10 feet" },
      { key: "B", text: "15 feet" },
      { key: "C", text: "20 feet" },
      { key: "D", text: "25 feet" }
    ],
    answer: "A",
    why: "RMC requires support every 10 feet maximum in exposed work to prevent sagging and maintain proper installation."
  },
  {
    id: 3,
    stem: "Which PVC installation method is required for underground applications?",
    choices: [
      { key: "A", text: "Direct burial" },
      { key: "B", text: "Concrete encasement" },
      { key: "C", text: "Both A and B" },
      { key: "D", text: "Neither A nor B" }
    ],
    answer: "C",
    why: "Underground PVC requires either direct burial with proper depth or concrete encasement for protection."
  },
  {
    id: 4,
    stem: "What is the primary advantage of Type LFNC over standard FMC?",
    choices: [
      { key: "A", text: "Lower cost" },
      { key: "B", text: "Liquidtight seal" },
      { key: "C", text: "Easier bending" },
      { key: "D", text: "Faster installation" }
    ],
    answer: "B",
    why: "LFNC provides a liquidtight seal, making it ideal for wet locations and areas exposed to liquids."
  },
  {
    id: 5,
    stem: "Which raceway type is most suitable for corrosive environments?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "PVC" },
      { key: "D", text: "IMC" }
    ],
    answer: "C",
    why: "PVC is highly resistant to corrosion and is the preferred choice for corrosive environments."
  },
  {
    id: 6,
    stem: "What is the maximum bend radius for Type ENT in exposed work?",
    choices: [
      { key: "A", text: "3 times the diameter" },
      { key: "B", text: "5 times the diameter" },
      { key: "C", text: "10 times the diameter" },
      { key: "D", text: "No limit" }
    ],
    answer: "B",
    why: "ENT requires a minimum bend radius of 5 times the outside diameter to prevent damage to the raceway."
  },
  {
    id: 7,
    stem: "Which wireway type is required for outdoor installations?",
    choices: [
      { key: "A", text: "Metal wireways only" },
      { key: "B", text: "Nonmetallic wireways only" },
      { key: "C", text: "Either type" },
      { key: "D", text: "Neither type" }
    ],
    answer: "A",
    why: "Metal wireways are required for outdoor installations due to their durability and weather resistance."
  },
  {
    id: 8,
    stem: "What is the maximum fill percentage for wireways?",
    choices: [
      { key: "A", text: "20%" },
      { key: "B", text: "40%" },
      { key: "C", text: "60%" },
      { key: "D", text: "80%" }
    ],
    answer: "B",
    why: "Wireways have a maximum fill of 40% to allow for proper heat dissipation and future additions."
  },
  {
    id: 9,
    stem: "Which surface raceway type is suitable for wet locations?",
    choices: [
      { key: "A", text: "Surface metal raceways" },
      { key: "B", text: "Surface nonmetallic raceways" },
      { key: "C", text: "Both types" },
      { key: "D", text: "Neither type" }
    ],
    answer: "B",
    why: "Surface nonmetallic raceways are suitable for wet locations when properly listed and installed."
  },
  {
    id: 10,
    stem: "What is the primary purpose of expansion fittings in raceway systems?",
    choices: [
      { key: "A", text: "Cost reduction" },
      { key: "B", text: "Thermal expansion compensation" },
      { key: "C", text: "Easier installation" },
      { key: "D", text: "Aesthetic improvement" }
    ],
    answer: "B",
    why: "Expansion fittings compensate for thermal expansion and contraction of raceway systems."
  },
  {
    id: 11,
    stem: "Which raceway type requires the most frequent support?",
    choices: [
      { key: "A", text: "RMC" },
      { key: "B", text: "EMT" },
      { key: "C", text: "PVC" },
      { key: "D", text: "IMC" }
    ],
    answer: "B",
    why: "EMT requires the most frequent support due to its thinner wall construction and flexibility."
  },
  {
    id: 12,
    stem: "What is the maximum temperature rating for standard PVC conduit?",
    choices: [
      { key: "A", text: "60°C" },
      { key: "B", text: "75°C" },
      { key: "C", text: "90°C" },
      { key: "D", text: "105°C" }
    ],
    answer: "B",
    why: "Standard PVC conduit has a maximum temperature rating of 75°C."
  },
  {
    id: 13,
    stem: "Which raceway type is most suitable for vibration-prone areas?",
    choices: [
      { key: "A", text: "Rigid metal conduit" },
      { key: "B", text: "Flexible metal conduit" },
      { key: "C", text: "PVC conduit" },
      { key: "D", text: "EMT" }
    ],
    answer: "B",
    why: "Flexible metal conduit is designed to handle vibration and movement in equipment connections."
  },
  {
    id: 14,
    stem: "What is the primary advantage of Type IMC over Type RMC?",
    choices: [
      { key: "A", text: "Lower cost" },
      { key: "B", text: "Lighter weight" },
      { key: "C", text: "Better corrosion resistance" },
      { key: "D", text: "Easier bending" }
    ],
    answer: "B",
    why: "IMC is lighter than RMC while maintaining similar strength and durability."
  },
  {
    id: 15,
    stem: "Which installation method is required for raceways in concrete?",
    choices: [
      { key: "A", text: "Direct embedment" },
      { key: "B", text: "Concrete encasement" },
      { key: "C", text: "Both A and B" },
      { key: "D", text: "Neither A nor B" }
    ],
    answer: "C",
    why: "Raceways in concrete require either direct embedment or concrete encasement for proper protection and support."
  }
];

export default function ModulePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white"></main>

          {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 344 — Rigid Metal Conduit (RMC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <HardHat className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 344 — Rigid Metal Conduit (RMC)</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>RMC</HL> is the heavy-duty champion of metal raceways, designed for the toughest installations where maximum protection is required.</p>
              
              <ul className="space-y-2 ml-4">
                <li>• <HL>Threaded connections</HL> required for all couplings and fittings</li>
                <li>• <HL>Maximum support spacing</HL> of 10 feet in exposed work</li>
                <li>• <HL>Corrosion protection</HL> required in wet locations</li>
                <li>• <HL>Expansion fittings</HL> needed for temperature changes over 100°F</li>
                <li>• <HL>Underground installations</HL> require concrete encasement or direct burial rating</li>
              </ul>
            </div>

            <ChartBox title="RMC Support Requirements">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Exposed Work:</span>
                  <span className="text-yellow-400">10 feet max</span>
                </div>
                <div className="flex justify-between">
                  <span>Concealed Work:</span>
                  <span className="text-yellow-400">15 feet max</span>
                </div>
                <div className="flex justify-between">
                  <span>Underground:</span>
                  <span className="text-yellow-400">20 feet max</span>
                </div>
              </div>
            </ChartBox>

            <HorrorStory title="The RMC Disaster">
              A crew installed RMC without expansion fittings in a steel building. When summer hit, the conduit expanded and literally tore the couplings apart. The inspector made them rip out 200 feet of work and start over. Always account for thermal expansion!
            </HorrorStory>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-04.jpg"
                alt="RMC installation showing threaded connections and proper support spacing"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Proper RMC installation with threaded couplings</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-03/m03-05.jpg"
                alt="RMC expansion fitting installation in industrial setting"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Expansion fitting prevents thermal damage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 352 — PVC Conduit (Advanced) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-400/20 rounded-lg">
                <Droplets className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 352 — PVC Conduit (Advanced)</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>PVC conduit</HL> excels in corrosive environments and underground applications, but requires careful attention to expansion and sunlight resistance.</p>
              
              <ul className="space-y-2 ml-4">
                <li>• <HL>Expansion fittings</HL> required every 100 feet for temperature changes</li>
                <li>• <HL>Sunlight resistance</HL> required for exposed outdoor installations</li>
                <li>• <HL>Underground burial depth</HL> minimum 18 inches to grade</li>
                <li>• <HL>Concrete encasement</HL> required under roadways and heavy traffic areas</li>
                <li>• <HL>Support spacing</HL> maximum 3 feet for exposed work</li>
              </ul>
            </div>

            <DataTable
              headers={["Installation Type", "Minimum Depth", "Special Requirements"]}
              data={[
                ["Direct Burial", "18 inches", "Schedule 80 or concrete encasement"],
                ["Under Roadways", "24 inches", "Concrete encasement required"],
                ["Exposed Outdoor", "N/A", "Sunlight-resistant PVC only"],
                ["Wet Locations", "N/A", "Proper drainage and expansion"]
              ]}
            />

            <RuleBox title="PVC Expansion Rule">
              PVC expands significantly with temperature changes. Install expansion fittings every 100 feet or less, and always use the manufacturer's expansion coefficient for your specific climate zone.
            </RuleBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-06.jpg"
                alt="PVC conduit installation with expansion fittings and proper burial depth"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">PVC with expansion fittings for temperature changes</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-03/m03-07.jpg"
                alt="Underground PVC installation showing proper burial depth and concrete encasement"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Proper underground PVC with concrete encasement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <Cable className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 356 — LFNC (Liquidtight Flexible Nonmetallic)</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>LFNC</HL> provides flexibility and liquidtight protection in tight spaces where rigid conduit won't work.</p>
              
              <ul className="space-y-2 ml-4">
                <li>• <HL>Maximum length</HL> of 6 feet between terminations</li>
                <li>• <HL>Support required</HL> every 12 inches for exposed work</li>
                <li>• <HL>Temperature rating</HL> must match environment (-40°F to +140°F)</li>
                <li>• <HL>Bending radius</HL> minimum 5 times the conduit diameter</li>
                <li>• <HL>Liquidtight fittings</HL> required at all terminations</li>
              </ul>
            </div>

            <ChartBox title="LFNC Length Limits">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Standard Installation:</span>
                  <span className="text-green-400">6 feet max</span>
                </div>
                <div className="flex justify-between">
                  <span>Equipment Connections:</span>
                  <span className="text-green-400">3 feet max</span>
                </div>
                <div className="flex justify-between">
                  <span>Vibration Applications:</span>
                  <span className="text-green-400">2 feet max</span>
                </div>
              </div>
            </ChartBox>

            <WarningBox title="LFNC Length Violation">
              Installing LFNC longer than 6 feet creates a violation. The flexible nature can cause voltage drop and makes the installation difficult to maintain. Always measure twice, cut once!
            </WarningBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-08.jpg"
                alt="LFNC installation showing proper length and liquidtight fittings"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">LFNC with proper length and liquidtight fittings</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-03/m03-09.jpg"
                alt="LFNC support installation showing proper spacing and termination"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Proper LFNC support and termination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 376 — Metal Wireways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-400/20 rounded-lg">
                <Building className="w-6 h-6 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 376 — Metal Wireways</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>Metal wireways</HL> provide organized cable management in commercial and industrial installations with easy access for modifications.</p>
              
              <ul className="space-y-2 ml-4">
                <li>• <HL>Maximum fill</HL> of 20% for power conductors</li>
                <li>• <HL>Support spacing</HL> maximum 5 feet for horizontal runs</li>
                <li>• <HL>Access covers</HL> must be readily accessible</li>
                <li>• <HL>Grounding required</HL> at all termination points</li>
                <li>• <HL>Bending radius</HL> minimum 6 times the wireway width</li>
              </ul>
            </div>

            <DataTable
              headers={["Wireway Size", "Max Fill %", "Support Spacing"]}
              data={[
                ["4\" x 4\"", "20%", "5 feet"],
                ["6\" x 6\"", "20%", "5 feet"],
                ["8\" x 8\"", "20%", "5 feet"],
                ["12\" x 12\"", "20%", "5 feet"]
              ]}
            />

            <RuleBox title="Wireway Fill Calculation">
              Calculate fill by dividing the total conductor cross-sectional area by the wireway's internal cross-sectional area. Never exceed 20% for power conductors to allow for heat dissipation.
            </RuleBox>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-10.jpg"
                alt="Metal wireway installation showing proper fill and support spacing"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Metal wireway with proper conductor fill</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-03/m03-11.jpg"
                alt="Wireway support installation and grounding connections"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Proper wireway support and grounding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 386 — Surface Metal Raceways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <Ruler className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 386 — Surface Metal Raceways</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p><HL>Surface metal raceways</HL> provide clean, organized wiring solutions for surface-mounted installations in finished spaces.</p>
              
              <ul className="space-y-2 ml-4">
                <li>• <HL>Maximum length</HL> of 10 feet between access points</li>
                <li>• <HL>Support spacing</HL> maximum 4 feet for horizontal runs</li>
                <li>• <HL>Fill capacity</HL> limited to 40% for power conductors</li>
                <li>• <HL>Grounding required</HL> at all termination points</li>
                <li>• <HL>Access covers</HL> must be removable without tools</li>
              </ul>
            </div>

            <ChartBox title="Surface Raceway Applications">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Office Spaces:</span>
                  <span className="text-yellow-400">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span>Retail Areas:</span>
                  <span className="text-yellow-400">Good</span>
                </div>
                <div className="flex justify-between">
                  <span>Industrial:</span>
                  <span className="text-yellow-400">Limited</span>
                </div>
              </div>
            </ChartBox>

            <HorrorStory title="The Surface Raceway Nightmare">
              An installer used surface raceways in a high-traffic area without proper support. Within weeks, the covers were falling off and conductors were exposed. The inspector red-tagged the entire installation and required complete replacement with proper support.
            </HorrorStory>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-12.jpg"
                alt="Surface metal raceway installation showing proper support and access covers"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Surface raceway with proper support and covers</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/module-03/m03-13.jpg"
                alt="Surface raceway termination and grounding connections"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Proper termination and grounding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Grid */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Key Takeaways</h2>
          <p className="text-gray-400">Essential points to remember for your exam and field work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">IMC & RMC</h3>
            </div>
            <p className="text-gray-300 text-sm">Threaded connections, proper support spacing, and expansion fittings are critical for metal conduit installations.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-400/20 rounded-lg">
                <Droplets className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">PVC Advanced</h3>
            </div>
            <p className="text-gray-300 text-sm">Temperature expansion, sunlight resistance, and proper burial depth are essential for PVC installations.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <Cable className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">LFNC Limits</h3>
            </div>
            <p className="text-gray-300 text-sm">Length limits, proper support, and liquidtight fittings are crucial for flexible nonmetallic conduit.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-400/20 rounded-lg">
                <Building className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Wireway Rules</h3>
            </div>
            <p className="text-gray-300 text-sm">20% fill limit, proper support spacing, and grounding requirements must be followed for wireway installations.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <Ruler className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Surface Raceways</h3>
            </div>
            <p className="text-gray-300 text-sm">Length limits, support requirements, and access cover specifications are critical for surface installations.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-400/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Common Violations</h3>
            </div>
            <p className="text-gray-300 text-sm">Watch for expansion fitting requirements, support spacing violations, and improper fill calculations in all raceway systems.</p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Test Your Knowledge</h2>
          <p className="text-gray-400">Challenge yourself with these advanced raceway questions</p>
        </div>
        
        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <FooterNav
        prev={{ href: "/modules/module-02", label: "Chapter 2" }}
        next={{ href: "/modules/module-04", label: "Chapter 4" }}
      />
    </main>
  );
}