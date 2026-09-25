import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowUpRight } from 'lucide-react';

interface FactoryFilmSectionProps {
  onOpenMachineryModal: () => void;
}

export const FactoryFilmSection: React.FC<FactoryFilmSectionProps> = ({ onOpenMachineryModal }) => {
  const [currentStage, setCurrentStage] = useState(0);

  const STAGES = [
    {
      num: '01',
      title: 'HARDWOOD KILN ACCLIMATIZATION',
      desc: 'European Oak & American Walnut moisture balancing to 8–10% equilibrium',
      image: '/assets/page_019_img_1_2334x1649.jpeg'
    },
    {
      num: '02',
      title: 'COMPUTERIZED PANEL & VENEER SIZING',
      desc: 'Precision beam sawing with grain-matched layout optimization',
      image: '/assets/page_020_img_2_2334x1653.jpeg'
    },
    {
      num: '03',
      title: '5-AXIS CNC SPINDLE MILLING',
      desc: 'High-tolerance profiling, multi-head boring & interlocking mortises',
      image: '/assets/page_022_img_1_2330x1653.jpeg'
    },
    {
      num: '04',
      title: 'MASTER BENCH ASSEMBLY & SANDING',
      desc: 'Artisanal hand-fitting, blind dovetail joinery & calibrated orbital smoothing',
      image: '/assets/page_025_img_1_2334x1651.jpeg'
    },
    {
      num: '05',
      title: 'ORGANIC OIL & LACQUER CURING',
      desc: '3 pressurized finishing booths applying hand-rubbed satin oils and topcoats',
      image: '/assets/page_028_img_1_2330x1653.jpeg'
    },
    {
      num: '06',
      title: 'DRY-FIT INSPECTION & CRATING',
      desc: 'Full architectural pre-assembly audit prior to white-glove site delivery',
      image: '/assets/page_029_img_2_2202x1186.jpeg'
    }
  ];

  const FACTORY_METRICS = [
    { label: 'FACILITY SCALE', value: '45,000+ SQ. FT.' },
    { label: 'LOCATION', value: 'DUBAI INVESTMENT PARK (DIP)' },
    { label: 'EUROPEAN MACHINERY', value: '15 AUTOMATED UNITS' },
    { label: 'FIRE RATING CERT.', value: 'FD120 CIVIL DEFENSE' }
  ];

  return (
    <section
      id="factory"
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
            <div className="arch-label">TIMBER MILLING & FURNITURE PLANT // DIP DUBAI</div>
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
              THE ARCHITECTURE OF FABRICATION.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'var(--color-stone)',
                maxWidth: '660px',
                lineHeight: 1.6
              }}
            >
              Operating from Dubai Investment Park, our 45,000+ sq. ft. campus combines 15 automated European
              machining centers with generational master cabinetmakers and joiners.
            </p>
          </motion.div>

          <button
            onClick={onOpenMachineryModal}
            className="btn-outline-arch"
            style={{ padding: '0.85rem 1.6rem', fontSize: '0.72rem' }}
          >
            <Cpu size={15} color="var(--color-bronze)" />
            <span>INSPECT EQUIPMENT LIST</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Panoramic Factory Visual with Motion */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '620px',
            overflow: 'hidden',
            border: '1px solid var(--color-bronze-border-subtle)',
            backgroundColor: 'var(--color-pitch)'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={STAGES[currentStage].num}
              src={STAGES[currentStage].image}
              alt={STAGES[currentStage].title}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.85) contrast(1.05)'
              }}
            />
          </AnimatePresence>

          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              maxWidth: '560px',
              backgroundColor: 'rgba(10, 9, 8, 0.92)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-bronze-border-subtle)',
              padding: '8px 14px'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.62rem, 1.2vw, 0.72rem)',
                letterSpacing: '0.12em',
                color: 'var(--color-bronze)',
                marginBottom: '2px'
              }}
            >
              STAGE {STAGES[currentStage].num} // {STAGES[currentStage].title}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.72rem, 1.2vw, 0.82rem)', color: 'var(--color-ivory)', lineHeight: 1.4 }}>
              {STAGES[currentStage].desc}
            </div>
          </div>
        </div>

        {/* Stage Timeline Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '8px',
            marginTop: '1.5rem'
          }}
        >
          {STAGES.map((s, idx) => (
            <motion.button
              key={s.num}
              onClick={() => setCurrentStage(idx)}
              whileHover={{ y: -2 }}
              style={{
                padding: '12px 14px',
                textAlign: 'left',
                backgroundColor: currentStage === idx ? 'rgba(191, 160, 122, 0.15)' : 'var(--color-charcoal-dark)',
                border: `1px solid ${currentStage === idx ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                color: currentStage === idx ? 'var(--color-ivory)' : 'var(--color-stone)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ color: 'var(--color-bronze)', marginBottom: '3px' }}>{s.num}</div>
              <div>{s.title}</div>
            </motion.button>
          ))}
        </div>

        {/* Metrics Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginTop: '1.75rem'
          }}
        >
          {FACTORY_METRICS.map((m) => (
            <div
              key={m.label}
              style={{
                padding: '1.25rem',
                backgroundColor: 'var(--color-charcoal-dark)',
                border: '1px solid var(--color-bronze-border-subtle)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-stone)', marginBottom: '4px' }}>
                {m.label}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-bronze)' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
