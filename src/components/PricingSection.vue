<template>
  <div class="relative md:py-24 overflow-hidden bg-black">
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-16 md:mb-24">
        <p class="text-sm uppercase text-primary mb-6">{{ t('pricing.title') }}</p>

        <h2 class="text-3xl md:text-5xl mb-4 font-serif italic text-foreground">
          {{ t('pricing.subtitle') }}
        </h2>

        <p class="text-muted-foreground text-lg">
          {{ t('pricing.description') }}
        </p>
      </div>

      <!-- Plans -->
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">

        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'relative rounded-2xl p-8 md:p-10 transition-all duration-500',
            plan.featured
              ? 'bg-card border-2 border-border shadow-xl shadow-primary/5'
              : 'bg-card border border-border\/30 hover:border-border\/60'
          ]"
        >
          <!-- Badge -->
          <div v-if="plan.featured" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="px-4 py-1 bg-primary text-white text-xs rounded-full">
              Most Popular
            </span>
          </div>

          <!-- Content -->
          <div class="mb-8">
            <h3 class="text-sm uppercase text-muted-foreground mb-3">
              {{ plan.name }}
            </h3>

            <div class="flex items-baseline gap-1">
              <span class="text-4xl text-foreground">{{ plan.price }}</span>
              <span v-if="plan.period" class="text-sm text-muted-foreground">
                {{ plan.period }}
              </span>
            </div>

            <p class="text-sm text-muted-foreground mt-2">
              {{ plan.description }}
            </p>
          </div>

          <!-- Features -->
          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex gap-3"
            >
              <span class="text-primary">✔</span>
              <span class="text-sm text-muted-foreground">
                {{ feature }}
              </span>
            </li>
          </ul>

          <!-- Button -->
          <button
            :class="[
              'w-full py-3.5 rounded-xl text-sm transition-all',
              plan.featured
                ? 'bg-primary text-black hover:bg-primary/90'
                : 'bg-secondary hover:bg-secondary/80  text-secondary-foreground'
            ]"
          >
            {{ plan.cta }}
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const plans = computed(() => [
  {
    name: t('pricing.plans.free.name'),
    price: t('pricing.plans.free.price'),
    period: t('pricing.plans.free.period'),
    description: t('pricing.plans.free.description'),
    features: [
      t('pricing.plans.free.features[0]'),
      'AI restoration preview',
      'Colorization preview',
      'Watermarked result',
    ],
    cta: 'Try it free',
    featured: false,
  },
  {
    name: t('pricing.plans.single.name'),
    price: t('pricing.plans.single.price'),
    period: t('pricing.plans.single.period'),
    description: t('pricing.plans.single.description'),
    features: [
      t('pricing.plans.single.features[0]'),
      t('pricing.plans.single.features[1]'),
      t('pricing.plans.single.features[2]'),
      t('pricing.plans.single.features[3]'),
    ],
    cta: t('pricing.plans.single.cta'),
    featured: true,
  },
  {
    name: t('pricing.plans.album.name'),
    price: t('pricing.plans.album.price'),
    period: t('pricing.plans.album.period'),
    description: t('pricing.plans.album.description'),
    features: [
      t('pricing.plans.album.features[0]'),
      t('pricing.plans.album.features[1]'),
      t('pricing.plans.album.features[2]'),
      t('pricing.plans.album.features[3]'),
      t('pricing.plans.album.features[4]'),
    ],
    cta: t('pricing.plans.album.cta'),
    featured: false,
  },
]);
</script>