<template>
  <div>
    <label>Username: </label>
    <input type="text" v-model="username" />
    <br>

    <label>Password: </label>
    <input type="password" v-model="password" />

    <br>
    <button @click="login()">Login</button>
  </div>
</template>

<script setup>
const username = ref("")
const password = ref("")

const authStore = useAuthStore()

const login = async () => {
  await authStore.login(username.value, password.value)

  if (authStore.isAuthenticated) {
    navigateTo("/")
  }
}
</script>