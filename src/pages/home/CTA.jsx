import { Link } from "react-router-dom";
export default function CTASection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        .cta-section * { box-sizing: border-box; margin: 0; padding: 0; }

        .cta-section {
          background: #0f1e30;
          position: relative;
          overflow: hidden;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(211,159,23,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(211,159,23,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .cta-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 560px;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT: image side ── */
        .cta-image-wrap {
          position: relative;
          overflow: hidden;
        }

        .cta-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: brightness(0.78) saturate(0.85);
          transition: transform 8s ease;
        }

        .cta-section:hover .cta-image-wrap img {
          transform: scale(1.04);
        }

        .cta-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            transparent 40%,
            #0f1e30 100%
          ), linear-gradient(
            to top,
            rgba(15,30,48,0.5) 0%,
            transparent 50%
          );
        }

        /* Badge on image */
        .cta-badge {
          position: absolute;
          bottom: 32px;
          left: 32px;
          z-index: 3;
          background: rgba(15,30,48,0.85);
          border: 1px solid rgba(211,159,23,0.4);
          backdrop-filter: blur(8px);
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cta-badge-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(211,159,23,0.15);
          border: 1px solid rgba(211,159,23,0.5);
          display: grid;
          place-items: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .cta-badge-text strong {
          display: block;
          color: #d39f17;
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          line-height: 1.2;
        }

        .cta-badge-text span {
          color: rgba(255,255,255,0.55);
          font-size: 0.75rem;
          letter-spacing: 0.04em;
        }

        /* ── RIGHT: content side ── */
        .cta-content {
          padding: 72px 64px 72px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .cta-content::before {
          content: '';
          position: absolute;
          right: -80px;
          top: -80px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(211,159,23,0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #d39f17;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 24px;
          font-family: 'Cormorant Garamond', serif;
        }

        .cta-tag::before, .cta-tag::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #d39f17;
          opacity: 0.6;
        }

        .cta-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.9rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.18;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .cta-heading em {
          font-style: italic;
          color: #d39f17;
        }

        .cta-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(to right, #d39f17, transparent);
          margin-bottom: 24px;
        }

        .cta-body {
          color: rgba(255,255,255,0.58);
          font-size: 1.05rem;
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 40px;
          max-width: 420px;
        }

        /* Trust signals */
        .cta-trust {
          display: flex;
          gap: 24px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.45);
          font-size: 0.78rem;
          letter-spacing: 0.05em;
        }

        .cta-trust-item .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d39f17;
          opacity: 0.7;
          flex-shrink: 0;
        }

        /* Buttons */
        .cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-gold {
          padding: 16px 38px;
          background: #d39f17;
          color: #0f1e30;
          border: none;
          cursor: pointer;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }

        .btn-gold::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0);
          transition: background 0.25s;
        }

        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(211,159,23,0.35);
        }

        .btn-gold:hover::after {
          background: rgba(255,255,255,0.1);
        }

        .btn-outline {
          padding: 15px 32px;
          background: transparent;
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: border-color 0.25s, color 0.25s, transform 0.2s;
        }

        .btn-outline:hover {
          border-color: rgba(211,159,23,0.55);
          color: #d39f17;
          transform: translateY(-2px);
        }

        .btn-outline .phone-icon {
          font-size: 1rem;
        }

        /* ── RESPONSIVE BREAKPOINTS ── */

        /* Large desktops (1200px+): default styles apply */

        /* Medium-large: 1024px – 1199px */
        @media (max-width: 1199px) {
          .cta-content {
            padding: 60px 48px 60px 44px;
          }
        }

        /* Tablets landscape / small laptops: 860px – 1023px */
        @media (max-width: 1023px) {
          .cta-content {
            padding: 52px 36px 52px 36px;
          }
          .cta-body {
            max-width: 100%;
          }
        }

        /* Tablets portrait & large phones landscape: 600px – 859px */
        @media (max-width: 860px) {
          .cta-inner {
            grid-template-columns: 1fr;
          }
          .cta-image-wrap {
            height: 320px;
          }
          .cta-image-wrap::after {
            background: linear-gradient(to bottom, transparent 40%, #0f1e30 95%);
          }
          .cta-content {
            padding: 52px 40px 60px;
          }
          .cta-badge {
            bottom: 20px;
            left: 20px;
            padding: 10px 16px;
          }
        }

        /* Small tablets / large phones: 480px – 599px */
        @media (max-width: 599px) {
          .cta-image-wrap {
            height: 260px;
          }
          .cta-content {
            padding: 44px 28px 52px;
          }
          .cta-heading {
            font-size: clamp(1.6rem, 6vw, 2rem);
          }
          .cta-body {
            font-size: 1rem;
            margin-bottom: 32px;
          }
          .cta-trust {
            gap: 16px;
            margin-bottom: 32px;
          }
          .cta-buttons {
            flex-direction: column;
            gap: 12px;
          }
          .btn-gold,
          .btn-outline {
            width: 100%;
            justify-content: center;
            padding: 16px 24px;
          }
        }

        /* Small phones: up to 479px */
        @media (max-width: 479px) {
          .cta-image-wrap {
            height: 220px;
          }
          .cta-content {
            padding: 36px 20px 44px;
          }
          .cta-tag {
            font-size: 0.68rem;
          }
          .cta-tag::before,
          .cta-tag::after {
            width: 18px;
          }
          .cta-heading {
            font-size: clamp(1.4rem, 7vw, 1.75rem);
            margin-bottom: 18px;
          }
          .cta-divider {
            margin-bottom: 18px;
          }
          .cta-body {
            font-size: 0.95rem;
            line-height: 1.8;
            margin-bottom: 28px;
          }
          .cta-trust {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 28px;
          }
          .cta-trust-item {
            font-size: 0.75rem;
          }
          .cta-badge {
            padding: 8px 12px;
            gap: 8px;
          }
          .cta-badge-icon {
            width: 28px;
            height: 28px;
            font-size: 13px;
          }
          .cta-badge-text strong {
            font-size: 0.78rem;
          }
          .cta-badge-text span {
            font-size: 0.68rem;
          }
        }

        /* Very small phones: up to 360px */
        @media (max-width: 360px) {
          .cta-image-wrap {
            height: 190px;
          }
          .cta-content {
            padding: 28px 16px 36px;
          }
          .btn-gold,
          .btn-outline {
            font-size: 0.75rem;
            padding: 14px 20px;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-inner">

          {/* ── Image Side ── */}
          <div className="cta-image-wrap">
            <img
              src="/src/assets/home-img/img1.jpg"
              alt="Law office"
            />
            <div className="cta-badge">
              <div className="cta-badge-icon">⚖️</div>
              <div className="cta-badge-text">
                <strong>10 Years Experience</strong>
                <span>Trusted Legal Advocacy</span>
              </div>
            </div>
          </div>

          {/* ── Content Side ── */}
          <div className="cta-content">
            <span className="cta-tag">Take the First Step</span>

            <h2 className="cta-heading">
              Facing a Legal<br />
              Challenge? <em>We're<br />Ready to Help.</em>
            </h2>

            <div className="cta-divider" />

            <p className="cta-body">
              Don't navigate the legal system alone. Our experienced advocates are just
              a call away — offering free initial consultations to assess your case
              with no obligation.
            </p>

            {/* Trust signals */}
            <div className="cta-trust">
              <div className="cta-trust-item"><span className="dot" />Free Consultation</div>
              <div className="cta-trust-item"><span className="dot" />No Win, No Fee</div>
              <div className="cta-trust-item"><span className="dot" />Confidential & Secure</div>
            </div>

            <div className="cta-buttons">
              <Link to="/contact">
              <button className="btn-gold">Book Free Consultation</button></Link>
              <button className="btn-outline">
                <span className="phone-icon">📞</span>
                +91 98188 03706
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}