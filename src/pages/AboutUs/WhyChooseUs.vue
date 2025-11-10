<template>
  <section :class="['tw:py-20', 'tw:bg-gray-100', 'tw:z-10']">
    <el-container
      :class="[
        'tw-container-default',
        'tw:grid tw:grid-cols-12 tw:gap-10 tw:items-center',
      ]"
    >
      <div class="tw:col-span-6 tw:z-10">
        <h2
          v-motion-pop-visible
          :class="[
            'tw:text-5xl tw:mb-5 tw:text-right tw:font-semibold tw:font-heading',
          ]"
        >
          WHY CHOOSE US
        </h2>
        <div class="tw:grid tw:grid-cols-2 tw:gap-5">
          <div
            v-motion-pop-visible
            v-for="item in reasons"
            :class="[
              'tw:p-5',
              'tw:bg-white',
              'tw:shadow-lg',
              'tw:rounded-2xl',
              'tw:z-10',
            ]"
          >
            <div class="tw:flex tw:items-center tw:gap-4">
              <div
                class="tw:p-3 tw:rounded-xl tw:flex tw:items-center tw:gap-3 tw:bg-sky-200"
              >
                <iconify
                  :icon="item.icon"
                  class="tw:text-3xl tw:text-blue-600"
                />
              </div>
              <h3 class="tw:text-xl tw:font-semibold tw:font-heading">
                {{ $t(item.title) }}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="tw:col-span-6 tw:z-10">
        <img
          v-motion-pop-visible
          src="/media/images/about/why_choose_us.avif"
          class="tw:object-cover tw:rounded-2xl tw:h-[700px]"
          alt=""
        />
      </div>
    </el-container>
  </section>
</template>
<script setup>
const reasons = [
  {
    icon: "mynaui:file-check-solid",
    title: "pages.aboutUs.whyChooseUs.quality",
  },
  {
    icon: "ph:tree-structure-fill",
    title: "pages.aboutUs.whyChooseUs.structure",
  },
  { icon: "ion:rocket", title: "pages.aboutUs.whyChooseUs.deployment" },
  { icon: "fa6-solid:chart-pie", title: "pages.aboutUs.whyChooseUs.cost" },
  {
    icon: "streamline-ultimate:performance-increase-bold",
    title: "pages.aboutUs.whyChooseUs.performance",
  },
  { icon: "clarity:design-solid", title: "pages.aboutUs.whyChooseUs.design" },
];
</script>
