import type { Metadata } from "next";
import { HydrationCleanup } from "@/components/layout/hydration-cleanup";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FarmicleGrow | Africa's Trusted Agri-Tech Marketplace",
  description: "Connecting smallholder farmers to global markets through radical transparency, verified farm data, and full supply chain traceability.",
  keywords: ["agritech", "traceability", "africa agriculture", "farmer marketplace", "sustainable farming"],
  openGraph: {
    title: "FarmicleGrow | Africa's Trusted Agri-Tech Marketplace",
    description: "Empowering farmers with verified data and market access.",
    url: siteUrl,
    siteName: "FarmicleGrow",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FarmicleGrow | Transparent Agricultural Future",
    description: "Connecting Farmers to Transparent Markets.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <HydrationCleanup />
        {children}
      </body>
    </html>
  );
}
