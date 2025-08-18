import React from "react";
import ModuleTemplate from "@/components/ModuleTemplate";

const Module03 = () => {
  return (
    <ModuleTemplate
      title="Module 3 — Raceway Systems"
      articles={[
        {
          id: "300",
          title: "Article 300 — General Raceway Requirements",
          body: (
            <>
              <p>
                Raceways are the physical pathways that protect and route
                conductors. Proper installation ensures safety, accessibility,
                and compliance with the NEC.
              </p>
              <ul className="list-disc list-inside">
                <li>Raceways must be continuous and complete between pull points.</li>
                <li>Fill percentages are limited to prevent overheating.</li>
                <li>Bends must not exceed 360° between pull points.</li>
              </ul>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-01.jpg", alt: "Conduit runs" },
            { src: "/images/module-03/m03-02.jpg", alt: "Raceway bend example" },
          ],
        },
        {
          id: "310",
          title: "Article 310 — Conductors for General Wiring",
          body: (
            <>
              <p>
                Conductors installed inside raceways must be sized correctly,
                rated for their environment, and identified clearly. Insulation
                types (THHN, XHHW, etc.) determine temperature ratings and
                allowable ampacities.
              </p>
              <p>
                Conductor color coding is used to identify phases, neutrals, and
                equipment grounds for safety and troubleshooting.
              </p>
            </>
          ),
          images: [
            { src: "/images/module-03/m03-03.jpg", alt: "Conductor spools" },
            { src: "/images/module-03/m03-04.jpg", alt: "Color-coded conductors" },
          ],
        },
      ]}
      quiz={[
        {
          question: "What is the maximum total bend allowed in a raceway run between pull points?",
          choices: [
            { key: "A", text: "180°" },
            { key: "B", text: "270°" },
            { key: "C", text: "360°" },
            { key: "D", text: "No limit" },
          ],
          answer: "C",
          why: "The NEC limits bends in a raceway to 360° between pull points to ensure conductors can be pulled without damage.",
        },
        {
          question: "Which insulation type is commonly used for conductors in dry locations?",
          choices: [
            { key: "A", text: "UF" },
            { key: "B", text: "THHN" },
            { key: "C", text: "SE" },
            { key: "D", text: "NM-B" },
          ],
          answer: "B",
          why: "THHN insulation is the most common conductor type for dry locations inside raceways.",
        },
        {
          question: "Why is color coding important for conductors?",
          choices: [
            { key: "A", text: "Improves conductor flexibility" },
            { key: "B", text: "Makes installations look better" },
            { key: "C", text: "Identifies conductor function and increases safety" },
            { key: "D", text: "Reduces cost of materials" },
          ],
          answer: "C",
          why: "Color coding ensures correct identification of phases, neutrals, and grounds, improving safety and troubleshooting.",
        },
      ]}
      prev="/modules/module-02"
      next="/modules/module-04"
    />
  );
};

export default Module03;