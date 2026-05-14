<template>
  <div
    id="hero-upload"
    @drop.prevent="handleDrop"
    @dragover.prevent="handleDragOver"
    @dragleave="handleDragLeave"
    @click="handleClick"
    :class="[
      'relative max-w-lg mx-auto cursor-pointer group transition-all duration-500 animate-fade-up delay-300',
      isDragging ? 'scale-105' : '', 
      previewUrl ? 'cursor-default' : ''
    ]"
  >
    <div
      :class="[
        'border border-white/50 rounded-2xl p-10 md:p-14 transition-all duration-500',
        isDragging
          ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
          : 'border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50'
      ]"
    >
    <img
      v-if="previewUrl && !isLoading"
      :src="previewUrl"
      class="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
    />
    <div v-if="isLoading">
      <div class="absolute inset-0 w-full h-full object-cover rounded-2xl z-0">
        <div class="flex items-center justify-center h-full">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    </div>
    <div v-if="previewUrl && !isLoading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 ">
        <button 
            @click="sendImage"
            class="px-4 py-2 rounded-full bg-primary text-black text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105"
            >
            Image
            </button>

            <button
            @click="consoleLogButton"
            class="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105"
            >
            Video
        </button>
    </div>
      <div  class="flex flex-col items-center gap-4"
      :class="previewUrl ? 'opacity-0 pointer-events-none' : 'opacity-100'">

        <div
          :class="[
            'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500',
            isDragging ? 'bg-primary/20' : 'bg-secondary group-hover:bg-primary/10'
          ]"
        >
          <svg
            class="w-7 h-7 transition-all duration-500"
            :class="isDragging ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'"
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
            {{ t('hero.upload') }}
          </p>
          <p class="font-sans text-muted-foreground text-sm">
            {{ t('hero.uploadHint') }}
          </p>
        </div>

      </div>

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
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount } from 'vue'

const { t } = useI18n()
const emit = defineEmits(['fileUpload'])

const isDragging = ref(false)
const fileInput = ref(null)
const previewUrl = ref(null)
const isLoading = ref(false)

function openFilePicker() {
  fileInput.value?.click()
}

function setPreview(file) {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
  }
  previewUrl.value = URL.createObjectURL(file)
}

function handleDrop(e) {
  isDragging.value = false
  const file = e.dataTransfer?.files?.[0]

  if (file && file.type.startsWith('image/')) {
    setPreview(file)
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
    setPreview(file)
    emit('fileUpload', file)
  }
}

onBeforeUnmount(() => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
  }
})

const canUpload = computed(() => !previewUrl.value)

function handleClick() {
  if (!canUpload.value) return
  openFilePicker()
}

function sendImage() {
  console.log('Image sent')
  isLoading.value = true
}
</script>