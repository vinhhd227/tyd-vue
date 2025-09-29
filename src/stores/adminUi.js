import { defineStore } from "pinia";
import { computed, watch } from "vue";
import { useStorage, useBreakpoints } from "@vueuse/core";

const bp = useBreakpoints({ xl: 1280 });

export const useAdminUiStore = defineStore("adminUi", () => {
  // CHỈ LƯU TRẠNG THÁI SIDEBAR
  const mobileSidebarOpen = useStorage("ui.mobileSidebarOpen", false); // < xl: drawer
  const desktopSidebarPinned = useStorage("ui.desktopSidebarPinned", false); // ≥ xl: ghim 250px
  const desktopSidebarMinimized = useStorage(
    "ui.desktopSidebarMinimized",
    false
  );

  // BREAKPOINTS
  const isDesktop = bp.greaterOrEqual("xl");
  const isMobile = computed(() => !isDesktop.value);

  // WIDTH hiệu lực cho layout (không liên quan ẩn/hiện nút)
  const effectiveSidebarWidth = computed(() => {
    if (isMobile.value) return mobileSidebarOpen.value ? 250 : 0;
    return desktopSidebarPinned.value ? 250 : 60;
  });

  // ACTIONS
  const openMobileSidebar = () => {
    if (isMobile.value) mobileSidebarOpen.value = true;
  };
  const closeMobileSidebar = () => {
    if (isMobile.value) mobileSidebarOpen.value = false;
  };
  const toggleMobileSidebar = () => {
    if (isMobile.value) mobileSidebarOpen.value = !mobileSidebarOpen.value;
  };

  const pinDesktopSidebar = () => {
    if (isDesktop.value) {
      desktopSidebarPinned.value = true;
      desktopSidebarMinimized.value = false;
    }
  };
  const unpinDesktopSidebar = () => {
    if (isDesktop.value) desktopSidebarPinned.value = false;
  };
  const toggleDesktopPin = () => {
    if (isDesktop.value)
      desktopSidebarPinned.value = !desktopSidebarPinned.value;
  };
  const minimizeDesktopSidebar = () => {
    if (isDesktop.value && !desktopSidebarPinned.value)
      desktopSidebarMinimized.value = true;
  };
  const maximizeDesktopSidebar = () => {
    if (isDesktop.value) desktopSidebarMinimized.value = false;
  };
  // Đổi breakpoint: sang desktop thì đóng drawer mobile để tránh “kẹt” overlay
  watch(
    isDesktop,
    (now) => {
      if (now) mobileSidebarOpen.value = false;
    },
    { immediate: true }
  );

  return {
    // state
    mobileSidebarOpen,
    desktopSidebarPinned,
    desktopSidebarMinimized,
    // derived
    isDesktop,
    isMobile,
    effectiveSidebarWidth,
    // actions
    openMobileSidebar,
    closeMobileSidebar,
    toggleMobileSidebar,
    pinDesktopSidebar,
    unpinDesktopSidebar,
    toggleDesktopPin,
    minimizeDesktopSidebar,
    maximizeDesktopSidebar,
  };
});
