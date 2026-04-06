import React from 'react';
import AuroraBg from './AuroraBg';

const TOC_ITEMS = [
  { num: '01', label: 'ELO — A/B Test Platform', href: '#project-elo' },
  { num: '02', label: 'Figma AI Publisher', href: '#project-figma' },
  { num: '03', label: 'SolvPS — 알고리즘 스터디 플랫폼', href: '#project-solvps' },
  { num: '04', label: 'SOLMate — 모의투자 플랫폼', href: '#project-solmate' },
  { num: '05', label: 'PayTrace — 비금융 신용점수 보조', href: '#project-paytrace' },
  { num: '06', label: 'Profile — 경력 / 학력 / 기술 스택', href: '#info' },
];

const TocSection: React.FC = () => (
  <section
    id="toc"
    style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '80px 72px',
      borderBottom: '1px solid rgba(160,185,210,.2)',
    }}
  >
    <AuroraBg variant="alt" />

    <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 80,
          alignItems: 'start',
        }}
      >
        {/* Left: big title */}
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 64,
              fontWeight: 300,
              color: '#1a2530',
              letterSpacing: '-0.01em',
              lineHeight: 1.0,
              position: 'sticky',
              top: 80,
            }}
          >
            Contents
          </h2>
        </div>

        {/* Right: list */}
        <div style={{ paddingTop: 4 }}>
          {TOC_ITEMS.map((item) => (
            <a
              key={item.num}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 20,
                padding: '20px 0',
                borderBottom: '1px solid rgba(160,185,210,.2)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'padding-left .2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = '8px')}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = '0px')}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#1a2530',
                  minWidth: 28,
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#3a5060',
                  flex: 1,
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TocSection;
