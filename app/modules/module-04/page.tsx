"use client";
import { HL, RuleBox, WarningBox, CodeBox, DataTable, ChartBox } from "../../components/Blocks";
import type { QuizQuestion } from "../../types/module";

import { AlertTriangle, Zap, Shield, Plug, Cable, Building, Flame, Target, GitBranch, Ruler, BookOpen, Brain, Lightbulb, Fan, Refrigerator, Battery, Gauge, Wind, Cog, Component, PanelsTopLeft } from "lucide-react";
import ModuleTemplate, { HL, WarningBox, RuleBox, CodeBox, DataTable, ChartBox } from "../../components/ModuleTemplate";

// Quiz — 15 questions (keys strictly 'A'|'B'|'C'|'D')


const quiz = [
  {
    id: 1,
    stem: "Article 400 governs which equipment?",
    choices: [
      { key: "A", text: "Switchboards and panelboards" },
      { key: "B", text: "Flexible cords and flexible cables" },
      { key: "C", text: "Transformers" },
      { key: "D", text: "Motors" }
    ],
    answer: "B" as const,
    why: "Article 400 covers flexible cords/cables (types S, SJ, SO, etc.)."
  },
  {
    id: 2,
    stem: "Tamper-resistant receptacles (TR) are addressed in which article?",
    choices: [
      { key: "A", text: "404" },
      { key: "B", text: "406" },
      { key: "C", text: "410" },
      { key: "D", text: "422" }
    ],
    answer: "B" as const,
    why: "Article 406 covers receptacles, cord connectors & attachment plugs."
  },
  {
    id: 3,
    stem: "Luminaires and lampholders are mainly in:",
    choices: [
      { key: "A", text: "Article 410" },
      { key: "B", text: "Article 422" },
      { key: "C", text: "Article 430" },
      { key: "D", text: "Article 445" }
    ],
    answer: "A" as const,
    why: "Article 410 = Luminaires, lampholders and pendant lighting."
  },
  {
    id: 4,
    stem: "Which article provides rules for motors, motor circuits, and controllers?",
    choices: [
      { key: "A", text: "422" },
      { key: "B", text: "430" },
      { key: "C", text: "440" },
      { key: "D", text: "450" }
    ],
    answer: "B" as const,
    why: "Article 430 is the motor bible: sizing, OCP, controllers, conductors."
  },
  {
    id: 5,
    stem: "Transformers and transformer vaults are covered in:",
    choices: [
      { key: "A", text: "450" },
      { key: "B", text: "408" },
      { key: "C", text: "445" },
      { key: "D", text: "480" }
    ],
    answer: "A" as const,
    why: "Article 450 covers transformers, ventilation, vaults, guarding."
  },
  {
    id: 6,
    stem: "Storage batteries installation and ventilation belong to:",
    choices: [
      { key: "A", text: "408" },
      { key: "B", text: "480" },
      { key: "C", text: "445" },
      { key: "D", text: "440" }
    ],
    answer: "B" as const,
    why: "Article 480 covers storage batteries."
  },
  {
    id: 7,
    stem: "Household cooking appliances and dishwashers are found in:",
    choices: [
      { key: "A", text: "422" },
      { key: "B", text: "424" },
      { key: "C", text: "430" },
      { key: "D", text: "410" }
    ],
    answer: "A" as const,
    why: "Article 422 covers appliances (including household types)."
  },
  {
    id: 8,
    stem: "Fixed electric space heating equipment is in:",
    choices: [
      { key: "A", text: "424" },
      { key: "B", text: "426" },
      { key: "C", text: "427" },
      { key: "D", text: "430" }
    ],
    answer: "A" as const,
    why: "Article 424 covers fixed electric space-heating equipment."
  },
  {
    id: 9,
    stem: "Which article contains rules for air-conditioning and refrigeration equipment?",
    choices: [
      { key: "A", text: "440" },
      { key: "B", text: "422" },
      { key: "C", text: "445" },
      { key: "D", text: "408" }
    ],
    answer: "A" as const,
    why: "Article 440 addresses A/C and refrigeration (hermetic refrigerant motors, etc.)."
  },
  {
    id: 10,
    stem: "Generators are covered by:",
    choices: [
      { key: "A", text: "445" },
      { key: "B", text: "450" },
      { key: "C", text: "480" },
      { key: "D", text: "490" }
    ],
    answer: "A" as const,
    why: "Article 445 covers generators."
  },
  {
    id: 11,
    stem: "Switchboards, switchgear, and panelboards are in:",
    choices: [
      { key: "A", text: "404" },
      { key: "B", text: "408" },
      { key: "C", text: "430" },
      { key: "D", text: "450" }
    ],
    answer: "B" as const,
    why: "Article 408 covers switchboards, switchgear, and panelboards."
  },
  {
    id: 12,
    stem: "Electric signs and outline lighting belong to:",
    choices: [
      { key: "A", text: "410" },
      { key: "B", text: "422" },
      { key: "C", text: "600" },
      { key: "D", text: "490" }
    ],
    answer: "C" as const,
    why: "Signs are Article 600 (still equipment for general use, Chapter 6—note this one is outside Ch.4; keep your module focused on Ch.4 main topics)."
  },
  {
    id: 13,
    stem: "Panelboard working clearances are primarily governed by:",
    choices: [
      { key: "A", text: "110.26 and 408" },
      { key: "B", text: "240" },
      { key: "C", text: "250" },
      { key: "D", text: "300" }
    ],
    answer: "A" as const,
    why: "110.26 sets working space; 408 details panelboard specifics."
  },
  {
    id: 14,
    stem: "For cord-and-plug-connected appliances, identify rules in:",
    choices: [
      { key: "A", text: "422 and 400" },
      { key: "B", text: "430 and 440" },
      { key: "C", text: "406 and 408" },
      { key: "D", text: "424 and 450" }
    ],
    answer: "A" as const,
    why: "Article 422 (appliances) + Article 400 (cords)."
  },
  {
    id: 15,
    stem: "Transformer secondary OCP sizing is handled in:",
    choices: [
      { key: "A", text: "450" },
      { key: "B", text: "430" },
      { key: "C", text: "480" },
      { key: "D", text: "445" }
    ],
    answer: "A" as const,
    why: "Article 450 has the transformer OCP/installation rules."
  }
] as const satisfies QuizQuestion[];

