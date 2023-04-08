<template>
  <div>
    <VitePwaManifest />
    <h1>Peanut says hi</h1>

    <NuxtPage />
  </div>
</template>

<script setup>
import axios from "axios"
import * as dotenv from "dotenv"

console.log(window.location.host)

axios.defaults.baseURL = window.location.host.includes("localhost") ? "http://localhost:8000" : "https://peanut-api.herokuapp.com"

const authStore = useAuthStore()

authStore.tokensFromLocalStorage()

if (authStore.isAuthenticated) {
  await authStore.verify()
} else {
  navigateTo("/login")
}
</script>