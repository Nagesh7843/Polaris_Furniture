import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
  onNavigatePage?: (pageId: string) => void;
}

interface HeroSequence {
  id: string;
  video: string;
  poster: string;
  headline: string;
  durationSeconds: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation, onNavigatePage }) => {
  const [activePhase, setActivePhase] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const SEQUENCES: HeroSequence[] = [
    {
      id: 'seq-1',
      video: '/video/video1.mp4',
      poster: '/video/poster_video1.jpg',
      headline: 'ARCHITECTURAL PRECISION. BESPOKE CRAFT.',
      durationSeconds: 10
    },
    {
      id: 'seq-2',
      video: '/video/video2.mp4',
      poster: '/video/poster_video2.jpg',
      headline: 'TIMELESS SPACES CRAFTED FOR LIVING.',
      durationSeconds: 10
    },
    {
      id: 'seq-3',
      video: '/video/video3.mp4',
      poster: '/video/poster_video3.jpg',
      headline: 'REDEFINING LUXURY INTERIORS GLOBALLY.',
      durationSeconds: 15
    },
    {
      id: 'seq-4',
      video: '/video/video4.mp4',
      poster: '/video/poster_video4.jpg',
      headline: 'MONUMENTAL RESIDENCES. UNRIVALED SCALE.',
      durationSeconds: 10
    }
  ];

  const current = SEQUENCES[activePhase];

  // Control video playback upon active phase change
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activePhase) {
        vid.play().catch(() => {});
      } else {
        // Soft pause inactive video after crossfade completes
        const t = setTimeout(() => {
          if (idx !== activePhase) {
            vid.pause();
          }
        }, 1500);
        return () => clearTimeout(t);
      }
    });
  }, [activePhase]);

  // Synchronize audio mute state
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) {
        vid.muted = isMuted;
      }
    });
  }, [isMuted]);

  // Advance to next sequence
  const advanceSequence = () => {
    setActivePhase((prev) => (prev + 1) % SEQUENCES.length);
  };

  // Automatic sequence progression timer
  useEffect(() => {
    const timer = setTimeout(() => {
      advanceSequence();
    }, current.durationSeconds * 1000);

    return () => clearTimeout(timer);
  }, [activePhase, current.durationSeconds]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(620px, 94svh, 920px)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-pitch)',
        color: 'var(--color-ivory)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '5rem'
      }}
    >
      {/* Background Video Stage: Permanent Multi-Track Elements for Zero-Stutter Crossfades */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        {SEQUENCES.map((seq, idx) => {
          const isActive = activePhase === idx;
          return (
            <video
              key={seq.id}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={seq.video}
              poster={seq.poster}
              autoPlay={idx === 0}
              muted={isMuted}
              playsInline
              loop
              preload="auto"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1.0)' : 'scale(1.04)',
                transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: 'none',
                filter: 'brightness(0.88) contrast(1.05)'
              }}
            />
          );
        })}
      </div>

      {/* Cinematic Ambient Scrim: Balances Rich Video Visibility with Sharp Headline Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(6, 6, 6, 0.15) 0%, rgba(6, 6, 6, 0.48) 100%)',
          pointerEvents: 'none',
          zIndex: 3
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(6, 6, 6, 0.42) 0%, rgba(6, 6, 6, 0.1) 40%, rgba(6, 6, 6, 0.62) 100%)',
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
          maxWidth: '1080px',
          width: '100%',
          padding: '0 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* CSS Grid Overlay Container: Zero-Layout-Shift Cinematic Text Crossfade */}
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                gridArea: '1 / 1',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Monumental Cinematic Headline */}
              <h1
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(2.3rem, 6.4vw, 5.8rem)',
                  lineHeight: 1.05,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ivory-light)',
                  margin: 0,
                  maxWidth: '1020px',
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.8)'
                }}
              >
                {current.headline}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Website Action Buttons — Stationary & Stable */}
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
            <span>COMMISSION BESPOKE WORK</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            onClick={() => onNavigatePage && onNavigatePage('facility')}
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
            <span>EXPLORE PRODUCTION CAMPUS →</span>
          </button>
        </div>

        {/* Sleek Minimalist Sequence Indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '2.5rem'
          }}
        >
          {SEQUENCES.map((seq, idx) => {
            const isCurrent = activePhase === idx;
            return (
              <button
                key={seq.id}
                onClick={() => setActivePhase(idx)}
                aria-label={`Sequence ${idx + 1}`}
                style={{
                  width: isCurrent ? '34px' : '14px',
                  height: '3px',
                  borderRadius: '2px',
                  backgroundColor: isCurrent ? 'var(--color-bronze)' : 'rgba(216, 209, 196, 0.28)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Floating Audio Ambient Toggle Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          backgroundColor: 'rgba(10, 9, 8, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--color-bronze-border-subtle)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.12em',
          color: isMuted ? 'var(--color-stone)' : 'var(--color-bronze-light)',
          cursor: 'pointer',
          transition: 'all 0.25s ease'
        }}
        title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--color-bronze)" />}
        <span>{isMuted ? 'AUDIO: MUTED' : 'AUDIO: LIVE'}</span>
      </button>

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
