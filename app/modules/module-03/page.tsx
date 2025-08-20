"use client";

import { AlertTriangle, Zap, Shield, Plug, Cable, Building, Flame, Target, Waypoints, GitBranch, Ruler, BookOpen, Brain, HardHat, Droplets, CircuitBoard, Wrench, Warehouse } from "lucide-react";
import ModuleTemplate from "../../components/ModuleTemplate";

/** ---------- Helpers (match Module-02) ---------- */
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
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">{children}</div>
);

const ChartBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">{children}</div>
);

/** ---------- Quiz (15 questions, Chapter 3 only) ---------- */
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
    stem: "NEC 300.3 requires conductors of the same circuit be installed:",
    choices: [
      { key: "A", text: "In separate raceways to reduce heating" },
      { key: "B", text: "Together in the same raceway, cable, or enclosure" },
      { key: "C", text: "In any manner if ampacity is derated" },
      { key: "D", text: "Only in metal raceways" },
    ],
    answer: "B",
    why: "300.3(B) — Conductors of the same circuit must be grouped together."
  },
  {
    id: 2,
    stem: "Typical maximum support spacing for RMC/IMC in exposed work is:",
    choices: [
      { key: "A", text: "4.5 ft" },
      { key: "B", text: "6 ft" },
      { key: "C", text: "10 ft" },
      { key: "D", text: "12 ft" },
    ],
    answer: "C",
    why: "344.30 and 342.30 — Support within 3 ft of boxes and at intervals not exceeding 10 ft."
  },
  {
    id: 3,
    stem: "EMT may be used in wet locations when:",
    choices: [
      { key: "A", text: "Always prohibited in wet locations" },
      { key: "B", text: "Protected against corrosion and with listed rain-tight fittings" },
      { key: "C", text: "Only underground" },
      { key: "D", text: "Only in hazardous (Class I) locations" },
    ],
    answer: "B",
    why: "358.10, 358.14 — EMT allowed in wet if protected and with listed fittings."
  },
  {
    id: 4,
    stem: "LFMC support intervals generally must not exceed:",
    choices: [
      { key: "A", text: "3 ft" },
      { key: "B", text: "4.5 ft" },
      { key: "C", text: "6 ft" },
      { key: "D", text: "10 ft" },
    ],
    answer: "B",
    why: "350.30 — Support within 12 in. of boxes and at ≤ 4.5 ft intervals."
  },
  {
    id: 5,
    stem: "FMC (348) is permitted primarily in:",
    choices: [
      { key: "A", text: "Wet locations" },
      { key: "B", text: "Dry locations where flexibility is needed" },
      { key: "C", text: "Direct burial" },
      { key: "D", text: "As service-entrance raceway" },
    ],
    answer: "B",
    why: "348.10 — FMC suited to dry locations, equipment connections, vibration."
  },
  {
    id: 6,
    stem: "ENT (362) is commonly allowed:",
    choices: [
      { key: "A", text: "In direct sunlight without protection" },
      { key: "B", text: "In concrete slabs and dry locations where listed" },
      { key: "C", text: "In Class I, Division 1 by default" },
      { key: "D", text: "As a grounding electrode conductor" },
    ],
    answer: "B",
    why: "362.10 — ENT permitted in certain concrete and dry locations; limitations apply."
  },
  {
    id: 7,
    stem: "PVC (352) outdoor runs typically require:",
    choices: [
      { key: "A", text: "Bonding bushings" },
      { key: "B", text: "Expansion fittings for thermal movement" },
      { key: "C", text: "Only stainless straps" },
      { key: "D", text: "Threaded fittings" },
    ],
    answer: "B",
    why: "352.44 — Expansion fittings required where temperature change causes movement."
  },
  {
    id: 8,
    stem: "Wireway (376) maximum cross-sectional conductor fill is:",
    choices: [
      { key: "A", text: "20%" },
      { key: "B", text: "30%" },
      { key: "C", text: "40%" },
      { key: "D", text: "53%" },
    ],
    answer: "C",
    why: "376.22 — 40% max fill for wireways."
  },
  {
    id: 9,
    stem: "Cable tray (392) systems must be:",
    choices: [
      { key: "A", text: "Electrically isolated from ground" },
      { key: "B", text: "Bonded and suitable for the cable types installed" },
      { key: "C", text: "Used only with THHN in all cases" },
      { key: "D", text: "Supported every 20 ft regardless of type" },
    ],
    answer: "B",
    why: "392.60, 392.10 — Bonding and proper cable types (e.g., TC) are required."
  },
  {
    id: 10,
    stem: "Maximum total bends permitted between pull points in most raceways:",
    choices: [
      { key: "A", text: "180°" },
      { key: "B", text: "270°" },
      { key: "C", text: "360°" },
      { key: "D", text: "No limit" },
    ],
    answer: "C",
    why: "Common rule in conduit articles (e.g., 358.26, 344.26) — 360° max."
  },
  {
    id: 11,
    stem: "IMC (342) connections generally are:",
    choices: [
      { key: "A", text: "Set-screw only" },
      { key: "B", text: "Threaded" },
      { key: "C", text: "PVC glued" },
      { key: "D", text: "Friction-fit" },
    ],
    answer: "B",
    why: "342.14 — Threaded connections maintain continuity."
  },
  {
    id: 12,
    stem: "RMC (344) may serve as an equipment grounding conductor when:",
    choices: [
      { key: "A", text: "Always prohibited" },
      { key: "B", text: "Specifically permitted and with effective bonding" },
      { key: "C", text: "Only indoors" },
      { key: "D", text: "Only underground" },
    ],
    answer: "B",
    why: "344.60 with Article 250 — If installed to provide effective grounding and bonding."
  },
  {
    id: 13,
    stem: "Box fill (314.16) counts a single yoke device as:",
    choices: [
      { key: "A", text: "Zero allowance" },
      { key: "B", text: "One conductor volume" },
      { key: "C", text: "Two conductor volumes" },
      { key: "D", text: "Three conductor volumes" },
    ],
    answer: "C",
    why: "314.16(B) — One device yoke = two conductor volumes (one per yoke side)."
  },
  {
    id: 14,
    stem: "Ampacity adjustment for more than three current-carrying conductors occurs under:",
    choices: [
      { key: "A", text: "310.15" },
      { key: "B", text: "300.5" },
      { key: "C", text: "376.22" },
      { key: "D", text: "386.10" },
    ],
    answer: "A",
    why: "310.15 — Adjustment/correction factors for ampacity."
  },
  {
    id: 15,
    stem: "FMC vs LFMC: Which statement is correct?",
    choices: [
      { key: "A", text: "LFMC has a nonmetallic core and requires no bonding" },
      { key: "B", text: "FMC is liquidtight and allowed in wet locations" },
      { key: "C", text: "LFMC is liquidtight and suitable for wet locations" },
      { key: "D", text: "Both are prohibited for equipment connections" },
    ],
    answer: "C",
    why: "350 (LFMC) is liquidtight and allowed in wet locations; FMC (348) generally dry."
  },
];

