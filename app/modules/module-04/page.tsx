"use client";

import ModuleTemplate from "../../components/ModuleTemplate";
import type { QuizQuestion } from "../../types/module";
import { HL, RuleBox, WarningBox, CodeBox, DataTable, ChartBox } from "../../components/Blocks";
import { Plug, Lightbulb, Cog, Battery, AlertTriangle } from "lucide-react";

const quiz: QuizQuestion[] = [
  {
    id: 1,
    stem: "Article 400 primarily covers:",
    choices: [
      { key: "A", text: "Flexible cords and flexible cables" },
      { key: "B", text: "Luminaires and lampholders" },
      { key: "C", text: "Switchboards and panelboards" },
      { key: "D", text: "Motors and controllers" },
    ],
    answer: "A",
    why: "NEC 400 covers flexible cords/cables (types S, SJ, SO, etc.).",
  },
  {
    id: 2,
    stem: "Tamper-resistant receptacles requirements live in:",
    choices: [
      { key: "A", text: "Article 404" },
      { key: "B", text: "Article 406" },
      { key: "C", text: "Article 410" },
      { key: "D", text: "Article 422" },
    ],
    answer: "B",
    why: "Article 406 governs receptacles, including TR/WR markings and use cases.",
  },
  {
    id: 3,
    stem: "Luminaires and lampholders are covered mainly by:",
    choices: [
      { key: "A", text: "Article 410" },
      { key: "B", text: "Article 408" },
      { key: "C", text: "Article 422" },
      { key: "D", text: "Article 424" },
    ],
    answer: "A",
    why: "Article 410 handles luminaires, lampholders, and related parts.",
  },
  {
    id: 4,
    stem: "Panelboards and switchboards are found in:",
    choices: [
      { key: "A", text: "Article 408" },
      { key: "B", text: "Article 404" },
      { key: "C", text: "Article 430" },
      { key: "D", text: "Article 450" },
    ],
    answer: "A",
    why: "Article 408 covers switchboards, switchgear, and panelboards.",
  },
  {
    id: 5,
    stem: "Motors, motor circuits, and controllers are covered in:",
    choices: [
      { key: "A", text: "Article 430" },
      { key: "B", text: "Article 440" },
      { key: "C", text: "Article 445" },
      { key: "D", text: "Article 450" },
    ],
    answer: "A",
    why: "Article 430 is the core section for motors and their protection/control.",
  },
  {
    id: 6,
    stem: "Hermetic refrigeration and A/C equipment is primarily in:",
    choices: [
      { key: "A", text: "Article 422" },
      { key: "B", text: "Article 424" },
      { key: "C", text: "Article 440" },
      { key: "D", text: "Article 450" },
    ],
    answer: "C",
    why: "Article 440 covers hermetic refrigerant motor-compressors and A/C equipment.",
  },
  {
    id: 7,
    stem: "Transformers (general requirements) are addressed by:",
    choices: [
      { key: "A", text: "Article 450" },
      { key: "B", text: "Article 408" },
      { key: "C", text: "Article 400" },
      { key: "D", text: "Article 445" },
    ],
    answer: "A",
    why: "Article 450 governs transformers, ventilation/clearances, etc.",
  },
  {
    id: 8,
    stem: "Appliances are primarily in:",
    choices: [
      { key: "A", text: "Article 410" },
      { key: "B", text: "Article 422" },
      { key: "C", text: "Article 424" },
      { key: "D", text: "Article 430" },
    ],
    answer: "B",
    why: "Article 422 covers appliances (nameplate ratings, disconnects, etc.).",
  },
  {
    id: 9,
    stem: "Fixed electric space heating (baseboard, radiant) is addressed in:",
    choices: [
      { key: "A", text: "Article 424" },
      { key: "B", text: "Article 410" },
      { key: "C", text: "Article 406" },
      { key: "D", text: "Article 450" },
    ],
    answer: "A",
    why: "Article 424 covers fixed space-heating equipment and wiring rules.",
  },
  {
    id: 10,
    stem: "Generators (standby/prime) are covered in:",
    choices: [
      { key: "A", text: "Article 445" },
      { key: "B", text: "Article 430" },
      { key: "C", text: "Article 408" },
      { key: "D", text: "Article 422" },
    ],
    answer: "A",
    why: "Article 445 governs generators (disconnects, OCP, nameplate, etc.).",
  },
  {
    id: 11,
    stem: "Switches (general) are found in:",
    choices: [
      { key: "A", text: "Article 406" },
      { key: "B", text: "Article 404" },
      { key: "C", text: "Article 410" },
      { key: "D", text: "Article 422" },
    ],
    answer: "B",
    why: "Article 404 covers switches and their installation/use.",
  },
  {
    id: 12,
    stem: "Storage batteries and battery rooms are covered in:",
    choices: [
      { key: "A", text: "Article 480" },
      { key: "B", text: "Article 406" },
      { key: "C", text: "Article 450" },
      { key: "D", text: "Article 424" },
    ],
    answer: "A",
    why: "Article 480 addresses storage batteries, ventilation, working clearances, etc.",
  },
  {
    id: 13,
    stem: "Listed WR (weather-resistant) receptacles are required when:",
    choices: [
      { key: "A", text: "Indoors anywhere" },
      { key: "B", text: "In damp or wet locations" },
      { key: "C", text: "Only in kitchens" },
      { key: "D", text: "Only in garages" },
    ],
    answer: "B",
    why: "Article 406 requires WR receptacles in damp/wet environments.",
  },
  {
    id: 14,
    stem: "Luminaire weight support considerations are in:",
    choices: [
      { key: "A", text: "404" },
      { key: "B", text: "406" },
      { key: "C", text: "410" },
      { key: "D", text: "445" },
    ],
    answer: "C",
    why: "Article 410 includes support and box/listing requirements for luminaires.",
  },
  {
    id: 15,
    stem: "Motor disconnect location/visibility rules appear within:",
    choices: [
      { key: "A", text: "Article 430" },
      { key: "B", text: "Article 440" },
      { key: "C", text: "Article 450" },
      { key: "D", text: "Article 422" },
    ],
    answer: "A",
    why: "Article 430 defines controller/disconnect rules (e.g., within sight).",
  },
];

