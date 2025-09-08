<template>
  <el-container
    :class="['tw:p-0', 'tw:h-[50vh] tw:md:h-[60vh] tw:xl:h-[80vh]']"
  >
    <div class="tw:relative tw:w-full tw:overflow-hidden">
      <div
        :class="[
          'tw:mx-auto',
          'tw:relative tw:z-10',
          'tw:h-full tw:max-w-7xl',
          'tw:flex tw:flex-row tw:justify-center tw:items-start',
          'tw:pt-10 tw:pb-5 tw:px-10 tw:md:pt-20 tw:md:pb-10 tw:md:px-15 tw:xl:pt-40 tw:xl:pb-10 tw:xl:px-60',
        ]"
      >
        <div class="tw:text-center">
          <h2
            :class="[
              'tw:font-semibold tw:text-white tw:font-heading',
              'tw:text-3xl tw:md:text-4xl tw:xl:text-5xl',
            ]"
          >
            Mission-ready. Day or night.
          </h2>
          <p
            :class="[
              'tw:mt-4',
              'tw:text-white',
              'tw:text-lg tw:md:text-xl tw:xl:text-2xl',
              'tw:md:max-w-[650px] tw:xl:max-w-[850px]',
            ]"
          >
            Skydio drone programs help even the most dangerous work get done
            safer, smarter, and faster through remote autonomous flight. From
            Drone as First Responder to automated inspection and site security,
            Skydio helps you get the intelligence you need to make the best
            decisions.
          </p>
        </div>
      </div>
      <picture class="tw:absolute tw:inset-0 tw:block tw:md:hidden">
        <img
          src="/media/images/hero-image.jpg"
          alt="posterAlt"
          class="tw:h-full tw:w-full tw:object-cover"
        />
      </picture>
      <video
        :src="videoSrc"
        loop
        muted
        playsinline
        autoplay
        class="tw:absolute tw:inset-0 tw:hidden tw:h-full tw:w-full tw:object-cover tw:md:block"
      />
    </div>
  </el-container>
</template>

<script setup>
import { ref } from "vue";

const videoSrc = ref("/media/skymedia.mp4");
</script>
