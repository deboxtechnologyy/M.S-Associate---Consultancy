import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_SECTIONS = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "expertise", label: "Areas of Practice" },
  { id: "philosophy", label: "Philosophy" },
  { id: "excellence", label: "Excellence" },
  { id: "vision", label: "Our Vision" },
];

const PRACTICE_AREAS = [
  {
    icon: "⚖️",
    title: "Criminal Defence",
    description:
      "Vigorous, evidence-based defence across trial courts and appellate forums. Every accused deserves a counsel who fights with equal zeal — regardless of the charge.",
  },
  {
    icon: "🏛️",
    title: "Constitutional & Civil Rights",
    description:
      "Protecting fundamental rights enshrined in the Constitution — challenging unlawful detentions, custodial violations, and state overreach at every level.",
  },
  {
    icon: "🏢",
    title: "Corporate & Commercial Law",
    description:
      "Drafting agreements, resolving commercial disputes, and advising on mergers, acquisitions, and regulatory compliance for businesses of all sizes.",
  },
  {
    icon: "🏠",
    title: "Property & Real Estate",
    description:
      "Comprehensive legal counsel on property transactions, title disputes, tenancy matters, and land acquisition proceedings.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family & Matrimonial Law",
    description:
      "Sensitive, discreet representation in divorce, custody, maintenance, and domestic relations — balancing legal strategy with human empathy.",
  },
  {
    icon: "📋",
    title: "Arbitration & Mediation",
    description:
      "Efficient dispute resolution through arbitration and mediation proceedings — minimising litigation costs while protecting client interests.",
  },
];

const STATS = [
  { value: "10+", label: "Years at the Bar" },
  { value: "1,200", label: "Cases Won" },
  { value: "1200", label: "happy clients" },
  { value: "98%", label: "Favourable Outcomes" },
];

const VALUES = [
  "Unwavering integrity in every courtroom and chamber",
  "Client confidentiality as a sacrosanct obligation",
  "Thorough preparation over eloquent improvisation",
  "Plain-language counsel — no legal jargon, just clarity",
];

