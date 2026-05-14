import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import { login as loginAPI, me as meAPI, register as registerAPI } from '@/services/api'

function isTokenValid(token) {
  try {
    const decoded = jwtDecode(token)
    const now = Math.floor(Date.now() / 1000)
    return decoded.exp && decoded.exp > now
  } catch {
    return false
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    email: null,
    name: null,
    role: null,
    token: null,
    sessionId: null,
    isAuthenticated: false,
  }),

  actions: {
    // -------------------
    // INIT APP
    // -------------------
    initializeStore() {
      const token = localStorage.getItem('token')
      const sessionId = localStorage.getItem('sessionId')

      if (token && isTokenValid(token)) {
        this.setUserFromToken(token)
      } else {
        this.logout()
      }

      if (sessionId) {
        this.sessionId = sessionId
      }

      this.startTokenWatcher()
    },

    // -------------------
    // LOGIN
    // -------------------
    async login(credentials) {
      try {
        const data = await loginAPI(credentials)

        this.setUserFromToken(data.token)

        return data
      } catch (error) {
        throw new Error(error.message || 'Login failed')
      }
    },

    // -------------------
    // REGISTER
    // -------------------
    async register(credentials) {
      try {
        return await registerAPI(credentials)
      } catch (error) {
        throw new Error(error.message || 'Register failed')
      }
    },

    // -------------------
    // ME (fetch user)
    // -------------------
    async fetchMe() {
      try {
        const data = await meAPI()
        return data
      } catch (error) {
        throw new Error(error.message || 'Failed to fetch user')
      }
    },

    // -------------------
    // SET USER FROM TOKEN
    // -------------------
    setUserFromToken(token) {
      if (!isTokenValid(token)) {
        this.logout()
        return
      }

      const decoded = jwtDecode(token)

      this.email = decoded.email
      this.name = decoded.name || null
      this.role = decoded.role
      this.token = token
      this.isAuthenticated = true

      localStorage.setItem('token', token)
    },

    // -------------------
    // SESSION (guest)
    // -------------------
    setSession(sessionId) {
      this.sessionId = sessionId
      localStorage.setItem('sessionId', sessionId)
    },

    clearSession() {
      this.sessionId = null
      localStorage.removeItem('sessionId')
    },

    // -------------------
    // LOGOUT
    // -------------------
    logout() {
      this.email = null
      this.name = null
      this.role = null
      this.token = null
      this.isAuthenticated = false
      this.sessionId = null

      localStorage.removeItem('token')
      localStorage.removeItem('sessionId')
    },

    // -------------------
    // TOKEN WATCHER
    // -------------------
    startTokenWatcher() {
      setInterval(() => {
        if (this.token && !isTokenValid(this.token)) {
          this.logout()
        }
      }, 60000)
    }
  },

  getters: {
    isAdmin: (state) => state.role === 'admin',
    isLoggedIn: (state) => state.isAuthenticated,

    user: (state) => ({
      email: state.email,
      name: state.name,
      role: state.role
    }),

    token: (state) =>
      state.token || localStorage.getItem('token')
  }
})