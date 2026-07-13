import React, { useState, useEffect, useRef } from "react";
import "./Antitod.css";

/* ─── Screenshot data ─────────────────────────────────────── */
const SCREENSHOTS = {
  dashboard: {
    src: "/static/antitod-images/dashboard.png",
    alt: "AntiTod dashboard screenshot",
    title: "Overview dashboard",
    description:
      "A single command center for active threats, severity distribution, component health, asset risk, attack types, events, and proposal status.",
    points: [
      "Live operations metrics across core modules",
      "Top asset risk and attack type visibility",
      "Role-aware dashboard for fast SOC triage",
    ],
  },
  threats: {
    src: "/static/antitod-images/generate_thrates.png",
    alt: "AntiTod synthetic threat generator screenshot",
    title: "Synthetic threat generator",
    description:
      "Create synthetic attack samples with configurable attack types, diversity, novelty controls, sample counts, and export formats.",
    points: [
      "Configurable generation workflows",
      "Diversity and novelty controls for stronger testing",
      "Structured JSON or binary output paths",
    ],
  },
  events: {
    src: "/static/antitod-images/event_detail.png",
    alt: "AntiTod event detail screenshot",
    title: "Threat event detail",
    description:
      "Investigate a specific event with timeline context, related threats, indicators, and recommended response actions.",
    points: [
      "Event timeline and investigation context",
      "Associated indicators and incident links",
      "Response recommendations for analysts",
    ],
  },
  policy: {
    src: "/static/antitod-images/generate_policy.png",
    alt: "AntiTod policy generation screenshot",
    title: "Autonomous policy synthesis",
    description:
      "Generate security policies from threat evidence, validate their impact, and prepare governed rollout plans with rollback compatibility.",
    points: [
      "Threat-based policy generation",
      "Validation and impact analysis",
      "Deployment readiness with human control",
    ],
  },
};

const SHOT_KEYS = Object.keys(SCREENSHOTS);

