"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Shield, AlertTriangle, Wrench, Cable, Building, Plug, Target, Brain, GitBranch, Flame, Waypoints, BookOpen, CircuitBoard, HardHat, Gauge, Thermometer, Droplets, Sun, Mountain, Factory, Warehouse } from "lucide-react";
import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

// Helper Components
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="text-yellow-400 font-semibold">{children}</span>
);

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
    <div className="flex items-start gap-3">
      <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
      <div className="text-red-200">{children}</div>
    </div>
  </div>
);

const RuleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-8">
    <div className="flex items-start gap-3">
      <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
      <div className="text-blue-200">{children}</div>
    </div>
  </div>
);

const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 my-8">
    <div className="flex items-start gap-3">
      <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
      <div className="text-orange-200">{children}</div>
    </div>
  </div>
);

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4 my-6 font-mono text-sm">
    {children}
  </div>
);

const DataTable = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 my-8">
    {children}
  </div>
);

const ChartBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/[0.03] rounded-xl border border-white/20 p-6 my-8">
    {children}
  </div>
);

// Quiz Data
const quiz = [
  {
    id: 1,
    stem: "Which raceway type is specifically designed for hazardous locations and requires threaded connections?",
    choices: ["EMT", "IMC", "PVC", "LFNC"],
    correct: "B",
    why: "IMC (Intermediate Metal Conduit) is designed for hazardous locations and requires threaded connections for proper sealing and safety."
  },
  {
    id: 2,
    stem: "What is the maximum support spacing for Type RMC in exposed work?",
    choices: ["10 feet", "15 feet", "20 feet", "25 feet"],
    correct: "A",
    why: "RMC requires support every 10 feet maximum in exposed work to prevent sagging and maintain proper installation."
  },
  {
    id: 3,
    stem: "Which PVC installation method is required for underground applications?",
    choices: ["Direct burial", "Concrete encasement", "Both A and B", "Neither A nor B"],
    correct: "C",
    why: "Underground PVC requires either direct burial with proper depth or concrete encasement for protection."
  },
  {
    id: 4,
    stem: "What is the primary advantage of Type LFNC over standard FMC?",
    choices: ["Lower cost", "Liquidtight seal", "Easier bending", "Faster installation"],
    correct: "B",
    why: "LFNC provides a liquidtight seal, making it ideal for wet locations and areas exposed to liquids."
  },
  {
    id: 5,
    stem: "Which raceway type is most suitable for corrosive environments?",
    choices: ["EMT", "RMC", "PVC", "IMC"],
    correct: "C",
    why: "PVC is highly resistant to corrosion and is the preferred choice for corrosive environments."
  },
  {
    id: 6,
    stem: "What is the maximum bend radius for Type ENT in exposed work?",
    choices: ["3 times the diameter", "5 times the diameter", "10 times the diameter", "No limit"],
    correct: "B",
    why: "ENT requires a minimum bend radius of 5 times the outside diameter to prevent damage to the raceway."
  },
  {
    id: 7,
    stem: "Which wireway type is required for outdoor installations?",
    choices: ["Metal wireways only", "Nonmetallic wireways only", "Either type", "Neither type"],
    correct: "A",
    why: "Metal wireways are required for outdoor installations due to their durability and weather resistance."
  },
  {
    id: 8,
    stem: "What is the maximum fill percentage for wireways?",
    choices: ["20%", "40%", "60%", "80%"],
    correct: "B",
    why: "Wireways have a maximum fill of 40% to allow for proper heat dissipation and future additions."
  },
  {
    id: 9,
    stem: "Which surface raceway type is suitable for wet locations?",
    choices: ["Surface metal raceways", "Surface nonmetallic raceways", "Both types", "Neither type"],
    correct: "B",
    why: "Surface nonmetallic raceways are suitable for wet locations when properly listed and installed."
  },
  {
    id: 10,
    stem: "What is the primary purpose of expansion fittings in raceway systems?",
    choices: ["Cost reduction", "Thermal expansion compensation", "Easier installation", "Aesthetic improvement"],
    correct: "B",
    why: "Expansion fittings compensate for thermal expansion and contraction of raceway systems."
  },
  {
    id: 11,
    stem: "Which raceway type requires the most frequent support?",
    choices: ["RMC", "EMT", "PVC", "IMC"],
    correct: "B",
    why: "EMT requires the most frequent support due to its thinner wall construction and flexibility."
  },
  {
    id: 12,
    stem: "What is the maximum temperature rating for standard PVC conduit?",
    choices: ["60°C", "75°C", "90°C", "105°C"],
    correct: "B",
    why: "Standard PVC conduit has a maximum temperature rating of 75°C."
  },
  {
    id: 13,
    stem: "Which raceway type is most suitable for vibration-prone areas?",
    choices: ["Rigid metal conduit", "Flexible metal conduit", "PVC conduit", "EMT"],
    correct: "B",
    why: "Flexible metal conduit is designed to handle vibration and movement in equipment connections."
  },
  {
    id: 14,
    stem: "What is the primary advantage of Type IMC over Type RMC?",
    choices: ["Lower cost", "Lighter weight", "Better corrosion resistance", "Easier bending"],
    correct: "B",
    why: "IMC is lighter than RMC while maintaining similar strength and durability."
  },
  {
    id: 15,
    stem: "Which installation method is required for raceways in concrete?",
    choices: ["Direct embedment", "Concrete encasement", "Both A and B", "Neither A nor B"],
    correct: "C",
    why: "Raceways in concrete require either direct embedment or concrete encasement for proper protection and support."
  }
];

