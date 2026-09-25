const fs = require('fs');
const files = fs.readdirSync('public/assets');

// Read all src files to know what is currently used
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
const path = require('path');
const srcFiles = getSrcFiles('src');
let allSrcText = '';
srcFiles.forEach(f => { allSrcText += fs.readFileSync(f, 'utf8') + '\n'; });

const isUnused = (f) => !allSrcText.includes(f);

console.log("Unused joinery/materials pages (020-035):");
console.log(files.filter(f => /page_02[0-9]|page_03[0-5]/.test(f) && isUnused(f)));

console.log("\nUnused factory/machinery pages (050-065):");
console.log(files.filter(f => /page_05[0-9]|page_06[0-5]/.test(f) && isUnused(f)));

console.log("\nUnused hospitality/villas pages (070-101):");
console.log(files.filter(f => /page_07[0-9]|page_08[0-9]|page_09[0-9]|page_10[0-1]/.test(f) && isUnused(f)));
