const EXPERTISE_BARS = [
  { area: "Consumer Forums",         years: "18+ Years", pct: 88 },
  { area: "Arbitration & Mediation", years: "12+ Years", pct: 75 },
];

const EXPERTISE_GRID = [
   { t: "Consumer Forum", s: "Consumer protection",   icon: "🛡️", dark: true },
  { t: "Justice. Integrity. Results.",     s: " Defending Your Rights.", icon: "🏛️", dark: false  },
  { t: "Committed to Justice",  s: "Experience and Precision.",   icon: "⚖️", dark: false },
 
  { t: "Arbitration",    s: "Out-of-court solutions",icon: "🤝", dark: true  },
];

const styles = `
  .expertise-section {
    padding: 100px 5%;
    background: linear-gradient(135deg, #f8f9fb 0%, #eef2f7 100%);
  }

  .expertise-inner {
    max-width: 1280px; /* ~max-w-7xl */
    margin: 0 auto;
    display: flex;
    gap: 80px;
    align-items: center;
    flex-wrap: wrap;
  }

  .expertise-left {
    flex: 1 1 320px;
    min-width: 0;
  }

  .expertise-right {
    flex: 1 1 320px;
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .expertise-tag {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d39f17;
    margin: 0 0 16px;
  }

  .expertise-heading {
    font-size: clamp(1.6rem, 3vw, 2.6rem);
    font-weight: 700;
    color: #172e4e;
    margin: 0 0 24px;
    line-height: 1.2;
  }

  .expertise-desc {
    color: #555;
    line-height: 1.9;
    margin-bottom: 36px;
    font-size: 0.97rem;
  }

  .bar-label-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .bar-label {
    font-weight: 600;
    color: #172e4e;
    font-size: 0.9rem;
  }

  .bar-years {
    color: #d39f17;
    font-weight: 700;
    font-size: 0.83rem;
    white-space: nowrap;
    margin-left: 8px;
  }

  .bar-track {
    height: 4px;
    background: rgba(23,46,78,0.08);
    border-radius: 2px;
  }

  .bar-fill {
    height: 4px;
    background: linear-gradient(to right, #d39f17, #f0c040);
    border-radius: 2px;
    transition: width 1.5s ease;
  }

  .grid-card {
    padding: 32px 24px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s;
    cursor: default;
  }

  .grid-card:hover {
    transform: scale(1.04);
  }

  .grid-card-dark {
    background: #172e4e;
    box-shadow: 0 8px 30px rgba(23,46,78,0.25);
  }

  .grid-card-light {
    background: #fff;
    border: 1px solid rgba(23,46,78,0.08);
    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  }

  .grid-icon {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .grid-title {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 6px;
  }

  .grid-sub {
    font-size: 0.78rem;
  }

  /* ── Tablet: stack columns, shrink padding ── */
  @media (max-width: 900px) {
    .expertise-inner {
      gap: 48px;
    }
  }

  /* ── Mobile: single column ── */
  @media (max-width: 600px) {
    .expertise-section {
      padding: 64px 6%;
    }

    .expertise-inner {
      flex-direction: column;
      gap: 40px;
    }

    .expertise-left,
    .expertise-right {
      flex: 1 1 100%;
      width: 100%;
    }

    .expertise-right {
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .grid-card {
      padding: 22px 14px;
    }

    .grid-icon {
      font-size: 1.6rem;
    }

    .grid-title {
      font-size: 0.88rem;
    }

    .grid-sub {
      font-size: 0.72rem;
    }
  }

  /* ── Very small screens ── */
  @media (max-width: 380px) {
    .expertise-right {
      grid-template-columns: 1fr;
    }
  }
`;

export default function ExpertiseSection() {
  return (
    <>
      <style>{styles}</style>
      <section id="expertise" className="expertise-section">
        <div className="expertise-inner">

          {/* ── Left: Skills Bars ── */}
          <div className="expertise-left">
            <div style={{
              width: "44px", height: "4px",
              background: "linear-gradient(to right, #d39f17, #f0c040)",
              borderRadius: "2px", marginBottom: "14px",
            }} />
            <p className="expertise-tag">Our Strengths</p>

            <h2 className="playfair expertise-heading">
              Deep Expertise.<br />Proven Results.
            </h2>

            <p className="expertise-desc">
              Our advocates have practiced across all levels of the judiciary — from district courts to
              the Supreme Court — bringing unmatched breadth of experience to every case.
            </p>

            {EXPERTISE_BARS.map(({ area, years, pct }) => (
              <div key={area} style={{ marginBottom: "24px" }}>
                <div className="bar-label-row">
                  <span className="bar-label">{area}</span>
                  <span className="bar-years">{years}</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Feature Grid ── */}
          <div className="expertise-right">
            {EXPERTISE_GRID.map(({ t, s, icon, dark }) => (
              <div
                key={t}
                className={`grid-card ${dark ? "grid-card-dark" : "grid-card-light"}`}
              >
                <div className="grid-icon">{icon}</div>
                <div
                  className="playfair grid-title"
                  style={{ color: dark ? "#fff" : "#172e4e" }}
                >
                  {t}
                </div>
                <div
                  className="grid-sub"
                  style={{ color: dark ? "rgba(255,255,255,0.55)" : "#888" }}
                >
                  {s}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}