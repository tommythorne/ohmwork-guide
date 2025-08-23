"use client";

import ModuleTemplate from "../../components/ModuleTemplate";
import type { QuizQuestion } from "../../types/module";
import { HL, RuleBox, WarningBox, CodeBox, DataTable, ChartBox } from "../../components/Blocks";
import { Plug, Lightbulb, Cog, Battery } from "lucide-react";

const quiz: QuizQuestion[] = [
  {
    id: 1,
    stem: "Outdoor 15A–20A, 125V receptacles in wet locations must be:",
    choices: [
      { key: "A", text: "Tamper-Resistant only" },
      { key: "B", text: "Weather-Resistant (WR) and in-use cover" },
      { key: "C", text: "Back-wired only" },
      { key: "D", text: "Horizontal mount only" }
    ],
    answer: "B",
    why: "406.9(B)(1): WR device with in-use (extra-duty) cover in wet locations."
  },
  {
    id: 2,
    stem: "Switch mounting height limitations live in which article?",
    choices: [
      { key: "A", text: "404" },
      { key: "B", text: "406" },
      { key: "C", text: "314" },
      { key: "D", text: "110" }
    ],
    answer: "A",
    why: "404.8 covers accessibility/mounting of switches."
  },
  {
    id: 3,
    stem: "Flexible cords may be used for which scenario?",
    choices: [
      { key: "A", text: "As a substitute for fixed wiring to a panelboard" },
      { key: "B", text: "Through wall cavities as branch-circuit wiring" },
      { key: "C", text: "Connection of portable equipment when permitted" },
      { key: "D", text: "As service-entrance conductors" }
    ],
    answer: "C",
    why: "400.7 permitted uses; 400.8 lists prohibitions."
  },
  {
    id: 4,
    stem: "Circuit directories are required to be legibly identified per:",
    choices: [
      { key: "A", text: "408.4" },
      { key: "B", text: "406.3" },
      { key: "C", text: "110.22" },
      { key: "D", text: "300.4" }
    ],
    answer: "A",
    why: "408.4 requires identification of circuits in panelboards/switchboards."
  },
  {
    id: 5,
    stem: "Appliance nameplate data primarily informs:",
    choices: [
      { key: "A", text: "Feeder size only" },
      { key: "B", text: "Overcurrent protection and conductor sizing" },
      { key: "C", text: "Box fill calculations" },
      { key: "D", text: "Raceway type selection only" }
    ],
    answer: "B",
    why: "422.11, 422.30-.31: nameplate drives OCPD/conductor sizing and disconnect."
  },
  {
    id: 6,
    stem: "Fixed electric space-heating load is treated as:",
    choices: [
      { key: "A", text: "Noncontinuous" },
      { key: "B", text: "Continuous load" },
      { key: "C", text: "Motor load only" },
      { key: "D", text: "Limited by 15A max" }
    ],
    answer: "B",
    why: "424.3(B): treated as continuous; size conductors at 125%."
  },
  {
    id: 7,
    stem: "Motor branch-circuit conductors are typically sized at:",
    choices: [
      { key: "A", text: "100% of motor FLC" },
      { key: "B", text: "115% of motor FLC" },
      { key: "C", text: "125% of motor FLC" },
      { key: "D", text: "150% of motor FLC" }
    ],
    answer: "C",
    why: "430.22: not less than 125% of motor full-load current."
  },
  {
    id: 8,
    stem: "A hermetic refrigerant motor-compressor (A/C) OCPD selection is guided by:",
    choices: [
      { key: "A", text: "Article 440" },
      { key: "B", text: "Article 422" },
      { key: "C", text: "Article 424" },
      { key: "D", text: "Article 408" }
    ],
    answer: "A",
    why: "440 governs hermetic refrigeration equipment."
  },
  {
    id: 9,
    stem: "Luminaires supported by the building must comply with:",
    choices: [
      { key: "A", text: "410.36(B) support provisions" },
      { key: "B", text: "406.9(B) weather resistance" },
      { key: "C", text: "430.102(B) disconnect rules" },
      { key: "D", text: "422.16 cord allowances" }
    ],
    answer: "A",
    why: "410.36(B) requires suitable support methods."
  },
  {
    id: 10,
    stem: "Transformers often require ventilation and guarding per:",
    choices: [
      { key: "A", text: "450" },
      { key: "B", text: "445" },
      { key: "C", text: "480" },
      { key: "D", text: "424" }
    ],
    answer: "A",
    why: "450 covers transformer installation including ventilation/guarding."
  },
  {
    id: 11,
    stem: "Batteries require signage and ventilation when applicable under:",
    choices: [
      { key: "A", text: "408" },
      { key: "B", text: "480" },
      { key: "C", text: "424" },
      { key: "D", text: "406" }
    ],
    answer: "B",
    why: "480 covers stationary batteries including ventilation/signage."
  },
  {
    id: 12,
    stem: "Within-sight disconnect for motors is required by:",
    choices: [
      { key: "A", text: "430.102(B)" },
      { key: "B", text: "422.31(B)" },
      { key: "C", text: "440.14" },
      { key: "D", text: "410.130" }
    ],
    answer: "A",
    why: "430.102(B): motor disconnect in sight of the motor location."
  },
  {
    id: 13,
    stem: "Panelboard wiring space and bus protection are found in:",
    choices: [
      { key: "A", text: "408" },
      { key: "B", text: "300" },
      { key: "C", text: "404" },
      { key: "D", text: "406" }
    ],
    answer: "A",
    why: "408 addresses panelboards/switchboards/switchgear requirements."
  },
  {
    id: 14,
    stem: "Appliance disconnect within sight is generally required by:",
    choices: [
      { key: "A", text: "422.31(B)" },
      { key: "B", text: "422.16" },
      { key: "C", text: "424.19" },
      { key: "D", text: "406.12" }
    ],
    answer: "A",
    why: "422.31(B): within-sight disconnecting means for appliances."
  },
  {
    id: 15,
    stem: "Weather-Resistant (WR) marking applies to:",
    choices: [
      { key: "A", text: "Indoor only tamper-resistant receptacles" },
      { key: "B", text: "Devices in wet or damp outdoor locations" },
      { key: "C", text: "Only 30A locking connectors" },
      { key: "D", text: "Cord caps listed for dry locations" }
    ],
    answer: "B",
    why: "406.9: WR required for devices in wet/damp locations."
  }
];

