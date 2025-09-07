<template>
  <el-container class="app-shell" direction="vertical">
    <HeaderBar />
    <el-main class="tw:p-0 app-main">
      <router-view />
    </el-main>
    <FooterBar />
  </el-container>
</template>

<script setup>
import HeaderBar from "./HeaderBar.vue";
import FooterBar from "./FooterBar.vue";
</script>

<style scoped lang="scss">
.app-shell {
  min-height: 100vh;
}
.el-main {
  padding: 0 !important;
}
</style>
