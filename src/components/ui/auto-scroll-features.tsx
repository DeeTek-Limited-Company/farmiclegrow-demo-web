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
                    ${
                      isActive
                        ? " bg-white shadow-xl border border-slate-200 scale-[1.02]"
                        : " hover:bg-slate-100/50"
                    }
                  `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                      p-3 hidden md:block rounded-full transition-all duration-300 shadow-sm
                      ${
                        isActive
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
                        ${
                          isActive
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
                        ${
                          isActive
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
          <div className="relative order-1 max-w-xl w-full mx-auto lg:order-2 h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                className="object-cover w-full h-full"
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Overlay for better text readability if needed in the future */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
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
        "Connect directly with verified buyers and cut out the middlemen. Secure better profits and transparent pricing.",
      image: "/image5.jpg",
    },
    {
      id: 2,
      icon: Link2,
      title: "End-to-End Traceability",
      description:
        "Track your produce's journey using immutable data, ensuring complete transparency and trust from seed to market.",
      image: "/image3.jpg",
    },
    {
      id: 3,
      icon: LayoutDashboard,
      title: "Agronomist Dashboard",
      description:
        "Get real-time insights, field management tools, and expert support right at your fingertips to maximize yield.",
      image: "/image2.jpg",
    },
  ];

  return <AutoScrollFeatures features={featuresData} />;
}
