'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/landing/footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Leaf, TrendingUp, Users, Target, Map as MapIcon, ChevronRight } from 'lucide-react';
import { FarmMap } from '@/components/ui/farm-map';

const AnimatedCounter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [numericValue]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const incomeData = [
  { month: 'Jan', income: 45000 },
  { month: 'Feb', income: 52000 },
  { month: 'Mar', income: 48000 },
  { month: 'Apr', income: 61000 },
  { month: 'May', income: 75000 },
  { month: 'Jun', income: 89000 },
];

const co2Data = [
  { year: '2021', reduction: 1200 },
  { year: '2022', reduction: 2500 },
  { year: '2023', reduction: 5800 },
  { year: '2024', reduction: 12500 },
  { year: '2025', reduction: 15000 },
];

const genderData = [
  { name: 'Women Farmers', value: 65, color: '#10b981' },
  { name: 'Men Farmers', value: 35, color: '#0ea5e9' },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
          >
            Our Impact Report
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            Data-Driven <span className="text-primary text-glow">Transformation</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            We don't just talk about sustainability; we measure it. Explore the real-world impact of the FarmicleGrow platform across Africa.
          </p>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Metrics Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Income Growth Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900">Farmer Income Growth</h3>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Monthly Earnings (USD)</p>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={incomeData}>
                    <defs>
                      <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <Tooltip 
                       contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorIncome)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* CO2 Reduction Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900">CO2 Emissions Prevented</h3>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Tons of CO2 Reduced</p>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={co2Data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <Tooltip 
                       cursor={{fill: '#f8fafc'}}
                       contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="reduction" fill="#22c55e" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Gender Inclusion */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900">Gender Inclusion</h3>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Stakeholder Distribution</p>
                </div>
              </div>
              <div className="h-[300px] w-full flex items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={100}
                      paddingAngle={10}
                      dataKey="value"
                    >
                      {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pr-8 space-y-4">
                   {genderData.map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}} />
                        <span className="text-sm font-bold text-slate-600">{item.name}: {item.value}%</span>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>

            {/* Global Farm Network (Map) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                       <MapIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-slate-900">Global Farm Network</h3>
                       <p className="text-sm text-slate-500 font-medium">Real-time geo-tagged farmer clusters across Africa.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="text-center">
                       <div className="text-xl font-black text-slate-900">12,400+</div>
                       <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Nodes</div>
                    </div>
                    <div className="w-px h-10 bg-slate-100" />
                    <div className="text-center">
                       <div className="text-xl font-black text-slate-900">18</div>
                       <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Countries</div>
                    </div>
                 </div>
              </div>
              <FarmMap />
            </motion.div>

            {/* Strategy Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 p-12 rounded-[3rem] shadow-xl flex flex-col justify-center text-white"
            >
              <Target className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-3xl font-black mb-6 tracking-tight">Our 2030 ESG Roadmap</h3>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                By 2030, we aim to integrate over 50,000 smallholder farmers, achieve carbon neutrality across our logistics chain, and maintain a 70% female participation rate in our value-added processing units.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="text-primary font-black text-5xl mb-2 flex items-center gap-1 group-hover:scale-110 transition-transform origin-left">
                       <AnimatedCounter value="50000" suffix="+" />
                    </div>
                    <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">Farmers Target</div>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="text-primary font-black text-5xl mb-2 flex items-center gap-1 group-hover:scale-110 transition-transform origin-left">
                       <AnimatedCounter value="100" suffix="%" />
                    </div>
                    <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">Carbon Neutrality</div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
