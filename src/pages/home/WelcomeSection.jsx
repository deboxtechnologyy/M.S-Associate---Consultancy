const TILES = [
  { icon: "🏆", title: "Award Winning",  sub: "Recognized by Bar Council" },
  { icon: "🤝", title: "Client First",   sub: "Your success is our mission" },
  { icon: "📚", title: "Deep Research",  sub: "Every detail matters" },
  { icon: "⚡", title: "Swift Action",   sub: "Timely legal solutions" },
];

export default function WelcomeSection() {
  return (
    <section id="home-welcome" style={{ padding: "100px 5%", background: "#fff" }}>
      <div style={{
        maxWidth: "1300px", margin: "0 auto",
        display: "flex", gap: "80px", alignItems: "center", flexWrap: "wrap",
      }}>

     
        <div style={{ flex: "1", minWidth: "280px" }}>
          <div style={{ width: "44px", height: "4px", background: "linear-gradient(to right, #d39f17, #f0c040)", borderRadius: "2px", marginBottom: "14px" }} />
          <p className="section-tag ,playfair">Welcome to Our Firm</p>

          <h2 className="playfair" style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: "700",
            color: "#172e4e", lineHeight: "1.2", marginBottom: "24px", marginTop: 0,
          }}>
            Your Trusted Partner<br />in Legal Matters
          </h2>

          <p style={{ color: "#555", lineHeight: "1.9", marginBottom: "18px", fontSize: "0.97rem",font:"Poppins" }}>
            At M.S. Advocate, we believe that every individual deserves access to superior legal
            representation. Founded on pillars of integrity, diligence, and excellence, our firm has
            been a beacon of hope for thousands of clients navigating complex legal challenges.
          </p>
          <p style={{ color: "#555", lineHeight: "1.9", marginBottom: "36px", fontSize: "0.97rem" }}>
            With a proven track record spanning over two decades, we combine deep legal knowledge
            with compassionate client service — ensuring your rights are protected at every step.
          </p>

       <button
  className="bg-[#d39f17] hover:bg-[#b8860b] text-white  transition duration-300"
  style={{ padding: "14px 32px", fontSize: "0.85rem" }}
>
  Learn More About Us
</button>
        </div>

        {/* ── Right: Feature Tiles ── */}
        <div style={{
          flex: "1", minWidth: "280px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px",
        }}>
          {TILES.map(({ icon, title, sub }) => (
            <div key={title} style={{
              padding: "28px 24px", borderRadius: "8px",
              background: "#fafafa",
              border: "1px solid rgba(23,46,78,0.08)",
              transition: "all 0.3s", cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#d39f17";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(23,46,78,0.09)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(23,46,78,0.08)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>{icon}</div>
              <div className="playfair" style={{ fontWeight: "600", color: "#172e4e", fontSize: "1rem", marginBottom: "6px" }}>{title}</div>
              <div style={{ color: "#888", fontSize: "0.8rem" }}>{sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}