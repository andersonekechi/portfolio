export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-tag mono accent">/about</span>
        <h2 className="section-title">Systems Architect<br />& Founder</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a tech founder and builder based in Abuja, Nigeria. I run <strong>BaceFlip</strong> — a tech studio that turns ideas into products. Apps, bots, AI, dashboards, messaging — if you can describe it, we can build it.</p>
            <p>I hold an LLB from <strong>Babcock University</strong>. Not a practicing lawyer — but legal training shaped how I think: structure, risk assessment, compliance. Every product I ship is built with those principles baked in. I bring that to every system I design and every client I work with.</p>
            <p>My philosophy: <em className="accent">from vision to vector.</em> You bring the idea. I bring the engineering.</p>
          </div>
          <div className="about-stats">
            <div className="stat"><span className="stat-num accent">3+</span><span className="stat-label muted">Live Products</span></div>
            <div className="stat"><span className="stat-num accent">LLB</span><span className="stat-label muted">Babcock University</span></div>
            <div className="stat"><span className="stat-num accent">Abuja</span><span className="stat-label muted">Based</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}