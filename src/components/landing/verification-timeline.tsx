'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, FlaskConical, ShieldCheck, Star, ArrowDown } from 'lucide-react';

const steps = [
  {
    title: "On-Site Geotagging",
    description: "Agronomists capture GPS-verified photos of the farm and crop health directly in the field.",
    icon: Camera,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Soil & Quality Analysis",
    description: "Samples are analyzed for nutrient density and zero-pesticide compliance.",
    icon: FlaskConical,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Admin Integrity Check",
    description: "Every data point is cross-referenced by our central operations team for accuracy.",
    icon: ShieldCheck,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Verified Marketplace Listing",
    description: "Once approved, the produce receives a 'Verified' badge and is listed for global buyers.",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/5"
  }
];

export function VerificationTimeline() {
  return (
    <section className="py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-black text-primary mb-8 tracking-[0.2em] uppercase"
          >
            The Vetting Process
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1]">
            Rigor in Every <span className="text-primary text-glow italic">Data Point.</span>
          </h2>

          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
            We don't just take a farmer's word for it. Our multi-step verification process ensures that only the highest quality, most sustainable produce reaches your table.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Icon Bubble */}
                <div className="relative z-10">
                  <div className={`w-24 h-24 rounded-[2rem] ${step.bg} flex items-center justify-center shadow-xl border-4 border-white`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-16 md:h-32 flex items-center justify-center">
                      <ArrowDown className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-1 rounded-[3rem] bg-gradient-to-r from-primary to-emerald-500"
          >
            <div className="bg-white px-12 py-8 rounded-[2.8rem]">
              <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm mb-2 justify-center">
                <ShieldCheck className="w-6 h-6" /> Total Integrity
              </div>
              <div className="text-2xl font-black text-slate-900">100% On-Ground Verification</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
