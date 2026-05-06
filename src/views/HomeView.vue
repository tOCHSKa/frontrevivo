<template>
  <nav class="bg-background fixed top-0 left-0 right-0 z-50">
    <NavBar />
  </nav>
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
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import LivePreviewSection from '@/components/LivePreviewSection.vue'
import DemoSection from '@/components/DemoSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import StorytellingSection from '@/components/StorytellingSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import Footer from '@/components/Footer.vue'
import FinalCTA from '@/components/FinalCTA.vue'

</script>
