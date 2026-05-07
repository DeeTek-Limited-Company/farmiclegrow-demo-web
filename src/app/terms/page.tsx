import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "Terms of Service | FarmicleGrow",
  description: "FarmicleGrow terms of service for website and portal usage.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">Terms of Service</h1>
            <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
              These terms govern use of the FarmicleGrow website and the portal. They are a placeholder and will be finalized before production launch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-8 text-slate-700">
            <div>
              <h2 className="text-xl font-black text-slate-900">Marketplace browsing</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                Product browsing is public. Buyer actions such as chat, quotes, checkout, and order tracking require an authenticated buyer account.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Acceptable use</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                Users must not attempt to access restricted areas, scrape protected data, or interfere with platform operations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Changes</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                Terms may be updated as the platform evolves. Material changes will be communicated through the website or the portal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

