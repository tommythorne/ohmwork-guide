"use client";

import { AlertTriangle, GitBranch, Building, Flame, Zap, HardHat } from "lucide-react";
import ModuleTemplate from "../../types";
import type { QuizQuestion } from "../../types";

const quiz: QuizQuestion[] = [
  { id: 1, stem: "Which wiring method is NOT permitted in wet locations?", choices: [
    { key: "A", text: "PVC" }, { key: "B", text: "RMC" }, { key: "C", text: "Type NM" }, { key: "D", text: "LFMC" }
  ], answer: "C", why: "NM is dry‑location only (340.12)." },
  { id: 2, stem: "Max total bend between pull points in a raceway?", choices: [
    { key: "A", text: "180°" }, { key: "B", text: "270°" }, { key: "C", text: "360°" }, { key: "D", text: "No limit" }
  ], answer: "C", why: "Most raceway articles limit to 360° (e.g., 358.26, 344.26)." },
  { id: 3, stem: "Derating required when CCC count in one raceway exceeds:", choices: [
    { key: "A", text: "2" }, { key: "B", text: "3" }, { key: "C", text: "4" }, { key: "D", text: "6" }
  ], answer: "B", why: "More than 3 CCC triggers adjustment (310.15)." },
  { id: 4, stem: "Max conductor fill for &gt;2 conductors (Chapter 9, Table 1)?", choices: [
    { key: "A", text: "31%" }, { key: "B", text: "40%" }, { key: "C", text: "53%" }, { key: "D", text: "60%" }
  ], answer: "C", why: "53% for &gt;2 conductors." },
  { id: 5, stem: "EMT permitted in wet locations if:", choices: [
    { key: "A", text: "Any time" }, { key: "B", text: "With thread sealant" }, { key: "C", text: "With listed compression fittings" }, { key: "D", text: "Only indoors" }
  ], answer: "C", why: "Use listed rain‑tight fittings (358.10, .42)." },
  { id: 6, stem: "LFMC typical support interval:", choices: [
    { key: "A", text: "3 ft" }, { key: "B", text: "4.5 ft" }, { key: "C", text: "6 ft" }, { key: "D", text: "10 ft" }
  ], answer: "B", why: "Support within 12 in. of boxes and at ≤4.5 ft (350.30)." },
  { id: 7, stem: "MC cable allowed in wet locations when:", choices: [
    { key: "A", text: "Always" }, { key: "B", text: "If PVC jacketed & listed" }, { key: "C", text: "Only underground" }, { key: "D", text: "Never" }
  ], answer: "B", why: "Wet‑location listed types permitted (330.10)." },
  { id: 8, stem: "Box volume rules appear in:", choices: [
    { key: "A", text: "Article 300" }, { key: "B", text: "Article 310" }, { key: "C", text: "Article 314" }, { key: "D", text: "Article 312" }
  ], answer: "C", why: "314.16 governs box fill." },
  { id: 9, stem: "Cable tray bonding requirement location:", choices: [
    { key: "A", text: "Article 250 only" }, { key: "B", text: "Article 392" }, { key: "C", text: "Article 376" }, { key: "D", text: "Article 386" }
  ], answer: "B", why: "392 requires bonding of tray systems." },
  { id: 10, stem: "Max wireway fill (metal/nonmetallic):", choices: [
    { key: "A", text: "20%" }, { key: "B", text: "30%" }, { key: "C", text: "40%" }, { key: "D", text: "60%" }
  ], answer: "C", why: "Wireways limited to 20% (continuous) and 40% (conductors) per 376/378." },
  { id: 11, stem: "ENT (smurf tube) is:", choices: [
    { key: "A", text: "Rigid metal" }, { key: "B", text: "Electrical nonmetallic tubing" }, { key: "C", text: "Flexible metal conduit" }, { key: "D", text: "Surface raceway" }
  ], answer: "B", why: "ENT is Article 362; nonmetallic tubing." },
  { id: 12, stem: "RMC support spacing typically up to:", choices: [
    { key: "A", text: "3 ft" }, { key: "B", text: "6 ft" }, { key: "C", text: "10 ft" }, { key: "D", text: "12 ft" }
  ], answer: "C", why: "Commonly 10 ft (344.30) with size exceptions." },
  { id: 13, stem: "Surface raceway articles:", choices: [
    { key: "A", text: "386/388" }, { key: "B", text: "376/378" }, { key: "C", text: "392/390" }, { key: "D", text: "314/312" }
  ], answer: "A", why: "386 (metal), 388 (nonmetallic) surface raceways." },
  { id: 14, stem: "Underground cover for PVC under driveway:", choices: [
    { key: "A", text: "12 in." }, { key: "B", text: "18 in." }, { key: "C", text: "24 in." }, { key: "D", text: "36 in." }
  ], answer: "C", why: "24 in. per 300.5 (typical residential)." },
  { id: 15, stem: "Conduit body used for splices must:", choices: [
    { key: "A", text: "Be any size" }, { key: "B", text: "Meet box‑fill volume rules" }, { key: "C", text: "Be metal only" }, { key: "D", text: "Use pulling compound" }
  ], answer: "B", why: "314.16 volume rules apply when used for splices/devices." }
];

