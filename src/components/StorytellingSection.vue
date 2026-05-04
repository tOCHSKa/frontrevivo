
<template>
  <div id="stories" class="relative py-24 md:py-36 overflow-hidden bg-black">
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div
        ref="headerRef"
        class="text-center mb-16 md:mb-24 transition-all duration-700"
        :class="headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <p class="text-sm font-sans uppercase tracking-widest text-primary mb-6">
            {{ t('stories.sectionTitle') }}
        </p>
        <h2 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
          {{ t('stories.title') }}
        </h2>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        <!-- Images -->
        <div
          ref="imageRef"
          class="relative transition-all duration-700"
          :class="imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'"
        >

          <!-- Before -->
          <div class="relative z-10 w-3/4">
            <div class="rounded-lg overflow-hidden border border-border/30 shadow-2xl shadow-background/50">
              <img :src="BEFORE_IMG" alt="Original photo" class="w-full h-auto" />
            </div>

            <div class="absolute -bottom-2 left-2 text-xs uppercase tracking-widest text-muted-foreground/40">
              1962 · Original
            </div>
          </div>

          <!-- After -->
          <div
            class="absolute top-8 right-0 w-3/4 z-20 transition-all duration-700"
            :class="imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
          >
            <div class="rounded-lg overflow-hidden  border-primary/20 shadow-2xl shadow-primary/5">
              <img :src="AFTER_IMG" alt="Restored photo" class="w-full h-auto" />
            </div>

            <div class="absolute -bottom-2 right-2 text-xs uppercase tracking-widest text-primary/60">
              Restored · 2024
            </div>
          </div>

        </div>

        <!-- Text -->
        <div
          ref="textRef"
          class="transition-all duration-700"
          :class="textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'"
        >
          <blockquote class="space-y-6">
            <p class="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed">
              {{ t('stories.quote1') }}
            </p>

            <p class="font-serif italic text-2xl md:text-3xl text-primary leading-relaxed">
              {{ t('stories.quote2') }}
            </p>
          </blockquote>

          <div class="mt-10 pt-8 border-t border-border/30">
            <p class="font-sans text-muted-foreground text-sm leading-relaxed">
              {{ t('stories.story') }}
            </p>

            <p class="font-sans text-muted-foreground/60 text-xs mt-4 uppercase tracking-widest">
              {{ t('stories.author') }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


const BEFORE_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/128239fbf_generated_9bd89b2e.png'
const AFTER_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/deb028b86_generated_da12e8ec.png'

const headerRef = ref(null)
const imageRef = ref(null)
const textRef = ref(null)

const headerVisible = ref(false)
const imageVisible = ref(false)
const textVisible = ref(false)

const observe = (el, setter) => {
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setter(true)
      obs.disconnect()
    }
  }, { threshold: 0.2 })

  obs.observe(el)
}

onMounted(() => {
  if (headerRef.value) observe(headerRef.value, v => headerVisible.value = v)
  if (imageRef.value) observe(imageRef.value, v => imageVisible.value = v)
  if (textRef.value) observe(textRef.value, v => textVisible.value = v)
})
</script>
