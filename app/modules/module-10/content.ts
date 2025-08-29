/* Module 10 — Math & Formulas You Actually Use */
const content = {
  hero: {
    imageSrc: "/images/module-10/m10-hero.jpg",
    imageAlt: "Ohm’s law, power triangle, and common electrical formulas on a notepad",
    title: "Math & Formulas You Actually Use",
    subtitle:
      "Ohm’s Law, power, kVA↔amps, voltage drop, motors, transformers, and quick constants—clean, exam-focused math."
  },

  // NAV
  prev: { href: "/modules/module-09", label: "Chapter 9" },
  next: { href: "/modules/module-11", label: "Next" },

  // 10 ARTICLES (each with 2 images + a special block)
  articles: [
    // 1) Ohm’s Law & Power Basics
    {
      icon: "🧮",
      title: "Ohm’s Law & Real Power Relationships",
      points: [
        { ref: "Ohm", text: "V = I × R; I = V ÷ R; R = V ÷ I. Memorize the triangle; exams mix algebra steps." },
        { ref: "Power", text: "P = V × I (W). With power factor: P(kW) = V × I × PF ÷ 1000 (1ϕ), or × √3 for 3ϕ." },
        { ref: "kVA", text: "S(kVA) = V × I ÷ 1000 (1ϕ), or V × I × √3 ÷ 1000 (3ϕ). kW = kVA × PF." },
        { ref: "Energy", text: "kWh = kW × hours. Utility billing ties to energy, not just power." }
      ],
      block: { type: "rule", title: "One Triangle, Many Answers", body: "For exam speed: remember the V–I–R and P–V–I triangles. Derive the rest." },
      images: [
        { src: "/images/module-10/m10-ohm-01.jpg", alt: "Ohm’s law triangle on paper", caption: "Cover one variable to get the formula." },
        { src: "/images/module-10/m10-power-01.jpg", alt: "Power equations on whiteboard", caption: "kW, kVA, PF—know how they relate." }
      ]
    },

    // 2) Single vs Three Phase Power
    {
      icon: "🔌",
      title: "Single-Phase vs Three-Phase Power",
      points: [
        { ref: "1ϕ", text: "kW = V × I × PF ÷ 1000. kVA = V × I ÷ 1000." },
        { ref: "3ϕ", text: "kW = √3 × V(line-line) × I × PF ÷ 1000. kVA = √3 × V × I ÷ 1000." },
        { ref: "Exam Cue", text: "If you see 3ϕ and LL voltage, multiply by √3. If given LN, convert or confirm what current references." }
      ],
      block: { type: "exam", title: "Watch the √3", body: "Most misses come from forgetting √3 on 3ϕ or using LN values in LL formulas." },
      images: [
        { src: "/images/module-10/m10-3ph-01.jpg", alt: "Three-phase phasor diagram", caption: "√3 shows up in 3ϕ line values." },
        { src: "/images/module-10/m10-1ph-01.jpg", alt: "Single-phase panel", caption: "1ϕ math is simpler—no √3 factor." }
      ]
    },

    // 3) Quick kVA ↔ Amps Table
    {
      icon: "📋",
      title: "kVA ↔ Amps Quick Table",
      points: [
        { ref: "Use", text: "Fast lookups during sizing. Always state assumptions (1ϕ vs 3ϕ)." },
        { ref: "PF", text: "kVA ignores PF; use kW relation if PF is given/required." }
      ],
      block: {
        type: "table",
        title: "Common Voltages — Approx Amps",
        table: [
          ["System", "S (kVA)", "Approx I (A)"],
          ["1ϕ 120V", "10", "≈ 83"],
          ["1ϕ 240V", "10", "≈ 42"],
          ["3ϕ 208V", "30", "≈ 83"],
          ["3ϕ 240V", "30", "≈ 72"],
          ["3ϕ 480V", "75", "≈ 90"],
          ["3ϕ 480V", "150", "≈ 180"]
        ],
        body: "Formulas: 1ϕ I ≈ (kVA×1000)/V; 3ϕ I ≈ (kVA×1000)/(√3×V). Round sensibly."
      },
      images: [
        { src: "/images/module-10/m10-table-01.jpg", alt: "Printed quick table", caption: "Keep a tiny kVA→A card for interviews/exams." },
        { src: "/images/module-10/m10-mcc-01.jpg", alt: "MCC buckets", caption: "Tables help estimate feeder sizes quickly." }
      ]
    },

    // 4) Voltage Drop Method (DC & AC)
    {
      icon: "⚡",
      title: "Voltage Drop — DC vs AC Workflow",
      points: [
        { ref: "DC/Unity", text: "Use **Table 8** resistance (Ω/1000 ft). VD ≈ 2 × L × I × R (1ϕ 2-wire). Adjust path length correctly." },
        { ref: "AC 3ϕ", text: "Use **Table 9** (R & X). VD% ≈ (100 × √3 × I × (R cosφ + X sinφ))/V. PF matters." },
        { ref: "Exam", text: "State conductor metal, size, temp assumption if unspecified; pick correct table (8 or 9)." }
      ],
      block: { type: "code", title: "Pick Table 8 or 9 First", body: "DC/Unity PF → Table 8. 3ϕ with PF → Table 9 (R & X). Then compute VD or allowable length." },
      images: [
        { src: "/images/module-10/m10-vd-01.jpg", alt: "Hand calc showing VD steps", caption: "Write your chosen table at the top." },
        { src: "/images/module-10/m10-vd-02.jpg", alt: "Fluke meter VD reading", caption: "Field VD corroborates your calc." }
      ]
    },

    // 5) Motors — What the Exam Cares About
    {
      icon: "🛠️",
      title: "Motors — Nameplate vs Table, HP, and Current",
      points: [
        { ref: "430 Table", text: "Sizing generally uses **430 tables** current—not the nameplate—unless the section says otherwise." },
        { ref: "HP↔kW", text: "1 HP ≈ 746 W. Don’t convert unless the problem requires it." },
        { ref: "OCPD/Conductor", text: "Conductor ampacity and OCPD % values vary by motor type; know ‘typical’ 125% conductor sizing pattern." }
      ],
      block: { type: "exam", title: "Use 430 Tables for Current", body: "When sizing, default to 430 tables, not nameplate, unless specifically directed." },
      images: [
        { src: "/images/module-10/m10-motor-01.jpg", alt: "Motor nameplate", caption: "Nameplate matters, but sizing often uses Code tables." },
        { src: "/images/module-10/m10-motor-02.jpg", alt: "Motor starter", caption: "Article 430 is a top exam area." }
      ]
    },

    // 6) Transformers — Primary/Secondary Currents
    {
      icon: "🔁",
      title: "Transformers — Primary & Secondary Current",
      points: [
        { ref: "kVA→I", text: "I(1ϕ) = kVA×1000/V; I(3ϕ) = kVA×1000/(√3×V). Compute for both sides." },
        { ref: "%Z", text: "Percent impedance affects fault current; lower %Z → higher available fault current." },
        { ref: "Protection", text: "Pair current calcs with OCPD/secondary rules in 240/450 for typical exam prompts." }
      ],
      block: { type: "rule", title: "Work Both Sides", body: "Always compute primary and secondary currents; annotate which side each value belongs to." },
      images: [
        { src: "/images/module-10/m10-xfmr-01.jpg", alt: "Dry-type transformer", caption: "Label: kVA, V, %Z—use them all." },
        { src: "/images/module-10/m10-xfmr-02.jpg", alt: "Transformer diagram", caption: "Map primary/secondary clearly in your work." }
      ]
    },

    // 7) Series/Parallel Resistance (Quick)
    {
      icon: "🧩",
      title: "Series & Parallel Resistance — Fast Rules",
      points: [
        { ref: "Series", text: "R_total(series) = R1 + R2 + …" },
        { ref: "Parallel", text: "R_total(parallel) = 1 / (1/R1 + 1/R2 + …). Two equal resistors → R/2." },
        { ref: "Exam Cue", text: "Watch units and where the drop occurs—series share current; parallel share voltage." }
      ],
      block: {
        type: "chart",
        title: "Two-Resistor Parallel Example",
        chart: [
          { label: "R (Ω)", value: 100 },
          { label: "Equivalent (Ω)", value: 50 },
          { label: "Current ↑", value: 2 }
        ],
        body: "Two equal resistors in parallel halve the resistance and double current for a given voltage."
      },
      images: [
        { src: "/images/module-10/m10-parallel-01.jpg", alt: "Parallel resistor diagram", caption: "Equal values make mental math easy." },
        { src: "/images/module-10/m10-series-01.jpg", alt: "Series resistor ladder", caption: "Series adds—simple check." }
      ]
    },

    // 8) Available Fault Current (Rule of Thumb)
    {
      icon: "💥",
      title: "Available Fault Current — Quick Estimate",
      points: [
        { ref: "Basic", text: "3ϕ bolted fault at xfmr: I_sc ≈ (kVA×1000) / (√3 × V × (%Z/100))." },
        { ref: "Distance", text: "Downstream conductors/impedance reduce current—estimate quickly with conductor data if provided." },
        { ref: "Labeling", text: "Tie result to SCCR labeling requirements (see Module 1 quick hits)." }
      ],
      block: { type: "exam", title: "Units & %Z", body: "Convert %Z to a decimal in the denominator. Keep track of 3ϕ factor (√3)." },
      images: [
        { src: "/images/module-10/m10-fault-01.jpg", alt: "Service gear with labels", caption: "Your calc informs labeling." },
        { src: "/images/module-10/m10-fault-02.jpg", alt: "Transformer data plate", caption: "%Z drives the math." }
      ]
    },

    // 9) Power Factor & Correction (Concept)
    {
      icon: "📐",
      title: "Power Factor & Basic Correction",
      points: [
        { ref: "Triangle", text: "kVA² = kW² + kVAR². PF = kW/kVA = cosφ." },
        { ref: "Correction", text: "kVAR_needed ≈ kW × (tanφ₁ − tanφ₂). Often to raise PF to 0.9–0.95." },
        { ref: "Exam Cue", text: "If no correction target is given, compute present PF from given kW/kVA." }
      ],
      block: { type: "code", title: "Write the Triangle First", body: "Sketch kW (adjacent), kVAR (opposite), kVA (hypotenuse). Then plug numbers." },
      images: [
        { src: "/images/module-10/m10-pf-01.jpg", alt: "Power triangle sketch", caption: "Visual solves half the problem." },
        { src: "/images/module-10/m10-cap-01.jpg", alt: "Capacitor bank", caption: "Cap banks supply kVAR to improve PF." }
      ]
    },

    // 10) Constants & Rounding You’ll Use
    {
      icon: "📝",
      title: "Constants & Rounding — Speed Pack",
      points: [
        { ref: "√3", text: "≈ 1.732" },
        { ref: "HP", text: "1 HP ≈ 746 W" },
        { ref: "kcmil", text: "1 kcmil = 1000 circular mils" },
        { ref: "Round", text: "State rounding method; keep at least 2–3 sig figs unless Code/table dictates otherwise." }
      ],
      block: {
        type: "table",
        title: "Handy Constants & Conversions",
        table: [
          ["Item", "Value / Note"],
          ["√3", "≈ 1.732"],
          ["1 HP", "≈ 746 W"],
          ["kW ↔ kVA", "kW = kVA × PF"],
          ["Amps (3ϕ)", "I ≈ (kVA×1000)/(√3×V)"],
          ["kWh", "kW × hours"]
        ],
        body: "Write constants at the top of your scratch page so you don’t second-guess mid-problem."
      },
      images: [
        { src: "/images/module-10/m10-constants-01.jpg", alt: "List of constants on a card", caption: "One card, all constants." },
        { src: "/images/module-10/m10-scratch-01.jpg", alt: "Scratch sheet with constants", caption: "Prevent mental stalls with a pre-list." }
      ]
    }
  ],

  // Summary
  summary: {
    title: "Math — Exam Quick Hits",
    cards: [
      { iconName: "🧮", title: "Ohm’s Law", text: "V = I×R. P = V×I. kW = kVA×PF." },
      { iconName: "🔌", title: "1ϕ vs 3ϕ", text: "3ϕ uses √3 with line-line voltage." },
      { iconName: "⚡", title: "Voltage Drop", text: "DC/Table 8; AC 3ϕ/Table 9 with PF." },
      { iconName: "🛠️", title: "Motors", text: "Use Article 430 tables for sizing." },
      { iconName: "🔁", title: "Transformers", text: "Compute I on both sides." },
      { iconName: "💥", title: "Fault Calc", text: "I_sc ∝ kVA/%Z (with √3)." }
    ]
  }
};

import quiz from "./quiz-bridge";
(content as any).quiz = quiz;
export default content;
