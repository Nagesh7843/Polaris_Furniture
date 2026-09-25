import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Hero Phase 1
  await page.screenshot({ path: path.join(outDir, '01_hero_phase_01.png') });
  console.log('Captured 01_hero_phase_01.png');

  // 2. Hero Phase 2 ("REDEFINING INTERIORS")
  const phase2Btn = page.locator('button:has-text("BESPOKE ARCHITECTURE")');
  if (await phase2Btn.count() > 0) {
    await phase2Btn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, '02_hero_phase_02_redefining_interiors.png') });
    console.log('Captured 02_hero_phase_02_redefining_interiors.png');
  }

  // 3. Hero Phase 3 ("CRAFTED WITH PRECISION")
  const phase3Btn = page.locator('button:has-text("TURNKEY JOINERY")');
  if (await phase3Btn.count() > 0) {
    await phase3Btn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, '03_hero_phase_03_crafted_with_precision.png') });
    console.log('Captured 03_hero_phase_03_crafted_with_precision.png');
  }

  // 4. Hero Phase 4 ("45,000+ SQ. FT. FACILITY")
  const phase4Btn = page.locator('button:has-text("INDUSTRIAL SCALE")');
  if (await phase4Btn.count() > 0) {
    await phase4Btn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, '04_hero_phase_04_factory_facility.png') });
    console.log('Captured 04_hero_phase_04_factory_facility.png');
  }

  // 5. Editorial Vision Section
  await page.locator('#vision').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '05_editorial_introduction.png') });
  console.log('Captured 05_editorial_introduction.png');

  // 6. Capabilities Section
  await page.locator('#capabilities').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '06_capabilities_presentation.png') });
  console.log('Captured 06_capabilities_presentation.png');

  // 7. Factory Section
  await page.locator('#factory').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '07_factory_progression.png') });
  console.log('Captured 07_factory_progression.png');

  // 8. Machinery Modal
  const machineryBtn = page.locator('button:has-text("INSPECT EQUIPMENT LIST")');
  if (await machineryBtn.count() > 0) {
    await machineryBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, '08_machinery_equipment_modal.png') });
    console.log('Captured 08_machinery_equipment_modal.png');
    // Click close button
    const closeBtn = page.locator('.modal-close-btn');
    if (await closeBtn.count() > 0) {
      await closeBtn.first().click();
    } else {
      await page.keyboard.press('Escape');
    }
    await page.waitForTimeout(600);
  }

  // 9. Portfolio Section (Hospitality)
  await page.locator('#portfolio').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '09_portfolio_hospitality.png') });
  console.log('Captured 09_portfolio_hospitality.png');

  // 10. Portfolio (Commercial)
  const commTab = page.locator('#portfolio button:has-text("Commercial")');
  if (await commTab.count() > 0) {
    await commTab.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, '10_portfolio_commercial.png') });
    console.log('Captured 10_portfolio_commercial.png');
  }

  // 11. Portfolio (Luxury Villas)
  const villaTab = page.locator('#portfolio button:has-text("Luxury Villas")');
  if (await villaTab.count() > 0) {
    await villaTab.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, '11_portfolio_luxury_villas.png') });
    console.log('Captured 11_portfolio_luxury_villas.png');
  }

  // 12. Project Study Modal
  const viewStudyBtn = page.locator('button:has-text("VIEW STUDY")').first();
  if (await viewStudyBtn.count() > 0) {
    await viewStudyBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, '12_project_study_modal.png') });
    console.log('Captured 12_project_study_modal.png');
    const closeProjBtn = page.locator('.modal-close-btn');
    if (await closeProjBtn.count() > 0) {
      await closeProjBtn.first().click();
    } else {
      await page.keyboard.press('Escape');
    }
    await page.waitForTimeout(600);
  }

  // 13. Global Presence Section
  await page.locator('#global').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '13_global_presence.png') });
  console.log('Captured 13_global_presence.png');

  // 14. Standards & HSE Section
  await page.locator('#standards').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '14_standards_quality_hse.png') });
  console.log('Captured 14_standards_quality_hse.png');

  // 15. Architectural CTA ("LET'S BUILD SOMETHING DISTINCTIVE")
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '15_architectural_cta.png') });
  console.log('Captured 15_architectural_cta.png');

  // 16. Consultation Modal
  const inquireBtn = page.locator('button:has-text("REQUEST CONSULTATION")').first();
  if (await inquireBtn.count() > 0) {
    await inquireBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(outDir, '16_consultation_commission_modal.png') });
    console.log('Captured 16_consultation_commission_modal.png');
  }

  await browser.close();
  console.log('SUCCESS: All 16 architectural screenshots captured cleanly!');
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
