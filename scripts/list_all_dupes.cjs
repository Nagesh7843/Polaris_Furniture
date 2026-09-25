const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        results = results.concat(getFiles(full));
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(full);
    }
  });
  return results;
}

const files = getFiles('src');
const usage = {};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    const re = /['"](\/(?:assets|public\/assets)\/[^'"\s]+\.(?:jpeg|jpg|png|webp))['"]/g;
    let match;
    while ((match = re.exec(line)) !== null) {
      const img = match[1];
      if (!usage[img]) usage[img] = [];
      usage[img].push({ file: path.relative('.', file).replace(/\\/g, '/'), line: idx + 1, text: line.trim() });
    }
  });
}

const dupes = Object.entries(usage).filter(([img, list]) => list.length > 1);
console.log('Total duplicated images in whole src:', dupes.length);
dupes.forEach(([img, list]) => {
  console.log('\nIMAGE (' + list.length + ' times): ' + img);
  list.forEach(item => console.log('  ' + item.file + ':' + item.line + ' -> ' + item.text));
});
