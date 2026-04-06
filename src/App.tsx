import React, { useState, useEffect, useRef } from 'react';
import './styles/global.css';

import Sidebar from './components/Sidebar';
import CoverSection from './components/CoverSection';
import TocSection from './components/TocSection';
import ProjectSection from './components/ProjectSection';
import InfoSection from './components/InfoSection';
import { PROJECTS } from './data';

const App: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('cover');
  const coverRef = useRef<HTMLDivElement>(null);

  // Show sidebar only after scrolling past cover
  useEffect(() => {
    const cover = document.getElementById('cover');
    if (!cover) return;

    const coverObs = new IntersectionObserver(
      ([entry]) => {
        setSidebarVisible(!entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    coverObs.observe(cover);
    return () => coverObs.disconnect();
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');

    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => sectionObs.observe(section));
    return () => sectionObs.disconnect();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar visible={sidebarVisible} activeSection={activeSection} />

      <main style={{ flex: 1, minWidth: 0 }}>
        <div data-section id="cover">
          <CoverSection />
        </div>

        <div data-section id="toc">
          <TocSection />
        </div>

        {PROJECTS.map((project, i) => (
          <div key={project.id} data-section id={project.id}>
            <ProjectSection project={project} even={i % 2 === 1} />
          </div>
        ))}

        <div data-section id="info">
          <InfoSection />
        </div>
      </main>
    </div>
  );
};

export default App;
