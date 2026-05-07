import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/landing/footer";
import { getDemoTrace } from "@/lib/demo/traceability";
import { fetchPublicTrace } from "@/lib/portal-public";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, QrCode, ShieldCheck, Warehouse, Truck, CheckCircle2 } from "lucide-react";

function formatDate(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toISOString().slice(0, 10);
}

function toTraceUI(fromPortal: NonNullable<Awaited<ReturnType<typeof fetchPublicTrace>>>) {
  const t = fromPortal.trace;

  const origin = {
    community: t.origin.community ?? "—",
    district: t.origin.district ?? "—",
    region: t.origin.region ?? "—",
    gps: "—",
    farmer: t.origin.cooperativeName ?? "Verified supplier",
  };

  const events = t.events.map((e, idx) => {
    const type = e.type || "EVENT";
    const date = formatDate(e.at);
    const details = Object.entries(e.details || {}).map(([k, v]) => {
      const val = v === null || v === undefined ? "—" : typeof v === "string" ? v : JSON.stringify(v);
      return `${k}: ${val}`;
    });

    const status =
      type.includes("QUALITY") ? "verified" : type.includes("WAREHOUSE") ? "stored" : type.includes("DISPATCH") ? "in_transit" : type.includes("ARRIVAL") || type.includes("SALE") ? "delivered" : "verified";

    const title =
      type === "BATCH_CREATED"
        ? "Batch created"
        : type === "HARVEST_RECORDED"
          ? "Harvest recorded"
          : type === "QUALITY_TEST"
            ? "Quality test"
            : type === "WAREHOUSE_IN"
              ? "Warehouse check-in"
              : type === "WAREHOUSE_OUT"
                ? "Warehouse check-out"
                : type === "DISPATCH"
                  ? "Dispatched"
                  : type === "ARRIVAL"
                    ? "Arrived"
                    : type === "SALE"
                      ? "Sale recorded"
                      : type;

    const location =
      type.includes("WAREHOUSE") ? "Warehouse" : type.includes("DISPATCH") || type.includes("ARRIVAL") ? "Transport" : type.includes("HARVEST") || type.includes("BATCH") ? "Farm" : "Trace";

    return { id: `${type}-${idx}`, title, date, location, details, status };
  });

  return {
    source: "live" as const,
    code: t.batch.batchId,
    crop: t.batch.crop,
    quantity: `${t.batch.quantity}`,
    grade: t.production.cropVariety ?? "—",
    certifications: ["Traceable", "Portal Connected"],
    origin,
    events,
  };
}

export default async function TracePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const decoded = decodeURIComponent(code);
  const portalTrace = await fetchPublicTrace(decoded);
  const trace = portalTrace ? toTraceUI(portalTrace) : getDemoTrace(decoded);

  if (!trace) notFound();

  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-black tracking-widest uppercase">
                  {portalTrace ? "Public Trace" : "Public Trace Demo"}
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-1.5 text-xs font-black tracking-widest uppercase">
                  {trace.code}
                </Badge>
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                {trace.crop} <span className="text-primary text-glow">Traceability</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
                Verified origin, batch-level quality records, warehousing events, and delivery milestones — all in one timeline.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {trace.certifications.map((c) => (
                  <Badge key={c} variant="secondary" className="rounded-full">
                    {c}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="rounded-3xl border-slate-200 w-full lg:w-[420px]">
              <CardHeader>
                <CardTitle className="text-lg font-black text-slate-900">Batch Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Grade</span>
                  <span className="text-sm font-bold text-slate-900">{trace.grade}</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Quantity</span>
                  <span className="text-sm font-bold text-slate-900">{trace.quantity}</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Origin</span>
                  <span className="text-sm font-bold text-slate-900 text-right">
                    {trace.origin.district}, {trace.origin.region}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">GPS</span>
                  <span className="text-sm font-bold text-slate-900">{trace.origin.gps}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <Card className="rounded-3xl border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg font-black text-slate-900">Verified Origin</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">{trace.origin.community}</div>
                      <div className="text-xs font-bold text-slate-500">
                        {trace.origin.district}, {trace.origin.region}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Farmer</div>
                      <div className="text-xs font-bold text-slate-500">{trace.origin.farmer}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <QrCode className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Batch Code</div>
                      <div className="text-xs font-bold text-slate-500">{trace.code}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Trace Timeline</h2>
                <p className="mt-2 text-sm text-slate-600 font-medium">
                  {portalTrace ? "Live events from the portal system." : "This is demo data. Later, this page will pull live events from the portal system."}
                </p>
              </div>

              <div className="space-y-6">
                {trace.events.map((event) => {
                  const Icon =
                    event.status === "verified"
                      ? ShieldCheck
                      : event.status === "stored"
                        ? Warehouse
                        : event.status === "in_transit"
                          ? Truck
                          : event.status === "delivered"
                            ? CheckCircle2
                            : QrCode;

                  return (
                    <Card key={event.id} className="rounded-3xl border-slate-200">
                      <CardHeader className="gap-3">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg font-black text-slate-900">{event.title}</CardTitle>
                          </div>
                          <Badge variant="outline" className="rounded-full text-xs font-black tracking-widest uppercase">
                            {event.date}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs font-black uppercase tracking-widest text-slate-400">{event.location}</div>
                        <ul className="mt-3 space-y-2">
                          {event.details.map((d) => (
                            <li key={d} className="text-sm font-medium text-slate-700">
                              {d}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

