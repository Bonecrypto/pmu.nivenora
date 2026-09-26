import { pl, type Dictionary } from './pl';
import { uk } from './uk';
import { en } from './en';
import type { Locale } from './locales';

export { locales, defaultLocale, localeMeta, type Locale } from './locales';

// Nowy język: dodaj plik, import, wpis poniżej oraz w src/i18n/locales.ts.
export const dictionaries: Record<Locale, Dictionary> = { pl, uk, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
