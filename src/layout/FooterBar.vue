<template>
  <el-footer height="48px" class="app-footer">
    © {{ year }} LandingBlog
  </el-footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-secondary);
  border-top: 1px solid var(--el-border-color);
}
</style>
