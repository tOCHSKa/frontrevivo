import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

const API_URL = import.meta.env.VITE_API_URL

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
    // 🔹 INIT (appelé au démarrage app)
    initializeStore() {
      const token = localStorage.getItem('token')
      const sessionId = localStorage.getItem('sessionId')

      if (token && isTokenValid(token)) {
        this.setUser({ token })
      } else {
        this.logout()
      }

      if (sessionId) {
        this.sessionId = sessionId
      }

      // auto-check expiration
      this.startTokenWatcher()
    },

    // 🔹 SET USER
    setUser({ token }) {
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

    // 🔹 SESSION (guest flow)
    setSession(sessionId) {
      this.sessionId = sessionId
      localStorage.setItem('sessionId', sessionId)
    },

    clearSession() {
      this.sessionId = null
      localStorage.removeItem('sessionId')
    },

    // 🔹 LOGIN
    async login(credentials) {
      try {
        const response = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Login failed')
        }

        this.setUser(data)

        return { success: true }
      } catch (error) {
        console.error('Login error:', error)
        return { success: false, message: error.message }
      }
    },

    // 🔹 LOGOUT
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

    // 🔹 AUTH HEADERS (centralisé)
    getAuthHeaders() {
      return {
        'Content-Type': 'application/json',
        ...(this.token && {
          Authorization: `Bearer ${this.token}`
        })
      }
    },

    // 🔹 FETCH WRAPPER (ultra utile 🔥)
    async apiFetch(endpoint, options = {}) {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          ...options,
          headers: {
            ...this.getAuthHeaders(),
            ...options.headers
          }
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'API error')
        }

        return data
      } catch (error) {
        console.error('API error:', error)
        throw error
      }
    },

    // 🔹 TOKEN AUTO-EXPIRATION
    startTokenWatcher() {
      setInterval(() => {
        if (this.token && !isTokenValid(this.token)) {
          console.warn('Token expired → logout')
          this.logout()
        }
      }, 60000) // check toutes les 60s
    }
  },

  getters: {
    isAdmin: (state) => state.role === 'admin',
    isLoggedIn: (state) => state.isAuthenticated,
    userEmail: (state) => state.email,
    userRole: (state) => state.role,
    userToken: (state) => state.token,
    userSessionId: (state) => state.sessionId,
    userName: (state) => state.name,
    allUserData: (state) => ({
      email: state.email,
      name: state.name,
      role: state.role,
      token: state.token,
      sessionId: state.sessionId,
      isAuthenticated: state.isAuthenticated
    })
  }
})