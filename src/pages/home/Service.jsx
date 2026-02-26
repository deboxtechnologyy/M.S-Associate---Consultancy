import { useState } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: "⚖️",
    title: "Civil Litigation ",
    desc: "Representation in civil suits including recovery cases, injunction matters, partition suits, and contractual disputes before District Courts in Gautam Buddh Nagar.",
    num: "01"
  },
  {
    icon: "🏛️",
    title: "Criminal Defense ",
    desc: "Strong courtroom representation in criminal trials, FIR matters, complaint cases, and defense strategy at every stage of criminal proceedings.",
    num: "02"
  },
  {
    icon: "🔓",
    title: "Bail Matters ",
    desc: "Regular bail, anticipatory bail, and urgent bail applications handled with detailed legal preparation and timely court representation.",
    num: "03"
  },
  {
    icon: "👨‍👩‍👧",
    title: "Divorce & Family Law ",
    desc: "Legal assistance in divorce petitions, child custody, maintenance cases, and matrimonial disputes with complete confidentiality.",
    num: "04"
  },
  {
    icon: "🏠",
    title: "Property Disputes ",
    desc: "Legal solutions for land disputes, registry issues, builder-buyer conflicts, partition matters, and title verification cases.",
    num: "05"
  },
  {
    icon: "💳",
    title: "Cheque Bounce – NI Act 138",
    desc: "Complete legal support for cheque bounce cases under Section 138 of the Negotiable Instruments Act, including legal notice drafting and court representation.",
    num: "06"
  },

];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  .svc-section {
    padding: 120px 5%;
    background: #ffffff;
    position: relative;
    overflow: hidden;
    font-family: 'Jost', sans-serif;
  }

  .svc-section::before {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(211,159,23,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .svc-section::after {
    content: '';
    position: absolute;
    bottom: -150px; left: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(23,46,78,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .svc-inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  /* Header */
  .svc-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: end;
    margin-bottom: 80px;
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(23,46,78,0.1);
  }

  .svc-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #d39f17;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .svc-eyebrow::before {
    content: '';
    display: block;
    width: 30px; height: 1px;
    background: #d39f17;
    flex-shrink: 0;
  }

  .svc-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4.5vw, 3.8rem);
    font-weight: 600;
    color: #172e4e;
    line-height: 1.15;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .svc-title em { font-style: italic; color: #d39f17; }

  .svc-subtitle {
    color: rgba(23,46,78,0.55);
    font-size: 0.92rem;
    line-height: 1.9;
    font-weight: 300;
    margin: 0 0 28px;
    max-width: 380px;
  }

  .svc-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border: 1px solid rgba(211,159,23,0.4);
    color: #d39f17;
    font-family: 'Jost', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }
  .svc-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #d39f17;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
    z-index: 0;
  }
  .svc-cta:hover::before { transform: scaleX(1); }
  .svc-cta:hover { color: #0d1b2a; border-color: #d39f17; }
  .svc-cta span { position: relative; z-index: 1; }

  /* Grid */
  .svc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(23,46,78,0.08);
  }

  .svc-card {
    background: #ffffff;
    padding: 48px 40px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: background 0.4s ease;
    min-width: 0;
  }
  .svc-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(211,159,23,0.05) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .svc-card:hover { background: #fdfaf4; }
  .svc-card:hover::before { opacity: 1; }

  .svc-card-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 4.5rem;
    font-weight: 300;
    color: rgba(23,46,78,0.06);
    line-height: 1;
    position: absolute;
    top: 24px; right: 28px;
    transition: color 0.4s ease;
    letter-spacing: -0.02em;
  }
  .svc-card:hover .svc-card-num { color: rgba(211,159,23,0.12); }

  .svc-card-icon {
    font-size: 1.9rem;
    margin-bottom: 24px;
    display: block;
    filter: grayscale(0.2);
  }

  .svc-card-line {
    width: 0;
    height: 2px;
    background: #d39f17;
    margin-bottom: 20px;
    transition: width 0.45s ease;
  }
  .svc-card:hover .svc-card-line { width: 36px; }

  .svc-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.45rem;
    font-weight: 600;
    color: #172e4e;
    margin: 0 0 14px;
    line-height: 1.2;
    transition: color 0.3s ease;
  }
  .svc-card:hover .svc-card-title { color: #0d1b2a; }

  .svc-card-desc {
    color: rgba(23,46,78,0.5);
    font-size: 0.87rem;
    line-height: 1.85;
    font-weight: 300;
    margin: 0 0 28px;
    transition: color 0.3s ease;
  }
  .svc-card:hover .svc-card-desc { color: rgba(23,46,78,0.7); }

  .svc-card-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(211,159,23,0.5);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }
  .svc-card:hover .svc-card-link { color: #d39f17; gap: 14px; }
  .svc-card-link svg {
    width: 14px; height: 14px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  .svc-card:hover .svc-card-link svg { transform: translateX(4px); }

  /* Footer band */
  .svc-footer-band {
    margin-top: 72px;
    padding: 40px 48px;
    border: 1px solid rgba(23,46,78,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: rgba(23,46,78,0.02);
  }

  .svc-footer-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: #172e4e;
    font-style: italic;
    margin: 0;
  }

  .svc-footer-contact {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-shrink: 0;
  }

  .svc-footer-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #d39f17;
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  .svc-footer-phone {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: #d39f17;
    font-weight: 600;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  /* ─── RESPONSIVE BREAKPOINTS ─── */

  /* Large tablets / small desktops (≤1024px) */
  @media (max-width: 1024px) {
    .svc-section { padding: 90px 5%; }
    .svc-card { padding: 40px 32px; }
    .svc-card-num { font-size: 3.8rem; }
    .svc-footer-band { padding: 32px 36px; }
    .svc-footer-text { font-size: 1.15rem; }
    .svc-footer-phone { font-size: 1rem; }
  }

  /* Tablets — 2-column grid (≤900px) */
  @media (max-width: 900px) {
    .svc-grid { grid-template-columns: repeat(2, 1fr); }
    .svc-header { gap: 40px; margin-bottom: 60px; padding-bottom: 48px; }
  }

  /* Tablets portrait — stack header (≤768px) */
  @media (max-width: 768px) {
    .svc-section { padding: 72px 6%; }
    .svc-header {
      grid-template-columns: 1fr;
      gap: 28px;
      margin-bottom: 48px;
      padding-bottom: 40px;
    }
    .svc-subtitle { max-width: 100%; }
    .svc-title { font-size: clamp(2rem, 7vw, 2.8rem); }
    .svc-card { padding: 36px 28px; }
    .svc-card-num { font-size: 3.4rem; right: 20px; top: 18px; }
    .svc-footer-band { padding: 28px 24px; gap: 20px; }
    .svc-footer-text { font-size: 1.05rem; }
  }

  /* Large phones — stack footer (≤640px) */
  @media (max-width: 640px) {
    .svc-footer-band {
      flex-direction: column;
      text-align: center;
      padding: 32px 24px;
    }
    .svc-footer-contact { justify-content: center; }
  }

  /* Small phones — single column (≤560px) */
  @media (max-width: 560px) {
    .svc-section { padding: 56px 5%; }
    .svc-grid { grid-template-columns: 1fr; }
    .svc-card { padding: 32px 24px; }
    .svc-card-num { font-size: 3rem; }
    .svc-card-title { font-size: 1.3rem; }
    .svc-header { gap: 22px; margin-bottom: 36px; padding-bottom: 32px; }
    .svc-footer-band { margin-top: 48px; }
    .svc-footer-text { font-size: 1rem; }
    .svc-footer-phone { font-size: 0.95rem; }
  }

  /* Very small phones (≤380px) */
  @media (max-width: 380px) {
    .svc-section { padding: 44px 4%; }
    .svc-title { font-size: 1.9rem; }
    .svc-eyebrow { font-size: 0.65rem; }
    .svc-cta { padding: 12px 20px; font-size: 0.7rem; }
    .svc-card { padding: 28px 20px; }
  }
`;

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{style}</style>
      <section className="svc-section" id="services">
        <div className="svc-inner">

          {/* Header */}
          <div className="svc-header">
            <div>
              <p className="svc-eyebrow">Our Practice Areas</p>
              <h2 className="svc-title">
                Legal Counsel<br />of <em>Distinction</em>
              </h2>
            </div>
            <div>
              <p className="svc-subtitle">
                Comprehensive legal solutions tailored to your unique circumstances,
                delivered with precision and unwavering dedication to your interests.
              </p>
              <Link to="/contact">
              <button className="svc-cta">
                <span>Schedule a Consultation</span>
                <span>→</span>
              </button>
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="svc-grid">
            {SERVICES.map(({ icon, title, desc, num }) => (
              <div
                key={title}
                className="svc-card"
                onMouseEnter={() => setHovered(title)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="svc-card-num">{num}</span>
                <span className="svc-card-icon">{icon}</span>
                <div className="svc-card-line" />
                <h3 className="svc-card-title">{title}</h3>
                <p className="svc-card-desc">{desc}</p>
                <div>
                
           
                </div>
              </div>
            ))}
          </div>

          {/* Footer Band */}
          <div className="svc-footer-band">
            <p className="svc-footer-text">
              "Every client deserves exceptional counsel — not just competent representation."
            </p>
            <div className="svc-footer-contact">
              <div className="svc-footer-dot" />
              <span className="svc-footer-phone">Available 24 / 7 — +1 (800) 000-0000</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}