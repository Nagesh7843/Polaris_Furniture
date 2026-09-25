const fs = require('fs');
const path = require('path');

function getSrcFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        results = results.concat(getSrcFiles(full));
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(full);
    }
  });
  return results;
}

const srcFiles = getSrcFiles('src');
let allSrcText = '';
srcFiles.forEach(f => { allSrcText += fs.readFileSync(f, 'utf8') + '\n'; });

const assetFiles = fs.readdirSync('public/assets');
console.log('Total files in public/assets:', assetFiles.length);

const unused = [];
const used = [];
assetFiles.forEach(f => {
  if (allSrcText.includes(f)) {
    used.push(f);
  } else {
    unused.push(f);
  }
});

console.log('Used assets count:', used.length);
console.log('Unused assets count:', unused.length);

console.log('\nUnused assets:');
unused.forEach(u => console.log(u));
