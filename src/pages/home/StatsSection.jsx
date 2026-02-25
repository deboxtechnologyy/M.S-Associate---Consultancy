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
      className="relative flex flex-col items-start p-8 rounded-2xl cursor-default overflow-hidden"
      style={{
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
      {/* Big ghost number */}
      <div
        className="cormorant absolute -bottom-4 -right-2 font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "8rem",
          color: hovered ? "rgba(211,159,23,0.12)" : "rgba(23,46,78,0.04)",
          letterSpacing: "-0.04em",
          transition: "color 0.4s",
        }}
      >
        {num}{suffix}
      </div>

      {/* Icon */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-xl mb-6"
        style={{
          background: hovered ? "rgba(211,159,23,0.15)" : "rgba(23,46,78,0.05)",
          color: hovered ? "#d39f17" : "#172e4e",
          transition: "background 0.4s, color 0.4s",
        }}
      >
        {icon}
      </div>

      {/* Number */}
      <div
        className="cormorant leading-none mb-3 relative z-10"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(3rem, 5vw, 4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        <span style={{ color: hovered ? "#fff" : "#172e4e", transition: "color 0.4s" }}>
          {num}
        </span>
        <span style={{ color: "#d39f17" }}>{suffix}</span>
      </div>

      {/* Divider */}
      <div
        className="rounded-full mb-3"
        style={{
          width: hovered ? "48px" : "32px",
          height: "2px",
          background: "#d39f17",
          transition: "width 0.4s ease",
        }}
      />

      {/* Label */}
      <div
        className="text-sm font-semibold tracking-widest uppercase mb-2 relative z-10"
        style={{
          fontFamily: "'Jost', 'Segoe UI', sans-serif",
          color: hovered ? "#fff" : "#172e4e",
          letterSpacing: "0.15em",
          transition: "color 0.4s",
        }}
      >
        {label}
      </div>

      {/* Desc */}
      <div
        className="text-xs leading-relaxed relative z-10"
        style={{
          fontFamily: "'Jost', 'Segoe UI', sans-serif",
          color: hovered ? "rgba(255,255,255,0.55)" : "#8a97a8",
          fontWeight: 300,
          transition: "color 0.4s",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-[5%]"
      style={{ background: "#f6f4f0" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(23,46,78,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gold orb */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-100px", left: "-80px",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(211,159,23,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: "80rem" }}>

        {/* Header */}
        <div
          className="mb-16 grid gap-6"
          style={{
            gridTemplateColumns: "1fr auto",
            alignItems: "end",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Left */}
          <div>
            <p
              className="text-xs font-medium tracking-[0.26em] uppercase mb-3"
              style={{ fontFamily: "'Jost', sans-serif", color: "#d39f17" }}
            >
              Our Track Record
            </p>
            <h2
              className="leading-tight m-0"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "#172e4e",
              }}
            >
              Numbers That{" "}
              <em style={{ fontStyle: "italic", color: "#d39f17" }}>Speak</em>
            </h2>
          </div>

          {/* Right — decorative tag */}
          <div
            className="hidden md:flex items-center gap-3 px-5 py-3 rounded-full"
            style={{ border: "1px solid rgba(23,46,78,0.1)", background: "#fff" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: "#d39f17" }} />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Jost', sans-serif", color: "#172e4e" }}
            >
              Since 1999
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-12 rounded-full"
          style={{
            height: "1px",
            background: "linear-gradient(to right, rgba(23,46,78,0.12), rgba(211,159,23,0.3), rgba(23,46,78,0.12))",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s 0.2s ease",
          }}
        />

        {/* Cards grid */}
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
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
  );
}