export default function ModulePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0">
          <Image
            src="/images/module-03/m03-01.jpg"
            alt="Advanced raceway systems and wireway installations in commercial and industrial settings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Chapter 3
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8">
            Raceway Systems & Wireways (Advanced)
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Master the advanced raceway systems that power modern electrical infrastructure. 
            From hazardous locations to corrosive environments, learn the specialized installation techniques.
          </p>
        </div>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 342 — Intermediate Metal Conduit (IMC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <HardHat className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 342 — Intermediate Metal Conduit (IMC)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>342.10</HL>: IMC can be used in exposed and concealed work in dry, wet, and hazardous locations.
            </p>
            <p>
              — <HL>342.14</HL>: Threaded connections required for all IMC installations, no threadless fittings permitted.
            </p>
            <p>
              — <HL>342.30</HL>: IMC must be supported within 3 feet of boxes and at intervals not exceeding 10 feet.
            </p>
            <p>
              — <HL>342.42</HL>: IMC must be installed as a complete system without breaks or other than approved fittings.
            </p>
            <p>
              — <HL>342.46</HL>: IMC must be securely fastened and supported to prevent damage and maintain proper alignment.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-02.jpg"
                alt="IMC installation in hazardous location with proper threaded connections and support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">IMC: Hazardous Location Solution</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-03.jpg"
                alt="Proper IMC threading and coupling installation techniques"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Threaded Connections Required</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">IMC Installation Requirements</h4>
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
                  <td className="p-3">342.30</td>
                  <td className="p-3 text-green-400">10 feet maximum</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Box Support</td>
                  <td className="p-3">342.30</td>
                  <td className="p-3 text-green-400">Within 3 feet</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Connections</td>
                  <td className="p-3">342.14</td>
                  <td className="p-3 text-green-400">Threaded only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        <WarningBox>
          <strong>EXAM TRAP:</strong> IMC requires threaded connections—no threadless fittings allowed. 
          The exam loves to ask about which raceway types permit threadless fittings vs. threaded only.
        </WarningBox>
      </section>

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
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 344 — Rigid Metal Conduit (RMC)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>344.10</HL>: RMC can be used in exposed and concealed work in dry, wet, and hazardous locations.
            </p>
            <p>
              — <HL>344.14</HL>: Threaded connections required for all RMC installations, no threadless fittings permitted.
            </p>
            <p>
              — <HL>344.30</HL>: RMC must be supported within 3 feet of boxes and at intervals not exceeding 10 feet.
            </p>
            <p>
              — <HL>344.42</HL>: RMC must be installed as a complete system without breaks or other than approved fittings.
            </p>
            <p>
              — <HL>344.46</HL>: RMC must be securely fastened and supported to prevent damage and maintain proper alignment.
            </p>
            <p>
              — <HL>344.60</HL>: RMC must be properly bonded and grounded in accordance with Article 250.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-04.jpg"
                alt="RMC installation in industrial setting with proper support and grounding"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">RMC: Industrial Strength Solution</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-05.jpg"
                alt="Proper RMC support and grounding installation techniques"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Support & Grounding Required</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">RMC vs IMC Comparison</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">RMC (Rigid Metal Conduit)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Heaviest wall construction</li>
                <li>• Maximum strength and durability</li>
                <li>• Highest cost</li>
                <li>• Industrial applications</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">IMC (Intermediate Metal Conduit)</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Medium wall construction</li>
                <li>• Good strength and durability</li>
                <li>• Moderate cost</li>
                <li>• Commercial applications</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        <HorrorStory>
          <strong>True Story:</strong> A contractor tried to use threadless fittings on RMC to save time and money.
          The inspector failed the installation immediately. RMC requires threaded connections for proper sealing and safety.
          <HL>344.14</HL> exists for a reason—don't cut corners on critical safety requirements.
        </HorrorStory>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 352 — PVC Conduit (Advanced) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Droplets className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 352 — PVC Conduit (Advanced)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>352.10</HL>: PVC can be used in exposed and concealed work in dry, wet, and corrosive locations.
            </p>
            <p>
              — <HL>352.12</HL>: PVC cannot be used in hazardous locations unless specifically listed for the purpose.
            </p>
            <p>
              — <HL>352.30</HL>: PVC must be supported within 3 feet of boxes and at intervals not exceeding 4 feet.
            </p>
            <p>
              — <HL>352.44</HL>: PVC must be installed with expansion fittings to compensate for thermal expansion.
            </p>
            <p>
              — <HL>352.46</HL>: PVC must be protected from physical damage and excessive sunlight exposure.
            </p>
            <p>
              — <HL>352.60</HL>: Underground PVC must be buried at proper depth or encased in concrete.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-06.jpg"
                alt="PVC installation with expansion fittings and proper support spacing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Expansion Fittings Required</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-07.jpg"
                alt="Underground PVC installation with proper burial depth and protection"
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

        <DataTable>
          <h4 className="font-bold text-white mb-4">PVC Installation Requirements</h4>
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
                  <td className="p-3">352.30</td>
                  <td className="p-3 text-green-400">4 feet maximum</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Box Support</td>
                  <td className="p-3">352.30</td>
                  <td className="p-3 text-green-400">Within 3 feet</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Expansion Fittings</td>
                  <td className="p-3">352.44</td>
                  <td className="p-3 text-green-400">Required for thermal expansion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        <RuleBox>
          <strong>RULE OF THUMB:</strong> PVC expands and contracts significantly with temperature changes. 
          Always use expansion fittings in exposed installations to prevent buckling and damage.
        </RuleBox>
      </section>

            {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC) */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC)
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>356.10</HL>: LFNC can be used in exposed and concealed work in wet locations and where exposed to oil and coolants.
            </p>
            <p>
              — <HL>356.12</HL>: LFNC cannot be used in hazardous locations unless specifically listed for the purpose.
            </p>
            <p>
              — <HL>356.30</HL>: LFNC must be supported within 12 inches of boxes and at intervals not exceeding 3 feet.
            </p>
            <p>
              — <HL>356.42</HL>: LFNC must be installed as a complete system without breaks or other than approved fittings.
            </p>
            <p>
              — <HL>356.46</HL>: LFNC must be protected from physical damage and excessive tension.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-08.jpg"
                alt="LFNC installation in wet location with proper fittings and support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">LFNC: Wet Location Solution</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-09.jpg"
                alt="Proper LFNC support and strain relief installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Support Every 3 Feet Maximum</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">LFNC Applications & Benefits</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Ideal Uses</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Wet locations</li>
                <li>• Oil/coolant exposure</li>
                <li>• Equipment connections</li>
                <li>• Vibration areas</li>
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

        <WarningBox>
          <strong>EXAM TRAP:</strong> LFNC support spacing is much tighter than other raceways—only 3 feet maximum. 
          The exam loves to ask about different support requirements for various raceway types.
        </WarningBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Article 376 — Metal Wireways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Warehouse className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 376 — Metal Wireways
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>376.10</HL>: Metal wireways can be used in exposed and concealed work in dry locations.
            </p>
            <p>
              — <HL>376.12</HL>: Metal wireways cannot be used in wet locations, hazardous locations, or where exposed to corrosive fumes.
            </p>
            <p>
              — <HL>376.30</HL>: Metal wireways must be supported at intervals not exceeding 5 feet.
            </p>
            <p>
              — <HL>376.56</HL>: Metal wireways must not contain more than 30 conductors at any cross section.
            </p>
            <p>
              — <HL>376.58</HL>: Metal wireways must not contain conductors larger than 500 kcmil.
            </p>
            <p>
              — <HL>376.60</HL>: Metal wireways must be properly bonded and grounded in accordance with Article 250.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-10.jpg"
                alt="Metal wireway installation in commercial building with proper support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Metal Wireways: Commercial Solution</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-11.jpg"
                alt="Proper conductor fill and grounding in metal wireway system"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Conductor Fill Limits Apply</p>
              </div>
            </div>
          </div>
        </div>

        <DataTable>
          <h4 className="font-bold text-white mb-4">Metal Wireway Requirements</h4>
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
                  <td className="p-3">376.30</td>
                  <td className="p-3 text-green-400">5 feet maximum</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Conductor Count</td>
                  <td className="p-3">376.56</td>
                  <td className="p-3 text-green-400">30 maximum</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold">Conductor Size</td>
                  <td className="p-3">376.58</td>
                  <td className="p-3 text-green-400">500 kcmil maximum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DataTable>

        <HorrorStory>
          <strong>True Story:</strong> An electrician overloaded a metal wireway with 35 conductors, thinking "a few extra won't hurt."
          The excessive heat buildup caused insulation failure and a short circuit. <HL>376.56</HL> exists for a reason—respect the limits!
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

      {/* Article 386 — Surface Metal Raceways */}
      <section className={`mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-3 mb-6">
          <CircuitBoard className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Article 386 — Surface Metal Raceways
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              — <HL>386.10</HL>: Surface metal raceways can be used in exposed work in dry locations.
            </p>
            <p>
              — <HL>386.12</HL>: Surface metal raceways cannot be used in wet locations, hazardous locations, or where exposed to corrosive fumes.
            </p>
            <p>
              — <HL>386.30</HL>: Surface metal raceways must be supported at intervals not exceeding 5 feet.
            </p>
            <p>
              — <HL>386.56</HL>: Surface metal raceways must not contain more than 30 conductors at any cross section.
            </p>
            <p>
              — <HL>386.58</HL>: Surface metal raceways must not contain conductors larger than 500 kcmil.
            </p>
            <p>
              — <HL>386.60</HL>: Surface metal raceways must be properly bonded and grounded in accordance with Article 250.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-12.jpg"
                alt="Surface metal raceway installation in office space with proper support"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Surface Raceways: Office Solutions</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.03] p-4">
              <Image
                src="/images/module-03/m03-13.jpg"
                alt="Proper conductor fill and termination in surface raceway system"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Plan Conductor Fill Carefully</p>
              </div>
            </div>
          </div>
        </div>

        <ChartBox>
          <h4 className="font-bold text-white mb-4 text-center">Surface Raceway Applications</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Common Uses</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Office renovations</li>
                <li>• Retail spaces</li>
                <li>• Conference rooms</li>
                <li>• Workstations</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Installation Tips</h5>
              <ul className="text-white/85 text-sm space-y-1">
                <li>• Support every 5 feet</li>
                <li>• Plan outlet locations</li>
                <li>• Consider load calculations</li>
                <li>• Maintain aesthetics</li>
              </ul>
            </div>
          </div>
        </ChartBox>

        <RuleBox>
          <strong>RULE OF THUMB:</strong> Surface raceways are perfect for retrofitting existing spaces where 
          concealed wiring isn't practical. Plan your outlet locations carefully—they're harder to add later.
        </RuleBox>
      </section>

      {/* Visual Divider */}
      <div className={`mx-auto max-w-5xl my-12 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Chapter 3 Summary */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
              Chapter 3 Summary
            </h2>
            <Target className="w-10 h-10 text-yellow-400" />
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            You've mastered the advanced raceway systems that power modern electrical infrastructure. 
            Remember: choose the right raceway for the environment, respect support spacing requirements, and always follow NEC guidelines.
          </p>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <HardHat className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hazardous Locations</h3>
              <p className="text-white/80 text-sm">
                IMC and RMC are your go-to choices for hazardous locations. Always use threaded connections.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Droplets className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Wet & Corrosive</h3>
              <p className="text-white/80 text-sm">
                PVC and LFNC excel in wet and corrosive environments. Use expansion fittings for PVC.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Warehouse className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Commercial Solutions</h3>
              <p className="text-white/80 text-sm">
                Metal wireways and surface raceways provide flexible power distribution for commercial spaces.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Wrench className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Support Requirements</h3>
              <p className="text-white/80 text-sm">
                Each raceway type has specific support spacing. Don't guess—check the code requirements.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <CircuitBoard className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Conductor Fill</h3>
              <p className="text-white/80 text-sm">
                Wireways and surface raceways have strict conductor fill limits. Plan your installations carefully.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Safety First</h3>
              <p className="text-white/80 text-sm">
                Proper installation prevents future problems. Take your time, do it right, and respect the code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Check Quiz */}
      <section className={`mx-auto max-w-5xl mb-16 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
              Knowledge Check Quiz
            </h2>
            <Brain className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-lg text-white/90">
            Test your understanding of Chapter 3. Get 80% or higher to prove you've mastered advanced raceway systems!
          </p>
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