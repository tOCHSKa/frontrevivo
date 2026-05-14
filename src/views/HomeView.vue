<template>
    <NavBar />
  <section id="home" class="">
    <HeroSection />
    <LivePreviewSection />
  </section>
  <section id="features" class="">
    <FeatureSection />
    <DemoSection />
  </section>
  <section id="stories" class="">
    <StorytellingSection />
  </section>
  <section id="pricing" class="">
    <PricingSection />
    <TestimonialsSection />
  </section>
  <section>
    <FinalCTA />
  </section>
  <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/Hero/HeroSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import LivePreviewSection from '@/components/LivePreviewSection.vue'
import DemoSection from '@/components/DemoSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import StorytellingSection from '@/components/StorytellingSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import Footer from '@/components/Footer.vue'
import FinalCTA from '@/components/FinalCTA.vue'

</script>
