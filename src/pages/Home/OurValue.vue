<template>
  <div :class="['tw:w-full', 'tw:py-10', 'tw:z-10']">
    <div
      :class="[
        'tw:flex tw:flex-col tw:justify-center tw:items-center',
        'tw:text-center',
        'tw:w-full tw:lg:w-[80vw]',
        'tw:mx-auto',
        'tw:pb-5 tw:md:pb-10 tw:px-5 tw:lg:px-0',
      ]"
    >
      <h5
        v-motion-slide-visible-bottom
        :class="[
          'tw:w-full',
          'tw:font-heading tw:font-semibold tw:text-4xl tw:text-center tw:uppercase',
          'tw:mb-5',
        ]"
      >
        <span>{{ $t("pages.home.ourValue.label") }}</span>
      </h5>

      <div class="tw:flex tw:gap-10 tw:pt-20">
        <div
          v-motion-pop-visible-one
          class="tw:text-center"
          v-for="value in ourValues"
        >
          <div class="tw:relative tw:w-48 tw:h-48 tw:mx-auto tw:mb-15">
            <div
              class="tw:absolute tw:inset-0 tw:bg-gray-800 tw:rounded-[18px] tw:rotate-45 tw:shadow-xl tw:transition tw:duration-300 hover:tw:scale-[1.03]"
            />
            <div
              class="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center"
            >
              <iconify
                :icon="value.icon"
                class="tw:text-8xl tw:text-white/95"
              />
            </div>
          </div>
          <h3 class="tw:mt-6 tw:font-heading tw:text-2xl tw:font-semibold">
            {{ $t(value.title) }}
          </h3>
          <p class="tw:mt-2 tw:text-lg tw:leading-relaxed tw:w-[40ch]">
            {{ $t(value.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const ourValues = [
  {
    title: "pages.home.ourValue.innovation.title",
    description: "pages.home.ourValue.innovation.description",
    image: "tw:bg-[url('/media/images/home/innovation.jpg')]",
    icon: "mage:light-bulb-fill",
  },
  {
    title: "pages.home.ourValue.integrity.title",
    description: "pages.home.ourValue.integrity.description",
    image: "tw:bg-[url('/media/images/home/integrity.webp')]",
    icon: "emojione-monotone:handshake",
  },
  {
    title: "pages.home.ourValue.excellence.title",
    description: "pages.home.ourValue.excellence.description",
    image: "tw:bg-[url('/media/images/home/excellence.avif')]",
    icon: "icon-park-solid:good-two",
  },
];
</script>
