<template>
  <el-container :class="['tw:mx-auto tw:min-h-[100vh] tw:max-w-[80vw]']">
    <el-row class="tw:w-full">
      <el-col :span="8" class="tw:pt-30 tw:pb-10">
        <h1 class="tw:text-6xl tw:font-medium tw:leading-tight tw:font-heading">
          Talk to Sales
        </h1>
        <span>
          Our team is ready to discuss your business and operational needs,
          schedule a demo or provide a quotation.
        </span>
      </el-col>
      <el-col :offset="8" :span="16">
        <el-card>
          <el-form
            @submit.prevent="onSubmit"
            class="tw:text-xl"
            size="large"
            label-width="auto"
          >
            <el-form-item
              :class="{ 'tw:mb-0': showErrors && errors.firstName }"
            >
              <el-input v-model="firstName" placeholder="First Name *" />
              <small
                class="tw:text-red-500"
                v-if="showErrors && errors.firstName"
                >{{ errors.firstName }}</small
              >
            </el-form-item>

            <el-form-item :class="{ 'tw:mb-0': showErrors && errors.lastName }">
              <el-input v-model="lastName" placeholder="Last Name *" />
              <small
                class="tw:text-red-500"
                v-if="showErrors && errors.lastName"
                >{{ errors.lastName }}</small
              >
            </el-form-item>

            <el-form-item>
              <el-input v-model="company" placeholder="Company Name" />
            </el-form-item>

            <el-form-item :class="{ 'tw:mb-0': showErrors && errors.email }">
              <el-input v-model="email" placeholder="Email *" />
              <small
                class="tw:text-red-500"
                v-if="showErrors && errors.email"
                >{{ errors.email }}</small
              >
            </el-form-item>

            <el-form-item :class="{ 'tw:mb-0': showErrors && errors.phone }">
              <el-input v-model="phone" placeholder="Phone Number *" />
              <small
                class="tw:text-red-500"
                v-if="showErrors && errors.phone"
                >{{ errors.phone }}</small
              >
            </el-form-item>

            <el-form-item>
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8 }"
                v-model="message"
                placeholder="Message"
              />
            </el-form-item>
            <p class="tw:text-sm">
              TYD is committed to protecting and respecting your privacy, and
              we’ll only use your personal information to administer your
              account and to provide the products and services you requested
              from us. From time to time, we would like to contact you about our
              products and services, as well as other content that may be of
              interest to you. If you consent to us contacting you for this
              purpose, please tick below to say how you would like us to contact
              you:
            </p>
            <el-checkbox
              :class="{ 'tw:mb-0': showErrors && errors.isGetNewsLetter }"
              v-model="isGetNewsLetter"
              >I agree to receive communications from TYD.<span
                class="tw:text-red-500"
                >*</span
              >
            </el-checkbox>

            <small
              class="tw:text-red-500 tw:text-xs tw:block tw:h-[25px]"
              v-if="showErrors && errors.isGetNewsLetter"
              >{{ errors.isGetNewsLetter }}</small
            >
            <p class="tw:text-sm">
              In order to provide you the content requested, we need to store
              and process your personal data. If you consent to us storing your
              personal data for this purpose, please tick the checkbox below.
            </p>
            <el-checkbox
              :class="{ 'tw:mb-0': showErrors && errors.isStorePersonalData }"
              v-model="isStorePersonalData"
              >I agree to allow TYD to store and process my personal data.
              <span class="tw:text-red-500">*</span>
            </el-checkbox>
            <small
              class="tw:text-red-500 tw:text-xs tw:block tw:h-[25px]"
              v-if="showErrors && errors.isStorePersonalData"
              >{{ errors.isStorePersonalData }}</small
            >
            <p class="tw:text-sm">
              You can unsubscribe from these communications at any time. For
              more information on how to unsubscribe, our privacy practices, and
              how we are committed to protecting and respecting your privacy,
              please review our Privacy Policy.
            </p>
            <!-- Submit -->
            <el-form-item>
              <button
                type="primary"
                size="large"
                native-type="submit"
                :loading="isSubmitting"
                :class="[
                  'tw:px-6 tw:py-2',
                  'tw:my-6',
                  'tw:rounded-sm',
                  'tw:bg-black tw:hover:bg-white/90 tw:text-white  tw:hover:text-black tw:hover:border tw:hover:border-black',
                  ' tw:font-medium tw:transition tw:text-lg',
                ]"
              >
                Submit
              </button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>
import { computed } from "vue";
import { useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { supabase } from "@/lib/supabase"; // 👈 đường dẫn đúng file bạn tạo
const vm = getCurrentInstance().proxy;
const schema = z
  .object({
    firstName: z.string().trim().min(1, { message: "First name is required" }),
    lastName: z.string().trim().min(1, { message: "Last name is required" }),
    company: z.string().trim().optional(),
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email" })
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9+\-()\s]*$/, { message: "Invalid phone" })
      .optional()
      .or(z.literal("")),
    message: z.string().trim().optional(),
    isGetNewsLetter: z.boolean().refine((v) => v === true, {
      message: "Please complete all required fields",
    }),
    isStorePersonalData: z.boolean().refine((v) => v === true, {
      message: "Please complete all required fields",
    }),
  })
  .superRefine((data, ctx) => {
    if (!data.email && !data.phone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please provide at least Email or Phone Number",
        path: ["email"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please provide at least Email or Phone Number",
        path: ["phone"],
      });
    }
  });

const {
  handleSubmit,
  errors,
  submitCount,
  isSubmitting,
  defineField,
  resetForm,
  setErrors,
} = useForm({
  validationSchema: toTypedSchema(schema),
  validateOnMount: false,
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
  initialValues: {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    isGetNewsLetter: false,
    isStorePersonalData: false,
  },
});

// v-model fields
const [firstName] = defineField("firstName");
const [lastName] = defineField("lastName");
const [company] = defineField("company");
const [email] = defineField("email");
const [phone] = defineField("phone");
const [message] = defineField("message");
const [isGetNewsLetter] = defineField("isGetNewsLetter");
const [isStorePersonalData] = defineField("isStorePersonalData");

const showErrors = computed(() => submitCount.value > 0);

const onSubmit = handleSubmit(async (vals) => {
  // map field name -> db columns
  const payload = {
    first_name: vals.firstName,
    last_name: vals.lastName,
    company: vals.company || null,
    email: vals.email || null,
    phone: vals.phone || null,
    message: vals.message || null,
  };

  const { error } = await supabase.from("contact_messages").insert([payload]);
  if (error) {
    console.error(error);
    vm.$sonner.error("Submit failed, please try again later");
    return;
  }
  console.log(vm);
  console.log(vm.$sonner);
  vm.$sonner.success("Thank you! We received your message.");

  resetForm();
});
</script>
