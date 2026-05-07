'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { QrCode, MapPin, Warehouse, ShoppingCart, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const journeySteps = [
  {
    title: "The Farm Origin",
    description: "Every product starts with a verified farmer identity and GPS-tagged farm coordinates.",
    icon: MapPin,
    detail: "GPS: 5.6037° N, 0.1870° W",
    status: "Verified",
    color: "bg-emerald-500"
  },
  {
    title: "Quality Processing",
    description: "Harvesting and processing data is logged, ensuring adherence to global safety standards.",
    icon: ShieldCheck,
    detail: "Batch #FG-2024-089",
    status: "Certified",
    color: "bg-blue-500"
  },
  {
    title: "Secure Warehousing",
    description: "Real-time inventory tracking monitors batch flow and storage conditions.",
    icon: Warehouse,
    detail: "Location: Sector B-12",
    status: "Stored",
    color: "bg-amber-500"
  },
  {
    title: "Final Delivery",
    description: "Buyers scan a unique QR code to access the complete verified history of their produce.",
    icon: QrCode,
    detail: "Delivered to: Global Partner",
    status: "Traceable",
    color: "bg-primary"
  }
];

export function TraceabilitySection() {
  return (
    <section id="traceability" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
            >
              The USP
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Track Your Food From <span className="text-primary text-glow">Farm to Table</span>
            </h2>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              We provide absolute transparency. Every product on FarmicleGrow comes with a digital footprint, ensuring you know exactly where your food comes from and how it was handled.
            </p>
          </div>
          
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[4rem] blur-3xl -z-10" />
              <Link href="/trace" className="block">
                <div className="w-full h-full bg-slate-50 border-8 border-white shadow-2xl rounded-[3rem] flex items-center justify-center p-12 group cursor-pointer overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <QrCode className="w-48 h-48 text-primary/20 group-hover:text-primary transition-all duration-700 group-hover:scale-110" />
                   <div className="absolute bottom-8 text-center">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">Try Demo Trace</span>
                   </div>
                </div>
              </Link>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</div>
                  <div className="text-sm font-bold text-slate-900 leading-none">100% Verified</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 -z-10 hidden lg:block" />
          
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500",
                step.color
              )}>
                <step.icon className="w-7 h-7" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 px-2 py-1 bg-primary/5 rounded-md">{step.status}</span>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium flex-grow">
                {step.description}
              </p>
              
              <div className="pt-6 border-t border-slate-50 mt-auto">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Verified Insight</div>
                <div className="text-xs font-bold text-slate-700 font-mono">{step.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
