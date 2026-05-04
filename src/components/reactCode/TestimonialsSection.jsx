import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'I cried when I saw my mother smile again. I never had a clear photo of her — now I do.',
    name: 'Maria L.',
    location: 'São Paulo, Brazil',
  },
  {
    quote: 'I couldn\'t believe it felt so real. It was like stepping back in time for ten precious seconds.',
    name: 'James K.',
    location: 'London, UK',
  },
  {
    quote: 'My grandmother passed before I was born. This is the first time I truly saw her face.',
    name: 'Aiko T.',
    location: 'Tokyo, Japan',
  },
  {
    quote: 'I sent the video to my whole family. We all cried together. Best $9 I ever spent.',
    name: 'David R.',
    location: 'Chicago, USA',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-primary mb-6">
            Voices
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
            Memories that moved people to tears
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-sans text-foreground text-sm font-medium">
                  {testimonial.name}
                </p>
                <p className="font-sans text-muted-foreground/60 text-xs mt-0.5">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}