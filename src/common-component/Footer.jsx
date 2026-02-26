import { useState } from "react";
import {Link} from 'react-router-dom'
const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const practiceAreas = [
    { label: "Criminal Defense", href: "/service/criminal-cases" },
    { label: "Divroce & Family Matter", href: "/service/divorce-and-family-court-cases" },
    { label: "Civil Litigation", href: "/service/civil-suits" },
    { label: "Cheque Bounce", href: "/service/cheque-bounce" },
    { label: "Bail", href: "/service/bail" },
    { label: "Legal Notice", href: "/service/legal-notice" },
  ];

  const quickLinks = [
    { label: "About the Firm", href: "/about" },
    { label: "Our Advocates", href: "/about" },

    { label: "Legal Blog", href: "/blog" },
    { label: "FAQ", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socials = [
    { name: "LinkedIn", icon: "in" },
    { name: "Twitter", icon: "𝕏" },
    { name: "YouTube", icon: "▶" },
    { name: "Facebook", icon: "f" },
  ];

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');

        .adv-footer {
          background-color: #172e4e;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .adv-title { font-family: 'Playfair Display', serif; }

        .gold-topbar { height: 4px; background: #fff; }

        .texture {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .blob1 {
          position: absolute; top: -120px; right: -120px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .blob2 {
          position: absolute; bottom: 0; left: -80px;
          width: 350px; height: 350px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 5% 40px;
          width: 100%;
        }

        /* ── Consultation Banner ── */
        .consult-banner {
          border: 1px solid rgba(255,255,255,0.25);
          padding: 40px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
          margin-bottom: 56px;
        }

        .consult-banner::before {
          content: '⚖';
          position: absolute; right: 48px; top: 50%;
          transform: translateY(-50%);
          font-size: 5rem; opacity: 0.04;
          pointer-events: none;
        }

        .consult-banner-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 3vw, 1.75rem);
          font-weight: 700; margin: 0 0 6px;
        }

        .consult-banner-text p {
          font-size: 0.82rem; opacity: 0.5; font-weight: 300; margin: 0;
        }

        .consult-actions {
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: wrap;
          row-gap: 12px;
        }

        .consult-btn {
          background: white; color: #172e4e;
          font-family: 'Poppins', sans-serif;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 16px 36px; border: none; cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.3s, transform 0.2s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          text-decoration: none;
        }
        .consult-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        .phone-badge {
          display: flex; align-items: center; gap: 12px;
          border-left: 1px solid rgba(255,255,255,0.3);
          padding-left: 28px;
        }

        .phone-icon {
          width: 44px; height: 44px;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; flex-shrink: 0;
        }

        /* ── Main Grid ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr;
          gap: 52px;
          position: relative; z-index: 1;
          margin-bottom: 0;
        }

        /* ── Brand col ── */
        .brand-logo {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 900; letter-spacing: -0.02em;
          line-height: 1; margin-bottom: 6px;
        }

        .logo-tagline {
          font-size: 0.68rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: #fff;
          font-weight: 500; margin-bottom: 20px;
        }

        .brand-desc {
          font-size: 0.82rem; line-height: 1.85; opacity: 0.5;
          font-weight: 300; max-width: 260px;
          border-left: 2px solid rgba(255,255,255,0.35);
          padding-left: 14px; margin-bottom: 28px;
        }

        .bar-number {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem;
          border: 1px solid rgba(255,255,255,0.25);
          padding: 8px 14px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 12px;
        }

        .bar-dot { width: 5px; height: 5px; border-radius: 50%; background: #fff; opacity: 0.6; }

        .social-row { display: flex; gap: 8px; flex-wrap: wrap; }

        .social-btn {
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 0.8rem; font-weight: 600;
          font-family: 'Poppins', sans-serif; color: white;
          background: transparent;
          transition: background 0.3s, border-color 0.3s;
          text-decoration: none;
        }
        .social-btn:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.5); }

        /* ── Nav cols ── */
        .col-heading {
          font-size: 0.95rem; font-weight: 700; margin-bottom: 20px;
          letter-spacing: 0.01em;
          display: flex; align-items: center; gap: 10px;
        }
        .col-heading::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.4), transparent);
        }

        .col-link {
          font-size: 0.82rem; font-weight: 300; opacity: 0.6;
          cursor: pointer; display: flex; align-items: center;
          gap: 8px; padding: 5px 0;
          transition: opacity 0.25s, gap 0.25s;
          color: #fff;
          text-decoration: none;
        }
        .col-link::before {
          content: '›'; color: #fff; font-size: 1rem;
          opacity: 0; transition: opacity 0.25s; line-height: 1;
        }
        .col-link:hover { opacity: 1; gap: 12px; }
        .col-link:hover::before { opacity: 1; }

        /* ── Newsletter ── */
        .newsletter-section {
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 36px 0;
          display: flex; align-items: center;
          justify-content: space-between; gap: 32px;
          flex-wrap: wrap; position: relative; z-index: 1;
          margin-top: 52px;
        }

        .nl-label {
          font-size: 0.7rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: #fff;
          font-weight: 500; margin-bottom: 6px;
        }

        .nl-title { font-size: 1.1rem; font-weight: 700; margin: 0; }

        .email-row {
          display: flex;
          min-width: 280px;
          max-width: 420px;
          flex: 1;
        }

        .email-input {
          flex: 1; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); border-right: none;
          color: white; font-family: 'Poppins', sans-serif;
          font-size: 0.82rem; padding: 13px 18px; outline: none;
          transition: border-color 0.3s, background 0.3s;
          min-width: 0;
        }
        .email-input::placeholder { color: rgba(255,255,255,0.3); }
        .email-input:focus { border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.07); }

        .nl-btn {
          background: #fff; color: #172e4e;
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 13px 22px; border: none; cursor: pointer;
          transition: opacity 0.3s; white-space: nowrap;
        }
        .nl-btn:hover { opacity: 0.85; }

        .success-msg {
          font-size: 0.82rem; color: #fff; padding: 13px 0;
          animation: fadeUp 0.3s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Bottom bar ── */
        .bottom-bar {
          display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap;
          gap: 16px; position: relative; z-index: 1;
          padding: 24px 0 8px;
        }

        .bottom-copy {
          font-size: 0.72rem; opacity: 0.3; font-weight: 300; margin: 0;
        }

        .bottom-right {
          display: flex; gap: 20px; align-items: center; flex-wrap: wrap;
        }

        .certifications { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }

        .cert-badge {
          font-size: 0.68rem; opacity: 0.35;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 5px 10px; letter-spacing: 0.05em; font-weight: 300;
        }

        .bottom-link {
          font-size: 0.72rem; opacity: 0.4; cursor: pointer;
          transition: opacity 0.25s; font-weight: 300;
          color: #fff; text-decoration: none;
        }
        .bottom-link:hover { opacity: 0.8; }

        .gold-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          position: relative; z-index: 1;
        }

        .footer-credit {
          text-align: center; padding: 12px;
          font-size: 0.68rem; opacity: 0.2;
          font-weight: 300; position: relative; z-index: 1;
        }

        /* ═══════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ═══════════════════════════════════ */

        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1fr; gap: 36px; }
          .consult-banner { padding: 32px 36px; }
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .brand-desc { max-width: 100%; }
          .consult-banner { padding: 28px 28px; gap: 24px; }
          .consult-banner::before { display: none; }
        }

        @media (max-width: 768px) {
          .footer-inner { padding: 48px 6% 32px; }
          .consult-banner { flex-direction: column; align-items: flex-start; }
          .phone-badge { border-left: none; padding-left: 0; }
          .newsletter-section { flex-direction: column; align-items: flex-start; gap: 20px; }
          .email-row { min-width: 100%; max-width: 100%; width: 100%; }
          .bottom-bar { flex-direction: column; align-items: flex-start; gap: 12px; }
          .bottom-right { flex-direction: column; align-items: flex-start; gap: 12px; }
        }

        @media (max-width: 600px) {
          .footer-inner { padding: 40px 5% 28px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
          .consult-btn { width: 100%; text-align: center; clip-path: none; }
          .consult-actions { width: 100%; flex-direction: column; align-items: flex-start; }
          .phone-badge { width: 100%; }
          .newsletter-section { margin-top: 36px; }
        }

        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .consult-banner { padding: 24px 20px; }
          .footer-grid > div:first-child .brand-desc { max-width: 100%; }
        }

        @media (max-width: 380px) {
          .footer-inner { padding: 32px 4% 24px; }
          .brand-logo { font-size: 1.3rem; }
          .nl-title { font-size: 1rem; }
          .certifications { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="adv-footer">
        <div className="gold-topbar" />
        <div className="texture" />
        <div className="blob1" />
        <div className="blob2" />

        <div className="footer-inner">

          {/* Consultation Banner */}
          <div className="consult-banner">
            <div className="consult-banner-text">
              <h3>Need Legal Assistance?</h3>
              <p>Speak to an expert advocate — confidential &amp; obligation-free.</p>
            </div>
            <div className="consult-actions">
              <Link to="/contact" className="consult-btn">Book Free Consultation</Link>
              <div className="phone-badge">
                <div className="phone-icon">📞</div>
                <div>
                  <p style={{ fontSize: "0.68rem", opacity: 0.5, margin: "0 0 2px", fontWeight: 300 }}>Call Us Anytime</p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, margin: 0, fontFamily: "'Playfair Display', serif" }}>+91 98188 03706</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid — 3 columns (Brand + Practice Areas + Quick Links) */}
          <div className="footer-grid">

            {/* Brand */}
            <div>
              <div className="brand-logo adv-title">M.S Associates &amp; Consultancy</div>
              <p className="logo-tagline">Advocates &amp; Legal Consultants</p>
              <p className="brand-desc">
