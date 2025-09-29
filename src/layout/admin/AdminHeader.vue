<template>
  <div
    :class="[
      'tw:h-[54px]',
      'tw:flex tw:justify-between tw:items-center',
      'tw:px-6',
      'tw:shadow-[0_2px_8px_rgba(47,43,61,0.12)] tw:rounded-md',
      'tw:bg-white/80',
    ]"
  >
    <div :class="['tw:flex tw:items-center']">
      <el-button
        link
        @click="adminUi.toggleMobileSidebar()"
        class="tw:inline-flex tw:items-center tw:justify-center tw:p-2 tw:xl:hidden"
      >
        <iconfy icon="solar:hamburger-menu-linear" width="22" />
      </el-button>
    </div>

    <div class="center">
      <el-input
        v-model="q"
        placeholder="Search..."
        clearable
        class="max-w-[420px] w-full"
        v-show="false"
      />
    </div>

    <div class="right">
      <el-button text>
        <iconfy icon="solar:bell-linear" width="22" />
      </el-button>
      <el-dropdown>
        <span class="el-dropdown-link flex items-center gap-2">
          <el-avatar
            :size="38"
            icon="UserFilled"
            src="/media/images/avatar/avatar-1.png"
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="gotoProfile">Profile</el-dropdown-item>
            <el-dropdown-item divided @click="logout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useAdminUiStore } from "@/stores/adminUi";

defineProps({ collapsed: Boolean });

const q = ref("");
const router = useRouter();
const auth = useAuthStore();
const adminUi = useAdminUiStore();

function logout() {
  auth.logout().then(() => router.push({ name: "Login" }));
}
function gotoProfile() {
  router.push("/admin/profile");
}
</script>

<style scope>
/* .hdr {
  height: 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
} */
.center {
  display: flex;
  justify-content: center;
}
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}
.brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}
</style>
