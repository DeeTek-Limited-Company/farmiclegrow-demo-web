'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    name: "Organic Coffee Beans",
    origin: "Highlands, Kenya",
    price: "$12.50 / kg",
    rating: 4.9,
    image: "/image1.jpg",
    tags: ["Verified", "Sustainable"],
    score: 98
  },
  {
    name: "Hass Avocados",
    origin: "Meru Valley, Kenya",
    price: "$8.00 / box",
    rating: 4.8,
    image: "/image2.jpg",
    tags: ["Export Grade", "Traceable"],
    score: 95
  },
  {
    name: "Premium Cocoa Pods",
    origin: "Western Region, Ghana",
    price: "$15.00 / kg",
    rating: 4.9,
    image: "/image3.jpg",
    tags: ["Verified", "Fair Trade"],
    score: 99
  },
  {
    name: "White Pepper",
    origin: "Penja, Cameroon",
    price: "$22.00 / kg",
    rating: 5.0,
    image: "/image4.jpg",
    tags: ["Rare Origin", "Traceable"],
    score: 100
  }
];

export function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 tracking-widest uppercase"
          >
            Digital Storefront
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Curated <span className="text-primary text-glow">Sustainable</span> Produce
          </h2>
          
          <p className="text-lg text-slate-600 font-medium">
            Directly source verified, high-quality agricultural products from Africa's most reliable smallholder farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                   <Star className="w-3 h-3 fill-current" /> {product.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <MapPin className="w-3 h-3 text-primary" /> {product.origin}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-black text-primary">{product.price}</div>
                  <div className="flex flex-col items-end">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Traceability</div>
                    <div className="text-xs font-bold text-emerald-500">{product.score}% Score</div>
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary transition-all duration-300">
                  <ShoppingCart className="w-4 h-4" /> View Product Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-12 h-16 rounded-full border-2 border-slate-900 text-slate-900 font-black hover:bg-slate-900 hover:text-white transition-all hover:scale-105 active:scale-95">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
}
