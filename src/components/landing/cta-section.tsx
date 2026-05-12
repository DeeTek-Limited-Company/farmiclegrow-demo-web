'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RequestDemoForm } from '@/components/landing/request-demo-form';

export function CTASection() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-slate-950">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -z-0 opacity-40 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] -z-0 opacity-40 translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-[2rem] bg-primary flex items-center justify-center text-primary mb-12 shadow-[0_30px_60px_-15px_rgba(21,128,61,0.6)] border border-white/20 p-4 overflow-hidden transition-transform duration-700 hover:rotate-12 hover:scale-110">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
            Experience the <br />
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-accent bg-clip-text text-transparent">Digital Revolution</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-16 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Join Africa's premier network for verified agricultural supply chains. Get a personalized demo of our traceability and marketplace ecosystem.
          </p>

          <div className="w-full max-w-4xl bg-white/[0.03] backdrop-blur-3xl p-10 md:p-16 rounded-[4rem] border border-white/10 shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-xl">
               Contact Our Experts
            </div>
            <RequestDemoForm />
            <div className="mt-12">
              <Button size="lg" variant="outline" asChild className="rounded-2xl px-16 h-16 text-lg font-black border-2 border-white/10 text-white hover:bg-white/5 transition-all hover:scale-[1.02] active:scale-95 backdrop-blur-xl group">
                <Link href="/#features" className="flex items-center gap-3">
                  Explore Platform Capabilities
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-white/5 w-full">
            <div className="flex flex-wrap gap-x-12 gap-y-6 items-center justify-center opacity-30">
              <span className="text-white font-black tracking-[0.4em] text-[10px] uppercase">Verified Onboarding</span>
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-white font-black tracking-[0.4em] text-[10px] uppercase">Global Traceability</span>
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-white font-black tracking-[0.4em] text-[10px] uppercase">Direct Market Access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
