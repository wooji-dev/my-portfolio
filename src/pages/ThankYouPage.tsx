import React from 'react';

const ThankYouPage: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center">
    <div className="w-full max-w-[560px] mx-auto">
      <div
        className="font-sans text-[11px] tracking-[0.2em] uppercase mb-12"
        style={{ color: '#94a3b8' }}
      >
        End of Portfolio
      </div>

      <h2
        className="text-[clamp(56px,8vw,96px)] text-ink tracking-[-0.02em] mb-10"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, lineHeight: 0.95 }}
      >
        Thank You.
      </h2>

      <p
        className="font-sans text-[14px] text-muted mb-14"
        style={{ lineHeight: 1.7 }}
      >
        읽어주셔서 감사합니다.
        <br />
        함께 문제를 해결해나갈 기회를 기대합니다.
      </p>

      <div className="flex flex-col gap-3 items-center">
        <a
          href="mailto:wjddls7530@naver.com"
          className="font-sans text-[13px] no-underline transition-colors duration-150"
          style={{ color: '#475569' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
        >
          wjddls7530@naver.com
        </a>
        <a
          href="https://github.com/wooji-dev"
          target="_blank"
          rel="noreferrer"
          className="font-sans text-[13px] no-underline transition-colors duration-150"
          style={{ color: '#475569' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
        >
          github.com/wooji-dev
        </a>
        <span className="font-sans text-[13px]" style={{ color: '#475569' }}>
          010-8341-0090
        </span>
      </div>

      <div
        className="mt-20 font-sans text-[11px] tracking-[0.06em]"
        style={{ color: '#cbd5e1' }}
      >
        우정인 — 2023–2026
      </div>
    </div>
  </section>
);

export default ThankYouPage;
