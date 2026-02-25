import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    name: "Ramesh Kumar",
    role: "Business Owner",
    text: "M.S Advocate handled my property dispute with exceptional skill. The case was resolved in our favor within months. Truly outstanding legal acumen.",
  },
  {
    name: "Priya Sharma",
    role: "Corporate Client",
    text: "Professional, thorough, and deeply knowledgeable. They navigated a complex contractual dispute with precision and secured the best outcome for us.",
  },
  {
    name: "Anil Mehta",
    role: "Individual Client",
    text: "During the most difficult time of my life, M.S Advocate provided not just legal expertise but genuine compassion. I'm forever grateful.",
  },
  {
    name: "Sneha Verma",
    role: "Entrepreneur",
    text: "Highly strategic and detail-oriented. M.S Advocate guided us through a complicated business litigation matter and ensured a smooth resolution.",
  },
  {
    name: "Rahul Singh",
    role: "Startup Founder",
    text: "Their legal advice helped protect our startup from major compliance risks. Clear communication and excellent courtroom representation.",
  },
  {
    name: "Neha Kapoor",
    role: "Family Law Client",
    text: "Supportive, honest, and extremely professional. M.S Advocate handled my family case with sensitivity and strong legal expertise.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" style={{ padding: "100px 5%", background: "#fff" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-tag">Client Stories</p>
          <h2 className="playfair" style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: "700",
            color: "#172e4e", marginBottom: "16px", marginTop: 0,
          }}>
            What Our Clients Say
          </h2>
          <div className="section-divider" />
        </div>

        {/* ── Testimonial Card ── */}
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              display: i === active ? "block" : "none",
              textAlign: "center", padding: "64px 48px",
              background: "linear-gradient(135deg, #fafafa, #f4f7fb)",
              borderRadius: "12px",
              border: "1px solid rgba(23,46,78,0.06)",
              boxShadow: "0 20px 60px rgba(23,46,78,0.07)",
              position: "relative",
            }}>
              {/* Quote icon */}
              <div style={{
                position: "absolute", top: "-20px", left: "50%", transform: "translateX(-50%)",
                width: "42px", height: "42px", borderRadius: "50%",
                background: "linear-gradient(135deg, #d39f17, #f0c040)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem",
                boxShadow: "0 4px 15px rgba(211,159,23,0.4)",
              }}>❝</div>

              <p className="playfair" style={{
                color: "#444", fontSize: "1.08rem", lineHeight: "1.9",
                fontStyle: "italic", marginBottom: "32px", marginTop: 0,
              }}>{t.text}</p>

              <div style={{ width: "40px", height: "2px", background: "#d39f17", margin: "0 auto 20px" }} />
              <div className="playfair" style={{ fontWeight: "700", color: "#172e4e", fontSize: "1rem", marginBottom: "4px" }}>
                {t.name}
              </div>
              <div style={{ color: "#d39f17", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: "700" }}>
                {t.role}
              </div>
            </div>
          ))}

          {/* Dot navigation */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: i === active ? "32px" : "10px",
                height: "10px", borderRadius: "5px",
                background: i === active ? "#d39f17" : "rgba(23,46,78,0.15)",
                border: "none", cursor: "pointer",
                transition: "all 0.35s", padding: 0,
              }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}