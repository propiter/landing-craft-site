import { chromium } from "playwright";

const browser = await chromium.launch();

// Check graveyard section in detail
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1500);

  // Scroll to graveyard section
  await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    if (sections[2]) sections[2].scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const graveyardInfo = await page.evaluate(() => {
    const section = document.querySelectorAll('section')[2];
    if (!section) return null;

    // Check for background images
    const allDivs = [...section.querySelectorAll('div')];
    const bgImages = allDivs.filter(d => {
      const bg = d.style.backgroundImage || getComputedStyle(d).backgroundImage;
      return bg && bg !== 'none';
    }).map(d => ({
      bgImage: (d.style.backgroundImage || getComputedStyle(d).backgroundImage).slice(0, 80),
      className: d.className?.slice(0, 60),
      width: d.offsetWidth,
      height: d.offsetHeight,
    }));

    // Check for img tags
    const imgTags = [...section.querySelectorAll('img')].map(i => ({
      src: i.getAttribute('src'),
      loaded: i.complete,
      naturalWidth: i.naturalWidth,
    }));

    // Check for SVGs
    const svgs = [...section.querySelectorAll('svg')].map(s => ({
      class: s.getAttribute('class')?.slice(0, 60),
      width: s.clientWidth,
      height: s.clientHeight,
    }));

    // Overall section content
    return {
      sectionBg: getComputedStyle(section).backgroundColor,
      h2Text: section.querySelector('h2')?.textContent?.trim(),
      layoutColumns: section.innerHTML.includes('md:grid-cols-2') || section.innerHTML.includes('grid-cols-2'),
      hasSplitLayout: section.innerHTML.includes('50%') || section.innerHTML.includes('col-span'),
      childCount: section.children.length,
      bgImages,
      imgTags,
      svgs,
      innerHTML: section.innerHTML.slice(0, 2000),
    };
  });

  console.log("=== GRAVEYARD DETAIL ===");
  console.log(JSON.stringify(graveyardInfo, null, 2));
  await ctx.close();
}

// Check showcase page images
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/showcase", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const bgImages = [...document.querySelectorAll('div')].filter(d => {
      const bg = getComputedStyle(d).backgroundImage;
      return bg && bg !== 'none' && bg.includes('url');
    }).slice(0, 10).map(d => ({
      bgImage: getComputedStyle(d).backgroundImage.slice(0, 100),
      className: d.className?.slice(0, 60),
      width: d.offsetWidth,
      height: d.offsetHeight,
    }));

    const imgs = [...document.querySelectorAll('img')].map(i => ({
      src: i.getAttribute('src'),
      naturalWidth: i.naturalWidth,
      loaded: i.complete,
    }));

    return { bgImages, imgs, imgCount: imgs.length };
  });
  console.log("\n=== SHOWCASE IMAGES ===");
  console.log(JSON.stringify(info, null, 2));
  await ctx.close();
}

// Check mobile overflow issue
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  const overflow = await page.evaluate(() => {
    const overflowElements = [];
    const all = document.querySelectorAll('body *');
    for (const el of all) {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      if (r.right > 390 && r.width > 0) {
        const parentEl = el.parentElement;
        const parentCs = parentEl ? getComputedStyle(parentEl) : null;
        overflowElements.push({
          tag: el.tagName,
          class: el.className?.toString()?.slice(0, 60),
          right: r.right,
          width: r.width,
          parentOverflow: parentCs?.overflow,
          text: el.textContent?.trim()?.slice(0, 30),
        });
      }
      if (overflowElements.length > 20) break;
    }
    // Deduplicate by class
    const seen = new Set();
    return overflowElements.filter(e => {
      const key = e.class;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 10);
  });

  console.log("\n=== MOBILE OVERFLOW (390px) ===");
  console.log(JSON.stringify(overflow, null, 2));
  await ctx.close();
}

// Check contact-form page error state rendering
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  // Scroll to form, trigger error state
  await page.evaluate(() => {
    const formEl = document.getElementById('contact-form');
    if (formEl) formEl.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  // Click submit without filling fields to trigger validation errors
  const errorState = await page.evaluate(() => {
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (!submitBtn) {
      // Try finding the form without id
      const form = document.querySelector('form');
      if (form) {
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          // We can't trigger form submission from evaluate, just check structure
        }
      }
      return { error: 'form or submit not found' };
    }

    // Just check the form structure and error message classes
    const form = document.querySelector('form');
    return {
      submitBtnText: submitBtn.textContent?.trim(),
      formExists: !!form,
      errorClassElements: form ? [...form.querySelectorAll('[class*="error"]')].length : 0,
      formId: form?.getAttribute('id'),
    };
  });

  console.log("\n=== FORM ERROR STATE ===");
  console.log(JSON.stringify(errorState, null, 2));
  await ctx.close();
}

// Check actual page render by getting HTML of key elements
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(2000);

  // Check LCP element
  const lcp = await page.evaluate(() => {
    // LCP is typically the hero h1 or the craft line SVG
    const hero = document.querySelector('section:first-of-type');
    const h1 = hero?.querySelector('h1');
    const svg = hero?.querySelector('svg');
    return {
      h1InHero: !!h1,
      svgInHero: !!svg,
      h1Top: h1?.getBoundingClientRect().top,
      h1Size: h1 ? getComputedStyle(h1).fontSize : null,
      svgViewBox: svg?.getAttribute('viewBox'),
      potentialLCP: h1 ? 'H1 text element' : (svg ? 'SVG craft line' : 'unknown'),
    };
  });
  console.log("\n=== LCP CHECK ===");
  console.log(JSON.stringify(lcp, null, 2));
  await ctx.close();
}

// Check all footer links work by verifying content
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  const footerHtml = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    return footer?.innerHTML?.slice(0, 2000);
  });
  console.log("\n=== FOOTER HTML ===");
  console.log(footerHtml);
  await ctx.close();
}

await browser.close();
