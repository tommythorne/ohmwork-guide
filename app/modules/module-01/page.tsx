"use client";

import ModuleTemplate from "../../components/ModuleTemplate";
import type { QuizQuestion } from "../../types/module";
import { HL, RuleBox, WarningBox, CodeBox, DataTable, ChartBox } from "../../components/Blocks";
import { BookOpen, Shield, Plug, AlertTriangle } from "lucide-react";

const quiz: QuizQuestion[] = [
  { id: 1, stem: "What does Article 90.1(A) emphasize about the NEC?",
    choices: [
      { key:"A", text:"It eliminates all electrical risk" },
      { key:"B", text:"It is a training manual for unqualified persons" },
      { key:"C", text:"It provides practicable safeguarding of persons and property" },
      { key:"D", text:"It is a product design standard" }
    ],
    answer: "C",
    why: "Per 90.1(A), the NEC provides practicable safeguarding, not zero risk."
  },
  { id: 2, stem: "Which phrase in Article 90.5 indicates a mandatory requirement?",
    choices: [
      { key:"A", text:"May" }, { key:"B", text:"Should" }, { key:"C", text:"Shall" }, { key:"D", text:"Could" }
    ],
    answer: "C",
    why: "90.5 uses 'Shall' for mandatory rules."
  },
  { id: 3, stem: "“Readily Accessible” (Art. 100) means the equipment can be reached:",
    choices: [
      { key:"A", text:"With standard tools" },
      { key:"B", text:"By moving a ladder into place" },
      { key:"C", text:"Quickly, without tools or ladders" },
      { key:"D", text:"Only by qualified persons" }
    ],
    answer: "C",
    why: "Article 100 definition: without tools, ladders, or removing obstacles."
  },
  { id: 4, stem: "A feeder is best defined as conductors between:",
    choices: [
      { key:"A", text:"The service disconnect and utilization equipment" },
      { key:"B", text:"The final OCPD and utilization equipment" },
      { key:"C", text:"Service equipment (or source) and branch‑circuit OCPDs" },
      { key:"D", text:"Any two enclosures" }
    ],
    answer: "C",
    why: "Article 100: feeder vs branch‑circuit boundary is the final OCPD."
  },
  { id: 5, stem: "Which statement about 110.3(B) is correct?",
    choices: [
      { key:"A", text:"Instructions are suggestions only" },
      { key:"B", text:"Listing/labeling does not affect installation" },
      { key:"C", text:"Install and use equipment per listing and instructions" },
      { key:"D", text:"Only the nameplate matters" }
    ],
    answer: "C",
    why: "110.3(B) requires installing per listing/labeling and instructions."
  },
  { id: 6, stem: "Under 110.14(C), which factor determines the ampacity column you may use for sizing terminals?",
    choices: [
      { key:"A", text:"Conductor insulation rating only" },
      { key:"B", text:"Ambient temperature only" },
      { key:"C", text:"Terminal temperature rating on the device" },
      { key:"D", text:"Panelboard brand" }
    ],
    answer: "C",
    why: "110.14(C) ties allowable ampacity column to terminal temperature ratings."
  },
  { id: 7, stem: "Why is torque required on terminations?",
    choices: [
      { key:"A", text:"It prevents label peeling" },
      { key:"B", text:"It ensures proper contact pressure and avoids overheating" },
      { key:"C", text:"It improves enclosure NEMA rating" },
      { key:"D", text:"It reduces arc flash incident energy" }
    ],
    answer: "B",
    why: "110.14(D) and instructions specify torque for reliable electrical/mechanical performance."
  },
  { id: 8, stem: "Which is NOT part of the typical working space envelope in 110.26?",
    choices: [
      { key:"A", text:"Depth based on conditions" },
      { key:"B", text:"Width not less than 30 inches or equipment width" },
      { key:"C", text:"Height of 6.5 ft or the equipment height" },
      { key:"D", text:"A storage shelf for spare parts" }
    ],
    answer: "D",
    why: "110.26 requires the space remain clear; storage is not allowed."
  },
  { id: 9, stem: "Field‑applied hazard markings must be durable and suitable for the environment per:",
    choices: [
      { key:"A", text:"110.21(B)" }, { key:"B", text:"110.22(A)" }, { key:"C", text:"110.24(A)" }, { key:"D", text:"90.2" }
    ],
    answer: "A",
    why: "110.21(B) covers field‑applied hazard markings."
  },
  { id: 10, stem: "Disconnects and circuits must be identified to indicate their purpose per:",
    choices: [
      { key:"A", text:"110.3(B)" }, { key:"B", text:"110.22(A)" }, { key:"C", text:"100 (Definitions)" }, { key:"D", text:"90.5" }
    ],
    answer: "B",
    why: "110.22(A) requires clear identification of disconnects/circuits."
  },
  { id: 11, stem: "Available fault current labeling at service equipment is addressed in:",
    choices: [
      { key:"A", text:"110.24(A)" }, { key:"B", text:"110.26(C)" }, { key:"C", text:"110.14(C)" }, { key:"D", text:"90.1" }
    ],
    answer: "A",
    why: "110.24(A) requires marking available fault current where applicable."
  },
  { id: 12, stem: "Article 90.2 primarily addresses:",
    choices: [
      { key:"A", text:"Enforcement and penalties" },
      { key:"B", text:"Scope of installations covered and not covered" },
      { key:"C", text:"Only residential occupancies" },
      { key:"D", text:"Product standard development" }
    ],
    answer: "B",
    why: "90.2 defines scope and exclusions."
  },
  { id: 13, stem: "Which pairing is correct per Article 100?",
    choices: [
      { key:"A", text:"Feeder: from final OCPD to loads" },
      { key:"B", text:"Branch Circuit: from service equipment to OCPDs" },
      { key:"C", text:"EGC: conductor intended to carry normal load current" },
      { key:"D", text:"Grounded Conductor: normally current‑carrying return path" }
    ],
    answer: "D",
    why: "The grounded conductor (neutral) can carry current; EGC should not under normal conditions."
  },
  { id: 14, stem: "If a product is listed but installed contrary to its instructions, the installation:",
    choices: [
      { key:"A", text:"Is acceptable because it is listed" },
      { key:"B", text:"Is acceptable if AHJ agrees informally" },
      { key:"C", text:"Violates 110.3(B)" },
      { key:"D", text:"Becomes a field‑listed product automatically" }
    ],
    answer: "C",
    why: "110.3(B) requires installation per listing and instructions."
  },
  { id: 15, stem: "Which best describes the exam approach to working space in 110.26?",
    choices: [
      { key:"A", text:"Dimensions are advisory only" },
      { key:"B", text:"Storage in the working space is allowed if temporary" },
      { key:"C", text:"Dimensions and clear access are mandatory and testable" },
      { key:"D", text:"Only applies above 600 V" }
    ],
    answer: "C",
    why: "110.26(A) working space is mandatory; exams test width/depth/height and access."
  },
];

