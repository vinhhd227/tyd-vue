<template>
  <el-container
    v-motion-pop
    direction="vertical"
    class="tw:bg-gray-100 tw:w-full"
  >
    <Vue3Marquee :pause-on-hover="false" :clone="true" :duration="25">
      <div v-for="(p, idx) in partners" :key="idx" class="tw:p-5 tw:h-[120px]">
        <div class="tw:w-[250px] tw:mx-auto tw:px-10">
          <img
            :src="getImageUrl(p.src) || p.src"
            :alt="p.alt"
            class="tw:object-contain tw:opacity-80 tw:hover:opacity-100 tw:transition tw:h-[90px]"
            loading="lazy"
          />
        </div>
      </div>
    </Vue3Marquee>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        { src: "brand1.avif", alt: "Brand" },
        { src: "brand2.avif", alt: "Brand" },
        { src: "brand3.avif", alt: "Brand" },
        { src: "brand4.avif", alt: "Brand" },
        { src: "brand5.avif", alt: "Brand" },
        { src: "brand6.avif", alt: "Brand" },
        { src: "brand7.avif", alt: "Brand" },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `/media/images/home/${imageName}`;
    },
  },
};
</script>

<style scoped></style>
