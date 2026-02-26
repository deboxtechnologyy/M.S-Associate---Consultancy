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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ── Inject fonts & global styles ─────────────────────────────────────────────
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      * { box-sizing: border-box; }
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

      .hero-stats-wrap {
        display: flex;
        align-items: center;
        gap: 32px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .toc-float-btn {
        position: fixed;
        bottom: 24px;
        right: 20px;
        z-index: 35;
        background: #172e4e;
        color: #fff;
        border: none;
        border-radius: 50px;
        padding: 12px 18px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(23,46,78,0.35);
        display: none;
        align-items: center;
        gap: 8px;
        font-family: 'Poppins', sans-serif;
        transition: transform 0.2s ease;
      }
      .toc-float-btn:hover { transform: translateY(-2px); }

      .mobile-toc-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 40;
        display: none;
      }
      .mobile-toc-overlay.open { display: block; }
      .mobile-toc-drawer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        border-radius: 20px 20px 0 0;
        z-index: 50;
        max-height: 70vh;
        overflow-y: auto;
        transform: translateY(100%);
        transition: transform 0.3s ease;
        padding: 20px;
      }
      .mobile-toc-drawer.open { transform: translateY(0); }

      @media (max-width: 1023px) {
        .toc-sidebar { display: none !important; }
        .toc-float-btn { display: flex !important; }
      }

      @media (max-width: 767px) {
        .hero-stats-wrap { gap: 16px; }
        .section-gap { gap: 56px !important; }
      }

      @media (max-width: 479px) {
        .hero-stats-wrap { gap: 10px; }
        .cta-buttons { flex-direction: column !important; align-items: stretch !important; }
        .cta-buttons button { min-width: unset !important; width: 100% !important; }
      }
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white min-h-screen">

      {/* ── HERO BANNER ────────────────────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "480px", height: "clamp(400px, 55vw, 580px)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg')",
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
          className="absolute hidden md:block"
          style={{
            top: 0, right: 0,
            width: "400px", height: "400px",
            borderRadius: "50%",
            background: "rgba(211,159,23,0.07)",
            transform: "translate(40%,-40%)",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{
            bottom: 0, left: 0,
            width: "280px", height: "280px",
            borderRadius: "50%",
            background: "rgba(211,159,23,0.06)",
            transform: "translate(-30%,40%)",
          }}
        />
        <div
          className="absolute hidden lg:block"
          style={{
            top: "50%", left: "6%",
            width: "1px", height: "180px",
            background: "linear-gradient(to bottom,transparent,rgba(211,159,23,0.4),transparent)",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="absolute hidden lg:block"
          style={{
            top: "50%", right: "6%",
            width: "1px", height: "120px",
            background: "linear-gradient(to bottom,transparent,rgba(211,159,23,0.25),transparent)",
            transform: "translateY(-50%)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 py-12">
          {/* Badge */}
          <div
            className="fade-up delay-1 inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full mb-5 sm:mb-6"
            style={{
              background: "rgba(211,159,23,0.13)",
              border: "1px solid rgba(211,159,23,0.35)",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: "#d39f17",
                display: "inline-block",
                flexShrink: 0,
                animation: "shimmer 2s ease infinite",
              }}
            />
            <p
              style={{
                color: "#d39f17",
                fontWeight: 500,
                letterSpacing: "0.1em",
                fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Legal Services · Notice &amp; Dispute Resolution Experts
            </p>
          </div>

          <h1
            className="fade-up delay-2 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
              fontSize: "clamp(1.75rem, 6vw, 4.5rem)",
            }}
          >
            Legal Notice Services
            <br />
            <span style={{ color: "#d39f17" }}>Drafting &amp; Delivery</span>
          </h1>

          <p
            className="fade-up delay-3 mt-4 sm:mt-5 max-w-xl"
            style={{
              color: "#bdd4f0",
              fontWeight: 300,
              lineHeight: "1.85",
              fontSize: "clamp(0.78rem, 2vw, 0.95rem)",
            }}
          >
            Protect your legal rights with professionally drafted notices, ensuring clarity, compliance, and strategic impact.
          </p>

        
        </div>
      </div>

      {/* ── BREADCRUMB ─────────────────────────────────────────────────────────── */}
      <div style={{ background: "#f8f9fc", borderBottom: "1px solid #e8edf4" }}>
        <div
          className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2 flex-wrap"
          style={{ fontSize: "0.72rem" }}
        >
          <span className="cursor-pointer hover:underline" style={{ color: "#172e4e", fontWeight: 500 }}>
            Home
          </span>
          <span style={{ color: "#aab4c0" }}>›</span>
          <span className="cursor-pointer hover:underline" style={{ color: "#172e4e", fontWeight: 500 }}>
            Practice Areas
          </span>
          <span style={{ color: "#aab4c0" }}>›</span>
          <span style={{ color: "#b8860b", fontWeight: 600 }}>Legal Notice Services</span>
        </div>
      </div>

      {/* ── TWO-COLUMN LAYOUT ──────────────────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 flex gap-8 lg:gap-10"
        style={{ alignItems: "flex-start" }}
      >
        {/* Sidebar — sticky on desktop, hidden below lg */}
        <div
          className="toc-sidebar"
          style={{ flexShrink: 0, position: "sticky", top: "24px", alignSelf: "flex-start" }}
        >
          <TableOfContentsSidebar
            items={tableOfContents}
            activeSection={activeSection}
            onScrollTo={scrollTo}
          />
        </div>

        {/* Main content */}
        <main
          className="flex-1 min-w-0 section-gap"
          style={{ display: "flex", flexDirection: "column", gap: "88px" }}
        >

          {/* INTRODUCTION */}
          <section id="introduction">
            <SectionHeading>Introduction</SectionHeading>
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden mb-6"
              style={{ border: "1px solid #dce5f0", boxShadow: "0 4px 24px rgba(23,46,78,0.06)" }}
            >
              <div style={{ height: "4px", background: "linear-gradient(90deg,#172e4e,#d39f17,#172e4e)" }} />
              <div
                className="p-5 sm:p-8"
                style={{ background: "linear-gradient(135deg,#f0f5ff 0%,#fafbff 100%)" }}
              >
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "#374151", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", fontWeight: 400, lineHeight: "1.85" }}
                >
                  A legal notice is the first step in asserting your rights and resolving disputes. At{" "}
                  <strong style={{ color: "#172e4e" }}>M.S Associates &amp; Consultancy</strong>
                  , we provide precise, enforceable, and legally sound notices tailored to your case.
                </p>
                <div className="divider-line my-4 sm:my-5" />
                <p
                  className="leading-relaxed"
                  style={{ color: "#374151", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", fontWeight: 400, lineHeight: "1.85" }}
                >
                  Our team ensures your notice communicates your demands clearly, minimizes risks, and strengthens your position in any future legal proceedings.
                </p>
              </div>
            </div>
            <div
              className="grid gap-3 sm:gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
            >
              {stats.map(([num, label]) => (
                <StatCard key={label} num={num} label={label} />
              ))}
            </div>
          </section>

          {/* TYPES OF LEGAL NOTICES */}
          <section id="grounds">
            <SectionHeading>Types of Legal Notices</SectionHeading>
            <p
              className="mb-6 sm:mb-8 ml-0 sm:ml-14"
              style={{ color: "#6b7280", fontSize: "0.875rem", fontWeight: 400, marginTop: "-8px" }}
            >
              We draft and deliver notices across various legal domains for prompt dispute resolution.
            </p>
            <div
              className="grid gap-4 sm:gap-5"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
            >
              {groundsForDivorce.map(({ title, desc }) => (
                <GroundCard key={title} title={title} desc={desc} />
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section id="services">
            <SectionHeading>Our Services</SectionHeading>
            <p
              className="mb-6 sm:mb-8 ml-0 sm:ml-14"
              style={{ color: "#6b7280", fontSize: "0.875rem", fontWeight: 400, marginTop: "-8px" }}
            >
              End-to-end legal notice services including drafting, review, and strategic delivery for effective results.
            </p>
            <div
              className="grid gap-4 sm:gap-5"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
            >
              {services.map(({ title, desc }, idx) => (
                <ServiceCard key={title} title={title} desc={desc} idx={idx} />
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section id="why-choose-us">
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)",
                boxShadow: "0 16px 48px rgba(23,46,78,0.22)",
              }}
            >
              <div className="relative px-6 sm:px-8 md:px-12 pt-8 sm:pt-10 pb-5 sm:pb-6 text-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 80% 20%,rgba(211,159,23,0.1) 0%,transparent 50%),radial-gradient(circle at 20% 80%,rgba(211,159,23,0.08) 0%,transparent 50%)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{ height: "3px", background: "linear-gradient(90deg,transparent,#d39f17,transparent)" }}
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
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
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
                  Skilled lawyers ensuring your notice is enforceable, strategic, and legally robust.
                </p>
              </div>
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg,transparent,rgba(211,159,23,0.3),transparent)",
                  margin: "0 2rem",
                }}
              />
              <div
                className="grid gap-3 sm:gap-4 p-5 sm:p-8 md:p-12 pt-6 sm:pt-8"
                style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
              >
                {whyChooseUs.map(({ title, desc }) => (
                  <WhyChooseUsCard key={title} title={title} desc={desc} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta">
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden relative"
              style={{
                background: "#f9f5ee",
                border: "1.5px solid #e8d9b8",
                boxShadow: "0 8px 32px rgba(211,159,23,0.08)",
              }}
            >
              <div
                className="absolute top-0 right-0 rounded-full opacity-20 hidden sm:block"
                style={{ width: "240px", height: "240px", background: "#172e4e", transform: "translate(35%,-35%)" }}
              />
              <div
                className="absolute bottom-0 left-0 rounded-full opacity-10 hidden sm:block"
                style={{ width: "160px", height: "160px", background: "#172e4e", transform: "translate(-35%,35%)" }}
              />
              <div
                className="absolute top-0 left-0 right-0"
                style={{ height: "3px", background: "linear-gradient(90deg,#d39f17,#172e4e,#d39f17)" }}
              />
              <div className="relative z-10 p-6 sm:p-8 md:p-14 text-center">
                <div
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full mb-4 sm:mb-5"
                  style={{ background: "rgba(23,46,78,0.07)", border: "1px solid rgba(23,46,78,0.14)" }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
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
                    fontSize: "clamp(1.4rem, 4vw, 2.25rem)",
                    lineHeight: "1.2",
                  }}
                >
                  Assert Your Rights<br />
                  <span style={{ color: "#92740a" }}>With Confidence</span>
                </h2>
                <p
                  className="text-sm max-w-md mx-auto mb-6 sm:mb-8"
                  style={{ color: "#4b5563", fontWeight: 400, lineHeight: "1.8" }}
                >
                  Need to send or respond to a legal notice? Our team provides professional drafting, delivery, and follow-up for effective legal protection.
                </p>
                <div className="cta-buttons flex gap-3 justify-center flex-wrap">
                  <button
                    className="cta-btn-primary rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: "#172e4e",
                      color: "#fff",
                      letterSpacing: "0.02em",
                      padding: "12px 24px",
                      border: "none",
                      cursor: "pointer",
                      minWidth: "200px",
                    }}
                  >
                    📅 Book Free Consultation
                  </button>
                  <button
                    className="cta-btn-secondary rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      border: "2px solid #172e4e",
                      color: "#172e4e",
                      background: "transparent",
                      letterSpacing: "0.02em",
                      padding: "12px 24px",
                      cursor: "pointer",
                      minWidth: "160px",
                    }}
                  >
                    📞 Call Us Now
                  </button>
                </div>
                <p className="mt-4 sm:mt-5 text-xs" style={{ color: "#9ca3af", fontWeight: 300 }}>
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

      {/* ── MOBILE FLOATING TOC BUTTON ─────────────────────────────────────────── */}
      <button
        className="toc-float-btn"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open Table of Contents"
      >
        ☰ Contents
      </button>

      {/* ── MOBILE TOC OVERLAY ─────────────────────────────────────────────────── */}
      <div
        className={`mobile-toc-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div className={`mobile-toc-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#172e4e",
              fontWeight: 700,
              fontSize: "1.1rem",
              margin: 0,
            }}
          >
            Table of Contents
          </h3>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.4rem",
              cursor: "pointer",
              color: "#6b7280",
              lineHeight: 1,
              padding: "4px",
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {tableOfContents.map(({ id, label }) => (
            <button
              key={id}
              className="toc-btn"
              onClick={() => scrollTo(id)}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "none",
                background: activeSection === id ? "linear-gradient(90deg,#f0f5ff,#f8faff)" : "transparent",
                color: activeSection === id ? "#172e4e" : "#4b5563",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.875rem",
                fontWeight: activeSection === id ? 600 : 400,
                cursor: "pointer",
                borderLeft: activeSection === id ? "3px solid #d39f17" : "3px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}