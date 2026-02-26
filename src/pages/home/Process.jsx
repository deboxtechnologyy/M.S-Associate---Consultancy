import { useState, useEffect, useRef } from "react";

const PROCESS = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We listen carefully to understand your legal situation and goals before anything else.",
    highlight: "We listen first.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Case Analysis",
    desc: "Thorough research and analysis to identify every angle and devise the strongest strategy.",
    highlight: "Detail-obsessed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Legal Strategy",
    desc: "A clear, transparent roadmap tailored specifically to your case and desired outcomes.",
    highlight: "Clarity at every turn.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Representation",
    desc: "Vigorous representation at every stage — negotiations, hearings, or trial — until resolution.",
    highlight: "Relentless. Until done.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function ProcessSection() {
  const [headerRef, headerInView] = useInView(0.3);
  const [gridRef, gridInView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .ps-wrap {
          padding: 110px 5% 130px;
          background: #f6f4f0;
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }

        .ps-wrap::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(211,159,23,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Outer container — max-w-7xl (80rem / 1280px) ── */
        .ps-container {
          max-width: 80rem;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .ps-header {
          text-align: center;
          margin-bottom: 90px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ps-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ps-tag {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #d39f17;
          margin: 0 0 14px;
        }

        .ps-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 300;
          color: #172e4e;
          margin: 0 0 20px;
          line-height: 1.15;
        }

        .ps-title em {
          font-style: italic;
          color: #d39f17;
        }

        .ps-divider {
          width: 40px; height: 2px;
          background: linear-gradient(to right, #d39f17, rgba(211,159,23,0.15));
          border-radius: 2px;
          margin: 0 auto 20px;
        }

        .ps-subtitle {
          color: #8a97a8;
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 1.9;
          max-width: 400px;
          margin: 0 auto;
        }

        /* ── Timeline Container ── */
        .ps-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        /* The horizontal line behind dots */
        .ps-line {
          position: absolute;
          top: 44px;
          left: calc(12.5%);
          right: calc(12.5%);
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(211,159,23,0.15),
            rgba(211,159,23,0.5) 20%,
            rgba(211,159,23,0.5) 80%,
            rgba(211,159,23,0.15)
          );
          z-index: 0;
        }

        /* Progress fill that animates in */
        .ps-line-fill {
          position: absolute;
          top: 44px;
          left: calc(12.5%);
          height: 1px;
          background: #d39f17;
          width: 0;
          z-index: 0;
          transition: width 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .ps-line-fill.visible {
          width: 75%;
        }

        /* ── Each step column ── */
        .ps-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 16px;
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .ps-step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Dot */
        .ps-dot-wrap {
          position: relative;
          margin-bottom: 36px;
          flex-shrink: 0;
        }

        .ps-dot {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid rgba(23,46,78,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.35s, box-shadow 0.35s, transform 0.35s, background 0.35s;
          cursor: default;
          position: relative;
          z-index: 2;
        }

        .ps-dot.hovered {
          background: #172e4e;
          border-color: #172e4e;
          box-shadow: 0 12px 40px rgba(23,46,78,0.2), 0 0 0 8px rgba(211,159,23,0.12);
          transform: translateY(-6px) scale(1.05);
        }

        .ps-dot-icon {
          color: #b0bec5;
          transition: color 0.35s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ps-dot.hovered .ps-dot-icon {
          color: #d39f17;
        }

        /* Step number badge */
        .ps-badge {
          position: absolute;
          top: -6px; right: -6px;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: #d39f17;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.04em;
          z-index: 3;
          box-shadow: 0 2px 8px rgba(211,159,23,0.4);
        }

        /* Card */
        .ps-card {
          background: #fff;
          border: 1px solid rgba(23,46,78,0.07);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          width: 100%;
          transition: border-color 0.35s, box-shadow 0.35s, transform 0.35s;
        }

        .ps-card.hovered {
          border-color: rgba(211,159,23,0.3);
          box-shadow: 0 16px 48px rgba(23,46,78,0.09), 0 4px 16px rgba(211,159,23,0.07);
          transform: translateY(-4px);
        }

        .ps-card-tag {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d39f17;
          margin: 0 0 8px;
          transition: opacity 0.3s;
        }

        .ps-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #172e4e;
          margin: 0 0 10px;
          line-height: 1.25;
        }

        .ps-card-rule {
          width: 24px; height: 1.5px;
          background: rgba(211,159,23,0.4);
          border-radius: 2px;
          margin: 0 auto 12px;
          transition: width 0.3s, background 0.3s;
        }

        .ps-card.hovered .ps-card-rule {
          width: 40px;
          background: #d39f17;
        }

        .ps-card-desc {
          font-size: 0.8rem;
          font-weight: 300;
          line-height: 1.85;
          color: #8a97a8;
          margin: 0;
        }

        /* ── Tablet: 2-column grid ── */
        @media (max-width: 900px) {
          .ps-wrap {
            padding: 80px 5% 100px;
          }

          .ps-header {
            margin-bottom: 60px;
          }

          .ps-timeline {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
          }

          /* Hide the horizontal line on 2-col layout */
          .ps-line,
          .ps-line-fill {
            display: none;
          }

          .ps-step {
            padding: 0;
          }

          .ps-dot {
            width: 80px;
            height: 80px;
          }
        }

        /* ── Small tablet / large phone ── */
        @media (max-width: 600px) {
          .ps-wrap {
            padding: 64px 4% 80px;
          }

          .ps-header {
            margin-bottom: 48px;
          }

          .ps-timeline {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 16px;
          }

          .ps-dot {
            width: 68px;
            height: 68px;
          }

          .ps-card {
            padding: 20px 14px;
          }

          .ps-card-title {
            font-size: 1.05rem;
          }

          .ps-card-desc {
            font-size: 0.76rem;
          }

          .ps-dot-wrap {
            margin-bottom: 24px;
          }
        }

        /* ── Mobile: single column ── */
        @media (max-width: 400px) {
          .ps-timeline {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .ps-step {
            flex-direction: row;
            align-items: flex-start;
            gap: 20px;
          }

          .ps-dot-wrap {
            margin-bottom: 0;
            flex-shrink: 0;
          }

          .ps-dot {
            width: 64px;
            height: 64px;
          }

          .ps-card {
            text-align: left;
          }

          .ps-card-rule {
            margin: 0 0 12px 0;
          }
        }
      `}</style>

      <section className="ps-wrap" id="process">
        <div className="ps-container">

          {/* Header */}
          <div ref={headerRef} className={`ps-header${headerInView ? " visible" : ""}`}>
            <p className="ps-tag">How We Work</p>
            <h2 className="ps-title">A Process Built on <em>Trust</em></h2>
            <div className="ps-divider" />
            <p className="ps-subtitle">
              Every case is different. Our structured approach ensures nothing falls through the cracks.
            </p>
          </div>

          {/* Timeline */}
          <div ref={gridRef} className="ps-timeline">

            {/* Background line */}
            <div className="ps-line" />
            <div className={`ps-line-fill${gridInView ? " visible" : ""}`} />

            {PROCESS.map(({ step, title, desc, highlight, icon }, i) => {
              const isHovered = hovered === i;
              return (
                <div
                  key={step}
                  className={`ps-step${gridInView ? " visible" : ""}`}
                  style={{ transitionDelay: `${i * 140}ms` }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Dot */}
                  <div className="ps-dot-wrap">
                    <div className={`ps-dot${isHovered ? " hovered" : ""}`}>
                      <div className="ps-dot-icon">{icon}</div>
                    </div>
                    <div className="ps-badge">{step}</div>
                  </div>

                  {/* Card */}
                  <div className={`ps-card${isHovered ? " hovered" : ""}`}>
                    <p className="ps-card-tag">{highlight}</p>
                    <h3 className="ps-card-title">{title}</h3>
                    <div className="ps-card-rule" />
                    <p className="ps-card-desc">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}