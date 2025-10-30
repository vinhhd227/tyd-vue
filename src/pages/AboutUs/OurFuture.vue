<template>
  <div :class="['tw:mx-auto tw:my-10', 'tw:z-10', 'tw:flex']">
    <div v-motion-slide-visible-left :class="['tw:w-1/2', 'tw:flex tw:items-center tw:gap-2']">
      <h2 :class="['tw:font-heading tw:text-5xl tw:font-semibold', 'tw:pr-2']">
        {{ $t("pages.aboutUs.ourFuture.title") }}
      </h2>
    </div>
    <div v-motion-slide-visible-right class="tw:w-1/2">
      <p class="tw:text-4xl tw:font-normal tw:text-justify">
        {{ $t("pages.aboutUs.ourFuture.content") }}
      </p>
    </div>
  </div>
  <div :class="['tw:flex tw:gap-10']">
    <div v-motion-slide-visible-left :class="tailwind.imageGridClass">
      <img
        src="/media/images/about/ourFuture/UAV.jpg"
        alt="ourfuture"
        :class="tailwind.imageClass"
        loading="lazy"
      />
    </div>
    <div v-motion-slide-visible-bottom :class="tailwind.imageGridClass">
      <img
        src="/media/images/about/ourFuture/UAV.jpg"
        alt="ourfuture"
        :class="tailwind.imageClass"
        loading="lazy"
      />
    </div>
    <div v-motion-slide-visible-right :class="tailwind.imageGridClass">
      <img
        src="/media/images/about/ourFuture/UAV.jpg"
        alt="ourfuture"
        :class="tailwind.imageClass"
        loading="lazy"
      />
    </div>
  </div>
</template>
<script setup>
const tailwind = {
  imageGridClass: "tw:h-[400px]",
  imageClass: "tw:w-full tw:h-full tw:object-cover",
};
</script>
