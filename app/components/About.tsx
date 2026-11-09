export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-tag mono accent">/about</span>
        <h2 className="section-title">Systems Architect<br />& Founder</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a tech founder and builder based in Abuja, Nigeria. I run <strong>BaceFlip</strong> — a tech studio that turns ideas into products. Apps, bots, AI, dashboards, messaging — if you can describe it, we can build it.</p>
            <p>I hold an LLB (Bachelor of Laws). Not a practicing lawyer — but legal training shaped how I think: structure, risk assessment, precision. I bring that to every system I design and every client I work with.</p>
            <p>My philosophy: <em className="accent">from vision to vector.</em> You bring the idea. I bring the engineering.</p>
          </div>
          <div className="about-stats">
            <div className="stat"><span className="stat-num accent">3+</span><span className="stat-label muted">Live Products</span></div>
            <div className="stat"><span className="stat-num accent">LLB</span><span className="stat-label muted">Law Background</span></div>
            <div className="stat"><span className="stat-num accent">Abuja</span><span className="stat-label muted">Based</span></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section { padding:100px 0; border-bottom:1px solid var(--border); }
        .section-tag { display:inline-block; font-size:12px; margin-bottom:16px; letter-spacing:.06em; }
        .section-title { font-size:clamp(1.8rem,3.5vw,2.6rem); margin-bottom:40px; line-height:1.15; }
        .about-grid { display:grid; grid-template-columns:1fr 220px; gap:64px; align-items:start; }
        .about-text p { color:var(--muted); margin-bottom:20px; line-height:1.75; }
        .about-text strong { color:var(--text); }
        .about-stats { display:flex; flex-direction:column; gap:12px; }
        .stat { padding:20px; border:1px solid var(--border); }
        .stat-num { display:block; font-family:var(--font-mono); font-size:1.4rem; font-weight:600; margin-bottom:4px; }
        .stat-label { display:block; font-size:.82rem; }
        @media(max-width:720px) { .about-grid { grid-template-columns:1fr; gap:32px; } .about-stats { flex-direction:row; flex-wrap:wrap; } .stat { flex:1; min-width:100px; } }
      `}</style>
    </section>
  );
}