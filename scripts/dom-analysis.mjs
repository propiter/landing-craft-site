import { chromium } from "playwright";

const browser = await chromium.launch();

// ================ DETAILED DOM ANALYSIS ================

{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(2000);

  const analysis = await page.evaluate(() => {
    const results = {};

    // 1. HERO — structure analysis
    const hero = document.querySelector('section:first-of-type');
    if (hero) {
      const h1 = hero.querySelector('h1');
      const h1Font = h1 ? getComputedStyle(h1).fontFamily : null;
      const heroBg = hero ? getComputedStyle(hero).backgroundColor : null;
      
      results.hero = {
        h1Text: h1?.textContent?.trim(),
        h1FontFamily: h1Font?.split(',')[0],
        h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
        h1Color: h1 ? getComputedStyle(h1).color : null,
        heroBg,
        hasGradient: hero?.innerHTML?.includes('gradient'),
        hasDotGrid: hero?.innerHTML?.includes('dot-grid') || hero?.innerHTML?.includes('dotted'),
        hasGlassmorphism: hero?.innerHTML?.includes('glass') || hero?.innerHTML?.includes('backdrop-blur'),
        hasInterFont: h1Font?.includes('Inter') || h1Font?.includes('inter'),
        hasPlayfairDisplay: h1Font?.includes('Playfair Display'),
        // Check subhead
        subheadText: hero.querySelector('p:not([class*="text-sm"]):not([class*="text-xs"])')?.textContent?.trim().slice(0, 100),
        // CTA buttons
        ctaButtons: [...hero.querySelectorAll('a, button')].map(b => ({
          text: b.textContent?.trim().slice(0, 40),
          bg: getComputedStyle(b).backgroundColor,
          color: getComputedStyle(b).color,
          href: b.getAttribute('href') || '',
        })),
        // Check for craft line SVG
        hasSvg: !!hero.querySelector('svg'),
        // Check for centered layout
        usesCenteredLayout: hero.querySelector('h1')?.parentElement?.className?.includes('text-center') || false,
        // Section width
        sectionWidth: hero.clientWidth,
        sectionClass: hero.className?.slice(0, 100),
      };
    }

    // 2. ALL SECTION HEADINGS — font family check
    const headings = [...document.querySelectorAll('h1, h2, h3')];
    results.headings = headings.map(h => ({
      tag: h.tagName,
      text: h.textContent?.trim().slice(0, 60),
      fontFamily: getComputedStyle(h).fontFamily?.split(',')[0]?.replace(/"/g, ''),
      fontSize: getComputedStyle(h).fontSize,
      color: getComputedStyle(h).color,
    }));

    // 3. NAV — check
    const nav = document.querySelector('header');
    results.nav = nav ? {
      isSticky: getComputedStyle(nav).position === 'sticky',
      height: getComputedStyle(nav).height,
      bg: getComputedStyle(nav).backgroundColor,
      links: [...nav.querySelectorAll('a')].map(a => ({
        text: a.textContent?.trim(),
        href: a.getAttribute('href'),
      })),
    } : null;

    // 4. IMAGES — check loading
    const imgs = [...document.querySelectorAll('img')];
    results.images = imgs.map(img => ({
      src: img.getAttribute('src')?.slice(0, 50),
      alt: img.getAttribute('alt'),
      width: img.clientWidth,
      height: img.clientHeight,
      loading: img.getAttribute('loading'),
      complete: img.complete,
    }));

    // 5. SECTION BACKGROUND ALTERNATION
    const sections = [...document.querySelectorAll('section')];
    results.sections = sections.map((s, i) => ({
      index: i,
      bg: getComputedStyle(s).backgroundColor,
      id: s.id,
      hasSvg: !!s.querySelector('svg'),
      childCount: s.children.length,
    }));

    // 6. FORM
    const form = document.querySelector('form');
    results.form = form ? {
      action: form.getAttribute('action'),
      method: form.getAttribute('method'),
      inputs: [...form.querySelectorAll('input, textarea')].map(el => ({
        type: el.getAttribute('type') || el.tagName,
        name: el.getAttribute('name'),
        required: el.hasAttribute('required'),
        placeholder: el.getAttribute('placeholder'),
      })),
      honeypot: !!form.querySelector('[name="honeypot"]'),
      submitText: form.querySelector('button[type="submit"]')?.textContent?.trim(),
    } : null;

    // 7. FOOTER
    const footer = document.querySelector('footer');
    results.footer = footer ? {
      text: footer.textContent?.trim().slice(0, 100),
      links: [...footer.querySelectorAll('a')].map(a => ({
        text: a.textContent?.trim(),
        href: a.getAttribute('href'),
      })),
    } : null;

    // 8. SEMANTIC HTML
    results.semantic = {
      hasMain: !!document.querySelector('main'),
      hasHeader: !!document.querySelector('header'),
      hasFooter: !!document.querySelector('footer'),
      hasNav: !!document.querySelector('nav'),
      h1Count: document.querySelectorAll('h1').length,
      hasSkiplink: false, // Check for skip navigation
      cookieBanner: !!document.querySelector('[role="dialog"]'),
      analyticsScript: document.head.innerHTML.includes('gtag') || document.head.innerHTML.includes('gtm'),
    };

    // 9. Graveyard section
    const graveyard = document.querySelectorAll('section')[2];
    results.graveyard = graveyard ? {
      hasImages: !!graveyard.querySelector('img'),
      hasSplitLayout: graveyard.innerHTML.includes('50%') || graveyard.innerHTML.includes('col-span'),
      text: graveyard.textContent?.trim().slice(0, 150),
    } : null;

    return results;
  });

  console.log("=== HERO ===");
  console.log(JSON.stringify(analysis.hero, null, 2));
  console.log("\n=== HEADINGS (first 10) ===");
  console.log(JSON.stringify(analysis.headings.slice(0, 10), null, 2));
  console.log("\n=== NAV ===");
  console.log(JSON.stringify(analysis.nav, null, 2));
  console.log("\n=== IMAGES ===");
  console.log(JSON.stringify(analysis.images, null, 2));
  console.log("\n=== SECTIONS (first 8) ===");
  console.log(JSON.stringify(analysis.sections.slice(0, 8), null, 2));
  console.log("\n=== FORM ===");
  console.log(JSON.stringify(analysis.form, null, 2));
  console.log("\n=== FOOTER ===");
  console.log(JSON.stringify(analysis.footer, null, 2));
  console.log("\n=== SEMANTIC ===");
  console.log(JSON.stringify(analysis.semantic, null, 2));
  console.log("\n=== GRAVEYARD ===");
  console.log(JSON.stringify(analysis.graveyard, null, 2));

  await ctx.close();
}

// Check pricing page
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/pricing", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const cards = [...document.querySelectorAll('section > div > div')].filter(d => d.querySelector('h2') || d.querySelector('h3'));
    return {
      h1Text: h1?.textContent?.trim(),
      sectionCount: document.querySelectorAll('section').length,
      cards: cards.map(c => ({
        text: c.textContent?.trim().slice(0, 80),
        bg: getComputedStyle(c).backgroundColor,
      })),
    };
  });
  console.log("\n=== PRICING PAGE ===");
  console.log(JSON.stringify(info, null, 2));
  await ctx.close();
}

