'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Descargas', href: '/descargas' },
    { name: 'Rankings', href: '/rankings' },
    { name: 'Market place', href: '/marketplace' },
  ];
  const mobileLinks = [
    ...links,
    { name: 'Register', href: '/register' },
    { name: 'Log in', href: '/login' },
  ];

  const activeTab =
    links.find((link) => link.href === pathname)?.name ?? 'Inicio';

  useEffect(() => {
    const pageNames: Record<string, string> = {
      '/': 'Inicio',
      '/descargas': 'Descargas',
      '/rankings': 'Rankings',
      '/marketplace': 'Market Place',
      '/register': 'Register',
      '/login': 'Log In',
    };

    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    document.title = `Mu Isekai | ${pageNames[currentPath] ?? 'Inicio'}`;
  }, [pathname]);

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/60 px-3 py-3 font-sans text-white backdrop-blur-md sm:px-6 sm:py-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="select-none cursor-pointer bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-200 bg-clip-text text-lg font-black tracking-widest text-transparent drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] sm:text-2xl"
      >
        <a href="/">MU ONLINE</a>
      </motion.div>

      <div className="hidden md:flex items-center space-x-1">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
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

      <button
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        onClick={() => setMenuOpen((open) => !open)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-white/10 text-gray-300 hover:border-amber-500/50 hover:text-amber-300 md:hidden"
      >
        <span className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`h-0.5 w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2 sm:space-x-4"
      >
        <a href="/register" className="hidden text-sm font-medium uppercase tracking-wide text-gray-300 transition-colors hover:text-white sm:block">
          Register
        </a>

        <span className="hidden font-light text-white/20 sm:block">|</span>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(245, 158, 11, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          href="/login"
          className="rounded-md border border-amber-400/30 bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-black transition-all sm:px-5 sm:text-sm"
        >
          Log in
        </motion.a>
      </motion.div>

      {menuOpen && (
        <div className="absolute left-3 right-3 top-full mt-2 flex flex-col gap-1 rounded-lg border border-white/10 bg-zinc-950/95 p-2 shadow-2xl md:hidden">
          {mobileLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-md px-3 py-3 text-xs font-bold uppercase tracking-wider ${
                activeTab === link.name ? 'bg-amber-500/10 text-amber-300' : 'text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
