<template>
  <div class="container" style="max-width:420px">
    <h2>Đăng nhập</h2>
    <el-form :model="form" @submit.prevent>
      <el-form-item label="Email"><el-input v-model="form.email" /></el-form-item>
      <el-form-item label="Mật khẩu"><el-input v-model="form.password" type="password" /></el-form-item>
      <el-form-item><el-button type="primary" @click="login">Đăng nhập</el-button></el-form-item>
    </el-form>
    <el-alert v-if="err" type="error" :title="err" show-icon />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter, useRoute } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const form = reactive({ email: '', password: '' });
const err = ref('');

async function login() {
  err.value = '';
  try {
    await auth.loginEmail(form.email, form.password);
    router.replace((route.query.redirect as string) || '/admin');
  } catch (e: any) { err.value = e.message || 'Đăng nhập thất bại'; }
}
</script>
