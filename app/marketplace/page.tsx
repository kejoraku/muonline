'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

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

const categoryTabs = [
  'Alas',
  'Armas y Escudo',
  'Casco',
  'Pecho',
  'Guantes',
  'Pantalones',
  'Botas',
  'Mascotas',
  'Anillos',
  'Pendientes',
];

const raceOptions = [
  'Blade Master',
  'Soul Master',
  'High Elf',
  'Lord Emperor',
  'Fist Master',
  'Dimension Master',
  'Duel Master',
];

const paymentOptions = [
  'Jewel of Bless',
  'Jewel of Soul',
  'Jewel of Chaos',
  'Jewel of Life',
  'Jewel of Creation',
  'Jewel of Harmony',
  'Coins',
];

const items = [
  {
    id: 1,
    slug: 'w266bmd',
    realImageUrl: 'https://mu.lv/img/item/w266bmd.webp?13801',
    nombre: 'Wings of Dragon',
    category: 'Alas',
    race: 'Blade Master',
    nivel: '+13',
    opciones: ['+Luck', '+Ignore Defense'],
    vendedor: 'GamerX',
    precio: 2500,
    tipoPago: 'Jewel of Bless',
    auction: '12h',
    tiempoRestante: '12:25:04',
    destacado: true,
    imagenColor: 'from-red-600 to-orange-500',
  },
  {
    id: 2,
    slug: 'r8b3emi',
    realImageUrl: 'https://mu.lv/img/item/r8b3emi.webp?13801',
    nombre: 'Dragon Soul Staff',
    category: 'Armas y Escudo',
    race: 'Soul Master',
    nivel: '+11',
    opciones: ['+Luck', '+Excellent DMG Rate 10%'],
    vendedor: 'Merlín',
    precio: 1800,
    tipoPago: 'Jewel of Soul',
    auction: '6h',
    tiempoRestante: '06:14:20',
    destacado: true,
    imagenColor: 'from-blue-600 to-indigo-500',
  },
  {
    id: 3,
    slug: 'divine-sword-of-archangel',
    realImageUrl: './items/divine-sword-of-arcangel.png',
    nombre: 'Divine Sword of Archangel',
    category: 'Armas y Escudo',
    race: 'Lord Emperor',
    nivel: '+15',
    opciones: ['+Luck', '+Critical DMG +40', '+Life recovery'],
    vendedor: 'LiderClan',
    precio: 3200,
    tipoPago: 'Jewel of Chaos',
    auction: '24h',
    tiempoRestante: '23:59:55',
    destacado: true,
    imagenColor: 'from-amber-400 to-yellow-600',
  },
  {
    id: 4,
    slug: 'black-dragon-armor',
    nombre: 'Black Dragon Armor',
    category: 'Pecho',
    race: 'Duel Master',
    nivel: '+9',
    opciones: ['+Decrease Damage 4%'],
    vendedor: 'Thor',
    precio: 1200,
    tipoPago: 'Jewel of Life',
    auction: '12h',
    tiempoRestante: '11:18:03',
    destacado: true,
    imagenColor: 'from-zinc-700 to-zinc-900',
  },
  {
    id: 5,
    slug: 'divine-wing-guard',
    nombre: 'Divine Wing Guard',
    category: 'Alas',
    race: 'High Elf',
    nivel: '+14',
    opciones: ['+Critical', '+Energy Recovery'],
    vendedor: 'Aelrin',
    precio: 2200,
    tipoPago: 'Jewel of Creation',
    auction: '24h',
    tiempoRestante: '20:00:00',
    destacado: false,
    imagenColor: 'from-violet-600 to-purple-500',
  },
  {
    id: 6,
    slug: 'vanguard-helmet',
    nombre: 'Vanguard Helmet',
    category: 'Casco',
    race: 'Fist Master',
    nivel: '+12',
    opciones: ['+Defense', '+Stamina'],
    vendedor: 'Kharon',
    precio: 1400,
    tipoPago: 'Jewel of Harmony',
    auction: '6h',
    tiempoRestante: '04:12:40',
    destacado: false,
    imagenColor: 'from-cyan-600 to-sky-500',
  },
  {
    id: 7,
    slug: 'infernal-gauntlets',
    nombre: 'Infernal Gauntlets',
    category: 'Guantes',
    race: 'Dimension Master',
    nivel: '+10',
    opciones: ['+Attack Speed', '+Damage'],
    vendedor: 'Nyx',
    precio: 1350,
    tipoPago: 'Coins',
    auction: '12h',
    tiempoRestante: '09:30:18',
    destacado: false,
    imagenColor: 'from-red-700 to-rose-500',
  },
  {
    id: 8,
    slug: 'storm-leg-guards',
    nombre: 'Storm Leg Guards',
    category: 'Pantalones',
    race: 'Blade Master',
    nivel: '+12',
    opciones: ['+Reflect', '+Agility'],
    vendedor: 'Bran',
    precio: 1650,
    tipoPago: 'Coins',
    auction: '24h',
    tiempoRestante: '18:10:45',
    destacado: false,
    imagenColor: 'from-emerald-600 to-teal-500',
  },
  {
    id: 9,
    slug: 'shadow-boots',
    nombre: 'Shadow Boots',
    category: 'Botas',
    race: 'Duel Master',
    nivel: '+11',
    opciones: ['+Defense', '+Move Speed'],
    vendedor: 'Mira',
    precio: 1500,
    tipoPago: 'Jewel of Bless',
    auction: '6h',
    tiempoRestante: '03:40:12',
    destacado: false,
    imagenColor: 'from-slate-600 to-zinc-500',
  },
  {
    id: 10,
    slug: 'pet-frost-wolf',
    nombre: 'Pet: Frost Wolf',
    category: 'Mascotas',
    race: 'General',
    nivel: '+8',
    opciones: ['+HP Regen', '+Support Aura'],
    vendedor: 'Arena',
    precio: 2000,
    tipoPago: 'Jewel of Soul',
    auction: '12h',
    tiempoRestante: '11:48:32',
    destacado: false,
    imagenColor: 'from-blue-500 to-cyan-400',
  },
  {
    id: 11,
    slug: 'ring-of-moon',
    nombre: 'Ring of Moon',
    category: 'Anillos',
    race: 'General',
    nivel: '+9',
    opciones: ['+Magic Attack', '+Critical'],
    vendedor: 'Lys',
    precio: 1100,
    tipoPago: 'Jewel of Creation',
    auction: '24h',
    tiempoRestante: '22:15:00',
    destacado: false,
    imagenColor: 'from-amber-500 to-yellow-400',
  },
  {
    id: 12,
    slug: 'pendant-of-eternals',
    nombre: 'Pendant of Eternals',
    category: 'Pendientes',
    race: 'General',
    nivel: '+10',
    opciones: ['+Mana', '+Cooldown Reduce'],
    vendedor: 'Selene',
    precio: 2100,
    tipoPago: 'Jewel of Harmony',
    auction: '12h',
    tiempoRestante: '08:05:09',
    destacado: false,
    imagenColor: 'from-pink-500 to-fuchsia-500',
  },
];

