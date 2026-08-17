'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const marketplaceSlides = [
  {
    title: 'Wings of Dragon',
    subtitle: 'Aumenta tu poder con atributos épicos.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Divine Sword',
    subtitle: 'Arma legendaria con daño crítico y precisión.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Armor of Twilight',
    subtitle: 'Protección superior para combates prolongados.',
    image:
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Soul Staff',
    subtitle: 'Magia pura y control extremo de daño.',
    image:
      'https://images.unsplash.com/photo-1528819622761-6bcf042f7d81?auto=format&fit=crop&w=1200&q=80',
  },
];

const items = [
  {
    id: 1,
    nombre: 'Wings of Dragon',
    nivel: '+13',
    opciones: ['+Luck', '+Ignore Defense'],
    vendedor: 'GamerX',
    precioJewels: 50,
    tipoJewel: 'Bless',
    imagenColor: 'from-red-600 to-orange-500',
  },
  {
    id: 2,
    nombre: 'Grand Soul Staff',
    nivel: '+11',
    opciones: ['+Luck', '+Excellent DMG Rate 10%'],
    vendedor: 'Merlín',
    precioJewels: 35,
    tipoJewel: 'Soul',
    imagenColor: 'from-blue-600 to-indigo-500',
  },
  {
    id: 3,
    nombre: 'Divine Sword of Archangel',
    nivel: '+15',
    opciones: ['+Luck', '+Critical DMG +40', '+Life recovery'],
    vendedor: 'LiderClan',
    precioJewels: 120,
    tipoJewel: 'Bless',
    imagenColor: 'from-amber-400 to-yellow-600',
  },
  {
    id: 4,
    nombre: 'Black Dragon Armor',
    nivel: '+9',
    opciones: ['+Decrease Damage 4%'],
    vendedor: 'Thor',
    precioJewels: 20,
    tipoJewel: 'Soul',
    imagenColor: 'from-zinc-700 to-zinc-900',
  },
];

const emptySlots = Array.from({ length: 24 }, (_, index) => index);

export default function Marketplace() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [showVault, setShowVault] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % marketplaceSlides.length);
    }, 4000);

    const storedUser = localStorage.getItem('mu_user');
    setIsLoggedIn(Boolean(storedUser));

    return () => clearInterval(timer);
  }, []);

  const handlePublishClick = () => {
    const storedUser = localStorage.getItem('mu_user');

    if (!storedUser) {
      router.push('/login?redirect=/marketplace');
      return;
    }

    setShowVault(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white pt-28 pb-12 px-4 font-sans overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 uppercase mb-2"
            >
              Mercado de Ítems
            </motion.h1>
            <p className="text-gray-400 text-sm">Comercia equipamiento con otros jugadores de forma segura utilizando tus joyas.</p>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePublishClick}
            className="mt-4 md:mt-0 bg-transparent border border-amber-500/50 hover:bg-amber-500 hover:text-black text-amber-500 px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all"
          >
            Publicar un Ítem
          </motion.button>
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
          <div className="relative h-[300px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={marketplaceSlides[current].title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={marketplaceSlides[current].image}
                  alt={marketplaceSlides[current].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-amber-400 mb-2">
                      Featured Offer
                    </p>
                    <h3 className="text-2xl sm:text-4xl font-black text-white">{marketplaceSlides[current].title}</h3>
                    <p className="mt-2 text-sm text-gray-200">{marketplaceSlides[current].subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {marketplaceSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ver oferta ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-zinc-950 border border-white/5 rounded-xl overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all shadow-lg"
            >
              <div className={`relative h-44 w-full bg-gradient-to-br ${item.imagenColor} opacity-70 flex items-center justify-center p-4 border-b border-white/5`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <span className="absolute top-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-black tracking-wider text-amber-400 border border-amber-400/20 shadow-md">
                  {item.nivel}
                </span>
                <span className="relative z-10 text-center font-black uppercase text-xs tracking-widest text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {item.nombre}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-white line-clamp-1 mb-2">
                    {item.nombre} <span className="text-amber-500">{item.nivel}</span>
                  </h3>

                  <div className="space-y-1 mb-4 min-h-[48px]">
                    {item.opciones.map((opt) => (
                      <p key={opt} className="text-xs font-semibold text-cyan-400 tracking-wide">
                        {opt}
                      </p>
                    ))}
                  </div>

                  <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-4">
                    Vendedor: <span className="text-gray-300 font-medium">{item.vendedor}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Precio</span>
                    <span className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                      {item.precioJewels}
                      <span className={`text-xs font-bold uppercase tracking-wider ${item.tipoJewel === 'Bless' ? 'text-purple-400' : 'text-cyan-400'}`}>
                        {item.tipoJewel}
                      </span>
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded shadow-md transition-all"
                  >
                    Comprar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showVault && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="w-full max-w-3xl rounded-2xl border border-amber-500/40 bg-[#0b0b0d] p-4 shadow-[0_0_40px_rgba(245,158,11,0.2)]"
            >
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-amber-400">Baúl del personaje</p>
                  <h3 className="mt-2 text-2xl font-black uppercase tracking-wider text-white">Inventario</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowVault(false)}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white"
                >
                  Cerrar
                </button>
              </div>

              <div className="rounded-xl border border-red-500/30 bg-black/50 p-3">
                <div className="grid grid-cols-6 gap-2 rounded-md border border-red-500/20 bg-[#0e0e10] p-3">
                  {emptySlots.map((slot) => (
                    <div
                      key={slot}
                      className="flex h-16 items-center justify-center rounded-md border border-dashed border-red-500/30 bg-[#121214] text-[10px] font-bold uppercase tracking-wider text-red-500/40"
                    >
                      {slot + 1}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-lg border border-white/10 bg-zinc-950/70 px-4 py-3 text-xs text-gray-400">
                <span>Estado: <strong className="text-amber-300">Vacío</strong></span>
                <span>Usuario: <strong className="text-white">raniero</strong></span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
