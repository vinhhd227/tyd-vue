<template>
  <div class="carousel-wrapper">
    <h2 class="section-title">TIÊU ĐỀ CAROUSEL</h2>
    <el-carousel :interval="5000" arrow="always" height="400px">
      <el-carousel-item v-for="(item, index) in slides" :key="index">
        <div class="box">
          <img :src="item.image" class="slide-image" alt="Hình ảnh minh họa">
          <div class="slide-content">
            <h3 class="content-title">{{ item.title }}</h3>
            <p class="content-text">{{ item.description }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: 'Slide 1',
          description: 'Nội dung mô tả chi tiết cho slide đầu tiên'
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: 'Slide 2',
          description: 'Nội dung mô tả chi tiết cho slide thứ hai'
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: 'Slide 3',
          description: 'Nội dung mô tả chi tiết cho slide thứ ba'
        }
      ]
    }
  }
}
</script>

<style scoped>
.carousel-wrapper {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
}

.section-title {
  text-align: left;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.box {
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.slide-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}

.slide-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-title {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 15px;
  text-align: center;
}

.content-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #7f8c8d;
  text-align: center;
}

.el-carousel__item {
  padding: 10px;
  box-sizing: border-box;
}

.el-carousel__item:nth-child(2n) .box {
  background-color: #f8f9fa;
}

.el-carousel__item:nth-child(2n+1) .box {
  background-color: #f1f3f5;
}
</style>
