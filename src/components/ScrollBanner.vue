<!-- SectionCrossfadeTw.vue -->
<template>
  <!-- SECTION chỉ riêng hiệu ứng, cao ~300vh để có khoảng cuộn -->
  <section ref="sec" class="tw:relative tw:h-[300vh]">
    <!-- STAGE sticky: chỉ ‘pin’ trong phạm vi section -->
    <div class="tw:sticky tw:top-0 tw:h-screen tw:relative tw:overflow-hidden">
      <!-- Nền trong phạm vi STAGE (KHÔNG dùng fixed) -->
      <div class="tw:absolute tw:inset-0 tw:-z-10">
        <img
          :src="bgA"
          class="tw:absolute tw:inset-0 tw:w-full tw:h-full tw:object-cover"
          :style="{ opacity: (1 - p).toFixed(4) }"
          alt=""
        />
        <img
          :src="bgB"
          class="tw:absolute tw:inset-0 tw:w-full tw:h-full tw:object-cover"
          :style="{ opacity: p.toFixed(4) }"
          alt=""
        />
        <!-- Nếu cần đọc chữ rõ hơn, mở lớp overlay:
        <div class="tw:absolute tw:inset-0 tw:bg-black/10"></div> -->
      </div>

      <!-- Lớp chữ (nằm trong STAGE) -->
      <div class="tw:relative tw:h-full tw:grid tw:place-items-center">
        <!-- Text A: giữa -> trượt lên, mờ dần -->
        <div
          class="tw:text-center tw:max-w-3xl tw:px-6 tw:font-semibold tw:leading-tight"
          :style="styleA"
        >
          {{ copyA }}
        </div>

        <!-- Text B: dưới -> đi lên giữa, rõ dần -->
        <div
          class="tw:text-center tw:max-w-3xl tw:px-6 tw:font-semibold tw:leading-tight tw:absolute tw:left-1/2"
          :style="styleB"
        >
          {{ copyB }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

/* Ảnh & nội dung */
const bgA = '/media/images/solutions/1.png'
const bgB = '/media/images/solutions/2.png'
const copyA = 'You protect us, DFR protects you'
const copyB = 'Out-see, out-think, and out-do the adversary'

/* Tiến độ trong phạm vi SECTION (0 → 1) */
const sec = ref(null)
const p = ref(0)

/* Vùng chuyển trong section (tùy chỉnh theo cảm giác) */
const startRatio = 0.18
const endRatio   = 0.72

let startPx = 0
let endPx   = 0
let rafId   = 0
let ticking = false

function easeInOutCubic(t){
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2
}

function computeAnchors(){
  if(!sec.value) return
  const total = sec.value.offsetHeight
  startPx = total * startRatio
  endPx   = total * endRatio
}

function updateProgress(){
  ticking = false
  if(!sec.value) return
  const rect = sec.value.getBoundingClientRect()
  const total = sec.value.offsetHeight
  const vh = window.innerHeight

  // Độ cuộn nội bộ của SECTION (từ khi cạnh trên chạm viewport)
  const scrolledPx = Math.min(Math.max(-rect.top, 0), total - vh)

  const span = Math.max(endPx - startPx, 1)
  const raw = (scrolledPx - startPx) / span
  p.value = Math.min(1, Math.max(0, raw))
}

function onScroll(){
  if(ticking) return
  ticking = true
  rafId = requestAnimationFrame(updateProgress)
}
function onResize(){
  computeAnchors()
  updateProgress()
}

onMounted(()=>{
  computeAnchors()
  updateProgress()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(()=>{
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  if(rafId) cancelAnimationFrame(rafId)
})

/* Style chữ theo p, CHỈ trong section */
const styleA = computed(()=>{
  const t = easeInOutCubic(1 - p.value)
  const translateY = (1 - t) * -120         // giữa → lên ~120px
  const opacity = Math.max(0, 1 - p.value*1.25)
  return {
    transform: `translateY(${translateY}px)`,
    opacity: opacity.toFixed(4),
    color: '#111827',
    textShadow: '0 1px 2px rgba(255,255,255,.35)',
  }
})

const styleB = computed(()=>{
  const t = easeInOutCubic(p.value)
  const translateY = (1 - t) * 140 - 6       // dưới → giữa
  const opacity = Math.min(1, p.value*1.25)
  return {
    transform: `translate(-50%, ${translateY}px)`, // tự xử lý -50% theo trục X
    opacity: opacity.toFixed(4),
    color: '#111827',
    textShadow: '0 1px 2px rgba(255,255,255,.35)',
  }
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce){
  *{ animation:none !important; transition:none !important; }
}
</style>
