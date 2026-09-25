import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Layers } from 'lucide-react';

export const FurnitureDesignSection: React.FC = () => {
  const [scrubValue, setScrubValue] = useState<number>(0.85);
  const [assemblyState, setAssemblyState] = useState<'assembled' | 'exploded'>('exploded');
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const COMPONENTS = [
    {
      num: '01',
      name: 'HONED CARRARA MARBLE CAP',
      spec: '20mm Italian Bianco Carrara slab · Precision-chamfered edge · Floating brass shadow reveal',
      material: 'Natural Stone'
    },
    {
      num: '02',
      name: 'SOLID WALNUT CARCASS',
      spec: 'American Black Walnut (Juglans Nigra) · Continuous 90° waterfall grain flow · Hand-rubbed satin oil',
      material: 'Hardwood'
    },
    {
      num: '03',
      name: 'BLIND DOVETAIL DRAWERS (X4)',
      spec: 'Solid European beech drawer boxes · Hand-fitted half-blind dovetails · Concealed soft-close runners',
      material: 'Beech & Walnut'
    },
    {
      num: '04',
      name: 'TAMBOUR SLATTED DOORS',
      spec: 'Individual CNC-profiled walnut micro-slats · Acoustic wool backing · Recessed solid bronze pulls',
      material: 'Walnut & Bronze'
    },
    {
      num: '05',
      name: 'SPLAYED TAPERED LEGS',
      spec: 'Hand-turned solid walnut splay base · Internal steel tie rods · 3mm PVD brushed brass protective ferrules',
      material: 'Walnut & PVD'
    }
  ];

  return (
    <section
      id="film-design"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-ivory)',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        borderBottom: '1px solid var(--color-bronze-border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header with Refined Informational Wording */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="arch-label">BESPOKE CABINETMAKING // ANATOMY OF A MASTERPIECE</div>
            <h2
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 500,
                color: 'var(--color-ivory-light)',
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                margin: 0
              }}
            >
              THE ANATOMY OF BESPOKE FURNITURE.
            </h2>
            <p
              style={{
                marginTop: '1rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'var(--color-stone)',
                maxWidth: '660px',
                lineHeight: 1.6
              }}
            >
              Engineered hardwood carcass with concealed mortise-and-tenon structural framing,
              hand-fitted dovetail drawers, and continuous waterfall timber grains.
            </p>
          </motion.div>

          {/* Interactive Toggle */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'var(--color-charcoal-dark)',
              border: '1px solid var(--color-bronze-border-subtle)',
              padding: '4px'
            }}
          >
            <button
              onClick={() => {
                setAssemblyState('assembled');
                setScrubValue(0);
              }}
              style={{
                padding: '8px 18px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                backgroundColor: assemblyState === 'assembled' ? 'var(--color-bronze)' : 'transparent',
                color: assemblyState === 'assembled' ? 'var(--color-obsidian)' : 'var(--color-stone)',
                fontWeight: assemblyState === 'assembled' ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              ASSEMBLED
            </button>
            <button
              onClick={() => {
                setAssemblyState('exploded');
                setScrubValue(1);
              }}
              style={{
                padding: '8px 18px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                backgroundColor: assemblyState === 'exploded' ? 'var(--color-bronze)' : 'transparent',
                color: assemblyState === 'exploded' ? 'var(--color-obsidian)' : 'var(--color-stone)',
                fontWeight: assemblyState === 'exploded' ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              EXPLODED
            </button>
          </div>
        </div>

        {/* Visual Container with Interactive Scrubber */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '680px',
            backgroundColor: 'var(--color-pitch)',
            border: '1px solid var(--color-bronze-border-subtle)',
            overflow: 'hidden'
          }}
        >
          {/* Assembled Image (Exact matching 3/4 isometric perspective) */}
          <motion.img
            src="/assets/furniture_assembled_credenza_isometric_1790325869870.jpg"
            alt="Assembled Bespoke Credenza (Isometric View)"
            animate={{
              scale: scrubValue > 0.5 ? 0.99 : 1.0,
              opacity: 1 - scrubValue
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />

          {/* Exploded Image (Matching 3/4 isometric perspective) */}
          <motion.img
            src="/assets/furniture_exploded_credenza_1790265537816.jpg"
            alt="Exploded Credenza Diagram"
            animate={{
              scale: scrubValue > 0.5 ? 1.0 : 1.01,
              opacity: scrubValue
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />

          {/* Engineering HUD Watermark */}
          <div
            style={{
              position: 'absolute',
              top: '0.85rem',
              left: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.55rem, 1.2vw, 0.68rem)',
              letterSpacing: '0.12em',
              color: 'var(--color-bronze)',
              textTransform: 'uppercase',
              pointerEvents: 'none',
              backgroundColor: 'rgba(8, 7, 6, 0.75)',
              padding: '2px 8px'
            }}
          >
            CREDENZA // 1800W x 480D x 790H MM
          </div>

          <div
            style={{
              position: 'absolute',
              top: '0.85rem',
              right: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.55rem, 1.2vw, 0.68rem)',
              letterSpacing: '0.12em',
              color: 'var(--color-stone)',
              pointerEvents: 'none',
              backgroundColor: 'rgba(8, 7, 6, 0.75)',
              padding: '2px 8px'
            }}
          >
            <span style={{ color: scrubValue > 0.5 ? 'var(--color-bronze)' : '#4ade80', marginRight: '4px' }}>●</span>
            {scrubValue > 0.5 ? 'EXPLODED' : 'ASSEMBLED'}
          </div>
        </div>

        {/* Scrubber Control Bar (Positioned below image to avoid covering diagram) */}
        <div className="credenza-scrubber-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sliders size={14} color="var(--color-bronze)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-stone)' }}>
              DISASSEMBLY:
            </span>
          </div>

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone-dark)' }}>
            ASSEMBLED
          </span>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={scrubValue}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setScrubValue(val);
              setAssemblyState(val > 0.5 ? 'exploded' : 'assembled');
            }}
            style={{
              flex: 1,
              minWidth: '120px',
              accentColor: 'var(--color-bronze)',
              cursor: 'pointer'
            }}
          />

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)' }}>
            EXPLODED
          </span>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-ivory)',
              minWidth: '40px',
              textAlign: 'right'
            }}
          >
            {Math.round(scrubValue * 100)}%
          </span>
        </div>

        {/* Woodcraft Technical Spec Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '1.25rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'rgba(28, 22, 17, 0.65)',
            border: '1px solid var(--color-timber-border)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--color-timber-honey)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--color-bronze)' }}>✦</span>
            <span>TIMBER: AMERICAN BLACK WALNUT (JUGLANS NIGRA)</span>
          </div>
          <div>MOISTURE EQUILIBRIUM: 8.4% KILN STABILIZED</div>
          <div>JOINERY TOLERANCE: ±0.2 MM CNC SPINDLE</div>
          <div>FINISH: HAND-RUBBED SATIN HARDWAX OIL</div>
        </div>

        {/* Informative Component Cards Strip */}
        <div className="credenza-components-grid">
          {COMPONENTS.map((c) => {
            const isHovered = hoveredComponent === c.num;
            return (
              <motion.div
                key={c.num}
                className="woodcraft-frame"
                onMouseEnter={() => setHoveredComponent(c.num)}
                onMouseLeave={() => setHoveredComponent(null)}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '1.25rem',
                  backgroundColor: isHovered ? 'rgba(58, 42, 29, 0.4)' : 'var(--color-charcoal-dark)',
                  border: `1px solid ${isHovered ? 'var(--color-bronze)' : 'var(--color-timber-border)'}`,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)' }}>
                    {c.num} // {c.material.toUpperCase()}
                  </span>
                  <Layers size={12} color="var(--color-bronze)" />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1rem',
                    color: 'var(--color-ivory-light)',
                    marginBottom: '4px'
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    color: 'var(--color-stone)',
                    lineHeight: 1.5
                  }}
                >
                  {c.spec}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
