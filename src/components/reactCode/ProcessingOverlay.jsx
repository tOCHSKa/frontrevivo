import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const MESSAGES = [
  'Tracing the lines of time…',
  'Finding the light in the shadows…',
  'Restoring forgotten details…',
  'Bringing color back to memory…',
  'Almost there…',
];

export default function ProcessingOverlay({ isVisible }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setMsgIndex(0);
      setProgress(0);
      return;
    }

    const msgInterval = setInterval(() => {
      setMsgIndex((i) => (i < MESSAGES.length - 1 ? i + 1 : i));
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 1.5, 95));
    }, 100);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center px-6"
        >
          {/* Light leak */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-center"
          >
            {/* Pulsing circle */}
            <div className="relative w-20 h-20 mx-auto mb-10">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-primary/20"
              />
              <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary/60" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={msgIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="font-serif italic text-2xl md:text-3xl text-foreground mb-8"
              >
                {MESSAGES[msgIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="w-64 mx-auto">
              <div className="h-px bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}