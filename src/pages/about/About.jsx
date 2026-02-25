import { useState, useEffect } from "react";

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
  { value: "22+", label: "Years at the Bar" },
  { value: "1,200+", label: "Cases Argued" },
  { value: "15+", label: "Courts Practised In" },
  { value: "94%", label: "Favourable Outcomes" },
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

  return (
    <div className="bg-white text-[#172e4e] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-poppins  { font-family: 'Poppins', sans-serif; }

        // .hero-shape { clip-path: polygon(0 0, 100% 0, 100% 90%, 55% 100%, 0 90%); }

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
      `}</style>

      {/* ── HERO ── */}
      <header className="hero-shape relative text-white pb-28 pt-12 px-6 overflow-hidden" role="banner">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-90vh object-cover object-center"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-[#172e4e]/85" />
        </div>
        {/* faint scales icon bg */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none" aria-hidden="true">
          <svg viewBox="0 0 200 240" className="w-72 h-72 fill-white">
            <rect x="98" y="0" width="4" height="240" rx="2"/>
            <rect x="60" y="20" width="80" height="4" rx="2"/>
            <circle cx="100" cy="20" r="8"/>
            <path d="M60 24L40 80" stroke="white" strokeWidth="3" fill="none"/>
            <path d="M140 24L160 80" stroke="white" strokeWidth="3" fill="none"/>
            <ellipse cx="40" cy="84" rx="22" ry="6"/>
            <ellipse cx="160" cy="84" rx="22" ry="6"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 fade-up">
            <div className="ornament mb-2"><span>Advocate &amp; Legal Counsel</span></div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-[1.12] mb-4">
              Justice Is Not a Privilege —<br/>
              <em className="font-playfair italic text-white/70">It Is a Right.</em>
            </h1>
            <p className="font-poppins font-light text-white/65 text-base md:text-lg leading-relaxed max-w-lg mt-4 mb-8">
              Adv. Rajan Mehta &amp; Associates is a full-service law practice committed to
              delivering principled, strategic, and courageous legal representation across
              civil, criminal, and corporate matters.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => goto("who-we-are")}
                className="font-poppins text-sm font-semibold bg-white text-[#172e4e] px-7 py-3 rounded-sm hover:bg-white/90 transition-all tracking-wide">
                Our Story
              </button>
              <button onClick={() => goto("expertise")}
                className="font-poppins text-sm font-medium border border-white/30 text-white px-7 py-3 rounded-sm hover:bg-white/10 transition-all tracking-wide">
                Areas of Practice
              </button>
            </div>
          </div>

          <div className="md:col-span-2 fade-up-d1 hidden md:block">
            <div className="img-frame relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
                  alt="Advocate Rajan Mehta — senior legal counsel in formal attire"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white text-[#172e4e] rounded-xl px-5 py-4 shadow-2xl border border-[#172e4e]/10 z-20">
                <p className="font-playfair font-bold text-lg leading-none">Adv. Rajan Mehta</p>
                <p className="font-poppins text-xs text-[#172e4e]/55 mt-1">LLB (Hons) · LLM · 22 yrs at Bar</p>
                <div className="flex items-center gap-1 mt-2">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 fill-[#b8913a]" viewBox="0 0 20 20">
                      <path d="M10 1l2.4 7H19l-5.7 4.1 2.2 6.9L10 15l-5.5 4 2.2-6.9L1 9h6.6z"/>
                    </svg>
                  ))}
                  <span className="font-poppins text-xs text-[#172e4e]/50 ml-1">Top-rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── STICKY NAV ── */}
      <nav className={` top-0 z-50 bg-white border-b border-[#172e4e]/10 transition-shadow ${scrolled ? "shadow-md" : ""}`}
        aria-label="About page section navigation">
        <div className="max-w-6xl mx-auto px-6 flex overflow-x-auto">
          {NAV_SECTIONS.map(({ id, label }) => (
            <button key={id} onClick={() => goto(id)}
              className={`nav-tab font-poppins text-sm font-medium whitespace-nowrap px-5 py-4 border-b-2 ${
                active === id ? "border-[#172e4e] text-[#172e4e]" : "border-transparent text-[#172e4e]/40 hover:text-[#172e4e]/70"
              }`}>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── STATS ── */}
      <div className="border-b border-[#172e4e]/8 bg-[#172e4e]/[0.025]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-playfair text-4xl font-bold text-[#172e4e]">{value}</p>
              <p className="font-poppins text-xs text-[#172e4e]/50 mt-1 tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section id="who-we-are" className="scroll-mt-16 max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="ornament"><span>Our Identity</span></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-6">Who We Are</h2>
            <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-5">
              Adv. Rajan Mehta &amp; Associates is a premier law practice based in New Delhi,
              with over two decades of advocacy before the Supreme Court of India, various
              High Courts, district tribunals, and quasi-judicial bodies. We are a team of
              dedicated legal professionals who believe that access to expert counsel should
              never be a matter of privilege.
            </p>
            <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-6">
              Our practice is built on a singular principle: every client — individual,
              family, or corporation — deserves an advocate who is as invested in their
              outcome as they are. We combine deep doctrinal knowledge with tactical
              litigation strategy to protect what matters most to you.
            </p>
            <div className="border-l-2 border-[#b8913a] pl-5 py-1">
              <p className="font-playfair italic text-[#172e4e] text-lg leading-snug">
                "The law is not a labyrinth for the privileged — it is a shield for every
                citizen. Our duty is to wield it with skill and conscience."
              </p>
              <p className="font-poppins text-xs text-[#172e4e]/45 mt-3">— Adv. Rajan Mehta, Founder</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=720&q=80"
                alt="Law library and scales of justice representing Adv. Rajan Mehta's practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-[#172e4e] text-white rounded-xl p-5 shadow-xl max-w-[190px]">
              <p className="font-playfair font-bold text-3xl gold">1,200+</p>
              <p className="font-poppins text-xs text-white/60 mt-1">Cases successfully argued across courts</p>
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
      <section id="expertise" className="scroll-mt-16 bg-[#172e4e]/[0.03] border-y border-[#172e4e]/8 py-24 px-6"
        aria-label="Core areas of legal practice">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="ornament" style={{ justifyContent:"center" }}><span>What We Do Best</span></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
              Our Core Areas of Expertise
            </h2>
            <p className="font-poppins font-light text-[#172e4e]/60 mt-4 max-w-2xl mx-auto">
              From the trial court floor to constitutional benches, our practice spans a
              wide spectrum of legal disciplines — each handled with the same rigour,
              dedication, and depth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area, i) => (
              <article key={i} className="card-lift bg-white rounded-xl p-8 border border-[#172e4e]/8 shadow-sm">
            
                <h3 className="font-playfair text-xl font-semibold mb-3">{area.title}</h3>
                <p className="font-poppins font-light text-sm text-[#172e4e]/65 leading-relaxed">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section id="philosophy" className="scroll-mt-16 max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=720&q=80"
                alt="Advocate reviewing case files — thorough preparation is our work ethic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 -right-6 hidden md:block bg-white border border-[#172e4e]/10 rounded-xl p-5 shadow-xl max-w-[170px] text-center">
              <p className="font-playfair font-bold text-3xl text-[#172e4e]">94%</p>
              <p className="font-poppins text-xs text-[#172e4e]/50 mt-1">Favourable outcomes for clients</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="ornament"><span>How We Think &amp; Work</span></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-6">
              Our Philosophy &amp; Work Ethic
            </h2>
            <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-5">
              We believe that the practice of law is not merely a profession — it is a
              calling. Our philosophy is rooted in a simple truth: a well-prepared advocate
              is an effective advocate. We invest deeply in understanding the factual and
              legal matrix of every matter before we step into a courtroom.
            </p>
            <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-8">
              We do not take shortcuts. We do not make promises we cannot keep. And we do
              not treat any case as routine — because to our client, it never is.
            </p>
            <div className="space-y-4">
              {VALUES.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-sm bg-[#172e4e] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" fill="none" viewBox="0 0 10 8">
                      <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-poppins text-sm text-[#172e4e]/75">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCELLENCE ── */}
      <section id="excellence" className="scroll-mt-16 excellence-bg py-24 px-6 text-white"
        aria-label="Our commitment to legal excellence">
        <div className="max-w-7xl mx-auto text-center">
          <div className="ornament" style={{ justifyContent:"center" }}>
            <span style={{ color:"rgba(255,255,255,0.4)" }}>Standards We Live By</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="font-poppins font-light text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
            Excellence in advocacy is not reserved for headline cases or high-value
            retainers. It is the standard we apply to every instruction, every notice, and
            every appearance — from district courts to the apex court of the land.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { heading:"Meticulous Case Preparation", body:"We study every document, precedent, and statutory provision relevant to your matter. The courtroom is where preparation becomes advocacy." },
              { heading:"Transparent Client Communication", body:"You will always know where your case stands — in plain, honest language. No ambiguity, no delays, no surprises." },
              { heading:"Ethical Practice, Always", body:"We are officers of the court. Our conduct is guided by the Bar Council of India rules and an unwavering personal commitment to professional ethics." },
            ].map((c, i) => (
              <div key={i} className="bg-white/[0.07] border border-white/10 rounded-xl p-7">
                <div className="w-8 h-1 bg-[#b8913a] mb-5 rounded-full" />
                <h3 className="font-playfair text-xl font-semibold mb-3">{c.heading}</h3>
                <p className="font-poppins font-light text-sm text-white/62 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── VISION ── */}
      <section id="vision" className="scroll-mt-16 max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="ornament"><span>Where We're Headed</span></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-6">
              Our Vision for the Future
            </h2>
            <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-5">
              We envision a future where quality legal counsel is accessible to every Indian
              citizen — not just those who can afford premium retainers. Our vision is to
              expand our practice through pro-bono initiatives, legal literacy programmes,
              and technology-enabled access to justice.
            </p>
            <p className="font-poppins font-light text-[#172e4e]/70 leading-relaxed mb-8">
              By 2030, we aim to establish a Legal Aid Clinic serving underrepresented
              communities, publish a practitioner's guide on emerging areas of Indian law,
              and mentor the next generation of advocates who will carry the profession
              forward with integrity and courage.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon:"🏫", title:"Legal Aid Clinic", sub:"Serving underserved communities" },
                { icon:"📖", title:"Legal Literacy", sub:"Community workshops & guides" },
                { icon:"👩‍⚖️", title:"Mentorship", sub:"Nurturing junior advocates" },
                { icon:"🌏", title:"Expanding Practice", sub:"New courts & new domains" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#172e4e]/4 border border-[#172e4e]/8">
                  {/* <span className="text-xl">{item.icon}</span> */}
                  <div>
                    <p className="font-poppins font-semibold text-sm text-[#172e4e]">{item.title}</p>
                    <p className="font-poppins text-xs text-[#172e4e]/50 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=720&q=80"
                alt="Supreme Court of India — representing the vision of Adv. Rajan Mehta's practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#172e4e] text-white rounded-xl p-5 shadow-xl">
              <p className="font-poppins text-xs text-white/50 mb-2 uppercase tracking-wider">Practising Before</p>
              <div className="flex flex-col gap-1.5">
                {["Supreme Court of India", "Delhi High Court", "District Courts & Tribunals"].map(c => (
                  <p key={c} className="font-poppins text-sm font-medium text-white/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b8913a] inline-block flex-shrink-0" />{c}
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