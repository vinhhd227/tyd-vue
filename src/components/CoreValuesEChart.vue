<template>
  <section class="tw:py-10">
    <v-chart
      ref="chartRef"
      :option="option"
      :autoresize="true"
      class="tw:w-full tw:h-[520px] md:tw:h-[900px]"
    />
  </section>
</template>

<script setup>
// Vue & ECharts
import { computed } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { GraphChart, PieChart } from "echarts/charts";
use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphChart,
  PieChart,
]);

/**
 * Props:
 * - items: 6 giá trị xung quanh (title/desc/icon)
 *   icon: có thể là đường dẫn ảnh (image://...), hoặc bỏ trống để dùng node tròn.
 * - centerTitle: tiêu đề giữa
 * - palette: màu brand cho viền & accent
 */
const props = defineProps({
  items: {
    type: Array,
    default: () => [
      {
        title: "Innovation",
        desc: "Không ngừng sáng tạo để tạo khác biệt.",
        icon: "",
      },
      {
        title: "Integrity",
        desc: "Minh bạch, trung thực, trách nhiệm.",
        icon: "",
      },
      {
        title: "Agility",
        desc: "Linh hoạt, thích ứng nhanh với thay đổi.",
        icon: "",
      },
      { title: "Excellence", desc: "Theo đuổi chuẩn mực toàn cầu.", icon: "" },
      {
        title: "Collaboration",
        desc: "Đồng hành cùng đối tác & cộng đồng.",
        icon: "",
      },
      {
        title: "Customer-first",
        desc: "Lấy nhu cầu thực tế làm trung tâm.",
        icon: "",
      },
    ],
  },
  centerTitle: {
    type: String,
    default: "CORE\nVALUES",
  },
  palette: {
    type: Object,
    default: () => ({
      ring: "#22d3ee", // cyan-400
      accentA: "#ec4899", // pink-500
      accentB: "#06b6d4", // cyan-500
      edge: "#cbd5e1", // slate-300
      text: "#0f172a", // slate-900
    }),
  },
});

/**
 * Helpers
 */
const toPolar = (cx, cy, r, deg) => ({
  x: cx + r * Math.cos((deg * Math.PI) / 180),
  y: cy + r * Math.sin((deg * Math.PI) / 180),
});

/**
 * Option (tự động co giãn vì dùng :autoresize="true")
 */
const option = computed(() => {
  // canvas size sẽ tự co, ta dùng hệ tọa độ “pixel logic” tỉ lệ dựa theo khung
  const W = 600,
    H = 600;
  const CX = W * 0.5;
  const CY = H * 0.5;
  const R = Math.min(W, H) * 0.32; // bán kính vòng node ngoài

  // 6 góc phân bố đều (có thể tinh chỉnh để giống ảnh hơn)
  const angles = [-45, -135, 45, 135];

  // nodes xung quanh
  const nodesOuter = props.items.slice(0, 4).map((it, i) => {
    const pos = toPolar(CX, CY, R, angles[i]);
    //const hasImg = !!it.icon && it.icon.startsWith("image://");
    return {
      name: it.title,
      x: pos.x,
      y: pos.y,
      value: it.desc,
      symbol: "square",
      symbolSize: [250, 60],
      itemStyle: {
        color: "#ffffff",
        borderColor: "#e5e7eb", // neutral-200
        borderWidth: 2,
        shadowBlur: 8,
        shadowColor: "rgba(0,0,0,0.06)",
      },
      label: {
        show: true,
        color: "#475569", // slate-600
        width: 300,
        overflow: "break", // cho phép xuống dòng
        formatter: (p) => `{t|${p.name}} \n {d|${p.data.value}}`,
        rich: {
          t: {
            fontSize: 14,
            fontWeight: 600,
            color: props.palette.text,
            lineHeight: 20,
          },
          d: { fontSize: 12, color: "#64748b", lineHeight: 18 },
        },
      },
    };
  });

  // node trung tâm (dạng vòng có viền dày)
  const coreNode = {
    name: "core",
    x: CX,
    y: CY,
    symbol: "circle",
    symbolSize: 0,
    itemStyle: { opacity: 0 },
    label: { show: false },
  };

  const corePie = {
    name: "core-ring",
    type: "pie",
    center: ["50%", "50%"],
    radius: ["50%", "70%"],
    padAngle: 5,
    //silent: true,
    zlevel: 1,
    itemStyle: { opacity: 0.8 },
    z: 3,
    label: {
      show: true,
      position: "center",
      formatter: props.centerTitle,
      color: props.palette.text,
      fontSize: 30,
      fontWeight: "bold",
      lineHeight: 40,
      fontFamily: "Montserrat",
    },
    labelLine: { show: false },
    data: [
      { value: 1, name: 'Direct', itemStyle: { color: props.palette.ring } },
      { value: 1, itemStyle: { color: props.palette.accentA } },
      { value: 1, itemStyle: { color: props.palette.accentB } },
      { value: 1, itemStyle: { color: props.palette.accentB } },
    ],
  };

  // các đường nối
  const links = nodesOuter.map((n) => ({ source: "core", target: n.name }));

  return {
    backgroundColor: "transparent",
    // tooltip: {
    //   trigger: "item",
    //   formatter: (p) => {
    //     if (p.dataType === "node" && p.name !== "core") {
    //       return `<b>${p.name}</b> <br/>${p.data.value}`;
    //     }
    //     return "";
    //   },
    // },
    animationDuration: 600,
    animationEasing: "cubicOut",
    series: [
      corePie,
      {
        type: "graph",
        layout: "none", // dùng tọa độ tuyệt đối
        coordinateSystem: null,
        roam: false,
        silent: false,
        z: 1,
        data: [coreNode, ...nodesOuter],
        links,
        lineStyle: {
          color: props.palette.edge,
          width: 4,
          type: "dotted",
        },
        emphasis: {
          focus: "adjacency",
          lineStyle: { width: 3 },
        },
      },
      // 3 "miếng" accent trang trí quanh ring (giống ảnh)
      // {
      //   type: "graph",
      //   layout: "none",
      //   data: [
      //     // Accent A
      //     {
      //       name: "arcA",
      //       x: CX - 70,
      //       y: CY - 90,
      //       symbol: "roundRect",
      //       symbolSize: [90, 10],
      //       itemStyle: { color: props.palette.accentA },
      //       label: { show: false },
      //     },
      //     // Accent B
      //     {
      //       name: "arcB",
      //       x: CX + 80,
      //       y: CY + 80,
      //       symbol: "roundRect",
      //       symbolSize: [110, 10],
      //       itemStyle: { color: props.palette.accentB },
      //       label: { show: false },
      //     },
      //     // Accent C
      //     {
      //       name: "arcC",
      //       x: CX - 98,
      //       y: CY + 6,
      //       symbol: "roundRect",
      //       symbolSize: [100, 10],
      //       itemStyle: { color: "#67e8f9" }, // cyan-300
      //       label: { show: false },
      //     },
      //   ],
      //   links: [],
      //   silent: true,
      //   z: 2,
      // },
    ],
    // fix tỉ lệ (không bị bóp méo khi container đổi size)
    grid: { left: 0, right: 0, top: 0, bottom: 0 },
  };
});
</script>
