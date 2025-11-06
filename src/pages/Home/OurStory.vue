<template>
  <div :class="['tw:w-full',  'tw:bg-gradient-to-b',
    'tw:from-white',
    'tw:via-gray-200',
    'tw:to-white']">
    <div
      :class="[
        'tw:w-full tw:lg:w-[80vw]',
        'tw:flex tw:gap-5',
        'tw:mx-auto',
        'tw:py-10',
      ]"
    >
      <div class="tw:w-3/5 tw:p-3">
        <div
          class="tw:relative tw:h-[420px] tw:md:h-[480px] tw:lg:h-[600px] tw:4xl:h-[1200px] tw:overflow-hidden tw:rounded-2xl"
        >
          <img
            v-motion-pop-visible
            src="/media/images/home/drone-land.jpg"
            alt=""
            class="tw:absolute tw:inset-0 tw:w-full tw:h-full tw:object-cover tw:object-[center_60%]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div
        :class="[
          'tw:flex tw:flex-col tw:justify-center tw:items-start',
          'tw:text-left',
          'tw:w-2/5 tw:4xl:w-1/2',
          'tw:mx-auto',
        ]"
      >
        <h5
          v-motion-pop-visible
          :class="['tw:mb-3']"
        >
          {{ $t("pages.home.ourStory.label") }}
        </h5>
        <h2
          v-motion-pop-visible
          :class="['tw:font-heading tw:font-semibold', 'tw:mb-10', 'tw:text-4xl']"
        >
          {{ $t("pages.home.ourStory.title") }}
        </h2>
        <p v-motion-pop-visible :class="['tw:text-lg', 'tw:mb-5']">
          {{ $t("pages.home.ourStory.description") }}
        </p>
        <el-button
          v-motion-pop-visible
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
  </div>
</template>
