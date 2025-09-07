<template>
  <section class="tw:relative tw:isolate" :aria-label="ariaLabel">
    <div class="tw:relative tw:w-full tw:overflow-hidden" :style="containerStyle">
      <!-- Poster cho mobile -->
      <picture class="tw:absolute tw:inset-0 tw:block tw:md:hidden">
        <img
          :src="posterSrc"
          :alt="posterAlt"
          class="tw:h-full tw:w-full tw:object-cover"
        />
      </picture>

      <!-- Video (md+) -->
      <video
        v-show="!hasVideoError"
        ref="videoRef"
        class="tw:absolute tw:inset-0 tw:hidden tw:h-full tw:w-full tw:object-cover tw:md:block"
        :autoplay="autoplay"
        :muted="muted"
        :loop="loop"
        playsinline
        :preload="preload"
        :poster="posterSrc"
        :style="{ objectFit }"
        @error="hasVideoError = true"
        v-bind="$attrs"
      >
        <source :src="videoSrc" :type="videoType" />
        <template v-for="(t, i) in tracks" :key="i">
          <track :src="t.src" :kind="t.kind" :srclang="t.srclang" :label="t.label" />
        </template>
      </video>

      <!-- Poster fallback cho md+ khi video lỗi -->
      <picture v-if="hasVideoError" class="tw:absolute tw:inset-0 tw-hidden tw:md:block">
        <img
          :src="posterSrc"
          :alt="posterAlt"
          class="tw:h-full tw:w-full tw:object-cover"
        />
      </picture>

      <!-- Lớp phủ (tùy chọn) -->
      <div
        v-if="showOverlay"
        class="tw:pointer-events-none tw:absolute tw:inset-0"
        :class="overlayClass"
      />

      <!-- Slot nội dung -->
      <div class="tw:relative tw:z-10 tw:mx-auto tw:flex tw:h-full tw:max-w-7xl tw:items-center tw:px-4 sm:tw:px-6 lg:tw:px-8">
        <div class="tw:w-full">
          <!-- Expose điều khiển ra slot -->
          <slot :isPlaying="isPlaying" :toggle="toggle" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
defineOptions({ inheritAttrs: false })

const props = defineProps({
  videoSrc:   { type: String, required: true },
  posterSrc:  { type: String, required: true },
  heightVh:   { type: Number, default: 100 }, // chiều cao theo vh
  posterAlt:  { type: String, default: 'Poster' },
  ariaLabel:  { type: String, default: 'Hero' },

  // Video options
  autoplay:   { type: Boolean, default: true },
  muted:      { type: Boolean, default: true }, // cần để iOS tự phát
  loop:       { type: Boolean, default: true },
  preload:    { type: String,  default: 'auto' }, // 'auto' | 'metadata' | 'none'
  videoType:  { type: String,  default: 'video/mp4' },
  objectFit:  { type: String,  default: 'cover' },

  // Overlay
  showOverlay:{ type: Boolean, default: true },
  overlayClass: {
    type: String,
    default: 'tw:bg-gradient-to-t tw:from-black tw:via-black/20 tw:to-black/10'
  },

  // Tự pause/play theo viewport
  playOnIntersect: { type: Boolean, default: true },
  threshold:       { type: Number,  default: 0.5 },

  // Track phụ đề mô tả (tùy chọn)
  tracks: { type: Array, default: () => [] },
})

const videoRef = ref(null)
const isPlaying = ref(props.autoplay)
const hasVideoError = ref(false)
let observer = null

const containerStyle = computed(() => ({
  height: `${props.heightVh}vh`,
  minHeight: '520px',
}))

function toggle() {
  const el = videoRef.value
  isPlaying.value = !isPlaying.value
  if (!el) return
  if (isPlaying.value) el.play().catch(() => {})
  else el.pause()
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) isPlaying.value = false

  if (props.playOnIntersect && videoRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef.value
        if (!el) return
        if (entry.isIntersecting && isPlaying.value) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: props.threshold }
    )
    observer.observe(videoRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
