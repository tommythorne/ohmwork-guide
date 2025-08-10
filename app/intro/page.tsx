// app/intro/page.tsx
export default function IntroPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0b0b0b",
        color: "#fff",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: 960 }}>
        <h1 style={{ fontSize: "40px", fontWeight: 800, margin: 0 }}>Intro / TOC</h1>
        <p style={{ marginTop: 16, opacity: 0.9 }}>
          This is your Intro & Table of Contents. We’ll fill it in after we verify routing.
        </p>
        <a href="/" style={{ display: "inline-block", marginTop: 20, color: "#22c55e" }}>
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