export default function AdvocateAboutPage() {
  const [active, setActive] = useState("who-we-are");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let cur = "who-we-are";
      NAV_SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-white text-[#172e4e] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-poppins  { font-family: 'Poppins', sans-serif; }

        .fade-up   { animation: fadeUp 0.75s ease both; }
        .fade-up-d1{ animation: fadeUp 0.75s 0.14s ease both; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .card-lift { transition: transform .28s ease, box-shadow .28s ease; }
        .card-lift:hover { transform: translateY(-7px); box-shadow: 0 24px 52px rgba(23,46,78,.12); }

        .ornament {
          display:flex; align-items:center; gap:10px; margin-bottom:.75rem;
        }
        .ornament span {
          font-family:'Poppins',sans-serif; font-size:.65rem;
          letter-spacing:.2em; text-transform:uppercase; color:rgba(23,46,78,.45);
        }
        .ornament::after {
          content:''; flex:1; height:1px; background:rgba(23,46,78,.15); max-width:36px;
        }

        .gold { color:#b8913a; }
        .bg-gold { background:#b8913a; }

        .scales-divider {
          display:flex; align-items:center; justify-content:center; gap:1rem; padding:1.5rem 0;
        }
        .scales-divider::before,.scales-divider::after {
          content:''; flex:1; height:1px; background:rgba(23,46,78,.1); max-width:240px;
        }

        .img-frame::after {
          content:''; position:absolute; inset:-10px -10px 10px 10px;
          border:2px solid rgba(23,46,78,.12); border-radius:20px;
          pointer-events:none; z-index:0;
        }

        .excellence-bg {
          background: linear-gradient(150deg,#172e4e 0%,#1b3558 50%,#0f2035 100%);
        }

        .nav-tab { transition: color .2s, border-color .2s; }

        /* Hide scrollbar for nav on mobile */
        .nav-scroll::-webkit-scrollbar { display: none; }
        .nav-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        /* ── TABLET ONLY: 768px ── */
        @media (min-width: 768px) and (max-width: 768px) {

          /* Hero heading */
          header h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }

          /* Hero sub-text */
          header p {
            font-size: 0.85rem !important;
          }

          /* Stats values */
          .stats-value {
            font-size: 2rem !important;
          }

          /* Section headings */
          .section-heading {
            font-size: 2rem !important;
            line-height: 1.25 !important;
          }

          /* Body text */
          .body-text {
            font-size: 0.8rem !important;
          }

          /* Card headings */
          .card-heading {
            font-size: 1rem !important;
          }

          /* Card body */
          .card-body {
            font-size: 0.75rem !important;
          }

          /* Quote text */
          .quote-text {
            font-size: 0.9rem !important;
          }

          /* Vision grid items */
          .vision-item-title {
            font-size: 0.75rem !important;
          }

          .vision-item-sub {
            font-size: 0.7rem !important;
          }

          /* Excellence cards heading */
          .excellence-card-heading {
            font-size: 1rem !important;
          }

          .excellence-card-body {
            font-size: 0.75rem !important;
          }

          /* Nav tabs */
          .nav-tab {
            font-size: 0.7rem !important;
            padding-left: 0.65rem !important;
            padding-right: 0.65rem !important;
          }

          /* Stat label */
          .stat-label {
            font-size: 0.6rem !important;
          }

          /* Floating badge text */
          .badge-name {
            font-size: 0.9rem !important;
          }
          .badge-degree {
            font-size: 0.65rem !important;
          }
          .badge-trust {
            font-size: 0.6rem !important;
          }

          /* Who we are overlay card */
          .cases-card-value {
            font-size: 1.75rem !important;
          }
          .cases-card-label {
            font-size: 0.7rem !important;
          }

          /* Philosophy overlay card */
          .satisfaction-value {
            font-size: 1.75rem !important;
          }
          .satisfaction-label {
            font-size: 0.65rem !important;
          }

          /* Philosophy checklist */
          .checklist-text {
            font-size: 0.75rem !important;
          }

          /* Vision courts badge */
          .courts-label {
            font-size: 0.6rem !important;
          }
          .courts-item {
            font-size: 0.7rem !important;
          }

          /* Excellence intro paragraph */
          .excellence-intro {
            font-size: 0.82rem !important;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <header className="relative text-white pb-16 sm:pb-24 md:pb-28 pt-10 sm:pt-12 px-4 sm:px-6 overflow-hidden" role="banner">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#172e4e]/85" />
        </div>

        {/* faint scales icon bg — hidden on mobile */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none hidden sm:block" aria-hidden="true">
          <svg viewBox="0 0 200 240" className="w-56 h-56 md:w-72 md:h-72 fill-white">
            <rect x="98" y="0" width="4" height="240" rx="2"/>
            <rect x="60" y="20" width="80" height="4" rx="2"/>
            <circle cx="100" cy="20" r="8"/>
            <path d="M60 24L40 80" stroke="white" strokeWidth="3" fill="none"/>
            <path d="M140 24L160 80" stroke="white" strokeWidth="3" fill="none"/>
            <ellipse cx="40" cy="84" rx="22" ry="6"/>
            <ellipse cx="160" cy="84" rx="22" ry="6"/>
          </svg>
        </div>
<div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-5 gap-8 md:gap-10 items-center">
  <div className="md:col-span-3 fade-up">
    <div className="ornament mb-2">
      <span>Advocate & Legal Counsel</span>
    </div>

    <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] mb-4">
      Nyay Ke Liye Pratibaddh —<br/>
     
    </h1>

    <p className="font-poppins font-light text-white/65 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mt-4 mb-6 sm:mb-8 body-text">
      Advocate Manoj Kumar is a dedicated legal professional serving
      Gautam Buddh Nagar and surrounding courts, providing strategic and
      result-oriented representation in civil, criminal, and family matters.
    </p>

    <div className="flex gap-3 sm:gap-4 flex-wrap">
      <Link to="/contact">
      <button
        className="font-poppins text-xs sm:text-sm font-semibold bg-white text-black px-5 sm:px-7 py-2.5 sm:py-3 rounded-sm hover:bg-[#d4af37] transition-all tracking-wide">
        Call Now
      </button>
      </Link>

<Link to="/blog">
      <button
        className="font-poppins text-xs sm:text-sm font-medium border border-white text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-sm hover:bg-[#b8913a]/10 transition-all tracking-wide">
        Blogs
      </button>
      </Link>
    </div>
  </div>

  <div className="md:col-span-2 fade-up-d1 hidden md:block">
    <div className="img-frame relative z-10">
      <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
        <img
          src="https://images.pexels.com/photos/8112193/pexels-photo-8112193.jpeg"
          alt="Advocate Manoj Kumar — Senior Legal Counsel"
          className="w-full h-full object-cover object-top"
        />
      </div>

      
    </div>
  </div>
</div>
      </header>

      {/* ── STICKY NAV ── */}
      <nav className={`sticky top-0 z-50 bg-white border-b border-[#172e4e]/10 transition-shadow ${scrolled ? "shadow-md" : ""}`}
        aria-label="About page section navigation">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 flex overflow-x-auto nav-scroll">
          {NAV_SECTIONS.map(({ id, label }) => (
            <button key={id} onClick={() => goto(id)}
              className={`nav-tab font-poppins text-xs sm:text-sm font-medium whitespace-nowrap px-3 sm:px-5 py-3 sm:py-4 border-b-2 flex-shrink-0 ${
                active === id ? "border-[#172e4e] text-[#172e4e]" : "border-transparent text-[#172e4e]/40 hover:text-[#172e4e]/70"
              }`}>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── STATS ── */}
      <div className="border-b border-[#172e4e]/8 bg-[#172e4e]/[0.025]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-playfair text-3xl sm:text-4xl font-bold text-[#172e4e] stats-value">{value}</p>
              <p className="font-poppins text-xs text-[#172e4e]/50 mt-1 tracking-wide uppercase stat-label">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
<section id="who-we-are" className="scroll-mt-16 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
  <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
    <div>
      <div className="ornament"><span>Our Identity</span></div>

      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 sm:mb-6 section-heading">
        Who We Are
      </h2>

      <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base body-text">
        Advocate Manoj Kumar is a dedicated legal practitioner based in 
        Gautam Buddh Nagar, committed to delivering principled and 
        result-oriented legal representation. With strong academic 
        credentials (LL.B, LL.M) and years of courtroom experience, 
        he represents clients before District Courts and other judicial authorities.
      </p>

      <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base body-text">
        His practice is founded on integrity, transparency, and 
        unwavering commitment to justice. Whether representing individuals, 
        families, or businesses, he ensures every matter is handled with 
        strategic precision and complete confidentiality.
      </p>

      <div className="border-l-2 border-[#b8913a] pl-4 sm:pl-5 py-1">
        <p className="font-playfair italic text-[#172e4e] text-base sm:text-lg leading-snug quote-text">
          "Nyay sirf kanoon ka shabd nahi — har nagrik ka adhikaar hai. 
          Mera kartavya hai ki main ise imaandari aur sahas ke saath prastut karun."
        </p>

        <p className="font-poppins text-xs text-[#172e4e]/45 mt-3 body-text">
          — Adv. Manoj Kumar, Founder
        </p>
      </div>
    </div>

    <div className="relative mt-8 md:mt-0">
      <div className="rounded-2xl overflow-hidden shadow-2xl xl:aspect-[5/4] lg:aspect-[4/5] md:aspect-[4/5] ">
        <img
          src="/founder.png"
          alt="Law library and scales of justice representing Advocate Manoj Kumar's legal practice"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 bg-[#172e4e] text-white rounded-xl p-4 sm:p-5 shadow-xl max-w-[160px] sm:max-w-[190px]">
        <p className="font-playfair font-bold text-2xl sm:text-3xl gold cases-card-value">
          1200+
        </p>
        <p className="font-poppins text-xs text-white/60 mt-1 cases-card-label">
          Cases handled 
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ornamental divider */}
      <div className="scales-divider max-w-7xl mx-auto px-6 -mt-5" aria-hidden="true">
        <svg className="fill-[#b8913a] opacity-50 w-8 h-8" viewBox="0 0 64 64">
          <rect x="30" y="0" width="4" height="64" rx="2"/>
          <rect x="12" y="6" width="40" height="3" rx="1.5"/>
          <circle cx="32" cy="6" r="5"/>
          <path d="M12 9L4 30" stroke="#b8913a" strokeWidth="3" fill="none"/>
          <path d="M52 9L60 30" stroke="#b8913a" strokeWidth="3" fill="none"/>
          <ellipse cx="4" cy="33" rx="10" ry="3"/>
          <ellipse cx="60" cy="33" rx="10" ry="3"/>
        </svg>
      </div>

    {/* ── EXPERTISE ── */}
<section
  id="expertise"
  className="scroll-mt-16 bg-[#172e4e]/[0.03] border-y border-[#172e4e]/8 py-16 sm:py-24 px-4 sm:px-6"
  aria-label="Legal services offered by Advocate Manoj Kumar in Gautam Buddh Nagar"
>
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-10 sm:mb-14">
      <div className="ornament" style={{ justifyContent:"center" }}>
        <span>Legal Services in Gautam Buddh Nagar</span>
      </div>

      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight section-heading">
        Expert Legal Representation in Noida & Greater Noida
      </h2>

      <p className="font-poppins font-light text-[#172e4e]/60 mt-4 max-w-4xl mx-auto text-sm sm:text-base body-text">
        Advocate Manoj Kumar provides professional legal services in 
        Gautam Buddh Nagar District Court, Noida, and Greater Noida. 
        With expertise in civil litigation, criminal defense, family disputes, 
        property matters, and cheque bounce cases under NI Act 138, 
        we deliver strategic and result-oriented legal solutions.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

      <article className="card-lift bg-white rounded-xl p-6 sm:p-8 border border-[#172e4e]/8 shadow-sm">
        <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 card-heading">
          Civil Cases (सिविल वाद)
        </h3>
        <p className="font-poppins font-light text-sm text-[#172e4e]/65 leading-relaxed card-body">
          Handling property disputes, recovery suits, injunction matters, 
          and other civil litigation cases in Noida and Greater Noida courts.
        </p>
      </article>

      <article className="card-lift bg-white rounded-xl p-6 sm:p-8 border border-[#172e4e]/8 shadow-sm">
        <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 card-heading">
          Criminal Defense (फौजदारी मामले)
        </h3>
        <p className="font-poppins font-light text-sm text-[#172e4e]/65 leading-relaxed card-body">
          Strong representation in criminal matters including bail applications, 
          FIR defense, and trial representation before district courts.
        </p>
      </article>

      <article className="card-lift bg-white rounded-xl p-6 sm:p-8 border border-[#172e4e]/8 shadow-sm">
        <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 card-heading">
          Bail Matters (जमानत)
        </h3>
        <p className="font-poppins font-light text-sm text-[#172e4e]/65 leading-relaxed card-body">
          Regular bail, anticipatory bail, and urgent bail hearings handled 
          efficiently with complete legal preparation.
        </p>
      </article>

      <article className="card-lift bg-white rounded-xl p-6 sm:p-8 border border-[#172e4e]/8 shadow-sm">
        <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 card-heading">
          Family & Divorce Cases (तलाक एवं पारिवारिक विवाद)
        </h3>
        <p className="font-poppins font-light text-sm text-[#172e4e]/65 leading-relaxed card-body">
          Divorce petitions, maintenance cases, child custody, and 
          matrimonial dispute resolution with confidentiality.
        </p>
      </article>

      <article className="card-lift bg-white rounded-xl p-6 sm:p-8 border border-[#172e4e]/8 shadow-sm">
        <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 card-heading">
          Property Disputes (संपत्ति विवाद)
        </h3>
        <p className="font-poppins font-light text-sm text-[#172e4e]/65 leading-relaxed card-body">
          Legal solutions for land disputes, registry conflicts, 
          partition suits, and builder-buyer disputes in Gautam Buddh Nagar.
        </p>
      </article>

      <article className="card-lift bg-white rounded-xl p-6 sm:p-8 border border-[#172e4e]/8 shadow-sm">
        <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 card-heading">
          Cheque Bounce – NI Act 138 (चेक बाउंस)
        </h3>
        <p className="font-poppins font-light text-sm text-[#172e4e]/65 leading-relaxed card-body">
          Complete legal assistance for cheque bounce matters under 
          Negotiable Instruments Act Section 138 including notice drafting 
          and court representation.
        </p>
      </article>

    </div>
  </div>
</section>
   {/* ── PHILOSOPHY ── */}
<section id="philosophy" className="scroll-mt-16 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
  <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

    <div className="relative order-2 md:order-1 mt-8 md:mt-0">
      <div className="rounded-2xl overflow-hidden shadow-xl xl:aspect-square lg:aspect-[3/5] md:aspect-[3/5]">
        <img
          src="https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=720&q=80"
          alt="Advocate Manoj Kumar reviewing case files in Gautam Buddh Nagar court"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-4 sm:top-6 -right-2 sm:-right-6 hidden md:block bg-white border border-[#172e4e]/10 rounded-xl p-4 sm:p-5 shadow-xl max-w-[150px] sm:max-w-[170px] text-center">
        <p className="font-playfair font-bold text-2xl sm:text-3xl text-[#172e4e] satisfaction-value">
          90%+
        </p>
        <p className="font-poppins text-xs text-[#172e4e]/50 mt-1 satisfaction-label">
          Strong case preparation & client satisfaction
        </p>
      </div>
    </div>

    <div className="order-1 md:order-2">
      <div className="ornament">
        <span>Our Legal Approach</span>
      </div>

      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 sm:mb-6 section-heading">
        Professional Ethics & Courtroom Strategy
      </h2>

      <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base body-text">
        At the office of Advocate Manoj Kumar, practicing in Gautam Buddh Nagar,
        Noida and Greater Noida courts, we believe that legal practice is not 
        just about arguments — it is about preparation, precision, and protection 
        of our client's rights. Every case is studied in depth before stepping 
        into the courtroom.
      </p>

      <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base body-text">
        Whether it is a civil dispute, criminal defense, bail matter, or family case,
        we ensure transparency, confidentiality, and strategic representation.
        We do not give false assurances — we provide honest legal guidance.
      </p>

      <div className="space-y-3 sm:space-y-4">
        {[
          "Thorough Case Preparation & Legal Research",
          "Transparent & Fair Legal Fees",
          "Client Confidentiality & Ethical Practice",
          "Timely Court Representation in District Courts",
          "Clear Communication & Honest Advice"
        ].map((v, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-sm bg-[#172e4e] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="8" fill="none" viewBox="0 0 10 8">
                <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-poppins text-sm text-[#172e4e]/75 checklist-text">{v}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

<section
  id="excellence"
  className="scroll-mt-16 excellence-bg py-16 sm:py-24 px-4 sm:px-6 text-white"
  aria-label="Commitment to excellence in legal services in Gautam Buddh Nagar"
>
  <div className="max-w-7xl mx-auto text-center">

    <div className="ornament" style={{ justifyContent:"center" }}>
      <span style={{ color:"rgba(255,255,255,0.4)" }}>
        Standards of Professional Advocacy
      </span>
    </div>

    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6 section-heading">
      Commitment to Legal Excellence in Every Case
    </h2>

    <p className="font-poppins font-light text-white/65 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-14 excellence-intro">
      Legal excellence is not defined by the size of a case, but by the
      dedication applied to it. Whether handling civil disputes, criminal
      defense matters, bail applications, or property litigation in
      Gautam Buddh Nagar courts, the same discipline, preparation,
      and courtroom precision is maintained throughout.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">

      {[
        {
          heading: "Detailed Case Analysis & Strategy",
          body: "Every matter is examined with careful legal research, document scrutiny, and precedent analysis to build a strong courtroom strategy before appearing in District Courts."
        },
        {
          heading: "Clear & Transparent Communication",
          body: "Clients are regularly updated about case progress, hearing dates, and legal options in straightforward language — ensuring complete clarity and trust."
        },
        {
          heading: "Ethical & Confidential Representation",
          body: "Professional conduct is guided by integrity, confidentiality, and adherence to Bar Council standards — maintaining the highest level of legal ethics."
        },
      ].map((c, i) => (
        <div key={i} className="bg-white/[0.07] border border-white/10 rounded-xl p-5 sm:p-7">
          <div className="w-8 h-1 bg-[#b8913a] mb-4 sm:mb-5 rounded-full" />
          <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 excellence-card-heading">
            {c.heading}
          </h3>
          <p className="font-poppins font-light text-sm text-white/62 leading-relaxed excellence-card-body">
            {c.body}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

   {/* ── VISION ── */}
<section id="vision" className="scroll-mt-16 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
  <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
    
    <div>
      <div className="ornament">
        <span>Future Direction</span>
      </div>

      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 sm:mb-6 section-heading">
        A Vision for Accessible 
      </h2>

      <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base body-text">
        The long-term vision is to make reliable and ethical legal services
        more accessible across Gautam Buddh Nagar, Noida, and Greater Noida.
        Quality legal representation should not feel intimidating or unreachable.
        It should be structured, transparent, and client-focused.
      </p>

      <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base body-text">
        The goal is to strengthen courtroom advocacy, promote legal awareness,
        and gradually expand services into specialized domains of civil,
        criminal, property, and family law — while maintaining the highest
        professional standards and client trust.
      </p>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {[
          { title:"Legal Awareness Initiatives", sub:"Workshops & basic legal guidance" },
          { title:"Client-Centric Practice", sub:"Clear advice & transparent process" },
          { title:"Strong Trial Advocacy", sub:"Focused representation in District Courts" },
          { title:"Structured Expansion", sub:"Specialised services in key legal areas" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-[#172e4e]/4 border border-[#172e4e]/8"
          >
            <div>
              <p className="font-poppins font-semibold text-xs sm:text-sm text-[#172e4e] vision-item-title">
                {item.title}
              </p>
              <p className="font-poppins text-xs text-[#172e4e]/50 mt-0.5 vision-item-sub">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative mt-12 md:mt-0">
      <div className="rounded-2xl overflow-hidden shadow-2xl xl:aspect-[5/4] lg:aspect-[3/5] md:aspect-[3/5]">
        <img
          src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=720&q=80"
          alt="District Court building representing legal services in Gautam Buddh Nagar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-5 bg-[#172e4e] text-white rounded-xl p-4 sm:p-5 shadow-xl">
        <p className="font-poppins text-xs text-white/50 mb-2 uppercase tracking-wider courts-label">
          Practising Before
        </p>

        <div className="flex flex-col gap-1.5">
          {[
            "District Court, Gautam Buddh Nagar",
            "Noida & Greater Noida Courts",
            "Relevant Tribunals & Authorities"
          ].map(c => (
            <p
              key={c}
              className="font-poppins text-xs sm:text-sm font-medium text-white/90 flex items-center gap-2 courts-item"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8913a] inline-block flex-shrink-0" />
              {c}
            </p>
          ))}
        </div>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}