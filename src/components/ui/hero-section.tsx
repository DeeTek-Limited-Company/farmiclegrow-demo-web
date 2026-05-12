'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  imageUrl: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: 'Farmer Onboarding',
    imageUrl: '/image1.jpg',
  },
  {
    id: 2,
    title: 'Farm Data Collection',
    imageUrl: '/image2.jpg',
  },
  {
    id: 3,
    title: 'Supply Chain Traceability',
    imageUrl: '/image3.jpg',
  },
  {
    id: 4,
    title: 'Verified Farmer Records',
    imageUrl: '/image4.jpg',
  },
  {
    id: 5,
    title: 'Market Access & Transparency',
    imageUrl: '/image5.jpg',
  },
];

export function HeroSection() {
  const [activeId, setActiveId] = useState<number>(3); // Default expanded item

  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50/50">
      {/* Background grain effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-8 animate-in fade-in slide-in-from-bottom-3 duration-1000 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Agri-Tech
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-slate-900 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 leading-[0.85]">
              Grow <span className="text-primary drop-shadow-sm">Smarter.</span> <br />
              Trade <span className="text-accent drop-shadow-sm">Better.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 leading-relaxed max-w-xl font-medium">
              Empowering African smallholders with verified data, transparent supply chains, and direct access to premium global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 w-full sm:w-auto">
              <Button size="lg" asChild className="rounded-2xl px-12 h-16 text-base font-black bg-primary hover:bg-primary/90 text-white transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-primary/30 border-b-4 border-emerald-800">
                <Link href="/login">Launch Platform</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-2xl px-12 h-16 text-base font-black border-2 border-slate-900 text-slate-900 transition-all hover:bg-slate-900 hover:text-white active:scale-95 shadow-lg">
                <Link href="/marketplace">Marketplace</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-slate-200/60 w-full flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-black text-xs">ISO</div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Quality Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-black text-xs">GAPs</div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Global Standards</span>
              </div>
            </div>
          </div>

          {/* Right Content - Accordion Image Gallery */}
          <div className="w-full lg:w-[55%] h-[500px] md:h-[600px] lg:h-[700px] flex gap-3 md:gap-4 overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-500">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "relative h-full transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] overflow-hidden rounded-[2rem] md:rounded-[3rem] cursor-pointer group flex-shrink-0 border border-white/20 shadow-2xl",
                  activeId === item.id ? "flex-[6] min-w-[240px]" : "flex-[1] min-w-[70px] md:min-w-[90px]"
                )}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cn(
                    "object-cover transition-transform duration-1000 group-hover:scale-110",
                    activeId === item.id ? "scale-100 opacity-100" : "scale-105 grayscale opacity-40"
                  )}
                  priority={item.id === activeId}
                />

                {/* Overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700",
                  activeId === item.id ? "opacity-100" : "opacity-0"
                )} />

                {/* Content */}
                <div className={cn(
                  "absolute bottom-0 left-0 w-full p-6 md:p-12 transition-all duration-700 delay-200",
                  activeId === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-2xl border border-white/20">
                      <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Feature</p>
                      <h3 className="text-xl md:text-3xl font-black text-white whitespace-nowrap tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Vertical Title for Collapsed State */}
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  activeId === item.id ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                  <span className="rotate-90 whitespace-nowrap text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full max-w-7xl opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>
    </section>
  );
}
