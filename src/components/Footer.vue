<template>
  <footer class="border-t border-border/20 py-12 md:py-16 bg-black">
    <div class="max-w-6xl mx-auto px-6">

      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <div class="w-2 h-2 rounded-full bg-primary" />
          </div>

          <a href="#home" class="font-serif text-lg italic text-foreground">
            Revivo
          </a>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-8">
          <a href="#features" class="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans">
            {{ t('nav.features') }}
          </a>

          <a href="#pricing" class="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans">
            {{ t('nav.pricing') }}
          </a>

          <a href="#stories" class="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans">
            {{ t('nav.stories') }}
          </a>
        </div>

        <!-- Copyright -->
        <p class="font-sans text-muted-foreground text-xs">
          © {{ year }} Revivo. {{ t('footer.madeWith') }}
        </p>

      </div>

    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const year = new Date().getFullYear()
</script>