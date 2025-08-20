"use client";

import React from "react";
import ModuleTemplate, {
  ArticleHeader,
  Section,
  ImageCard,
  HL,
  WarningBox,
  RuleBox,
  CodeBox,
  HorrorStory,
  DataTable,
  ChartBox,
  Zap,
  Cable,
  Building,
  Plug,
  Shield
} from "../../components/ModuleTemplate";

const quiz = [
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
    stem: "What is the minimum box volume required for four 12 AWG conductors and one device?",
    choices: [
      { key: "A", text: "12.5 cubic inches" },
      { key: "B", text: "16.5 cubic inches" },
      { key: "C", text: "20.5 cubic inches" },
      { key: "D", text: "24.5 cubic inches" }
    ],
    answer: "B",
    why: "Each 12 AWG conductor = 2.25 in³, device = 2 x 2.25 in³. (4+2=6) x 2.25 = 13.5 in³. With ground, 16.5 in³ is required."
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
] as const;

const sections = [
  <Section key="300">
    <ArticleHeader
      icon={<div className="p-2 bg-yellow-400/20 rounded-lg"><Zap className="w-6 h-6 text-yellow-400" /></div>}
      title="Article 300 — General Requirements for Wiring Methods"
    />
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <div className="space-y-4 text-gray-300">
          <p><HL>300.3</HL>: All conductors of the same circuit must be contained within the same raceway, cable, or enclosure.</p>
          <p><HL>300.4</HL>: Protection against physical damage required where wiring methods are subject to damage.</p>
          <p><HL>300.5</HL>: Minimum cover requirements for underground installations vary by location and circuit type.</p>
          <p><HL>300.11</HL>: Wiring methods shall be securely fastened in place.</p>
          <p><HL>300.15</HL>: Boxes or conduit bodies required at all splice, tap, and termination points.</p>
        </div>
        <WarningBox>
          Common violation: Splitting circuit conductors between different raceways or cables. All circuit conductors must stay together!
        </WarningBox>
      </div>
      <div className="space-y-4">
        <ImageCard
          src="/images/module-03/m03-02.jpg"
          alt="Proper conductor grouping in raceway"
          caption="All circuit conductors grouped together"
        />
        <ImageCard
          src="/images/module-03/m03-03.jpg"
          alt="Underground installation with proper depth markings"
          caption="Underground installation requirements"
        />
      </div>
    </div>
  </Section>,

  <Section key="310">
    <ArticleHeader
      icon={<div className="p-2 bg-blue-400/20 rounded-lg"><Cable className="w-6 h-6 text-blue-400" /></div>}
      title="Article 310 — Conductors for General Wiring"
    />
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <div className="space-y-4 text-gray-300">
          <p><HL>310.10</HL>: Conductor construction and applications must be suitable for installation conditions.</p>
          <p><HL>310.15</HL>: Ampacities based on ambient temperature, number of conductors, and installation method.</p>
          <p><HL>310.104</HL>: Conductor insulation types and requirements for various applications.</p>
        </div>
        <DataTable>
          <h4 className="font-bold text-white mb-4">Common Conductor Types</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400">Type</th>
                <th className="text-left p-3 text-yellow-400">Max Temp</th>
                <th className="text-left p-3 text-yellow-400">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3">THHN</td><td className="p-3">90°C</td><td className="p-3">Dry/Damp</td></tr>
              <tr><td className="p-3">XHHW</td><td className="p-3">90°C</td><td className="p-3">Dry/Wet</td></tr>
              <tr><td className="p-3">THW</td><td className="p-3">75°C</td><td className="p-3">Dry/Wet</td></tr>
            </tbody>
          </table>
        </DataTable>
      </div>
      <div className="space-y-4">
        <ImageCard
          src="/images/module-03/m03-04.jpg"
          alt="Various conductor insulation types"
          caption="Common conductor insulation types"
        />
        <ImageCard
          src="/images/module-03/m03-05.jpg"
          alt="Conductor ampacity calculation example"
          caption="Ampacity calculation factors"
        />
      </div>
    </div>
  </Section>,

  <Section key="314">
    <ArticleHeader
      icon={<div className="p-2 bg-green-400/20 rounded-lg"><Building className="w-6 h-6 text-green-400" /></div>}
      title="Article 314 — Outlet, Device, Pull, and Junction Boxes"
    />
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <div className="space-y-4 text-gray-300">
          <p><HL>314.16</HL>: Box fill calculations required based on conductor count, clamps, and devices.</p>
          <p><HL>314.23</HL>: Boxes must be securely fastened and supported independently.</p>
          <p><HL>314.25</HL>: Covers required to protect wiring and connections.</p>
          <p><HL>314.29</HL>: Boxes must remain accessible after installation.</p>
        </div>
        <ChartBox>
          <h4 className="font-bold text-white mb-4">Box Fill Calculations</h4>
          <ul className="space-y-2 text-gray-300">
            <li>• Each conductor counts as one volume unit</li>
            <li>• Device counts as two volume units</li>
            <li>• All ground wires together count as one unit</li>
            <li>• Each internal cable clamp counts as one unit</li>
          </ul>
        </ChartBox>
      </div>
      <div className="space-y-4">
        <ImageCard
          src="/images/module-03/m03-06.jpg"
          alt="Box fill calculation diagram"
          caption="Box fill requirements"
        />
        <ImageCard
          src="/images/module-03/m03-07.jpg"
          alt="Proper box support and accessibility"
          caption="Box support and access"
        />
      </div>
    </div>
  </Section>,

  <Section key="320-330-334">
    <ArticleHeader
      icon={<div className="p-2 bg-purple-400/20 rounded-lg"><Cable className="w-6 h-6 text-purple-400" /></div>}
      title="Articles 320, 330, 334 — Cable Types"
    />
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <div className="space-y-4 text-gray-300">
          <p><HL>320</HL>: Armored Cable (Type AC) requirements and uses.</p>
          <p><HL>330</HL>: Metal-Clad Cable (Type MC) installation and support.</p>
          <p><HL>334</HL>: Nonmetallic-Sheathed Cable (Type NM) limitations.</p>
        </div>
        <DataTable>
          <h4 className="font-bold text-white mb-4">Cable Type Comparison</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400">Type</th>
                <th className="text-left p-3 text-yellow-400">Support</th>
                <th className="text-left p-3 text-yellow-400">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3">AC</td><td className="p-3">4.5 ft</td><td className="p-3">Dry only</td></tr>
              <tr><td className="p-3">MC</td><td className="p-3">6 ft</td><td className="p-3">Wet/Dry</td></tr>
              <tr><td className="p-3">NM</td><td className="p-3">4.5 ft</td><td className="p-3">Dry only</td></tr>
            </tbody>
          </table>
        </DataTable>
      </div>
      <div className="space-y-4">
        <ImageCard
          src="/images/module-03/m03-08.jpg"
          alt="Cable type installations"
          caption="Different cable type installations"
        />
        <ImageCard
          src="/images/module-03/m03-09.jpg"
          alt="Cable support methods"
          caption="Proper cable support methods"
        />
      </div>
    </div>
  </Section>
];

