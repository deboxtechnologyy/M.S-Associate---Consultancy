import { useState, useEffect, useRef } from "react";

const P = "#172e4e";
const G = "#d39f17";

const faqs = [
  { q: "What types of legal cases do you handle?", a: "We handle civil and criminal litigation, family law, property disputes, corporate matters, constitutional law, and bail applications across High Courts and the Supreme Court of India." },
  { q: "How do I schedule a consultation?", a: "You may book through our contact form, call us directly, or send an email. Both in-person and virtual consultations are available at your convenience." },
  { q: "What is your fee structure?", a: "Fees vary based on case complexity. We offer transparent pricing discussed upfront, with flexible payment arrangements for eligible clients. Initial consultations are available at a nominal charge." },
  { q: "Do you offer emergency legal assistance?", a: "Yes. Our helpline is available around the clock for urgent matters including anticipatory bail, arrests, and injunctions. We respond promptly to critical situations." },
  { q: "Do you handle pro bono cases?", a: "We reserve a portion of our annual practice for public interest and underrepresented individuals. Please reach out to discuss eligibility." },
];

const whyCards = [
  { num: "01", title: "30+ Years of Practice", body: "Decades of experience across civil, criminal, and corporate law — with a consistent record of successful outcomes." },
  { num: "02", title: "Client-First Philosophy", body: "We take the time to understand your circumstances deeply and craft a legal strategy built specifically around your case." },
  { num: "03", title: "Supreme Court Advocates", body: "Our senior advocates are enrolled with the Bar Council and regularly appear before the Supreme Court and High Courts." },
  { num: "04", title: "Transparent Counsel", body: "No jargon, no surprises. We give you an honest assessment of your case, your options, and your realistic outcomes." },
  { num: "05", title: "5,000+ Cases Resolved", body: "A proven track record across thousands of matters — property, family, corporate, criminal, and constitutional law." },
  { num: "06", title: "Around-the-Clock Access", body: "Legal crises don't follow office hours. Our team is reachable whenever you need urgent guidance or representation." },
];

