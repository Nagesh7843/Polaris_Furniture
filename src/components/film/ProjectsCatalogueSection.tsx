import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { PROJECTS } from '../../data/polarisData';
import type { Project } from '../../data/polarisData';

interface ProjectsCatalogueSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsCatalogueSection: React.FC<ProjectsCatalogueSectionProps> = ({ onSelectProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const FEATURED_IDS = [
    'novotel-dhahran',
    'radisson-blu-palm',
    'ritz-carlton-ballroom',
    'dorchester-collection',
    'marriott-residences'
  ];

  const featured = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));
  const activeProj = featured[currentIndex] || featured[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featured.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);
  };

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-ivory)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="arch-label">LANDMARK COMMISSIONS // BESPOKE FURNITURE & FIT-OUTS</div>
            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 500,
                color: 'var(--color-ivory-light)',
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                margin: '0 0 1rem 0'
              }}
            >
              FURNITURE IN ARCHITECTURE.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'var(--color-stone)',
                maxWidth: '620px',
                lineHeight: 1.6
              }}
            >
              Turnkey architectural joinery, master timber casework, custom guestroom furniture,
              and acoustic doors delivered across five-star luxury hospitality and private estates.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              style={{
                width: '46px',
                height: '46px',
                border: '1px solid var(--color-bronze-border)',
                backgroundColor: 'var(--color-charcoal-dark)',
                color: 'var(--color-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label="Previous Project"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              style={{
                width: '46px',
                height: '46px',
                border: '1px solid var(--color-bronze-border)',
                backgroundColor: 'var(--color-charcoal-dark)',
                color: 'var(--color-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label="Next Project"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Large Cinematic Project Display with Animations */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '640px',
            overflow: 'hidden',
            border: '1px solid var(--color-bronze-border-subtle)',
            backgroundColor: 'var(--color-pitch)'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProj.id}
              src={activeProj.featuredImage}
              alt={activeProj.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </AnimatePresence>

          {/* Project Details Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(1rem, 3.5vw, 2.5rem)',
              background: 'linear-gradient(180deg, transparent 0%, rgba(6, 6, 6, 0.96) 100%)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ maxWidth: '650px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.62rem, 1.2vw, 0.72rem)',
                  color: 'var(--color-bronze)',
                  letterSpacing: '0.14em',
                  marginBottom: '6px'
                }}
              >
                <MapPin size={13} />
                <span>0{currentIndex + 1} / 0{featured.length} · {activeProj.location.toUpperCase()}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(1.35rem, 3.5vw, 2.6rem)',
                  color: 'var(--color-ivory-light)',
                  margin: '0 0 0.5rem 0',
                  lineHeight: 1.15
                }}
              >
                {activeProj.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.78rem, 1.2vw, 0.9rem)',
                  color: 'var(--color-stone-light)',
                  lineHeight: 1.5,
                  margin: 0
                }}
              >
                {activeProj.scope}
              </p>
            </div>

            <button
              onClick={() => onSelectProject(activeProj)}
              className="btn-bronze project-cta-btn"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.72rem' }}
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Index Quick Select Strip */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingTop: '1.5rem',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {featured.map((p, idx) => (
            <motion.button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ y: -2 }}
              style={{
                padding: '10px 18px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                backgroundColor: currentIndex === idx ? 'var(--color-bronze)' : 'var(--color-charcoal-dark)',
                color: currentIndex === idx ? 'var(--color-obsidian)' : 'var(--color-stone)',
                border: `1px solid ${currentIndex === idx ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              0{idx + 1} {p.title.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-cta-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
