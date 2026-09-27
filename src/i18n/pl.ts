/**
 * Wszystkie teksty strony w języku polskim.
 * Pozostałe języki: uk.ts, en.ts (ten sam kształt — TypeScript pilnuje, żeby niczego nie brakowało).
 * Nowy język = kopia tego pliku + wpis w src/i18n/index.ts + strona src/pages/<lang>/index.astro.
 *
 * `verified: false` = treść wymaga sprawdzenia przez Veronikę przed publikacją.
 * W trybie deweloperskim (npm run dev) takie fragmenty są oznaczone żółtą etykietą.
 */

import type { PmuPackageId, PmuServiceId, StylingGroupId, StylingServiceId } from '../config/site';
import type { PortfolioCategory } from '../config/portfolio';
import type { Locale } from './locales';

export const pl = {
  lang: 'pl' as Locale,
  locale: 'pl_PL',

  meta: {
    title: 'Makijaż permanentny Wrocław — brwi, usta, kreska | Veronika PMU',
    description:
      'Naturalny makijaż permanentny brwi, ust i kreski we Wrocławiu (Krzyki). Kształt i kolor dobrane do Twojej twarzy. Laminacja i farbowanie brwi i rzęs. Zobacz efekty i ceny.',
  },

  nav: {
    results: 'Efekty',
    prices: 'Cennik',
    about: 'O mnie',
    process: 'Wizyta',
    faq: 'FAQ',
    contact: 'Kontakt',
    skip: 'Przejdź do treści',
    menu: 'Menu',
    language: 'Język strony',
  },

  cta: {
    primary: 'Napisz do mnie',
    primaryInstagram: 'Napisz na Instagramie',
    primaryBooking: 'Umów wizytę',
    seeResults: 'Zobacz efekty',
    moreOnInstagram: 'Więcej prac na Instagramie',
  },

  hero: {
    title: 'Naturalny makijaż permanentny we Wrocławiu',
    lead: 'Brwi, usta i linia rzęs — **dopasowane do Ciebie**.',
    artistLine: 'Veronika · linergistka PMU',
    priceFrom: 'Makijaż permanentny od',
    place: 'Wrocław · Krzyki, okolice ul. Skarbowców',
  },

  portfolio: {
    title: 'Efekty',
    lead: '',
    healingNote: 'Tuż po zabiegu kolor jest intensywniejszy — po wygojeniu łagodnieje.',
    filterAll: 'Wszystkie',
    categories: { usta: 'Usta', brwi: 'Brwi', kreska: 'Kreska' } satisfies Record<PortfolioCategory, string>,
    stages: { healed: 'Wygojone', fresh: 'Tuż po zabiegu', 'before-after': 'Przed / po' },
    showMore: 'Pokaż więcej zdjęć',
    open: 'Powiększ zdjęcie',
    close: 'Zamknij',
    prev: 'Poprzednie zdjęcie',
    next: 'Następne zdjęcie',
  },

  services: {
    title: 'Cennik',
    lead: '',
    currency: 'zł',
    correction: 'Korekta',
    pmu: {
      usta: {
        name: 'Makijaż permanentny ust',
        short: 'Usta',
        description: 'Kontur i naturalny kolor',
      },
      brwi: {
        name: 'Makijaż permanentny brwi',
        short: 'Brwi',
        description: 'Bez codziennego rysowania',
      },
      kreska: {
        name: 'Linia rzęs (kreska permanentna)',
        short: 'Linia rzęs',
        description: 'Wyraźniejsze spojrzenie',
      },
    } satisfies Record<PmuServiceId, { name: string; short: string; description: string }>,
    correctionNote: (months: number) =>
      `Korekta jest wykonywana nie później niż ${months} ${months === 1 ? 'miesiąc' : months < 5 ? 'miesiące' : 'miesięcy'} po zabiegu podstawowym.`,
    ask: 'Zapytaj o termin',
    askStyling: 'Zapytaj o stylizację',
    askMessage: (service: string) => `Dzień dobry! Chciałabym zapytać o termin: ${service}.`,
    moreLips: 'Więcej o makijażu ust',
    moreBrows: 'Więcej o makijażu brwi',
    packagesTitle: 'Pakiety makijażu permanentnego',
    packages: {
      brwiUsta: 'Brwi + usta',
      brwiKreska: 'Brwi + linia rzęs',
      kreskaUsta: 'Linia rzęs + usta',
      brwiUstaKreska: 'Brwi + usta + linia rzęs',
    } satisfies Record<PmuPackageId, string>,
    stylingTitle: 'Stylizacja brwi i rzęs',
    stylingFrom: 'od',
    stylingGroups: {
      brwi: 'Brwi',
      rzesy: 'Rzęsy',
      pakiety: 'Pakiety',
    } satisfies Record<StylingGroupId, string>,
    styling: {
      regulacja: 'Regulacja',
      laminacjaBrwi: 'Laminacja',
      regulacjaLaminacja: 'Regulacja + laminacja',
      regulacjaFarbowanie: 'Regulacja + farbowanie',
      regulacjaFarbowanieLaminacja: 'Regulacja + farbowanie + laminacja',
      farbowanieRzes: 'Farbowanie',
      farbowanieLaminacjaRzes: 'Farbowanie + laminacja',
      farbowanieRzesBrwi: 'Farbowanie rzęs i brwi',
      farbowanieLaminacjaRzesBrwi: 'Farbowanie + laminacja rzęs i brwi',
    } satisfies Record<StylingServiceId, string>,
  },

  info: {
    consultation: 'Bezpłatna konsultacja',
    payment: 'Gotówka, karta, BLIK',
    hours: 'Pn–Sb, po umówieniu',
  },

  voucher: {
    title: 'Voucher podarunkowy',
    text: 'Zabieg jako prezent — przygotuję voucher.',
    ask: 'Zapytaj o voucher',
    service: 'voucher podarunkowy',
  },

  about: {
    title: 'Cześć, jestem Veronika',
    text: 'Kiedyś sama **bałam się makijażu permanentnego**. Dziś robię go tak, jak chciałabym dla siebie — **lekko i naturalnie**.',
    points: ['Kształt i kolor dopasowane do Ciebie', 'Nic bez Twojej akceptacji', 'Naturalny efekt, bez przerysowania'],
    languagesTitle: 'Możesz pisać do mnie w języku:',
    languages: ['polskim', 'ukraińskim', 'rosyjskim', 'angielskim'],
    photoAlt: 'Veronika — linergistka makijażu permanentnego we Wrocławiu',
  },

  process: {
    title: 'Jak to wygląda',
    steps: [
      { title: 'Wiadomość', text: 'Ustalamy termin' },
      { title: 'Projekt', text: 'Kształt i kolor razem' },
      { title: 'Zabieg', text: 'Około 2 godzin' },
      { title: 'Korekta', text: 'Do 2 miesięcy' },
    ],
  },

  reviews: {
    title: 'Opinie klientek',
    source: 'Źródło',
  },

  faq: {
    title: 'Częste pytania',
    more: 'Więcej pytań',
    items: [
      {
        q: 'Czy efekt będzie wyglądał naturalnie?',
        a: 'Tak — przed zabiegiem **widzisz projekt na swojej twarzy** i razem go poprawiamy.',
        verified: true,
      },
      {
        q: 'Jak długo utrzymuje się efekt?',
        a: 'Zwykle **1–3 lata**. Kolor stopniowo blednie, nie zmienia się w szaro-zielony.',
        verified: true,
      },
      {
        q: 'Czy zabieg boli?',
        a: 'Większość osób czuje **dyskomfort, a nie silny ból**.',
        verified: false,
      },
      {
        q: 'Jak wygląda gojenie?',
        a: 'Najpierw kolor jest intensywniejszy, potem łagodnieje. **Pełny efekt — po wygojeniu.**',
        verified: false,
      },
      {
        q: 'Czy korekta jest konieczna?',
        a: 'Jeśli trzeba — **do 2 miesięcy** po zabiegu. 200 zł (brwi, usta), 150 zł (linia rzęs).',
        verified: false,
      },
      {
        q: 'Ile trwa zabieg?',
        a: 'Około **2 godzin**.',
        verified: true,
      },
      {
        q: 'Jak przygotować się do zabiegu?',
        a: 'Zalecenia wyślę przy umawianiu terminu.',
        verified: false,
      },
      {
        q: 'Czego unikać po zabiegu?',
        a: 'Po zabiegu dostaniesz **dokładne zalecenia** pielęgnacji.',
        verified: false,
      },
      {
        q: 'Czy są przeciwwskazania?',
        a: 'Tak. W ciąży, przy karmieniu, lekach lub chorobach skóry — **napisz przed wizytą**.',
        verified: false,
      },
      {
        q: 'Czy mogę przyjść na konsultację bez zabiegu?',
        a: 'Tak, **konsultacja jest bezpłatna**.',
        verified: true,
      },
      {
        q: 'Jak mogę zapłacić?',
        a: '**Gotówka, karta lub BLIK.**',
        verified: true,
      },
      {
        q: 'Czy mogę kupić voucher na prezent?',
        a: 'Tak — **voucher na wybrany zabieg**. Napisz, przygotuję.',
        verified: true,
      },
    ],
  },

  contact: {
    title: 'Umów się',
    lead: 'Napisz — pomogę wybrać zabieg.',
    call: 'Zadzwoń',
    hoursTitle: 'Godziny',
    paymentTitle: 'Płatność',
    locationTitle: 'Lokalizacja',
    addressLines: ['Wrocław — Krzyki', 'okolice ul. Skarbowców'],
    // TEMP: do czasu zatwierdzenia publicznego adresu.
    addressNote: 'Dokładny adres podam przy umawianiu wizyty.',
    channelsTitle: 'Kontakt',
    phone: 'Telefon',
    email: 'E-mail',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Dzień dobry! Chciałabym zapytać o makijaż permanentny.',
    instagram: 'Instagram',
    map: 'Zobacz na mapie',
  },

  footer: {
    privacy: 'Polityka prywatności',
    backHome: 'Wróć na stronę główną',
    notFoundTitle: 'Nie znaleziono strony',
    notFoundText: 'Ta strona nie istnieje albo została przeniesiona.',
    tagline: 'makijaż permanentny Wrocław — Krzyki',
    rights: 'Wszelkie prawa zastrzeżone.',
  },

  lips: {
    metaTitle: 'Makijaż permanentny ust Wrocław — naturalny efekt | Veronika PMU',
    metaDescription:
      'Makijaż permanentny ust we Wrocławiu (Krzyki): wyrównany kontur i naturalny kolor dobrany do Ciebie. 400 zł, korekta 200 zł. Zobacz efekty i zapytaj o termin.',
    eyebrow: 'Makijaż permanentny ust · Wrocław',
    title: 'Naturalne usta, które wyglądają dobrze od rana',
    lead: 'Wyrównany kontur i świeży kolor — **bez efektu „zrobionych” ust**.',
    pointsTitle: 'Co daje makijaż permanentny ust',
    points: [
      { title: 'Świeży kolor', text: 'Bez szminki, która się ściera.' },
      { title: 'Naturalny kształt', text: 'Bez powiększania na siłę.' },
      { title: 'Twój odcień', text: 'Od nude po wyraźniejszy róż.' },
    ],
    galleryTitle: 'Moje prace — usta',
    faqTitle: 'Pytania o makijaż ust',
    otherServices: 'Zobacz też brwi, linię rzęs i cały cennik',
  },

  brows: {
    metaTitle: 'Makijaż permanentny brwi Wrocław — naturalny efekt | Veronika PMU',
    metaDescription: 'Makijaż permanentny brwi we Wrocławiu (Krzyki): kształt dopasowany do twarzy, bez codziennego rysowania. 400 zł, korekta 200 zł. Zobacz efekty i zapytaj o termin.',
    eyebrow: 'Makijaż permanentny brwi · Wrocław',
    title: 'Brwi, które wyglądają dobrze od rana',
    lead: 'Kształt dopasowany do Twojej twarzy — **bez efektu „namalowanych” brwi**.',
    pointsTitle: 'Co daje makijaż permanentny brwi',
    points: [
      { title: 'Bez rysowania', text: 'Gotowe brwi zaraz po przebudzeniu.' },
      { title: 'Kształt do twarzy', text: 'Projekt dopasowany do rysów i mimiki.' },
      { title: 'Naturalny kolor', text: 'Odcień dobrany do włosów i karnacji.' },
    ],
    galleryTitle: 'Moje prace — brwi',
    faqTitle: 'Pytania o makijaż brwi',
    otherServices: 'Zobacz też usta, linię rzęs i cały cennik',
  },

  // TODO: Veronika musi potwierdzić — do tego czasu sekcja nie jest pokazywana na stronie (site.info.healingVerified).
  healing: {
    title: 'Gojenie krok po kroku',
    note: 'Orientacyjnie — u każdej osoby gojenie przebiega trochę inaczej.',
    steps: [
      { when: 'Dni 1–3', title: 'Intensywny kolor', text: 'Kolor jest ciemniejszy i wyraźniejszy niż docelowo.' },
      { when: 'Dni 4–10', title: 'Łuszczenie', text: 'Skóra delikatnie się łuszczy — nie drap i nie zdzieraj.' },
      { when: 'Tydz. 2–4', title: 'Jaśniej', text: 'Kolor może wydawać się bledszy — to normalne.' },
      { when: 'Ok. 6 tyg.', title: 'Efekt końcowy', text: 'Widać wygojony kolor — wtedy oceniamy korektę.' },
    ],
  },

  dev: {
    unverified: 'Do weryfikacji przez Veronikę',
    reviewsHidden: 'Sekcja „Opinie” jest ukryta — brak prawdziwych opinii w src/config/reviews.ts',
    tempImages: 'TEMP: zdjęcia wycięte ze zrzutu ekranu (niska rozdzielczość) — podmień na oryginały',
  },
};

export type Dictionary = typeof pl;
