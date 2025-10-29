import React from 'react';
import { motion } from 'framer-motion';
import { CupSoda, Sandwich, Salad, UtensilsCrossed } from 'lucide-react';

const menuData = [
  {
    category: 'Beverages',
    icon: CupSoda,
    items: [
      { name: 'Sprite (Bottle)', price: 20 },
      { name: 'Thums Up (Bottle)', price: 20 },
      { name: 'Coca-Cola (Bottle)', price: 20 },
      { name: 'Fanta (Can)', price: 40 },
    ],
  },
  {
    category: 'Snacks',
    icon: Sandwich,
    items: [
      { name: 'Samosa', price: 15 },
      { name: 'Vada Pav', price: 15 },
      { name: 'Kacchi Dabeli', price: 30 },
      { name: 'Sandwich', price: 40 },
    ],
  },
  {
    category: 'Parathas',
    icon: Salad,
    items: [
      { name: 'Aloo Paratha', price: 100 },
      { name: 'Paneer Paratha', price: 120 },
      { name: 'Mix Veg Paratha', price: 110 },
    ],
  },
  {
    category: 'Dosas',
    icon: UtensilsCrossed,
    items: [
      { name: 'Dosa', price: 80 },
      { name: 'Cheese Dosa', price: 100 },
      { name: 'Mysore Masala Dosa', price: 120 },
    ],
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="mt-10 md:mt-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Menu Preview</h2>
          <p className="mt-1 text-slate-300 text-sm md:text-base">Curated picks from our full menu. More categories inside.</p>
        </div>
        <a
          href="#"
          className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          View Full Menu →
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {menuData.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/20">
                  <Icon size={20} />
                </span>
                <h3 className="text-white font-semibold">{cat.category}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 transition group-hover:bg-white/10"
                  >
                    <span className="truncate">{item.name}</span>
                    <span className="font-semibold text-cyan-300">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
