import React from 'react';
import { PolarisLogo } from './PolarisLogo';
import { ArrowUpRight, ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ComprehensiveFooterProps {
  onNavigatePage: (pageId: string) => void;
  onOpenConsultation: () => void;
}

export const ComprehensiveFooter: React.FC<ComprehensiveFooterProps> = ({
  onNavigatePage,
  onOpenConsultation
}) => {
  const DIVISIONS = [
    { label: 'Bespoke Loose Furniture & Credenzas', page: 'anatomy' },
    { label: 'Fixed Architectural Joinery & Millwork', page: 'joinery' },
    { label: 'Bookmatched Veneers & Hardwood Flitches', page: 'materials' },
    { label: 'PVD Coated Architectural Brass & Steel', page: 'materials' },
    { label: 'Decorative Fluted & Acoustic Glass', page: 'materials' },
    { label: 'Contract Hospitality Bouclé & Leather', page: 'materials' },
    { label: 'Turnkey Architectural Interior Fit-Out', page: 'projects' }
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-pitch)',
        borderTop: '1px solid rgba(191, 160, 122, 0.18)',
        color: 'var(--color-ivory)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem) 2.5rem clamp(1.25rem, 4vw, 3rem)',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '1720px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}
      >
        {/* Top Header Row: Brand Identity & Direct Consultation CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(191, 160, 122, 0.1)'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <button
              onClick={() => onNavigatePage('home')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.25rem'
              }}
              aria-label="Polaris International Home"
            >
              <PolarisLogo height={42} />
            </button>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                color: 'var(--color-stone)',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              Polaris International Industries LLC is a premier manufacturer of bespoke loose furniture,
              architectural joinery, and turnkey interior fit-outs. Operating an advanced 45,000+ sq. ft.
              precision production facility in Dubai Investment Park 1, we deliver museum-grade casework
              for luxury hospitality, presidential residences, and commercial flagships worldwide.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
              backgroundColor: 'rgba(16, 14, 12, 0.85)',
              border: '1px solid var(--color-bronze-border-subtle)',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              width: '100%',
              maxWidth: '440px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="var(--color-bronze)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-bronze-light)'
                }}
              >
                DIRECT TENDER & SPECIFICATION DESK
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--color-stone)',
                margin: 0,
                lineHeight: 1.5
              }}
            >
              Accepting architectural millwork packages, FF&E schedules, and turnkey fit-out tender submissions.
            </p>
            <button
              onClick={onOpenConsultation}
              className="btn-bronze"
              style={{
                marginTop: '0.5rem',
                width: '100%',
                justifyContent: 'center',
                padding: '0.85rem 1.5rem',
                fontSize: '0.72rem',
                letterSpacing: '0.14em'
              }}
            >
              <span>SUBMIT TENDER RFQ</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* 3 Architectural Columns Grid (Clean & Focused) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(191, 160, 122, 0.1)'
          }}
        >
          {/* Column 1: Manufacturing Divisions */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}
            >
              01 // MANUFACTURING SCOPES
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {DIVISIONS.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigatePage(item.page)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'var(--color-stone)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Dubai Manufacturing Campus & Accreditations */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}
            >
              02 // PRODUCTION CAMPUS & STANDARDS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--color-stone)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--color-bronze)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>
                  Plot 598-1122, Dubai Investment Park 1 (DIP 1),<br />
                  Jebel Ali Industrial Zone, Dubai, UAE
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
                <span>Facility Operations: Mon – Sat: 07:30 – 18:00 GST</span>
              </div>
              <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-stone-dark)' }}>
                <div>• 45,000+ SQ. FT. PRODUCTION CAPACITY</div>
                <div>• SCM 5-AXIS CNC MULTISPINDLE JOINERY</div>
                <div>• ISO 9001:2008 QUALITY CERTIFIED</div>
                <div>• DUBAI CIVIL DEFENSE FD120 / FD60 FIRE DOORS</div>
                <div>• FSC & PEFC CERTIFIED TIMBER CHAIN OF CUSTODY</div>
              </div>
            </div>
          </div>

          {/* Column 3: Direct Inquiries & Tender Desk */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}
            >
              03 // DIRECT INQUIRIES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)', marginBottom: '3px' }}>
                  GENERAL ENQUIRIES:
                </div>
                <a
                  href="mailto:info@polaris-industries.ae"
                  style={{ color: 'var(--color-ivory)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Mail size={14} color="var(--color-bronze)" />
                  <span>info@polaris-industries.ae</span>
                </a>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)', marginBottom: '3px' }}>
                  TENDER & ESTIMATION DESK:
                </div>
                <a
                  href="mailto:tenders@polaris-industries.ae"
                  style={{ color: 'var(--color-ivory)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Mail size={14} color="var(--color-bronze)" />
                  <span>tenders@polaris-industries.ae</span>
                </a>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)', marginBottom: '3px' }}>
                  DIRECT TELEPHONE:
                </div>
                <a
                  href="tel:+97148859192"
                  style={{ color: 'var(--color-ivory)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Phone size={14} color="var(--color-bronze)" />
                  <span>+971 4 885 9192</span>
                </a>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)', marginBottom: '3px' }}>
                  GLOBAL GPS TELEMETRY:
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-stone)' }}>
                  24.9857° N, 55.1878° E
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar: Legal Copyright */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-stone-dark)',
            letterSpacing: '0.08em',
            textAlign: 'center'
          }}
        >
          © {new Date().getFullYear()} POLARIS INTERNATIONAL INDUSTRIES LLC. REGISTERED IN DUBAI, UAE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
