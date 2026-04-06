import React from 'react';
import AuroraBg from './AuroraBg';
import { CAREER, EDUCATION, BOOTCAMPS, CERTS, SKILLS } from '../data';
import { CareerItem, EducationItem, CertItem, BootcampItem } from '../types';

// ── Small sub-components ──────────────────────────────────────────────────────
const InfoGroupLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      display: 'block',
      fontSize: 8,
      fontWeight: 500,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'rgba(100,150,180,.8)',
      marginBottom: 16,
      paddingBottom: 8,
      borderBottom: '1px solid rgba(160,185,210,.2)',
    }}
  >
    {children}
  </span>
);

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid rgba(160,185,210,.2)',
      gap: 16,
    }}
  >
    <span style={{ color: '#8a9ab0', fontSize: 11, letterSpacing: '0.02em' }}>{label}</span>
    <span style={{ color: '#2a3a48', fontSize: 12 }}>{value}</span>
  </div>
);

const ListItem: React.FC<{
  title: string;
  sub?: string;
  meta?: string;
  desc?: string;
}> = ({ title, sub, meta, desc }) => (
  <div style={{ padding: '12px 0', borderBottom: '1px solid rgba(160,185,210,.15)' }}>
    <div style={{ fontSize: 13, fontWeight: 500, color: '#1a2530', marginBottom: sub ? 2 : 0 }}>
      {title}
    </div>
    {sub && <div style={{ fontSize: 12, color: '#5a6e80', marginBottom: 3 }}>{sub}</div>}
    {meta && (
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          color: '#8a9ab0',
          marginBottom: desc ? 6 : 0,
        }}
      >
        {meta}
      </div>
    )}
    {desc && <p style={{ fontSize: 12, color: '#6a7e90', lineHeight: 1.65 }}>{desc}</p>}
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const InfoSection: React.FC = () => (
  <section
    id="info"
    style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '80px 72px',
    }}
  >
    <AuroraBg variant="alt" />

    <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <span
        style={{
          display: 'block',
          fontSize: 9,
          fontWeight: 500,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(100,150,180,.8)',
          marginBottom: 10,
        }}
      >
        Profile
      </span>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 44,
          fontWeight: 300,
          letterSpacing: '-0.01em',
          color: '#1a2530',
          lineHeight: 1.1,
          marginBottom: 52,
        }}
      >
        정보 및 기술 스택
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 72 }}>
        {/* Left column */}
        <div>
          {/* Basic info */}
          <div style={{ marginBottom: 44 }}>
            <InfoGroupLabel>기본 정보</InfoGroupLabel>
            <p
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 22,
                fontWeight: 500,
                color: '#1a2530',
                letterSpacing: '0.08em',
                marginBottom: 3,
              }}
            >
              우 정 인
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 15,
                color: '#8a9ab0',
                marginBottom: 16,
              }}
            >
              Jungin Woo
            </p>
            <InfoRow label="생년월일" value="1999.01.16" />
            <InfoRow label="연락처" value="010-8341-0090" />
            <InfoRow label="이메일" value="wjddls7530@naver.com" />
            <InfoRow label="주소" value="서울시 중랑구" />
          </div>

          {/* Career */}
          <div style={{ marginBottom: 44 }}>
            <InfoGroupLabel>경력</InfoGroupLabel>
            {CAREER.map((item: CareerItem) => (
              <ListItem
                key={item.company}
                title={item.company}
                sub={item.role}
                meta={item.period}
                desc={item.desc}
              />
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 44 }}>
            <InfoGroupLabel>학력</InfoGroupLabel>
            {EDUCATION.map((item: EducationItem) => (
              <ListItem
                key={item.school}
                title={item.school}
                sub={item.dept}
                meta={item.period}
              />
            ))}
          </div>

          {/* Bootcamps */}
          <div style={{ marginBottom: 44 }}>
            <InfoGroupLabel>교육</InfoGroupLabel>
            {BOOTCAMPS.map((item: BootcampItem) => (
              <ListItem
                key={item.name}
                title={item.name}
                sub={item.detail}
                meta={item.period}
              />
            ))}
          </div>

          {/* Certs */}
          <div style={{ marginBottom: 44 }}>
            <InfoGroupLabel>자격증</InfoGroupLabel>
            {CERTS.map((item: CertItem) => (
              <ListItem
                key={item.name}
                title={item.name}
                meta={`${item.date} · ${item.issuer}`}
              />
            ))}
          </div>
        </div>

        {/* Right column: Skills */}
        <div>
          <div
            style={{
              marginBottom: 28,
              paddingBottom: 8,
              borderBottom: '1px solid rgba(160,185,210,.2)',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 8,
                fontWeight: 500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(100,150,180,.8)',
              }}
            >
              기술 스택
            </span>
          </div>

          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} style={{ marginBottom: 28 }}>
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
                {category}
              </span>
              <p style={{ fontSize: 13, color: '#5a6e80', lineHeight: 1.8 }}>
                {items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InfoSection;
