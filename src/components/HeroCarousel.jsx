import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import SlideContent from './SlideContent';

const SLIDE_INTERVAL = 5000;

const slides = [
  {
    id: 'coke',
    brand: 'Coca-Cola',
    eyebrow: 'MIT ADT Canteen',
    title: 'Taste the Feeling',
    tagline: 'Classic fizz with cool condensation.',
    ctaPrimary: { label: 'Browse Menu', href: '#menu' },
    ctaSecondary: { label: 'See Highlights', href: '#features' },
    theme: {
      accent: 'bg-orange-500',
      accentHover: 'hover:bg-orange-400',
      chip: 'bg-orange-500/15 text-amber-200 ring-orange-400/20',
    },
    animation: 'droplets',
  },
  {
    id: 'sprite',
    brand: 'Sprite',
    eyebrow: 'MIT ADT Canteen',
    title: 'Crisp, Cool, and Refreshing.',
    tagline: 'Zesty lemon-lime with a chilled vibe.',
    ctaPrimary: { label: 'Order Sprite', href: '#menu' },
    ctaSecondary: { label: 'See Highlights', href: '#features' },
    theme: {
      accent: 'bg-emerald-500',
      accentHover: 'hover:bg-emerald-400',
      chip: 'bg-emerald-500/15 text-emerald-100 ring-emerald-400/20',
    },
    animation: 'mist',
  },
  {
    id: 'lays',
    brand: 'Lays',
    eyebrow: 'MIT ADT Canteen',
    title: 'Crunch into Happiness.',
    tagline: 'Golden chips, light and joyful.',
    ctaPrimary: { label: 'Grab a Pack', href: '#menu' },
    ctaSecondary: { label: 'See Highlights', href: '#features' },
    theme: {
      accent: 'bg-amber-500',
      accentHover: 'hover:bg-amber-400',
      chip: 'bg-amber-500/15 text-amber-100 ring-amber-400/20',
    },
    animation: 'chips',
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [paused]);

  const activeSlide = useMemo(() => slides[index], [index]);

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-2xl bg-slate-900/80 select-none" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-950/65 to-stone-950/80" />

      <div className="relative z-10 h-full w-full">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <SlideContent slide={activeSlide} />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-3">
          <button
            aria-label="Previous"
            onClick={prev}
            className="group rounded-full bg-white/10 p-2 md:p-2.5 ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="group rounded-full bg-white/10 p-2 md:p-2.5 ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${s.brand}`}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
