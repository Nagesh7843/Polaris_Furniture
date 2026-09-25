import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
  onNavigatePage?: (pageId: string) => void;
}

interface HeroSequence {
  id: string;
  video: string;
  poster: string;
  headline: string;
  subtitle: string;
  specs: string;
  durationSeconds: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation, onNavigatePage }) => {
  const [activePhase, setActivePhase] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const SEQUENCES: HeroSequence[] = [
    {
      id: 'seq-1',
      video: '/video/video1.mp4',
      poster: '/assets/hero_timber_grain_1790274744364.jpg',
      headline: 'WE CRAFT LIVING TIMBER.',
      subtitle: 'Master woodworking and bespoke furniture design, engineered from sustainably harvested European Oak and American Walnut flitches.',
      specs: 'QUARTER-SAWN GRAIN · KILN EQUILIBRIUM 8–10% · STRUCTURAL HARDWOOD',
      durationSeconds: 10
    },
    {
      id: 'seq-2',
      video: '/video/video2.mp4',
      poster: '/assets/hero_joinery_craft_1790274773951.jpg',
      headline: 'SHAPED BY MASTER HANDS.',
      subtitle: 'Interlocking mitered dovetails, blind mortise-and-tenon cabinetry, and hairline brushed bronze reveals crafted in Dubai.',
      specs: 'MITERED DOVETAILS · PVD BRASS SHADOW GAPS · ±0.2MM TOLERANCE',
      durationSeconds: 10
    },
    {
      id: 'seq-3',
      video: '/video/video3.mp4',
      poster: '/assets/furniture_table_minimal_1790272332231.jpg',
      headline: 'FURNITURE AS ARCHITECTURE.',
      subtitle: 'Solid timber credenzas, bespoke dining centerpieces, and contract hospitality casework crafted in our 45,000+ sq. ft. campus.',
      specs: 'HONED CARRARA MARBLE · TAMBOUR SLATS · SOLID WALNUT CARCASS',
      durationSeconds: 14
    }
  ];

  const current = SEQUENCES[activePhase];

  // Advance to next video sequence
  const advanceSequence = () => {
    setActivePhase((prev) => (prev + 1) % SEQUENCES.length);
  };

  // Fallback timer if video onEnded doesn't fire or stalls
  useEffect(() => {
    const timer = setTimeout(() => {
      advanceSequence();
    }, current.durationSeconds * 1000);

    return () => clearTimeout(timer);
  }, [activePhase, current.durationSeconds]);

  // Ensure newly mounted video begins playing immediately
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activePhase]);

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
      {/* Background Video Crossfade Transition */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current.id + '-video-wrap'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden'
          }}
        >
          <video
            ref={videoRef}
            src={current.video}
            poster={current.poster}
            autoPlay
            muted
            playsInline
            loop={false}
            onEnded={advanceSequence}
            onLoadedData={(e) => {
              e.currentTarget.play().catch(() => {});
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.58) contrast(1.1)'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Vignette Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 25%, rgba(6, 6, 6, 0.82) 100%)',
          pointerEvents: 'none',
          zIndex: 3
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(6, 6, 6, 0.55) 0%, transparent 40%, rgba(6, 6, 6, 0.92) 100%)',
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

        {/* Website Action Buttons — Stationary & Permanent */}
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
