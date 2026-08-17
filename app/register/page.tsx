// app/register/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function Register() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-4 font-sans overflow-hidden">
      
      {/* Luz mística de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-zinc-950/80 border border-white/5 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Crear Cuenta</h2>
          <p className="text-gray-500 text-xs mt-1">Únete hoy al servidor y comienza tu camino a la cima.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Usuario (ID)</label>
            <input type="text" placeholder="Ej: mu_warrior" className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-amber-500/50 transition-colors" />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Correo Electrónico</label>
            <input type="email" placeholder="correo@ejemplo.com" className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-amber-500/50 transition-colors" />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Contraseña</label>
            <input type="password" placeholder="••••••••" className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-amber-500/50 transition-colors" />
          </div>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black uppercase tracking-wider py-3.5 rounded-lg text-xs shadow-md transition-all"
            >
              Registrar Cuenta
            </motion.button>
          </div>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          ¿Ya tienes cuenta? <a href="/login" className="text-amber-500 hover:underline">Inicia sesión aquí</a>
        </p>
      </motion.div>
    </div>
  );
}
