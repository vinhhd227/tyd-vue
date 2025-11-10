<template>
  <section class="tw:py-10 tw:lg:py-20 tw:bg-gray-50">
    <div class="tw-container-default">
      <div class="tw:grid tw:grid-cols-1 tw:md:grid-cols-3 tw:gap-8">
        <div
          v-motion-pop-visible
          :class="[
            'tw:p-10 tw:rounded-xl tw:shadow-lg',
            'tw:bg-white',
            ' tw:border tw:border-gray-200',
            'tw:z-10',
          ]"
          v-for="item in contents"
        >
          <div class="tw:flex tw:items-center tw:gap-4">
            <div
              :class="[
                'tw:p-2 tw:mb-3',
                'tw:rounded-xl',
                'tw:flex tw:items-center tw:gap-3',
                item.bgColor,
              ]"
            >
              <iconify :icon="item.icon" :class="['tw:text-5xl', item.color]" />
            </div>
            <h3 class="tw:text-2xl tw:font-semibold tw:font-heading">
              {{ $t(item.title) }}
            </h3>
          </div>
          <p class="tw:mb-4 tw:text-lg tw:font-heading">
            {{ $t(item.description) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { color } from "echarts";

const contents = ref([
  {
    title: "pages.aboutUs.whatWeDo.ourCoreValues.title",
    description:
      "pages.aboutUs.whatWeDo.ourCoreValues.description",
    icon: "proicons:diamond",
    color: "tw:text-blue-500",
    bgColor: "tw:bg-blue-200",
  },
  {
    title: "pages.aboutUs.whatWeDo.ourMission.title",
    description:
      "pages.aboutUs.whatWeDo.ourMission.description",
    icon: "mdi:target",
    color: "tw:text-red-500",
    bgColor: "tw:bg-red-200",
  },
  {
    title: "pages.aboutUs.whatWeDo.ourVision.title",
    description:
      "pages.aboutUs.whatWeDo.ourVision.description",
    icon: "mdi:eye-outline",
    color: "tw:text-green-500",
    bgColor: "tw:bg-green-200",
  },
]);
</script>
