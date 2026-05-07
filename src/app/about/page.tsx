'use client';

import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/landing/footer';
import { MissionVisionSection } from '@/components/landing/mission-vision-section';
import { motion } from 'framer-motion';
import { Users, Globe, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    title: "Transparency First",
    description: "We believe trust is built through data. Every step of our supply chain is open for verification.",
    icon: Globe,
  },
  {
    title: "Farmer Centric",
    description: "Our platform is designed to put the power back in the hands of smallholder farmers.",
    icon: Users,
  },
  {
    title: "Uncompromising Quality",
    description: "We only partner with farmers and buyers who share our commitment to excellence.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainable Impact",
    description: "Everything we do is measured by its long-term benefit to the environment and the community.",
    icon: Heart,
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-black text-primary tracking-[0.2em] uppercase mb-8"
          >
            Our Mission
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Pioneering a <span className="text-primary text-glow">Transparent</span> <br /> Agricultural Future
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            FarmicleGrow was founded to bridge the gap between Africa's smallholder farmers and the global marketplace using cutting-edge digital tools.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section (Reused) */}
      <MissionVisionSection />

      {/* Core Values */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Our Core Values</h2>
              <p className="text-xl text-slate-500 font-medium">The principles that guide every decision we make at FarmicleGrow.</p>
           </div>
           
           <motion.div 
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             variants={{
               hidden: { opacity: 0 },
               show: {
                 opacity: 1,
                 transition: { staggerChildren: 0.2 }
               }
             }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
           >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    show: { opacity: 1, scale: 1, y: 0 }
                  }}
                  className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-default group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <value.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* Team/Impact CTA */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10">
                  <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Ready to join our journey?</h2>
                  <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">Whether you're an investor, partner, or buyer, we're looking for those who share our vision for a connected and sustainable ecosystem.</p>
                  <button className="px-12 h-20 rounded-full bg-primary text-white font-black text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20">
                    Contact Our Partnership Team
                  </button>
               </div>
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
