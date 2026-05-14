<template>
  <button
    class="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans text-sm tracking-wide animate-fade-up delay-500"
  >
    <div class="w-8 h-8 rounded-full border border-current flex items-center justify-center">
      <svg class="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 4l10 6-10 6V4z" />
      </svg>
    </div>

    {{ t('hero.example') }}
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>