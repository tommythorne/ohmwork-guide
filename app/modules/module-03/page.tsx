"use client";

import {
  AlertTriangle,
  Zap,
  ShieldCheck,
  Plug,
  Cable,
  Building,
  Flame,
  Target,
  Waypoints,
  GitBranch,
  Ruler,
  BookOpen,
  Brain,
  CircuitBoard,
  Wrench
} from "lucide-react";

import ModuleTemplate from "../../components/ModuleTemplate";
import Image from "next/image"; // only used inside helper snippets if needed

// Local helper blocks (keeps pages self-contained and consistent with Module 2)
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

// Quiz (15) — Chapter 3 topics only
const quiz = [
  {
    id: 1,
    stem: "Raceway bends between pull points are limited to a maximum cumulative angle of:",
    choices: [
      { key: "A", text: "180°" },
      { key: "B", text: "270°" },
      { key: "C", text: "360°" },
      { key: "D", text: "No limit" }
    ],
    answer: "C",
    why: "Most Chapter 3 raceway articles limit to 360° total (e.g., EMT 358.26, RMC 344.26)."
  },
  {
    id: 2,
    stem: "In general, conductors of the same circuit must be installed:",
    choices: [
      { key: "A", text: "In separate raceways for heat dissipation" },
      { key: "B", text: "Together in the same raceway/cable/trench" },
      { key: "C", text: "Neutral may be separate, hots together" },
      { key: "D", text: "Hots separate, neutral with EGC" }
    ],
    answer: "B",
    why: "NEC 300.3(B): conductors of the same circuit must be grouped together."
  },
  {
    id: 3,
    stem: "EMT (Article 358) is permitted in wet locations when:",
    choices: [
      { key: "A", text: "Never permitted in wet locations" },
      { key: "B", text: "Only when encased in concrete" },
      { key: "C", text: "Fittings and protection are listed for wet/corrosive use" },
      { key: "D", text: "Only indoors" }
    ],
    answer: "C",
    why: "EMT can be used in wet locations where protected and with listed fittings; check 358.10/358.42 and corrosion protection."
  },
  {
    id: 4,
    stem: "For more than two conductors in a raceway, the maximum permissible conductor fill is:",
    choices: [
      { key: "A", text: "31%" },
      { key: "B", text: "40%" },
      { key: "C", text: "53%" },
      { key: "D", text: "60%" }
    ],
    answer: "B",
    why: "Chapter 9, Table 1: >2 conductors → 40% fill; 1 conductor 53%; 2 conductors 31%."
  },
  {
    id: 5,
    stem: "Type NM cable belongs to which article in Chapter 3?",
    choices: [
      { key: "A", text: "Article 340" },
      { key: "B", text: "Article 334" },
      { key: "C", text: "Article 352" },
      { key: "D", text: "Article 392" }
    ],
    answer: "B",
    why: "Type NM is Article 334 (Nonmetallic-Sheathed Cable) in Chapter 3."
  },
  {
    id: 6,
    stem: "Minimum burial depth for PVC (rigid nonmetallic) under a residential driveway (not subject to truck traffic) is typically:",
    choices: [
      { key: "A", text: "12 inches" },
      { key: "B", text: "18 inches" },
      { key: "C", text: "24 inches" },
      { key: "D", text: "36 inches" }
    ],
    answer: "C",
    why: "See 300.5 and related tables for minimum cover. Driveways commonly require 24\" for RNC."
  },
  {
    id: 7,
    stem: "Type LFMC (350) requires supports at intervals not exceeding:",
    choices: [
      { key: "A", text: "3 ft" },
      { key: "B", text: "4.5 ft" },
      { key: "C", text: "6 ft" },
      { key: "D", text: "10 ft" }
    ],
    answer: "B",
    why: "Article 350.30—LFMC support intervals commonly 4.5 ft; verify specifics by size/conditions."
  },
  {
    id: 8,
    stem: "Parallel conductors (310) must generally be:",
    choices: [
      { key: "A", text: "Same size, length, and material" },
      { key: "B", text: "Any size if ampacity matches" },
      { key: "C", text: "Different insulation allowed without limits" },
      { key: "D", text: "Installed in separate raceways" }
    ],
    answer: "A",
    why: "310.10(H): Same length, size, insulation material, and termination."
  },
  {
    id: 9,
    stem: "Boxes and conduit bodies used for splices must have adequate volume per:",
    choices: [
      { key: "A", text: "Article 312" },
      { key: "B", text: "Article 314.16" },
      { key: "C", text: "Article 300.11" },
      { key: "D", text: "Article 376" }
    ],
    answer: "B",
    why: "314.16—box fill requirements and counting rules."
  },
  {
    id: 10,
    stem: "Type MC (330) permitted in wet locations:",
    choices: [
      { key: "A", text: "Never" },
      { key: "B", text: "Only when specifically listed for wet locations" },
      { key: "C", text: "Only underground" },
      { key: "D", text: "Only outdoors above grade" }
    ],
    answer: "B",
    why: "330.10(A): MC permitted in wet locations if listed for the purpose."
  },
  {
    id: 11,
    stem: "ENT (362) is commonly allowed:",
    choices: [
      { key: "A", text: "Only exposed outdoors" },
      { key: "B", text: "In concrete slabs where listed for the use" },
      { key: "C", text: "In hazardous locations only" },
      { key: "D", text: "As a service raceway only" }
    ],
    answer: "B",
    why: "362.10—ENT permitted in concrete/slabs where listed and protected as required."
  },
  {
    id: 12,
    stem: "Cable tray (392) must be:",
    choices: [
      { key: "A", text: "Insulated" },
      { key: "B", text: "Bonded and supported per manufacturer/Code" },
      { key: "C", text: "Used only for control wiring" },
      { key: "D", text: "Filled to 60% to prevent heat rise" }
    ],
    answer: "B",
    why: "392—bonding and support rules are explicit; fill and ampacity follow tray type/tables."
  },
  {
    id: 13,
    stem: "Box/conduit body covers must be:",
    choices: [
      { key: "A", text: "Open to ventilate heat" },
      { key: "B", text: "Weatherproof where required" },
      { key: "C", text: "Painted white for visibility" },
      { key: "D", text: "Not required if indoors" }
    ],
    answer: "B",
    why: "Chapter 3 articles require suitable enclosures/covers matched to the environment."
  },
  {
    id: 14,
    stem: "RMC (344) support spacing is typically:",
    choices: [
      { key: "A", text: "Every 3 ft" },
      { key: "B", text: "Every 6 ft" },
      { key: "C", text: "Every 10 ft" },
      { key: "D", text: "No supports required if threaded" }
    ],
    answer: "C",
    why: "344.30—commonly 10 ft, with exceptions by size/termination; verify table/notes."
  },
  {
    id: 15,
    stem: "Surface metal/nonmetallic raceways (386/388) often used for:",
    choices: [
      { key: "A", text: "Underground feeders" },
      { key: "B", text: "Aesthetic outdoor landscaping" },
      { key: "C", text: "Retrofit surface wiring in finished spaces" },
      { key: "D", text: "Conductors over 35kV" }
    ],
    answer: "C",
    why: "386/388—surface raceways are common for retrofit in existing finished interiors."
  }
];