/* ─── Reveal Wrapper Component (matches .reveal.is-visible) ── */
const RevealWrapper = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.16 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const Antitod = () => {
  /* ── showcase tab state ──────────────────────────────────── */
  const [activeShot, setActiveShot] = useState("dashboard");
  const [showcaseImg, setShowcaseImg] = useState(SCREENSHOTS.dashboard);
  const [imgVisible, setImgVisible] = useState(true);
  const autoplayRef = useRef(null);

  const switchShot = (key) => {
    if (key === activeShot) return;
    setImgVisible(false);
    setTimeout(() => {
      setActiveShot(key);
      setShowcaseImg(SCREENSHOTS[key]);
      setImgVisible(true);
    }, 140);
  };

  const startAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActiveShot((prev) => {
        const next = SHOT_KEYS[(SHOT_KEYS.indexOf(prev) + 1) % SHOT_KEYS.length];
        setImgVisible(false);
        setTimeout(() => {
          setShowcaseImg(SCREENSHOTS[next]);
          setImgVisible(true);
        }, 140);
        return next;
      });
    }, 4500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    startAutoplay();
    return () => clearInterval(autoplayRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── FAQ accordion state ─────────────────────────────────── */
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (idx) => setOpenFaq((prev) => (prev === idx ? null : idx));

  /* ── Hero visual tilt ────────────────────────────────────── */
  const heroVisualRef = useRef(null);

  const handleHeroMouseMove = (e) => {
    const el = heroVisualRef.current;
    if (!el) return;
    const bounds = el.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;
    el.style.setProperty("--tilt-y", `${x * 8 - 3}deg`);
    el.style.setProperty("--tilt-x", `${2 - y * 6}deg`);
  };

  const handleHeroMouseLeave = () => {
    const el = heroVisualRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-y", "-5deg");
    el.style.setProperty("--tilt-x", "2deg");
  };

  /* ── FAQ data ────────────────────────────────────────────── */
  const faqs = [
    {
      q: "What is AntiTod?",
      a: "AntiTod is a B2B security orchestration platform for predictive threat analysis, policy synthesis, agent consensus, and governed response.",
    },
    {
      q: "Who is the product for?",
      a: "It is designed for SOC analysts, security engineers, and platform administrators working across enterprise infrastructure and cloud systems.",
    },
    {
      q: "How is AI controlled?",
      a: "AI-generated proposals move through scopes, validation checks, consensus votes, deployment tracking, and audit logs before they become operational.",
    },
    {
      q: "Can AntiTod support enterprise workflows?",
      a: "Yes. AntiTod is structured around role-based access, tenant controls, audit trails, policy validation, and staged deployment workflows.",
    },
  ];

  return (
    <div className="at-page">
      <div className="page-shell">
        <main id="top">
          {/* ═════════════════ HERO ═════════════════ */}
          <section className="hero" aria-labelledby="hero-title">
            <RevealWrapper className="hero-copy-wrap">
              <div className="eyebrow">
                <span className="pulse-dot"></span>Enterprise security platform
              </div>
              <h1 id="hero-title">
                <span className="hero-line">Predict threats.</span>
                <span className="hero-line hero-line-accent">Respond faster.</span>
              </h1>
              <div className="hero-loop" aria-label="AntiTod workflow">
                <span className="hero-loop-label">AntiTod helps teams</span>
                <span className="hero-loop-words" aria-hidden="true">
                  <span>detect risk</span>
                  <span>predict paths</span>
                  <span>deploy policy</span>
                  <span>detect risk</span>
                </span>
              </div>
              <p className="hero-copy">
                AntiTod brings threats, attack paths, policies, and approvals into one
                clear workspace for security teams.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#solution">Explore solution</a>
                <a className="btn" href="#faq">Read FAQs</a>
              </div>
              <div className="hero-proof" aria-label="Product highlights">
                <span className="proof-pill">37 planned routes</span>
                <span className="proof-pill">3 role tiers</span>
                <span className="proof-pill">7 security modules</span>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div
                className="hero-visual"
                ref={heroVisualRef}
                onMouseMove={handleHeroMouseMove}
                onMouseLeave={handleHeroMouseLeave}
                aria-label="AntiTod dashboard preview"
              >
                <div className="browser-frame">
                  <div className="browser-chrome" aria-hidden="true">
                    <span className="chrome-dot"></span>
                    <span className="chrome-dot"></span>
                    <span className="chrome-dot"></span>
                  </div>
                  <img
                    src="/static/antitod-images/dashboard.png"
                    alt="AntiTod dashboard with security operations metrics"
                  />
                </div>
                <aside className="floating-card" aria-label="Live platform signals">
                  <strong>Live orchestration signals</strong>
                  <div className="signal-row"><span>Consensus proposals</span><b>12 active</b></div>
                  <div className="signal-row"><span>Critical asset drift</span><b>8.7 risk</b></div>
                  <div className="signal-row"><span>Policy coverage</span><b>94%</b></div>
                </aside>
              </div>
            </RevealWrapper>
          </section>

          {/* ═════════════════ PROBLEM ═════════════════ */}
          <section className="section" id="problem">
            <RevealWrapper className="section-heading">
              <span className="section-kicker">Problem statement</span>
              <h2>Security teams see the alert. They miss the story.</h2>
              <p>
                Modern attacks move through identity, endpoints, cloud services, policy gaps,
                and human approval queues. Tools expose fragments, while teams still assemble
                the attack path manually under pressure.
              </p>
            </RevealWrapper>

            <div className="problem-grid">
              <RevealWrapper>
                <article className="pain-card">
                  <h3>The operating gap</h3>
                  <p>
                    A SOC analyst can read threats, a security engineer can write policies, and
                    an administrator can govern everything. But without a shared predictive layer,
                    every role works from a different version of risk.
                  </p>
                </article>
              </RevealWrapper>

              <div className="threat-list">
                {[
                  {
                    n: "01",
                    title: "Threat data arrives faster than context.",
                    body: "Events, incidents, CVEs, honeypots, and endpoints compete for attention.",
                  },
                  {
                    n: "02",
                    title: "Policies lag behind attacker movement.",
                    body: "Manual rules are slow to validate, approve, deploy, and roll back.",
                  },
                  {
                    n: "03",
                    title: "Automation without governance creates risk.",
                    body: "Teams need agent speed with audit trails, scopes, and human authority.",
                  },
                ].map(({ n, title, body }) => (
                  <RevealWrapper key={n}>
                    <div className="threat-item">
                      <span className="threat-icon">{n}</span>
                      <div>
                        <strong>{title}</strong>
                        <span>{body}</span>
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* ═════════════════ SOLUTION ═════════════════ */}
          <section className="section" id="solution">
            <RevealWrapper className="section-heading">
              <span className="section-kicker">Solution statement</span>
              <h2>One command layer for prediction, policy, and response.</h2>
              <p>
                AntiTod unifies synthetic threat generation, temporal attack graphs,
                autonomous policy synthesis, consensus voting, vulnerability forecasting,
                honeypot telemetry, and endpoint analysis in one governed workspace.
              </p>
            </RevealWrapper>

            <div className="solution-grid">
              {[
                {
                  n: "01 / Predict",
                  title: "Model likely attack paths before they mature.",
                  body: "Correlate temporal events, CVE trends, asset scores, and attacker behavior so teams can prioritize what is becoming dangerous.",
                },
                {
                  n: "02 / Synthesize",
                  title: "Generate policies from threat evidence.",
                  body: "Create, validate, stage, deploy, and monitor security policies with impact analysis and rollback readiness.",
                },
                {
                  n: "03 / Govern",
                  title: "Keep every AI action explainable and scoped.",
                  body: "Role-based access, proposal voting, audit logs, and tenant controls keep speed accountable.",
                },
              ].map(({ n, title, body }) => (
                <RevealWrapper key={n}>
                  <article className="solution-card">
                    <div className="card-number">{n}</div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                </RevealWrapper>
              ))}
            </div>
          </section>

          {/* ═════════════════ SHOWCASE ═════════════════ */}
          <section className="section" id="showcase">
            <RevealWrapper className="section-heading">
              <span className="section-kicker">Product screenshots</span>
              <h2>The product story, shown through real UI moments.</h2>
              <p>
                Explore how AntiTod brings monitoring, investigation, threat simulation,
                and policy synthesis into a single security workspace.
              </p>
            </RevealWrapper>

            <RevealWrapper>
              <div
                className="showcase-shell"
                onMouseEnter={() => clearInterval(autoplayRef.current)}
                onMouseLeave={startAutoplay}
                onFocus={() => clearInterval(autoplayRef.current)}
                onBlur={startAutoplay}
              >
                <div className="showcase-tabs" role="tablist" aria-label="AntiTod screenshot views">
                  {[
                    { key: "dashboard", label: "Overview" },
                    { key: "threats", label: "Threat generator" },
                    { key: "events", label: "Event detail" },
                    { key: "policy", label: "Policy synthesis" },
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      className="tab-button"
                      type="button"
                      role="tab"
                      aria-selected={activeShot === key}
                      onClick={() => {
                        switchShot(key);
                        startAutoplay();
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="showcase-stage">
                  <div className="screenshot-panel">
                    <img
                      src={showcaseImg.src}
                      alt={showcaseImg.alt}
                      style={{ opacity: imgVisible ? 1 : 0, transition: "opacity 140ms ease" }}
                    />
                  </div>
                  <aside className="showcase-copy">
                    <h3>{showcaseImg.title}</h3>
                    <p>{showcaseImg.description}</p>
                    <ul className="feature-list">
                      {showcaseImg.points.map((point) => (
                        <li key={point}>
                          <span className="check">+</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </div>
            </RevealWrapper>

            <div className="metrics" aria-label="Product metrics">
              {[
                { val: "4.8x", label: "faster path-to-policy cycle across response workflows" },
                { val: "94%", label: "policy coverage visibility after validation" },
                { val: "8m", label: "from threat simulation to staged rollout" },
                { val: "100%", label: "auditable agent proposals and admin actions" },
              ].map(({ val, label }) => (
                <RevealWrapper key={val} className="metric-card">
                  <strong>{val}</strong>
                  <span>{label}</span>
                </RevealWrapper>
              ))}
            </div>
          </section>

          {/* ═════════════════ VALUE ═════════════════ */}
          <section className="section" id="value">
            <RevealWrapper className="section-heading">
              <span className="section-kicker">Value proposition</span>
              <h2>Turn fragmented security work into a governed response loop.</h2>
              <p>
                AntiTod gives each role a clear job while keeping the organization aligned
                around one model of risk, evidence, policy, and accountability.
              </p>
            </RevealWrapper>

            <div className="value-grid">
              {[
                {
                  tag: "For SOC analysts",
                  title: "See what matters first.",
                  body: "Read threats, events, incidents, endpoints, vulnerabilities, and honeypot interactions with prioritized paths and evidence.",
                },
                {
                  tag: "For security engineers",
                  title: "Move from insight to policy.",
                  body: "Generate, validate, and deploy policies from real threat context while monitoring impact and rollback compatibility.",
                },
                {
                  tag: "For administrators",
                  title: "Govern the system with confidence.",
                  body: "Manage tenants, API keys, users, audit logs, and system health with clear access boundaries.",
                },
                {
                  tag: "For leadership",
                  title: "Translate risk into operating clarity.",
                  body: "Understand where protection is improving, where exposure is rising, and which controls are ready for deployment.",
                },
              ].map(({ tag, title, body }) => (
                <RevealWrapper key={tag}>
                  <article className="value-card">
                    <span className="tag">{tag}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                </RevealWrapper>
              ))}
            </div>
          </section>

          {/* ═════════════════ WHY US ═════════════════ */}
          <section className="section" id="why-us">
            <RevealWrapper className="section-heading">
              <span className="section-kicker">Why us</span>
              <h2>Built for predictive defense, not noisy dashboards.</h2>
              <p>
                AntiTod is designed around the complete security decision chain:
                simulate, correlate, predict, propose, validate, deploy, audit.
              </p>
            </RevealWrapper>

            <div className="why-layout">
              <RevealWrapper>
                <aside className="why-panel">
                  <h3>Role-aware by default</h3>
                  <p>
                    Access is not a bolt-on. Each route maps to a scope, and higher roles
                    inherit lower-role capabilities without blurring responsibility.
                  </p>
                  <div className="scope-stack">
                    {[
                      { n: "1", role: "SOC Analyst", scope: "read:threats", tier: "Tier 1" },
                      { n: "2", role: "Security Engineer", scope: "write:policies", tier: "Tier 2" },
                      { n: "3", role: "Platform Administrator", scope: "admin:all", tier: "Tier 3" },
                    ].map(({ n, role, scope, tier }) => (
                      <div className="scope-row" key={n}>
                        <i>{n}</i>
                        <span>
                          <strong>{role}</strong>
                          <span>{scope}</span>
                        </span>
                        <b>{tier}</b>
                      </div>
                    ))}
                  </div>
                </aside>
              </RevealWrapper>

              <div className="module-map" aria-label="AntiTod module map">
                {[
                  { code: "STG", name: "Synthetic Threat Generator", desc: "Create attack samples with configurable diversity and output formats." },
                  { code: "TKG", name: "Temporal Knowledge Graph", desc: "Visualize attack chains, query timelines, and predict progression paths." },
                  { code: "APS", name: "Autonomous Policy Synthesizer", desc: "Generate, validate, deploy, and track security policies." },
                  { code: "MAO", name: "Multi-Agent Orchestrator", desc: "Coordinate proposals, votes, consensus, and evidence-backed approvals." },
                  { code: "PVF", name: "Predictive Vulnerability Forecaster", desc: "Forecast CVE trends, asset risk, severity, and remediation priority." },
                  { code: "AHN + IETA", name: "Honeypots and endpoints", desc: "Capture attacker behavior and analyze endpoint exposure across the fleet." },
                ].map(({ code, name, desc }) => (
                  <RevealWrapper key={code}>
                    <article className="module-item">
                      <small>{code}</small>
                      <strong>{name}</strong>
                      <p>{desc}</p>
                    </article>
                  </RevealWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* ═════════════════ FAQ ═════════════════ */}
          <section className="section" id="faq">
            <RevealWrapper className="section-heading">
              <span className="section-kicker">FAQs</span>
              <h2>Product FAQs</h2>
              <p>
                Clear answers for teams evaluating AntiTod as a predictive security
                orchestration layer.
              </p>
            </RevealWrapper>

            <div className="faq-grid">
              <RevealWrapper>
                <aside className="faq-aside">
                  <h3>Enterprise-ready orchestration</h3>
                  <p>
                    AntiTod connects threat intelligence, policy workflows, agent consensus,
                    and audit controls so teams can move from detection to governed action.
                  </p>
                </aside>
              </RevealWrapper>

              <div className="faq-list">
                {faqs.map(({ q, a }, idx) => (
                  <RevealWrapper key={q}>
                    <article className={`faq-item ${openFaq === idx ? "is-open" : ""}`}>
                      <button
                        className="faq-question"
                        type="button"
                        aria-expanded={openFaq === idx}
                        onClick={() => toggleFaq(idx)}
                      >
                        <span>{q}</span>
                        <b>{openFaq === idx ? "×" : "+"}</b>
                      </button>
                      <div className="faq-answer">
                        <p>{a}</p>
                      </div>
                    </article>
                  </RevealWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* ═════════════════ FINAL CTA ═════════════════ */}
          <RevealWrapper>
            <section className="final-cta" aria-label="Final product call to action">
              <div>
                <h2>Bring prediction and response into one system.</h2>
                <p>
                  AntiTod helps security teams understand risk earlier, create stronger
                  policies, and govern every response with clarity.
                </p>
              </div>
              <a className="btn btn-primary" href="#top">Back to top</a>
            </section>
          </RevealWrapper>
        </main>
      </div>
    </div>
  );
};

export default Antitod;
