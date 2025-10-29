import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, ShieldCheck, Bot, ShoppingCart } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast Orders',
    desc: 'Smooth browsing and instant interactions with a modern React stack.',
    icon: Gauge,
  },
  {
    title: 'Secure & Reliable',
    desc: 'Built for scale with a robust backend and database foundation.',
    icon: ShieldCheck,
  },
  {
    title: 'AI-Ready Utilities',
    desc: 'Recommendation hooks and insights can power smart experiences.',
    icon: Bot,
  },
  {
    title: 'Cart & Checkout UX',
    desc: 'Thoughtful flows that make ordering delightful and effortless.',
    icon: ShoppingCart,
  },
];

export default function Highlights() {
  return (
    <section id="features" className="mt-14 md:mt-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Why MIT ADT Canteen</h2>
        <p className="mt-2 text-slate-300 text-sm md:text-base">A warm visual system with performance, clarity, and motion built-in.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md"
            >
              <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-orange-500/10 blur-2xl" />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-amber-300 ring-1 ring-orange-400/20">
                <Icon size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
