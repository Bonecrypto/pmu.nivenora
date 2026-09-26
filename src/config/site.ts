/**
 * Dane biznesowe niezależne od języka: kontakt, lokalizacja, ceny.
 * Wszystko, co może się zmienić (ceny, kanały kontaktu), zmieniasz TUTAJ.
 *
 * Zasada: `null` = informacja jeszcze nieznana / niezatwierdzona.
 * Elementy z wartością `null` nie są wyświetlane na stronie (albo mają neutralny tekst zastępczy).
 */

export const site = {
  brand: 'Veronika PMU',
  artist: 'Veronika',

  instagram: {
    handle: 'pmu.nivenora',
    profileUrl: 'https://www.instagram.com/pmu.nivenora/',
    // Otwiera bezpośrednio okno wiadomości (DM) w aplikacji Instagram.
    dmUrl: 'https://ig.me/m/pmu.nivenora',
  },

  location: {
    city: 'Wrocław',
    district: 'Krzyki',
    area: 'okolice ul. Skarbowców',
    // TEMP: dokładny adres nie jest jeszcze zatwierdzony do publikacji.
    streetAddress: null as string | null,
    postalCode: null as string | null,
    mapsUrl: null as string | null,
  },

  // Kanały kontaktu. Brak wartości = kanał nie jest pokazywany.
  contact: {
    phone: null as string | null, // np. '+48 600 000 000'
    whatsapp: null as string | null, // np. '48600000000' (bez +, do linku wa.me)
    email: null as string | null,
    // Jeśli pojawi się system rezerwacji (np. Booksy), wpisz URL — stanie się głównym CTA.
    bookingUrl: null as string | null,
  },
} as const;

/** Główne CTA: system rezerwacji, jeśli istnieje — w przeciwnym razie wiadomość na Instagramie. */
export const primaryContactUrl = site.contact.bookingUrl ?? site.instagram.dmUrl;
export const primaryContactIsBooking = site.contact.bookingUrl !== null;

/**
 * Ceny w PLN. `null` = cena nieznana → na stronie pojawia się tekst „cena w wiadomości”.
 * Klucze (id) łączą ceny z opisami w plikach językowych (src/i18n/*.ts).
 */
export const prices = {
  pmu: {
    brwi: { price: 400, correction: 200 },
    usta: { price: 400, correction: 200 },
    kreska: { price: 300, correction: 150 },
  },
  extra: {
    // TODO: uzupełnić ceny po potwierdzeniu przez Veronikę.
    laminacjaBrwi: { price: null as number | null },
    koloryzacjaBrwi: { price: null as number | null },
    laminacjaRzes: { price: null as number | null },
    koloryzacjaRzes: { price: null as number | null },
  },
} as const;

export type PmuServiceId = keyof typeof prices.pmu;
export type ExtraServiceId = keyof typeof prices.extra;

export const lowestPmuPrice = Math.min(...Object.values(prices.pmu).map((s) => s.price));
