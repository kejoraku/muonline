'use client';

import { motion } from 'framer-motion';

export default function Descargas() {
  const clientOptions = [
    { label: 'Cliente con sonido', tag: 'Audio activado', href: '#', highlight: true },
    { label: 'Cliente sin sonido', tag: 'Sin audio', href: '#', highlight: false },
  ];

  const patchOptions = [
    { label: 'Parche con sonido', tag: 'Update + audio', href: '#', highlight: true },
    { label: 'Parche sin sonido', tag: 'Update sin audio', href: '#', highlight: false },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white pt-28 pb-16 px-4 font-sans overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 uppercase mb-3"
          >
            Descargas
          </motion.h1>
          <p className="text-gray-400 text-sm">Seleccioná la versión que prefieras para iniciar tu aventura.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-6 shadow-[0_0_30px_rgba(245,158,11,0.08)]"
          >
            <h2 className="text-xl font-black uppercase tracking-wider text-amber-400 mb-5">Cliente</h2>
            <div className="grid gap-4">
              {clientOptions.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={item.href}
                  className={`group rounded-xl border p-4 transition-all ${
                    item.highlight
                      ? 'border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-orange-500/5'
                      : 'border-white/10 bg-zinc-900/70 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-white">{item.label}</p>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1">{item.tag}</p>
                    </div>
                    <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      Descarga
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
          >
            <h2 className="text-xl font-black uppercase tracking-wider text-amber-400 mb-5">Parche</h2>
            <div className="grid gap-4">
              {patchOptions.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={item.href}
                  className={`group rounded-xl border p-4 transition-all ${
                    item.highlight
                      ? 'border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-orange-500/5'
                      : 'border-white/10 bg-zinc-900/70 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-white">{item.label}</p>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1">{item.tag}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300">
                      Update
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-950/80 border border-white/5 rounded-xl p-6 md:p-8"
        >
          <h2 className="text-xl font-black uppercase tracking-wider text-amber-500 mb-6 border-b border-white/10 pb-3">Requisitos del Sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs text-gray-400">Mínimos</h4>
              <ul className="space-y-3 text-gray-400">
                <li><strong className="text-white font-medium">SO:</strong> Windows 7 / 8 / 10 / 11</li>
                <li><strong className="text-white font-medium">Procesador:</strong> Intel Core i3 o equivalente</li>
                <li><strong className="text-white font-medium">Memoria RAM:</strong> 4 GB RAM</li>
                <li><strong className="text-white font-medium">Gráficos:</strong> Intel HD Graphics o superior</li>
                <li><strong className="text-white font-medium">Almacenamiento:</strong> 3 GB de espacio libre</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs text-gray-400">Recomendados</h4>
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
