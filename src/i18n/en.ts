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
    lead: 'Brows, lips and lash line designed for your face — so that after the procedure **you still look like you**.',
    artistLine: 'Veronika · permanent makeup artist',
    priceFrom: 'Permanent makeup from',
    place: 'Wrocław · Krzyki, near Skarbowców St.',
  },

  portfolio: {
    title: 'Results',
    lead: 'Real work from my studio. Every shape and colour was chosen individually.',
    healingNote:
      'Right after the procedure the colour is more intense than once healed — it softens over time. I’ll keep adding photos of healed results.',
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
    title: 'Services & prices',
    lead: 'Clear prices, no surprises. Not sure which treatment to choose? Message me and I’ll help.',
    currency: 'PLN',
    correction: 'Touch-up',
    pmu: {
      usta: {
        name: 'Permanent lip makeup',
        short: 'Lips',
        description:
          'An even contour and a fresh, natural colour. We choose the shade together — from a soft nude to a brighter pink.',
      },
      brwi: {
        name: 'Permanent brow makeup',
        short: 'Brows',
        description: 'Brows that look good from the moment you wake up, no daily filling in. Shape matched to your face.',
      },
      kreska: {
        name: 'Lash line enhancement',
        short: 'Lash line',
        description: 'A subtly defined lash line that makes your eyes look more defined — even without makeup.',
      },
    },
    correctionNote: (months: number) =>
      `The touch-up is done no later than ${months} ${months === 1 ? 'month' : 'months'} after the initial procedure.`,
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

  about: {
    title: 'Hi, I’m Veronika',
    text: 'I used to be **afraid of permanent makeup** myself — blue brows, harsh outlines. Now I do it the way I’d want it for myself: **light and natural**. My favourite to work on: **lips**.',
    points: ['Shape and colour matched to you', 'Nothing without your approval', 'Natural result, never overdone'],
    languagesTitle: 'You can message me in:',
    languages: ['Polish', 'Ukrainian', 'Russian', 'English'],
    photoAlt: 'Veronika — permanent makeup artist in Wrocław',
  },

  process: {
    title: 'How a visit works',
    steps: [
      { title: 'Message', text: 'Tell me which treatment you’re interested in. We pick a date and I answer your questions.' },
      {
        title: 'Design',
        text: 'I draw the shape on your face and we choose the colour together. I only start once **you love the design**.',
      },
      {
        title: 'Procedure & healing',
        text: 'The procedure takes **about 2 hours**. Afterwards you get aftercare instructions for the healing period.',
      },
      { title: 'Touch-up', text: 'If anything needs adding, we book a touch-up — **no later than 2 months** after.' },
    ],
  },

  reviews: {
    title: 'Client reviews',
    source: 'Source',
  },

  faq: {
    title: 'FAQ',
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
    ],
  },

  contact: {
    title: 'Book a visit',
    lead: 'Tell me which treatment you’re interested in — I’ll help you choose and answer all your questions. You can also call or message me on WhatsApp.',
    call: 'Call',
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
    tagline: 'permanent makeup, Wrocław — Krzyki',
    rights: 'All rights reserved.',
  },

  langSuggest: {
    text: 'This page is available in English.',
    cta: 'Switch',
    close: 'Close',
  },

  dev: pl.dev,
};
