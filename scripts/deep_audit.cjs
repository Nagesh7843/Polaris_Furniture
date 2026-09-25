const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('d:/Polaris_Furniture/src');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(full));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const allFiles = getFiles(srcDir);
const imgRegex = /['"](\/(?:assets|public\/assets)\/[^'"]+\.(?:jpeg|jpg|png|webp))['"]/g;

const usage = {};

for (const file of allFiles) {
  const relFile = path.relative(srcDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const img = match[1];
    if (!usage[img]) usage[img] = [];
    usage[img].push(relFile);
  }
}

console.log('Total unique images in entire src/:', Object.keys(usage).length);
const duplicates = [];
for (const [img, list] of Object.entries(usage)) {
  // If in same file multiple times, or across multiple files
  const uniqueFiles = Array.from(new Set(list));
  if (list.length > 1) {
    duplicates.push({ img, totalOccurrences: list.length, files: uniqueFiles, allOccurrences: list });
  }
}

console.log('Total duplicated image paths:', duplicates.length);
console.log(JSON.stringify(duplicates, null, 2));
