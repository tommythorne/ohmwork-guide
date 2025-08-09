// app/page.tsx
export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b1220",
        color: "white",
        padding: "4rem 1rem",
      }}
    >
      <div style={{ maxWidth: 720, textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", lineHeight: 1.1, margin: 0, color: "#facc15", fontWeight: 800 }}>
          OhmWork
        </h1>
        <div style={{ marginTop: 18, opacity: 0.95 }}>
          <p style={{ margin: 0 }}>No BS Electrician’s Guide</p>
          <p style={{ margin: 0 }}>Learn the NEC fast</p>
          <p style={{ margin: 0 }}>Pass your exam</p>
        </div>
        <a
          href="/guide"
          style={{
            display: "inline-block",
            marginTop: 24,
            padding: "12px 20px",
            background: "#10b981",
            color: "#0b1220",
            borderRadius: 12,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Start Now
        </a>
      </div>
    </main>
  );
}
