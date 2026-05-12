'use client';

import { Leaf, MapPin, Truck, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const problems = [
  {
    title: "Limited Market Access",
    description: "Smallholder farmers struggle to connect with reliable buyers and often depend on intermediaries, limiting their income and growth opportunities.",
    icon: Leaf,
    gradient: "from-green-900/20 via-green-800/10 to-transparent",
  },
  {
    title: "Lack of Traceability",
    description: "Buyers have little visibility into where produce comes from, how it is grown, and whether it meets quality standards.",
    icon: MapPin,
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "Fragmented Supply Chains",
    description: "Disconnected systems and manual processes create inefficiencies, delays, and unreliable supply for both farmers and buyers.",
    icon: Truck,
    gradient: "from-accent/20 via-accent/5 to-transparent",
  },
  {
    title: "Post-Harvest Losses",
    description: "Without proper planning and data insights, a significant portion of agricultural produce is lost before reaching the market.",
    icon: AlertTriangle,
    gradient: "from-red-900/10 via-red-800/5 to-transparent",
  },
];

export function ProblemSection() {
  return (
    <section id="challenges" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] translate-y-1/2 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-8 backdrop-blur-md shadow-2xl">
            The Status Quo
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            Systemic <span className="bg-gradient-to-r from-primary via-emerald-400 to-accent bg-clip-text text-transparent">Challenges</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            The current agricultural supply chain is fractured by opacity, manual inefficiencies, and market exclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative h-full cursor-pointer"
            >
              {/* Card Body */}
              <div className="relative h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 transition-all duration-700 hover:bg-white/[0.06] hover:-translate-y-4 hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)] hover:border-primary/40 flex flex-col items-start overflow-hidden">
                
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/5 transition-all duration-700 shadow-2xl">
                  <problem.icon className="w-10 h-10 text-white group-hover:text-accent transition-colors duration-500" />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight leading-tight">
                  {problem.title}
                </h3>

                <p className="text-slate-400 text-base font-medium leading-relaxed mb-10 group-hover:text-slate-300 transition-colors">
                  {problem.description}
                </p>

                <div className="mt-auto pt-6 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-primary transition-all duration-500 border-t border-white/5 w-full">
                  Impact Factor <span className="ml-auto transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
