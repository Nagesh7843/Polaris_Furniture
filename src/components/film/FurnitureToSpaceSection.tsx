import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FurnitureToSpaceSection: React.FC = () => {
  const [viewState, setViewState] = useState<'object' | 'space'>('space');

  return (
    <section
      id="object-to-space"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-pitch)',
        color: 'var(--color-ivory)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        borderBottom: '1px solid var(--color-bronze-border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="arch-label" style={{ justifyContent: 'center' }}>
            HANDCRAFTED OBJECT TO LIVING ARCHITECTURE // HARMONY
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em',
              margin: '0.5rem 0 1rem 0'
            }}
          >
            FURNITURE DEFINES THE SPACE.
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
            True luxury is when the furniture and the architectural envelope speak the same language.
            Click below to toggle between the isolated hand-sculpted bouclé armchair and the complete penthouse suite.
          </p>
        </div>

        {/* Visual Frame with Smooth Pull-Back Animation */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '640px',
            overflow: 'hidden',
            border: '1px solid var(--color-bronze-border-subtle)',
            backgroundColor: 'var(--color-obsidian)',
            cursor: 'pointer'
          }}
          onClick={() => setViewState(viewState === 'object' ? 'space' : 'object')}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={viewState}
              src={
                viewState === 'object'
                  ? '/assets/furniture_isolated_chair_1790265648761.jpg'
                  : '/assets/furniture_room_context_1790265689075.jpg'
              }
              alt="Furniture in Architectural Context"
              initial={{ opacity: 0, scale: viewState === 'object' ? 1.08 : 0.95 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: viewState === 'object' ? 0.95 : 1.05 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </AnimatePresence>

          {/* Interactive Switch Tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(10, 9, 8, 0.88)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-bronze-border-subtle)',
              padding: '6px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.56rem, 1.1vw, 0.68rem)',
              letterSpacing: '0.12em',
              color: 'var(--color-ivory)'
            }}
          >
            [ CLICK TO TOGGLE: {viewState === 'object' ? 'VIEW ROOM CONTEXT' : 'VIEW ISOLATED PIECE'} ]
          </div>

          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              right: '1rem',
              maxWidth: '520px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.56rem, 1.1vw, 0.68rem)',
              letterSpacing: '0.12em',
              color: 'var(--color-bronze)',
              textTransform: 'uppercase',
              backgroundColor: 'rgba(8, 7, 6, 0.75)',
              padding: '4px 8px',
              display: 'inline-block'
            }}
          >
            {viewState === 'object'
              ? 'BESPOKE WALNUT LOUNGE ARMCHAIR · BOUCLÉ UPHOLSTERY'
              : 'PENTHOUSE LIVING SUITE · INTEGRATED ARCHITECTURAL MILLWORK'}
          </div>
        </div>
      </div>
    </section>
  );
};
