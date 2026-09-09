import React from 'react';
import { PROJECTS } from '../data/projects/index';

const TocPage: React.FC = () => (
  <section
    className="relative grid items-start"
    style={{
      gridTemplateColumns: '1fr 1.8fr',
      gap: '96px',
      minHeight: '100vh',
      paddingTop: 'clamp(64px, 8vh, 120px)',
      paddingBottom: 'clamp(64px, 8vh, 120px)',
    }}
  >
    {/* Left: heading */}
    <div>
      <div
        className="font-sans text-[11px] tracking-[0.2em] uppercase mb-4"
        style={{ color: '#94a3b8' }}
      >
        Index
      </div>
      <h2
        className="text-[clamp(48px,6vw,72px)] text-ink tracking-[-0.02em]"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, lineHeight: 1 }}
      >
        Contents
      </h2>
    </div>

    {/* Right: project list */}
    <div>
      {PROJECTS.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          className="group flex items-baseline gap-6 no-underline transition-all duration-150"
          style={{
            display: 'flex',
            padding: '18px 0',
          }}
        >
          <span
            className="font-sans text-[11px] font-medium tracking-[0.16em] shrink-0"
            style={{ color: '#94a3b8', minWidth: '28px' }}
          >
            {project.index}
          </span>
          <div className="flex-1">
            <span
              className="font-sans text-[15px] text-ink transition-colors duration-150 group-hover:text-accent"
              style={{ display: 'block', fontWeight: 500, lineHeight: 1.45 }}
            >
              {project.title}
            </span>
            <span
              className="font-sans text-[12px] mt-1"
              style={{ display: 'block', color: '#94a3b8', lineHeight: 1.55 }}
            >
              {project.period}
            </span>
          </div>
          <span
            className="font-sans text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0"
            style={{ color: '#2563eb' }}
          >
            →
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default TocPage;
