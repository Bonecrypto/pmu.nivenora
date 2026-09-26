/**
 * Wszystkie teksty strony w języku polskim.
 * Nowa wersja językowa = kopia tego pliku (np. uk.ts, en.ts) + strona src/pages/<lang>/index.astro.
 *
 * `verified: false` = treść wymaga sprawdzenia przez Veronikę przed publikacją.
 * W trybie deweloperskim (npm run dev) takie fragmenty są oznaczone żółtą etykietą.
 */

import type { ExtraServiceId, PmuServiceId } from '../config/site';
import type { PortfolioCategory } from '../config/portfolio';

export const pl = {
  lang: 'pl',
  locale: 'pl_PL',

  meta: {
    title: 'Makijaż permanentny Wrocław — brwi, usta, kreska | Veronika PMU',
    description:
      'Naturalny makijaż permanentny brwi, ust i kreski we Wrocławiu (Krzyki). Kształt i kolor dobrane do Twojej twarzy. Zobacz efekty i ceny — Veronika PMU.',
  },

  nav: {
    results: 'Efekty',
    prices: 'Cennik',
    about: 'O mnie',
    process: 'Jak to wygląda',
    faq: 'FAQ',
    contact: 'Kontakt',
    skip: 'Przejdź do treści',
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
    lead: 'Brwi, usta i kreska dopasowane do Twojej twarzy — tak, żebyś po zabiegu nadal wyglądała jak Ty.',
    artistLine: 'Veronika · linergistka PMU',
    priceFrom: 'Zabiegi od',
    location: 'Krzyki, okolice ul. Skarbowców',
  },

  portfolio: {
    title: 'Efekty',
    lead: 'Prawdziwe prace z mojego gabinetu. Każdy kształt i kolor był dobierany indywidualnie.',
    healingNote:
      'Tuż po zabiegu kolor jest wyraźniejszy niż po wygojeniu — z czasem staje się delikatniejszy. Zdjęcia wygojonych efektów będę dodawać na bieżąco.',
    filterAll: 'Wszystkie',
    categories: { usta: 'Usta', brwi: 'Brwi', kreska: 'Kreska' } satisfies Record<PortfolioCategory, string>,
    stages: { healed: 'Wygojone', fresh: 'Tuż po zabiegu', 'before-after': 'Przed / po' },
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
    priceOnRequest: 'cena w wiadomości',
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
        name: 'Kreska permanentna',
        short: 'Kreska',
        description: 'Subtelnie podkreślona linia rzęs, dzięki której oko wygląda na wyraźniejsze — nawet bez makijażu.',
      },
    } satisfies Record<PmuServiceId, { name: string; short: string; description: string }>,
    extraTitle: 'Brwi i rzęsy — zabiegi dodatkowe',
    extra: {
      laminacjaBrwi: 'Laminacja brwi',
      koloryzacjaBrwi: 'Koloryzacja brwi',
      laminacjaRzes: 'Laminacja rzęs',
      koloryzacjaRzes: 'Koloryzacja rzęs',
    } satisfies Record<ExtraServiceId, string>,
  },

  approach: {
    title: 'Makijaż permanentny, który nadal wygląda jak Ty',
    lead: 'Nie chodzi o to, żeby każda klientka wyglądała tak samo. Chodzi o to, żeby podkreślić to, co już masz.',
    points: [
      {
        title: 'Kształt dopasowany do twarzy',
        text: 'Zanim zacznę, patrzę na proporcje Twojej twarzy, rysy i mimikę. Kształt powstaje dla Ciebie, nie z szablonu.',
      },
      {
        title: 'Kolor dobrany do Ciebie',
        text: 'Odcień dobieram do karnacji, koloru włosów i efektu, który lubisz. Stawiam na naturalne, spokojne kolory.',
      },
      {
        title: 'Nic bez Twojej zgody',
        text: 'Najpierw rysuję kształt i pokazuję go w lustrze. Zabieg zaczynamy dopiero wtedy, gdy obie jesteśmy zadowolone.',
      },
    ],
  },

  about: {
    title: 'Cześć, jestem Veronika',
    paragraphs: [
      'Wykonuję makijaż permanentny we Wrocławiu. Najbliższy jest mi naturalny efekt — taki, po którym ludzie mówią „świetnie wyglądasz”, a nie „zrobiłaś sobie makijaż permanentny”.',
      'Najbardziej lubię pracować z ustami, ale z tą samą uwagą robię brwi i kreskę. Do każdej twarzy podchodzę indywidualnie i spokojnie odpowiadam na wszystkie pytania — również te, które wydają się „głupie”.',
    ],
    languagesTitle: 'Możesz pisać do mnie w języku:',
    languages: ['polskim', 'ukraińskim', 'rosyjskim', 'angielskim'],
    photoAlt: 'Veronika — linergistka makijażu permanentnego we Wrocławiu',
  },

  process: {
    title: 'Jak wygląda wizyta',
    lead: 'Wiesz, co będzie się działo na każdym etapie.',
    steps: [
      { title: 'Wiadomość', text: 'Piszesz do mnie, jaki zabieg Cię interesuje. Ustalamy termin i odpowiadam na pytania.' },
      { title: 'Konsultacja', text: 'Rozmawiamy o Twoich oczekiwaniach, stylu i o tym, jaki efekt chcesz osiągnąć.' },
      { title: 'Kształt i kolor', text: 'Rysuję kształt na Twojej twarzy i razem wybieramy odcień.' },
      { title: 'Twoja akceptacja', text: 'Oglądasz projekt w lustrze. Poprawiamy go, aż będzie dokładnie taki, jak chcesz.' },
      { title: 'Zabieg', text: 'Zaczynam pracę dopiero wtedy, gdy projekt jest zaakceptowany.' },
      { title: 'Pielęgnacja i gojenie', text: 'Dostajesz zalecenia, jak dbać o skórę w czasie gojenia. Jeśli coś Cię niepokoi — po prostu napisz.' },
      { title: 'Korekta', text: 'Jeśli po wygojeniu trzeba coś uzupełnić, umawiamy korektę.' },
    ],
  },

  reviews: {
    title: 'Opinie klientek',
    source: 'Źródło',
  },

  faq: {
    title: 'Częste pytania',
    items: [
      {
        q: 'Czy efekt będzie wyglądał naturalnie?',
        a: 'To mój główny cel. Kształt i kolor dobieramy razem, a przed zabiegiem widzisz projekt na swojej twarzy. Jeśli coś Ci nie pasuje — zmieniamy, zanim zacznę.',
        verified: true,
      },
      {
        q: 'Jak dobierany jest kształt?',
        a: 'Na podstawie proporcji Twojej twarzy, naturalnej linii brwi lub ust oraz Twoich preferencji. Rysuję projekt, a Ty decydujesz, czy go akceptujesz.',
        verified: true,
      },
      {
        q: 'Jak dobierany jest kolor?',
        a: 'Patrzę na karnację, kolor włosów i to, jaki efekt lubisz — bardziej delikatny czy wyraźniejszy. Wybieramy odcień razem.',
        verified: true,
      },
      {
        q: 'Czy zabieg boli?',
        a: 'Odczucia są indywidualne. Większość osób opisuje je jako dyskomfort, a nie silny ból. Przed zabiegiem powiem Ci, czego się spodziewać.',
        verified: false,
      },
      {
        q: 'Jak wygląda gojenie?',
        a: 'Zaraz po zabiegu kolor jest wyraźniejszy, a w kolejnych dniach skóra się goi i kolor łagodnieje. Pełny efekt widać dopiero po wygojeniu. Szczegółowe zalecenia dostaniesz po zabiegu.',
        verified: false,
      },
      {
        q: 'Czy korekta jest konieczna?',
        a: 'Skóra każdej osoby goi się inaczej, dlatego po wygojeniu oceniamy efekt i w razie potrzeby uzupełniamy kolor lub kształt. Korekta kosztuje 200 zł (brwi, usta) lub 150 zł (kreska).',
        verified: false,
      },
      {
        q: 'Ile trwa zabieg?',
        a: 'Czas zależy od rodzaju zabiegu. Dokładnie powiem Ci przy umawianiu wizyty, żebyś mogła spokojnie zaplanować dzień.',
        verified: false,
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
        a: 'Tak, w niektórych sytuacjach zabieg trzeba przełożyć lub z niego zrezygnować. Jeśli jesteś w ciąży, karmisz piersią, przyjmujesz leki lub masz choroby skóry — napisz przed umówieniem wizyty, a wszystko omówimy.',
        verified: false,
      },
    ],
  },

  contact: {
    title: 'Gdzie mnie znajdziesz',
    lead: 'Najszybciej skontaktujesz się ze mną przez Instagram. Odpisuję osobiście.',
    locationTitle: 'Lokalizacja',
    // TEMP: do czasu zatwierdzenia publicznego adresu.
    addressNote: 'Dokładny adres podam przy umawianiu wizyty.',
    channelsTitle: 'Kontakt',
    phone: 'Telefon',
    email: 'E-mail',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    map: 'Zobacz na mapie',
  },

  finalCta: {
    title: 'Masz pytanie albo chcesz się umówić?',
    text: 'Napisz, jaki zabieg Cię interesuje. Pomogę wybrać i odpowiem na wszystkie pytania — bez zobowiązań.',
  },

  footer: {
    rights: 'Wszelkie prawa zastrzeżone.',
  },

  dev: {
    unverified: 'Do weryfikacji przez Veronikę',
    reviewsHidden: 'Sekcja „Opinie” jest ukryta — brak prawdziwych opinii w src/config/reviews.ts',
    tempImages: 'TEMP: zdjęcia wycięte ze zrzutu ekranu (niska rozdzielczość) — podmień na oryginały',
  },
};

export type Dictionary = typeof pl;
