<template>
  <header
    :class="[
      'tw:fixed tw:top-0 tw:left-0 tw:right-0 tw:z-50 tw:transition-all',
      'tw:px-4 tw:pt-3',
      'tw:flex tw:items-center tw:justify-center',
      'tw:w-full',
    ]"
  >
    <div
      @mouseover="isMenuHovered = true"
      @mouseleave="
        isMenuHovered = false;
        isMenuExpanded = false;
      "
      :class="[
        'tw:flex tw:flex-col tw:items-center tw:justify-center',
        'tw:transition-all tw:rounded-lg tw:border tw:backdrop-blur-md',
        'tw:text-black tw:border-black/20',
        isMenuHovered || isAsideExpanded ? 'tw:bg-white' : 'tw:bg-white/30',
        'hover:tw:bg-white hover:tw:text-black',
        'tw:w-full',
        'tw:lg:w-[80vw]',
      ]"
    >
      <nav
        :class="[
          'tw:w-full tw:min-h-16 tw:h-full',
          'tw:px-4 tw:sm:px-6 tw:lg:px-8 tw:pt-3',
          'tw:flex tw:items-center tw:justify-between',
        ]"
      >
        <!-- LEFT: Logo -->
        <RouterLink
          to="/"
          class="tw:inline-flex tw:items-center tw:gap-2 tw:no-underline"
        >
          <slot name="left">
            <img
              v-motion-slide-visible-left
              :src="
                isLight
                  ? '/media/images/tyd-logo.svg'
                  : '/media/images/tyd-logo-white.svg'
              "
              alt="logo"
              class="tw:w-[120px] tw:h-auto"
            />
          </slot>
        </RouterLink>

        <!-- CENTER: Navigation -->
        <div :class="['tw:hidden ', 'tw:md:flex tw:flex-1 tw:justify-center']">
          <slot name="center">
            <el-menu
              @mouseleave="isMenuExpanded = false"
              v-motion-slide-visible-bottom
              background-color="transparent"
              :default-active="activeIndex"
              :text-color="hovered ? 'black' : 'white'"
              :active-text-color="hovered ? 'black' : 'white'"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
              class="tw:border-0 tw:font-semibold header-menu tw:font-heading"
              :class="{ 'is-light': isLight, 'is-dark': !isLight }"
              style="border-bottom: none"
            >
              <template v-for="(item, i) in menus" :key="i">
                <el-menu-item
                  @mouseenter="
                    isMenuExpanded = item.children?.length;
                    currentCategory = item.children?.length
                      ? item.children?.[0]
                      : null;
                    currentItem = item;
                  "
                  :index="String(i + 1)"
                  :class="[
                    'tw:font-heading',
                    'tw:bg-inherit',
                    'tw:min-w-[120px]',
                  ]"
                >
                  <span :class="['tw-menu-underline']">
                    {{ $t(item.label) }}
                  </span>
                </el-menu-item>
              </template>
            </el-menu>
          </slot>
        </div>

        <div v-motion-pop-visible class="tw:flex tw:items-center tw:gap-2">
          <slot name="right">
            <el-dropdown class="tw:hover:border-0">
              <span class="tw:flex tw:items-center tw:justify-center">
                <iconify
                  icon="mingcute:globe-2-fill"
                  class="tw:text-2xl tw:text-black"
                />
                <span
                  class="tw:text-black tw:text-sm tw:font-semibold tw:uppercase tw:ml-2"
                >
                  {{ locale }}
                </span>
              </span>
              <template #dropdown>
                <el-dropdown-menu class="tw:font-heading">
                  <el-dropdown-item @click="changeLocale('vi')"
                    >Tiếng Việt</el-dropdown-item
                  >
                  <el-dropdown-item @click="changeLocale('en')"
                    >English</el-dropdown-item
                  >
                  <el-dropdown-item disabled>中文</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <div
              class="tw:flex tw:items-center tw:md:hidden"
              @click="toggleSideMenu()"
            >
              <iconify
                icon="mingcute:list-check-line"
                class="tw:text-3xl tw:text-black"
              />
            </div>
          </slot>
        </div>
      </nav>
      <div
        @mouseenter="isMenuExpanded = true && currentItem?.children?.length"
        :class="[
          ' tw:bg-white tw:w-full tw:mt-1',
          isMenuHovered && stableMenuExpanded
            ? 'tw:h-[50vh]'
            : 'tw:h-0 tw:overflow-hidden',
          'tw:trasition-[height] tw:duration-300 tw:ease-in-out',
          'tw:flex tw:items-start tw:justify-start',
          'tw:rounded-b-xl',
        ]"
      >
        <div
          v-if="isMenuExpanded"
          :class="[
            'tw:w-full tw:h-full tw:max-w-1/3',
            'tw:py-30 tw:pl-20 tw:pr-5',
            'tw:bg-white',
            'tw:rounded-b-2xl',
          ]"
        >
          <h2
            :class="[
              'tw:font-heading tw:text-xl tw:font-normal tw:text-gray-500',
              'tw:pb-5',
              'tw:border-b-2 tw:border-gray-500',
            ]"
          >
            {{ currentItem?.label ? $t(currentItem?.label) : "" }}
          </h2>
          <ul>
            <li
              @mouseover="currentCategory = item"
              v-for="item in currentItem?.children"
              :class="[
                'tw:font-heading tw:text-3xl tw:font-normal',
                'tw:mt-5 tw:pb-5',
                'tw:w-full',
                'tw:border-b-1 tw:border-black-200',
                'tw:hover:text-4xl tw:hover:font-normal tw:hover:text-blue-500 tw:hover:border-b-3',
                'tw:transition-all tw:duration-300 tw:ease-in-out',
              ]"
            >
              <RouterLink :to="item.path" class="">
                {{ $t(item.label) }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div
          :class="[
            currentCategory ? 'tw:block' : 'tw:hidden',
            'tw:w-full tw:h-full tw:max-w-1/3',
            'tw:py-30 tw:px-5',
            'tw:bg-gray-200',
          ]"
          v-show="currentCategory && isMenuExpanded"
        >
          <h2
            :class="[
              'tw:font-heading tw:text-xl tw:font-normal tw:text-gray-500',
              'tw:pb-5',
              'tw:border-b-2 tw:border-black-200',
            ]"
          >
            {{ currentCategory?.label ? $t(currentCategory?.label) : "" }}
          </h2>
          <ul>
            <li
              v-for="product in currentCategory?.products"
              :class="[
                'tw:font-heading tw:text-xl tw:font-normal',
                'tw:mt-3 tw:pb-3',
                'tw:w-full',
                'tw:border-b-1 tw:border-black-200',
                'tw:hover:text-2xl tw:hover:font-medium tw:hover:text-blue-500 tw:hover:border-b-3',
                'tw:transition-all tw:duration-300 tw:ease-in-out',
              ]"
            >
              <RouterLink :to="product.path" class="">
                {{ $t(product.label) }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- <div
          :class="[
            'tw:w-full tw:h-full tw:max-w-1/3',
            'tw:py-30 tw:pr-20 tw:pl-5',
            'tw:bg-gray-200',
          ]"
        ></div> -->
      </div>
      <el-scrollbar
        :class="[
          ' tw:bg-white tw:w-full tw:mt-1',
          isAsideExpanded ? 'tw:h-[80vh]' : 'tw:h-0',
          'tw:rounded-b-xl',
          'tw:overflow-x-hidden',
          'tw:trasition-[height] tw:duration-300 tw:ease-in-out',
        ]"
      >
        <div :class="['tw:flex tw:items-start tw:justify-start']">
          <ul class="tw:w-full tw:p-5">
            <li v-for="item in menus">
              <div
                @click="currentItem = currentItem == null ? item : null"
                :class="[
                  'tw:font-heading tw:text-4xl tw:font-normal',
                  'tw:mt-5 tw:pb-5',
                  'tw:border-b-1 tw:border-black-200',
                  'tw:hover:text-5xl tw:hover:font-normal tw:hover:text-blue-500 tw:hover:border-b-3',
                  'tw:cursor-pointer',
                  'tw:transition-all tw:duration-300 tw:ease-in-out',
                ]"
              >
                <RouterLink v-if="item.path" :to="item.path">
                  {{ $t(item.label) }}
                </RouterLink>
                <span v-else>{{ $t(item.label) }}</span>
              </div>
              <ul v-if="currentItem?.children?.length">
                <li v-for="child in item.children">
                  <div
                    :to="child.path"
                    :class="[
                      'tw:block',
                      'tw:font-heading tw:text-2xl tw:font-normal',
                      'tw:mt-5 tw:pb-5 tw:ml-5',
                      // 'tw:w-full',
                      'tw:border-b-1 tw:border-black-200',
                      'tw:hover:text-3xl tw:hover:font-normal tw:hover:text-blue-500 tw:hover:border-b-2',
                      'tw:cursor-pointer',
                      'tw:transition-all tw:duration-300 tw:ease-in-out',
                    ]"
                    @click="child.isExpanded = !child.isExpanded"
                  >
                    {{ $t(child.label) }}
                  </div>
                  <ul v-if="child?.products?.length && child.isExpanded">
                    <li
                      v-for="product in child.products"
                      :class="[
                        'tw:font-heading tw:text-lg tw:font-normal',
                        'tw:mt-5 tw:pb-5 tw:ml-10',
                        // 'tw:w-full',
                        'tw:border-b-1 tw:border-black-200',
                        'tw:hover:text-xl tw:hover:font-normal',
                        'tw:transition-all tw:duration-300 tw:ease-in-out tw:hover:text-blue-500 tw:hover:border-b-1',
                        'tw:cursor-pointer',
                        n,
                      ]"
                    >
                      <RouterLink :to="product.path">
                        {{ $t(product.label) }}
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </el-scrollbar>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useLocaleStore } from "@/stores/locale";
import { useDebounce } from "@vueuse/core";

