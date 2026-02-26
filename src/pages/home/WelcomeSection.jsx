import { Link } from "react-router-dom";
const TILES = [
  { icon: "🏆", title: "Award Winning",  sub: "Recognized by Bar Council" },
  { icon: "🤝", title: "Client First",   sub: "Your success is our mission" },
  { icon: "📚", title: "Deep Research",  sub: "Every detail matters" },
  { icon: "⚡", title: "Swift Action",   sub: "Timely legal solutions" },
];

const css = `
  *, *::before, *::after { box-sizing: border-box; }

  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&family=Poppins:wght@300;400;500&display=swap');

  .ws-section {
    padding: 100px 5%;
    background: #fff;
  }

  .ws-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    gap: 80px;
    align-items: center;
  }

  /* ── Left column ── */
  .ws-left {
    flex: 1;
    min-width: 0;
  }

  .ws-bar {
    width: 44px;
    height: 4px;
    background: linear-gradient(to right, #d39f17, #f0c040);
    border-radius: 2px;
    margin-bottom: 14px;
  }

  .ws-tag {
    font-family: 'Jost', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #d39f17;
    margin: 0 0 16px;
  }

  .ws-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 700;
    color: #172e4e;
    line-height: 1.2;
    margin: 0 0 24px;
  }

  .ws-body {
    font-family: 'Poppins', sans-serif;
    color: #555;
    line-height: 1.9;
    font-size: 0.97rem;
    font-weight: 300;
    margin: 0 0 18px;
  }

  .ws-cta {
    display: inline-block;
    padding: 14px 32px;
    background: #d39f17;
    color: #fff;
    font-family: 'Jost', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    margin-top: 18px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease;
  }
  .ws-cta:hover { background: #b8860b; }

  /* ── Right: Tiles ── */
  .ws-tiles {
    flex: 1;
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .ws-tile {
    padding: 28px 24px;
    border-radius: 8px;
    background: #fafafa;
    border: 1px solid rgba(23,46,78,0.08);
    transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
    cursor: default;
  }
  .ws-tile:hover {
    border-color: #d39f17;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(23,46,78,0.09);
  }

  .ws-tile-icon { font-size: 2.2rem; margin-bottom: 12px; }

  .ws-tile-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    color: #172e4e;
    font-size: 1rem;
    margin-bottom: 6px;
  }

  .ws-tile-sub {
    font-family: 'Jost', sans-serif;
    color: #888;
    font-size: 0.8rem;
    font-weight: 300;
  }

  /* ── Responsive ── */

  /* Laptop (≤1100px) */
  @media (max-width: 1100px) {
    .ws-inner { gap: 56px; }
  }

  /* Tablet landscape (≤900px) — stack layout */
  @media (max-width: 900px) {
    .ws-section { padding: 80px 6%; }
    .ws-inner {
      flex-direction: column;
      gap: 52px;
      align-items: stretch;
    }
    .ws-left { max-width: 100%; }
    .ws-tiles { grid-template-columns: repeat(2, 1fr); }
    .ws-heading { font-size: clamp(1.9rem, 5vw, 2.6rem); }
  }

  /* Tablet portrait (≤768px) */
  @media (max-width: 768px) {
    .ws-section { padding: 72px 6%; }
    .ws-tiles { gap: 16px; }
    .ws-tile { padding: 24px 20px; }
  }

  /* Large phones (≤560px) */
  @media (max-width: 560px) {
    .ws-section { padding: 56px 5%; }
    .ws-inner { gap: 40px; }
    .ws-tiles { grid-template-columns: 1fr 1fr; gap: 12px; }
    .ws-tile { padding: 20px 16px; }
    .ws-tile-icon { font-size: 1.8rem; margin-bottom: 8px; }
    .ws-tile-title { font-size: 0.95rem; }
    .ws-body { font-size: 0.93rem; }
    .ws-cta { width: 100%; text-align: center; padding: 14px 24px; }
  }

  /* Small phones (≤400px) */
  @media (max-width: 400px) {
    .ws-section { padding: 44px 4%; }
    .ws-tiles { grid-template-columns: 1fr; }
    .ws-tile { padding: 20px 18px; }
    .ws-heading { font-size: 1.75rem; }
  }
`;

export default function WelcomeSection() {
  return (
    <>
      <style>{css}</style>
      <section id="home-welcome" className="ws-section">
        <div className="ws-inner">

          {/* Left */}
          <div className="ws-left">
            <div className="ws-bar" />
            <p className="ws-tag">Welcome to Our Firm</p>
            <h2 className="ws-heading">
              Justice Advisor Legal <br />Point
            </h2>
            <p className="ws-body">
              At M.S. Advocate, we believe that every individual deserves access to superior legal
              representation. Founded on pillars of integrity, diligence, and excellence, our firm has
              been a beacon of hope for thousands of clients navigating complex legal challenges.
            </p>
            <p className="ws-body" style={{ marginBottom: 0 }}>
              With a proven track record spanning over two decades, we combine deep legal knowledge
              with compassionate client service — ensuring your rights are protected at every step.
            </p>
            <Link to="/about">
            <button className="ws-cta">Learn More About Us</button>
            </Link>
          </div>

          {/* Right: Tiles */}
          <div className="ws-tiles">
            {TILES.map(({ icon, title, sub }) => (
              <div key={title} className="ws-tile">
                <div className="ws-tile-icon">{icon}</div>
                <div className="ws-tile-title">{title}</div>
                <div className="ws-tile-sub">{sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}