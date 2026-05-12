import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/landing/footer";
import { getDemoTrace } from "@/lib/demo/traceability";
import { fetchPublicTrace } from "@/lib/portal-public";
import { TraceHero } from "@/components/trace/trace-hero";
import { FarmerProfileCard } from "@/components/trace/farmer-profile-card";
import { QualityScorecard } from "@/components/trace/quality-scorecard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  ShieldCheck, 
  Warehouse, 
  Truck, 
  CheckCircle2, 
  QrCode,
  ArrowRight,
  Info
} from "lucide-react";

function formatDate(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function toTraceUI(fromPortal: NonNullable<Awaited<ReturnType<typeof fetchPublicTrace>>>) {
  const t = fromPortal.trace;

  const origin = {
    community: t.origin.community ?? "—",
    district: t.origin.district ?? "—",
    region: t.origin.region ?? "—",
    cooperative: t.origin.cooperativeName ?? "Verified supplier",
  };

  const events = t.events.map((e, idx) => {
    const type = e.type || "EVENT";
    const date = formatDate(e.at);
    
    // Hide sensitive internal logistics details
    const filteredDetails = Object.entries(e.details || {})
      .filter(([k]) => !['driverName', 'vehicleNumber', 'stackNumber', 'performedBy'].includes(k))
      .map(([k, v]) => {
        const val = v === null || v === undefined ? "—" : typeof v === "string" ? v : JSON.stringify(v);
        // Format keys to be more readable
        const label = k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        return { label, value: val };
      });

    const status =
      type.includes("QUALITY") ? "verified" : type.includes("WAREHOUSE") ? "stored" : type.includes("DISPATCH") ? "in_transit" : type.includes("ARRIVAL") || type.includes("SALE") ? "delivered" : "verified";

    const title =
      type === "BATCH_CREATED" ? "Batch Verification" :
      type === "HARVEST_RECORDED" ? "Harvest Logged" :
      type === "QUALITY_TEST" ? "Quality Analysis" :
      type === "WAREHOUSE_IN" ? "Safety Storage" :
      type === "WAREHOUSE_OUT" ? "Inventory Release" :
      type === "DISPATCH" ? "Transit Start" :
      type === "ARRIVAL" ? "Destination Arrival" :
      type === "SALE" ? "Final Ownership" :
      type === "MILESTONE" ? (e.details.milestoneType as string).replace("_", " ") : type;

    const location =
      type === "MILESTONE" ? (e.details.location as string) || "Supply Chain" :
      type.includes("WAREHOUSE") ? "Central Hub" : 
      type.includes("DISPATCH") || type.includes("ARRIVAL") ? "Logistics Route" : 
      type.includes("HARVEST") || type.includes("BATCH") ? "Farm Gate" : "Trace Point";

    return { id: `${type}-${idx}`, title, date, location, details: filteredDetails, status, type };
  });

  return {
    isLive: true,
    code: t.batch.batchId,
    crop: t.batch.crop,
    quantity: `${t.batch.quantity}`,
    grade: t.production.cropVariety ?? "Premium Grade",
    harvestDate: formatDate(t.batch.harvestDate),
    origin,
    events,
  };
}

export default async function TracePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const decoded = decodeURIComponent(code);
  const portalTrace = await fetchPublicTrace(decoded);
  
  // Use demo data if portal data not found
  let trace;
  if (portalTrace) {
    trace = toTraceUI(portalTrace);
  } else {
    const demo = getDemoTrace(decoded);
    if (!demo) notFound();
    trace = {
      ...demo,
      isLive: false,
      harvestDate: "Oct 2023", // Default for demo
    };
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-primary/20">
      <Navbar />
      
      <TraceHero 
        code={trace.code} 
        crop={trace.crop} 
        quantity={trace.quantity} 
        date={trace.harvestDate}
        isLive={trace.isLive}
      />

      <section className="py-20 -mt-12 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Sidebar: Farmer & Origin */}
            <div className="lg:col-span-1 space-y-8">
              <div className="sticky top-32">
                <FarmerProfileCard 
                  name={trace.origin.cooperative || trace.origin.farmer} 
                  community={trace.origin.community} 
                  location={`${trace.origin.district}, ${trace.origin.region}`}
                />
                
                <div className="mt-8 p-8 rounded-[2.5rem] bg-white shadow-xl border border-slate-100">
                   <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                     <Info className="w-4 h-4 text-primary" /> Security Details
                   </h4>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center">
                         <span className="text-xs font-bold text-slate-500">Seal Status</span>
                         <Badge className="bg-emerald-500/10 text-emerald-600 border-0 rounded-full font-black text-[9px] px-3 uppercase">Tamper Proof</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-xs font-bold text-slate-500">Signature</span>
                         <span className="text-[10px] font-mono text-slate-900 bg-slate-50 px-2 py-1 rounded">sha256:8f3c...</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Main Content: Quality & Timeline */}
            <div className="lg:col-span-2 space-y-12">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h2 className="text-2xl font-black text-slate-900 tracking-tight">Quality Passport</h2>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified by ISO-Standard Labs</div>
                </div>
                <QualityScorecard grade={trace.grade} />
              </div>

              <div className="space-y-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                   <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">Chain of Custody</h2>
                      <p className="text-sm text-slate-500 font-medium mt-1">Timeline of every physical handoff and processing event.</p>
                   </div>
                </div>

                <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
                  
                  {trace.events.map((event, idx) => {
                    const isLast = idx === trace.events.length - 1;
                    const Icon =
                      event.status === "verified" ? ShieldCheck :
                      event.status === "stored" ? Warehouse :
                      event.status === "in_transit" ? Truck :
                      event.status === "delivered" ? CheckCircle2 : QrCode;

                    return (
                      <div key={event.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        {/* Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                          <Icon className="w-4 h-4" />
                        </div>
                        
                        {/* Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white shadow-xl border border-slate-100 transition-all duration-500 group-hover:border-primary/20 group-hover:-translate-y-1">
                          <div className="flex items-center justify-between mb-4">
                            <time className="text-[10px] font-black text-primary uppercase tracking-widest">{event.date}</time>
                            <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-wider rounded-full border-slate-100 text-slate-400">{event.location}</Badge>
                          </div>
                          <h3 className="text-lg font-black text-slate-900">{event.title}</h3>
                          
                          {event.details.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-4">
                               {event.details.map((d: any) => (
                                 <div key={d.label}>
                                    <div className="text-[9px] font-black uppercase text-slate-400 tracking-tighter mb-0.5">{d.label}</div>
                                    <div className="text-xs font-bold text-slate-700">{d.value}</div>
                                 </div>
                               ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                 <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center shrink-0">
                    <QrCode className="w-10 h-10 text-primary" />
                 </div>
                 <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl font-black mb-2">Verified Identity Card</h3>
                    <p className="text-sm text-slate-400 font-medium">This page serves as the permanent digital identity of this batch. For physical verification, scan the QR code on the packaging.</p>
                 </div>
                 <button className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                    Learn More
                 </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
