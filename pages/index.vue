<template>
  <div>
    Main content
    <br>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script setup>
const authStore = useAuthStore()

const logout = async () => {
  await authStore.logout()
  navigateTo("/login")
}
</script>