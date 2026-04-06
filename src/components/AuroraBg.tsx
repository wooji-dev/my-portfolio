import React from 'react';
import { AuroraVariant } from '../types';

interface AuroraBgProps {
  variant?: AuroraVariant;
}

const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E\")";

const AuroraBg: React.FC<AuroraBgProps> = ({ variant = 'default' }) => {
  const isAlt = variant === 'alt';

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Base */}
      <div style={{ position: 'absolute', inset: 0, background: '#f0f2f5' }} />

      {/* Blob 1 */}
      <div
        style={{
          position: 'absolute',
          top: isAlt ? 'auto' : '-10%',
          bottom: isAlt ? '-10%' : 'auto',
          left: isAlt ? 'auto' : '-5%',
          right: isAlt ? '-5%' : 'auto',
          width: '55%',
          height: '70%',
          background:
            'radial-gradient(ellipse at center, rgba(160,195,220,.55) 0%, rgba(180,210,230,.3) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Blob 2 */}
      <div
        style={{
          position: 'absolute',
          bottom: isAlt ? 'auto' : '-5%',
          top: isAlt ? '-5%' : 'auto',
          right: isAlt ? 'auto' : '5%',
          left: isAlt ? '10%' : 'auto',
          width: '45%',
          height: '55%',
          background:
            'radial-gradient(ellipse at center, rgba(140,185,215,.4) 0%, rgba(160,200,225,.2) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Noise */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          backgroundImage: NOISE_SVG,
        }}
      />
    </div>
  );
};

export default AuroraBg;
