import { useState, useEffect } from "react";
import {
  tableOfContents,
  groundsForDivorce,
  services,
  whyChooseUs,
  stats,
  testimonial,
} from "./data.js";
import {
  SectionHeading,
  StatCard,
  HeroStat,
  GroundCard,
  ServiceCard,
  WhyChooseUsCard,
  TableOfContentsSidebar,
  Testimonial,
} from "../common-component/service.jsx";

export default function DivorceServicePage() {
  const [activeSection, setActiveSection] = useState("introduction");

  // ── Inject fonts & global styles ─────────────────────────────────────────────
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
      @keyframes shimmer { 0%,100%{opacity:.6} 50%{opacity:1} }
      .fade-up { animation: fadeUp 0.7s ease both; }
      .delay-1 { animation-delay: 0.1s; }
      .delay-2 { animation-delay: 0.2s; }
      .delay-3 { animation-delay: 0.3s; }
      .delay-4 { animation-delay: 0.4s; }
      .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(23,46,78,0.13); }
      .ground-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(23,46,78,0.12); }
      .stat-card:hover { transform: scale(1.04); }
      .cta-btn-primary:hover { background:#1e3d66 !important; transform:translateY(-2px); box-shadow:0 8px 24px rgba(23,46,78,0.3); }
      .cta-btn-secondary:hover { background:#172e4e !important; color:#fff !important; transform:translateY(-2px); }
      .divider-line { height:1px; background:linear-gradient(90deg,transparent,#dce5f0 20%,#dce5f0 80%,transparent); }
      .toc-btn:hover { background: linear-gradient(90deg,#f0f5ff,#f8faff) !important; }
    `;
    document.head.appendChild(style);
  }, []);

  // ── Scroll spy ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const observers = [];
    tableOfContents.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white min-h-screen">

      {/* ── HERO BANNER ────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80')",
            transform: "scale(1.04)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(23,46,78,0.96) 0%, rgba(23,46,78,0.72) 60%, rgba(15,30,55,0.88) 100%)",
          }}
        />

        {/* Geometric decorations */}
        <div
          className="absolute"
          style={{
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(211,159,23,0.07)",
            transform: "translate(40%,-40%)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: 0,
            left: 0,
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "rgba(211,159,23,0.06)",
            transform: "translate(-30%,40%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "6%",
            width: "1px",
            height: "180px",
            background: "linear-gradient(to bottom,transparent,rgba(211,159,23,0.4),transparent)",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "50%",
            right: "6%",
            width: "1px",
            height: "120px",
            background: "linear-gradient(to bottom,transparent,rgba(211,159,23,0.25),transparent)",
            transform: "translateY(-50%)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Badge */}
          <div
            className="fade-up delay-1 inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(211,159,23,0.13)",
              border: "1px solid rgba(211,159,23,0.35)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#d39f17",
                display: "inline-block",
                animation: "shimmer 2s ease infinite",
              }}
            />
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "#d39f17", fontWeight: 500, letterSpacing: "0.12em" }}
            >
              Legal Expertise · Family Law Division
            </p>
          </div>

          <h1
            className="fade-up delay-2 text-5xl md:text-6xl text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Divorce &amp; Separation
            <br />
            <span style={{ color: "#d39f17" }}>Legal Services</span>
          </h1>

          <p
            className="fade-up delay-3 mt-5 max-w-xl text-sm md:text-base"
            style={{ color: "#bdd4f0", fontWeight: 300, lineHeight: "1.85" }}
          >
            Guiding you through life's most challenging transitions with clarity,
            <br className="hidden md:block" /> compassion, and unwavering legal strength.
          </p>

          {/* Hero stats */}
          <div className="fade-up delay-4 flex items-center gap-10 mt-10">
            {stats.map(([num, label], i) => (
              <HeroStat key={label} num={num} label={label} showDivider={i < 2} />
            ))}
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB ─────────────────────────────────────────────────────────── */}
      <div style={{ background: "#f8f9fc", borderBottom: "1px solid #e8edf4" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2 text-xs">
          <span
            className="cursor-pointer hover:underline"
            style={{ color: "#172e4e", fontWeight: 500 }}
          >
            Home
          </span>
          <span style={{ color: "#aab4c0" }}>›</span>
          <span
            className="cursor-pointer hover:underline"
            style={{ color: "#172e4e", fontWeight: 500 }}
          >
            Practice Areas
          </span>
          <span style={{ color: "#aab4c0" }}>›</span>
          <span style={{ color: "#b8860b", fontWeight: 600 }}>Divorce &amp; Separation</span>
        </div>
      </div>

      {/* ── TWO-COLUMN LAYOUT ──────────────────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 py-14 flex gap-10"
        style={{ alignItems: "flex-start" }}
      >
        {/* Sidebar */}
        <TableOfContentsSidebar
          items={tableOfContents}
          activeSection={activeSection}
          onScrollTo={scrollTo}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0" style={{ display: "flex", flexDirection: "column", gap: "88px" }}>

          {/* INTRODUCTION */}
          <section id="introduction">
            <SectionHeading>Introduction</SectionHeading>
            <div
              className="rounded-3xl overflow-hidden mb-6"
              style={{ border: "1px solid #dce5f0", boxShadow: "0 4px 24px rgba(23,46,78,0.06)" }}
            >
              <div
                style={{ height: "4px", background: "linear-gradient(90deg,#172e4e,#d39f17,#172e4e)" }}
              />
              <div
                className="p-8"
                style={{ background: "linear-gradient(135deg,#f0f5ff 0%,#fafbff 100%)" }}
              >
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "#374151", fontSize: "0.95rem", fontWeight: 400, lineHeight: "1.85" }}
                >
                  Divorce is one of the most emotionally and legally complex life events a person can
                  experience. At{" "}
                  <strong style={{ color: "#172e4e" }}>
                    Sharma &amp; Associates — Advocates &amp; Legal Consultants
                  </strong>
                  , we understand the gravity of your situation and are committed to providing you with
                  expert legal guidance that protects your rights, your children, and your future.
                </p>
                <div className="divider-line my-5" />
                <p
                  className="leading-relaxed"
                  style={{ color: "#374151", fontSize: "0.95rem", fontWeight: 400, lineHeight: "1.85" }}
                >
                  Our family law division brings over two decades of courtroom experience, handling
                  everything from amicable mutual consent divorces to highly contested matrimonial
                  disputes. We believe every client deserves a personalized strategy — one built on
                  empathy, precision, and an unshakeable commitment to achieving the best possible
                  outcome.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map(([num, label]) => (
                <StatCard key={label} num={num} label={label} />
              ))}
            </div>
          </section>

          {/* GROUNDS FOR DIVORCE */}
          <section id="grounds">
            <SectionHeading>Grounds for Divorce</SectionHeading>
            <p
              className="mb-8 ml-14"
              style={{ color: "#6b7280", fontSize: "0.875rem", fontWeight: 400, marginTop: "-12px" }}
            >
              Understanding the legal bases upon which a divorce petition may be filed in India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {groundsForDivorce.map(({ title, desc }) => (
                <GroundCard key={title} title={title} desc={desc} />
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section id="services">
            <SectionHeading>Our Services</SectionHeading>
            <p
              className="mb-8 ml-14"
              style={{ color: "#6b7280", fontSize: "0.875rem", fontWeight: 400, marginTop: "-12px" }}
            >
              Comprehensive legal support across every dimension of matrimonial law.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map(({ title, desc }, idx) => (
                <ServiceCard key={title} title={title} desc={desc} idx={idx} />
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section id="why-choose-us">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)",
                boxShadow: "0 16px 48px rgba(23,46,78,0.22)",
              }}
            >
              <div className="relative px-8 md:px-12 pt-10 pb-6 text-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 80% 20%,rgba(211,159,23,0.1) 0%,transparent 50%),radial-gradient(circle at 20% 80%,rgba(211,159,23,0.08) 0%,transparent 50%)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg,transparent,#d39f17,transparent)",
                  }}
                />
                <p
                  className="text-xs uppercase tracking-widest mb-2 relative"
                  style={{ color: "#d39f17", fontWeight: 600 }}
                >
                  Our Distinction
                </p>
                <h2
                  className="text-white relative"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "2rem",
                    lineHeight: "1.2",
                  }}
                >
                  Why Choose{" "}
                  <span style={{ color: "#d39f17" }}>M.S Associates &amp; Consultancy</span>
                </h2>
                <p
                  className="text-sm mt-3 max-w-lg mx-auto relative"
                  style={{ color: "#bdd4f0", fontWeight: 300 }}
                >
                  What sets us apart is not just our legal acumen — it's our humanity.
                </p>
              </div>
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg,transparent,rgba(211,159,23,0.3),transparent)",
                  margin: "0 2rem",
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 md:p-12 pt-8">
                {whyChooseUs.map(({ title, desc }) => (
                  <WhyChooseUsCard key={title} title={title} desc={desc} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta">
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                background: "#f9f5ee",
                border: "1.5px solid #e8d9b8",
                boxShadow: "0 8px 32px rgba(211,159,23,0.08)",
              }}
            >
              <div
                className="absolute top-0 right-0 rounded-full opacity-20"
                style={{ width: "240px", height: "240px", background: "#172e4e", transform: "translate(35%,-35%)" }}
              />
              <div
                className="absolute bottom-0 left-0 rounded-full opacity-10"
                style={{ width: "160px", height: "160px", background: "#172e4e", transform: "translate(-35%,35%)" }}
              />
              <div
                className="absolute top-0 left-0 right-0"
                style={{ height: "3px", background: "linear-gradient(90deg,#d39f17,#172e4e,#d39f17)" }}
              />
              <div className="relative z-10 p-8 md:p-14 text-center">
                <div
                  className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5"
                  style={{ background: "rgba(23,46,78,0.07)", border: "1px solid rgba(23,46,78,0.14)" }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#92740a",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Take the First Step
                  </span>
                </div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#172e4e",
                    fontWeight: 700,
                    fontSize: "2.25rem",
                    lineHeight: "1.2",
                  }}
                >
                  Begin Your Journey <br />
                  <span style={{ color: "#92740a" }}>Towards Resolution</span>
                </h2>
                <p
                  className="text-sm max-w-md mx-auto mb-8"
                  style={{ color: "#4b5563", fontWeight: 400, lineHeight: "1.8" }}
                >
                  Schedule a free, confidential consultation today. Our legal team is ready to listen,
                  advise, and act in your best interest.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    className="cta-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{ background: "#172e4e", color: "#fff", letterSpacing: "0.02em" }}
                  >
                    📅 Book Free Consultation
                  </button>
                  <button
                    className="cta-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      border: "2px solid #172e4e",
                      color: "#172e4e",
                      background: "transparent",
                      letterSpacing: "0.02em",
                    }}
                  >
                    📞 Call Us Now
                  </button>
                </div>
                <p className="mt-5 text-xs" style={{ color: "#9ca3af", fontWeight: 300 }}>
                  🔒 All consultations are strictly confidential
                </p>
              </div>
            </div>
          </section>

          {/* TESTIMONIAL */}
          <section id="quote">
            <Testimonial
              quote={testimonial.quote}
              name={testimonial.name}
              detail={testimonial.detail}
              initial={testimonial.initial}
            />
          </section>

        </main>
      </div>
    </div>
  );
}