export default function Module01Page() {
  return (
    <ModuleTemplate
      hero={{
        imageSrc: "/images/module-01/m01-01.jpg",
        imageAlt: "NEC Chapter 1 — General principles, purpose, and installation basics",
        title: "Chapter 1 — General",
        subtitle: "Purpose, Definitions, and Installation Requirements"
      }}
      articles={[
        {
          id: "art-90-purpose-scope",
          title: "Article 90 — Purpose, Scope, and How to Read the NEC",
          body: (
            <ChartBox>
              <p><HL>90.1(A)</HL>: The NEC is about <HL>practicable safeguarding</HL> of persons and property. It reduces risks; it doesn’t promise zero risk.</p>
              <p><HL>90.2</HL>: Know what’s in scope (installations) and what’s not (e.g., ships, railways). Scope questions are common.</p>
              <p><HL>90.5</HL>: “Shall” = mandatory; “Should/May” = permissive. Exam writers love wording traps.</p>
              <p>Handbook fine print explains intent, but the <HL>Code text</HL> is what’s enforceable. Read the exact words.</p>
              <p>When unsure, apply: purpose → scope → definition → requirement. This sequence avoids most test traps.</p>
              <RuleBox>Memorize: <HL>Shall</HL> (mandatory), <HL>Shall Not</HL> (prohibition), <HL>May</HL> (permissive).</RuleBox>
              <CodeBox>
                <p><HL>90.1(B)</HL>: Not intended as a design manual or an instruction manual for untrained persons.</p>
                <p>Use manufacturer instructions and product standards alongside the NEC.</p>
              </CodeBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-01/m01-02.jpg", alt: "NEC handbook and code book with notes", caption: "Practicable Safeguarding: Reduce risk, not eliminate it" },
            { src: "/images/module-01/m01-03.jpg", alt: "Inspector reviewing scope notes", caption: "Scope: Know what is covered and what is not" }
          ]
        },
        {
          id: "art-100-definitions",
          title: "Article 100 — Definitions That Actually Get Tested",
          body: (
            <ChartBox>
              <p><HL>Accessible (Readily Accessible)</HL>: Reach quickly without tools, ladders, or moving obstacles. Exam staple.</p>
              <p><HL>Qualified Person</HL>: Skills/knowledge plus safety training to recognize hazards.</p>
              <p><HL>Feeder</HL>: Conductors between service equipment (or source) and branch‑circuit overcurrent devices.</p>
              <p><HL>Branch Circuit</HL>: Conductors from the final OCPD to utilization equipment.</p>
              <p><HL>Grounded Conductor</HL> (neutral) vs <HL>Equipment Grounding Conductor</HL> (EGC): Different functions; never treat them interchangeably.</p>
              <DataTable>
                <p><HL>Readily Accessible</HL>: No tools/ladders; quick access.</p>
                <p><HL>Service Conductors</HL>: From utility point to service equipment.</p>
                <p><HL>Identified</HL>: Recognized as suitable (color, marking, listing).</p>
              </DataTable>
              <WarningBox>Mixing up feeder vs branch circuit, or neutral vs EGC, is a common exam error. Read stems carefully.</WarningBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-01/m01-04.jpg", alt: "Panelboard with labels showing feeder and branch circuits", caption: "Feeder vs Branch: Know the boundary at the OCPD" },
            { src: "/images/module-01/m01-05.jpg", alt: "Service disconnect labeled with accessible location", caption: "Readily Accessible means no tools or ladders" }
          ]
        },
        {
          id: "art-110-listing-labeling",
          title: "Article 110 — Listing, Labeling, and Instructions (110.3(B))",
          body: (
            <ChartBox>
              <p><HL>110.3(B)</HL>: Equipment must be installed and used per its listing and labeling instructions.</p>
              <p>Ignoring instructions voids the product’s evaluated conditions of use and can be a code violation.</p>
              <p>Look for ambient, enclosure rating, conductor classes, and torque notes in the paperwork.</p>
              <p>Exam stems often hide “installed contrary to manufacturer instructions”—that’s a violation via <HL>110.3(B)</HL>.</p>
              <p>Field modifications can invalidate a listing unless evaluated/approved.</p>
              <CodeBox>
                <p><HL>Checklist</HL>: Listed? Labeled? Instructions followed? Rating matches conditions?</p>
                <p>If any answer is “no,” the installation likely violates <HL>110.3(B)</HL>.</p>
              </CodeBox>
              <WarningBox>“Listed but not installed per instructions” is still wrong on the exam and in the field.</WarningBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-01/m01-06.jpg", alt: "Nameplate and instruction sheet with torque values", caption: "Follow the nameplate and instruction sheet" },
            { src: "/images/module-01/m01-07.jpg", alt: "NEMA enclosure labels being inspected", caption: "Labels define the evaluated conditions of use" }
          ]
        },
        {
          id: "art-110-terminations-torque",
          title: "Article 110 — Terminations, Temperature Ratings, and Torque (110.14)",
          body: (
            <ChartBox>
              <p><HL>110.14(A)</HL>: Use terminals identified for the conductor material and class (Cu/Al, stranded class).</p>
              <p><HL>110.14(C)</HL>: Select ampacity using the correct temperature column based on the terminal rating.</p>
              <p>Devices rated 60°C or 75°C control which ampacity column you may use even if the wire is 90°C insulation.</p>
              <p>Torque all terminations to the specified value for reliable contact and to avoid overheating.</p>
              <p>Transition lugs/adaptors can be needed for fine‑stranded conductors at standard terminals.</p>
              <ChartBox>
                <p><HL>Pattern</HL>: Device 60°C → use 60°C column; Device 75°C → use 75°C column; Don’t default to 90°C for device sizing.</p>
                <p><HL>Torque</HL>: Use a calibrated tool and record values when required by spec.</p>
              </ChartBox>
              <WarningBox>Using the wrong temperature column is a classic exam trap—always tie it to the <HL>terminal</HL> rating.</WarningBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-01/m01-08.jpg", alt: "Torque screwdriver tightening a breaker lug", caption: "Torque to the indicated value per 110.14(D)" },
            { src: "/images/module-01/m01-09.jpg", alt: "Terminal labeling showing 60/75°C ratings", caption: "Terminal temperature drives ampacity column" }
          ]
        },
        {
          id: "art-110-working-space",
          title: "Article 110 — Working Space and Access (110.26)",
          body: (
            <ChartBox>
              <p><HL>110.26(A)(1)</HL> Depth: Typical equipment requires a minimum working depth; conditions of maintenance/live parts change values.</p>
              <p><HL>110.26(A)(2)</HL> Width: Not less than the equipment width or a standard minimum, whichever is greater.</p>
              <p><HL>110.26(A)(3)</HL> Height: Clear from the floor to the specified headroom; keep the working space clear.</p>
              <p><HL>110.26(C)</HL>: Entrance/egress requirements; large equipment needs doors that open out and are panic‑hardware equipped in some cases.</p>
              <p>Memorize a compact set of dimensions and when they apply; read all exceptions carefully.</p>
              <DataTable>
                <p><HL>Depth (typical)</HL>: Condition 1 ≈ 3 ft; Condition 2 ≈ 3.5 ft; Condition 3 ≈ 4 ft.</p>
                <p><HL>Width</HL>: Not less than 30 in. or equipment width.</p>
                <p><HL>Height</HL>: 6.5 ft headroom (typical working space envelope).</p>
              </DataTable>
              <RuleBox>Keep working space <HL>clear</HL>: no storage, piping, or obstructions. The exam penalizes missed clearance rules.</RuleBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-01/m01-10.jpg", alt: "Electric panel with taped outline of working space", caption: "Mark and maintain the working envelope" },
            { src: "/images/module-01/m01-11.jpg", alt: "Electrical room door swinging out with panic device", caption: "Doors and egress affect compliance" }
          ]
        },
        {
          id: "art-110-marking-identification",
          title: "Article 110 — Marking, Identification, and Fault Current (110.21/110.22/110.24)",
          body: (
            <ChartBox>
              <p><HL>110.21(B)</HL>: Field‑applied hazard markings must be permanent, durable, and suitable for the environment.</p>
              <p><HL>110.22(A)</HL>: Identify disconnects and circuits to indicate their purpose—no guessing during maintenance.</p>
              <p><HL>110.24(A)</HL>: Service equipment must be marked with available fault current where required; keep labels updated when changes occur.</p>
              <p>Accurate marking supports coordination, PPE selection, and safe lockout/tagout practices.</p>
              <p>On the exam, watch for missing or illegible labels—those are violations.</p>
              <CodeBox>
                <p><HL>Checklist</HL>: Hazard label present, disconnect identified, fault current label current, ratings match AIC.</p>
                <p>When system changes occur, <HL>update labels</HL> to match the new calculations.</p>
              </CodeBox>
              <WarningBox>“Equipment present but unlabeled” is a frequent test red flag under <HL>110.22</HL>.</WarningBox>
            </ChartBox>
          ),
          images: [
            { src: "/images/module-01/m01-12.jpg", alt: "Panelboard with fault current label applied", caption: "110.24: Fault current labels must be kept current" },
            { src: "/images/module-01/m01-13.jpg", alt: "Disconnect switch with clear circuit identification tag", caption: "110.22: Identify the disconnect’s purpose" }
          ]
        }
      ]}
      summary={{
        title: "Chapter 1 Summary",
        cards: [
          { icon: <BookOpen className="w-8 h-8 text-yellow-400" />, title: "Know the Intent", text: "Article 90 sets practicable safeguarding—not perfection." },
          { icon: <Shield className="w-8 h-8 text-yellow-400" />,    title: "Installed as Listed", text: "110.3(B) enforces instructions, ratings, and conditions of use." },
          { icon: <Plug className="w-8 h-8 text-yellow-400" />,      title: "Right Termination", text: "110.14 drives temp columns and torque for reliable connections." },
          { icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />, title: "Clear Working Space", text: "110.26 working area must stay unobstructed and properly sized." },
        ]
      }}
      quiz={quiz}
      prev={{ href: "/intro", label: "Intro" }}
      next={{ href: "/modules/module-02", label: "Chapter 2" }}
    />
  );
}
