import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-2xl bg-slate-900/80">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950/60 to-slate-950/80" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur-md ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            MIT ADT Canteen
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Smart, Fast, and Flavorful Canteen Experience
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-slate-300">
            Explore a modern menu, add items to your cart, and enjoy seamless ordering. Built with an AI-ready foundation and a warm, food-first design aesthetic.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Browse Menu
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              See Highlights
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
