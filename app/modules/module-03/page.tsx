"use client";

import { Zap, Cable, Building, ShieldCheck, Wrench, BookOpen, AlertTriangle, Ruler, Flame, Target, Waypoints, GitBranch, CloudLightning, Plug } from "lucide-react";
import ModuleTemplate from "../../components/ModuleTemplate";

// Quiz questions for Chapter 3 - Raceway Systems & Wireways (Advanced)
const quiz = [
  {
    id: 1,
    stem: "What is the primary difference between IMC and RMC?",
    choices: [
      { key: "A", text: "IMC has thicker walls than RMC" },
      { key: "B", text: "IMC has 25% thinner walls than RMC" },
      { key: "C", text: "IMC cannot be threaded like RMC" },
      { key: "D", text: "IMC is only for indoor use" },
    ],
    answer: "B",
    why: "IMC has 25% thinner walls than RMC, making it lighter and more economical while maintaining adequate strength for most applications.",
  },
  {
    id: 2,
    stem: "Which raceway type requires the most frequent support?",
    choices: [
      { key: "A", text: "RMC" },
      { key: "B", text: "IMC" },
      { key: "C", text: "PVC" },
      { key: "D", text: "LFNC" },
    ],
    answer: "D",
    why: "LFNC requires the most frequent support due to its flexible nature and lower mechanical strength compared to rigid raceways.",
  },
  {
    id: 3,
    stem: "What is the purpose of expansion fittings in PVC conduit?",
    choices: [
      { key: "A", text: "To connect different conduit sizes" },
      { key: "B", text: "To accommodate thermal expansion and contraction" },
      { key: "C", text: "To provide strain relief" },
      { key: "D", text: "To improve aesthetics" },
    ],
    answer: "B",
    why: "PVC conduit expands and contracts significantly with temperature changes, requiring expansion fittings every 20 feet to prevent damage.",
  },
  {
    id: 4,
    stem: "Which raceway type is best for areas subject to severe physical damage?",
    choices: [
      { key: "A", text: "IMC" },
      { key: "B", text: "PVC Schedule 40" },
      { key: "C", text: "RMC" },
      { key: "D", text: "LFNC" },
    ],
    answer: "C",
    why: "RMC provides the highest mechanical strength and is specifically designed for areas subject to severe physical damage.",
  },
  {
    id: 5,
    stem: "What is the maximum fill percentage for metal wireways?",
    choices: [
      { key: "A", text: "20% of cross-sectional area" },
      { key: "B", text: "30% of cross-sectional area" },
      { key: "C", text: "40% of cross-sectional area" },
      { key: "D", text: "50% of cross-sectional area" },
    ],
    answer: "C",
    why: "Metal wireways are limited to 40% fill to prevent overheating and allow for proper heat dissipation.",
  },
  {
    id: 6,
    stem: "Which raceway type is most suitable for wet and oily locations?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "PVC" },
      { key: "C", text: "LFNC" },
      { key: "D", text: "IMC" },
    ],
    answer: "C",
    why: "LFNC (Liquidtight Flexible Nonmetallic Conduit) is specifically designed for wet and oily locations with its liquidtight construction.",
  },
  {
    id: 7,
    stem: "What is the minimum thread engagement required for threaded raceway connections?",
    choices: [
      { key: "A", text: "3 threads" },
      { key: "B", text: "5 threads" },
      { key: "C", text: "7 threads" },
      { key: "D", text: "10 threads" },
    ],
    answer: "B",
    why: "NEC requires a minimum of 5 threads engagement for threaded raceway connections to ensure proper mechanical and electrical continuity.",
  },
  {
    id: 8,
    stem: "Which raceway type is best for retrofitting existing installations?",
    choices: [
      { key: "A", text: "Surface metal raceways" },
      { key: "B", text: "Underground PVC" },
      { key: "C", text: "RMC" },
      { key: "D", text: "IMC" },
    ],
    answer: "A",
    why: "Surface metal raceways are designed for retrofitting existing installations without requiring wall or ceiling modifications.",
  },
  {
    id: 9,
    stem: "What is the maximum number of 90-degree bends between pull points?",
    choices: [
      { key: "A", text: "2 bends" },
      { key: "B", text: "3 bends" },
      { key: "C", text: "4 bends" },
      { key: "D", text: "5 bends" },
    ],
    answer: "C",
    why: "NEC 300.17 requires no more than 360 degrees of bends (4 x 90°) between pull points to facilitate conductor installation.",
  },
  {
    id: 10,
    stem: "Which raceway type requires strain relief fittings?",
    choices: [
      { key: "A", text: "RMC" },
      { key: "B", text: "IMC" },
      { key: "C", text: "LFNC" },
      { key: "D", text: "PVC" },
    ],
    answer: "C",
    why: "LFNC requires strain relief fittings to prevent the flexible conduit from being pulled out of connectors due to its flexible nature.",
  },
  {
    id: 11,
    stem: "What is the purpose of a bonding bushing in raceway systems?",
    choices: [
      { key: "A", text: "To provide mechanical support" },
      { key: "B", text: "To ensure electrical continuity between raceway and enclosure" },
      { key: "C", text: "To prevent water entry" },
      { key: "D", text: "To reduce noise" },
    ],
    answer: "B",
    why: "Bonding bushings ensure electrical continuity between the raceway and enclosure, providing a proper fault current path.",
  },
  {
    id: 12,
    stem: "Which raceway type is most economical for large commercial installations?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "PVC" },
      { key: "C", text: "RMC" },
      { key: "D", text: "IMC" },
    ],
    answer: "A",
    why: "EMT provides the best balance of cost, ease of installation, and performance for large commercial applications.",
  },
  {
    id: 13,
    stem: "What is the minimum burial depth for PVC conduit under a driveway?",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "18 inches" },
      { key: "C", text: "24 inches" },
      { key: "D", text: "36 inches" },
    ],
    answer: "C",
    why: "NEC 300.5 requires PVC conduit under driveways to be buried at least 24 inches deep for adequate protection.",
  },
  {
    id: 14,
    stem: "Which raceway type is most resistant to corrosion?",
    choices: [
      { key: "A", text: "Galvanized steel EMT" },
      { key: "B", text: "Aluminum EMT" },
      { key: "C", text: "PVC" },
      { key: "D", text: "Stainless steel RMC" },
    ],
    answer: "C",
    why: "PVC is completely resistant to corrosion, making it ideal for wet and corrosive environments.",
  },
  {
    id: 15,
    stem: "What is the purpose of a sealing fitting in a raceway system?",
    choices: [
      { key: "A", text: "To prevent water entry" },
      { key: "B", text: "To provide mechanical support" },
      { key: "C", text: "To reduce noise" },
      { key: "D", text: "To improve aesthetics" },
    ],
    answer: "A",
    why: "Sealing fittings prevent water, gases, and vapors from entering the raceway system, maintaining system integrity.",
  }
];

