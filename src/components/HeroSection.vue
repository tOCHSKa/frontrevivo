<template>
  <div  class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img
        :src="HERO_BG"
        alt="Hands holding old photograph"
        class="w-full h-full object-cover memory-drift"
      />
      <div class="absolute inset-0 bg-black/90" />
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
      <!-- Subtitle -->
      <p
        class="text-sm font-sans uppercase tracking-widest text-primary mb-8 animate-fade-up"
      >
        {{t('hero.subtitle')}}
      </p>

      <!-- Title -->
      <h1
        class="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up delay-100"
      >
        {{t('hero.title')}}
        <br />
        <span class="text-primary">{{t('hero.titleHighlight')}}</span>
      </h1>

      <!-- Text -->
      <p
        class="font-sans text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200"
      >
        {{t('hero.description')}}
      </p>

      <!-- Upload Zone -->
      <div
        id="hero-upload"
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
        @dragleave="handleDragLeave"
        @click="openFilePicker"
        :class="[
          'relative max-w-lg mx-auto cursor-pointer group transition-all duration-500 animate-fade-up delay-300',
          isDragging ? 'scale-105' : ''
        ]"
      >
        <div
          :class="[
            'border border-white/20 rounded-2xl p-10 md:p-14 transition-all duration-500',
            isDragging
              ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
              : 'border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50'
          ]"
        >
          <div class="flex flex-col items-center gap-4">
            <div
              :class="[
                'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500',
                isDragging
                  ? 'bg-primary/20'
                  : 'bg-secondary group-hover:bg-primary/10'
              ]"
            >
              <!-- Upload icon -->
              <svg
                class="w-7 h-7 transition-all duration-500"
                :class="
                  isDragging
                    ? 'text-primary'
                    : 'text-muted-foreground group-hover:text-primary'
                "
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16"
                />
              </svg>
            </div>

            <div>
              <p class="font-sans text-foreground text-base font-medium mb-1">
                {{t('hero.upload')}}
              </p>
              <p class="font-sans text-muted-foreground text-sm">
                {{t('hero.uploadHint')}}
              </p>
            </div>
          </div>

          <!-- Focus border effect -->
          <div class="absolute inset-0 rounded-2xl pointer-events-none">
            <div
              :class="[
                'absolute inset-0 rounded-2xl transition-opacity duration-500',
                isDragging ? 'opacity-100' : 'opacity-0'
              ]"
              style="box-shadow: inset 0 0 30px rgba(230,199,156,0.1)"
            />
          </div>
        </div>

        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          class="hidden"
          @change="handleFileChange"
        />
      </div>

      <!-- Watch example CTA -->
      <button
        class="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans text-sm tracking-wide animate-fade-up delay-500"
      >
        <div
          class="w-8 h-8 rounded-full border border-current flex items-center justify-center"
        >
          <svg
            class="w-3 h-3 ml-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        </div>
        {{t('hero.example')}}
      </button>
    </div>

    <!-- Bottom gradient fade -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits(['fileUpload'])

const HERO_BG =
  'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/aae18e94e_generated_8231e0bc.png'

const isDragging = ref(false)
const fileInput = ref(null)

function openFilePicker() {
  fileInput.value?.click()
}

function handleDrop(e) {
  isDragging.value = false
  const file = e.dataTransfer?.files?.[0]

  if (file && file.type.startsWith('image/')) {
    emit('fileUpload', file)
  }
}

function handleDragOver() {
  isDragging.value = true
}

function handleDragLeave() {
  isDragging.value = false
}

function handleFileChange(e) {
  const file = e.target.files?.[0]

  if (file) {
    emit('fileUpload', file)
  }
}


</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-500 {
  animation-delay: 0.5s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>