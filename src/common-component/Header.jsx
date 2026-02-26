import React from "react";

export default function TopBar() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .topbar {
          background: #172e4e;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          width: 100%;
        }

        .topbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 8px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* ── Contact links ── */
        .topbar-contact {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px 16px;
        }

        .topbar-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .topbar-link:hover { color: #fff; }

        .topbar-link svg { flex-shrink: 0; }

        .topbar-sep {
          width: 1px; height: 14px;
          background: rgba(255,255,255,0.3);
          flex-shrink: 0;
        }

        /* ── Socials ── */
        .topbar-socials {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .social-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .social-icon:hover {
          color: #fff;
          border-color: #fff;
          background: rgba(255,255,255,0.1);
        }
        .social-icon svg { width: 13px; height: 13px; }

        /* ── Responsive ── */

        /* Tablets (≤768px) — stack vertically, center both rows */
        @media (max-width: 768px) {
          .topbar-inner {
            flex-direction: column;
            align-items: center;
            padding: 10px 5%;
            gap: 8px;
          }
          .topbar-contact { justify-content: center; }
          .topbar-sep { display: none; }
        }

        /* Small phones (≤420px) — hide separator, tighter gap */
        @media (max-width: 420px) {
          .topbar-inner { gap: 6px; padding: 8px 4%; }
          .topbar-link { font-size: 0.72rem; }
          .topbar-contact { gap: 4px 10px; }
          .social-icon { width: 26px; height: 26px; }
          .social-icon svg { width: 11px; height: 11px; }
        }

        /* Very small (≤320px) — email hides, phone only */
        @media (max-width: 320px) {
          .topbar-email { display: none; }
        }
      `}</style>

      <div className="topbar">
        <div className="topbar-inner">

          {/* Left — Contact */}
          <div className="topbar-contact">
            <a href="tel:+91 98188 03706" className="topbar-link">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            +91 98188 03706
            </a>

            <span className="topbar-sep" />

            <a href="mailto:info@acme.com" className="topbar-link topbar-email">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              info@acme.com
            </a>
          </div>

          {/* Right — Socials */}
          <div className="topbar-socials">
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}