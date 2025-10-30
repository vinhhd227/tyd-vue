import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    profile: null,
    initialized: false,
    profileLoaded: false,

    // nội bộ
    _subscribed: false,
    _authSubscription: null,
    _profilePromise: null,
    _profileUserId: null,
  }),

  getters: {
    isAuthenticated: (s) => !!s.user,
    isAdmin: (s) => !!s.profile?.is_admin,
  },

  actions: {
    // --- Memoized Profile Loader (JS) --------------------------------------
    async _ensureProfile(userId, timeoutMs = 3000) {
      if (!userId) {
        this._profilePromise = null;
        this._profileUserId = null;
        this.profile = null;
        this.profileLoaded = true;
        return null;
      }

      // đang có promise cho đúng userId -> dùng lại
      if (this._profilePromise && this._profileUserId === userId) {
        return this._profilePromise;
      }

      this._profileUserId = userId;
      this.profileLoaded = false;

      const withTimeout = (p, ms) =>
        Promise.race([
          p,
          new Promise((_, rej) =>
            setTimeout(() => rej(new Error("Profile timeout")), ms)
          ),
        ]);

      this._profilePromise = withTimeout(
        supabase
          .from("profiles")
          .select("full_name, avatar_url, is_admin")
          .eq("id", userId)
          .maybeSingle(), // không throw; tự check error
        timeoutMs
      )
        .then(({ data, error }) => {
          if (error) throw error;
          return data ?? null;
        })
        .then((profile) => {
          if (this._profileUserId === userId) {
            this.profile = profile;
            this.profileLoaded = true;
          }
          return profile;
        })
        .catch((err) => {
          console.error("Profile error:", err);
          if (this._profileUserId === userId) {
            this.profile = null;
            this.profileLoaded = true;
          }
          return null;
        });

      return this._profilePromise;
    },

    // --- Auth subscription (đăng ký 1 lần) ---------------------------------
    _subscribeAuthOnce() {
      if (this._subscribed) return;

      const { data } = supabase.auth.onAuthStateChange(
        async (_evt, session) => {
          const nextUser = session?.user ?? null;
          const changed = (this.user?.id || null) !== (nextUser?.id || null);

          this.user = nextUser;

          if (changed) {
            this._profilePromise = null;
            this._profileUserId = null;
            this.profile = null;
            this.profileLoaded = false;
          }

          await this._ensureProfile(this.user?.id ?? null);
        }
      );

      this._authSubscription = data?.subscription ?? null;
      this._subscribed = true;
    },

    // --- Khởi tạo phiên -----------------------------------------------------
    async ensureSessionLoaded() {
      this._subscribeAuthOnce();
      if (this.initialized) return;

      const res = await supabase.auth.getSession();
      const session = res?.data?.session ?? null;

      this.user = session?.user ?? null;
      await this._ensureProfile(this.user?.id ?? null);

      this.initialized = true;
    },

    // --- Đăng nhập ----------------------------------------------------------
    async loginEmail(email, password) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        // không tự set user — để onAuthStateChange đồng bộ.
        if (data?.user) {
          // kick off load profile để UX mượt; không lo trùng nhờ memoization
          await this._ensureProfile(data.user.id);
        }
      } catch (err) {
        console.error("loginEmail error:", err);
        throw err;
      }
    },

    // --- Đăng xuất ----------------------------------------------------------
    async logout() {
      try {
        await supabase.auth.signOut();
      } finally {
        this.user = null;
        this.profile = null;
        this.profileLoaded = false;
        this._profilePromise = null;
        this._profileUserId = null;

        // Nếu muốn thực sự hủy sub:
        // this._authSubscription?.unsubscribe?.();
        // this._authSubscription = null;
        // this._subscribed = false;
      }
    },
  },
});
