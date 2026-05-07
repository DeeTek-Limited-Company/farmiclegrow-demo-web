'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const userGroups = [
  {
    title: "Farmers",
    description: "The backbone of the ecosystem.",
    icon: Leaf,
    color: "bg-emerald-500/10 text-emerald-500",
    benefits: [
      "Access reliable global markets",
      "Increase income opportunities",
      "Structured data support",
    ],
  },
  {
    title: "Agronomists",
    description: "The verification bridge.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-500",
    benefits: [
      "Efficient onboarding tools",
      "Streamlined data management",
      "Better monitoring & reporting",
    ],
  },
  {
    title: "Buyers",
    description: "Global market connectors.",
    icon: ShoppingCart,
    color: "bg-amber-500/10 text-amber-500",
    benefits: [
      "Verified & traceable sourcing",
      "Reliable & consistent supply",
      "High-quality produce access",
    ],
  },
];

export function TargetUsersSection() {
  return (
    <section id="community" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
          >
            Our Community
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
            Built for Every Stakeholder in <span className="text-primary">Agriculture</span>
          </h2>

          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            FarmicleGrow creates value for everyone involved in the agricultural value chain, from the field to the global marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {userGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 rounded-[3rem] border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className={cn(
                "w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500",
                group.color
              )}>
                <group.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {group.title}
              </h3>

              <p className="text-slate-500 font-medium mb-8">
                {group.description}
              </p>

              <ul className="space-y-4">
                {group.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-slate-600 font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
