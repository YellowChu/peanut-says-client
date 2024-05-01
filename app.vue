<template>
  <div>
    <VitePwaManifest />
    <h1>Peanut says hi</h1>

    <NuxtPage />
  </div>
</template>

<script setup>
import axios from "axios"

const server_url = window.location.host.includes("localhost") ? "http://localhost:8000" : "https://peanut-says-server.herokuapp.com";
axios.defaults.baseURL = server_url;

// onMounted(async () => {
// })
</script>