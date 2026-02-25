const EXPERTISE_BARS = [
  { area: "High Court Practice",      years: "20+ Years", pct: 92 },
  { area: "Supreme Court Appeals",    years: "15+ Years", pct: 80 },
  { area: "Consumer Forums",          years: "18+ Years", pct: 88 },
  { area: "Arbitration & Mediation",  years: "12+ Years", pct: 75 },
];

const EXPERTISE_GRID = [
  { t: "High Court",     s: "Expert representation", icon: "🏛️", dark: true  },
  { t: "Supreme Court",  s: "Appellate expertise",    icon: "⚖️", dark: false },
  { t: "Consumer Forum", s: "Consumer protection",    icon: "🛡️", dark: false },
  { t: "Arbitration",    s: "Out-of-court solutions", icon: "🤝", dark: true  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" style={{
      padding: "100px 5%",
      background: "linear-gradient(135deg, #f8f9fb 0%, #eef2f7 100%)",
    }}>
      <div style={{
        maxWidth: "1400px", margin: "0 auto",
        display: "flex", gap: "80px", alignItems: "center", flexWrap: "wrap",
      }}>

        {/* ── Left: Skills Bars ── */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <div style={{ width: "44px", height: "4px", background: "linear-gradient(to right, #d39f17, #f0c040)", borderRadius: "2px", marginBottom: "14px" }} />
          <p className="section-tag">Our Strengths</p>

          <h2 className="playfair" style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: "700",
            color: "#172e4e", marginBottom: "24px", lineHeight: "1.2", marginTop: 0,
          }}>
            Deep Expertise.<br />Proven Results.
          </h2>

          <p style={{ color: "#555", lineHeight: "1.9", marginBottom: "36px", fontSize: "0.97rem" }}>
            Our advocates have practiced across all levels of the judiciary — from district courts to
            the Supreme Court — bringing unmatched breadth of experience to every case.
          </p>

          {EXPERTISE_BARS.map(({ area, years, pct }) => (
            <div key={area} style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: "600", color: "#172e4e", fontSize: "0.9rem" }}>{area}</span>
                <span style={{ color: "#d39f17", fontWeight: "700", fontSize: "0.83rem" }}>{years}</span>
              </div>
              <div style={{ height: "4px", background: "rgba(23,46,78,0.08)", borderRadius: "2px" }}>
                <div style={{
                  height: "4px", width: `${pct}%`,
                  background: "linear-gradient(to right, #d39f17, #f0c040)",
                  borderRadius: "2px", transition: "width 1.5s ease",
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: Feature Grid ── */}
        <div style={{
          flex: "1", minWidth: "280px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px",
        }}>
          {EXPERTISE_GRID.map(({ t, s, icon, dark }) => (
            <div key={t} style={{
              padding: "32px 24px", borderRadius: "8px",
              background: dark ? "#172e4e" : "#fff",
              border: dark ? "none" : "1px solid rgba(23,46,78,0.08)",
              textAlign: "center",
              boxShadow: dark
                ? "0 8px 30px rgba(23,46,78,0.25)"
                : "0 4px 20px rgba(0,0,0,0.04)",
              transition: "transform 0.3s",
              cursor: "default",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{icon}</div>
              <div className="playfair" style={{
                fontWeight: "600", fontSize: "1rem",
                color: dark ? "#fff" : "#172e4e", marginBottom: "6px",
              }}>{t}</div>
              <div style={{ fontSize: "0.78rem", color: dark ? "rgba(255,255,255,0.55)" : "#888" }}>{s}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}