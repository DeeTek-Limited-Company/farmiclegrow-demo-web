'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] -z-0" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -z-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 group cursor-pointer mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 p-2 overflow-hidden transition-transform duration-500 group-hover:scale-110">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl font-black text-white tracking-tighter leading-none">
                  Farmicle<span className="text-primary">Grow</span>
                </h2>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-1">Digital Ecosystem</span>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm font-medium tracking-tight">
              Revolutionizing African agriculture through radical transparency, verified data, and direct market inclusion for smallholder farmers.
            </p>
            
            <div className="mt-10 flex gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                    <div className="w-4 h-4 bg-slate-400 rounded-full" />
                 </div>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Platform</h4>
            <ul className="space-y-5">
              <li><Link href="/#features" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Features</Link></li>
              <li><Link href="/#how-it-works" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> How It Works</Link></li>
              <li><Link href="/solutions/traceability" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Traceability</Link></li>
              <li><Link href="/marketplace" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Marketplace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Company</h4>
            <ul className="space-y-5">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> About Us</Link></li>
              <li><Link href="/impact" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Sustainability</Link></li>
              <li><Link href="/#contact" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Contact</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Legal</h4>
            <ul className="space-y-5">
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Terms of Service</Link></li>
              <li><Link href="/security" className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Data Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} FarmicleGrow. Precision Agriculture for the Global Market.
            </p>
          </div>
          <div className="flex gap-10 items-center">
             <div className="flex flex-col items-end">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">Status</span>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Network Live</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
