<template>
  <div class="flex items-center gap-2">
    <button
      @click="$emit('change', 'fr')"
      class="text-xl transition hover:scale-110 text-foreground"
      :class="lang === 'fr' ? 'opacity-100' : 'opacity-50'"
    >
      🇫🇷
    </button>

    <button
      @click="$emit('change', 'en')"
      class="text-xl transition hover:scale-110 text-foreground"
      :class="lang === 'en' ? 'opacity-100' : 'opacity-50'"
    >
      🇬🇧
    </button>
  </div>
</template>

<script setup>
defineProps({
  lang: String
})

defineEmits(['change'])
</script>