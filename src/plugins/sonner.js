// src/plugins/sonner.js
import { toast } from 'vue-sonner'

export default {
  install(app) {
    // gắn vào global property
    app.config.globalProperties.$sonner = toast
  }
}
