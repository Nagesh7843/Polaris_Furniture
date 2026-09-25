import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ZoomIn, ZoomOut, Layers } from 'lucide-react';

export interface GalleryItem {
  id: string;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  tolerance: string;
  technique: string;
  woodType: string;
}

interface PopUpImageGalleryProps {
  items?: GalleryItem[];
  autoPlayInterval?: number;
}

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'mitered-dovetail',
    image: '/assets/precision_joinery_joint_macro_1790265492296.jpg',
    badge: '01 // MACRO JOINT DETAIL',
    title: 'INTERLOCKING MITERED DOVETAILS',
    subtitle: 'Concealed internal multi-tooth tenons engineered for thermal stability',
    tolerance: '±0.20 MM',
    technique: 'Continuous CNC milling & hand-planed miter',
    woodType: 'American Black Walnut (Juglans Nigra)'
  },
  {
    id: 'mortise-tenon',
    image: '/assets/page_033_img_2_1536x864.png',
    badge: '02 // LOAD-BEARING ARCHITECTURE',
    title: 'BLIND MORTISE & TENON SPLINES',
    subtitle: 'Precision structural joinery for heavy contract hospitality casework',
    tolerance: '±0.15 MM',
    technique: '5-Axis Spindle Profiling & PUR thermoset bonding',
    woodType: 'European White Oak (Quercus Robur)'
  },
  {
    id: 'fluted-tambour',
    image: '/assets/page_034_img_2_1536x864.png',
    badge: '03 // ROBOTIC WOOD PROFILING',
    title: 'CNC PROFILE FLUTED TAMBOUR',
    subtitle: 'Compound radius micro-slats mounted on resilient acoustic canvas',
    tolerance: '±0.10 MM',
    technique: '24,000 RPM high-speed diamond cutter profiling',
    woodType: 'Quarter-Sawn European Ash'
  },
  {
    id: 'shadow-reveal',
    image: '/assets/page_035_img_2_1536x864.png',
    badge: '04 // METALLURGY INTEGRATION',
    title: '3MM PVD BRASS SHADOW REVEAL',
    subtitle: 'Hairline expansion gap separating solid timber elevations from marble',
    tolerance: '±0.05 MM',
    technique: 'Sub-millimeter CNC waterjet metal routing & bonding',
    woodType: 'Smoked Eucalyptus & Titanium Brass'
  },
  {
    id: 'fire-core',
    image: '/assets/page_036_img_4_1536x864.png',
    badge: '05 // CIVIL DEFENSE ACCREDITED',
    title: 'FD120 FIRE DOOR CASING & SEALS',
    subtitle: 'Graphite intumescent gaskets concealed inside solid hardwood lippings',
    tolerance: '±0.25 MM',
    technique: 'Halspan solid mineral core & vacuum press lamination',
    woodType: 'Certified Fire-Retardant Hardwood Core'
  }
];

