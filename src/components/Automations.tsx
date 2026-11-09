function Flow({ steps }: { steps: string[] }) {
  const pitch = 94, pillW = 72, pillH = 28, y = 10, cy = y + pillH / 2;
  const w = (steps.length - 1) * pitch + pillW + 8;
  return (
    <svg className="auto-flow" viewBox={`0 0 ${w} 48`} preserveAspectRatio="xMidYMid meet" role="img" aria-label={steps.join(' then ')}>
      {steps.map((s, i) => {
        const x = i * pitch + 4;
        return (
          <g key={i}>
            <rect x={x} y={y} width={pillW} height={pillH} rx="6" fill="rgba(0,255,136,0.06)" stroke="#00ff88" strokeOpacity="0.45" />
            <text x={x + pillW / 2} y={cy} textAnchor="middle" dominantBaseline="central" fontFamily="'JetBrains Mono', ui-monospace, monospace" fontSize="9.5" fill="#cfcfd6">{s}</text>
            {i < steps.length - 1 && (
              <g stroke="#00ff88" strokeOpacity="0.6" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d={`M ${x + pillW + 2} ${cy} h 12`} />
                <path d={`M ${x + pillW + 10} ${cy - 3} l 4 3 l -4 3`} />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

const automations = [
  {
    tag: 'AI Agent',
    title: 'AI X Growth Engine',
    flow: ['Archive', 'AI draft', 'Approve', 'Post'],
    desc: 'An AI agent that learns your voice from your post history, writes daily posts, threads and hot takes, and sends them to Telegram for one-tap approval before auto-posting at your best times. Official X API, human-in-the-loop guardrails.',
    result: 'Running live on @AndyEkech',
    link: 'https://x.com/AndyEkech',
  },
  {
    tag: 'News Automation',
    title: 'Auto-News Engine',
    flow: ['News', 'AI write', 'Guardrail', 'Post'],
    desc: 'A hands-free news account that scans Google News every 90 minutes, picks the freshest story confirmed by multiple outlets, writes it in-voice, and posts it — with a Telegram pause switch and a nightly recap.',
    result: 'Live on @NaijaPulseNow · posts every 90 min',
    link: 'https://x.com/NaijaPulseNow',
  },
  {
    tag: 'Content Pipeline',
    title: 'Daily Content Engine',
    flow: ['Schedule', 'AI write', 'LI + FB', 'Health'],
    desc: 'Generates and schedules brand-safe content across LinkedIn and Facebook every day, with a health check and failure alerts, so the pages stay active without manual posting.',
    result: 'Live · LinkedIn + Facebook, daily',
    link: '',
  },
  {
    tag: 'FinOps',
    title: 'Subscription Tracker',
    flow: ['Weekly', 'Read subs', 'Email', 'Paid/Stop'],
    desc: 'A weekly email statement of every subscription — paid, due, overdue and totals per currency — with secure one-tap Paid and Stopped buttons that log payments and learn each renewal day.',
    result: 'Published as an n8n template',
    link: '',
  },
];

export default function Automations() {
  return (
    <section id="automations" className="section">
      <div className="container">
        <span className="section-tag mono accent">/automations</span>
        <h2 className="section-title">Live Automations</h2>
        <p className="mono muted" style={{ maxWidth: '640px', margin: '0 0 2rem' }}>
          Systems I run in production on n8n — content, growth and ops that work on their own.
        </p>
        <div className="work-grid">
          {automations.map((a) => {
            const inner = (
              <>
                <Flow steps={a.flow} />
                <span className="work-tag mono">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span className="work-link mono accent">{a.result}{a.link ? '  →' : ''}</span>
              </>
            );
            return a.link ? (
              <a key={a.title} href={a.link} target="_blank" rel="noopener" className="work-card">{inner}</a>
            ) : (
              <div key={a.title} className="work-card">{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
