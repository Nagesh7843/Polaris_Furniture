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
  'page_033_img_1_1124x794.jpeg',
  'page_034_img_1_1124x794.jpeg',
  'page_035_img_1_1124x794.jpeg',
  'page_036_img_1_1124x794.jpeg',
  'page_037_img_1_1124x794.jpeg',
  'page_038_img_1_1124x794.jpeg',
  'page_033_img_2_1536x864.png',
  'page_034_img_2_1536x864.png',
  'page_035_img_2_1536x864.png',
  'page_036_img_4_1536x864.png'
];

candidates.forEach(img => {
  console.log(img, allSrc.includes(img) ? 'USED' : 'AVAILABLE');
});
