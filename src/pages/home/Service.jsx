import { useState } from "react";

const SERVICES = [
  { icon: "⚖️", title: "Civil Litigation",  desc: "Expert representation in civil disputes, property matters, and contractual conflicts with decades of courtroom experience.", num: "01" },
  { icon: "🏛️", title: "Criminal Defense",  desc: "Vigorous defense strategies for all criminal charges, protecting your rights at every stage of the legal process.", num: "02" },
  { icon: "🏠", title: "Property Law",       desc: "Comprehensive legal assistance for property transactions, disputes, title issues, and real estate matters.", num: "03" },
  { icon: "👨‍👩‍👧", title: "Family Law",    desc: "Compassionate counsel for divorce, custody, matrimonial disputes, and family legal matters.", num: "04" },
  { icon: "📋", title: "Contract Drafting",  desc: "Meticulous drafting and review of agreements to safeguard your business and personal interests.", num: "05" },
  { icon: "🏢", title: "Corporate Law",      desc: "Strategic legal solutions for businesses, mergers, compliance, and corporate governance.", num: "06" },
];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

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
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── Header ── */
  .svc-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: end;
    margin-bottom: 80px;
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(23,46,78,0.1);
  }

  @media (max-width: 768px) {
    .svc-header { grid-template-columns: 1fr; gap: 24px; }
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
  }

  .svc-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.4rem, 4.5vw, 3.8rem);
    font-weight: 600;
    color: #172e4e;
    line-height: 1.15;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .svc-title em {
    font-style: italic;
    color: #d39f17;
  }

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
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
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

  /* ── Grid ── */
  .svc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(23,46,78,0.08);
  }

  @media (max-width: 900px) { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .svc-grid { grid-template-columns: 1fr; } }

  .svc-card {
    background: #ffffff;
    padding: 48px 40px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: background 0.4s ease;
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
  }
  .svc-card:hover .svc-card-link svg { transform: translateX(4px); }

  /* ── Footer band ── */
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

  @media (max-width: 640px) {
    .svc-footer-band { flex-direction: column; text-align: center; padding: 32px 24px; }
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
  }
`;

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{style}</style>
      <section className="svc-section" id="services">
        <div className="svc-inner">

          {/* ── Header ── */}
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
              <button className="svc-cta">
                <span>Schedule a Consultation</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* ── Cards Grid ── */}
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
                <span className="svc-card-link">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            ))}
          </div>

          {/* ── Footer Band ── */}
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