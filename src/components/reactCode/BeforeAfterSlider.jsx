import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => { if (isDragging.current) updatePosition(e.clientX); };
  const handleTouchMove = (e) => { updatePosition(e.touches[0].clientX); };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${(100 / sliderPos) * 100}%`, maxWidth: 'none' }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-primary/80 z-10"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-primary/50 flex items-center justify-center shadow-lg shadow-primary/10">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-primary/60 rounded-full" />
            <div className="w-0.5 h-4 bg-primary/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-xs font-sans uppercase tracking-widest text-foreground/70 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <span className="text-xs font-sans uppercase tracking-widest text-foreground/70 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
          After
        </span>
      </div>
    </motion.div>
  );
}