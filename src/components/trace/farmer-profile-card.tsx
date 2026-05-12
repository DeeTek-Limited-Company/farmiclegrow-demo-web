'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Quote, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface FarmerProfileProps {
  name: string;
  community: string;
  location: string;
  image?: string;
  impactQuote?: string;
}

export function FarmerProfileCard({ 
  name, 
  community, 
  location, 
  image = "https://images.unsplash.com/photo-1594488687126-04355b74bc4d?q=80&w=2070&auto=format&fit=crop",
  impactQuote = "Farming is not just my job, it's how I provide a better future for my children and strengthen our village."
}: FarmerProfileProps) {
  return (
    <Card className="overflow-hidden rounded-[2.5rem] border-0 shadow-2xl bg-white group">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-black text-white uppercase tracking-widest">{community}</span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">{name}</h3>
        </div>
      </div>
      <CardContent className="p-8">
        <div className="relative">
          <Quote className="w-10 h-10 text-primary/10 absolute -top-4 -left-2 -z-0" />
          <p className="relative z-10 text-slate-600 font-medium italic leading-relaxed text-sm">
            "{impactQuote}"
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Region</div>
            <div className="text-sm font-bold text-slate-900">{location}</div>
          </div>
          <button className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
