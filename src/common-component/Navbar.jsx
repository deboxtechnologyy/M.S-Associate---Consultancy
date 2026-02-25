import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .nav-link.active::after {
          transform: scaleX(1);
        }
        .nav-link.active {
          font-weight: 600 !important;
          opacity: 1 !important;
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
        .mobile-nav-link.active {
          font-weight: 600 !important;
          background-color: rgba(23,46,78,0.06) !important;
          opacity: 1 !important;
        }
      `}</style>

      <nav
        style={{ backgroundColor: "#FFFAFA", color: "#172e4e" }}
        className="sticky top-0 z-50 shadow-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            style={{ color: "#172e4e" }}
            className="flex items-center gap-2 no-underline"
          >
            <div
              style={{ backgroundColor: "#172e4e" }}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl tracking-tight" style={{ fontWeight: 700 }}>
              Navbar<span style={{ color: "#172e4e", opacity: 0.45 }}>UI</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  end={href === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                  style={({ isActive }) => ({
                    color: "#172e4e",
                    textDecoration: "none",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.93rem",
                    letterSpacing: "0.01em",
                    opacity: isActive ? 1 : 0.75,
                    transition: "opacity 0.2s",
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
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
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#172e4e";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#172e4e";
              }}
            >
              Log in
            </Link>
            <Link
              to="/signup"
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
              onMouseEnter={(e) => (e.target.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger md:hidden bg-transparent border-0 cursor-pointer p-1 ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}
          style={{
            backgroundColor: "#FFFAFA",
            borderTop: "1px solid rgba(23,46,78,0.08)",
          }}
        >
          <ul className="list-none m-0 p-0 px-6 pb-4 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  end={href === "/"}
                  className={({ isActive }) =>
                    `mobile-nav-link${isActive ? " active" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => ({
                    display: "block",
                    color: "#172e4e",
                    textDecoration: "none",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.95rem",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    backgroundColor: isActive
                      ? "rgba(23,46,78,0.06)"
                      : "transparent",
                    opacity: isActive ? 1 : 0.8,
                    transition: "all 0.2s",
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <Link
                to="/login"
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
              >
                Log in
              </Link>
              <Link
                to="/signup"
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
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}