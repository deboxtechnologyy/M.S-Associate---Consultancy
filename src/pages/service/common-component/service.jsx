// ── Reusable Components for Divorce Service Page ──────────────────────────────

// ── SectionHeading ─────────────────────────────────────────────────────────────
export function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span
          style={{
            width: "36px",
            height: "3px",
            background: "#d39f17",
            borderRadius: "2px",
            display: "block",
          }}
        />
        <span
          style={{
            width: "22px",
            height: "3px",
            background: "#172e4e",
            borderRadius: "2px",
            display: "block",
          }}
        />
      </div>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#172e4e",
          fontWeight: 700,
          fontSize: "2.25rem",
          lineHeight: 1.15,
        }}
      >
        {children}
      </h2>
    </div>
  );
}

// ── StatCard ───────────────────────────────────────────────────────────────────
export function StatCard({ num, label }) {
  return (
    <div
      className="stat-card text-center py-7 rounded-2xl relative overflow-hidden cursor-default transition-all duration-300"
      style={{
        background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)",
        boxShadow: "0 8px 24px rgba(23,46,78,0.2)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%,rgba(211,159,23,0.12) 0%,transparent 60%)",
        }}
      />
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#d39f17",
          fontWeight: 700,
          fontSize: "2rem",
          position: "relative",
        }}
      >
        {num}
      </p>
      <p
        style={{
          color: "#bdd4f0",
          fontSize: "0.68rem",
          fontWeight: 400,
          marginTop: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          position: "relative",
        }}
      >
        {label}
      </p>
    </div>
  );
}

// ── HeroStat ───────────────────────────────────────────────────────────────────
// Inline stat used inside the hero banner
export function HeroStat({ num, label, showDivider }) {
  return (
    <div className="text-center" style={{ position: "relative" }}>
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#d39f17",
          fontWeight: 700,
          fontSize: "1.75rem",
          lineHeight: 1,
        }}
      >
        {num}
      </p>
      <p
        style={{
          color: "rgba(189,212,240,0.75)",
          fontSize: "0.68rem",
          fontWeight: 400,
          marginTop: "5px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </p>
      {showDivider && (
        <div
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            width: "1px",
            height: "36px",
            background: "rgba(255,255,255,0.2)",
            transform: "translateY(-50%)",
          }}
        />
      )}
    </div>
  );
}

// ── GroundCard ─────────────────────────────────────────────────────────────────
export function GroundCard({ title, desc }) {
  return (
    <div
      className="ground-card rounded-2xl p-6 transition-all duration-300 flex flex-col gap-3"
      style={{ border: "1.5px solid #dce5f0", background: "#fff", cursor: "default" }}
    >
      <div className="flex items-center gap-3">
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#172e4e",
            fontWeight: 700,
            fontSize: "1rem",
          }}
        >
          {title}
        </h3>
      </div>
      <div
        style={{
          height: "1px",
          background: "linear-gradient(50deg,#d39f17,transparent)",
          opacity: 0.5,
        }}
      />
      <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.7", fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}

