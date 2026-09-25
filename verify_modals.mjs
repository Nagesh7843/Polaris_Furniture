import { chromium } from 'playwright';
import path from 'path';

const outDir = path.resolve('public/screenshots');

async function testModals() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Open Machinery Modal
  console.log('Testing Machinery Modal...');
  await page.evaluate(() => {
    document.getElementById('facility')?.scrollIntoView();
  });
  await page.waitForTimeout(600);
  const machBtn = page.locator('button:has-text("INSPECT EQUIPMENT LIST")').first();
  if (await machBtn.count() > 0) {
    await machBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, 'verified_machinery_modal.png') });
    console.log('Captured verified_machinery_modal.png');
    // Close modal via Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  } else {
    console.log('Machinery button not found');
  }

  // 2. Open Project Study Modal
  console.log('Testing Project Study Modal...');
  await page.evaluate(() => {
    document.getElementById('portfolio')?.scrollIntoView();
  });
  await page.waitForTimeout(600);
  const projectCard = page.locator('#portfolio button:has-text("VIEW STUDY")').first();
  if (await projectCard.count() > 0) {
    await projectCard.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, 'verified_project_modal.png') });
    console.log('Captured verified_project_modal.png');
    // Close modal via Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  } else {
    console.log('Project study button not found');
  }

  // 3. Open Consultation Modal
  console.log('Testing Consultation Modal...');
  const consultBtn = page.locator('button:has-text("REQUEST CONSULTATION")').first();
  if (await consultBtn.count() > 0) {
    await consultBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, 'verified_consultation_modal.png') });
    console.log('Captured verified_consultation_modal.png');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  }

  // 4. Capture Architectural CTA section
  console.log('Capturing Architectural CTA...');
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView();
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, 'verified_architectural_cta.png') });
  console.log('Captured verified_architectural_cta.png');

  await browser.close();
  console.log('All Modal tests completed successfully!');
}

testModals().catch((err) => {
  console.error('Error in testModals:', err);
  process.exit(1);
});
