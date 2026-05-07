'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Sparkles } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section id="about" className="py-32 bg-[#050A06] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
            >
              Our Foundation
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tight leading-[1.1]">
              Built on <span className="text-primary">Trust</span> and Sustainable Growth
            </h2>
            
            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
              FarmicleGrow is more than just a marketplace. We are a digital ecosystem dedicated to transforming African agriculture into a transparent and profitable engine for growth.
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                     <Target className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">
                        To empower smallholder farmers with market access, digital tools, and data-driven insights to grow what the market needs, reduce food waste, and increase income.
                     </p>
                  </div>
               </div>

               <div className="flex gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                     <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">
                        To be Africa’s most trusted digital marketplace that transforms agriculture into a sustainable, profitable, and connected ecosystem for farmers and buyers.
                     </p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/10 border border-white/10 p-12 flex flex-col items-center justify-center text-center">
                <Sparkles className="w-20 h-20 text-primary mb-8" />
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight">The FarmicleGrow Promise</h3>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 text-left">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-slate-300 font-medium text-lg italic">"Empowering Farmers"</span>
                   </div>
                   <div className="flex items-center gap-4 text-left">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-slate-300 font-medium text-lg italic">"Connecting Markets"</span>
                   </div>
                   <div className="flex items-center gap-4 text-left">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-slate-300 font-medium text-lg italic">"Delivering Quality"</span>
                   </div>
                </div>
             </div>
             
             {/* Floating stats card */}
             <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-white shadow-2xl border border-slate-100 max-w-[240px]"
             >
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Platform Goal</div>
                <div className="text-2xl font-black text-slate-900 mb-1">Sustainable</div>
                <div className="text-sm font-bold text-primary">Connected Ecosystem</div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
