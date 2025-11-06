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
    <!-- <OurProduct /> -->
  </el-container>
</template>

<script setup>
import Banner from "./Home/Banner.vue";
import OurStory from "./Home/OurStory.vue";
import OurValue from "./Home/OurValue.vue";
import OurProduct from "./Home/OurProduct.vue";
import OurCoreSolution from "./Home/OurCoreSolution.vue";
import OurHighlight from "./Home/OurHighlight.vue";
import Contact from "./Home/Contact.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import ScrollBanner from "@/components/ScrollBanner.vue";
import FlyCounting from "./Home/FlyCounting.vue";
import Solutions from "./Home/Solutions.vue";
import Skydio from "./Home/Skydio.vue";
import Showcase from "./Home/Showcase.vue";
import slidermain from "./Home/slidermain.vue";
import item from "./Home/item.vue";
import SuccessStories from "./Home/SuccessStories.vue";
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
