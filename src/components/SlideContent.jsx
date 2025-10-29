import React from 'react';
import { motion } from 'framer-motion';

function BackgroundMedia({ slide }) {
  // Per-slide background media above Spline, below content
  if (slide.background?.type === 'image') {
    return (
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${slide.background.imageUrl})` }}
        initial={{ scale: 1, y: 0 }}
        animate={slide.background.parallax ? { scale: [1, 1.06, 1], y: [0, -4, 0] } : {}}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Brand-tinted gradient for legibility */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${slide.background.tintClass}`}
        />
      </motion.div>
    );
  }
  // Subtle brand glow when using Spline as primary visual
  return (
    <div aria-hidden className="absolute inset-0">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${slide.background?.tintClass || ''}`} />
    </div>
  );
}

function Droplets() {
  const drops = Array.from({ length: 12 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {drops.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/50"
          style={{ left: `${(i * 9) % 100}%`, top: -8 }}
          initial={{ y: -20, opacity: 0.0, scale: 0.8 }}
          animate={{ y: ['0%', '110%'], opacity: [0.2, 0.85, 0], scale: [0.8, 1, 0.9] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function Mist() {
  const puffs = Array.from({ length: 7 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {puffs.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: 140,
            height: 140,
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 60}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.35), rgba(255,255,255,0.0))',
          }}
          initial={{ opacity: 0.0, scale: 0.85 }}
          animate={{ opacity: [0.0, 0.6, 0.0], scale: [0.85, 1.08, 0.95] }}
          transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}
      {/* Soft upward vapor */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        initial={{ opacity: 0.0, y: 20 }}
        animate={{ opacity: [0.0, 0.3, 0.0], y: [-6, -16, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.18), rgba(255,255,255,0))',
        }}
      />
    </div>
  );
}

function Chips() {
  const chips = Array.from({ length: 9 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-visible">
      {chips.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full shadow-lg"
          style={{
            width: 24 + (i % 3) * 8,
            height: 18 + (i % 2) * 6,
            left: `${(i * 12 + 10) % 100}%`,
            top: -30 - i * 20,
            background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
            border: '2px solid rgba(255,255,255,0.35)',
            borderRadius: '9999px 9999px 700px 700px',
            transformOrigin: 'center',
            filter: 'brightness(1.05)'
          }}
          initial={{ y: -60, rotate: -10, opacity: 0.0 }}
          animate={{ y: ['-10%', '105%', '90%'], rotate: [(-10 + i * 2), (5 + i), (-5)], opacity: [0.0, 1, 0.0] }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}
      {/* Subtle zoom background pulse */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function SlideContent({ slide }) {
  return (
    <div className="relative flex h-full items-center px-6 md:px-12">
      {/* Per-slide background above Spline */}
      <BackgroundMedia slide={slide} />

      {/* Animated layers */}
      {slide.animation === 'droplets' && <Droplets />}
      {slide.animation === 'mist' && <Mist />}
      {slide.animation === 'chips' && <Chips />}

      {/* Content */}
      <div className={`relative z-10 max-w-3xl ${slide.theme?.text || 'text-white'}`}>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur-md ring-1 ring-white/20">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          {slide.eyebrow}
        </div>
        <h1
          className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight"
          style={slide.id === 'sprite' ? { textShadow: '0 0 14px rgba(255,255,255,0.45)' } : undefined}
        >
          {slide.title}
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-slate-200">
          {slide.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={slide.ctaPrimary.href}
            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${slide.theme.accent}`}
          >
            {slide.ctaPrimary.label}
          </a>
          <a
            href={slide.ctaSecondary.href}
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            {slide.ctaSecondary.label}
          </a>
        </div>
      </div>
    </div>
  );
}
