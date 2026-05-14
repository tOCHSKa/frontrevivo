import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollSpy(sectionIds, options = {}) {
  const activeSection = ref(sectionIds[0])

  let observer = null

  onMounted(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null

        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry
          }
        }

        if (bestEntry?.target?.id) {
          activeSection.value = bestEntry.target.id
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-80px 0px -40% 0px', // 👈 clé pour navbar
        ...options
      }
    )

    elements.forEach(el => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { activeSection }
}