<template>
  <div class="max-w-7xl mx-auto px-6 lg:px-8 ">
    <div class="flex items-center justify-between h-16 lg:h-20">
      
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <div class="w-3 h-3 rounded-full bg-primary"></div>
        </div>
        <span>
          <a href="#home" class="font-serif text-xl italic text-foreground tracking-wide">Revivo</a>
        </span>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          @click="setActive(link.label)"
          class="text-sm font-sans tracking-wide uppercase transition-colors duration-300 relative cursor-pointer"
          :class="activeLink === link.label
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'"
        >
          {{ t(link.label) }}

          <!-- underline actif -->
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300"
            :class="activeLink === link.label ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </a>
      </div>

      <!-- CTA -->
      <div class="hidden md:flex items-center gap-4">
        <a
          href="#home"
          class="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium font-sans tracking-wide hover:bg-primary/90 transition-all duration-300 cursor-pointer"
        >
          {{ t('nav.cta') }}
        </a>
        
              <!-- Language switch -->
      <div class="hidden md:flex items-center gap-2">
        <button
          @click="setLang('fr')"
          class="text-xl hover:scale-110 transition text-white cursor-pointer"
          :class="lang === 'fr' ? 'opacity-100' : 'opacity-50'"
        >
          🇫🇷
        </button>
        <button
          @click="setLang('en')"
          class="text-xl hover:scale-110 transition text-white cursor-pointer"
          :class="lang === 'en' ? 'opacity-100' : 'opacity-50'"
        >
          🇬🇧
        </button>
      </div>
      </div>
      <!-- Mobile button -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden text-foreground"
      >
        <span v-if="mobileOpen">✕</span>
        <span v-else>☰</span>
      </button>

    </div>

    <!-- Mobile menu -->
    <div
        class="md:hidden fixed top-16 left-0  w-full bg-background flex flex-col gap-4 py-6 px-6 transition-transform duration-300 transform z-50 cursor-pointer"
        :class="mobileOpen ? 'translate-x-0' : '-translate-x-full'"
        >
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        @click="setActive(link.label)"
        class="text-sm uppercase transition"
        :class="activeLink === link.label
          ? 'text-foreground'
          : 'text-muted-foreground'"
      >
        {{ t(link.label) }}
      </a>
      <div class="flex gap-4 pt-4 border-t border-border">
  <button
    @click="setLang('fr')"
    class="text-xl hover:scale-110 transition text-white cursor-pointer"
    :class="lang === 'fr' ? 'opacity-100' : 'opacity-50'"
  >
    🇫🇷
  </button>

  <button
    @click="setLang('en')"
    class="text-xl hover:scale-110 transition text-white cursor-pointer"
    :class="lang === 'en' ? 'opacity-100' : 'opacity-50'"
  >
    🇬🇧
  </button>
</div>
    </div>
    

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const mobileOpen = ref(false)

const activeLink = ref('nav.home')

function setActive(link) {
  activeLink.value = link
  mobileOpen.value = false
}

const links = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.features', href: '#features' },
  { label: 'nav.stories', href: '#stories' },
  { label: 'nav.pricing', href: '#pricing' },
]

const lang = ref('fr')


onMounted(() => {
  const saved = localStorage.getItem('lang')
  if (saved) {
    lang.value = saved
    locale.value = saved
  }
})

function setLang(newLang) {
  lang.value = newLang
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

</script>
<style scoped>
</style>
