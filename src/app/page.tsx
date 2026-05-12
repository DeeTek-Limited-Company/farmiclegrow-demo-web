'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/ui/hero-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { SolutionSection } from '@/components/landing/solution-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { Features } from '@/components/ui/auto-scroll-features';
import { TrustSection } from '@/components/ui/glassmorphism-trust-hero';
import { ImpactSection } from '@/components/landing/impact-section';
import { TargetUsersSection } from '@/components/landing/target-users-section';
import { MarketplacePreview } from '@/components/landing/marketplace-preview';
import { TraceabilitySection } from '@/components/landing/traceability-section';
import { MissionVisionSection } from '@/components/landing/mission-vision-section';
import { DashboardPreview } from '@/components/landing/dashboard-preview';
import { VerificationTimeline } from '@/components/landing/verification-timeline';
import { CTASection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <div id="challenges" className="relative">
        <ProblemSection />
        {/* Transition to Light Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20" />
      </div>

      {/* Solution Section */}
      <div id="solution">
        <SolutionSection />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Marketplace Preview */}
      <div id="marketplace" className="relative">
        {/* Top Fade for Smooth Entry from Features */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
        <MarketplacePreview />
      </div>

      {/* Traceability Showcase */}
      <div id="traceability">
        <TraceabilitySection />
      </div>

      {/* Verification Timeline */}
      <VerificationTimeline />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Impact & Trust Section */}
      <div id="impact">
        <TrustSection />
      </div>

      <ImpactSection />

      {/* Mission & Vision (About) */}
      <div id="about">
        <MissionVisionSection />
      </div>

      {/* Target Users Section */}
      <TargetUsersSection />

      {/* CTA Section */}
      <div id="contact">
        <CTASection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
