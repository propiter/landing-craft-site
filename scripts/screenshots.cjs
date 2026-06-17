const { chromium } = require('playwright');
const path = require('path');

const screenshots = [
  { html: '/tmp/ai-generic-1.html', output: '/home/piter/landing-craft/public/images/ai-graveyard/generic-1.jpg', w: 800, h: 600 },
  { html: '/tmp/ai-generic-2.html', output: '/home/piter/landing-craft/public/images/ai-graveyard/generic-2.jpg', w: 800, h: 600 },
  { html: '/tmp/ai-generic-3.html', output: '/home/piter/landing-craft/public/images/ai-graveyard/generic-3.jpg', w: 800, h: 600 },
  { html: '/tmp/ai-generic-4.html', output: '/home/piter/landing-craft/public/images/ai-graveyard/generic-4.jpg', w: 800, h: 600 },
  { html: '/tmp/landing-craft-result.html', output: '/home/piter/landing-craft/public/images/ai-graveyard/landing-craft-result.jpg', w: 800, h: 600 },
  { html: '/tmp/og-image.html', output: '/home/piter/landing-craft/public/og/og-image.png', w: 1200, h: 630 },
  { html: '/tmp/showcase-placeholder.html', output: '/home/piter/landing-craft/public/images/showcase/placeholder-landing.jpg', w: 1200, h: 800 },
];

async function run() {
  const browser = await chromium.launch();
  
  for (const shot of screenshots) {
    const context = await browser.newContext({ viewport: { width: shot.w, height: shot.h } });
    const page = await context.newPage();
    await page.goto('file://' + shot.html, { waitUntil: 'networkidle' });
    await page.screenshot({ path: shot.output, fullPage: false });
    console.log('Screenshot saved: ' + shot.output);
    await context.close();
  }

  // Favicon / app icon renders from SVG
  const iconJobs = [
    { html: '/home/piter/landing-craft/public/favicon.svg', output: '/home/piter/landing-craft/public/favicon-32.png', w: 32, h: 32 },
    { html: '/home/piter/landing-craft/public/favicon.svg', output: '/home/piter/landing-craft/public/apple-touch-icon-pre.png', w: 180, h: 180 },
  ];

  for (const job of iconJobs) {
    const context = await browser.newContext({ viewport: { width: job.w, height: job.h } });
    const page = await context.newPage();
    // Load SVG in an HTML wrapper
    const svgContent = require('fs').readFileSync(job.html, 'utf8');
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0;display:flex;align-items:center;justify-content:center;width:${job.w}px;height:${job.h}px;background:transparent">${svgContent}</body></html>`);
    await page.screenshot({ path: job.output, fullPage: false });
    console.log('Icon saved: ' + job.output);
    await context.close();
  }

  // Apple touch icon needs non-transparent background — render with bg
  {
    const context = await browser.newContext({ viewport: { width: 180, height: 180 } });
    const page = await context.newPage();
    const svgContent = require('fs').readFileSync('/home/piter/landing-craft/public/favicon.svg', 'utf8');
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0;display:flex;align-items:center;justify-content:center;width:180px;height:180px;background:#171613">${svgContent.replace('width="32" height="32"', 'width="100" height="100"')}</body></html>`);
    await page.screenshot({ path: '/home/piter/landing-craft/public/apple-touch-icon.png', fullPage: false });
    console.log('Apple touch icon saved');
    await context.close();
  }

  // PWA icons
  for (const size of [192, 512]) {
    const context = await browser.newContext({ viewport: { width: size, height: size } });
    const page = await context.newPage();
    const svgContent = require('fs').readFileSync('/home/piter/landing-craft/public/favicon.svg', 'utf8');
    const scaledSvg = svgContent.replace('width="32" height="32"', `width="${Math.round(size*0.6)}" height="${Math.round(size*0.6)}"`);
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0;display:flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;background:#171613">${scaledSvg}</body></html>`);
    await page.screenshot({ path: `/home/piter/landing-craft/public/icon-${size}.png`, fullPage: false });
    console.log(`PWA icon ${size} saved`);
    await context.close();
  }

  await browser.close();
  console.log('All screenshots done.');
}

run().catch(e => { console.error(e); process.exit(1); });
