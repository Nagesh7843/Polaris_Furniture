import React from 'react';

export const MinimalFooter: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-pitch)',
        borderTop: '1px solid var(--color-bronze-border-subtle)',
        padding: '2.5rem 3rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: 'var(--color-stone-dark)',
        letterSpacing: '0.12em'
      }}
    >
      <div>
        POLARIS INTERNATIONAL INDUSTRIES LLC © {new Date().getFullYear()}
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <span>DUBAI INVESTMENT PARK, DUBAI, UAE</span>
        <span>24.9857° N, 55.1878° E</span>
        <span>ISO 9001:2008 & CIVIL DEFENSE ACCREDITED</span>
      </div>
    </footer>
  );
};
