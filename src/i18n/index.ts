import { pl, type Dictionary } from './pl';
import { uk } from './uk';
import { en } from './en';
import { ru } from './ru';
import type { Locale } from './locales';

export { locales, defaultLocale, localeMeta, type Locale, type PageId } from './locales';

// Nowy język: dodaj plik, import, wpis poniżej oraz w src/i18n/locales.ts.
export const dictionaries: Record<Locale, Dictionary> = { pl, uk, en, ru };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
