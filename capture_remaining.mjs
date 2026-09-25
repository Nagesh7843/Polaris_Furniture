import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/screenshots');

async function capture() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 13. Global Presence
  await page.evaluate(() => {
    document.getElementById('global')?.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '13_global_presence.png') });
  console.log('Captured 13_global_presence.png');

  // 14. Standards & HSE
  await page.evaluate(() => {
    document.getElementById('standards')?.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '14_standards_quality_hse.png') });
  console.log('Captured 14_standards_quality_hse.png');

  // 15. Architectural CTA ("LET'S BUILD SOMETHING DISTINCTIVE")
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '15_architectural_cta.png') });
  console.log('Captured 15_architectural_cta.png');

  // 16. Consultation Modal
  const ctaBtn = page.locator('#contact button:has-text("REQUEST CONSULTATION")');
  if (await ctaBtn.count() > 0) {
    await ctaBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, '16_consultation_commission_modal.png') });
    console.log('Captured 16_consultation_commission_modal.png');
  }

  await browser.close();
  console.log('All remaining screenshots captured successfully!');
}

capture().catch((err) => {
  console.error('Error in capture_remaining:', err);
  process.exit(1);
});
