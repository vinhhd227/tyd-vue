<template>
  <el-container
    direction="vertical"
    :class="['tw:mx-auto', 'tw:z-10 tw:h-full tw:max-w-[70vw]']"
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
      class="tw:grid tw:grid-cols-4 tw:gap-x-5 tw:font-heading"
    >
      <div v-for="i in 4" :key="i">
        <el-statistic
          :value="outputValue"
          suffix="+"
          class="tw:pb-5 tw:text-6xl tw:font-medium"
        />
        <hr />
        <p class="tw:text-center tw:text-sm tw:font-semibold">
          Aerial intelligence collected
        </p>
      </div>
    </div>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import { useTransition, useIntersectionObserver } from "@vueuse/core";

const source = ref(0);
const outputValue = useTransition(source, { duration: 1500 });
const statRef = ref(null);

useIntersectionObserver(
  statRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // chỉ khi phần tử hiển thị mới start tăng số
      source.value = 172000;
    }
  },
  { threshold: 0.3 } // hiển thị ít nhất 30% mới tính là "thấy"
);
</script>
