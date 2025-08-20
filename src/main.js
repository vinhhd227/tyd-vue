import "element-plus/dist/index.css";

import '@/assets/scss/main.scss'
import '@/assets/css/tailwind.css'
import { createApp } from "vue";

import { createPinia } from "pinia";

import ElementPlus from "element-plus";

import { createHead } from "@vueuse/head";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.use(createHead());
app.mount("#app");
