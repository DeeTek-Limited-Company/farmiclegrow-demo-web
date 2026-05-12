'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Calendar, Package } from 'lucide-react';
import { motion } from 'framer-motion';

interface TraceHeroProps {
  code: string;
  crop: string;
  quantity: string;
  date: string;
  isLive: boolean;
}

export function TraceHero({ code, crop, quantity, date, isLive }: TraceHeroProps) {
  return (
    <section className="pt-32 pb-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Abstract elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase bg-primary text-white border-0 shadow-lg shadow-primary/20">
                {isLive ? "Live Verification" : "Demo Verification"}
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase border-white/20 text-white/60">
                ID: {code}
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]"
            >
              The Journey of <br />
              <span className="text-primary text-glow">{crop}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-xl text-slate-400 font-medium max-w-xl leading-relaxed"
            >
              This batch has been digitally verified and tracked from the Ghanaian soil to your hands. Explore the full story below.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 lg:mb-2"
          >
            <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
              <div className="flex items-center gap-3 mb-1">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Harvest Date</span>
              </div>
              <div className="text-lg font-black">{date}</div>
            </div>
            <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
              <div className="flex items-center gap-3 mb-1">
                <Package className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Batch Yield</span>
              </div>
              <div className="text-lg font-black">{quantity} Units</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex items-center gap-4 py-6 border-t border-white/10"
        >
          <div className="flex -space-x-3">
             {[1,2,3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-black overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Farmer${i}`} alt="Verification member" />
               </div>
             ))}
          </div>
          <div className="text-xs font-bold text-slate-400">
            <span className="text-white">Digitally Signed</span> by 3 Supply Chain Officers
          </div>
          <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Secure Record
          </div>
        </motion.div>
      </div>
    </section>
  );
}
