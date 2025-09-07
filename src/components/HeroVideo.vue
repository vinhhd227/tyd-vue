<!-- components/HeroVideo.vue -->
<template>
  <section class="tw:relative tw:isolate" aria-label="Hero">
    <div
      class="tw:relative tw:h-[100vh] tw:min-h-[520px] tw:w-full tw:overflow-hidden"
    >
      <!-- Poster fallback cho mobile -->
      <picture class="tw:absolute tw:inset-0 tw:block tw:md:hidden">
        <img
          src="/media/images/hero-image.jpg"
          alt="Poster sản phẩm"
          class="tw:h-full tw:w-full tw:object-cover"
        />
      </picture>

      <!-- Video (md+) -->
      <video
        ref="videoRef"
        class="tw:absolute tw:inset-0 tw:hidden tw:h-full tw:w-full tw:object-cover tw:md:block"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/media/images/hero-image.jpg"
        @error="hasVideoError = true"
      >
        <source src="/media/hero-video.mp4" type="video/mp4" />
        <track
          src="/media/hero-subtitles.vtt"
          kind="subtitles"
          srclang="vi"
          label="Vietnamese"
        />
        <track
          src="/media/hero-description.vtt"
          kind="descriptions"
          srclang="vi"
          label="Vietnamese Description"
        />
      </video>

      <!-- Lớp phủ để chữ dễ đọc -->
      <div
        class="tw:pointer-events-none tw:absolute tw:inset-0 tw:bg-gradient-to-t tw:from-black tw:via-black/20 tw:to-black/10"
      />

      <!-- Content -->
      <div
        class="tw:relative tw:z-10 tw:mx-auto tw:flex tw:h-full tw:max-w-7xl tw:items-center tw:px-4 sm:tw:px-6 lg:tw:px-8"
      >
        <div class="tw:max-w-2xl">
          <h1
            class="tw:text-4xl tw:font-bold tw:leading-tight sm:tw:text-5xl tw:text-white tw:drop-shadow-md"
          >
            Giải pháp bay tự động cho mọi lĩnh vực
          </h1>
          <p class="tw:mt-4 tw:text-base sm:tw:text-lg tw:text-white/80">
            Camera 4K, AI điều hướng, thời gian bay dài. Sẵn sàng cho khảo sát,
            giám sát và bảo trì công trình.
          </p>
          <div class="tw:mt-6 tw:flex tw:flex-wrap tw:gap-3">
            <a
              href="#demo"
              class="tw:rounded-2xl tw:bg-white tw:px-5 tw:py-3 tw:font-semibold tw:text-black hover:tw:bg-white/90 tw:transition"
            >
              Xem Demo
            </a>
            <a
              href="#contact"
              class="tw:rounded-2xl tw:border tw:border-white/30 tw:px-5 tw:py-3 tw:font-semibold hover:tw:bg-white/10 tw:transition"
            >
              Liên hệ tư vấn
            </a>
            <button
              @click="toggle"
              class="tw:rounded-2xl tw:border tw:border-white/30 tw:px-4 tw:py-3 tw:text-sm hover:tw:bg-white/10 tw:transition"
            >
              {{ isPlaying ? "Tạm dừng video" : "Phát video" }}
            </button>
          </div>
          <p v-if="hasVideoError" class="tw:mt-3 tw:text-sm tw:text-red-300">
            Không tải được video. Vui lòng kiểm tra đường dẫn.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videoRef = ref(null);
const isPlaying = ref(true);
const hasVideoError = ref(false);
let observer = null;

function toggle() {
  isPlaying.value = !isPlaying.value;
  const el = videoRef.value;
  if (!el) return;
  if (isPlaying.value) el.play().catch(() => {});
  else el.pause();
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) isPlaying.value = false;

  if (videoRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef.value;
        if (!el) return;
        if (entry.isIntersecting && isPlaying.value) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(videoRef.value);
  }
});
onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
