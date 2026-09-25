import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, ArrowLeft, ArrowUpRight, Layers } from 'lucide-react';

interface AnatomyPageProps {
  onNavigatePage: (pageId: string) => void;
  onOpenConsultation: () => void;
}

export const AnatomyPage: React.FC<AnatomyPageProps> = ({ onNavigatePage, onOpenConsultation }) => {
  const [scrubValue, setScrubValue] = useState<number>(0.85);

  const COMPONENTS = [
    {
      num: '01',
      name: 'HONED CARRARA MARBLE CAP',
      spec: '20mm Italian Bianco Carrara marble slab · Precision-chamfered edge · Floating brass shadow reveal',
      material: 'Natural Stone',
      detail: 'Selected for zero-vein disruption and matte architectural finish. Sealed against staining with organic penetrating oil.'
    },
    {
      num: '02',
      name: 'SOLID WALNUT CARCASS',
      spec: 'American Black Walnut (Juglans Nigra) · Continuous 90° waterfall grain flow · Hand-rubbed satin oil',
      material: 'Hardwood',
      detail: 'Kiln-dried to 8–10% moisture content in our Dubai Investment Park plant to guarantee zero warping in Gulf climatic conditions.'
    },
    {
      num: '03',
      name: 'BLIND DOVETAIL DRAWERS (X4)',
      spec: 'Solid European beech drawer boxes · Hand-fitted half-blind dovetails · Concealed soft-close runners',
      material: 'Beech & Walnut',
      detail: 'Interlocking mechanical joinery engineered for a lifetime of daily contract hospitality and residential cycles.'
    },
    {
      num: '04',
      name: 'TAMBOUR SLATTED DOORS',
      spec: 'Individual CNC-profiled walnut micro-slats · Acoustic wool backing · Recessed solid bronze pulls',
      material: 'Walnut & Bronze',
      detail: 'Each timber slat is individually spindle-milled, calibrated to ±0.2mm, and mounted on resilient acoustic canvas.'
    },
    {
      num: '05',
      name: 'SPLAYED TAPERED LEGS',
      spec: 'Hand-turned solid walnut splay base · Internal steel tie rods · 3mm PVD brushed brass protective ferrules',
      material: 'Walnut & PVD',
      detail: 'Turned on computerized lathes with concealed structural steel core for cantilevered load capacity.'
    }
  ];

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
            <span style={{ color: 'var(--color-bronze)' }}>BESPOKE FURNITURE ANATOMY</span>
          </nav>

          <div className="timber-badge">
            <span>SECTION 01 // 1:10 SCALE ANATOMY</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="arch-label">BESPOKE CABINETMAKING // 1:10 SCALE ANATOMY</div>
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
            THE ANATOMY OF BESPOKE FURNITURE.
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
            True furniture architecture begins within. Every credenza, dining table, and casegood piece manufactured
            by Polaris is engineered with internal structural mortises, continuous waterfall grains, and sub-millimeter joinery.
          </p>
        </div>

        {/* Interactive Exploded View Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '700px',
            backgroundColor: 'var(--color-pitch)',
            border: '1px solid var(--color-timber-border)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-timber)'
          }}
        >
          {/* Assembled Image */}
          <motion.img
            src="/assets/anatomy_page_assembled_credenza.jpg"
            alt="Assembled Bespoke Credenza"
            animate={{
              scale: scrubValue > 0.5 ? 0.98 : 1.0,
              opacity: 1 - scrubValue * 0.92
            }}
            transition={{ duration: 0.1 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Exploded Image */}
          <motion.img
            src="/assets/anatomy_page_exploded_diagram.jpg"
            alt="Exploded Architectural Anatomy"
            animate={{
              opacity: scrubValue,
              scale: 0.96 + scrubValue * 0.04
            }}
            transition={{ duration: 0.1 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Interactive Scrub Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.75rem',
              left: '2rem',
              right: '2rem',
              backgroundColor: 'rgba(10, 9, 8, 0.9)',
              backdropFilter: 'blur(14px)',
              border: '1px solid var(--color-timber-border)',
              padding: '0.95rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              zIndex: 10
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={16} color="var(--color-bronze)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-stone)' }}>
                DISASSEMBLY SCRUBBER:
              </span>
            </div>

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-stone-dark)' }}>
              ASSEMBLED
            </span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={scrubValue}
              onChange={(e) => {
                setScrubValue(parseFloat(e.target.value));
              }}
              style={{
                flex: 1,
                accentColor: 'var(--color-bronze)',
                cursor: 'pointer'
              }}
            />

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-bronze)' }}>
              EXPLODED
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-ivory)',
                minWidth: '45px',
                textAlign: 'right'
              }}
            >
              {Math.round(scrubValue * 100)}%
            </span>
          </div>
        </div>

        {/* Woodcraft Technical Spec Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '2rem',
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(28, 22, 17, 0.65)',
            border: '1px solid var(--color-timber-border)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            color: 'var(--color-timber-honey)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--color-bronze)' }}>✦</span>
            <span>TIMBER: AMERICAN BLACK WALNUT (JUGLANS NIGRA)</span>
          </div>
          <div>MOISTURE CONTENT: 8.4% KILN EQUILIBRATED</div>
          <div>JOINERY TOLERANCE: ±0.2 MM CNC SPINDLE</div>
          <div>FINISH: HAND-RUBBED SATIN ORGANIC HARDWAX OIL</div>
        </div>

        {/* Deep Component Breakdown Grid */}
        <div style={{ marginTop: '3.5rem' }}>
          <div className="arch-label">STRUCTURAL COMPONENT SPECIFICATION</div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.25rem'
            }}
          >
            {COMPONENTS.map((c) => (
              <div
                key={c.num}
                className="woodcraft-frame"
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-bronze)', letterSpacing: '0.14em' }}>
                    {c.num} // {c.material.toUpperCase()}
                  </span>
                  <Layers size={14} color="var(--color-bronze)" />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.3rem',
                    color: 'var(--color-ivory-light)',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  {c.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-timber-honey)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                  {c.spec}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-stone)', lineHeight: 1.6 }}>
                  {c.detail}
                </p>
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
              COMMISSION CUSTOM ARCHITECTURAL CASEWORK
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-stone)', maxWidth: '650px' }}>
              We partner with luxury interior designers, five-star hotel brands, and private collectors worldwide to engineer bespoke furniture.
            </p>
          </div>
          <button onClick={onOpenConsultation} className="btn-bronze">
            <span>INQUIRE ABOUT A COMMISSION</span>
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
            onClick={() => onNavigatePage('home')}
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
            <span>RETURN TO OVERVIEW</span>
          </button>

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
            <span>NEXT: 02 // RAW MATERIALS & TIMBER</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
