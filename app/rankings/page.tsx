'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Rankings() {
  const rankingGroups = [
    {
      name: 'Asesino',
      players: [
        { name: 'Night Shade', score: '1,280 pts', guild: 'Shadow Legion' },
        { name: 'Silent Fang', score: '1,140 pts', guild: 'Moon Hunter' },
        { name: 'Black Reaper', score: '980 pts', guild: 'Dark Echo' },
      ],
    },
    {
      name: 'Duelista',
      players: [
        { name: 'Storm Blade', score: '1,330 pts', guild: 'Vortex' },
        { name: 'Frost Duel', score: '1,200 pts', guild: 'Silver Rift' },
        { name: 'Titan Echo', score: '1,080 pts', guild: 'Drift Union' },
      ],
    },
    {
      name: 'Guild Score',
      players: [
        { name: 'Abyssal Guild', score: '48,420 pts', guild: 'Guild Master: Varek' },
        { name: 'Solar Fury', score: '43,680 pts', guild: 'Guild Master: Lyra' },
        { name: 'Iron Dominion', score: '41,790 pts', guild: 'Guild Master: Jor' },
      ],
    },
    {
      name: 'Blade Master',
      players: [
        { name: 'Kain', score: '2,540 pts', guild: 'Blazing Edge' },
        { name: 'Vero', score: '2,350 pts', guild: 'Stormwatch' },
        { name: 'Rex', score: '2,190 pts', guild: 'Onyx Fate' },
      ],
    },
    {
      name: 'Soul Master',
      players: [
        { name: 'Sable', score: '2,440 pts', guild: 'Mystic Gate' },
        { name: 'Astra', score: '2,300 pts', guild: 'Astral Echo' },
        { name: 'Nyx', score: '2,180 pts', guild: 'Night Bloom' },
      ],
    },
    {
      name: 'High Elf',
      players: [
        { name: 'Lunara', score: '2,390 pts', guild: 'Moon Guard' },
        { name: 'Elowen', score: '2,260 pts', guild: 'Eldreth' },
        { name: 'Syrin', score: '2,150 pts', guild: 'Azure Vale' },
      ],
    },
    {
      name: 'Lord Emperor',
      players: [
        { name: 'Imperion', score: '2,680 pts', guild: 'Crown Realm' },
        { name: 'Aurel', score: '2,520 pts', guild: 'Golden Throne' },
        { name: 'Valen', score: '2,470 pts', guild: 'Ember Crown' },
      ],
    },
    {
      name: 'Fist Master',
      players: [
        { name: 'Drako', score: '2,310 pts', guild: 'Iron Palm' },
        { name: 'Jin', score: '2,180 pts', guild: 'Crimson Knuckles' },
        { name: 'Torren', score: '2,040 pts', guild: 'Stone Tiger' },
      ],
    },
    {
      name: 'Dimension Master',
      players: [
        { name: 'Quasar', score: '2,630 pts', guild: 'Void Orbit' },
        { name: 'Nova', score: '2,500 pts', guild: 'Warp Trail' },
        { name: 'Chronos', score: '2,360 pts', guild: 'Aether Gate' },
      ],
    },
    {
      name: 'Duel Master',
      players: [
        { name: 'Valkor', score: '2,710 pts', guild: 'Arena Crown' },
        { name: 'Iris', score: '2,560 pts', guild: 'Shockline' },
        { name: 'Xen', score: '2,430 pts', guild: 'Final Clash' },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(rankingGroups[0].name);
  const currentGroup = rankingGroups.find((group) => group.name === activeCategory) || rankingGroups[0];

  return (
    <div className="relative min-h-screen w-full bg-black text-white pt-28 pb-12 px-4 font-sans overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 uppercase mb-3"
          >
            Rankings
          </motion.h1>
          <p className="text-gray-400 text-sm">Revisa las posiciones más altas del servidor y compite por el liderazgo.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {rankingGroups.map((group) => (
            <button
              key={group.name}
              type="button"
              onClick={() => setActiveCategory(group.name)}
              className={`rounded-xl border px-3 py-3 text-center transition-all ${
                activeCategory === group.name
                  ? 'border-amber-500/50 bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.12)]'
                  : 'border-white/10 bg-zinc-900/60 text-gray-300 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className="block text-[11px] font-black uppercase tracking-wider">{group.name}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={currentGroup.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 md:p-7"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black uppercase tracking-wider text-amber-400">{currentGroup.name}</h2>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
              Top 3
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentGroup.players.map((player, index) => (
              <div
                key={player.name}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                    index === 0 ? 'bg-amber-400 text-black' : index === 1 ? 'bg-gray-300 text-black' : 'bg-orange-700 text-white'
                  }`}>
                    #{index + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">Ranking</span>
                </div>

                <h3 className="text-lg font-black text-white mb-2">{player.name}</h3>
                <p className="text-sm text-amber-300 font-bold">{player.score}</p>
                <p className="text-xs text-gray-400 mt-3 uppercase tracking-wider">{player.guild}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
