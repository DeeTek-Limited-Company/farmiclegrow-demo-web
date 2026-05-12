'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Award, Star, Microscope, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface QualityMetric {
  label: string;
  value: string;
  icon: React.ElementType;
  score?: number; // 0-100
}

interface QualityScorecardProps {
  grade: string;
  metrics?: QualityMetric[];
}

export function QualityScorecard({ grade, metrics }: QualityScorecardProps) {
  const defaultMetrics: QualityMetric[] = [
    { label: "Moisture", value: "11.2%", icon: Droplets, score: 95 },
    { label: "Grade", value: grade, icon: Award, score: 100 },
    { label: "Purity", value: "99.8%", icon: ShieldCheck, score: 98 },
    { label: "Certification", value: "Premium", icon: Star, score: 100 },
  ];

  const displayMetrics = metrics || defaultMetrics;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {displayMetrics.map((metric, i) => (
        <Card key={metric.label} className="rounded-3xl border-0 bg-slate-50 overflow-hidden group hover:bg-primary transition-all duration-500">
           <CardContent className="p-6">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                 <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 group-hover:text-white/60 transition-colors">{metric.label}</div>
              <div className="text-xl font-black text-slate-900 group-hover:text-white transition-colors">{metric.value}</div>
              
              {metric.score && (
                <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${metric.score}%` }}
                     viewport={{ once: true }}
                     className="h-full bg-primary group-hover:bg-white transition-colors"
                   />
                </div>
              )}
           </CardContent>
        </Card>
      ))}
    </div>
  );
}
