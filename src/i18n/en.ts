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
        a: 'That’s my main goal. We choose the shape and colour together, and **you see the design on your face** before we start. If something isn’t right, we change it first.',
        verified: true,
      },
      {
        q: 'How long does it last?',
        a: 'Usually **1 to 3 years**. The colour doesn’t turn grey-green over time — it simply fades gradually.',
        verified: true,
      },
      {
        q: 'Does it hurt?',
        a: 'Everyone feels it differently. Most people describe it as **discomfort rather than real pain**. I’ll tell you what to expect before we start.',
        verified: false,
      },
      {
        q: 'What is healing like?',
        a: 'Right after the procedure the colour is more intense; over the next days the skin heals and the colour softens. **You see the final result once it’s healed.** You’ll get detailed aftercare instructions.',
        verified: false,
      },
      {
        q: 'Is a touch-up necessary?',
        a: 'Everyone’s skin heals differently, so after healing we assess the result and, if needed, add colour or refine the shape. I do touch-ups **no later than 2 months** after the initial procedure. It costs 200 PLN (brows, lips) or 150 PLN (lash line).',
        verified: false,
      },
      {
        q: 'How long does the procedure take?',
        a: 'Plan for **about 2 hours**.',
        verified: true,
      },
      {
        q: 'How should I prepare?',
        a: 'I’ll send you preparation tips when we book your date. If you have questions, message me beforehand.',
        verified: false,
      },
      {
        q: 'What should I avoid afterwards?',
        a: 'You’ll get detailed aftercare instructions after the procedure. Following them makes a big difference to the healed result.',
        verified: false,
      },
      {
        q: 'Are there contraindications?',
        a: 'Yes — in some cases the procedure has to be postponed or isn’t possible. If you’re pregnant, breastfeeding, taking medication or have a skin condition, **message me before booking** and we’ll talk it through.',
        verified: false,
      },
      {
        q: 'Can I come for a consultation without the procedure?',
        a: 'Yes, **the consultation is free**. We’ll talk through the shape, colour and your questions — no obligation.',
        verified: true,
      },
      {
        q: 'How can I pay?',
        a: '**Cash, card or BLIK.**',
        verified: true,
      },
      {
        q: 'Can I buy a gift voucher?',
        a: 'Yes — a **gift voucher** for the treatment of your choice. Message me and I’ll prepare it.',
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

  dev: pl.dev,
};
