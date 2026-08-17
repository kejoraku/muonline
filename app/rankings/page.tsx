// app/rankings/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Rankings() {
  const [activeTab, setActiveTab] = useState('jugadores');

  const jugadores = [
    { rank: 1, name: 'Conqueror', class: 'Blade Knight', resets: 150, nivel: 400, status: 'online' },
    { rank: 2, name: 'Lumina', class: 'High Elf', resets: 142, nivel: 398, status: 'online' },
    { rank: 3, name: 'DarkVoid', class: 'Soul Master', resets: 135, nivel: 400, status: 'offline' },
    { rank: 4, name: 'Kaelthas', class: 'Magic Gladiator', resets: 120, nivel: 385, status: 'online' },
    { rank: 5, name: 'SlayerX', class: 'Dark Lord', resets: 115, nivel: 390, status: 'offline' },
  ];

  const clanes = [
    { rank: 1, name: 'Valhalla', master: 'Conqueror', miembros: 40, score: 25500 },
    { rank: 2, name: 'Illuminati', master: 'Lumina', miembros: 38, score: 22100 },
    { rank: 3, name: 'Shadows', master: 'DarkVoid', miembros: 35, score: 19800 },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white pt-28 pb-12 px-4 font-sans overflow-hidden">
      
      {/* Luz de fondo ambiental */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* TÍTULO */}
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 uppercase mb-3"
          >
            Tablas de Posiciones
          </motion.h1>
          <p className="text-gray-400 text-sm">Compite contra los mejores guerreros del continente y asegura tu lugar en la historia.</p>
        </div>

        {/* SELECTOR DE PESTAÑAS (TABS) */}
        <div className="flex justify-center space-x-2 mb-8 bg-zinc-950 p-1.5 rounded-lg border border-white/5 max-w-xs mx-auto">
          {['jugadores', 'clanes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 py-2 text-xs font-black tracking-wider uppercase rounded-md transition-colors duration-300 z-10 ${
                activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-md -z-10 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* TABLAS ANIMADAS */}
        <div className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'jugadores' ? (
              <motion.div
                key="jugadores"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="overflow-x-auto"
              >
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-zinc-950/50 text-gray-400 font-bold uppercase tracking-wider text-xs">
                      <th className="py-4 px-6 text-center w-16">Pos</th>
                      <th className="py-4 px-6">Nombre</th>
                      <th className="py-4 px-6">Clase</th>
                      <th className="py-4 px-6 text-center">Nivel</th>
                      <th className="py-4 px-6 text-center">Resets</th>
                      <th className="py-4 px-6 text-center w-24">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {jugadores.map((player) => (
                      <tr key={player.name} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="py-4 px-6 text-center font-black">
                          {player.rank <= 3 ? (
                            <span className={`inline-block w-6 h-6 rounded-full text-xs leading-6 text-center text-black font-black ${
                              player.rank === 1 ? 'bg-amber-400' : player.rank === 2 ? 'bg-gray-300' : 'bg-amber-700'
                            }`}>
                              {player.rank}
                            </span>
                          ) : (
                            <span className="text-gray-500">{player.rank}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 font-bold group-hover:text-amber-400 transition-colors">{player.name}</td>
                        <td className="py-4 px-6 text-gray-400">{player.class}</td>
                        <td className="py-4 px-6 text-center text-gray-300">{player.nivel}</td>
                        <td className="py-4 px-6 text-center font-bold text-amber-500">{player.resets}</td>
                        <td className="py-4 px-6 text-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${player.status === 'online' ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-zinc-600'}`} />
                          <span className="text-xs uppercase font-medium tracking-wider text-gray-500">{player.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ) : (
              <motion.div
                key="clanes"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="overflow-x-auto"
              >
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-zinc-950/50 text-gray-400 font-bold uppercase tracking-wider text-xs">
                      <th className="py-4 px-6 text-center w-16">Pos</th>
                      <th className="py-4 px-6">Nombre del Clan</th>
                      <th className="py-4 px-6">Líder (Guild Master)</th>
                      <th className="py-4 px-6 text-center">Miembros</th>
                      <th className="py-4 px-6 text-center">Puntaje</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {clanes.map((guild) => (
                      <tr key={guild.name} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="py-4 px-6 text-center font-black">
                          {guild.rank <= 3 ? (
                            <span className={`inline-block w-6 h-6 rounded-full text-xs leading-6 text-center text-black font-black ${
                              guild.rank === 1 ? 'bg-amber-400' : guild.rank === 2 ? 'bg-gray-300' : 'bg-amber-700'
                            }`}>
                              {guild.rank}
                            </span>
                          ) : (
                            <span className="text-gray-500">{guild.rank}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 font-bold group-hover:text-amber-400 transition-colors">{guild.name}</td>
                        <td className="py-4 px-6 text-gray-300">{guild.master}</td>
                        <td className="py-4 px-6 text-center text-gray-400">{guild.miembros} / 40</td>
                        <td className="py-4 px-6 text-center font-bold text-amber-500">{guild.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
