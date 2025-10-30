<template>
  <slot name="left">
    <img
      :src="
        isLight
          ? '/media/images/tyd-logo.svg'
          : '/media/images/tyd-logo-white.svg'
      "
      alt="logo"
      class="tw:w-[120px] tw:h-auto"
    />
  </slot>
</template>

<script setup>
const props = defineProps<{
  isLight: boolean
}>()
</script>
