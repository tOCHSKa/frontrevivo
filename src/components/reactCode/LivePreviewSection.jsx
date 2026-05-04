import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

const BEFORE_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/4dd1ae0d9_generated_c58194a2.png';
const AFTER_IMG = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/0f74e2801_generated_8a7a9d0f.png';

export default function LivePreviewSection() {
  return (
    <section id="live-preview" className="relative py-24 md:py-36 overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans uppercase tracking-widest text-primary mb-6">
              The Reveal
            </p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              This photo hadn't been seen clearly for 40 years…
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
              Our AI traces every line, every shadow, every forgotten detail — restoring what time has taken and bringing back what was always there.
            </p>
            <p className="font-sans text-muted-foreground/60 text-sm">
              Drag the slider to see the transformation →
            </p>
          </motion.div>

          {/* Slider */}
          <BeforeAfterSlider
            beforeSrc={BEFORE_IMG}
            afterSrc={AFTER_IMG}
            beforeAlt="Damaged old photograph"
            afterAlt="Restored and colorized photograph"
          />
        </div>
      </div>
    </section>
  );
}