const emptySlots = Array.from({ length: 24 }, (_, index) => index);

export default function Marketplace() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVault, setShowVault] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Alas');
  const [selectedRace, setSelectedRace] = useState('Blade Master');
  const [selectedPayment, setSelectedPayment] = useState('Jewel of Bless');

  const raceFilteredCategories = useMemo(
    () => [
      'Alas',
      'Armas y Escudo',
      'Casco',
      'Pecho',
      'Guantes',
      'Pantalones',
      'Botas',
    ],
    [],
  );

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const sameCategory = item.category === selectedCategory;
      const sameRace = item.race === selectedRace || item.race === 'General';
      const isRaceRelevant = raceFilteredCategories.includes(selectedCategory);

      if (!sameCategory) return false;
      if (isRaceRelevant && !sameRace) return false;
      return true;
    });
  }, [selectedCategory, selectedRace, raceFilteredCategories]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % marketplaceSlides.length);
    }, 4000);

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

  const featuredItems = items.filter((item) => item.destacado).slice(0, 4);
  const needsRaceFilter = raceFilteredCategories.includes(selectedCategory);

  const getItemImage = (item: (typeof items)[number]) => item.realImageUrl || `/items/${item.slug}.png`;

  return (
    <div className="relative min-h-screen w-full bg-black text-white pt-28 pb-12 px-4 font-sans overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
                key={marketplaceSlides[currentSlide].title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={marketplaceSlides[currentSlide].image}
                  alt={marketplaceSlides[currentSlide].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-amber-400 mb-2">
                      Featured Offer
                    </p>
                    <h3 className="text-2xl sm:text-4xl font-black text-white">{marketplaceSlides[currentSlide].title}</h3>
                    <p className="mt-2 text-sm text-gray-200">{marketplaceSlides[currentSlide].subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {marketplaceSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ver oferta ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-black uppercase tracking-wider text-amber-400">Más populares</h2>
            <span className="text-[10px] uppercase tracking-wider text-gray-500">Top 4</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-4 shadow-[0_0_25px_rgba(245,158,11,0.08)]"
              >
                <div className={`relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${item.imagenColor} p-3`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25),_transparent_60%)]" />
                  <div className="relative z-10 mb-2 flex items-center justify-between text-[9px] font-black uppercase tracking-wider">
                    <span className="rounded-full border border-white/10 bg-black/50 px-2 py-1 text-amber-300">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-amber-500/30 bg-black/60 px-2 py-1 text-amber-300">
                      {item.nivel}
                    </span>
                  </div>
                  <div className="relative z-10 flex h-28 items-center justify-center">
                    <img
                      src={getItemImage(item)}
                      alt={item.nombre}
                      className="h-24 w-auto object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.65)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-400">
                    <span>{item.race}</span>
                    <span>{item.auction}</span>
                  </div>
                  <h3 className="text-lg font-black text-white">{item.nombre}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {item.opciones.map((opt) => (
                      <span key={opt} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[10px] font-bold text-cyan-300">
                        {opt}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">Comprar ahora</p>
                      <p className="text-base font-black text-amber-300">{item.precio} Coins</p>
                    </div>
                    <button className="rounded-md bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-black">
                      Comprar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
          <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-amber-400">Filtrar</p>
              <h2 className="mt-2 text-xl font-black uppercase tracking-wider text-white">Buscar por categoría</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryTabs.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    if (category === 'Mascotas' || category === 'Anillos' || category === 'Pendientes') {
                      setSelectedRace('General');
                    } else if (selectedRace === 'General') {
                      setSelectedRace('Blade Master');
                    }
                  }}
                  className={`rounded-lg border px-3 py-2 text-[10px] font-black uppercase tracking-wider transition-all ${
                    selectedCategory === category
                      ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                      : 'border-white/10 bg-black/20 text-gray-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div className="flex-1">
              {needsRaceFilter && (
                <div className="mb-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Raza</p>
                  <div className="flex flex-wrap gap-2">
                    {raceOptions.map((race) => (
                      <button
                        key={race}
                        type="button"
                        onClick={() => setSelectedRace(race)}
                        className={`rounded-lg border px-3 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                          selectedRace === race
                            ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                            : 'border-white/10 bg-zinc-900 text-gray-300 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {race}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full max-w-xs xl:w-[300px]">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Pagar con</p>
              <div className="grid grid-cols-2 gap-2">
                {paymentOptions.map((payment) => (
                  <button
                    key={payment}
                    type="button"
                    onClick={() => setSelectedPayment(payment)}
                    className={`rounded-lg border px-2 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                      selectedPayment === payment
                        ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                        : 'border-white/10 bg-zinc-900 text-gray-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {payment}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black uppercase tracking-wider text-amber-400">{selectedCategory}</h2>
            <span className="text-[10px] uppercase tracking-wider text-gray-500">{filteredItems.length} resultados</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all"
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${item.imagenColor} p-3`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.22),_transparent_60%)]" />
                  <div className="relative z-10 mb-2 flex items-center justify-between text-[9px] font-black uppercase tracking-wider">
                    <span className="rounded-full border border-white/10 bg-black/50 px-2 py-1 text-amber-300">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-amber-500/40 bg-black/60 px-2 py-1 text-amber-300">
                      {item.nivel}
                    </span>
                  </div>
                  <div className="relative z-10 flex h-36 items-center justify-center">
                    <img
                      src={getItemImage(item)}
                      alt={item.nombre}
                      className="h-32 w-auto object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.7)]"
                    />
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-400">
                    <span>{item.race}</span>
                    <span>{item.vendedor}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.opciones.map((opt) => (
                      <span key={opt} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[10px] font-bold text-cyan-300">
                        {opt}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-lg border border-white/10 bg-zinc-900/70 p-2 text-[10px] uppercase tracking-wider text-gray-300">
                    <div className="flex items-center justify-between">
                      <span>Subasta</span>
                      <span className="text-amber-300">{item.auction}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Comprar ahora</p>
                    <p className="mt-1 text-lg font-black text-white">
                      {item.precio} <span className="text-amber-300">{selectedPayment}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-black"
                  >
                    Comprar ahora
                  </button>
                </div>

                <div className="border-t border-white/10 bg-black/30 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Tiempo restante: {item.tiempoRestante}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
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
