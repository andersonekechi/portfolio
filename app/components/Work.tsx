const projects = [
  {
    tag: 'iOS App',
    title: 'MayaWallet',
    desc: 'Event discovery and ticketing platform with Paystack (NGN) and Stripe Connect payouts. Digital ticket wallet. Organizer tools. Live on the App Store.',
    link: 'https://apps.apple.com/ie/app/mayawallet/id6769870540',
  },
  {
    tag: 'Platform',
    title: 'GsResponder',
    desc: 'Remote IT management platform. Silent agent install, multi-dashboard architecture, blank screen remote access. Active technicians managing fleets daily.',
    link: 'https://gsresponder.co',
  },
  {
    tag: 'Infrastructure',
    title: 'GSCF SMS Gateway',
    desc: 'Android-powered bulk SMS system with WebSocket live delivery. Real-time campaign tracking, sender ID, zero per-message API fees. Your phone is the gateway.',
    link: 'https://sms.gscf.online',
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <span className="section-tag mono accent">/work</span>
        <h2 className="section-title">Selected Projects</h2>
        <div className="work-grid">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noopener" className="work-card">
              <span className="work-tag mono">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="work-link mono accent">View Project &rarr;</span>
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section { padding:100px 0; border-bottom:1px solid var(--border); }
        .section-tag { display:inline-block; font-size:12px; margin-bottom:16px; letter-spacing:.06em; }
        .section-title { font-size:clamp(1.8rem,3.5vw,2.6rem); margin-bottom:48px; line-height:1.15; }
        .work-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .work-card { display:block; padding:32px 24px; border:1px solid var(--border); background:var(--surface); transition:border-color .2s,transform .2s; border-radius:4px; }
        .work-card:hover { border-color:var(--accent); transform:translateY(-2px); text-decoration:none; }
        .work-tag { font-size:11px; color:var(--accent); font-weight:500; letter-spacing:.06em; text-transform:uppercase; display:block; margin-bottom:16px; }
        .work-card h3 { font-size:1.1rem; margin-bottom:10px; color:var(--text); }
        .work-card p { color:var(--muted); font-size:.9rem; line-height:1.6; margin-bottom:20px; }
        .work-link { font-size:13px; font-weight:500; }
        @media(max-width:900px) { .work-grid { grid-template-columns:1fr 1fr; } }
        @media(max-width:600px) { .work-grid { grid-template-columns:1fr; } }
      `}</style>
    </section>
  );
}