import axios from "axios"


export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null,
    refreshToken: null,
  }),

  getters: {
    isAuthenticated() {
      return this.accessToken !== null
    },
  },

  actions: {
    setTokens(accessToken, refreshToken) {
      this.accessToken = accessToken
      this.refreshToken = refreshToken

      if (accessToken && refreshToken) {
        localStorage.setItem("access_token", accessToken)
        localStorage.setItem("refresh_token", refreshToken)
      } else {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
      }
    },

    tokensFromLocalStorage() {
      this.accessToken = localStorage.getItem("access_token")
      this.refreshToken = localStorage.getItem("refresh_token")

      this.setTokens(this.accessToken, this.refreshToken)
    },

    async login(username, password) {
      try {
        const resp = await axios.post(
          "/api/token/pair",
          {
            username: username,
            password: password,
          }
        )
        console.log(resp.data)

        this.setTokens(resp.data.access, resp.data.refresh)
      } catch (err) {
        console.log(err)
      }
    },

    async verify() {
      try {
        const resp = await axios.post("/api/token/verify", {
          token: this.accessToken,
        })
        console.log(resp.data)
      } catch (err) {
        console.log(err)
        this.logout()
      }
    },

    async logout() {
      this.setTokens(null, null)
    },
  },
})