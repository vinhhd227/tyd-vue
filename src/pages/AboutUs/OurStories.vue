<template>
  <div :class="['tw:flex tw:gap-20', 'tw:my-10']">
    <div v-motion-slide-visible-left :class="['tw:w-1/2']">
      <img
        class="tw:h-full tw:object-fit tw:rounded-lg"
        src="/media/images/about/dev.jpg"
        alt=""
      />
    </div>
    <div
      v-motion-slide-visible-right
      :class="[
        'tw:w-1/2',
        'tw:font-heading tw:text-4xl tw:font-normal tw:text-justify',
      ]"
    >
      <p>
        {{ $t("pages.aboutUs.ourStories.begin") }}
      </p>
      <p>
        {{ $t("pages.aboutUs.ourStories.progress") }}
      </p>
    </div>
  </div>
</template>
