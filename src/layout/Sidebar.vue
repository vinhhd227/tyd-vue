<template>
  <el-aside class="app-aside" :width="collapsed ? '64px' : '220px'">
    <el-scrollbar>
      <el-menu :default-active="activePath" :collapse="collapsed" router>
        <el-menu-item index="/">
          <el-icon><house /></el-icon><span>Trang chủ</span>
        </el-menu-item>
        <el-menu-item index="/blog">
          <el-icon><document /></el-icon><span>Blog</span>
        </el-menu-item>
        <el-sub-menu index="/admin">
          <template #title>
            <el-icon><setting /></el-icon><span>Admin</span>
          </template>
          <el-menu-item index="/admin">Tổng quan</el-menu-item>
          <el-menu-item index="/admin/posts">Bài viết</el-menu-item>
          <el-menu-item index="/admin/posts/new">Viết bài</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { House, Document, Setting } from '@element-plus/icons-vue';

defineProps({ collapsed: Boolean });

const route = useRoute();
const activePath = computed(() => route.matched.at(-1)?.path || route.path);
</script>

<style scoped>
.app-aside { border-right: 1px solid var(--el-border-color); }
</style>
