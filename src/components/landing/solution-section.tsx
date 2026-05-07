'use client';

import { CheckCircle2 } from 'lucide-react';
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
    <section id="solution" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-black text-primary tracking-[0.2em] uppercase mb-8">
              The Solution
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              A Smarter Way to <span className="text-primary text-glow">Connect</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              We leverage data-driven processes to build Africa's most transparent and reliable agricultural ecosystem.
            </p>
            <p className="text-slate-500 mb-12 leading-relaxed">
              By empowering smallholders with digital tools and agronomist support, we ensure that every harvest meets global standards, while providing buyers with 100% verified provenance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {solutions.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white group">
              <Image
                src="/image.jpg"
                alt="Agricultural technology"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
