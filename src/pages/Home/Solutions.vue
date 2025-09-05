<template>
  <el-container
    direction="vertical"
    :class="[
      'tw:z-10 tw:mx-auto tw:h-full tw:max-w-7xl tw:px-4 sm:tw:px-6 tw:lg:px-8 tw:pb-24',
      'tw:uppercase tw:font-semibold',
    ]"
  >
    <el-space wrap>
      <el-card
        v-for="s in solutions"
        :key="s.name"
        class="box-card tw:w-1/4 tw:border-0"
        shadow="hover"
        header-class="tw:border-b-0"
        :header="s.name"
      >
        <img :src="s.imageSrc" />
      </el-card>
    </el-space>
  </el-container>
</template>
<script setup>
import { ref } from "vue";
const solutions = ref([
  {
    name: "Solution 1",
    description: "Description 1",
    imageSrc:
      "/media/images/solutions/1.png",
    route: "/solutions/1",
  },
    {
    name: "Solution 2",
    description: "Description 1",
    imageSrc:
      "/media/images/solutions/1.png",
    route: "/solutions/1",
  },
    {
    name: "Solution 3",
    description: "Description 1",
    imageSrc:
      "/media/images/solutions/1.png",
    route: "/solutions/1",
  
  },
    {
    name: "Solution 4",
    description: "Description 1",
    imageSrc:
      "/media/images/solutions/1.png",
    route: "/solutions/1",
  },
]);
</script>
