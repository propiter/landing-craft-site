import { chromium } from "playwright";

const browser = await chromium.launch();

for (const vp of [{ w: 1440, h: 900, label: "desktop" }, { w: 390, h: 844, label: "mobile" }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  // Scroll through the page to trigger reveals
  await page.evaluate(() => {
    const h = document.body.scrollHeight;
    for (let i = 0; i < h; i += 500) {
      window.scrollTo(0, i);
    }
  });
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  const result = await page.evaluate(() => {
    const parseRGB = s => {
      const m = s && s.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const p = m[1].split(',').map(x => parseFloat(x.trim()));
      return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
    };
    const over = (f, b) => ({
      r: f.r * f.a + b.r * (1 - f.a),
      g: f.g * f.a + b.g * (1 - f.a),
      b: f.b * f.a + b.b * (1 - f.a),
      a: 1
    });
    const effBg = el => {
      const ch = [];
      let n = el;
      while (n) {
        const bg = parseRGB(getComputedStyle(n).backgroundColor);
        if (bg && bg.a > 0) ch.push(bg);
        n = n.parentElement;
      }
      ch.push(parseRGB(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 });
      let res = ch[ch.length - 1];
      for (let i = ch.length - 2; i >= 0; i--) res = over(ch[i], res);
      return res;
    };
    const lum = c => {
      const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
    };
    const ratio = (fg, bg) => {
      const o = fg.a < 1 ? over(fg, bg) : fg;
      const L1 = lum(o), L2 = lum(bg);
      return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    };
    const hasText = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length);

    const fails = [];
    for (const el of document.querySelectorAll('body *')) {
      if (!hasText(el)) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) === 0) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      const fg = parseRGB(cs.color);
      if (!fg) continue;
      const px = parseFloat(cs.fontSize);
      const bold = parseInt(cs.fontWeight) >= 700;
      const need = (px >= 24 || (px >= 18.66 && bold)) ? 3.0 : 4.5;
      const val = ratio(fg, effBg(el));
      if (val < need) {
        fails.push({
          ratio: Math.round(val * 100) / 100,
          need,
          text: el.textContent.trim().slice(0, 50),
          tag: el.tagName.toLowerCase(),
          cls: (el.className && el.className.toString ? el.className.toString().slice(0, 50) : ''),
          color: cs.color,
          px: cs.fontSize,
          bg: cs.backgroundColor
        });
      }
    }
    return { passed: fails.length === 0, failures: fails };
  });

  // Filter to only unique failures (same text/cls combo)
  const seen = new Set();
  const uniqueFails = result.failures.filter(f => {
    const key = `${f.text}|${f.cls}|${f.px}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`\n=== HOME @ ${vp.label} (${vp.w}x${vp.h}) ===`);
  if (uniqueFails.length === 0) {
    console.log("✅ ALL PASSED");
  } else {
    console.log(`❌ ${uniqueFails.length} FAILURES:`);
    uniqueFails.forEach(f => {
      console.log(`  ${f.ratio}:1 (need ${f.need}:1) — "${f.text}" — ${f.tag}.${f.cls} — ${f.color} on bg — ${f.px}`);
    });
  }

  // Also check CTA button specifically
  const ctaInfo = await page.evaluate(() => {
    const btns = document.querySelectorAll('a, button');
    const results = [];
    for (const btn of btns) {
      if (btn.textContent.includes('free landing') || btn.textContent.includes('Get free')) {
        const cs = getComputedStyle(btn);
        results.push({
          text: btn.textContent.trim().slice(0, 30),
          bg: cs.backgroundColor,
          color: cs.color,
          px: cs.fontSize,
        });
      }
    }
    return results;
  });
  console.log("  CTA buttons:", JSON.stringify(ctaInfo));

  await ctx.close();
}

// Also check pricing and FAQ pages
for (const pg of ["/pricing", "/faq", "/showcase"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(`http://localhost:3000${pg}`, { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  const result = await page.evaluate(() => {
    const parseRGB = s => {
      const m = s && s.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const p = m[1].split(',').map(x => parseFloat(x.trim()));
      return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
    };
    const over = (f, b) => ({
      r: f.r * f.a + b.r * (1 - f.a), g: f.g * f.a + b.g * (1 - f.a),
      b: f.b * f.a + b.b * (1 - f.a), a: 1
    });
    const effBg = el => {
      const ch = []; let n = el;
      while (n) {
        const bg = parseRGB(getComputedStyle(n).backgroundColor);
        if (bg && bg.a > 0) ch.push(bg);
        n = n.parentElement;
      }
      ch.push(parseRGB(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 });
      let res = ch[ch.length - 1];
      for (let i = ch.length - 2; i >= 0; i--) res = over(ch[i], res);
      return res;
    };
    const lum = c => {
      const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
    };
    const ratio = (fg, bg) => {
      const o = fg.a < 1 ? over(fg, bg) : fg;
      const L1 = lum(o), L2 = lum(bg);
      return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    };
    const hasText = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length);
    const fails = [];
    for (const el of document.querySelectorAll('body *')) {
      if (!hasText(el)) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) === 0) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      const fg = parseRGB(cs.color);
      if (!fg) continue;
      const px = parseFloat(cs.fontSize);
      const bold = parseInt(cs.fontWeight) >= 700;
      const need = (px >= 24 || (px >= 18.66 && bold)) ? 3.0 : 4.5;
      const val = ratio(fg, effBg(el));
      if (val < need) {
        fails.push({
          ratio: Math.round(val * 100) / 100, need,
          text: el.textContent.trim().slice(0, 50),
          tag: el.tagName.toLowerCase(), color: cs.color, px: cs.fontSize,
        });
      }
    }
    return { passed: fails.length === 0, failures: fails.slice(0, 20) };
  });

  const seen = new Set();
  const uniqueFails = result.failures.filter(f => {
    const key = `${f.text}|${f.px}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`\n=== ${pg} @ desktop ===`);
  if (uniqueFails.length === 0) {
    console.log("✅ ALL PASSED");
  } else {
    console.log(`❌ ${uniqueFails.length} unique failures (showing first 10):`);
    uniqueFails.slice(0, 10).forEach(f => {
      console.log(`  ${f.ratio}:1 (need ${f.need}:1) — "${f.text}" — ${f.tag} — ${f.color} — ${f.px}`);
    });
  }

  await ctx.close();
}

await browser.close();
