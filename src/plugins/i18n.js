import { createI18n } from 'vue-i18n';

const FALLBACK = 'en';

function getStartLocale() {
  const saved = localStorage.getItem('locale');
  if (saved) return saved;
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('vi')) return 'vi';
  return 'en';
}

export const i18n = createI18n({
  legacy: false,                // Composition API
  locale: getStartLocale(),
  fallbackLocale: FALLBACK,
  messages: {},                 // sẽ nạp runtime
  globalInjection: true,
  datetimeFormats: {
    en: { short: { year: 'numeric', month: 'short', day: 'numeric' } },
    vi: { short: { day: '2-digit', month: '2-digit', year: 'numeric' } }
  },
  numberFormats: {
    en: { currency: { style: 'currency', currency: 'USD' } },
    vi: { currency: { style: 'currency', currency: 'VND' } }
  }
});

const loaded = new Set();

async function loadLocaleMessages(locale) {
  if (loaded.has(locale)) return;
  const mod = await import(/* @vite-ignore */ `../locales/${locale}/common.json`);
  i18n.global.setLocaleMessage(locale, mod.default || mod);
  loaded.add(locale);
}

export async function setLocale(locale) {
  await loadLocaleMessages(locale);
  i18n.global.locale.value = locale;
  localStorage.setItem('locale', locale);
  document.documentElement.lang = locale;
}

export async function initI18n() {
  const start = i18n.global.locale.value;
  await loadLocaleMessages(start);
  document.documentElement.lang = start;
}