export const PopUpImageGallery: React.FC<PopUpImageGalleryProps> = ({
  items = DEFAULT_GALLERY,
  autoPlayInterval = 4500
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward (next), -1 = backward
  const [isPlaying, setIsPlaying] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  // Auto-play timer with pause on user interaction
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, items.length, autoPlayInterval]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx >= currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const current = items[currentIndex];

  // POP UP for next image, POP DOWN for removed image physics variants
  const popVariants = {
    enter: (dir: number) => ({
      y: dir >= 0 ? 80 : -80, // Next image POPS UP from below
      scale: 0.88,
      opacity: 0,
      filter: 'blur(8px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)'
    }),
    center: {
      y: 0,
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
      transition: {
        y: { type: 'spring' as const, stiffness: 300, damping: 24, mass: 0.8 },
        scale: { type: 'spring' as const, stiffness: 300, damping: 24, mass: 0.8 },
        opacity: { duration: 0.35, ease: 'easeOut' as const },
        filter: { duration: 0.35 }
      }
    },
    exit: (dir: number) => ({
      y: dir >= 0 ? 80 : -80, // Removed image POPS DOWN towards bottom
      scale: 0.88,
      opacity: 0,
      filter: 'blur(8px)',
      transition: {
        duration: 0.38,
        ease: 'easeIn' as const
      }
    })
  };

  return (
    <div
      className="woodcraft-frame"
      style={{
        backgroundColor: 'var(--color-pitch)',
        padding: 'clamp(1rem, 3.5vw, 2.5rem)',
        boxShadow: 'var(--shadow-timber)'
      }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Top Header Bar with Live Metric & Status */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.75rem',
          borderBottom: '1px solid var(--color-bronze-border-subtle)',
          paddingBottom: '1.25rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="timber-badge">
            <Layers size={13} color="var(--color-bronze)" />
            <span>POP-UP MULTI-IMAGE CRAFT VIEWER</span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-stone-dark)' }}>
            // {currentIndex + 1} OF {items.length}
          </span>
        </div>

        {/* Play / Pause & Zoom Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              background: isPlaying ? 'rgba(191, 160, 122, 0.12)' : 'rgba(25, 22, 19, 0.6)',
              border: '1px solid var(--color-bronze-border-subtle)',
              color: isPlaying ? 'var(--color-bronze-light)' : 'var(--color-stone)',
              padding: '6px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlaying ? 'AUTOCYCLE: ON' : 'PAUSED'}</span>
          </button>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            style={{
              background: isZoomed ? 'var(--color-bronze)' : 'rgba(25, 22, 19, 0.6)',
              border: '1px solid var(--color-bronze-border-subtle)',
              color: isZoomed ? 'var(--color-pitch)' : 'var(--color-stone-light)',
              padding: '6px 10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            title="Toggle Detailed Macro Zoom"
          >
            {isZoomed ? <ZoomOut size={12} /> : <ZoomIn size={12} />}
            <span>{isZoomed ? '1.4× ZOOM' : 'FIT'}</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage with Pop Up / Pop Down Animation */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          maxHeight: '620px',
          overflow: 'hidden',
          backgroundColor: '#0a0908',
          border: '1px solid var(--color-timber-border)'
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current.id}
            custom={direction}
            variants={popVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}
          >
            <motion.img
              src={current.image}
              alt={current.title}
              animate={{ scale: isZoomed ? 1.38 : 1.0 }}
              transition={{ duration: 0.45 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            {/* Subtle Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8, 7, 6, 0.95) 0%, rgba(8, 7, 6, 0.2) 45%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* In-Frame Live Technical Telemetry Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.75rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1.5rem',
                pointerEvents: 'none'
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-timber-honey)',
                    letterSpacing: '0.14em',
                    marginBottom: '4px'
                  }}
                >
                  {current.badge}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
                    color: 'var(--color-ivory-light)',
                    margin: 0,
                    lineHeight: 1.15
                  }}
                >
                  {current.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--color-stone-light)',
                    maxWidth: '650px',
                    margin: '6px 0 0 0',
                    lineHeight: 1.5
                  }}
                >
                  {current.subtitle}
                </p>
              </div>

              {/* Engineering Specs Pill */}
              <div
                style={{
                  backgroundColor: 'rgba(12, 10, 8, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--color-timber-border)',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  gap: '1.75rem'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--color-stone-dark)', letterSpacing: '0.1em' }}>
                    CALIBRATED TOLERANCE
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--color-ivory)', fontWeight: 600 }}>
                    {current.tolerance}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--color-stone-dark)', letterSpacing: '0.1em' }}>
                    MATERIAL SPECIFICATION
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-timber-honey)', fontWeight: 500 }}>
                    {current.woodType}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Previous / Next Arrow Controls */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            backgroundColor: 'rgba(10, 9, 8, 0.8)',
            border: '1px solid var(--color-timber-border)',
            color: 'var(--color-ivory)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-bronze)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(10, 9, 8, 0.8)';
            e.currentTarget.style.color = 'var(--color-ivory)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.0)';
          }}
          aria-label="Previous Image"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            backgroundColor: 'rgba(10, 9, 8, 0.8)',
            border: '1px solid var(--color-timber-border)',
            color: 'var(--color-ivory)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-bronze)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(10, 9, 8, 0.8)';
            e.currentTarget.style.color = 'var(--color-ivory)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.0)';
          }}
          aria-label="Next Image"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Interactive Thumbnail Carousel with Pop Active Indicator */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
          gap: 'clamp(0.35rem, 1.2vw, 1rem)',
          marginTop: '1.25rem'
        }}
      >
        {items.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(idx)}
              style={{
                position: 'relative',
                aspectRatio: '16/10',
                border: isActive ? '2px solid var(--color-bronze)' : '1px solid var(--color-bronze-border-subtle)',
                backgroundColor: '#0c0a09',
                padding: 0,
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: isActive ? '0 8px 20px rgba(191, 160, 122, 0.2)' : 'none'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: isActive ? 1.0 : 0.55,
                  transition: 'opacity 0.3s ease'
                }}
              />

              {/* Active Pop Indicator Ribbon */}
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: 'var(--color-bronze)'
                  }}
                />
              )}

              {/* Number Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: isActive ? 'var(--color-ivory)' : 'var(--color-stone-dark)',
                  backgroundColor: 'rgba(8, 7, 6, 0.75)',
                  padding: '1px 5px'
                }}
              >
                0{idx + 1}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
