// app/modules/module-06/content.ts
const content = {
  hero: {
    imageSrc: "/images/module-06/m06-01.jpg",
    imageAlt: "NEC Chapter 6 — Special Equipment overview",
    title: "Chapter 6 — Special Equipment",
    subtitle:
      "PV, EV, signs, welders, elevators, pools, IT rooms, fire pumps — gear with its own rules."
  },

  prev: { href: "/modules/module-05", label: "Chapter 5" },
  next: { href: "/modules/module-07", label: "Chapter 7" },

  articles: [
    // 1) Article 600 — Electric Signs & Outline Lighting (EXAM)
    {
      icon: "🪧",
      title: "Art. 600 — Electric Signs & Outline Lighting",
      points: [
        { ref: "600.5(A)", text: "Provide a **dedicated branch circuit** (typically 20A, 120V) to each sign/outline lighting system—no other loads permitted." },
        { ref: "600.6(A)(1)", text: "A **readily accessible disconnect** must be within sight of the sign or outline lighting system unless exceptions apply." },
        { ref: "600.3", text: "All sign equipment must be **listed/identified** and installed per the **label and instructions** (mounting, conductors, environmental limits)." },
        { ref: "300/600 blend", text: "Follow Chapter 3 wiring method rules; use **wet/damp-rated** fittings where exposed to weather." },
        { ref: "Grounding/Bonding", text: "Bond metallic sign enclosures and raceways; maintain a low-impedance fault path back to the source." }
      ],
      block: {
        type: "exam",
        body:
          "If it’s a sign circuit, it’s **dedicated**. Don’t add receptacles/lighting. Disconnect must be within sight unless a permitted exception is met."
      },
      images: [
        { src: "/images/module-06/m06-02.jpg", alt: "Sign disconnect within sight", caption: "Local disconnect: labeled and readily accessible." },
        { src: "/images/module-06/m06-03.jpg", alt: "Listed sign power supply", caption: "Use listed components and follow markings." }
      ]
    },

    // 2) Article 620 — Elevators, Escalators, Platform Lifts (RULE)
    {
      icon: "🛗",
      title: "Art. 620 — Elevators, Escalators, Platform Lifts",
      points: [
        { ref: "620.51", text: "**Means for disconnecting** with lock-open capability for driving machines, controllers, and machinery spaces." },
        { ref: "620.22", text: "Separate **lighting/receptacle** circuits from **power/drive** circuits per 620; don’t mix them." },
        { ref: "620.53", text: "Car-light/receptacle circuits often require GFCI and dedicated supply; check adopted cycle details." },
        { ref: "620.37/620.21", text: "Use wiring methods **identified** for the spaces (hoistway, machinery room, pit). Moisture, movement, and service access matter." },
        { ref: "Labeling", text: "Controllers and disconnects must be **labeled** clearly; AHJ will look for consistency with drawings and O&M docs." }
      ],
      block: {
        type: "rule",
        body:
          "Keep elevator **car lights/recepts** separate from **drive power**. Disconnects must be lockable and located where required."
      },
      images: [
        { src: "/images/module-06/m06-04.jpg", alt: "Elevator machine room disconnect", caption: "Lockable disconnect within the room." },
        { src: "/images/module-06/m06-05.jpg", alt: "Controller cabinet with labeling", caption: "Follow controller labeling and 620 specifics." }
      ]
    },

    // 3) Article 625 — Electric Vehicle Supply Equipment (CODE)
    {
      icon: "🚗",
      title: "Art. 625 — Electric Vehicle Supply Equipment (EVSE)",
      points: [
        { ref: "625.41", text: "**GFCI**/ground-fault protection often integral to EVSE; understand how upstream protection interacts." },
        { ref: "625.42", text: "EVSE is a **continuous load** — size conductors and OCPD at **125%** of nameplate." },
        { ref: "625.44/625.46", text: "Follow rules for cord-and-plug vs hard-wired EVSE, cord lengths, and mounting heights." },
        { ref: "Labeling", text: "Placards for **maximum output**/rating and circuit requirements help techs and inspectors verify compliance." },
        { ref: "Ventilation", text: "Some legacy equipment requires ventilation; modern listed EVSE may waive it—check the **listing**." }
      ],
      block: {
        type: "code",
        body:
          "Treat EVSE as **continuous**. Example: 40A nameplate → 50A breaker (125%) with conductors to match."
      },
      images: [
        { src: "/images/module-06/m06-06.jpg", alt: "Wall-mounted EVSE", caption: "Confirm continuous-load sizing and GFCI behavior." },
        { src: "/images/module-06/m06-07.jpg", alt: "EVSE nameplate close-up", caption: "Size to nameplate × 125%." }
      ]
    },

    // 4) Article 630 — Electric Welders (TABLE)
    {
      icon: "🧰",
      title: "Art. 630 — Electric Welders",
      points: [
        { ref: "Duty Cycle", text: "Welder input current depends on **duty cycle**; use 630 tables/notes instead of generic branch rules." },
        { ref: "OCPD", text: "OCPD/conductor sizing can be **smaller or larger** than standard due to 630 multipliers—follow the table math." },
        { ref: "Receptacles", text: "Use the correct configuration/rating; verify cord caps match receptacle/branch rating." },
        { ref: "Feeder Impact", text: "Groups of welders can be **diversified** per 630; don’t oversize blindly." },
        { ref: "Nameplate", text: "When in doubt, the **nameplate + Article 630** drive the design—don’t ‘average’ ratings." }
      ],
      block: {
        type: "table",
        title: "Quick Sheet — Duty Cycle Multipliers",
        table: [
          ["Duty Cycle", "Multiplier (≈)", "Notes"],
          ["100%", "1.00×", "Rated input current"],
          ["60%",  "0.80×", "Common shop welder example"],
          ["50%",  "0.71×", "Use Article 630 tables"],
          ["30%",  "0.55×", "Use Article 630 tables"]
        ],
        body: "Use **Article 630** nameplate + tables for the exact multiplier, then size OCPD and conductors per 630."
      },
images: [
        { src: "/images/module-06/m06-08.jpg", alt: "Shop welder circuit", caption: "Size branch/OCPD using 630 rules." },
        { src: "/images/module-06/m06-09.jpg", alt: "Nameplate with duty cycle", caption: "Nameplate + 630 tables drive sizing." }
      ]
    },

    // 5) Article 640 — Audio Systems (CHART)
    {
      icon: "🎚️",
      title: "Art. 640 — Audio Systems",
      points: [
        { ref: "640.9", text: "Use **listed/identified** equipment and cable types; support low-voltage per manufacturer and Code." },
        { ref: "Separation", text: "Maintain separation between AC power and LV audio/data as required to reduce noise and hazards." },
        { ref: "Branch Sizing", text: "Size power for racks/amps to **nameplate**; account for ventilation and heat loads." },
        { ref: "Grounding", text: "Bonding/grounding per manufacturer reduces hum and shock risk; avoid bootleg grounds." },
        { ref: "Connectorization", text: "Use proper terminations (barrier strips, speakON, locking inlets) where listed; strain reliefs matter." }
      ],
      block: {
        type: "table",
        title: "Audio Circuits — Common Topologies",
        table: [
          ["Topology", "Description"],
          ["Line-Level (balanced)", "XLR/TRS connections"],
          ["Line-Level (unbalanced)", "RCA connections"],
          ["Speaker-Level", "Amp → speaker direct"],
          ["Powered Speakers", "AC + signal combined"]
        ],
        asGrid: true,
        body: "Separate low-voltage signal from AC power where required; follow listings and **640** separation/support rules."
      },
images: [
        { src: "/images/module-06/m06-10.jpg", alt: "Audio rack power/ventilation", caption: "Ventilation and branch sizing matter." },
        { src: "/images/module-06/m06-11.jpg", alt: "LV cable management", caption: "Keep LV and AC separated as specified." }
      ]
    },

    // 6) Article 645 — IT Equipment Rooms (HORROR)
    {
      icon: "💻",
      title: "Art. 645 — IT Equipment Rooms",
      points: [
        { ref: "645.10", text: "Provide a **disconnecting means** for electronic equipment power (and HVAC when 645 rules are used)." },
        { ref: "Spaces", text: "Underfloor plenums require **plenum-rated** cable; identify pathways and penetrations correctly." },
        { ref: "Fire Integration", text: "Coordinate with **fire detection/suppression**; signage and EPO (if used) must be obvious." },
        { ref: "Wiring Methods", text: "Support, secure, and protect cabling per Chapter 3—no free-air spaghetti under raised floors." },
        { ref: "Documentation", text: "Label circuits, racks, and panel schedules; IT changes constantly—make maintenance safe and traceable." }
      ],
      block: {
        type: "horror",
        body:
          "A raised-floor job failed when non-plenum data cable went everywhere. Result: rip-out and replace under a production outage window."
      },
      images: [
        { src: "/images/module-06/m06-12.jpg", alt: "IT room underfloor cabling", caption: "Use listed plenum/raised-floor cabling." },
        { src: "/images/module-06/m06-13.jpg", alt: "EPO / disconnect station", caption: "Know the shutdown sequence and labeling." }
      ]
    },

    // 7) Article 680 — Pools, Fountains, Spas (EXAM)
    {
      icon: "🏊",
      title: "Art. 680 — Pools, Fountains, Spas",
      points: [
        { ref: "680.21(A)", text: "Pool **pump motors** require **GFCI** (scope varies by edition); verify local adoption." },
        { ref: "680.26", text: "**Equipotential bonding** grid: bond reinforcing steel, metal components, and perimeter surfaces." },
        { ref: "680.23", text: "Wet-niche luminaires: follow listing for niches, bonding, and **transformers** (where used)." },
        { ref: "Wiring Methods", text: "Use **corrosion-resistant**/wet-location wiring methods; seal fittings where required." },
        { ref: "Clearances", text: "Respect **setbacks** from pools for panels, receptacles, and equipment (distances vary by type)." }
      ],
      block: {
        type: "exam",
        body:
          "Equipotential bonding is a make-or-break inspection item. Bond the steel, rails, and deck surfaces properly."
      },
      images: [
        { src: "/images/module-06/m06-14.jpg", alt: "Pool pump with GFCI", caption: "Expect GFCI on pump motors." },
        { src: "/images/module-06/m06-15.jpg", alt: "Equipotential bonding grid", caption: "Bonding ties metallic parts together." }
      ]
    },

    // 8) Article 690 — Photovoltaic Systems (CODE)
    {
      icon: "🔋",
      title: "Art. 690 — Photovoltaic Systems",
      points: [
        { ref: "690.12", text: "**Rapid shutdown** where required; label boundaries and verify device operation." },
        { ref: "690.8(A)/(B)", text: "**125%** current factors for source/outputs; apply temperature correction and conduit fill derating." },
        { ref: "690.13/690.15", text: "Provide required **disconnects** for PV equipment and specify locations clearly." },
        { ref: "Labeling", text: "Placards at service equipment and PV points of isolation; firefighters rely on these." },
        { ref: "Grounding", text: "Use listed **bonding jumpers/clips** for module rails and metallic raceways; continuity is critical." }
      ],
      block: {
        type: "code",
        body:
          "Use **125%** for PV max current, then apply conditions of use (temperature/derating). Don’t skip the label package."
      },
      images: [
        { src: "/images/module-06/m06-16.jpg", alt: "PV inverter/disconnect labeling", caption: "Placards where first responders expect them." },
        { src: "/images/module-06/m06-17.jpg", alt: "Rooftop PV with raceways", caption: "Mind temperature and grouping corrections." }
      ]
    },

    // 9) Article 691 — Large-Scale PV (TABLE)
    {
      icon: "🌞",
      title: "Art. 691 — Large-Scale PV (Utility-Scale)",
      points: [
        { ref: "Scope", text: "Applies to utility-scale PV where **engineering supervision** is assumed; 691 modifies 690 for scale." },
        { ref: "Docs/Studies", text: "Short-circuit/coordination studies, relay settings, arc-flash and grounding methods are engineered." },
        { ref: "Equipment", text: "Medium-voltage collection, GIS/transformers, and switchgear—follow **manufacturer** and utility requirements." },
        { ref: "Grounding", text: "Grounding/bonding systems are **designed**; soil conditions and corrosion control are addressed in the plan set." },
        { ref: "Labeling/Access", text: "Access control, signage, and emergency response plans scale with the site footprint." }
      ],
      block: {
        type: "table",
        title: "Quick Sheet — 690 vs 691",
        table: [
          ["Topic", "690 (Building PV)", "691 (Utility-Scale)"],
          ["Scope", "Typical building-connected PV", "Large utility-scale arrays"],
          ["Design", "Prescriptive methods permitted", "Engineered systems/practices"],
          ["Protection/Coord.", "Standard PV OCPD/labels", "Utility coordination & engineered protection"],
          ["Documentation", "Placards & one-lines", "Detailed documentation & supervision"]
        ],
        body: "Use **691** when the project qualifies as utility-scale; otherwise apply **690**."
      },
images: [
        { src: "/images/module-06/m06-18.jpg", alt: "Utility-scale PV field", caption: "Different scale, different rule structure." },
        { src: "/images/module-06/m06-19.jpg", alt: "Collector station gear", caption: "Coordination and documentation drive approvals." }
      ]
    },

    // 10) Article 695 — Fire Pumps (CHART)
    {
      icon: "🚒",
      title: "Art. 695 — Fire Pumps",
      points: [
        { ref: "695.3", text: "**Reliability**: arrange normal and alternate sources for continuity—utility + generator or alternate service." },
        { ref: "695.4", text: "Feed directly to the **fire pump controller** with permitted taps; minimize tripping opportunities." },
        { ref: "695.5/695.6", text: "Overcurrent protection set so the pump **keeps running**—different than typical feeder protection." },
        { ref: "Routing", text: "Protect conductors physically (encased, MI cable, or dedicated pathways) per 695 and local amendments." },
        { ref: "Controller", text: "Listed controller, signage, and lock-open isolation where required; keep the path simple and serviceable." }
      ],
      block: {
        type: "table",
        title: "Fire Pump Power Path",
        table: [
          ["Component", "Description"],
          ["Service/Source", "→ Fire Pump Controller (listed)"],
          ["Controller", "→ Fire Pump (motor)"],
          ["Power Sources", "Normal + Alternate Source (as required)"],
          ["Protection", "OCPD/Feeder arranged so pump keeps running"]
        ],
        asGrid: true,
        body: "Keep OCPD/feeder choices aligned with **reliability** over convenience."
      },
images: [
        { src: "/images/module-06/m06-20.jpg", alt: "Fire pump controller", caption: "Labeling and source arrangement matter." },
        { src: "/images/module-06/m06-21.jpg", alt: "Service tap to fire pump", caption: "Follow 695 tap and OCPD specifics." }
      ]
    }
  ],

  summary: {
    title: "Chapter 6 — Field Quick Hits",
    cards: [
      { iconName: "🪧", title: "Signs", text: "Dedicated circuit + local disconnect." },
      { iconName: "🛗", title: "Elevators", text: "Lockable disconnect; separate lighting vs power." },
      { iconName: "🚗", title: "EVSE", text: "Continuous load — size at 125%." },
      { iconName: "🏊", title: "Pools", text: "Bond that deck. Expect GFCI." },
      { iconName: "🔋", title: "PV", text: "Rapid shutdown + labels." },
      { iconName: "🚒", title: "Fire Pumps", text: "Reliability beats convenience." }
    ]
  }
};

import quiz from "./quiz";
(content as any).quiz = quiz;
export default content;