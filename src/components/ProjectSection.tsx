import React from 'react';
import AuroraBg from './AuroraBg';
import { Project, Metric } from '../types';

// ── Metric card ───────────────────────────────────────────────────────────────
const MetricCard: React.FC<Metric> = ({ label, before, after, delta }) => (
  <div style={{ borderLeft: '2px solid rgba(100,150,180,.4)', paddingLeft: 14 }}>
    <div
      style={{
        fontSize: 9,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: '#8a9ab0',
        marginBottom: 8,
      }}
    >
      {label}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: '#aab5c0',
          textDecoration: 'line-through',
        }}
      >
        {before}
      </span>
      <span style={{ color: 'rgba(100,150,180,.7)', fontSize: 10 }}>→</span>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 22,
          color: '#2c4a5e',
          fontWeight: 400,
        }}
      >
        {after}
      </span>
    </div>
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10,
        color: '#3a6070',
        background: 'rgba(100,160,190,.12)',
        padding: '2px 8px',
        borderRadius: 2,
        display: 'inline-block',
      }}
    >
      {delta}
    </span>
  </div>
);

// ── Block label ───────────────────────────────────────────────────────────────
const BlockLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      display: 'block',
      fontSize: 8,
      fontWeight: 500,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'rgba(100,150,180,.8)',
      marginBottom: 10,
    }}
  >
    {children}
  </span>
);

const BlockHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3
    style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: 17,
      fontWeight: 400,
      color: '#1a2530',
      marginBottom: 10,
    }}
  >
    {children}
  </h3>
);

const BlockText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{ fontSize: 13, color: '#5a6e80', lineHeight: 1.85 }}>{children}</p>
);

// ── Main component ────────────────────────────────────────────────────────────
interface ProjectSectionProps {
  project: Project;
  even: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, even }) => (
  <section
    id={project.id}
    style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '80px 72px',
      borderBottom: '1px solid rgba(160,185,210,.2)',
    }}
  >
    <AuroraBg variant={even ? 'alt' : 'default'} />

    <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: 'rgba(100,150,180,.8)',
            }}
          >
            {project.index}
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: '#8a9ab0',
            }}
          >
            {project.period}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 52,
            fontWeight: 300,
            letterSpacing: '-0.01em',
            color: '#1a2530',
            lineHeight: 1.05,
            marginBottom: 8,
          }}
        >
          {project.title}
        </h2>

        <p style={{ fontSize: 13, color: '#6a7e90', letterSpacing: '0.02em', marginBottom: 20 }}>
          {project.subtitle}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: '#7a95a8',
                border: '1px solid rgba(140,175,200,.35)',
                borderRadius: 2,
                padding: '3px 10px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Body — 2 columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'start',
        }}
      >
        {/* Left: mockup */}
        <div
          style={{
            position: 'sticky',
            top: 80,
            aspectRatio: '4/3',
            background: 'rgba(180,205,220,.15)',
            border: '1px solid rgba(160,195,220,.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: '#a0b5c5',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Mockup Image
          </span>
        </div>

        {/* Right: content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {/* Problem */}
          <div>
            <BlockLabel>Problem</BlockLabel>
            <BlockHeading>{project.problem.heading}</BlockHeading>
            <BlockText>{project.problem.text}</BlockText>
          </div>

          {/* Analysis */}
          <div>
            <BlockLabel>Analysis</BlockLabel>
            <BlockHeading>{project.analysis.heading}</BlockHeading>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
              {project.analysis.points.map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 13,
                    color: '#5a6e80',
                    lineHeight: 1.7,
                    paddingLeft: 16,
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'rgba(100,150,180,.6)',
                      fontSize: 18,
                      lineHeight: 1.25,
                    }}
                  >
                    ·
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <BlockLabel>Solution</BlockLabel>
            <BlockHeading>{project.solution.heading}</BlockHeading>
            <BlockText>{project.solution.text}</BlockText>

            {/* Troubleshooting box */}
            <div
              style={{
                background: 'rgba(160,185,210,.07)',
                border: '1px solid rgba(160,185,210,.2)',
                borderRadius: 6,
                padding: '16px 18px',
                marginTop: 12,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 8,
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(100,145,175,.7)',
                  background: 'rgba(100,150,180,.1)',
                  border: '1px solid rgba(100,150,180,.2)',
                  borderRadius: 2,
                  padding: '2px 7px',
                  marginBottom: 10,
                }}
              >
                Trouble Shooting
              </span>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.solution.troubleshooting.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 12.5,
                      color: '#627a8a',
                      lineHeight: 1.72,
                      paddingLeft: 16,
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'rgba(100,150,180,.5)',
                      }}
                    >
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Result */}
          <div
            style={{
              borderTop: '1px solid rgba(160,185,210,.3)',
              paddingTop: 28,
            }}
          >
            <BlockLabel>Result</BlockLabel>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
                marginBottom: 16,
              }}
            >
              {project.result.metrics.map((metric, i) => (
                <MetricCard key={i} {...metric} />
              ))}
            </div>
            <BlockText>{project.result.text}</BlockText>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectSection;
