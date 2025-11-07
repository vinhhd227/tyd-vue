// Style
import "element-plus/dist/index.css";
import "@/assets/scss/main.scss";
import "@/assets/css/tailwind.css";
import "vue-sonner/style.css";
import "@/assets/css/sonner-fix.css";
import "vue3-carousel/carousel.css";

import { createApp } from "vue";
// Pinia
import { createPinia } from "pinia";
// Element Plus
import ElementPlus from "element-plus";
// Plugins
import dayjsPlugin from "./plugins/dayjs";
import sonnerPlugin from "./plugins/sonner";
import { setupVeeValidate } from "./plugins/vee-validate.config";
import { MotionPlugin } from "@vueuse/motion";
import { i18n, initI18n } from "./plugins/i18n";
import { swiperModules } from "./plugins/swiper.js";
// Component
import iconify from "./components/Iconify.vue";
import Vue3Marquee from "vue3-marquee";
import { Swiper, SwiperSlide } from "swiper/vue";
//
import CustomBackground from "./components/CustomBackground.vue";

import { createHead } from "@vueuse/head";
import router from "./router";

import App from "./App.vue";
setupVeeValidate();

const app = createApp(App);
app.use(i18n);
app.use(dayjsPlugin);
app.use(sonnerPlugin);
app.use(MotionPlugin);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.component("iconify", iconify);
app.component("swiper", Swiper);
app.component("swiper-slide", SwiperSlide);
app.component("custom-background", CustomBackground);
app.config.globalProperties.$swiperModules = swiperModules;
app.use(Vue3Marquee);
app.use(createHead());
initI18n().then(() => {
  app.mount("#app");
});
export default router;
