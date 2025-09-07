<template>
  <div class="tw:bg-[url(/media/images/contact.jpg)] tw:h-[100vh]">
    <el-container
      :class="[
        'tw:z-10 tw:mx-auto tw:h-full tw:max-w-7xl tw:px-4 sm:tw:px-6 tw:lg:px-8',
        ,
      ]"
    >
      <el-row>
        <!-- LEFT -->
        <el-col :span="8" class="tw:pt-30 tw:pb-20 tw:text-white">
          <h1
            class="tw:text-5xl tw:font-semibold tw:leading-tight tw:font-heading"
          >
            Talk to Sales
          </h1>
          <span>
            Our team is ready to discuss your business and operational needs,
            schedule a demo or provide a quotation.
          </span>
        </el-col>

        <!-- RIGHT -->
        <el-col :offset="8" :span="16">
          <el-card>
            <el-form
              @submit.prevent="onSubmit"
              class="tw:text-xl"
              size="large"
              label-width="auto"
            >
              <!-- First Name -->
              <el-form-item
                label="First Name"
                :class="{ 'tw:mb-0': showErrors && errors.firstName }"
              >
                <el-input v-model="firstName" />
                <small
                  class="tw:text-red-500"
                  v-if="showErrors && errors.firstName"
                  >{{ errors.firstName }}</small
                >
              </el-form-item>

              <!-- Last Name -->
              <el-form-item
                label="Last Name"
                :class="{ 'tw:mb-0': showErrors && errors.lastName }"
              >
                <el-input v-model="lastName" />
                <small
                  class="tw:text-red-500"
                  v-if="showErrors && errors.lastName"
                  >{{ errors.lastName }}</small
                >
              </el-form-item>

              <!-- Company -->
              <el-form-item label="Company Name">
                <el-input v-model="company" />
              </el-form-item>

              <!-- Email -->
              <el-form-item
                label="Email"
                :class="{ 'tw:mb-0': showErrors && errors.email }"
              >
                <el-input v-model="email" />
                <small
                  class="tw:text-red-500"
                  v-if="showErrors && errors.email"
                  >{{ errors.email }}</small
                >
              </el-form-item>

              <!-- Phone -->
              <el-form-item
                label="Phone Number"
                :class="{ 'tw:mb-0': showErrors && errors.phone }"
              >
                <el-input v-model="phone" />
                <small
                  class="tw:text-red-500"
                  v-if="showErrors && errors.phone"
                  >{{ errors.phone }}</small
                >
              </el-form-item>

              <!-- Message -->
              <el-form-item label="Message">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 8 }"
                  v-model="message"
                />
              </el-form-item>

              <!-- Submit -->
              <el-form-item>
                <el-button
                  type="primary"
                  size="large"
                  native-type="submit"
                  :loading="isSubmitting"
                  class="tw:bg-black tw:font-semibold tw:text-white tw:hover:bg-white/90 tw:hover:text-black tw:transition tw:text-xl tw:hover:border tw:hover:border-black"
                >
                  Submit
                </el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
  </div>
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
  },
});

// v-model fields
const [firstName] = defineField("firstName");
const [lastName] = defineField("lastName");
const [company] = defineField("company");
const [email] = defineField("email");
const [phone] = defineField("phone");
const [message] = defineField("message");

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
