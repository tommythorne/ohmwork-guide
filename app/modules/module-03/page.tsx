"use client";

import { AlertTriangle, Zap, Shield, Plug, Cable, Building, CloudLightning, Flame, Target, Waypoints, GitBranch, Ruler, BookOpen, Brain, HardHat, Droplets, CircuitBoard, Wrench, Warehouse } from "lucide-react";

import ModuleTemplate from "../../components/ModuleTemplate";

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

// Quiz data - 15 questions about Chapter 3 Wiring Methods and Materials
const quiz = [
  {
    id: 1,
    stem: "Which wiring method is NOT suitable for wet locations?",
    choices: [
      { key: "A", text: "RMC" },
      { key: "B", text: "PVC" },
      { key: "C", text: "Type NM" },
      { key: "D", text: "Type UF" },
    ],
    answer: "C",
    why: "Type NM cable cannot be used in wet locations per NEC 340.12. Use Type UF, PVC, or RMC for wet environments.",
  },
  {
    id: 2,
    stem: "What is the minimum burial depth for PVC conduit under a driveway?",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "18 inches" },
      { key: "C", text: "24 inches" },
      { key: "D", text: "36 inches" },
    ],
    answer: "C",
    why: "NEC 300.5(A) requires 24 inches minimum burial depth for PVC under driveways.",
  },
  {
    id: 3,
    stem: "How many current-carrying conductors can be installed in a single EMT raceway before derating is required?",
    choices: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" },
    ],
    answer: "C",
    why: "More than 3 current-carrying conductors require derating per NEC 310.15(B)(3)(a).",
  },
  {
    id: 4,
    stem: "What is the maximum fill percentage for conductors in a raceway?",
    choices: [
      { key: "A", text: "40%" },
      { key: "B", text: "53%" },
      { key: "C", text: "60%" },
      { key: "D", text: "80%" },
    ],
    answer: "B",
    why: "NEC Chapter 9, Table 1 shows 53% maximum fill for more than 2 conductors.",
  },
  {
    id: 5,
    stem: "Which statement about cable tray installations is correct?",
    choices: [
      { key: "A", text: "Cable tray can support any type of cable" },
      { key: "B", text: "Cable tray must be bonded to ground" },
      { key: "C", text: "Cable tray requires no supports" },
      { key: "D", text: "Cable tray is only for industrial use" },
    ],
    answer: "B",
    why: "NEC 392.60 requires cable tray to be bonded to ground for safety.",
  },
  {
    id: 6,
    stem: "What is the minimum working space required in front of a 480V panel?",
    choices: [
      { key: "A", text: "24 inches" },
      { key: "B", text: "30 inches" },
      { key: "C", text: "36 inches" },
      { key: "D", text: "42 inches" },
    ],
    answer: "C",
    why: "NEC 110.26(A)(1) requires 36 inches minimum working space for equipment over 600V.",
  },
  {
    id: 7,
    stem: "Which wiring method is best for hazardous locations?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "PVC" },
      { key: "D", text: "FMC" },
    ],
    answer: "B",
    why: "RMC (Rigid Metal Conduit) is the most robust and suitable for hazardous locations.",
  },
  {
    id: 8,
    stem: "What is the maximum number of bends allowed between pull points in a raceway?",
    choices: [
      { key: "A", text: "2 bends (180° total)" },
      { key: "B", text: "3 bends (270° total)" },
      { key: "C", text: "4 bends (360° total)" },
      { key: "D", text: "No limit specified" },
    ],
    answer: "C",
    why: "NEC 344.26 and 358.26 limit bends to 360° total between pull points.",
  },
  {
    id: 9,
    stem: "Which conductor insulation type has the highest temperature rating?",
    choices: [
      { key: "A", text: "THHN" },
      { key: "B", text: "THWN" },
      { key: "C", text: "XHHW" },
      { key: "D", text: "USE" },
    ],
    answer: "C",
    why: "XHHW has a 90°C rating, while THHN is 90°C, THWN is 75°C, and USE varies.",
  },
  {
    id: 10,
    stem: "What is the purpose of a bonding jumper in a raceway system?",
    choices: [
      { key: "A", text: "To carry neutral current" },
      { key: "B", text: "To provide equipment grounding" },
      { key: "C", text: "To reduce voltage drop" },
      { key: "D", text: "To support the raceway" },
    ],
    answer: "B",
    why: "Bonding jumpers provide equipment grounding continuity in raceway systems.",
  },
  {
    id: 11,
    stem: "Which wiring method requires the most frequent supports?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "FMC" },
      { key: "D", text: "PVC" },
    ],
    answer: "C",
    why: "FMC (Flexible Metal Conduit) requires supports every 4.5 feet, more frequent than other methods.",
  },
  {
    id: 12,
    stem: "What is the minimum size equipment grounding conductor for a 200A circuit?",
    choices: [
      { key: "A", text: "6 AWG" },
      { key: "B", text: "4 AWG" },
      { key: "C", text: "3 AWG" },
      { key: "D", text: "2 AWG" },
    ],
    answer: "A",
    why: "NEC Table 250.122 requires 6 AWG EGC for circuits up to 200A.",
  },
  {
    id: 13,
    stem: "Which statement about parallel conductors is correct?",
    choices: [
      { key: "A", text: "Parallel conductors must be the same length" },
      { key: "B", text: "Parallel conductors must be the same size" },
      { key: "C", text: "Parallel conductors can be different types" },
      { key: "D", text: "Parallel conductors require no special considerations" },
    ],
    answer: "B",
    why: "NEC 310.10(H) requires parallel conductors to be the same size, length, and type.",
  },
  {
    id: 14,
    stem: "What is the purpose of a bushing on a raceway?",
    choices: [
      { key: "A", text: "To support the raceway" },
      { key: "B", text: "To protect conductors from abrasion" },
      { key: "C", text: "To reduce voltage drop" },
      { key: "D", text: "To improve aesthetics" },
    ],
    answer: "B",
    why: "Bushings protect conductors from abrasion where they enter or exit raceways.",
  },
  {
    id: 15,
    stem: "Which wiring method is most suitable for temporary installations?",
    choices: [
      { key: "A", text: "EMT" },
      { key: "B", text: "RMC" },
      { key: "C", text: "FMC" },
      { key: "D", text: "PVC" },
    ],
    answer: "C",
    why: "FMC (Flexible Metal Conduit) is most suitable for temporary installations due to flexibility.",
  },
];

