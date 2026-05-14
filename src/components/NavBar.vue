<template>
  <nav class=" fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
  :class="isScrolled ? 'border-b border-border backdrop-blur bg-black/80 shadow-sm' : 'bg-background/90'">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">

      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <div class="w-3 h-3 rounded-full bg-primary"></div>
        </div>
        <span class="font-serif text-xl italic text-foreground tracking-wide">
          Revivo
        </span>
      </a>

      <!-- Desktop -->
      <NavLinks
        :links="links"
        :activeSection="activeSection"
        @navigate="scrollTo"
      />

      <div class="hidden md:flex items-center gap-4">
        <NavActions />

        <LanguageSwitcher
          :lang="lang"
          @change="setLang"
        />
      </div>

      <!-- Mobile button -->
      <button
        ref="menuButtonRef"
        @click="mobileOpen = !mobileOpen"
        class="md:hidden text-foreground"
      >
        <span v-if="mobileOpen">✕</span>
        <span v-else>☰</span>
      </button>

    </div>

    <!-- Mobile menu -->
    <MobileMenu
      :open="mobileOpen"
      :links="links"
      :activeSection="activeSection"
      :lang="lang"
      @navigate="scrollTo"
      @close="mobileOpen = false"
      @change-lang="setLang"
    />
  </div>
</nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollSpy } from '../composables/useScrollSpy'
import { NAV_LINKS } from '../config/navigation'

import NavLinks from './navbar/NavLinks.vue'
import NavActions from './navbar/NavActions.vue'
import LanguageSwitcher from './navbar/LanguageSwitcher.vue'
import MobileMenu from './navbar/MobileMenu.vue'

// data
const links = NAV_LINKS
const mobileOpen = ref(false)
const lang = ref('fr')

// i18n
const { locale } = useI18n()

// scroll spy
const { activeSection } = useScrollSpy(
  links.map(l => l.id)
)

function setLang(newLang) {
  lang.value = newLang
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

// scroll
function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return

  const y = el.getBoundingClientRect().top + window.scrollY - 80

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  })
}

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  const saved = localStorage.getItem('lang')
  if (saved) {
    lang.value = saved
    locale.value = saved
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>


<style scoped>
</style>