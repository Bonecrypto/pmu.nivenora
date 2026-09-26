/**
 * Minimalne śledzenie kliknięć CTA (bez własnego systemu analityki).
 *
 * Każdy element z atrybutem data-track="nazwa" wysyła zdarzenie do narzędzia,
 * które jest aktualnie podłączone na stronie (jeśli żadne nie jest — nic się nie dzieje):
 *  - Cloudflare Zaraz (zaraz.track), Plausible, Umami, Google Analytics (gtag).
 *
 * Opcjonalnie data-track-location="hero" itp. — skąd nastąpiło kliknięcie.
 */
type Props = Record<string, string>;
declare global {
  interface Window {
    zaraz?: { track: (name: string, props?: Props) => void };
    plausible?: (name: string, opts?: { props?: Props }) => void;
    umami?: { track: (name: string, props?: Props) => void };
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(name: string, props: Props = {}) {
  try {
    window.zaraz?.track(name, props);
    window.plausible?.(name, { props });
    window.umami?.track(name, props);
    window.gtag?.('event', name, props);
  } catch {
    /* analityka nigdy nie może zepsuć strony */
  }
  if (import.meta.env.DEV) console.info('[track]', name, props);
}

document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]');
  if (!el) return;
  const props: Props = {};
  if (el.dataset.trackLocation) props.location = el.dataset.trackLocation;
  track(el.dataset.track!, props);
});