export default function Module04Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-04/m04-01.jpg",
        imageAlt:
          "NEC Chapter 4 — Equipment for General Use: appliances, luminaires, motors, transformers",
        title: "Chapter 4 — Equipment for General Use",
        subtitle:
          "Appliances, luminaires, devices, motors & transformers — the everyday gear",
        blurb:
          "Dial in safe, code‑compliant installs for the equipment you touch every day: receptacles, switches, lights, appliances, motors, A/C, generators, and transformers.",
      }}
      articles={[
        {
          id: "art-406",
          title: "Devices — Receptacles & Switches (Art. 404 & 406)",
          body: (
            <>
              <p>
                <HL>Receptacles (406):</HL> Use TR where required; WR in damp/wet
                locations; ensure correct grounding, covers, and box fill.
              </p>
              <p>
                <HL>Switches (404):</HL> Proper box support, grounding of metal
                yokes, and device ratings that match the circuit.
              </p>
              <RuleBox>
                Use listed in‑use covers for exterior receptacles exposed to the
                weather—even when a cord is plugged in.
              </RuleBox>
              <CodeBox>
                Check 406 for TR/WR markings and 404 for switch wiring/grounding
                rules.
              </CodeBox>
            </>
          ),
          images: [
            {
              src: "/images/module-04/m04-02.jpg",
              alt: "Weather‑resistant (WR) receptacle with in‑use cover",
              caption: "WR + in‑use cover outdoors",
            },
            {
              src: "/images/module-04/m04-03.jpg",
              alt: "Switch device grounding and box fill",
              caption: "Ground devices and respect box fill",
            },
          ],
        },
        {
          id: "art-410",
          title: "Luminaires & Lampholders (Art. 410)",
          body: (
            <>
              <p>
                <HL>Support properly:</HL> Use boxes/listings that support the
                luminaire weight. Follow temperature and spacing markings.
              </p>
              <WarningBox>
                Don’t hang heavy luminaires from boxes not rated for the load.
              </WarningBox>
              <DataTable>
                <h4 className="font-bold text-white mb-3">
                  Common Luminaire Considerations
                </h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-2 text-yellow-400">Topic</th>
                      <th className="text-left p-2 text-yellow-400">Reminder</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-2">Box Rating</td>
                      <td className="p-2">Use boxes listed for luminaire weight</td>
                    </tr>
                    <tr>
                      <td className="p-2">Conductors</td>
                      <td className="p-2">Temperature rating must meet or exceed</td>
                    </tr>
                    <tr>
                      <td className="p-2">Clearances</td>
                      <td className="p-2">Observe spacing from combustibles</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
            </>
          ),
          images: [
            {
              src: "/images/module-04/m04-04.jpg",
              alt: "Ceiling box listed for luminaire support",
              caption: "Use listed boxes for support",
            },
            {
              src: "/images/module-04/m04-05.jpg",
              alt: "Luminaire spacing and thermal labels",
              caption: "Respect thermal/spacing labels",
            },
          ],
        },
        {
          id: "art-422-430-440",
          title: "Appliances, Motors & A/C (Art. 422, 430, 440)",
          body: (
            <>
              <p>
                <HL>Appliances (422):</HL> Size from nameplate; provide required
                disconnects and protection.
              </p>
              <p>
                <HL>Motors (430):</HL> Separate rules for conductor sizing, OCP,
                controllers, and disconnects (often within sight).
              </p>
              <p>
                <HL>Hermetic A/C (440):</HL> Follow equipment nameplates; special
                OCP and conductor rules.
              </p>
              <ChartBox>
                <div className="text-sm text-white/90">
                  <strong>Tip:</strong> Start with the nameplate. Then apply the
                  article‑specific sizing and protection tables.
                </div>
              </ChartBox>
            </>
          ),
          images: [
            {
              src: "/images/module-04/m04-06.jpg",
              alt: "Appliance nameplate close‑up",
              caption: "Always read the nameplate",
            },
            {
              src: "/images/module-04/m04-07.jpg",
              alt: "Motor controller and disconnect",
              caption: "Controllers + within‑sight disconnect",
            },
          ],
        },
        {
          id: "art-450-480",
          title: "Transformers & Storage Batteries (Art. 450, 480)",
          body: (
            <>
              <p>
                <HL>Transformers (450):</HL> Consider ventilation, guarding, and
                working space clearances. Provide proper OCP.
              </p>
              <p>
                <HL>Storage Batteries (480):</HL> Ventilation, guarding, signage,
                and working space—especially in battery rooms.
              </p>
              <CodeBox>
                Transformers often need dedicated ventilation and clearance.
                Batteries may have special ventilation and signage requirements.
              </CodeBox>
            </>
          ),
          images: [
            {
              src: "/images/module-04/m04-08.jpg",
              alt: "Dry‑type transformer in a mechanical room",
              caption: "Ventilation & working space matter",
            },
            {
              src: "/images/module-04/m04-09.jpg",
              alt: "Battery rack with safety signage",
              caption: "Observe ventilation & signage rules",
            },
          ],
        },
      ]}
      summary={{
        title: "Chapter 4 Summary",
        cards: [
          {
            icon: <Plug className="w-8 h-8 text-yellow-400" />,
            title: "Devices",
            text: "TR/WR where required; correct grounding, covers, and box fill.",
          },
          {
            icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
            title: "Luminaires",
            text: "Use listed support, respect spacing/temps, check labels.",
          },
          {
            icon: <Cog className="w-8 h-8 text-yellow-400" />,
            title: "Motors & A/C",
            text: "Size from nameplate and Articles 430/440; provide within‑sight disconnects.",
          },
          {
            icon: <Battery className="w-8 h-8 text-yellow-400" />,
            title: "Transformers & Batteries",
            text: "Ventilation, working clearances, guarding, and proper OCP.",
          },
        ],
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-03", label: "Chapter 3" }}
      next={{ href: "/modules/module-05", label: "Chapter 5" }}
    />
  );
}
