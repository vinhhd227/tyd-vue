<template>
  <el-container
    direction="vertical"
    :class="['tw:mx-auto tw:pb-5', 'tw:z-10 tw:h-full', 'tw:max-w-[70vw]']"
  >
    <OurMission />
    <OurFuture />
    <OurStories />
  </el-container>
</template>
<script setup>
import OurMission from "./AboutUs/OurMission.vue";
import OurFuture from "./AboutUs/OurFuture.vue";
import OurStories from "./AboutUs/OurStories.vue";
</script>