// ── ServiceCard ────────────────────────────────────────────────────────────────
export function ServiceCard({ title, desc, idx }) {
  return (
    <div
      className="service-card rounded-2xl overflow-hidden transition-all duration-300"
      style={{ border: "1.5px solid #dce5f0", background: "#fff" }}
    >
      <div
        style={{
          height: "3px",
          background:
            idx % 2 === 0
              ? "linear-gradient(90deg,#172e4e,#d39f17)"
              : "linear-gradient(90deg,#d39f17,#172e4e)",
        }}
      />
      <div className="flex gap-4 p-6">
        <div>
          <h3
            className="mb-1.5"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#172e4e",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            {title}
          </h3>
          <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.7", fontWeight: 300 }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── WhyChooseUsCard ────────────────────────────────────────────────────────────
export function WhyChooseUsCard({ title, desc }) {
  return (
    <div
      className="rounded-2xl p-5 flex gap-4 items-start transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
        e.currentTarget.style.borderColor = "rgba(211,159,23,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      <div>
        <h3
          className="text-white mb-1"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem" }}
        >
          {title}
        </h3>
        <p style={{ color: "#bdd4f0", fontSize: "0.875rem", fontWeight: 300, lineHeight: "1.6" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// ── TableOfContentsSidebar ─────────────────────────────────────────────────────
export function TableOfContentsSidebar({ items, activeSection, onScrollTo }) {
  return (
    <aside
      className="hidden lg:block flex-shrink-0"
      style={{ width: "272px", position: "sticky", top: "32px", alignSelf: "flex-start" }}
    >
      {/* TOC Nav */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid #dce5f0", boxShadow: "0 8px 32px rgba(23,46,78,0.1)" }}
      >
        <div
          className="px-5 py-4 flex items-center gap-2"
          style={{ background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)" }}
        >
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d39f17" }} />
          <p className="text-white text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>
            On This Page
          </p>
        </div>
        <nav className="bg-white">
          {items.map(({ id, label }, i) => (
            <button
              key={id}
              onClick={() => onScrollTo(id)}
              className="toc-btn w-full text-left flex items-center gap-3 px-5 py-3 transition-all duration-200"
              style={{
                borderBottom: "1px solid #f0f4f9",
                background:
                  activeSection === id
                    ? "linear-gradient(90deg,#f0f5ff,#f8faff)"
                    : "transparent",
                borderLeft: activeSection === id ? "3px solid #172e4e" : "3px solid transparent",
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 transition-all duration-300"
                style={{
                  background: activeSection === id ? "#172e4e" : "#e8edf4",
                  color: activeSection === id ? "#fff" : "#172e4e",
                  fontWeight: 700,
                  fontSize: "10px",
                }}
              >
                {i + 1}
              </span>
              <span
                className="text-sm transition-all duration-200"
                style={{
                  fontWeight: activeSection === id ? 600 : 400,
                  color: activeSection === id ? "#172e4e" : "#5a6a7e",
                }}
              >
                {label}
              </span>
              {activeSection === id && (
                <span
                  className="ml-auto rounded-full flex-shrink-0"
                  style={{ background: "#d39f17", width: "4px", height: "18px" }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Contact Card */}
      <div
        className="mt-5 rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(211,159,23,0.3)",
          boxShadow: "0 8px 24px rgba(23,46,78,0.1)",
        }}
      >
        <div
          className="p-6 text-center"
          style={{ background: "linear-gradient(135deg,#172e4e 0%,#1e3d66 100%)" }}
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
            style={{
              background: "rgba(211,159,23,0.15)",
              border: "1px solid rgba(211,159,23,0.3)",
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>📞</span>
          </div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#d39f17", fontWeight: 600 }}>
            Free Consultation
          </p>
          <p
            className="text-xl font-bold text-white mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Talk to Us
          </p>
          <p className="text-xs mb-5" style={{ color: "#bdd4f0", fontWeight: 300 }}>
            Available Mon–Sat, 9am–7pm
          </p>
          <a
            href="tel:+911234567890"
            className="block w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ background: "#d39f17", color: "#172e4e" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e5ad1e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#d39f17")}
          >
            +91 12345 67890
          </a>
        </div>
        <div className="px-5 py-4 text-center" style={{ background: "#f9f5ee" }}>
          <p className="text-xs" style={{ color: "#6b7280" }}>
            Or email us directly
          </p>
          <button className="mt-1 text-xs font-semibold underline" style={{ color: "#172e4e" }}>
            hello@sharmalaw.in
          </button>
        </div>
      </div>
    </aside>
  );
}

// ── Testimonial ────────────────────────────────────────────────────────────────
export function Testimonial({ quote, name, detail, initial }) {
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#f0f5ff 0%,#ffffff 100%)",
        border: "1.5px solid #dce5f0",
        boxShadow: "0 8px 32px rgba(23,46,78,0.06)",
      }}
    >
      <div
        style={{ height: "4px", background: "linear-gradient(90deg,#172e4e,#d39f17,#172e4e)" }}
      />
      <div className="p-8 md:p-12">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#172e4e", fontWeight: 600 }}>
            Client Testimonial
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#172e4e",
              fontWeight: 700,
              fontSize: "1.75rem",
            }}
          >
            Words From Our Clients
          </h2>
          <div className="flex justify-center gap-0.5 mt-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#f59e0b", fontSize: "1rem" }}>
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <span
            className="absolute select-none"
            style={{
              top: "-28px",
              left: "-4px",
              fontSize: "7rem",
              lineHeight: 1,
              color: "#172e4e",
              opacity: 0.06,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            "
          </span>
          <blockquote
            className="text-lg md:text-xl text-center leading-relaxed relative z-10"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#2d3e55",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {quote}
          </blockquote>
          <span
            className="absolute select-none"
            style={{
              bottom: "-28px",
              right: "-4px",
              fontSize: "7rem",
              lineHeight: 1,
              color: "#172e4e",
              opacity: 0.06,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            "
          </span>
        </div>
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="relative">
            <div
              className="rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg,#172e4e,#1e3d66)",
                fontFamily: "'Playfair Display', serif",
                boxShadow: "0 4px 16px rgba(23,46,78,0.3)",
              }}
            >
              {initial}
            </div>
            <div
              className="absolute flex items-center justify-center rounded-full"
              style={{
                bottom: "-2px",
                right: "-2px",
                width: "18px",
                height: "18px",
                background: "#d39f17",
                fontSize: "10px",
                color: "#fff",
              }}
            >
              ✓
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "#172e4e" }}>
              {name}
            </p>
            <p className="text-xs" style={{ color: "#9ca3af", fontWeight: 300 }}>
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}