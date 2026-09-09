import React from 'react';

const GlobalBg: React.FC = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
    {/* top-left lavender blob */}
    <div
      className="absolute"
      style={{
        top: '-15%', left: '-10%',
        width: '65%', height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(196,181,253,0.38) 0%, rgba(167,139,250,0.14) 45%, transparent 70%)',
        filter: 'blur(72px)',
      }}
    />
    {/* top-right blue blob */}
    <div
      className="absolute"
      style={{
        top: '-5%', right: '-8%',
        width: '55%', height: '55%',
        background: 'radial-gradient(ellipse at center, rgba(147,197,253,0.32) 0%, rgba(96,165,250,0.12) 45%, transparent 70%)',
        filter: 'blur(64px)',
      }}
    />
    {/* center lavender */}
    <div
      className="absolute"
      style={{
        top: '40%', right: '5%',
        width: '45%', height: '40%',
        background: 'radial-gradient(ellipse at center, rgba(196,181,253,0.22) 0%, transparent 65%)',
        filter: 'blur(56px)',
      }}
    />
    {/* bottom-left blue */}
    <div
      className="absolute"
      style={{
        bottom: '-8%', left: '-5%',
        width: '55%', height: '50%',
        background: 'radial-gradient(ellipse at center, rgba(147,197,253,0.28) 0%, rgba(196,181,253,0.12) 45%, transparent 70%)',
        filter: 'blur(68px)',
      }}
    />
  </div>
);

export default GlobalBg;
