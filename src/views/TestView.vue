<template>
  <div>
    <h1>Test View</h1>
  </div>

  <div class="flex justify-center">
    <button class="btn btn-primary cursor-pointer hover:bg-blue-700 border p-2 rounded-lg" @click="getState">Get State</button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/userStore'

const store = useUserStore()

const getState = () => {
    console.log(store.allUserData)
}

</script>

<style scoped>
</style>