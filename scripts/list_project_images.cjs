const fs = require('fs');

const content = fs.readFileSync('src/data/polarisData.ts', 'utf8');

// Match project objects
const regex = /\{\s*id:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?category:\s*["']([^"']+)["'][\s\S]*?featuredImage:\s*["']([^"']+)["'][\s\S]*?gallery:\s*\[([\s\S]*?)\]/g;

let match;
while ((match = regex.exec(content)) !== null) {
  const [, id, title, category, featuredImage, galleryStr] = match;
  const gallery = (galleryStr.match(/["'](\/assets\/[^"']+)["']/g) || []).map(s => s.replace(/["']/g, ''));
  console.log(`\n[${category.toUpperCase()}] ${title} (${id})`);
  console.log(`  Featured: ${featuredImage}`);
  console.log(`  Gallery:  ${gallery.join(', ')}`);
}
