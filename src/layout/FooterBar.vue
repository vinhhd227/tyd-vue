<template>
  <el-footer
    class="app-footer tw:h-auto tw:bg-neutral-200 tw:py-8 tw:border-t tw:border-neutral-300 tw:font-heading"
  >
    <el-container class="tw:mt-3">
      <el-card class="tw:w-full tw:bg-white/70 tw:backdrop-blur">
        <div class="tw:flex tw:justify-between">
          <div class="tw:w-1/3">
            <slot name="logo">
              <img
                src="/media/images/tyd-logo.svg"
                alt="logo"
                class="tw:w-[120px] tw:h-auto"
              />
            </slot>
          </div>
          <div>
            <slot name="subscribeForm">
              <el-form :inline="true" size="large">
                <el-form-item label="Get our latest news:">
                  <el-input placeholder="Your email address" />
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    size="medium"
                    native-type="submit"
                    class="tw:bg-black tw:font-semibold tw:text-white tw:hover:bg-white/90 tw:hover:text-black tw:transition tw:text-xl tw:border-black tw:hover:border"
                  >
                    Subscribe
                  </el-button>
                </el-form-item>
              </el-form>
            </slot>
          </div>
        </div>
        <div
          class="tw:flex tw:md:flex-row-reverse tw:justify-between tw:items-start"
        >
          <div class="tw:flex tw:gap-5 tw:justify-between tw:w-1/2">
            <div
              v-for="section in footerLinks"
              class="tw:flex tw:flex-col tw:gap-3 tw:w-full"
            >
              <h5 class="tw:font-semibold">{{ section.title }}</h5>
              <a v-for="link in section.links" :href="link.url">{{
                link.label
              }}</a>
            </div>
          </div>
          <div>
            <ul class="tw:ml-2">
              <li v-for="info in companyInfo">
                <span class="tw:font-semibold">{{ info.label }}: </span>
                <a :href="info.href">
                  {{ info.content }}
                </a>
              </li>
            </ul>
            <div class="tw:flex">
              <h5 class="tw:font-semibold">Follow us on:</h5>
              <div class="tw:flex tw:items-center-safe tw:gap-3 tw:mx-2">
                <el-tooltip
                  v-for="link in socialLinks"
                  class="box-item"
                  effect="dark"
                  :content="link.label"
                  placement="top-start"
                >
                  <a :href="link.url">
                    <icon :icon="link.icon" class="tw:text-2xl" />
                  </a>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </el-container>
    <div
      class="tw:flex tw:justify-between tw:items-center tw:text-sm tw:mt-2 tw:mx-1"
    >
      <a
        href="https://maps.app.goo.gl/rgAnBvWSonGp7qiT9"
        class="tw:font-semibold"
      >
        Headquarters: 30D Kim Ma Thuong Street, Ba Dinh District, Hanoi City
      </a>
      <p class="tw:text-xs tw:text-stone-500">
        © {{ $dayjs().year() }} TYD, Inc. All rights reserved
      </p>
      <div class="tw:font-semibold">
        <a href="#">Legal</a>
        |
        <a href="#">Privacy Policy</a>
        |
        <a href="#">Cookie Policy</a>
        |
        <a href="#">Manage Cookies</a>
      </div>
    </div>
  </el-footer>
</template>
<script setup>
const companyInfo = [
  {
    content: "P501, Nhat An Buong, 30D Kim Ma Thuong, Giang Vo, Ha Noi.",
    href: "ttps://maps.app.goo.gl/rgAnBvWSonGp7qiT9",
    label: "Address",
  },
  {
    content: " (+84)332099291",
    href: "tel:+84332099291",
    label: "Phone",
  },
  {
    content: "contact@vintech.org.vn",
    href: "mailto:contact@vintech.org.vn",
    label: "Email",
  },
  {
    content: "vintech.org.vn",
    href: "#",
    label: "Website",
  },
];
const footerLinks = [
  {
    title: "Intelligent Manufacturing",
    links: [{ label: "Automatic Packaging System", url: "#" }],
  },
  {
    title: "Cyber Security",
    links: [
      { label: "Password Recovery", url: "#" },
      { label: "Anti-DDoS", url: "#" },
    ],
  },
  {
    title: "Drone",
    links: [],
  },
  {
    title: "Fine Chemicals",
    links: [],
  },
];
const socialLinks = [
  { label: "Linkedin", url: "", icon: "mdi:linkedin" },
  {
    label: "Facebook",
    url: "https://www.facebook.com/vintech.org.vn/",
    icon: "mdi:facebook",
  },
  {
    label: "Youtube",
    url: "https://www.youtube.com/@vintech3544",
    icon: "mdi:youtube",
  },
  { label: "Instagram", url: "", icon: "mdi:instagram" },
];
</script>
