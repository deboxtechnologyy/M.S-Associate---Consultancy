import { useState } from "react";

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
    "Criminal Defense",
    "Family Law",
    "Civil Litigation",
    "Corporate Law",
    "Property Disputes",
    "Consumer Protection",
  ];

  const quickLinks = [
    "About the Firm",
    "Our Advocates",
    "Case Results",
    "Legal Blog",
    "FAQ",
    "Contact Us",
  ];

  const resources = [
    "Free Consultation",
    "Client Portal",
    "Court Dates",
    "Legal Aid",
    "Testimonials",
    "Careers",
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');

       

        .adv-footer {
          background-color: #172e4e;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .adv-title {
          font-family: 'Playfair Display', serif;
        }

        /* Golden accent line top */
        .adv-footer .gold-topbar {
          height: 4px;
          background: #fff;
        }

        /* Texture overlay */
        .adv-footer .texture {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* Glow blobs */
        .adv-footer .blob1 {
          position: absolute;
          top: -120px;
          right: -120px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .adv-footer .blob2 {
          position: absolute;
          bottom: 0;
          left: -80px;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Consultation banner */
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
        }

        .consult-banner::before {
          content: '⚖';
          position: absolute;
          right: 48px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 5rem;
          opacity: 0.04;
          pointer-events: none;
        }

        .consult-btn {
          background: white;
          color: #172e4e;
          font-family: 'Poppins', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 16px 36px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.3s, transform 0.2s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }

        .consult-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .phone-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          border-left: 1px solid rgba(255,255,255,0.3);
          padding-left: 28px;
        }

        .phone-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        /* Main grid */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 52px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; }
          .consult-banner { padding: 28px 24px; }
          .phone-badge { border-left: none; padding-left: 0; }
        }

        .brand-logo {
          font-size: 1.9rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .logo-tagline {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .brand-desc {
          font-size: 0.82rem;
          line-height: 1.85;
          opacity: 0.5;
          font-weight: 300;
          max-width: 260px;
          border-left: 2px solid rgba(255,255,255,0.35);
          padding-left: 14px;
          margin-bottom: 28px;
        }

        .bar-number {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          border: 1px solid rgba(255,255,255,0.25);
          padding: 8px 14px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 24px;
        }

        .bar-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.6;
        }

        .social-row {
          display: flex;
          gap: 8px;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          color: white;
          background: transparent;
          transition: background 0.3s, border-color 0.3s;
        }

        .social-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.5);
        }

        .col-heading {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .col-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.4), transparent);
        }

        .col-link {
          font-size: 0.82rem;
          font-weight: 300;
          opacity: 0.6;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 0;
          transition: opacity 0.25s, gap 0.25s;
          position: relative;
        }

        .col-link::before {
          content: '›';
          color: #fff;
          font-size: 1rem;
          opacity: 0;
          transition: opacity 0.25s;
          line-height: 1;
        }

        .col-link:hover {
          opacity: 1;
          gap: 12px;
        }

        .col-link:hover::before {
          opacity: 1;
        }

        /* Newsletter */
        .newsletter-section {
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 36px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .nl-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .nl-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .email-row {
          display: flex;
          min-width: 320px;
          max-width: 420px;
          flex: 1;
        }

        .email-input {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-right: none;
          color: white;
          font-family: 'Poppins', sans-serif;
          font-size: 0.82rem;
          padding: 13px 18px;
          outline: none;
          transition: border-color 0.3s, background 0.3s;
        }

        .email-input::placeholder { color: rgba(255,255,255,0.3); }
        .email-input:focus {
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.07);
        }

        .nl-btn {
          background: #fff;
          color: #172e4e;
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 13px 22px;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s;
          white-space: nowrap;
        }

        .nl-btn:hover { opacity: 0.85; }

        .success-msg {
          font-size: 0.82rem;
          color: #fff;
          padding: 13px 0;
          animation: fadeUp 0.3s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Bottom bar */
        .bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .bottom-link {
          font-size: 0.72rem;
          opacity: 0.4;
          cursor: pointer;
          transition: opacity 0.25s;
          font-weight: 300;
        }

        .bottom-link:hover { opacity: 0.8; }

        .certifications {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cert-badge {
          font-size: 0.68rem;
          opacity: 0.35;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 5px 10px;
          letter-spacing: 0.05em;
          font-weight: 300;
        }

        .gold-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          position: relative;
          z-index: 1;
        }
      `}</style>

      <footer className="adv-footer">
        <div className="gold-topbar" />
        <div className="texture" />
        <div className="blob1" />
        <div className="blob2" />

        {/* Free Consultation Banner */}
        <div className="consult-banner">
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
              Your First Step Toward Justice
            </p>
            <h2 className="adv-title" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 700, lineHeight: 1.2 }}>
              Get a Free Legal Consultation
            </h2>
            <p style={{ fontSize: "0.8rem", opacity: 0.5, fontWeight: 300, marginTop: "8px" }}>
              Speak with a senior advocate — no obligations, no fees.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
            <div className="phone-badge">
              <div className="phone-icon">📞</div>
              <div>
                <p style={{ fontSize: "0.68rem", opacity: 0.45, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>Call Now</p>
                <p className="adv-title" style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "0.02em" }}>+91 98765 43210</p>
              </div>
            </div>
            <button className="consult-btn">Book Consultation</button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "56px 40px 40px" }}>
          <div className="footer-grid">

            {/* Brand */}
            <div>
              <div className="brand-logo adv-title">
                Sharma &amp; Associates
              </div>
              <p className="logo-tagline">Advocates &amp; Legal Consultants</p>

              <p className="brand-desc">
                With over 25 years of courtroom experience, we stand as a pillar of legal excellence — delivering justice with integrity, precision, and unwavering commitment to our clients.
              </p>

              <div className="bar-number">
                <span className="bar-dot" />
                Bar Council Reg. No. D/987/2000
              </div>

              <div className="bar-number" style={{ marginBottom: "24px" }}>
                <span className="bar-dot" />
                Supreme Court of India — Enrolled
              </div>

              <div className="social-row">
                {socials.map(s => (
                  <button key={s.name} className="social-btn" title={s.name}>{s.icon}</button>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="col-heading adv-title">Practice Areas</h3>
              <ul style={{ listStyle: "none" }}>
                {practiceAreas.map(item => (
                  <li key={item} className="col-link">{item}</li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="col-heading adv-title">Quick Links</h3>
              <ul style={{ listStyle: "none" }}>
                {quickLinks.map(item => (
                  <li key={item} className="col-link">{item}</li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="col-heading adv-title">Resources</h3>
              <ul style={{ listStyle: "none" }}>
                {resources.map(item => (
                  <li key={item} className="col-link">{item}</li>
                ))}
              </ul>

              {/* Office Hours */}
              <div style={{ marginTop: "28px", padding: "16px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)" }}>
                <p style={{ fontSize: "0.68rem", color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "10px" }}>Office Hours</p>
                {[
                  { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
                  { day: "Sunday", time: "By Appointment" },
                ].map(h => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "6px" }}>
                    <span style={{ opacity: 0.45, fontWeight: 300 }}>{h.day}</span>
                    <span style={{ opacity: 0.75, fontWeight: 400 }}>{h.time}</span>
                  </div>
                ))}
              </div>
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
          <div style={{ padding: "24px 0 8px" }} className="bottom-bar">
            <p style={{ fontSize: "0.72rem", opacity: 0.3, fontWeight: 300 }}>
              © 2025 Sharma &amp; Associates. All Rights Reserved. | This website is for informational purposes only and does not constitute legal advice.
            </p>

            <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
              <div className="certifications">
                <span className="cert-badge">ISO 9001:2015</span>
                <span className="cert-badge">DPIIT Recognised</span>
              </div>
              {["Privacy Policy", "Disclaimer", "Terms of Use"].map(item => (
                <span key={item} className="bottom-link">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider" />
        <div style={{ textAlign: "center", padding: "12px", fontSize: "0.68rem", opacity: 0.2, fontWeight: 300, position: "relative", zIndex: 1 }}>
          Designed with ⚖ for those who seek justice
        </div>
      </footer>
    </>
  );
};

export default Footer;