'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  MapPin,
  Link2,
  LineChart,
  ShieldCheck,
  BellRing
} from 'lucide-react';

const features = [
  {
    title: "Farmer Onboarding System",
    description: "Structured registration and profiling of farmers by agronomists to ensure reliable and standardized data.",
    icon: Users,
  },
  {
    title: "Geo-Tagged Farm Locations",
    description: "Capture precise farm locations to enable tracking, planning, and verification of agricultural activities.",
    icon: MapPin,
  },
  {
    title: "Supply Chain Traceability",
    description: "Track produce from farm to market with full transparency and accountability across the chain.",
    icon: Link2,
  },
  {
    title: "Data-Driven Insights",
    description: "Leverage farm data to improve yield planning, reduce waste, and optimize production decisions.",
    icon: LineChart,
  },
  {
    title: "Secure Role-Based Access",
    description: "Ensure controlled access for administrators, agronomists, and farmers with proper permissions.",
    icon: ShieldCheck,
  },
  {
    title: "Notifications and Updates",
    description: "Keep stakeholders informed with real-time updates on farmer status, approvals, and activities.",
    icon: BellRing,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
          >
            Capabilities
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Powerful Features for a <span className="text-primary">Smarter</span> Agricultural Ecosystem
          </h2>

          <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            FarmicleGrow provides the tools and systems needed to build a transparent, efficient, and data-driven agricultural supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                {feature.description}
              </p>

              <div className="mt-auto pt-4 flex items-center text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
