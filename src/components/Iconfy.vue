<template>
  <Icon
    :icon="props.icon"
    v-bind="$attrs"
    :key="props.icon" 
    :style="{
      fontSize: normalizedSize,
      color: props.color ?? undefined
    }"
  />
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

defineOptions({ name: "AppIcon" });

const props = defineProps({
  icon:  { type: String, required: true },
  size:  { type: [String, Number], default: null },
  color: { type: String, default: null },
});

const normalizedSize = computed(() => {
  const v = props.size;
  if (v == null) return undefined;
  return typeof v === "number" ? `${v}px` : v;
});
</script>
