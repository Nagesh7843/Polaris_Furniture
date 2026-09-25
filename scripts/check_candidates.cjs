const fs = require('fs');
const path = require('path');

const list = [
  'page_055_img_1_1124x793.jpeg',
  'page_057_img_2_1123x794.jpeg',
  'page_062_img_2_1121x730.jpeg',
  'page_063_img_1_1124x794.jpeg',
  'page_067_img_1_1124x794.jpeg',
  'page_074_img_3_876x1524.jpeg',
  'page_077_img_3_1336x893.jpeg',
  'page_080_img_3_1336x890.jpeg',
  'page_080_img_5_1336x893.jpeg',
  'page_081_img_4_953x2038.jpeg',
  'page_084_img_4_1116x758.jpeg',
  'page_084_img_5_1116x766.jpeg',
  'page_087_img_1_1124x793.jpeg',
  'page_091_img_5_1280x853.jpeg',
  'page_094_img_4_1200x800.jpeg'
];

list.forEach(f => {
  const p = path.join('public/assets', f);
  if (fs.existsSync(p)) {
    const s = fs.statSync(p);
    console.log(f, (s.size/1024).toFixed(1) + 'KB');
  }
});
