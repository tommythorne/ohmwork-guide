// app/page.tsx
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#000",
        color: "#fff",
        padding: "24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 960 }}>
        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#FACC15", // yellow-400
            margin: 0,
          }}
        >
          OhmWork
        </h1>

        <p
          style={{
            margin: "14px 0 28px",
            fontSize: "22px",
            opacity: 0.95,
          }}
        >
          Learn the Code <br /> Pass the Test <br /> No BS
        </p>

        <a
          href="/intro"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "#fff",
            background: "#22c55e", // green-500
            borderRadius: 12,
            padding: "12px 20px",
            fontWeight: 700,
            transition: "transform 120ms ease, boxShadow 120ms ease, top 120ms ease",
            position: "relative",
            top: 0,
            boxShadow: "0 8px 20px rgba(34,197,94,.35)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.top = "-2px";
            el.style.boxShadow = "0 12px 25px rgba(34,197,94,.45)";
            el.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.top = "0";
            el.style.boxShadow = "0 8px 20px rgba(34,197,94,.35)";
            el.style.transform = "scale(1)";
          }}
        >
          Let’s Do This
        </a>
      </div>
    </main>
  );
}
