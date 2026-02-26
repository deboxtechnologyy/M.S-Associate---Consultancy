import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    subItems: [
      { label: "Civil Suits", href: "/service/civil-suits" },
      { label: "Legal Notice", href: "/service/legal-notice" },
      { label: "Bail", href: "/service/bail" },
      { label: "Divorce & Family Court", href: "/service/divorce-and-family-court-cases" },
      { label: "Cheque Bounce", href: "/service/cheque-bounce" },
      { label: "Criminal Cases", href: "/service/criminal-cases" },
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }

        /* ── Fix 1: Navbar fixed height, logo stays contained ── */
        .navbar-inner {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;              /* fixed height — logo can't push this */
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .logo-img {
          height: 90px;              /* logo constrained to 40px */
          width: auto;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }

        /* ── Nav link underline animation ── */
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          display: block;
          height: 2px;
          background: #172e4e;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active::after { transform: scaleX(1); }
        .nav-link.active { font-weight: 600 !important; opacity: 1 !important; }

        /* ── Fix 2: Services label — no underline when sub-route is active ── */
        .services-label {
          position: relative;
          color: #172e4e;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.93rem;
          letter-spacing: 0.01em;
          opacity: 0.75;
          cursor: default;
          user-select: none;
        }
        /* No ::after pseudo-element — so no underline ever */

        /* ── Dropdown ── */
        .services-dropdown {
          position: relative;
        }

        .services-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          padding: 4px 0;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          min-width: 230px;
          border-radius: 16px;
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16,1,0.3,1);
          z-index: 200;

          /* Clean white card with subtle depth */
          background: #ffffff;
          border: 1px solid rgba(23,46,78,0.09);
          box-shadow:
            0 4px 6px -1px rgba(23,46,78,0.07),
            0 20px 40px -8px rgba(23,46,78,0.16);
        }

        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        /* Caret / arrow */
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -7px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 13px;
          height: 13px;
          background: #ffffff;
          border-left: 1px solid rgba(23,46,78,0.09);
          border-top: 1px solid rgba(23,46,78,0.09);
          border-radius: 3px 0 0 0;
        }

        /* Section header inside dropdown */
        .dropdown-header {
          padding: 6px 12px 4px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(23,46,78,0.35);
          margin-bottom: 2px;
        }

        .dropdown-divider {
          height: 1px;
          background: rgba(23,46,78,0.06);
          margin: 4px 8px;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          color: #172e4e;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 10px;
          transition: background 0.15s ease, color 0.15s ease;
          white-space: nowrap;
        }

        .dropdown-item-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: rgba(23,46,78,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
          transition: background 0.15s ease;
        }

        .dropdown-item:hover {
          background: rgba(23,46,78,0.05);
        }
        .dropdown-item:hover .dropdown-item-icon {
          background: rgba(23,46,78,0.1);
        }

        .dropdown-item.active {
          background: rgba(23,46,78,0.07);
          font-weight: 600;
        }
        .dropdown-item.active .dropdown-item-icon {
          background: #172e4e;
          color: #fff;
        }

        .dropdown-arrow {
          font-size: 0.58rem;
          opacity: 0.5;
          transition: transform 0.22s ease, opacity 0.2s;
          margin-top: 1px;
        }
        .dropdown-arrow.open {
          transform: rotate(180deg);
          opacity: 0.8;
        }

        /* ── Desktop nav list ── */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* ── Hamburger ── */
        .hamburger-btn {
          display: none;
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 4px;
          flex-shrink: 0;
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
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile menu ── */
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .mobile-menu.open { max-height: 560px; }

        .mobile-panel {
          background-color: #FFFAFA;
          border-top: 1px solid rgba(23,46,78,0.08);
        }
        .mobile-panel ul {
          list-style: none;
          margin: 0;
          padding: 8px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-dropdown-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border: none;
          padding: 10px 12px;
          color: #172e4e;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .mobile-dropdown-btn:hover { background-color: rgba(23,46,78,0.06); }

        .mobile-dropdown-arrow {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }
        .mobile-dropdown-arrow.open { transform: rotate(180deg); }

        .mobile-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
          padding-left: 20px;
        }
        .mobile-submenu.open { max-height: 400px; }

        .mobile-nav-link:hover {
          background-color: rgba(23,46,78,0.06) !important;
          opacity: 1 !important;
        }
        .mobile-nav-link.active {
          font-weight: 600 !important;
          background-color: rgba(23,46,78,0.06) !important;
          opacity: 1 !important;
        }

        /* ── CTA buttons ── */
        .cta-btn {
          background-color: #172e4e;
          color: #fff;
          border-radius: 8px;
          padding: 7px 20px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: opacity 0.2s;
          box-shadow: 0 2px 8px rgba(23,46,78,0.18);
          white-space: nowrap;
        }
        .cta-btn:hover { opacity: 0.88; }

        .mobile-cta-btn {
          display: block;
          text-align: center;
          background-color: #172e4e;
          color: #fff;
          border-radius: 8px;
          padding: 10px 20px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          margin-top: 8px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .desktop-links { gap: 28px; }
        }

        @media (max-width: 768px) {
          .desktop-links { display: none; }
          .desktop-cta { display: none; }
          .hamburger-btn { display: block; }
          .navbar-inner { padding: 0 16px; height: 56px; }
        }

        @media (max-width: 480px) {
          .navbar-inner { padding: 0 14px; }
          .logo-img { height: 80px; }
        }
      `}</style>

      <nav
        style={{ backgroundColor: "#FFFAFA", color: "#172e4e" }}
        className="sticky top-0 z-50 shadow-sm border-b border-gray-100 w-full"
      >
        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
            <img src="/logo/logo2.png" alt="logo" className="logo-img" />
          </Link>

          {/* Desktop Links */}
          <ul className="desktop-links">
            {NAV_LINKS.map(({ label, href, subItems }) => (
              <li key={label} className={subItems ? "services-dropdown" : ""}>
                {subItems ? (
                  <div className="services-dropdown" ref={dropdownRef}>
                    <div
                      className="services-trigger"
                      onClick={() => setDropdownOpen(v => !v)}
                    >
                      <span className="services-label">{label}</span>
                      <span className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}>▼</span>
                    </div>

                    <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                      <div className="dropdown-header">Our Services</div>
                      <div className="dropdown-divider" />
                      {subItems.map((item, i) => {
                        const icons = ["⚖️","📋","🔓","💍","🏦","🛡️"];
                        return (
                          <NavLink
                            key={item.label}
                            to={item.href}
                            className={({ isActive }) => `dropdown-item${isActive ? " active" : ""}`}
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span className="dropdown-item-icon">{icons[i]}</span>
                            {item.label}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={href}
                    end={href === "/"}
                    className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
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
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="desktop-cta">
            <Link to="/contact" className="cta-btn">
              Free Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger-btn hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu mobile-panel ${menuOpen ? "open" : ""}`}>
          <ul>
            {NAV_LINKS.map(({ label, href, subItems }) => (
              <li key={label}>
                {subItems ? (
                  <>
                    <button
                      className="mobile-dropdown-btn"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <span>{label}</span>
                      <span className={`mobile-dropdown-arrow ${mobileServicesOpen ? "open" : ""}`}>▼</span>
                    </button>

                    <div className={`mobile-submenu ${mobileServicesOpen ? "open" : ""}`}>
                      {subItems.map((item) => (
                        <NavLink
                          key={item.label}
                          to={item.href}
                          className={({ isActive }) => `mobile-nav-link${isActive ? " active" : ""}`}
                          onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                          style={({ isActive }) => ({
                            display: "block",
                            color: "#172e4e",
                            textDecoration: "none",
                            fontWeight: isActive ? 600 : 500,
                            fontSize: "0.9rem",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            backgroundColor: isActive ? "rgba(23,46,78,0.06)" : "transparent",
                            opacity: isActive ? 1 : 0.8,
                            transition: "all 0.2s",
                          })}
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={href}
                    end={href === "/"}
                    className={({ isActive }) => `mobile-nav-link${isActive ? " active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                    style={({ isActive }) => ({
                      display: "block",
                      color: "#172e4e",
                      textDecoration: "none",
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "0.95rem",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      backgroundColor: isActive ? "rgba(23,46,78,0.06)" : "transparent",
                      opacity: isActive ? 1 : 0.8,
                      transition: "all 0.2s",
                    })}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="mobile-cta-btn"
                onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}