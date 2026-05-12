import React from 'react';
import { MarketplaceClient } from '@/components/marketplace/marketplace-client';
import { fetchMarketplaceListings } from '@/lib/portal-public';
import { DEMO_PRODUCTS } from '@/lib/demo/marketplace';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/landing/footer';

export default async function MarketplacePage() {
  const portalData = await fetchMarketplaceListings();
  const initialListings = portalData?.listings || [];

  return (
    <main>
      <Navbar />
      <MarketplaceClient 
        initialListings={initialListings} 
        demoProducts={DEMO_PRODUCTS} 
      />
      <Footer />
    </main>
  );
}
