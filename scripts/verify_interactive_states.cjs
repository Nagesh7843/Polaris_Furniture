const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const seenImages = new Set();
  const duplicateAlerts = [];

  function registerImage(src, context) {
    if (!src || !src.includes('/assets/')) return;
    const clean = src.replace(/^.*\/assets\//, '/assets/').replace(/[\\\"')]+$/, '');
    if (seenImages.has(clean)) {
      duplicateAlerts.push({ image: clean, context });
    } else {
      seenImages.add(clean);
    }
  }

  // Check all images in Materials tabs
  const materialButtons = await page.$$('button:has-text("SOLID WOOD"), button:has-text("ARCHITECTURAL VENEER"), button:has-text("SPECIALIZED METALS"), button:has-text("DECORATIVE GLASS"), button:has-text("SOFT FURNISHINGS")');
  console.log(`Found ${materialButtons.length} material buttons`);
  for (const btn of materialButtons) {
    await btn.click();
    await page.waitForTimeout(400);
    const imgs = await page.$$eval('#materials img', els => els.map(e => e.src));
    imgs.forEach(src => registerImage(src, 'MaterialsSection'));
  }

  // Check Factory stages
  const factoryStageButtons = await page.$$('#factory button');
  console.log(`Found ${factoryStageButtons.length} factory buttons`);
  for (const btn of factoryStageButtons) {
    await btn.click();
    await page.waitForTimeout(400);
    const imgs = await page.$$eval('#factory img', els => els.map(e => e.src));
    imgs.forEach(src => registerImage(src, 'FactoryFilmSection'));
  }

  // Check Object to Space toggle
  const toggleBtn = await page.$('#object-to-space div[style*="cursor: pointer"]');
  if (toggleBtn) {
    await toggleBtn.click();
    await page.waitForTimeout(500);
    const imgs = await page.$$eval('#object-to-space img', els => els.map(e => e.src));
    imgs.forEach(src => registerImage(src, 'FurnitureToSpace (toggled)'));
    await toggleBtn.click();
    await page.waitForTimeout(500);
  }

  // Check Projects next clicks
  const nextBtn = await page.$('#projects button:has(svg)');
  if (nextBtn) {
    for (let i = 0; i < 5; i++) {
      const imgs = await page.$$eval('#projects img', els => els.map(e => e.src));
      imgs.forEach(src => registerImage(src, `ProjectsCarousel slide ${i}`));
      await nextBtn.click();
      await page.waitForTimeout(400);
    }
  }

  // Check Final CTA bg
  const ctaBg = await page.$eval('#contact div[style*="background-image"]', el => window.getComputedStyle(el).backgroundImage);
  registerImage(ctaBg, 'FinalCtaFilm');

  console.log('\n--- TOTAL UNIQUE IMAGES ACROSS ALL INTERACTIVE STATES ---');
  console.log(`Unique images registered: ${seenImages.size}`);
  for (const img of Array.from(seenImages)) {
    console.log(`  ✓ ${img}`);
  }

  console.log('\n--- DUPLICATE ALERTS ---');
  console.log(`Total duplicate detections: ${duplicateAlerts.length}`);
  if (duplicateAlerts.length > 0) {
    console.log(duplicateAlerts);
  }

  await browser.close();
})();
