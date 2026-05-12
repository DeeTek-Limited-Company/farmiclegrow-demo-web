'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, CheckSquare, BarChart2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: '01',
    title: 'Farmer Onboarding',
    subtitle: 'Data Collection & Profiling',
    description: 'Agronomists visit farms to register farmers, capturing GPS locations, crop types, and historical yield data to create a verified digital identity.',
    image: '/agro-5.jpg',
    icon: UserPlus,
    color: 'bg-emerald-500/10 text-emerald-500',
    borderColor: 'border-emerald-500/20',
  },
  {
    id: '02',
    title: 'Data Verification',
    subtitle: 'Quality & Authenticity Check',
    description: 'Our admin team reviews every submission, cross-referencing satellite data and local records to ensure 100% accuracy before approval.',
    image: '/admin-2.jpg',
    icon: Search,
    color: 'bg-blue-500/10 text-blue-500',
    borderColor: 'border-blue-500/20',
  },
  {
    id: '03',
    title: 'Farmer Approval',
    subtitle: 'Ecosystem Integration',
    description: 'Verified farmers are formally approved, gaining access to the FarmicleGrow dashboard where they can manage their profiles and market offers.',
    image: '/admin-1.jpg',
    icon: CheckSquare,
    color: 'bg-amber-500/10 text-amber-500',
    borderColor: 'border-amber-500/20',
  },
  {
    id: '04',
    title: 'Market Access',
    subtitle: 'Traceable Global Trade',
    description: 'Fully traceable produce is listed for global buyers, providing farmers with direct market links and buyers with guaranteed provenance.',
    image: '/admin-5.jpg',
    icon: BarChart2,
    color: 'bg-primary/10 text-primary',
    borderColor: 'border-primary/20',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-[#050A06] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
          >
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight"
          >
            The Journey from <span className="text-primary">Farm to Global Market</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 font-medium leading-relaxed"
          >
            A high-integrity, digital-first workflow designed to empower smallholder farmers while providing absolute transparency to global buyers.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Visual Step Marker (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#050A06] border border-white/20 flex items-center justify-center z-20 group-hover:border-primary transition-colors">
                    <span className="text-xs font-black text-white/40">{step.id}</span>
                  </div>
                  <div className="absolute w-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg",
                    step.color
                  )}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-black tracking-widest text-xs uppercase">{step.subtitle}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-first lg:order-none">
                  <div className={cn(
                    "aspect-video rounded-[2rem] md:rounded-[2.5rem] border backdrop-blur-sm relative overflow-hidden group shadow-2xl transition-all duration-700 hover:scale-[1.02]",
                    step.borderColor,
                    "bg-[#0a0f0b]"
                  )}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent z-10 pointer-events-none" />

                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Progress Bar Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-primary shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile ID Badge */}
                <div className="lg:hidden absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-xl">
                  <span className="text-sm font-black text-primary">{step.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/5 border border-primary/10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-6">Start Your Agricultural Transformation</h3>
            <p className="text-slate-400 font-medium mb-10 max-w-xl mx-auto">Whether you are a global buyer seeking reliable supply or an agronomist ready to onboard farmers, FarmicleGrow is your platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 h-14 rounded-full bg-primary text-white font-black hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                Access Portal
              </button>
            </div>
          </div>

          {/* Abstract background shape for the CTA */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}
