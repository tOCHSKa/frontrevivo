import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    before: 'Avant',
    after: 'Après',

    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      stories: 'Témoignages',
      cta: 'Restaurer une photo'
    },

    hero: {
      subtitle: 'Restauration de souvenirs par IA',
      title: 'Et si vous pouviez les voir',
      titleHighlight: 'bouger à nouveau ?',
      description:
        'Restaurez, colorisez et redonnez vie à vos souvenirs en quelques secondes.',
      upload: 'Déposez votre photo ici',
      uploadHint: 'ou cliquez pour parcourir · Aucun compte requis',
      example: 'Voir un exemple'
    },

    livePreview: {
      sectionTitle: 'La révélation',
      title: 'Cette photo n’a pas été vue aussi clairement depuis 40 ans…',
      description:
        'Notre IA redonne vie à chaque détail, chaque ombre, chaque souvenir oublié.',
      cta: 'Faites glisser pour révéler la transformation →'
    },

    demoSection: {
      title: 'Voyez la transformation',
      gallery: 'Galerie',
      caption: 'Un portrait de famille de 1943 — quatre vies, un instant figé dans le temps.',
      year: '1943',
      caption2: 'Un grand-père dont la chaleur et le regard renaissent enfin en couleur.',
      year2: '1955'
    },

    features: {
      section: {
        title: 'Ce que nous faisons',
        description: 'Simple, humain, magique'
      },
      restoration: {
        title: 'Restauration de photo',
        description: 'Supprimez les défauts et redonnez de la netteté à vos souvenirs.',
        detail:
          'Notre IA détecte et corrige rayures, plis, taches et dégradations, pixel par pixel.'
      },
      colorization: {
        title: 'Colorisation naturelle',
        description: 'Ajoutez des couleurs réalistes à vos photos noir et blanc.',
        detail:
          'Une IA qui comprend les textures, les carnations et les environnements.'
      },
      animation: {
        title: 'Animation de souvenirs',
        description: 'Transformez vos photos en vidéos émouvantes.',
        detail:
          'Un moment cinématographique de 10 secondes qui donne vie à vos images.'
      }
    },

    pricing: {
      title: 'Tarifs',
      subtitle: 'Vous ne payez que lorsque vous souhaitez conserver le résultat.',
      description:
        'Prévisualisez n’importe quelle photo gratuitement. Payez uniquement pour les souvenirs que vous souhaitez garder.',
      plans: {
        free: {
          name: 'Aperçu gratuit',
          price: '0€',
          period: '',
          description: 'Découvrez le potentiel avant de vous engager.',
          features: [
            'Importer n’importe quelle photo',
            'Aperçu de restauration IA',
            'Aperçu de colorisation',
            'Résultat avec filigrane'
          ],
          cta: 'Essayer gratuitement'
        },

        single: {
          name: 'Souvenir unique',
          price: '9€',
          period: 'par photo',
          description:
            'Idéal pour un souvenir précieux à conserver pour toujours.',
          features: [
            'Restauration HD complète',
            'Colorisation naturelle',
            'Vidéo cinématique de 10 secondes',
            'Téléchargement en 4K'
          ],
          cta: 'Restaurer maintenant'
        },

        album: {
          name: 'Album familial',
          price: '29€',
          period: 'par album',
          description:
            'Restaurez plusieurs photos de famille en un seul album.',
          features: [
            'Jusqu’à 10 photos',
            'Restauration HD complète',
            'Colorisation naturelle',
            'Vidéo cinématique de 10 secondes',
            'Téléchargement en 4K',
            'Support prioritaire'
          ],
          cta: 'Créer un album'
        }
      }
    },

    footer: {
      madeWith: 'Créé avec la mémoire.'
    },

    stories: {
      sectionTitle: 'Histoires réelles',
      title: 'Chaque photo cache une histoire qui mérite d’être racontée à nouveau',

      quote1:
        'C’est la seule photo que Sarah avait de sa grand-mère. Elle ne l’avait jamais vue sourire…',
      quote2: 'jusqu’à aujourd’hui.',

      story:
        'Sarah a retrouvé cette photo abîmée dans le grenier de sa mère. C’était la seule image restante de sa grand-mère, prise en 1962. Après restauration et colorisation, elle a découvert son visage clairement pour la première fois — et le sourire qu’elle n’avait jamais connu.',

      author: '— Sarah M., New York',

      beforeLabel: '1962 · Original',
      afterLabel: 'Restauré · 2024'
    },
    testimonials: {
      title: 'Voix',
      subtitle: 'Des souvenirs qui ont ému jusqu’aux larmes',
      testimonials: [
        {
          quote: "J’ai pleuré en voyant le sourire de ma mère à nouveau… Je n’avais jamais eu de photo nette d’elle — maintenant si.",
          name: 'Maria L.',
          location: 'São Paulo, Brésil'
        },
        {
          quote: "Je n’arrivais pas à croire à quel point c’était réel. C’était comme revenir dans le passé pendant dix précieuses secondes.",
          name: 'James K.',
          location: 'Londres, Royaume-Uni'
        },
        {
          quote: "Ma grand-mère est décédée avant ma naissance. C’est la première fois que je vois vraiment son visage.",
          name: 'Aiko T.',
          location: 'Tokyo, Japon'
        },
        {
          quote: "J’ai envoyé la vidéo à toute ma famille. On a tous pleuré ensemble. Les meilleurs 9€ que j’ai dépensés.",
          name: 'David R.',
          location: 'Chicago, États-Unis'
        }
      ]
    },
    cta: {
      titleLine1: 'Chaque photo cache quelqu’un',
      titleHighlight: 'qui mérite d’être rappelé',
      description: 'Importez votre photo maintenant. Il suffit de 30 secondes pour redécouvrir le passé comme vous ne l’avez jamais vu.',
      button: 'Importer votre photo',
      footer: 'Aperçu gratuit · Aucun compte requis'
    }
  },

  en: {
    before: 'Before',
    after: 'After',

    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      stories: 'Stories',
      cta: 'Restore a photo'
    },

    hero: {
      subtitle: 'AI-Powered Memory Restoration',
      title: 'What if you could see',
      titleHighlight: 'them move again?',
      description:
        'Restore, colorize, and bring your memories back to life in seconds.',
      upload: 'Drop your photo here',
      uploadHint: 'or click to browse · No account required',
      example: 'Watch an example'
    },

    livePreview: {
      sectionTitle: 'The reveal',
      title: 'This photo hasn’t been this clear in over 40 years…',
      description:
        'Our AI traces every line, every shadow, every forgotten detail — restoring what time has taken and bringing back what was always there.',
      cta: 'Drag to reveal the transformation →'
    },

    demoSection: {
      title: 'See the transformation',
      gallery: 'Gallery',
      caption: 'A family portrait from 1943 — four lives, one moment frozen in time.',
      year: '1943',
      caption2: 'A grandfather remembered — his warmth finally visible in color.',
      year2: '1955'
    },

    features: {
      section: {
        title: 'What we do',
        description: 'Simple, human, magical'
      },
      restoration: {
        title: 'Photo Restoration',
        description:
          'Remove damage, blur, and bring clarity back to faded memories.',
        detail:
          'Our AI detects and repairs scratches, water damage, tears, and fading — pixel by pixel.'
      },
      colorization: {
        title: 'Natural Colorization',
        description:
          'Add lifelike colors to black & white memories.',
        detail:
          'Intelligent color mapping that understands fabrics, skin tones, and environments.'
      },
      animation: {
        title: 'Memory Animation',
        description:
          'Turn your photo into a short emotional video.',
        detail:
          'A 10-second cinematic moment that brings a still image to gentle, lifelike motion.'
      }
    },

    pricing: {
      title: 'Pricing',
      subtitle: 'You only pay when you want to keep it.',
      description:
        'Preview any photo for free. Pay only for the memories you treasure',

      plans: {
        free: {
          name: 'Free Preview',
          price: '$0',
          period: '',
          description: 'See what’s possible before you commit.',
          features: [
            'Upload any photo',
            'AI restoration preview',
            'Colorization preview',
            'Watermarked result'
          ],
          cta: 'Try it free'
        },

        single: {
          name: 'Single Memory',
          price: '$9',
          period: 'per photo',
          description: 'Perfect for a special memory you want to preserve forever.',
          features: [
            'Full HD restoration',
            'Natural colorization',
            '10-second cinematic video',
            'Download in 4K'
          ],
          cta: 'Restore now'
        },

        album: {
          name: 'Family Album',
          price: '$29',
          period: 'per album',
          description: 'Restore multiple family photos in one album.',
          features: [
            'Up to 10 photos',
            'Full HD restoration',
            'Natural colorization',
            '10-second cinematic video',
            'Download in 4K',
            'Priority support'
          ],
          cta: 'Get album'
        }
      }
    },

    footer: {
      madeWith: 'Made with memory.'
    },

    stories: {
      sectionTitle: 'Real Stories',
      title: 'Every photo holds a story waiting to be told again',

      quote1:
        'This is the only photo Sarah had of her grandmother. She had never seen her smile…',
      quote2: 'until now.',

      story:
        'Sarah found this damaged photograph in her mother’s attic. It was the only remaining image of her grandmother, taken in 1962. After restoration and colorization, she saw her face clearly for the first time — and the smile she never knew existed.',

      author: '— Sarah M., New York',

      beforeLabel: '1962 · Original',
      afterLabel: 'Restored · 2024'
    },
    testimonials: {
      title: 'Stories',
      subtitle: 'Memories that moved people to tears',
      testimonials: [
        {
          quote: 'I cried when I saw my mother smile again. I never had a clear photo of her — now I do.',
          name: 'Maria L.',
          location: 'São Paulo, Brazil'
        },
        {
          quote: "I couldn't believe it felt so real. It was like stepping back in time for ten precious seconds.",
          name: 'James K.',
          location: 'London, UK'
        },
        {
          quote: 'My grandmother passed before I was born. This is the first time I truly saw her face.',
          name: 'Aiko T.',
          location: 'Tokyo, Japan'
        },
        {
          quote: 'I sent the video to my whole family. We all cried together. Best $9 I ever spent.',
          name: 'David R.',
          location: 'Chicago, USA'
        }
      ]
    },
    cta: {
      titleLine1: 'Every photo holds someone',
      titleHighlight: 'worth remembering',
      description: 'Upload your photo now. It takes 30 seconds to see the past in a way you never have before.',
      button: 'Upload your photo',
      footer: 'Free preview · No account needed'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages
})

export default i18n