export default function Module04Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-04/m04-01.jpg",
        imageAlt: "NEC Chapter 4 — Equipment for General Use: appliances, luminaires, motors, transformers",
        title: "Chapter 4 — Equipment for General Use",
        subtitle: "Appliances, Luminaires, Motors, Transformers, and More",
        blurb:
          "Get fluent with Chapter 4 gear: receptacles and luminaires, appliances and fixed heating, motors and A/C, panelboards, transformers, generators, and batteries. Learn the rules that keep everyday equipment safe and reliable."
      }}
      articles={[
        {
          id: "art-406",
          title: "Article 406 — Receptacles, Cord Connectors & Attachment Plugs",
          body: (
            <>
              <p><HL>406.4(D)</HL>: Install receptacles of the correct grounding type and rating. Tamper‑Resistant (TR) where required.</p>
              <p><HL>406.9</HL>: Damp/wet locations need properly rated covers; outdoors often requires in‑use (while‑plugged) covers.</p>
              <p><HL>406.12</HL>: TR receptacles are required in dwelling unit habitable rooms and other specified areas.</p>
              <p><HL>406.13</HL>: Weather‑Resistant (WR) devices where exposed to weather.</p>
              <RuleBox>TR protects children from insertion; WR resists weather. You often need <em>both</em> outdoors.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-02.jpg", alt: "Outdoor in-use cover on WR receptacle", caption: "Use In‑Use Covers Outside" },
            { src: "/images/module-04/m04-03.jpg", alt: "Close-up of TR and WR markings on receptacles", caption: "Mind the TR/WR Markings" }
          ]
        },
        {
          id: "art-410",
          title: "Article 410 — Luminaires, Lampholders, and Lamps",
          body: (
            <>
              <p><HL>410.36</HL>: Secure luminaires to the building structure; use listed boxes/fittings for support.</p>
              <p><HL>410.130(G)</HL>: Disconnecting means for fluorescent luminaires with ballasts (where required).</p>
              <p><HL>410.10</HL>: Special locations (closets, damp/wet) have spacing and protection rules.</p>
              <WarningBox>Closet luminaires: respect clearances from storage space; avoid lamp damage/fire hazards.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-04.jpg", alt: "Ceiling luminaire properly supported", caption: "Support & Secure" },
            { src: "/images/module-04/m04-05.jpg", alt: "Closet luminaire clearance diagram", caption: "Closet Clearance Rules" }
          ]
        },
        {
          id: "art-422",
          title: "Article 422 — Appliances",
          body: (
            <>
              <p><HL>422.10</HL>: Branch‑circuit ratings must match appliance loads; individual circuits as required.</p>
              <p><HL>422.16</HL>: Cord‑and‑plug connection allowances for certain appliances (like dishwashers) under conditions.</p>
              <p><HL>422.31</HL>: Disconnecting means—within sight or lockable open as required.</p>
              <CodeBox>Check manufacturer instructions for required circuit ampacity and disconnect location.</CodeBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-06.jpg", alt: "Dishwasher cord-and-plug connection with strain relief", caption: "Cord‑and‑Plug Rules" },
            { src: "/images/module-04/m04-07.jpg", alt: "Appliance disconnect within sight", caption: "Disconnecting Means" }
          ]
        },
        {
          id: "art-424",
          title: "Article 424 — Fixed Electric Space-Heating Equipment",
          body: (
            <>
              <p><HL>424.3</HL>: Nameplate ratings determine branch‑circuit sizing; consider continuous load factors.</p>
              <p><HL>424.19</HL>: Disconnecting means required for fixed heating—within sight or lockable open.</p>
              <p><HL>424.66</HL>: Guarding and installation clearances to prevent overheating and damage.</p>
              <RuleBox>For continuous loads, size OCPD/conductors at ≥125% of the load unless otherwise permitted.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-08.jpg", alt: "Wall heater with dedicated disconnect", caption: "Heating Disconnect Nearby" },
            { src: "/images/module-04/m04-09.jpg", alt: "Baseboard heater clearances from combustibles", caption: "Respect Clearances" }
          ]
        },
        {
          id: "art-408",
          title: "Article 408 — Switchboards, Switchgear, and Panelboards",
          body: (
            <>
              <p><HL>408.3</HL>: Enclosures listed/labeled for use; barriers/guarding where required.</p>
              <p><HL>408.36</HL>: Panelboards require a main OCPD unless exceptions apply.</p>
              <p><HL>110.26</HL> (cross‑ref): Working space depth/width/height in front of equipment—plan room layouts early.</p>
              <WarningBox>Don’t crowd panelboards—working space violations are common inspection fails.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-10.jpg", alt: "Panelboard with clear working space", caption: "Maintain Working Space" },
            { src: "/images/module-04/m04-11.jpg", alt: "Switchgear lineup with labeling and barriers", caption: "Label & Guard" }
          ]
        },
        {
          id: "art-430",
          title: "Article 430 — Motors, Motor Circuits, and Controllers",
          body: (
            <>
              <p><HL>430.22</HL>: Size branch‑circuit conductors based on motor FLC (Table values), not nameplate amps.</p>
              <p><HL>430.52</HL>: Motor branch‑circuit short‑circuit/ground‑fault protection—use permitted percentages by device type.</p>
              <p><HL>430.102</HL>: Disconnecting means for motors and controllers—within sight or lockable open.</p>
              <DataTable>
                <h4 className="font-bold text-white mb-3">Motor Sizing Quick Cues</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Item</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="p-3">Branch Conductors</td><td className="p-3">Use FLC table × 125% (typ.).</td></tr>
                    <tr><td className="p-3">Short‑Circuit/GF Prot.</td><td className="p-3">% of FLC depends on device (fuse/breaker).</td></tr>
                    <tr><td className="p-3">Disconnect</td><td className="p-3">Within sight or lockable open.</td></tr>
                  </tbody>
                </table>
              </DataTable>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-12.jpg", alt: "Motor starter with overloads and disconnect", caption: "Controller & Disconnect" },
            { src: "/images/module-04/m04-13.jpg", alt: "Motor nameplate and FLC table reference", caption: "Use FLC Tables" }
          ]
        },
        {
          id: "art-440",
          title: "Article 440 — Air-Conditioning and Refrigeration",
          body: (
            <>
              <p><HL>440.6</HL>: Use equipment nameplate ratings for conductor/OCPD sizing (not generic motor tables alone).</p>
              <p><HL>440.22</HL>: OCPD selection per nameplate maximum—do not exceed manufacturer specified limits.</p>
              <p><HL>440.14</HL>: Disconnect within sight of the equipment, readily accessible.</p>
              <CodeBox>Heat pumps and A/C units often list “Max Fuse/Breaker.” Use that value.</CodeBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-14.jpg", alt: "Outdoor condenser with visible disconnect", caption: "Within Sight Disconnect" },
            { src: "/images/module-04/m04-15.jpg", alt: "A/C nameplate showing MCA and MOCP", caption: "Size From Nameplate" }
          ]
        },
        {
          id: "art-450",
          title: "Article 450 — Transformers and Transformer Vaults",
          body: (
            <>
              <p><HL>450.3</HL>: OCP requirements—primary/secondary protection per transformer type and rating.</p>
              <p><HL>450.9</HL>: Ventilation for dry‑type transformers—prevent overheating.</p>
              <p><HL>450.41</HL>: Vault construction, fire‑resistance, and access where vaults are required.</p>
              <RuleBox>When in doubt, verify whether primary, secondary, or both need OCP based on 450.3 tables and notes.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-16.jpg", alt: "Dry-type transformer with ventilation clearance", caption: "Ventilation Matters" },
            { src: "/images/module-04/m04-17.jpg", alt: "Transformer secondary OCP example", caption: "Secondary OCP Sizing" }
          ]
        },
        {
          id: "art-445",
          title: "Article 445 — Generators",
          body: (
            <>
              <p><HL>445.11</HL>: Nameplate must include kW/kVA, voltage, current, power factor, etc.</p>
              <p><HL>445.18</HL>: Disconnecting means for generators—requirements vary by installation.</p>
              <p><HL>445.20</HL>: Overcurrent protection—protect conductors and equipment appropriately.</p>
              <WarningBox>Coordinate generator OCP and transfer equipment ratings—common exam trap.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-18.jpg", alt: "Standby generator with labeled disconnect", caption: "Generator Disconnect" },
            { src: "/images/module-04/m04-19.jpg", alt: "Transfer switch tied to generator system", caption: "Transfer Equipment Coordination" }
          ]
        },
        {
          id: "art-480",
          title: "Article 480 — Storage Batteries",
          body: (
            <>
              <p><HL>480.3</HL>: Installation—consider ventilation, guarding, and spill control per type.</p>
              <p><HL>480.7</HL>: Overcurrent protection and disconnects on battery circuits.</p>
              <p><HL>480.9</HL>: Battery rooms—illumination, ventilation, working space.</p>
              <CodeBox>Lithium, lead‑acid, and Ni‑Cd each have different ventilation/containment considerations.</CodeBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-20.jpg", alt: "Battery rack with ventilation", caption: "Ventilation & Access" },
            { src: "/images/module-04/m04-21.jpg", alt: "Battery disconnects and OCPD", caption: "OCP & Disconnects" }
          ]
        },
        {
          id: "art-400",
          title: "Article 400 — Flexible Cords and Cables (Focus)",
          body: (
            <>
              <p><HL>400.7</HL>: Permitted uses: portable equipment, pendants, appliances, and certain luminaires.</p>
              <p><HL>400.8</HL>: Not permitted as a substitute for fixed wiring—no passing through walls/ceilings unless allowed.</p>
              <p><HL>400.10</HL>: Protect from physical damage and tension; use listed strain relief.</p>
              <DataTable>
                <h4 className="font-bold text-white mb-3">Common Cord Types</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-yellow-400 font-bold">Type</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Voltage</th>
                      <th className="text-left p-3 text-yellow-400 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="p-3">SJ</td><td className="p-3">300V</td><td className="p-3">Junior hard service</td></tr>
                    <tr><td className="p-3">S</td><td className="p-3">600V</td><td className="p-3">Hard service</td></tr>
                    <tr><td className="p-3">SO</td><td className="p-3">600V</td><td className="p-3">Oil resistant</td></tr>
                  </tbody>
                </table>
              </DataTable>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-22.jpg", alt: "Cord set with proper strain relief", caption: "Strain Relief Required" },
            { src: "/images/module-04/m04-23.jpg", alt: "Improper cord through wall example (do not do)", caption: "Not a Substitute for Fixed Wiring" }
          ]
        },
        {
          id: "art-404",
          title: "Article 404 — Switches",
          body: (
            <>
              <p><HL>404.4</HL>: Mounting height and accessibility—center of grip typically ≤ 6′7″ above floor.</p>
              <p><HL>404.9</HL>: Grounding of metal faceplates/switches as required by Article 250.</p>
              <p><HL>404.11</HL>: Marking and rating—ensure switches are suitable for the load and environment.</p>
              <RuleBox>Use listed weatherproof enclosures for switches in wet/damp locations.</RuleBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-24.jpg", alt: "Switch height and accessibility example", caption: "Heights & Accessibility" },
            { src: "/images/module-04/m04-25.jpg", alt: "Weatherproof switch enclosure outdoors", caption: "Weatherproof Where Required" }
          ]
        },
        {
          id: "recap-images",
          title: "Device & Equipment Labeling / Nameplate Focus",
          body: (
            <>
              <p><HL>110.3(B)</HL> (cross‑ref): Install per listing/labeling and manufacturer instructions—applies to most Ch.4 equipment.</p>
              <p>Always collect nameplate data (voltage, MCA/MOCP for HVAC, kVA for transformers, ratings for appliances).</p>
              <WarningBox>Ignoring the nameplate is a fast track to wrong OCPD and conductor sizes.</WarningBox>
            </>
          ),
          images: [
            { src: "/images/module-04/m04-26.jpg", alt: "Equipment nameplate close-up", caption: "Read the Nameplate" },
            { src: "/images/module-04/m04-27.jpg", alt: "Field labeling on panelboard and disconnects", caption: "Clear Field Labels" }
          ]
        }
      ]}
      summary={{
        title: "Chapter 4 Summary",
        blurb:
          "Chapter 4 ties everyday equipment to practical rules: size from nameplates and tables, provide proper disconnects, guard against damage, and match devices to the environment.",
        cards: [
          { icon: <Plug className="w-8 h-8 text-yellow-400" />, title: "Devices", text: "Receptacles/switches: TR/WR where required; proper covers and grounding." },
          { icon: <Lightbulb className="w-8 h-8 text-yellow-400" />, title: "Luminaires", text: "Support/clearances; special spaces (closets, damp/wet) matter." },
          { icon: <Component className="w-8 h-8 text-yellow-400" />, title: "Appliances", text: "Circuit ratings & disconnects per 422 and manufacturer." },
          { icon: <Fan className="w-8 h-8 text-yellow-400" />, title: "Heating & A/C", text: "424 & 440: continuous loads, nameplate MCA/MOCP sizing." },
          { icon: <Cog className="w-8 h-8 text-yellow-400" />, title: "Motors", text: "430: FLC tables, OCP percentages, controller/disconnect rules." },
          { icon: <PanelsTopLeft className="w-8 h-8 text-yellow-400" />, title: "Boards & Gear", text: "408 + 110.26: clear working space, main OCP as required." },
          { icon: <Gauge className="w-8 h-8 text-yellow-400" />, title: "Transformers", text: "450: OCP, ventilation, vaults where required." },
          { icon: <Battery className="w-8 h-8 text-yellow-400" />, title: "Batteries", text: "480: ventilation, disconnects, working space." }
        ]
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-03", label: "Chapter 3" }}
      next={{ href: "/modules/module-05", label: "Chapter 5" }}
    />
  );
}
