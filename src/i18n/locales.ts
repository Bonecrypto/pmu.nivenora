/** Obsługiwane języki. Kolejność = kolejność w przełączniku. Pierwszy = domyślny (bez prefiksu w URL). */
export const locales = ['pl', 'uk', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';

/** Podstrony istniejące w każdym języku (do przełącznika języka, hreflang i sitemap). */
export type PageId = 'home' | 'lips' | 'privacy';

export const localeMeta: Record<
  Locale,
  {
    short: string;
    name: string;
    hreflang: string;
    /** Flaga w przełączniku (dla rosyjskiego celowo brak — sam kod języka). */
    flag: 'pl' | 'ua' | 'gb' | null;
    /** Adres strony głównej danego języka (skrót do pages.home). */
    path: string;
    pages: Record<PageId, string>;
  }
> = {
  pl: {
    short: 'PL',
    name: 'Polski',
    hreflang: 'pl',
    flag: 'pl',
    path: '/',
    pages: { home: '/', lips: '/makijaz-permanentny-ust/', privacy: '/polityka-prywatnosci/' },
  },
  uk: {
    short: 'UA',
    name: 'Українська',
    hreflang: 'uk',
    flag: 'ua',
    path: '/uk/',
    pages: { home: '/uk/', lips: '/uk/lips/', privacy: '/uk/privacy/' },
  },
  en: {
    short: 'EN',
    name: 'English',
    hreflang: 'en',
    flag: 'gb',
    path: '/en/',
    pages: { home: '/en/', lips: '/en/lips/', privacy: '/en/privacy/' },
  },
  ru: {
    short: 'RU',
    name: 'Русский',
    hreflang: 'ru',
    flag: null,
    path: '/ru/',
    pages: { home: '/ru/', lips: '/ru/lips/', privacy: '/ru/privacy/' },
  },
};
