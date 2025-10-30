<template>
  <div class="auth-page">
    <el-card class="auth-card" shadow="hover">
      <h2 class="title">Đăng ký</h2>

      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        @submit.prevent="onSubmit"
      >
        <el-form-item label="Họ tên" prop="fullName">
          <el-input
            v-model="form.fullName"
            placeholder="Nguyễn Văn A"
            clearable
          />
        </el-form-item>

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
            placeholder="Tối thiểu 6 ký tự"
            show-password
          />
        </el-form-item>

        <el-form-item label="Xác nhận mật khẩu" prop="confirmPassword">
          <el-input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu"
            show-password
          />
        </el-form-item>

        <el-button
          type="primary"
          :loading="loading"
          @click="onSubmit"
          class="w-full"
          >Đăng ký</el-button
        >
      </el-form>

      <div class="mt-4 text-sm text-center">
        Đã có tài khoản?
        <RouterLink :to="{ name: 'Login' }" class="link">Đăng nhập</RouterLink>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { toast } from "vue-sonner";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const route = useRoute();
const auth = useAuthStore();

const formRef = ref();
const loading = ref(false);
const form = reactive({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const validateConfirm = (_rule, value, callback) => {
  if (!value) return callback(new Error("Vui lòng xác nhận mật khẩu"));
  if (value !== form.password)
    return callback(new Error("Mật khẩu không khớp"));
  callback();
};

const rules = {
  fullName: [{ required: false }],
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
    { min: 6, message: "Mật khẩu tối thiểu 6 ký tự", trigger: "blur" },
  ],
  confirmPassword: [
    { validator: validateConfirm, trigger: ["blur", "change"] },
  ],
};

const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });
      if (error) throw error;

      const user = data.user;
      const session = data.session;

      // Tạo/ cập nhật hồ sơ cơ bản (tùy cột trong bảng profiles của bạn)
      if (user) {
        await supabase
          .from("profiles")
          .upsert({
            id: user.id,
            full_name: form.fullName || null,
            email: form.email,
            is_admin: false,
          })
          .select()
          .maybeSingle();
      }

      if (session) {
        // Có thể đăng nhập ngay nếu project không yêu cầu email confirm
        await auth.ensureSessionLoaded();
        toast.success("Đăng ký thành công");
        const redirect = Array.isArray(route.query.redirect)
          ? route.query.redirect[0]
          : route.query.redirect || "/";
        router.push(redirect);
      } else {
        // Nếu bật email confirmation, sẽ không có session
        toast.success(
          "Đăng ký thành công. Vui lòng kiểm tra email để xác nhận."
        );
        router.push({ name: "Login" });
      }
    } catch (err) {
      toast.error(err?.message || "Đăng ký thất bại");
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
  max-width: 480px;
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
