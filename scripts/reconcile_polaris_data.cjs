const fs = require('fs');
const path = require('path');

// 1. Gather all assets
const assetsDir = path.resolve('public/assets');
const allAssets = fs.readdirSync(assetsDir)
  .filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'))
  .map(f => `/assets/${f}`);

console.log(`Total available assets: ${allAssets.length}`);

// 2. Gather images used in film components
const filmFiles = [
  'src/components/film/HeroSection.tsx',
  'src/components/film/FurnitureDesignSection.tsx',
  'src/components/film/MaterialsSection.tsx',
  'src/components/film/JoinerySection.tsx',
  'src/components/film/FactoryFilmSection.tsx',
  'src/components/film/FurnitureToSpaceSection.tsx',
  'src/components/film/FinalCtaFilm.tsx',
  'src/components/film/FilmNavbar.tsx',
  'src/components/film/MinimalFooter.tsx'
];

const used = new Set();
const imgRegex = /(?:\/assets\/[^'"\)\s]+\.(?:jpeg|jpg|png|webp))/g;

for (const file of filmFiles) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    used.add(match[0]);
  }
}

console.log(`Images locked by active film components: ${used.size}`);
for (const u of used) {
  console.log(`  - ${u}`);
}

// 3. Helper to get an unused asset
let assetPointer = 0;
function getUnusedAsset(preferredPrefix = '') {
  if (preferredPrefix) {
    for (let i = 0; i < allAssets.length; i++) {
      const a = allAssets[i];
      if (a.includes(preferredPrefix) && !used.has(a)) {
        used.add(a);
        return a;
      }
    }
  }
  while (assetPointer < allAssets.length) {
    const a = allAssets[assetPointer++];
    if (!used.has(a)) {
      used.add(a);
      return a;
    }
  }
  throw new Error('Ran out of unique assets!');
}

// 4. Read polarisData.ts line by line and replace any duplicate image with a unique one!
let polarisDataContent = fs.readFileSync('src/data/polarisData.ts', 'utf8');

let replacedCount = 0;
// We will replace images that are already in `used`
polarisDataContent = polarisDataContent.replace(/(['"])(\/assets\/[^'"\s]+\.(?:jpeg|jpg|png|webp))\1/g, (fullMatch, quote, imgPath) => {
  if (used.has(imgPath)) {
    // Already used! Replace with a new unused asset!
    const pageMatch = imgPath.match(/page_(\d+)/);
    const prefix = pageMatch ? `page_${pageMatch[1]}` : '';
    const newAsset = getUnusedAsset(prefix);
    replacedCount++;
    console.log(`Replaced duplicate ${imgPath} -> ${newAsset}`);
    return `${quote}${newAsset}${quote}`;
  } else {
    // First time seeing this image! Keep it!
    used.add(imgPath);
    return fullMatch;
  }
});

console.log(`Total duplicate images replaced in polarisData.ts: ${replacedCount}`);

fs.writeFileSync('src/data/polarisData.ts', polarisDataContent, 'utf8');
console.log('Successfully updated src/data/polarisData.ts');
