import { pl, type Dictionary } from './pl';

// Nowy język: dodaj import i wpis poniżej (np. uk, en, ru).
export const dictionaries = { pl } satisfies Record<string, Dictionary>;
export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = 'pl';

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
