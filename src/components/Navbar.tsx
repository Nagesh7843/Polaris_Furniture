import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { POLARIS_PROFILE } from '../data/polarisData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Vision", href: "#vision" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Factory", href: "#factory" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Global", href: "#global" },
    { label: "Standards & HSE", href: "#standards" }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(10, 9, 8, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(191, 160, 122, 0.18)'
            : '1px solid rgba(255, 255, 255, 0.07)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '84px'
          }}
        >
          {/* Logo & Architectural Subtext */}
          <a
            href="#"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              textDecoration: 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.25rem',
                  letterSpacing: '0.18em',
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
                  padding: '1px 6px',
                  letterSpacing: '0.1em'
                }}
              >
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                letterSpacing: '0.22em',
                color: 'var(--color-stone)',
                textTransform: 'uppercase'
              }}
            >
              INTERNATIONAL INDUSTRIES LLC
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-stone-light)',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-bronze-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-stone-light)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Contact Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-stone)'
              }}
              className="desktop-stat"
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  display: 'inline-block'
                }}
              />
              45,000+ SQ. FT. FACILITY
            </div>

            <button
              onClick={onOpenConsultation}
              className="btn-bronze"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.68rem',
                letterSpacing: '0.14em'
              }}
            >
              <span>INQUIRE</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-ivory)',
                padding: '8px'
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 9, 8, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem 3rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.75rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-ivory)',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem',
                  borderBottom: '1px solid rgba(191, 160, 122, 0.15)',
                  paddingBottom: '0.75rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-bronze)'
                  }}
                >
                  0{idx + 1}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-stone)'
            }}
          >
            <p>Dubai Investment Park, Dubai, UAE</p>
            <p>{POLARIS_PROFILE.contact.phone}</p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-bronze"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              REQUEST CONSULTATION
            </button>
          </div>
        </div>
      )}

      {/* Responsive Breakpoint Helpers */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-stat {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
