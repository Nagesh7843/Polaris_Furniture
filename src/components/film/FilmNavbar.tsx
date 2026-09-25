import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Phone, Mail } from 'lucide-react';
import { PolarisLogo } from './PolarisLogo';

interface FilmNavbarProps {
  activePage: string;
  onNavigatePage: (pageId: string) => void;
  onOpenConsultation: () => void;
}

export const FilmNavbar: React.FC<FilmNavbarProps> = ({
  activePage,
  onNavigatePage,
  onOpenConsultation
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_ITEMS = [
    { id: 'home', label: 'HOME' },
    { id: 'anatomy', label: 'ANATOMY' },
    { id: 'materials', label: 'MATERIALS' },
    { id: 'joinery', label: 'JOINERY' },
    { id: 'facility', label: 'FACILITY' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'commission', label: 'COMMISSION' }
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigatePage(pageId);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Main Website Header Bar */}
      <div
        className="navbar-bar"
        style={{
          backgroundColor: scrolled ? 'rgba(8, 7, 6, 0.96)' : 'rgba(8, 7, 6, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? 'var(--color-bronze-border-subtle)' : 'rgba(191, 160, 122, 0.15)'}`,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1800px',
            margin: '0 auto',
            width: '100%'
          }}
        >
          {/* Brand Logo Lockup */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            aria-label="Polaris Home"
          >
            <div className="navbar-logo-desktop">
              <PolarisLogo height={scrolled ? 46 : 54} />
            </div>
            <div className="navbar-logo-mobile">
              <PolarisLogo height={scrolled ? 34 : 38} />
            </div>
          </button>

          {/* Desktop Website Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.25rem'
            }}
            className="desktop-nav"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px 0',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    color: isActive ? 'var(--color-bronze-light)' : 'var(--color-stone)',
                    fontWeight: isActive ? 600 : 400,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    position: 'relative',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-ivory)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-stone)';
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-bronze)',
                        boxShadow: '0 0 8px rgba(191, 160, 122, 0.4)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Desktop Button */}
            <button
              onClick={onOpenConsultation}
              className="btn-bronze navbar-cta-desktop"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.68rem',
                letterSpacing: '0.14em'
              }}
            >
              <span>REQUEST RFQ // INQUIRE</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Compact Button */}
            <button
              onClick={onOpenConsultation}
              className="btn-bronze navbar-cta-mobile"
              style={{
                padding: '6px 12px',
                fontSize: '0.62rem',
                letterSpacing: '0.1em'
              }}
            >
              <span>INQUIRE</span>
              <ArrowUpRight size={11} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                display: 'none',
                color: 'var(--color-ivory)',
                background: 'rgba(25, 22, 19, 0.6)',
                border: '1px solid var(--color-bronze-border-subtle)',
                padding: '6px 8px',
                cursor: 'pointer'
              }}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} color="var(--color-bronze)" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Website Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(8, 7, 6, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--color-bronze)',
            padding: '1.75rem 1.25rem 2rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxHeight: '85vh',
            overflowY: 'auto'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--color-bronze)',
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}
          >
            // POLARIS ARCHITECTURAL NAVIGATION
          </div>

          {NAV_ITEMS.map((item, idx) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'rgba(191, 160, 122, 0.1)' : 'rgba(20, 18, 16, 0.5)',
                  border: 'none',
                  borderLeft: isActive ? '3px solid var(--color-bronze)' : '3px solid transparent',
                  padding: '0.85rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  color: isActive ? 'var(--color-bronze-light)' : 'var(--color-ivory)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: '2px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--color-bronze)', fontSize: '0.68rem' }}>
                    0{idx + 1}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight size={13} color="var(--color-bronze)" />
              </button>
            );
          })}

          {/* Direct Mobile Quick Actions in Drawer */}
          <div
            style={{
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(191, 160, 122, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-bronze"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.85rem',
                fontSize: '0.72rem',
                letterSpacing: '0.14em'
              }}
            >
              <span>START SPECIFICATION RFQ</span>
              <ArrowUpRight size={14} />
            </button>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="tel:+97148859192"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(25, 22, 19, 0.7)',
                  border: '1px solid var(--color-bronze-border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--color-ivory)',
                  textDecoration: 'none'
                }}
              >
                <Phone size={12} color="var(--color-bronze)" />
                <span>+971 4 885 9192</span>
              </a>

              <a
                href="mailto:info@polaris-industries.ae"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(25, 22, 19, 0.7)',
                  border: '1px solid var(--color-bronze-border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--color-ivory)',
                  textDecoration: 'none'
                }}
              >
                <Mail size={12} color="var(--color-bronze)" />
                <span>EMAIL DESK</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-bar {
          padding: 0.85rem 1.25rem;
        }
        .navbar-logo-desktop {
          display: none;
        }
        .navbar-logo-mobile {
          display: block;
        }
        .navbar-cta-desktop {
          display: none !important;
        }
        .navbar-cta-mobile {
          display: inline-flex !important;
        }

        @media (min-width: 640px) {
          .navbar-bar {
            padding: 1rem 2rem;
          }
          .navbar-cta-desktop {
            display: inline-flex !important;
          }
          .navbar-cta-mobile {
            display: none !important;
          }
        }

        @media (min-width: 1080px) {
          .navbar-bar {
            padding: ${scrolled ? '0.8rem 3rem' : '1.15rem 3.5rem'};
          }
          .desktop-nav {
            display: flex !important;
          }
          .navbar-logo-desktop {
            display: block;
          }
          .navbar-logo-mobile {
            display: none;
          }
        }

        @media (max-width: 1079px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
