<template>
  <div
    ref="menuRef"
    class="md:hidden fixed top-16 left-0 w-full bg-background flex flex-col gap-4 py-6 px-6 transition-transform duration-300 transform z-50"
    :class="open ? 'translate-x-0' : '-translate-x-full pointer-events-none'"
  >
    <!-- Links -->
    <a
      v-for="link in links"
      :key="link.id"
      @click="handleNavigate(link.id)"
      class="text-sm uppercase"
      :class="activeSection === link.id
        ? 'text-foreground'
        : 'text-muted-foreground'"
    >
      {{ t(link.label) }}
    </a>

    <!-- Auth -->
    <div class="flex flex-col gap-3 pt-4 border-t border-border">
      <RouterLink
        to="/login"
        @click="$emit('close')"
        class="px-4 py-2 text-sm text-center text-muted-foreground border border-[#E0C49E]/50 rounded-full"
      >
        Sign in
      </RouterLink>

      <RouterLink
        to="/register"
        @click="$emit('close')"
        class="px-4 py-2 text-center text-primary border border-primary rounded-full text-sm font-medium bg-black hover:bg-[#E0C49E]/20 transition"
      >
        Register
      </RouterLink>

      <a
        href="#home"
        @click="$emit('close')"
        class="px-4 py-2 text-center bg-primary text-primary-foreground rounded-full text-sm font-medium"
      >
        {{ t('nav.cta') }}
      </a>
    </div>

    <!-- Language -->
    <div class="pt-4 border-t border-border">
      <LanguageSwitcher
        :lang="lang"
        @change="$emit('change-lang', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

defineProps({
  open: Boolean,
  links: Array,
  activeSection: String,
  lang: String
})

const emit = defineEmits(['navigate', 'close', 'change-lang'])

const { t } = useI18n()

function handleNavigate(id) {
  emit('navigate', id)
  emit('close')
}
</script>