'use client';

import { CheckCircle2, Leaf } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    title: 'Verified Farmer Onboarding',
    description: 'Farmers are registered and profiled by trained agronomists to ensure accurate and reliable data.',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Farm data is collected and used to guide production, reduce waste, and improve decision-making.',
  },
  {
    title: 'Transparent Supply Chain',
    description: 'Every farmer and farm record is traceable, increasing trust for buyers.',
  },
  {
    title: 'Quality Assurance',
    description: 'Admin validation ensures that only verified and high-quality data enters the system.',
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-32 bg-white overflow-hidden relative">
      {/* Subtle background patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -z-10 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-10 shadow-sm">
              Our Methodology
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
              A Smarter Way to <span className="text-primary">Orchestrate</span> Harvests
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-semibold tracking-tight">
              We leverage data-driven processes to build Africa's most transparent and reliable agricultural ecosystem.
            </p>
            <p className="text-slate-500 text-lg mb-14 leading-relaxed max-w-2xl">
              By empowering smallholders with digital tools and agronomist support, we ensure that every harvest meets global standards, while providing buyers with 100% verified provenance and real-time logistics tracking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
              {solutions.map((item, index) => (
                <div key={index} className="flex gap-5 group items-start">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col sm:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
               <div className="relative z-10 flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
               </div>
               <div className="relative z-10 flex-1 text-center sm:text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Join the community</p>
                  <p className="text-sm font-bold text-slate-300 italic">"FarmicleGrow transformed how we manage our 500+ smallholder networks."</p>
               </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_80px_120px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white group">
              <Image
                src="/image.jpg"
                alt="Agricultural technology"
                width={700}
                height={900}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Floating Widget */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-xl">
                       <Leaf className="w-7 h-7" />
                    </div>
                    <div>
                       <p className="text-white font-black text-lg tracking-tight">98% Verified Data</p>
                       <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Industry Standard Accuracy</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/15 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
