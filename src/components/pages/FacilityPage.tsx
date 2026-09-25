import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Factory, Cpu, ShieldCheck, MapPin, Wind } from 'lucide-react';

interface FacilityPageProps {
  onNavigatePage: (pageId: string) => void;
  onOpenConsultation: () => void;
  onOpenMachineryModal: () => void;
}

export const FacilityPage: React.FC<FacilityPageProps> = ({
  onNavigatePage,
  onOpenConsultation,
  onOpenMachineryModal
}) => {
  const [activeZone, setActiveZone] = useState<number>(0);

  const ZONES = [
    {
      num: '01',
      title: 'HEAVY CNC MACHINING DIVISION',
      subtitle: '5-AXIS ROBOTIC SPINDLE MILLING',
      image: '/assets/page_050_img_2_1203x1637.jpeg',
      area: '8,500 SQ. FT.',
      specs: 'HOMAG & BIESSE European 5-axis CNC centers · 24,000 RPM electro-spindles · ±0.15mm tolerance',
      desc: 'Dedicated to automated milling of complex 3D curved surfaces, fluted architectural wall cladding, and interlocking structural tenons. Directly linked to our Dubai engineering office via CAD/CAM networked feeds.',
      highlight: 'Direct BIM / Rhino 3D parametric toolpath generation with real-time laser tool verification.'
    },
    {
      num: '02',
      title: 'COMPUTERIZED SIZING & BEAM SAWING',
      subtitle: 'HIGH-THROUGHPUT PRECISION CUTTING',
      image: '/assets/page_052_img_2_1203x1637.jpeg',
      area: '6,200 SQ. FT.',
      specs: 'GIBEN & SCM Computerized Beam Saws · 120m/min saw carriage speed · Optimized grain nesting',
      desc: 'Equipped with computerized optimization algorithms that maximize timber flitch and panel yield while calculating continuous grain patterns across multiple adjacent furniture elevations and wall panel arrays.',
      highlight: 'Scoring blades guarantee zero edge chipping on delicate 0.6mm natural veneers and double-faced panels.'
    },
    {
      num: '03',
      title: 'PRECISION EDGEBANDING & PROFILING',
      subtitle: 'PUR HOT-MELT ZERO-JOINT SEAMLESS EDGING',
      image: '/assets/page_051_img_2_1203x1637.jpeg',
      area: '5,400 SQ. FT.',
      specs: 'BRANDT Industrial Edgebanding Line · Dual pre-milling spindles · Corner rounding unit',
      desc: 'Processes solid wood lippings up to 20mm thick and high-temperature polyurethane (PUR) moisture-proof adhesives. Delivers seamless joints that resist Gulf humidity and steam exposure in presidential suites.',
      highlight: 'Zero-glue-line technology with automated scraper buffing and pneumatic pressure rollers.'
    },
    {
      num: '04',
      title: 'POSITIVE-PRESSURE FINISHING BOOTHS',
      subtitle: 'CLIMATE-CONTROLLED LACQUER & HARDWAX CURING',
      image: '/assets/page_061_img_3_1440x960.jpeg',
      area: '7,800 SQ. FT.',
      specs: 'Italian Giardina positive-pressure spray chambers · 4-stage HEPA filtration · Humidity calibration',
      desc: 'Ultra-clean room environment ensuring zero airborne dust contamination during lacquer, polyurethane, and natural hardwax oil application. Features recirculating heated drying tunnels for uniform cure.',
      highlight: 'Certified Class 0 fire-retardant clear coats and custom sheen matching from 5% ultra-matte to 100% piano gloss.'
    },
    {
      num: '05',
      title: 'MASTER BENCH ASSEMBLY & FIT-OUT',
      subtitle: 'ARTISANAL HAND FITMENT & QUALITY AUDIT',
      image: '/assets/page_064_img_4_1116x757.jpeg',
      area: '11,000 SQ. FT.',
      specs: 'Pneumatic carcass clamping presses · Hand-planing benches · 1:1 dry architectural mockups',
      desc: 'Where high-speed robotics meets multi-decade artisanal woodcraft. Senior cabinetmakers hand-fit drawers, adjust Blum / Hettich concealed hardware, and conduct full 1:1 architectural dry-runs prior to crating.',
      highlight: 'Full mock-up capability allows client architects to inspect finished suites inside the factory before site delivery.'
    }
  ];

  const current = ZONES[activeZone];

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
            <span style={{ color: 'var(--color-bronze)' }}>DIP MANUFACTURING CAMPUS</span>
          </nav>

          <div className="timber-badge">
            <Factory size={12} color="var(--color-bronze)" />
            <span>SECTION 04 // 45,000+ SQ. FT. PRODUCTION COMPLEX</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="arch-label">DUBAI INVESTMENT PARK 1 // 45,000+ SQ. FT. INDUSTRIAL COMPLEX</div>
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
            HIGH-THROUGHPUT EUROPEAN MANUFACTURING.
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
            Polaris operates one of the most technologically advanced architectural joinery and bespoke furniture plants in
            the United Arab Emirates. Located strategically in Dubai Investment Park 1, our facility integrates heavy European
            computerized machinery with seasoned artisan craftsmanship.
          </p>
        </div>

        {/* Hero Plant Visual */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '480px',
            marginBottom: '3.5rem',
            border: '1px solid var(--color-timber-border)',
            overflow: 'hidden'
          }}
        >
          <img
            src="/assets/page_060_img_3_1440x730.jpeg"
            alt="Polaris Dubai Investment Park Plant"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8, 7, 6, 0.95) 0%, transparent 60%)'
            }}
          />

          {/* Plant Fact Overlay Strip */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              backgroundColor: 'rgba(12, 10, 8, 0.85)',
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              border: '1px solid var(--color-timber-border)'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-stone-dark)' }}>
                FLOOR AREA
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--color-ivory)', fontWeight: 600 }}>
                45,000+ SQ. FT.
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-stone-dark)' }}>
                SKILLED WORKFORCE
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--color-ivory)', fontWeight: 600 }}>
                180+ CRAFTSMEN
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-stone-dark)' }}>
                PRODUCTION LINES
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--color-ivory)', fontWeight: 600 }}>
                15 EUROPEAN UNITS
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-stone-dark)' }}>
                GEOGRAPHIC LOCATION
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-timber-honey)', fontWeight: 600, marginTop: '4px' }}>
                DIP 1, DUBAI (UAE)
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Zone Directory */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', color: 'var(--color-ivory-light)', margin: 0 }}>
              FACTORY PRODUCTION DIVISIONS
            </h2>
            <button
              onClick={onOpenMachineryModal}
              className="btn-bronze"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.68rem' }}
            >
              <Cpu size={14} />
              <span>VIEW FULL 15-MACHINE DIRECTORY</span>
            </button>
          </div>

          {/* Zone Selector Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {ZONES.map((z, idx) => (
              <button
                key={z.num}
                onClick={() => setActiveZone(idx)}
                style={{
                  background: activeZone === idx ? 'var(--color-timber-walnut)' : 'rgba(25, 22, 19, 0.4)',
                  border: `1px solid ${activeZone === idx ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                  color: activeZone === idx ? 'var(--color-ivory-light)' : 'var(--color-stone)',
                  padding: '1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-bronze)', marginBottom: '4px' }}>
                  ZONE {z.num} // {z.area}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600 }}>
                  {z.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Zone Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="woodcraft-frame"
              style={{
                backgroundColor: 'var(--color-pitch)',
                padding: '2.5rem'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    border: '1px solid var(--color-timber-border)',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="timber-badge" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span>ZONE {current.num}</span>
                  </div>
                </div>

                <div>
                  <div className="arch-label" style={{ color: 'var(--color-timber-honey)' }}>
                    {current.subtitle} · {current.area}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '2rem',
                      color: 'var(--color-ivory-light)',
                      margin: '0.5rem 0 1rem 0'
                    }}
                  >
                    {current.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-bronze)',
                      marginBottom: '1.25rem',
                      lineHeight: 1.5
                    }}
                  >
                    SPECIFICATION: {current.specs}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      color: 'var(--color-stone)',
                      lineHeight: 1.7,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {current.desc}
                  </p>
                  <div
                    style={{
                      backgroundColor: 'rgba(25, 22, 19, 0.5)',
                      borderLeft: '2px solid var(--color-bronze)',
                      padding: '1rem 1.25rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'var(--color-stone-light)',
                      marginBottom: '2rem'
                    }}
                  >
                    <strong style={{ color: 'var(--color-ivory)' }}>TECHNICAL ADVANTAGE: </strong>
                    {current.highlight}
                  </div>

                  <button onClick={onOpenConsultation} className="btn-bronze" style={{ padding: '0.85rem 1.5rem' }}>
                    <span>SCHEDULE FACTORY AUDIT // DIP 1</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Environmental & Quality Certifications Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            paddingTop: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <ShieldCheck size={24} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ivory)', marginBottom: '4px' }}>
                ISO 9001:2008 CERTIFIED
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-stone)', lineHeight: 1.5 }}>
                Comprehensive international quality management system with computerized traceability across every batch.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Wind size={24} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ivory)', marginBottom: '4px' }}>
                CENTRAL DUST EXTRACTION
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-stone)', lineHeight: 1.5 }}>
                Continuous negative-pressure particulate filtering ensuring clean air and pristine wood finishing quality.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <MapPin size={24} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ivory)', marginBottom: '4px' }}>
                STRATEGIC GCC LOGISTICS
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-stone)', lineHeight: 1.5 }}>
                Direct arterial access to Jebel Ali Port, Al Maktoum Airport, and Sheikh Mohammed Bin Zayed Road.
              </div>
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
            <ArrowLeft size={14} />
            <span>PREV: 03 // MASTER JOINERY CRAFT</span>
          </button>

          <button
            onClick={() => onNavigatePage('projects')}
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
            <span>NEXT: 05 // LANDMARK PORTFOLIO</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
