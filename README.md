# Veronika PMU — strona internetowa (v1)

Jednostronicowa strona dla Veronika PMU (makijaż permanentny, Wrocław). Cel: **odwiedzająca → zaufanie → zainteresowanie → kontakt**.

Stack: [Astro](https://astro.build) (statyczny HTML, prawie zero JS), optymalizacja zdjęć przez `sharp` (AVIF/WebP, kilka rozmiarów, lazy loading), systemowa czcionka (San Francisco na Apple, Segoe UI na Windows, Roboto na Androidzie) — bez pobierania fontów.

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:4321 — z żółtymi etykietami „do weryfikacji”
npm run build    # wynik w dist/
npm run preview
```

Wymaga Node 22.12+ (`.nvmrc`).

## Deploy — Cloudflare Workers (static assets)

Workers & Pages → Create → Import a repository → to repozytorium. Konfiguracja jest w `wrangler.jsonc`.

| Ustawienie | Wartość |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Build variable (opcjonalnie) | `SITE_URL` = docelowy adres, np. `https://twojadomena.pl` (canonical, Open Graph, sitemap) |

Wersja Node jest brana z `.nvmrc` (22). Działa też Cloudflare Pages (preset Astro, output `dist`).

`public/_headers` ustawia długi cache dla plików `/_astro/*` i podstawowe nagłówki bezpieczeństwa.

**Analityka (bez kodu):** Pages → projekt → Metrics → włącz *Web Analytics* — odwiedziny i źródła ruchu, bez cookies.
Kliknięcia w CTA są oznaczone atrybutami `data-track` (`instagram_dm_click`, `booking_click`, `see_results_click`, `instagram_profile_click`, `portfolio_open`, `portfolio_filter`…). `src/scripts/track.ts` wysyła je automatycznie do Cloudflare Zaraz, Plausible, Umami lub GA — do tego, które zostanie podłączone. Jeśli żadne nie jest podłączone, nic się nie dzieje.

## Gdzie co zmieniać

| Co | Plik |
| --- | --- |
| Ceny, kontakt (telefon, e-mail, WhatsApp, Booksy), adres | `src/config/site.ts` |
| Zdjęcia portfolio | `src/assets/portfolio/` + `src/config/portfolio.ts` |
| Opinie (sekcja pojawi się sama po dodaniu pierwszej) | `src/config/reviews.ts` |
| Wszystkie teksty po polsku, FAQ | `src/i18n/pl.ts` |
| Zdjęcie Veroniki | `src/assets/veronika/veronika.jpg` |

- Kontakt `null` → kanał nie jest pokazywany.
- `bookingUrl` ustawiony → wszystkie główne przyciski zmieniają się z „Napisz na Instagramie” na „Umów wizytę”.
- Portfolio: `stage: 'healed'` → etykieta „Wygojone” i miejsce na początku galerii.

**Języki:** polski (`/`), ukraiński (`/uk/`), angielski (`/en/`), rosyjski (`/ru/`). Teksty: `src/i18n/pl.ts`, `uk.ts`, `en.ts`, `ru.ts` — ten sam kształt, `npm run check` pokaże, jeśli czegoś brakuje. Zmieniając tekst po polsku, zmień go też w pozostałych plikach.
Przełącznik języków jest w nagłówku (dla rosyjskiego celowo bez flagi — sam kod „RU”). Adresy podstron w każdym języku: `src/i18n/locales.ts`. Jeśli język przeglądarki różni się od języka strony, na górze pojawia się pasek z propozycją zmiany (bez automatycznych przekierowań).
Nowy język: kopia `pl.ts` → wpis w `src/i18n/locales.ts` i `src/i18n/index.ts` → `src/pages/<lang>/index.astro`.

**Podgląd linku (Open Graph):** `public/og/{pl,uk,en}.jpg` — generowane przez `node scripts/make-og.cjs` (Playwright). Wygeneruj ponownie po zmianie zdjęć lub tekstów.

**Strona o ustach:** `/makijaz-permanentny-ust/` (`/uk/lips/`, `/en/lips/`, `/ru/lips/`) — pod wyszukiwanie „makijaż permanentny ust Wrocław” i reklamy. Teksty: sekcja `lips` w plikach językowych, komponent `src/components/LipsPage.astro`.

**„Zapytaj o termin”:** przy każdej usłudze — WhatsApp z gotową wiadomością zawierającą nazwę usługi (`src/components/ServiceInquiry.astro`). Bez WhatsApp → Instagram.

**Kody QR:** `node scripts/make-qr.cjs` → `docs/qr/` (Instagram). Z `SITE_URL=https://… node scripts/make-qr.cjs` także QR do strony (z `?utm_source=qr`).

**Google Search Console:** metoda „tag HTML” → wartość `content` jako zmienna budowania `PUBLIC_GOOGLE_SITE_VERIFICATION`.

**Polityka prywatności:** `src/content/privacy.ts` (strony `/polityka-prywatnosci/`, `/uk/privacy/`, `/en/privacy/`).

**Cloudflare Web Analytics:** Workers & Pages → Web Analytics → Add a site → skopiuj token → zmienna budowania `PUBLIC_CF_BEACON_TOKEN`. Bez tokenu skrypt nie jest dodawany.

**Teksty poza stroną** (Google Business Profile, bio na Instagramie, prośba o opinię, pytania do Veroniki): [`docs/marketing.md`](docs/marketing.md).

## Przed publikacją — do uzupełnienia / potwierdzenia

Założenia tymczasowe (oznaczone w kodzie jako `TEMP` / `TODO`):

- [ ] **Zdjęcia portfolio** — obecnie to kadry ze zrzutu ekranu Instagrama (~470 px — lepiej, ale to wciąż zrzuty ekranu). Potrzebne oryginały z telefonu (bez filtrów). Oznaczyć, które są wygojone, a które tuż po zabiegu.
- [ ] **Teksty FAQ z etykietą „Do weryfikacji”** (ból, gojenie, czy korekta jest konieczna, przygotowanie, pielęgnacja, przeciwwskazania) — Veronika musi potwierdzić lub poprawić. Widoczne w `npm run dev`.
- [ ] **Adres** — teraz: „Krzyki, okolice ul. Skarbowców, dokładny adres podam przy umawianiu”.
- [ ] **System rezerwacji** (np. Booksy) — teraz Instagram DM, telefon i WhatsApp.
- [x] **Domena:** https://pmunivenora.com (domyślnie w `astro.config.mjs`).
- [ ] **Polityka prywatności** — gotowa wersja podstawowa; Veronika sprawdza, ewentualnie dopisuje dane firmy (imię i nazwisko / NIP).
- [ ] Tekst „O mnie” — przeczytać z Veroniką, czy brzmi jak ona.

Zasady treści: tylko prawdziwe prace, prawdziwe opinie, żadnych wymyślonych liczb klientek, lat doświadczenia, certyfikatów ani obietnic medycznych.