/** ---------- Articles (Chapter 3 only, 27 visuals) ---------- */
const articles = [
  {
    id: "art-300",
    title: "Article 300 — General Requirements for Wiring Methods",
    body: (
      <>
        <p>— <HL>300.3(B)</HL>: Conductors of the same circuit must be grouped together in the same raceway, cable, or enclosure.</p>
        <p>— <HL>300.4</HL>: Protection from physical damage; use listed bushings/guarding where required.</p>
        <p>— <HL>300.5</HL>: Underground wiring — meet depth, cover, and marking rules.</p>
        <p>— <HL>300.11</HL>: Securely fasten and support wiring methods; independent of suspended-ceiling grid unless listed.</p>
        <WarningBox>
          Splitting circuit conductors into different raceways violates <HL>300.3(B)</HL> and causes magnetic heating issues.
        </WarningBox>
        <CodeBox>See <HL>300.5</HL> note tables for burial depths and derating in soil/ductbanks.</CodeBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-02.jpg", alt: "Raceway grouping of circuit conductors", caption: "Keep Circuit Conductors Together" },
      { src: "/images/module-03/m03-03.jpg", alt: "Underground wiring depth and warning tape", caption: "Respect Burial Depths" },
    ],
  },
  {
    id: "art-310",
    title: "Article 310 — Conductors for General Wiring",
    body: (
      <>
        <p>— <HL>310.10</HL>: Insulation must suit environment; damp/wet/corrosive areas need suitable types.</p>
        <p>— <HL>310.15</HL>: Apply adjustment and correction factors; &gt;3 CCC requires derating.</p>
        <p>— <HL>Table 310.16</HL>: Base ampacities for 60/75/90°C columns; terminals often limit to 60/75°C.</p>
        <RuleBox>Derate for ambient temperature and for &gt;3 current-carrying conductors per <HL>310.15</HL>.</RuleBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-04.jpg", alt: "Conductor insulation and ratings", caption: "Match Insulation to Environment" },
      { src: "/images/module-03/m03-05.jpg", alt: "Ampacity table usage example", caption: "Use Correct Column & Derate" },
    ],
  },
  {
    id: "art-312",
    title: "Article 312 — Cabinets, Cutout Boxes, and Meter Sockets",
    body: (
      <>
        <p>— <HL>312.2</HL>: Enclosures must be listed and suitable for the location (dry/damp/wet).</p>
        <p>— <HL>312.5</HL>: Provide access without removing building finish/structure.</p>
        <p>— <HL>312.8</HL>: Space for conductors/splices; no crowding; bond per Article 250.</p>
        <HorrorStory>A NEMA 1 cabinet was installed outdoors; the first storm corroded lugs. Use proper <HL>environment ratings</HL>.</HorrorStory>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-06.jpg", alt: "Outdoor-rated cabinet with gasketing", caption: "Right Enclosure for the Job" },
      { src: "/images/module-03/m03-07.jpg", alt: "Accessible cabinet with working space", caption: "Plan Access and Space" },
    ],
  },
  {
    id: "art-314",
    title: "Article 314 — Outlet, Device, Pull, and Junction Boxes",
    body: (
      <>
        <p>— <HL>314.16</HL>: Box volume must accommodate conductors, devices, and fittings (count each per table).</p>
        <p>— <HL>314.23</HL>: Support/secure boxes; ceiling-suspended devices need listed supports.</p>
        <p>— <HL>314.25</HL>: Install covers; protect live parts.</p>
        <CodeBox>
          Device yoke counts as <HL>two</HL> conductor volumes; all EGCs together count as <HL>one</HL>.
        </CodeBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-08.jpg", alt: "Box fill calculation example", caption: "Calculate Box Fill" },
      { src: "/images/module-03/m03-09.jpg", alt: "Properly supported device box", caption: "Securely Support Boxes" },
    ],
  },
  {
    id: "art-342",
    title: "Article 342 — Intermediate Metal Conduit (IMC)",
    body: (
      <>
        <p>— <HL>342.10</HL>: Suitable for dry/wet/hazardous when properly fitted; outdoors acceptable.</p>
        <p>— <HL>342.14</HL>: <HL>Threaded</HL> connections; maintain electrical continuity.</p>
        <p>— <HL>342.30</HL>: Support within 3 ft of boxes and ≤ 10 ft intervals.</p>
        <WarningBox>IMC uses <HL>threaded</HL> fittings. Threadless compression is not acceptable in hazloc.</WarningBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-10.jpg", alt: "IMC threaded couplings and connectors", caption: "Threaded Only" },
      { src: "/images/module-03/m03-11.jpg", alt: "IMC supports spaced along wall", caption: "Support ≤ 10 ft, 3 ft at Boxes" },
    ],
  },
  {
    id: "art-344",
    title: "Article 344 — Rigid Metal Conduit (RMC)",
    body: (
      <>
        <p>— <HL>344.10</HL>: Rugged raceway for industrial/hazardous; indoor/outdoor, wet/dry.</p>
        <p>— <HL>344.30</HL>: Support within 3 ft of boxes; ≤ 10 ft spacing typical.</p>
        <p>— <HL>344.60</HL>: Bonding per Article 250; RMC may serve as EGC when permitted.</p>
        <RuleBox>Use bonding bushings/jumpers where needed to ensure effective grounding continuity.</RuleBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-12.jpg", alt: "RMC industrial installation with bonding", caption: "Industrial Workhorse" },
      { src: "/images/module-03/m03-13.jpg", alt: "RMC threaded fittings for hazloc", caption: "Hazardous Locations Require Threading" },
    ],
  },
  {
    id: "art-348",
    title: "Article 348 — Flexible Metal Conduit (FMC)",
    body: (
      <>
        <p>— <HL>348.10</HL>: Dry locations; equipment connections; vibration areas.</p>
        <p>— <HL>348.12</HL>: Not a wet-location wiring method.</p>
        <p>— <HL>348.30</HL>: Support within 12 in. of boxes; ≤ 4.5 ft intervals.</p>
        <WarningBox>Do not treat FMC as liquidtight; that’s <HL>LFMC (350)</HL>.</WarningBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-14.jpg", alt: "FMC whip to equipment", caption: "Great for Equipment Whips" },
      { src: "/images/module-03/m03-15.jpg", alt: "FMC supports and fittings", caption: "Support ≤ 4.5 ft" },
    ],
  },
  {
    id: "art-350",
    title: "Article 350 — Liquidtight Flexible Metal Conduit (LFMC)",
    body: (
      <>
        <p>— <HL>350.10</HL>: Wet locations and oil/coolant exposure when fittings are liquidtight.</p>
        <p>— <HL>350.30</HL>: Support within 12 in. of boxes; ≤ 4.5 ft between supports.</p>
        <p>— <HL>350.60</HL>: Bonding to maintain continuity per Article 250.</p>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-16.jpg", alt: "LFMC in wet location with liquidtight fittings", caption: "Wet Location Approved" },
      { src: "/images/module-03/m03-17.jpg", alt: "LFMC bonding jumper at termination", caption: "Bond for Continuity" },
    ],
  },
  {
    id: "art-352",
    title: "Article 352 — Rigid Polyvinyl Chloride Conduit (PVC)",
    body: (
      <>
        <p>— <HL>352.10</HL>: Suitable for wet/corrosive/underground where listed.</p>
        <p>— <HL>352.30</HL>: Support within 3 ft of boxes; close strap spacing.</p>
        <p>— <HL>352.44</HL>: Provide <HL>expansion fittings</HL> for thermal movement outdoors.</p>
        <CodeBox>Thermal expansion can be inches over long runs. Install per manufacturer tables.</CodeBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-18.jpg", alt: "PVC outdoor run with expansion fitting", caption: "Expansion Fittings Outside" },
      { src: "/images/module-03/m03-19.jpg", alt: "PVC underground installation", caption: "Underground Friendly" },
    ],
  },
  {
    id: "art-356",
    title: "Article 356 — Liquidtight Flexible Nonmetallic Conduit (LFNC)",
    body: (
      <>
        <p>— <HL>356.10</HL>: Wet locations, equipment terminations, vibration.</p>
        <p>— <HL>356.30</HL>: Support within 12 in. of boxes; ≤ 3 ft intervals.</p>
        <p>— <HL>356.42</HL>: Listed fittings; complete system integrity.</p>
        <RuleBox>LFNC requires the <HL>most frequent</HL> support among common raceways (≤ 3 ft).</RuleBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-20.jpg", alt: "LFNC to motor connection", caption: "Liquidtight and Flexible" },
      { src: "/images/module-03/m03-21.jpg", alt: "LFNC frequent support straps", caption: "Support Within 3 ft" },
    ],
  },
  {
    id: "art-358",
    title: "Article 358 — Electrical Metallic Tubing (EMT)",
    body: (
      <>
        <p>— <HL>358.10</HL>: Permitted in dry/damp/wet locations when protected against corrosion and with listed fittings.</p>
        <p>— <HL>358.26</HL>: Max total bends between pull points = <HL>360°</HL>.</p>
        <p>— <HL>358.30</HL>: Support and secure as required by code and listing.</p>
        <WarningBox>In wet locations, use <HL>raintight</HL> EMT fittings; standard set-screw indoors only.</WarningBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-22.jpg", alt: "EMT vertical run with straps", caption: "EMT Strapping" },
      { src: "/images/module-03/m03-23.jpg", alt: "EMT with raintight compression fittings", caption: "Use Raintight Fittings Outdoors" },
    ],
  },
  {
    id: "art-368",
    title: "Article 368 — Busways",
    body: (
      <>
        <p>— <HL>368.10</HL>: Feeder and plug-in busways for large current distribution.</p>
        <p>— <HL>368.30</HL>: Support per listing; expansion fittings for thermal movement on long runs.</p>
        <p>— <HL>368.56</HL>: Bonding/grounding continuity through housing and fittings.</p>
        <CodeBox>Locate plug-in units where working clearances and short-circuit ratings are satisfied.</CodeBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-24.jpg", alt: "Overhead busway with plug-in units", caption: "High-Capacity Distribution" },
      { src: "/images/module-03/m03-25.jpg", alt: "Busway supports and expansion joint", caption: "Support & Expansion" },
    ],
  },
  {
    id: "art-392",
    title: "Article 392 — Cable Tray",
    body: (
      <>
        <p>— <HL>392.10</HL>: Only permitted cable types in tray (e.g., TC, MI, etc.).</p>
        <p>— <HL>392.30</HL>: Support spacing per type/width/loading; maintain fill and loading limits.</p>
        <p>— <HL>392.60</HL>: Bond cable tray system; ensure continuity across splices.</p>
        <RuleBox>Label tray with loading and type allowances to avoid field mistakes.</RuleBox>
      </>
    ),
    images: [
      { src: "/images/module-03/m03-26.jpg", alt: "Ladder cable tray run with bonded splice", caption: "Bond Tray Sections" },
      { src: "/images/module-03/m03-27.jpg", alt: "Cable tray with proper cable types", caption: "Use Only Permitted Cables" },
    ],
  },
];

