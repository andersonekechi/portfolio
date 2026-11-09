'use client';

import dynamic from 'next/dynamic';
import { useMobile } from './useReducedMotion';

const Terminal = dynamic(() => import('./Terminal'), { ssr: false });

export default function Hero() {
  const mobile = useMobile();

  return (
    <header className="hero" id="hero">
      {!mobile && <Terminal />}
      <div className="hero-content">
        <p className="greeting mono muted">$ whoami</p>
        <h1>
          Anderson <span className="accent">Ekechi</span>
        </h1>
        <div className="role-block">
          <p className="role">
            Founder of <a href="https://baceflip.com" target="_blank" rel="noopener">BaceFlip</a>.
            Systems architect. Builder of apps, AI pipelines, and messaging infrastructure
            for African businesses.
          </p>
          <p className="law-badge">
            <span className="accent">[LLB]</span> Law-trained. I build products and I read contracts.
          </p>
        </div>
        <div className="hero-actions">
          <a href="#work" className="btn">
            <span className="accent">&darr;</span> View Work
          </a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
      </div>

      <style jsx>{`
        .hero { position:relative; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:120px 32px 80px; overflow:hidden; }
        .hero-content { position:relative; z-index:1; max-width:680px; width:100%; text-align:center; }
        .greeting { font-size:14px; margin-bottom:8px; letter-spacing:.06em; }
        .hero h1 { font-family:var(--font-mono); font-size:clamp(2.4rem,6vw,4.4rem); font-weight:600; letter-spacing:-.03em; margin-bottom:28px; line-height:1; }
        .role-block { margin-bottom:40px; }
        .role { color:var(--muted); font-size:1.1rem; line-height:1.7; max-width:560px; margin:0 auto 16px; }
        .role a { font-weight:600; }
        .law-badge { font-family:var(--font-mono); font-size:.9rem; color:var(--muted); }
        .hero-actions { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .btn { font-family:var(--font-mono); display:inline-flex; align-items:center; gap:8px; padding:14px 28px; border:1.5px solid var(--accent); color:var(--accent); font-size:14px; font-weight:600; letter-spacing:.02em; transition:background .2s,color .2s; }
        .btn:hover { background:var(--accent); color:var(--bg); text-decoration:none; }
        .btn-ghost { font-family:var(--font-mono); display:inline-flex; align-items:center; padding:14px 28px; border:1.5px solid var(--border); color:var(--muted); font-size:14px; font-weight:500; letter-spacing:.02em; transition:border-color .2s,color .2s; }
        .btn-ghost:hover { border-color:var(--accent); color:var(--text); text-decoration:none; }
        @media(max-width:720px) { .hero { padding:100px 20px 60px; } }
      `}</style>
    </header>
  );
}