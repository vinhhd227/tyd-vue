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
    v-slot="{ isPlaying, toggle }"
  >
    <!-- slot nội dung -->
    <div class="tw:max-w-6xl tw:text-white">
      <h1
        class="tw:font-heading tw:text-3xl tw:sm:text-6xl tw:font-semibold tw:leading-tight tw:drop-shadow-md tw:uppercase"
      >
        Autonomous flight solutions for every industry
      </h1>
      <p
        class="tw:mt-4 tw:font-body tw:text-medium tw:text-lg tw:sm:text-2xl"
      >
        4K camera, AI navigation, long flight time. 
        <br />
        Ready for surveying,monitoring, and maintenance.
      </p>

      <div class="tw:mt-6 tw:flex tw:flex-wrap tw:gap-3">
        <a
          href="#demo"
          class="tw:bg-white tw:px-5 tw:py-3 tw:font-semibold tw:text-black hover:tw:bg-white/90 tw:transition"
        >
          Watch Demo
        </a>
        <a
          href="#contact"
          class="tw:border tw:border-white/30 tw:px-5 tw:py-3 tw:font-semibold hover:tw:bg-white/10 tw:transition tw:text-white"
        >
          Contact Sales
        </a>
      </div>
    </div>
  </HeroBanner>
  <FlyCounting />
  <Solutions />
</template>

<script setup>
import HeroVideo from "@/components/HeroVideo.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import FlyCounting from "./Home/FlyCounting.vue";
import Solutions from "./Home/Solutions.vue";
</script>
