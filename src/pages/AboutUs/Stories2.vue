<template>
  <el-container
    direction="vertical"
    :class="['tw:mx-auto', 'tw:z-10 tw:h-full', 'tw:max-w-[70vw]']"
  >
    <div class="tw:py-20 tw:font-heading tw:font-medium">
      <h2 v-motion-slide-visible-bottom class="tw:text-6xl tw:mb-3">
        Aerial intelligence when it matters
      </h2>
      <h2 v-motion-slide-visible-bottom class="tw:text-3xl">
        The Quantum Systems Story
      </h2>
    </div>
    <div class="tw:grid tw:grid-cols tw:xl:grid-cols-3">
      <div
        class="tw:col-span-2 tw:grid tw:grid-cols tw:md:grid-cols-2 tw:gap-x-5"
      >
        <div class="tw:pb-20" v-for="c in content" :key="c">
          <p
            v-motion-slide-visible-bottom
            class="tw:text-3xl tw:font-medium tw:font-heading tw:mb-3"
          >
            {{ c.title }}
          </p>
          <p v-motion-slide-visible-left class="tw:text-md tw:font-normal">
            {{ c.description }}
          </p>
        </div>
        <div class="tw:none"></div>
      </div>
    </div>
    <div>
      <h2
        v-motion-slide-visible-bottom
        class="tw:text-6xl tw:font-medium tw:font-heading tw:pb-20"
      >
        We are leading the aerial data revolution.
      </h2>
    </div>
  </el-container>
</template>
<script setup>
const content = [
  {
    title: "Why",
    description:
      "When making decisions, seeing the bigger picture and acting upon reliable data is pivotal – regardless of whether you are thousands of miles away or directly on the ground, whether in times of war or in business.",
  },
  {
    title: "What",
    description:
      "Our ever evolving systems redefine how aerial data is collected, analysed, and turned into action. Hence, we make armed forces, governments, and companies future-proof for the age of aerial intelligence. As the global leader in eVTOL drones, we bring innovation and speed to military users and field-proven, robust systems to the commercial world, empowering both to act on real-time mission-critical data in any environment or scenario.",
  },
  {
    title: "How",
    description:
      "All our drones are the perfect symbiosis of hardware and software: easy to use, durable, effective, and cutting-edge, delivering the highest-quality data fast to any operator, business owner, or soldier.",
  },
  {
    title: "Who",
    description:
      "We are bold and curious, explorers at heart, engineers by definition. We believe actions speak louder than words. We stand for everything that defines our free and democratic societies.",
  },
];
</script>
