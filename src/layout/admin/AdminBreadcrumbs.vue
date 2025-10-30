<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(bc, i) in crumbs" :key="i">
      <span v-if="!bc.to">{{ bc.label }}</span>
      <RouterLink v-else :to="bc.to">{{ bc.label }}</RouterLink>
    </el-breadcrumb-item>
  </el-breadcrumb>
  
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const crumbs = computed(() => {
  const list = route.matched
    .filter(r => r.meta?.title)
    .map(r => ({ label: r.meta.title, to: r.name ? { name: r.name } : null }));
  if (route.meta?.breadcrumb?.length) {
    return route.meta.breadcrumb.map((label, idx, arr) => ({
      label, to: idx < arr.length - 1 ? list[idx]?.to : null,
    }));
  }
  return list;
});
</script>

