import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState('Hospitality');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    timeline: '',
    scope: ''
  });

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const projectTypes = [
    'Hospitality (Hotel / Resort)',
    'Commercial HQ / Offices',
    'High Rise Residential',
    'Palatial Private Villa',
    'Certified Fire-Rated Doors',
    'Turnkey Millwork & Metal'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="arch-modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '92vh',
          backgroundColor: 'var(--color-obsidian)',
          border: '1px solid var(--color-bronze-border)',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 20,
            backgroundColor: 'rgba(10, 9, 8, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem clamp(1rem, 3vw, 2rem)',
            borderBottom: '1px solid var(--color-bronze-border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.62rem, 1.2vw, 0.72rem)',
                color: 'var(--color-bronze)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase'
              }}
            >
              PROJECT COMMISSIONING // DIP DUBAI
            </span>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em'
            }}
          >
            <span>[ ESC ]</span>
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-bronze)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: 'var(--color-bronze)'
                }}
              >
                <CheckCircle2 size={32} />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '2rem',
                  color: 'var(--color-ivory-light)',
                  marginBottom: '1rem'
                }}
              >
                CONSULTATION TRANSMITTED
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--color-stone)',
                  maxWidth: '520px',
                  margin: '0 auto 2rem auto'
                }}
              >
                Thank you for reaching out to Polaris International Industries LLC. Our technical engineering
                and estimating division in Dubai Investment Park will review your tender documents and get
                in touch within 24 business hours.
              </p>

              <button
                onClick={onClose}
                className="btn-bronze"
                style={{ padding: '0.8rem 2rem' }}
              >
                RETURN TO OVERVIEW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.85rem',
                    color: 'var(--color-ivory-light)',
                    marginBottom: '0.5rem'
                  }}
                >
                  BESPOKE COMMISSION CONSULTATION
                </h3>
                <p style={{ color: 'var(--color-stone)', fontSize: '0.88rem' }}>
                  Direct engagement with Polaris International manufacturing and pre-qualification directors.
                </p>
              </div>

              {/* Project Type Selector */}
              <div style={{ marginBottom: '2rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-bronze)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem'
                  }}
                >
                  SELECT SECTOR / PROJECT TYPOLOGY *
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '8px'
                  }}
                >
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      style={{
                        padding: '10px 12px',
                        textAlign: 'left',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.05em',
                        backgroundColor: projectType === type ? 'rgba(191, 160, 122, 0.15)' : 'var(--color-charcoal-dark)',
                        border: `1px solid ${projectType === type ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                        color: projectType === type ? 'var(--color-ivory-light)' : 'var(--color-stone)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-stone-light)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Name & Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance, Lead Architect"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-charcoal-dark)',
                      border: '1px solid var(--color-bronze-border-subtle)',
                      padding: '12px 14px',
                      color: 'var(--color-ivory)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-stone-light)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. a.vance@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-charcoal-dark)',
                      border: '1px solid var(--color-bronze-border-subtle)',
                      padding: '12px 14px',
                      color: 'var(--color-ivory)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-stone-light)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Direct Telephone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 ... / +44 20 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-charcoal-dark)',
                      border: '1px solid var(--color-bronze-border-subtle)',
                      padding: '12px 14px',
                      color: 'var(--color-ivory)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-stone-light)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Site Location / Territory
                  </label>
                  <input
                    type="text"
                    placeholder="Dubai / Riyadh / London / International"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-charcoal-dark)',
                      border: '1px solid var(--color-bronze-border-subtle)',
                      padding: '12px 14px',
                      color: 'var(--color-ivory)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Scope Description */}
              <div style={{ marginBottom: '2rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-stone-light)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Scope Overview & Bill of Quantities Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline key architectural joinery requirements, timber species, fire ratings, or shop-drawing schedules..."
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--color-charcoal-dark)',
                    border: '1px solid var(--color-bronze-border-subtle)',
                    padding: '12px 14px',
                    color: 'var(--color-ivory)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-bronze"
                style={{ width: '100%', padding: '1.1rem' }}
              >
                <span>TRANSMIT COMMISSION BRIEF</span>
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
