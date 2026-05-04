import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

const BEFORE_FAMILY = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/01f62b610_generated_a98468b0.png';
const AFTER_FAMILY = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/d09e6d4a2_generated_ce1dc8cd.png';
const BEFORE_MAN = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/4dd1ae0d9_generated_c58194a2.png';
const AFTER_MAN = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/0f74e2801_generated_8a7a9d0f.png';

const demos = [
  {
    before: BEFORE_FAMILY,
    after: AFTER_FAMILY,
    caption: 'A family portrait from 1943 — four lives, one moment frozen in time.',
    year: '1943',
  },
  {
    before: BEFORE_MAN,
    after: AFTER_MAN,
    caption: 'A grandfather remembered — his warmth finally visible in color.',
    year: '1955',
  },
];

export default function DemoSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-primary mb-6">
            Gallery
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
            See the transformation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-4"
            >
              <BeforeAfterSlider
                beforeSrc={demo.before}
                afterSrc={demo.after}
                beforeAlt={`Before restoration - ${demo.year}`}
                afterAlt={`After restoration - ${demo.year}`}
              />
              <p className="font-serif italic text-muted-foreground text-center text-sm">
                {demo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}