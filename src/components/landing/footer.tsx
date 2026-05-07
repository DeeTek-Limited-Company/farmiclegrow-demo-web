'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 group cursor-pointer mb-6">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg p-1.5 overflow-hidden">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter">
                FarmicleGrow
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Connecting farmers and markets through transparency, traceability, and trusted data. Building the future of African agriculture.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-8">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/#features" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Features</Link></li>
              <li><Link href="/#how-it-works" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">How It Works</Link></li>
              <li><Link href="/solutions/traceability" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">About Us</Link></li>
              <li><Link href="/impact" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Sustainability & Impact</Link></li>
              <li><Link href="/#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-8">Access</h4>
            <ul className="space-y-4">
              <li><Link href="/login" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Portal Login</Link></li>
              <li><Link href="/#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Request Demo</Link></li>
              <li><Link href="/#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} FarmicleGrow. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Terms</Link>
            <Link href="/security" className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
