import { chromium } from "playwright";

const browser = await chromium.launch();

// Re-check mobile overflow after fix
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1500);

  const overflow = await page.evaluate(() => {
    const overflowRight = document.documentElement.scrollWidth;
    const elementsOverflowing = [];
    const all = document.querySelectorAll('body *');
    let maxRight = 0;
    for (const el of all) {
      const r = el.getBoundingClientRect();
      if (r.right > 390 && r.width > 0) {
        maxRight = Math.max(maxRight, r.right);
        if (elementsOverflowing.length < 5) {
          elementsOverflowing.push({
            tag: el.tagName,
            cls: el.className?.toString()?.slice(0, 50),
            right: Math.round(r.right),
            width: Math.round(r.width),
          });
        }
      }
    }
    return {
      bodyOverflow: document.documentElement.scrollWidth,
      maxRight,
      hasOverflow: maxRight > 392, // 2px tolerance
      samples: elementsOverflowing,
    };
  });

  console.log("\n=== MOBILE OVERFLOW CHECK (390px) ===");
  console.log(JSON.stringify(overflow, null, 2));

  // Also check if CTA is visible above the fold
  const ctaCheck = await page.evaluate(() => {
    const ctas = [...document.querySelectorAll('a, button')].filter(el =>
      el.textContent.includes('free') || el.textContent.includes('Free')
    );
    return ctas.map(c => ({
      text: c.textContent?.trim()?.slice(0, 30),
      top: c.getBoundingClientRect().top,
      bottom: c.getBoundingClientRect().bottom,
      aboveFold: c.getBoundingClientRect().bottom < 844,
    }));
  });
  console.log("CTA positions:", JSON.stringify(ctaCheck));

  await ctx.close();
}

// Verify all pages load without errors
{
  for (const pg of ["/", "/pricing", "/faq", "/showcase", "/how-it-works", "/why-not-ai", "/terms", "/privacy", "/api/contact"]) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", msg => { if (msg.type() === "error") errors.push(msg.text()); });
    try {
      const resp = await page.goto(`http://localhost:3000${pg}`, { waitUntil: "networkidle", timeout: 15000 });
      const status = resp?.status();
      const brokenImgs = await page.evaluate(() => {
        return [...document.querySelectorAll('img')].filter(i => !i.complete || i.naturalWidth === 0).length;
      });
      const statusIcon = (status === 200 || status === 405 || status === 304) ? '✅' : '❌';
      console.log(`${statusIcon} ${pg}: ${status} errors=${errors.length} brokenImgs=${brokenImgs}`);
    } catch (err) {
      console.log(`❌ ${pg}: ${err.message}`);
    }
    await ctx.close();
  }
}

await browser.close();
