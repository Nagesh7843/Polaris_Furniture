import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { FACTORY_DETAILS } from '../data/polarisData';

interface FactorySectionProps {
  onOpenMachineryModal: () => void;
}

export const FactorySection: React.FC<FactorySectionProps> = ({ onOpenMachineryModal }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [activePanorama, setActivePanorama] = useState(0);
  const [isAutoPanning, setIsAutoPanning] = useState(true);

  const stages = FACTORY_DETAILS.stages;
  const panoramas = FACTORY_DETAILS.panoramas;

  // Auto-advance stages & panoramas if desired, or allow interactive clicking
  useEffect(() => {
    if (!isAutoPanning) return;
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
      setActivePanorama((prev) => (prev + 1) % panoramas.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPanning, stages.length, panoramas.length]);

  return (
    <section
      id="factory"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-charcoal-dark)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        borderBottom: '1px solid var(--color-bronze-border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Top Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4.5rem',
            gap: '2rem'
          }}
        >
          <div>
            <div className="arch-label">DUBAI INVESTMENT PARK // INTEGRATED PRODUCTION</div>
            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                fontWeight: 500,
                color: 'var(--color-ivory-light)',
                letterSpacing: '0.04em',
                lineHeight: 1.1
              }}
            >
              45,000+ SQ. FT. FACILITY
            </h2>
            <p
              style={{
                maxWidth: '680px',
                marginTop: '1rem',
                color: 'var(--color-stone)',
                fontSize: '1rem',
                lineHeight: 1.75
              }}
            >
              Functionally laid out in Dubai Investment Park, our manufacturing environment houses
              high-throughput German and Italian woodworking machinery, dedicated veneer laboratories,
              triple climate-regulated spray booths, and specialized architectural metallurgy stations.
            </p>
          </div>

          <button
            onClick={onOpenMachineryModal}
            className="btn-outline-arch"
            style={{
              padding: '0.85rem 1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Cpu size={16} color="var(--color-bronze)" />
            <span>INSPECT EQUIPMENT LIST</span>
          </button>
        </div>

        {/* The 4-Stage Architectural Progression:
            45,000+ -> MANUFACTURING -> PRECISION -> CRAFT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '3.5rem'
          }}
        >
          {stages.map((stage, idx) => {
            const isActive = idx === currentStage;
            return (
              <button
                key={stage.title}
                onClick={() => {
                  setCurrentStage(idx);
                  setActivePanorama(idx % panoramas.length);
                  setIsAutoPanning(false);
                }}
                style={{
                  textAlign: 'left',
                  padding: '1.5rem',
                  backgroundColor: isActive ? 'rgba(191, 160, 122, 0.08)' : 'var(--color-obsidian)',
                  border: `1px solid ${isActive ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                  position: 'relative',
                  transition: 'all 0.4s var(--transition-slow)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: isActive ? 'var(--color-bronze)' : 'var(--color-stone-dark)',
                    letterSpacing: '0.14em',
                    marginBottom: '0.5rem'
                  }}
                >
                  STAGE 0{idx + 1}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: isActive ? 'var(--color-ivory-light)' : 'var(--color-stone)',
                    marginBottom: '0.4rem'
                  }}
                >
                  {stage.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-stone-dark)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {stage.subtitle}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    lineHeight: 1.5,
                    color: isActive ? 'var(--color-ivory-muted)' : 'var(--color-stone-dark)'
                  }}
                >
                  {stage.description}
                </div>

                {/* Active Underline Pill */}
                {isActive && (
                  <motion.div
                    layoutId="stageUnderline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: 'var(--color-bronze)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dramatic Horizontal Panorama Production Floor Reveal */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(420px, 55vh, 650px)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-obsidian)',
            border: '1px solid var(--color-bronze-border)'
          }}
        >
          {/* Panoramic Factory Photo with Slow Horizontal Movement / Pan */}
          <AnimatePresence mode="wait">
            <motion.div
              key={panoramas[activePanorama].image}
              initial={{ opacity: 0, scale: 1.04, x: 20 }}
              animate={{ opacity: 1, scale: 1.0, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${panoramas[activePanorama].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Architectural Cinematic Lighting Gradients */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10, 9, 8, 0.2) 0%, rgba(10, 9, 8, 0.8) 100%)'
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Panoramic Floor HUD Overlay & Metadata */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              zIndex: 5,
              background: 'linear-gradient(0deg, rgba(8, 7, 6, 0.95) 0%, rgba(8, 7, 6, 0.4) 70%, transparent 100%)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-bronze)',
                  letterSpacing: '0.14em',
                  marginBottom: '0.5rem'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4ade80'
                  }}
                />
                FLOOR SECTOR 0{activePanorama + 1} // DUBAI INVESTMENT PARK
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  color: 'var(--color-ivory-light)',
                  marginBottom: '0.25rem'
                }}
              >
                {panoramas[activePanorama].title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--color-stone)'
                }}
              >
                {panoramas[activePanorama].subtitle}
              </p>
            </div>

            {/* Panorama Prev/Next Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-stone)',
                  marginRight: '0.5rem'
                }}
              >
                0{activePanorama + 1} / 0{panoramas.length}
              </span>
              <button
                onClick={() => {
                  setActivePanorama((prev) => (prev - 1 + panoramas.length) % panoramas.length);
                  setIsAutoPanning(false);
                }}
                style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: 'rgba(10, 9, 8, 0.8)',
                  border: '1px solid var(--color-bronze-border)',
                  color: 'var(--color-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze-border)';
                }}
                aria-label="Previous floor sector"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => {
                  setActivePanorama((prev) => (prev + 1) % panoramas.length);
                  setIsAutoPanning(false);
                }}
                style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: 'rgba(10, 9, 8, 0.8)',
                  border: '1px solid var(--color-bronze-border)',
                  color: 'var(--color-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze-border)';
                }}
                aria-label="Next floor sector"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Factory Plant Specifications Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--color-bronze-border-subtle)'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-bronze)',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.4rem'
              }}
            >
              SPRAY FINISHING
            </span>
            <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>
              3 Paint Booths + 2 Dry
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-stone-dark)', marginTop: '0.2rem' }}>
              Temperature and positive pressure controlled
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-bronze)',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.4rem'
              }}
            >
              ASSEMBLY WORKBENCHES
            </span>
            <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>
              7 Dedicated Stations
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-stone-dark)', marginTop: '0.2rem' }}>
              Localized dust extraction at each workbench
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-bronze)',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.4rem'
              }}
            >
              COMPRESSED AIR & DUST
            </span>
            <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>
              50 HP Network
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-stone-dark)', marginTop: '0.2rem' }}>
              Centralized cyclonic dust filtration & clean air
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-bronze)',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.4rem'
              }}
            >
              CLIMATE STABILIZATION
            </span>
            <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>
              8%–10% EMC Regulated
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-stone-dark)', marginTop: '0.2rem' }}>
              Specialized timber acclimation for GCC climate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
