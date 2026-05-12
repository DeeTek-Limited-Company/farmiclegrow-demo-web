'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Leaf, Package, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const metrics = [
  {
    value: "+24%",
    label: "Income Growth",
    description: "Average increase in smallholder farmer annual earnings.",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    value: "1,200",
    label: "Tons CO2 Offset",
    description: "Carbon reduction through sustainable farming practices.",
    icon: Leaf,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    value: "500+",
    label: "Women Employed",
    description: "Women integrated into the formal agricultural supply chain.",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    value: "15k+",
    label: "Tons Supplied",
    description: "Verified premium produce delivered to global markets.",
    icon: Package,
    color: "text-amber-400",
    bg: "bg-amber-500/10"
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(21,128,61,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black text-primary tracking-[0.2em] uppercase mb-8"
          >
            The Mission in Numbers
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1]">
            Quantifiable <span className="text-primary text-glow italic">Empowerment.</span>
          </h2>

          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            We don't just bridge markets; we transform lives. Every metric below represents a real-world shift in the African agricultural landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8", metric.bg)}>
                 <metric.icon className={cn("w-7 h-7", metric.color)} />
              </div>

              <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none">
                {metric.value}
              </div>
              <div className="text-sm font-black text-primary mb-4 uppercase tracking-widest">
                {metric.label}
              </div>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-1 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-emerald-500/50 to-primary/50 rounded-[4rem] blur-2xl opacity-20" />
          <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-16 rounded-[4rem] text-center relative z-10">
            <div className="flex justify-center mb-8">
               <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-800 bg-slate-700 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Farmer" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-slate-800 bg-primary flex items-center justify-center text-white font-bold text-sm">
                     +12k
                  </div>
               </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight max-w-2xl mx-auto">
               Join the fastest growing network of <span className="text-primary italic">verified</span> smallholder farmers in Africa.
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8">
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-slate-300 font-medium">GPS Tagged Farms</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-slate-300 font-medium">Digital Passports</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-slate-300 font-medium">Market Connectivity</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
