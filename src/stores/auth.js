import { defineStore } from 'pinia';
import { supabase } from '@/lib/supabaseClient';

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null , profile: null}),
  getters: {
    isAdmin: (s) => !!s.profile?.is_admin
  },
  actions: {
    async ensureSessionLoaded() {
      if (this.user) return;
      const { data: { session } } = await supabase.auth.getSession();
      this.user = session?.user ?? null;
      if (this.user) {
        const { data } = await supabase.from('profiles').select('*').eq('id', this.user.id).single();
        this.profile = data ?? null;
      }
      // lắng nghe thay đổi đăng nhập
      supabase.auth.onAuthStateChange(async (_evt, session2) => {
        this.user = session2?.user ?? null;
        if (this.user) {
          const { data } = await supabase.from('profiles').select('*').eq('id', this.user.id).single();
          this.profile = data ?? null;
        } else {
          this.profile = null;
        }
      });
    },
    async loginEmail(email, password) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await this.ensureSessionLoaded();
    },
    async logout() { await supabase.auth.signOut(); this.user = null; this.profile = null; }
  }
});
