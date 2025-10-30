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
                v-motion-pop-visible
                :class="[
                  'tw:font-heading tw:font-semibold tw:text-2xl tw:xl:text-4xl',
                  'tw:mb-2',
                ]"
              >
                {{ item.title }}
              </h2>
              <p
                v-motion-pop-visible
                :class="['tw:font-light', 'tw:text-md tw:xl:text-lg', 'tw:mb-3']"
              >
                {{ item.description }}
              </p>
              <el-button v-motion-pop-visible size="large" color="#000000">{{
                item.button
              }}</el-button>
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
    title: "Giải pháp UAV & Hệ thống điều khiển tầm xa",
    description:
      "Từ thiết bị bay đến hệ thống truyền dữ liệu, phục vụ giám sát, huấn luyện và công nghiệp",
    button: "Tìm hiểu UAV",
  },
  {
    background: "/media/images/hero-cyber.webp",
    title: "Giải pháp bảo mật toàn diện cho hạ tầng số",
    description:
      "Phát hiện, giám sát và ngăn chặn mối đe dọa – bảo vệ dữ liệu và hệ thống doanh nghiệp",
    button: "Xem giải pháp bảo mật",
  },
  {
    background: "/media/images/hero-robotic.jpeg",
    title: "Robot và tự động hóa thông minh cho tương lai sản xuất",
    description:
      "Phát triển và tích hợp robot công nghiệp, robot tự hành và hệ thống Smart Factory",
    button: "Khám phá Robotics",
  },
]);
</script>
<style scoped>
/* áp cho mọi màn hình */
:deep(.hero-carousel .el-carousel__container) {
  height: 50vh;
}
/* md ≥ 768px */
@media (min-width: 768px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 50vh;
  }
}

/* lg ≥ 1024px */
@media (min-width: 1024px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 30vh;
  }
}
@media (min-width: 1280px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 60vh;
  }
}
@media (min-width: 1280px) {
  :deep(.hero-carousel .el-carousel__container) {
    height: 60vh;
  }
}
</style>
