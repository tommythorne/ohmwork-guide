const content = {
  hero: {
    imageSrc: "/images/module-04/m04-hero.jpg",
    imageAlt: "NEC Chapter 4 — equipment for general use",
    title: "Chapter 4 — Equipment for General Use",
    subtitle:
      "Luminaires, receptacles, appliances, motors, A/C, transformers, panels—the gear you install every day."
  },

  prev: { href: "/modules/module-03", label: "Chapter 3" },
  next: { href: "/modules/module-05", label: "Chapter 5" },

  articles: [
    /* 1) 404 — Switches (EXAM) */
    {
      icon: "🔀",
      title: "404 — Switches: ratings, grounding, and accessibility",
      points: [
        { ref: "404.6", text: "Switches must be used within their **listing** and **voltage/ampere** ratings." },
        { ref: "404.9(B)", text: "Provide an **equipment grounding conductor** to metal boxes/yokes; bond metal cover plates." },
        { ref: "404.8(A)", text: "NEC doesn’t fix a mounting height—but switches must be **readily accessible** (no ladders/tools)." },
        { ref: "404.10(B)", text: "Face‑up switches in countertops are not allowed unless **listed** for that use." }
      ],
      block: {
        type: "exam",
        title: "'Readily accessible'",
        body:
          "If you need a ladder or must move obstacles, it’s **not** readily accessible. Article 100 definition + 404 questions are a classic pairing."
      },
      images: [
        { src: "/images/module-04/m04-404-01.jpg", alt: "Grounded switch yoke", caption: "Bond the metal yoke/box—keep fault paths low‑impedance." },
        { src: "/images/module-04/m04-404-02.jpg", alt: "Switch placement", caption: "No fixed height in NEC; keep it consistent and accessible." }
      ]
    },

    /* 2) 406 — Receptacles (RULE) */
    {
      icon: "🔌",
      title: "406 — Receptacles, covers, and locations",
      points: [
        { ref: "406.4(A)", text: "Use **listed** devices suitable for the environment (WR outdoors/damp; TR in most dwelling areas)." },
        { ref: "406.9(B)(1)", text: "Outdoors in **wet** locations: in‑use (while‑in‑use) covers for 15/20A, 125/250V receptacles." },
        { ref: "406.5(E)", text: "Face‑up countertop receptacles must be **listed assemblies** (e.g., pop‑ups) for that orientation." },
        { ref: "406.12", text: "Tamper‑resistant (TR) required for most dwelling 15/20A receptacles." }
      ],
      block: {
        type: "rule",
        title: "Outdoors = in‑use cover",
        body:
          "If water can hit it **while a plug is inserted**, it needs an in‑use cover. That answer wins most 406.9 questions instantly."
      },
      images: [
        { src: "/images/module-04/m04-406-01.jpg", alt: "In‑use cover", caption: "Protects the cord connection while energized." },
        { src: "/images/module-04/m04-406-02.jpg", alt: "TR receptacle", caption: "TR shutters: standard for dwellings." }
      ]
    },

    /* 3) 410 — Luminaires (CODE) */
    {
      icon: "💡",
      title: "410 — Luminaires: support, temperature, and spaces",
      points: [
        { ref: "410.36(B)", text: "Support luminaires by **independent means** unless specifically listed for raceway support." },
        { ref: "410.116", text: "Thermally protect insulation/combustibles; observe **lamp/driver** temperature ratings." },
        { ref: "410.10(D)", text: "Closets: follow **clearance** rules for surface/pendant fixtures; use enclosed/IC-rated where required." }
      ],
      block: {
        type: "code",
        title: "",
        body:
          "410.36(B) requires independent support. Don’t hang luminaires by EMT unless the product is listed for it."
      },
      images: [
        { src: "/images/module-04/m04-410-01.jpg", alt: "Pendant luminaire support", caption: "Use listed hangers/boxes sized for the weight." },
        { src: "/images/module-04/m04-410-02.jpg", alt: "Closet fixture clearance", caption: "Respect clearance to storage—common inspection item." }
      ]
    },

    /* 4) 422 — Appliances (CHART) */
    {
      icon: "🧺",
      title: "422 — Appliances: disconnects and nameplates",
      points: [
        { ref: "422.31(B)", text: "Appliances >300 VA require a **disconnecting means** within sight or lockable open." },
        { ref: "422.60", text: "Follow **nameplate** ratings: voltage, current, phase, and specific installation notes." },
        { ref: "422.5(A)", text: "GFCI protection for certain appliances (e.g., drinking fountains, vending machines) per listing/locations." }
      ],
      block: {

      type: "rules",
      title: "Common Appliance Disconnect Rules (Quick View)",
      rules: [
        ["≥300 VA", "Disconnect required"],
        ["If not within sight", "Must be lockable"],
        ["Cord-and-plug option", "May serve as the disconnect when in sight"]
      ],
      note: "Quick visual reminder only. Verify specifics in 422.31(B) and equipment listings."


  body: "Quick visual reminder only. Verify specifics in 422.31(B) and equipment listings."
},
      images: [
        { src: "/images/module-04/m04-422-01.jpg", alt: "Washer disconnect", caption: "A cord‑and‑plug within sight can serve as the disconnect." },
        { src: "/images/module-04/m04-422-02.jpg", alt: "Nameplate close‑up", caption: "Always honor the nameplate: it’s part of the listing." }
      ]
    },

    /* 5) 424 — Fixed Electric Space Heating (TABLE) */
    {
      icon: "🔥",
      title: "424 — Fixed electric space heating",
      points: [
        { ref: "424.3(B)", text: "Branch‑circuit rating for fixed space heaters: typically **125%** of the load for continuous operation." },
        { ref: "424.19", text: "Controls and disconnects must be **within sight** or lockable open; see unit listing for specifics." },
        { ref: "424.9", text: "Follow **clearances** from combustibles per instructions/listing." }
      ],
      block: {
  type: "table",
  title: "Heater Sizing Snapshot",
  table: [
    ["Nameplate Load", "125% Factor", "OCPD (next standard)"],
    ["32A", "40A", "40A Breaker"],
    ["40A", "50A", "50A Breaker"],
    ["48A", "60A", "60A Breaker"]
  ],
  body: "Continuous fixed space-heating loads must be sized at **125%**. Always verify with unit instructions and Code."
},
      images: [
        { src: "/images/module-04/m04-424-01.jpg", alt: "Wall heater", caption: "Continuous load → 125% sizing." },
        { src: "/images/module-04/m04-424-02.jpg", alt: "Ceiling unit heater disconnect", caption: "Provide a disconnecting means within sight or lockable." }
      ]
    },

    /* 6) 430 — Motors (RULE) */
    {
      icon: "⚙️",
      title: "430 — Motors: OCPD, conductors, and disconnects",
      points: [
        { ref: "430.52", text: "Motor **OCPD** sizing is based on **Table 430.52** (percent of FLC); the OCPD protects the **circuit**, not the motor windings." },
        { ref: "430.22", text: "Motor **conductors** sized from **125%** of the motor **FLC** (Table 430.248–250)." },
        { ref: "430.102(B)", text: "A **disconnect** within sight of the motor and driven machinery (with exceptions)." }
      ],
      block: {
        type: "rule",
        title: "OCPD protects the wiring",
        body:
          "Motor branch OCPD often looks 'large'—that’s normal. The motor is protected by its **overload** device; the OCPD is for the **conductors**."
      },
      images: [
        { src: "/images/module-04/m04-430-01.jpg", alt: "Motor starter with overloads", caption: "Overloads protect the motor; OCPD protects the circuit." },
        { src: "/images/module-04/m04-430-02.jpg", alt: "Local motor disconnect", caption: "Within-sight disconnect—common exam checkpoint." }
      ]
    },

    /* 7) 440 — A/C and Refrigeration (EXAM) */
    {
      icon: "❄️",
      title: "440 — Air‑conditioning and refrigeration equipment",
      points: [
        { ref: "440.6", text: "Use **nameplate** values (RLA/FLA/MCA/MOCP) for conductor and OCPD sizing—**not** generic tables." },
        { ref: "440.14", text: "Provide a **disconnect** within sight of the equipment (with some allowances)." },
        { ref: "440.4(B)", text: "Install per listing and instructions; enclosure integrity and spacing matter for cooling airflow." }
      ],
      block: {
        type: "exam",
        title: "Nameplate rules",
        body:
          "If the nameplate gives **MCA/MOCP**, that’s your sizing. Don’t override with Article 310 ampacity or generic motor tables."
      },
      images: [
        { src: "/images/module-04/m04-440-01.jpg", alt: "Condensing unit nameplate", caption: "MOCP/MCA drive the circuit sizing." },
        { src: "/images/module-04/m04-440-02.jpg", alt: "AC disconnect next to unit", caption: "Within‑sight disconnect near the unit." }
      ]
    },

    /* 8) 450 — Transformers (CODE) */
    {
      icon: "🔁",
      title: "450 — Transformers: ventilation, OCPD, and terminations",
      points: [
        { ref: "450.9", text: "Provide **ventilation** and maintain clearance from combustibles per the listing." },
        { ref: "450.3", text: "Primary/secondary **OCPD** per **Table 450.3(A)/(B)** depending on type and voltage." },
        { ref: "110.14", text: "Follow **termination temperature** and torque; use lugs listed for conductor material." }
      ],
      block: {
        type: "code",
        title: "",
        body:
          "Table 450.3 sets maximum overcurrent protection for transformers by type and voltage class. Check the notes—lots of exam points live there."
      },
      images: [
        { src: "/images/module-04/m04-450-01.jpg", alt: "Dry-type transformer clearance", caption: "Keep vents clear; verify mounting orientation." },
        { src: "/images/module-04/m04-450-02.jpg", alt: "Transformer primary OCPD", caption: "OCPD sizing per 450.3 and the listing." }
      ]
    },

    /* 9) 408 — Switchboards/Switchgear/Panelboards (HORROR) */
    {
      icon: "🧰",
      title: "408 — Panelboards and switchgear",
      points: [
        { ref: "408.36(D)", text: "Service disconnect rules apply when the equipment is service rated—labeling and grouping matter." },
        { ref: "408.54", text: "Panelboard **filler plates** required in unused openings—no tape or makeshift covers." },
        { ref: "110.26", text: "Maintain **working space** and dedicated space above—no storage in front of panels." }
      ],
      block: {
        type: "horror",
        title: "The 'temporary' tape cover",
        body:
          "An inspector found tape over a breaker space where a filler should’ve been. Failed the floor and delayed energization by a week. Keep filler plates on hand."
      },
      images: [
        { src: "/images/module-04/m04-408-01.jpg", alt: "Panel with correct fillers", caption: "Every open space needs a listed filler plate." },
        { src: "/images/module-04/m04-408-02.jpg", alt: "Switchboard working space", caption: "Plan the room so clearances can’t be blocked." }
      ]
    },

    /* 10) 409 — Industrial Control Panels (RULE) */
    {
      icon: "🛠️",
      title: "409 — Industrial control panels (ICP)",
      points: [
        { ref: "409.110", text: "Provide **SCCR** marking; components must achieve a panel SCCR ≥ available fault current." },
        { ref: "409.104", text: "Disconnecting means per 430/440/422 as applicable—many ICPs feed motors/appliances." },
        { ref: "110.3(B)", text: "Install per **instructions/listing**; spacing/venting are common fail points." }
      ],
      block: {
        type: "rule",
        title: "Label speaks first",
        body:
          "On ICP questions, read the **nameplate** and SCCR first. If the system’s available fault current is higher, you’re not compliant."
      },
      images: [
        { src: "/images/module-04/m04-409-01.jpg", alt: "Industrial control panel interior", caption: "Component choices determine the panel SCCR." },
        { src: "/images/module-04/m04-409-02.jpg", alt: "ICP nameplate", caption: "Verify SCCR against available fault current." }
      ]
    }
  ]
};

// Attach quiz from local file so ModuleTemplate receives it
import quiz from "./quiz";
(content as any).quiz = quiz;
export default content;
