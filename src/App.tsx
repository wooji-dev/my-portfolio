import React, { useState, useEffect } from 'react';
import './styles/global.css';

import GlobalBg from './components/GlobalBg';
import Sidebar from './components/Sidebar';
import CoverPage from './pages/CoverPage';
import TocPage from './pages/TocPage';
import ProjectLayout from './components/ProjectLayout';
import ThankYouPage from './pages/ThankYouPage';
import { PROJECTS } from './data/projects';

const App: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    const cover = document.getElementById('cover');
    if (!cover) return;
    const obs = new IntersectionObserver(
      ([entry]) => setSidebarVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(cover);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="flex">
      <GlobalBg />
      <Sidebar visible={sidebarVisible} activeSection={activeSection} />

      <main className="flex-1 min-w-0">
        <div data-section id="cover" style={{ paddingTop: 0, paddingBottom: 0 }}><CoverPage /></div>
        <div data-section id="toc" style={{ paddingTop: 0, paddingBottom: 0 }}><TocPage /></div>
        {PROJECTS.map((p) => (
          <div key={p.id} data-section id={p.id}>
            <ProjectLayout project={p} />
          </div>
        ))}
        <div data-section id="thanks"><ThankYouPage /></div>
      </main>
    </div>
  );
};

export default App;
