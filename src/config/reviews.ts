/**
 * Opinie klientek — TYLKO prawdziwe, za zgodą autorki.
 * Dopóki lista jest pusta, sekcja „Opinie” nie jest wyświetlana na stronie.
 *
 * Przykład wpisu:
 * {
 *   author: 'Anna',                 // imię lub inicjały — tak, jak klientka się zgodziła
 *   service: 'usta',                // 'usta' | 'brwi' | 'kreska' | 'inne'
 *   text: 'Treść opinii…',
 *   source: 'Instagram',            // gdzie opinia została wystawiona (np. 'Google', 'Instagram', 'Booksy')
 *   sourceUrl: 'https://…',         // opcjonalnie: link do oryginału — zwiększa wiarygodność
 *   date: '2026-09',                // opcjonalnie
 * }
 */

export interface Review {
  author: string;
  service: 'usta' | 'brwi' | 'kreska' | 'inne';
  text: string;
  source: string;
  sourceUrl?: string;
  date?: string;
}

export const reviews: Review[] = [];
