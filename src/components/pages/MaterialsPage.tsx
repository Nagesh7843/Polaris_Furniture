import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, ArrowLeftRight } from 'lucide-react';

interface MaterialsPageProps {
  onNavigatePage: (pageId: string) => void;
  onOpenConsultation: () => void;
}

export const MaterialsPage: React.FC<MaterialsPageProps> = ({ onNavigatePage, onOpenConsultation }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [swapped, setSwapped] = useState(false);

  const MATERIALS = [
    {
      id: 'solid-wood',
      name: 'SOLID HARDWOOD',
      origin: 'European White Oak & American Black Walnut',
      spec: 'Kiln-dried to 8–10% moisture equilibrium for structural longevity and climate stability.',
      image1: '/assets/macro_wood_grain_luxury_1790265455734.jpg',
      label1: 'RAW TIMBER GRAIN',
      caption1: 'Kiln-dried European Oak & American Walnut end-grain flitches',
      image2: '/assets/page_023_img_1_2330x1653.jpeg',
      label2: 'FINISHED ARCHITECTURAL JOINERY',
      caption2: 'Precision-milled solid hardwood joinery & fitted millwork casework',
      techSpecs: [
        'Kiln equilibrium: 8–10% moisture content verified with electrical resistance hydrometer',
        'FSC-certified sustainable European Oak (Quercus robur) & American Black Walnut (Juglans nigra)',
        'Quarter-sawn and rift-sawn cutting patterns for maximum dimensional stability',
        'Hand-rubbed organic satin hardwax oil or Class 0 polyurethane fire-retardant finish'
      ]
    },
    {
      id: 'veneer',
      name: 'ARCHITECTURAL VENEER',
      origin: 'Bookmatched & Crown Cut Natural Flitches',
      spec: '0.6mm precision-sliced veneers, laser-spliced for uninterrupted wood grain symmetry across expansive elevations.',
      image1: '/assets/page_030_img_1_1124x794.jpeg',
      label1: '0.6MM BOOKMATCHED FLITCH',
      caption1: 'Architectural flitch slicing & grain-matching preparation',
      image2: '/assets/page_030_img_2_1536x864.png',
      label2: 'INSTALLED VENEERED ELEVATION',
      caption2: 'Continuous bookmatched wall casework & private suite millwork',
      techSpecs: [
        '0.6mm precision slicing with hot-press cross-grain splicing',
        'Continuous architectural grain matching across doors, wall panels, and credenzas',
        'Substrates: Moisture-resistant MDF (MR MDF) and CARB Phase 2 compliant birch plywood',
        'High-pressure vacuum pressing ensuring zero air bubbles or delamination'
      ]
    },
    {
      id: 'metal',
      name: 'SPECIALIZED METALS',
      origin: 'Titanium PVD Coated Brass & 316 Stainless Steel',
      spec: 'Titanium PVD brushed finishes, custom brass ferrules, and structural decorative metal screens.',
      image1: '/assets/page_024_img_2_1536x864.png',
      label1: 'METALLURGY CNC PROFILE',
      caption1: 'Architectural metal fabrication, shearing, and laser profiling',
      image2: '/assets/page_058_img_5_1440x960.jpeg',
      label2: 'INTEGRATED BRASS REVEALS',
      caption2: 'PVD brushed bronze inlays, metal framing & feature screens',
      techSpecs: [
        'Physical Vapor Deposition (PVD) titanium bonding in antique bronze, satin gold, and black chrome',
        'Marine-grade 316 stainless steel substrates for superior corrosion resistance',
        'Sub-millimeter CNC waterjet cutting and laser profiling for bespoke geometric lattices',
        'Hairline brushed and mirror-polished surface treatments'
      ]
    },
    {
      id: 'glass',
      name: 'DECORATIVE GLASS',
      origin: 'Fluted, Toughened & Acoustic Laminated',
      spec: 'Custom back-painted feature panels, reeded glass partitions, and impact-resistant acoustic glass doors.',
      image1: '/assets/page_026_img_2_1536x864.png',
      label1: 'FLUTED & BEVELED EDGING',
      caption1: 'Precision edge-polishing and decorative glass processing',
      image2: '/assets/page_059_img_3_1440x730.jpeg',
      label2: 'ARCHITECTURAL PARTITIONS',
      caption2: 'Acoustic-laminated and tinted feature glass installations',
      techSpecs: [
        'Toughened safety glass complying with BS EN 12150 standards',
        'Acoustic interlayer PVB lamination delivering up to STC 42 sound attenuation',
        'Custom low-iron ultra-clear glass with bespoke ceramic frit and fluted patterns',
        'Precision CNC beveled and polished mitered pencil edges'
      ]
    },
    {
      id: 'fabric',
      name: 'SOFT FURNISHINGS',
      origin: 'Contract Bouclé & Full-Grain Leather',
      spec: 'Martindale 50,000+ rub hospitality-grade upholstery meeting British Standard BS 5852 fire retardancy.',
      image1: '/assets/page_072_img_4_1280x853.jpeg',
      label1: 'CUSTOM UPHOLSTERY',
      caption1: 'Hand-tailored textured bouclé upholstery draped over walnut',
      image2: '/assets/page_072_img_5_1280x853.jpeg',
      label2: 'ACOUSTIC WALL PANELLING',
      caption2: 'Integrated luxury padded wall panels and upholstered suites',
      techSpecs: [
        '50,000+ Martindale abrasion resistance rating for heavy contract hospitality durability',
        'Compliance with BS 5852 Crib 5 and CAL 133 fire safety standards',
        'High-density open-cell acoustic foam cores for interior acoustic absorption',
        'Hand-stitched full-grain semi-aniline leather upholstery from premier European tanneries'
      ]
    }
  ];

  const PROCESS = [
    { num: '01', title: 'TIMBER ACCLIMATIZATION', desc: '8–10% moisture content calibration in climate chambers' },
    { num: '02', title: 'COMPUTERIZED SIZING', desc: 'SCM computerized beam sawing with grain layout optimization' },
    { num: '03', title: 'CNC SPINDLE PROFILING', desc: '5-axis robotic multi-spindle joinery milling' },
    { num: '04', title: 'BENCH CRAFT & SANDING', desc: 'Artisanal hand-scraping & calibrated micro-grit orbital smoothing' },
    { num: '05', title: 'SATIN OIL FINISHING', desc: 'Positive-pressure spray booths with hand-rubbed hardwax curing' },
    { num: '06', title: 'WHITE-GLOVE FIT-OUT', desc: 'Turnkey site delivery, pre-assembly, and museum-grade installation' }
  ];

  const currentMat = MATERIALS[selectedMaterial];

  const heroImg = swapped ? currentMat.image1 : currentMat.image2;
  const heroLabel = swapped ? currentMat.label1 : currentMat.label2;
  const heroCaption = swapped ? currentMat.caption1 : currentMat.caption2;
  const heroTag = swapped ? 'STAGE 01 // TACTILE MACRO SPECIMEN' : 'STAGE 02 // ARCHITECTURAL APPLICATION';

  const swatchImg = swapped ? currentMat.image2 : currentMat.image1;
  const swatchLabel = swapped ? currentMat.label2 : currentMat.label1;
  const swatchCaption = swapped ? currentMat.caption2 : currentMat.caption1;
  const swatchTag = swapped ? 'STAGE 02 // ARCHITECTURAL APPLICATION' : 'STAGE 01 // TACTILE MACRO SPECIMEN';

  return (
    <div style={{ backgroundColor: 'var(--color-obsidian)', color: 'var(--color-ivory)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Modern Luxury Website Breadcrumb */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
            <button
              onClick={() => onNavigatePage('home')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-stone)',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
            >
              <span>HOME</span>
            </button>
            <span style={{ color: 'var(--color-bronze-dark)' }}>/</span>
            <span style={{ color: 'var(--color-bronze)' }}>RAW MATERIALS & TIMBER</span>
          </nav>

          <div className="timber-badge">
            <span>SECTION 02 // CERTIFIED SUSTAINABLE SUBSTRATES</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="arch-label">RAW TIMBER & ARCHITECTURAL MEDIUMS // MATERIAL INTEGRITY</div>
          <h1
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em',
              lineHeight: 1.05,
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            THE PURITY OF THE MEDIUM.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--color-stone)',
              maxWidth: '750px',
              lineHeight: 1.7
            }}
          >
            Bespoke furniture and architectural joinery derive their soul from the raw materials selected.
            We source certified hardwoods, exotic veneers, marine-grade stainless steels, and contract textiles.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--color-timber-border)'
          }}
        >
          {MATERIALS.map((mat, idx) => (
            <button
              key={mat.id}
              onClick={() => {
                setSelectedMaterial(idx);
                setSwapped(false);
              }}
              style={{
                padding: '12px 24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                backgroundColor: selectedMaterial === idx ? 'var(--color-bronze)' : 'var(--color-charcoal-dark)',
                color: selectedMaterial === idx ? 'var(--color-obsidian)' : 'var(--color-stone)',
                border: `1px solid ${selectedMaterial === idx ? 'var(--color-bronze)' : 'var(--color-timber-border)'}`,
                fontWeight: selectedMaterial === idx ? 600 : 400,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease'
              }}
            >
              {mat.name}
            </button>
          ))}
        </div>

        {/* Material Info Banner */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-timber-honey)', marginBottom: '4px' }}>
              ORIGIN & CLASSIFICATION: {currentMat.origin.toUpperCase()}
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-ivory)', maxWidth: '780px', margin: 0 }}>
              {currentMat.spec}
            </p>
          </div>

          <div className="timber-badge">
            <ShieldCheck size={12} color="var(--color-bronze)" />
            <span>CERTIFIED ARCHITECTURAL SPECIFICATION</span>
          </div>
        </div>

        {/* Asymmetric Offset Photo Composition Pattern */}
        <div className="materials-asymmetric-grid" style={{ marginBottom: '4rem' }}>
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
                key={currentMat.id + '-page-hero-' + (swapped ? 'swapped' : 'normal')}
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

          {/* Floating Companion Column */}
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
                  key={currentMat.id + '-page-swatch-' + (swapped ? 'swapped' : 'normal')}
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
          </div>
        </div>

        {/* Technical Standards Card */}
        <div className="woodcraft-frame" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
          <div className="arch-label">TECHNICAL STANDARDS // {currentMat.name}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {currentMat.techSpecs.map((spec, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--color-bronze)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-stone)', lineHeight: 1.5 }}>
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Stage Process Strip */}
        <div>
          <div className="arch-label">THE TRANSFORMATION LIFECYCLE // 6 STAGES</div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              marginTop: '1.5rem'
            }}
          >
            {PROCESS.map((p) => (
              <div
                key={p.num}
                className="woodcraft-frame"
                style={{ padding: '1.5rem' }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-bronze)', marginBottom: '0.5rem' }}>
                  {p.num} //
                </div>
                <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: '0.95rem', color: 'var(--color-ivory-light)', marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
                  {p.title}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-stone)', lineHeight: 1.4 }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Callout Banner */}
        <div
          style={{
            marginTop: '5rem',
            padding: '3rem',
            backgroundColor: 'var(--color-pitch)',
            border: '1px solid var(--color-timber-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', color: 'var(--color-ivory-light)', marginBottom: '0.5rem' }}>
              REQUEST PHYSICAL MATERIAL SAMPLE PALETTE
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-stone)', maxWidth: '650px' }}>
              We provide architects and interior specifiers with curated physical material sample boxes with kiln-dried hardwoods, veneer flitches, and patinated bronze swatches.
            </p>
          </div>
          <button onClick={onOpenConsultation} className="btn-bronze">
            <span>REQUEST MATERIAL PALETTE</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Website Cross-Page Pagination */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            paddingTop: '2.5rem',
            marginTop: '3.5rem'
          }}
        >
          <button
            onClick={() => onNavigatePage('anatomy')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: 0
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
          >
            <ArrowLeft size={14} />
            <span>PREV: 01 // FURNITURE ANATOMY</span>
          </button>

          <button
            onClick={() => onNavigatePage('joinery')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: 0
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
          >
            <span>NEXT: 03 // MASTER JOINERY CRAFT</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
