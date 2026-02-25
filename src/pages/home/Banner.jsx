export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "680px",
        overflow: "hidden",
      }}
    >
      {/* ── Full Width Background Image ── */}
      <div style={{ position: "absolute", inset: 0 }}>
      
        <img
          src="/home-banner.png"
          alt="Hero Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cotain",
            objectPosition: "center top",
            display: "block",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* Dark overlay - left side zyada dark, right side transparent */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,20,35,0.92) 0%, rgba(10,20,35,0.75) 50%, rgba(10,20,35,0.25) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,20,35,0.6) 0%, transparent 40%)",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(211,159,23,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(211,159,23,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Gold Left Bar ── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "5px",
          background:
            "linear-gradient(to bottom, transparent, #d39f17 30%, #d39f17 70%, transparent)",
          zIndex: 3,
        }}
      />

      {/* ── Left Side Content Overlay ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 5%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "620px" }}>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(211,159,23,0.12)",
              border: "1px solid rgba(211,159,23,0.35)",
              borderRadius: "50px",
              padding: "6px 18px",
              marginBottom: "28px",
              animation: "slideLeft 0.9s ease forwards",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#d39f17",
              }}
            />
            <span
              style={{
                color: "#d39f17",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: "700",
              }}
            >
              Trusted Legal Excellence Since 1999
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: "900",
              lineHeight: "1.1",
              color: "#fff",
              marginBottom: "22px",
              marginTop: 0,
              animation: "fadeUp 0.9s 0.25s ease both",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Justice Is Not
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #d39f17, #f0c040, #c8960f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Just a Word.
            </span>
            <br />
            It's Our Promise.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.05rem",
              lineHeight: "1.85",
              marginBottom: "40px",
              maxWidth: "500px",
              fontWeight: "300",
              animation: "fadeUp 0.9s 0.45s ease both",
              textShadow: "0 1px 10px rgba(0,0,0,0.4)",
            }}
          >
            M.S. Advocate brings decades of unmatched legal expertise, fighting
            relentlessly to protect your rights, your family, and your future
            across all courts.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              animation: "fadeUp 0.9s 0.65s ease both",
            }}
          >
            <button
              style={{
                padding: "14px 36px",
                fontSize: "0.875rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
                color: "#fff",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg, #d4af37, #b8860b)",
                boxShadow: "0 8px 30px rgba(211,159,23,0.35)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px) scale(1.04)";
                e.target.style.boxShadow = "0 12px 40px rgba(211,159,23,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 30px rgba(211,159,23,0.35)";
              }}
            >
              Free Consultation →
            </button>

            <button
              style={{
                padding: "14px 36px",
                fontSize: "0.875rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
                color: "#d4af37",
                borderRadius: "8px",
                border: "2px solid rgba(212,175,55,0.6)",
                cursor: "pointer",
                background: "rgba(212,175,55,0.08)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#d4af37";
                e.target.style.color = "#fff";
                e.target.style.transform = "scale(1.04)";
                e.target.style.borderColor = "#d4af37";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(212,175,55,0.08)";
                e.target.style.color = "#d4af37";
                e.target.style.transform = "scale(1)";
                e.target.style.borderColor = "rgba(212,175,55,0.6)";
              }}
            >
              Our Services
            </button>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "56px",
              animation: "fadeUp 0.9s 0.85s ease both",
            }}
          >
            {[
              { num: "25+", label: "Years Experience" },
              { num: "5000+", label: "Cases Won" },
              { num: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    color: "#d39f17",
                    fontSize: "1.6rem",
                    fontWeight: "900",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginTop: "6px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "float 2.5s ease-in-out infinite",
          zIndex: 3,
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: "1px",
            height: "44px",
            background:
              "linear-gradient(to bottom, rgba(211,159,23,0.7), transparent)",
          }}
        />
      </div>
    </section>
  );
}