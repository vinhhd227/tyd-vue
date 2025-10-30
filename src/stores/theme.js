// /src/stores/theme.js
import { defineStore } from 'pinia'

const STORAGE_KEY = 'app.theme.mode' // 'light' | 'dark' | 'system'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: /** @type {'light'|'dark'|'system'} */ (localStorage.getItem(STORAGE_KEY) || 'system'),
    systemPrefersDark: false,
    initialized: false,
  }),
  getters: {
    // Kết quả cuối cùng có đang "tối" không?
    isDark(state) {
      return state.mode === 'dark' || (state.mode === 'system' && state.systemPrefersDark)
    },
    // Mode đang hiệu lực (đã resolve 'system' -> 'light'/'dark')
    effectiveMode(state) {
      return this.isDark ? 'dark' : 'light'
    },
  },
  actions: {
    init() {
      // Lắng nghe system theme
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const updateSystem = () => {
        this.systemPrefersDark = mq.matches
        this.applyToDom()
      }
      // khởi tạo
      this.systemPrefersDark = mq.matches
      mq.addEventListener?.('change', updateSystem) || mq.addListener(updateSystem)

      this.applyToDom()
      this.initialized = true
    },
    setMode(mode /* 'light'|'dark'|'system' */) {
      this.mode = mode
      localStorage.setItem(STORAGE_KEY, mode)
      this.applyToDom()
    },
    toggle() {
      // Quy tắc: nếu đang dark -> light, ngược lại -> dark (không đi qua 'system')
      this.setMode(this.isDark ? 'light' : 'dark')
    },
    applyToDom() {
      // Áp dụng cho Tailwind (darkMode: 'class')
      const root = document.documentElement
      root.classList.toggle('dark', this.isDark)

      // Tùy ý: gắn data-attr để CSS/Element Plus có thể đọc
      root.setAttribute('data-theme', this.effectiveMode)

      // Nếu bạn dùng Element Plus dark， thêm dòng sau:
      // document.documentElement.classList.toggle('el-theme-dark', this.isDark)
    },
  },
})
