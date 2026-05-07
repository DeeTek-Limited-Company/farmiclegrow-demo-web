'use client';

import React from 'react';
import { Search, Filter, SlidersHorizontal, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ["All Produce", "Coffee Beans", "Cocoa Pods", "Hass Avocados", "White Pepper", "Macadamia"];
const certifications = ["Farmicle-Verified", "Fair Trade", "Organic", "Rainforest Alliance"];

export function FilterSidebar() {
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-10">
      {/* Search Input */}
      <div className="relative group">
         <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
         </div>
         <input 
           type="text" 
           placeholder="Search crops or regions..."
           className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-bold placeholder:text-slate-400"
         />
      </div>

      {/* Category Filter */}
      <div>
         <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Categories</h4>
         </div>
         <div className="space-y-2">
            {categories.map((cat, i) => (
              <label key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-all">
                 <div className="w-5 h-5 rounded-md border-2 border-slate-200 group-hover:border-primary/50 transition-colors flex items-center justify-center">
                    {i === 0 && <div className="w-2.5 h-2.5 bg-primary rounded-sm" />}
                 </div>
                 <span className={cn(
                   "text-sm font-bold transition-colors",
                   i === 0 ? "text-primary" : "text-slate-500 group-hover:text-slate-900"
                 )}>{cat}</span>
              </label>
            ))}
         </div>
      </div>

      {/* Certification Filter */}
      <div>
         <div className="flex items-center gap-2 mb-6">
            <Filter className="w-4 h-4 text-primary" />
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Certifications</h4>
         </div>
         <div className="grid grid-cols-1 gap-2">
            {certifications.map((cert, i) => (
              <label key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-primary/20 cursor-pointer group transition-all">
                 <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Check className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">{cert}</span>
              </label>
            ))}
         </div>
      </div>

      {/* Price & MOQ */}
      <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
         <div className="relative z-10">
            <h4 className="text-sm font-black mb-4 tracking-tight">Need Bulk Pricing?</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">Get custom quotes for orders over 500kg directly from cooperatives.</p>
            <a href="/login" className="block text-center w-full py-3 rounded-xl bg-primary text-white font-black text-[10px] uppercase tracking-widest hover:bg-primary/90 transition-all">
               Login to Contact Agent
            </a>
         </div>
         {/* Decor */}
         <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
      </div>
    </aside>
  );
}
