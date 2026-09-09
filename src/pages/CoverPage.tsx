import React from 'react';

const CoverPage: React.FC = () => (
  <section
    className="relative flex flex-col items-start justify-center"
    style={{ height: '100vh' }}
  >
    {/* PORTFOLIO heading */}
    <h1
      className="text-[clamp(72px,10vw,120px)] text-ink tracking-[-0.02em] mb-10"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, lineHeight: 0.95 }}
    >
      PORTFOLIO
    </h1>

    {/* Quote */}
    <p
      className="font-sans text-[15px] text-muted max-w-[480px] mb-12"
      style={{ lineHeight: 1.65, textDecoration: 'none' }}
    >
      "데이터로 문제를 정의하고, 코드로 직접 해결합니다."
    </p>

    {/* Name + Role */}
    <div className="flex items-center gap-3">
      <span className="font-sans text-[17px] font-semibold text-ink tracking-[0.06em]">
        우 정 인
      </span>
      <span className="text-dim" style={{ fontSize: '13px' }}>·</span>
      <span className="font-sans text-[13px] text-muted">
        Frontend / Software Engineer
      </span>
    </div>

    {/* Bottom contact bar */}
    <div
      className="absolute bottom-10 left-0 font-sans text-[12px] text-dim tracking-[0.03em]"
      style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}
    >
      wooji.dev@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;010-8341-0090&nbsp;&nbsp;|&nbsp;&nbsp;github.com/wooji-dev
    </div>
  </section>
);

export default CoverPage;
