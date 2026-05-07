'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, BarChart3, Globe } from 'lucide-react';

export function DashboardPreview() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
          >
            Platform Preview
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            The Power of <span className="text-primary">Data</span> at Your Fingertips
          </h2>
          
          <p className="text-lg text-slate-600 font-medium">
            Our multi-role digital platform provides agronomists, farmers, and administrators with the real-time insights needed to optimize the agricultural supply chain.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto p-4 md:p-8 rounded-[3rem] bg-slate-900 shadow-2xl border-8 border-slate-100 overflow-hidden group">
          {/* Mockup Dashboard UI */}
          <div className="flex h-[400px] md:h-[600px] gap-4">
             {/* Sidebar Sidebar */}
             <div className="w-16 md:w-64 bg-white/5 rounded-2xl p-4 hidden md:flex flex-col gap-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-8">
                   <LayoutDashboard className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-full bg-white/10 rounded-full" />
                   <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                   <div className="h-4 w-5/6 bg-white/10 rounded-full" />
                </div>
             </div>
             
             {/* Main Content */}
             <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="h-32 bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                           <BarChart3 className="w-4 h-4 text-primary" />
                        </div>
                        <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                     </div>
                   ))}
                </div>
                
                <div className="flex-1 bg-white/5 rounded-3xl border border-white/10 p-8 relative overflow-hidden">
                   <div className="flex items-center justify-between mb-8">
                      <div className="h-6 w-32 bg-white/20 rounded-full" />
                      <div className="h-10 w-24 bg-primary rounded-xl" />
                   </div>
                   
                   {/* Abstract Graph */}
                   <div className="absolute inset-0 flex items-end px-8 pb-8 gap-4 opacity-30">
                      {[40, 70, 45, 90, 65, 80, 55, 75].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          className="flex-1 bg-primary rounded-t-lg"
                        />
                      ))}
                   </div>
                   
                   <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                        <Globe className="w-10 h-10 text-primary animate-pulse" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Global Analytics Enabled</h4>
                      <p className="text-slate-400 text-sm max-w-sm">Real-time mapping of over 12,000 hectares of sustainable farmland across Africa.</p>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Overlay text */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                   {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800" />
                   ))}
                </div>
                <div className="text-sm font-bold text-white">Joined by 5,000+ Verified Farmers</div>
             </div>
             
             <button className="px-8 h-14 rounded-2xl bg-white text-slate-900 font-black hover:bg-primary hover:text-white transition-all shadow-2xl">
                Request Demo Access
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
