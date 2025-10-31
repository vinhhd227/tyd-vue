import { createI18n } from "vue-i18n";

const FALLBACK = "en";

function getStartLocale() {
  const saved = localStorage.getItem("locale");
  if (saved) return saved;
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("vi")) return "vi";
  return "en";
}

export const i18n = createI18n({
  legacy: false, // Composition API
  locale: getStartLocale(),
  fallbackLocale: FALLBACK,
  messages: {}, // sẽ nạp runtime
  globalInjection: true,
  datetimeFormats: {
    en: { short: { year: "numeric", month: "short", day: "numeric" } },
    vi: { short: { day: "2-digit", month: "2-digit", year: "numeric" } },
  },
  numberFormats: {
    en: { currency: { style: "currency", currency: "USD" } },
    vi: { currency: { style: "currency", currency: "VND" } },
  },
});

const messageLoaders = import.meta.glob("../locales/*/*.json");
const loaded = new Set();

function keysForLocale(locale) {
  // Lọc tất cả namespace (common.json, home.json, …) của locale này, nếu có.
  const prefix = `../locales/${locale}/`;
  return Object.keys(messageLoaders).filter((k) => k.startsWith(prefix));
}

async function loadLocaleMessages(locale) {
  if (loaded.has(locale)) return;

  const keys = keysForLocale(locale);
  if (keys.length === 0) {
    throw new Error(
      `[i18n] No JSON found for locale "${locale}" under /src/locales/${locale}/`
    );
  }

  const merged = {};
  for (const key of keys) {
    const mod = await messageLoaders[key](); // dynamic import chunk JSON
    const data = mod.default ?? mod;
    Object.assign(merged, data); // gộp các namespace vào 1 object
  }

  i18n.global.setLocaleMessage(locale, merged);
  loaded.add(locale);
}
export async function setLocale(locale) {
  try {
    await loadLocaleMessages(locale);
  } catch (err) {
    console.error(err);
    if (locale !== FALLBACK) {
      await loadLocaleMessages(FALLBACK);
      locale = FALLBACK;
    } else {
      throw err;
    }
  }
  i18n.global.locale.value = locale;
  localStorage.setItem("locale", locale);
  document.documentElement.lang = locale;
}

export async function initI18n() {
  const start = i18n.global.locale.value;
  try {
    await loadLocaleMessages(start);
  } catch (err) {
    console.error(err);
    if (start !== FALLBACK) {
      await loadLocaleMessages(FALLBACK);
      i18n.global.locale.value = FALLBACK;
    }
  }
  document.documentElement.lang = i18n.global.locale.value;
}
