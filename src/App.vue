<template>
  <router-view/>
</template>

<script setup>

import { useUserStore } from '@/store/userStore'

const store = useUserStore()
store.initializeStore()

</script>

<style>
@import './assets/styles.css';
html {
  scroll-behavior: smooth;
}

</style>
