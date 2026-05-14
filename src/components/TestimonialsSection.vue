<template>
  <div class="relative py-24 md:py-36 overflow-hidden bg-black">
    <div class="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Header -->
      <div
        ref="headerRef"
        class="text-center mb-16 md:mb-24 transition-all duration-700"
        :class="headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <p class="text-sm font-sans uppercase tracking-widest text-primary mb-6">
          {{ testimonialsData.title }}
        </p>
        <h2 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
          {{ testimonialsData.subtitle }}
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid sm:grid-cols-2 gap-6 md:gap-8">
        <TestimonialCard
          v-for="(item, index) in testimonialsData.testimonials" :key="index"
          :item="item"
          :delay="index * 0.1"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import TestimonialCard from './TestimonialCard.vue'

const { tm } = useI18n()

const testimonialsData = computed(() => tm('testimonials'))

const headerRef = ref(null)
const headerVisible = ref(false)


const observe = (el, setter) => {
  if (!el) return

  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setter(true)
      obs.disconnect()
    }
  }, { threshold: 0.2 })

  obs.observe(el)
}

onMounted(async () => {
  await nextTick()

  if (headerRef.value) {
    observe(headerRef.value, v => (headerVisible.value = v))
  }
})
</script>