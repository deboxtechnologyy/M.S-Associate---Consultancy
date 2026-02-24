import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
        .nav-link::after {
          content: '';
          display: block;
          height: 2px;
          background: #172e4e;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after, .nav-link.active::after {
          transform: scaleX(1);
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .mobile-menu.open {
          max-height: 400px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #172e4e;
          margin: 5px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      `}</style>

      <nav style={{ backgroundColor: "#FFFAFA", color: "#172e4e" }}
        className="sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#" style={{ color: "#172e4e" }} className="flex items-center gap-2 no-underline">
            <div style={{ backgroundColor: "#172e4e" }}
              className="w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
              Navbar<span style={{ color: "#172e4e", opacity: 0.45 }}>UI</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActiveLink(label)}
                  className={`nav-link ${activeLink === label ? "active" : ""}`}
                  style={{
                    color: "#172e4e",
                    textDecoration: "none",
                    fontWeight: activeLink === label ? 600 : 500,
                    fontSize: "0.93rem",
                    letterSpacing: "0.01em",
                    opacity: activeLink === label ? 1 : 0.75,
                    transition: "opacity 0.2s",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#"
              style={{
                border: "1.5px solid #172e4e",
                color: "#172e4e",
                borderRadius: "8px",
                padding: "7px 18px",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = "#172e4e";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#172e4e";
              }}
            >
              Log in
            </a>
            <a href="#"
              style={{
                backgroundColor: "#172e4e",
                color: "#fff",
                borderRadius: "8px",
                padding: "7px 20px",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "opacity 0.2s",
                boxShadow: "0 2px 8px rgba(23,46,78,0.18)",
              }}
              onMouseEnter={e => e.target.style.opacity = "0.88"}
              onMouseLeave={e => e.target.style.opacity = "1"}
            >
              Get Started
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger md:hidden bg-transparent border-0 cursor-pointer p-1 ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}
          style={{ backgroundColor: "#FFFAFA", borderTop: "1px solid rgba(23,46,78,0.08)" }}>
          <ul className="list-none m-0 p-0 px-6 pb-4 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => { setActiveLink(label); setMenuOpen(false); }}
                  style={{
                    display: "block",
                    color: "#172e4e",
                    textDecoration: "none",
                    fontWeight: activeLink === label ? 600 : 500,
                    fontSize: "0.95rem",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    backgroundColor: activeLink === label ? "rgba(23,46,78,0.06)" : "transparent",
                    opacity: activeLink === label ? 1 : 0.8,
                    transition: "all 0.2s",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <a href="#"
                style={{
                  textAlign: "center",
                  border: "1.5px solid #172e4e",
                  color: "#172e4e",
                  borderRadius: "8px",
                  padding: "9px 18px",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >Log in</a>
              <a href="#"
                style={{
                  textAlign: "center",
                  backgroundColor: "#172e4e",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "9px 20px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >Get Started</a>
            </li>
          </ul>
        </div>
      </nav>

      
    </>
  );
}