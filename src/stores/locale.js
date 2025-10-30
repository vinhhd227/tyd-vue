import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useStorage } from "@vueuse/core";
import { i18n, setLocale } from "@/plugins/i18n";

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE = i18n.global.locale.value;

export const useLocaleStore = defineStore("locale", () => {
  const storedLocale = useStorage(STORAGE_KEY, DEFAULT_LOCALE);

  const availableLocales = ref([
    { code: "en", label: "English", short: "EN" },
    { code: "vi", label: "Tieng Viet", short: "VI" },
  ]);

  const locale = computed(() => storedLocale.value);
  const isEnglish = computed(() => locale.value === "en");

  async function changeLocale(code) {
    if (!code || code === locale.value) return;
    await setLocale(code);
    storedLocale.value = code;
  }

  async function initLocale() {
    await setLocale(locale.value);
  }

  watch(
    () => i18n.global.locale.value,
    (value) => {
      if (value !== storedLocale.value) {
        storedLocale.value = value;
      }
    }
  );

  return {
    locale,
    availableLocales,
    isEnglish,
    changeLocale,
    initLocale,
  };
});
