<template>
  <nav class="tw:h-full tw:overflow-hidden tw:bg-white/80">
    <div
      :class="[
        'tw:mx-3',
        'tw:h-min-[10vh]',
        'tw:flex tw:items-center tw:justify-between',
        'tw:transition-[width] tw:duration-300 tw:ease-in-out',
      ]"
    >
      <RouterLink
        to="/admin/dashboard"
        class="tw:py-4 tw:mx-2 tw:flex tw:items-end tw:gap-2"
      >
        <img
          src="/media/images/tyd-logo.svg"
          alt="logo"
          :class="[
            adminUi.desktopSidebarMinimized
              ? 'tw:w-full tw:max-w-[35px]'
              : 'tw:w-full tw:max-h-[24px]',
          ]"
        />
        <h1
          v-show="!adminUi.desktopSidebarMinimized"
          class="tw:font-heading tw:font-semibold tw:text-xl tw:h-[20px] tw:text-end"
        >
          Admin
        </h1>
      </RouterLink>

      <button
        v-if="!adminUi.desktopSidebarMinimized"
        @click="adminUi.toggleDesktopPin()"
        title="Ghim / Bỏ ghim"
      >
        <iconfy
          :icon="
            adminUi.desktopSidebarPinned ? 'stash:circle-dot' : 'stash:circle'
          "
          style="color: black"
          width="18"
        />
      </button>
    </div>
    <el-scrollbar class="tw:w-full tw:h-full">
      <el-menu
        :router="true"
        :collapse="adminUi.desktopSidebarMinimized"
        :default-active="activePath"
        class="sb-menu"
        unique-opened
      >
        <template v-for="(item, idx) in menu" :key="idx">
          <el-sub-menu
            v-if="item.children"
            :index="String(idx)"
            :class="[
              'tw:h-[38px]',
              'tw:mt-0 tw:mx-3 tw:mb-1.5',
              adminUi.desktopSidebarMinimized ? 'tw:pl-3 tw:pr-0' : 'tw:px-3',
              'tw:rounded-md',
              'tw:flex tw:items-center',
              'tw:hover:bg-zinc-100',
              'tw:text-slate-800/90',
            ]"
          >
            <template #title>
              <iconfy :icon="item.icon" size="22" class="tw:mr-2" />
              <span
                v-motion-pop-visible
                :duration="100"
                :class="['tw:text-md tw:font-heading', 'tw:ml-0 tw:mr-auto']"
              >
                {{ item.label }}
              </span>
            </template>
            <el-menu-item
              v-for="(c, j) in item.children"
              :key="j"
              :index="toPath(c.to)"
            >
              <span
                v-motion-pop-visible
                :duration="100"
                :class="['tw:text-md tw:font-heading', 'tw:ml-0 tw:mr-auto']"
              >
                {{ c.label }}
              </span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item
            v-else
            :index="toPath(item.to)"
            :class="[
              'tw:h-[38px]',
              'tw:mt-0 tw:mx-3 tw:mb-1.5',
              adminUi.desktopSidebarMinimized ? 'tw:pl-3 tw:pr-0' : 'tw:px-3',
              'tw:rounded-md',
              'tw:flex tw:items-center',
              'tw:hover:bg-zinc-100',
              'tw:text-slate-800/90',
            ]"
          >
            <iconfy :icon="item.icon" size="22" class="tw:mr-2" />
            <span
              v-motion-pop-visible
              :duration="100"
              :class="['tw:text-md tw:font-heading', 'tw:ml-0 tw:mr-auto']"
              >{{ item.label }}
            </span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { adminMenu as menu } from "./menu";
import { useAdminUiStore } from "@/stores/adminUi";

//defineProps({ collapsed: Boolean });
const adminUi = useAdminUiStore();
const route = useRoute();
const router = useRouter();

const activePath = computed(() => route.path);
const toPath = (to) => router.resolve(to).path;

const freeze = false;
</script>

<style scope>
.sb {
  height: calc(100vh - 56px);
  overflow: hidden;
}
.sb:hover {
  overflow-y: auto;
}
.sb-menu {
  border-right: 0;
}
:deep(.el-menu--collapse .el-sub-menu__title span) {
  display: none;
}
:deep(.el-menu--collapse .el-menu-item span) {
  display: none;
}
</style>
