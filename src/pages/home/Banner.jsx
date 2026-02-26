import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Poppins:wght@300;400;500;600&family=Raleway:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes barGrow {
          from { height: 0; }
          to   { height: 100%; }
        }

        * { box-sizing: border-box; }

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 72vh;        /* reduced from 90vh */
          overflow: hidden;
          font-family: 'Raleway', sans-serif;
          background-color: #0a1423;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1440px;       /* explicit 1440px max */
          margin: 0 auto;
          padding: 90px 80px 72px; /* tighter top/bottom, wider side for 1440 */
          min-height: 72vh;
        }

        .hero-content {
          max-width: 620px;
          width: 100%;
        }

        /* ── Eyebrow tag ── */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 20px;
          animation: fadeUp 0.8s 0.1s ease both;
        }
        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #d4af37;
        }

        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.4vw, 3.8rem);  /* slightly smaller */
          font-weight: 700;
          line-height: 1.08;
          color: #fff;
          margin: 0 0 6px 0;
          animation: fadeUp 0.9s 0.2s ease both;
          letter-spacing: -0.01em;
        }

        .hero-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 2.8vw, 3rem);  /* slightly smaller */
          font-weight: 300;
          line-height: 1.1;
          margin: 0 0 22px 0;
          animation: fadeUp 0.9s 0.3s ease both;
          letter-spacing: 0.01em;
        }

        .hero-subtitle {
          color: rgba(255,255,255,0.62);
          font-size: clamp(0.82rem, 1.1vw, 0.93rem);
          line-height: 1.85;
          margin-bottom: 36px;
          font-weight: 400;
          animation: fadeUp 0.9s 0.45s ease both;
          letter-spacing: 0.02em;
          max-width: 480px;
        }

        /* ── Stats row ── */
        .hero-stats {
          display: flex;
          gap: 32px;
          margin-bottom: 40px;
          animation: fadeUp 0.9s 0.55s ease both;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hero-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #f0c040;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .hero-stat-divider {
          width: 1px;
          background: rgba(212,175,55,0.25);
          align-self: stretch;
        }

        .hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          animation: fadeUp 0.9s 0.65s ease both;
        }

        .hero-btn-primary {
          padding: 14px 36px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a1423;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #f0c040 0%, #d4af37 50%, #b8860b 100%);
          box-shadow: 0 6px 28px rgba(211,159,23,0.4);
          transition: all 0.3s ease;
          font-family: 'Raleway', sans-serif;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .hero-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.25) 60%, transparent 70%);
          background-size: 200% auto;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 40px rgba(211,159,23,0.55);
        }
        .hero-btn-primary:hover::after {
          opacity: 1;
          animation: shimmer 0.6s linear;
        }

        .hero-btn-secondary {
          padding: 12px 36px;
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4af37;
          border-radius: 3px;
          border: 1px solid rgba(212,175,55,0.5);
          cursor: pointer;
          background: transparent;
          transition: all 0.3s ease;
          font-family: 'Raleway', sans-serif;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          background: rgba(212,175,55,0.1);
          border-color: #d4af37;
          transform: translateY(-2px);
        }

        /* ── Accent bar ── */
        .hero-accent-bar {
          position: absolute;
          left: 0;
          top: 15%;
          bottom: 15%;
          width: 4px;
          background: linear-gradient(to bottom, transparent, #d39f17 30%, #f0c040 60%, transparent);
          z-index: 3;
          animation: barGrow 1.2s ease forwards;
        }

        /* ── 1440px specific fine-tuning ── */
        @media (min-width: 1280px) {
          .hero-inner {
            padding: 88px 100px 70px;
          }
        }
        @media (min-width: 1440px) {
          .hero-inner {
            padding: 88px 120px 70px;
          }
          .hero-content {
            max-width: 640px;
          }
        }

        /* Large tablets / small desktops */
        @media (max-width: 1024px) {
          .hero-inner {
            padding: 80px 2.5rem 64px;
          }
          .hero-content { max-width: 540px; }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .hero-section { min-height: 80vh; }
          .hero-inner {
            padding: 80px 1.75rem 64px;
            align-items: flex-end;
            min-height: 80vh;
          }
          .hero-content { max-width: 100%; }
          .hero-stats { gap: 20px; }
        }

        /* Mobile large */
        @media (max-width: 480px) {
          .hero-inner { padding: 70px 1.25rem 52px; align-items: flex-end; }
          .hero-cta { flex-direction: column; align-items: flex-start; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; text-align: center; padding: 13px 20px; }
          .hero-h2 { margin-bottom: 16px; }
          .hero-subtitle { margin-bottom: 24px; }
          .hero-stats { gap: 16px; margin-bottom: 28px; }
          .hero-stat-num { font-size: 1.25rem; }
          .hero-accent-bar { width: 3px; }
        }

        /* Landscape mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          .hero-section { min-height: 100svh; }
          .hero-inner { min-height: 100svh; align-items: center; padding-top: 60px; padding-bottom: 32px; }
          .hero-h1 { font-size: clamp(1.6rem, 5vw, 2.4rem); }
          .hero-h2 { font-size: clamp(1.3rem, 4vw, 2rem); margin-bottom: 12px; }
          .hero-subtitle { margin-bottom: 18px; font-size: 0.8rem; line-height: 1.7; }
          .hero-stats { margin-bottom: 20px; }
        }
      `}</style>

      <section
        id="home"
        className="hero-section"
        aria-label="Hero - M.S. Advocate Law Firm"
      >
        {/* ── Background Image ── */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/home-banner.png"
            alt="M.S. Advocate Law Office"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          {/* Cinematic left-heavy gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(105deg, rgba(6,12,22,0.97) 0%, rgba(10,20,35,0.88) 40%, rgba(10,20,35,0.45) 70%, rgba(10,20,35,0.15) 100%)",
          }} />
          {/* Bottom fade for readability on mobile */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(6,12,22,0.85) 0%, rgba(6,12,22,0.3) 60%, transparent 100%)",
          }} />
          {/* Subtle noise */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.025,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }} />
        </div>

        {/* ── Gold Left Accent Bar ── */}
        <div className="hero-accent-bar" />

        {/* ── Main Content ── */}
        <div className="hero-inner">
          <div className="hero-content">

            {/* Eyebrow */}
            <div className="hero-eyebrow">High Court &amp; District Court</div>

            {/* SEO H1 */}
            <h1 itemProp="name" className="hero-h1">
              Expert Legal Advocacy
            </h1>

            <h2 className="hero-h2">
              <span style={{
                background: "linear-gradient(120deg, #c8960f, #f0c040 45%, #d39f17)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Justice Is Our Promise.
              </span>
            </h2>

            <p itemProp="description" className="hero-subtitle">
              M.S. Advocate — High Court &amp; District Court lawyer with 25+ years of
              experience in criminal, civil, family, and property law. Protecting your
              rights across all courts with proven results.
            </p>

            {/* Stats row */}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">25+</span>
                <span className="hero-stat-label">Years Active</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">1200+</span>
                <span className="hero-stat-label">Cases Won</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">4</span>
                <span className="hero-stat-label">Practice Areas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <Link to="/contact">
              <button className="hero-btn-primary" aria-label="Book a free legal consultation">
                Free Consultation →
              </button>
              </Link>

              <Link to="/service/bail">
              <button className="hero-btn-secondary" aria-label="View our legal services">
                Our Services
              </button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}