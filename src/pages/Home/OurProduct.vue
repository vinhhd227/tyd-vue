<template>
  <div :class="['tw:w-full', 'tw:bg-white']">
    <div
      :class="[
        'tw:flex tw:flex-col tw:justify-center tw:items-center',
        'tw:text-center',
        'tw:w-full tw:lg:w-[80vw]',
        'tw:mx-auto',
        'tw:py-10',
      ]"
    >
      <h2
        v-motion-slide-visible-bottom
        :class="['tw:font-heading tw:text-4xl tw:font-semibold', 'tw:mb-10']"
      >
        Our Product’s
      </h2>
      <div>
        <div>Drone & GCS</div>
      </div>
      <swiper
        :modules="$swiperModules"
        :slides-per-view="5"
        :space-between="10"
        :loop="true"
        pagination
        autoplay
        :class="['tw:overflow-hidden', 'tw:w-[80vw] tw:h-[500px]']"
      >
        <swiper-slide v-for="item in products" :pagination="true">
          <div
            :class="[
              'tw:w-full',
              'tw:h-full',
              'tw:bg-gray-200',
              'tw:rounded-xl',
            ]"
          >
            <div :class="['tw:w-full tw:h-[400px]', 'tw:p-5', 'tw:overflow-hidden']">
              <img
                :class="['tw:w-full tw:h-max-[300px] tw:object-cover']"
                :src="item.image"
                alt=""
              />
            </div>
            <h4
              :class="[
                'tw:text-lg',
                'tw:font-semibold tw:font-heading',
                'tw:mb-2',
              ]"
            >
              {{ item.title }}
            </h4>
            <p :class="['tw:text-md', 'tw:font-light', 'tw:pb-2', 'tw:hidden']">
              {{ item.description }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
const activeName = ref("uav");
const products = ref([
  {
    title: "Drone Platform",
    description: "Description",
    image: "/media/images/home/prod-1.avif",
    link: "/",
  },
  {
    title: "Ground Control Station",
    description: "Description",
    image: "/media/images/home/prod-2.avif",
    link: "/",
  },
  {
    title: "Data Link / Communication Module",
    description: "Description",
    image: "/media/images/home/prod-3.png",
    link: "/",
  },
  {
    title: "Payload & Gimbal System",
    description: "Description",
    image: "/media/images/home/prod-4.png",
    link: "/",
  },
  {
    title: "Power & Charging System",
    description: "Description",
    image: "/media/images/home/prod-5.png",
    link: "/",
  },
]);
</script>
<style scope>
.el-tabs__nav {
  float: none;
  justify-items: center;
}
</style>
