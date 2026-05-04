<template>
      <div class="relative py-24 md:py-36 overflow-hidden bg-black">
      <div class="absolute top-0 right-1/4 w-80 h-80  rounded-full blur-3xl" />

      <div class="max-w-6xl mx-auto px-6">
        <div
          class="text-center mb-16 md:mb-24"
        >
          <p class="text-sm font-sans uppercase tracking-widest text-primary mb-6">
            {{t('demoSection.gallery')}}
          </p>
          <h2 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
            {{t('demoSection.title')}}
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 md:gap-16">
          <div
            v-for="(demo, index) in demos"
            :key="index"
            class="space-y-4"
          >
            <BeforeAfterSlider
              :before-src="demo.before"
              :after-src="demo.after"
              :before-alt="`Before restoration - ${demo.year}`"
              :after-alt="`After restoration - ${demo.year}`"
            />
            <p class="font-serif italic text-muted-foreground text-center text-sm">
              {{ demo.caption }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BeforeAfterSlider from './BeforeAfterSlider';
import { useI18n } from 'vue-i18n'


const { t } = useI18n()


const BEFORE_FAMILY = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/01f62b610_generated_a98468b0.png';
const AFTER_FAMILY = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/d09e6d4a2_generated_ce1dc8cd.png';
const BEFORE_MAN = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/4dd1ae0d9_generated_c58194a2.png';
const AFTER_MAN = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/0f74e2801_generated_8a7a9d0f.png';



const demos = computed(() => [
  {
    before: BEFORE_FAMILY,
    after: AFTER_FAMILY,
    caption: t('demoSection.caption'),
    year: '1943',
  },
  {
    before: BEFORE_MAN,
    after: AFTER_MAN,
    caption: t('demoSection.caption2'),
    year: '1955', 
  },
]);


</script>

<style scoped>
</style>