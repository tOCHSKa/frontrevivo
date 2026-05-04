<template>
  <div id="live-preview" class="relative py-24 md:py-36 overflow-hidden bg-black">
    <div class="absolute top-0 right-0 w-96 h-96  rounded-full blur-3xl" />

    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        <!-- Animated block -->
        <transition name="fade-slide">
          <div v-if="visible">
            <p class="text-sm uppercase text-primary mb-6 ">
              {{t('livePreview.sectionTitle')}}
            </p>

            <h2 class="text-4xl md:text-5xl mb-6 font-serif text-foreground italic">
              {{t('livePreview.title')}}
            </h2>

            <p class="text-muted-foreground text-lg mb-8">
              {{t('livePreview.description')}}
            </p>

            <p class="text-sm text-muted-foreground">
              {{t('livePreview.cta')}}
            </p>
          </div>
        </transition>

        <BeforeAfterSlider
          :before-src="BEFORE_IMG"
          :after-src="AFTER_IMG"
          before-alt="Damaged old photograph"
          after-alt="Restored photograph"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BeforeAfterSlider from './BeforeAfterSlider.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


const BEFORE_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/4dd1ae0d9_generated_c58194a2.png';
const AFTER_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/0f74e2801_generated_8a7a9d0f.png';

const visible = ref(false);

onMounted(() => {
  visible.value = true;
});
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.8s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>