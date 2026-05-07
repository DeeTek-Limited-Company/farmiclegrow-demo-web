import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "Privacy Policy | FarmicleGrow",
  description: "FarmicleGrow privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Navbar />
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">Privacy Policy</h1>
            <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
              This page outlines how FarmicleGrow collects, uses, and protects information across the public website and the portal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-8 text-slate-700">
            <div>
              <h2 className="text-xl font-black text-slate-900">What we collect</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                We collect information you submit through forms and portal accounts (name, email, organization details), and basic usage data needed to operate the platform.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">How we use it</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                We use information to provide marketplace access, verification workflows, customer support, and to improve platform reliability and security.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Your choices</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed">
                You can request access, correction, or deletion of your data through support channels.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

