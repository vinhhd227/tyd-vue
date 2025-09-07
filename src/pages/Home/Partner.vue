<template>
  <el-container
    direction="vertical"
    class="tw:bg-neutral-200 tw:flex tw:items-center tw:py-30"
  >
    <div class="tw:text-center">
      <h2 class="tw:text-5xl tw:font-bold tw:font-heading tw:my-3">
        Industry leaders fly Skydio.<br />
        Let's build your drone program today.
      </h2>
    </div>

    <Vue3Marquee :pause-on-hover="true" class="tw:mt-20">
      <div v-for="(p, idx) in partners" :key="idx" class="tw:p-5 tw:h-[120px]">
        <div class="tw:w-[135px] tw:mx-auto">
          <img
            :src="getImageUrl(p.src) || p.src"
            :alt="p.alt"
            class="tw:object-contain tw:opacity-80 tw:hover:opacity-100 tw:transition tw:h-[90px]"
            loading="lazy"
          />
        </div>
      </div>
    </Vue3Marquee>

    <div class="tw:mt-18 tw:w-full tw:flex tw:justify-center">
      <button
        type="primary"
        class="tw:px-8 tw:py-4 tw:bg-blue-700 tw:rounded-md tw:text-[18px] tw:text-white"
      >
        Get started
      </button>
    </div>

    <p class="tw:mt-18 tw:text-sm tw:text-stone-500">
      THIS PRODUCT OR SERVICE HAS NOT BEEN APPROVED OR ENDORSED BY ANY
      GOVERNMENTAL AGENCY, AND THIS OFFER IS NOT BEING MADE BY AN AGENCY OF THE
      GOVERNMENT.
    </p>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        { src: "facebook-7678778_1280.png", alt: "Facebook" },
        { src: "google-chrome-1326908_1280.png", alt: "Google" },
        { src: "instagram-1581266_640.jpg", alt: "Instagram" },
        { src: "logo-2582757_1280.png", alt: "Logo" },
        { src: "youtube-7737850_1280.png", alt: "YouTube" },
        { src: "tiktok-7406196_1280.png", alt: "TikTok" },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `/media/images/logos/${imageName}`;
    },
  },
};
</script>

<style scoped></style>
