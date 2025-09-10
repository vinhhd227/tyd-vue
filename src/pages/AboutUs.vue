<template>
  <HeroBanner
    :video-src="'/media/hero-video.mp4'"
    :poster-src="'/media/images/hero-image.jpg'"
    :height-vh="100"
    :tracks="[
      {
        src: '/media/hero-subtitles.vtt',
        kind: 'subtitles',
        srclang: 'vi',
        label: 'Vietnamese',
      },
      {
        src: '/media/hero-description.vtt',
        kind: 'descriptions',
        srclang: 'vi',
        label: 'Vietnamese Description',
      },
    ]"
  >
    <div
      v-motion-slide-visible-bottom
      :class="['tw:w-full tw:max-w-[70vw]', 'tw:mx-auto', 'tw:text-white tw:text-left' ]"
    >
      <h1
        class="tw:font-heading tw:text-3xl tw:sm:text-6xl tw:font-medium tw:leading-tight tw:drop-shadow-md tw:tracking-wide"
      >
        <span class="tw:underline tw:underline-offset-20">Ab</span>out TYD
      </h1>
    </div>
  </HeroBanner>

  <Stories />
  <WhatWeDo />
  <OurMission />
  <OurFuture />
</template>
<script setup>
import HeroBanner from "@/components/HeroBanner.vue";
import Stories from "./AboutUs/Stories.vue";
import WhatWeDo from "./AboutUs/WhatWeDo.vue";
import OurMission from "./AboutUs/OurMission.vue";
import OurFuture from "./AboutUs/OurFuture.vue";

</script>
