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
let allSrc = '';
srcFiles.forEach(f => { allSrc += fs.readFileSync(f, 'utf8') + '\n'; });

const chosen = [
  'page_073_img_5_1113x730.jpeg',
  'page_038_img_2_1206x1640.jpeg',
  'page_075_img_4_987x554.jpeg',
  'page_040_img_2_1219x1637.png'
];

chosen.forEach(img => {
  console.log(img, allSrc.includes(img) ? 'USED' : 'AVAILABLE (100% UNIQUE)');
});