export default function Module03() {
  return (
    <ModuleTemplate
      title="Chapter 3 — Wiring Methods and Materials"
      subtitle="Master the requirements for wiring methods, raceways, cables, and boxes that ensure safe and code-compliant installations."
      heroImage={{
        src: "/images/module-03/m03-01.jpg",
        alt: "Various electrical wiring methods and materials"
      }}
      stats={{
        articles: 20,
        questions: 10,
        visuals: 15
      }}
      sections={sections}
      summary={{
        title: "Chapter 3 Key Points",
        blurb: "Essential concepts for wiring methods and materials",
        cards: [
          {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "General Requirements",
            text: "Circuit conductor grouping, physical protection, and support requirements"
          },
          {
            icon: <Cable className="w-8 h-8 text-yellow-400" />,
            title: "Conductors",
            text: "Sizing, insulation types, and ampacity calculations"
          },
          {// ...existing code...
          {
            icon: <Cable className="w-8 h-8 text-yellow-400" />,
            title: "Conductors",
            text: "Sizing, insulation types, and ampacity calculations"
          },
          {
            icon: <Building className="w-8 h-8 text-yellow-400" />,
            title: "Boxes",
            text: "Box fill calculations, support, and accessibility"
          },
          {
            icon: <Shield className="w-8 h-8 text-yellow-400" />,
            title: "Protection",
            text: "Physical damage protection and burial requirements"
          },
          {
            icon: <Plug className="w-8 h-8 text-yellow-400" />,
            title: "Cable Types",
            text: "AC, MC, and NM cable requirements and limitations"
          }
        ]
      }}
      quizQuestions={quiz}
      prev={{ href: "/modules/module-02", label: "Chapter 2" }}
      next={{ href: "/modules/module-04", label: "Chapter 4" }}
    />
  );
}