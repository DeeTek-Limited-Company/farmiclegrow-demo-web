'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, BarChart3, Globe, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

const screenshots = [
  {
    url: '/agro-1.jpg',
    title: 'Field Overview',
    description: 'Real-time monitoring of assigned districts and farmer validation status.'
  },
  {
    url: '/agro-2.jpg',
    title: 'Supply Chain Nodes',
    description: 'Tracking produce from unvalidated to harvested status.'
  },
  {
    url: '/agro-3.jpg',
    title: 'Farmer Database',
    description: 'Centralized record management for every smallholder in the network.'
  },
  {
    url: '/agro-4.jpg',
    title: 'Detailed Profiles',
    description: 'Deep-dive into individual farmer metrics and historical performance.'
  },
  {
    url: '/agro-5.jpg',
    title: 'Onboarding Wizard',
    description: 'Streamlined mobile-first registration for agronomists in the field.'
  }
];

export function DashboardPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % screenshots.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-black text-primary mb-8 tracking-[0.2em] uppercase"
          >
            Digital Field Tools
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1]">
             The Platform <span className="text-primary text-glow italic">Behind the Proof.</span>
          </h2>
          
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
            Go inside the FarmicleGrow portal. Our tools empower agronomists to capture high-fidelity data directly from the source.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
           {/* Device Frame */}
           <div className="relative p-2 md:p-4 rounded-[2rem] md:rounded-[3rem] bg-slate-900 shadow-premium border-[8px] md:border-[16px] border-slate-50 overflow-hidden group">
              <div className="aspect-[16/10] bg-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center bg-slate-950"
                    >
                       <img 
                         src={screenshots[activeIndex].url} 
                         alt={screenshots[activeIndex].title}
                         className="max-w-full max-h-full w-auto h-auto object-contain"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                    </motion.div>
                 </AnimatePresence>

                 {/* Navigation Controls */}
                 <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 z-10">
                    <button 
                      onClick={prev}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all"
                    >
                       <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={next}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all"
                    >
                       <ChevronRight className="w-6 h-6" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Floating Info Card */}
           <motion.div 
             key={`info-${activeIndex}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="absolute -bottom-10 -right-4 md:-right-10 bg-white shadow-2xl rounded-3xl p-8 border border-slate-100 max-w-sm z-20 hidden md:block"
           >
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                 </div>
                 <h4 className="text-lg font-black text-slate-900 tracking-tight">{screenshots[activeIndex].title}</h4>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                 {screenshots[activeIndex].description}
              </p>
           </motion.div>

           {/* Indicator Dots */}
           <div className="flex justify-center gap-3 mt-16">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-primary' : 'w-2 bg-slate-200'}`}
                />
              ))}
           </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto text-center">
           <div>
              <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">Offline</div>
              <div className="text-xs font-black text-primary uppercase tracking-widest">First Architecture</div>
           </div>
           <div>
              <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">GPS</div>
              <div className="text-xs font-black text-primary uppercase tracking-widest">Accuracy ±2m</div>
           </div>
           <div>
              <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">Sync</div>
              <div className="text-xs font-black text-primary uppercase tracking-widest">Delta Protocols</div>
           </div>
           <div>
              <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">AES</div>
              <div className="text-xs font-black text-primary uppercase tracking-widest">256-bit Encrypted</div>
           </div>
        </div>
      </div>
    </section>
  );
}
