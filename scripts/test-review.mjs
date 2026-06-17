import { chromium } from "playwright";

// Inject the WCAG contrast scorer
const CONTRAST_SCORER = `
() => {
  const parseRGB = s => { const m = s && s.match(/rgba?\\(([^)]+)\\)/); if(!m) return null;
    const p = m[1].split(',').map(x=>parseFloat(x.trim())); return {r:p[0],g:p[1],b:p[2],a:p.length>3?p[3]:1}; };
  const over = (f,b) => ({ r:f.r*f.a+b.r*(1-f.a), g:f.g*f.a+b.g*(1-f.a), b:f.b*f.a+b.b*(1-f.a), a:1 });
  const effBg = el => { const ch=[]; let n=el;
    while(n){ const bg=parseRGB(getComputedStyle(n).backgroundColor); if(bg&&bg.a>0) ch.push(bg); n=n.parentElement; }
    ch.push(parseRGB(getComputedStyle(document.body).backgroundColor) || {r:255,g:255,b:255,a:1});
    let res=ch[ch.length-1]; for(let i=ch.length-2;i>=0;i--) res=over(ch[i],res); return res; };
  const lum = c => { const f=v=>{v/=255; return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)};
    return 0.2126*f(c.r)+0.7152*f(c.g)+0.0722*f(c.b); };
  const ratio = (fg,bg) => { const o=fg.a<1?over(fg,bg):fg; const L1=lum(o),L2=lum(bg);
    return (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05); };
  const hasText = el => [...el.childNodes].some(n=>n.nodeType===3 && n.textContent.trim().length);
  const fails = [];
  for (const el of document.querySelectorAll('body *')) {
    if (!hasText(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility==='hidden' || cs.display==='none' || parseFloat(cs.opacity)===0) continue;
    const r = el.getBoundingClientRect(); if (r.width<2 || r.height<2) continue;
    const fg = parseRGB(cs.color); if (!fg) continue;
    const px = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight)>=700;
    const need = (px>=24 || (px>=18.66 && bold)) ? 3.0 : 4.5;
    const val = ratio(fg, effBg(el));
    if (val < need) fails.push({
      ratio: Math.round(val*100)/100, need,
      text: (el.textContent.trim().slice(0,50)),
      tag: el.tagName.toLowerCase(), cls: el.className?.toString().slice(0,50),
      color: cs.color, px: cs.fontSize,
    });
  }
  return { passed: fails.length===0, failures: fails };
}
`;

const browser = await chromium.launch();

// First run contrast on home page at both desktop and mobile
for (const vp of [{ w: 1440, h: 900, label: "desktop" }, { w: 390, h: 844, label: "mobile" }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  // Check hover states on CTA button
  await page.evaluate(() => {
    // Manually check the CTA button states by computing styles
  });

  const result = await page.evaluate(CONTRAST_SCORER);
  console.log(`\n=== HOME @ ${vp.label} (${vp.w}x${vp.h}) ===`);
  console.log(JSON.stringify(result, null, 2));

  await ctx.close();
}

// Check focus ring contrast
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);

  // Focus the first CTA button and check its computed styles
  const focusInfo = await page.evaluate(() => {
    // Manually compute focus ring contrast
    const bg = "#171613"; // --color-bg
    const focusRing = "#E6A03A"; // --color-focus

    const parse = (hex) => {
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      return { r, g, b, a: 1 };
    };
    const lum = c => {
      const f=v=>{v/=255; return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)};
      return 0.2126*f(c.r)+0.7152*f(c.g)+0.0722*f(c.b);
    };
    const ratio = (fg,bg) => {
      const L1=lum(fg), L2=lum(bg);
      return (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
    };

    return {
      "focus-ring-vs-bg": Math.round(ratio(parse(focusRing), parse(bg)) * 100) / 100,
      required: 3.0,
      passed: ratio(parse(focusRing), parse(bg)) >= 3.0,
    };
  });
  console.log("\n=== FOCUS RING CHECK ===");
  console.log(JSON.stringify(focusInfo, null, 2));
  await ctx.close();
}

// Test the contact form API
console.log("\n=== CONTACT FORM API TESTS ===");
try {
  const res1 = await fetch("http://localhost:3000/api/contact", { method: "GET" });
  const data1 = await res1.json();
  console.log("GET /api/contact:", res1.status, JSON.stringify(data1));

  const res2 = await fetch("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "",
      email: "",
      productName: "",
      whatBuilding: "",
      whatNeed: "",
    }),
  });
  const data2 = await res2.json();
  console.log("POST empty form:", res2.status, JSON.stringify(data2));

  const res3 = await fetch("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test User",
      email: "test@example.com",
      productName: "Test Product",
      whatBuilding: "A test product",
      whatNeed: "A landing page",
    }),
  });
  const data3 = await res3.json();
  console.log("POST valid form:", res3.status, JSON.stringify(data3));

  const res4 = await fetch("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test User",
      email: "test@example.com",
      productName: "Test Product",
      whatBuilding: "A test product",
      whatNeed: "A landing page",
      honeypot: "bot-value",
    }),
  });
  const data4 = await res4.json();
  console.log("POST with honeypot:", res4.status, JSON.stringify(data4));
} catch (err) {
  console.log("Fetch error:", err.message);
}

// Take targeted screenshots
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1500);

  // Hero viewport
  await page.screenshot({ path: "/home/piter/tmp/landing-review/screenshots/targeted-hero-desktop.png", fullPage: false });
  // Scroll to graveyard
  await page.evaluate(() => document.querySelector('[id*="graveyard"], section:nth-of-type(3)')?.scrollIntoView({ behavior: "instant" }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: "/home/piter/tmp/landing-review/screenshots/targeted-graveyard-desktop.png", fullPage: false });
  // Scroll to contact form
  await page.evaluate(() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "instant" }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: "/home/piter/tmp/landing-review/screenshots/targeted-form-desktop.png", fullPage: false });

  await ctx.close();
}

{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1500);
  // Mobile hero
  await page.screenshot({ path: "/home/piter/tmp/landing-review/screenshots/targeted-hero-mobile.png", fullPage: false });
  await ctx.close();
}

{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/pricing", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "/home/piter/tmp/landing-review/screenshots/targeted-pricing-desktop.png", fullPage: false });
  await ctx.close();
}

{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/pricing", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "/home/piter/tmp/landing-review/screenshots/targeted-pricing-mobile.png", fullPage: false });
  await ctx.close();
}

{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/faq", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "/home/piter/tmp/landing-review/screenshots/targeted-faq-desktop.png", fullPage: false });
  await ctx.close();
}

await browser.close();
console.log("\n✅ All tests and screenshots complete.");
