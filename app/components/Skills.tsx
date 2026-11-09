const skills = [
  { label: 'React / Next.js', level: 95 },
  { label: 'Node.js / Express', level: 90 },
  { label: 'Python / AI Pipelines', level: 85 },
  { label: 'React Native', level: 88 },
  { label: 'WebSocket / Real-time', level: 90 },
  { label: 'Cloudflare / DevOps', level: 85 },
  { label: 'Paystack / Stripe', level: 92 },
  { label: 'Linux / VPS Admin', level: 88 },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-tag mono accent">/skills</span>
        <h2 className="section-title">Stack & Tools</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.label} className="skill-bar">
              <span className="skill-label mono muted">{s.label}</span>
              <div className="bar-track"><div className="bar-fill" style={{ width: `${s.level}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section { padding:100px 0; border-bottom:1px solid var(--border); }
        .section-tag { display:inline-block; font-size:12px; margin-bottom:16px; letter-spacing:.06em; }
        .section-title { font-size:clamp(1.8rem,3.5vw,2.6rem); margin-bottom:48px; line-height:1.15; }
        .skills-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px 48px; }
        .skill-label { display:block; font-size:13px; margin-bottom:8px; }
        .bar-track { height:4px; background:var(--border); border-radius:2px; }
        .bar-fill { height:100%; background:var(--accent); border-radius:2px; transition:width 1s ease; }
        @media(max-width:600px) { .skills-grid { grid-template-columns:1fr; } }
      `}</style>
    </section>
  );
}