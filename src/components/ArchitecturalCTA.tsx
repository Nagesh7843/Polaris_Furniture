import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { POLARIS_PROFILE } from '../data/polarisData';

interface ArchitecturalCTAProps {
  onOpenConsultation: () => void;
}

export const ArchitecturalCTA: React.FC<ArchitecturalCTAProps> = ({ onOpenConsultation }) => {
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
      {/* Full-Screen Architectural Background Image: 45,000+ sq. ft. DIP Plant Floor */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/page_019_img_1_2334x1649.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.3) contrast(1.15) saturate(0.9)',
          transform: 'scale(1.02)',
          transition: 'transform 10s ease-out'
        }}
      />

      {/* Atmospheric Architectural Vignette & Tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8, 7, 6, 0.94) 0%, rgba(8, 7, 6, 0.72) 40%, rgba(8, 7, 6, 0.96) 100%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 30%, rgba(5, 5, 5, 0.8) 100%)'
        }}
      />

      {/* Centered Monolithic CTA Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
          maxWidth: '1000px',
          paddingTop: '6rem',
          paddingBottom: '6rem'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.24em',
              color: 'var(--color-bronze)',
              textTransform: 'uppercase',
              marginBottom: '1.75rem'
            }}
          >
            <span>COMMISSIONING & PRE-QUALIFICATION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: 'var(--color-ivory-light)',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.8)'
            }}
          >
            LET'S BUILD SOMETHING<br />
            <span style={{ color: 'var(--color-bronze-light)' }}>DISTINCTIVE.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--color-ivory-muted)',
              maxWidth: '720px',
              margin: '0 auto 3rem auto',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
            }}
          >
            Whether commissioning complete turnkey guestroom millwork for international hotel flags,
            bespoke corporate headquarters, or palatial private villas in Dubai Hills, our team of
            engineers and master craftsmen at Dubai Investment Park are at your service.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '4rem'
            }}
          >
            <button
              onClick={onOpenConsultation}
              className="btn-bronze"
              style={{ padding: '1.1rem 2.5rem', fontSize: '0.8rem' }}
            >
              <span>REQUEST CONSULTATION</span>
              <ArrowUpRight size={16} />
            </button>

            <a
              href={`tel:${POLARIS_PROFILE.contact.phone.replace(/\s+/g, '')}`}
              className="btn-outline-arch"
              style={{ padding: '1.05rem 2.2rem', fontSize: '0.8rem' }}
            >
              <Phone size={15} color="var(--color-bronze)" />
              <span>{POLARIS_PROFILE.contact.phone}</span>
            </a>
          </div>

          {/* Direct Address & Facility Metadata */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              borderTop: '1px solid rgba(191, 160, 122, 0.2)',
              paddingTop: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80'
                }}
              />
              <span>FACILITY EXPANSION PHASE ACTIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
