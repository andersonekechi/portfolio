import { useEffect, useState } from 'react';

interface TradesProps {
  onBack?: () => void;
}

interface TradeRow {
  symbol: string;
  strategy: string;
  direction: string;
  entry_time: string;
  exit_time: string | null;
  entry_price: number;
  exit_price: number | null;
  pnl: number | null;
  status: string;
}

interface EquityPoint {
  timestamp: string;
  equity: number;
}

interface TradesPayload {
  trades: TradeRow[];
  equity: EquityPoint[];
  summary: { total_trades: number; wins: number; losses: number; win_rate: number; net_pnl: number; capital: number };
}

const fmtMoney = (v: number, prec = 2) => {
  if (v === null || v === undefined || isNaN(v)) return '—';
  const s = v < 0 ? '' : '';
  return `${s}${v.toLocaleString('en-US', { minimumFractionDigits: prec, maximumFractionDigits: prec })}`;
};

const symLabel = (s: string) =>
  (s || '').replace('USDm', '').replace('-USD', '').replace('USD', '').replace('[^A-Z]', '');

const timeLabel = (t: string | null) => {
  if (!t) return '—';
  const d = new Date(t);
  return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

export default function Trades({ onBack }: TradesProps) {
  const [data, setData] = useState<TradesPayload | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/overview', { cache: 'no-store' });
        if (!res.ok) throw new Error(String(res.status));
        const j = await res.json();
        setData(j);
        setErr(null);
      } catch (e) {
        setErr('Live feed unavailable right now.');
      } finally {
        setLoading(false);
      }
    };
    load();
    const id = setInterval(load, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="trades" style={{ paddingTop: '120px' }}>
      <div className="container">
        <span className="section-tag mono accent">/trades</span>
        <h1 className="section-title">Anderson <span className="accent">Trades</span></h1>
        <p className="mono muted" style={{ marginBottom: '40px' }}>
          Live results from the autonomous BaceFlip TradeDesk.
        </p>

        {err && !data && (
          <div className="trades-error mono" style={{ color: 'var(--muted)' }}>{err}</div>
        )}

        {loading && !data && !err && (
          <div className="mono muted">Loading live feed…</div>
        )}

        {data && (
          <>
            {/* Summary cards */}
            <div className="trades-stats">
              <div className="stat"><span className="stat-num accent">{data.summary.total_trades}</span><span className="stat-label">Total Trades</span></div>
              <div className="stat"><span className="stat-num" style={{ color: 'var(--accent)' }}>{data.summary.wins}</span><span className="stat-label">Wins</span></div>
              <div className="stat"><span className="stat-num" style={{ color: 'var(--muted)' }}>{data.summary.losses}</span><span className="stat-label">Losses</span></div>
              <div className="stat"><span className="stat-num accent">{Math.round(data.summary.win_rate * 100)}%</span><span className="stat-label">Win Rate</span></div>
              <div className="stat"><span className="stat-num" style={{ color: data.summary.net_pnl >= 0 ? 'var(--accent)' : '#ff5555' }}>{fmtMoney(data.summary.net_pnl)}</span><span className="stat-label">Net P&L</span></div>
            </div>

            {/* Equity chart */}
            {data.equity && data.equity.length > 1 && (
              <div className="trades-chart">
                <svg viewBox="0 0 1000 280" preserveAspectRatio="none" className="trades-svg" aria-hidden="true">
                  {(() => {
                    const pts = data.equity;
                    const xs = pts.map(p => new Date(p.timestamp).getTime());
                    const ys = pts.map(p => p.equity);
                    const x0 = Math.min(...xs), x1 = Math.max(...xs);
                    const y0 = Math.min(...ys), y1 = Math.max(...ys);
                    const w = 1000, h = 260, pad = 8;
                    const px = (x: number) => pad + (x - x0) / Math.max(1, x1 - x0) * (w - 2 * pad);
                    const py = (v: number) => 280 - pad - (v - y0) / Math.max(1e-6, y1 - y0) * h;
                    const line = pts.map((_, i) => `${px(xs[i]).toFixed(1)},${py(ys[i]).toFixed(1)}`).join(' ');
                    const area = `M ${px(x0)},280 L ${line} L ${px(x1)},280 Z`;
                    const last = ys[ys.length - 1];
                    const first = ys[0];
                    const color = last >= first ? '#00ff88' : '#ff5555';
                    return (
                      <g>
                        <path d={`M ${line}`} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" />
                        <path d={area} fill={color} opacity="0.08" />
                        <circle cx={px(xs[xs.length - 1])} cy={py(ys[ys.length - 1])} r="4" fill={color} />
                      </g>
                    );
                  })()}
                </svg>
                <div className="mono muted" style={{ fontSize: '12px', marginTop: '8px' }}>
                  Capital: {fmtMoney(data.summary.capital)} · Live equity curve · auto-refreshes
                </div>
              </div>
            )}

            {/* Trade table */}
            {data.trades && data.trades.length > 0 && (
              <table className="trades-table">
                <thead>
                  <tr>
                    <th>Market</th>
                    <th>Side</th>
                    <th>Entry</th>
                    <th>Exit</th>
                    <th>Opened</th>
                    <th>Closed</th>
                    <th>P&L ($)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.trades.slice(0, 30).map((t, i) => {
                    const pnl = t.pnl;
                    const color = !pnl || isNaN(pnl) ? 'var(--muted)' : (pnl >= 0 ? 'var(--accent)' : '#ff5555');
                    return (
                      <tr key={i}>
                        <td className="mono">{symLabel(t.symbol)}</td>
                        <td className="mono">{String(t.direction).toUpperCase()}</td>
                        <td className="mono">{fmtMoney(t.entry_price, 4)}</td>
                        <td className="mono">{t.exit_price ? fmtMoney(t.exit_price, 4) : '—'}</td>
                        <td className="mono muted">{timeLabel(t.entry_time)}</td>
                        <td className="mono muted">{t.exit_time ? timeLabel(t.exit_time) : '—'}</td>
                        <td className="mono" style={{ color }}>{pnl ? fmtMoney(pnl, 2) : '—'}</td>
                        <td className="mono muted">{String(t.status || '').toUpperCase()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            {data.trades && data.trades.length === 0 && (
              <div className="mono muted">No trades yet.</div>
            )}
          </>
        )}

        <div style={{ marginTop: '48px' }}>
          <a href="#" className="btn-ghost" onClick={(e) => { e.preventDefault(); onBack?.(); }}><span className="accent">&larr;</span> Back to Portfolio</a>
        </div>
      </div>
    </main>
  );
}