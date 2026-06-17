import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "http://localhost:3000";
const SCREENSHOTS = resolve(__dirname, "../../tmp/landing-review/screenshots");
mkdirSync(SCREENSHOTS, { recursive: true });

const pages = [
  { path: "/", name: "home" },
  { path: "/showcase", name: "showcase" },
  { path: "/pricing", name: "pricing" },
  { path: "/faq", name: "faq" },
  { path: "/how-it-works", name: "how-it-works" },
  { path: "/why-not-ai", name: "why-not-ai" },
  { path: "/terms", name: "terms" },
  { path: "/privacy", name: "privacy" },
];

const viewports = [
  { width: 390, height: 844, label: "mobile" },
  { width: 1440, height: 900, label: "desktop" },
];

const browser = await chromium.launch();
const results = { screenshotsDir: SCREENSHOTS, errors: [], pagesRendered: 0 };

for (const pg of pages) {
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const p = await ctx.newPage();

    p.on("console", (msg) => {
      if (msg.type() === "error") {
        results.errors.push({ page: pg.path, vp: vp.label, error: msg.text() });
      }
    });

    try {
      await p.goto(BASE + pg.path, { waitUntil: "networkidle", timeout: 15000 });
      await p.waitForTimeout(800);

      const filename = `${SCREENSHOTS}/${pg.name}-${vp.label}.png`;
      await p.screenshot({ path: filename, fullPage: true });
      results.pagesRendered++;
      console.log(`✅ ${pg.path} @ ${vp.label}`);
    } catch (err) {
      results.errors.push({ page: pg.path, vp: vp.label, error: err.message });
      console.log(`❌ ${pg.path} @ ${vp.label}: ${err.message}`);
    } finally {
      await ctx.close();
    }
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
