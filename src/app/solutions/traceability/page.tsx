'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/landing/footer';
import { motion } from 'framer-motion';
import { TraceabilitySection } from '@/components/landing/traceability-section';
import { QrCode, ShieldCheck, MapPin, Search, Lock, Share2 } from 'lucide-react';

const techDetails = [
  {
    title: "Immutable Data Logging",
    description: "Every interaction is timestamped and cryptographically secured, preventing any tampering with provenance records.",
    icon: Lock
  },
  {
    title: "Geo-Tagging Verification",
    description: "Satellite data is used to verify that the produce was grown on the specific registered farm plot.",
    icon: MapPin
  },
  {
    title: "Real-Time Tracking",
    description: "Buyers can track the exact location of their shipment from the warehouse to the final delivery port.",
    icon: Search
  },
  {
    title: "Global Compliance",
    description: "Our system automatically generates certifications required for international export markets.",
    icon: ShieldCheck
  }
];

export default function TraceabilitySolutionPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
              >
                The Technology
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                Radical <span className="text-primary text-glow">Transparency</span> via Traceability
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                We believe that trust is the most valuable commodity in agriculture. Our proprietary traceability system ensures that every bean, pod, and fruit has a story you can verify.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/#contact" className="px-10 h-16 rounded-full bg-slate-900 text-white font-black hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center">
                   Request Technical Brief
                 </Link>
                 <Link href="/trace" className="px-10 h-16 rounded-full border-2 border-slate-900 text-slate-900 font-black hover:bg-slate-50 transition-all flex items-center justify-center">
                   View Demo Trace
                 </Link>
              </div>
            </div>
            
            <div className="flex-1 relative">
               <div className="aspect-square bg-white rounded-[4rem] shadow-2xl border border-slate-100 p-20 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  <QrCode className="w-full h-full text-primary opacity-20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-24 h-24 rounded-3xl bg-primary shadow-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <Share2 className="w-12 h-12" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Visualization */}
      <TraceabilitySection />

      {/* Tech Grid */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">How the Tech Works</h2>
              <p className="text-lg text-slate-400 font-medium">Under the hood of Africa's most secure agricultural ledger.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techDetails.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Security Proof */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto">
               <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
               <h2 className="text-4xl font-black text-slate-900 mb-8">Zero Trust Data Integrity</h2>
               <p className="text-lg text-slate-600 font-medium mb-12">Our system uses a Zero Trust architecture. No record is accepted without multiple independent verifications from agronomists, satellite providers, and logistics partners.</p>
               <div className="flex justify-center gap-12">
                  <div>
                     <div className="text-3xl font-black text-slate-900">99.9%</div>
                     <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Data Uptime</div>
                  </div>
                  <div className="w-px h-12 bg-slate-100" />
                  <div>
                     <div className="text-3xl font-black text-slate-900">AES-256</div>
                     <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Encryption</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
