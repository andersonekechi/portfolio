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
    </section>
  );
}