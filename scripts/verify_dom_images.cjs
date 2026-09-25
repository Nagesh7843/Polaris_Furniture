const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Scroll through entire page to trigger in-view elements
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < scrollHeight; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(80);
  }
  await page.waitForTimeout(500);

  // Collect all images in DOM
  const domImages = await page.evaluate(() => {
    const list = [];
    document.querySelectorAll('img').forEach(img => {
      if (img.src) list.push({ tag: 'img', src: img.src });
    });
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('assets/')) {
        list.push({ tag: 'bg', src: bg });
      }
    });
    return list;
  });

  const counts = {};
  for (const item of domImages) {
    const cleanUrl = item.src.replace(/^.*\/assets\//, '/assets/').replace(/[\\\"')]+$/, '');
    counts[cleanUrl] = (counts[cleanUrl] || 0) + 1;
  }

  console.log('Total images currently in DOM:', Object.keys(counts).length);
  for (const [url, count] of Object.entries(counts)) {
    console.log(`- ${url} (count: ${count})`);
  }

  const dupes = Object.entries(counts).filter(([url, count]) => count > 1);
  console.log('\nDUPLICATE IMAGES IN DOM:', dupes.length);
  if (dupes.length > 0) {
    console.log(dupes);
  }

  await browser.close();
})();