// Summary cards for Chapter 3
const summaryCards = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Raceway Selection",
    body: "Choose the right raceway type for your environment: IMC for general use, RMC for severe damage areas, PVC for underground, LFNC for wet/oily locations.",
  },
  {
    icon: <Cable className="w-6 h-6 text-yellow-400" />,
    title: "Installation Requirements",
    body: "Master support spacing, threading requirements, and proper termination methods for each raceway type.",
  },
  {
    icon: <Building className="w-6 h-6 text-yellow-400" />,
    title: "Environmental Considerations",
    body: "Understand corrosion resistance, UV protection, and temperature limitations for different raceway materials.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
    title: "Safety & Bonding",
    body: "Ensure proper bonding and grounding connections for electrical continuity and fault current paths.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-yellow-400" />,
    title: "Code Compliance",
    body: "Follow NEC requirements for raceway fill, support, and installation in various locations and occupancies.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-yellow-400" />,
    title: "Advanced Applications",
    body: "Learn specialized raceway systems for hazardous locations, outdoor installations, and special occupancies.",
  }
];

// Articles for Chapter 3
const articles = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Article 342 — Intermediate Metal Conduit (IMC)",
    lead: "IMC provides a cost-effective alternative to RMC with 25% thinner walls while maintaining adequate strength for most applications. Master its unique requirements and limitations.",
    bullets: [
      "<HL>342.10</HL>: IMC is suitable for use in all locations including exposed, concealed, wet, dry, and hazardous locations, but not recommended for areas subject to severe physical damage.",
      "<HL>342.30</HL>: Support requirements: 1/2 to 1 inch every 12 feet, 1-1/4 to 2 inch every 14 feet, over 2 inch every 16 feet. Same spacing as RMC but lighter weight.",
      "<HL>342.42</HL>: IMC must be installed as a complete system with proper couplings, connectors, and fittings. Threaded connections provide excellent electrical continuity.",
      "<HL>342.46</HL>: Threaded connections must be made up wrench-tight with proper thread engagement. Minimum 5 threads engagement required for safety.",
      "<HL>342.28</HL>: IMC fill calculations must comply with Chapter 9, Table 1 requirements. Proper fill prevents overheating and conductor damage.",
      "<HL>342.60</HL>: IMC provides good protection against physical damage, fire, and environmental hazards, but not as robust as RMC for severe conditions.",
    ],
    images: [
      {
        src: "/images/module-03/m03-02.jpg",
        alt: "IMC conduit installation showing proper threading and support requirements",
        caption: "IMC: Balanced Strength & Economy"
      },
      {
        src: "/images/module-03/m03-03.jpg",
        alt: "IMC vs RMC comparison showing wall thickness differences",
        caption: "IMC vs RMC: Wall Thickness"
      }
    ],
    tables: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
        <h4 className="font-bold text-white mb-4">IMC Support Requirements & Applications</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Conduit Size</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Support Distance</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Thread Engagement</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Typical Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1/2 inch</td>
                <td className="p-3">Every 12 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Branch circuits</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">3/4 inch</td>
                <td className="p-3">Every 12 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">General purpose</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1 inch</td>
                <td className="p-3">Every 14 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Feeder circuits</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1-1/4 inch</td>
                <td className="p-3">Every 14 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Large feeders</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">2 inch</td>
                <td className="p-3">Every 16 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Service entrance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    charts: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
        <h4 className="font-bold text-white mb-4 text-center">IMC vs RMC Comparison</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Intermediate Metal Conduit (IMC)</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• 25% thinner walls than RMC</li>
              <li>• Lighter weight</li>
              <li>• Lower cost</li>
              <li>• Most locations suitable</li>
              <li>• Not for severe damage areas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Rigid Metal Conduit (RMC)</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Maximum mechanical strength</li>
              <li>• Thickest wall thickness</li>
              <li>• Highest cost</li>
              <li>• All locations including hazardous</li>
              <li>• Severe physical damage areas</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    callouts: [
      <div key="warning" className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-400 text-xl">⚠️</span>
          <span className="font-bold text-red-400">EXAM TRAP</span>
        </div>
        <div className="text-white/90">
          <strong>EXAM TRAP:</strong> The exam loves to confuse IMC and RMC support requirements. Remember: <strong>both use the same spacing</strong> 
          (12 feet for 1/2" to 1", 14 feet for 1-1/4" to 2", 16 feet for over 2"), but IMC has thinner walls and is not suitable for severe physical damage areas.
        </div>
      </div>
    ]
  },
  {
    icon: <Building className="w-8 h-8 text-yellow-400" />,
    title: "Article 344 — Rigid Metal Conduit (RMC)",
    lead: "RMC provides maximum mechanical strength and protection for the most demanding applications. Understand when and how to use this premium raceway system.",
    bullets: [
      "<HL>344.10</HL>: RMC is suitable for use in all locations including hazardous locations, direct burial, and exposed installations. Maximum versatility and protection.",
      "<HL>344.30</HL>: Support requirements: 1/2 to 1 inch every 12 feet, 1-1/4 to 2 inch every 14 feet, over 2 inch every 16 feet. Less frequent support than EMT or PVC.",
      "<HL>344.42</HL>: RMC must be installed as a complete system with proper couplings, connectors, and fittings. Threaded connections provide excellent electrical continuity.",
      "<HL>344.46</HL>: Threaded connections must be made up wrench-tight with proper thread engagement. Minimum 5 threads engagement required for safety.",
      "<HL>344.28</HL>: RMC fill calculations must comply with Chapter 9, Table 1 requirements. Proper fill prevents overheating and conductor damage.",
      "<HL>344.60</HL>: RMC provides excellent protection against physical damage, fire, and environmental hazards. Ideal for critical installations and severe conditions.",
    ],
    images: [
      {
        src: "/images/module-03/m03-04.jpg",
        alt: "RMC installation showing proper threading and support requirements",
        caption: "RMC: Maximum Strength Installation"
      },
      {
        src: "/images/module-03/m03-05.jpg",
        alt: "RMC threaded connections and proper installation methods",
        caption: "Threaded Connections Required"
      }
    ],
    tables: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
        <h4 className="font-bold text-white mb-4">RMC Support Requirements & Applications</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Conduit Size</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Support Distance</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Thread Engagement</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Typical Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1/2 inch</td>
                <td className="p-3">Every 12 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Hazardous locations</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">3/4 inch</td>
                <td className="p-3">Every 12 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Industrial circuits</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1 inch</td>
                <td className="p-3">Every 14 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Heavy duty feeders</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1-1/4 inch</td>
                <td className="p-3">Every 14 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Large industrial loads</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">2 inch</td>
                <td className="p-3">Every 16 feet</td>
                <td className="p-3 text-green-400">5 threads min</td>
                <td className="p-3 text-green-400">Service entrance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    charts: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
        <h4 className="font-bold text-white mb-4 text-center">RMC Installation Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Mechanical Installation</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Support every 12-16 feet</li>
              <li>• Proper thread engagement</li>
              <li>• Wrench-tight connections</li>
              <li>• Complete system installation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Electrical Requirements</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Maintain electrical continuity</li>
              <li>• Proper bonding connections</li>
              <li>• Correct fill calculations</li>
              <li>• Hazardous location compliance</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    callouts: [
      <div key="rule" className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 my-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Ruler className="w-5 h-5 text-yellow-400" aria-hidden="true" />
          <span className="font-bold text-yellow-400">RULE OF THUMB</span>
        </div>
        <div className="text-white/90">
          <strong>RULE OF THUMB:</strong> When installing RMC, always use a pipe wrench to ensure proper thread engagement. 
          The minimum 5-thread requirement is critical for safety and electrical continuity. Never rely on hand-tight connections.
        </div>
      </div>
    ]
  },

    {
    icon: <Cable className="w-8 h-8 text-yellow-400" />,
    title: "Article 352 — Rigid Polyvinyl Chloride Conduit (PVC) Advanced",
    lead: "PVC conduit dominates underground and wet location installations. Master its advanced requirements including expansion fittings, support spacing, and underground considerations.",
    bullets: [
      "<HL>352.44</HL>: Expansion joints required every 20 feet to accommodate thermal expansion and prevent conduit damage. PVC expands significantly with temperature changes.",
      "<HL>352.30</HL>: Support requirements vary by size: 1/2 to 1 inch every 3 feet, 1-1/4 to 2 inch every 5 feet, over 2 inch every 6 feet. More frequent support than metal raceways.",
      "<HL>352.10</HL>: PVC Schedule 40 for general use, Schedule 80 for areas subject to physical damage. Schedule 80 has thicker walls and higher impact resistance.",
      "<HL>352.12</HL>: Not suitable for use in areas where ambient temperature exceeds 50°C (122°F). PVC softens and loses strength at high temperatures.",
      "<HL>352.46</HL>: Must be protected from UV exposure when installed above ground in sunlight. UV causes PVC to become brittle and crack over time.",
      "<HL>352.48</HL>: PVC conduit must be properly sealed at building penetrations to prevent water entry and maintain building envelope integrity.",
      "<HL>352.50</HL>: Underground installations require proper bedding and backfill to prevent damage from settling and external forces.",
      "<HL>352.52</HL>: PVC conduit must be protected from physical damage where subject to vehicular traffic or other mechanical abuse.",
    ],
    images: [
      {
        src: "/images/module-03/m03-06.jpg",
        alt: "PVC conduit installation with expansion joints and proper support spacing",
        caption: "Expansion Joints Every 20 Feet"
      },
      {
        src: "/images/module-03/m03-07.jpg",
        alt: "PVC Schedule 40 vs Schedule 80 showing wall thickness differences",
        caption: "Schedule 40 vs Schedule 80"
      }
    ],
    tables: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
        <h4 className="font-bold text-white mb-4">PVC Conduit Support & Burial Requirements</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Conduit Size</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Support Spacing</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Min Burial Depth</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1/2 inch</td>
                <td className="p-3">Every 3 feet</td>
                <td className="p-3 text-green-400">6 inches</td>
                <td className="p-3 text-green-400">Residential</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">3/4 inch</td>
                <td className="p-3">Every 3 feet</td>
                <td className="p-3 text-green-400">6 inches</td>
                <td className="p-3 text-green-400">General purpose</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1 inch</td>
                <td className="p-3">Every 5 feet</td>
                <td className="p-3 text-green-400">12 inches</td>
                <td className="p-3 text-green-400">Driveways</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1-1/4 inch</td>
                <td className="p-3">Every 5 feet</td>
                <td className="p-3 text-green-400">12 inches</td>
                <td className="p-3 text-green-400">Commercial</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">2 inch</td>
                <td className="p-3">Every 6 feet</td>
                <td className="p-3 text-green-400">18 inches</td>
                <td className="p-3 text-green-400">Heavy duty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    charts: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
        <h4 className="font-bold text-white mb-4 text-center">PVC Conduit Installation Considerations</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Environmental Factors</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Temperature limitations (50°C max)</li>
              <li>• UV protection required above ground</li>
              <li>• Corrosion resistance (excellent)</li>
              <li>• Chemical resistance (varies)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Installation Requirements</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Expansion joints every 20 feet</li>
              <li>• More frequent support than metal</li>
              <li>• Proper sealing at penetrations</li>
              <li>• Adequate burial depth</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    callouts: [
      <div key="rule" className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 my-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Ruler className="w-5 h-5 text-yellow-400" aria-hidden="true" />
          <span className="font-bold text-yellow-400">RULE OF THUMB</span>
        </div>
        <div className="text-white/90">
          <strong>RULE OF THUMB:</strong> When installing PVC conduit, always plan for expansion joints every 20 feet. 
          The thermal expansion of PVC can cause significant stress and damage if not properly accommodated. 
          Mark your expansion joint locations before you start installing.
        </div>
      </div>,
      <div key="horror" className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5 text-orange-400" aria-hidden="true" />
          <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
        </div>
        <div className="text-white/90">
          <strong>True Story:</strong> A crew installed 200 feet of PVC conduit without expansion joints in a hot warehouse. 
          During the summer, the conduit expanded so much it pushed through the concrete floor and damaged the building structure. 
          <strong>352.44</strong> exists for a reason—PVC expansion is real and dangerous!
        </div>
      </div>
    ]
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: "Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC)",
    lead: "LFNC provides flexibility and liquidtight protection for wet and oily locations. Understand its unique requirements including tight support spacing and strain relief fittings.",
    bullets: [
      "<HL>356.10</HL>: LFNC is suitable for use in wet and oily locations, but not in areas subject to severe physical damage. Provides excellent chemical resistance.",
      "<HL>356.30</HL>: Support requirements: every 1-1/2 feet maximum due to flexible nature. More frequent support than any other raceway type.",
      "<HL>356.42</HL>: LFNC must be installed with proper connectors and couplings designed for the specific type. Different types have different connection requirements.",
      "<HL>356.46</HL>: Strain relief fittings required at terminations to prevent the flexible conduit from being pulled out of connectors. Critical for safety.",
      "<HL>356.28</HL>: LFNC fill calculations must comply with Chapter 9, Table 1 requirements. Proper fill prevents overheating and conductor damage.",
      "<HL>356.60</HL>: LFNC provides excellent protection against moisture, oil, and chemicals, making it ideal for industrial and automotive applications.",
      "<HL>356.12</HL>: Not suitable for use in areas where ambient temperature exceeds 60°C (140°F). Higher temperature limit than PVC due to enhanced materials.",
      "<HL>356.48</HL>: LFNC must be properly sealed at terminations to maintain liquidtight integrity. Water entry can cause electrical failures.",
    ],
    images: [
      {
        src: "/images/module-03/m03-08.jpg",
        alt: "LFNC installation showing proper support spacing and strain relief fittings",
        caption: "LFNC: Flexible & Liquidtight"
      },
      {
        src: "/images/module-03/m03-09.jpg",
        alt: "LFNC strain relief fittings and proper termination methods",
        caption: "Strain Relief Required"
      }
    ],
    tables: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
        <h4 className="font-bold text-white mb-4">LFNC Support Requirements & Applications</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Conduit Size</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Support Distance</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Strain Relief</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Typical Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1/2 inch</td>
                <td className="p-3">Every 1-1/2 feet</td>
                <td className="p-3 text-green-400">Required</td>
                <td className="p-3 text-green-400">Machine tools</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">3/4 inch</td>
                <td className="p-3">Every 1-1/2 feet</td>
                <td className="p-3 text-green-400">Required</td>
                <td className="p-3 text-green-400">Automotive lifts</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1 inch</td>
                <td className="p-3">Every 1-1/2 feet</td>
                <td className="p-3 text-green-400">Required</td>
                <td className="p-3 text-green-400">Industrial equipment</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1-1/4 inch</td>
                <td className="p-3">Every 1-1/2 feet</td>
                <td className="p-3 text-green-400">Required</td>
                <td className="p-3 text-green-400">Large machinery</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1-1/2 inch</td>
                <td className="p-3">Every 1-1/2 feet</td>
                <td className="p-3 text-green-400">Required</td>
                <td className="p-3 text-green-400">Heavy equipment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    charts: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
        <h4 className="font-bold text-white mb-4 text-center">LFNC Installation Requirements</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Support Requirements</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Every 1-1/2 feet maximum</li>
              <li>• More frequent than rigid raceways</li>
              <li>• Prevents sagging and damage</li>
              <li>• Maintains proper alignment</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Termination Requirements</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Strain relief fittings required</li>
              <li>• Proper sealing at terminations</li>
              <li>• Liquidtight integrity</li>
              <li>• Prevents conductor damage</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    callouts: [
      <div key="warning" className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-400 text-xl">⚠️</span>
          <span className="font-bold text-red-400">EXAM TRAP</span>
        </div>
        <div className="text-white/90">
          <strong>EXAM TRAP:</strong> The exam frequently asks about LFNC support requirements. Remember: <strong>every 1-1/2 feet maximum</strong> 
          due to its flexible nature. This is the most frequent support requirement of any raceway type and is often tested.
        </div>
      </div>
    ]
  },

    {
    icon: <Waypoints className="w-8 h-8 text-yellow-400" />,
    title: "Article 376 — Metal Wireways",
    lead: "Metal wireways provide efficient cable management for large numbers of conductors. Master their unique fill requirements, support spacing, and installation methods.",
    bullets: [
      "<HL>376.10</HL>: Metal wireways are suitable for use in dry locations only. Not suitable for wet, damp, or hazardous locations due to ventilation requirements.",
      "<HL>376.22</HL>: Maximum fill is limited to 40% of cross-sectional area to prevent overheating and allow proper heat dissipation. Critical for safety.",
      "<HL>376.30</HL>: Support requirements: every 5 feet maximum for wireways 4 inches or less in width, every 3 feet for wireways over 4 inches in width.",
      "<HL>376.56</HL>: Metal wireways must be properly bonded and grounded to ensure electrical continuity. Bonding jumpers required at expansion joints.",
      "<HL>376.58</HL>: Wireways must be installed with covers that are easily removable for access to conductors. Covers must be secured in place.",
      "<HL>376.23</HL>: Conductors must be installed in a neat and workmanlike manner. Proper conductor organization prevents damage and facilitates maintenance.",
      "<HL>376.12</HL>: Not suitable for use in areas subject to severe physical damage. Metal wireways provide moderate protection but not heavy-duty.",
      "<HL>376.60</HL>: Metal wireways provide good protection against physical damage and environmental hazards, ideal for commercial and industrial applications.",
    ],
    images: [
      {
        src: "/images/module-03/m03-10.jpg",
        alt: "Metal wireway installation showing proper fill and support requirements",
        caption: "40% Fill Maximum"
      },
      {
        src: "/images/module-03/m03-11.jpg",
        alt: "Metal wireway covers and proper bonding connections",
        caption: "Removable Covers Required"
      }
    ],
    tables: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
        <h4 className="font-bold text-white mb-4">Metal Wireway Fill & Support Requirements</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Wireway Width</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Support Distance</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Max Fill</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">2 inches</td>
                <td className="p-3">Every 5 feet</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Small installations</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">3 inches</td>
                <td className="p-3">Every 5 feet</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Medium installations</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">4 inches</td>
                <td className="p-3">Every 5 feet</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Large installations</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">6 inches</td>
                <td className="p-3">Every 3 feet</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Extra large</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">8 inches</td>
                <td className="p-3">Every 3 feet</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Industrial scale</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    charts: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
        <h4 className="font-bold text-white mb-4 text-center">Metal Wireway Advantages & Limitations</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Advantages</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Easy conductor access</li>
              <li>• Efficient cable management</li>
              <li>• Good heat dissipation</li>
              <li>• Professional appearance</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Limitations</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Dry locations only</li>
              <li>• 40% fill maximum</li>
              <li>• Not for severe damage</li>
              <li>• Ventilation required</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    callouts: [
      <div key="warning" className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-400 text-xl">⚠️</span>
          <span className="font-bold text-red-400">EXAM TRAP</span>
        </div>
        <div className="text-white/90">
          <strong>EXAM TRAP:</strong> The exam loves to test the 40% fill requirement for metal wireways. Remember: <strong>40% maximum fill</strong> 
          is critical for heat dissipation. This is different from conduit fill requirements and is often tested.
        </div>
      </div>
    ]
  },
  {
    icon: <GitBranch className="w-8 h-8 text-yellow-400" />,
    title: "Article 386 — Surface Metal Raceways",
    lead: "Surface metal raceways provide flexible wiring solutions for retrofitting existing installations. Understand their unique requirements and applications.",
    bullets: [
      "<HL>386.10</HL>: Surface metal raceways are suitable for use in dry locations only. Not suitable for wet, damp, or hazardous locations due to ventilation requirements.",
      "<HL>386.22</HL>: Maximum fill is limited to 40% of cross-sectional area, same as metal wireways. Proper fill prevents overheating and conductor damage.",
      "<HL>386.30</HL>: Support requirements: every 5 feet maximum for raceways 4 inches or less in width, every 3 feet for raceways over 4 inches in width.",
      "<HL>386.56</HL>: Surface metal raceways must be properly bonded and grounded to ensure electrical continuity. Bonding jumpers required at expansion joints.",
      "<HL>386.58</HL>: Raceways must be installed with covers that are easily removable for access to conductors. Covers must be secured in place.",
      "<HL>386.12</HL>: Not suitable for use in areas subject to severe physical damage. Surface raceways provide moderate protection but not heavy-duty.",
      "<HL>386.60</HL>: Surface metal raceways provide good protection against physical damage and environmental hazards, ideal for retrofitting existing installations.",
      "<HL>386.23</HL>: Conductors must be installed in a neat and workmanlike manner. Proper conductor organization prevents damage and facilitates maintenance.",
    ],
    images: [
      {
        src: "/images/module-03/m03-12.jpg",
        alt: "Surface metal raceway installation showing proper mounting and cover removal",
        caption: "Surface Mount Installation"
      },
      {
        src: "/images/module-03/m03-13.jpg",
        alt: "Surface metal raceway covers and proper bonding connections",
        caption: "Removable Covers & Bonding"
      }
    ],
    tables: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
        <h4 className="font-bold text-white mb-4">Surface Metal Raceway Applications & Requirements</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400 font-bold">Raceway Type</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Typical Use</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Max Fill</th>
                <th className="text-left p-3 text-yellow-400 font-bold">Installation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1x1 inch</td>
                <td className="p-3">Single circuits</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Surface mount</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">1x2 inch</td>
                <td className="p-3">Multiple circuits</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Surface mount</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">2x2 inch</td>
                <td className="p-3">Branch circuits</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Surface mount</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">2x4 inch</td>
                <td className="p-3">Feeder circuits</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Surface mount</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold">4x4 inch</td>
                <td className="p-3">Large installations</td>
                <td className="p-3 text-green-400">40%</td>
                <td className="p-3 text-green-400">Surface mount</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    charts: (
      <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
        <h4 className="font-bold text-white mb-4 text-center">Surface Metal Raceway Benefits</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Retrofit Advantages</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• No wall penetration</li>
              <li>• Easy installation</li>
              <li>• Minimal disruption</li>
              <li>• Cost effective</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-400 mb-2">Design Considerations</h5>
            <ul className="text-white/85 text-sm space-y-1">
              <li>• Aesthetic appearance</li>
              <li>• Proper bonding</li>
              <li>• Accessible covers</li>
              <li>• Support requirements</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    callouts: [
      <div key="horror" className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5 text-orange-400" aria-hidden="true" />
          <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
        </div>
        <div className="text-white/90">
          <strong>True Story:</strong> An electrician installed surface metal raceways without proper bonding jumpers at expansion joints. 
          During a fault, the raceway became energized and caused a fire. <strong>386.56</strong> requires bonding jumpers for a reason— 
          electrical continuity is critical for safety!
        </div>
      </div>
    ]
  }
];

export default function Module03Page() {
  return (
    <ModuleTemplate
      chapter={3}
      title="Chapter 3 — Raceway Systems & Wireways (Advanced)"
      hero={{
        img: "/images/module-03/m03-01.jpg",
        alt: "Advanced raceway systems installation showing multiple conduit types and proper support methods",
        tagline: "Master the advanced requirements for intermediate metal conduit, rigid metal conduit, PVC, LFNC, metal wireways, and surface metal raceways. Learn proper installation methods, support requirements, and code compliance for professional raceway systems."
      }}
      stats={[
        { label: "Raceway Types", value: "6", color: "text-yellow-400" },
        { label: "NEC Articles", value: "342-386", color: "text-blue-400" },
        { label: "Support Spacing", value: "1.5-16 ft", color: "text-green-400" },
        { label: "Fill Requirements", value: "40% max", color: "text-purple-400" }
      ]}
      articles={articles}
      summaryCards={summaryCards}
      quiz={quiz}
      nav={{
        prev: { href: "/modules/module-02", label: "Chapter 2" },
        next: { href: "/modules/module-04", label: "Chapter 4" },
        tocHref: "/intro"
      }}
      moduleImagePrefix="/images/module-03/m03-"
    />
  );
}