<template>
  <el-container class="tw:h-[100vh] tw:bg-gray-50 tw:overflow-hidden">
    <el-aside
      :class="[
        'tw:transition-[width] tw:duration-300 tw:ease-in-out',
        'tw:shadow-[0_2px_8px_rgba(47,43,61,0.12)]',
        adminUi.desktopSidebarPinned && adminUi.isDesktop
          ? 'tw:w-[260px]'
          : 'tw:w-[70px] tw:hover:w-[260px]',
        adminUi.isMobile ? 'tw:w-[0px]' : ''
      ]"
      @mouseenter="adminUi.maximizeDesktopSidebar()"
      @mouseleave="adminUi.minimizeDesktopSidebar()"
    >
      <AdminSideBar />
    </el-aside>
    <el-scrollbar class="tw:w-full tw:h-full">
      <el-container direction="vertical">
        <el-header
          :class="[
            'tw:h-fit',
            'tw:sticky tw:top-4 tw:z-20',
            'tw:px-6 tw:mx-0 tw:xl:mx-auto',
            'tw:max-w-[1440px] tw:w-full',
          ]"
        >
          <AdminHeader />
        </el-header>
        <el-main
          :class="[
            'tw:mt-4 tw:mx-0 tw:xl:mx-auto tw:mb-0',
            'tw:p-6',
            'tw:overflow-hidden',
            'tw:max-w-[1440px] tw:w-full',
          ]"
        >
          <!-- <AdminBreadcrumbs class="mb-3" /> -->
          <div :class="['tw:min-h-[calc(95vh-54px)]']">
            <router-view />
          </div>
        </el-main>
        <el-footer
          :class="[
            'tw:h-fit',
            'tw:px-6 tw:mx-0 tw:xl:mx-auto',
            'tw:max-w-[1440px] tw:w-full',
          ]"
        >
          <AdminFooter />
        </el-footer>
      </el-container>
    </el-scrollbar>
  </el-container>
</template>

<script setup>
import { useAdminUiStore } from "@/stores/adminUi";
import AdminHeader from "./AdminHeader.vue";
import AdminSideBar from "./AdminSideBar.vue";
import AdminBreadcrumbs from "./AdminBreadcrumbs.vue";
import AdminFooter from "./AdminFooter.vue";

const adminUi = useAdminUiStore();
//const { collapsed, toggleSidebar } = useAdminLayout();
</script>

<style scope lang="scss">
.admin-aside {
  background: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  transition: width 0.2s ease;
}
</style>
