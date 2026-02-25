export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Poppins:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.4); }
        }
        @keyframes barGrow {
          from { height: 0; }
          to   { height: 100%; }
        }

        .hero-btn-primary {
          padding: 15px 40px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a1423;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #f0c040 0%, #d4af37 50%, #b8860b 100%);
          box-shadow: 0 6px 28px rgba(211,159,23,0.4);
          transition: all 0.3s ease;
          font-family: 'Raleway', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .hero-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.25) 60%, transparent 70%);
          background-size: 200% auto;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 40px rgba(211,159,23,0.55);
        }
        .hero-btn-primary:hover::after {
          opacity: 1;
          animation: shimmer 0.6s linear;
        }

        .hero-btn-secondary {
          padding: 13px 40px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4af37;
          border-radius: 3px;
          border: 1px solid rgba(212,175,55,0.5);
          cursor: pointer;
          background: transparent;
          transition: all 0.3s ease;
          font-family: 'Raleway', sans-serif;
        }
        .hero-btn-secondary:hover {
          background: rgba(212,175,55,0.1);
          border-color: #d4af37;
          transform: translateY(-2px);
        }

        .stat-item {
          position: relative;
          padding-left: 18px;
        }
        .stat-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 2px;
          background: linear-gradient(to bottom, #d39f17, transparent);
        }
      `}</style>

      <section
        id="home"
        aria-label="Hero - M.S. Advocate Law Firm"
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "700px",
          overflow: "hidden",
          fontFamily: "'Raleway', sans-serif",
          backgroundColor: "#0a1423",
        }}
      >
        {/* ── Background Image ── */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/home-banner.png"
            alt="M.S. Advocate Law Office"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />

          {/* Cinematic left-heavy gradient */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, rgba(6,12,22,0.97) 0%, rgba(10,20,35,0.88) 40%, rgba(10,20,35,0.45) 70%, rgba(10,20,35,0.15) 100%)",
          }} />

          {/* Bottom vignette */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(6,12,22,0.8) 0%, transparent 45%)",
          }} />

          {/* Subtle noise texture */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.025,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }} />
        </div>

        {/* ── Gold Left Accent Bar ── */}
        <div style={{
          position: "absolute",
          left: 0, top: "15%", bottom: "15%",
          width: "4px",
          background: "linear-gradient(to bottom, transparent, #d39f17 30%, #f0c040 60%, transparent)",
          zIndex: 3,
          animation: "barGrow 1.2s ease forwards",
        }} />

        {/* ── Decorative Corner ── */}
        <div style={{
          position: "absolute",
          top: "40px",
          left: "24px",
          width: "60px",
          height: "60px",
          borderTop: "1px solid rgba(212,175,55,0.3)",
          borderLeft: "1px solid rgba(212,175,55,0.3)",
          zIndex: 3,
        }} />

        {/* ── Main Content ── */}
        <div style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 7% 0 8%",
          maxWidth: "1500px",
          margin: "0 auto",
        }}>
          <div style={{ maxWidth: "900px" }}>

     

            {/* SEO-friendly H1 */}
            <h1
              itemProp="name"
              style={{
                fontFamily: "'playfair display', serif",
                fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
                fontWeight: "700",
                lineHeight: "1.08",
                color: "#fff",
                marginBottom: "8px",
                marginTop: -80,
                animation: "fadeUp 0.9s 0.2s ease both",
                letterSpacing: "-0.01em",
              }}
            >
              Expert Legal Advocacy
            </h1>
            <h2
              style={{
                fontFamily: "'playfair display', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: "300",
                lineHeight: "1.1",
                marginTop: 0,
                marginBottom: "28px",
                animation: "fadeUp 0.9s 0.3s ease both",
                letterSpacing: "0.01em",
              }}
            >
              <span style={{
                background: "linear-gradient(120deg, #c8960f, #f0c040 45%, #d39f17)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Justice Is Our Promise.
              </span>
            </h2>

            {/* Thin divider */}
            <div style={{
              width: "48px",
              height: "1px",
              background: "linear-gradient(to right, #d39f17, transparent)",
              marginBottom: "28px",
              animation: "fadeUp 0.9s 0.35s ease both",
            }} />

            {/* Subtitle — keyword-rich */}
            <p
              itemProp="description"
              style={{
                color: "rgba(255,255,255,0.65)",
                
                fontSize: "0.96rem",
                lineHeight: "1.9",
                marginBottom: "44px",
                maxWidth: "480px",
                fontWeight: "400",
                animation: "fadeUp 0.9s 0.45s ease both",
                letterSpacing: "0.02em",
              }}
            >
              M.S. Advocate — High Court & District Court lawyer with 25+ years of
              experience in criminal, civil, family, and property law. Protecting your
              rights across all courts with proven results.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              animation: "fadeUp 0.9s 0.6s ease both",
            }}>
              <button className="hero-btn-primary" aria-label="Book a free legal consultation">
                Free Consultation →
              </button>
              <button className="hero-btn-secondary" aria-label="View our legal services">
                Our Services
              </button>
            </div>

         
          </div>
        </div>

 
      </section>
    </>
  );
}