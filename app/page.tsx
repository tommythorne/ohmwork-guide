// app/page.tsx
"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeInStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(-20px)",
    transition: `opacity 0.8s ${delay}s ease-out, transform 0.8s ${delay}s cubic-bezier(0.68, -0.55, 0.27, 1.55)`,
  });

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
      <h1
        style={{
          fontSize: "64px",
          fontWeight: 900,
          color: "#FFD300",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
          ...fadeInStyle(0),
        }}
      >
        OhmWork
      </h1>

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
        <div style={fadeInStyle(0.3)}>Learn the Code.</div>
        <div style={fadeInStyle(0.6)}>Pass the Test.</div>
        <div style={fadeInStyle(0.9)}>No BS.</div>
      </div>

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
            "top 0.2s ease-out, box-shadow 0.2s ease-out, transform 0.2s ease-out",
          ...fadeInStyle(1.2),
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.top = "-3px";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 12px 25px rgba(34, 197, 94, 0.7)";
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.top = "0";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 8px 20px rgba(34, 197, 94, 0.5)";
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "scale(1)";
        }}
      >
        Let’s Do This
      </a>
    </main>
  );
}
