import React, { useState } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Compass, ShieldCheck, CheckCircle2, FileText, Send } from 'lucide-react';

interface CommissionPageProps {
  onNavigatePage: (pageId: string) => void;
}

export const CommissionPage: React.FC<CommissionPageProps> = ({ onNavigatePage }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Hospitality',
    location: 'Dubai, UAE',
    scope: 'Joinery & Fitted Millwork',
    tenderDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-obsidian)', color: 'var(--color-ivory)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Modern Luxury Website Breadcrumb */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
            <button
              onClick={() => onNavigatePage('home')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-stone)',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
            >
              <span>HOME</span>
            </button>
            <span style={{ color: 'var(--color-bronze-dark)' }}>/</span>
            <span style={{ color: 'var(--color-bronze)' }}>COMMISSION & RFQ DOSSIER</span>
          </nav>

          <div className="timber-badge">
            <Compass size={12} color="var(--color-bronze)" />
            <span>SECTION 06 // TECHNICAL INQUIRY</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="arch-label">BESPOKE ARCHITECTURAL JOINERY & FURNITURE TENDERS</div>
          <h1
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em',
              lineHeight: 1.05,
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            COMMISSION AN ARCHITECTURAL WORK.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--color-stone)',
              maxWidth: '820px',
              lineHeight: 1.7
            }}
          >
            Whether specifying custom presidential casework, full hotel guestroom millwork packages, or Dubai Civil Defense
            certified fire-rated doors, our technical estimating and production engineering department provides prompt,
            comprehensive technical proposals and sample submittals.
          </p>
        </div>

        {/* Two-Column Grid: Form & Facility Contact */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Left Column: Technical RFQ Submission Form */}
          <div
            className="woodcraft-frame"
            style={{
              backgroundColor: 'var(--color-pitch)',
              padding: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <FileText size={18} color="var(--color-bronze)" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.6rem',
                  color: 'var(--color-ivory-light)',
                  margin: 0
                }}
              >
                REQUEST FOR PROPOSAL // RFQ DOSSIER
              </h2>
            </div>

            {submitted ? (
              <div
                style={{
                  backgroundColor: 'rgba(25, 22, 19, 0.6)',
                  border: '1px solid var(--color-bronze)',
                  padding: '2.5rem',
                  textAlign: 'center',
                  marginTop: '2rem'
                }}
              >
                <CheckCircle2 size={42} color="var(--color-bronze)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.5rem', color: 'var(--color-ivory-light)', marginBottom: '0.5rem' }}>
                  INQUIRY TRANSMITTED SUCCESSFULLY
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-stone)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                  Your technical specification dossier has been routed to our commercial estimation team at Dubai Investment Park. A senior estimator will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-bronze"
                  style={{ padding: '0.7rem 1.5rem', fontSize: '0.72rem' }}
                >
                  <span>SUBMIT ANOTHER SPECIFICATION</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone)', marginBottom: '6px' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Jean Nouvel / Director"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(12, 10, 8, 0.9)',
                        border: '1px solid var(--color-timber-border)',
                        color: 'var(--color-ivory)',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone)', marginBottom: '6px' }}>
                      PRACTICE / DEVELOPER / FIRM *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Foster + Partners / Emaar"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(12, 10, 8, 0.9)',
                        border: '1px solid var(--color-timber-border)',
                        color: 'var(--color-ivory)',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone)', marginBottom: '6px' }}>
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="spec@architects.ae"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(12, 10, 8, 0.9)',
                        border: '1px solid var(--color-timber-border)',
                        color: 'var(--color-ivory)',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone)', marginBottom: '6px' }}>
                      DIRECT TELEPHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(12, 10, 8, 0.9)',
                        border: '1px solid var(--color-timber-border)',
                        color: 'var(--color-ivory)',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone)', marginBottom: '6px' }}>
                      PROJECT TYPOLOGY
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(12, 10, 8, 0.9)',
                        border: '1px solid var(--color-timber-border)',
                        color: 'var(--color-ivory)',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Hospitality">Five-Star Hospitality / Hotel</option>
                      <option value="Commercial">Corporate HQ / Commercial Office</option>
                      <option value="High-Rise">High-Rise Residential / Casework</option>
                      <option value="Villa">Presidential Villa / Private Residence</option>
                      <option value="FireDoors">Dubai Civil Defense Fire Doors</option>
                      <option value="Furniture">Bespoke Furniture Collection</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone)', marginBottom: '6px' }}>
                      GEOGRAPHIC SITE LOCATION
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(12, 10, 8, 0.9)',
                        border: '1px solid var(--color-timber-border)',
                        color: 'var(--color-ivory)',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Dubai, UAE">Dubai, UAE</option>
                      <option value="Abu Dhabi, UAE">Abu Dhabi, UAE</option>
                      <option value="Riyadh, KSA">Riyadh, Kingdom of Saudi Arabia</option>
                      <option value="Jeddah, KSA">Jeddah, Kingdom of Saudi Arabia</option>
                      <option value="Doha, Qatar">Doha, Qatar</option>
                      <option value="GCC Other">Other GCC State</option>
                      <option value="International">International Export</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone)', marginBottom: '6px' }}>
                    SPECIFICATION BRIEF & SCOPE OF WORKS
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide overview of joinery scope, veneer preferences, target handover date, and drawing availability..."
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(12, 10, 8, 0.9)',
                      border: '1px solid var(--color-timber-border)',
                      color: 'var(--color-ivory)',
                      padding: '0.85rem 1rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(25, 22, 19, 0.4)',
                    padding: '0.85rem 1rem',
                    border: '1px solid var(--color-bronze-border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-stone)'
                  }}
                >
                  <span style={{ color: 'var(--color-bronze)' }}>// DRAWINGS & BIM MODELS: </span>
                  CAD (.dwg), Revit (.rvt), or PDF schedules can also be submitted directly to{' '}
                  <a href="mailto:info@polaris-industries.ae" style={{ color: 'var(--color-ivory)' }}>
                    info@polaris-industries.ae
                  </a>
                </div>

                <button type="submit" className="btn-bronze" style={{ padding: '0.95rem 1.75rem', marginTop: '0.5rem' }}>
                  <Send size={14} />
                  <span>TRANSMIT RFQ TO DIP COMMERCIAL DIVISION</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Plant Credentials, Map, & Coordinates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Campus Photo Visual */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                border: '1px solid var(--color-timber-border)',
                overflow: 'hidden'
              }}
            >
              <img
                src="/assets/page_101_img_3_2338x1148.jpeg"
                alt="Polaris DIP Facility Location"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8, 7, 6, 0.9) 0%, transparent 60%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end'
                }}
              >
                <div>
                  <div className="timber-badge" style={{ marginBottom: '6px' }}>
                    <span>PLOT 598-1122 · DIP 1</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-ivory)', fontWeight: 600 }}>
                    DUBAI INVESTMENT PARK COMPLEX
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-timber-honey)' }}>
                  24.9857° N, 55.1878° E
                </div>
              </div>
            </div>

            {/* Direct Contact & Accreditation Cards */}
            <div
              className="woodcraft-frame"
              style={{
                backgroundColor: 'var(--color-pitch)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="var(--color-bronze)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone-dark)', letterSpacing: '0.1em' }}>
                    PHYSICAL WORKS & HEAD OFFICE
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-ivory)', marginTop: '2px' }}>
                    Dubai Investment Park (DIP 1), P.O. Box 282554, Dubai, United Arab Emirates
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone-dark)', letterSpacing: '0.1em' }}>
                    CENTRAL TELEPHONE EXCHANGE
                  </div>
                  <a href="tel:+97148859192" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-ivory)', textDecoration: 'none' }}>
                    +971 4 885 9192
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone-dark)', letterSpacing: '0.1em' }}>
                    TECHNICAL ESTIMATION & TENDERS
                  </div>
                  <a href="mailto:info@polaris-industries.ae" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-ivory)', textDecoration: 'none' }}>
                    info@polaris-industries.ae
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={18} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-stone-dark)', letterSpacing: '0.1em' }}>
                    OPERATING HOURS
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-stone)' }}>
                    Sunday – Thursday: 08:00 – 18:00 GST
                  </div>
                </div>
              </div>
            </div>

            {/* Quality & Civil Defense Endorsement */}
            <div
              style={{
                backgroundColor: 'rgba(25, 22, 19, 0.4)',
                border: '1px solid var(--color-bronze-border-subtle)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <ShieldCheck size={28} color="var(--color-bronze)" style={{ flexShrink: 0 }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-stone)' }}>
                <strong style={{ color: 'var(--color-ivory)' }}>CERTIFIED STATUTORY COMPLIANCE: </strong>
                ISO 9001:2008 Quality Management & Dubai Civil Defense Approved Manufacturer for Fire-Rated Wooden Doors (FD30 / FD60 / FD120).
              </div>
            </div>
          </div>
        </div>

        {/* Website Cross-Page Pagination */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            paddingTop: '2.5rem',
            marginTop: '3.5rem'
          }}
        >
          <button
            onClick={() => onNavigatePage('projects')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: 0
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
          >
            <ArrowLeft size={14} />
            <span>PREV: 05 // LANDMARK PORTFOLIO</span>
          </button>

          <button
            onClick={() => onNavigatePage('home')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: 0
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
          >
            <span>RETURN TO OVERVIEW</span>
            <ArrowLeft size={14} style={{ transform: 'rotate(180deg)' }} />
          </button>
        </div>
      </div>
    </div>
  );
};
