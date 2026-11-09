const projects = [
  { tag: 'iOS App', title: 'MayaWallet', desc: 'Event discovery and ticketing platform with Paystack (NGN) and Stripe Connect payouts. Digital ticket wallet. Organizer tools. Live on the App Store.', link: 'https://apps.apple.com/ie/app/mayawallet/id6769870540' },
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
    </section>
  );
}
