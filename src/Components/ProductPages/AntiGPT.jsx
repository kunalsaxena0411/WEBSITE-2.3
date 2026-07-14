import React, { useState } from "react";
import "./AntiGPT.css";

const AntiGPT = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };



  return (
    <div className="antigpt-page-container">
      {/* SECTION 1: HERO */}
      <section className="section min-h-screen hero-section" style={{ paddingTop: "12rem", display: "flex", alignItems: "center" }}>
        <div className="radial-glow" style={{ top: "-100px", left: "-100px" }}></div>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          
          <div className="hero-content reveal-up">
            <div className="label-pill">AI Verification Platform</div>
            <h1 className="huge-title" style={{ marginBottom: "1.5rem" }}>Trust Nothing.<br />Verify Everything.</h1>
            <p className="subheading" style={{ marginBottom: "3rem" }}>
              AI-generated images, videos, audio and scams are becoming impossible to distinguish.<br /><br />
              AntiGPT helps you verify what's real before you trust it.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#" className="btn-primary">Download App</a>
              <a href="#" className="btn-secondary">Watch Demo</a>
            </div>
          </div>

          <div className="hero-visual" style={{ position: "relative" }}>
            <div className="radial-glow" style={{ background: "radial-gradient(circle, var(--accent-red) 0%, rgba(8,8,8,0) 60%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15 }}></div>
            {/* Overlapping Dual Phone Mockup */}
            <div className="overlapping-phones">
              {/* Back Phone: Splash Screen */}
              <div className="phone-device phone-back">
                <div className="phone-notch"></div>
                <img src="/static/antigpt/hero.webp" className="phone-screen" alt="AntiGPT Splash Screen" />
              </div>
              {/* Front Phone: Home Screen */}
              <div className="phone-device phone-front">
                <div className="phone-notch"></div>
                <img src="/static/antigpt/home.png" className="phone-screen" alt="AntiGPT Home Screen" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CAPABILITY STRIP */}
      <section className="section" style={{ padding: "4rem 0", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", overflow: "hidden" }}>
        <div className="marquee-container" style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap", animation: "marquee 30s linear infinite" }}>
          <div className="marquee-content" style={{ display: "flex", gap: "2rem" }}>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Images</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> Videos</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> Audio</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> SMS</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> URLs</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> Live Screen</div>
          </div>
          <div className="marquee-content" style={{ display: "flex", gap: "2rem" }}>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Images</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> Videos</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> Audio</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> SMS</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> URLs</div>
            <div className="capability-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> Live Screen</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM */}
      <section className="section" style={{ padding: "12rem 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div className="reveal-up">
            <h2 className="section-title" style={{ marginBottom: "3rem" }}>The internet is easier to fake than ever.</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <li style={{ fontSize: "1.5rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "50%" }}></div> Deepfake videos.</li>
              <li style={{ fontSize: "1.5rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "50%" }}></div> Voice cloning.</li>
              <li style={{ fontSize: "1.5rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "50%" }}></div> AI generated images.</li>
              <li style={{ fontSize: "1.5rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "50%" }}></div> Phishing.</li>
              <li style={{ fontSize: "1.5rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "50%" }}></div> Fake banking messages.</li>
              <li style={{ fontSize: "1.5rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "50%" }}></div> Fraud calls.</li>
              <li style={{ fontSize: "1.5rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "50%" }}></div> Scam emails.</li>
            </ul>
          </div>
          
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "520px" }}>
            <div className="radial-glow" style={{ background: "radial-gradient(circle, var(--accent-red) 0%, rgba(8,8,8,0) 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15 }}></div>
            <div className="phone-device phone-tilt-right">
              <div className="phone-notch"></div>
              <img src="/static/antigpt/detection_analysis.webp" className="phone-screen" alt="App detected fake content screen" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSITION */}
      <section className="section flex-center" style={{ padding: "6rem 0" }}>
        <h2 className="huge-title reveal-up" style={{ textAlign: "center", maxWidth: "1000px" }}>So we built AntiGPT.</h2>
      </section>

      {/* SECTION 5: SOLUTION */}
      <section className="section" style={{ padding: "8rem 0" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "12rem" }}>
          
          {/* Feature 1: Image Detection */}
          <div className="feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div className="feature-text reveal-up">
              <h3 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Image Detection</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", marginBottom: "2rem" }}>Analyze pixels at a microscopic level to detect GANs, diffusion models, and subtle manipulations invisible to the human eye.</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Midjourney & DALL-E detection</li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Metadata forgery analysis</li>
              </ul>
            </div>
            <div className="feature-visual" style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "520px" }}>
              <div className="radial-glow" style={{ background: "radial-gradient(circle, var(--accent-blue) 0%, rgba(0,0,0,0) 70%)", top: "-50px", right: "-50px" }}></div>
              <div className="phone-device phone-tilt-right">
                <div className="phone-notch"></div>
                <img src="/static/antigpt/image_detection.png" className="phone-screen" alt="Scanning Image" />
              </div>
            </div>
          </div>

          {/* Feature 2: Video Detection (Reversed) */}
          <div className="feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", direction: "rtl" }}>
            <div className="feature-text reveal-up delay-2" style={{ direction: "ltr" }}>
              <h3 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Video Detection</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", marginBottom: "2rem" }}>Frame-by-frame analysis identifies deepfakes, face swapping, and lip-sync inconsistencies in real-time.</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Frame coherence check</li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Micro-expression analysis</li>
              </ul>
            </div>
            <div className="feature-visual" style={{ direction: "ltr", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "520px" }}>
              <div className="radial-glow" style={{ background: "radial-gradient(circle, var(--accent-purple) 0%, rgba(8,8,8,0) 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15 }}></div>
              <div className="phone-device phone-tilt-left">
                <div className="phone-notch"></div>
                <img src="/static/antigpt/ALL history.webp" className="phone-screen" alt="App Scan History Log" />
              </div>
            </div>
          </div>
          
          {/* Feature 3: Audio Detection */}
          <div className="feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div className="feature-text reveal-up">
              <h3 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Audio Detection</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", marginBottom: "2rem" }}>Detect synthetic voices and cloned audio by analyzing frequency artifacts and breathing patterns.</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> ElevenLabs & VALL-E detection</li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Spectral anomaly mapping</li>
              </ul>
            </div>
            <div className="feature-visual" style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "520px" }}>
              <div className="radial-glow" style={{ background: "radial-gradient(circle, var(--accent-green) 0%, rgba(8,8,8,0) 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15 }}></div>
              <div className="phone-device phone-tilt-right">
                <div className="phone-notch"></div>
                <img src="/static/antigpt/home.png" className="phone-screen" alt="App Home screen showing Audio scan capability" />
              </div>
            </div>
          </div>

          {/* Feature Card Summary Block */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginTop: "1.5rem" }}>
            <div className="reveal-up feature-card" style={{ minHeight: "auto", padding: "3rem" }}>
              <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Live Screen Detection</h4>
              <p style={{ color: "var(--text-secondary)" }}>Verify if a shared screen is a live application or a pre-recorded/manipulated video feed during video calls.</p>
            </div>
            <div className="reveal-up delay-1 feature-card" style={{ minHeight: "auto", padding: "3rem" }}>
              <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>SMS Fraud Detection</h4>
              <p style={{ color: "var(--text-secondary)" }}>Analyze message semantics and links to identify smishing attempts and socially engineered text messages.</p>
            </div>
            <div className="reveal-up delay-2 feature-card" style={{ minHeight: "auto", padding: "3rem" }}>
              <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Email Scam Detection</h4>
              <p style={{ color: "var(--text-secondary)" }}>Deep header analysis and LLM-based behavioral checks to catch advanced spear-phishing campaigns.</p>
            </div>
            <div className="reveal-up delay-3 feature-card" style={{ minHeight: "auto", padding: "3rem" }}>
              <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Phishing URL Detection</h4>
              <p style={{ color: "var(--text-secondary)" }}>Real-time domain reputation and homograph attack detection to ensure you only visit authentic websites.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: INTERACTIVE DEMO */}
      <section className="section" style={{ padding: "8rem 0", background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <h2 className="section-title reveal-up" style={{ textAlign: "center", marginBottom: "4rem" }}>Try AntiGPT</h2>
          
          <div className="reveal-up delay-1" style={{ background: "#0d0d0d", border: "1px solid var(--border-color)", borderRadius: "24px", overflow: "hidden", display: "flex", height: "600px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
            {/* Left Sidebar */}
            <div style={{ width: "250px", background: "#080808", borderRight: "1px solid var(--border-color)", padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "1rem", textTransform: "uppercase" }}>Scan Type</div>
              <div style={{ padding: "0.75rem 1rem", background: "rgba(255,255,255,0.1)", borderRadius: "8px", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Image Scan</div>
              <div style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> Video Scan</div>
              <div style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> Audio Scan</div>
              <div style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> SMS</div>
              <div style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email</div>
              <div style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.75rem" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> URL</div>
            </div>
            {/* Center Area */}
            <div style={{ flex: 1, padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "100%", maxWidth: "400px", height: "300px", border: "2px dashed rgba(255,255,255,0.1)", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", background: "rgba(255,255,255,0.02)", cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 500, marginBottom: "0.5rem" }}>Drag & Drop Upload</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Supports JPG, PNG, WEBP (Max 10MB)</div>
                </div>
              </div>
            </div>
            {/* Right Sidebar */}
            <div style={{ width: "300px", background: "#080808", borderLeft: "1px solid var(--border-color)", padding: "2rem", display: "flex", flexDirection: "column" }}>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "2rem", textTransform: "uppercase" }}>Analysis Result</div>
              
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                <div style={{ width: "64px", height: "64px", background: "rgba(31, 111, 43, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", color: "var(--accent-green)" }}>Authentic</h3>
                <div style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}>92%</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Confidence Score</p>
              </div>
              
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Metadata</span> <span style={{ color: "var(--text-primary)" }}>Intact</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Noise Pattern</span> <span style={{ color: "var(--text-primary)" }}>Natural</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Error Level</span> <span style={{ color: "var(--text-primary)" }}>Normal</span></div>
              </div>
              <div style={{ marginTop: "auto", fontSize: "0.75rem", color: "var(--text-secondary)", textAlign: "center" }}>
                Multiple AI engines checked.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY ANTI GPT */}
      <section className="section" style={{ padding: "5rem 0" }}>
        <div className="container">
          <h2 className="section-title reveal-up" style={{ marginBottom: "2rem" }}>Built differently.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            
            <div className="reveal-up feature-card">
              <div>
                <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Multiple AI Engines</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>We cross-reference results across several models to prevent false positives.</p>
              </div>
            </div>

            <div className="reveal-up delay-1 feature-card">
              <div>
                <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Privacy First</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Your uploads are never stored or used to train models. Zero-retention policy.</p>
              </div>
            </div>

            <div className="reveal-up delay-2 feature-card">
              <div>
                <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Built for Reality</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Designed for real-world scenarios—from compressed WhatsApp images to live calls.</p>
              </div>
            </div>

            <div className="reveal-up delay-3 feature-card">
              <div>
                <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Fast & Accurate</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Receive comprehensive analysis reports in milliseconds, without compromising precision.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: HOW IT WORKS */}
      <section className="section" style={{ padding: "8rem 0", borderTop: "1px solid var(--border-color)" }}>
        <div className="container flex-center" style={{ flexDirection: "column" }}>
          <h2 className="section-title reveal-up" style={{ marginBottom: "6rem" }}>How it works</h2>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", position: "relative" }}>
            {/* Connecting Line */}
            <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "2px", background: "linear-gradient(180deg, transparent, var(--border-color) 20%, var(--border-color) 80%, transparent)", transform: "translateX(-50%)", zIndex: -1 }}></div>

            <div className="reveal-up" style={{ background: "#111", padding: "1rem 2rem", borderRadius: "9999px", border: "1px solid var(--border-color)", fontWeight: 500 }}>Upload</div>
            
            <div className="reveal-up delay-1" style={{ display: "flex", gap: "2rem", margin: "2rem 0" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem 2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", fontSize: "0.875rem", color: "var(--text-secondary)" }}>AI Engine 1</div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem 2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", fontSize: "0.875rem", color: "var(--text-secondary)" }}>AI Engine 2</div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem 2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", fontSize: "0.875rem", color: "var(--text-secondary)" }}>AI Engine 3</div>
            </div>

            <div className="reveal-up delay-2" style={{ background: "#111", padding: "1rem 2rem", borderRadius: "9999px", border: "1px solid var(--border-color)", fontWeight: 500, marginBottom: "2rem" }}>Confidence Calculation</div>
            
            <div className="reveal-up delay-3" style={{ background: "#f0f0f0", color: "#000", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 600, fontSize: "1.125rem", boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}>Final Verdict</div>
          </div>
        </div>
      </section>

      {/* SECTION 9: VALUE PROPOSITION */}
      <section className="section" style={{ padding: "12rem 0", background: "#000" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div className="reveal-up">
            <h2 className="huge-title" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>Know before<br />you trust.</h2>
          </div>
          <div className="reveal-up delay-2">
            <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> AI Images</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Videos</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Audio</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> SMS</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Email</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> URLs</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Fraud Calls</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.25rem", fontWeight: 500 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Live Screen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 10: COMPARISON TABLE */}
      <section className="section" style={{ padding: "8rem 0" }}>
        <div className="container">
          <h2 className="section-title reveal-up" style={{ textAlign: "center", marginBottom: "4rem" }}>Not just another AI detector.</h2>
          
          <div className="reveal-up delay-1" style={{ maxWidth: "900px", margin: "0 auto", background: "#0a0a0a", border: "1px solid var(--border-color)", borderRadius: "24px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "2rem", borderBottom: "1px solid var(--border-color)", fontWeight: 600, fontSize: "1.25rem" }}>
              <div></div>
              <div style={{ color: "var(--text-secondary)", textAlign: "center" }}>Others</div>
              <div style={{ textAlign: "center" }}>AntiGPT</div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "2rem", borderBottom: "1px solid #1a1a1a", alignItems: "center" }}>
              <div style={{ fontWeight: 500 }}>Models</div>
              <div style={{ color: "var(--text-secondary)", textAlign: "center" }}>Single AI Model</div>
              <div style={{ textAlign: "center", display: "flex", alignItems: "center", justify: "center", gap: "0.5rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Multiple AI Models</div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "2rem", borderBottom: "1px solid #1a1a1a", alignItems: "center" }}>
              <div style={{ fontWeight: 500 }}>Formats</div>
              <div style={{ color: "var(--text-secondary)", textAlign: "center" }}>Image Only</div>
              <div style={{ textAlign: "center", display: "flex", alignItems: "center", justify: "center", gap: "0.5rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi-format Detection</div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "2rem", borderBottom: "1px solid #1a1a1a", alignItems: "center" }}>
              <div style={{ fontWeight: 500 }}>Reporting</div>
              <div style={{ color: "var(--text-secondary)", textAlign: "center" }}>Basic Labels</div>
              <div style={{ textAlign: "center", display: "flex", alignItems: "center", justify: "center", gap: "0.5rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Confidence Reports</div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "2rem", borderBottom: "1px solid #1a1a1a", alignItems: "center" }}>
              <div style={{ fontWeight: 500 }}>Scams</div>
              <div style={{ color: "var(--text-secondary)", textAlign: "center" }}>No Fraud Detection</div>
              <div style={{ textAlign: "center", display: "flex", alignItems: "center", justify: "center", gap: "0.5rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Fraud Detection Included</div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "2rem", alignItems: "center" }}>
              <div style={{ fontWeight: 500 }}>Meetings</div>
              <div style={{ color: "var(--text-secondary)", textAlign: "center" }}>No Live Screen</div>
              <div style={{ textAlign: "center", display: "flex", alignItems: "center", justify: "center", gap: "0.5rem" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Live Screen Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="section" style={{ padding: "8rem 0", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div className="reveal-up">
            <div className="stat-number">2.4M+</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginTop: "0.5rem" }}>Images</div>
          </div>
          <div className="reveal-up delay-1">
            <div className="stat-number">890K+</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginTop: "0.5rem" }}>Videos</div>
          </div>
          <div className="reveal-up delay-2">
            <div className="stat-number">650K+</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginTop: "0.5rem" }}>Audio</div>
          </div>
          <div className="reveal-up delay-3">
            <div className="stat-number">98.7%</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginTop: "0.5rem" }}>Detection Confidence</div>
          </div>
          <div className="reveal-up delay-3">
            <div className="stat-number">120K+</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginTop: "0.5rem" }}>Users</div>
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="section" style={{ padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section-title reveal-up" style={{ marginBottom: "4rem" }}>Frequently Asked Questions</h2>
          
          <div className="faq-accordion">
            {/* Item 1 */}
            <div className={`faq-item reveal-up delay-1 ${openFaq === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Can AI detection ever be perfect?</h3>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="faq-answer">
                While no system is 100% flawless, our multi-engine approach drastically reduces false positives and provides the highest possible confidence score available in the industry today.
              </div>
            </div>
            {/* Item 2 */}
            <div className={`faq-item reveal-up delay-2 ${openFaq === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Does AntiGPT store uploads?</h3>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="faq-answer">
                No. We process your files in memory and discard them immediately after analysis. We maintain a strict zero-retention policy.
              </div>
            </div>
            {/* Item 3 */}
            <div className={`faq-item reveal-up delay-3 ${openFaq === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Can I scan screenshots?</h3>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="faq-answer">
                Yes. AntiGPT can analyze screenshots of text messages, emails, and images to determine authenticity and detect tampering.
              </div>
            </div>
            {/* Item 4 */}
            <div className={`faq-item reveal-up delay-1 ${openFaq === 3 ? "open" : ""}`} onClick={() => toggleFaq(3)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>How reliable are confidence scores?</h3>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="faq-answer">
                Extremely reliable. Because we cross-reference multiple independent AI detection models, a high confidence score means several distinct algorithms reached the same conclusion.
              </div>
            </div>
            {/* Item 5 */}
            <div className={`faq-item reveal-up delay-2 ${openFaq === 4 ? "open" : ""}`} onClick={() => toggleFaq(4)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Can businesses integrate AntiGPT?</h3>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="faq-answer">
                Yes, we offer an enterprise API designed for high-volume integration into your existing security infrastructure, customer onboarding, and moderation tools.
              </div>
            </div>
            {/* Item 6 */}
            <div className={`faq-item reveal-up delay-3 ${openFaq === 5 ? "open" : ""}`} onClick={() => toggleFaq(5)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Does it work offline?</h3>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="faq-answer">
                Currently, AntiGPT requires an internet connection as it relies on complex server-side multi-engine processing to maintain high accuracy and speed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="section" style={{ padding: "12rem 0", overflow: "hidden", position: "relative" }}>
        <div className="radial-glow" style={{ background: "radial-gradient(circle, var(--accent-purple) 0%, rgba(8,8,8,0) 60%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15, width: "1000px", height: "1000px" }}></div>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          
          <div className="reveal-up">
            <h2 className="huge-title" style={{ marginBottom: "1.5rem", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>The internet will never be 100% authentic again.</h2>
            <p className="subheading" style={{ marginBottom: "3rem", fontSize: "1.5rem", color: "var(--text-primary)" }}>
              But you can verify it.
            </p>
            <a href="#" className="btn-primary" style={{ fontSize: "1.125rem", padding: "1rem 2rem" }}>Download AntiGPT</a>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* High-fidelity iPhone Mockup showing Scan Results */}
            <div className="phone-device phone-tilt-right">
              <div className="phone-notch"></div>
              <img src="/static/antigpt/detection_analysis.webp" className="phone-screen" alt="AntiGPT Scan Results UI" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AntiGPT;
