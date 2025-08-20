"use client";

import { AlertTriangle, BookOpen, Cable, CircuitBoard, ShieldCheck, Wrench, Zap, Building, Plug, Calculator } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

// Highlight helpers
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

// Quiz data - 10 questions about Chapter 3: Wiring Methods and Materials
const quiz: Q[] = [
  {
    id: 1,
    stem: "What is the primary focus of NEC Chapter 3?",
    choices: [
      { key: "A", text: "Grounding and bonding" },
      { key: "B", text: "Wiring methods and materials" },
      { key: "C", text: "Overcurrent protection" },
      { key: "D", text: "Service calculations" }
    ],
    answer: "B",
    why: "Chapter 3 covers wiring methods and materials, including raceways, cables, and boxes."
  },
  {
    id: 2,
    stem: "According to Article 300, conductors of the same circuit must:",
    choices: [
      { key: "A", text: "Be run in separate raceways" },
      { key: "B", text: "Be run together in the same raceway or cable" },
      { key: "C", text: "Be run in metallic conduit only" },
      { key: "D", text: "Be run in flexible cord" }
    ],
    answer: "B",
    why: "NEC 300.3(B) requires all conductors of the same circuit to be run together in the same raceway, cable, or enclosure."
  },
  {
    id: 3,
    stem: "What is the minimum cover depth for direct burial of Type UF cable under a residential lawn?",
    choices: [
      { key: "A", text: "6 inches" },
      { key: "B", text: "12 inches" },
      { key: "C", text: "18 inches" },
      { key: "D", text: "24 inches" }
    ],
    answer: "B",
    why: "NEC Table 300.5 requires a minimum of 12 inches cover for direct burial UF cable under a residential lawn."
  },
  {
    id: 4,
    stem: "Article 310 covers requirements for:",
    choices: [
      { key: "A", text: "Flexible cords" },
      { key: "B", text: "Conductors for general wiring" },
      { key: "C", text: "Nonmetallic-sheathed cable" },
      { key: "D", text: "Raceways" }
    ],
    answer: "B",
    why: "Article 310 covers conductors for general wiring, including ampacity and insulation types."
  },
  {
    id: 5,
    stem: "What is the maximum number of 90-degree bends allowed between pull points in a conduit run?",
    choices: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" }
    ],
    answer: "C",
    why: "NEC 300.14 limits the total bends between pull points to 360 degrees (4 x 90°)."
  },
  {
    id: 6,
    stem: "Article 314 covers requirements for:",
    choices: [
      { key: "A", text: "Boxes and conduit bodies" },
      { key: "B", text: "Flexible cords" },
      { key: "C", text: "Service equipment" },
      { key: "D", text: "Grounding electrodes" }
    ],
    answer: "A",
    why: "Article 314 covers outlet, device, pull, and junction boxes, as well as conduit bodies."
  },
  {
    id: 7,
    stem: "What is the minimum volume required for a box containing three 12 AWG conductors and one device?",
    choices: [
      { key: "A", text: "12.5 cubic inches" },
      { key: "B", text: "16.5 cubic inches" },
      { key: "C", text: "20.5 cubic inches" },
      { key: "D", text: "24.5 cubic inches" }
    ],
    answer: "B",
    why: "Each 12 AWG conductor = 2.25 in³, device = 2 x 2.25 in³. (3+2=5) x 2.25 = 11.25 in³. But with ground and device, 16.5 in³ is the minimum."
  },
  {
    id: 8,
    stem: "Article 320 covers which wiring method?",
    choices: [
      { key: "A", text: "Armored cable (Type AC)" },
      { key: "B", text: "Nonmetallic-sheathed cable (Type NM)" },
      { key: "C", text: "Flexible metal conduit (FMC)" },
      { key: "D", text: "Rigid metal conduit (RMC)" }
    ],
    answer: "A",
    why: "Article 320 covers Armored Cable (Type AC)."
  },
  {
    id: 9,
    stem: "Which article covers Nonmetallic-Sheathed Cable (Type NM)?",
    choices: [
      { key: "A", text: "Article 320" },
      { key: "B", text: "Article 322" },
      { key: "C", text: "Article 334" },
      { key: "D", text: "Article 338" }
    ],
    answer: "C",
    why: "Article 334 covers Nonmetallic-Sheathed Cable (Type NM)."
  },
  {
    id: 10,
    stem: "What is the minimum bending radius for Type MC cable?",
    choices: [
      { key: "A", text: "5 times the cable diameter" },
      { key: "B", text: "7 times the cable diameter" },
      { key: "C", text: "10 times the cable diameter" },
      { key: "D", text: "12 times the cable diameter" }
    ],
    answer: "B",
    why: "NEC 330.24(A) requires a minimum bending radius of 7 times the cable diameter for MC cable."
  }
];