const router = useRouter();
const route = useRoute();
const localeStore = useLocaleStore();
const { locale } = storeToRefs(localeStore);
const { changeLocale } = localeStore;

const isMenuHovered = ref(false);
const isMenuExpanded = ref(false);
const isAsideExpanded = ref(false);
const currentItem = ref(null);
const currentCategory = ref(null);

const stableMenuExpanded = useDebounce(isMenuExpanded, 100);

async function onLocaleToggle(val) {
  await changeLocale(val);
}

function toggleSideMenu() {
  isAsideExpanded.value = !isAsideExpanded.value;
  currentItem.value = null;
  currentCategory.value = null;
}

const dark = ref(false);
const scrolled = ref(false);
const hovered = ref(true);

const user = ref(null);

const menus = reactive([
  {
    label: "layout.header.home",
    path: "/",
  },
  {
    label: "layout.header.products",
    children: [
      {
        label: "UAV & Ground Control",
        path: "",
        products: [
          { label: "Ground Control Station", path: "/san-pham/uav/gcs" },
          { label: "Gimbal", path: "/san-pham/uav/gimbal" },
          { label: "Camera", path: "/san-pham/uav/camera" },
        ],
        isExpanded: false,
      },
      {
        label: "Cyber Security",
        path: "",
        products: [
          { label: "Threat Detection", path: "/san-pham/uav/gcs" },
          { label: "Cyber Defense", path: "/san-pham/uav/gimbal" },
          { label: "Anti DDOS", path: "/san-pham/uav/camera" },
        ],
        isExpanded: false,
      },
      {
        label: "Automation",
        path: "",
        products: [
          { label: "4 leg robot", path: "/san-pham/uav/gcs" },
          { label: "Intelligent Manufacturing", path: "/san-pham/uav/gimbal" },
        ],
        isExpanded: false,
      },
    ],
  },
  // { label: "Resources", path: "/tai-nguyen" },
  { label: "layout.header.about", path: "/about-us" },
  { label: "layout.header.contact", path: "/contact" },
]);

