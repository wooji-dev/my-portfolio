import React from 'react';

const ThankYouPage: React.FC = () => (
  <section className="relative min-h-screen flex items-center">
    <div className="w-full">
      <div className="font-sans text-[12px] text-dim tracking-[0.06em] mb-8">
        우정인 — 2023–2026
      </div>

      <h2
        className="text-[clamp(64px,8vw,108px)] font-light text-ink leading-[0.95] tracking-[-0.02em] mb-10"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Thank You.
      </h2>

      <p className="font-sans text-[14px] font-light text-[#4a6070] leading-[1.9] mb-16 max-w-[480px]">
        읽어주셔서 감사합니다.
        <br />
        함께 문제를 해결해나갈 기회를 기대합니다.
      </p>

      <div className="flex flex-col gap-2">
        <a
          href="mailto:wjddls7530@naver.com"
          className="font-sans text-[14px] font-light text-[#3a5060] no-underline hover:text-ink transition-colors duration-150"
        >
          wjddls7530@naver.com
        </a>
        <a
          href="https://github.com/wooji-dev"
          target="_blank"
          rel="noreferrer"
          className="font-sans text-[14px] font-light text-[#3a5060] no-underline hover:text-ink transition-colors duration-150"
        >
          github.com/wooji-dev
        </a>
        <span className="font-sans text-[14px] font-light text-[#3a5060]">
          010-8341-0090
        </span>
      </div>
    </div>
  </section>
);

export default ThankYouPage;
