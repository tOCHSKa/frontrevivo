import { motion } from 'framer-motion';

const BEFORE_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/128239fbf_generated_9bd89b2e.png';
const AFTER_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/deb028b86_generated_da12e8ec.png';

export default function StorytellingSection() {
  return (
    <section id="stories" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-primary mb-6">
            Real Stories
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
            Every photo holds a story waiting to be told again
          </h2>
        </motion.div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Before */}
            <div className="relative z-10 w-3/4">
              <div className="rounded-lg overflow-hidden border border-border/30 shadow-2xl shadow-background/50">
                <img
                  src={BEFORE_IMG}
                  alt="Original damaged photo of Sarah's grandmother"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-2 left-2 text-xs font-sans uppercase tracking-widest text-muted-foreground/40">
                1962 · Original
              </div>
            </div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-8 right-0 w-3/4 z-20"
            >
              <div className="rounded-lg overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5">
                <img
                  src={AFTER_IMG}
                  alt="Restored and colorized photo of Sarah's grandmother"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-2 right-2 text-xs font-sans uppercase tracking-widest text-primary/60">
                Restored · 2024
              </div>
            </motion.div>
          </motion.div>

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="space-y-6">
              <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed">
                "This is the only photo Sarah had of her grandmother.
                She had never seen her smile…
              </p>
              <p className="font-serif italic text-2xl md:text-3xl text-primary leading-relaxed">
                until now."
              </p>
            </blockquote>

            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                Sarah found this damaged photograph in her mother's attic. It was the only image left of her grandmother, taken in 1962. After restoration and colorization, she saw her grandmother's face clearly for the first time — and the smile she never knew existed.
              </p>
              <p className="font-sans text-muted-foreground/60 text-xs mt-4 uppercase tracking-widest">
                — Sarah M., New York
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}