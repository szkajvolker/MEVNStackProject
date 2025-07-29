import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    isAdmin: false,
    user: null,
  }),
  actions: {
    login(user) {
      this.isLoggedIn = true
      this.user = user
      this.isAdmin = user?.isAdmin || false
    },
    logout() {
      this.isLoggedIn = false
      this.user = null
      this.isAdmin = false
    },
  },
})
