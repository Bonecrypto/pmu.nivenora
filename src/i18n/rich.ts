/**
 * Mini-formatowanie tekstów: **tekst** → wyróżnienie (pogrubienie z delikatnym podkreśleniem).
 * Reszta jest escapowana, więc w tekstach nie da się wstawić własnego HTML.
 */
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const rich = (s: string) => escape(s).replace(/\*\*(.+?)\*\*/g, '<strong class="hl">$1</strong>');

/** Ten sam tekst bez znaczników — do meta, JSON-LD, atrybutów. */
export const plain = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '$1');
