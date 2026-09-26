/** Obsługiwane języki. Kolejność = kolejność w przełączniku. Pierwszy = domyślny (bez prefiksu w URL). */
export const locales = ['pl', 'uk', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';

export const localeMeta: Record<
  Locale,
  { short: string; name: string; path: string; privacyPath: string; hreflang: string }
> = {
  pl: { short: 'PL', name: 'Polski', path: '/', privacyPath: '/polityka-prywatnosci/', hreflang: 'pl' },
  uk: { short: 'UA', name: 'Українська', path: '/uk/', privacyPath: '/uk/privacy/', hreflang: 'uk' },
  en: { short: 'EN', name: 'English', path: '/en/', privacyPath: '/en/privacy/', hreflang: 'en' },
};
