import { useState, useEffect, useRef } from "react";

const tableOfContents = [
  { id: "introduction", label: "Introduction" },
  { id: "grounds", label: "Grounds for Divorce" },
  { id: "services", label: "Our Services" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "cta", label: "Get Started" },
  { id: "quote", label: "Client Quote" },
];

const groundsForDivorce = [
  { icon: "⚖️", title: "Mutual Consent", desc: "When both spouses agree to dissolve the marriage, we facilitate a smooth, dignified process with minimal conflict." },
  { icon: "💔", title: "Cruelty & Domestic Abuse", desc: "Physical or mental cruelty is a valid ground. We stand beside victims to ensure their safety and legal protection." },
  { icon: "🚫", title: "Desertion", desc: "If a spouse has abandoned the other for 2+ years without reasonable cause, desertion constitutes a valid ground." },
  { icon: "🏥", title: "Mental Disorder", desc: "Incurable mental illness or persistent psychiatric disorder may be cited as legal grounds under applicable law." },
  { icon: "🔗", title: "Adultery", desc: "Voluntary sexual intercourse outside the marriage is a recognized ground. We handle such matters with complete discretion." },
  { icon: "☮️", title: "Irretrievable Breakdown", desc: "When the marriage has permanently collapsed with no possibility of reconciliation, the court may grant dissolution." },
];

const services = [
  { title: "Contested Divorce", desc: "We aggressively represent your interests when both parties cannot reach agreement on terms of separation.", icon: "🏛️" },
  { title: "Uncontested Divorce", desc: "Streamlined legal assistance for amicable separations, reducing time, cost, and emotional toll.", icon: "🤝" },
  { title: "Child Custody & Support", desc: "Protecting your children's best interests with compassionate, firm legal advocacy at every step.", icon: "👨‍👧" },
  { title: "Alimony & Maintenance", desc: "Expert guidance on spousal support claims, ensuring fair financial arrangements post-separation.", icon: "💼" },
  { title: "Property Division", desc: "Meticulous analysis and representation in dividing marital assets, property, and liabilities equitably.", icon: "🏠" },
  { title: "Mediation & Arbitration", desc: "Alternative dispute resolution services to resolve conflicts efficiently and out of court.", icon: "🕊️" },
];

const whyChooseUs = [
  { title: "20+ Years of Experience", desc: "Two decades of handling complex family law cases across all courts.", icon: "🎖️" },
  { title: "Client-First Approach", desc: "Your well-being and outcome remain our unwavering priority throughout.", icon: "🌟" },
  { title: "Strict Confidentiality", desc: "Every detail of your case is handled with the utmost discretion and privacy.", icon: "🔒" },
  { title: "Transparent Pricing", desc: "No hidden charges. Clear, upfront fee structures discussed before engagement.", icon: "💎" },
];

const stats = [["500+", "Cases Resolved"], ["98%", "Client Satisfaction"], ["20+", "Years of Practice"]];

