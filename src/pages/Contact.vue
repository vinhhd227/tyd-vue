<template>
  <el-container
    :class="[
      'tw:mx-auto',
      'tw:flex tw:flex-col tw:items-center tw:justify-center',
    ]"
  >
    <div
      :span="24"
      :class="[
        'tw:relative',
        'tw:w-[100vw]',
        'tw:lg:pt-40 tw:4xl:py-50 tw:pb-20 tw:pt-40 tw:mb-10',
        'tw:bg-[url(/media/images/contact-banner.png)]',
        'tw:bg-cover tw:bg-center tw:overflow-hidden',
      ]"
    >
      <div
        class="tw:absolute tw:inset-0 tw:bg-gradient-to-t tw:from-black/60 tw:to-transparent tw:z-0"
      ></div>
      <div class="tw:text-center tw:text-white tw:relative tw:z-10">
        <h1
          v-motion-slide-visible-top
          class="tw:text-6xl tw:font-medium tw:leading-tight tw:font-heading"
        >
          {{ $t("pages.contact.title") }}
        </h1>
        <p v-motion-slide-visible-one-bottom class="tw:text-lg tw:mt-3">
          {{ $t("pages.contact.subtitle") }}
        </p>
      </div>
    </div>
    <el-row class="tw:w-full tw:lg:w-[80vw] tw:px-4 tw:3xl:py-10">
      <el-col
        v-motion-slide-visible-left
        :span="24"
        :lg="10"
        :class="['tw:flex tw:flex-col tw:gap-2', 'tw:pb-10']"
      >
        <h2 class="tw:text-3xl tw:font-semibold tw:font-heading">
          {{ $t("pages.contact.info.companyName") }}
        </h2>
        <a
          v-for="info in contactInfo"
          :key="info.label"
          @mouseover="info.isHover = true"
          @mouseleave="info.isHover = false"
          :href="info.ref"
          target="_blank"
        >
          <div
            :class="[
              'tw:flex tw:items-center tw:gap-4',
              'tw:p-4 tw:mr-2',
              'tw:rounded-md',
              info.isHover ? 'tw:bg-gray-900 tw:text-white' : '',
            ]"
          >
            <div
              :class="[
                'tw:rounded-md',
                'tw:p-2',
                'tw:flex tw:justify-center tw-items-center',
                info.isHover ? 'tw:bg-white' : 'tw:bg-gray-200',
              ]"
            >
              <iconify
                :icon="info.icon"
                :class="[
                  'tw:text-2xl',
                  info.isHover ? 'tw:text-gray-800' : 'tw:text-gray-600',
                ]"
              />
            </div>
            <div>
              <p
                :class="[
                  'tw:font-heading tw:font-medium',
                  info.isHover ? 'tw:text-white' : 'tw:text-gray-600',
                ]"
              >
                {{ $t(info.label) }}
              </p>
              <p>{{ $t(info.value) }}</p>
            </div>
          </div>
        </a>
        <div class="tw:flex">
          <h5 class="tw:font-semibold tw:font-heading">
            {{  $t("pages.contact.followUs") }}:
          </h5>
          <div class="tw:flex tw:items-center-safe tw:gap-3 tw:mx-2">
            <el-tooltip
              v-for="link in socialLinks"
              :key="link.label"
              class="box-item"
              effect="dark"
              :content="link.label"
              placement="top-start"
            >
              <a :href="link.url">
                <iconify
                  :icon="link.icon"
                  :class="[
                    'tw:text-2xl',
                    'tw:transition-all tw:duration-500',
                    link.hoverColor,
                  ]"
                />
              </a>
            </el-tooltip>
          </div>
        </div>
      </el-col>
      <el-col v-motion-slide-visible-right :span="24" :lg="14">
        <el-card :class="['tw:rounded-2xl', 'tw:pt-3 tw:px-2']">
          <el-form
            spinner="tw:text-black"
            v-loading="loading"
            @submit.prevent="onSubmit"
            class="tw:text-xl tw:font-heading"
            size="large"
            label-width="auto"
          >
            <el-row>
              <el-col :span="24">
                <el-form-item
                  :class="{ 'tw:mb-0': showErrors && errors.fullName }"
                >
                  <el-input
                    v-model="fullName"
                    :placeholder="$t('pages.contact.form.fullName')"
                  />
                  <small
                    class="tw:text-red-500 tw:pl-3"
                    v-if="showErrors && errors.fullName"
                    >{{ $t(errors.fullName) }}</small
                  >
                </el-form-item>
              </el-col>
              <el-col :span="24" :sm="11">
                <el-form-item
                  :class="{ 'tw:mb-0': showErrors && errors.email }"
                >
                  <el-input
                    v-model="email"
                    :placeholder="$t('pages.contact.form.email')"
                  />
                  <small
                    class="tw:text-red-500 tw:pl-3"
                    v-if="showErrors && errors.email"
                    >{{ $t(errors.email) }}</small
                  >
                </el-form-item>
              </el-col>
              <el-col :span="24" :sm="2">
                <div
                  class="tw:text-center tw:text-sm tw:pb-3 tw:pt-0 tw:md:pb-0 tw:md:pt-3"
                >
                  <span>{{ $t("pages.contact.form.or") }}</span>
                </div>
              </el-col>
              <el-col :span="24" :sm="11">
                <el-form-item
                  :class="{ 'tw:mb-0': showErrors && errors.phone }"
                >
                  <el-input
                    v-model="phone"
                    :placeholder="$t('pages.contact.form.phone')"
                  />
                  <small
                    class="tw:text-red-500 tw:pl-3"
                    v-if="showErrors && errors.phone"
                    >{{ $t(errors.phone) }}</small
                  >
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 8 }"
                    v-model="message"
                    :placeholder="$t('pages.contact.form.message')"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="24" class="tw:text-right">
                <button
                  type="primary"
                  size="large"
                  native-type="submit"
                  :loading="isSubmitting"
                  :class="[
                    'tw:px-6 tw:py-2',
                    'tw:mb-2',
                    'tw:rounded-sm',
                    'tw:bg-black tw:hover:bg-white/90 tw:text-white  tw:hover:text-black tw:hover:border tw:hover:border-black',
                    ' tw:font-medium tw:transition tw:text-lg',
                  ]"
                >
                  {{ $t("pages.contact.form.submit") }}
                </button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>
