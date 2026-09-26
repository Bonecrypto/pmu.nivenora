import type { ImageMetadata } from 'astro';

/**
 * Portfolio — WYŁĄCZNIE prawdziwe prace Veroniki.
 *
 * Jak dodać zdjęcie:
 *  1. Wrzuć oryginał (najlepiej ≥ 1200 px szerokości, bez filtrów) do src/assets/portfolio/
 *  2. Dodaj wpis poniżej. Astro samo wygeneruje zoptymalizowane wersje (AVIF/WebP, kilka rozmiarów).
 *
 * Pole `stage`:
 *  - 'healed'       → efekt wygojony (dostaje wyróżnienie — to najlepszy dowód jakości)
 *  - 'fresh'        → tuż po zabiegu
 *  - 'before-after' → zdjęcie porównawcze przed / po
 *  - undefined      → nie wiadomo; nic nie jest pokazywane (nie zgadujemy)
 *
 * TEMP: obecne pliki to kadry wycięte ze zrzutu ekranu profilu na Instagramie (ok. 180 px).
 * Są prawdziwe, ale w niskiej rozdzielczości — do podmiany na oryginały z telefonu Veroniki.
 */

export type PortfolioCategory = 'usta' | 'brwi' | 'kreska';
export type PortfolioStage = 'healed' | 'fresh' | 'before-after';

export interface PortfolioItem {
  image: ImageMetadata;
  categories: PortfolioCategory[];
  stage?: PortfolioStage;
  alt: { pl: string };
  /** Pokaż w sekcji hero (maks. 4). */
  featured?: boolean;
}

const img = import.meta.glob<{ default: ImageMetadata }>('../assets/portfolio/*.{jpg,jpeg,png,webp}', {
  eager: true,
});
const file = (name: string): ImageMetadata => {
  const found = Object.entries(img).find(([path]) => path.split('/').pop()?.startsWith(`${name}.`));
  if (!found) throw new Error(`Brak pliku portfolio: ${name}`);
  return found[1].default;
};

export const portfolio: PortfolioItem[] = [
  {
    image: file('usta-przed-po-01'),
    categories: ['usta'],
    stage: 'before-after',
    featured: true,
    alt: { pl: 'Makijaż permanentny ust — porównanie przed i po zabiegu' },
  },
  {
    image: file('brwi-usta-01'),
    categories: ['brwi', 'usta'],
    featured: true,
    alt: { pl: 'Makijaż permanentny brwi i ust — efekt na całej twarzy' },
  },
  {
    image: file('usta-02'),
    categories: ['usta'],
    featured: true,
    alt: { pl: 'Makijaż permanentny ust w naturalnym, różanym odcieniu — widok z boku' },
  },
  {
    image: file('brwi-przed-po-01'),
    categories: ['brwi'],
    stage: 'before-after',
    featured: true,
    alt: { pl: 'Makijaż permanentny brwi — porównanie przed i po zabiegu' },
  },
  { image: file('brwi-03'), categories: ['brwi'], alt: { pl: 'Makijaż permanentny brwi — naturalny kształt dopasowany do twarzy' } },
  { image: file('usta-01'), categories: ['usta'], alt: { pl: 'Makijaż permanentny ust — zbliżenie' } },
  { image: file('brwi-06'), categories: ['brwi'], alt: { pl: 'Makijaż permanentny brwi — zbliżenie na łuk brwi' } },
  { image: file('usta-brwi-01'), categories: ['usta', 'brwi'], alt: { pl: 'Makijaż permanentny ust w wyrazistym odcieniu oraz brwi' } },
  { image: file('brwi-07'), categories: ['brwi'], alt: { pl: 'Makijaż permanentny brwi — efekt na twarzy klientki' } },
  { image: file('brwi-02'), categories: ['brwi'], alt: { pl: 'Makijaż permanentny brwi — widok z boku' } },
  { image: file('brwi-05'), categories: ['brwi'], alt: { pl: 'Makijaż permanentny brwi — zbliżenie na brew i oko' } },
  { image: file('brwi-04'), categories: ['brwi'], alt: { pl: 'Makijaż permanentny brwi — delikatny, naturalny efekt' } },
  { image: file('brwi-01'), categories: ['brwi'], stage: 'fresh', alt: { pl: 'Makijaż permanentny brwi tuż po zabiegu' } },
];