export default function Module04Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-04/m04-01.jpg",
        imageAlt: "NEC Chapter 4 — Equipment for General Use: appliances, luminaires, motors, transformers",
        title: "Chapter 4 — Equipment for General Use",
        subtitle: "Devices, luminaires, appliances, motors/A‑C, transformers & batteries—rules for everyday gear"
      }}
      stats={[
        { label: "Major Articles", value: "8" },
        { label: "Quiz Questions", value: "15" },
        { label: "Visual Examples", value: "16" }
      ]}
      atAGlance={[
        "404/406: TR/WR devices, in-use covers, grounding, mounting",
        "410: Luminaire support, temperature, recessed IC/clearances",
        "400: Cord types—permitted vs prohibited uses",
        "408: Panelboard directories, wiring space, protection",
        "422: Nameplate-driven OCPD, conductor, within-sight disconnects",
        "424: Fixed heating as continuous load; sizing and disconnects",
        "430/440: Motor/A‑C conductor & OCPD sizing; within-sight disconnects",
        "450/480: Transformers/batteries—ventilation, guarding, signage"
      ]}
      articles={[
        {
          id: "devices-receptacles-switches",
          iconName: "Plug",
          title: "Devices — Receptacles & Switches (404, 406)",
          body: (
            <ChartBox>
              <p><HL>406.9(B)</HL>: Outdoor wet locations need WR devices and extra-duty in-use covers.</p>
              <p><HL>406.12</HL>: Tamper-Resistant required in many dwelling areas—read scope carefully.</p>
              <p><HL>404.8</HL>: Switch mounting and accessibility; maintain required reach and orientation.</p>
              <p>Bonding the yoke where required, and use boxes/fittings rated for the location.</p>
              <RuleBox>Outdoors: “WR + in-use cover” is the fast exam check for 15/20A, 125V receptacles.</RuleBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-02.jpg", alt: "WR receptacle with extra-duty in-use cover installed", caption: "WR + In-Use Cover for Wet Locations" },
            { src: "/images/module-04/m04-03.jpg", alt: "Tamper-resistant receptacle face with TR marking", caption: "TR Marking for Dwelling Areas" }
          ]
        },
        {
          id: "luminaires-lampholders",
          iconName: "Lightbulb",
          title: "Luminaires & Lampholders (410)",
          body: (
            <ChartBox>
              <p><HL>410.36(B)</HL>: Support luminaires by the building structure or listed means.</p>
              <p><HL>410.116</HL>: Recessed—observe insulation contact (IC) and temperature limitations.</p>
              <p>Respect marked supply conductor temperature—often 90°C lead requirement near hot fixtures.</p>
              <p>Use listed boxes/fittings for weight and environment; secure canopies and stems.</p>
              <WarningBox>Mismatch of conductor temperature rating at luminaires is a frequent exam trap.</WarningBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-04.jpg", alt: "Recessed luminaire with IC rating label visible", caption: "IC/Non-IC and Lead Temperature Matter" },
            { src: "/images/module-04/m04-05.jpg", alt: "Pendant luminaire supported by listed hardware", caption: "Support Per 410.36(B) Using Listed Means" }
          ]
        },
        {
          id: "flexible-cords-cables",
          iconName: "Cable",
          title: "Flexible Cords & Cables (400)",
          body: (
            <ChartBox>
              <p><HL>400.7</HL>: Permitted uses include portable equipment and pendants—when listed.</p>
              <p><HL>400.8</HL>: Not allowed as a substitute for fixed wiring or through walls/ceilings.</p>
              <p>Select cord type (SJ, S, SO, etc.) appropriate to voltage, oil resistance, and environment.</p>
              <p>Always provide strain relief and protect from physical damage at terminations.</p>
              <CodeBox>Quick check: permitted purpose, path (no concealed), type marking, strain relief present.</CodeBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-06.jpg", alt: "Portable tool connected with listed flexible cord", caption: "Cords for Portable Equipment (Allowed)" },
            { src: "/images/module-04/m04-07.jpg", alt: "Strain relief installed on cord at enclosure entry", caption: "Strain Relief Protects Terminations" }
          ]
        },
        {
          id: "panelboards-switchboards-switchgear",
          iconName: "LayoutPanelTop",
          title: "Panelboards, Switchboards, Switchgear (408)",
          body: (
            <ChartBox>
              <p><HL>408.4</HL>: Provide a legible circuit directory; identify each circuit clearly.</p>
              <p>Maintain wiring space and barriers as listed; keep bus protected per manufacturer.</p>
              <p>Use filler plates for unused openings; secure deadfronts and covers.</p>
              <p>Working space is governed by <HL>110.26</HL>; keep equipment areas clear.</p>
              <RuleBox>Directory must reflect actual loads—“spare” and “space” properly noted.</RuleBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-08.jpg", alt: "Panelboard with updated and legible circuit directory", caption: "Legible, Accurate Directory (408.4)" },
            { src: "/images/module-04/m04-09.jpg", alt: "Switchboard front with deadfronts and filler plates", caption: "Covers, Fillers, and Guarding Intact" }
          ]
        },
        {
          id: "appliances",
          iconName: "Wrench",
          title: "Appliances (422)",
          body: (
            <ChartBox>
              <p>Use the appliance nameplate to size OCPD and conductors; check duty-cycle notes.</p>
              <p><HL>422.31(B)</HL>: Provide a disconnect within sight where required; lockable provisions where allowed.</p>
              <p><HL>422.16</HL>: Cord-and-plug connection allowed only in specific cases; follow conditions.</p>
              <p>Bonding/grounding and GFCI where specified by location and instructions.</p>
              <CodeBox>Checklist: nameplate amps/volts, disconnect within sight, cord allowance, instructions followed.</CodeBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-10.jpg", alt: "Appliance nameplate showing voltage and amperage", caption: "Nameplate Drives Sizing" },
            { src: "/images/module-04/m04-11.jpg", alt: "Local appliance disconnect within sight of the unit", caption: "Within‑Sight Disconnect (422.31(B))" }
          ]
        },
        {
          id: "fixed-space-heating",
          iconName: "Flame",
          title: "Fixed Electric Space Heating (424)",
          body: (
            <ChartBox>
              <p><HL>424.3(B)</HL>: Treat as continuous load; size conductors at 125% of load.</p>
              <p><HL>424.19</HL>: Provide a disconnecting means; within-sight rules apply to many units.</p>
              <p>Observe clearances to combustibles and mounting requirements per listing.</p>
              <p>Thermostat/control wiring separation and rating per manufacturer instructions.</p>
              <RuleBox>Heating = continuous load: conductor/OCPD sizing reflects 125% pattern.</RuleBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-12.jpg", alt: "Wall heater with clearance label and mounting", caption: "Listed Clearances and Mounting" },
            { src: "/images/module-04/m04-13.jpg", alt: "Disconnect adjacent to fixed space heater", caption: "Disconnecting Means Provided" }
          ]
        },
        {
          id: "motors-and-hermetic-ac",
          iconName: "Cog",
          title: "Motors & Hermetic A/C (430, 440)",
          body: (
            <ChartBox>
              <p><HL>430.22</HL>: Motor conductors sized at 125% of FLC; use table FLC, not nameplate for sizing.</p>
              <p><HL>430.52</HL>: OCPD chosen per table and type (inverse time, time‑delay, etc.).</p>
              <p><HL>430.102(B)</HL>: Disconnect within sight of the motor; lockable provisions when allowed.</p>
              <p><HL>440</HL>: A/C hermetic units rely on MOCP and MCA—use equipment labels to size.</p>
              <DataTable>
                <p>MCA: Conductor sizing basis; MOCP: Max OCPD per unit label.</p>
                <p>Within-sight: visible and not more than a short walking distance.</p>
              </DataTable>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-14.jpg", alt: "Motor nameplate with FLC reference and enclosure", caption: "Use Table FLC for Sizing, Nameplate for Data" },
            { src: "/images/module-04/m04-15.jpg", alt: "A/C condensing unit with local disconnect", caption: "Within‑Sight Disconnect for A/C" }
          ]
        },
        {
          id: "transformers-generators-batteries",
          iconName: "Battery",
          title: "Transformers, Generators & Batteries (450, 445, 480)",
          body: (
            <ChartBox>
              <p><HL>450</HL>: Provide ventilation and guarding; follow listing and working clearances.</p>
              <p><HL>445</HL>: Generators—nameplate ratings, disconnecting means, grounding/bonding per instructions.</p>
              <p><HL>480</HL>: Stationary batteries—ventilation, signage, and protection from damage.</p>
              <p>Coordinate fault current and AIC ratings across equipment.</p>
              <WarningBox>Never ignore nameplate or installation instructions—<HL>110.3(B)</HL> still rules here.</WarningBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-04/m04-16.jpg", alt: "Dry-type transformer in ventilated electrical room", caption: "Transformers Need Ventilation/Guarding" },
            { src: "/images/module-04/m04-17.jpg", alt: "Battery racks with ventilation and hazard signage", caption: "Batteries Require Signage and Ventilation" }
          ]
        }
      ]}
      summary={{
        title: "Chapter 4 Summary",
        cards: [
          { icon: <Plug className="w-8 h-8 text-yellow-400" />, title: "Devices & Switches", text: "404/406 drive TR/WR, in‑use covers, grounding, mounting." },
          { icon: <Lightbulb className="w-8 h-8 text-yellow-400" />, title: "Luminaires", text: "410 covers support, temperature limits, and clearances." },
          { icon: <Cog className="w-8 h-8 text-yellow-400" />, title: "Motors & A/C", text: "430/440 set conductor/OCPD sizing and within‑sight disconnects." },
          { icon: <Battery className="w-8 h-8 text-yellow-400" />, title: "Power Equipment", text: "450/480 require ventilation, guarding, signage, and grounding." }
        ]
      }}
      quiz={quiz}
      prev={{ href: "/modules/module-03", label: "Chapter 3" }}
      next={{ href: "/modules/module-05", label: "Chapter 5" }}
    />
  );
}