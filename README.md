# Veronika PMU — strona internetowa (v1)

Jednostronicowa strona dla Veronika PMU (makijaż permanentny, Wrocław). Cel: **odwiedzająca → zaufanie → zainteresowanie → kontakt**.

Stack: [Astro](https://astro.build) (statyczny HTML, prawie zero JS), optymalizacja zdjęć przez `sharp` (AVIF/WebP, kilka rozmiarów, lazy loading), czcionka Fraunces hostowana lokalnie (bez Google Fonts → bez problemów z RODO).

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

**Nowy język** (np. ukraiński): skopiuj `src/i18n/pl.ts` → `uk.ts`, przetłumacz, dodaj do `src/i18n/index.ts`, utwórz `src/pages/uk/index.astro` z `<HomePage locale="uk" />`, dopisz `/uk/` do `src/pages/sitemap.xml.ts`.

## Przed publikacją — do uzupełnienia / potwierdzenia

Założenia tymczasowe (oznaczone w kodzie jako `TEMP` / `TODO`):

- [ ] **Zdjęcia portfolio** — obecnie to kadry ze zrzutu ekranu Instagrama (~180 px, niska jakość). Potrzebne oryginały z telefonu (bez filtrów). Oznaczyć, które są wygojone, a które tuż po zabiegu.
- [ ] **Teksty FAQ z etykietą „Do weryfikacji”** (ból, gojenie, czy korekta jest konieczna, przygotowanie, pielęgnacja, przeciwwskazania) — Veronika musi potwierdzić lub poprawić. Widoczne w `npm run dev`.
- [ ] **Adres** — teraz: „Krzyki, okolice ul. Skarbowców, dokładny adres podam przy umawianiu”.
- [ ] **Dodatkowe kanały kontaktu** (telefon / WhatsApp / Booksy) — teraz tylko Instagram DM.
- [ ] **Domena** i `SITE_URL`.
- [ ] **Polityka prywatności** — zależy od finalnej analityki i formy kontaktu (obecnie strona nie używa cookies ani formularzy).
- [ ] Tekst „O mnie” — przeczytać z Veroniką, czy brzmi jak ona.

Zasady treści: tylko prawdziwe prace, prawdziwe opinie, żadnych wymyślonych liczb klientek, lat doświadczenia, certyfikatów ani obietnic medycznych.
