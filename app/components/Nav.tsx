'use client';

import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null!);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
    { href: 'https://baceflip.com', label: 'BaceFlip', ext: true },
  ];

  return (
    <nav ref={ref} className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#" className="nav-brand">
        <span className="accent">&gt;</span> AE_
      </a>
      <button className={`nav-toggle${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span />
      </button>
      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} {...(l.ext ? { target: '_blank', rel: 'noopener' } : {})}
            onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
      <style jsx>{`
        .nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:16px 32px; transition:background .3s,border-color .3s; }
        .nav--scrolled { background:rgba(10,10,12,.92); backdrop-filter:blur(12px); border-bottom:1px solid var(--border); }
        .nav-brand { font-family:var(--font-mono); font-weight:600; font-size:18px; color:var(--text); }
        .nav-brand:hover { text-decoration:none; }
        .nav-links { display:flex; align-items:center; gap:28px; }
        .nav-links a { font-family:var(--font-mono); font-size:13px; color:var(--muted); font-weight:500; letter-spacing:.02em; transition:color .2s; }
        .nav-links a:hover { color:var(--accent); text-decoration:none; }
        .nav-toggle { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
        .nav-toggle span { width:22px; height:2px; background:var(--text); transition:transform .3s,opacity .3s; }
        .nav-toggle.open span:nth-child(1) { transform:rotate(45deg) translate(5px,5px); }
        .nav-toggle.open span:nth-child(2) { transform:rotate(-45deg) translate(5px,-5px); }
        @media(max-width:720px) { .nav-links { display:none; position:fixed; top:60px; left:0; right:0; background:var(--bg2); border-bottom:1px solid var(--border); padding:16px 32px; flex-direction:column; gap:0; } .nav-links.open { display:flex; } .nav-links a { padding:12px 0; border-bottom:1px solid var(--border); font-size:15px; } .nav-toggle { display:flex; } }
      `}</style>
    </nav>
  );
}