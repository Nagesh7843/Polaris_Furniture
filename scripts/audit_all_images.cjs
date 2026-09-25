const fs = require('fs');
const path = require('path');

const usedImages = [];

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (/\.(tsx?|jsx?|css)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/['"](\/(?:assets\/[^\s'"]+|[^\s'"]+\.(?:jpg|jpeg|png|webp|svg)))['"]/g) || [];
      for (const m of matches) {
        const clean = m.replace(/['"]/g, '');
        if (/\.(jpg|jpeg|png|webp|svg)$/i.test(clean)) {
          usedImages.push({ file: full.replace(/\\/g, '/'), img: clean });
        }
      }
    }
  }
}

walk('src');

const notFound = [];
const uniqueMap = new Map();

for (const item of usedImages) {
  const diskPath = path.join('public', item.img);
  const exists = fs.existsSync(diskPath);
  if (!exists) {
    notFound.push({ ...item, diskPath });
  }
  if (!uniqueMap.has(item.img)) {
    uniqueMap.set(item.img, { exists, files: [item.file] });
  } else {
    uniqueMap.get(item.img).files.push(item.file);
  }
}

console.log('--- MISSING IMAGES (404) ---');
if (notFound.length === 0) {
  console.log('NONE! All referenced image paths exist on disk.');
} else {
  notFound.forEach(nf => console.log('MISSING:', nf.img, 'in', nf.file));
}

console.log('\n--- ALL UNIQUE IMAGES IN USE (' + uniqueMap.size + ') ---');
for (const [img, data] of uniqueMap.entries()) {
  const shortFiles = data.files.map(f => f.split('src/')[1]).join(', ');
  console.log(`${img} -> [${shortFiles}]`);
}
