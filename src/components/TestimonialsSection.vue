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
        <div
          v-for="(item, index) in testimonialsData.testimonials" :key="index"
          ref="cardsRef"
          class="p-8 md:p-10 rounded-2xl bg-card backdrop-blur-sm border border-border/30 transition-all duration-700"
          :style="{ transitionDelay: `${index * 0.1}s` }"
          :class="cardsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          
          <!-- Stars -->
          <div class="flex gap-1 mb-6">
            <span
              v-for="i in 5"
              :key="i"
              class="w-4 h-4 text-primary"
            >
              ★
            </span>
          </div>

          <!-- Quote -->
          <p class="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6">
            "{{ item.quote }}"
          </p>

          <!-- Author -->
          <div>
            <p class="font-sans text-white text-sm font-medium">
              {{ item.name }}
            </p>
            <p class="font-sans text-white/60 text-xs mt-0.5">
              {{ item.location }}
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const testimonialsData = computed(() => tm('testimonials'))

const headerRef = ref(null)
const cardsRef = ref([])

const headerVisible = ref(false)
const cardsVisible = ref([])

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

  cardsRef.value.forEach((el, index) => {
    observe(el, () => {
      cardsVisible.value[index] = true
    })
  })
})
</script>