export default function Module03Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-03/m03-01.jpg",
        imageAlt: "NEC Chapter 3 Wiring Methods & Materials — raceways, cables, boxes",
        title: "Chapter 3 — Wiring Methods and Materials",
        subtitle: "Raceways, cables, boxes, and the field rules that keep them safe.",
        blurb:
          "Master EMT vs. RMC vs. PVC, box-fill math, support spacing, burial depths, and conductor rules. This is the craft—do it right, pass the exam, and wire like a pro."
      }}
      articles={[
        {
          id: "article-300",
          title: "Article 300 — General Requirements for Wiring Methods",
          body: (
            <>
              <p><HL>300.3(B)</HL>: Conductors of the same circuit must be installed together in the same raceway/cable/trench to control inductive heating and magnetic effects.</p>
              <p><HL>300.5</HL>: Underground wiring—observe minimum cover requirements. Depth varies by wiring method and location (e.g., yards, driveways, streets).</p>
              <p><HL>300.11</HL>: Securely fasten and support wiring methods; do not use ceiling grid wires unless listed for that use.</p>
              <p><HL>300.15</HL>: Boxes/conduit bodies required at every splice, outlet, switch, junction, or pull point—no open splices.</p>
              <CodeBox>Common memory: <strong>18 / 24 / 36</strong> inches for direct burial / residential driveways / public streets (confirm in 300.5 Table for your installation).</CodeBox>
              <WarningBox>Burial depth questions are an exam favorite. Read the entire row/footnotes of the 300.5 table—context changes the answer.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-02.jpg", alt: "Underground raceway trench with depth marker", caption: "Respect 300.5 burial depths" },
            { src: "/images/module-03/m03-03.jpg", alt: "Properly supported conduit along structure", caption: "Fasten & support per 300.11" }
          ]
        },
        {
          id: "article-310",
          title: "Article 310 — Conductors for General Wiring",
          body: (
            <>
              <p><HL>310.10</HL>: Use conductors suitable for environment and temperature rating (60/75/90°C) and location (dry/wet).</p>
              <p><HL>310.15</HL>: Apply ampacity adjustment (more than 3 CCC in a raceway/cable) and temperature correction (ambient &gt; 30°C/86°F) as required.</p>
              <p><HL>310.10(H)</HL>: Parallel conductors must be same length, size, insulation, and material; terminate alike.</p>
              <DataTable>
                <h4 className="font-bold text-white mb-3">Common Insulation Ratings</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Type</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Rating</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="p-3 font-semibold">THHN</td><td className="p-3">90°C (dry)</td><td className="p-3 text-green-400">Common in raceways</td></tr>
                    <tr><td className="p-3 font-semibold">THWN/THWN-2</td><td className="p-3">75°C/90°C (wet)</td><td className="p-3 text-green-400">Wet locations</td></tr>
                    <tr><td className="p-3 font-semibold">XHHW/XHHW-2</td><td className="p-3">90°C</td><td className="p-3 text-green-400">Higher temp, robust</td></tr>
                  </tbody>
                </table>
              </DataTable>
              <RuleBox>Use the <strong>lowest</strong> limiting temperature in the circuit (device lugs, environment, conductor) for ampacity decisions.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-04.jpg", alt: "Spools of THHN/THWN conductors", caption: "Pick insulation for the environment" },
            { src: "/images/module-03/m03-05.jpg", alt: "Parallel feeder conductors in a gutter", caption: "Paralleling rules matter" }
          ]
        },
        {
          id: "article-312",
          title: "Article 312 — Cabinets, Cutout Boxes, and Meter Sockets",
          body: (
            <>
              <p><HL>312.2</HL>: Enclosures must be of adequate size for conductors/devices and suitable for the environment (e.g., damp/wet).</p>
              <p><HL>312.5</HL>: Conductor entries require listed fittings and smooth edges to protect insulation.</p>
              <p><HL>312.8</HL>: Ground enclosures per Article 250; do not use as splice boxes unless specifically allowed/with space.</p>
              <DataTable>
                <h4 className="font-bold text-white mb-3">Cabinet Quick Checks</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Item</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="p-3 font-semibold">Entry fittings</td><td className="p-3">Listed, smooth edges (312.5)</td></tr>
                    <tr><td className="p-3 font-semibold">Grounding</td><td className="p-3">Bond per 250/312.8</td></tr>
                    <tr><td className="p-3 font-semibold">Space</td><td className="p-3">No crowding (312.2)</td></tr>
                  </tbody>
                </table>
              </DataTable>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-06.jpg", alt: "Cabinet with correct bushing/fitting", caption: "Use listed entry fittings" },
            { src: "/images/module-03/m03-07.jpg", alt: "Bonding in metal cabinet", caption: "Bond it right" }
          ]
        },
        {
          id: "article-314",
          title: "Article 314 — Outlet, Device, Pull, and Junction Boxes",
          body: (
            <>
              <p><HL>314.16(A)</HL>: Box volume (cubic inches) must be ≥ sum of conductor/device allowances.</p>
              <p><HL>314.16(B)</HL>: Counting rules—each unbroken conductor entering (1×), all EGCs together (1× of largest), internal clamps (1×), each device yoke (2× of largest conductor connected).</p>
              <ChartBox>
                <h4 className="font-bold text-white mb-3 text-center">12 AWG Example</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-1">Allowances</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• 3 × 12 AWG conductors = 3 × 2.25 = 6.75 in³</li>
                      <li>• EGCs together = 2.25 in³</li>
                      <li>• 1 device yoke = 2 × 2.25 = 4.5 in³</li>
                      <li><strong>Total = 13.5 in³</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-400 mb-1">Pick a Box</h5>
                    <ul className="text-white/85 text-sm space-y-1">
                      <li>• 18 in³ round/handy box ❌ (too small)</li>
                      <li>• 21 in³ 4″ square box ✅</li>
                    </ul>
                  </div>
                </div>
              </ChartBox>
              <HorrorStory>Inspector red-tagged a remodel: 8 conductors stuffed in a small switch box. Crew spent half a day upsizing boxes. Do the math first.</HorrorStory>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-08.jpg", alt: "Box fill layout with counted conductors", caption: "Count everything correctly" },
            { src: "/images/module-03/m03-09.jpg", alt: "Assorted boxes with volume markings", caption: "Check cubic inch markings" }
          ]
        },
        {
          id: "article-320",
          title: "Article 320 — Armored Cable (Type AC)",
          body: (
            <>
              <p><HL>320.10</HL>: Type AC cable for dry locations; armor provides mechanical protection and can serve as EGC (when properly bonded).</p>
              <p><HL>320.30</HL>: Secure within 12 inches of boxes and at intervals not exceeding 4.5 feet.</p>
              <RuleBox>Use listed fittings and anti-short bushings per manufacturer; bond terminations.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-10.jpg", alt: "AC cable terminated with anti-short bushing", caption: "Anti-short + listed connectors" },
            { src: "/images/module-03/m03-11.jpg", alt: "Supported AC cable along studs", caption: "Support ≤ 4.5 ft, within 12″ of boxes" }
          ]
        }, {
          id: "article-330",
          title: "Article 330 — Metal-Clad Cable (Type MC)",
          body: (
            <>
              <p><HL>330.10</HL>: Permitted in dry, damp, and <strong>wet</strong> locations when specifically listed.</p>
              <p><HL>330.30</HL>: Secure within 12 inches of boxes and supported at intervals not over 6 feet.</p>
              <WarningBox>Not all MC is wet-rated! Look for the <strong>green stripe</strong> or listed marking before using outdoors or underground.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-12.jpg", alt: "MC cable with green stripe jacket", caption: "MC listed for wet use" },
            { src: "/images/module-03/m03-13.jpg", alt: "Proper MC connectors with locknut and bushing", caption: "Bond and support properly" }
          ]
        },
        {
          id: "article-334",
          title: "Article 334 — Nonmetallic-Sheathed Cable (Type NM, NMC, NMS)",
          body: (
            <>
              <p><HL>334.10</HL>: NM cable permitted only in normally dry locations (typically residential/light commercial).</p>
              <p><HL>334.30</HL>: Secure within 12 inches of boxes and at intervals not over 4.5 feet.</p>
              <p><HL>334.80</HL>: Ampacity must be based on 60°C column of 310.15 even if insulation marked higher, unless all terminations are 75°C-rated.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-14.jpg", alt: "NM cable stapled neatly on studs", caption: "Staple within 12″, ≤4.5 ft intervals" },
            { src: "/images/module-03/m03-15.jpg", alt: "NM cable entering box with clamp", caption: "Use listed box clamps" }
          ]
        },
        {
          id: "article-338",
          title: "Article 338 — Service-Entrance Cable (SE/USE)",
          body: (
            <>
              <p><HL>338.10</HL>: Type SE used above ground, Type USE for direct burial.</p>
              <p><HL>338.12</HL>: USE not permitted for interior wiring above grade due to flame-spread characteristics.</p>
              <p><HL>338.24</HL>: Support SE cable at intervals not exceeding 30 inches and within 12 inches of enclosures.</p>
              <RuleBox>Always check whether the installation requires SE (above grade) vs USE (underground). Wrong type = red tag.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-16.jpg", alt: "SE cable riser with support straps", caption: "Support ≤ 30″, bond correctly" },
            { src: "/images/module-03/m03-17.jpg", alt: "USE cable direct buried", caption: "USE for direct burial only" }
          ]
        },
        {
          id: "article-340",
          title: "Article 340 — Underground Feeder and Branch-Circuit Cable (Type UF)",
          body: (
            <>
              <p><HL>340.10</HL>: UF cable may be used direct-buried in the earth; must be listed for wet locations.</p>
              <p><HL>340.12</HL>: Not permitted where subject to physical damage unless protected by conduit.</p>
              <p><HL>300.5</HL> table still governs burial depth—often 24 inches cover.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-18.jpg", alt: "UF cable direct buried in trench", caption: "UF = direct burial rated" },
            { src: "/images/module-03/m03-19.jpg", alt: "UF cable entering conduit sleeve", caption: "Protect where emerging from earth" }
          ]
        },
        {
          id: "article-348",
          title: "Article 348 — Flexible Metal Conduit (FMC)",
          body: (
            <>
              <p><HL>348.10</HL>: Permitted in dry locations; limited lengths where subject to physical damage.</p>
              <p><HL>348.30</HL>: Secure within 12 inches of boxes, support at intervals not over 4.5 feet.</p>
              <WarningBox>Do not use FMC as an equipment grounding conductor unless permitted and properly bonded.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-20.jpg", alt: "Short FMC whip to luminaire", caption: "FMC for short connections" },
            { src: "/images/module-03/m03-21.jpg", alt: "Unsupported long FMC run", caption: "Avoid exceeding support spacing" }
          ]
        },
        {
          id: "article-350",
          title: "Article 350 — Liquidtight Flexible Metal Conduit (LFMC)",
          body: (
            <>
              <p><HL>350.10</HL>: LFMC permitted in wet, dry, or oily locations; common for motors and rooftop AC.</p>
              <p><HL>350.30</HL>: Support within 12 inches of boxes and every 4.5 feet.</p>
              <p>Use fittings listed for liquidtight connections.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-22.jpg", alt: "LFMC whip to rooftop AC unit", caption: "LFMC common in HVAC" },
            { src: "/images/module-03/m03-23.jpg", alt: "LFMC connector with gasket", caption: "Listed liquidtight fitting" }
          ]
        },
        {
          id: "article-352",
          title: "Article 352 — Rigid Polyvinyl Chloride Conduit (PVC)",
          body: (
            <>
              <p><HL>352.10</HL>: PVC permitted in exposed or concealed locations, above/below grade, subject to limitations.</p>
              <p><HL>352.30</HL>: Support as required (typically every 3 ft, closer if smaller size).</p>
              <p><HL>352.44</HL>: Expansion fittings required where temperature change causes &gt; ¼ in. movement between boxes.</p>
              <CodeBox>Remember: PVC <strong>must be sunlight resistant</strong> if exposed to direct sunlight (352.12(D)).</CodeBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-24.jpg", alt: "PVC underground run with expansion fitting", caption: "Expansion joints for temp change" },
            { src: "/images/module-03/m03-25.jpg", alt: "PVC stub up with threaded adapter", caption: "Transition with listed fittings" }
          ]
        },
        {
          id: "article-355",
          title: "Article 355 — Reinforced Thermosetting Resin Conduit (RTRC)",
          body: (
            <>
              <p><HL>355.10</HL>: Permitted in exposed, concealed, or underground installations; lightweight fiberglass conduit.</p>
              <p><HL>355.12</HL>: Not permitted where subject to physical abuse.</p>
              <p><HL>355.30</HL>: Support similar to PVC—per size, typically 3–5 feet.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-26.jpg", alt: "RTRC fiberglass conduit run", caption: "Lightweight and corrosion resistant" },
            { src: "/images/module-03/m03-27.jpg", alt: "RTRC conduit fittings", caption: "Use only listed couplings" }
          ]
        },
        {
          id: "article-356",
          title: "Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC)",
          body: (
            <>
              <p><HL>356.10</HL>: LFNC permitted in dry, damp, or wet locations; common for control wiring, HVAC.</p>
              <p><HL>356.30</HL>: Secure within 12 inches of boxes and at intervals not over 3 feet (tighter than LFMC!).</p>
              <RuleBox>Support spacing is a frequent exam gotcha: LFMC = 4.5 ft, LFNC = 3 ft.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-28.jpg", alt: "LFNC conduit to pool equipment", caption: "LFNC for wet/outdoor control circuits" },
            { src: "/images/module-03/m03-29.jpg", alt: "LFNC coiled in storage", caption: "Handle gently to avoid kinks" }
          ]
        },        {
          id: "article-362",
          title: "Article 362 — Electrical Nonmetallic Tubing (ENT)",
          body: (
            <>
              <p><HL>362.10</HL>: ENT (“Smurf tube”) permitted in dry, concealed locations; some types listed for concrete encasement.</p>
              <p><HL>362.12</HL>: Not permitted where subject to physical damage or direct sunlight unless listed and protected.</p>
              <p><HL>362.30</HL>: Support per size (often 3 ft) and within 3 ft of boxes.</p>
              <RuleBox>Pull string before drywall — ENT runs can be long and curvy, which makes re-pulls tough.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-30.jpg", alt: "ENT tubing in stud bay", caption: "ENT: quick for low-voltage & branch circuits" },
            { src: "/images/module-03/m03-31.jpg", alt: "ENT fittings and terminations", caption: "Use listed ENT fittings" }
          ]
        },
        {
          id: "article-368",
          title: "Article 368 — Busways",
          body: (
            <>
              <p><HL>368.10</HL>: Busways permitted for feeders and branch circuits; provide tap boxes at marked locations only.</p>
              <p><HL>368.30</HL>: Support per manufacturer instructions; consider thermal expansion and alignment.</p>
              <p><HL>368.56</HL>: Equipment grounding via busway housing if listed; otherwise provide EGC.</p>
              <WarningBox>Do not field-drill the housing for taps. Use listed plug-in/feeder tap units only.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-32.jpg", alt: "Overhead busway with plug-in units", caption: "Modular distribution along a line" },
            { src: "/images/module-03/m03-33.jpg", alt: "Busway support hangers", caption: "Follow mfr. support spacing" }
          ]
        },
        {
          id: "article-376_378",
          title: "Articles 376 & 378 — Wireways (Metal & Nonmetallic)",
          body: (
            <>
              <p><HL>376.22 / 378.22</HL>: Fill limited to <strong>20%</strong> of the wireway’s cross-sectional area for conductors.</p>
              <p><HL>376.23 / 378.23</HL>: Adjustment factors for more than 30 conductors in the same cross-section.</p>
              <p><HL>376.30 / 378.30</HL>: Support per code and mfr.; maintain covers, bonding, and continuity.</p>
              <CodeBox>Wireways are for routing/transition, not for splicing “everywhere.” Keep splices minimal and accessible.</CodeBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-34.jpg", alt: "Metal wireway over panel row", caption: "Keep fill ≤ 20%" },
            { src: "/images/module-03/m03-35.jpg", alt: "Nonmetallic wireway with cover", caption: "Secure covers; bond metallic types" }
          ]
        },
        {
          id: "article-386_388",
          title: "Articles 386 & 388 — Surface Metal/Nonmetallic Raceways",
          body: (
            <>
              <p><HL>386.10 / 388.10</HL>: Permitted on surfaces of walls/ceilings where concealed wiring is impractical.</p>
              <p><HL>386.30 / 388.30</HL>: Support and secure per listing; use listed fittings for device boxes/transitions.</p>
              <p>Maintain box fill, conductor ampacity, and derating as if in raceway.</p>
              <RuleBox>Great for retrofits — plan device locations first to minimize elbows and box fill headaches.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-36.jpg", alt: "Surface metal raceway with device boxes", caption: "Clean retrofit pathway" },
            { src: "/images/module-03/m03-37.jpg", alt: "Surface nonmetallic raceway segments", caption: "Use matching, listed fittings" }
          ]
        },
        {
          id: "article-392",
          title: "Article 392 — Cable Tray",
          body: (
            <>
              <p><HL>392.10</HL>: Use only cables listed for tray (TC, MI, MV, etc.); ladder/trough/solid-bottom types per environment.</p>
              <p><HL>392.22</HL>: Fill and support per code; maintain side rails as mechanical protection.</p>
              <p><HL>392.60</HL>: Bonding required; treat tray as an EGC only when specifically permitted and sized.</p>
              <WarningBox>Support spacing and cable type/listing in trays are frequent red tags — check the nameplate and the table.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-38.jpg", alt: "Ladder cable tray with TC-ER cables", caption: "Only tray-rated cable types" },
            { src: "/images/module-03/m03-39.jpg", alt: "Bonding jumper across tray splice", caption: "Bond tray sections" }
          ]
        }
      ]}
      summary={{
        title: "Chapter 3 Summary",
        items: [
          {
            icon: <HardHat className="w-8 h-8 text-yellow-400" />,
            title: "Pick the Right Method",
            text: "Match wiring methods to the location: wet, corrosive, physical damage, or temperature swings."
          },
          {
            icon: <Ruler className="w-8 h-8 text-yellow-400" />,
            title: "Support & Spacing",
            text: "Know the intervals: FMC 4.5 ft, LFMC 4.5 ft, LFNC 3 ft, MC 6 ft, NM 4.5 ft, etc."
          },
          {
            icon: <GitBranch className="w-8 h-8 text-yellow-400" />,
            title: "Box/Wireway Fill",
            text: "Apply box-conductor allowances and keep wireway fill ≤ 20% cross-section."
          },
          {
            icon: <Building className="w-8 h-8 text-yellow-400" />,
            title: "Raceway Rules",
            text: "Put all circuit conductors in the same raceway; watch expansion and sunlight resistance."
          },
          {
            icon: <Flame className="w-8 h-8 text-yellow-400" />,
            title: "Bonding & Grounding",
            text: "Ensure metallic systems are bonded; use EGCs properly where tray/housings are not permitted."
          },
          {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Listings Matter",
            text: "Only use wiring methods and fittings that are listed for the conditions of use."
          }
        ]
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-02", label: "Chapter 2" }}
      next={{ href: "/modules/module-04", label: "Chapter 4" }}
    />
  );
}