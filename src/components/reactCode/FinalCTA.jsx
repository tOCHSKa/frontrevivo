import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export default function FinalCTA({ onUploadClick }) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Every photo holds someone
            <br />
            <span className="text-primary">worth remembering</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Upload your photo now. It takes 30 seconds to see the past in a way you never have before.
          </p>
          <button
            onClick={onUploadClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-sans text-base font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/10"
          >
            <Upload className="w-5 h-5" />
            Upload your photo
          </button>
          <p className="mt-4 font-sans text-muted-foreground/50 text-sm">
            Free preview · No account needed
          </p>
        </motion.div>
      </div>
    </section>
  );
}