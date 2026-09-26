import type { APIRoute } from 'astro';
import { locales, localeMeta } from '../i18n/locales';

export const GET: APIRoute = ({ site }) => {
  const alternates = locales
    .map((l) => `<xhtml:link rel="alternate" hreflang="${localeMeta[l].hreflang}" href="${new URL(localeMeta[l].path, site).href}"/>`)
    .join('');
  const urls = locales
    .map((l) => `<url><loc>${new URL(localeMeta[l].path, site).href}</loc>${alternates}</url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
