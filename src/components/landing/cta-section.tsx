'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RequestDemoForm } from '@/components/landing/request-demo-form';

export function CTASection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-0 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -z-0 opacity-50" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center text-primary mb-10 shadow-2xl shadow-primary/20 border border-primary/20 p-4 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
            Request a <span className="text-primary">Demo</span> or Join the Marketplace
          </h2>

          <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us what you need. We will share a demo flow for traceability, onboarding, and the marketplace.
          </p>

          <div className="w-full max-w-3xl">
            <RequestDemoForm />
            <div className="mt-8">
              <Button size="lg" variant="outline" asChild className="rounded-full px-12 h-16 text-lg font-black border-2 border-white/10 text-white hover:bg-white/5 transition-all hover:scale-105 active:scale-95 backdrop-blur-xl">
                <Link href="/#features">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-white/5 w-full flex flex-col items-center">
            <div className="flex gap-8 items-center justify-center flex-wrap opacity-40">
              <span className="text-white font-black tracking-widest text-[10px] uppercase">Verified Onboarding</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-white font-black tracking-widest text-[10px] uppercase">Satellite Traceability</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-white font-black tracking-widest text-[10px] uppercase">Direct Market Access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
