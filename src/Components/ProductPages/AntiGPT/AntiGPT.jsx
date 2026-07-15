import React, { useState, useEffect, useRef } from "react";
import "./AntiGPT.css";

/* ─── Reveal Wrapper (intersection observer, same as Antitod) ─ */
const Reveal = ({ children, className = "", delay = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`agp-reveal ${visible ? "agp-visible" : ""} ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

/* ─── Capability pills (same SVGs as reference) ──────────────── */
const PILLS = [
  {
    label: "Images",
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
  },
  {
    label: "Videos",
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  },
  {
    label: "Audio",
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  },
  {
    label: "SMS",
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    label: "Email",
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: "URLs",
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  },
  {
    label: "Live Screen",
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
];

/* ─── Green check SVG (matches reference) ────────────────────── */
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f6f2b" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ─── Main Component ─────────────────────────────────────────── */
const AntiGPT = () => {
  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq((p) => (p === i ? null : i));

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    {
      q: "Can AI detection ever be perfect?",
      a: "While no system is 100% flawless, our multi-engine approach drastically reduces false positives and provides the highest possible confidence score available in the industry today.",
    },
    {
      q: "Does ANTI GPT store uploads?",
      a: "No. We process your files in memory and discard them immediately after analysis. We maintain a strict zero-retention policy.",
    },
    {
      q: "Can I scan screenshots?",
      a: "Yes. ANTI GPT can analyze screenshots of text messages, emails, and images to determine authenticity and detect tampering.",
    },
    {
      q: "How reliable are confidence scores?",
      a: "Extremely reliable. Because we cross-reference multiple independent AI detection models, a high confidence score means several distinct algorithms reached the same conclusion.",
    },
    {
      q: "Can businesses integrate ANTI GPT?",
      a: "Yes, we offer an enterprise API designed for high-volume integration into your existing security infrastructure, customer onboarding, and moderation tools.",
    },
    {
      q: "Does it work offline?",
      a: "Currently, ANTI GPT requires an internet connection as it relies on complex server-side multi-engine processing to maintain high accuracy and speed.",
    },
  ];

  return (
    <div className="agp-page">

      {/* ═══════════════ SECTION 1: HERO ═══════════════ */}
      <section className="agp-section agp-hero-section">
        {/* Radial glow top-left */}
        <div className="agp-radial-glow" style={{ top: "-100px", left: "-100px" }} />

        <div className="agp-container">
          <div className="agp-hero-grid">

            {/* Left — copy */}
            <Reveal>
              <div className="agp-label-pill">AI Verification Platform</div>
              <h1 className="agp-huge-title" style={{ marginBottom: "1.5rem" }}>
                Trust Nothing.<br />Verify Everything.
              </h1>
              <p className="agp-subheading" style={{ marginBottom: "3rem" }}>
                AI-generated images, videos, audio and scams are becoming
                impossible to distinguish.<br /><br />
                ANTI GPT helps you verify what's real before you trust it.
              </p>
              <div className="agp-hero-actions">
                <a href="#ag-compare" className="agp-btn-primary">Download App</a>
                <a href="#ag-how" className="agp-btn-secondary">Watch Demo</a>
              </div>
            </Reveal>

            {/* Right — phone mockup */}
            <Reveal className="agp-hero-visual" delay="agp-delay-2">
              {/* Red radial glow behind phone */}
              <div
                className="agp-radial-glow"
                style={{
                  background: "radial-gradient(circle, rgba(239,68,68,0.4) 0%, rgba(8,8,8,0) 60%)",
                  top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  opacity: 0.15,
                }}
              />
              <img
                src="/static/antigpt/hero.webp"
                alt="ANTI GPT app preview"
                className="agp-phone-image"
              />
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 2: CAPABILITY STRIP ═══════════════ */}
      <section className="agp-marquee-section">
        <div className="agp-marquee-container">
          {[0, 1].map((i) => (
            <div className="agp-marquee-content" key={i}>
              {PILLS.map(({ label, svg }) => (
                <div className="agp-capability-pill" key={label}>
                  {svg} {label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ SECTION 3: PROBLEM ═══════════════ */}
      <section className="agp-problem-section">
        <div className="agp-container">
          <div className="agp-problem-grid">

            {/* Left — bullet list */}
            <Reveal>
              <h2 className="agp-section-title" style={{ marginBottom: "3rem" }}>
                The internet is easier to fake than ever.
              </h2>
              <ul className="agp-problem-list">
                {["Deepfake videos.", "Voice cloning.", "AI generated images.", "Phishing.", "Fake banking messages.", "Fraud calls.", "Scam emails."].map((item) => (
                  <li key={item}><div className="agp-dot" /> {item}</li>
                ))}
              </ul>
            </Reveal>

            {/* Right — glitch visual */}
            <Reveal delay="agp-delay-2">
              <div className="agp-glitch-visual">
                <div className="agp-scan-lines" />
                <div className="agp-glitch-portrait">
                  <div className="agp-glitch-line-red" />
                  <div className="agp-glitch-line-blue" />
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1">
                    <circle cx="12" cy="8" r="5"/>
                    <path d="M20 21a8 8 0 0 0-16 0"/>
                  </svg>
                </div>
                <div className="agp-warning-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  This content may not be real.
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 4: TRANSITION ═══════════════ */}
      <section className="agp-transition-section">
        <Reveal>
          <h2 className="agp-huge-title" style={{ textAlign: "center", maxWidth: "1000px" }}>
            So we built ANTI GPT.
          </h2>
        </Reveal>
      </section>

      {/* ═══════════════ SECTION 5: FEATURES ═══════════════ */}
      <section className="agp-features-section">
        <div className="agp-container">
          <div className="agp-features-stack">

            {/* Feature 1: Image Detection */}
            <div className="agp-feature-row">
              <Reveal>
                <h3>Image Detection</h3>
                <p>Analyze pixels at a microscopic level to detect GANs, diffusion models, and subtle manipulations invisible to the human eye.</p>
                <ul className="agp-feature-checklist">
                  <li><CheckIcon /> Midjourney &amp; DALL-E detection</li>
                  <li><CheckIcon /> Metadata forgery analysis</li>
                </ul>
              </Reveal>
              <Reveal delay="agp-delay-2">
                <div className="agp-feature-visual">
                  <div className="agp-radial-glow" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(0,0,0,0) 70%)", top: "-50px", right: "-50px" }} />
                  <img
                    src="/static/antigpt/image_detection.png"
                    alt="Image detection result"
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                  />
                </div>
              </Reveal>
            </div>

            {/* Feature 2: Video Detection (reversed) */}
            <div className="agp-feature-row agp-reversed">
              <Reveal delay="agp-delay-2">
                <h3>Video Detection</h3>
                <p>Frame-by-frame analysis identifies deepfakes, face swapping, and lip-sync inconsistencies in real-time.</p>
                <ul className="agp-feature-checklist">
                  <li><CheckIcon /> Frame coherence check</li>
                  <li><CheckIcon /> Micro-expression analysis</li>
                </ul>
              </Reveal>
              <Reveal>
                <div className="agp-feature-visual">
                  <div className="agp-video-mockup">
                    <div className="agp-video-thumb">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polygon points="10 8 16 12 10 16 10 8"/>
                      </svg>
                      <div className="agp-video-warning-box" />
                    </div>
                    <div className="agp-video-timeline">
                      <div className="agp-tl-safe" />
                      <div className="agp-tl-danger" />
                      <div className="agp-tl-safe2" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Feature 3: Audio Detection */}
            <div className="agp-feature-row">
              <Reveal>
                <h3>Audio Detection</h3>
                <p>Detect synthetic voices and cloned audio by analyzing frequency artifacts and breathing patterns.</p>
                <ul className="agp-feature-checklist">
                  <li><CheckIcon /> ElevenLabs &amp; VALL-E detection</li>
                  <li><CheckIcon /> Spectral anomaly mapping</li>
                </ul>
              </Reveal>
              <Reveal delay="agp-delay-2">
                <div className="agp-feature-visual">
                  <div className="agp-waveform">
                    {[
                      { h: "20%", color: "#333" },
                      { h: "50%", color: "#333" },
                      { h: "80%", color: "#ef4444", glow: true },
                      { h: "100%", color: "#ef4444", glow: true },
                      { h: "60%", color: "#ef4444", glow: true },
                      { h: "40%", color: "#333" },
                      { h: "70%", color: "#333" },
                      { h: "30%", color: "#333" },
                    ].map((bar, i) => (
                      <div
                        key={i}
                        className="agp-wave-bar"
                        style={{
                          height: bar.h,
                          background: bar.color,
                          boxShadow: bar.glow ? "0 0 10px #ef4444" : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Feature 4–7: Mini cards grid */}
            <div className="agp-mini-cards">
              {[
                {
                  title: "Live Screen Detection",
                  body: "Verify if a shared screen is a live application or a pre-recorded / manipulated video feed during video calls.",
                },
                {
                  title: "SMS Fraud Detection",
                  body: "Analyze message semantics and links to identify smishing attempts and socially engineered text messages.",
                },
                {
                  title: "Email Scam Detection",
                  body: "Deep header analysis and LLM-based behavioral checks to catch advanced spear-phishing campaigns.",
                },
                {
                  title: "Phishing URL Detection",
                  body: "Real-time domain reputation and homograph attack detection to ensure you only visit authentic websites.",
                },
              ].map(({ title, body }, i) => (
                <Reveal key={title} delay={`agp-delay-${i % 3 + 1}`}>
                  <div className="agp-feature-card">
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 6: INTERACTIVE DEMO ═══════════════ */}
      <section className="agp-demo-section" id="ag-demo">
        <div className="agp-container">
          <h2 className="agp-section-title" style={{ textAlign: "center", marginBottom: "4rem" }}>
            Try ANTI GPT
          </h2>

          <Reveal delay="agp-delay-1">
            <div className="agp-demo-shell">

              {/* Left sidebar */}
              <div className="agp-demo-sidebar">
                <div className="agp-sidebar-label">Scan Type</div>
                {[
                  { label: "Image Scan", active: true, svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
                  { label: "Video Scan", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg> },
                  { label: "Audio Scan", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg> },
                  { label: "SMS", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
                  { label: "Email", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                  { label: "URL", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> },
                ].map(({ label, active, svg }) => (
                  <div key={label} className={`agp-sidebar-item ${active ? "agp-active" : ""}`}>
                    {svg} {label}
                  </div>
                ))}
              </div>

              {/* Center */}
              <div className="agp-demo-center">
                <div className="agp-drop-zone">
                  <div className="agp-drop-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 500, marginBottom: "0.5rem" }}>Drag &amp; Drop Upload</div>
                    <div style={{ fontSize: "0.875rem", color: "#a0a0a0" }}>Supports JPG, PNG, WEBP (Max 10MB)</div>
                  </div>
                </div>
              </div>

              {/* Right results */}
              <div className="agp-demo-results">
                <div className="agp-results-label">Analysis Result</div>
                <div className="agp-result-score-wrap">
                  <div className="agp-result-icon-wrap">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f6f2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="agp-result-verdict">Authentic</h3>
                  <div className="agp-result-pct">92%</div>
                  <p className="agp-result-sub">Confidence Score</p>
                </div>
                <div className="agp-result-details">
                  <div className="agp-result-row"><span>Metadata</span><span>Intact</span></div>
                  <div className="agp-result-row"><span>Noise Pattern</span><span>Natural</span></div>
                  <div className="agp-result-row"><span>Error Level</span><span>Normal</span></div>
                </div>
                <div className="agp-results-footer">Multiple AI engines checked.</div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ SECTION 7: WHY / BUILT DIFFERENTLY ═══════════════ */}
      <section className="agp-why-section" id="ag-why">
        <div className="agp-container">
          <h2 className="agp-section-title" style={{ marginBottom: "2rem" }}>Built differently.</h2>
          <div className="agp-why-cards">
            {[
              { title: "Multiple AI Engines", body: "We cross-reference results across several models to prevent false positives." },
              { title: "Privacy First", body: "Your uploads are never stored or used to train models. Zero-retention policy." },
              { title: "Built for Reality", body: "Designed for real-world scenarios — from compressed WhatsApp images to live calls." },
              { title: "Fast & Accurate", body: "Receive comprehensive analysis reports in milliseconds, without compromising precision." },
            ].map(({ title, body }, i) => (
              <Reveal key={title} delay={`agp-delay-${i + 1}`}>
                <div className="agp-feature-card">
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 8: HOW IT WORKS ═══════════════ */}
      <section className="agp-how-section" id="ag-how">
        <div className="agp-container agp-how-inner">
          <h2 className="agp-section-title" style={{ marginBottom: "6rem" }}>How it works</h2>
          <div className="agp-how-flow">
            <div className="agp-how-line" />
            <Reveal><div className="agp-how-node">Upload</div></Reveal>
            <Reveal delay="agp-delay-1">
              <div className="agp-how-engines">
                <div className="agp-how-engine">AI Engine 1</div>
                <div className="agp-how-engine">AI Engine 2</div>
                <div className="agp-how-engine">AI Engine 3</div>
              </div>
            </Reveal>
            <Reveal delay="agp-delay-2"><div className="agp-how-node" style={{ marginBottom: "2rem" }}>Confidence Calculation</div></Reveal>
            <Reveal delay="agp-delay-3"><div className="agp-how-verdict">Final Verdict</div></Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 9: VALUE ═══════════════ */}
      <section className="agp-value-section">
        <div className="agp-container">
          <div className="agp-value-grid">
            <Reveal>
              <h2 className="agp-huge-title" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
                Know before<br />you trust.
              </h2>
            </Reveal>
            <Reveal delay="agp-delay-2">
              <ul className="agp-value-checklist">
                {["AI Images", "Videos", "Audio", "SMS", "Email", "URLs", "Fraud Calls", "Live Screen"].map((item) => (
                  <li key={item}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0f0f0" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 10: COMPARISON ═══════════════ */}
      <section className="agp-compare-section" id="ag-compare">
        <div className="agp-container">
          <h2 className="agp-section-title" style={{ textAlign: "center", marginBottom: "4rem" }}>
            Not just another AI detector.
          </h2>
          <Reveal delay="agp-delay-1">
            <div className="agp-compare-table">
              <div className="agp-compare-header">
                <div />
                <div className="agp-compare-col-other">Others</div>
                <div className="agp-compare-col-us">ANTI GPT</div>
              </div>
              {[
                { feature: "Models", others: "Single AI Model", us: "Multiple AI Models" },
                { feature: "Formats", others: "Image Only", us: "Multi-format Detection" },
                { feature: "Reporting", others: "Basic Labels", us: "Confidence Reports" },
                { feature: "Scams", others: "No Fraud Detection", us: "Fraud Detection Included" },
                { feature: "Meetings", others: "No Live Screen", us: "Live Screen Analysis" },
              ].map(({ feature, others, us }) => (
                <div className="agp-compare-row" key={feature}>
                  <div className="agp-compare-feature">{feature}</div>
                  <div className="agp-compare-others">{others}</div>
                  <div className="agp-compare-us-cell">
                    <CheckIcon /> {us}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ SECTION 11: STATISTICS ═══════════════ */}
      <section className="agp-stats-section">
        <div className="agp-container">
          <div className="agp-stats-row">
            {[
              { val: "2.4M+", label: "Images" },
              { val: "890K+", label: "Videos" },
              { val: "650K+", label: "Audio" },
              { val: "98.7%", label: "Detection Confidence" },
              { val: "120K+", label: "Users" },
            ].map(({ val, label }, i) => (
              <Reveal key={val} delay={`agp-delay-${(i % 3) + 1}`}>
                <div className="agp-stat-number">{val}</div>
                <div className="agp-stat-label">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 12: FAQ ═══════════════ */}
      <section className="agp-faq-section" id="ag-faq">
        <div className="agp-container">
          <div className="agp-faq-inner">
            <h2 className="agp-section-title" style={{ marginBottom: "4rem" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map(({ q, a }, i) => (
              <Reveal key={q} delay={`agp-delay-${(i % 3) + 1}`}>
                <div
                  className={`agp-faq-item ${openFaq === i ? "agp-faq-open" : ""}`}
                  onClick={() => toggleFaq(i)}
                >
                  <div className="agp-faq-trigger">
                    <h3>{q}</h3>
                    <svg className="agp-faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                  <div className="agp-faq-answer"><p>{a}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 13: FINAL CTA ═══════════════ */}
      <section className="agp-cta-section">
        <div className="agp-radial-glow" style={{ background: "radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(8,8,8,0) 60%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.15, width: "1000px", height: "1000px" }} />
        <div className="agp-container">
          <div className="agp-cta-grid">

            <Reveal>
              <h2 className="agp-huge-title" style={{ marginBottom: "1.5rem", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                The internet will never be 100% authentic again.
              </h2>
              <p className="agp-subheading" style={{ marginBottom: "3rem", fontSize: "1.5rem", color: "#f0f0f0" }}>
                But you can verify it.
              </p>
              <a href="#" className="agp-btn-primary" style={{ fontSize: "1.125rem", padding: "1rem 2rem" }}>
                Download ANTI GPT
              </a>
            </Reveal>

            <Reveal delay="agp-delay-2">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="agp-cta-phone">
                  <div className="agp-cta-phone-notch" />
                  <div className="agp-cta-phone-body">
                    <div className="agp-cta-phone-img">
                      <img src="/static/antigpt/hero.webp" alt="ANTI GPT app" />
                      <div className="agp-cta-img-badge">Image</div>
                    </div>
                    <div className="agp-cta-result-card">
                      <div className="agp-cta-result-header">
                        <span style={{ fontWeight: 500, fontSize: "1.125rem" }}>Analysis</span>
                        <span style={{ color: "#a0a0a0", fontSize: "0.875rem" }}>Now</span>
                      </div>
                      <div className="agp-cta-result-row">
                        <div className="agp-cta-result-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f6f2b" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, color: "#1f6f2b" }}>Authentic Image</div>
                          <div style={{ fontSize: "0.875rem", color: "#a0a0a0" }}>98% Confidence Score</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AntiGPT;
