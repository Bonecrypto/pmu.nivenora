import type { APIRoute } from 'astro';
import { locales, localeMeta, type PageId } from '../i18n/locales';

// Strony do indeksowania (polityka prywatności celowo pominięta).
const indexed: PageId[] = ['home', 'lips', 'brows'];

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls = indexed
    .flatMap((page) => {
      const alternates = locales
        .map((l) => `<xhtml:link rel="alternate" hreflang="${localeMeta[l].hreflang}" href="${abs(localeMeta[l].pages[page])}"/>`)
        .join('');
      return locales.map((l) => `<url><loc>${abs(localeMeta[l].pages[page])}</loc>${alternates}</url>`);
    })
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
