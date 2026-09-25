import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Shield, CheckCircle2, ZoomIn, Settings } from 'lucide-react';

interface JoineryPageProps {
  onNavigatePage: (pageId: string) => void;
  onOpenConsultation: () => void;
}

export const JoineryPage: React.FC<JoineryPageProps> = ({ onNavigatePage, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'dovetail' | 'fire-doors' | 'cnc' | 'acoustic'>('dovetail');
  const [zoomLevel, setZoomLevel] = useState<number>(1.1);

  const JOINERY_SYSTEMS = [
    {
      id: 'dovetail',
      title: 'INTERLOCKING MITERED DOVETAILS',
      subtitle: 'STRUCTURAL SOLID TIMBER CORNER CONNECTIONS',
      image: '/assets/page_025_img_2_1536x864.png',
      spec: '±0.2mm CNC spindle tolerance · Concealed internal beech splines · 90° grain continuation',
      description: 'Unlike standard pinned or butt-mitered casework that degrades with seasonal humidity fluctuations, Polaris utilizes interlocking blind dovetails cut on high-speed CNC routers. Each tenon is calibrated to slide into its mating mortise with an interference fit of 0.15mm, locked with thermosetting vinyl-acetate structural adhesive.',
      metrics: [
        { label: 'TOLERANCE', value: '±0.2 MM' },
        { label: 'SHEAR STRENGTH', value: '14.8 MPA' },
        { label: 'GRAIN CONTINUITY', value: '100% UNBROKEN' },
        { label: 'SERVICE LIFE', value: '50+ YEARS' }
      ],
      features: [
        'End-grain concealed behind 45° miter face for clean external perimeter aesthetics',
        'Multi-axis structural finger splines machined from kiln-dried European hornbeam',
        'Resistant to thermal cycling across extreme Gulf ambient variations (15°C to 48°C)',
        'Hand-chiseled final fitting by senior cabinetmakers prior to bench clamping'
      ]
    },
    {
      id: 'fire-doors',
      title: 'CIVIL DEFENSE FIRE-RATED DOORS',
      subtitle: 'FD30 · FD60 · FD120 ACOUSTIC & SMOKE CERTIFIED ENSEMBLES',
      image: '/assets/page_028_img_2_1536x864.png',
      spec: 'Halspan & Strebord certified cores · Dual graphite intumescent seals · Drop seals (up to 44dB)',
      description: 'Polaris International Industries is a licensed and certified manufacturer of architectural wooden fire-rated door assemblies approved by Dubai Civil Defense. Our doors combine five-star hospitality aesthetics (bookmatched veneer and brass inlays) with life-safety compliance tested to BS 476 Part 22 and EN 1634-1.',
      metrics: [
        { label: 'FIRE RATING', value: 'FD30 / 60 / 120' },
        { label: 'ACOUSTIC RATING', value: 'UP TO STC 44 DB' },
        { label: 'CORE TYPE', value: 'NON-COMBUSTIBLE SOLID' },
        { label: 'APPROVAL', value: 'DUBAI CIVIL DEFENSE' }
      ],
      features: [
        'Mineral-fiber core encased in 60mm solid hardwood hardwood lippings on all 4 edges',
        'Concealed intumescent graphite fire and cold-smoke perimeter gaskets',
        'Concealed heavy-duty pivot hinges and magnetic multipoint latching hardware',
        'Veneered face skin with zero telegraphing over fire-retardant sub-panels'
      ]
    },
    {
      id: 'cnc',
      title: '5-AXIS SPINDLE CNC PROFILING',
      subtitle: 'ROBOTIC SUB-MILLIMETER MILLWORK & CURVED CASING',
      image: '/assets/page_027_img_2_1536x864.png',
      spec: '24,000 RPM electro-spindles · 3D compound curve milling · Laser-guided tool calibration',
      description: 'Our Dubai Investment Park plant operates heavy European 5-axis CNC machining centers capable of interpolating compound helical curves, fluted wall paneling, and organic furniture geometries directly from BIM / Rhino parametric models.',
      metrics: [
        { label: 'SPINDLE SPEED', value: '24,000 RPM' },
        { label: 'AXIS TRAVEL', value: '6,200 × 2,100 MM' },
        { label: 'TOOL CHANGER', value: '32 POSITIONS' },
        { label: 'FEED RATE', value: '65 M/MIN' }
      ],
      features: [
        'Direct Rhino / SolidWorks CAM toolpath generation with dynamic collision checking',
        'Integrated vacuum pod clamping allowing simultaneous 5-sided timber machining',
        'High-velocity mist lubrication for non-ferrous architectural brass and bronze detailing',
        'Consistent micro-radius edge rounding preventing finish peeling'
      ]
    },
    {
      id: 'acoustic',
      title: 'ACOUSTIC MICRO-PERFORATED JOINERY',
      subtitle: 'SOUND ABSORPTION ARCHITECTURAL PANELS & CEILINGS',
      image: '/assets/page_031_img_1_1124x794.jpeg',
      spec: 'NRC 0.85 acoustic rating · 0.5mm micro-perforations · Fire-retardant black fleece core',
      description: 'Engineered for presidential auditoriums, hotel ballrooms, and luxury executive boardrooms, our micro-perforated acoustic woodwork absorbs reverberation while appearing as seamless solid natural timber from standard viewing distances.',
      metrics: [
        { label: 'NRC RATING', value: '0.85' },
        { label: 'PERFORATION Ø', value: '0.5 MM MICRO' },
        { label: 'HOLE SPACING', value: '2.0 MM C/C' },
        { label: 'FIRE RATING', value: 'CLASS 0 / B-s1,d0' }
      ],
      features: [
        'Over 300,000 micro-perforations per square meter with invisible acoustic absorption',
        'Rear acoustic cavity integrated with high-density mineral wool sound baffles',
        'Tested in certified reverberation acoustic laboratories in compliance with ISO 354',
        'Available in Quartered Oak, American Walnut, Smoked Eucalyptus, and Teak veneers'
      ]
    }
  ];

  const current = JOINERY_SYSTEMS.find((s) => s.id === activeTab) || JOINERY_SYSTEMS[0];

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
            <span style={{ color: 'var(--color-bronze)' }}>PRECISION JOINERY & CRAFT</span>
          </nav>

          <div className="timber-badge">
            <Settings size={12} color="var(--color-bronze)" />
            <span>SECTION 03 // MASTER ARCHITECTURAL CASING</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="arch-label">STRUCTURAL ARCHITECTURAL WOODCRAFT & ENGINEERING</div>
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
            PRECISION JOINERY & FIRE ENGINEERING.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--color-stone)',
              maxWidth: '820px',
              lineHeight: 1.7
            }}
          >
            Wood is a living, breathing architectural medium. In the rigorous climate of the UAE and Gulf region, joinery
            cannot rely on superficial mechanical fasteners. We combine centuries-old interlocking timber joinery principles
            with computerized 5-axis CNC tolerance and Civil Defense certified life-safety engineering.
          </p>
        </div>

        {/* System Category Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--color-bronze-border-subtle)',
            marginBottom: '3rem'
          }}
        >
          {JOINERY_SYSTEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              style={{
                background: activeTab === item.id ? 'var(--color-timber-walnut)' : 'rgba(25, 22, 19, 0.4)',
                border: `1px solid ${activeTab === item.id ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                color: activeTab === item.id ? 'var(--color-ivory-light)' : 'var(--color-stone)',
                padding: '0.85rem 1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Selected System Interactive Detail Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="woodcraft-frame"
            style={{
              backgroundColor: 'var(--color-pitch)',
              padding: '2.5rem',
              marginBottom: '4rem'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Deep Zoom Image Visual */}
              <div>
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    border: '1px solid var(--color-timber-border)',
                    backgroundColor: '#0c0a09'
                  }}
                >
                  <motion.img
                    src={current.image}
                    alt={current.title}
                    animate={{ scale: zoomLevel }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  {/* Zoom Controls Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(8, 7, 6, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--color-timber-border)',
                      padding: '0.4rem 0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-ivory)'
                    }}
                  >
                    <ZoomIn size={14} color="var(--color-bronze)" />
                    <span>ZOOM:</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(1.0, z - 0.15))}
                      style={{ background: 'none', border: 'none', color: 'var(--color-bronze)', cursor: 'pointer', padding: '0 4px' }}
                    >
                      -
                    </button>
                    <span>{Math.round(zoomLevel * 100)}%</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
                      style={{ background: 'none', border: 'none', color: 'var(--color-bronze)', cursor: 'pointer', padding: '0 4px' }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-stone-dark)',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>CALIBRATION: POLARIS DIP PLANT 1</span>
                  <span>ISO 9001:2008 CERTIFIED JOINERY</span>
                </div>
              </div>

              {/* Right Column: Technical Engineering Blueprint Data */}
              <div>
                <div className="arch-label" style={{ color: 'var(--color-timber-honey)' }}>
                  {current.subtitle}
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '2rem',
                    color: 'var(--color-ivory-light)',
                    margin: '0.5rem 0 1rem 0',
                    lineHeight: 1.2
                  }}
                >
                  {current.title}
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    color: 'var(--color-stone)',
                    lineHeight: 1.7,
                    marginBottom: '1.75rem'
                  }}
                >
                  {current.description}
                </p>

                {/* Engineering Metrics Strip */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginBottom: '1.75rem',
                    backgroundColor: 'rgba(25, 22, 19, 0.4)',
                    padding: '1.25rem',
                    border: '1px solid var(--color-bronze-border-subtle)'
                  }}
                >
                  {current.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-stone-dark)', letterSpacing: '0.1em' }}>
                        {m.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--color-ivory)', fontWeight: 600, marginTop: '2px' }}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architectural Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {current.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={15} color="var(--color-bronze)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-stone-light)' }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Consultation Inquiry Button */}
                <button onClick={onOpenConsultation} className="btn-bronze" style={{ padding: '0.85rem 1.6rem' }}>
                  <span>SPECIFY IN RFQ // JOINERY CONSULTATION</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dubai Civil Defense Life Safety Certification Showcase */}
        <div
          style={{
            border: '1px solid var(--color-timber-border)',
            backgroundColor: 'rgba(18, 15, 13, 0.6)',
            padding: '2.5rem',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <Shield size={20} color="var(--color-bronze)" />
            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '1.4rem',
                color: 'var(--color-ivory-light)',
                margin: 0
              }}
            >
              DUBAI CIVIL DEFENSE STATUTORY ACCREDITATION
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              color: 'var(--color-stone)',
              lineHeight: 1.6
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-timber-honey)', marginBottom: '6px' }}>
                FD30 / FD60 / FD120 ACCREDITED DOORS
              </div>
              <p>
                Our factory in Dubai Investment Park is certified by Dubai Civil Defense for fire-rated wood door assembly.
                Every certified door leaf and timber frame is fitted with registered serial-number tamper-evident plugs and tested
                in UKAS accredited laboratories.
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-timber-honey)', marginBottom: '6px' }}>
                INTUMESCENT SEAL TECHNOLOGY
              </div>
              <p>
                Fitted with high-expansion graphite-based intumescent seals that activate at 150°C, expanding to 10× original volume
                to hermetically seal against thermal radiation, lethal carbon monoxide, and toxic fire gases.
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-timber-honey)', marginBottom: '6px' }}>
                FIRE TESTING LABORATORY STANDARDS
              </div>
              <p>
                Tested under BS 476: Part 22: 1987, EN 1634-1, and UL 10C positive pressure fire tests for integrity and thermal insulation
                with maximum allowable unexposed face temperature rise not exceeding 140°C.
              </p>
            </div>
          </div>
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
            onClick={() => onNavigatePage('materials')}
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
            <span>PREV: 02 // RAW MATERIALS & TIMBER</span>
          </button>

          <button
            onClick={() => onNavigatePage('facility')}
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
            <span>NEXT: 04 // 45,000+ SQ. FT. DIP PLANT</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
