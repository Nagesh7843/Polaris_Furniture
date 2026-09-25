import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { GLOBAL_PRESENCE } from '../data/polarisData';
import type { GlobalOffice } from '../data/polarisData';

export const GlobalPresenceSection: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<GlobalOffice>(GLOBAL_PRESENCE.offices[0]);

  const offices = GLOBAL_PRESENCE.offices;
  const landmarks = GLOBAL_PRESENCE.landmarks;

  return (
    <section
      id="global"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-charcoal-dark)',
        position: 'relative',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        borderBottom: '1px solid var(--color-bronze-border-subtle)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '850px', marginBottom: '4.5rem' }}>
          <div className="arch-label">EXPANDING GLOBAL FOOTPRINT // GCC & WORLDWIDE</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em'
            }}
          >
            GLOBAL PRESENCE
          </h2>
          <p
            style={{
              marginTop: '1rem',
              color: 'var(--color-stone)',
              fontSize: '1rem',
              maxWidth: '680px'
            }}
          >
            With strategic offices across continents and landmark project deliveries spanning Dubai,
            London, Saudi Arabia, Senegal, Mauritius, and Rwanda, Polaris represents true international
            joinery excellence manufactured in Dubai.
          </p>
        </div>

        {/* The Requested Sequential Office Node Flow:
            DUBAI ● -> LONDON ● -> KSA ● -> INDIA ● */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.75rem 2rem',
            backgroundColor: 'var(--color-obsidian)',
            border: '1px solid var(--color-bronze-border)',
            marginBottom: '3.5rem'
          }}
        >
          {offices.map((off, idx) => {
            const isSelected = selectedOffice.city === off.city;
            return (
              <React.Fragment key={off.city}>
                <button
                  onClick={() => setSelectedOffice(off)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    backgroundColor: isSelected ? 'rgba(191, 160, 122, 0.12)' : 'transparent',
                    border: `1px solid ${isSelected ? 'var(--color-bronze)' : 'transparent'}`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: isSelected ? [1, 1.25, 1] : 1,
                      boxShadow: isSelected ? '0 0 12px var(--color-bronze)' : 'none'
                    }}
                    transition={{ duration: 1.5, repeat: isSelected ? Infinity : 0 }}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? 'var(--color-bronze)' : 'var(--color-stone-dark)'
                    }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-serif-display)',
                        fontSize: '1rem',
                        letterSpacing: '0.1em',
                        color: isSelected ? 'var(--color-ivory-light)' : 'var(--color-stone)',
                        fontWeight: 600
                      }}
                    >
                      {off.city.toUpperCase()} ●
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: isSelected ? 'var(--color-bronze)' : 'var(--color-stone-dark)',
                        letterSpacing: '0.08em'
                      }}
                    >
                      {off.country}
                    </div>
                  </div>
                </button>

                {/* Connecting Architectural Dash/Arrow */}
                {idx < offices.length - 1 && (
                  <div
                    style={{
                      flex: '1 1 20px',
                      minWidth: '20px',
                      height: '1px',
                      background: 'repeating-linear-gradient(90deg, var(--color-bronze-dark), var(--color-bronze-dark) 4px, transparent 4px, transparent 8px)',
                      opacity: 0.6
                    }}
                    className="office-connector"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Minimalist Map Visual & Location Detail Inspector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left: Minimalist Vector Architectural Map */}
          <div
            style={{
              position: 'relative',
              minHeight: '440px',
              backgroundColor: 'var(--color-obsidian)',
              border: '1px solid var(--color-bronze-border)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden'
            }}
          >
            {/* Architectural Grid Lines Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(to right, rgba(191, 160, 122, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(191, 160, 122, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
              }}
            />

            {/* Map Header HUD */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-stone-dark)',
                letterSpacing: '0.12em',
                borderBottom: '1px solid var(--color-bronze-border-subtle)',
                paddingBottom: '0.75rem'
              }}
            >
              <span>COORDINATE SYSTEM: WGS84</span>
              <span style={{ color: 'var(--color-bronze)' }}>ACTIVE NODE: {selectedOffice.city.toUpperCase()}</span>
            </div>

            {/* Minimalist SVG World Map Graphic */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}
            >
              {/* Actual Map Artwork from PDF (page 13) or styled architectural projection */}
              <div
                style={{
                  position: 'absolute',
                  inset: '10px',
                  backgroundImage: 'url(/assets/page_013_img_1_2338x2160.jpeg)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  filter: 'contrast(1.15) brightness(0.85)',
                  opacity: 0.88
                }}
              />

              {/* Glowing Nodes for Strategic Offices */}
              {offices.map((off) => {
                const isSelected = off.city === selectedOffice.city;
                return (
                  <button
                    key={off.city}
                    onClick={() => setSelectedOffice(off)}
                    style={{
                      position: 'absolute',
                      left: `${off.coordinates.x}%`,
                      top: `${off.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                    title={`${off.city} - ${off.role}`}
                  >
                    <motion.div
                      animate={{
                        scale: isSelected ? [1, 1.4, 1] : 1,
                        opacity: isSelected ? [0.8, 1, 0.8] : 0.7
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: isSelected ? '18px' : '12px',
                        height: isSelected ? '18px' : '12px',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? 'var(--color-bronze)' : '#f59e0b',
                        boxShadow: isSelected
                          ? '0 0 20px var(--color-bronze), 0 0 40px rgba(191, 160, 122, 0.4)'
                          : '0 0 8px rgba(245, 158, 11, 0.6)',
                        border: '2px solid var(--color-obsidian)'
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-stone)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-bronze)' }} />
                <span>STRATEGIC REGIONAL OFFICE</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span>LANDMARK PROJECT DESTINATION</span>
              </div>
            </div>
          </div>

          {/* Right: Selected Office & Landmark Locations Detail */}
          <div
            style={{
              backgroundColor: 'var(--color-obsidian)',
              border: '1px solid var(--color-bronze-border)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-bronze)',
                  letterSpacing: '0.14em',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                <Building2 size={14} />
                REGIONAL OPERATION FOCUS
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '2rem',
                  color: 'var(--color-ivory-light)',
                  marginBottom: '0.5rem'
                }}
              >
                {selectedOffice.city}, {selectedOffice.country}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-bronze-light)',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}
              >
                {selectedOffice.role}
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.8,
                  color: 'var(--color-stone)',
                  marginBottom: '2rem'
                }}
              >
                {selectedOffice.details}
              </p>

              <div className="hairline-divider-solid" style={{ marginBottom: '1.5rem' }} />

              {/* Landmark Locations List Documented in PDF */}
              <div style={{ marginBottom: '1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-bronze)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                >
                  DOCUMENTED LANDMARK LOCATIONS (PDF RECORD)
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {landmarks.map((l) => (
                    <div
                      key={l.name}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        fontSize: '0.82rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                        paddingBottom: '6px'
                      }}
                    >
                      <span style={{ color: 'var(--color-ivory-light)', fontWeight: 500 }}>
                        {l.name} ({l.country})
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--color-stone-dark)',
                          textAlign: 'right',
                          maxWidth: '240px'
                        }}
                      >
                        {l.project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: 'rgba(191, 160, 122, 0.05)',
                border: '1px solid var(--color-bronze-border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-stone-light)'
              }}
            >
              GLOBAL LOGISTICS: Export crating, marine stabilization, and customs clearance coordinated
              directly from Dubai Investment Park.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .office-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
