import "server-only";

export type PublicImpactResponse = {
  kpis: {
    farmers: number;
    batches: number;
    regions: number;
    communities: number;
    salesCount: number;
    quantitySold: number;
    totalValue: number;
  };
  sampleTraceCode: string | null;
};

export type PublicTraceResponse = {
  trace: {
    code: string;
    batch: {
      batchId: string;
      crop: string;
      harvestDate: string;
      quantity: number;
      qrCode: string | null;
    };
    origin: {
      cooperativeName: string | null;
      community: string | null;
      district: string | null;
      region: string | null;
    };
    production: {
      season: string;
      cropType: string;
      cropVariety: string | null;
      farmingMethod: string | null;
    };
    events: Array<{
      type: string;
      at: string;
      details: Record<string, unknown>;
    }>;
  };
};

function getPortalBaseUrl() {
  return process.env.NEXT_PUBLIC_PORTAL_URL || "http://localhost:3001";
}

export async function fetchPublicImpact(): Promise<PublicImpactResponse | null> {
  const base = getPortalBaseUrl();
  const url = `${base.replace(/\/$/, "")}/api/public/impact`;

  const res = await fetch(url, { next: { revalidate: 60 } }).catch(() => null);
  if (!res || !res.ok) return null;
  return (await res.json().catch(() => null)) as PublicImpactResponse | null;
}

export async function fetchPublicTrace(code: string): Promise<PublicTraceResponse | null> {
  const base = getPortalBaseUrl();
  const url = `${base.replace(/\/$/, "")}/api/public/trace/${encodeURIComponent(code)}`;

  const res = await fetch(url, { next: { revalidate: 60 } }).catch(() => null);
  if (!res || !res.ok) return null;
  return (await res.json().catch(() => null)) as PublicTraceResponse | null;
}

