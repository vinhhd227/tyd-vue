<template>
  <div class="auth-page">
    <el-card class="auth-card" shadow="hover">
      <h2 class="title">Đăng nhập</h2>

      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        @submit.prevent="onSubmit"
      >
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="form.email"
            placeholder="you@example.com"
            clearable
          />
        </el-form-item>

        <el-form-item label="Mật khẩu" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            show-password
          />
        </el-form-item>

        <el-button
          type="primary"
          :loading="loading"
          @click="onSubmit"
          class="w-full"
          >Đăng nhập</el-button
        >
      </el-form>

      <div class="mt-4 text-sm text-center">
        Chưa có tài khoản?
        <RouterLink :to="{ name: 'Register' }" class="link">Đăng ký</RouterLink>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue-sonner";

const router = useRouter();
const route = useRoute();
const auth = useAuthStore();

const formRef = ref();
const loading = ref(false);
const form = reactive({ email: "", password: "" });

const rules = {
  email: [
    { required: true, message: "Vui lòng nhập email", trigger: "blur" },
    {
      type: "email",
      message: "Email không hợp lệ",
      trigger: ["blur", "change"],
    },
  ],
  password: [
    { required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" },
  ],
};

const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      console.log("Login email")
      await auth.loginEmail(form.email, form.password);
      console.log("Login Success")
      toast.success("Đăng nhập thành công");
      const redirect =
        typeof route.query.redirect === "string"
          ? route.query.redirect
          : "/admin/dashboard";

      await router.replace(redirect);
    } catch (err) {
      toast.error(err?.message || "Đăng nhập thất bại");
    } finally {
      loading.value = false;
    }
  });
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: #f5f7fa;
}
.auth-card {
  width: 100%;
  max-width: 420px;
}
.title {
  margin: 0 0 16px;
  text-align: center;
}
.link {
  color: #409eff;
}
.w-full {
  width: 100%;
}
.mt-4 {
  margin-top: 1rem;
}
.text-sm {
  font-size: 0.875rem;
}
.text-center {
  text-align: center;
}
</style>
