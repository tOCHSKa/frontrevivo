<template>
  <div class="relative py-24 md:py-36 overflow-hidden bg-black">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

    <div class="relative z-10 max-w-3xl mx-auto px-6 text-center">
      
      <div
        ref="ctaRef"
        class="transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <!-- Title -->
        <h2 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
          {{ t('cta.titleLine1') }}
          <br />
          <span class="text-primary">{{ t('cta.titleHighlight') }}</span>
        </h2>

        <!-- Description -->
        <p class="font-sans text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {{ t('cta.description') }}
        </p>

        <!-- CTA -->
        <button
          @click="onUploadClick"
          class="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-sans text-base font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/10"
        >
          <!-- Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0l-3 3m3-3l3 3" />
          </svg>

          {{ t('cta.button') }}
        </button>

        <!-- Footer -->
        <p class="mt-4 font-sans text-muted-foreground/50 text-sm">
          {{ t('cta.footer') }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
  onUploadClick: Function
})

const { t } = useI18n()

const ctaRef = ref(null)
const visible = ref(false)

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

onMounted(() => {
  if (ctaRef.value) observe(ctaRef.value, v => (visible.value = v))
})
</script>