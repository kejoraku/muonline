// app/descargas/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function Descargas() {
  const enlaces = [
    { servidor: 'Google Drive', tamano: '1.2 GB', version: 'v1.0.32', link: '#', recomendado: true },
    { servidor: 'MEGA', tamano: '1.2 GB', version: 'v1.0.32', link: '#', recomendado: false },
    { servidor: 'MediaFire', tamano: '1.2 GB', version: 'v1.0.32', link: '#', recomendado: false },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white pt-28 pb-12 px-4 font-sans overflow-hidden">
      
      {/* Luz de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 uppercase mb-3"
          >
            Descargas del Cliente
          </motion.h1>
          <p className="text-gray-400 text-sm">Descarga el cliente completo oficial para empezar tu aventura en el continente.</p>
        </div>

        {/* TARJETAS DE DESCARGA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {enlaces.map((item, index) => (
            <motion.div
              key={item.servidor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: item.recomendado ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.2)' }}
              className={`relative bg-zinc-900/50 backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-between transition-colors ${
                item.recomendado ? 'border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent' : 'border-white/5'
              }`}
            >
              {item.recomendado && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black uppercase px-3 py-0.5 rounded-full tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                  Recomendado
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{item.servidor}</h3>
                <p className="text-xs text-gray-500">Versión: {item.version} | Peso: {item.tamano}</p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={item.link}
                className={`w-full text-center font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all ${
                  item.recomendado 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-md' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Descargar directo
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* TABLA DE REQUISITOS DEL SISTEMA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-950/80 border border-white/5 rounded-xl p-6 md:p-8"
        >
          <h2 className="text-xl font-black uppercase tracking-wider text-amber-500 mb-6 border-b border-white/10 pb-3">Requisitos del Sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            
            {/* MINIMOS */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs text-gray-400">Requisitos Mínimos</h4>
              <ul className="space-y-3 text-gray-400">
                <li><strong className="text-white font-medium">SO:</strong> Windows 7 / 8 / 10 / 11</li>
                <li><strong className="text-white font-medium">Procesador:</strong> Intel Core i3 o equivalente</li>
                <li><strong className="text-white font-medium">Memoria RAM:</strong> 4 GB RAM</li>
                <li><strong className="text-white font-medium">Gráficos:</strong> Intel HD Graphics o superior</li>
                <li><strong className="text-white font-medium">Almacenamiento:</strong> 3 GB de espacio libre</li>
              </ul>
            </div>

            {/* RECOMENDADOS */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs text-gray-400">Requisitos Recomendados</h4>
              <ul className="space-y-3 text-gray-400">
                <li><strong className="text-white font-medium">SO:</strong> Windows 10 / 11 (64-bit)</li>
                <li><strong className="text-white font-medium">Procesador:</strong> Intel Core i5 o superior</li>
                <li><strong className="text-white font-medium">Memoria RAM:</strong> 8 GB RAM</li>
                <li><strong className="text-white font-medium">Gráficos:</strong> NVIDIA GTX 1050 / AMD equivalente</li>
                <li><strong className="text-white font-medium">Almacenamiento:</strong> 5 GB de espacio libre</li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