10 years of legal expertise. Fearless representation. Trusted advocacy. We fight for your rights with dedication, honesty, and proven courtroom strength.              </p>
           
           
              <div className="social-row">
                {socials.map(s => (
                  <a key={s.name} href={`#${s.name.toLowerCase()}`} className="social-btn" title={s.name}>{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="col-heading adv-title">Practice Areas</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {practiceAreas.map(item => (
                  <li key={item.label}>
                    <Link to={item.href} className="col-link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="col-heading adv-title">Quick Links</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {quickLinks.map(item => (
                  <li key={item.label}>
                    <Link to={item.href} className="col-link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Newsletter */}
          <div className="newsletter-section">
            <div>
              <p className="nl-label">Legal Insights Newsletter</p>
              <h4 className="nl-title adv-title">Stay informed on your rights.</h4>
            </div>
            <div className="email-row">
              {subscribed ? (
                <p className="success-msg">✓ Subscribed. Expect insights in your inbox.</p>
              ) : (
                <>
                  <input
                    className="email-input"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                  />
                  <button className="nl-btn" onClick={handleSubscribe}>Subscribe</button>
                </>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bottom-bar">
            <p className="bottom-copy">
              © 2026 M.S &amp; Associates. All Rights Reserved. | This website is for informational purposes only and does not constitute legal advice.
            </p>
            <div className="bottom-right">
              <div className="certifications">
                <span className="cert-badge">ISO 9001:2015</span>
                <span className="cert-badge">DPIIT Recognised</span>
              </div>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Disclaimer", href: "/disclaimer" },
                  { label: "Terms of Use", href: "/terms" },
                ].map(item => (
                  <a key={item.label} href={item.href} className="bottom-link">{item.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="gold-divider" />
        <div className="footer-credit">Designed with ⚖ for those who seek justice</div>
      </footer>
    </>
  );
};

export default Footer;