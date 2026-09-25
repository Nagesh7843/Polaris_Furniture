import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Eye } from 'lucide-react';

interface CollageItem {
  id: string;
  image: string;
  badge: string;
  title: string;
  description: string;
  dimensions: string;
}

interface OverlappingImageCollageProps {
  onOpenConsultation?: () => void;
  onNavigatePage?: (pageId: string) => void;
}

const COLLAGE_DATA: CollageItem[] = [
  {
    id: 'elevation-context',
    image: '/assets/page_073_img_5_1113x730.jpeg',
    badge: '01 // ARCHITECTURAL ELEVATION',
    title: 'COMPLETE INTERIOR SUITE INTEGRATION',
    description: 'Turnkey solid walnut wall cladding and continuous flush architectural fit-outs.',
    dimensions: 'H: 3,400MM · ELEVATION SPAN'
  },
  {
    id: 'vertical-casing',
    image: '/assets/page_076_img_3_1336x893.jpeg',
    badge: '02 // VERTICAL TIMBER CASING',
    title: 'SOLID DOORWAYS & INTEGRATED JOINERY',
    description: 'FD60 fire-rated hardwood door systems with flush architectural wall cladding and recessed reveals.',
    dimensions: 'W: 1,200MM × H: 2,800MM'
  },
  {
    id: 'bespoke-casework',
    image: '/assets/page_075_img_4_987x554.jpeg',
    badge: '03 // BESPOKE CASEWORK',
    title: 'EXECUTIVE DINING & RESIDENTIAL CREATING',
    description: 'Quarter-sawn American Black Walnut casework with hand-rubbed organic hardwax oil.',
    dimensions: 'L: 3,200MM · WATERFALL EDGING'
  },
  {
    id: 'veneer-flitch',
    image: '/assets/page_079_img_4_1336x891.jpeg',
    badge: '04 // FLITCH BOOKMATCHING',
    title: 'GEOMETRIC VENEER SYMMETRY',
    description: '0.6mm crown-cut natural flitches cross-spliced with continuous grain matching and hairline tolerances.',
    dimensions: '0.6MM FLITCH · 100% GRAIN MATCH'
  }
];

