// Kody QR do druku (wizytówki, lustro w gabinecie, stories) → docs/qr/
//   node scripts/make-qr.cjs                         — tylko Instagram
//   SITE_URL=https://twojadomena.pl node scripts/make-qr.cjs   — także strona (PL, UA, EN, RU)
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const out = path.join(__dirname, '..', 'docs', 'qr');
fs.mkdirSync(out, { recursive: true });

const targets = { instagram: 'https://www.instagram.com/pmu.nivenora/' };
const site = process.env.SITE_URL;
if (site) {
  // utm_source=qr — w statystykach będzie widać wejścia z kodu QR
  for (const [name, p] of Object.entries({ strona: '/', 'strona-uk': '/uk/', 'strona-en': '/en/', 'strona-ru': '/ru/' })) {
    targets[name] = new URL(p + '?utm_source=qr', site).href;
  }
}

const opts = { errorCorrectionLevel: 'M', margin: 2, color: { dark: '#2a2320', light: '#ffffff' } };
(async () => {
  for (const [name, url] of Object.entries(targets)) {
    await QRCode.toFile(path.join(out, `${name}.svg`), url, { ...opts, type: 'svg' });
    await QRCode.toFile(path.join(out, `${name}.png`), url, { ...opts, width: 1200 });
    console.log('QR', name, '→', url);
  }
  if (!site) console.log('SITE_URL nie ustawiony — QR do strony zostanie wygenerowany po podaniu adresu.');
})();
