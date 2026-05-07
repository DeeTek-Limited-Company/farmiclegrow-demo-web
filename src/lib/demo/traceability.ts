export type TraceEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  details: string[];
  status: "verified" | "recorded" | "stored" | "in_transit" | "delivered";
};

export type TraceBatch = {
  code: string;
  crop: string;
  grade: string;
  quantity: string;
  origin: {
    farmer: string;
    region: string;
    district: string;
    community: string;
    gps: string;
  };
  certifications: string[];
  events: TraceEvent[];
};

const DEMO_TRACES: Record<string, TraceBatch> = {
  "FG-2024-089": {
    code: "FG-2024-089",
    crop: "Cocoa Beans",
    grade: "Export Grade",
    quantity: "2,500 kg",
    origin: {
      farmer: "Ama Mensah",
      region: "Western Region",
      district: "Sefwi Wiawso",
      community: "Aboagyekrom",
      gps: "5.6037° N, 0.1870° W",
    },
    certifications: ["Verified Farm", "Quality Checked", "Traceable Batch"],
    events: [
      {
        id: "farm",
        title: "Farm Origin Verified",
        date: "2024-06-04",
        location: "Aboagyekrom",
        details: ["Farmer identity verified", "GPS plot captured", "Farm profile approved"],
        status: "verified",
      },
      {
        id: "harvest",
        title: "Harvest Recorded",
        date: "2024-07-18",
        location: "Sefwi Wiawso",
        details: ["Harvest date recorded", "Batch created", "Initial grading completed"],
        status: "recorded",
      },
      {
        id: "quality",
        title: "Quality Test Logged",
        date: "2024-07-20",
        location: "Processing Center",
        details: ["Moisture within threshold", "Foreign matter screened", "Batch passed quality check"],
        status: "recorded",
      },
      {
        id: "warehouse",
        title: "Warehouse Entry",
        date: "2024-07-22",
        location: "Warehouse Sector B-12",
        details: ["Stored in controlled conditions", "Inventory updated", "Batch ready for dispatch"],
        status: "stored",
      },
      {
        id: "movement",
        title: "Shipment In Transit",
        date: "2024-07-28",
        location: "Warehouse → Port",
        details: ["Dispatched from warehouse", "Movement log recorded", "ETA confirmed"],
        status: "in_transit",
      },
      {
        id: "delivery",
        title: "Delivered to Buyer",
        date: "2024-08-02",
        location: "Buyer Destination",
        details: ["Quantity received confirmed", "Delivery milestone recorded", "Trace record finalized"],
        status: "delivered",
      },
    ],
  },
};

export function getDemoTrace(code: string) {
  const normalized = code.trim().toUpperCase();
  return DEMO_TRACES[normalized] ?? null;
}

export function getDemoTraceCodes() {
  return Object.keys(DEMO_TRACES);
}
