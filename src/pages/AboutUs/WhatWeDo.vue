<template>
  <el-container
    direction="vertical"
    :class="['tw:mx-auto', 'tw:z-10 tw:h-full', 'tw:max-w-[70vw]']"
  >
    <div class="tw:pb-20 tw:font-heading">
      <h2 v-motion-slide-visible-bottom class="tw:text-6xl tw:mb-3">
        What we do
      </h2>
      <h3 v-motion-slide-visible-bottom class="tw:text-3xl tw:font-normal">
        We specialize in the development, design, and production of advanced
        multi-sensor unmanned aerial systems (UAS) that collect aerial
        intelligence for the professional user.
      </h3>
    </div>

    <div v-motion-pop-visible class="tw-h-[80vh] tw:pb-6">
      <img src="/media/images/about.jpg" class="tw:w-full tw:object-contain" />
    </div>

    <!-- Statistic cần quan sát -->
    <div
      ref="statRef"
      class="tw:grid tw:grid-cols-4 tw:gap-x-8 tw:font-heading"
    >
      <div v-for="s in statistics" :key="s">
        <el-statistic
          v-motion-pop-visible
          :value="Math.round(outputValues[s.index].value)"
          suffix="+"
        />
        <hr class="tw:mb-5" />
        <p v-motion-slide-bottom class="tw:text-md tw:font-normal">
          {{ s.label }}
        </p>
      </div>
    </div>
  </el-container>
</template>

<script setup>
import { useTransition, useIntersectionObserver } from "@vueuse/core";

const statRef = ref(null);

// 1) Data
const statistics = [
  { index: 0, target: 250000, label: "Flight Hours" },
  { index: 1, target: 700, label: "Employees" },
  { index: 2, target: 80, label: "Resellers Worldwide" },
  { index: 3, target: 100, label: "Flight hours/unit" },
];

// 2) Mỗi item có 1 source riêng (Ref<number>)
const sources = [ref(0), ref(0), ref(0), ref(0)];

// 3) outputValues là mảng các Ref do useTransition trả về
const outputValues = sources.map((src) =>
  useTransition(src, { duration: 1000 })
);

// 4) Khi khối vào viewport, set source -> số chạy
useIntersectionObserver(
  statRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      for (let i = 0; i < sources.length; i++) {
        sources[i].value = statistics[i].target;
      }
    }
  },
  { threshold: 0.3 }
);
</script>
<style lang="scss" scope>
.el-statistic__content {
  font-size: var(--tw-text-3xl) !important;
  font-weight: var(--tw-font-weight-medium) !important;
}
</style>
