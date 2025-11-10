<template>
  <Banner />
  <el-container
    :class="[
      'tw:mx-auto',
      'tw:flex tw:flex-col tw:items-center tw:justify-center',
    ]"
  >
    <OurStory />
    <OurCoreSolution />
    <OurValue />
    <OurHighlight />
    <Partner />
    <Contact />
  </el-container>
</template>

<script setup>
import Banner from "./Home/Banner.vue";
import OurStory from "./Home/OurStory.vue";
import OurValue from "./Home/OurValue.vue";
import OurCoreSolution from "./Home/OurCoreSolution.vue";
import OurHighlight from "./Home/OurHighlight.vue";
import Contact from "./Home/Contact.vue";
import Partner from "./Home/Partner.vue";
</script>

<style scope>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
