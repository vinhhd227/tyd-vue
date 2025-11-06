<template>
  <div :class="['tw:w-full', 'tw:bg-transparent', 'tw:md:py-5', 'tw:z-10']">
    <div
      :class="[
        'tw:flex tw:flex-col tw:justify-center tw:items-center',
        'tw:text-center',
        'tw:w-full tw:lg:w-[80vw]',
        'tw:mx-auto',
        'tw:py-10',
      ]"
    >
      <div>
        <h2
          v-motion-pop-visible
          class="tw:text-4xl tw:font-heading tw:font-semibold tw:text-center tw:uppercase tw:mb-10"
        >
          {{ $t("pages.home.ourHighlights.label") }}
        </h2>
        <div
          class="tw:columns-1 tw:sm:columns-2 tw:lg:columns-4 tw:gap-6 [column-fill:_balance]"
        >
          <div
            v-motion-pop-visible
            v-for="(item, i) in items"
            :key="i"
            class="tw:mb-6 tw:break-inside-avoid tw:rounded-2xl tw:overflow-hidden tw:shadow-md tw:bg-white hover:tw:shadow-xl tw:transition-all tw:duration-300"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="tw:w-full tw:object-cover"
            />
            <div class="tw:p-5">
              <h3 class="tw:text-lg tw:font-heading tw:font-semibold tw:mb-2">
                {{ $t(item.title) }}
              </h3>
              <p class="tw:text-gray-600 tw:text-sm tw:text-left">
                {{ $t(item.description) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const items = [
  {
    title: "pages.home.ourHighlights.constructionSites.title",
    description: "pages.home.ourHighlights.constructionSites.description",
    image: "/media/images/home/construction-sites.jpeg",
  },
  {
    title: "pages.home.ourHighlights.rescueUAV.title",
    description: "pages.home.ourHighlights.rescueUAV.description",
    image: "/media/images/home/rescue-uav.webp",
  },
  {
    title: "pages.home.ourHighlights.networkSecurity.title",
    description: "pages.home.ourHighlights.networkSecurity.description",
    image: "/media/images/home/network-security.jpg",
  },
  {
    title: "pages.home.ourHighlights.enterpriseSecurity.title",
    description: "pages.home.ourHighlights.enterpriseSecurity.description",
    image: "/media/images/home/enterprise-security.avif",
  },
  {
    title: "pages.home.ourHighlights.factoryAutomation.title",
    description: "pages.home.ourHighlights.factoryAutomation.description",
    image: "/media/images/home/factory-automation.avif",
  },
  {
    title: "pages.home.ourHighlights.quadrupedRobot.title",
    description: "pages.home.ourHighlights.quadrupedRobot.description",
    image: "/media/images/home/quadruped-robot.webp",
  },
  {
    title: "pages.home.ourHighlights.groundControlStation.title",
    description: "pages.home.ourHighlights.groundControlStation.description",
    image: "/media/images/home/ground-control-station.jpg",
  },
  {
    title: "pages.home.ourHighlights.smartFactory.title",
    description: "pages.home.ourHighlights.smartFactory.description",
    image: "/media/images/home/smart-factory.avif",
  },
];
</script>
