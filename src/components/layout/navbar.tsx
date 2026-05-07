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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 backdrop-blur-xl border-b border-border/50 h-16" 
        : "bg-transparent h-20"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform overflow-hidden p-1.5">
            <Image
              src="/logo.png"
              alt="FarmicleGrow Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain brightness-0 invert"
              priority
            />
          </div>
          <h1 className="text-2xl font-black text-primary tracking-tighter">
            FarmicleGrow
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group/nav">
              {link.children ? (
                <button className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2">
                  {link.label} <ChevronDown className="w-3 h-3" />
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300">
                    <div className="bg-white/80 backdrop-blur-xl shadow-2xl border border-slate-100 rounded-[2rem] p-3 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="h-6 w-px bg-border mx-2" />
          <Button variant="outline" asChild className="rounded-full px-6 h-11 font-bold border-2 hover:bg-primary/5 transition-all active:scale-95">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="rounded-full px-6 h-11 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all active:scale-95">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-4">
          <Button asChild size="sm" className="rounded-full px-4 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all active:scale-95">
            <Link href="/login">Login</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary" aria-label="Open menu">
                <Menu className="w-6 h-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l-0 shadow-2xl overflow-y-auto">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center p-1.5">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                  <span className="text-xl font-black text-primary tracking-tighter">FarmicleGrow</span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate through FarmicleGrow platform sections.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">{link.label}</span>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-lg font-bold text-slate-900 hover:text-primary transition-colors ml-4"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-lg font-bold text-slate-900 hover:text-primary transition-colors flex items-center justify-between group"
                      >
                        {link.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
                      </Link>
                    )}
                  </div>
                ))}
                <div className="h-px bg-slate-100 my-4" />
                <Button asChild className="rounded-2xl w-full h-14 font-black bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                  <Link href="/login">Get Started Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
