// app/login/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

const MOCK_USER = {
  username: 'raniero',
  password: 'giusto21',
};

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      localStorage.setItem('mu_user', JSON.stringify({ username: MOCK_USER.username }));
      const redirectTo = searchParams.get('redirect') || '/';
      router.push(redirectTo);
      return;
    }

    setError('Usuario o contraseña incorrectos. Prueba con raniero / giusto21');
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-4 font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-zinc-950/80 border border-white/5 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Ingresar</h2>
          <p className="text-gray-500 text-xs mt-1">Ingresa tus credenciales para administrar tu cuenta.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu ID de juego"
              className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Contraseña</label>
              <a href="#" className="text-[10px] text-gray-500 hover:text-white transition-colors">¿La olvidaste?</a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>

          {error && (
            <p className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-[11px] text-red-300">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between text-[11px] text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5 accent-amber-500" />
              Recordarme
            </label>
            <a href="/register" className="text-amber-400 hover:text-amber-300">Crear cuenta</a>
          </div>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black uppercase tracking-wider py-3.5 rounded-lg text-xs shadow-md transition-all"
            >
              Conectarse
            </motion.button>
          </div>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Usuario demo: <span className="text-amber-300 font-bold">raniero</span> / <span className="text-amber-300 font-bold">giusto21</span>
        </p>

        <p className="text-center text-xs text-gray-500 mt-3">
          ¿Nuevo en el servidor? <a href="/register" className="text-orange-500 hover:underline">Regístrate ahora</a>
        </p>
      </motion.div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-black text-white">Cargando...</div>}>
      <LoginContent />
    </Suspense>
  );
}
