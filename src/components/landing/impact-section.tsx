'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: "$2.5M+",
    label: "Farmer Income",
    description: "Extra income generated for smallholders.",
  },
  {
    value: "15k+",
    label: "CO2 Reduced",
    description: "Tons of carbon emissions prevented.",
  },
  {
    value: "12,000",
    label: "Women Empowered",
    description: "Women farmers integrated into the platform.",
  },
  {
    value: "100%",
    label: "Traceability",
    description: "Full provenance for every product sold.",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-black text-primary tracking-[0.2em] uppercase mb-8"
          >
            Real-World Impact
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            Data-Driven <span className="text-primary text-glow">Transformation</span>
          </h2>

          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We don't just talk about sustainability; we measure it across every node of the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[2rem] hover:bg-slate-50 transition-colors cursor-default"
            >
              <div className="text-5xl md:text-7xl font-black text-primary mb-4 tracking-tighter leading-none">
                {metric.value}
              </div>
              <div className="text-lg font-black text-slate-900 mb-3 uppercase tracking-wider">
                {metric.label}
              </div>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 max-w-4xl mx-auto p-16 rounded-[4rem] bg-slate-900 text-white text-center relative overflow-hidden"
        >
          <p className="text-2xl text-slate-200 font-medium leading-relaxed italic relative z-10">
            "FarmicleGrow is building Africa's most transparent and reliable agricultural ecosystem through data, technology, and trust."
          </p>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
}
