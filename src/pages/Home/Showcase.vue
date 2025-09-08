<template>
  <section
    :class="[
      'tw:xl:px-63 tw:pt-24 tw:pb-18',
      'tw:flex tw:flex-col tw:items-center',
    ]"
  >
    <h2
      :class="[
        'tw:font-heading tw:text-5xl tw:font-semibold',
        'tw:mb-3 tw:w-full tw:max-w-[1455px]',
      ]"
    >
      TYD in action
    </h2>
    <Carousel
      :items-to-show="4.25"
      :wrap-around="true"
      class="tw:max-w-[1455px]"
    >
      <Slide v-for="(slide, idx) in slides" :key="idx">
        <div class="carousel__item">
          <el-card
            class="tw:h-[400px] tw:w-[330px] tw:rounded-2xl tw:mx-2"
            body-class="tw:p-0"
            header-class="tw:p-0"
            footer-class="tw:p-0"
          >
            <!-- Header -->
            <template #header>
              <div
                class="tw:flex tw:items-center tw:justify-between tw:px-3 tw:h-[64px]"
              >
                <div class="tw:flex tw:items-center">
                  <el-avatar
                    class="tw:w-[36px] tw:h-[36px]"
                    :src="slide.avatar"
                  />
                  <span
                    class="tw:text-sm tw:font-heading tw:font-semibold tw:ml-2"
                  >
                    {{ slide.author }}
                  </span>
                </div>
                <icon icon="heroicons-outline:share" class="tw:text-2xl" />
              </div>
            </template>

            <!-- Body -->
            <template #default>
              <div
                class="tw:relative tw:overflow-hidden tw:flex tw:items-center tw:justify-center tw:h-[275px]"
              >
                <!-- Nền mờ -->
                <img
                  :src="slide.image"
                  alt="background"
                  class="tw:absolute tw:inset-0 tw:w-full tw:h-full tw:object-cover tw:blur-lg tw:scale-110 tw:opacity-60 tw:pointer-events-none"
                />

                <!-- Ảnh chính: fit cả chiều rộng & chiều cao khung -->
                <img
                  :src="slide.image"
                  alt="main"
                  class="tw:relative tw:z-10 tw:object-contain tw:max-w-full tw:max-h-full tw:shadow-lg tw:transition-transform tw:duration-300 hover:tw:scale-105"
                />
              </div>
            </template>
            <template #footer>
              <div class="tw:py-2 tw:px-3">
                <h5 class="tw:text-sm tw:font-medium tw:font-heading">
                  {{ slide.description }}
                </h5>
                <a
                  :href="slide.website"
                  class="tw:text-stone-600 tw:text-[9px] tw:font-semibold tw:hover:underline"
                >
                  {{ slide.website }}
                </a>
              </div>
            </template>
          </el-card>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const slides = [
  {
    avatar: "https://picsum.photos/64/64?random=11",
    author: "John Doe",
    image: "/media/images/showcase/1.jpg",
    title: "Slide 1",
    description: "Description for Slide 1",
    website: "https://example.com/slide1",
  },
  {
    avatar: "https://picsum.photos/64/64?random=12",
    author: "John Doe",
    image: "https://picsum.photos/600/900?random=2", // ví dụ ảnh dọc
    title: "Slide 2",
    description:
      "Description for Slide 2 Description for Slide 1 Description for Slide 1",
    website: "https://example.com/slide2",
  },
  {
    avatar: "https://picsum.photos/64/64?random=13",
    author: "John Doe",
    image: "https://picsum.photos/900/600?random=3", // ví dụ ảnh ngang
    title: "Slide 3",
    description: "Description for Slide 3",
    website: "https://example.com/slide3",
  },
];
</script>
