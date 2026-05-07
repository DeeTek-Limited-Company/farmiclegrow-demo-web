import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/landing/footer";
import { getDemoTraceCodes } from "@/lib/demo/traceability";
import { fetchPublicImpact } from "@/lib/portal-public";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function TraceIndexPage() {
  const codes = getDemoTraceCodes();
  const impact = await fetchPublicImpact();
  const liveCode = impact?.sampleTraceCode ?? null;

  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-black tracking-widest uppercase">
                Public
              </Badge>
              {liveCode ? (
                <Badge variant="outline" className="rounded-full px-4 py-1.5 text-xs font-black tracking-widest uppercase">
                  Live Connected
                </Badge>
              ) : null}
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Trace a Batch
            </h1>
            <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
              Enter a batch code or scan a QR to view traceability. If the portal is running locally, this page will show live events. Otherwise it falls back to demo data.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveCode ? (
              <Link href={`/trace/${encodeURIComponent(liveCode)}`}>
                <Card className="rounded-3xl border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-black text-slate-900">{liveCode}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-600">View live trace</span>
                      <span className="text-sm font-black text-primary">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : null}
            {codes.map((code) => (
              <Link key={code} href={`/trace/${encodeURIComponent(code)}`}>
                <Card className="rounded-3xl border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-black text-slate-900">{code}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-600">View demo trace</span>
                      <span className="text-sm font-black text-primary">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

