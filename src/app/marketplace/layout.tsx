import React from 'react';
import { MarketplaceNavbar } from '@/components/marketplace/marketplace-navbar';

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <MarketplaceNavbar />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
}
