<template>
  <header
    :class="[
      'tw:fixed tw:top-0 tw:left-0 tw:right-0 tw:z-50 tw:transition-all',
      'tw:px-4 tw:pt-3',
    ]"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div
      :class="[
        // bo góc ít hơn, border mảnh, nền trong ngả trắng
        'tw:transition-all tw:rounded-lg tw:border tw:backdrop-blur-md',
        isLight
          ? 'tw:bg-white tw:text-black tw:shadow-lg tw:border-black/20'
          : 'tw:bg-white/30 tw:text-white tw:border-black/20',
        // khi hover vào thì nền trắng, chữ đen
        'hover:tw:bg-white hover:tw:text-black',
        'tw:py-3',
      ]"
    >
      <nav
        class="tw:max-w-7xl tw:px-4 sm:tw:px-6 lg:tw:px-8 tw:flex tw:items-center tw:justify-between tw:h-16"
      >
        <!-- LEFT: Logo -->
        <RouterLink
          to="/"
          class="tw:inline-flex tw:items-center tw:gap-2 tw:no-underline"
        >
          <slot name="left">
            <img
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
        <div class="tw:flex-1 tw:flex tw:justify-center">
          <slot name="center">
            <el-menu
              @mouseenter="hovered = true"
              @mouseleave="hovered = false"
              background-color="transparent"
              :default-active="activeIndex"
              :text-color="hovered ? 'black' : 'white'"
              :active-text-color="hovered ? 'black' : 'white'"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
              class="tw:border-0 header-menu"
              :class="{ 'is-light': isLight, 'is-dark': !isLight }"
              style="border-bottom: none"
            >
              <!-- v-for mục cấp 1 -->
              <template v-for="(item, i) in menus" :key="i">
                <!-- Nếu có children => el-sub-menu -->
                <el-sub-menu
                  v-if="item.children?.length"
                  :index="String(i + 1)"
                >
                  <!-- Title của submenu: nếu có path, cho phép click RouterLink -->
                  <template #title>
                    <span v-if="!item.path">{{ item.label }}</span>
                    <RouterLink v-else :to="item.path" class="tw:no-underline">
                      {{ item.label }}
                    </RouterLink>
                  </template>

                  <!-- render các mục con -->
                  <el-menu-item
                    v-for="(child, j) in item.children"
                    :key="j"
                    :index="`${i + 1}-${j + 1}`"
                  >
                    {{ child.label }}
                  </el-menu-item>
                </el-sub-menu>
                <!-- Không có children => el-menu-item -->
                <el-menu-item v-else :index="String(i + 1)">
                  {{ item.label }}
                </el-menu-item>
              </template>
            </el-menu>
          </slot>
        </div>

        <!-- RIGHT: Darkmode + Auth -->
        <div class="tw:flex tw:items-center tw:gap-2">
          <slot name="right">
            <el-switch
              v-model="dark"
              inline-prompt
              :active-text="'Dark'"
              :inactive-text="'Light'"
              @change="applyTheme"
            />

            <el-button
              v-if="!user"
              :type="isLight ? 'primary' : 'default'"
              @click="goLogin"
            >
              Đăng nhập
            </el-button>

            <el-dropdown v-else trigger="click">
              <span class="el-dropdown-link">
                <el-avatar :src="avatar" size="small" />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="goProfile">Hồ sơ</el-dropdown-item>
                  <el-dropdown-item divided @click="logout"
                    >Đăng xuất</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </slot>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const dark = ref(false);
const scrolled = ref(false);
const hovered = ref(false);

const user = ref(null);
const avatar = ref("");

// Mảng menu có path; mục cha có thể có path hoặc chỉ là nhóm
const menus = [
  {
    label: "Products",
    // path: '/san-pham', // (tuỳ chọn) nếu muốn click trực tiếp vào tiêu đề submenu
    children: [
      { label: "UAV", path: "/san-pham/uav" },
      { label: "Máy móc công nghiệp", path: "/san-pham/cong-nghiep" },
      { label: "Cyber Security", path: "/san-pham/cyber-security" },
      { label: "Hóa chất", path: "/san-pham/hoa-chat" },
    ],
  },
  { label: "Resources", path: "/tai-nguyen" },
  { label: "Company", path: "/about-us" },
  { label: "Watch demo", path: "/demo" },
  { label: "Contact us", path: "/contact" },
];

// Tự sinh map index <-> path
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

const activeIndex = ref("1");

// Cập nhật activeIndex theo URL hiện tại
const syncActiveByRoute = () => {
  const p = route.path;
  activeIndex.value = pathToIndex.value[p] ?? "1";
};
syncActiveByRoute();
watch(() => route.path, syncActiveByRoute);

// Handle chọn menu
function handleSelect(key) {
  const p = indexToPath.value[key];
  if (p) router.push(p);
}
// Light mode khi hover hoặc scroll
const isLight = computed(() => hovered.value);

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
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>
