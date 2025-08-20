<template>
  <el-header>
    <nav
      class="tw:mx-auto tw:max-w-7xl tw:px-4 tuW:sm:px-6 tw:lg:px-8 tw:flex tw:justify-center"
    >
      <!-- LEFT: Logo -->
      <div class="tw:min-w-0 tw:flex tw:items-center tw:gap-2">
        <RouterLink
          to="/"
          class="tw:inline-flex tw:items-center tw:gap-2 tw:no-underline"
        >
          <slot name="left">
            <img
              src="/images/element-plus-logo.svg"
              alt="logo"
              class="tw:block tw:w-[120px]"
            />
          </slot>
        </RouterLink>
      </div>

      <!-- CENTER: Navigation -->
      <div class="tw:w-full">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
          class="tw:w-full tw:justify-center tw:border-0"
          style="border-bottom: none"
        >
          <el-menu-item index="1"> </el-menu-item>

          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1" class="test-red">item one</el-menu-item>
            <el-menu-item index="2-2" class="test-blue">item two</el-menu-item>
            <el-menu-item index="2-3" class="tw:text-sky-500"
              >item three</el-menu-item
            >
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </div>

      <!-- RIGHT: darkmode + auth -->
      <div class="tw:flex tw:items-center tw:gap-2">
        <el-switch
          v-model="dark"
          inline-prompt
          :active-text="'Dark'"
          :inactive-text="'Light'"
          @change="applyTheme"
        />

        <el-button v-if="!user" type="primary" @click="goLogin"
          >Đăng nhập</el-button
        >

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
      </div>
    </nav>
  </el-header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const activeIndex = ref("1");
const dark = ref(false);

// mock trạng thái đăng nhập (tích hợp thật thì lấy từ store auth)
const user = ref(null); // gán object nếu đã đăng nhập
const avatar = ref(""); // URL avatar nếu có

const handleSelect = (key, keyPath) => {
  console.log("select:", key, keyPath);
};
const applyTheme = () => {
  // Tailwind dark mode cần class "dark" đặt trên <html>
  document.documentElement.classList.toggle("dark", dark.value);
};
const goLogin = () => router.push("/login");
const goProfile = () => router.push("/admin");
const logout = () => {
  user.value = null;
};
</script>
