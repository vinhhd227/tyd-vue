// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";

import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"; // 👈 import plugin
import path from "node:path"; // 👈 cần để resolve đường dẫn

export default defineConfig({
  plugins: [
    vue(),
     VueI18nPlugin({
      include: path.resolve(__dirname, "./src/locales/**"), // đường dẫn đến thư mục chứa file dịch
      strictMessage: true, // báo lỗi cú pháp message trong build
    }),
    tailwindcss(),
    AutoImport({
      imports: [
        "vue",
        {
          "vue-i18n": ["useI18n"], // ✅ tự import useI18n
          "@/plugins/i18n": ["setLocale"], // ✅ tự import setLocale
        },
      ], // auto-import ref, reactive, computed, watch...
      dts: "src/auto-imports.d.ts", // (JS có thể bỏ)
      eslintrc: { enabled: true }, // tạo rules cho eslint
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
  },
});
