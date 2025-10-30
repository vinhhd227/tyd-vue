<template>
  <div>
    <CoreValuesEChart
      :items="values"
      :centerTitle="'GIÁ TRỊ\nCỐT LÕI'"
      :palette="{
        ring: '#06b6d4',
        accentA: '#ec4899',
        accentB: '#22d3ee',
        edge: '#cbd5e1',
        text: '#0f172a',
      }"
    />
  </div>
</template>

<script setup>
import CoreValuesEChart from "@/components/CoreValuesEChart.vue";

// Dùng icon ảnh: prefix 'image://', ví dụ 'image:///media/icons/innovation.svg'
// (ECharts yêu cầu 'image://' ở đầu chuỗi)
const values = [
  {
    title: "Innovation",
    desc: "Không ngừng sáng tạo để tạo khác biệt.",
    icon: "image:///media/icons/innovation.svg",
  },
  {
    title: "Integrity",
    desc: "Minh bạch, trung thực, trách nhiệm.",
    icon: "image:///media/icons/integrity.svg",
  },
  {
    title: "Agility",
    desc: "Linh hoạt, thích ứng nhanh với thay đổi.",
    icon: "image:///media/icons/agility.svg",
  },
  {
    title: "Excellence",
    desc: "Theo đuổi chuẩn mực toàn cầu.",
    icon: "image:///media/icons/excellence.svg",
  },
];
</script>
