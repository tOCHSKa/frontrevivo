<template>
  <div
    ref="containerRef"
    class="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-xl cursor-col-resize select-none"
  >
    <!-- After image -->
    <img
      :src="afterSrc"
      :alt="afterAlt"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Before image (clipped) -->
    <div
      class="absolute inset-0 overflow-hidden"
      :style="{ width: sliderPos + '%' }"
    >
      <img
        :src="beforeSrc"
        :alt="beforeAlt"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    <!-- Slider -->
    <div
      class="absolute top-0 bottom-0 w-px bg-primary/80 z-10"
      :style="{ left: sliderPos + '%' }"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background backdrop-blur-sm border border-primary/50 flex items-center justify-center shadow-lg shadow-primary/10">
        <div class="flex gap-0.5">
          <div class="w-0.5 h-4 bg-primary rounded-full" />
          <div class="w-0.5 h-4 bg-primary rounded-full" />
        </div>
      </div>
    </div>

    <!-- Labels -->
    <div class="absolute top-3 left-3 z-20 bg-gray-600/50 backdrop-blur-sm rounded-full px-4 py-1">
      <span class="text-xs uppercase  text-foreground">{{ t('before') }}</span>
    </div>
    <div class="absolute top-3 right-3 z-20 bg-gray-600/50 backdrop-blur-sm rounded-full px-4 py-1">
      <span class="text-xs uppercase text-foreground">{{ t('after') }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { beforeSrc, afterSrc, beforeAlt, afterAlt } = defineProps({
  beforeSrc: String,
  afterSrc: String,
  beforeAlt: String,
  afterAlt: String
});

const sliderPos = ref(50);
const containerRef = ref(null);
const isDragging = ref(false);

// 🔹 Calcul position
const updatePosition = (clientX) => {
  if (!containerRef.value) return;

  const rect = containerRef.value.getBoundingClientRect();
  const x = clientX - rect.left;

  const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
  sliderPos.value = percent;
};

// 🔹 Start drag
const startDrag = () => {
  isDragging.value = true;
};

// 🔹 Stop drag
const stopDrag = () => {
  isDragging.value = false;
};

// 🔹 Mouse move global
const onMouseMove = (e) => {
  if (!isDragging.value) return;
  updatePosition(e.clientX);
};

// 🔹 Touch move global
const onTouchMove = (e) => {
  if (!isDragging.value) return;
  updatePosition(e.touches[0].clientX);
};

// 🔹 Lifecycle (équivalent useEffect)
onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchmove', onTouchMove);
  window.addEventListener('touchend', stopDrag);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('touchend', stopDrag);
});
</script>