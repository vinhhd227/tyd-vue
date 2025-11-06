<template>
  <el-footer
    :class="[
      'app-footer tw:h-auto tw:py-1',
      'tw:flex tw:flex-col tw:justify-center tw:items-center',
      isHome ? 'tw:bg-black tw:relative' : '',
      'tw:font-heading',
    ]"
  >
    <div
      v-if="isHome"
      class="tw:absolute tw:inset-0 tw:z-0"
      :style="{
        background: '#000000',
        backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
      `,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0',
      }"
    />
    <el-container
      v-motion-slide-visible-bottom
      :class="['tw:mt-3', 'tw:w-full', 'tw:lg:w-[80vw]']"
    >
      <el-card class="tw:w-full tw:bg-white tw:backdrop-blur tw:rounded-2xl">
        <div
          :class="[
            'tw:mx-auto tw:px-6 tw:py-5',
            'tw:grid tw:grid-cols-12 tw:items-center tw:gap-5',
          ]"
        >
          <div v-motion-slide-visible-bottom class="tw:col-span-12 tw:md:col-span-6 tw:xl:col-span-3 tw:order-1">
            <img
              src="/media/images/tyd-logo.svg"
              alt="TYD Logo"
              class="tw:h-12 tw:mb-3"
            />
            <p class="tw:text-sm tw:text-gray-500 tw:max-w-[240px]">
              {{ $t("layout.footer.description") }}
            </p>
          </div>

          <nav
            :class="[
              'tw:text-sm',
              'tw:col-span-12 tw:xl:col-span-6 tw:order-2 tw:md:order-3 tw:xl:order-2',
              'tw:grid tw:grid-cols-2 tw:md:grid-cols-3 tw:gap-x-4 tw:gap-y-5',
            ]"
          >
            <div
              v-for="group in footerNavs"
              :class="group.label.includes('legal') ? 'tw:col-span-2 tw:md:col-span-1' : ''"
            >
              <h4
                v-motion-slide-visible-bottom
                class="tw:font-semibold tw:text-gray-700 tw:mb-3"
              >
                {{ $t(group.label) }}
              </h4>
              <ul v-motion-slide-visible-bottom class="tw:space-y-2">
                <li v-for="link in group.links">
                  <a
                    :href="link.route"
                    class="tw:hover:underline tw:underline-offset-8"
                    >{{ $t(link.label) }}</a
                  >
                </li>
              </ul>
            </div>
          </nav>

          <div v-motion-slide-visible-bottom class="tw:col-span-12 tw:md:col-span-6 tw:xl:col-span-3 tw:order-3 tw:md:order-2 tw:lg:order-2 tw:xl:order-3">
            <p
              class="tw:font-semibold tw:text-lg tw:font-heading tw:text-gray-900"
            >
              {{ $t("layout.footer.newsletter.title") }}
            </p>
            <form class="tw:flex tw:flex-col tw:md:flex-row tw:xl:flex-col tw:gap-2 tw:mt-3">
              <input
                type="email"
                :placeholder="$t('layout.footer.newsletter.placeholder')"
                class="tw:w-full tw:h-10 tw:rounded-lg tw:px-3 tw:text-sm tw:border tw:border-gray-300 focus:tw:border-[#EC5C39] focus:tw:ring-1 focus:tw:ring-[#EC5C39]"
              />
              <el-button
                type="submit"
                :class="[
                  'tw:text-white tw:hover:text-black tw:font-semibold',
                  'tw:bg-black tw:hover:bg-white tw:focus:ring-2 tw:focus:ring-gray-400',

                  'tw:rounded-lg tw:border tw:border-gray-900',
                  'tw:w-[120px] tw:py-5',
                  ' tw:transition-colors tw:duration-300',
                ]"
              >
                {{ $t("layout.footer.newsletter.subscribe") }}
              </el-button>
            </form>
          </div>
        </div>
      </el-card>
    </el-container>
    <div
      class="tw:flex tw:justify-between tw:items-center tw:text-sm tw:mt-5 tw:pb-2 tw:mx-1 tw:z-10"
    >
      <p
        :class="['tw:text-xs', isHome ? 'tw:text-white' : ' tw:text-stone-500']"
      >
        {{ $t("layout.footer.copyright", { year: $dayjs().year() }) }}
      </p>
    </div>
  </el-footer>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// Nếu route.path === '/' thì là trang chủ
const isHome = computed(() => route.path === "/");
const footerNavs = [
  {
    label: "layout.footer.company.title",
    links: [
      {
        label: "layout.footer.company.projects",
        route: "/projects",
      },
      { label: "layout.footer.company.about", route: "/about" },
      { label: "layout.footer.company.contact", route: "/contact" },
    ],
  },
  {
    label: "layout.footer.solutions.title",
    links: [
      { label: "layout.footer.solutions.uav_gcs", route: "/drone" },
      {
        label: "layout.footer.solutions.cybersecurity",
        route: "/cybersecurity",
      },
      { label: "layout.footer.solutions.automation", route: "/automation" },
    ],
  },
  {
    label: "layout.footer.legal.title",
    links: [
      { label: "layout.footer.legal.privacy", route: "/privacy-policy" },
      { label: "layout.footer.legal.cookie", route: "/cookie-policy" },
      { label: "layout.footer.legal.terms", route: "/terms-of-service" },
    ],
  },
];
</script>