export default function Module03Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-03/m03-01.jpg",
        imageAlt: "Raceways and wiring methods collage",
        title: "Chapter 3 — Wiring Methods & Materials",
        subtitle: "Choosing, installing, and protecting the path conductors take.",
        blurb:
          "From EMT to cable tray, learn the NEC rules for selecting wiring methods, spacing supports, managing fill and bends, and keeping terminations safe and serviceable."
      }}
      articles={[
        {
          id: "300",
          title: "Article 300 — General Requirements",
          body: (
            <>
              <p><strong>300.3</strong>: Conductors of the same circuit in the same raceway/cable to reduce inductive heating.</p>
              <p><strong>300.5</strong>: Underground cover—typical: 18 in. direct burial, 24 in. under driveways, 36 in. under streets.</p>
              <p><strong>300.15</strong>: Use boxes/conduit bodies at splices, devices, and pull points.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-02.jpg", alt: "Underground burial depth chart", caption: "Typical covers" },
            { src: "/images/module-03/m03-03.jpg", alt: "Junction box at pull point", caption: "Splice in box" }
          ]
        },
        {
          id: "310",
          title: "Article 310 — Conductors for General Wiring",
          body: (
            <>
              <p><strong>310.10</strong>: Use insulation suitable for location and temperature rating (60/75/90 °C).</p>
              <p><strong>310.15</strong>: Apply ampacity adjustment when CCC &gt; 3; apply ambient temperature correction.</p>
              <p><strong>310.10(H)</strong>: Parallel conductors must match length, size, material, and insulation; terminate alike.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-04.jpg", alt: "Assorted conductor insulation types", caption: "Insulation types" },
            { src: "/images/module-03/m03-05.jpg", alt: "Parallel conductors landing on lugs", caption: "Parallel rules" }
          ]
        },
        {
          id: "312",
          title: "Article 312 — Cabinets, Cutout Boxes & Meters",
          body: (
            <>
              <p><strong>312.2</strong>: Enclosures sized to avoid crowding; proper bending space.</p>
              <p><strong>312.5(B)</strong>: Smooth fittings/bushings at entries to protect conductors.</p>
              <p><strong>312.8</strong>: Ground and bond per 250.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-06.jpg", alt: "Spacious cabinet with neat conductors", caption: "Adequate space" },
            { src: "/images/module-03/m03-07.jpg", alt: "Bushings at cabinet knockouts", caption: "Protect edges" }
          ]
        },
        {
          id: "314",
          title: "Article 314 — Outlet, Device, Pull & Junction Boxes",
          body: (
            <>
              <p><strong>314.16(A)</strong>: Box volume must meet allowances.</p>
              <p><strong>314.16(B)</strong>: Counting: one per conductor; all grounds count once; internal clamp one; each yoke two.</p>
              <p><strong>314.16(C)</strong>: Conduit bodies used for splices must meet volume rules.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-08.jpg", alt: "Box fill calculation notes", caption: "Box fill math" },
            { src: "/images/module-03/m03-09.jpg", alt: "Assorted box volume markings", caption: "Volume markings" }
          ]
        },
        {
          id: "320",
          title: "Article 320 — Armored Cable (AC)",
          body: (
            <>
              <p><strong>320.10</strong>: Dry locations; armor may serve as EGC when properly bonded.</p>
              <p><strong>320.30</strong>: Support within 12 in. of boxes and at ≤4.5 ft intervals.</p>
              <p><strong>320.12</strong>: Not for wet/hazardous/corrosive locations.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-10.jpg", alt: "AC cable to box with bushing", caption: "Bond armor" },
            { src: "/images/module-03/m03-11.jpg", alt: "Stapled AC runs on studs", caption: "Support spacing" }
          ]
        },
        {
          id: "330",
          title: "Article 330 — Metal‑Clad Cable (MC)",
          body: (
            <>
              <p><strong>330.10</strong>: Use in dry, and in wet if listed (jacketed types).</p>
              <p><strong>330.30</strong>: Support within 12 in. of boxes and at ≤6 ft intervals.</p>
              <p><strong>330.12</strong>: Haz‑loc only if specifically listed.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-12.jpg", alt: "MC cable with connectors", caption: "Wet‑listed types" },
            { src: "/images/module-03/m03-13.jpg", alt: "MC supported along ceiling", caption: "≤6 ft support" }
          ]
        },
        {
          id: "340",
          title: "Article 340 — Nonmetallic‑Sheathed Cable (NM)",
          body: (
            <>
              <p><strong>340.10</strong>: Dry, protected locations; residential staple of choice.</p>
              <p><strong>340.12</strong>: Not in wet, corrosive, or hazardous locations.</p>
              <p><strong>340.30</strong>: Protect from physical damage; support within 12 in. and ≤4.5 ft.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-14.jpg", alt: "NM cable neatly stapled", caption: "Dry locations" },
            { src: "/images/module-03/m03-15.jpg", alt: "NM protected by guard plates", caption: "Physical protection" }
          ]
        },
        {
          id: "350",
          title: "Article 350 — Liquidtight Flexible Metal Conduit (LFMC)",
          body: (
            <>
              <p><strong>350.10</strong>: Wet, oily, vibration‑prone areas; equipment connections.</p>
              <p><strong>350.30</strong>: Support within 12 in. of boxes and at ≤4.5 ft.</p>
              <p><strong>350.6</strong>: Use listed fittings for liquidtight integrity.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-16.jpg", alt: "LFMC to motor with fittings", caption: "Wet & vibration" },
            { src: "/images/module-03/m03-17.jpg", alt: "LFMC straps and connectors", caption: "Listed fittings" }
          ]
        },
        {
          id: "360",
          title: "Article 360 — Flexible Metallic Tubing (FMT)",
          body: (
            <>
              <p><strong>360.10</strong>: Dry locations, limited mechanical protection.</p>
              <p><strong>360.30</strong>: Support within 12 in. of boxes and at ≤4.5 ft.</p>
              <p><strong>360.12</strong>: Not in wet/hazardous/corrosive areas.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-18.jpg", alt: "FMT routed to equipment", caption: "Dry only" },
            { src: "/images/module-03/m03-19.jpg", alt: "FMT straps close to box", caption: "Support rules" }
          ]
        },
        {
          id: "368",
          title: "Article 368 — Busways",
          body: (
            <>
              <p><strong>368.10</strong>: Feeder/distribution busway; consider expansion and alignment.</p>
              <p><strong>368.56</strong>: Bonding/grounding for housing and plug‑in units.</p>
              <p><strong>368.30</strong>: Support per listing; keep joints accessible.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-20.jpg", alt: "Busway run with hangers", caption: "Supported runs" },
            { src: "/images/module-03/m03-21.jpg", alt: "Plug‑in busway section", caption: "Bonding focus" }
          ]
        },
        {
          id: "376-378",
          title: "Articles 376/378 — Wireways (Metal/Nonmetallic)",
          body: (
            <>
              <p><strong>376/378</strong>: Wireways permit conductor additions; keep covers accessible.</p>
              <p><strong>Fill</strong>: Limit to 20% (continuous) / 40% (conductors) typical.</p>
              <p><strong>Support</strong>: Per listing; bond metallic raceway.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-22.jpg", alt: "Metal wireway with cover", caption: "Accessible covers" },
            { src: "/images/module-03/m03-23.jpg", alt: "Nonmetallic wireway section", caption: "Fill limits" }
          ]
        },
        {
          id: "386-388",
          title: "Articles 386/388 — Surface Raceways (Metal/Nonmetallic)",
          body: (
            <>
              <p><strong>Use</strong>: Surface‑mounted wiring paths in finished spaces.</p>
              <p><strong>386/388</strong>: Support per manufacturer; maintain bend radius; bond metal types.</p>
              <p><strong>Boxes</strong>: Use listed device boxes and covers.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-24.jpg", alt: "Metal surface raceway on wall", caption: "Finished spaces" },
            { src: "/images/module-03/m03-25.jpg", alt: "Nonmetallic surface raceway corner", caption: "Listed fittings" }
          ]
        },
        {
          id: "392",
          title: "Article 392 — Cable Tray",
          body: (
            <>
              <p><strong>392.10</strong>: Use tray with listed cable types; support spans per design.</p>
              <p><strong>392.22</strong>: Apply fill limits and sidewall loading rules.</p>
              <p><strong>392.60</strong>: Bonding of tray sections and to the grounding system.</p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-26.jpg", alt: "Ladder cable tray run", caption: "Permitted cables" },
            { src: "/images/module-03/m03-27.jpg", alt: "Bonding jumper between tray sections", caption: "Bond the tray" }
          ]
        }
      ]}
      summary={{
        title: "Chapter 3 Summary",
        blurb: "Pick the right wiring method, support it correctly, respect fill and bend rules, and protect terminations.",
        cards: [
          { icon: <HardHat className="w-8 h-8 text-yellow-400" />, title: "Pick the Method", text: "Match environment: EMT dry, PVC wet, RMC robust." },
          { icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />, title: "Mind the Limits", text: "360° bends, 53% fill for &gt;2 conductors." },
          { icon: <GitBranch className="w-8 h-8 text-yellow-400" />, title: "Box Fill", text: "Use 314.16 counting rules for volume." },
          { icon: <Building className="w-8 h-8 text-yellow-400" />, title: "Support Spacing", text: "LFMC/FMT ≤4.5 ft; MC ≤6 ft; RMC ≈10 ft." },
          { icon: <Flame className="w-8 h-8 text-yellow-400" />, title: "Protection", text: "Bushings, listed fittings, physical protection." },
          { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "Bonding", text: "Bond trays, metallic raceways, and enclosures." }
        ]
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-02", label: "Chapter 2" }}
      next={{ href: "/modules/module-04", label: "Chapter 4" }}
    />
  );
}