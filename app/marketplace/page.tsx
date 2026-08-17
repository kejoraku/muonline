// app/marketplace/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function Marketplace() {
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

  return (
    <div className="relative min-h-screen w-full bg-black text-white pt-28 pb-12 px-4 font-sans overflow-hidden">
      
      {/* Luces sutiles en las esquinas */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TÍTULO PRINCIPAL */}
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
          
          {/* BOTÓN SIMULADO DE VENDER */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 bg-transparent border border-amber-500/50 hover:bg-amber-500 hover:text-black text-amber-500 px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all"
          >
            Publicar un Ítem
          </motion.button>
        </div>

        {/* CUADRÍCULA DE ARTÍCULOS */}
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
              
              {/* VISTA PREVIA DEL ÍTEM (Simula la silueta brillante en 3D del juego) */}
              <div className={`relative h-44 w-full bg-gradient-to-br ${item.imagenColor} opacity-70 flex items-center justify-center p-4 border-b border-white/5`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                
                {/* Nivel flotante (ej: +13) */}
                <span className="absolute top-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-black tracking-wider text-amber-400 border border-amber-400/20 shadow-md">
                  {item.nivel}
                </span>

                {/* Texto temporal en lo que pones una imagen real */}
                <span className="relative z-10 text-center font-black uppercase text-xs tracking-widest text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {item.nombre}
                </span>
              </div>

              {/* DETALLES DEL CONTENIDO */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-white line-clamp-1 mb-2">
                    {item.nombre} <span className="text-amber-500">{item.nivel}</span>
                  </h3>
                  
                  {/* OPCIONES EXCELLENT / LUCK */}
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

                {/* SECCIÓN DE PRECIO Y ACCIÓN */}
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
    </div>
  );
}
