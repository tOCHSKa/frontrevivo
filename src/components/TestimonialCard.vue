<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  item: Object,
  delay: Number
})

const elRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.2 })

  if (elRef.value) {
    observer.observe(elRef.value)
  }
})
</script>

<template>
  <div
    ref="elRef"
    class="p-8 md:p-10 rounded-2xl bg-card backdrop-blur-sm border border-border/30 transition-all duration-700"
    :style="{ transitionDelay: `${delay}s` }"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
  >
    <div class="flex gap-1 mb-6">
      <span v-for="i in 5" :key="i" class="w-4 h-4 text-primary">★</span>
    </div>

    <p class="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6">
      "{{ item.quote }}"
    </p>

    <div>
      <p class="font-sans text-white text-sm font-medium">
        {{ item.name }}
      </p>
      <p class="font-sans text-white/60 text-xs mt-0.5">
        {{ item.location }}
      </p>
    </div>
  </div>
</template>