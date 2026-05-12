"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Link2, LayoutDashboard } from "lucide-react";


interface FeaturesProps {
  features: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
  }[];
  primaryColor?: string;
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function AutoScrollFeatures({
  features,
  primaryColor = "emerald-500",
  progressGradientLight = "bg-gradient-to-r from-emerald-400 to-emerald-500",
  progressGradientDark = "bg-gradient-to-r from-emerald-500 to-emerald-600",
}: FeaturesProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100); // 10 seconds per feature (100 * 100ms)

    return () => clearInterval(interval);
  }, [isMounted]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  if (!isMounted) return null;

  return (
    <section className="min-h-screen py-24 px-4 bg-slate-50 relative overflow-hidden" id="capabilities">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`text-${primaryColor} font-bold text-sm uppercase tracking-widest`}
          >
            Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">
            Everything You Need to Grow
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Left Side - Features with Progress Lines */}
          <div
            ref={containerRef}
            className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;

              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  {/* Feature Content */}
                  <div
                    className={`
                    flex lg:flex-row flex-col items-start space-x-4 p-5 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 rounded-2xl
                    ${isActive
                        ? " bg-white shadow-xl border border-slate-200 scale-[1.02]"
                        : " hover:bg-slate-100/50"
                      }
                  `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                      p-3 hidden md:block rounded-full transition-all duration-300 shadow-sm
                      ${isActive
                          ? `bg-${primaryColor} text-white`
                          : `bg-slate-200/50 text-slate-500`
                        }
                    `}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full">
                      <h3
                        className={`
                        text-xl md:mt-4 lg:mt-0 font-bold mb-2 transition-colors duration-300
                        ${isActive
                            ? "text-slate-900"
                            : "text-slate-500"
                          }
                      `}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`
                        transition-colors duration-300 text-base leading-relaxed
                        ${isActive
                            ? "text-slate-600"
                            : "text-slate-400"
                          }
                      `}
                      >
                        {feature.description}
                      </p>

                      {/* Progress bar container */}
                      <div className="mt-6 bg-slate-100 rounded-full h-1.5 overflow-hidden w-full">
                        {isActive && (
                          <motion.div
                            className={`h-full ${progressGradientLight}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Image Display */}
          <div className="relative order-1 max-w-xl w-full mx-auto lg:order-2 h-[450px] lg:h-[650px] perspective-1000">
            {/* Ambient Background Glow */}
            <div className={`absolute inset-0 bg-${primaryColor}/10 blur-[100px] rounded-full scale-110 opacity-50`} />

            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -15, rotateX: -5, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute inset-0 w-full h-full z-10"
            >
              {/* Browser/Window Frame */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-200 bg-white flex flex-col">
                {/* Window Header */}
                <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-6 gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="mx-auto bg-slate-200/50 rounded-full h-4 w-40" />
                </div>

                {/* Content Area */}
                <div className="flex-grow relative bg-[#050A06]">
                  <Image
                    className="object-contain w-full h-full p-6 transition-all duration-1000"
                    src={features[currentFeature].image}
                    alt={features[currentFeature].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />

                  {/* Glassmorphism Overlays (Floating UI) */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl z-20 hidden md:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">Live Verification Active</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="absolute bottom-12 left-8 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full px-5 py-2.5 shadow-2xl z-20 hidden md:block"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold">100% Provenance Secured</span>
                    </div>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Data wrapper component for easy importing
export function Features() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const featuresData = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "Direct Marketplace",
      description:
        "Connect directly with verified buyers and cut out middlemen. Secure better profits and transparent pricing.",
      image: "/imgg-1.png",
    },
    {
      id: 2,
      icon: Link2,
      title: "End-to-End Traceability",
      description:
        "Track your produce's journey using immutable data, ensuring complete transparency and trust from seed to market.",
      image: "/imgg-2.png",
    },
    {
      id: 3,
      icon: LayoutDashboard,
      title: "Agronomist Dashboard",
      description:
        "Get real-time insights, field management tools, and expert support right at your fingertips to maximize yield.",
      image: "/agro-2.jpg",
    },
  ];

  return <AutoScrollFeatures features={featuresData} />;
}
