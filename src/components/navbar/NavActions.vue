<template>
  <div class="hidden md:flex items-center gap-4">
    <RouterLink
      to="/login"
      class="text-muted-foreground text-sm transition hover:text-white"
    >
      Sign in
    </RouterLink>

    <RouterLink
      to="/register"
      class="px-5 py-2.5 text-primary border border-primary rounded-full text-sm font-medium bg-black hover:bg-[#E0C49E]/20 transition"
    >
      Register
    </RouterLink>

    <a
      href="/"
      class="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition"
    >
      {{ t('nav.cta') }}
    </a>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>