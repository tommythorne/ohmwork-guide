// app/page.tsx
"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Only opacity/transform + delay here (no `transition` key)
  const fadeProps = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(-20px)",
    transitionDelay: `${delay}s`,
  });

  const baseTransition =
    "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.68,-0.55,0.27,1.55)";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "2rem",
        fontFamily:
          "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        textAlign: "center",
      }}
    >
      {/* Main heading */}
      <h1
        style={{
          fontSize: "64px",
          fontWeight: 900,
          color: "#FFD300",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
          transition: baseTransition,
          ...fadeProps(0),
        }}
      >
        OhmWork
      </h1>

      {/* 3-line subheader */}
      <div
        style={{
          fontSize: "28px",
          fontWeight: 800,
          textTransform: "uppercase",
          color: "#FFFFFF",
          lineHeight: 1.4,
          marginBottom: "2rem",
        }}
      >
        <div style={{ transition: baseTransition, ...fadeProps(0.3) }}>
          Learn the Code.
        </div>
        <div style={{ transition: baseTransition, ...fadeProps(0.6) }}>
          Pass the Test.
        </div>
        <div style={{ transition: baseTransition, ...fadeProps(0.9) }}>
          No BS.
        </div>
      </div>

      {/* Button */}
      <a
        href="#"
        style={{
          background: "#22c55e",
          color: "#0b1220",
          padding: "16px 32px",
          borderRadius: "50px",
          fontWeight: 900,
          fontSize: "20px",
          textDecoration: "none",
          boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)",
          position: "relative",
          top: 0,
          transition:
            baseTransition +
            ", top 0.2s ease-out, box-shadow 0.2s ease-out",
          ...fadeProps(1.2),
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.top = "-3px";
          el.style.boxShadow = "0 12px 25px rgba(34, 197, 94, 0.7)";
          el.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.top = "0";
          el.style.boxShadow = "0 8px 20px rgba(34, 197, 94, 0.5)";
          el.style.transform = "scale(1)";
        }}
      >
        Let’s Do This
      </a>
    </main>
  );
}
