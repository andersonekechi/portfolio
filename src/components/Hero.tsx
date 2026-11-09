import { lazy, Suspense } from 'react';
import { useMobile } from './useReducedMotion';
import type { Tab } from '../App';

const Terminal = lazy(() => import('./Terminal'));

interface HeroProps {
  onTab: (t: Tab) => void;
}

export default function Hero({ onTab }: HeroProps) {
  const mobile = useMobile();

  return (
    <header className="hero" id="hero">
      {!mobile && (
        <Suspense fallback={null}>
          <Terminal />
        </Suspense>
      )}
      <div className="hero-content">
        <p className="hero-greeting mono muted">$ whoami</p>
        <h1>Anderson <span className="accent">Ekechi</span></h1>
        <div className="hero-role-block">
          <p className="hero-role">
            Founder of <a href="https://baceflip.com" target="_blank" rel="noopener">BaceFlip</a>.
            Systems architect. Builder of apps, AI pipelines, and messaging infrastructure for African businesses.
          </p>
          <p className="hero-badge mono"><span className="accent">[LLB · Babcock]</span> Law-trained. I build products, I read contracts, and I ensure compliance.</p>
        </div>
        <div className="hero-actions">
          <a href="#work" className="btn-hero" onClick={(e) => { e.preventDefault(); onTab('work'); }}><span className="accent">&darr;</span> View Work</a>
          <a href="#contact" className="btn-ghost" onClick={(e) => { e.preventDefault(); onTab('contact'); }}>Get in Touch</a>
        </div>
      </div>
    </header>
  );
}
