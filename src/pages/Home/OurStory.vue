<template>
  <div :class="['tw:w-full', 'tw:bg-gray-200']">
    <div
      :class="[
        'tw:flex tw:flex-col tw:justify-center tw:items-center',
        'tw:text-center',
        'tw:w-full tw:lg:w-[80vw]',
        'tw:mx-auto',
        'tw:py-10',
      ]"
    >
      <h5 v-motion-slide-visible-bottom :class="['tw:mb-3']">
        {{ $t("pages.home.ourStory.label") }}
      </h5>
      <h2
        v-motion-slide-visible-bottom
        :class="['tw:font-heading tw:text-4xl tw:font-semibold', 'tw:mb-10']"
      >
        {{ $t("pages.home.ourStory.title") }}
      </h2>
      <p
        v-motion-slide-visible-bottom
        :class="['tw:text-lg', 'tw:px-25', 'tw:mb-5']"
      >
        {{ $t("pages.home.ourStory.description") }}
      </p>
      <el-button
        v-motion-slide-visible-bottom
        size="large"
        color="#000000"
        round
        tag="a"
        @click="$router.push('/about-us')"
      >
        {{ $t("pages.home.ourStory.cta") }}
      </el-button>
    </div>
  </div>
</template>
