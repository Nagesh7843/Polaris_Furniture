import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Compass } from 'lucide-react';
import { POLARIS_PROFILE } from '../data/polarisData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-obsidian)',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Col 1: Identity & Legal Form */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.35rem',
                  letterSpacing: '0.16em',
                  fontWeight: 600,
                  color: 'var(--color-ivory-light)'
                }}
              >
                POLARIS
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--color-bronze)',
                  border: '1px solid var(--color-bronze-border)',
                  padding: '1px 6px'
                }}
              >
                DIP // DUBAI
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-stone-dark)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              POLARIS INTERNATIONAL INDUSTRIES LLC
            </p>

            <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Integrated furniture manufacturing and interior fit-out solutions, engineered and fabricated
              in our 45,000+ sq. ft. industrial facility at Dubai Investment Park.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-stone-dark)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Compass size={13} color="var(--color-bronze)" />
              <span>COORDINATES: 24.9857° N, 55.1878° E</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.5rem'
              }}
            >
              ARCHITECTURE & CAPABILITIES
            </span>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: "Fitted Joinery & Mill Works", href: "#capabilities" },
                { name: "Solid Wood & Veneered Furniture", href: "#capabilities" },
                { name: "Standard & Decorative Doors", href: "#capabilities" },
                { name: "Soft Furnishing & Upholstery", href: "#capabilities" },
                { name: "Specialized Metal Works", href: "#capabilities" },
                { name: "Decorative Glass Works", href: "#capabilities" },
                { name: "45,000+ Sq. Ft. Facility", href: "#factory" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-stone-light)',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-bronze-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-stone-light)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sectors & Global Presence */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.5rem'
              }}
            >
              SECTORS & REGIONAL HUBS
            </span>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                "Luxury Hospitality & Resorts",
                "Corporate HQ & Commercial Offices",
                "High-Rise Residences & Penthouses",
                "Palatial Private Mansions (Dubai Hills)",
                "Dubai Investment Park HQ (UAE)",
                "London Liaison Office (UK)",
                "Kingdom of Saudi Arabia (KSA)",
                "India Engineering Hub"
              ].map((item, idx) => (
                <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--color-stone)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Pre-Qualification Verification & Contact */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.5rem'
              }}
            >
              COMMERCIAL & TENDER DESK
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--color-bronze)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-stone-light)' }}>
                  {POLARIS_PROFILE.contact.address}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={15} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-ivory)' }}>
                  {POLARIS_PROFILE.contact.phone}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={15} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-stone-light)' }}>
                  {POLARIS_PROFILE.contact.email}
                </span>
              </div>
            </div>

            <div
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(191, 160, 122, 0.05)',
                border: '1px solid var(--color-bronze-border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-stone)'
              }}
            >
              ACCREDITATIONS: ISO 9001:2008 · EMS Compliant · Civil Defense Fire-Door Certified
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--color-stone-dark)'
          }}
        >
          <div>
            © {new Date().getFullYear()} POLARIS INTERNATIONAL INDUSTRIES LLC. ALL RIGHTS RESERVED.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span>REGISTERED AT DUBAI INVESTMENT PARK, DUBAI, UAE</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-bronze)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-ivory)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-bronze)';
              }}
            >
              <span>TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
