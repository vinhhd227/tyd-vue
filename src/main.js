// Style
import "element-plus/dist/index.css";
import "@/assets/scss/main.scss";
import "@/assets/css/tailwind.css";
import "vue-sonner/style.css";
import "@/assets/css/sonner-fix.css";

import { createApp } from "vue";
// Pinia
import { createPinia } from "pinia";
// Element Plus
import ElementPlus from "element-plus";
// Plugins
import dayjsPlugin from "./plugins/dayjs";
import sonnerPlugin from "./plugins/sonner";
import { setupVeeValidate } from "./plugins/vee-validate.config";

// Component
import { Icon } from "@iconify/vue";
import Vue3Marquee from 'vue3-marquee'

import { createHead } from "@vueuse/head";
import router from "./router";

import App from "./App.vue";
setupVeeValidate();

const app = createApp(App);
app.use(dayjsPlugin);
app.use(sonnerPlugin);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.component("icon", Icon);
app.use(Vue3Marquee);
app.use(createHead());
app.mount("#app");
export default router;
