'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  ShoppingBag, 
  Bell, 
  LayoutGrid, 
  ClipboardList, 
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MarketplaceNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 h-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-full flex items-center justify-between gap-8">
        {/* Logo & Platform Toggle */}
        <div className="flex items-center gap-8 shrink-0">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center p-1.5 shadow-lg shadow-primary/20">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <h1 className="text-xl font-black text-primary tracking-tighter">
              Farmicle<span className="text-slate-900">Market</span>
            </h1>
          </Link>
          
          <div className="h-8 w-px bg-slate-100 hidden md:block" />
          
          <div className="hidden xl:flex items-center gap-4">
             <Link href="/marketplace" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary px-4 py-2 bg-primary/5 rounded-xl">
                <LayoutGrid className="w-4 h-4" /> Browse
             </Link>
             <Link href="/login" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 px-4 py-2 transition-colors">
                <ClipboardList className="w-4 h-4" /> Orders
             </Link>
             <Link href="/login" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 px-4 py-2 transition-colors">
                <Truck className="w-4 h-4" /> Tracking
             </Link>
          </div>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-2xl hidden md:block">
           <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                 <Search className="w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search premium crops, verified cooperatives, or batch IDs..."
                className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-bold"
              />
           </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
           <button className="w-12 h-12 rounded-2xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full border-2 border-white" />
           </button>
           
           <Link href="/login" className="w-12 h-12 rounded-2xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-all">
              <ShoppingBag className="w-5 h-5" />
           </Link>

           <div className="h-8 w-px bg-slate-100 mx-2" />

           <Button variant="outline" asChild className="rounded-full px-5 h-11 font-bold border-2 hover:bg-primary/5 transition-all active:scale-95">
             <Link href="/login">Login</Link>
           </Button>
           <Button asChild className="rounded-full px-5 h-11 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all active:scale-95">
             <Link href="/signup">Create Account</Link>
           </Button>
        </div>
      </div>
    </nav>
  );
}
