import { chromium } from 'playwright';
import path from 'path';

const outDir = path.resolve('public/screenshots');

async function testDualPhotos() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Scroll to Materials section
  console.log('Capturing updated Materials section with dual photos...');
  await page.evaluate(() => {
    document.getElementById('materials')?.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'verified_materials_dual_photos.png') });
  console.log('Captured verified_materials_dual_photos.png');

  // Also capture top with Navbar
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, 'verified_navbar_top.png') });
  console.log('Captured verified_navbar_top.png');

  await browser.close();
  console.log('Done!');
}

testDualPhotos().catch((err) => {
  console.error('Error in testDualPhotos:', err);
  process.exit(1);
});
