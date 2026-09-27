/**
 * English copy. Same structure as pl.ts (TypeScript checks that nothing is missing).
 * `verified: false` — needs Veronika's review (same as in the Polish version).
 */

import { pl, type Dictionary } from './pl';

export const en: Dictionary = {
  lang: 'en',
  locale: 'en_GB',

  meta: {
    title: 'Permanent makeup in Wrocław — brows, lips, lash line | Veronika PMU',
    description:
      'Natural permanent makeup for brows, lips and lash line in Wrocław (Krzyki). Shape and colour matched to your face. Brow and lash lamination and tinting. See results and prices.',
  },

  nav: {
    results: 'Results',
    prices: 'Prices',
    about: 'About',
    process: 'Visit',
    faq: 'FAQ',
    contact: 'Contact',
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Site language',
  },

  cta: {
    primary: 'Message me',
    primaryInstagram: 'Message on Instagram',
    primaryBooking: 'Book a visit',
    seeResults: 'See results',
    moreOnInstagram: 'More work on Instagram',
  },

  hero: {
    title: 'Natural permanent makeup in Wrocław',
    lead: 'Brows, lips and lash line — **designed for you**.',
    artistLine: 'Veronika · permanent makeup artist',
    priceFrom: 'Permanent makeup from',
    place: 'Wrocław · Krzyki, near Skarbowców St.',
  },

  portfolio: {
    title: 'Results',
    lead: '',
    healingNote: 'Right after the procedure the colour is stronger — it softens as it heals.',
    filterAll: 'All',
    categories: { usta: 'Lips', brwi: 'Brows', kreska: 'Lash line' },
    stages: { healed: 'Healed', fresh: 'Fresh', 'before-after': 'Before / after' },
    showMore: 'Show more photos',
    open: 'Enlarge photo',
    close: 'Close',
    prev: 'Previous photo',
    next: 'Next photo',
  },

  services: {
    title: 'Prices',
    lead: '',
    currency: 'PLN',
    correction: 'Touch-up',
    pmu: {
      usta: {
        name: 'Permanent lip makeup',
        short: 'Lips',
        description: 'Contour and natural colour',
      },
      brwi: {
        name: 'Permanent brow makeup',
        short: 'Brows',
        description: 'No more daily filling-in',
      },
      kreska: {
        name: 'Lash line enhancement',
        short: 'Lash line',
        description: 'A more defined look',
      },
    },
    correctionNote: (months: number) =>
      `The touch-up is done no later than ${months} ${months === 1 ? 'month' : 'months'} after the initial procedure.`,
    ask: 'Ask about a date',
    askStyling: 'Ask about styling',
    askMessage: (service: string) => `Hi! I’d like to ask about an appointment: ${service}.`,
    moreLips: 'More about lips',
    moreBrows: 'More about brows',
    packagesTitle: 'Permanent makeup packages',
    packages: {
      brwiUsta: 'Brows + lips',
      brwiKreska: 'Brows + lash line',
      kreskaUsta: 'Lash line + lips',
      brwiUstaKreska: 'Brows + lips + lash line',
    },
    stylingTitle: 'Brow & lash styling',
    stylingFrom: 'from',
    stylingGroups: {
      brwi: 'Brows',
      rzesy: 'Lashes',
      pakiety: 'Packages',
    },
    styling: {
      regulacja: 'Shaping',
      laminacjaBrwi: 'Lamination',
      regulacjaLaminacja: 'Shaping + lamination',
      regulacjaFarbowanie: 'Shaping + tint',
      regulacjaFarbowanieLaminacja: 'Shaping + tint + lamination',
      farbowanieRzes: 'Tint',
      farbowanieLaminacjaRzes: 'Tint + lamination',
      farbowanieRzesBrwi: 'Lash & brow tint',
      farbowanieLaminacjaRzesBrwi: 'Lash & brow tint + lamination',
    },
  },

  info: {
    consultation: 'Free consultation',
    payment: 'Cash, card, BLIK',
    hours: 'Mon–Sat, by appointment',
  },

  voucher: {
    title: 'Gift voucher',
    text: 'A treatment as a gift — I’ll prepare a voucher.',
    ask: 'Ask about a voucher',
    service: 'gift voucher',
  },

  about: {
    title: 'Hi, I’m Veronika',
    text: 'I used to be **afraid of permanent makeup** myself. Now I do it the way I’d want it — **light and natural**.',
    points: ['Shape and colour matched to you', 'Nothing without your approval', 'Natural result, never overdone'],
    languagesTitle: 'You can message me in:',
    languages: ['Polish', 'Ukrainian', 'Russian', 'English'],
    photoAlt: 'Veronika — permanent makeup artist in Wrocław',
  },

  process: {
    title: 'How it works',
    steps: [
      { title: 'Message', text: 'We pick a date' },
      { title: 'Design', text: 'Shape & colour together' },
      { title: 'Procedure', text: 'About 2 hours' },
      { title: 'Touch-up', text: 'Within 2 months' },
    ],
  },

  reviews: {
    title: 'Client reviews',
    source: 'Source',
  },

  faq: {
    title: 'FAQ',
    more: 'More questions',
    items: [
      {
        q: 'Will it look natural?',
        a: 'Yes — **you see the design on your face** first and we adjust it together.',
        verified: true,
      },
      {
        q: 'How long does it last?',
        a: 'Usually **1–3 years**. The colour fades gradually and doesn’t turn grey-green.',
        verified: true,
      },
      {
        q: 'Does it hurt?',
        a: 'Most people feel **discomfort rather than real pain**.',
        verified: false,
      },
      {
        q: 'What is healing like?',
        a: 'The colour is stronger at first, then softens. **The final result shows once healed.**',
        verified: false,
      },
      {
        q: 'Is a touch-up necessary?',
        a: 'If needed — **within 2 months**. 200 PLN (brows, lips), 150 PLN (lash line).',
        verified: false,
      },
      {
        q: 'How long does the procedure take?',
        a: 'About **2 hours**.',
        verified: true,
      },
      {
        q: 'How should I prepare?',
        a: 'I’ll send you tips when we book your date.',
        verified: false,
      },
      {
        q: 'What should I avoid afterwards?',
        a: 'You’ll get **detailed aftercare instructions**.',
        verified: false,
      },
      {
        q: 'Are there contraindications?',
        a: 'Yes. If you’re pregnant, breastfeeding, on medication or have a skin condition — **message me before booking**.',
        verified: false,
      },
      {
        q: 'Can I come for a consultation without the procedure?',
        a: 'Yes, **the consultation is free**.',
        verified: true,
      },
      {
        q: 'How can I pay?',
        a: '**Cash, card or BLIK.**',
        verified: true,
      },
      {
        q: 'Can I buy a gift voucher?',
        a: 'Yes — **a voucher for the treatment of your choice**. Message me and I’ll prepare it.',
        verified: true,
      },
    ],
  },

  contact: {
    title: 'Book a visit',
    lead: 'Message me — I’ll help you choose.',
    call: 'Call',
    hoursTitle: 'Hours',
    paymentTitle: 'Payment',
    locationTitle: 'Location',
    addressLines: ['Wrocław — Krzyki', 'near Skarbowców Street'],
    addressNote: 'I’ll send the exact address when you book.',
    channelsTitle: 'Contact',
    phone: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Hi! I’d like to ask about permanent makeup.',
    instagram: 'Instagram',
    map: 'View on map',
  },

  footer: {
    privacy: 'Privacy policy',
    backHome: 'Back to the home page',
    notFoundTitle: 'Page not found',
    notFoundText: 'This page doesn’t exist or has moved.',
    tagline: 'permanent makeup, Wrocław — Krzyki',
    rights: 'All rights reserved.',
  },

  lips: {
    metaTitle: 'Permanent lip makeup in Wrocław — natural result | Veronika PMU',
    metaDescription:
      'Permanent lip makeup in Wrocław (Krzyki): an even contour and a natural colour chosen for you. 400 PLN, touch-up 200 PLN. See results and ask about a date.',
    eyebrow: 'Permanent lip makeup · Wrocław',
    title: 'Natural lips that look good from the moment you wake up',
    lead: 'An even contour and fresh colour — **without the “done” look**.',
    pointsTitle: 'What permanent lip makeup gives you',
    points: [
      { title: 'Fresh colour', text: 'No lipstick that wears off.' },
      { title: 'Natural shape', text: 'No forced enlargement.' },
      { title: 'Your shade', text: 'From nude to a brighter pink.' },
    ],
    galleryTitle: 'My work — lips',
    faqTitle: 'Questions about lip makeup',
    otherServices: 'See also brows, lash line and all prices',
  },

  brows: {
    metaTitle: 'Permanent brow makeup in Wrocław — natural result | Veronika PMU',
    metaDescription: 'Permanent brow makeup in Wrocław (Krzyki): a shape matched to your face, no daily filling-in. 400 PLN, touch-up 200 PLN. See results and ask about a date.',
    eyebrow: 'Permanent brow makeup · Wrocław',
    title: 'Brows that look good from the moment you wake up',
    lead: 'A shape matched to your face — **without the “drawn-on” look**.',
    pointsTitle: 'What permanent brow makeup gives you',
    points: [
      { title: 'No filling-in', text: 'Brows ready as soon as you wake up.' },
      { title: 'Shaped to your face', text: 'Designed around your features.' },
      { title: 'Natural colour', text: 'A shade matched to your hair and skin.' },
    ],
    galleryTitle: 'My work — brows',
    faqTitle: 'Questions about brow makeup',
    otherServices: 'See also lips, lash line and all prices',
  },

  // TODO: Veronika musi potwierdzić — do tego czasu sekcja nie jest pokazywana na stronie (site.info.healingVerified).
  healing: {
    title: 'Healing step by step',
    note: 'Approximate — everyone heals a little differently.',
    steps: [
      { when: 'Days 1–3', title: 'Intense colour', text: 'The colour looks darker and stronger than it will be.' },
      { when: 'Days 4–10', title: 'Flaking', text: 'The skin gently flakes — don’t scratch or pick.' },
      { when: 'Weeks 2–4', title: 'Lighter', text: 'The colour may look paler — that’s normal.' },
      { when: '~6 weeks', title: 'Final result', text: 'The healed colour shows — we assess the touch-up.' },
    ],
  },

  dev: pl.dev,
};