const indexToPath = computed(() => {
  const m = {};
  menus.forEach((item, i) => {
    const pi = String(i + 1);
    if (item.path) m[pi] = item.path;
    if (item.children?.length) {
      item.children.forEach((ch, j) => {
        const ci = `${i + 1}-${j + 1}`;
        if (ch.path) m[ci] = ch.path;
      });
    }
  });
  return m;
});

const pathToIndex = computed(() => {
  const m = {};
  Object.entries(indexToPath.value).forEach(([idx, p]) => (m[p] = idx));
  return m;
});

const activeIndex = ref("0");

// CÃ¡ÂºÂ­p nhÃ¡ÂºÂ­t activeIndex theo URL hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i
const syncActiveByRoute = () => {
  const p = route.path;
  activeIndex.value = pathToIndex.value[p] ?? "1";
};
syncActiveByRoute();
watch(() => route.path, syncActiveByRoute);

function handleSelect(key) {
  const p = indexToPath.value[key];
  if (p) router.push(p);
}
// Light mode khi hover hoÃ¡ÂºÂ·c scroll
const isLight = computed(() => hovered.value || true);

function applyTheme() {
  document.documentElement.classList.toggle("dark", dark.value);
}
function goLogin() {
  router.push("/login");
}
function goProfile() {
  router.push("/admin");
}
function logout() {
  user.value = null;
}

function onScroll() {
  scrolled.value = window.scrollY > 8;
}
onMounted(() => {
  router.afterEach(() => {
    isAsideExpanded.value = false;
  });
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>
