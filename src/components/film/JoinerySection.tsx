import React from 'react';
import { PopUpImageGallery } from './PopUpImageGallery';

export const JoinerySection: React.FC = () => {
  const JOINERY_SPECS = [
    { label: 'JOINT ARCHITECTURE', value: 'HAND-FITTED MITERED DOVETAIL' },
    { label: 'CNC SPINDLE TOLERANCE', value: '±0.2 MM AIR-TIGHT ACCURACY' },
    { label: 'METALLURGY REVEAL', value: '3MM PVD BRUSHED BRASS INLAY' },
    { label: 'GRAIN CONTINUITY', value: '90° WATERFALL TIMBER WRAP' }
  ];

  return (
    <section
      id="joinery"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-pitch)',
        color: 'var(--color-ivory)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        borderBottom: '1px solid var(--color-bronze-border-subtle)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="arch-label" style={{ justifyContent: 'center' }}>
            MASTER JOINERY & TIMBER ARCHITECTURE // ±0.2MM TOLERANCE
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em',
              margin: '0.5rem 0'
            }}
          >
            THE ART OF THE INTERLOCKING JOINT.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--color-stone)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Furniture endures through the structural integrity of its joints. We unite centuries-old European
            cabinetry traditions with 5-axis computerized CNC spindle milling down to sub-millimeter precision.
          </p>
        </div>

        {/* Pop-Up Multi-Image Gallery Stage */}
        <PopUpImageGallery />

        {/* Technical Specs Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginTop: '2.5rem'
          }}
        >
          {JOINERY_SPECS.map((spec) => (
            <div
              key={spec.label}
              style={{
                padding: '1.25rem',
                backgroundColor: 'rgba(25, 22, 19, 0.45)',
                border: '1px solid var(--color-bronze-border-subtle)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-stone)', marginBottom: '4px' }}>
                {spec.label}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-bronze)', letterSpacing: '0.08em' }}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
