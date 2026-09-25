import React from 'react';

export const CompanyIntroduction: React.FC = () => {
  const metrics = [
    { value: "45,000+", unit: "SQ. FT.", label: "Integrated Manufacturing Plant", sublabel: "Dubai Investment Park, UAE" },
    { value: "04", unit: "OFFICES", label: "Strategic Regional Hubs", sublabel: "Dubai · London · KSA · India" },
    { value: "100%", unit: "TURNKEY", label: "In-House Wood, Metal & Glass", sublabel: "Single-source accountability" },
    { value: "FD120", unit: "CERTIFIED", label: "Fire-Rated Door Assemblies", sublabel: "Civil Defense & ISO 9001:2008" }
  ];

  return (
    <section
      id="vision"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-charcoal-dark)',
        position: 'relative',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        borderBottom: '1px solid var(--color-bronze-border-subtle)'
      }}
    >
      <div className="container">
        {/* Architectural Section Header */}
        <div style={{ maxWidth: '980px', marginBottom: '5rem' }}>
          <div className="arch-label">ABOUT POLARIS INTERNATIONAL</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-editorial)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              lineHeight: 1.15,
              fontWeight: 400,
              color: 'var(--color-ivory)',
              marginBottom: '2rem'
            }}
          >
            “We believe we are diametrically different predominantly because{' '}
            <span style={{ color: 'var(--color-bronze)', fontStyle: 'italic' }}>
              we don’t do different things; we do them differently, our way.
            </span>”
          </h2>
          <div className="hairline-divider-solid" style={{ marginBottom: '2.5rem' }} />
        </div>

        {/* Editorial Two-Column Architectural Storytelling */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
            marginBottom: '6rem'
          }}
        >
          {/* Column 1: Core Mission & Industrial Philosophy */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              INTEGRATED INDUSTRIAL SCALE // DUBAI
            </span>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: 'var(--color-ivory-muted)',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 300
              }}
            >
              Polaris International Industries LLC is an integrated industrial establishment located in
              Dubai Investment Park, founded with the express mission of providing superlative
              manufacturing services across the bespoke furniture and interior fit-out sector.
            </p>
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.85,
                color: 'var(--color-stone)',
                marginBottom: '1.5rem'
              }}
            >
              Primarily catering to master developers, international operators, and royal residential
              clients within the Gulf Co-operation Council (GCC), we regularly execute and deliver turnkey
              joinery programs for discerning projects across London, Africa, and the Indian Ocean.
            </p>
          </div>

          {/* Column 2: Manufacturing Mastery & Single-Source Accountability */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                color: 'var(--color-bronze)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              CRAFT & DESIGN SUPPORT // ZERO COMPROMISE
            </span>
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.85,
                color: 'var(--color-stone)',
                marginBottom: '1.5rem'
              }}
            >
              Our manufacturing facilities are fitted out with multi-purpose European machinery that
              caters to the custom fabrication of premium furniture and fit-out for 5-star hotels, luxury
              penthouses, corporate headquarters, and high-end retail shop-fitting.
            </p>
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.85,
                color: 'var(--color-stone)',
                marginBottom: '2rem'
              }}
            >
              Though Polaris prides itself on its robust manufacturing abilities, we also offer complete
              architectural design support and shop-drawing engineering as an in-house offering. Every
              client is our foremost brand ambassador.
            </p>

            {/* Direct Quote Box */}
            <div
              style={{
                borderLeft: '2px solid var(--color-bronze)',
                paddingLeft: '1.5rem',
                backgroundColor: 'rgba(191, 160, 122, 0.04)',
                paddingTop: '1rem',
                paddingBottom: '1rem'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif-editorial)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--color-ivory)',
                  marginBottom: '0.35rem'
                }}
              >
                “Commercial success follows as a natural consequence of whole-hearted endeavors.”
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-stone-dark)'
                }}
              >
                POLARIS GOVERNING PRINCIPLE
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Metrics Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
            backgroundColor: 'var(--color-bronze-border-subtle)',
            border: '1px solid var(--color-bronze-border-subtle)'
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-obsidian)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-charcoal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-obsidian)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    color: 'var(--color-bronze-light)',
                    lineHeight: 1
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-bronze)',
                    letterSpacing: '0.1em'
                  }}
                >
                  {m.unit}
                </span>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--color-ivory)',
                    marginBottom: '0.25rem'
                  }}
                >
                  {m.label}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-stone-dark)',
                    letterSpacing: '0.05em'
                  }}
                >
                  {m.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
