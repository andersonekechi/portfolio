'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function RevealSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div ref={ref} className={`reveal-section${visible ? ' revealed' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}