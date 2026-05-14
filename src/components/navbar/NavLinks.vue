<template>
  <div class="hidden md:flex items-center gap-8">
    <a
      v-for="link in links"
      :key="link.id"
      @click="$emit('navigate', link.id)"
      class="text-sm font-sans uppercase relative cursor-pointer transition-colors duration-300"
      :class="activeSection === link.id
        ? 'text-foreground'
        : 'text-muted-foreground hover:text-foreground'"
    >
      {{ t(link.label) }}

      <span
        class="absolute left-0 -bottom-1 h-0.5 bg-primary"
        :class="activeSection === link.id
          ? 'w-full transition-all duration-300'
          : 'w-0'"
      />
    </a>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  links: Array,
  activeSection: String
})

defineEmits(['navigate'])

const { t } = useI18n()
</script>