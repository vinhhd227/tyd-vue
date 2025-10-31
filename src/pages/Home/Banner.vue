<template>
  <div :class="['tw:pb-0 tw:pt-20 tw:md:pt-25']">
    <el-carousel class="hero-carousel">
      <el-carousel-item v-for="item in hero" :key="item">
        <div :class="['tw:h-full tw:w-full', 'tw:bg-white']">
          <div
            :class="[
              'tw:h-full tw:w-full tw:lg:w-[80vw]',
              'tw:mx-auto',
              'tw:flex tw:flex-col-reverse tw:lg:flex-row tw:justify-end tw:lg:gap-5',
            ]"
          >
            <div
              :class="[
                'tw:w-full tw:lg:w-2/5',
                'tw:px-5',
                'tw:flex tw:flex-col tw:items-start tw:justify-center tw:text-start',
              ]"
            >
              <h2
                v-motion-roll-visible-right
                :class="[
                  'tw:font-heading tw:font-semibold tw:text-2xl tw:xl:text-4xl',
                  'tw:mb-2',
                ]"
              >
                {{ $t(item.title) }}
              </h2>
              <p
                v-motion-roll-visible-right
                :class="[
                  'tw:font-light',
                  'tw:text-md tw:xl:text-lg',
                  'tw:mb-3',
                ]"
              >
                {{ $t(item.description) }}
              </p>
              <el-button
                v-motion-roll-visible-right
                size="large"
                color="#000000"
              >
                <span class="tw:mr-2">{{ $t(item.cta) }}</span>
                <iconfy icon="mingcute:arrow-right-fill" />
              </el-button>
            </div>
            <div
              :class="[
                'tw:w-full tw:lg:w-3/5',
                ' tw:h-[200px] tw:md:h-[350px] tw:lg:h-[400px] tw:xl:h-[600px] tw:4xl:h-[750px]',
                'tw:p-5 tw:lg:px-0',
              ]"
            >
              <img
                v-motion-pop-visible
                :class="[
                  'tw:rounded-xl',
                  'tw:object-cover',
                  'tw:w-full tw:h-full',
                ]"
                :src="item.background"
                alt=""
              />
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
const hero = reactive([
  {
    background: "/media/images/hero-uav.webp",
    title: "pages.home.banner.drone.title",
    description: "pages.home.banner.drone.description",
    cta: "pages.home.banner.drone.cta",
  },
  {
    background: "/media/images/hero-cyber.webp",
    title: "pages.home.banner.cybersecurity.title",
    description: "pages.home.banner.cybersecurity.description",
    cta: "pages.home.banner.cybersecurity.cta",
  },
  {
    background: "/media/images/hero-robotic.jpeg",
    title: "pages.home.banner.automation.title",
    description: "pages.home.banner.automation.description",
    cta: "pages.home.banner.automation.cta",
  },
]);
</script>
<style scoped>
/* áp cho mọi màn hình */
:deep(.hero-carousel .el-carousel__container) {
  height: 450px;
}
/* md ≥ 768px */
@media (min-width: 768px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 500px;
  }
}
/* lg ≥ 1024px */
@media (min-width: 1024px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 450px;
  }
}
@media (min-width: 1280px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 650px;
  }
}
@media (min-width: 2048px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 800px;
  }
}
</style>
