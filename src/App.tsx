import { useState, useRef } from 'react';
import RevealSection from './components/RevealSection';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Automations from './components/Automations';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Nav from './components/Nav';

export type Tab = 'about' | 'work' | 'automations' | 'skills' | 'contact';

export default function App() {
  const [tab, setTab] = useState<Tab>('automations');
  const contentRef = useRef<HTMLDivElement>(null);

  const go = (t: Tab, scroll = true) => {
    setTab(t);
    if (scroll) {
      requestAnimationFrame(() =>
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      );
    }
  };

  const sections: Record<Tab, JSX.Element> = {
    about: <About />,
    work: <Work />,
    automations: <Automations />,
    skills: <Skills />,
    contact: <Contact />,
  };

  return (
    <>
      <Nav current={tab} onTab={go} />
      <Hero onTab={go} />
      <div id="tabview" ref={contentRef}>
        <RevealSection key={tab}>{sections[tab]}</RevealSection>
      </div>
      <footer className="footer">
        <div className="container">
          <p className="mono muted footer-text">$ exit 0&emsp;&mdash;&emsp;Anderson Ekechi &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
