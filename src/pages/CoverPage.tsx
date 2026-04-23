import React from 'react';

const CoverPage: React.FC = () => (
  <section
    className="relative flex items-end"
    style={{
      height: '100vh',
      paddingTop: 'clamp(64px, 8vh, 120px)',
      paddingBottom: 'clamp(64px, 8vh, 120px)',
    }}
  >
    <div className="w-full">
      <div className="font-sans text-[12px] text-dim tracking-[0.06em] mb-6">
        2023–2026
      </div>

      <h1
        className="text-[clamp(72px,10vw,120px)] font-light text-ink leading-[0.95] mb-7 tracking-[-0.02em]"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Portfolio
      </h1>

      <p className="font-sans text-[14px] text-[#6a7e90] tracking-[0.01em] mb-16 leading-relaxed">
        "데이터로 문제를 정의하고, 코드로 직접 해결합니다."
      </p>

      <p className="font-sans text-[18px] font-medium text-ink tracking-[0.08em] mb-2.5">
        우 정 인
      </p>

      <p className="font-sans text-[12px] text-dim leading-[1.9] tracking-[0.02em]">
        010-8341-0090
        <br />
        wjddls7530@naver.com
        <br />
        github.com/wooji-dev
      </p>
    </div>
  </section>
);

export default CoverPage;
