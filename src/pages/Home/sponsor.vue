<template>
  <div class="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-px-6">
    <el-card class="tw-bg-white tw-p-8 tw-rounded-xl tw-shadow-xl tw-max-w-2xl tw-w-full">
      <div class="tw-text-center tw-mb-8">
        <h2 class="main-heading">
          Industry leaders fly Skydio.
        </h2>
        <p class="subheading">
          Let's build your drone program today.
        </p>
      </div>

      <!-- Logo chạy ngang -->
      <div class="logo-marquee-wrapper tw-overflow-hidden tw-mb-8">
        <div class="logo-marquee">
          <div v-for="(logo, index) in partnerLogos" :key="index" class="logo-item">
            <img :src="getImageUrl(logo.src)" :alt="logo.alt" class="logo-image" />
          </div>
          <!-- Nhân bản để tạo hiệu ứng liên tục -->
          <div v-for="(logo, index) in partnerLogos" :key="'repeat-' + index" class="logo-item">
            <img :src="getImageUrl(logo.src)" :alt="logo.alt" class="logo-image" />
          </div>
        </div>
      </div>

      <div class="button-container">
        <el-button type="primary" size="large" class="cta-button">
          Get started
        </el-button>
      </div>

      <p class="disclaimer-text">
        THIS PRODUCT OR SERVICE HAS NOT BEEN APPROVED OR ENDORSED BY ANY GOVERNMENTAL AGENCY, AND THIS OFFER IS NOT BEING MADE BY AN AGENCY OF THE GOVERNMENT.
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnerLogos: [
        { src: "facebook-7678778_1280.png", alt: "Facebook" },
        { src: "google-chrome-1326908_1280.png", alt: "Google" },
        { src: "instagram-1581266_640.jpg", alt: "Instagram" },
        { src: "logo-2582757_1280.png", alt: "Logo" },
        { src: "youtube-7737850_1280.png", alt: "YouTube" },
        { src: "tiktok-7406196_1280.png", alt: "TikTok" }
      ]
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `/media/images/logos/${imageName}`;
    }
  }
};
</script>

<style scoped>
.main-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #2F4F4F;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.2;
}

.subheading {
  font-size: 1.125rem;
  color: #6B7280;
  text-align: center;
  line-height: 1.5;
  margin: 0;
}

@media (min-width: 768px) {
  .main-heading {
    font-size: 2.5rem;
  }
  
  .subheading {
    font-size: 1.25rem;
  }
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.cta-button {
  padding: 0.75rem 2rem !important;
  font-size: 1.125rem !important;
}

.disclaimer-text {
  font-size: 0.75rem;
  color: #6B7280;
  text-align: center;
  line-height: 1.4;
  max-width: 100%;
  margin: 0 auto;
}

.logo-marquee-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}

.logo-marquee {
  display: flex;
  animation: scroll-left 30s linear infinite;
  padding: 10px 0;
}

.logo-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
}

.logo-image {
  height: 40px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.logo-image:hover {
  opacity: 1;
  transform: scale(1.05);
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Tùy chỉnh nút Element UI */
:deep(.el-button--primary) {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

:deep(.el-button--primary:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
}

/* Điều chỉnh cho màn hình nhỏ */
@media (max-width: 640px) {
  .logo-item {
    margin: 0 15px;
  }
  
  .logo-image {
    height: 30px;
    max-width: 80px;
  }
  
  .main-heading {
    font-size: 1.75rem;
  }
}
</style>