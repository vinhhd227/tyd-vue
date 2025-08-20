// vite.config.js (ESM)
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// PostCSS plugins (Tailwind v4)
import tailwindcss from '@tailwindcss/vite'

import path from 'path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
