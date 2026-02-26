import { useEffect, useRef, useState } from "react";

if (typeof document !== "undefined") {
  const id = "ms-fonts";
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }
}

const STATS = [
  {
    value: 2500, suffix: "+", label: "Cases Won",
    desc: "Successfully resolved across all practice areas",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    value: 98, suffix: "%", label: "Client Satisfaction",
    desc: "Based on post-case feedback and reviews",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    value: 25, suffix: "+", label: "Years Experience",
    desc: "Decades of courtroom and legal expertise",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: 1200, suffix: "+", label: "Happy Clients",
    desc: "Individuals, families, and businesses served",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function useCounter(target, active, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      const steps = 60;
      let step = 0;
      const inc = target / steps;
      const timer = setInterval(() => {
        step++;
        setCount(Math.min(Math.round(inc * step), target));
        if (step >= steps) clearInterval(timer);
      }, 1600 / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(t);
  }, [active, target, delay]);
  return count;
}

function StatCard({ value, suffix, label, desc, icon, visible, index }) {
  const num = useCounter(value, visible, index * 200);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "clamp(20px, 4vw, 32px)",
        borderRadius: "16px",
        cursor: "default",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
        background: hovered ? "#172e4e" : "#fff",
        border: `1px solid ${hovered ? "#172e4e" : "rgba(23,46,78,0.1)"}`,
        boxShadow: hovered
          ? "0 32px 64px rgba(23,46,78,0.25)"
          : "0 2px 20px rgba(23,46,78,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ${index * 0.12}s ease, transform 0.6s ${index * 0.12}s ease, background 0.4s, border-color 0.4s, box-shadow 0.4s`,
      }}
    >
      {/* Ghost number */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(5rem, 10vw, 8rem)",
          fontWeight: 700,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          position: "absolute",
          bottom: "-8px",
          right: "-4px",
          color: hovered ? "rgba(211,159,23,0.12)" : "rgba(23,46,78,0.04)",
          letterSpacing: "-0.04em",
          transition: "color 0.4s",
        }}
      >
        {num}{suffix}
      </div>

      {/* Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          marginBottom: "24px",
          flexShrink: 0,
          background: hovered ? "rgba(211,159,23,0.15)" : "rgba(23,46,78,0.05)",
          color: hovered ? "#d39f17" : "#172e4e",
          transition: "background 0.4s, color 0.4s",
        }}
      >
        {icon}
      </div>

      {/* Number */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.8rem, 5vw, 4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          marginBottom: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ color: hovered ? "#fff" : "#172e4e", transition: "color 0.4s" }}>
          {num}
        </span>
        <span style={{ color: "#d39f17" }}>{suffix}</span>
      </div>

      {/* Divider */}
      <div
        style={{
          width: hovered ? "48px" : "32px",
          height: "2px",
          background: "#d39f17",
          borderRadius: "9999px",
          marginBottom: "12px",
          transition: "width 0.4s ease",
        }}
      />

      {/* Label */}
      <div
        style={{
          fontFamily: "'Jost', 'Segoe UI', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: hovered ? "#fff" : "#172e4e",
          marginBottom: "8px",
          position: "relative",
          zIndex: 1,
          transition: "color 0.4s",
        }}
      >
        {label}
      </div>

      {/* Desc */}
      <div
        style={{
          fontFamily: "'Jost', 'Segoe UI', sans-serif",
          fontSize: "0.8rem",
          lineHeight: 1.6,
          fontWeight: 300,
          color: hovered ? "rgba(255,255,255,0.55)" : "#8a97a8",
          position: "relative",
          zIndex: 1,
          transition: "color 0.4s",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

const responsiveStyles = `
  *, *::before, *::after { box-sizing: border-box; }

  .stats-section {
    position: relative;
    overflow: hidden;
    padding: 112px 5%;
    background: #f6f4f0;
  }

  .stats-inner {
    position: relative;
    z-index: 10;
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
  }

  .stats-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 24px;
    margin-bottom: 64px;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .stats-header.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stats-tag {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border-radius: 9999px;
    border: 1px solid rgba(23,46,78,0.1);
    background: #fff;
    white-space: nowrap;
  }

  .stats-divider {
    height: 1px;
    background: linear-gradient(to right, rgba(23,46,78,0.12), rgba(211,159,23,0.3), rgba(23,46,78,0.12));
    border-radius: 9999px;
    margin-bottom: 48px;
    opacity: 0;
    transition: opacity 0.7s 0.2s ease;
  }
  .stats-divider.visible { opacity: 1; }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  /* ── Large tablets (≤1024px) ── */
  @media (max-width: 1024px) {
    .stats-section { padding: 90px 5%; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  }

  /* ── Tablets portrait (≤768px) ── */
  @media (max-width: 768px) {
    .stats-section { padding: 72px 6%; }
    .stats-header { gap: 16px; margin-bottom: 48px; }
    .stats-tag { display: none; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .stats-divider { margin-bottom: 36px; }
  }

  /* ── Large phones (≤560px) ── */
  @media (max-width: 560px) {
    .stats-section { padding: 56px 5%; }
    .stats-header { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  }

  /* ── Small phones (≤400px) ── */
  @media (max-width: 400px) {
    .stats-section { padding: 44px 4%; }
    .stats-grid { grid-template-columns: 1fr; gap: 12px; }
  }
`;

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{responsiveStyles}</style>
      <section ref={ref} className="stats-section">

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "radial-gradient(rgba(23,46,78,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gold orb */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "9999px",
            pointerEvents: "none",
            background: "radial-gradient(circle, rgba(211,159,23,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="stats-inner">

          {/* Header */}
          <div className={`stats-header${visible ? " visible" : ""}`}>
            <div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#d39f17",
                  marginBottom: "12px",
                  margin: "0 0 12px",
                }}
              >
                Our Track Record
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 300,
                  color: "#172e4e",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Numbers That{" "}
                <em style={{ fontStyle: "italic", color: "#d39f17" }}>Speak</em>
              </h2>
            </div>

            {/* Decorative tag — hidden on mobile via CSS */}
            <div className="stats-tag">
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#d39f17", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#172e4e",
                }}
              >
                Since 1999
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className={`stats-divider${visible ? " visible" : ""}`} />

          {/* Cards */}
          <div className="stats-grid">
            {STATS.map(({ value, suffix, label, desc, icon }, i) => (
              <StatCard
                key={label}
                value={value}
                suffix={suffix}
                label={label}
                desc={desc}
                icon={icon}
                visible={visible}
                index={i}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}