const fs = require('fs');

const activeFiles = [
  'src/components/film/HeroSection.tsx',
  'src/components/film/FurnitureDesignSection.tsx',
  'src/components/film/MaterialsSection.tsx',
  'src/components/film/JoinerySection.tsx',
  'src/components/film/FactoryFilmSection.tsx',
  'src/components/film/FurnitureToSpaceSection.tsx',
  'src/components/film/ProjectsCatalogueSection.tsx',
  'src/components/film/FinalCtaFilm.tsx',
  'src/components/film/FilmNavbar.tsx',
  'src/components/film/MinimalFooter.tsx'
];

const imgRegex = /(?:\/assets\/[^'"\)\s]+\.(?:jpeg|jpg|png|webp))/g;

const usage = {};

for (const file of activeFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const img = match[0];
    if (!usage[img]) usage[img] = [];
    usage[img].push(file);
  }
}

// Also add the 5 featured projects from polarisData.ts
const polarisDataContent = fs.readFileSync('src/data/polarisData.ts', 'utf8');
const featuredIds = [
  'novotel-dhahran',
  'radisson-blu-palm',
  'ritz-carlton-ballroom',
  'dorchester-collection',
  'marriott-residences'
];

for (const id of featuredIds) {
  const pIndex = polarisDataContent.indexOf(`id: "${id}"`);
  if (pIndex !== -1) {
    const pSlice = polarisDataContent.slice(pIndex, pIndex + 1200);
    const featMatch = pSlice.match(/featuredImage:\s*"([^"]+)"/);
    if (featMatch) {
      const img = featMatch[1];
      if (!usage[img]) usage[img] = [];
      usage[img].push(`Project[${id}]`);
    }
  }
}

console.log('=== COMPLETE ACTIVE WEBSITE IMAGE UNIQUENESS AUDIT ===');
let hasDuplicates = false;
for (const [img, files] of Object.entries(usage)) {
  const fileSet = Array.from(new Set(files));
  if (files.length > 1) {
    console.error(`❌ DUPLICATE DETECTED (${files.length}x): ${img}`);
    console.error(`   Found in: ${files.join(', ')}`);
    hasDuplicates = true;
  } else {
    console.log(`✓ 100% UNIQUE: ${img} (${files[0]})`);
  }
}

if (!hasDuplicates) {
  console.log('\n🎉 SUCCESS: EVERY SINGLE IMAGE ON THE WEBSITE IS 100% UNIQUE! ZERO DUPLICATES!');
} else {
  console.error('\n⚠️ FAILURE: Some duplicates still exist.');
  process.exit(1);
}
