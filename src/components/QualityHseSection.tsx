import React, { useState } from 'react';
import { ShieldCheck, FileCheck2, Leaf, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS, BRANDS } from '../data/polarisData';

export const QualityHseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quality' | 'hse' | 'approvals'>('quality');
  const [previewCert, setPreviewCert] = useState<string | null>(null);

  const certImages = [
    { title: "ISO 9001:2008 Quality Management System Certificate", image: "/assets/page_009_img_3_861x1147.jpeg" },
    { title: "EMS Environmental Standards Compliance Certificate", image: "/assets/page_009_img_4_859x1147.jpeg" },
    { title: "OHSAS / ISO Occupational Health & Safety Certificate", image: "/assets/page_009_img_5_861x1147.jpeg" }
  ];

  return (
    <section
      id="standards"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-obsidian)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '850px', marginBottom: '4.5rem' }}>
          <div className="arch-label">STANDARDS, SAFETY & STATUTORY APPROVALS</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em'
            }}
          >
            QUALITY & HSE CREDIBILITY
          </h2>
          <p
            style={{
              marginTop: '1rem',
              color: 'var(--color-stone)',
              fontSize: '1rem',
              maxWidth: '680px'
            }}
          >
            Polaris adheres strictly to international management standards, including ISO 9001:2008,
            full Environmental Management Systems (EMS), and Civil Defense fire-rated door fabrication
            authorizations.
          </p>
        </div>

        {/* Tab Switcher: Quality Management // HSE & Environment // Statutory Approvals */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            borderBottom: '1px solid var(--color-bronze-border-subtle)',
            marginBottom: '3.5rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            paddingBottom: '1rem'
          }}
        >
          <button
            onClick={() => setActiveTab('quality')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              backgroundColor: activeTab === 'quality' ? 'rgba(191, 160, 122, 0.12)' : 'transparent',
              border: `1px solid ${activeTab === 'quality' ? 'var(--color-bronze)' : 'transparent'}`,
              color: activeTab === 'quality' ? 'var(--color-ivory-light)' : 'var(--color-stone)',
              transition: 'all 0.3s ease'
            }}
          >
            <ShieldCheck size={16} color="var(--color-bronze)" />
            <span>ISO 9001:2008 QUALITY POLICY</span>
          </button>

          <button
            onClick={() => setActiveTab('hse')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              backgroundColor: activeTab === 'hse' ? 'rgba(191, 160, 122, 0.12)' : 'transparent',
              border: `1px solid ${activeTab === 'hse' ? 'var(--color-bronze)' : 'transparent'}`,
              color: activeTab === 'hse' ? 'var(--color-ivory-light)' : 'var(--color-stone)',
              transition: 'all 0.3s ease'
            }}
          >
            <Leaf size={16} color="var(--color-bronze)" />
            <span>HSE & ZERO-ACCIDENT POLICY</span>
          </button>

          <button
            onClick={() => setActiveTab('approvals')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              backgroundColor: activeTab === 'approvals' ? 'rgba(191, 160, 122, 0.12)' : 'transparent',
              border: `1px solid ${activeTab === 'approvals' ? 'var(--color-bronze)' : 'transparent'}`,
              color: activeTab === 'approvals' ? 'var(--color-ivory-light)' : 'var(--color-stone)',
              transition: 'all 0.3s ease'
            }}
          >
            <FileCheck2 size={16} color="var(--color-bronze)" />
            <span>STATUTORY LICENSES & APPROVALS</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
            marginBottom: '5.5rem'
          }}
        >
          {/* Policy Text & Commitments */}
          <div>
            {activeTab === 'quality' && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-bronze)',
                    letterSpacing: '0.16em',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                >
                  SYSTEM STANDARD CONFORMANCE
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.85rem',
                    color: 'var(--color-ivory-light)',
                    marginBottom: '1rem',
                    lineHeight: 1.2
                  }}
                >
                  {CERTIFICATIONS.quality.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--color-stone)',
                    marginBottom: '1.75rem'
                  }}
                >
                  {CERTIFICATIONS.quality.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {CERTIFICATIONS.quality.points.map((pt, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle size={16} color="var(--color-bronze)" style={{ flexShrink: 0, marginTop: '4px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-ivory-muted)', lineHeight: 1.6 }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'hse' && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-bronze)',
                    letterSpacing: '0.16em',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                >
                  ENVIRONMENTAL & OCCUPATIONAL HEALTH
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.85rem',
                    color: 'var(--color-ivory-light)',
                    marginBottom: '1rem',
                    lineHeight: 1.2
                  }}
                >
                  {CERTIFICATIONS.hse.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--color-stone)',
                    marginBottom: '1.75rem'
                  }}
                >
                  {CERTIFICATIONS.hse.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {CERTIFICATIONS.hse.points.map((pt, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle size={16} color="var(--color-bronze)" style={{ flexShrink: 0, marginTop: '4px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-ivory-muted)', lineHeight: 1.6 }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'approvals' && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-bronze)',
                    letterSpacing: '0.16em',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                >
                  LEGAL & MUNICIPAL FRAMEWORKS
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.85rem',
                    color: 'var(--color-ivory-light)',
                    marginBottom: '1rem',
                    lineHeight: 1.2
                  }}
                >
                  Verified Statutory Approvals
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--color-stone)',
                    marginBottom: '1.75rem'
                  }}
                >
                  Our Dubai Investment Park industrial manufacturing premises operates under full
                  commercial licensure by the Government of Dubai, adhering to all civil defense fire
                  safety codes and environmental emissions covenants.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {CERTIFICATIONS.approvals.map((appr, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle size={16} color="var(--color-bronze)" style={{ flexShrink: 0, marginTop: '4px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-ivory-muted)', lineHeight: 1.6 }}>
                        {appr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Scanned Official Certificates Preview */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              DOCUMENTED AUDIT CERTIFICATES (FROM OFFICIAL PROFILE)
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {certImages.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => setPreviewCert(cert.image)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: 'var(--color-charcoal-dark)',
                    border: '1px solid var(--color-bronze-border-subtle)',
                    padding: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-bronze)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-bronze-border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-obsidian)', marginBottom: '8px' }}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--color-stone-light)',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {cert.title}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-stone-dark)',
                marginTop: '1rem'
              }}
            >
              Click any certificate to expand full-resolution audit document.
            </p>
          </div>
        </div>

        {/* Associated Brands & Master Developers Strip */}
        <div
          style={{
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            paddingTop: '3.5rem'
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase'
              }}
            >
              DOCUMENTED CLIENT ASSOCIATIONS & BRAND TRUST
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                style={{
                  padding: '1.25rem 1rem',
                  backgroundColor: 'var(--color-charcoal-dark)',
                  border: '1px solid var(--color-bronze-border-subtle)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze)';
                  e.currentTarget.style.backgroundColor = 'rgba(191, 160, 122, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze-border-subtle)';
                  e.currentTarget.style.backgroundColor = 'var(--color-charcoal-dark)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '0.95rem',
                    letterSpacing: '0.08em',
                    color: 'var(--color-ivory)',
                    fontWeight: 600,
                    marginBottom: '4px'
                  }}
                >
                  {brand.name.toUpperCase()}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--color-stone-dark)',
                    letterSpacing: '0.08em'
                  }}
                >
                  {brand.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Preview Modal */}
      {previewCert && (
        <div
          className="modal-backdrop"
          onClick={() => setPreviewCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '650px',
              width: '90%',
              backgroundColor: 'var(--color-obsidian)',
              border: '1px solid var(--color-bronze)',
              padding: '1.5rem',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-bronze)' }}>
                AUDITED CERTIFICATE VIEW
              </span>
              <button
                onClick={() => setPreviewCert(null)}
                style={{ color: 'var(--color-ivory)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}
              >
                [ CLOSE ]
              </button>
            </div>
            <img
              src={previewCert}
              alt="Certificate"
              style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
