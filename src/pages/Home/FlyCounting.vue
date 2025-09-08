<template>
  <el-container
    direction="vertical"
    :class="[
      'tw:z-10 tw:mx-auto tw:h-full tw:max-w-7xl tw:px-4 sm:tw:px-6 tw:lg:px-8 tw:py-24',
      'tw:uppercase tw:font-semibold',
    ]"
  >
    <div class="tw:text-base">
      Time: {{ currentTime }} Date: {{ currentDate }}
    </div>
    <div class="tw:font-medium tw:text-9xl tw:font-heading">
      {{ formatted }}
    </div>
    <div class="text-2xl">Customer flights and counting</div>
  </el-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";
import { useRandomCounter } from "@/composables/useRandomCounter.js";

const currentTime = ref(dayjs().format("HH:mm:ss"));
const currentDate = ref(dayjs().format("YYYY.MM.DD"));

let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = dayjs().format("HH:mm:ss");
    currentDate.value = dayjs().format("YYYY.MM.DD");
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

const { formatted } = useRandomCounter({
  anchorDate: "2025-09-01T00:00:00Z",
  baseAtAnchor: 8000,
  minDelay: 1000,
  maxDelay: 10000,
  minStep: 1,
  maxStep: 10,
  avgStep: 5.5,
  avgDelay: 5500,
  locale: "en-US",
  storageKey: "randomCounter:flights",
});
</script>
