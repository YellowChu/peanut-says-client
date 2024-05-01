<template>
  <div>
    Updated 2024
  </div>
</template>

<script setup>
const authStore = useAuthStore()

const logout = async () => {
  await authStore.logout()
  navigateTo("/login")
}
</script>