<template>
  <el-card class="video-card" :body-style="{ padding: '0' }">
    <div class="video-container tw:relative">
      <video 
        :src="videoSrc" 
        loop 
        muted 
        playsinline
        autoplay
        class="w-full h-auto"
      ></video>
      
      <!-- Text Overlay -->
      <div class="tw:text-overlay tw:absolute tw:top-1/2 tw:left-1/2 tw:transform tw:-translate-x-1/2 tw:-translate-y-1/2 tw:bg-black/50 tw:p-6 tw:text-center tw:rounded-lg">
        <el-text class="title tw:text-4xl tw:font-bold tw:text-white" tag="h2">Mission-ready. Day or night.</el-text>
        <el-text class="description tw:text-lg tw:mt-4 tw:text-white">Skydio drone programs help even the most dangerous work get done safer, smarter, and faster through remote autonomous flight. From Drone as First Responder to automated inspection and site security, Skydio helps you get the intelligence you need to make the best decisions.</el-text>
      </div>
    </div>
    
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const videoSrc = ref('/media/skymedia.mp4')
</script>
