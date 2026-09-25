import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CAPABILITIES } from '../data/polarisData';

export const CapabilitiesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCapability = CAPABILITIES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  };

  // Keyboard navigation when hovered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-obsidian)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            gap: '2rem'
          }}
        >
          <div>
            <div className="arch-label">OUR CORE OFFERING // SIX CAPABILITIES</div>
            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 500,
                color: 'var(--color-ivory-light)',
                letterSpacing: '0.04em'
              }}
            >
              ARCHITECTURAL CAPABILITY
            </h2>
            <p
              style={{
                maxWidth: '620px',
                marginTop: '0.75rem',
                color: 'var(--color-stone)',
                fontSize: '0.95rem'
              }}
            >
              Integrated manufacturing lines at Dubai Investment Park delivering uncompromised
              millwork, solid wood, doors, upholstery, specialized metallurgy, and decorative glass.
            </p>
          </div>

          {/* Architectural Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-stone-dark)',
                letterSpacing: '0.12em',
                marginRight: '0.5rem'
              }}
            >
              0{activeIndex + 1} / 0{CAPABILITIES.length}
            </span>
            <button
              onClick={handlePrev}
              style={{
                width: '48px',
                height: '48px',
                border: '1px solid var(--color-bronze-border)',
                backgroundColor: 'transparent',
                color: 'var(--color-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-bronze)';
                e.currentTarget.style.backgroundColor = 'rgba(191, 160, 122, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-bronze-border)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Previous capability"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '48px',
                height: '48px',
                border: '1px solid var(--color-bronze-border)',
                backgroundColor: 'transparent',
                color: 'var(--color-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-bronze)';
                e.currentTarget.style.backgroundColor = 'rgba(191, 160, 122, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-bronze-border)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Next capability"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Moving Header Strip / Architectural Timeline */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            borderBottom: '1px solid var(--color-bronze-border-subtle)',
            marginBottom: '3.5rem',
            paddingTop: '1rem',
            paddingBottom: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
              minWidth: 'max-content'
            }}
          >
            {CAPABILITIES.map((cap, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                    padding: '8px 4px',
                    position: 'relative',
                    transition: 'all 0.4s var(--transition-slow)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: isActive ? 'var(--color-bronze)' : 'var(--color-stone-dark)',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {cap.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.05rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-ivory-light)' : 'var(--color-stone-dark)',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {cap.title}
                  </span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="capUnderline"
                      style={{
                        position: 'absolute',
                        bottom: '-1rem',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-bronze)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural Presentation Split Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Full-Bleed Large Architectural Project Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/11',
              overflow: 'hidden',
              backgroundColor: 'var(--color-charcoal)',
              border: '1px solid var(--color-bronze-border)'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, scale: 1.05, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                animate={{ opacity: 1, scale: 1.0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${activeCapability.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Subtle Gradient Overlays */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(10, 9, 8, 0.85) 100%)'
                  }}
                />

                {/* Floating Architectural Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: 'rgba(10, 9, 8, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--color-bronze-border-subtle)',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-bronze)'
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-ivory)',
                      textTransform: 'uppercase'
                    }}
                  >
                    CAPABILITY {activeCapability.number} // DUBAI INVESTMENT PARK
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Architectural Presentation Text & Technical Specs */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--color-bronze)',
                      fontWeight: 600
                    }}
                  >
                    {activeCapability.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.16em',
                      color: 'var(--color-stone)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {activeCapability.subtitle}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
                    color: 'var(--color-ivory-light)',
                    marginBottom: '1rem',
                    lineHeight: 1.2
                  }}
                >
                  {activeCapability.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-serif-editorial)',
                    fontSize: '1.25rem',
                    fontStyle: 'italic',
                    color: 'var(--color-bronze-light)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.4
                  }}
                >
                  “{activeCapability.tagline}”
                </p>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--color-stone-light)',
                    marginBottom: '2rem'
                  }}
                >
                  {activeCapability.description}
                </p>

                {/* Materials Applied */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      color: 'var(--color-bronze)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.65rem'
                    }}
                  >
                    PRIMARY SPECIFICATION MATERIALS
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeCapability.materials.map((mat) => (
                      <span
                        key={mat}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: 'var(--color-ivory)',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(191, 160, 122, 0.15)',
                          padding: '4px 10px'
                        }}
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engineering Specifications List */}
                <div style={{ marginBottom: '2rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      color: 'var(--color-bronze)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.75rem'
                    }}
                  >
                    TECHNICAL CAPABILITY TOLERANCES
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeCapability.specifications.map((spec, sIdx) => (
                      <li
                        key={sIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '10px',
                          fontSize: '0.85rem',
                          color: 'var(--color-stone)'
                        }}
                      >
                        <span
                          style={{
                            width: '4px',
                            height: '4px',
                            backgroundColor: 'var(--color-bronze)',
                            flexShrink: 0
                          }}
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architectural Quote */}
                <div
                  style={{
                    borderLeft: '1px solid var(--color-bronze)',
                    paddingLeft: '1.25rem',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif-editorial)',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: 'var(--color-stone-light)'
                    }}
                  >
                    {activeCapability.detailQuote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
