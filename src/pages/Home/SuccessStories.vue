<template>
  <div class="success-stories">
    <h2 class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-darkslategrey tw-mb-8">
      Success stories from the field
    </h2>

    <!-- Video Section -->
    <div class="video-container">
      <div
        class="video-poster-container"
        v-show="!isVideoPlaying"
        @click="watchVideo"
      >
        <img
          src="/media/images/solutions/1.png"
          alt="Video Poster"
          class="video-poster"
        />
        <div class="poster-text">
          DFR helps Miami Beach PD locate assault suspect hiding nearby
        </div>
        <button class="watch-video-button">Watch video</button>
      </div>

      <div
        v-show="isVideoPlaying"
        class="video-overlay"
        @click.self="closeVideo"
      >
        <video ref="videoPlayer" controls class="video-player">
          <source src="/media/videoSS.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="video-text">Success Stories</div>
        <button class="close-video-button" @click.stop="closeVideo">
          &times;
        </button>
      </div>
    </div>

    <!-- Card Section -->
    <div class="tw-bg-white tw-py-12 tw-px-6 lg:tw-px-20 tw-text-center">
      <el-row :gutter="20" justify="center">
        <el-col
          v-for="(card, index) in cards"
          :key="index"
          :xs="24"
          :sm="12"
          :md="8"
        >
          <el-card class="tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-h-[400px] tw-flex tw-flex-col">
            <img
              :src="card.image"
              :alt="card.title"
              class="tw-w-full tw-h-64 tw-object-cover"
            />
            <div class="tw-p-4 tw-flex-1">
              <img
                :src="card.logo"
                :alt="card.title + ' logo'"
                class="tw-h-6 tw-mb-2"
              />
              <p class="tw-text-darkslategrey tw-font-semibold">
                {{ card.caption }}
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <div class="tw-mt-10">
        <el-button type="primary" size="large">
          See more customer stories
        </el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isVideoPlaying: false,
      cards: [
        {
          title: "AEP",
          image: "/media/images/solutions/1.png",
          logo: "/media/images/logos/tyd-logo.png",
          caption: "AEP deploys autonomous drones to optimize outage response"
        },
        {
          title: "Pasco County",
          image: "/media/images/solutions/1.png",
          logo: "/media/images/logos/tyd-logo.png",
          caption: "Pasco County Sheriff's Office drone pilot locates missing child"
        },
        {
          title: "Boeing",
          image: "/media/images/solutions/1.png",
          logo: "/media/images/logos/tyd-logo.png",
          caption: "Boeing expands efforts to autonomously inspect aircraft"
        }
      ]

    };
  },
  methods: {
    watchVideo() {
      this.isVideoPlaying = true;
      this.$nextTick(() => {
        this.$refs.videoPlayer.play();
      });
    },
    closeVideo() {
      this.isVideoPlaying = false;
      this.$refs.videoPlayer.pause();
      this.$refs.videoPlayer.currentTime = 0;
    }
  }
};
</script>

<style scoped>
.success-stories {
  padding: 20px;
  text-align: center;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px;
}

.video-poster-container {
  position: relative;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.video-poster {
  width: 100%;
  display: block;
}

.poster-text {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
  border-radius: 5px;
  max-width: 80%;
}

.watch-video-button {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform: translateY(0);
  animation: pulse 2s infinite;
}

.watch-video-button:hover {
  background: linear-gradient(135deg, #0056b3 0%, #003d7a 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.watch-video-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}

.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.video-player {
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  outline: none;
}

.video-text {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
  border-radius: 5px;
}

.close-video-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
}

.close-video-button:hover {
  background-color: rgba(254, 1, 1, 0.8);
  transform: scale(1.1);
}

:deep(.el-card) {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

:deep(.el-card:hover) {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

:deep(.el-card__header) {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

:deep(.el-card__body) {
  padding: 0;
  flex: 1;
  display: flex;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .poster-text {
    font-size: 1.2rem;
    max-width: 90%;
  }
  
  .watch-video-button {
    bottom: 15px;
    left: 15px;
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .video-text {
    font-size: 1.2rem;
  }
}
</style>