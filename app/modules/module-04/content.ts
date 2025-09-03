const content = {
  hero: {
    imageSrc: "/images/module-04/m04-01.jpg",
    imageAlt: "NEC Chapter 4 — Equipment for General Use",
    title: "Chapter 4 — Equipment for General Use",
    subtitle: "Luminaires, receptacles, appliances, motors, A/C, transformers, panels—the gear you install every day."
  },

  prev: { href: "/modules/module-03", label: "Chapter 3" },
  next: { href: "/modules/module-05", label: "Chapter 5" },

  articles: [
    /* 1) 400 — Flexible Cords and Cables */
    {
      icon: "🔌",
      title: "400 — Flexible Cords and Cables",
      points: [
        { ref: "400.7", text: "Flexible cords are **not** a substitute for permanent wiring—use only where specifically permitted." },
        { ref: "400.8", text: "Never use flexible cords where concealed, run through holes, attached to building surfaces, or subject to damage." },
        { ref: "400.10", text: "Flexible cords must be **suitable for the environment** and **properly supported** to prevent strain on connections." },
        { ref: "400.14", text: "Use **hard usage** cords for portable equipment; **extra-hard usage** for construction sites and harsh environments." },
        { ref: "400.22", text: "Flexible cords must be **continuous** from outlet to equipment—no splices except in listed cord connectors." }
      ],
      block: {
        type: "exam",
        title: "Flexible cord violations",
        body: "The most common flexible cord violation is using it as **permanent wiring**. Remember: cords are for **temporary** connections to portable equipment only."
      },
      images: [
        { src: "/images/module-04/m04-02.jpg", alt: "Proper flexible cord usage", caption: "Flexible cords for portable equipment only." },
        { src: "/images/module-04/m04-03.jpg", alt: "Cord strain relief", caption: "Proper strain relief prevents connection damage." }
      ]
    },

    /* 2) 404 — Switches */
    {
      icon: "🔀",
      title: "404 — Switches: Ratings, Grounding, and Accessibility",
      points: [
        { ref: "404.6", text: "Switches must be used within their **listing** and **voltage/ampere** ratings—never exceed nameplate values." },
        { ref: "404.9(B)", text: "Provide an **equipment grounding conductor** to metal boxes/yokes; bond metal cover plates to prevent shock hazards." },
        { ref: "404.8(A)", text: "Switches must be **readily accessible**—no ladders, tools, or moving objects required to operate them." },
        { ref: "404.10(B)", text: "Face-up switches in countertops are **prohibited** unless specifically **listed** for that application." },
        { ref: "404.14", text: "Switch **marking** must indicate ON/OFF positions and be visible from the normal operating position." }
      ],
      block: {
        type: "rule",
        title: "Switch accessibility",
        body: "**Readily accessible** means you can reach it without tools, ladders, or moving furniture. If you need a step stool, it's not readily accessible."
      },
      images: [
        { src: "/images/module-04/m04-04.jpg", alt: "Proper switch mounting height", caption: "Switches at accessible height without tools." },
        { src: "/images/module-04/m04-05.jpg", alt: "Switch grounding", caption: "Metal switch yokes must be grounded." }
      ]
    },

    /* 3) 406 — Receptacles */
    {
      icon: "🔌",
      title: "406 — Receptacles: Types, Ratings, and Installation",
      points: [
        { ref: "406.3", text: "Receptacles must be **listed** and **identified** for the specific use—GFCI, weather-resistant, tamper-resistant, etc." },
        { ref: "406.4", text: "Provide **GFCI protection** for all 125V, 15A and 20A receptacles in bathrooms, kitchens, garages, and outdoor locations." },
        { ref: "406.5", text: "Receptacles must be **grounded** unless specifically permitted to be ungrounded—never remove the ground pin." },
        { ref: "406.9", text: "Install receptacles so the **grounding slot is up** in commercial installations to prevent objects from falling across contacts." },
        { ref: "406.12", text: "Use **tamper-resistant** receptacles in dwelling units to prevent children from inserting objects into slots." }
      ],
      block: {
        type: "code",
        title: "GFCI requirements",
        body: "**210.8** lists all GFCI requirements. In dwelling units: bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchens, laundry areas, and within 6 feet of sinks."
      },
      images: [
        { src: "/images/module-04/m04-06.jpg", alt: "GFCI receptacle", caption: "GFCI protection required in wet locations." },
        { src: "/images/module-04/m04-07.jpg", alt: "Tamper-resistant receptacle", caption: "Tamper-resistant receptacles prevent shock hazards." }
      ]
    },

    /* 4) 410 — Luminaires */
    {
      icon: "💡",
      title: "410 — Luminaires: Installation and Clearances",
      points: [
        { ref: "410.16", text: "Maintain **clearances** from combustibles per luminaire listing—typically 6 inches minimum for most fixtures." },
        { ref: "410.24", text: "Support luminaires by **listed** means—never rely on raceway, cable, or cord for support unless specifically listed." },
        { ref: "410.30", text: "Provide **grounding** for metal luminaires—use equipment grounding conductor or listed grounding methods." },
        { ref: "410.36", text: "Install **damp location** luminaires in bathrooms, covered porches, and similar areas; **wet location** for outdoors." },
        { ref: "410.44", text: "Use **listed** lampholders and ensure proper **wattage ratings**—never exceed fixture or lampholder ratings." }
      ],
      block: {
        type: "table",
        title: "Luminaire Clearances",
        table: [
          ["Location", "Minimum Clearance", "Notes"],
          ["Combustible material", "6 inches", "Per fixture listing"],
          ["Insulation", "3 inches", "Unless fixture listed for contact"],
          ["Clothes closets", "12 inches", "From storage area"]
        ],
        body: "Clearances are **minimum** distances. Always check the fixture listing for specific requirements."
      },
      images: [
        { src: "/images/module-04/m04-08.jpg", alt: "Proper luminaire clearance", caption: "Maintain clearances from combustibles." },
        { src: "/images/module-04/m04-09.jpg", alt: "Wet location luminaire", caption: "Use listed wet location fixtures outdoors." }
      ]
    },

    /* 5) 422 — Appliances */
    {
      icon: "🏠",
      title: "422 — Appliances: Disconnects and Nameplates",
      points: [
        { ref: "422.31", text: "Provide **disconnecting means** for appliances—within sight or lockable when not within sight of the appliance." },
        { ref: "422.33", text: "Use **nameplate** ratings for conductor and OCPD sizing—never use generic tables when nameplate values are available." },
        { ref: "422.16", text: "Install appliances per **listing and instructions**—enclosure ratings, clearances, and mounting requirements matter." },
        { ref: "422.62", text: "Provide **GFCI protection** for dishwashers, garbage disposals, and similar appliances in dwelling unit kitchens." },
        { ref: "422.11", text: "Use **listed** appliances only—never modify or alter listed equipment in ways not covered by the listing." }
      ],
      block: {
        type: "table",
        title: "Appliance Disconnect Rules",
        table: [
          ["Appliance Rating", "Disconnect Required", "Location"],
          ["≥300 VA", "Yes", "Within sight or lockable"],
          ["<300 VA", "No", "Unless specified in listing"],
          ["Cord-and-plug", "May serve as disconnect", "When within sight"]
        ],
        body: "**Within sight** means you can see the disconnect from the appliance without moving more than 50 feet."
      },
      images: [
        { src: "/images/module-04/m04-10.jpg", alt: "Appliance disconnect", caption: "Disconnect within sight of appliance." },
        { src: "/images/module-04/m04-11.jpg", alt: "Appliance nameplate", caption: "Always use nameplate ratings for sizing." }
      ]
    },

    /* 6) 424 — Fixed Electric Space Heating */
    {
      icon: "🔥",
      title: "424 — Fixed Electric Space Heating",
      points: [
        { ref: "424.3(B)", text: "Size branch circuits at **125%** of the continuous heating load—space heaters typically run continuously." },
        { ref: "424.19", text: "Provide **disconnecting means** within sight of the heater or make it lockable when not within sight." },
        { ref: "424.9", text: "Maintain **clearances** from combustibles per heater listing—typically 12 inches minimum for most units." },
        { ref: "424.20", text: "Use **listed** heating equipment only—never modify or alter listed heaters in ways not covered by the listing." },
        { ref: "424.22", text: "Install **thermostats** per listing—some require specific wiring methods or clearances from heat sources." }
      ],
      block: {
        type: "rule",
        title: "Continuous load sizing",
        body: "Space heaters are **continuous loads** (3+ hours). Always size at **125%** of the nameplate rating for branch circuit conductors and OCPD."
      },
      images: [
        { src: "/images/module-04/m04-12.jpg", alt: "Wall heater installation", caption: "Maintain clearances from combustibles." },
        { src: "/images/module-04/m04-13.jpg", alt: "Heater disconnect", caption: "Disconnect within sight or lockable." }
      ]
    },

    /* 7) 430 — Motors */
    {
      icon: "⚙️",
      title: "430 — Motors: OCPD, Conductors, and Disconnects",
      points: [
        { ref: "430.52", text: "Motor **OCPD** sizing per **Table 430.52**—protects the **circuit conductors**, not the motor windings." },
        { ref: "430.22", text: "Size motor **conductors** at **125%** of the motor **FLC** from Tables 430.248-250—not nameplate values." },
        { ref: "430.102(B)", text: "Provide **disconnect** within sight of motor and driven machinery—exceptions for specific applications." },
        { ref: "430.32", text: "Motor **overload protection** protects the motor windings—separate from and in addition to OCPD." },
        { ref: "430.6", text: "Use **Table FLC** values for conductor and OCPD sizing—nameplate values only for overload protection." }
      ],
      block: {
        type: "exam",
        title: "Motor protection confusion",
        body: "**OCPD** protects the **wiring**; **overloads** protect the **motor**. Don't confuse these two different protection systems."
      },
      images: [
        { src: "/images/module-04/m04-14.jpg", alt: "Motor starter with overloads", caption: "Overloads protect motor; OCPD protects circuit." },
        { src: "/images/module-04/m04-15.jpg", alt: "Motor disconnect", caption: "Disconnect within sight of motor." }
      ]
    },

    /* 8) 440 — Air-Conditioning and Refrigeration */
    {
      icon: "❄️",
      title: "440 — Air-Conditioning and Refrigeration Equipment",
      points: [
        { ref: "440.6", text: "Use **nameplate** values (RLA, FLA, MCA, MOCP) for conductor and OCPD sizing—**not** generic motor tables." },
        { ref: "440.14", text: "Provide **disconnect** within sight of the equipment—some exceptions for rooftop and similar installations." },
        { ref: "440.4(B)", text: "Install per **listing and instructions**—enclosure integrity and spacing critical for proper cooling airflow." },
        { ref: "440.12", text: "Use **listed** A/C equipment only—never modify or alter listed equipment in ways not covered by the listing." },
        { ref: "440.35", text: "Provide **GFCI protection** for 125V, 15A and 20A receptacles within 25 feet of A/C equipment." }
      ],
      block: {
        type: "code",
        title: "Nameplate values rule",
        body: "When nameplate shows **MCA** (Minimum Circuit Ampacity) and **MOCP** (Maximum Overcurrent Protection), use these values—don't calculate from motor tables."
      },
      images: [
        { src: "/images/module-04/m04-16.jpg", alt: "A/C nameplate", caption: "Use nameplate MCA/MOCP values." },
        { src: "/images/module-04/m04-17.jpg", alt: "A/C disconnect", caption: "Disconnect within sight of equipment." }
      ]
    },

    /* 9) 450 — Transformers */
    {
      icon: "🔁",
      title: "450 — Transformers: Ventilation, OCPD, and Terminations",
      points: [
        { ref: "450.9", text: "Provide **ventilation** and maintain clearances from combustibles per transformer listing—critical for cooling." },
        { ref: "450.3", text: "Size primary/secondary **OCPD** per **Table 450.3(A)/(B)**—depends on transformer type and voltage class." },
        { ref: "110.14", text: "Follow **termination temperature** ratings and torque requirements—use lugs listed for conductor material." },
        { ref: "450.13", text: "Install **dry-type** transformers per listing—mounting orientation and clearances affect cooling performance." },
        { ref: "450.21", text: "Provide **grounding** per Article 250—transformer cases and secondary neutral/grounded conductors must be grounded." }
      ],
      block: {
        type: "table",
        title: "Transformer OCPD Sizing",
        table: [
          ["Transformer Type", "Primary OCPD", "Secondary OCPD"],
          ["Dry-type <600V", "125% of primary FLA", "125% of secondary FLA"],
          ["Dry-type ≥600V", "250% of primary FLA", "125% of secondary FLA"],
          ["Liquid-filled", "See Table 450.3(B)", "See Table 450.3(B)"]
        ],
        body: "**Table 450.3** has the complete rules—check the notes for exceptions and special applications."
      },
      images: [
        { src: "/images/module-04/m04-18.jpg", alt: "Transformer ventilation", caption: "Maintain clearances for proper cooling." },
        { src: "/images/module-04/m04-19.jpg", alt: "Transformer OCPD", caption: "OCPD sizing per Table 450.3." }
      ]
    },

    /* 10) 408 — Panelboards and Switchgear */
    {
      icon: "🧰",
      title: "408 — Panelboards and Switchgear",
      points: [
        { ref: "408.36(D)", text: "Service disconnect rules apply when equipment is **service rated**—labeling and grouping requirements matter." },
        { ref: "408.54", text: "Install **filler plates** in all unused panelboard openings—no tape, cardboard, or makeshift covers allowed." },
        { ref: "110.26", text: "Maintain **working space** and dedicated space above panels—no storage or other equipment in front of panels." },
        { ref: "408.4", text: "Use **listed** panelboards and switchgear only—never modify or alter listed equipment in ways not covered by the listing." },
        { ref: "408.3", text: "Provide **proper labeling**—circuit directories must be accurate and legible for safe operation and maintenance." }
      ],
      block: {
        type: "horror",
        title: "The missing filler plate",
        body: "An inspector found electrical tape covering a breaker space where a filler plate should've been. Failed the entire floor and delayed energization by a week. Always keep spare filler plates on hand."
      },
      images: [
        { src: "/images/module-04/m04-20.jpg", alt: "Panel with filler plates", caption: "Every opening needs a listed filler plate." },
        { src: "/images/module-04/m04-21.jpg", alt: "Panel working space", caption: "Maintain clear working space in front of panels." }
      ]
    }
  ]
};

// Attach quiz from local file so ModuleTemplate receives it
import quiz from "./quiz";
(content as any).quiz = quiz;
export default content;
