import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'

dayjs.extend(relativeTime)
dayjs.locale('vi')

export default {
  install: (app) => {
    // gán trực tiếp function dayjs
    app.config.globalProperties.$dayjs = dayjs
  }
}

export { dayjs } // cho trường hợp import thủ công trong script
