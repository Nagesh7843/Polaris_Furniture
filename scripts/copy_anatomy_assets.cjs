const fs = require('fs');

fs.copyFileSync(
  'C:/Users/Nagesh/.gemini/antigravity-ide/brain/11878f3a-7273-4ce7-86ae-b62dab7aa7b6/anatomy_assembled_1790280126570.jpg',
  'public/assets/anatomy_page_assembled_credenza.jpg'
);
fs.copyFileSync(
  'C:/Users/Nagesh/.gemini/antigravity-ide/brain/11878f3a-7273-4ce7-86ae-b62dab7aa7b6/anatomy_exploded_1790280145144.jpg',
  'public/assets/anatomy_page_exploded_diagram.jpg'
);
console.log('Copied anatomy assets successfully.');
