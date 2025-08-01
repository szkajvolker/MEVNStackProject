import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    login(user) {
      this.user = user;
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem("token");
    },
    async tryAutoLogin() {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await fetch("http://localhost:3333/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          this.login(data.user);
        }
      }
    },
  },
});
