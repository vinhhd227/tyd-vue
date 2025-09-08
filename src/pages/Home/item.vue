<template>
  <el-container
    direction="vertical"
    :class="[
      'tw:z-10 tw:mx-auto tw:h-full tw:max-w-7xl tw:px-4 sm:tw:px-6 tw:lg:px-8 tw:py-24',
    ]"
  >
    <div
      class="tw:flex tw:flex-col tw:md:flex-row-reverse tw:justify-between tw:py-8"
    >
      <video
        loop
        muted
        playsinline
        autoplay
        class="tw:md:w-1/2 tw:lg:w-3/5 tw:xl:w-2/3 tw:object-cover tw:rounded-xl"
      >
        <source :src="videoSource" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div :class="['tw:pr-3 tw:md:pr-5', 'tw:md:w-1/2']">
        <h3 class="tw:font-semibold tw:text-3xl tw:font-heading tw:mt-4">
          Skydio X10: <br />
          You’ve never seen like this before
        </h3>
        <p class="tw:text-lg tw:mt-4">
          A world-class drone program starts with Skydio X10. Loaded with the
          best sensors in its class, guided by the most advanced AI in the sky,
          and built to gather the data you need, wherever and whenever you need
          it.
        </p>
        <a :class="buttonClass">See X10 in action</a>
      </div>
    </div>
    <div
      class="tw:flex tw:flex-col tw:md:flex-row-reverse tw:justify-between tw:py-8"
    >
      <video
        loop
        muted
        playsinline
        autoplay
        class="tw:md:w-1/2 tw:lg:w-3/5 tw:xl:w-2/3 tw:object-cover tw:rounded-xl"
      >
        <source :src="videoSource2" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="tw:pr-3 tw:md:pr-5">
        <h3 class="tw:font-semibold tw:text-3xl tw:font-heading tw:mt-4">
          Dock for X10: 0 <br />
          Bring the power of autonomy to any site
        </h3>
        <p class="tw:text-lg tw:mt-4">
          Position X10 drones precisely where you need them, launch remotely
          piloted or autonomous missions at the push of a button, and start
          collecting data without needing anyone on site.
        </p>
        <a :class="buttonClass">See Dock for X10 in action</a>
      </div>
    </div>
  </el-container>
</template>

<script setup>
import videoSource from "/media/item.mp4";
import videoSource2 from "/media/item2.mp4";
const buttonClass =
  "tw:px-4 tw:py-2.5 tw:border-1 tw:mt-4 tw:rounded-sm tw:hover:bg-blue-600 tw:hover:text-white tw:inline-block tw:shadow-md";
</script>
