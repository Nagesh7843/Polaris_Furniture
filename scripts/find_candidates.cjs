const fs = require('fs');
const path = require('path');

const dir = path.resolve('d:/Polaris_Furniture/public/assets');
const all = fs.readdirSync(dir);

// Check factory pages: 018, 021, 023, 027, 030, 031
console.log('--- CANDIDATE FACTORY IMAGES ---');
const factoryCandidates = all.filter(f => f.match(/^page_0(18|21|23|27|30|31)/));
console.log(factoryCandidates);

// Check project & interior pages: 035 to 063, 090 to 101
console.log('--- CANDIDATE INTERIOR & MILLWORK IMAGES ---');
const interiorCandidates = all.filter(f => f.match(/^page_0(50|51|52|53|54|55|56|57|59|60|61|63)/));
console.log(interiorCandidates);
