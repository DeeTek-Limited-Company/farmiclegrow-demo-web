import Link from "next/link";
import { notFound } from "next/navigation";
import { getDemoProduct } from "@/lib/demo/marketplace";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, QrCode, ShieldCheck } from "lucide-react";

export default async function MarketplaceProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getDemoProduct(decodeURIComponent(id));

  if (!product) notFound();

  const traceHref = product.batchCode ? `/trace/${encodeURIComponent(product.batchCode)}` : "/trace";

  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <section className="pt-12 md:pt-16 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="secondary" className="rounded-full">
                  Marketplace
                </Badge>
                <Badge variant="outline" className="rounded-full text-xs font-black tracking-widest uppercase">
                  {product.category}
                </Badge>
              </div>
              <Link href="/marketplace" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                ← Back to Marketplace
              </Link>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {product.name}
            </h1>
            <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
              {product.description || "Verified product listing with traceability and compliance-ready documentation."}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full">
                  {t}
                </Badge>
              ))}
              {(product.certifications || []).map((c) => (
                <Badge key={c} variant="outline" className="rounded-full">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Card className="rounded-3xl border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-black text-slate-900">Listing Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Origin</div>
                      <div className="text-xs font-bold text-slate-500">{product.origin}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Traceability Score</div>
                      <div className="text-xs font-bold text-slate-500">{product.traceScore}%</div>
                    </div>
                  </div>
                  {product.grade ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Grade</span>
                      <span className="text-sm font-bold text-slate-900">{product.grade}</span>
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Price</span>
                    <span className="text-sm font-bold text-slate-900">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">MOQ</span>
                    <span className="text-sm font-bold text-slate-900">{product.moq}</span>
                  </div>
                  {product.packaging ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Packaging</span>
                      <span className="text-sm font-bold text-slate-900">{product.packaging}</span>
                    </div>
                  ) : null}
                  {product.availability ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Availability</span>
                      <span className="text-sm font-bold text-slate-900">{product.availability}</span>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="rounded-3xl border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-black text-slate-900">Buyer Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full rounded-2xl h-12 font-black bg-primary hover:bg-primary/90">
                    <Link href="/login">Login to Buy / Chat</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-2xl h-12 font-black border-2">
                    <Link href="/signup">Create Buyer Account</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-2xl h-12 font-black border-2">
                    <Link href={traceHref} className="flex items-center justify-center gap-2">
                      <QrCode className="w-4 h-4" /> View Trace
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

