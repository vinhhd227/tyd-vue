<template>
   <div class="wrapper">
    <div class="container">
      <div class="text-section">
        <h3 class="title">Skydio X10: </h3>
        <p>
You’ve never seen like this before
A world-class drone program starts with Skydio X10. Loaded with the best sensors in its class, guided by the most advanced AI in the sky, and built to gather the data you need, wherever and whenever you need it.</p>
        <button class="btn">Click</button>
      </div>
    <div class="video-section">
      <video loop 
        muted 
        playsinline
        autoplay>
        <source :src="videoSource" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    </div>
  <div class="wrapper">

    <div class="container">
      <div class="text-section">
        <h3 class="title">Skydio X10: </h3>
        <p>
You’ve never seen like this before
A world-class drone program starts with Skydio X10. Loaded with the best sensors in its class, guided by the most advanced AI in the sky, and built to gather the data you need, wherever and whenever you need it.</p>
        <button class="btn">Click</button>
      </div>
    <div class="video-section">
      <video loop 
        muted 
        playsinline
        autoplay>
        <source :src="videoSource2" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    </div>
</template>

<script>
import videoSource from '/media/item.mp4';
import videoSource2 from '/media/item2.mp4';
export default {
  name: 'ItemComponent',
  data() {
    return {
      videoSource,
      videoSource2
    };
  },
};
</script>

<style scoped>
.wrapper {
  border: 5px solid #5900ff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
  margin-bottom: 30px; /* Thêm khoảng cách dưới */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Thêm hiệu ứng chuyển động */
}
.wrapper:hover {
  transform: translateY(-5px); /* Di chuyển lên trên khi hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Thêm bóng đổ */
}
.wrapper:last-child {
  margin-bottom: 0; /* Bỏ margin cho wrapper cuối cùng */
}

.wrapper + .wrapper {
  padding-top: 30px; /* Thêm khoảng cách trên */
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.text-section {
  flex: 1;
  margin-right: 20px;
  transition: color 0.3s ease; /* Thêm hiệu ứng chuyển màu */
}

.text-section:hover {
  color: #007bff; /* Đổi màu chữ khi hover */
}



  .video-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px; /* Thêm khoảng cách lề phải */
}
.title {
  font-size: 24px;
  margin-bottom: 10px;
  transition: color 0.3s ease, font-size 0.3s ease;
}
.title:hover {
  color: #007bff;
  font-size: 26px; /* Phóng to title khi hover */
}
.btn {
  font-variant: normal;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #7409d8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Thêm hiệu ứng chuyển động */
}

.btn:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Phóng to nút khi hover */
}

video {
  width: 100%;
  max-width: 600px;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Thêm hiệu ứng chuyển động */
}

video:hover {
  transform: scale(1.02); /* Phóng to video khi hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Thêm bóng đổ */
  transform: translateX(-10px); /* Di chuyển sang trái khi hover */
}
</style>