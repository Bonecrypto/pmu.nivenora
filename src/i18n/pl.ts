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
    lead: 'Brwi, usta i kreska dopasowane do Twojej twarzy — tak, żebyś po zabiegu **nadal wyglądała jak Ty**.',
    artistLine: 'Veronika · linergistka PMU',
    priceFrom: 'Makijaż permanentny od',
    place: 'Wrocław · Krzyki, okolice ul. Skarbowców',
  },

  portfolio: {
    title: 'Efekty',
    lead: 'Prawdziwe prace z mojego gabinetu. Każdy kształt i kolor był dobierany indywidualnie.',
    healingNote:
      'Tuż po zabiegu kolor jest wyraźniejszy niż po wygojeniu — z czasem staje się delikatniejszy. Zdjęcia wygojonych efektów będę dodawać na bieżąco.',
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
    title: 'Usługi i cennik',
    lead: 'Jasne ceny, bez niespodzianek. Jeśli nie wiesz, który zabieg wybrać — napisz, pomogę.',
    currency: 'zł',
    correction: 'Korekta',
    pmu: {
      usta: {
        name: 'Makijaż permanentny ust',
        short: 'Usta',
        description:
          'Wyrównany kontur i świeży, naturalny kolor. Odcień dobieramy razem — od delikatnego „nude” po wyraźniejszy róż.',
      },
      brwi: {
        name: 'Makijaż permanentny brwi',
        short: 'Brwi',
        description:
          'Brwi, które wyglądają dobrze od rana, bez codziennego rysowania. Kształt dopasowany do Twojej twarzy i mimiki.',
      },
      kreska: {
        name: 'Linia rzęs (kreska permanentna)',
        short: 'Linia rzęs',
        description: 'Subtelnie podkreślona linia rzęs, dzięki której oko wygląda na wyraźniejsze — nawet bez makijażu.',
      },
    } satisfies Record<PmuServiceId, { name: string; short: string; description: string }>,
    correctionNote: (months: number) =>
      `Korekta jest wykonywana nie później niż ${months} ${months === 1 ? 'miesiąc' : months < 5 ? 'miesiące' : 'miesięcy'} po zabiegu podstawowym.`,
    ask: 'Zapytaj o termin',
    askStyling: 'Zapytaj o stylizację',
    askMessage: (service: string) => `Dzień dobry! Chciałabym zapytać o termin: ${service}.`,
    moreLips: 'Więcej o makijażu ust',
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
    text: 'Makijaż permanentny albo stylizacja brwi i rzęs jako prezent. Napisz, na jaki zabieg — przygotuję voucher.',
    ask: 'Zapytaj o voucher',
    service: 'voucher podarunkowy',
  },

  about: {
    title: 'Cześć, jestem Veronika',
    text: 'Kiedyś sama **bałam się makijażu permanentnego** — niebieskich brwi i zbyt mocnych konturów. Dziś robię go tak, jak sama chciałabym go mieć: **lekko i naturalnie**. Najbardziej lubię pracować z **ustami**.',
    points: ['Kształt i kolor dopasowane do Ciebie', 'Nic bez Twojej akceptacji', 'Naturalny efekt, bez przerysowania'],
    languagesTitle: 'Możesz pisać do mnie w języku:',
    languages: ['polskim', 'ukraińskim', 'rosyjskim', 'angielskim'],
    photoAlt: 'Veronika — linergistka makijażu permanentnego we Wrocławiu',
  },

  process: {
    title: 'Jak wygląda wizyta',
    steps: [
      { title: 'Wiadomość', text: 'Piszesz, jaki zabieg Cię interesuje. Ustalamy termin i odpowiadam na pytania.' },
      {
        title: 'Projekt',
        text: 'Rysuję kształt na Twojej twarzy i razem dobieramy kolor. Zaczynam dopiero, gdy **projekt Ci się podoba**.',
      },
      {
        title: 'Zabieg i gojenie',
        text: 'Zabieg trwa **około 2 godzin**. Potem dostajesz zalecenia, jak dbać o skórę w czasie gojenia.',
      },
      { title: 'Korekta', text: 'Jeśli trzeba coś uzupełnić — umawiamy korektę, **nie później niż 2 miesiące** po zabiegu.' },
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
        a: 'To mój główny cel. Kształt i kolor dobieramy razem, a przed zabiegiem **widzisz projekt na swojej twarzy**. Jeśli coś Ci nie pasuje — zmieniamy, zanim zacznę.',
        verified: true,
      },
      {
        q: 'Jak długo utrzymuje się efekt?',
        a: 'Zwykle **od 1 do 3 lat**. Kolor nie przechodzi z czasem w szaro-zielone odcienie — po prostu stopniowo traci intensywność.',
        verified: true,
      },
      {
        q: 'Czy zabieg boli?',
        a: 'Odczucia są indywidualne. Większość osób opisuje je jako **dyskomfort, a nie silny ból**. Przed zabiegiem powiem Ci, czego się spodziewać.',
        verified: false,
      },
      {
        q: 'Jak wygląda gojenie?',
        a: 'Zaraz po zabiegu kolor jest wyraźniejszy, a w kolejnych dniach skóra się goi i kolor łagodnieje. **Pełny efekt widać dopiero po wygojeniu.** Szczegółowe zalecenia dostaniesz po zabiegu.',
        verified: false,
      },
      {
        q: 'Czy korekta jest konieczna?',
        a: 'Skóra każdej osoby goi się inaczej, dlatego po wygojeniu oceniamy efekt i w razie potrzeby uzupełniamy kolor lub kształt. Korektę wykonuję **nie później niż 2 miesiące** po zabiegu podstawowym. Kosztuje 200 zł (brwi, usta) lub 150 zł (linia rzęs).',
        verified: false,
      },
      {
        q: 'Ile trwa zabieg?',
        a: 'Zarezerwuj sobie **około 2 godzin**.',
        verified: true,
      },
      {
        q: 'Jak przygotować się do zabiegu?',
        a: 'Zalecenia przed zabiegiem wyślę Ci przy umawianiu terminu. Jeśli masz pytania — napisz wcześniej.',
        verified: false,
      },
      {
        q: 'Czego unikać po zabiegu?',
        a: 'Po zabiegu dostaniesz dokładne zalecenia dotyczące pielęgnacji. Stosowanie się do nich ma duży wpływ na efekt po wygojeniu.',
        verified: false,
      },
      {
        q: 'Czy są przeciwwskazania?',
        a: 'Tak, w niektórych sytuacjach zabieg trzeba przełożyć lub z niego zrezygnować. Jeśli jesteś w ciąży, karmisz piersią, przyjmujesz leki lub masz choroby skóry — **napisz przed umówieniem wizyty**, a wszystko omówimy.',
        verified: false,
      },
      {
        q: 'Czy mogę przyjść na konsultację bez zabiegu?',
        a: 'Tak, **konsultacja jest bezpłatna**. Omówimy kształt, kolor i Twoje pytania — bez zobowiązań.',
        verified: true,
      },
      {
        q: 'Jak mogę zapłacić?',
        a: '**Gotówką, kartą lub BLIKiem.**',
        verified: true,
      },
      {
        q: 'Czy mogę kupić voucher na prezent?',
        a: 'Tak — **voucher podarunkowy** na wybrany zabieg. Napisz, a przygotuję go dla Ciebie.',
        verified: true,
      },
    ],
  },

  contact: {
    title: 'Umów się na wizytę',
    lead: 'Napisz, jaki zabieg Cię interesuje — pomogę wybrać i odpowiem na wszystkie pytania. Możesz też zadzwonić lub napisać na WhatsApp.',
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
    lead: 'Wyrównany kontur i świeży kolor dobrany do Twojej karnacji — **bez efektu „zrobionych” ust**. To zabieg, który lubię najbardziej.',
    pointsTitle: 'Co daje makijaż permanentny ust',
    points: [
      { title: 'Świeży kolor na co dzień', text: 'Usta wyglądają zdrowo i świeżo — **bez szminki**, która ściera się po pierwszej kawie.' },
      { title: 'Wyrównany kontur', text: 'Podkreślam naturalny kształt Twoich ust — **bez powiększania na siłę**.' },
      { title: 'Odcień dobrany razem', text: 'Od delikatnego „nude” po wyraźniejszy róż. Ty wybierasz, ja doradzam, co będzie wyglądać naturalnie.' },
    ],
    galleryTitle: 'Moje prace — usta',
    faqTitle: 'Pytania o makijaż ust',
    otherServices: 'Zobacz też brwi, linię rzęs i cały cennik',
  },

  dev: {
    unverified: 'Do weryfikacji przez Veronikę',
    reviewsHidden: 'Sekcja „Opinie” jest ukryta — brak prawdziwych opinii w src/config/reviews.ts',
    tempImages: 'TEMP: zdjęcia wycięte ze zrzutu ekranu (niska rozdzielczość) — podmień na oryginały',
  },
};

export type Dictionary = typeof pl;
