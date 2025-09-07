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
   <div class="tw:max-w-6xl tw:text-white">
      <h1
        class="tw:font-heading tw:text-3xl tw:sm:text-6xl tw:font-medium tw:leading-tight tw:drop-shadow-md tw:underline tw:underline-offset-8 tw:tracking-wide"
      >
        About TYD
      </h1>
    </div>
  </HeroBanner>
</template>
<script setup>
import HeroBanner from "@/components/HeroBanner.vue";
</script>
