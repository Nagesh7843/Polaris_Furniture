import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { POLARIS_PROFILE } from '../../data/polarisData';

interface FinalCtaFilmProps {
  onOpenConsultation: () => void;
}

export const FinalCtaFilm: React.FC<FinalCtaFilmProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--color-pitch)'
      }}
    >
      {/* Background Factory Photography */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/page_027_img_1_2334x1653.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.3) contrast(1.15) saturate(0.9)',
          transform: 'scale(1.02)'
        }}
      />

      {/* Atmospheric Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8, 7, 6, 0.94) 0%, rgba(8, 7, 6, 0.62) 40%, rgba(8, 7, 6, 0.96) 100%)'
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          paddingTop: '6rem',
          paddingBottom: '6rem'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="arch-label" style={{ justifyContent: 'center' }}>
            BESPOKE COMMISSIONING & ARCHITECTURAL JOINERY // DIP DUBAI
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.5rem, 6.5vw, 5.2rem)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: 'var(--color-ivory-light)',
              textTransform: 'uppercase',
              margin: '0.75rem 0 1.5rem 0'
            }}
          >
            CRAFTED FOR THE SPACE.<br />
            <span style={{ color: 'var(--color-bronze-light)' }}>BUILT TO LAST.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--color-stone-light)',
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.6
            }}
          >
            Whether commissioning bespoke presidential furniture suites, custom hardwood doors,
            or turnkey hotel joinery packages, our engineering division in Dubai Investment Park is at your service.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="btn-bronze final-cta-btn"
              style={{ padding: '1rem 2.2rem', fontSize: '0.78rem' }}
            >
              <span>START A COMMISSION</span>
              <ArrowUpRight size={15} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${POLARIS_PROFILE.contact.phone.replace(/\s+/g, '')}`}
              className="btn-outline-arch final-cta-btn"
              style={{ padding: '0.95rem 2rem', fontSize: '0.78rem' }}
            >
              <Phone size={14} color="var(--color-bronze)" />
              <span>{POLARIS_PROFILE.contact.phone}</span>
            </motion.a>
          </div>

          {/* Telemetry Strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              borderTop: '1px solid rgba(191, 160, 122, 0.2)',
              paddingTop: '1.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.62rem, 1.2vw, 0.72rem)',
              color: 'var(--color-stone)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={13} color="var(--color-bronze)" />
              <span>DUBAI INVESTMENT PARK, DUBAI, UAE</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={13} color="var(--color-bronze)" />
              <span>{POLARIS_PROFILE.contact.email}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .final-cta-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
