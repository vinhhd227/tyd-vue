// Cấu hình VeeValidate dùng chung cho toàn app (Vue 3)
import { configure } from "vee-validate";
// (tuỳ chọn) i18n cho message
// import { localize, setLocale } from '@vee-validate/i18n'
// import vi from '@vee-validate/i18n/dist/locale/vi.json'

export function setupVeeValidate() {
  configure({
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnInput: false,
    validateOnModelUpdate: false,

    // (tuỳ chọn) Chuẩn hoá cách lấy message lỗi
    generateMessage: ({ field, _value, rule }) => {
      // field: tên v-model, rule: tên rule (required, email, min, ...)
      // Bạn có thể map tiếng Việt hoặc đổi nhãn field tại đây
      const fieldLabel = fieldMap[field] ?? field;
      switch (rule) {
        case "required":
          return `${fieldLabel} is required`;
        case "email":
          return `${fieldLabel} is invalid`;
        default:
          return ` ${fieldLabel} is invalid`;
      }
    },

    // (tuỳ chọn) handle lỗi submit cho toàn app
    // @see https://vee-validate.logaretm.com/v4/api/configuration
    bails: true,
  });

  // (tuỳ chọn) i18n cách 2 – nếu muốn dùng @vee-validate/i18n
  // localize({ vi })
  // setLocale('vi')
}

const fieldMap = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  isGetNewsLetter: "Get newsletter",
  isStorePersonalData: "Store personal data",
};