export default function DivorceServicePage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap";
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
      .ground-card:hover .ground-icon { transform: scale(1.15) rotate(-4deg); }
      .service-icon { transition: transform 0.3s ease; }
      .service-card:hover .service-icon { transform: scale(1.2) rotate(6deg); }
      .stat-card:hover { transform: scale(1.04); }
      .cta-btn-primary:hover { background:#1e3d66 !important; transform:translateY(-2px); box-shadow:0 8px 24px rgba(23,46,78,0.3); }
      .cta-btn-secondary:hover { background:#172e4e !important; color:#fff !important; transform:translateY(-2px); }
      .divider-line { height:1px; background:linear-gradient(90deg,transparent,#dce5f0 20%,#dce5f0 80%,transparent); }
      .toc-btn:hover { background: linear-gradient(90deg,#f0f5ff,#f8faff) !important; }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const observers = [];
    tableOfContents.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
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

  const SectionHeading = ({ children }) => (
    <div className="flex items-center gap-4 mb-6">
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ width: "36px", height: "3px", background: "#d39f17", borderRadius: "2px", display: "block" }} />
        <span style={{ width: "22px", height: "3px", background: "#172e4e", borderRadius: "2px", display: "block" }} />
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#172e4e", fontWeight: 700, fontSize: "2.25rem", lineHeight: 1.15 }}>
        {children}
      </h2>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white min-h-screen">

      {/* ── HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80')", transform: "scale(1.04)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(23,46,78,0.96) 0%, rgba(23,46,78,0.72) 60%, rgba(15,30,55,0.88) 100%)" }} />

        {/* Geometric decorations */}
        <div className="absolute" style={{ top: 0, right: 0, width: "400px", height: "400px", borderRadius: "50%", background: "rgba(211,159,23,0.07)", transform: "translate(40%,-40%)" }} />
        <div className="absolute" style={{ bottom: 0, left: 0, width: "280px", height: "280px", borderRadius: "50%", background: "rgba(211,159,23,0.06)", transform: "translate(-30%,40%)" }} />
        <div className="absolute" style={{ top: "50%", left: "6%", width: "1px", height: "180px", background: "linear-gradient(to bottom,transparent,rgba(211,159,23,0.4),transparent)", transform: "translateY(-50%)" }} />
        <div className="absolute" style={{ top: "50%", right: "6%", width: "1px", height: "120px", background: "linear-gradient(to bottom,transparent,rgba(211,159,23,0.25),transparent)", transform: "translateY(-50%)" }} />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Badge */}
          <div className="fade-up delay-1 inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6" style={{ background: "rgba(211,159,23,0.13)", border: "1px solid rgba(211,159,23,0.35)" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d39f17", display: "inline-block", animation: "shimmer 2s ease infinite" }} />
            <p className="text-xs tracking-widest uppercase" style={{ color: "#d39f17", fontWeight: 500, letterSpacing: "0.12em" }}>Legal Expertise · Family Law Division</p>
          </div>

          <h1 className="fade-up delay-2 text-5xl md:text-6xl text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.15 }}>
            Divorce &amp; Separation<br />
            <span style={{ color: "#d39f17" }}>Legal Services</span>
          </h1>

          <p className="fade-up delay-3 mt-5 max-w-xl text-sm md:text-base" style={{ color: "#bdd4f0", fontWeight: 300, lineHeight: "1.85" }}>
            Guiding you through life's most challenging transitions with clarity,<br className="hidden md:block" /> compassion, and unwavering legal strength.
          </p>

          {/* Inline stats */}
          <div className="fade-up delay-4 flex items-center gap-10 mt-10">
            {stats.map(([num, label], i) => (
              <div key={label} className="text-center" style={{ position: "relative" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", color: "#d39f17", fontWeight: 700, fontSize: "1.75rem", lineHeight: 1 }}>{num}</p>
                <p style={{ color: "rgba(189,212,240,0.75)", fontSize: "0.68rem", fontWeight: 400, marginTop: "5px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                {i < 2 && <div style={{ position: "absolute", right: "-20px", top: "50%", width: "1px", height: "36px", background: "rgba(255,255,255,0.2)", transform: "translateY(-50%)" }} />}
              </div>
            ))}
          </div>
        </div>

      
      </div>

      {/* ── BREADCRUMB ── */}
      <div style={{ background: "#f8f9fc", borderBottom: "1px solid #e8edf4" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2 text-xs">
          <span className="cursor-pointer hover:underline" style={{ color: "#172e4e", fontWeight: 500 }}>Home</span>
          <span style={{ color: "#aab4c0" }}>›</span>
          <span className="cursor-pointer hover:underline" style={{ color: "#172e4e", fontWeight: 500 }}>Practice Areas</span>
          <span style={{ color: "#aab4c0" }}>›</span>
          <span style={{ color: "#b8860b", fontWeight: 600 }}>Divorce &amp; Separation</span>
        </div>
      </div>

      {/* ── TWO-COLUMN ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 flex gap-10" style={{ alignItems: "flex-start" }}>

        {/* SIDEBAR */}
        <aside className="hidden lg:block flex-shrink-0" style={{ width: "272px", position: "sticky", top: "32px", alignSelf: "flex-start" }}>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #dce5f0", boxShadow: "0 8px 32px rgba(23,46,78,0.1)" }}>
            <div className="px-5 py-4 flex items-center gap-2" style={{ background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d39f17" }} />
              <p className="text-white text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>On This Page</p>
            </div>
            <nav className="bg-white">
              {tableOfContents.map(({ id, label }, i) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="toc-btn w-full text-left flex items-center gap-3 px-5 py-3 transition-all duration-200"
                  style={{
                    borderBottom: "1px solid #f0f4f9",
                    background: activeSection === id ? "linear-gradient(90deg,#f0f5ff,#f8faff)" : "transparent",
                    borderLeft: activeSection === id ? "3px solid #172e4e" : "3px solid transparent",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 transition-all duration-300"
                    style={{
                      background: activeSection === id ? "#172e4e" : "#e8edf4",
                      color: activeSection === id ? "#fff" : "#172e4e",
                      fontWeight: 700, fontSize: "10px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-sm transition-all duration-200"
                    style={{ fontWeight: activeSection === id ? 600 : 400, color: activeSection === id ? "#172e4e" : "#5a6a7e" }}
                  >
                    {label}
                  </span>
                  {activeSection === id && (
                    <span className="ml-auto rounded-full flex-shrink-0" style={{ background: "#d39f17", width: "4px", height: "18px" }} />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact card */}
          <div className="mt-5 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(211,159,23,0.3)", boxShadow: "0 8px 24px rgba(23,46,78,0.1)" }}>
            <div className="p-6 text-center" style={{ background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ background: "rgba(211,159,23,0.15)", border: "1px solid rgba(211,159,23,0.3)" }}>
                <span style={{ fontSize: "1.3rem" }}>📞</span>
              </div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#d39f17", fontWeight: 600 }}>Free Consultation</p>
              <p className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Talk to Us</p>
              <p className="text-xs mb-5" style={{ color: "#bdd4f0", fontWeight: 300 }}>Available Mon–Sat, 9am–7pm</p>
              <a
                href="tel:+911234567890"
                className="block w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: "#d39f17", color: "#172e4e" }}
                onMouseEnter={e => e.currentTarget.style.background="#e5ad1e"}
                onMouseLeave={e => e.currentTarget.style.background="#d39f17"}
              >
                +91 12345 67890
              </a>
            </div>
            <div className="px-5 py-4 text-center" style={{ background: "#f9f5ee" }}>
              <p className="text-xs" style={{ color: "#6b7280" }}>Or email us directly</p>
              <button className="mt-1 text-xs font-semibold underline" style={{ color: "#172e4e" }}>hello@sharmalaw.in</button>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 min-w-0" style={{ display: "flex", flexDirection: "column", gap: "88px" }}>

          {/* INTRODUCTION */}
          <section id="introduction">
            <SectionHeading>Introduction</SectionHeading>
            <div className="rounded-3xl overflow-hidden mb-6" style={{ border: "1px solid #dce5f0", boxShadow: "0 4px 24px rgba(23,46,78,0.06)" }}>
              <div style={{ height: "4px", background: "linear-gradient(90deg,#172e4e,#d39f17,#172e4e)" }} />
              <div className="p-8" style={{ background: "linear-gradient(135deg,#f0f5ff 0%,#fafbff 100%)" }}>
                <p className="leading-relaxed mb-4" style={{ color: "#374151", fontSize: "0.95rem", fontWeight: 400, lineHeight: "1.85" }}>
                  Divorce is one of the most emotionally and legally complex life events a person can experience. At{" "}
                  <strong style={{ color: "#172e4e" }}>Sharma &amp; Associates — Advocates &amp; Legal Consultants</strong>, we understand the gravity of your situation and are committed to providing you with expert legal guidance that protects your rights, your children, and your future.
                </p>
                <div className="divider-line my-5" />
                <p className="leading-relaxed" style={{ color: "#374151", fontSize: "0.95rem", fontWeight: 400, lineHeight: "1.85" }}>
                  Our family law division brings over two decades of courtroom experience, handling everything from amicable mutual consent divorces to highly contested matrimonial disputes. We believe every client deserves a personalized strategy — one built on empathy, precision, and an unshakeable commitment to achieving the best possible outcome.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map(([num, label]) => (
                <div key={label} className="stat-card text-center py-7 rounded-2xl relative overflow-hidden cursor-default transition-all duration-300" style={{ background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)", boxShadow: "0 8px 24px rgba(23,46,78,0.2)" }}>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 30%,rgba(211,159,23,0.12) 0%,transparent 60%)" }} />
                  <p style={{ fontFamily: "'Playfair Display', serif", color: "#d39f17", fontWeight: 700, fontSize: "2rem", position: "relative" }}>{num}</p>
                  <p style={{ color: "#bdd4f0", fontSize: "0.68rem", fontWeight: 400, marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.1em", position: "relative" }}>{label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GROUNDS */}
          <section id="grounds">
            <SectionHeading>Grounds for Divorce</SectionHeading>
            <p className="mb-8 ml-14" style={{ color: "#6b7280", fontSize: "0.875rem", fontWeight: 400, marginTop: "-12px" }}>
              Understanding the legal bases upon which a divorce petition may be filed in India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {groundsForDivorce.map(({  title, desc }) => (
                <div key={title} className="ground-card rounded-2xl p-6 transition-all duration-300 flex flex-col gap-3" style={{ border: "1.5px solid #dce5f0", background: "#fff", cursor: "default" }}>
                  <div className="flex items-center gap-3">
                  
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#172e4e", fontWeight: 700, fontSize: "1rem" }}>{title}</h3>
                  </div>
                  <div style={{ height: "1px", background: "linear-gradient(50deg,#d39f17,transparent)", opacity: 0.5 }} />
                  <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.7", fontWeight: 300 }}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section id="services">
            <SectionHeading>Our Services</SectionHeading>
            <p className="mb-8 ml-14" style={{ color: "#6b7280", fontSize: "0.875rem", fontWeight: 400, marginTop: "-12px" }}>
              Comprehensive legal support across every dimension of matrimonial law.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map(({ title, desc }, idx) => (
                <div key={title} className="service-card rounded-2xl overflow-hidden transition-all duration-300" style={{ border: "1.5px solid #dce5f0", background: "#fff" }}>
                  <div style={{ height: "3px", background: idx % 2 === 0 ? "linear-gradient(90deg,#172e4e,#d39f17)" : "linear-gradient(90deg,#d39f17,#172e4e)" }} />
                  <div className="flex gap-4 p-6">
                 
                    <div>
                      <h3 className="mb-1.5" style={{ fontFamily: "'Playfair Display', serif", color: "#172e4e", fontWeight: 700, fontSize: "1rem" }}>{title}</h3>
                      <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.7", fontWeight: 300 }}>{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section id="why-choose-us">
            <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)", boxShadow: "0 16px 48px rgba(23,46,78,0.22)" }}>
              <div className="relative px-8 md:px-12 pt-10 pb-6 text-center overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 80% 20%,rgba(211,159,23,0.1) 0%,transparent 50%),radial-gradient(circle at 20% 80%,rgba(211,159,23,0.08) 0%,transparent 50%)" }} />
                <div className="absolute top-0 left-0 right-0" style={{ height: "3px", background: "linear-gradient(90deg,transparent,#d39f17,transparent)" }} />
                <p className="text-xs uppercase tracking-widest mb-2 relative" style={{ color: "#d39f17", fontWeight: 600 }}>Our Distinction</p>
                <h2 className="text-white relative" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", lineHeight: "1.2" }}>
                  Why Choose <span style={{  color: "#d39f17" }}>M.S Associates &amp; Consultancy </span>
                </h2>
                <p className="text-sm mt-3 max-w-lg mx-auto relative" style={{ color: "#bdd4f0", fontWeight: 300 }}>
                  What sets us apart is not just our legal acumen — it's our humanity.
                </p>
              </div>
              <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(211,159,23,0.3),transparent)", margin: "0 2rem" }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 md:p-12 pt-8">
                {whyChooseUs.map(({ title, desc, icon }) => (
                  <div
                    key={title}
                    className="rounded-2xl p-5 flex gap-4 items-start transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(211,159,23,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; }}
                  >
                    
                    <div>
                      <h3 className="text-white mb-1" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem" }}>{title}</h3>
                      <p style={{ color: "#bdd4f0", fontSize: "0.875rem", fontWeight: 300, lineHeight: "1.6" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta">
            <div className="rounded-3xl overflow-hidden relative" style={{ background: "#f9f5ee", border: "1.5px solid #e8d9b8", boxShadow: "0 8px 32px rgba(211,159,23,0.08)" }}>
              <div className="absolute top-0 right-0 rounded-full opacity-20" style={{ width: "240px", height: "240px", background: "#172e4e", transform: "translate(35%,-35%)" }} />
              <div className="absolute bottom-0 left-0 rounded-full opacity-10" style={{ width: "160px", height: "160px", background: "#172e4e", transform: "translate(-35%,35%)" }} />
              <div className="absolute top-0 left-0 right-0" style={{ height: "3px", background: "linear-gradient(90deg,#d39f17,#172e4e,#d39f17)" }} />
              <div className="relative z-10 p-8 md:p-14 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5" style={{ background: "rgba(23,46,78,0.07)", border: "1px solid rgba(23,46,78,0.14)" }}>
                  <span style={{ fontSize: "0.75rem", color: "#92740a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Take the First Step</span>
                </div>
                <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#172e4e", fontWeight: 700, fontSize: "2.25rem", lineHeight: "1.2" }}>
                  Begin Your Journey <br />
                  <span style={{  color: "#92740a" }}>Towards Resolution</span>
                </h2>
                <p className="text-sm max-w-md mx-auto mb-8" style={{ color: "#4b5563", fontWeight: 400, lineHeight: "1.8" }}>
                  Schedule a free, confidential consultation today. Our legal team is ready to listen, advise, and act in your best interest.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="cta-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200" style={{ background: "#172e4e", color: "#fff", letterSpacing: "0.02em" }}>
                    📅 Book Free Consultation
                  </button>
                  <button className="cta-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200" style={{ border: "2px solid #172e4e", color: "#172e4e", background: "transparent", letterSpacing: "0.02em" }}>
                    📞 Call Us Now
                  </button>
                </div>
                <p className="mt-5 text-xs" style={{ color: "#9ca3af", fontWeight: 300 }}>🔒 All consultations are strictly confidential</p>
              </div>
            </div>
          </section>

          {/* TESTIMONIAL */}
          <section id="quote">
            <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg,#f0f5ff 0%,#ffffff 100%)", border: "1.5px solid #dce5f0", boxShadow: "0 8px 32px rgba(23,46,78,0.06)" }}>
              <div style={{ height: "4px", background: "linear-gradient(90deg,#172e4e,#d39f17,#172e4e)" }} />
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#172e4e", fontWeight: 600 }}>Client Testimonial</p>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#172e4e", fontWeight: 700, fontSize: "1.75rem" }}>Words From Our Clients</h2>
                  <div className="flex justify-center gap-0.5 mt-3">
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: "1rem" }}>★</span>)}
                  </div>
                </div>
                <div className="relative max-w-2xl mx-auto">
                  <span className="absolute select-none" style={{ top: "-28px", left: "-4px", fontSize: "7rem", lineHeight: 1, color: "#172e4e", opacity: 0.06, fontFamily: "'Playfair Display', serif" }}>"</span>
                  <blockquote className="text-lg md:text-xl text-center leading-relaxed relative z-10" style={{ fontFamily: "'Playfair Display', serif", color: "#2d3e55", fontStyle: "italic", fontWeight: 400 }}>
                    Going through a divorce felt overwhelming, but Sharma &amp; Associates handled my case with extraordinary professionalism and genuine compassion. They didn't just fight for my rights — they made sure I understood every step of the process. I walked away with my dignity and my children's future secured.
                  </blockquote>
                  <span className="absolute select-none" style={{ bottom: "-28px", right: "-4px", fontSize: "7rem", lineHeight: 1, color: "#172e4e", opacity: 0.06, fontFamily: "'Playfair Display', serif" }}>"</span>
                </div>
                <div className="mt-12 flex items-center justify-center gap-4">
                  <div className="relative">
                    <div className="rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ width: "56px", height: "56px", background: "linear-gradient(135deg,#172e4e,#1e3d66)", fontFamily: "'Playfair Display', serif", boxShadow: "0 4px 16px rgba(23,46,78,0.3)" }}>P</div>
                    <div className="absolute flex items-center justify-center rounded-full" style={{ bottom: "-2px", right: "-2px", width: "18px", height: "18px", background: "#d39f17", fontSize: "10px", color: "#fff" }}>✓</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#172e4e" }}>Priya Mehta</p>
                    <p className="text-xs" style={{ color: "#9ca3af", fontWeight: 300 }}>Client, Mutual Consent Divorce — Mumbai, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}