<template>
  <el-scrollbar height="100vh">
    <el-container class="tw:min-h-screen" direction="vertical">
      <HeaderBar />
      <el-main class="tw:p-0">
        <router-view />
      </el-main>
      <FooterBar />
    </el-container>
  </el-scrollbar>
  <el-backtop :right="100" :bottom="100" />
</template>

<script setup>
import HeaderBar from "./HeaderBar.vue";
import FooterBar from "./FooterBar.vue";
</script>
