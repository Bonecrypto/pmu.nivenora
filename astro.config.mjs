// @ts-check
import { defineConfig } from 'astro/config';

// Adres produkcyjny. Ustaw SITE_URL w Cloudflare Pages (Settings → Environment variables),
// gdy będzie znana docelowa domena. Używany do canonical, Open Graph i sitemap.
const site = process.env.SITE_URL || 'https://pmu-nivenora.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
