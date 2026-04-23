import React from 'react';

const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E\")";

const GlobalBg: React.FC = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f0f2f5]">
    {/* top-left */}
    <div
      className="absolute"
      style={{
        top: '-5%', left: '-5%',
        width: '55%', height: '45%',
        background: 'radial-gradient(ellipse at center, rgba(160,195,220,.5) 0%, rgba(180,210,230,.25) 45%, transparent 70%)',
        filter: 'blur(48px)',
      }}
    />
    {/* top-right */}
    <div
      className="absolute"
      style={{
        top: '5%', right: '-5%',
        width: '45%', height: '40%',
        background: 'radial-gradient(ellipse at center, rgba(140,185,215,.35) 0%, rgba(160,200,225,.18) 45%, transparent 70%)',
        filter: 'blur(56px)',
      }}
    />
    {/* center-left */}
    <div
      className="absolute"
      style={{
        top: '38%', left: '5%',
        width: '40%', height: '35%',
        background: 'radial-gradient(ellipse at center, rgba(150,190,218,.3) 0%, transparent 65%)',
        filter: 'blur(52px)',
      }}
    />
    {/* bottom-right */}
    <div
      className="absolute"
      style={{
        bottom: '-5%', right: '0%',
        width: '50%', height: '45%',
        background: 'radial-gradient(ellipse at center, rgba(160,195,220,.45) 0%, rgba(175,208,228,.2) 45%, transparent 70%)',
        filter: 'blur(50px)',
      }}
    />
    {/* noise */}
    <div
      className="absolute inset-0 opacity-40"
      style={{ backgroundImage: NOISE_SVG }}
    />
  </div>
);

export default GlobalBg;
