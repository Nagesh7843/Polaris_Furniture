const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/Nagesh/.gemini/antigravity-ide/brain/11878f3a-7273-4ce7-86ae-b62dab7aa7b6';

function findRecentFiles(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const full = path.join(dir, file);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          results = results.concat(findRecentFiles(full));
        } else if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
          results.push({ path: full, name: file, mtime: stat.mtime, size: stat.size });
        }
      } catch (e) {}
    });
  } catch (e) {}
  return results;
}

const files = findRecentFiles(brainDir);
files.sort((a, b) => b.mtime - a.mtime);
console.log('Most recent 10 images in brain dir:');
files.slice(0, 10).forEach(f => {
  console.log(`${f.mtime.toISOString()} - ${f.size}B - ${f.path}`);
});
