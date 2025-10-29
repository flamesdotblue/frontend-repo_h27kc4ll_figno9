import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm">© {new Date().getFullYear()} FlamesBlue Canteen. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#menu" className="hover:text-white">Menu</a>
          <a href="#features" className="hover:text-white">Highlights</a>
          <a href="#" className="hover:text-white">Admin</a>
        </nav>
      </div>
    </footer>
  );
}
