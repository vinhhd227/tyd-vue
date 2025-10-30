<template>
  <div :class="['tw:w-full', 'tw:bg-gray-200']">
    <div
      :class="[
        'tw:flex tw:flex-col tw:md:flex-row tw:justify-center tw:items-center tw:gap-4 tw:md:gap-8',
        'tw:text-center',
        'tw:w-full tw:lg:w-[80vw] tw:h-[900px] tw:md:h-[500px] tw:3xl:h-[800px]',
        'tw:mx-auto',
        'tw:pb-5 tw:md:pb-10 tw:px-5 tw:lg:px-0',
      ]"
    >
      <!-- Card 1 -->
      <article
        v-motion-pop-visible
        v-for="value in ourValues"
        :class="[
          'tw:h-full tw:w-full',
          'tw:group tw:relative tw:rounded-xl tw:overflow-hidden',
          'tw:ring-1 tw:ring-black/5',
          'tw:shadow-xl',
        ]"
      >
        <!-- Background layer -->
        <div
          :class="[
            'tw:absolute tw:inset-0 tw:bg-cover tw:bg-[position:center_bottom] tw:xs:bg-[position:center] tw:md:bg-[position:center_bottom] tw:transition-transform tw:duration-700 tw:ease-out tw:group-hover:scale-110',
            value.image,
          ]"
        ></div>

        <!-- Overlay -->
        <div
          :class="[
            'tw:absolute tw:inset-0',
            'tw:bg-gradient-to-t tw:from-black/80 tw:via-black/80 tw:md:via-black/20 tw:to-transparent',
          ]"
        ></div>

        <!-- Text -->
        <div
          class="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:items-center tw:justify-end tw:p-6 tw:sm:p-8"
        >
          <h3
            class="tw:text-white tw:text-4xl tw:font-semibold tw:text-center tw:font-heading"
          >
            {{ $t(value.title) }}
          </h3>
          <p
            class="tw:mt-2 tw:text-white/80 tw:text-sm tw:3xl:text-xl tw:xl:texl-lg tw:text-center tw:max-w-[40ch]"
          >
            {{ $t(value.description) }}
          </p>
        </div>
      </article>

      <!-- 
      <div :class="['tw:w-1/3', 'tw:h-full']">
        <img class="tw:h-full tw:w-full tw:object-cover" src=" />
      </div>
      <div :class="['tw:w-1/3']">
        <img src="/media/images/home/integrity.webp" />
      </div>
      <div :class="['tw:w-1/3']">
        <img src="/media/images/home/excellence.jpg" />
      </div> -->
    </div>
  </div>
</template>
<script setup>
const ourValues = [
  {
    title: "pages.home.ourValue.innovation.title",
    description: "pages.home.ourValue.innovation.description",
    image: "tw:bg-[url('/media/images/home/innovation.jpg')]",
  },
  {
    title: "pages.home.ourValue.integrity.title",
    description: "pages.home.ourValue.integrity.description",
    image: "tw:bg-[url('/media/images/home/integrity.webp')]",
  },
  {
    title: "pages.home.ourValue.excellence.title",
    description: "pages.home.ourValue.excellence.description",
    image: "tw:bg-[url('/media/images/home/excellence.avif')]",
  },
];
</script>
