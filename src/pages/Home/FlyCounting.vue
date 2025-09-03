<template>
  <el-container
    direction="vertical"
    :class="[
      'tw:z-10 tw:mx-auto tw:h-full tw:max-w-7xl tw:px-4 sm:tw:px-6 tw:lg:px-8 tw:py-24',
      'tw:uppercase tw:font-semibold',
    ]"
  >
    <div class="tw:text-base">
      Time: {{ $dayjs().format("HH:mm:ss") }} Date:
      {{ $dayjs().format("YYYY.MM.DD") }}
    </div>
    <div class="tw:font-medium tw:text-9xl tw:font-heading">
      {{ formatted }}
    </div>
    <div class="text-2xl">Customer flights and counting</div>
  </el-container>
</template>
<script setup>
import { useRandomCounter } from "@/composables/useRandomCounter.js";

const { formatted } = useRandomCounter({
  anchorDate: "2025-09-01T00:00:00Z", // mốc tuỳ chọn
  baseAtAnchor: 8000, // giá trị tại mốc
  minDelay: 1000, // 1s
  maxDelay: 10000, // 10s
  minStep: 1,
  maxStep: 10,
  avgStep: 5.5,
  avgDelay: 5500,
  locale: "en-US", // "vi-VN" nếu muốn 1.234.567
  storageKey: "randomCounter:flights", // key riêng cho counter này
});
</script>