export default function Ch3WiringMethods() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900 text-white">
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
          src="/images/module-03/m03-01.jpg"
          alt="Raceways, cables, and boxes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Chapter 3 — Wiring Methods and Materials</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Explore the NEC's requirements for wiring methods, raceways, cables, and boxes that ensure safe and code-compliant installations.</p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white">20+</div>
            <div className="text-gray-400">Major Articles</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">10</div>
            <div className="text-gray-400">Quiz Questions</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cable className="w-6 h-6 text-green-400" aria-hidden="true" />
            </div>
            <div className="text-2xl font-bold text-white">30+</div>
            <div className="text-gray-400">Visual Examples</div>
          </div>
        </div>
      </section>

      {/* Article 300 — General Requirements for Wiring Methods */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-400/20 rounded-lg">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 300 — General Requirements for Wiring Methods</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p><HL>300.3</HL>: All conductors of the same circuit must be grouped together in the same raceway, cable, or enclosure.</p>
              <p><HL>300.4</HL>: Protection against physical damage is required for wiring methods exposed to potential harm.</p>
              <p><HL>300.5</HL>: Minimum cover requirements for underground installations depend on wiring method and location.</p>
              <p><HL>300.11</HL>: Raceways and cables must be securely fastened and supported.</p>
              <p><HL>300.15</HL>: Boxes or fittings are required at all conductor splices, taps, or terminations.</p>
            </div>
            <WarningBox>
              <strong>EXAM TRAP:</strong> Never split conductors of the same circuit into separate raceways or cables—this is a common code violation!
            </WarningBox>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-02.jpg"
                alt="Raceway installation showing grouped conductors"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Grouped conductors in raceway</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/module-03/m03-03.jpg"
                alt="Underground cable burial with warning tape"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Proper burial depth and marking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 310 — Conductors for General Wiring */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-400/20 rounded-lg">
                <Cable className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 310 — Conductors for General Wiring</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p><HL>310.10</HL>: Conductors must be suitable for the environment and temperature where installed.</p>
              <p><HL>310.15</HL>: Ampacity tables determine conductor sizing based on insulation type, ambient temperature, and number of current-carrying conductors.</p>
              <p><HL>310.104</HL>: Conductor identification and marking requirements.</p>
            </div>
            <RuleBox>
              <strong>RULE OF THUMB:</strong> Always check ambient temperature and number of conductors for ampacity adjustments.
            </RuleBox>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-04.jpg"
                alt="Conductor insulation types and ampacity table"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Insulation types and ampacity</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/module-03/m03-05.jpg"
                alt="Conductor identification markings"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Conductor identification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 314 — Outlet, Device, Pull, and Junction Boxes */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <Building className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Article 314 — Outlet, Device, Pull, and Junction Boxes</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p><HL>314.16</HL>: Boxes must have sufficient volume for conductors, devices, and fittings. Box fill calculations are required.</p>
              <p><HL>314.23</HL>: Boxes must be securely fastened and supported.</p>
              <p><HL>314.25</HL>: Covers must be installed to protect against contact with energized parts.</p>
              <p><HL>314.29</HL>: Boxes must be accessible without removing building finish or structural parts.</p>
            </div>
            <CodeBox>
              <strong>NEC REFERENCE:</strong> Always perform box fill calculations—overfilled boxes are a common code violation.
            </CodeBox>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-06.jpg"
                alt="Box fill calculation example"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Box fill calculation</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/module-03/m03-07.jpg"
                alt="Junction box with cover installed"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Covered and accessible box</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 320/330/334 — Cable Types */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-400/20 rounded-lg">
                <Cable className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Articles 320, 330, 334 — Cable Types</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p><HL>320</HL>: Armored Cable (Type AC) requirements, uses, and installation practices.</p>
              <p><HL>330</HL>: Metal-Clad Cable (Type MC) requirements, including bending radius and permitted uses.</p>
              <p><HL>334</HL>: Nonmetallic-Sheathed Cable (Type NM) requirements, limitations, and permitted locations.</p>
            </div>
            <RuleBox>
              <strong>RULE OF THUMB:</strong> Use MC cable where additional mechanical protection is needed; NM cable is not permitted in damp or wet locations.
            </RuleBox>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/images/module-03/m03-08.jpg"
                alt="Armored cable installation"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">Armored cable (Type AC)</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/module-03/m03-09.jpg"
                alt="Nonmetallic-sheathed cable in wood framing"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                <p className="text-sm">NM cable in framing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Chapter 3 Summary</h2>
          <p className="text-gray-400 text-lg">Key takeaways from Wiring Methods and Materials</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-bold text-white mb-2">General Requirements</h3>
            <p className="text-gray-400 text-sm">Grouping, protection, burial, and support</p>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cable className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Conductors</h3>
            <p className="text-gray-400 text-sm">Ampacity, insulation, identification</p>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Boxes</h3>
            <p className="text-gray-400 text-sm">Box fill, support, covers, accessibility</p>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Plug className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Cable Types</h3>
            <p className="text-gray-400 text-sm">AC, MC, NM requirements</p>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Common Violations</h3>
            <p className="text-gray-400 text-sm">Overfilled boxes, improper grouping, unsupported cables</p>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Calculations</h3>
            <p className="text-gray-400 text-sm">Box fill, ampacity, burial depth</p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Knowledge Check</h2>
          <p className="text-gray-400 text-lg">Test your understanding of Chapter 3</p>
        </div>
        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <FooterNav 
        prev={{href:"/modules/module-02",label:"Chapter 2"}} 
        next={{href:"/modules/module-04",label:"Chapter 4"}} 
      />
    </main>
  )