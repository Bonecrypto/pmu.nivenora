/**
 * Polityka prywatności — prosta wersja dla strony bez formularzy i bez cookies.
 * TODO (przed publikacją): Veronika powinna sprawdzić treść; jeśli działalność jest zarejestrowana,
 * dopisać pełne dane administratora (imię i nazwisko / firma, NIP) w polu `admin`.
 * Jeśli na stronie pojawi się inna analityka niż Cloudflare Web Analytics albo formularz — zaktualizować.
 */
import { site } from '../config/site';
import type { Locale } from '../i18n/locales';

const phone = site.contact.phone ?? '';
const ig = `@${site.instagram.handle}`;

export interface PrivacyDoc {
  title: string;
  updated: string;
  sections: { h: string; p: string[] }[];
}

export const privacy: Record<Locale, PrivacyDoc> = {
  pl: {
    title: 'Polityka prywatności',
    updated: 'Ostatnia aktualizacja: wrzesień 2026',
    sections: [
      {
        h: 'Kto jest administratorem danych',
        p: [
          `Administratorem danych jest Veronika, prowadząca ${site.brand} we Wrocławiu. Kontakt: tel. ${phone}, Instagram ${ig}.`,
        ],
      },
      {
        h: 'Jakie dane i po co',
        p: [
          'Strona nie ma formularzy i nie wymaga podawania danych. Jeśli napiszesz do mnie przez Instagram, WhatsApp lub zadzwonisz, przetwarzam dane, które sama przekażesz (np. imię, numer telefonu, treść wiadomości), wyłącznie po to, żeby odpowiedzieć i umówić wizytę.',
          'Podstawą jest podjęcie działań na Twoją prośbę przed zawarciem umowy (art. 6 ust. 1 lit. b RODO). Dane przechowuję tak długo, jak jest to potrzebne do kontaktu i realizacji wizyty oraz wymagają tego przepisy.',
        ],
      },
      {
        h: 'Cookies i statystyki',
        p: [
          'Strona nie używa plików cookie. Może korzystać z Cloudflare Web Analytics — narzędzia bez cookies, które zbiera zbiorcze, anonimowe statystyki odwiedzin (np. liczba wejść, kraj, rodzaj urządzenia).',
        ],
      },
      {
        h: 'Hosting i inne serwisy',
        p: [
          'Strona jest hostowana przez Cloudflare, który technicznie przetwarza m.in. adres IP w celu dostarczenia strony i ochrony przed atakami.',
          'Instagram i WhatsApp należą do Meta Platforms — jeśli piszesz przez te aplikacje, obowiązują także ich zasady prywatności.',
        ],
      },
      {
        h: 'Twoje prawa',
        p: [
          'Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i sprzeciwu, a także prawo skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO). W sprawie danych napisz lub zadzwoń — dane kontaktowe powyżej.',
        ],
      },
    ],
  },
  uk: {
    title: 'Політика конфіденційності',
    updated: 'Останнє оновлення: вересень 2026',
    sections: [
      {
        h: 'Хто відповідає за дані',
        p: [`Адміністратор даних — Вероніка, ${site.brand}, Вроцлав. Контакт: тел. ${phone}, Instagram ${ig}.`],
      },
      {
        h: 'Які дані і навіщо',
        p: [
          'На сайті немає форм, і вводити дані не потрібно. Якщо ти пишеш мені в Instagram, WhatsApp або телефонуєш, я обробляю дані, які ти сама надаєш (ім’я, номер телефону, зміст повідомлення), лише щоб відповісти та записати тебе на візит.',
          'Підстава — дії на твоє прохання до укладення договору (ст. 6 ч. 1 п. b GDPR). Дані зберігаю стільки, скільки потрібно для зв’язку та візиту або скільки вимагає закон.',
        ],
      },
      {
        h: 'Cookies і статистика',
        p: [
          'Сайт не використовує cookies. Може використовуватися Cloudflare Web Analytics — інструмент без cookies, який збирає загальну анонімну статистику відвідувань.',
        ],
      },
      {
        h: 'Хостинг та інші сервіси',
        p: [
          'Сайт розміщено на Cloudflare, який технічно обробляє, зокрема, IP-адресу, щоб показати сторінку та захистити її від атак.',
          'Instagram і WhatsApp належать Meta Platforms — під час листування там діють також їхні правила конфіденційності.',
        ],
      },
      {
        h: 'Твої права',
        p: [
          'Ти маєш право на доступ до своїх даних, їх виправлення, видалення, обмеження обробки та заперечення, а також право подати скаргу до польського органу захисту даних (UODO). З питань даних пиши або телефонуй — контакти вище.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: September 2026',
    sections: [
      {
        h: 'Who is the data controller',
        p: [`The data controller is Veronika, running ${site.brand} in Wrocław. Contact: phone ${phone}, Instagram ${ig}.`],
      },
      {
        h: 'What data and why',
        p: [
          'This site has no forms and doesn’t ask for any data. If you message me on Instagram or WhatsApp or call me, I process the data you provide (e.g. name, phone number, message content) only to reply and book your visit.',
          'The legal basis is taking steps at your request before entering into a contract (Art. 6(1)(b) GDPR). I keep the data as long as needed for contact and your visit, or as required by law.',
        ],
      },
      {
        h: 'Cookies and statistics',
        p: [
          'This site does not use cookies. It may use Cloudflare Web Analytics — a cookie-free tool that collects aggregated, anonymous visit statistics.',
        ],
      },
      {
        h: 'Hosting and other services',
        p: [
          'The site is hosted by Cloudflare, which technically processes data such as your IP address to deliver the site and protect it from attacks.',
          'Instagram and WhatsApp are operated by Meta Platforms — their privacy policies also apply when you message me there.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You have the right to access, correct and delete your data, to restrict or object to processing, and to lodge a complaint with the Polish data protection authority (UODO). For data matters, message or call me — contact details above.',
        ],
      },
    ],
  },
};
