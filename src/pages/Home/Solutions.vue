<template>
  <el-container
    direction="vertical"
    :class="[
      'tw:z-10 tw:mx-auto tw:h-full tw:max-w-7xl tw:px-4 sm:tw:px-6 tw:lg:px-8 tw:pb-24',
      'tw:uppercase tw:font-semibold',
    ]"
  >
    <div class="tw:flex tw:flex-wrap">
      <el-card
        v-for="s in solutions"
        :key="s.name"
        class="box-card tw:w-full tw:sm:w-1/2 tw:lg:w-1/4 tw:border-0 tw:shadow-none"
        shadow="hover"
        header-class="tw:border-b-0 tw:pb-0"
      >
        <template #header>
          <a
            class="tw:font-semibold tw:text-md tw:hover:text-blue-600 tw:font-heading"
            :href="s.route"
            >{{ s.name }}</a
          >
        </template>
        <a :href="s.route">
          <img
            :alt="s.description"
            :src="s.imageSrc"
            :class="[
              'tw:rounded-xl',
              'tw:transition-transform tw:duration-300 tw:hover:scale-105 tw:hover:shadow-lg',
            ]"
        /></a>
      </el-card>
    </div>
  </el-container>
</template>
<script setup>
import { ref } from "vue";
const solutions = ref([
  {
    name: "Public Safety - DFR",
    description: "Description 1",
    imageSrc: "/media/images/solutions/1.png",
    route: "/solutions/1",
  },
  {
    name: "Utilities",
    description: "Description 1",
    imageSrc: "/media/images/solutions/2.png",
    route: "/solutions/1",
  },
  {
    name: "National Security",
    description: "Description 1",
    imageSrc: "/media/images/solutions/3.png",
    route: "/solutions/1",
  },
  {
    name: "More Solutions",
    description: "Description 1",
    imageSrc: "/media/images/solutions/4.png",
    route: "/solutions/1",
  },
]);
</script>