import { computed, ref } from "vue";
import { useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { supabase } from "@/lib/supabase";
const vm = getCurrentInstance().proxy;
const loading = ref(false);
const contactInfo = reactive([
  {
    icon: "mingcute:location-3-fill",
    label: "pages.contact.label.address",
    value: "pages.contact.info.address",
    ref: "https://maps.app.goo.gl/aSFb8tzmr6WHvaKEA",
    isHover: false,
  },
  {
    icon: "mingcute:phone-fill",
    label: "pages.contact.label.phone",
    value: "pages.contact.info.phone",
    ref: "tel:(+84) 000 000 000",
    isHover: false,
  },
  {
    icon: "mingcute:mail-send-fill",
    label: "pages.contact.label.email",
    value: "pages.contact.info.email",
    ref: "mailto:contact@tydvn.com",
    isHover: false,
  },
]);
const socialLinks = [
  {
    label: "Linkedin",
    url: "",
    icon: "mdi:linkedin",
    hoverColor: "tw:hover:text-sky-600",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/vintech.org.vn/",
    icon: "mdi:facebook",
    hoverColor: "tw:hover:text-blue-600",
  },
  {
    label: "Youtube",
    url: "https://www.youtube.com/@vintech3544",
    icon: "mdi:youtube",
    hoverColor: "tw:hover:text-red-600",
  },
  {
    label: "Instagram",
    url: "",
    icon: "mdi:instagram",
    hoverColor:
      "tw:hover:text-pink-600",
  },
];
const schema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: "pages.contact.form.invalid.fullName" }),
    email: z
      .string()
      .trim()
      .email({ message: "pages.contact.form.invalid.email" })
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9+\-()\s]*$/, { message: "pages.contact.form.invalid.phone" })
      .optional()
      .or(z.literal("")),
    message: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.email && !data.phone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "pages.contact.form.invalid.contact",
        path: ["email"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "pages.contact.form.invalid.contact",
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
    fullName: "",
    email: "",
    phone: "",
    message: "",
    isGetNewsLetter: false,
    isStorePersonalData: false,
  },
});

// v-model fields
const [fullName] = defineField("fullName");
const [email] = defineField("email");
const [phone] = defineField("phone");
const [message] = defineField("message");

const showErrors = computed(() => submitCount.value > 0);

const onSubmit = handleSubmit(async (vals) => {
  if (loading.value) return;
  loading.value = true;

  const payload = {
    full_name: vals.fullName,
    email: vals.email || null,
    phone: vals.phone || null,
    message: vals.message || null,
  };

  const insertPromise = supabase.from("contact_messages").insert([payload]);
  const timeoutMs = 30000; // 30s
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("REQUEST_TIMEOUT")), timeoutMs)
  );

  try {
    const result = await Promise.race([insertPromise, timeoutPromise]);
    if (
      result &&
      typeof result === "object" &&
      "error" in result &&
      result.error
    ) {
      console.error(result.error);
      vm.$sonner.error(vm.$t("pages.contact.form.error"));
      return;
    }
    vm.$sonner.success(vm.$t("pages.contact.form.success"));
    resetForm();
  } catch (err) {
    if (err?.message === "REQUEST_TIMEOUT") {
      vm.$sonner.error("pages.contact.form.timeout");
    } else {
      console.error(err);
      vm.$sonner.error(vm.$t("pages.contact.form.error"));
    }
  } finally {
    loading.value = false;
  }
});
</script>
