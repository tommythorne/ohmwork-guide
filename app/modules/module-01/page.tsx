"use client";

import ModuleTemplate from "../../components/ModuleTemplate";
import { quizModule01 as quiz } from "./quiz"; // if missing, template still renders fine without quiz

export default function Module01Page() {
  return (
    <ModuleTemplate quiz={quiz}
      hero={{
        imageSrc: "/images/module-01/m01-hero.jpg",
        imageAlt: "NEC Chapter 1 — General principles, purpose, and installation basics",
        title: "Chapter 1 — General: Purpose, Definitions, and General Requirements",
        subtitle:
          "Read the Code like an inspector with a grudge. Chapter 1 tells you what the NEC is, what it covers, the language rules, and how to install gear without angering physics or the AHJ."
      }}
      articles={[
        {
          id: "art-90-purpose-scope",
          iconName: "BookOpen",
          title: "Article 90 — Purpose, Scope, and How to Read the NEC",
          points: [
            { ref: "90.1(A)", text: "NEC provides **practicable safeguarding**—not zero risk." },
            { ref: "90.1(B)", text: "Not a design manual. Use it with standards and manufacturer data." },
            { ref: "90.2", text: "Scope: installations covered and **not** covered (utility, ships, railways, mining, comm equipment…)." },
            { ref: "90.5", text: "Language: '**Shall**' = mandatory; '**Should/May**' = permissive; '**Informational Note**' = guidance, not enforceable." },
            { ref: "90.7", text: "Listed equipment is presumed evaluated—install it per instructions (see 110.3(B))." }
          ],
          images: [
            { src: "/images/module-01/m01-01.jpg", alt: "Article 90 highlights", caption: "Article 90 intent & scope" },
            { src: "/images/module-01/m01-02.jpg", alt: "Shall vs Should", caption: "Mandatory vs permissive terms" }
          ]
        },

        {
          id: "art-100-definitions-core",
          iconName: "CircuitBoard",
          title: "Article 100 — Definitions That Actually Get Tested",
          points: [
            { ref: "Readily Accessible", text: "Reachable **without** tools, ladders, or moving obstacles." },
            { ref: "Accessible", text: "Can be reached **without damaging** structure, but tools may be needed." },
            { ref: "Service / Feeder / Branch Circuit", text: "Boundary for branch circuit is the **final OCPD** protecting it." },
            { ref: "Grounded (Neutral) Conductor", text: "The grounded conductor is identified per Art. 200; don’t use it as ungrounded." },
            { ref: "Equipment Grounding Conductor (EGC)", text: "Fault‑current path; sized by **250.122** (OCPD rating)." }
          ],
          images: [
            { src: "/images/module-01/m01-03.jpg", alt: "Readily accessible vs accessible", caption: "Access definitions" },
            { src: "/images/module-01/m01-04.jpg", alt: "System conductor types", caption: "Service/feeder/branch overview" }
          ]
        },

        {
          id: "art-110-general-req",
          iconName: "ShieldCheck",
          title: "Article 110 — General Requirements for Electrical Installations",
          points: [
            { ref: "110.3(B)", text: "Install per **listing, labeling, instructions**—or you just voided your safety margin." },
            { ref: "110.12", text: "Neat and workmanlike—no spaghetti bowls in panels." },
            { ref: "110.9/110.10", text: "Interrupting & SCCR: Devices/equipment must handle available fault current." },
            { ref: "110.21/110.22", text: "Marking & identification—clear, durable, and **actually helpful**." },
            { ref: "110.24", text: "Service equipment must be marked with **available fault current**." }
          ],
          images: [
            { src: "/images/module-01/m01-05.jpg", alt: "Listed equipment label", caption: "Follow the label or fail" },
            { src: "/images/module-01/m01-06.jpg", alt: "Panel labeling", caption: "Do labels that make sense" }
          ]
        },

        {
          id: "art-110-terminations",
          iconName: "Cable",
          title: "110.14 — Terminations, Temperature Ratings, and Torque",
          points: [
            { ref: "110.14(C)", text: "Use conductor **ampacity column** that matches the terminal temp rating (often 60°C for 100A or less)." },
            { ref: "Torque", text: "Use a torque tool. Loose lugs arc; over‑torque damages lugs." },
            { ref: "Mixed Metals", text: "Al/Cu considerations; use listed lugs and antioxidant where required." }
          ],
          images: [
            { src: "/images/module-01/m01-07.jpg", alt: "Torque wrench on lugs", caption: "Torque to spec" },
            { src: "/images/module-01/m01-08.jpg", alt: "Conductor temp ratings", caption: "Pick correct ampacity column" }
          ]
        },

        {
          id: "art-110-working-space",
          iconName: "AlertTriangle",
          title: "110.26 — Working Space, Access, and Egress",
          points: [
            { ref: "Depth", text: "Depth of working space based on **voltage‑to‑ground** and condition (A/B/C)." },
            { ref: "Width & Height", text: "Width ≥ equipment width or 30 in; height ≥ 6.5 ft." },
            { ref: "Doors/Egress", text: "Equipment ≥1200A and ≥6 ft wide needs doors opening **outward** with panic hardware." },
            { ref: "Dedicated Space", text: "No ducts/pipes over panelboard space; keep it clear." }
          ],
          images: [
            { src: "/images/module-01/m01-09.jpg", alt: "Working space clearance", caption: "Keep the zone clear" },
            { src: "/images/module-01/m01-10.jpg", alt: "Egress hardware", caption: "Outward door, panic hardware" }
          ]
        },

        {
          id: "art-110-marking",
          iconName: "Calculator",
          title: "110.21 / 110.22 / 110.24 — Marking, Identification, Fault Current",
          points: [
            { ref: "110.21(B)", text: "Field‑applied hazard markings must be durable and legible." },
            { ref: "110.22(A)", text: "Each disconnect **identifies** the circuits it controls." },
            { ref: "110.24(A)", text: "Mark available fault current at service equipment; update if system changes." }
          ],
          images: [
            { src: "/images/module-01/m01-11.jpg", alt: "Field-applied markings", caption: "Durable hazard labels" },
            { src: "/images/module-01/m01-12.jpg", alt: "Fault current label", caption: "SCCR & AFC matter" }
          ]
        }
      ]}
      prev={{ href: "/modules/intro", label: "Intro" }}
      next={{ href: "/modules/module-02", label: "Chapter 2" }}

    />
  );
}
