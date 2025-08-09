// app/page.tsx
import React from "react";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0b0f19", color: "white" }}>
      <div style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 12 }}>
          Ohmwork — No BS Electrician’s Guide
        </h1>
        <p style={{ fontSize: 18, opacity: 0.9, lineHeight: 1.6 }}>
          Your straightforward source for electrician tips, tricks, and best practices.
        </p>
      </div>
    </main>
  );
}
