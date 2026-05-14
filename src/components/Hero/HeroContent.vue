<template>
  <div>
    <!-- Subtitle -->
    <p class="text-sm font-sans uppercase tracking-widest text-primary mb-8 animate-fade-up">
      {{ t('hero.subtitle') }}
    </p>

    <!-- Title -->
    <h1 class="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up delay-100">
      {{ t('hero.title') }}
      <br />
      <span class="text-primary">{{ t('hero.titleHighlight') }}</span>
    </h1>

    <!-- Text -->
    <p class="font-sans text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
      {{ t('hero.description') }}
    </p>

    <!-- Upload -->
    <HeroUpload @fileUpload="$emit('fileUpload', $event)" />

    <!-- CTA -->
    <HeroExampleCTA />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeroUpload from './HeroUpload.vue'
import HeroExampleCTA from './HeroExampleCTA.vue'

const { t } = useI18n()

defineEmits(['fileUpload'])
</script>