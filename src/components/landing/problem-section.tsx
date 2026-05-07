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
    <section id="challenges" className="py-24 bg-[#050A06] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-black text-primary tracking-[0.2em] uppercase mb-6">
            Current Landscape
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Systemic <span className="text-primary text-glow">Challenges</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            The agricultural supply chain is currently broken by transparency gaps, manual processes, and market exclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative h-full cursor-pointer"
            >
              {/* Card Body */}
              <div className="relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-3 hover:shadow-[0_40px_60px_rgba(0,0,0,0.5)] hover:border-primary/30 flex flex-col items-start overflow-hidden">

                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <problem.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">
                  {problem.title}
                </h3>

                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                  {problem.description}
                </p>

                <div className="mt-auto pt-4 flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">
                  Solution Required <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
