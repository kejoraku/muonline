'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Inicio');

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Descargas', href: '/descargas' },
    { name: 'Rankings', href: '/rankings' },
    { name: 'Market place', href: '/marketplace' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between text-white font-sans">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-200 drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] select-none cursor-pointer"
      >
        <a href="/">MU ONLINE</a>
      </motion.div>

      <div className="hidden md:flex items-center space-x-1">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveTab(link.name)}
            className="relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-amber-400"
          >
            {link.name}
            {activeTab === link.name && (
              <motion.div
                layoutId="activeBorder"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_8px_#f59e0b]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        <a href="/register" className="text-sm font-medium uppercase tracking-wide text-gray-300 hover:text-white transition-colors">
          Register
        </a>

        <span className="text-white/20 font-light">|</span>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(245, 158, 11, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          href="/login"
          className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 rounded-md text-sm font-bold uppercase tracking-wider text-black border border-amber-400/30 transition-all"
        >
          Log in
        </motion.a>
      </motion.div>
    </nav>
  );
}
