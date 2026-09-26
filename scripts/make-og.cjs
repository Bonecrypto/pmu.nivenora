// Generuje obrazki podglądu linku (Open Graph) do public/og/<lang>.jpg.
// Uruchom po zmianie zdjęć lub tekstów:  node scripts/make-og.cjs   (wymaga Playwright + Chromium)
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const texts = {
  pl: { title: 'Naturalny makijaż permanentny we Wrocławiu', sub: 'Brwi · usta · linia rzęs — Krzyki', price: 'od 300 zł' },
  uk: { title: 'Природний перманентний макіяж у Вроцлаві', sub: 'Брови · губи · стрілка — Кшики', price: 'від 300 зл' },
  en: { title: 'Natural permanent makeup in Wrocław', sub: 'Brows · lips · lash line — Krzyki', price: 'from 300 PLN' },
  ru: { title: 'Естественный перманентный макияж во Вроцлаве', sub: 'Брови · губы · стрелка — Кшики', price: 'от 300 зл' },
};
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const [lang, t] of Object.entries(texts)) {
    const url = 'file://' + path.join(__dirname, 'og-template.html') + '?' + new URLSearchParams(t);
    await p.goto(url, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(__dirname, '..', 'public', 'og', `${lang}.jpg`), type: 'jpeg', quality: 86 });
    console.log('og', lang);
  }
  await b.close();
})();
