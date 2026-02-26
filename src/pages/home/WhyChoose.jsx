import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const REASONS = [
  {
    id: "01",
    title: "Proven Track Record",
    short: "Results speak louder.",
    desc: "Decades of courtroom victories and successful settlements across civil, criminal, and corporate law. Our outcomes define our reputation.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Client-First Philosophy",
    short: "You are never a case number.",
    desc: "We treat every client as a partner. You'll have direct access to your attorney, transparent updates, and honest counsel — always.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Deep Legal Expertise",
    short: "Specialists, not generalists.",
    desc: "Our attorneys hold advanced degrees and specialized certifications, covering a full spectrum of legal disciplines with focused expertise.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Strategic Negotiators",
    short: "Winning before the courtroom.",
    desc: "Most disputes resolve before trial. Our attorneys are master negotiators — protecting your interests while minimizing time and cost.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Transparent Pricing",
    short: "No surprises. Ever.",
    desc: "Clear fee structures from day one. We explain every cost, every option, and every consequence — so you can make fully informed decisions.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Confidential & Trusted",
    short: "Your privacy, protected.",
    desc: "Strict attorney-client privilege and robust data security protocols ensure everything you share stays between you and your legal team.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function WhyChooseUs() {
  const [headerRef, headerInView] = useInView(0.2);
  const [cardsRef, cardsInView] = useInView(0.05);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .wcu-wrap {
          padding: 120px 5% 140px;
          background: #fff;
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }

        .wcu-wrap::before {
          content: '"';
          position: absolute; top: 40px; left: 3%;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(14rem, 25vw, 28rem);
          font-weight: 700;
          color: rgba(23,46,78,0.025);
          line-height: 1; pointer-events: none; user-select: none;
        }

        .wcu-wrap::after {
          content: '';
          position: absolute; bottom: -80px; right: -80px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(211,159,23,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .wcu-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* ── Header ── */
        .wcu-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wcu-header.visible { opacity: 1; transform: translateY(0); }

        .wcu-tag {
          font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: #d39f17; margin: 0 0 14px;
        }

        .wcu-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 300; color: #172e4e; margin: 0; line-height: 1.12;
        }
        .wcu-title em { font-style: italic; color: #d39f17; }
        .wcu-title strong { font-weight: 700; }

        .wcu-divider {
          width: 40px; height: 2px;
          background: linear-gradient(to right, #d39f17, rgba(211,159,23,0.15));
          border-radius: 2px; margin: 20px 0;
        }

        .wcu-left-sub {
          font-size: 0.875rem; font-weight: 300;
          line-height: 1.85; color: #8a97a8;
          margin: 0; max-width: 380px;
        }

        .wcu-right-text {
          font-size: 0.875rem; font-weight: 300;
          line-height: 1.9; color: #8a97a8; margin: 0 0 28px;
        }

        .wcu-cta {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #172e4e; text-decoration: none;
          border-bottom: 1px solid rgba(211,159,23,0.4);
          padding-bottom: 3px;
          transition: color 0.3s, border-color 0.3s, gap 0.3s; cursor: pointer;
          background: none; border-top: none; border-left: none; border-right: none;
        }
        .wcu-cta:hover { color: #d39f17; border-bottom-color: #d39f17; gap: 16px; }

        /* ── Cards Grid ── */
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .wcu-card {
          background: #f6f4f0;
          border: 1px solid rgba(23,46,78,0.06);
          border-radius: 16px;
          padding: 36px 32px;
          position: relative; overflow: hidden; cursor: default;
          opacity: 0; transform: translateY(24px);
          transition:
            opacity 0.45s ease,
            transform 0.45s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .wcu-card.visible { opacity: 1; transform: translateY(0); }
        .wcu-card:hover {
          background: #fff;
          border-color: rgba(211,159,23,0.3);
          box-shadow: 0 20px 60px rgba(23,46,78,0.08), 0 4px 16px rgba(211,159,23,0.06);
          transform: translateY(-5px);
        }

        .wcu-card::before {
          content: ''; position: absolute; top: 0; right: 0;
          width: 0; height: 0; border-style: solid;
          border-width: 0 40px 40px 0;
          border-color: transparent rgba(211,159,23,0.15) transparent transparent;
          transition: border-width 0.3s ease;
        }
        .wcu-card:hover::before {
          border-width: 0 56px 56px 0;
          border-color: transparent rgba(211,159,23,0.25) transparent transparent;
        }

        .wcu-card-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: #fff; border: 1px solid rgba(23,46,78,0.1);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px; color: #172e4e;
          transition: background 0.35s, border-color 0.35s, color 0.35s, transform 0.35s;
          flex-shrink: 0;
        }
        .wcu-card:hover .wcu-card-icon {
          background: #172e4e; border-color: #172e4e;
          color: #d39f17; transform: scale(1.08) rotate(-3deg);
        }

        .wcu-card-id {
          position: absolute; top: 28px; right: 52px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem; font-weight: 700;
          color: rgba(23,46,78,0.04); line-height: 1;
          letter-spacing: -0.03em; user-select: none;
          transition: color 0.3s;
        }
        .wcu-card:hover .wcu-card-id { color: rgba(211,159,23,0.1); }

        .wcu-card-short {
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #d39f17; margin: 0 0 8px;
        }

        .wcu-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 600;
          color: #172e4e; margin: 0 0 10px; line-height: 1.25;
        }

        .wcu-card-rule {
          width: 28px; height: 1.5px;
          background: rgba(211,159,23,0.35);
          border-radius: 2px; margin: 0 0 14px;
          transition: width 0.3s, background 0.3s;
        }
        .wcu-card:hover .wcu-card-rule { width: 44px; background: #d39f17; }

        .wcu-card-desc {
          font-size: 0.82rem; font-weight: 300;
          line-height: 1.85; color: #8a97a8; margin: 0;
        }

        /* ───────────── RESPONSIVE ───────────── */

        /* Large tablets (≤1100px) */
        @media (max-width: 1100px) {
          .wcu-wrap { padding: 90px 5% 110px; }
          .wcu-header { gap: 40px; margin-bottom: 64px; }
          .wcu-grid { gap: 20px; }
          .wcu-card { padding: 30px 26px; }
        }

        /* Tablets — 2-col grid, stack header (≤900px) */
        @media (max-width: 900px) {
          .wcu-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Tablets portrait — stack header (≤768px) */
        @media (max-width: 768px) {
          .wcu-wrap { padding: 72px 6% 90px; }
          .wcu-header {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 52px;
          }
          .wcu-left-sub { max-width: 100%; }
          .wcu-grid { gap: 16px; }
          .wcu-card { padding: 28px 24px; }
          .wcu-card-id { font-size: 2.8rem; right: 28px; top: 22px; }
        }

        /* Large phones (≤600px) */
        @media (max-width: 600px) {
          .wcu-wrap { padding: 56px 5% 72px; }
          .wcu-card { padding: 24px 20px; border-radius: 12px; }
          .wcu-card-icon { width: 44px; height: 44px; margin-bottom: 18px; }
          .wcu-card-title { font-size: 1.2rem; }
          .wcu-title { font-size: clamp(1.9rem, 7vw, 2.6rem); }
          .wcu-cta { font-size: 0.68rem; }
        }

        /* Small phones — single column (≤520px) */
        @media (max-width: 520px) {
          .wcu-grid { grid-template-columns: 1fr; gap: 12px; }
          .wcu-card:hover { transform: translateY(-3px); }
        }

        /* Very small phones (≤380px) */
        @media (max-width: 380px) {
          .wcu-wrap { padding: 44px 4% 60px; }
          .wcu-title { font-size: 1.85rem; }
          .wcu-card { padding: 22px 18px; }
          .wcu-card-id { font-size: 2.4rem; }
        }
      `}</style>

      <section className="wcu-wrap" id="why-choose-us">
        <div className="wcu-inner">

          {/* Header */}
          <div ref={headerRef} className={`wcu-header${headerInView ? " visible" : ""}`}>
            <div>
              <p className="wcu-tag">Why Choose Us</p>
              <h2 className="wcu-title">
                The Firm That<br />
                <strong>Fights</strong> for <em>You</em>
              </h2>
              <div className="wcu-divider" />
              <p className="wcu-left-sub">
                Choosing the right legal partner can define the outcome of your case. Here's why thousands of clients trust us with what matters most.
              </p>
            </div>
            <div>
              <p className="wcu-right-text">
                We are not just attorneys — we are advocates who understand that behind every case is a life, a family, or a business that deserves the very best legal counsel available.
              </p>
              <p className="wcu-right-text" style={{ marginBottom: "32px" }}>
                Our firm combines decades of legal experience with a relentless commitment to achieving the outcomes our clients deserve — efficiently and ethically.
              </p>
              <Link to="/contact">
              <button className="wcu-cta">Schedule a free consultation <span>→</span></button></Link>
            </div>
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="wcu-grid">
            {REASONS.map(({ id, title, short, desc, icon }, i) => (
              <div
                key={id}
                className={`wcu-card${cardsInView ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="wcu-card-id">{id}</div>
                <div className="wcu-card-icon">{icon}</div>
                <p className="wcu-card-short">{short}</p>
                <h3 className="wcu-card-title">{title}</h3>
                <div className="wcu-card-rule" />
                <p className="wcu-card-desc">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}