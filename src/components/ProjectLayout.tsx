import React from 'react';
import { Project, IssueTag } from '../types';

export interface Props {
  project: Project;
}

const TAG_COLOR: Record<IssueTag, { text: string; bg: string }> = {
  'Troubleshooting': { text: '#dc2626', bg: 'rgba(254,242,242,0.85)' },
  'Prevention':      { text: '#2563eb', bg: 'rgba(239,246,255,0.85)' },
  'Refactoring':     { text: '#059669', bg: 'rgba(236,253,245,0.85)' },
  'Clean Code':      { text: '#7c3aed', bg: 'rgba(245,243,255,0.85)' },
};

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase mb-3"
    style={{ color: '#94a3b8' }}
  >
    {children}
  </div>
);

const ProjectPage: React.FC<Props> = ({ project }) => (
  <section className="relative">

    {/* ── Header ── */}
    <div
      className="mb-20"
      style={
        project.mockup
          ? {
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(220px, 300px)',
              gap: 'clamp(32px, 5vw, 72px)',
              alignItems: 'start',
            }
          : undefined
      }
    >
      <div>
        <div
          className="font-sans text-[12px] tracking-[0.08em] mb-6"
          style={{ color: '#94a3b8' }}
        >
          {project.index}&nbsp;&nbsp;{project.period}
        </div>

        <h2
          className="font-sans text-[clamp(28px,3.5vw,44px)] font-semibold text-ink tracking-[-0.02em] mb-6"
          style={{ lineHeight: 1.2 }}
        >
          {project.title}
        </h2>

        <p
          className="font-sans text-[15px] text-muted mb-7 max-w-[640px]"
          style={{ lineHeight: 1.65 }}
        >
          {project.overview}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-sans text-[12px]"
              style={{
                padding: '4px 10px',
                background: 'rgba(248,250,252,0.7)',
                borderRadius: '999px',
                color: '#475569',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {project.mockup && (
        <figure style={{ margin: 0, justifySelf: 'end' }}>
          <img
            src={project.mockup.src}
            alt={project.mockup.alt}
            style={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
              display: 'block',
              borderRadius: '16px',
            }}
          />
          {project.mockup.caption && (
            <figcaption
              className="font-sans text-[11px] mt-3"
              style={{ color: '#94a3b8', textAlign: 'center', lineHeight: 1.55 }}
            >
              {project.mockup.caption}
            </figcaption>
          )}
        </figure>
      )}
    </div>

    {/* ── Issues ── */}
    {project.issues.map((issue, i) => {
      const colors = TAG_COLOR[issue.tag];
      return (
        <div key={i} style={{ paddingTop: i === 0 ? '0' : '64px', paddingBottom: '0', marginBottom: '56px' }}>

          {/* Issue header */}
          <div className="flex items-center gap-3 mb-8" style={{ flexWrap: 'wrap' }}>
            <span
              className="font-sans text-[11px] font-medium tracking-[0.16em] uppercase"
              style={{
                color: colors.text,
                background: colors.bg,
                padding: '4px 10px',
                borderRadius: '999px',
              }}
            >
              {issue.tag}
            </span>
            <span className="font-sans text-[17px] text-ink" style={{ fontWeight: 500, lineHeight: 1.4 }}>
              {issue.title}
            </span>
          </div>

          {/* Problem */}
          <div className="mb-8">
            <SectionLabel>Problem</SectionLabel>
            <p
              className="font-sans text-[14px] text-muted"
              style={{ lineHeight: 1.7, maxWidth: '720px' }}
            >
              {issue.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <SectionLabel>Solution</SectionLabel>
            <p
              className="font-sans text-[14px] text-muted"
              style={{ lineHeight: 1.7, maxWidth: '720px' }}
            >
              {issue.solution}
            </p>
          </div>

          {/* Result */}
          <div
            style={{
              background: 'rgba(248,250,252,0.55)',
              borderRadius: '14px',
              padding: '28px 30px',
            }}
          >
            <SectionLabel>Result</SectionLabel>

            {issue.metrics && issue.metrics.length > 0 && (
              <div className="flex gap-12 mb-5" style={{ flexWrap: 'wrap' }}>
                {issue.metrics.map((m, j) => (
                  <div key={j}>
                    <div
                      className="font-sans text-[11px] tracking-[0.14em] uppercase mb-2"
                      style={{ color: '#94a3b8' }}
                    >
                      {m.label}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="font-sans text-[30px] font-semibold text-ink tracking-[-0.02em]"
                        style={{ lineHeight: 1 }}
                      >
                        {m.after}
                      </span>
                      <span
                        className="font-sans text-[13px]"
                        style={{ color: '#2563eb' }}
                      >
                        {m.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p
              className="font-sans text-[14px] text-muted"
              style={{ lineHeight: 1.65 }}
            >
              {issue.result}
            </p>
          </div>

        </div>
      );
    })}
  </section>
);

export default ProjectPage;
