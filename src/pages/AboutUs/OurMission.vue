<template>
  <div
    class="tw:pt-45 tw:pb-5 tw:flex tw:flex-col tw:items-center tw:text-center tw:font-heading tw:font-bold"
  >
    <p v-motion-slide-visible-top class="tw:text-lg tw:uppercase">about tyd</p>
    <h1
      v-motion-slide-visible-bottom
      :class="['tw:text-4xl tw:leading-12 tw:my-6']"
    >
      {{ $t("pages.aboutUs.ourMission") }}
    </h1>
    <video
      v-motion-pop-visible
      :class="['tw:rounded-lg']"
      autoplay
      muted
      loop
      preload="auto"
    >
      <source src="/media/skymedia.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