export const OverlappingImageCollage: React.FC<OverlappingImageCollageProps> = ({
  onOpenConsultation,
  onNavigatePage
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section
      id="curated-compositions"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-ivory)',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        borderBottom: '1px solid var(--color-bronze-border-subtle)',
        position: 'relative',
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
          <div>
            <div className="arch-label">
              <Layers size={12} color="var(--color-bronze)" />
              <span>OVERLAPPING CRAFT TAPESTRY // 4-DISCIPLINE HARMONY</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2.0rem, 5vw, 4rem)',
                fontWeight: 500,
                color: 'var(--color-ivory-light)',
                letterSpacing: '0.04em',
                margin: '0.5rem 0 0 0',
                lineHeight: 1.1
              }}
            >
              FURNITURE, CASING & ARCHITECTURE.
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.88rem, 1.2vw, 0.98rem)',
              color: 'var(--color-stone)',
              maxWidth: '520px',
              lineHeight: 1.7,
              margin: 0
            }}
          >
            True architectural harmony occurs when fitted millwork, wall panelling, fire doors, and loose furniture
            pieces share the identical grain selection, timber moisture calibration, and sub-millimeter shadow reveals.
          </p>
        </div>

        {/* 4-Image Partially Overlapping Collage Stage — EXACT SAME LAYOUT ON ALL SCREEN SIZES */}
        <div
          className="collage-stage"
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(340px, 85vw, 740px)',
            marginBottom: '2.5rem'
          }}
        >
          {/* IMAGE 1: Top-Left Primary Anchor Elevation */}
          <motion.div
            layout
            onMouseEnter={() => setActiveItem('elevation-context')}
            onMouseLeave={() => setActiveItem(null)}
            onClick={() => setActiveItem(activeItem === 'elevation-context' ? null : 'elevation-context')}
            style={{
              position: 'absolute',
              top: '0%',
              left: '0%',
              width: '56%',
              height: '56%',
              zIndex: activeItem === 'elevation-context' ? 15 : 1,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer'
            }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <div
              className="woodcraft-frame"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0a0908',
                boxShadow: activeItem === 'elevation-context'
                  ? '0 30px 60px rgba(0, 0, 0, 0.95), 0 0 0 1px var(--color-bronze)'
                  : '0 16px 36px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src={COLLAGE_DATA[0].image}
                alt={COLLAGE_DATA[0].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8, 7, 6, 0.92) 0%, rgba(8, 7, 6, 0.35) 50%, transparent 100%)'
                }}
              />
              <div className="collage-card-overlay">
                <div className="timber-badge collage-badge">
                  <span>{COLLAGE_DATA[0].badge}</span>
                </div>
                <h4 className="collage-title">
                  {COLLAGE_DATA[0].title}
                </h4>
                <div className="collage-dim">
                  {COLLAGE_DATA[0].dimensions}
                </div>
              </div>
            </div>
          </motion.div>

          {/* IMAGE 2: Top-Right Overlapping Vertical Portrait (Overlaps Image 1 right edge) */}
          <motion.div
            layout
            onMouseEnter={() => setActiveItem('vertical-casing')}
            onMouseLeave={() => setActiveItem(null)}
            onClick={() => setActiveItem(activeItem === 'vertical-casing' ? null : 'vertical-casing')}
            style={{
              position: 'absolute',
              top: '4%',
              right: '2%',
              width: '46%',
              height: '62%',
              zIndex: activeItem === 'vertical-casing' ? 15 : 3, // Sits above Image 1
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer'
            }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <div
              className="woodcraft-frame"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0a0908',
                boxShadow: activeItem === 'vertical-casing'
                  ? '0 30px 60px rgba(0, 0, 0, 0.95), 0 0 0 1px var(--color-bronze)'
                  : '0 20px 45px rgba(0, 0, 0, 0.8)'
              }}
            >
              <img
                src={COLLAGE_DATA[1].image}
                alt={COLLAGE_DATA[1].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8, 7, 6, 0.92) 0%, rgba(8, 7, 6, 0.35) 50%, transparent 100%)'
                }}
              />
              <div className="collage-card-overlay">
                <div className="timber-badge collage-badge">
                  <span>{COLLAGE_DATA[1].badge}</span>
                </div>
                <h4 className="collage-title">
                  {COLLAGE_DATA[1].title}
                </h4>
                <div className="collage-dim">
                  {COLLAGE_DATA[1].dimensions}
                </div>
              </div>
            </div>
          </motion.div>

          {/* IMAGE 3: Bottom-Left Overlapping Horizontal Casework (Overlaps Image 1 bottom & Image 4 left) */}
          <motion.div
            layout
            onMouseEnter={() => setActiveItem('bespoke-casework')}
            onMouseLeave={() => setActiveItem(null)}
            onClick={() => setActiveItem(activeItem === 'bespoke-casework' ? null : 'bespoke-casework')}
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '4%',
              width: '52%',
              height: '46%',
              zIndex: activeItem === 'bespoke-casework' ? 15 : 4, // Sits above Image 1 and partially over Image 4
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer'
            }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <div
              className="woodcraft-frame"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0a0908',
                boxShadow: activeItem === 'bespoke-casework'
                  ? '0 30px 60px rgba(0, 0, 0, 0.95), 0 0 0 1px var(--color-bronze)'
                  : '0 25px 50px rgba(0, 0, 0, 0.85)'
              }}
            >
              <img
                src={COLLAGE_DATA[2].image}
                alt={COLLAGE_DATA[2].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8, 7, 6, 0.92) 0%, rgba(8, 7, 6, 0.35) 50%, transparent 100%)'
                }}
              />
              <div className="collage-card-overlay">
                <div className="timber-badge collage-badge">
                  <span>{COLLAGE_DATA[2].badge}</span>
                </div>
                <h4 className="collage-title">
                  {COLLAGE_DATA[2].title}
                </h4>
                <div className="collage-dim">
                  {COLLAGE_DATA[2].dimensions}
                </div>
              </div>
            </div>
          </motion.div>

          {/* IMAGE 4: Bottom-Right Overlapping Veneer Accent (Overlaps Image 2 bottom & Image 3 right) */}
          <motion.div
            layout
            onMouseEnter={() => setActiveItem('veneer-flitch')}
            onMouseLeave={() => setActiveItem(null)}
            onClick={() => setActiveItem(activeItem === 'veneer-flitch' ? null : 'veneer-flitch')}
            style={{
              position: 'absolute',
              bottom: '3%',
              right: '5%',
              width: '43%',
              height: '42%',
              zIndex: activeItem === 'veneer-flitch' ? 15 : 2,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer'
            }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <div
              className="woodcraft-frame"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0a0908',
                boxShadow: activeItem === 'veneer-flitch'
                  ? '0 30px 60px rgba(0, 0, 0, 0.95), 0 0 0 1px var(--color-bronze)'
                  : '0 20px 45px rgba(0, 0, 0, 0.8)'
              }}
            >
              <img
                src={COLLAGE_DATA[3].image}
                alt={COLLAGE_DATA[3].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8, 7, 6, 0.92) 0%, rgba(8, 7, 6, 0.35) 50%, transparent 100%)'
                }}
              />
              <div className="collage-card-overlay">
                <div className="timber-badge collage-badge">
                  <span>{COLLAGE_DATA[3].badge}</span>
                </div>
                <h4 className="collage-title">
                  {COLLAGE_DATA[3].title}
                </h4>
                <div className="collage-dim">
                  {COLLAGE_DATA[3].dimensions}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Website Link Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            paddingTop: '2rem'
          }}
        >
          <button
            onClick={() => onNavigatePage && onNavigatePage('projects')}
            className="collage-action-btn"
            style={{
              background: 'rgba(25, 22, 19, 0.65)',
              border: '1px solid var(--color-bronze-border-subtle)',
              padding: '0.75rem 1.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              color: 'var(--color-bronze-light)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-bronze)';
              e.currentTarget.style.color = 'var(--color-ivory)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-bronze-border-subtle)';
              e.currentTarget.style.color = 'var(--color-bronze-light)';
            }}
          >
            <span>VIEW COMPLETE PROJECT DOSSIERS</span>
            <Eye size={14} />
          </button>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="btn-bronze collage-action-btn"
              style={{
                padding: '0.75rem 1.6rem',
                fontSize: '0.72rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span>COMMENCE SPECIFICATION</span>
              <ArrowUpRight size={13} />
            </button>
          )}
        </div>
      </div>

      <style>{`
        .collage-card-overlay {
          position: absolute;
          bottom: 0.65rem;
          left: 0.65rem;
          right: 0.65rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          pointer-events: none;
          z-index: 5;
        }

        .collage-badge {
          font-size: clamp(0.48rem, 1vw, 0.65rem) !important;
          padding: 2px 6px !important;
          letter-spacing: 0.1em !important;
          margin-bottom: 1px;
        }

        .collage-title {
          font-family: var(--font-serif-display);
          font-size: clamp(0.68rem, 1.8vw, 1.25rem);
          color: var(--color-ivory);
          margin: 0;
          line-height: 1.15;
          letter-spacing: 0.02em;
        }

        .collage-dim {
          font-family: var(--font-mono);
          font-size: clamp(0.48rem, 1vw, 0.65rem);
          color: var(--color-timber-honey);
          letter-spacing: 0.08em;
          white-space: nowrap;
          opacity: 0.95;
        }

        @media (min-width: 768px) {
          .collage-card-overlay {
            bottom: 1.25rem;
            left: 1.5rem;
            right: 1.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .collage-badge {
            font-size: 0.65rem !important;
            padding: 4px 10px !important;
          }
          .collage-title {
            font-size: 1.25rem;
          }
          .collage-dim {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 580px) {
          .collage-action-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
