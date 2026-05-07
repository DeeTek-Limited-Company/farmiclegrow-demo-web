'use client';

import React from 'react';
import { RetailProductCard } from '@/components/marketplace/retail-product-card';
import { FilterSidebar } from '@/components/marketplace/filter-sidebar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Info } from 'lucide-react';
import { DEMO_PRODUCTS } from '@/lib/demo/marketplace';

const tickerItems = [
  { label: "COFFEE/USD", value: "+2.4%", status: "up" },
  { label: "COCOA/USD", value: "-0.8%", status: "down" },
  { label: "AVOCADO/USD", value: "+1.2%", status: "up" },
  { label: "WHEAT/USD", value: "+0.5%", status: "up" },
  { label: "TOTAL VOLUME", value: "$2.4M", status: "neutral" },
];

export default function MarketplacePage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Marketplace Hero */}
        <section className="mb-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
               <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                     </div>
                     <span className="text-xs font-black uppercase tracking-widest text-primary">Market Insights</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                     Browse verified supply with <span className="text-primary text-glow">traceability</span>
                  </h1>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed mb-6">
                     Explore products publicly. To request quotes, chat, or purchase, create a buyer account or log in.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Market: Open
                     </div>
                     <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold flex items-center gap-2">
                        <Info className="w-4 h-4 text-primary" /> Verified Supply: 12,400 MT
                     </div>
                  </div>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <Link href="/signup" className="px-8 py-4 rounded-2xl bg-primary text-white font-black text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-center">
                     Create Buyer Account
                  </Link>
                  <Link href="/login" className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 text-white font-black text-sm hover:bg-white/20 transition-all text-center">
                     Login
                  </Link>
               </div>
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
          </div>
        </section>

        {/* Main Marketplace Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
           {/* Sidebar */}
           <FilterSidebar />

           {/* Product Grid */}
           <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-black text-slate-900 tracking-tight">Direct Sourcing <span className="text-primary">({DEMO_PRODUCTS.length} Verified)</span></h2>
                 <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort By:</span>
                    <select className="bg-transparent border-none outline-none text-xs font-black uppercase tracking-widest text-slate-900 cursor-pointer">
                       <option>Latest Harvest</option>
                       <option>Traceability Score</option>
                       <option>Price: Low to High</option>
                    </select>
                 </div>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                 {DEMO_PRODUCTS.map((product) => (
                   <motion.div
                     key={product.id}
                     variants={{
                       hidden: { opacity: 0, y: 20 },
                       show: { opacity: 1, y: 0 }
                     }}
                   >
                     <RetailProductCard product={product} />
                   </motion.div>
                 ))}
              </motion.div>

              <div className="mt-16 py-8 border-t border-slate-200 flex items-center justify-between">
                 <p className="text-xs font-bold text-slate-400">Showing {DEMO_PRODUCTS.length} of 42 active listings</p>
                 <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-400 hover:border-primary hover:text-primary transition-all">1</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-400 hover:border-primary hover:text-primary transition-all">2</button>
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-400 hover:border-primary hover:text-primary transition-all">3</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
