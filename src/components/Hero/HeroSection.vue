<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <HeroBackground />

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
      <HeroContent 
      @fileUpload="emit('fileUpload', $event)" 
      :isLoading="isLoading" />
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </div>
</template>

<script setup>
import HeroBackground from './HeroBackground.vue'
import HeroContent from './HeroContent.vue'

const emit = defineEmits(['fileUpload'])

defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>