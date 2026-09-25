const fs = require('fs');
const content = fs.readFileSync('src/data/polarisData.ts', 'utf8');

const idRegex = /id:\s*['"]([^'"]+)['"]/g;
let m;
const ids = [];
while ((m = idRegex.exec(content)) !== null) {
  ids.push(m[1]);
}

console.log('Project IDs in polarisData.ts:', ids);
