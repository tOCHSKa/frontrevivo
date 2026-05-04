import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free Preview',
    price: '$0',
    period: '',
    description: 'See what\'s possible before you commit.',
    features: [
      'Upload any photo',
      'AI restoration preview',
      'Colorization preview',
      'Watermarked result',
    ],
    cta: 'Try it free',
    featured: false,
  },
  {
    name: 'Single Memory',
    price: '$9',
    period: 'per photo',
    description: 'Perfect for a special memory you want to preserve forever.',
    features: [
      'Full HD restoration',
      'Natural colorization',
      '10-second cinematic video',
      'Unlimited downloads',
      'No watermark',
    ],
    cta: 'Restore this memory',
    featured: true,
  },
  {
    name: 'Unlimited',
    price: '$19',
    period: '/month',
    description: 'For those with a lifetime of memories to bring back.',
    features: [
      'Everything in Single Memory',
      'Unlimited photos',
      'Unlimited videos',
      'Priority processing',
      'Cancel anytime',
    ],
    cta: 'Start unlimited',
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-primary mb-6">
            Pricing
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-2xl mx-auto mb-4">
            You only pay when you want to keep it
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            Preview any photo for free. Pay only for the memories you treasure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 md:p-10 transition-all duration-500 ${
                plan.featured
                  ? 'bg-card border-2 border-primary/30 shadow-xl shadow-primary/5'
                  : 'bg-card/50 border border-border/30 hover:border-border/60'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 bg-primary text-primary-foreground text-xs font-sans font-medium uppercase tracking-widest rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-sans text-sm text-muted-foreground uppercase tracking-widest mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="font-sans text-muted-foreground text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="font-sans text-muted-foreground/60 text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-sans text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-sans text-sm font-medium tracking-wide transition-all duration-300 ${
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/30'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}