export default function AdvocateContact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "", message: "" });
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true })); }),
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const reg = (id) => (el) => { sectionRefs.current[id] = el; if (el) el.id = id; };
  const reveal = (id, delay = 0) => ({
    ref: reg(id),
    style: {
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      opacity: visible[id] ? 1 : 0,
      transform: visible[id] ? "translateY(0px)" : "translateY(28px)",
    }
  });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", area: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div style={{ background: "#fff", color: P, fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Poppins:wght@300;400;500;600&display=swap');

        html { scroll-behavior: smooth; }

        *, *::before, *::after { box-sizing: border-box; }

        .pf { font-family: 'Playfair Display', serif; }
        .pp { font-family: 'Poppins', sans-serif; }

        .line { height: 1px; background: linear-gradient(90deg, transparent, rgba(23,46,78,0.12), transparent); }
        .line-g { height: 1px; background: linear-gradient(90deg, transparent, ${G}, transparent); }

        nav a { color: rgba(23,46,78,0.65); font-size: 13px; font-weight: 500; text-decoration: none; letter-spacing: 0.2px; transition: color 0.2s; }
        nav a:hover { color: ${G}; }

        .inp {
          width: 100%; border: 1px solid #e2e8ef; border-radius: 8px;
          padding: 11px 14px; font-family: 'Poppins', sans-serif; font-size: 13.5px;
          color: ${P}; background: #fafbfc; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .inp:focus { border-color: ${G}; box-shadow: 0 0 0 3px rgba(211,159,23,0.12); background: #fff; }
        .inp::placeholder { color: #b0bcc9; }
        label.lbl { font-size: 11px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase; color: ${P}; display: block; margin-bottom: 5px; opacity: 0.75; }

        .hcard { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .hcard:hover { box-shadow: 0 16px 48px rgba(23,46,78,0.10); transform: translateY(-3px); }

        .faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s; opacity: 0; }
        .faq-body.open { max-height: 220px; opacity: 1; }

        .wcard { border: 1px solid rgba(23,46,78,0.08); border-radius: 14px; padding: 28px 26px; background: #fff; transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s; cursor: default; box-shadow:0 12px 40px rgba(23,46,78,0.08); }
        .wcard:hover { box-shadow: 0 12px 40px rgba(23,46,78,0.08); transform: translateY(-4px); }

        .btn-g { background: ${G}; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.3px; cursor: pointer; transition: background 0.2s, box-shadow 0.2s, transform 0.2s; box-shadow: 0 4px 16px rgba(211,159,23,0.3); white-space: nowrap; }
        .btn-g:hover { background: #c49015; box-shadow: 0 6px 24px rgba(211,159,23,0.4); transform: translateY(-1px); }

        .btn-o { background: transparent; color: ${P}; border: 1.5px solid rgba(23,46,78,0.25); border-radius: 8px; padding: 11px 24px; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; transition: border-color 0.2s, color 0.2s; white-space: nowrap; }
        .btn-o:hover { border-color: ${G}; color: ${G}; }

        .ico { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #fdf6e3, #fef0c0); border: 1px solid rgba(211,159,23,0.2); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }

        .tag { display: inline-block; font-size: 10.5px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: ${G}; padding: 4px 14px; border-radius: 20px; background: rgba(211,159,23,0.09); border: 1px solid rgba(211,159,23,0.2); margin-bottom: 14px; }

        .num-acc { font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 700; color: ${G}; letter-spacing: 1px; margin-bottom: 10px; }

        ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-thumb { background: rgba(23,46,78,0.2); border-radius: 3px; }

        /* ── HERO ── */
        .hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: center; }
        .hero-areas-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .hero-stats { display: flex; gap: 32px; margin-top: 36px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.08); }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }

        /* ── HERO RIGHT PANEL ── */
        .hero-right-panel {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 20px;
          padding: 30px 28px;
        }
        .hero-right-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${G};
          margin-bottom: 16px;
        }
        .hero-area-item {
          padding: 10px 14px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .hero-area-item span {
          font-size: clamp(11px, 1.2vw, 12.5px);
          color: rgba(255,255,255,0.7);
          font-weight: 400;
        }
        .hero-award-badge {
          margin-top: 20px;
          padding: 14px 16px;
          background: linear-gradient(135deg, rgba(211,159,23,0.18), rgba(211,159,23,0.08));
          border-radius: 10px;
          border: 1px solid rgba(211,159,23,0.28);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* ── INFO CARDS ── */
        .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        /* ── FORM SECTION ── */
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .form-inner-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        /* ── FAQ + MAP ── */
        .faq-map-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .transport-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }

        /* ── WHY ── */
        .why-header-grid { display: grid; grid-template-columns: 1fr 1.8fr; gap: 64px; align-items: start; margin-bottom: 52px; }
        .why-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

        /* ── TABLET (≤ 900px) ── */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .hero-areas-grid { grid-template-columns: 1fr 1fr; }

          .info-grid { grid-template-columns: 1fr 1fr; }

          .form-grid { grid-template-columns: 1fr; gap: 36px; }

          .faq-map-grid { grid-template-columns: 1fr; gap: 48px; }

          .why-header-grid { grid-template-columns: 1fr; gap: 16px; margin-bottom: 36px; }
          .why-cards-grid { grid-template-columns: 1fr 1fr; }
        }

        /* ── MOBILE (≤ 600px) ── */
        @media (max-width: 600px) {
          .hero-grid { gap: 28px; }
          .hero-stats { gap: 20px; flex-wrap: wrap; }
          .hero-btns { flex-direction: column; }
          .hero-btns .btn-g,
          .hero-btns .btn-o { width: 100%; text-align: center; }

          .info-grid { grid-template-columns: 1fr; }

          .form-inner-grid { grid-template-columns: 1fr; }

          .transport-grid { grid-template-columns: 1fr 1fr 1fr; gap: 8px; }

          .why-cards-grid { grid-template-columns: 1fr; }

          .section-pad { padding: 52px 20px !important; }
          .hero-pad { padding: 44px 20px 56px !important; }

          /* ── HERO RIGHT PANEL MOBILE ── */
          .hero-right-panel {
            display: none;
          }
        }

        /* ── SMALL MOBILE (≤ 380px) ── */
        @media (max-width: 380px) {
          .transport-grid { grid-template-columns: 1fr; }
          .hero-stats { flex-direction: column; gap: 12px; }
        }
      `}</style>


      {/* ══ HERO BANNER ═══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/contact.png')",
          backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(105deg, rgba(23,46,78,0.96) 0%, rgba(23,46,78,0.88) 50%, rgba(23,46,78,0.75) 100%)`,
        }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pf" style={{ position: "absolute", right: -60, top: -40, fontSize: "clamp(200px, 35vw, 500px)", color: "rgba(255,255,255,0.025)", lineHeight: 1, userSelect: "none", pointerEvents: "none", fontWeight: 700 }}>§</div>

        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }} className="hero-pad section-pad" >
          <div style={{ padding: "56px 32px 64px" }} className="hero-pad">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ height: 1, width: 32, background: G }} />
              <span className="pp" style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: G }}>Contact Us</span>
            </div>

            <div className="hero-grid">
              <div>
                <h1 className="pf" style={{ fontSize: "clamp(26px, 3.4vw, 46px)", fontWeight: 700, color: "#fff", lineHeight: 1.18, marginBottom: 16 }}>
                  Speak to an Advocate<br />
                  <span style={{ color: G }}>Who Truly Listens.</span>
                </h1>
                <p className="pp" style={{ fontSize: "clamp(13px, 1.5vw, 14.5px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 28, maxWidth: 480 }}>
                  With over three decades of experience across India's courts, M.S Associates & Consultancy delivers precise, compassionate legal counsel — from initial consultation to final judgement.
                </p>
               
            
              </div>

              {/* Right panel — now using explicit classes for mobile overrides */}
              <div className="hero-right-panel">
                <div className="pp hero-right-label">Our Practice Areas</div>
                <div className="hero-areas-grid">
                  {["Criminal Defence", "Family & Divorce", "Property Law", "Corporate Matters", "Civil Litigation", "Constitutional Law", "Bail Applications", "Labour Law"].map(a => (
                    <div key={a} className="hero-area-item">
                      <span className="pp">{a}</span>
                    </div>
                  ))}
                </div>
                <div className="hero-award-badge">
                  <span className="award-emoji" style={{ fontSize: 22 }}>🏆</span>
                  <div>
                    <div className="pp award-title" style={{ fontSize: 12.5, fontWeight: 600, color: G, lineHeight: 1.3 }}>Best Law Firm 2024</div>
                    <div className="pp award-sub" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)" }}>Indian Bar Association, New Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 2, background: `linear-gradient(90deg, transparent 0%, ${G} 30%, ${G} 70%, transparent 100%)` }} />
      </section>

          
      <section style={{ background: "#f9fafb", padding: "64px 32px" }} className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className="info-grid">
            {[
              { icon: "📍", label: "Visit Our Office", lines: ["shop no.3 near DISC , District Court , Gautam Budh Nagar"], sub: "Mon – Sat · 9:30 AM – 6:00 PM" },
              { icon: "📞", label: "Call Us", lines: ["+91 98188 03706 (Primary)",], sub: "Emergency line available 24 / 7" },
              { icon: "✉️", label: "Write to Us", lines: ["manojjandiya@gmail.com", ""], sub: "Response within 24 business hours" },
            ].map((c, i) => (
              <div key={i} className="hcard" {...reveal(`ic${i}`, i * 0.07)} style={{ background: "#fff", borderRadius: 16, padding: "28px 26px", border: "1px solid rgba(23,46,78,0.07)", boxShadow: "0 4px 20px rgba(23,46,78,0.05)", ...reveal(`ic${i}`, i * 0.07).style }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
                  <div className="ico">{c.icon}</div>
                  <div className="pf" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 700, color: P, paddingTop: 4 }}>{c.label}</div>
                </div>
                <div style={{ paddingLeft: 2 }}>
                  {c.lines.filter(Boolean).map((l, j) => (
                    <div key={j} className="pp" style={{ fontSize: 13.5, color: "#566778", lineHeight: 1.75, wordBreak: "break-word" }}>{l}</div>
                  ))}
                </div>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(23,46,78,0.06)" }}>
                  <span className="pp" style={{ fontSize: 12, color: G, fontWeight: 600 }}>{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="line" />

      <section style={{ background: "#fff", padding: "80px 32px" }} className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>

          <div style={{ marginBottom: 52 }} {...reveal("fh")}>
            <div className="tag pp">Get In Touch</div>
            <h2 className="pf" style={{ fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 700, color: P, marginBottom: 12, lineHeight: 1.2 }}>
              Let Us Review Your Case
            </h2>
            <p className="pp" style={{ fontSize: "clamp(13px, 1.5vw, 14.5px)", color: "#7a8899", maxWidth: 500, lineHeight: 1.8 }}>
              Fill in the form below and a senior advocate will be in touch within 24 hours to discuss your legal matter in full confidence.
            </p>
          </div>

          <div className="form-grid xl:mt-8">

            <div {...reveal("fm")}>
              {sent ? (
                <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 16, padding: "48px 36px", textAlign: "center" }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 20px", color: "white" }}>✓</div>
                  <h3 className="pf" style={{ fontSize: 24, fontWeight: 700, color: P, marginBottom: 8 }}>Message Sent</h3>
                  <p className="pp" style={{ fontSize: 13.5, color: "#566778", lineHeight: 1.7 }}>Thank you for reaching out. Our team will review your matter and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div className="form-inner-grid">
                    <div>
                      <label className="lbl pp">Full Name</label>
                      <input className="inp" placeholder="Rajesh Kumar" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div>
                      <label className="lbl pp">Email Address</label>
                      <input type="email" className="inp" placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="form-inner-grid">
                    <div>
                      <label className="lbl pp">Phone Number</label>
                      <input className="inp" placeholder="+91 98188 03706" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="lbl pp">Legal Matter</label>
                      <select className="inp" value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} style={{ appearance: "none", cursor: "pointer" }}>
                        <option value="">Select area of law</option>
                        {["Criminal Law", "Family & Divorce", "Property Dispute", "Corporate Law", "Civil Litigation", "Bail Application", "Other"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="lbl pp">Brief Description</label>
                    <textarea rows={5} className="inp" style={{ resize: "none" }} placeholder="Please describe your legal matter briefly…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <p className="pp" style={{ fontSize: 11.5, color: "#a0adb8", lineHeight: 1.6 }}>
                    🔒 All information is protected by attorney-client privilege and our strict privacy policy.
                  </p>
                  <button type="submit" className="btn-g" style={{ width: "100%", padding: "14px", fontSize: 13.5 }}>
                    Submit — Request a Callback →
                  </button>
                </form>
              )}
            </div>

            <div {...reveal("fp", 0.12)} style={{ ...reveal("fp", 0.12).style }}>
              <div style={{ background: P, borderRadius: 18, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "40px 36px", minHeight: 460 }} className="xl:-mt-24 lg:-mt-24">
                <div style={{ position: "absolute", bottom: -40, right: -40, width: 260, height: 260, borderRadius: "50%", border: `60px solid rgba(211,159,23,0.07)`, pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: -30, left: -30, width: 180, height: 180, borderRadius: "50%", border: `40px solid rgba(255,255,255,0.04)`, pointerEvents: "none" }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="pp" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: G, marginBottom: 18 }}>Why Consult Us First</div>
                  <h3 className="pf" style={{ fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 20 }}>
                    Confidential.<br />
                    <span style={{ color: G, fontStyle: "italic" }}>Compassionate. Committed.</span>
                  </h3>
                  <p className="pp" style={{ fontSize: "clamp(12.5px, 1.4vw, 13.5px)", color: "rgba(255,255,255,0.58)", lineHeight: 1.85, marginBottom: 32 }}>
                    Every legal matter is handled with complete discretion. Your first consultation is a private, no-pressure conversation to understand your situation and explore your options.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      "Enrolled with the Bar Council of Delhi",
                      // "Appearances in Supreme Court & High Courts",
                      "Multilingual team — English, Hindi, Urdu",
                      "Virtual consultations available nationwide",
                    ].map(t => (
                      <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white", flexShrink: 0, marginTop: 2 }}>✓</div>
                        <span className="pp" style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ position: "relative", zIndex: 1, marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ background: G, borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📞</div>
                  <div>
                    <div className="pp" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>Prefer to call directly?</div>
                    <div className="pf" style={{ fontSize: "clamp(14px, 1.8vw, 17px)", fontWeight: 700, color: G }}>+91 98188 03706</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f9fafb", padding: "80px 32px" }} className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className="faq-map-grid">

            <div {...reveal("faq")}>
              <div className="tag pp">Common Questions</div>
              <h2 className="pf" style={{ fontSize: "clamp(22px, 2.8vw, 38px)", fontWeight: 700, color: P, marginBottom: 10, lineHeight: 1.25 }}>
                Frequently Asked Questions
              </h2>
              <p className="pp" style={{ fontSize: 14, color: "#7a8899", lineHeight: 1.8, marginBottom: 30, maxWidth: 420 }}>
                Answers to the questions our clients ask most often. If you don't find yours here, please reach out.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(23,46,78,0.08)" }}>
                {faqs.map((f, i) => (
                  <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(23,46,78,0.07)" : "none", background: "#fff", transition: "background 0.2s" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <span className="pp" style={{ fontSize: "clamp(12.5px, 1.4vw, 13.5px)", fontWeight: 500, color: openFaq === i ? G : P, lineHeight: 1.5 }}>{f.q}</span>
                      <span style={{ fontSize: 18, color: openFaq === i ? G : "rgba(23,46,78,0.3)", transition: "transform 0.3s, color 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0, lineHeight: 1, fontWeight: 300 }}>+</span>
                    </button>
                    <div className={`faq-body${openFaq === i ? " open" : ""}`}>
                      <p className="pp" style={{ padding: "2px 22px 18px", fontSize: "clamp(12.5px, 1.4vw, 13.5px)", color: "#7a8899", lineHeight: 1.8 }}>{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: "#fff", borderRadius: 12, border: "1px solid rgba(23,46,78,0.07)" }}>
                <div className="ico" style={{ fontSize: 16 }}>💬</div>
                <div>
                  <div className="pp" style={{ fontSize: 13, fontWeight: 600, color: P, marginBottom: 2 }}>Still have a question?</div>
                  <div className="pp" style={{ fontSize: 12.5, color: "#7a8899" }}>Call <span style={{ color: G, fontWeight: 600 }}>+91 98188 03706</span> or email us directly.</div>
                </div>
              </div>
            </div>

            <div {...reveal("map", 0.1)}>
              <div className="tag pp">Find Us</div>
              <h2 className="pf" style={{ fontSize: "clamp(22px, 2.8vw, 38px)", fontWeight: 700, color: P, marginBottom: 10, lineHeight: 1.25 }}>
                Visit Our Chambers
              </h2>
              <p className="pp" style={{ fontSize: 14, color: "#7a8899", lineHeight: 1.8, marginBottom: 28, maxWidth: 400 }}>
                Located in the heart of Delhi's District Court Complex — easily accessible by metro, road, and bus.
              </p>

              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(23,46,78,0.1)", boxShadow: "0 8px 32px rgba(23,46,78,0.09)" }}>
                <iframe
                  title="M.S & Associates Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3114027234647!2d77.48185027474649!3d28.500277290075626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb0010dc76f1%3A0x6516e5d51be8a523!2sGautam%20Budh%20Nagar%20District%20Court!5e0!3m2!1sen!2sin!4v1772107184491!5m2!1sen!2sin"
                  style={{ width: "100%", height: 310, border: 0, display: "block" }}
                  loading="lazy"
                />
                <div style={{ background: "#fff", padding: "18px 22px", display: "flex", alignItems: "flex-start", gap: 12, borderTop: "1px solid rgba(23,46,78,0.07)" }}>
                  <div className="ico" style={{ fontSize: 16 }}>📍</div>
                  <div>
                    <div className="pf" style={{ fontSize: 15, fontWeight: 700, color: P, marginBottom: 3 }}>Shop no.3 near DISC </div>
                    <div className="pp" style={{ fontSize: 13, color: "#7a8899" }}>District Court , Gautam Budh Nagar</div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px 32px" }} className="section-pad">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>

          <div className="why-header-grid">
            <div {...reveal("wh")}>
              <div className="tag pp">Why Choose Us</div>
              <h2 className="pf" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: P, lineHeight: 1.2, marginBottom: 14 }}>
                Counsel You Can Rely
              </h2>
              <p className="pp" style={{ fontSize: 14, color: "#7a8899", lineHeight: 1.85 }}>
                Thousands of clients have trusted us with their most sensitive legal matters. Here is what distinguishes our practice.
              </p>
            </div>
            <div className="line" style={{ alignSelf: "center" }} />
          </div>

          <div className="why-cards-grid">
            {whyCards.map((c, i) => (
              <div key={i} className="wcard" {...reveal(`wc${i}`, i * 0.07)} style={{ ...reveal(`wc${i}`, i * 0.07).style }}>
                <div className="num-acc pp">{c.num}</div>
                <h3 className="pf" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 700, color: P, marginBottom: 10, lineHeight: 1.3 }}>{c.title}</h3>
                <p className="pp" style={{ fontSize: 13.5, color: "#7a8899", lineHeight: 1.8 }}>{c.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}