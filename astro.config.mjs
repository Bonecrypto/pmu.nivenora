// @ts-check
import { defineConfig } from 'astro/config';

// Adres produkcyjny — używany do canonical, Open Graph, hreflang i sitemap.
// Zmienna SITE_URL (np. w Cloudflare) nadpisuje domyślną domenę.
const site = process.env.SITE_URL || 'https://pmunivenora.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
