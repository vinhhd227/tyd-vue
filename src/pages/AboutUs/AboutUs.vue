<template>
  <section
    :class="[
      'tw-container-default',
      'tw:py-20',
      'tw:grid tw:grid-cols-2 tw:items-center tw:gap-10',
    ]"
  >
    <div class="tw:z-10">
      <img
        v-motion-pop-visible
        src="/media/images/about/about_us.avif"
        class="tw:rounded-2xl tw:shadow-2xl"
        alt=""
      />
    </div>
    <div class="tw:z-10">
      <h2
        v-motion-pop-visible
        class="tw:font-heading tw:text-5xl tw:font-semibold tw:mb-3"
      >
        {{ $t("pages.aboutUs.about.title") }}
      </h2>
      <p class="tw:text-lg tw:font-heading tw:text-justify">
        <span v-motion-pop-visible class="tw:block tw:mb-1">
          {{ $t("pages.aboutUs.about.paragraph1") }}
        </span>
        <span v-motion-pop-visible class="tw:block">
          {{ $t("pages.aboutUs.about.paragraph2") }}
        </span>
        <span v-motion-pop-visible class="tw:block"> </span>
      </p>
    </div>
  </section>
</template>
