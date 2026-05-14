<template>
  <div
    id="features"
    class="relative py-24 overflow-hidden bg-black"
  >
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Heading -->
      <div class="text-center mb-16 md:mb-24 animate-fade-up">
        <p
          class="text-sm font-sans uppercase tracking-widest text-primary mb-6"
        >
          {{ $t('features.section.title') }}
        </p>

        <h2
          class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-2xl mx-auto"
        >
          {{ $t('features.section.description') }}
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-8 md:gap-12">
        <div
          v-for="(key, index) in FEATURES_ORDER"
          :key="key"
          class="group animate-fade-up"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div
            class="p-8 md:p-10 rounded-2xl bg-card backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all duration-500 h-full"
          >
            <!-- Icon -->
            <div
              class="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500"
            >
              <Icon :icon="icon[index].icon" width="24" height="24" />
            </div>

            <!-- Title -->
            <h3
              class="font-serif italic text-xl text-foreground mb-3"
            >
              {{ features[key].title }}
            </h3>

            <!-- Description -->
            <p
              class="font-sans text-muted-foreground text-base leading-relaxed mb-4"
            >
              {{ features[key].description }}
            </p>

            <!-- Detail -->
            <p
              class="font-sans text-primary text-sm leading-relaxed"
            >
              {{ features[key].detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { FEATURES_ORDER } from '@/constants/features'
import { computed } from 'vue'

const { tm } = useI18n()

const features = computed(() => tm('features'))

const icon = [
    {
        name: 'sparkles',
        icon: 'prime:sparkles'
    },
    {
        name: 'palette',
        icon: 'prime:palette'
    },
    {
        name: 'film',
        icon: 'ph:film-strip'
    }
]

</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>