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

const allAssets = fs.readdirSync('public/assets');

const unusedAssets = allAssets.filter(f => !allSrcText.includes(f));
console.log('Unused assets total:', unusedAssets.length);

const interesting = unusedAssets.filter(f => 
  f.startsWith('page_02') || 
  f.startsWith('page_03') || 
  f.startsWith('page_05') || 
  f.startsWith('page_06') || 
  f.startsWith('page_07') ||
  f.startsWith('page_08') ||
  f.startsWith('page_09') ||
  f.startsWith('page_10')
);

console.log('First 40 interesting unused assets:');
console.log(interesting.slice(0, 40));
