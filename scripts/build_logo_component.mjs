import fs from 'fs';

const svg = fs.readFileSync('public/assets/polaris_logo_code.svg', 'utf8');

// Extract paths from polaris_logo_code.svg
const pMatch = svg.match(/<!-- Architectural Sculptural P Mark -->\s*<path\s*d="([^"]+)"/);
const textMatch = svg.match(/<!-- POLARIS Monumental Luxury Wordmark -->\s*<path\s*d="([^"]+)"/);
const triMatch = svg.match(/<!-- Signature Bronze Triangular Accent inside A -->\s*<path\s*d="([^"]+)"/);
const subMatch = svg.match(/<!-- INTERNATIONAL INDUSTRIES & Hairline Rule Accents -->\s*<path\s*d="([^"]+)"/);

const pPath = pMatch ? pMatch[1] : '';
const textPath = textMatch ? textMatch[1] : '';
const triPath = triMatch ? triMatch[1] : '';
const subPath = subMatch ? subMatch[1] : '';

const tsxContent = `import React from 'react';

interface PolarisLogoProps {
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const PolarisLogo: React.FC<PolarisLogoProps> = ({
  height = 54,
  className = '',
  style = {}
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 765 200"
      height={height}
      style={{
        width: 'auto',
        maxHeight: '100%',
        display: 'block',
        overflow: 'visible',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease',
        filter: 'drop-shadow(0 2px 12px rgba(0, 0, 0, 0.6))',
        ...style
      }}
      className={className}
      role="img"
      aria-label="Polaris International Industries"
    >
      <defs>
        {/* Rich Golden Timber / Architectural Bronze Gradient for the Sculptural P */}
        <linearGradient id="polarisPBrandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6BC80" />
          <stop offset="25%" stopColor="#C89D65" />
          <stop offset="60%" stopColor="#9C7342" />
          <stop offset="100%" stopColor="#6E4D27" />
        </linearGradient>

        {/* Shimmering Metallic Bronze for Signature A Triangle and Rules */}
        <linearGradient id="polarisBronzeAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BFA07A" />
          <stop offset="50%" stopColor="#E2C49F" />
          <stop offset="100%" stopColor="#BFA07A" />
        </linearGradient>
      </defs>

      {/* 1. Sculptural Ribbon & Faceted P Emblem */}
      <path
        d="${pPath}"
        fill="url(#polarisPBrandGradient)"
        fillRule="evenodd"
      />

      {/* 2. POLARIS Monumental Luxury Wordmark in Pristine Architectural Ivory */}
      <path
        d="${textPath}"
        fill="#F7F5F0"
        fillRule="evenodd"
      />

      {/* 3. Signature Bronze Triangular Inlay inside the letter A */}
      <path
        d="${triPath}"
        fill="url(#polarisBronzeAccent)"
        fillRule="evenodd"
      />

      {/* 4. INTERNATIONAL INDUSTRIES & Flanking Architectural Hairline Rules */}
      <path
        d="${subPath}"
        fill="#C5A059"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default PolarisLogo;
`;

fs.writeFileSync('src/components/film/PolarisLogo.tsx', tsxContent, 'utf8');
console.log('Successfully created src/components/film/PolarisLogo.tsx with vector paths!');
