<template>
  <div>
    <el-carousel
      height="1200px"
      direction="vertical"
      type="card"
      :autoplay="false"
      ref="carousel"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="slide-content">
          <img :src="`https://picsum.photos/600/300?random=${item}`" alt="Slide Image" class="slide-image" />
          <div class="overlay-text">Nội dung chữ lồng vào ảnh {{ item }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'VerticalCarousel',
  mounted() {
    this.$refs.carousel.$el.addEventListener('wheel', this.handleWheel);
  },
  beforeDestroy() {
    this.$refs.carousel.$el.removeEventListener('wheel', this.handleWheel);
  },
  methods: {
    handleWheel(event) {
      if (event.deltaY > 0) {
        this.$refs.carousel.next();
      } else {
        this.$refs.carousel.prev();
      }
    }
  }
};
</script>

<style scoped>
.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}
</style>