export default function Module03Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-03/m03-01.jpg",
        imageAlt: "NEC Chapter 3 Wiring Methods and Materials - Various raceway systems and wiring methods",
        title: "Chapter 3 — Wiring Methods & Materials",
        subtitle: "The Foundation of Electrical Safety",
        blurb: "Master the NEC requirements for raceways, conductors, and wiring methods. Learn when to use EMT vs RMC, how to calculate box fill, and the critical support and bonding requirements that keep installations safe and code-compliant."
      }}
      articles={[
        {
          id: "article-300",
          title: "Article 300 — General Requirements for Wiring Methods",
          body: (
            <>
              <p>
                <HL>300.3</HL>: Conductors of the same circuit must be installed in the same raceway, cable, or trench. 
                This prevents inductive heating and ensures proper circuit operation.
              </p>
              <p>
                <HL>300.5</HL>: Underground installations require proper burial depth—18 inches for direct burial, 
                24 inches under driveways, and 36 inches under public streets.
              </p>
              <p>
                <HL>300.11</HL>: Raceways must be securely fastened and supported. The support intervals vary by 
                raceway type but generally range from 3 to 10 feet.
              </p>
              <p>
                <HL>300.15</HL>: Boxes or conduit bodies must be installed at each conductor splice point, 
                outlet, switch point, junction point, or pull point.
              </p>
              
              <CodeBox>
                <strong>NEC 300.5(A):</strong> Direct burial cables must be buried at least 18 inches deep. 
                Under driveways: 24 inches. Under public streets: 36 inches minimum.
              </CodeBox>
              
              <WarningBox>
                <strong>EXAM TRAP:</strong> The exam loves to ask about burial depths. Remember: 18" direct, 
                24" driveways, 36" streets. Don't mix these up!
              </WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-02.jpg", alt: "Underground raceway installation showing proper burial depth", caption: "Proper Burial Depth Required" },
            { src: "/images/module-03/m03-03.jpg", alt: "Raceway support and fastening methods", caption: "Secure Fastening Required" }
          ]
        },
        {
          id: "article-310",
          title: "Article 310 — Conductors for General Wiring",
          body: (
            <>
              <p>
                <HL>310.10</HL>: Conductors must be suitable for the voltage, temperature, and environment. 
                Temperature ratings range from 60°C to 90°C depending on insulation type.
              </p>
              <p>
                <HL>310.15(B)(3)(a)</HL>: When more than 3 current-carrying conductors are installed in a raceway, 
                the ampacity must be derated according to Table 310.15(B)(3)(a).
              </p>
              <p>
                <HL>310.10(H)</HL>: Parallel conductors must be the same length, size, and type. 
                They must be terminated in the same manner and installed in the same raceway.
              </p>
              <p>
                <HL>310.15(B)(2)</HL>: Ambient temperature correction factors must be applied when 
                conductors are installed in environments above 86°F (30°C).
              </p>
              
              <DataTable>
                <h4 className="font-bold text-white mb-4">Conductor Temperature Ratings</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Insulation Type</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Temperature Rating</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Common Uses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">THHN</td>
                      <td className="p-3">90°C</td>
                      <td className="p-3 text-green-400">Dry locations, raceways</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">THWN</td>
                      <td className="p-3">75°C</td>
                      <td className="p-3 text-green-400">Wet locations</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">XHHW</td>
                      <td className="p-3">90°C</td>
                      <td className="p-3 text-green-400">High temperature, wet locations</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
              
              <RuleBox>
                <strong>RULE OF THUMB:</strong> Always check the temperature rating of your conductors. 
                Using 90°C rated wire in a 75°C environment is fine, but never the reverse.
              </RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-04.jpg", alt: "Various conductor types showing insulation differences", caption: "Conductor Insulation Types" },
            { src: "/images/module-03/m03-05.jpg", alt: "Parallel conductor installation showing proper termination", caption: "Parallel Conductors Must Match" }
          ]
        },
        {
          id: "article-312",
          title: "Article 312 — Cabinets, Cutout Boxes, and Meter Socket Enclosures",
          body: (
            <>
              <p>
                <HL>312.2</HL>: Cabinets and cutout boxes must be approved for the purpose and must be of sufficient 
                size to accommodate all conductors and devices without crowding.
              </p>
              <p>
                <HL>312.5(A)</HL>: Openings in cabinets and cutout boxes must be effectively closed to prevent 
                the escape of arcs or molten metal.
              </p>
              <p>
                <HL>312.5(B)</HL>: Openings for conductors must be provided with approved bushings or fittings 
                having smooth, rounded edges.
              </p>
              <p>
                <HL>312.8</HL>: Cabinets and cutout boxes must be grounded in accordance with Article 250.
              </p>
              
              <DataTable>
                <h4 className="font-bold text-white mb-4">Cabinet and Box Requirements</h4>
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
                      <td className="p-3 font-semibold">Size Adequacy</td>
                      <td className="p-3">312.2</td>
                      <td className="p-3 text-green-400">No crowding of conductors</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Openings Closed</td>
                      <td className="p-3">312.5(A)</td>
                      <td className="p-3 text-green-400">Prevent arc escape</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Bushings Required</td>
                      <td className="p-3">312.5(B)</td>
                      <td className="p-3 text-green-400">Smooth, rounded edges</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-06.jpg", alt: "Properly sized cabinet with adequate space for conductors", caption: "Adequate Size Required" },
            { src: "/images/module-03/m03-07.jpg", alt: "Approved bushings and fittings for conductor openings", caption: "Use Approved Bushings" }
          ]
        },
        {
          id: "article-314",
          title: "Article 314 — Outlet, Device, Pull, and Junction Boxes",
          body: (
            <>
              <p>
                <HL>314.16(A)</HL>: Box volume must be adequate for the number and size of conductors. 
                The box volume (in cubic inches) must be greater than or equal to the sum of all allowances.
              </p>
              <p>
                <HL>314.16(B)</HL>: Counting rules—one allowance per unbroken conductor entering; 
                all equipment grounds together = one allowance total; internal clamps = one allowance; 
                each device yoke = two allowances (one per yoke side).
              </p>
              <p>
                <HL>314.16(B)(1)</HL>: Volume per conductor (copper): 18 AWG = 1.5; 16 = 1.75; 
                14 = 2.0; 12 = 2.25; 10 = 2.5; 8 = 3.0; 6 = 5.0 cubic inches.
              </p>
              <p>
                <HL>314.16(C)</HL>: Conduit bodies used for splices or devices must provide 
                sufficient volume per the same rules as boxes.
              </p>
              
              <ChartBox>
                <h4 className="font-bold text-white mb-4 text-center">Box Fill Calculation Example</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Conductors</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• 3 × 12 AWG = 6.75 in³</li>
                      <li>• 1 × 12 AWG ground = 2.25 in³</li>
                      <li>• 1 device yoke = 4.5 in³</li>
                      <li><strong>Total: 13.5 in³</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Box Requirements</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Minimum box size: 14.0 in³</li>
                      <li>• 4 × 2¼" square box = 21.0 in³</li>
                      <li>• 4 × 2¼" round box = 18.0 in³</li>
                      <li>• Both acceptable</li>
                    </ul>
                  </div>
                </div>
              </ChartBox>
              
              <HorrorStory>
                <strong>True Story:</strong> An electrician crammed 8 conductors into a 4 × 2¼" box 
                without calculating fill. During inspection, the inspector made them pull everything out 
                and install a larger box. <HL>314.16</HL> exists for a reason—calculate your box fill!
              </HorrorStory>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-08.jpg", alt: "Box fill calculation example showing conductor counting", caption: "Box Fill Calculation" },
            { src: "/images/module-03/m03-09.jpg", alt: "Various box types and their volume ratings", caption: "Box Volume Ratings" }
          ]
        }
      ]}

              {
          id: "article-320",
          title: "Article 320 — Armored Cable (Type AC)",
          body: (
            <>
              <p>
                <HL>320.10</HL>: Type AC cable can be used in exposed and concealed work in dry locations. 
                The armor provides mechanical protection and can serve as an equipment grounding conductor.
              </p>
              <p>
                <HL>320.12</HL>: Type AC cable cannot be used in wet locations, hazardous locations, 
                or where exposed to corrosive fumes.
              </p>
              <p>
                <HL>320.15</HL>: Type AC cable must be supported and secured within 12 inches of every 
                outlet box and at intervals not exceeding 4.5 feet.
              </p>
              <p>
                <HL>320.30</HL>: Type AC cable must be installed as a complete system without breaks 
                or other than approved fittings.
              </p>
              
              <DataTable>
                <h4 className="font-bold text-white mb-4">Type AC Cable Installation Requirements</h4>
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
                      <td className="p-3">320.15</td>
                      <td className="p-3 text-green-400">4.5 feet maximum</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Box Support</td>
                      <td className="p-3">320.15</td>
                      <td className="p-3 text-green-400">Within 12 inches</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Location Restrictions</td>
                      <td className="p-3">320.12</td>
                      <td className="p-3 text-red-400">Dry locations only</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
              
              <WarningBox>
                <strong>EXAM TRAP:</strong> Type AC armor can serve as an equipment grounding conductor, 
                but only if the armor is properly bonded at both ends. Don't assume it's automatically grounded.
              </WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-10.jpg", alt: "Type AC cable installation with proper support and termination", caption: "Type AC: Armor Provides Protection" },
            { src: "/images/module-03/m03-11.jpg", alt: "Proper support and securing of armored cable at intervals", caption: "Support Every 4.5 Feet Maximum" }
          ]
        },
        {
          id: "article-330",
          title: "Article 330 — Metal-Clad Cable (Type MC)",
          body: (
            <>
              <p>
                <HL>330.10</HL>: Type MC cable can be used in exposed and concealed work in dry locations, 
                and in wet locations where the cable is specifically listed for the purpose.
              </p>
              <p>
                <HL>330.12</HL>: Type MC cable cannot be used in hazardous locations unless specifically 
                listed for the purpose.
              </p>
              <p>
                <HL>330.15</HL>: Type MC cable must be supported and secured within 12 inches of every 
                outlet box and at intervals not exceeding 6 feet.
              </p>
              <p>
                <HL>330.30</HL>: Type MC cable must be installed as a complete system without breaks 
                or other than approved fittings.
              </p>
              
              <ChartBox>
                <h4 className="font-bold text-white mb-4 text-center">Type AC vs Type MC Cable Comparison</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Type AC (Armored)</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Support: 4.5 feet max</li>
                      <li>• Locations: Dry only</li>
                      <li>• Cost: Lower</li>
                      <li>• Protection: Good</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Type MC (Metal-Clad)</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Support: 6 feet max</li>
                      <li>• Locations: Dry & wet</li>
                      <li>• Cost: Higher</li>
                      <li>• Protection: Better</li>
                    </ul>
                  </div>
                </div>
              </ChartBox>
              
              <RuleBox>
                <strong>RULE OF THUMB:</strong> Type MC is more versatile and durable than Type AC, but costs more. 
                Use MC for wet locations and where you need longer support intervals. AC is fine for basic dry location work.
              </RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-12.jpg", alt: "Type MC metal-clad cable installation in commercial application", caption: "Type MC: Versatile & Durable" },
            { src: "/images/module-03/m03-13.jpg", alt: "Proper support and securing of MC cable with approved fittings", caption: "Support Every 6 Feet Maximum" }
          ]
        },
        {
          id: "article-340",
          title: "Article 340 — Nonmetallic-Sheathed Cable (Type NM)",
          body: (
            <>
              <p>
                <HL>340.10</HL>: Type NM cable can be used in exposed and concealed work in normally dry locations. 
                This is your standard residential wiring cable.
              </p>
              <p>
                <HL>340.12</HL>: Type NM cable cannot be used in wet locations, exposed to corrosive fumes, 
                or in hazardous locations.
              </p>
              <p>
                <HL>340.15</HL>: Type NM cable must be supported and secured within 12 inches of every outlet box 
                and at intervals not exceeding 4.5 feet.
              </p>
              <p>
                <HL>340.30</HL>: Type NM cable must be protected from physical damage where necessary.
              </p>
              
              <DataTable>
                <h4 className="font-bold text-white mb-4">Type NM Cable Restrictions & Requirements</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Restriction</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Reason</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Alternative</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Wet Locations</td>
                      <td className="p-3">Insulation damage</td>
                      <td className="p-3 text-green-400">Type UF or conduit</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Exposed Work</td>
                      <td className="p-3">Physical damage</td>
                      <td className="p-3 text-green-400">Conduit or armored cable</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Hazardous Locations</td>
                      <td className="p-3">Safety requirements</td>
                      <td className="p-3 text-green-400">Hazardous location cable</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
              
              <HorrorStory>
                <strong>True Story:</strong> A homeowner ran Type NM cable through their garage ceiling without protection. 
                When they stored boxes in the attic, the cable got crushed and shorted out. The resulting fire caused $15,000 in damage. 
                <HL>340.30</HL> exists for a reason—protect your cables from physical damage!
              </HorrorStory>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-14.jpg", alt: "Type NM cable installation in residential application with proper support", caption: "Type NM: Standard Residential Wiring" },
            { src: "/images/module-03/m03-15.jpg", alt: "Protection of NM cable where it passes through framing members", caption: "Protect Where Physical Damage Possible" }
          ]
        },
        {
          id: "article-350",
          title: "Article 350 — Liquidtight Flexible Metal Conduit (Type LFMC)",
          body: (
            <>
              <p>
                <HL>350.10</HL>: Type LFMC can be used in exposed and concealed work in wet locations 
                and where exposed to oil and coolants.
              </p>
              <p>
                <HL>350.12</HL>: Type LFMC cannot be used in hazardous locations unless specifically 
                listed for the purpose.
              </p>
              <p>
                <HL>350.15</HL>: Type LFMC must be supported and secured within 12 inches of every outlet box 
                and at intervals not exceeding 4.5 feet.
              </p>
              <p>
                <HL>350.30</HL>: Type LFMC must be installed as a complete system without breaks 
                or other than approved fittings.
              </p>
              
              <ChartBox>
                <h4 className="font-bold text-white mb-4 text-center">Type LFMC Applications & Benefits</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Ideal Uses</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Wet locations</li>
                      <li>• Oil/coolant exposure</li>
                      <li>• Vibration areas</li>
                      <li>• Equipment connections</li>
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
                <strong>EXAM TRAP:</strong> The exam loves to ask about support spacing for different wiring methods. 
                Remember: Type AC = 4.5 ft, Type MC = 6 ft, Type NM = 4.5 ft, Type LFMC = 4.5 ft. 
                Don't mix these up!
              </WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-16.jpg", alt: "Type LFMC installation in wet location with proper fittings", caption: "Type LFMC: Wet Location Solution" },
            { src: "/images/module-03/m03-17.jpg", alt: "Proper LFMC fittings and termination methods", caption: "Use Approved Fittings Only" }
          ]
        }

                {
          id: "article-360",
          title: "Article 360 — Flexible Metallic Tubing (Type FMT)",
          body: (
            <>
              <p>
                <HL>360.10</HL>: Type FMT can be used in exposed and concealed work in dry locations 
                and where exposed to oil and coolants.
              </p>
              <p>
                <HL>360.12</HL>: Type FMT cannot be used in wet locations, hazardous locations, 
                or where exposed to corrosive fumes.
              </p>
              <p>
                <HL>360.15</HL>: Type FMT must be supported and secured within 12 inches of every outlet box 
                and at intervals not exceeding 4.5 feet.
              </p>
              <p>
                <HL>360.30</HL>: Type FMT must be installed as a complete system without breaks 
                or other than approved fittings.
              </p>
              
              <ChartBox>
                <h4 className="font-bold text-white mb-4 text-center">Type FMT vs Type FMC Comparison</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Type FMT (Flexible Metallic Tubing)</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Thinner wall construction</li>
                      <li>• More flexible than FMC</li>
                      <li>• Dry locations only</li>
                      <li>• Oil/coolant resistant</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Type FMC (Flexible Metal Conduit)</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Thicker wall construction</li>
                      <li>• Less flexible than FMT</li>
                      <li>• Dry locations only</li>
                      <li>• More robust protection</li>
                    </ul>
                  </div>
                </div>
              </ChartBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-18.jpg", alt: "Type FMT installation in dry location with proper support", caption: "Type FMT: Flexible & Lightweight" },
            { src: "/images/module-03/m03-19.jpg", alt: "Proper FMT fittings and termination methods", caption: "Use Approved Fittings Only" }
          ]
        },
        {
          id: "article-370",
          title: "Article 370 — Cablebus",
          body: (
            <>
              <p>
                <HL>370.10</HL>: Cablebus can be used in exposed and concealed work in dry locations 
                and where exposed to oil and coolants.
              </p>
              <p>
                <HL>370.12</HL>: Cablebus cannot be used in wet locations, hazardous locations, 
                or where exposed to corrosive fumes.
              </p>
              <p>
                <HL>370.15</HL>: Cablebus must be supported and secured at intervals not exceeding 20 feet.
              </p>
              <p>
                <HL>370.30</HL>: Cablebus must be installed as a complete system without breaks 
                or other than approved fittings.
              </p>
              
              <DataTable>
                <h4 className="font-bold text-white mb-4">Cablebus Applications & Benefits</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Application</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Benefit</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Consideration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">High-Capacity Circuits</td>
                      <td className="p-3">Multiple conductors</td>
                      <td className="p-3 text-green-400">Efficient installation</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Commercial Buildings</td>
                      <td className="p-3">Cost effective</td>
                      <td className="p-3 text-green-400">Large scale projects</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">Industrial Applications</td>
                      <td className="p-3">Durable construction</td>
                      <td className="p-3 text-green-400">Heavy-duty use</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-20.jpg", alt: "Cablebus installation in commercial application with proper support", caption: "Cablebus: High-Capacity Solution" },
            { src: "/images/module-03/m03-21.jpg", alt: "Proper support and securing of cablebus system", caption: "Support Every 20 Feet Maximum" }
          ]
        },
        {
          id: "article-380",
          title: "Article 380 — Multioutlet Assembly",
          body: (
            <>
              <p>
                <HL>380.10</HL>: Multioutlet assemblies can be used in exposed and concealed work in dry locations.
              </p>
              <p>
                <HL>380.12</HL>: Multioutlet assemblies cannot be used in wet locations, hazardous locations, 
                or where exposed to corrosive fumes.
              </p>
              <p>
                <HL>380.15</HL>: Multioutlet assemblies must be supported and secured at intervals not exceeding 5 feet.
              </p>
              <p>
                <HL>380.30</HL>: Multioutlet assemblies must be installed as a complete system without breaks 
                or other than approved fittings.
              </p>
              
              <ChartBox>
                <h4 className="font-bold text-white mb-4 text-center">Multioutlet Assembly Applications</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Common Uses</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Office spaces</li>
                      <li>• Workstations</li>
                      <li>• Conference rooms</li>
                      <li>• Retail displays</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Installation Tips</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Support every 5 feet</li>
                      <li>• Use approved fittings</li>
                      <li>• Consider load calculations</li>
                      <li>• Plan outlet spacing</li>
                    </ul>
                  </div>
                </div>
              </ChartBox>
            </>
          ),
          images: [
                      images: [
            { src: "/images/module-03/m03-22.jpg", alt: "Multioutlet assembly installation in commercial space", caption: "Multioutlet: Convenient Power Distribution" },
            { src: "/images/module-03/m03-23.jpg", alt: "Proper support and securing of multioutlet assembly", caption: "Support Every 5 Feet Maximum" }
          ]
        },
        {
          id: "article-390",
          title: "Article 390 — Underfloor Raceways",
          body: (
            <>
              <p>
                <HL>390.10</HL>: Underfloor raceways can be used in exposed and concealed work in dry locations.
              </p>
              <p>
                <HL>390.12</HL>: Underfloor raceways cannot be used in wet locations, hazardous locations, 
                or where exposed to corrosive fumes.
              </p>
              <p>
                <HL>390.15</HL>: Underfloor raceways must be supported and secured at intervals not exceeding 5 feet.
              </p>
              <p>
                <HL>390.30</HL>: Underfloor raceways must be installed as a complete system without breaks 
                or other than approved fittings.
              </p>
              
              <ChartBox>
                <h4 className="font-bold text-white mb-4 text-center">Underfloor Raceway Benefits & Considerations</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Benefits</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Hidden wiring</li>
                      <li>• Flexible outlet placement</li>
                      <li>• Clean appearance</li>
                      <li>• Easy maintenance access</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-2">Planning Required</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• Floor construction type</li>
                      <li>• Load calculations</li>
                      <li>• Access point locations</li>
                      <li>• Future expansion needs</li>
                    </ul>
                  </div>
                </div>
              </ChartBox>
              
              <HorrorStory>
                <strong>True Story:</strong> A contractor installed underfloor raceways without planning access points. 
                When they needed to add circuits later, they had to cut holes in the floor to reach the raceways. 
                The rework cost more than the original installation. <HL>390.15</HL> exists for a reason—plan your access points!
              </HorrorStory>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-24.jpg", alt: "Underfloor raceway installation in commercial building", caption: "Underfloor: Hidden Power Distribution" },
            { src: "/images/module-03/m03-25.jpg", alt: "Access points and junction boxes for underfloor raceway system", caption: "Plan Access Points Carefully" }
          ]
        }

                {
          id: "article-400",
          title: "Article 400 — Flexible Cords and Cables",
          body: (
            <>
              <p>
                <HL>400.7</HL>: Flexible cords and cables can be used for specific purposes like portable equipment, 
                appliances, and luminaires.
              </p>
              <p>
                <HL>400.8</HL>: Flexible cords and cables cannot be used as a substitute for permanent wiring of structures.
              </p>
              <p>
                <HL>400.10</HL>: Flexible cords and cables must be protected from physical damage and excessive tension.
              </p>
              <p>
                <HL>400.14</HL>: Flexible cords and cables must be used with approved fittings and strain relief.
              </p>
              
              <DataTable>
                <h4 className="font-bold text-white mb-4">Common Flexible Cord Types & Uses</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Type</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Use</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Limitations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">SJ</td>
                      <td className="p-3">Junior hard service</td>
                      <td className="p-3 text-red-400">300V max, indoor use</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">S</td>
                      <td className="p-3">Hard service</td>
                      <td className="p-3 text-red-400">600V max, general use</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">SO</td>
                      <td className="p-3">Oil-resistant</td>
                      <td className="p-3 text-green-400">Oil/coolant exposure</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold">ST</td>
                      <td className="p-3">Extra hard service</td>
                      <td className="p-3 text-green-400">Heavy-duty applications</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
              
              <WarningBox>
                <strong>EXAM TRAP:</strong> The exam loves to ask about flexible cord limitations. Remember: 
                flexible cords are NOT a substitute for permanent wiring. They're for portable equipment, appliances, and luminaires only.
              </WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-26.jpg", alt: "Proper flexible cord usage with strain relief and approved fittings", caption: "Use Strain Relief & Approved Fittings" },
            { src: "/images/module-03/m03-27.jpg", alt: "Protection of flexible cords from physical damage and excessive tension", caption: "Protect From Damage & Tension" }
          ]
        }
      ]}
      summary={{
        title: "Chapter 3 Summary",
        items: [
          {
            icon: <HardHat className="w-8 h-8 text-yellow-400" />,
            title: "Wiring Methods",
            text: "Choose the right raceway for the environment. EMT for dry, PVC for wet, RMC for hazardous."
          },
          {
            icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
            title: "Support Requirements",
            text: "Every wiring method has specific support spacing. Don't guess—check the code!"
          },
          {
            icon: <GitBranch className="w-8 h-8 text-yellow-400" />,
            title: "Box Fill Rules",
            text: "Calculate box volume requirements. Count conductors, grounds, clamps, and device yokes."
          },
          {
            icon: <Building className="w-8 h-8 text-yellow-400" />,
            title: "Location Restrictions",
            text: "Type AC, MC, NM, and flexible cords each have specific uses and limitations."
          },
          {
            icon: <Flame className="w-8 h-8 text-yellow-400" />,
            title: "Physical Protection",
            text: "Protect conductors from damage. Plan for the environment and potential hazards."
          },
          {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Code Compliance",
            text: "Follow NEC requirements exactly. The code exists to keep people safe and installations reliable."
          }
        ]
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-02", label: "Chapter 2" }}
      next={{ href: "/modules/module-04", label: "Chapter 4" }}
    />
  );
}