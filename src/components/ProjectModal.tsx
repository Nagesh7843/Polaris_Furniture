import React, { useState, useEffect } from 'react';
import { X, MapPin, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/polarisData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery.length > 0 ? project.gallery : [project.featuredImage];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

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
          maxWidth: '1100px',
          maxHeight: '92vh',
          backgroundColor: 'var(--color-obsidian)',
          border: '1px solid var(--color-bronze-border)',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Modal Top Bar */}
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
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.62rem, 1.2vw, 0.72rem)',
                color: 'var(--color-bronze)',
                letterSpacing: '0.14em'
              }}
            >
              PROJECT STUDY // {project.category.toUpperCase()}
            </span>
            <span style={{ color: 'var(--color-stone-dark)' }}>/</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.62rem, 1.2vw, 0.72rem)',
                color: 'var(--color-stone)'
              }}
            >
              {project.location}
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

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}>
          {/* Main Image Showcase with Gallery Navigation */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              maxHeight: '520px',
              backgroundColor: 'var(--color-charcoal)',
              overflow: 'hidden',
              marginBottom: '2rem',
              border: '1px solid var(--color-bronze-border-subtle)'
            }}
          >
            <img
              src={gallery[activeImageIndex]}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            {/* Gallery Navigation Controls if multiple images */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    backgroundColor: 'rgba(10, 9, 8, 0.8)',
                    border: '1px solid var(--color-bronze-border)',
                    color: 'var(--color-ivory)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Previous gallery image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    backgroundColor: 'rgba(10, 9, 8, 0.8)',
                    border: '1px solid var(--color-bronze-border)',
                    color: 'var(--color-ivory)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Next gallery image"
                >
                  <ChevronRight size={20} />
                </button>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(10, 9, 8, 0.85)',
                    padding: '4px 10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-bronze)'
                  }}
                >
                  IMAGE 0{activeImageIndex + 1} / 0{gallery.length}
                </div>
              </>
            )}
          </div>

          {/* Project Details Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '2.2rem',
                  color: 'var(--color-ivory-light)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.15
                }}
              >
                {project.title}
              </h2>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--color-bronze)',
                  letterSpacing: '0.12em',
                  marginBottom: '1.5rem'
                }}
              >
                <MapPin size={14} />
                {project.location}
              </div>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.85,
                  color: 'var(--color-stone-light)',
                  marginBottom: '2rem'
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  backgroundColor: 'rgba(191, 160, 122, 0.05)',
                  borderLeft: '2px solid var(--color-bronze)',
                  padding: '1.25rem',
                  marginBottom: '2rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-bronze)',
                    letterSpacing: '0.14em',
                    marginBottom: '0.35rem'
                  }}
                >
                  CONTRACTED SCOPE OF WORKS (OFFICIAL RECORD)
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-ivory)', lineHeight: 1.6 }}>
                  {project.scope}
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: 'var(--color-charcoal-dark)',
                  border: '1px solid var(--color-bronze-border-subtle)',
                  padding: '2rem',
                  marginBottom: '2rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-bronze)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1rem'
                  }}
                >
                  ARCHITECTURAL & TECHNICAL HIGHLIGHTS
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {project.architecturalHighlights.map((hl, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="var(--color-bronze)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-stone-light)', lineHeight: 1.6 }}>
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {project.clientOrOperator && (
                <div style={{ marginBottom: '2rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-stone-dark)',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}
                  >
                    CLIENT / OPERATOR
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.25rem',
                      color: 'var(--color-ivory)'
                    }}
                  >
                    {project.clientOrOperator}
                  </span>
                </div>
              )}

              <button
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                className="btn-bronze"
                style={{ width: '100%', padding: '1rem' }}
              >
                <span>INQUIRE ABOUT SIMILAR SCOPE</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
