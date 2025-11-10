<template>
  <section
    :class="[
      'tw:relative',
      'tw:w-full',
      'tw:overflow-hidden',
      'tw:bg-[url(/media/images/about/banner_about.avif)]',
      'tw:bg-cover',
    ]"
  >
    <div
      class="tw:absolute tw:inset-0 tw:bg-gradient-to-b tw:from-black/10 tw:via-black/50 tw:to-black/10"
    />
    <el-container
      :class="[
        'tw-container-default tw:h-full',
        'tw:relative tw:z-10',
        'tw:flex tw:flex-col tw:justify-center tw:items-start tw:gap-5',
        'tw:pt-30 tw:pb-20 tw:md:pt-40 tw:md:pb-40 tw:xl:pt-50 tw:xl:pb-50',
      ]"
    >
      <p
        v-motion-pop-visible
        class="tw:text-sm tw:uppercase tw:tracking-wider tw:text-white/70"
      >
        {{ $t("pages.aboutUs.banner.subTitle") }}
      </p>
      <h1
        v-motion-pop-visible
        class="tw:text-2xl tw:md:text-5xl tw:font-heading tw:font-bold tw:text-white"
      >
        {{ $t("pages.aboutUs.banner.title") }}
      </h1>
      <p
        v-motion-pop-visible
        class="tw:text-base tw:lg:text-lg tw:leading-relaxed tw:text-white/90 tw:w-[110ch] tw:max-w-full"
      >
        {{ $t("pages.aboutUs.banner.description") }}
      </p>
    </el-container>
  </section>
</template>
