import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [swapped, setSwapped] = useState(false);

  const MATERIALS = [
    {
      id: 'solid-wood',
      name: 'SOLID WOOD',
      origin: 'European Oak & American Walnut',
      spec: 'Kiln-dried to 8–10% moisture equilibrium for structural longevity and climate stability.',
      image1: '/assets/macro_wood_grain_luxury_1790265455734.jpg',
      label1: 'RAW TIMBER GRAIN',
      caption1: 'Kiln-dried European Oak & American Walnut end-grain flitches',
      image2: '/assets/page_023_img_1_2330x1653.jpeg',
      label2: 'FINISHED ARCHITECTURAL JOINERY',
      caption2: 'Precision-milled solid hardwood joinery & fitted millwork casework',
      specs: [
        { label: 'EQUILIBRIUM', val: '8–10% Moisture Calibration' },
        { label: 'MILLING', val: '5-Axis CNC Precision (±0.2mm)' },
        { label: 'FINISH', val: 'Hand-Rubbed Organic Hardwax' },
        { label: 'STANDARD', val: 'FSC Certified & Civil Defense' }
      ]
    },
    {
      id: 'veneer',
      name: 'ARCHITECTURAL VENEER',
      origin: 'Bookmatched & Crown Cut Flitches',
      spec: '0.6mm precision-sliced veneers, laser-spliced for uninterrupted wood grain symmetry across expansive elevations.',
      image1: '/assets/page_021_img_1_2330x1653.jpeg',
      label1: '0.6MM BOOKMATCHED FLITCH',
      caption1: 'Architectural flitch slicing & grain-matching preparation',
      image2: '/assets/page_055_img_2_1496x1046.jpeg',
      label2: 'INSTALLED VENEERED ELEVATION',
      caption2: 'Continuous bookmatched wall casework & private suite millwork',
      specs: [
        { label: 'CALIPER', val: '0.6mm Diamond Knife Sliced' },
        { label: 'SPLICING', val: 'Continuous Architectural Symmetry' },
        { label: 'SUBSTRATE', val: 'CARB-Phase 2 Moisture Resistant' },
        { label: 'PRESSING', val: 'Hydraulic Vacuum Hot-Press' }
      ]
    },
    {
      id: 'metal',
      name: 'SPECIALIZED METALS',
      origin: 'PVD Coated Brass & 316 Stainless Steel',
      spec: 'Titanium PVD brushed finishes, custom brass ferrules, and structural decorative metal screens.',
      image1: '/assets/page_024_img_1_2330x1632.jpeg',
      label1: 'METALLURGY CNC PROFILE',
      caption1: 'Architectural metal fabrication, shearing, and laser profiling',
      image2: '/assets/page_058_img_4_1440x960.jpeg',
      label2: 'INTEGRATED BRASS REVEALS',
      caption2: 'PVD brushed bronze inlays, metal framing & feature screens',
      specs: [
        { label: 'BONDING', val: 'Titanium PVD Vapor Deposition' },
        { label: 'ALLOY', val: 'Marine-Grade 316 & Architectural Brass' },
        { label: 'CUTTING', val: 'Sub-Millimeter CNC Waterjet' },
        { label: 'SURFACE', val: 'Directional Satin Hairline Brushed' }
      ]
    },
    {
      id: 'glass',
      name: 'DECORATIVE GLASS',
      origin: 'Fluted, Toughened & Acoustic Laminated',
      spec: 'Custom back-painted feature panels, reeded glass partitions, and impact-resistant acoustic glass doors.',
      image1: '/assets/page_026_img_1_2334x1651.jpeg',
      label1: 'FLUTED & BEVELED EDGING',
      caption1: 'Precision edge-polishing and decorative glass processing',
      image2: '/assets/page_059_img_2_1440x960.jpeg',
      label2: 'ARCHITECTURAL PARTITIONS',
      caption2: 'Acoustic-laminated and tinted feature glass installations',
      specs: [
        { label: 'PROFILES', val: 'Architectural Fluted & Reeded' },
        { label: 'TEMPERING', val: 'EN 12150 Thermal Toughening' },
        { label: 'ACOUSTICS', val: 'Acoustic-Damping Interlayer' },
        { label: 'POLISHING', val: 'Bespoke Mitered Beveled Edges' }
      ]
    },
    {
      id: 'fabric',
      name: 'SOFT FURNISHINGS',
      origin: 'Contract Bouclé & Full-Grain Leather',
      spec: 'Martindale 50,000+ rub hospitality-grade upholstery meeting British Standard BS 5852 fire retardancy.',
      image1: '/assets/materials_fabric_boucle_1790274814449.jpg',
      label1: 'CUSTOM UPHOLSTERY',
      caption1: 'Hand-tailored textured bouclé upholstery draped over walnut',
      image2: '/assets/page_072_img_3_1280x853.jpeg',
      label2: 'ACOUSTIC WALL PANELLING',
      caption2: 'Integrated luxury padded wall panels and upholstered suites',
      specs: [
        { label: 'RUB COUNT', val: '50,000+ Martindale Hospitality Grade' },
        { label: 'FIRE RATING', val: 'BS 5852 Retardancy Compliant' },
        { label: 'TAILORING', val: 'Artisanal Double French Seaming' },
        { label: 'SUBSTRATE', val: 'High-Resilience Acoustic Foam' }
      ]
    }
  ];

  const PROCESS = [
    { num: '01', title: 'TIMBER ACCLIMATIZATION', desc: '8–10% moisture content calibration' },
    { num: '02', title: 'COMPUTERIZED SIZING', desc: 'Optimized grain layout & beam sawing' },
    { num: '03', title: 'CNC SPINDLE PROFILING', desc: '5-axis multi-head joinery milling' },
    { num: '04', title: 'BENCH CRAFT & SANDING', desc: 'Artisanal hand-scraping & fine grit' },
    { num: '05', title: 'SATIN OIL FINISHING', desc: 'Positive-pressure booth curing' },
    { num: '06', title: 'WHITE-GLOVE FIT-OUT', desc: 'Turnkey architectural installation' }
  ];

  const currentMat = MATERIALS[selectedMaterial];

  // Dynamic image mapping for interactive focal swapping
  const heroImg = swapped ? currentMat.image1 : currentMat.image2;
  const heroLabel = swapped ? currentMat.label1 : currentMat.label2;
  const heroCaption = swapped ? currentMat.caption1 : currentMat.caption2;
  const heroTag = swapped ? '01 // TACTILE MACRO SPECIMEN' : '02 // ARCHITECTURAL APPLICATION';

  const swatchImg = swapped ? currentMat.image2 : currentMat.image1;
  const swatchLabel = swapped ? currentMat.label2 : currentMat.label1;
  const swatchCaption = swapped ? currentMat.caption2 : currentMat.caption1;
  const swatchTag = swapped ? '02 // ARCHITECTURAL APPLICATION' : '01 // TACTILE MACRO SPECIMEN';

  const handleSelectMaterial = (idx: number) => {
    setSelectedMaterial(idx);
    setSwapped(false);
  };

  return (
    <section
      id="materials"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-pitch)',
        color: 'var(--color-ivory)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Minimal Editorial Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="arch-label">RAW TIMBER & ARCHITECTURAL MEDIUMS // MATERIAL INTEGRITY</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em',
              margin: '0 0 1rem 0'
            }}
          >
            THE PURITY OF THE MEDIUM.
          </h2>
          <p
            style={{
              color: 'var(--color-stone)',
              fontSize: '1rem',
              maxWidth: '680px',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            Sustainably harvested hardwoods, bookmatched architectural veneers, forged decorative metals,
            and hand-tailored hospitality textiles engineered for luxury permanence.
          </p>
        </div>

        {/* Material Selector Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--color-bronze-border-subtle)'
          }}
        >
          {MATERIALS.map((mat, idx) => (
            <button
              key={mat.id}
              onClick={() => handleSelectMaterial(idx)}
              style={{
                padding: '12px 22px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                backgroundColor: selectedMaterial === idx ? 'var(--color-bronze)' : 'var(--color-charcoal-dark)',
                color: selectedMaterial === idx ? 'var(--color-obsidian)' : 'var(--color-stone)',
                border: `1px solid ${selectedMaterial === idx ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                fontWeight: selectedMaterial === idx ? 600 : 400,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {mat.name}
            </button>
          ))}
        </div>

        {/* Asymmetric Offset Photo Composition Pattern */}
        <div className="materials-asymmetric-grid">
          {/* Dominant Primary Architectural Viewport */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '16/10',
              border: '1px solid var(--color-bronze-border-subtle)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-obsidian)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85)'
            }}
          >
            <div className="materials-crosshair-tl">+</div>
            <div className="materials-crosshair-br">+</div>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentMat.id + '-hero-' + (swapped ? 'swapped' : 'normal')}
                src={heroImg}
                alt={heroLabel}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </AnimatePresence>

            {/* Bottom Scrim Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem 1.75rem 1.75rem',
                background: 'linear-gradient(180deg, transparent 0%, rgba(6, 6, 6, 0.95) 100%)',
                zIndex: 4
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-bronze)',
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}
              >
                {heroTag}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.25rem',
                  color: 'var(--color-ivory-light)',
                  letterSpacing: '0.02em',
                  marginBottom: '4px'
                }}
              >
                {heroLabel}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--color-stone)',
                  lineHeight: 1.5,
                  maxWidth: '580px'
                }}
              >
                {heroCaption}
              </div>
            </div>
          </div>

          {/* Floating Companion Column (Staggered Offset Swatch & Technical Dossier) */}
          <div className="materials-floating-column">
            {/* Elevated Tactile Swatch Card */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => setSwapped(!swapped)}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                border: '1px solid var(--color-bronze)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-obsidian)',
                boxShadow: '-16px 20px 50px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(191, 160, 122, 0.25)',
                cursor: 'pointer'
              }}
            >
              <div className="materials-crosshair-tl">+</div>
              <div className="materials-crosshair-br">+</div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentMat.id + '-swatch-' + (swapped ? 'swapped' : 'normal')}
                  src={swatchImg}
                  alt={swatchLabel}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </AnimatePresence>

              {/* Floating Interactive Swap View Badge */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSwapped(!swapped);
                }}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(10, 9, 8, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--color-bronze)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-bronze-light)',
                  cursor: 'pointer',
                  zIndex: 6,
                  transition: 'all 0.2s ease'
                }}
              >
                <ArrowLeftRight size={11} color="var(--color-bronze)" />
                <span>SWAP FOCUS</span>
              </button>

              {/* Swatch Bottom Scrim */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(6, 6, 6, 0.95) 100%)',
                  zIndex: 4
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-bronze)',
                    textTransform: 'uppercase',
                    marginBottom: '2px'
                  }}
                >
                  {swatchTag}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    color: 'var(--color-ivory)',
                    fontWeight: 500,
                    lineHeight: 1.3
                  }}
                >
                  {swatchCaption}
                </div>
              </div>
            </motion.div>

            {/* Architectural Material Specification Dossier */}
            <div
              style={{
                marginTop: '1.25rem',
                padding: '1.4rem',
                backgroundColor: 'rgba(14, 13, 12, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--color-bronze-border)',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.65)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  paddingBottom: '0.6rem',
                  borderBottom: '1px solid var(--color-bronze-border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={14} color="var(--color-bronze)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      color: 'var(--color-bronze)'
                    }}
                  >
                    TECHNICAL SPECIFICATION DOSSIER
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    color: 'var(--color-stone)'
                  }}
                >
                  {currentMat.origin}
                </span>
              </div>

              {/* 4 Technical Parameter Metrics */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.9rem',
                  marginBottom: '1rem'
                }}
              >
                {currentMat.specs.map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.12em',
                        color: 'var(--color-stone-dark)'
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        color: 'var(--color-ivory)',
                        fontWeight: 400
                      }}
                    >
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical Description Note */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <CheckCircle2 size={13} color="var(--color-bronze)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    color: 'var(--color-stone)',
                    lineHeight: 1.45
                  }}
                >
                  {currentMat.spec}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Stage Process Pipeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '8px',
            marginTop: '1.5rem'
          }}
        >
          {PROCESS.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -2 }}
              style={{
                padding: '1rem',
                backgroundColor: 'var(--color-charcoal-dark)',
                border: '1px solid var(--color-bronze-border-subtle)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)', marginBottom: '3px' }}>
                {step.num} // {step.title}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-stone)' }}>
                {step.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
