'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from '@/lib/utils';
import { QRScanner } from '@/components/ui/qr-scanner';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { 
    label: "Solutions", 
    children: [
      { href: "/solutions/traceability", label: "Traceability System" },
      { href: "/marketplace", label: "Marketplace Portal" },
      { href: "/impact", label: "Impact Analysis" },
    ]
  },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white/70 backdrop-blur-2xl border-b border-slate-200/50 h-20 shadow-xl shadow-slate-900/5" 
        : "bg-transparent h-24"
    )}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-all duration-500 overflow-hidden p-1.5 md:p-2 border border-white/20">
            <Image
              src="/logo.png"
              alt="FarmicleGrow Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain brightness-0 invert"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter leading-none">
              Farmicle<span className="text-primary">Grow</span>
            </h1>
            <span className="hidden sm:block text-[8px] font-black uppercase tracking-[0.4em] text-slate-400 leading-none mt-1">Digital Platform</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group/nav">
              {link.children ? (
                <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all py-2">
                  {link.label} <ChevronDown className="w-3 h-3 group-hover/nav:rotate-180 transition-transform duration-300" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 rounded-[2.5rem] p-4 min-w-[260px] ring-1 ring-slate-900/5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between px-5 py-4 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-primary hover:bg-primary/5 rounded-[1.5rem] transition-all group/item"
                        >
                          {child.label}
                          <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="h-8 w-px bg-slate-200/60 mx-2" />
          <QRScanner />
          <Button asChild className="rounded-2xl px-8 h-12 text-xs font-black uppercase tracking-widest bg-slate-900 hover:bg-primary text-white transition-all shadow-xl shadow-slate-900/10 hover:shadow-primary/20 hover:scale-105 active:scale-95">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <Button asChild size="sm" className="rounded-full px-4 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all active:scale-95">
              <Link href="/login">Login</Link>
            </Button>
          </div>
          <QRScanner />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all active:scale-90" aria-label="Open menu">
                <Menu className="w-5 h-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-white border-l-0 shadow-[-20px_0_80px_rgba(0,0,0,0.1)] p-0 flex flex-col">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Access FarmicleGrow platform sections and portal</SheetDescription>
              </SheetHeader>
              <div className="h-32 bg-[#050A06] p-8 flex items-end relative overflow-hidden shrink-0">
                 {/* Decorative background for menu header */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
                 
                 <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center p-1.5 shadow-lg shadow-primary/20">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-white tracking-tighter leading-none">FarmicleGrow</span>
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary mt-1">Digital Ecosystem</span>
                    </div>
                 </div>
              </div>

              <div className="flex-grow overflow-y-auto px-8 py-10">
                <div className="flex flex-col gap-10">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.children ? (
                        <div className="flex flex-col gap-4">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{link.label}</span>
                          <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-50">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="text-base font-bold text-slate-700 hover:text-primary transition-colors flex items-center justify-between"
                              >
                                {child.label}
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-2xl font-black text-slate-900 hover:text-primary transition-all flex items-center justify-between group"
                        >
                          {link.label}
                          <span className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all text-primary text-sm">→</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-slate-50 bg-slate-50/50 shrink-0">
                <Button asChild className="rounded-[1.5rem] w-full h-16 text-sm font-black uppercase tracking-widest bg-slate-900 hover:bg-primary text-white shadow-2xl shadow-slate-900/20 transition-all active:scale-95">
                  <Link href="/login">Portal Access</Link>
                </Button>
                <p className="text-[10px] text-center mt-6 text-slate-400 font-bold uppercase tracking-widest">© 2026 FarmicleGrow Platform</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
