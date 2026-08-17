// app/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* EFECTO DE LUZ DE FONDO (Aurora/Glow estilo Fantasía Oscura) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        
        {/* TÍTULO SECUNDARIO CON ANIMACIÓN */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
        >
          Servidor Privado S8 • Hard / Slow
        </motion.p>

        {/* LOGO O TÍTULO PRINCIPAL GIGANTE */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        >
          BIENVENIDO A <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-200">MU ONLINE</span>
        </motion.h1>

        {/* DESCRIPCIÓN DEL SERVIDOR */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Revive la gloria del mejor MMORPG. Participa en batallas épicas, conquista el Castle Siege y conviértete en el guerrero más poderoso del continente.
        </motion.p>

        {/* BOTÓN INTERACTIVO DE DESCARGA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(245, 158, 11, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="/descargas"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 text-black font-black uppercase tracking-wider px-8 py-4 rounded-md shadow-lg border border-amber-300/40 text-center transition-all"
          >
            Descargar Juego
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            href="/register"
            className="w-full sm:w-auto border border-white/20 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-md text-center transition-all"
          >
            Crear Cuenta
          </motion.a>
        </motion.div>

      </div>

    </div>
  );
}
