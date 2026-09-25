const fs = require('fs');
const path = require('path');

const files = [
  'src/components/film/HeroSection.tsx',
  'src/components/film/FurnitureDesignSection.tsx',
  'src/components/film/MaterialsSection.tsx',
  'src/components/film/JoinerySection.tsx',
  'src/components/film/FactoryFilmSection.tsx',
  'src/components/film/FurnitureToSpaceSection.tsx',
  'src/components/film/ProjectsCatalogueSection.tsx',
  'src/components/film/FinalCtaFilm.tsx',
  'src/components/film/FilmNavbar.tsx',
  'src/components/film/MinimalFooter.tsx',
  'src/components/ProjectModal.tsx',
  'src/components/MachineryModal.tsx',
  'src/components/ConsultationModal.tsx'
];

const imgRegex = /['"](\/(?:assets|public\/assets)\/[^'"]+\.(?:jpeg|jpg|png|webp))['"]/g;

const usage = {};

for (const file of files) {
  const fullPath = path.resolve('d:/Polaris_Furniture', file);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const img = match[1];
    if (!usage[img]) usage[img] = [];
    usage[img].push(file);
  }
}

console.log('--- ALL IMAGES IN ACTIVE FILM COMPONENTS ---');
const duplicates = [];
for (const [img, list] of Object.entries(usage)) {
  if (list.length > 1) {
    duplicates.push({ img, count: list.length, files: list });
  } else {
    console.log(`UNIQUE: ${img} (${list[0]})`);
  }
}

console.log('\n--- DUPLICATES (' + duplicates.length + ') ---');
for (const d of duplicates) {
  console.log(`DUPLICATE [${d.count}x]: ${d.img}`);
  console.log('  Found in:', d.files.join(', '));
}

// Also check all available images in public/assets to see what replacements we have
const assetsDir = path.resolve('d:/Polaris_Furniture/public/assets');
if (fs.existsSync(assetsDir)) {
  const allAssets = fs.readdirSync(assetsDir);
  console.log('\nTotal available assets in public/assets:', allAssets.length);
  const unused = allAssets.filter(f => !usage['/assets/' + f]);
  console.log('Total unused assets:', unused.length);
}
