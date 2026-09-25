import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
  onNavigatePage?: (pageId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation, onNavigatePage }) => {
  const [activePhase, setActivePhase] = useState(0);

  const PHASES = [
    {
      id: 'grain',
      image: '/assets/hero_timber_grain_1790274744364.jpg',
      code: 'CODE: OAK-WLN-01',
      textureTag: 'CUSTOM FURNITURE TEXTURE // QUARTER-SAWN EUROPEAN OAK & AMERICAN WALNUT',
      materialCode: 'MAT-CODE: FSC-100 // KILN EQUILIBRIUM 8–10%',
      tag: '01 // RAW HARDWOOD INTEGRITY',
      headline: 'WE CRAFT LIVING TIMBER.',
      subtitle: 'Master woodworking and bespoke furniture design, engineered from sustainably harvested European Oak and American Walnut flitches.',
      specs: 'QUARTER-SAWN GRAIN · KILN EQUILIBRIUM 8–10% · STRUCTURAL HARDWOOD'
    },
    {
      id: 'joinery',
      image: '/assets/hero_joinery_craft_1790274773951.jpg',
      code: 'CODE: JNR-CNC-02',
      textureTag: 'CUSTOM FURNITURE TEXTURE // INTERLOCKING MITERED DOVETAILS & PVD BRASS',
      materialCode: 'MAT-CODE: BRZ-316L // TOLERANCE ±0.2MM',
      tag: '02 // ARTISANAL JOINERY ARCHITECTURE',
      headline: 'SHAPED BY MASTER HANDS.',
      subtitle: 'Interlocking mitered dovetails, blind mortise-and-tenon cabinetry, and hairline brushed bronze reveals crafted in Dubai.',
      specs: 'MITERED DOVETAILS · PVD BRASS SHADOW GAPS · ±0.2MM TOLERANCE'
    },
    {
      id: 'furniture',
      image: '/assets/furniture_table_minimal_1790272332231.jpg',
      code: 'CODE: FNT-CRD-03',
      textureTag: 'CUSTOM FURNITURE TEXTURE // HONED BIANCO CARRARA & TAMBOUR SLATS',
      materialCode: 'MAT-CODE: MAR-IT20 // TAMBOUR WALNUT CARCASS',
      tag: '03 // BESPOKE FURNITURE FABRICATION',
      headline: 'FURNITURE AS ARCHITECTURE.',
      subtitle: 'Solid timber credenzas, bespoke dining centerpieces, and contract hospitality casework crafted in our 45,000+ sq. ft. campus.',
      specs: 'HONED CARRARA MARBLE · TAMBOUR SLATS · SOLID WALNUT CARCASS'
    },
    {
      id: 'space',
      image: '/assets/furniture_closing_sanctuary_1790272406073.jpg',
      code: 'CODE: SPC-FIT-04',
      textureTag: 'CUSTOM FURNITURE TEXTURE // CONTRACT BOUCLÉ & BOOKMATCHED ELEVATIONS',
      materialCode: 'MAT-CODE: TXT-50K // CIVIL DEFENSE FD120',
      tag: '04 // FINISHED ARCHITECTURAL SANCTUARY',
      headline: 'CRAFTED FOR THE SPACE.',
      subtitle: 'From standalone heirloom furniture pieces to turnkey presidential hotel suites and palatial private residences across the GCC.',
      specs: 'TURNKEY JOINERY EXECUTION · SOLID TIMBER ARCHITECTURE · GLOBAL DELIVERY'
    }
  ];

  const CYCLE_TIME = 6000; // 6 seconds per phase

  // Preload all hero images so transitions never stall or flicker
  useEffect(() => {
    PHASES.forEach((phase) => {
      const img = new Image();
      img.src = phase.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % PHASES.length);
    }, CYCLE_TIME);
    return () => clearInterval(timer);
  }, [PHASES.length]);

  const current = PHASES[activePhase];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(560px, 92svh, 860px)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-pitch)',
        color: 'var(--color-ivory)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '3rem'
      }}
    >
      {/* Background Visual Crossfade Transition */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current.id + '-bg'}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${current.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.58) contrast(1.12)'
          }}
        />
      </AnimatePresence>

      {/* Atmospheric Vignette Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 30%, rgba(6, 6, 6, 0.78) 100%)',
          pointerEvents: 'none',
          zIndex: 3
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(6, 6, 6, 0.5) 0%, transparent 40%, rgba(6, 6, 6, 0.9) 100%)',
          pointerEvents: 'none',
          zIndex: 3
        }}
      />

      {/* Hero Content Stage */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '1020px',
          width: '100%',
          padding: '0 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* CSS Grid Overlay Container: Guarantees zero layout shift during crossfade */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'center',
            justifyItems: 'center',
            width: '100%'
          }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={current.id + '-content'}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                gridArea: '1 / 1',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Monumental Headline */}
              <h1
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(2.1rem, 6.5vw, 6.2rem)',
                  lineHeight: 1.04,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ivory-light)',
                  margin: 0,
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.95)'
                }}
              >
                {current.headline}
              </h1>

              {/* Refined Craft Prose */}
              <p
                style={{
                  marginTop: '1.25rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.18rem)',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  letterSpacing: '0.03em',
                  color: 'var(--color-ivory-muted)',
                  maxWidth: '740px',
                  margin: '1.25rem auto 0 auto',
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.95)'
                }}
              >
                {current.subtitle}
              </p>

              {/* Architectural Spec Line */}
              <div
                style={{
                  marginTop: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.56rem, 1.1vw, 0.66rem)',
                  letterSpacing: '0.14em',
                  color: 'var(--color-bronze-light)',
                  textTransform: 'uppercase',
                  lineHeight: 1.5
                }}
              >
                {current.specs}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Website Action Buttons — Stationary & Stable (Never shifts or flashes during transitions) */}
        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            width: '100%'
          }}
        >
          <button
            onClick={onOpenConsultation}
            className="btn-bronze hero-action-btn"
            style={{ padding: '0.9rem 2.2rem', fontSize: '0.72rem', letterSpacing: '0.14em' }}
          >
            <span>START A COMMISSION</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            onClick={() => onNavigatePage && onNavigatePage('joinery')}
            className="hero-action-btn"
            style={{
              background: 'rgba(25, 22, 19, 0.72)',
              border: '1px solid var(--color-bronze-border-subtle)',
              color: 'var(--color-ivory)',
              padding: '0.9rem 2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-bronze)';
              e.currentTarget.style.color = 'var(--color-bronze-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-bronze-border-subtle)';
              e.currentTarget.style.color = 'var(--color-ivory)';
            }}
          >
            <span>EXPLORE MASTER JOINERY →</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .hero-action-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
