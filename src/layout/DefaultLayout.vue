<template>
  <el-container
    :class="['tw:min-h-screen', 'tw:relative']"
    direction="vertical"
  >
    <div
      class="tw:absolute tw:inset-0 tw:z-0 tw:pointer-events-none"
      :style="{
        backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 0',
        maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
        WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }"
    />
    <HeaderBar />
    <el-main :class="['tw:p-0', 'tw:overflow-x-hidden']">
      <router-view />
    </el-main>
    <FooterBar />
  </el-container>
  <el-backtop class="tw:z-100">
    <iconify icon="eva:arrow-up-fill" class="tw:text-black tw:text-3xl" />
  </el-backtop>
</template>

<script setup>
import HeaderBar from "./HeaderBar.vue";
import FooterBar from "./FooterBar.vue";
</script>
