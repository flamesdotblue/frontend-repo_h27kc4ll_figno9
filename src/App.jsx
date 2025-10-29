import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import Highlights from './components/Highlights';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 bg-slate-950/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 md:px-12 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <span className="font-semibold tracking-tight">FlamesBlue Canteen</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#features" className="hover:text-white">Highlights</a>
            <a href="#" className="hover:text-white">Admin</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 md:px-12">
        <Hero />
        <MenuPreview />
        <Highlights />

        <section className="mt-14 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md"
          >
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/4 rounded-full bg-cyan-500/20 blur-3xl" />
            <h2 className="text-xl md:text-2xl font-bold">Ready for Cart, Checkout, and Live Tracking</h2>
            <p className="mt-2 text-sm md:text-base text-slate-300">
              This interface is wired for a full canteen management flow. Connect it to your backend APIs to power ordering, payments, and real-time status updates.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-500/15 px-3 py-2 text-cyan-200 ring-1 ring-cyan-400/20">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              AI utilities like recommendations and insights can be enabled when data is available.
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
