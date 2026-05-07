import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "Security | FarmicleGrow",
  description: "FarmicleGrow security overview and trust practices.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">Security</h1>
            <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
              FarmicleGrow is built with role-based access control, auditability, and secure-by-default platform practices. This page summarizes the approach.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-8 text-slate-700">
            <div>
              <h2 className="text-xl font-black text-slate-900">Access control</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                The portal enforces role-based access for farmers, agronomists, operations, and admins, ensuring users only access what they are authorized to see.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Auditability</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                Validation and approval decisions are recorded to support traceable operational workflows.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Reporting</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                If you discover a vulnerability, contact support and include steps to reproduce. We prioritize security fixes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

