'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, MapPin, Star, QrCode } from 'lucide-react';

interface ProductProps {
  id: string;
  name: string;
  category: string;
  price: string | number;
  currency?: string;
  unit?: string;
  moq: string | number;
  rating: number;
  image: string;
  origin: string;
  traceScore: number;
  tags: string[];
  batchCode?: string;
}

export function RetailProductCard({ product }: { product: ProductProps }) {
  const traceHref = product.batchCode ? `/trace/${encodeURIComponent(product.batchCode)}` : "/trace";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
        <Link href={`/marketplace/${encodeURIComponent(product.id)}`} className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
           {product.tags.map((tag, i) => (
             <div key={i} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-100">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{tag}</span>
             </div>
           ))}
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
           <Link href={traceHref} className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-slate-100 hover:bg-primary hover:text-white transition-colors cursor-pointer group/qr">
              <QrCode className="w-5 h-5" />
              <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover/qr:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap">
                View Trace
              </div>
           </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{product.category}</div>
           <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-xs font-bold text-slate-900">{product.rating}</span>
           </div>
        </div>

        <Link href={`/marketplace/${encodeURIComponent(product.id)}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-slate-500 mb-6">
           <MapPin className="w-3 h-3 text-primary" />
           <span className="text-xs font-bold">{product.origin}</span>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50">
           <div className="flex items-center justify-between mb-6">
              <div>
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Commercial Price</div>
                 <div className="text-xl font-black text-primary leading-none">
                    {typeof product.price === 'number' 
                      ? `${product.currency || '$'}${product.price.toLocaleString()} / ${product.unit || 'unit'}` 
                      : product.price}
                 </div>
                 <div className="text-[10px] font-bold text-slate-400 mt-1 italic">
                    MOQ: {typeof product.moq === 'number' ? `${product.moq} ${product.unit || 'units'}` : product.moq}
                 </div>
              </div>
              <div className="text-right">
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Traceability</div>
                 <div className="flex items-center gap-1 text-emerald-500 justify-end">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-sm font-black">{product.traceScore}%</span>
                 </div>
              </div>
           </div>

           <Link href="/login" className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300 active:scale-95 shadow-xl shadow-slate-900/10">
              <ShoppingCart className="w-4 h-4" /> Login to Add to Quote
           </Link>
        </div>
      </div>
    </motion.div>
  );
}
