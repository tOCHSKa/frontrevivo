import { motion } from 'framer-motion';
import { Lock, Download, Film, ArrowLeft } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function ResultPreview({ originalUrl, onReset }) {
  // Simulated restored image (using the demo after image)
  const restoredUrl = 'https://media.base44.com/images/public/69d8c3868d2ee28a48897a71/0f74e2801_generated_8a7a9d0f.png';

  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onReset}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Try another photo
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Before/After */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans uppercase tracking-widest text-primary mb-4">
              Your Memory, Restored
            </p>
            <BeforeAfterSlider
              beforeSrc={originalUrl}
              afterSrc={restoredUrl}
              beforeAlt="Your original photo"
              afterAlt="Your restored photo"
            />
          </motion.div>

          {/* Locked features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl text-foreground leading-tight">
              Your memory is ready for its new life.
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              Create a safe home for it — unlock the full resolution and watch it come to life.
            </p>

            {/* Blurred video preview */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-card">
              <img
                src={restoredUrl}
                alt="Video preview"
                className="w-full h-full object-cover blur-md scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-background/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Film className="w-6 h-6 text-primary" />
                </div>
                <p className="font-serif italic text-foreground text-lg">
                  See them move again
                </p>
                <div className="flex items-center gap-1.5 text-primary text-xs font-sans uppercase tracking-widest">
                  <Lock className="w-3 h-3" />
                  <span>10-second cinematic video</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-sans text-sm font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
                <Film className="w-4 h-4" />
                Bring them to life — $9
              </button>
              <button className="w-full py-4 bg-transparent border border-primary/30 text-primary rounded-xl font-sans text-sm font-medium tracking-wide hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download HD restoration — Free with account
              </button>
              <p className="text-center text-muted-foreground/60 text-xs font-sans pt-1">
                Create an account to continue · No commitment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}