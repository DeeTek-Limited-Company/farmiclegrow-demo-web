'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const clusters = [
  { top: '45%', left: '42%', label: 'West Africa Hub', count: '4,500 Farmers' },
  { top: '55%', left: '55%', label: 'East Africa Network', count: '6,200 Farmers' },
  { top: '65%', left: '48%', label: 'Central Basin', count: '1,800 Farmers' },
  { top: '35%', left: '50%', label: 'Sahel Project', count: '900 Farmers' },
];

export function FarmMap() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden border-8 border-slate-800 shadow-2xl">
      {/* Abstract Map Background (Simplified Africa Shape) */}
      <div className="absolute inset-0 opacity-20 flex items-center justify-center p-20">
         <svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
            <path d="M100 10 C 120 10, 140 30, 150 60 C 160 90, 150 120, 130 150 C 110 180, 80 190, 50 170 C 20 150, 10 110, 20 70 C 30 30, 60 10, 100 10 Z" />
         </svg>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />

      {/* Clusters */}
      {clusters.map((cluster, i) => (
        <motion.div
          key={i}
          style={{ top: cluster.top, left: cluster.left }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.2, type: 'spring' }}
          className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
        >
          {/* Animated Pulse */}
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-40 scale-150" />
          
          {/* Pin */}
          <div className="relative w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-125 transition-transform">
             <MapPin className="w-6 h-6 text-white" />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 min-w-[160px] text-center">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{cluster.label}</div>
                <div className="text-sm font-black text-slate-900">{cluster.count}</div>
                <div className="text-[10px] font-bold text-emerald-500 mt-1">● Live Data</div>
             </div>
             {/* Tooltip Arrow */}
             <div className="w-3 h-3 bg-white rotate-45 border-r border-b border-slate-100 mx-auto -mt-1.5" />
          </div>
        </motion.div>
      ))}

      {/* Map Legend */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
         <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Network Status</div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-sm font-bold">12,400+ Nodes Active</span>
            </div>
         </div>
         
         <div className="text-right">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Last Update</div>
            <div className="text-xs font-bold text-white font-mono">2026-04-25 13:08:45</div>
         </div>
      </div>
    </div>
  );
}
