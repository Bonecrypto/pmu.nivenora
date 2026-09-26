import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/locales';

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
 * TEMP: obecne pliki to kadry wycięte ze zrzutów ekranu profilu na Instagramie (ok. 470 px).
 * Są prawdziwe, ale w niskiej rozdzielczości — do podmiany na oryginały z telefonu Veroniki.
 */

export type PortfolioCategory = 'usta' | 'brwi' | 'kreska';
export type PortfolioStage = 'healed' | 'fresh' | 'before-after';

export interface PortfolioItem {
  image: ImageMetadata;
  categories: PortfolioCategory[];
  stage?: PortfolioStage;
  /** Opis zdjęcia (alt) w każdym języku strony. */
  alt: Record<Locale, string>;
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
    alt: {
      pl: 'Makijaż permanentny ust — porównanie przed i po zabiegu',
      uk: 'Перманентний макіяж губ — до і після процедури',
      ru: 'Перманентный макияж губ — до и после процедуры',
      en: 'Permanent lip makeup — before and after',
    },
  },
  {
    image: file('brwi-usta-01'),
    categories: ['brwi', 'usta'],
    featured: true,
    alt: {
      pl: 'Makijaż permanentny brwi i ust — efekt na całej twarzy',
      uk: 'Перманентний макіяж брів і губ — результат на обличчі',
      ru: 'Перманентный макияж бровей и губ — результат на лице',
      en: 'Permanent brow and lip makeup — full-face result',
    },
  },
  {
    image: file('usta-02'),
    categories: ['usta'],
    featured: true,
    alt: {
      pl: 'Makijaż permanentny ust w naturalnym, różanym odcieniu — widok z boku',
      uk: 'Перманентний макіяж губ у природному рожевому відтінку — вигляд збоку',
      ru: 'Перманентный макияж губ в естественном розовом оттенке — вид сбоку',
      en: 'Permanent lip makeup in a natural rosy shade — side view',
    },
  },
  {
    image: file('brwi-przed-po-01'),
    categories: ['brwi'],
    stage: 'before-after',
    featured: true,
    alt: {
      pl: 'Makijaż permanentny brwi — porównanie przed i po zabiegu',
      uk: 'Перманентний макіяж брів — до і після процедури',
      ru: 'Перманентный макияж бровей — до и после процедуры',
      en: 'Permanent brow makeup — before and after',
    },
  },
  { image: file('brwi-03'), categories: ['brwi'], alt: {
      pl: 'Makijaż permanentny brwi — naturalny kształt dopasowany do twarzy',
      uk: 'Перманентний макіяж брів — природна форма, підібрана до обличчя',
      ru: 'Перманентный макияж бровей — естественная форма, подобранная под лицо',
      en: 'Permanent brow makeup — natural shape matched to the face',
    } },
  { image: file('usta-01'), categories: ['usta'], alt: {
      pl: 'Makijaż permanentny ust — zbliżenie',
      uk: 'Перманентний макіяж губ — крупний план',
      ru: 'Перманентный макияж губ — крупный план',
      en: 'Permanent lip makeup — close-up',
    } },
  { image: file('brwi-06'), categories: ['brwi'], alt: {
      pl: 'Makijaż permanentny brwi — zbliżenie na łuk brwi',
      uk: 'Перманентний макіяж брів — крупний план',
      ru: 'Перманентный макияж бровей — крупный план',
      en: 'Permanent brow makeup — close-up of the brow arch',
    } },
  { image: file('usta-brwi-01'), categories: ['usta', 'brwi'], alt: {
      pl: 'Makijaż permanentny ust w wyrazistym odcieniu oraz brwi',
      uk: 'Перманентний макіяж губ у насиченому відтінку та брів',
      ru: 'Перманентный макияж губ в насыщенном оттенке и бровей',
      en: 'Permanent lip makeup in a bold shade, plus brows',
    } },
  { image: file('brwi-07'), categories: ['brwi'], alt: {
      pl: 'Makijaż permanentny brwi — efekt na twarzy klientki',
      uk: 'Перманентний макіяж брів — результат на обличчі клієнтки',
      ru: 'Перманентный макияж бровей — результат на лице клиентки',
      en: 'Permanent brow makeup — result on a client',
    } },
  { image: file('brwi-02'), categories: ['brwi'], alt: {
      pl: 'Makijaż permanentny brwi — widok z boku',
      uk: 'Перманентний макіяж брів — вигляд збоку',
      ru: 'Перманентный макияж бровей — вид сбоку',
      en: 'Permanent brow makeup — side view',
    } },
  { image: file('brwi-05'), categories: ['brwi'], alt: {
      pl: 'Makijaż permanentny brwi — zbliżenie na brew i oko',
      uk: 'Перманентний макіяж брів — брова та око крупним планом',
      ru: 'Перманентный макияж бровей — бровь и глаз крупным планом',
      en: 'Permanent brow makeup — close-up of brow and eye',
    } },
  { image: file('brwi-04'), categories: ['brwi'], alt: {
      pl: 'Makijaż permanentny brwi — delikatny, naturalny efekt',
      uk: 'Перманентний макіяж брів — делікатний, природний результат',
      ru: 'Перманентный макияж бровей — деликатный, естественный результат',
      en: 'Permanent brow makeup — soft, natural result',
    } },
  { image: file('brwi-01'), categories: ['brwi'], stage: 'fresh', alt: {
      pl: 'Makijaż permanentny brwi tuż po zabiegu',
      uk: 'Перманентний макіяж брів одразу після процедури',
      ru: 'Перманентный макияж бровей сразу после процедуры',
      en: 'Permanent brow makeup right after the procedure',
    } },
];
