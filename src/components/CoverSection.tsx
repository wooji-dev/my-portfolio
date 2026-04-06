import React from 'react';
import AuroraBg from './AuroraBg';

const CoverSection: React.FC = () => (
  <section
    id="cover"
    style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '80px 80px',
      borderBottom: '1px solid rgba(160,185,210,.2)',
    }}
  >
    <AuroraBg variant="default" />

    <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: '#8a9ab0',
          letterSpacing: '0.06em',
          marginBottom: 24,
        }}
      >
        2023–2026
      </div>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(72px, 10vw, 120px)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          color: '#1a2530',
          lineHeight: 0.95,
          marginBottom: 28,
        }}
      >
        Portfolio
      </h1>

      <p
        style={{
          fontSize: 14,
          color: '#6a7e90',
          letterSpacing: '0.01em',
          marginBottom: 64,
          lineHeight: 1.6,
        }}
      >
        "사람들이 찾고, 공유하고, 기억하는 콘텐츠를 기획합니다."
      </p>

      <p
        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: 18,
          fontWeight: 500,
          color: '#1a2530',
          letterSpacing: '0.08em',
          marginBottom: 10,
        }}
      >
        우 정 인
      </p>

      <p style={{ fontSize: 12, color: '#8a9ab0', lineHeight: 1.9, letterSpacing: '0.02em' }}>
        010-8341-0090
        <br />
        wjddls7530@naver.com
        <br />
        github.com/wooji-dev
      </p>
    </div>
  </section>
);

export default CoverSection;
