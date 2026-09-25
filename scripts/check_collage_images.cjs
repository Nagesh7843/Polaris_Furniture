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

const candidates = [
  'page_037_img_2_1203x1637.jpeg',
  'page_038_img_2_1206x1640.jpeg',
  'page_039_img_2_1211x1637.jpeg',
  'page_040_img_2_1219x1637.png',
  'page_041_img_2_1204x1637.png',
  'page_042_img_2_1204x1637.jpeg',
  'page_043_img_2_1202x1634.jpeg',
  'page_044_img_2_1219x1634.jpeg',
  'page_045_img_2_1221x1637.jpeg',
  'page_046_img_2_1207x1637.png'
];

candidates.forEach(img => {
  console.log(img, allSrc.includes(img) ? 'USED' : 'AVAILABLE');
});
