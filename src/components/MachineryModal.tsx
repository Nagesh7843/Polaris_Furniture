import React, { useEffect } from 'react';
import { X, Cpu } from 'lucide-react';
import { FACTORY_DETAILS } from '../data/polarisData';

interface MachineryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MachineryModal: React.FC<MachineryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const machinery = FACTORY_DETAILS.machinery;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="arch-modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-obsidian)',
          border: '1px solid var(--color-bronze-border)',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 20,
            backgroundColor: 'rgba(10, 9, 8, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem clamp(1rem, 3vw, 2rem)',
            borderBottom: '1px solid var(--color-bronze-border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Cpu size={16} color="var(--color-bronze)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.62rem, 1.2vw, 0.75rem)',
                color: 'var(--color-bronze)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase'
              }}
            >
              FACTORY EQUIPMENT RECORD // DIP PLANT
            </span>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em'
            }}
          >
            <span>[ ESC ]</span>
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                color: 'var(--color-ivory-light)',
                marginBottom: '0.75rem'
              }}
            >
              PRECISION INDUSTRIAL EQUIPMENT LIST
            </h3>
            <p style={{ color: 'var(--color-stone)', fontSize: '0.9rem', maxWidth: '750px', lineHeight: 1.65 }}>
              Documented directly from Page 31 of Polaris International Industries Pre-Qualification Profile.
              Our facility combines multi-purpose automated European machinery with dedicated climate-controlled
              finishing and dust-controlled assembly lines.
            </p>
          </div>

          {/* Machinery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem'
            }}
          >
            {machinery.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-charcoal-dark)',
                  border: '1px solid var(--color-bronze-border-subtle)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze-border-subtle)';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--color-bronze)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {item.category.toUpperCase()}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--color-ivory)',
                        backgroundColor: 'rgba(191, 160, 122, 0.15)',
                        padding: '2px 6px',
                        border: '1px solid var(--color-bronze-border)'
                      }}
                    >
                      {item.count}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.05rem',
                      color: 'var(--color-ivory-light)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {item.name}
                  </h4>

                  <p style={{ fontSize: '0.8rem', color: 'var(--color-stone)', lineHeight: 1.5 }}>
                    {item.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.25rem',
              backgroundColor: 'rgba(191, 160, 122, 0.05)',
              border: '1px solid var(--color-bronze-border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-stone-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <span>LOCATION: Dubai Investment Park (DIP) Industrial Campus, UAE</span>
            <span style={{ color: 'var(--color-bronze)' }}>ISO 9001:2008 & CIVIL DEFENSE ACCREDITED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
