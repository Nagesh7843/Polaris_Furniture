const fs = require('fs');

// Check polarisData.ts to see what projects or data are already using images
const polarisData = fs.readFileSync('src/data/polarisData.ts', 'utf8');

// List candidate images from 020 to 035
const candidates = [
  'page_020_img_3_1536x864.png',
  'page_024_img_2_1536x864.png',
  'page_025_img_2_1536x864.png',
  'page_026_img_2_1536x864.png',
  'page_027_img_2_1536x864.png',
  'page_028_img_2_1536x864.png',
  'page_029_img_1_1124x794.jpeg',
  'page_030_img_1_1124x794.jpeg',
  'page_030_img_2_1536x864.png',
  'page_031_img_1_1124x794.jpeg',
  'page_032_img_1_1124x794.jpeg',
  'page_033_img_1_1124x794.jpeg',
  'page_034_img_1_1124x794.jpeg',
  'page_035_img_1_1124x794.jpeg',
  'page_058_img_5_1440x960.jpeg',
  'page_059_img_3_1440x730.jpeg',
  'page_072_img_4_1280x853.jpeg',
  'page_072_img_5_1280x853.jpeg',
  'page_073_img_3_569x372.jpeg',
  'page_073_img_5_1113x730.jpeg'
];

candidates.forEach(c => {
  const inData = polarisData.includes(c);
  console.log(c, inData ? 'USED IN POLARIS_DATA' : 'AVAILABLE (UNUSED)');
});