// Check showcase page
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/showcase", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return {
      h1Text: h1?.textContent?.trim(),
      images: [...document.querySelectorAll('img')].map(i => ({
        src: i.getAttribute('src')?.slice(0, 50),
        loaded: i.complete,
      })),
      headingFont: h1 ? getComputedStyle(h1).fontFamily?.split(',')[0] : null,
    };
  });
  console.log("\n=== SHOWCASE PAGE ===");
  console.log(JSON.stringify(info, null, 2));
  await ctx.close();
}

// Check mobile responsive (390px)
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1500);

  const mobile = await page.evaluate(() => {
    const hero = document.querySelector('section:first-of-type');
    const h1 = hero?.querySelector('h1');
    const ctaBtn = hero?.querySelector('a, button');
    
    return {
      heroHeight: hero?.clientHeight,
      h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
      h1Text: h1?.textContent?.trim()?.slice(0, 80),
      ctaVisible: ctaBtn ? ctaBtn.getBoundingClientRect().top < 844 : false,
      ctaText: ctaBtn?.textContent?.trim(),
      navVisible: !!document.querySelector('header button[aria-label*="menu"]'),
      overflowX: document.documentElement.scrollWidth > 390,
      viewportWidth: window.innerWidth,
      // Check tap target sizes
      smallButtons: [...document.querySelectorAll('a, button')].filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44);
      }).slice(0, 5).map(el => ({
        text: el.textContent?.trim()?.slice(0, 20),
        width: Math.round(el.getBoundingClientRect().width),
        height: Math.round(el.getBoundingClientRect().height),
      })),
    };
  });
  console.log("\n=== MOBILE (390px) ===");
  console.log(JSON.stringify(mobile, null, 2));
  await ctx.close();
}

// Check all pages load successfully
console.log("\n=== ALL PAGES CHECK ===");
{
  const pages = ["/", "/pricing", "/faq", "/showcase", "/how-it-works", "/why-not-ai", "/terms", "/privacy"];
  for (const pg of pages) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
    try {
      await page.goto(`http://localhost:3000${pg}`, { waitUntil: "networkidle", timeout: 15000 });
      const title = await page.title();
      const hasH1 = await page.evaluate(() => !!document.querySelector('h1'));
      const brokenImgs = await page.evaluate(() => {
        return [...document.querySelectorAll('img')].filter(i => !i.complete || i.naturalWidth === 0).length;
      });
      console.log(`${pg === "/" ? " HOME" : pg.toUpperCase()}: ${errors.length === 0 ? '✅' : '❌'} title="${title.slice(0,60)}" h1=${hasH1} brokenImgs=${brokenImgs}`);
    } catch (err) {
      console.log(`${pg}: ❌ ${err.message}`);
    }
    await ctx.close();
  }
}

await browser.close();