export default function Module03Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-03/m03-01.jpg",
        imageAlt: "Wiring methods and materials montage from NEC Chapter 3",
        title: "Chapter 3 — Wiring Methods and Materials",
        subtitle: "Raceways, Cable Systems, and Installation Practices",
        blurb:
          "Master the raceways and wiring methods the field demands: EMT, RMC/IMC, PVC, FMC/LFMC/LFNC, cabinets, boxes, wireways, busways, and cable tray—plus the Chapter 3 rules that tie them together.",
      }}
      dividerDelays={["delay-300","delay-500","delay-700","delay-900"]}
      articles={articles}
      summary={{
        title: "Chapter 3 Summary",
        items: [
          {
            icon: <HardHat className="w-8 h-8 text-yellow-400" />,
            title: "Threaded Where Required",
            text: "IMC/RMC in hazloc: threaded fittings only; maintain continuity.",
          },
          {
            icon: <Droplets className="w-8 h-8 text-yellow-400" />,
            title: "Plan for Movement",
            text: "PVC and long metallic runs need expansion/deflection solutions.",
          },
          {
            icon: <Wrench className="w-8 h-8 text-yellow-400" />,
            title: "Support Intervals",
            text: "Know the spacing: IMC/RMC ≤ 10 ft, LFMC ≤ 4.5 ft, LFNC ≤ 3 ft.",
          },
          {
            icon: <Warehouse className="w-8 h-8 text-yellow-400" />,
            title: "Wireway Discipline",
            text: "Respect 40% fill, conductor limits, and bonding requirements.",
          },
          {
            icon: <CircuitBoard className="w-8 h-8 text-yellow-400" />,
            title: "Surface and Tray",
            text: "Use listed fittings and bond metallic systems like tray and busway.",
          },
          {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Exam Mindset",
            text: "Look for location limits, fitting types, support, and continuity.",
          },
        ],
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-02", label: "Chapter 2" }}
      next={{ href: "/modules/module-04", label: "Chapter 4" }}
    />
  );
}