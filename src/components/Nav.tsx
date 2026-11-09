import { useEffect, useState } from 'react';
import type { Tab } from '../App';

interface NavProps {
  current: Tab;
  onTab: (t: Tab) => void;
}

const tabs: [Tab, string][] = [
  ['about', 'About'],
  ['work', 'Work'],
  ['automations', 'Automations'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

export default function Nav({ current, onTab }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cb = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', cb, { passive: true });
    return () => window.removeEventListener('scroll', cb);
  }, []);

  const pick = (t: Tab) => { setOpen(false); onTab(t); };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#" onClick={(e) => { e.preventDefault(); pick('automations'); }} className="nav-brand"><span className="accent">&gt;</span> AE_</a>
      <button className={`nav-toggle${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu"><span /><span /></button>
      <div className={`nav-links${open ? ' open' : ''}`}>
        {tabs.map(([key, label]) => (
          <a key={key} href={`#${key}`} className={current === key ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); pick(key); }}>{label}</a>
        ))}
        <a href="https://baceflip.com" target="_blank" rel="noopener" onClick={() => setOpen(false)}>BaceFlip</a>
      </div>
    </nav>
  );
}
