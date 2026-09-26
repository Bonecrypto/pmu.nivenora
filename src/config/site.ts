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

  /** Informacje praktyczne (potwierdzone przez Veronikę). */
  info: {
    freeConsultation: true,
    giftVouchers: true,
    payments: ['cash', 'card', 'blik'] as const,
    /** schema.org openingHours — dni pracy (godziny ustalane indywidualnie, po umówieniu). */
    openingDays: 'Mo-Sa',
  },

  // Kanały kontaktu. Brak wartości = kanał nie jest pokazywany.
  contact: {
    phone: '+48 731 437 315' as string | null,
    whatsapp: '48731437315' as string | null, // bez + i spacji (link wa.me)
    email: null as string | null,
    // Jeśli pojawi się system rezerwacji (np. Booksy), wpisz URL — stanie się głównym CTA.
    bookingUrl: null as string | null,
  },
} as const;

/** Główne CTA: system rezerwacji, jeśli istnieje — w przeciwnym razie wiadomość na Instagramie. */
export const primaryContactUrl = site.contact.bookingUrl ?? site.instagram.dmUrl;
/** Link do WhatsApp z gotowym początkiem wiadomości. */
export const whatsappUrl = (text: string) =>
  site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}` : null;

export const primaryContactIsBooking = site.contact.bookingUrl !== null;

/**
 * Ceny w PLN (źródło: cennik Veroniki z Instagrama).
 * Klucze (id) łączą ceny z nazwami w plikach językowych (src/i18n/*.ts).
 * Nowa pozycja = wpis tutaj + nazwa w `services.names` w pliku językowym.
 */
export const prices = {
  pmu: {
    brwi: { price: 400, correction: 200 },
    usta: { price: 400, correction: 200 },
    kreska: { price: 300, correction: 150 },
  },
  /** Korekta jest wykonywana nie później niż X miesięcy po zabiegu podstawowym. */
  correctionWithinMonths: 2,
  pmuPackages: [
    { id: 'brwiUsta', price: 750 },
    { id: 'brwiKreska', price: 700 },
    { id: 'kreskaUsta', price: 700 },
    { id: 'brwiUstaKreska', price: 1100 },
  ],
  // Zabiegi dodatkowe — wizualnie mniej ważne niż PMU.
  styling: [
    {
      group: 'brwi',
      items: [
        { id: 'regulacja', price: 50 },
        { id: 'laminacjaBrwi', price: 80 },
        { id: 'regulacjaLaminacja', price: 100 },
        { id: 'regulacjaFarbowanie', price: 100 },
        { id: 'regulacjaFarbowanieLaminacja', price: 150 },
      ],
    },
    {
      group: 'rzesy',
      items: [
        { id: 'farbowanieRzes', price: 50 },
        { id: 'farbowanieLaminacjaRzes', price: 120 },
      ],
    },
    {
      group: 'pakiety',
      items: [
        { id: 'farbowanieRzesBrwi', price: 120 },
        { id: 'farbowanieLaminacjaRzesBrwi', price: 250 },
      ],
    },
  ],
} as const;

export type PmuServiceId = keyof typeof prices.pmu;
export type PmuPackageId = (typeof prices.pmuPackages)[number]['id'];
export type StylingGroupId = (typeof prices.styling)[number]['group'];
export type StylingServiceId = (typeof prices.styling)[number]['items'][number]['id'];

export const lowestPmuPrice = Math.min(...Object.values(prices.pmu).map((s) => s.price));
