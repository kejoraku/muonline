// app/page.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Castle Siege',
    subtitle: 'Domina la guerra de guilds y conquista el reino.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'PvP épico',
    subtitle: 'Desafía a los mejores guerreros del servidor.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mundo abierto',
    subtitle: 'Explora mapas, eventos y contenido premium.',
    image:
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Clases legendarias',
    subtitle: 'Desarrollá a tu personaje con cientos de build.',
    image:
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Elite Server',
    subtitle: 'Compite en un entorno hard, slow y competitivo.',
    image:
      'https://images.unsplash.com/photo-1528819622761-6bcf042f7d81?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-6xl w-full pt-10 pb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
        >
          Servidor Privado S8 • Hard / Slow
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-7xl"
        >
          BIENVENIDO A <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-200">MU ONLINE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Revive la gloria del mejor MMORPG. Participa en batallas épicas, conquista el Castle Siege y conviértete en el guerrero más poderoso del continente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(245, 158, 11, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            href="/descargas"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 text-black font-black uppercase tracking-wider px-8 py-4 rounded-md shadow-lg border border-amber-300/40 text-center transition-all"
          >
            Descargar Juego
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.95 }}
            href="/register"
            className="w-full sm:w-auto border border-white/20 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-md text-center transition-all"
          >
            Crear Cuenta
          </motion.a>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_0_40px_rgba(245,158,11,0.12)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="relative h-[420px] w-full"
              >
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex items-end p-6 sm:p-10">
                  <div className="max-w-xl text-left">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.35em] text-amber-400">
                      {slides[current].title}
                    </p>
                    <h2 className="text-2xl sm:text-4xl font-black text-white drop-shadow-md">
                      {slides[current].subtitle}
                    </h2>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Ver slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
