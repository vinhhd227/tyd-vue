// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
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
});
