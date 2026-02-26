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

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lato:wght@400;700&display=swap');

  .testimonials-section {
    padding: clamp(60px, 10vw, 100px) clamp(16px, 5%, 60px);
    background: #fff;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }

  .testimonials-inner {
    max-width: 80rem;
    margin: 0 auto;
  }

  .section-tag {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #d39f17;
    font-weight: 700;
    margin: 0 0 12px;
  }

  .section-header {
    text-align: center;
    margin-bottom: clamp(40px, 6vw, 64px);
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.5rem, 4vw, 2.8rem);
    font-weight: 700;
    color: #172e4e;
    margin: 0 0 16px;
    line-height: 1.2;
  }

  .section-divider {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, #d39f17, #f0c040);
    margin: 0 auto;
    border-radius: 2px;
  }

  .card-wrapper {
    max-width: 80rem;
    margin: 0 auto;
  }

  .testimonial-card {
    display: none;
    text-align: center;
    padding: clamp(40px, 6vw, 64px) clamp(20px, 5vw, 48px);
    background: linear-gradient(135deg, #fafafa, #f4f7fb);
    border-radius: 12px;
    border: 1px solid rgba(23,46,78,0.06);
    box-shadow: 0 20px 60px rgba(23,46,78,0.07);
    position: relative;
    box-sizing: border-box;
  }

  .testimonial-card.active {
    display: block;
  }

  .quote-icon {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d39f17, #f0c040);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    box-shadow: 0 4px 15px rgba(211,159,23,0.4);
    flex-shrink: 0;
  }

  .testimonial-text {
    font-family: 'Playfair Display', serif;
    color: #444;
    font-size: clamp(0.9rem, 2vw, 1.08rem);
    line-height: 1.9;
    font-style: italic;
    margin: 0 0 32px;
  }

  .divider-line {
    width: 40px;
    height: 2px;
    background: #d39f17;
    margin: 0 auto 20px;
  }

  .client-name {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #172e4e;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    margin-bottom: 4px;
  }

  .client-role {
    color: #d39f17;
    font-size: clamp(0.65rem, 1.2vw, 0.75rem);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .dot-nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 32px;
    flex-wrap: wrap;
  }

  .dot-btn {
    height: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.35s ease;
    padding: 0;
    min-width: 10px;
  }

  .dot-btn.active-dot {
    width: 32px;
    background: #d39f17;
  }

  .dot-btn.inactive-dot {
    width: 10px;
    background: rgba(23,46,78,0.15);
  }

  /* Touch swipe hint on mobile */
  @media (max-width: 480px) {
    .testimonial-card {
      touch-action: pan-y;
    }
  }
`;

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActive(prev => (prev + 1) % TESTIMONIALS.length);
      } else {
        setActive(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      }
    }
    setTouchStart(null);
  };

  return (
    <>
      <style>{styles}</style>
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-inner">

          {/* Section Header */}
          <div className="section-header">
            <p className="section-tag">Client Stories</p>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="section-divider" />
          </div>

          {/* Testimonial Card */}
          <div className="card-wrapper">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonial-card${i === active ? " active" : ""}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="quote-icon">❝</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="divider-line" />
                <div className="client-name">{t.name}</div>
                <div className="client-role">{t.role}</div>
              </div>
            ))}

            {/* Dot navigation */}
            <div className="dot-nav">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`dot-btn ${i === active ? "active-dot" : "inactive-dot"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}