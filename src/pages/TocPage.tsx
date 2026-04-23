import React from 'react';
import { PROJECTS } from '../data/projects/index';

const TocPage: React.FC = () => (
  <section
    className="relative grid items-center"
    style={{
      gridTemplateColumns: '1fr 1.4fr',
      height: '100vh',
      paddingTop: 'clamp(64px, 8vh, 120px)',
      paddingBottom: 'clamp(64px, 8vh, 120px)',
    }}
  >
    <h2
      className="text-[64px] font-light text-ink tracking-[-0.01em] leading-none self-start"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      Contents
    </h2>

    <div>
      {PROJECTS.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          className="flex items-baseline gap-5 py-8 border-b border-border no-underline text-inherit transition-[padding-left] duration-200 hover:pl-2"
        >
          <span className="font-sans text-[12px] font-bold text-ink min-w-7">
            {project.index}
          </span>
          <span className="font-sans text-[14px] font-normal text-[#3a5060] flex-1 leading-snug">
            {project.title}
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default TocPage;
