'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { QrCode, MapPin, Warehouse, ShoppingCart, ShieldCheck, ArrowRight, Ship, Factory, Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';

const journeySteps = [
  {
    title: "The Farm Origin",
    description: "Every product starts with a verified farmer identity and GPS-tagged farm coordinates.",
    image: "/image.jpg",
    detail: "GPS: 5.6037° N, 0.1870° W",
    status: "Verified",
    color: "bg-emerald-500"
  },
  {
    title: "Quality Processing",
    description: "Harvesting and processing data is logged, ensuring adherence to global safety standards.",
    image: "/image2.jpg",
    detail: "Batch #FG-2024-089",
    status: "Certified",
    color: "bg-blue-500"
  },
  {
    title: "Secure Warehousing",
    description: "Real-time inventory tracking monitors batch flow and storage conditions.",
    image: "/image3.jpg",
    detail: "Location: Sector B-12",
    status: "Stored",
    color: "bg-amber-500"
  },
  {
    title: "Global Logistics",
    description: "Buyers scan a unique QR code to access the complete verified history of their produce.",
    image: "/image5.jpg",
    detail: "Destination: Rotterdam",
    status: "In Transit",
    color: "bg-primary"
  }
];

export function TraceabilitySection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <section id="traceability" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-black text-primary mb-8 tracking-[0.2em] uppercase"
            >
              The Trust Engine
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1]">
              Every Fruit Has a <span className="text-primary text-glow italic">Story.</span>
            </h2>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We bridge the gap between African soil and global tables. Our traceability engine ensures absolute transparency at every node of the supply chain.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Real-time GPS Tracking</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Blockchain Verified</span>
               </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative aspect-square max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[5rem] blur-[80px] -z-10 animate-pulse" />
              
              <div className="w-full h-full bg-white border-8 border-slate-50 shadow-premium rounded-[4rem] flex flex-col items-center justify-center p-12 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse" />
                    <QrCode className="w-40 h-48 text-slate-900 group-hover:text-primary transition-all duration-700 group-hover:scale-105 relative z-10" />
                 </div>

                 <div className="text-center space-y-4 relative z-10">
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">Scan the Proof</h4>
                    <p className="text-slate-500 text-sm font-medium max-w-[200px] mx-auto">See the journey from soil to smartphone in one click.</p>
                    <Link href="/trace" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-3 transition-all pt-4">
                       Launch Demo Trace <ArrowRight className="w-4 h-4" />
                    </Link>
                 </div>
              </div>
              
              {/* Floating Verification Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-slate-900 shadow-2xl rounded-3xl p-6 border border-white/10 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1.5">Provenance</div>
                  <div className="text-base font-bold text-white leading-none tracking-tight">100% Verified</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="relative pt-20">
          {/* Animated Path */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -z-10 hidden lg:block overflow-hidden rounded-full transform -translate-y-1/2">
            <motion.div 
              style={{ scaleX: pathLength }}
              className="w-full h-full bg-primary origin-left"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Step Marker */}
                <div className="hidden lg:flex absolute -top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-slate-100 z-10 items-center justify-center group-hover:border-primary transition-colors duration-500">
                   <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-primary transition-colors" />
                </div>

                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -z-10 group-hover:bg-primary/5 transition-colors duration-700" />
                  
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 group-hover:scale-[1.02] transition-transform duration-700 shadow-xl">
                     <img 
                       src={step.image} 
                       alt={step.title} 
                       className="w-full h-full object-cover"
                     />
                     <div className={cn("absolute inset-0 opacity-20", step.color)} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">{step.title}</h3>
                  </div>
                  
                  <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium flex-grow">
                    {step.description}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-50 mt-auto">
                    <div className="flex items-center justify-between">
                       <div>
                          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1.5">Node Identity</div>
                          <div className="text-xs font-bold text-slate-800 font-mono bg-slate-50 px-2 py-1 rounded-md border border-slate-100">{step.detail}</div>
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1.5 bg-primary/5 rounded-full ring-1 ring-primary/10">{step.status}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
