<script setup lang="ts">
import { computed } from "vue";

type Theme = "dark" | "light" | "blue" | "warm";
type Pattern = "none" | "dot" | "lines" | "mesh" | "blobs" | "waves" | "noise";

const props = withDefaults(defineProps<{
  theme?: Theme;
  pattern?: Pattern;
  fullBleed?: boolean;
  /** Kích thước ô lưới cho dot/lines (px) */
  patternSize?: number;
  /** Độ mờ overlay (0–1) */
  patternOpacity?: number;
}>(), {
  theme: "dark",
  pattern: "dot",
  fullBleed: false,
  patternSize: 22,
  patternOpacity: 1
});

const wrapClass = computed(() => [
  "tw:relative tw:isolate tw:overflow-hidden tw:w-full",
  props.fullBleed ? "tw:-tw-mx-[calc(50vw-50%)]" : "",
  "tw:py-16 tw:sm:py-24",
  // theme nền
  props.theme === "dark" && "tw:bg-gradient-to-br tw:from-[#0F172A] tw:to-[#1E293B]",
  props.theme === "light" && "tw:bg-white",
  props.theme === "blue" && "tw:bg-gradient-to-br tw:from-[#E8F0FF] tw:via-[#F4F7FA] tw:to-[#E8F0FF]",
  props.theme === "warm" && "tw:bg-gradient-to-br tw:from-white tw:via-[#FFF5F2] tw:to-[#FEECE8]",
].filter(Boolean).join(" "));

const gridColor = computed(() =>
  ({
    dark: "rgba(255,255,255,0.07)",
    light: "rgba(0,0,0,0.08)",
    blue:  "rgba(30,41,59,0.05)",
    warm:  "rgba(236,92,57,0.05)",
  }[props.theme])
);

const patternStyle = computed(() => {
  const size = `${props.patternSize}px ${props.patternSize}px`;
  const opacity = props.patternOpacity ?? 1;

  switch (props.pattern) {
    case "dot":
      return {
        backgroundImage: `radial-gradient(circle at 1px 1px, ${gridColor.value} 1px, transparent 1px)`,
        backgroundSize: size,
        backgroundRepeat: "repeat",
        backgroundPosition: "0 0",
        opacity,
      };

    case "lines":
      return {
        backgroundImage:
          `linear-gradient(to right, ${gridColor.value} 1px, transparent 1px),` +
          `linear-gradient(to bottom, ${gridColor.value} 1px, transparent 1px)`,
        // Quan trọng: áp dụng size/position/repeat cho MỖI lớp
        backgroundSize: `${size}, ${size}`,
        backgroundRepeat: "repeat, repeat",
        backgroundPosition: "0 0, 0 0",
        opacity,
      };

    case "mesh":
      return {
        backgroundImage:
          `radial-gradient(at 20% 20%, #a5f3fc 0px, transparent 40%),` +
          `radial-gradient(at 80% 0%, #93c5fd 0px, transparent 40%),` +
          `radial-gradient(at 0% 50%, #f9a8d4 0px, transparent 40%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.8 * opacity as number,
      };

    case "waves":
      return {
        backgroundImage: `radial-gradient(ellipse at top, #e0f2fe 0%, transparent 60%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        opacity: 0.7 * opacity as number,
      };

    case "noise":
      return {
        backgroundImage: `url('https://www.transparenttextures.com/patterns/noise.png')`,
        backgroundRepeat: "repeat",
        backgroundPosition: "0 0",
        opacity: 0.3 * opacity as number,
      };

    case "blobs":
    default:
      return { background: "transparent", opacity: 1 };
  }
});

</script>

<template>
  <section :class="wrapClass">
    <!-- Nội dung của bạn -->
    <div class="tw:relative tw:z-10">
      <slot />
    </div>

    <!-- Lớp overlay chính theo pattern -->
    <div
      v-if="pattern !== 'none'"
      aria-hidden="true"
      class="tw:pointer-events-none tw:absolute tw:inset-0"
      :style="patternStyle"
    ></div>

    <!-- Bổ sung khối blur cho theme dark -->
    <template v-if="theme==='dark'">
      <div aria-hidden="true" class="tw:absolute -tw:top-24 tw:right-[-10%] tw:h-64 tw:w-64 tw:rounded-full tw:bg-white/10 tw:blur-3xl"></div>
      <div aria-hidden="true" class="tw:absolute tw:bottom-[-3rem] tw:left-[-5%] tw:h-72 tw:w-72 tw:rounded-full tw:bg-white/5 tw:blur-2xl"></div>
    </template>

    <!-- Blobs riêng (cộng thêm) -->
    <template v-if="pattern==='blobs'">
      <div aria-hidden="true" class="tw:absolute -tw:top-10 -tw:left-10 tw:w-80 tw:h-80 tw:bg-[#EC5C39]/20 tw:blur-[100px]"></div>
      <div aria-hidden="true" class="tw:absolute tw:bottom-0 tw:right-0 tw:w-96 tw:h-96 tw:bg-[#0F172A]/15 tw:blur-[120px]"></div>
    </template>
  </section>
</template>
