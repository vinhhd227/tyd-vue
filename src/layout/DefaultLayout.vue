<template>
    <el-container class="app-shell" direction="vertical">
      <HeaderBar @toggleAside="toggleAside">
        <template #left>
          </template>
        <template #right>
          <el-switch
            v-model="dark"
            inline-prompt
            active-text="Dark"
            inactive-text="Light"
            @change="applyTheme"
          />
        </template>
      </HeaderBar>

      <el-container>
        <el-main class="app-main">
          <router-view />
        </el-main>
      </el-container>
      <FooterBar />
    </el-container>
</template>

<script setup>
import { ref } from "vue";
import HeaderBar from "./HeaderBar.vue";
import Sidebar from "./Sidebar.vue";
import FooterBar from "./FooterBar.vue";

const collapsed = ref(false);
const dark = ref(false);

function toggleAside() {
  collapsed.value = !collapsed.value;
}
function applyTheme() {
  document.documentElement.classList.toggle("dark", dark.value);
}
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
}
</style>
